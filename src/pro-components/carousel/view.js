/**
 * Shared engine for the multi-slide carousels (Media Carousel, Testimonial
 * Carousel, Reviews). Layout is pure CSS: slides per view come from
 * responsive CSS variables and the track is moved by
 * `--bpafb-carousel-index` (see style.css), so this only keeps the index,
 * the controls, and the accessibility state in sync. Follows the WAI-ARIA
 * carousel pattern like the Slides block: arrows, dots, a pause button,
 * keyboard arrows, touch swipe, and autoplay that pauses on hover / focus /
 * hidden tab and never starts for visitors who prefer reduced motion.
 *
 * Markup comes from Bpafb_Pro_Carousel (PHP).
 */
const reducedMotion = window.matchMedia( '(prefers-reduced-motion: reduce)' );

/**
 * @param {HTMLElement} root              The `.bpafb-carousel` element.
 * @param {Object}      options
 * @param {Function}    [options.onChange] Called with the new index after every move.
 * @return {{ goTo: Function, getIndex: Function }|null} Null when already initialised.
 */
export function initCarousel( root, { onChange } = {} ) {
	if ( root.dataset.bpafbReady ) {
		return null;
	}
	// Only this carousel's own parts, not those of a carousel nested in a
	// slide (e.g. a Media Carousel inside a Loop Carousel card).
	const own = ( selector ) => [ ...root.querySelectorAll( selector ) ].filter( ( node ) => node.closest( '.bpafb-carousel' ) === root );
	const mine = ( event ) => event.target.closest( '.bpafb-carousel' ) === root;

	const track = own( '.bpafb-carousel__track' )[ 0 ];
	if ( ! track ) {
		return null;
	}
	root.dataset.bpafbReady = '1';

	const slides = [ ...track.children ];
	const viewport = own( '.bpafb-carousel__viewport' )[ 0 ];
	const dots = own( '.bpafb-carousel__dot' );
	const prev = own( '.bpafb-carousel__arrow--prev' )[ 0 ];
	const next = own( '.bpafb-carousel__arrow--next' )[ 0 ];
	const pauseBtn = own( '.bpafb-carousel__pause' )[ 0 ];
	const loop = root.dataset.loop === '1';
	const interval = parseInt( root.dataset.interval, 10 ) || 5000;
	const centered = root.classList.contains( 'bpafb-carousel--centered' );
	const autoplay = root.dataset.autoplay === '1';

	let index = 0;
	let timer = null;
	let userPaused = reducedMotion.matches;
	let hoverPaused = false;
	let focusPaused = false;

	// Slides per view for the current breakpoint, as resolved by the CSS.
	const cols = () => {
		const n = parseInt( window.getComputedStyle( root ).getPropertyValue( '--bpafb-carousel-cols' ), 10 );
		return Math.max( 1, Math.min( slides.length, n || 1 ) );
	};
	const maxIndex = () => ( centered ? slides.length - 1 : Math.max( 0, slides.length - cols() ) );

	function goTo( target, silent ) {
		const last = maxIndex();
		const perView = cols();
		let n = target;
		if ( n < 0 ) {
			n = loop ? last : 0;
		} else if ( n > last ) {
			n = loop ? 0 : last;
		}
		index = n;
		root.style.setProperty( '--bpafb-carousel-index', String( index ) );
		root.classList.toggle( 'is-static', last === 0 );

		// Only the slides in view are reachable; the rest are inert so
		// keyboard and screen reader users never land on a hidden slide.
		const before = centered ? Math.floor( ( perView - 1 ) / 2 ) : 0;
		const after = centered ? before : perView - 1;
		slides.forEach( ( slide, i ) => {
			const visible = i >= index - before && i <= index + after;
			slide.toggleAttribute( 'inert', ! visible );
			slide.setAttribute( 'aria-hidden', visible ? 'false' : 'true' );
			slide.classList.toggle( 'is-current', i === index );
			slide.classList.toggle( 'is-before', i < index );
			slide.classList.toggle( 'is-after', i > index );
		} );
		dots.forEach( ( dot, i ) => {
			dot.hidden = i > last;
			dot.classList.toggle( 'is-active', i === index );
			if ( i === index ) {
				dot.setAttribute( 'aria-current', 'true' );
			} else {
				dot.removeAttribute( 'aria-current' );
			}
		} );
		if ( prev ) {
			prev.disabled = ! loop && index === 0;
		}
		if ( next ) {
			next.disabled = ! loop && index === last;
		}
		if ( ! silent && onChange ) {
			onChange( index );
		}
	}

	function schedule() {
		window.clearTimeout( timer );
		timer = null;
		if ( ! autoplay || userPaused || hoverPaused || focusPaused || document.hidden || maxIndex() === 0 ) {
			return;
		}
		timer = window.setTimeout( () => {
			if ( ! loop && index === maxIndex() ) {
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
		// Announce slide changes only while nothing moves on its own.
		track.setAttribute( 'aria-live', autoplay && ! userPaused ? 'off' : 'polite' );
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

	// A click on a partly visible (inert) slide - e.g. a side slide in
	// the coverflow skin - brings it into view. Inert slides are skipped
	// by hit testing, so the click lands on the viewport itself.
	viewport.addEventListener( 'click', ( event ) => {
		if ( event.target.closest( '.bpafb-carousel__slide' ) ) {
			return;
		}
		const hit = slides.findIndex( ( slide ) => {
			const rect = slide.getBoundingClientRect();
			return event.clientX >= rect.left && event.clientX <= rect.right;
		} );
		if ( hit !== -1 ) {
			goTo( centered ? hit : Math.min( hit, maxIndex() ) );
			schedule();
		}
	} );

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
		if ( ! mine( event ) || event.target.closest( 'input, textarea, select' ) ) {
			return;
		}
		const rtl = window.getComputedStyle( root ).direction === 'rtl';
		if ( event.key === 'ArrowLeft' ) {
			step( rtl ? 1 : -1 );
		} else if ( event.key === 'ArrowRight' ) {
			step( rtl ? -1 : 1 );
		}
	} );

	// Touch / pen swipe.
	let startX = null;
	let startY = null;
	viewport.addEventListener(
		'pointerdown',
		( event ) => {
			if ( event.pointerType === 'mouse' || ! mine( event ) ) {
				return;
			}
			startX = event.clientX;
			startY = event.clientY;
		},
		{ passive: true }
	);
	viewport.addEventListener(
		'pointerup',
		( event ) => {
			if ( startX === null ) {
				return;
			}
			const dx = event.clientX - startX;
			const dy = event.clientY - startY;
			startX = null;
			if ( Math.abs( dx ) > 50 && Math.abs( dx ) > Math.abs( dy ) ) {
				const rtl = window.getComputedStyle( root ).direction === 'rtl';
				step( ( dx < 0 ) !== rtl ? 1 : -1 );
			}
		},
		{ passive: true }
	);

	// Slides per view change with the breakpoint: re-clamp the index.
	if ( 'ResizeObserver' in window ) {
		let lastCols = cols();
		new window.ResizeObserver( () => {
			const now = cols();
			if ( now !== lastCols ) {
				lastCols = now;
				goTo( index, true );
				schedule();
			}
		} ).observe( root );
	}

	updatePauseButton();
	goTo( 0, true );
	root.classList.add( 'is-ready' );
	schedule();

	return {
		goTo: ( i ) => {
			goTo( i );
			schedule();
		},
		getIndex: () => index,
	};
}

/**
 * Runs `callback` once the DOM is ready.
 *
 * @param {Function} callback
 */
export function onReady( callback ) {
	if ( document.readyState === 'loading' ) {
		document.addEventListener( 'DOMContentLoaded', callback );
	} else {
		callback();
	}
}
