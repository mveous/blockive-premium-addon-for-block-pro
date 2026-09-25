/**
 * Animated Headline: draws the highlight shape, or rotates the words, once
 * the headline scrolls into view. Looping pauses while the pointer is over
 * the headline, and nothing moves for visitors who prefer reduced motion
 * (the drawn shape and the first word simply show). The sentence is also in
 * the markup as plain text for screen readers.
 */
const reducedMotion = window.matchMedia( '(prefers-reduced-motion: reduce)' );
const wait = ( ms ) => new Promise( ( resolve ) => window.setTimeout( resolve, ms ) );

function createPauser( root ) {
	let paused = false;
	let resume = null;
	root.addEventListener( 'mouseenter', () => {
		paused = true;
	} );
	root.addEventListener( 'mouseleave', () => {
		paused = false;
		if ( resume ) {
			resume();
			resume = null;
		}
	} );
	// Resolves at once, or when the pointer leaves the headline.
	return () =>
		paused
			? new Promise( ( resolve ) => {
					resume = resolve;
			  } )
			: Promise.resolve();
}

async function runHighlight( root, { duration, delay, loop, whenUnpaused } ) {
	const paths = root.querySelectorAll( '.bpafb-ah__shape path' ).length;
	const drawTime = paths > 1 ? duration * 1.6 : duration;
	for (;;) {
		root.classList.add( 'is-drawn' );
		if ( ! loop ) {
			return;
		}
		await wait( drawTime + delay );
		await whenUnpaused();
		root.classList.add( 'is-fading' );
		await wait( 450 );
		root.classList.remove( 'is-drawn', 'is-fading' );
		// Let the browser drop the finished animation before restarting it.
		await wait( 50 );
	}
}

async function runRotate( root, { delay, loop, whenUnpaused } ) {
	const box = root.querySelector( '.bpafb-ah__words' );
	const words = [ ...root.querySelectorAll( '.bpafb-ah__word' ) ];
	if ( ! box || words.length < 2 ) {
		return;
	}
	const texts = words.map( ( word ) => word.textContent );
	const type = [ ...root.classList ].find( ( c ) => c.startsWith( 'bpafb-ah--anim-' ) )?.slice( 15 ) || 'typing';
	const fitTo = ( word ) => {
		box.style.width = `${ word.offsetWidth }px`;
	};

	let index = 0;
	fitTo( words[ 0 ] );

	for (;;) {
		await wait( delay );
		await whenUnpaused();
		if ( ! loop && index === words.length - 1 ) {
			return;
		}
		const current = words[ index ];
		index = ( index + 1 ) % words.length;
		const next = words[ index ];

		if ( type === 'typing' ) {
			root.classList.add( 'is-selected' );
			await wait( 500 );
			root.classList.remove( 'is-selected' );
			current.classList.remove( 'is-active' );
			next.textContent = '';
			next.classList.add( 'is-active' );
			for ( const char of texts[ index ] ) {
				next.textContent += char;
				fitTo( next );
				await wait( 90 );
			}
		} else if ( type === 'clip' ) {
			const steps = 12;
			const from = box.offsetWidth;
			for ( let i = 1; i <= steps; i++ ) {
				box.style.width = `${ Math.round( from * ( 1 - i / steps ) ) + 2 }px`;
				await wait( 25 );
			}
			current.classList.remove( 'is-active' );
			next.classList.add( 'is-active' );
			const to = next.offsetWidth;
			for ( let i = 1; i <= steps; i++ ) {
				box.style.width = `${ Math.round( ( to * i ) / steps ) + 2 }px`;
				await wait( 25 );
			}
		} else {
			current.classList.remove( 'is-active' );
			current.classList.add( 'is-leaving' );
			next.classList.add( 'is-active' );
			fitTo( next );
			await wait( 600 );
			current.classList.remove( 'is-leaving' );
		}
	}
}

function initHeadline( root ) {
	if ( root.dataset.bpafbReady ) {
		return;
	}
	root.dataset.bpafbReady = '1';
	if ( reducedMotion.matches ) {
		return; // Stays in its static, readable state.
	}
	root.classList.add( 'is-ready' );

	const options = {
		duration: parseInt( root.dataset.duration, 10 ) || 1200,
		delay: parseInt( root.dataset.delay, 10 ) || 2500,
		loop: root.classList.contains( 'bpafb-ah--loop' ),
		whenUnpaused: createPauser( root ),
	};
	const run = root.classList.contains( 'bpafb-ah--rotate' ) ? runRotate : runHighlight;

	if ( ! ( 'IntersectionObserver' in window ) ) {
		run( root, options );
		return;
	}
	const observer = new window.IntersectionObserver(
		( entries ) => {
			if ( entries.some( ( entry ) => entry.isIntersecting ) ) {
				observer.disconnect();
				run( root, options );
			}
		},
		{ threshold: 0.5 }
	);
	observer.observe( root );
}

function init() {
	document.querySelectorAll( '.bpafb-ah' ).forEach( initHeadline );
}

if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', init );
} else {
	init();
}
