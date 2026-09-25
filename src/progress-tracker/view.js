/**
 * Progress Tracker: sets --bpafb-progress (0 to 1) on scroll and resize.
 * "page" measures the whole document; "content" and "selector" measure one
 * element, from its top reaching the top of the window to its bottom
 * reaching the bottom of the window.
 */
const CONTENT_SELECTOR = '.wp-block-post-content, .entry-content, .post-content, article, main';

function findTarget( root ) {
	if ( root.dataset.relative === 'selector' && root.dataset.selector ) {
		try {
			return document.querySelector( root.dataset.selector );
		} catch ( e ) {
			return null; // Invalid selector typed in the block settings.
		}
	}
	if ( root.dataset.relative === 'content' ) {
		return document.querySelector( CONTENT_SELECTOR );
	}
	return null;
}

function progressOf( target ) {
	const viewport = window.innerHeight;
	if ( ! target ) {
		const scrollable = document.documentElement.scrollHeight - viewport;
		return scrollable > 0 ? window.scrollY / scrollable : 1;
	}
	const rect = target.getBoundingClientRect();
	const distance = rect.height - viewport;
	if ( distance <= 0 ) {
		// Shorter than the window: done once its bottom is in view.
		return rect.bottom <= viewport ? 1 : 0;
	}
	return -rect.top / distance;
}

function initTracker( root ) {
	if ( root.dataset.bpafbReady ) {
		return;
	}
	root.dataset.bpafbReady = '1';
	const percent = root.querySelector( '.bpafb-progress__percent' );
	let ticking = false;

	const update = () => {
		ticking = false;
		const value = Math.max( 0, Math.min( 1, progressOf( findTarget( root ) ) ) );
		root.style.setProperty( '--bpafb-progress', value.toFixed( 4 ) );
		if ( percent ) {
			percent.textContent = `${ Math.round( value * 100 ) }%`;
		}
	};
	const request = () => {
		if ( ! ticking ) {
			ticking = true;
			window.requestAnimationFrame( update );
		}
	};

	window.addEventListener( 'scroll', request, { passive: true } );
	window.addEventListener( 'resize', request );
	update();
}

function init() {
	document.querySelectorAll( '.bpafb-progress' ).forEach( initTracker );
}

if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', init );
} else {
	init();
}
