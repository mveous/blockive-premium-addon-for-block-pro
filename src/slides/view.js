/**
 * Slides block: a dependency-free slider following the WAI-ARIA carousel
 * pattern - arrows, dots, a pause button, keyboard arrows, touch swipe,
 * autoplay that pauses on hover / focus / hidden tab, and no autoplay for
 * visitors who prefer reduced motion.
 */
const reducedMotion = window.matchMedia( '(prefers-reduced-motion: reduce)' );

function initSlides( root ) {
	if ( root.dataset.bpafbReady ) {
		return;
	}
	const slides = [ ...root.querySelectorAll( '.bpafb-slides__slide' ) ];
	if ( slides.length < 2 ) {
		return;
	}
	root.dataset.bpafbReady = '1';

	const track = root.querySelector( '.bpafb-slides__track' );
	const dots = [ ...root.querySelectorAll( '.bpafb-slides__dot' ) ];
	const prev = root.querySelector( '.bpafb-slides__arrow--prev' );
	const next = root.querySelector( '.bpafb-slides__arrow--next' );
	const pauseBtn = root.querySelector( '.bpafb-slides__pause' );
	const loop = root.dataset.loop === '1';
	const interval = parseInt( root.dataset.interval, 10 ) || 5000;
	const isSlide = root.classList.contains( 'bpafb-slides--slide' );

	let index = 0;
	let timer = null;
	let userPaused = reducedMotion.matches;
	let hoverPaused = false;
	let focusPaused = false;
	const autoplay = root.dataset.autoplay === '1';

	function goTo( target ) {
		const last = slides.length - 1;
		let n = target;
		if ( n < 0 ) {
			n = loop ? last : 0;
		} else if ( n > last ) {
			n = loop ? 0 : last;
		}
		index = n;

		slides.forEach( ( slide, i ) => {
			const active = i === index;
			slide.classList.toggle( 'is-active', active );
			slide.toggleAttribute( 'inert', ! active );
			slide.setAttribute( 'aria-hidden', active ? 'false' : 'true' );
		} );
		dots.forEach( ( dot, i ) => {
			dot.classList.toggle( 'is-active', i === index );
			if ( i === index ) {
				dot.setAttribute( 'aria-current', 'true' );
			} else {
				dot.removeAttribute( 'aria-current' );
			}
		} );
		if ( isSlide ) {
			track.style.transform = `translateX(${ -100 * index }%)`;
		}
		if ( prev ) {
			prev.disabled = ! loop && index === 0;
		}
		if ( next ) {
			next.disabled = ! loop && index === last;
		}
	}

	function schedule() {
		window.clearTimeout( timer );
		timer = null;
		if ( ! autoplay || userPaused || hoverPaused || focusPaused || document.hidden ) {
			return;
		}
		timer = window.setTimeout( () => {
			if ( ! loop && index === slides.length - 1 ) {
				return;
			}
			goTo( index + 1 );
			schedule();
		}, interval );
	}

	function updatePauseButton() {
		if ( ! pauseBtn ) {
			return;
		}
		pauseBtn.setAttribute( 'aria-label', userPaused ? pauseBtn.dataset.labelPlay : pauseBtn.dataset.labelPause );
		const icon = pauseBtn.querySelector( 'i' );
		if ( icon ) {
			icon.className = userPaused ? 'fa-solid fa-play' : 'fa-solid fa-pause';
		}
	}

	const step = ( delta ) => {
		goTo( index + delta );
		schedule();
	};

	if ( prev ) {
		prev.addEventListener( 'click', () => step( -1 ) );
	}
	if ( next ) {
		next.addEventListener( 'click', () => step( 1 ) );
	}
	dots.forEach( ( dot, i ) =>
		dot.addEventListener( 'click', () => {
			goTo( i );
			schedule();
		} )
	);

	if ( pauseBtn ) {
		pauseBtn.addEventListener( 'click', () => {
			userPaused = ! userPaused;
			updatePauseButton();
			schedule();
		} );
	}

	if ( root.dataset.pauseHover === '1' ) {
		root.addEventListener( 'mouseenter', () => {
			hoverPaused = true;
			schedule();
		} );
		root.addEventListener( 'mouseleave', () => {
			hoverPaused = false;
			schedule();
		} );
	}

	// Autoplay must stop while a keyboard user is inside the carousel.
	root.addEventListener( 'focusin', () => {
		focusPaused = true;
		schedule();
	} );
	root.addEventListener( 'focusout', ( event ) => {
		if ( ! root.contains( event.relatedTarget ) ) {
			focusPaused = false;
			schedule();
		}
	} );
	document.addEventListener( 'visibilitychange', schedule );

	root.addEventListener( 'keydown', ( event ) => {
		if ( event.target.closest( 'input, textarea, select' ) ) {
			return;
		}
		if ( event.key === 'ArrowLeft' ) {
			step( document.dir === 'rtl' ? 1 : -1 );
		} else if ( event.key === 'ArrowRight' ) {
			step( document.dir === 'rtl' ? -1 : 1 );
		}
	} );

	// Touch / pen swipe.
	let startX = null;
	let startY = null;
	root.addEventListener(
		'pointerdown',
		( event ) => {
			if ( event.pointerType === 'mouse' ) {
				return;
			}
			startX = event.clientX;
			startY = event.clientY;
		},
		{ passive: true }
	);
	root.addEventListener(
		'pointerup',
		( event ) => {
			if ( startX === null ) {
				return;
			}
			const dx = event.clientX - startX;
			const dy = event.clientY - startY;
			startX = null;
			if ( Math.abs( dx ) > 50 && Math.abs( dx ) > Math.abs( dy ) ) {
				step( dx < 0 ? 1 : -1 );
			}
		},
		{ passive: true }
	);

	updatePauseButton();
	goTo( 0 );
	schedule();
}

function init() {
	document.querySelectorAll( '.bpafb-slides' ).forEach( initSlides );
}

if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', init );
} else {
	init();
}
