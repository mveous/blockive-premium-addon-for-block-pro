/**
 * Scrolling & Mouse Effects (Bpafb_Pro_Motion). Each [data-bpafb-motion]
 * element gets transform / opacity / filter from where it is in the window
 * (scrolling effects) and where the mouse is (mouse track, 3D tilt).
 * Only elements on screen are updated, at most once per frame, and nothing
 * moves for visitors who ask for reduced motion.
 */

const reduceMotion = window.matchMedia( '(prefers-reduced-motion: reduce)' );

const clamp = ( value, min = 0, max = 1 ) => Math.min( max, Math.max( min, value ) );

/**
 * 0..1 for "in"/"out"/"in-out"/"out-in" shapes: how visible (fade) or how
 * sharp (blur) the element is at progress p.
 *
 * @param {string} direction Shape.
 * @param {number} p         Progress 0..1.
 * @return {number}
 */
function shape( direction, p ) {
	switch ( direction ) {
		case 'out':
			return 1 - p;
		case 'in-out':
			return 1 - Math.abs( 2 * p - 1 );
		case 'out-in':
			return Math.abs( 2 * p - 1 );
		default:
			return p;
	}
}

function currentDevice() {
	const width = window.innerWidth;
	if ( width >= 1025 ) {
		return 'desktop';
	}
	return width >= 768 ? 'tablet' : 'mobile';
}

function createItem( el ) {
	let settings;
	try {
		settings = JSON.parse( el.dataset.bpafbMotion );
	} catch ( e ) {
		return null;
	}
	if ( ! settings || ! settings.effects ) {
		return null;
	}
	return {
		el,
		effects: settings.effects,
		range: settings.range || [ 0, 100 ],
		devices: settings.devices || [ 'desktop', 'tablet', 'mobile' ],
		visible: false,
		mouse: { x: 0, y: 0 },
		tilt: { x: 0, y: 0 },
	};
}

/**
 * Where the element is on its way through the window, 0 (just below it)
 * to 1 (just above it), mapped into the chosen range.
 *
 * @param {Object} item Motion item.
 * @return {number}
 */
function progress( item ) {
	const rect = item.el.getBoundingClientRect();
	const height = window.innerHeight;
	const raw = ( height - rect.top ) / ( height + rect.height );
	const [ start, end ] = item.range;
	return clamp( ( raw * 100 - start ) / ( end - start ) );
}

function reset( item ) {
	const style = item.el.style;
	style.removeProperty( 'transform' );
	style.removeProperty( 'opacity' );
	style.removeProperty( 'filter' );
	style.removeProperty( 'will-change' );
}

function render( item ) {
	const e = item.effects;
	const p = progress( item );
	const parts = [];
	let x = 0;
	let y = 0;

	if ( e.tilt ) {
		const sign = e.tilt[ 0 ] === 'opposite' ? -1 : 1;
		const max = e.tilt[ 1 ] * 2.5;
		parts.push( `perspective(800px) rotateX(${ ( -item.tilt.y * max * sign ).toFixed( 2 ) }deg) rotateY(${ ( item.tilt.x * max * sign ).toFixed( 2 ) }deg)` );
	}
	if ( e.y ) {
		y += ( p - 0.5 ) * e.y[ 1 ] * 40 * ( e.y[ 0 ] === 'up' ? -1 : 1 );
	}
	if ( e.x ) {
		x += ( p - 0.5 ) * e.x[ 1 ] * 40 * ( e.x[ 0 ] === 'left' ? -1 : 1 );
	}
	if ( e.mouse ) {
		const sign = e.mouse[ 0 ] === 'opposite' ? -1 : 1;
		x += item.mouse.x * e.mouse[ 1 ] * 6 * sign;
		y += item.mouse.y * e.mouse[ 1 ] * 6 * sign;
	}
	if ( x || y ) {
		parts.push( `translate3d(${ x.toFixed( 2 ) }px, ${ y.toFixed( 2 ) }px, 0)` );
	}
	if ( e.rotate ) {
		parts.push( `rotate(${ ( ( p - 0.5 ) * e.rotate[ 1 ] * 9 * ( e.rotate[ 0 ] === 'left' ? -1 : 1 ) ).toFixed( 2 ) }deg)` );
	}
	if ( e.scale ) {
		const f = e.scale[ 1 ] / 10;
		let s = 1;
		switch ( e.scale[ 0 ] ) {
			case 'up':
				s = 1 - f * 0.5 + p * f * 0.5;
				break;
			case 'down':
				s = 1 - p * f * 0.5;
				break;
			case 'up-down':
				s = 1 - f * 0.5 + shape( 'in-out', p ) * f * 0.5;
				break;
			case 'down-up':
				s = 1 - f * 0.5 + shape( 'out-in', p ) * f * 0.5;
				break;
		}
		parts.push( `scale(${ s.toFixed( 3 ) })` );
	}

	const style = item.el.style;
	style.willChange = 'transform';
	style.transform = parts.join( ' ' );
	if ( e.fade ) {
		const min = 1 - e.fade[ 1 ] / 10;
		style.opacity = ( min + ( 1 - min ) * shape( e.fade[ 0 ], p ) ).toFixed( 3 );
	}
	if ( e.blur ) {
		style.filter = `blur(${ ( e.blur[ 1 ] * ( 1 - shape( e.blur[ 0 ], p ) ) ).toFixed( 2 ) }px)`;
	}
}

function init() {
	const items = Array.from( document.querySelectorAll( '[data-bpafb-motion]' ) ).map( createItem ).filter( Boolean );
	if ( ! items.length ) {
		return;
	}

	let frame = 0;
	const active = () => ! reduceMotion.matches;
	const allowed = ( item ) => active() && item.devices.includes( currentDevice() );

	const update = () => {
		frame = 0;
		items.forEach( ( item ) => {
			if ( ! allowed( item ) ) {
				reset( item );
			} else if ( item.visible ) {
				render( item );
			}
		} );
	};
	const schedule = () => {
		if ( ! frame ) {
			frame = window.requestAnimationFrame( update );
		}
	};

	// Only elements near the window are updated.
	const observer = new IntersectionObserver(
		( entries ) => {
			entries.forEach( ( entry ) => {
				const item = items.find( ( candidate ) => candidate.el === entry.target );
				if ( item ) {
					item.visible = entry.isIntersecting;
				}
			} );
			schedule();
		},
		{ rootMargin: '100px 0px' }
	);
	items.forEach( ( item ) => observer.observe( item.el ) );

	window.addEventListener( 'scroll', schedule, { passive: true } );
	window.addEventListener( 'resize', schedule, { passive: true } );
	reduceMotion.addEventListener?.( 'change', schedule );

	// Mouse track: relative to the middle of the window.
	if ( items.some( ( item ) => item.effects.mouse ) ) {
		window.addEventListener(
			'mousemove',
			( event ) => {
				const mx = clamp( ( event.clientX / window.innerWidth ) * 2 - 1, -1, 1 );
				const my = clamp( ( event.clientY / window.innerHeight ) * 2 - 1, -1, 1 );
				items.forEach( ( item ) => {
					if ( item.effects.mouse ) {
						item.mouse = { x: mx, y: my };
					}
				} );
				schedule();
			},
			{ passive: true }
		);
	}

	// 3D tilt: relative to the element, back to flat when the mouse leaves.
	items
		.filter( ( item ) => item.effects.tilt )
		.forEach( ( item ) => {
			item.el.addEventListener( 'mousemove', ( event ) => {
				const rect = item.el.getBoundingClientRect();
				item.tilt = {
					x: clamp( ( event.clientX - rect.left ) / rect.width, 0, 1 ) * 2 - 1,
					y: clamp( ( event.clientY - rect.top ) / rect.height, 0, 1 ) * 2 - 1,
				};
				schedule();
			} );
			item.el.addEventListener( 'mouseleave', () => {
				item.tilt = { x: 0, y: 0 };
				schedule();
			} );
		} );

	schedule();
}

if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', init );
} else {
	init();
}
