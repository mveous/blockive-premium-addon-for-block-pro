/**
 * Sticky Header (Bpafb_Pro_Sticky): adds `is-scrolled` to the sticky
 * Header template once the page has scrolled past the scrolled offset, and
 * for "show on scroll up" adds `is-hidden` while scrolling down. Nothing
 * happens on devices where the header is not sticky.
 */
import './style.css';

// Ignore tiny scroll changes (trackpad jitter) when deciding direction.
const THRESHOLD = 6;

function init() {
	const header = document.querySelector( '.bpafb-pro-header.bpafb-sticky' );
	if ( ! header ) {
		return;
	}
	const offset = Math.max( 0, parseInt( header.dataset.scrolledOffset, 10 ) || 0 );
	const hideOnDown = header.dataset.behavior === 'scroll-up';
	let lastY = window.scrollY;
	let ticking = false;

	const update = () => {
		ticking = false;
		const y = window.scrollY;
		if ( window.getComputedStyle( header ).position !== 'sticky' ) {
			header.classList.remove( 'is-scrolled', 'is-hidden' );
			lastY = y;
			return;
		}
		header.classList.toggle( 'is-scrolled', y > offset );
		if ( hideOnDown ) {
			if ( y <= header.offsetHeight ) {
				header.classList.remove( 'is-hidden' );
			} else if ( y > lastY + THRESHOLD ) {
				header.classList.add( 'is-hidden' );
			} else if ( y < lastY - THRESHOLD ) {
				header.classList.remove( 'is-hidden' );
			}
		}
		if ( Math.abs( y - lastY ) > THRESHOLD || y <= offset ) {
			lastY = y;
		}
	};

	const onScroll = () => {
		if ( ! ticking ) {
			ticking = true;
			window.requestAnimationFrame( update );
		}
	};

	window.addEventListener( 'scroll', onScroll, { passive: true } );
	window.addEventListener( 'resize', onScroll, { passive: true } );
	update();
}

if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', init );
} else {
	init();
}
