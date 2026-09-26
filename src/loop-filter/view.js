/**
 * Loop Filter: for a Loop Grid, loads the filtered page in the background
 * and swaps in the new grid and filter links, instead of a full reload.
 * The address bar updates, so the result can be shared and Back works.
 * Any other target (or a failed request) just follows the link.
 */
function initFilter( root ) {
	if ( root.dataset.bpafbReady ) {
		return;
	}
	root.dataset.bpafbReady = '1';

	root.addEventListener( 'click', async ( event ) => {
		const link = event.target.closest( 'a.bpafb-filter-bar__button' );
		if ( ! link || event.ctrlKey || event.metaKey || event.shiftKey || event.button === 1 ) {
			return;
		}
		const gridSelector = `.bpafb-pro-loop-grid.bpafb-uid-${ window.CSS.escape( root.dataset.target ) }`;
		const grid = document.querySelector( gridSelector );
		if ( ! grid ) {
			return; // Not a Loop Grid (or not on this page): normal navigation.
		}
		event.preventDefault();

		const ownClass = [ ...root.classList ].find( ( c ) => c.startsWith( 'bpafb-uid-' ) );
		grid.setAttribute( 'aria-busy', 'true' );
		root.classList.add( 'is-loading' );

		let html = '';
		try {
			const response = await window.fetch( link.href, { credentials: 'same-origin' } );
			html = response.ok ? await response.text() : '';
		} catch ( e ) {}

		const doc = html ? new window.DOMParser().parseFromString( html, 'text/html' ) : null;
		const newGrid = doc && doc.querySelector( gridSelector );
		const newFilter = doc && ownClass && doc.querySelector( `.bpafb-loop-filter.${ ownClass }` );
		if ( ! newGrid || ! newFilter ) {
			window.location.assign( link.href );
			return;
		}

		grid.replaceWith( document.importNode( newGrid, true ) );
		const filter = document.importNode( newFilter, true );
		root.replaceWith( filter );
		initFilter( filter );
		// Mark the entry being left too, so Back to it reloads its results.
		if ( ! window.history.state || ! window.history.state.bpafbFilter ) {
			window.history.replaceState( { bpafbFilter: true }, '' );
		}
		window.history.pushState( { bpafbFilter: true }, '', link.href );

		// Keep keyboard focus on the chosen link, and say what changed.
		const chosen = filter.querySelector( `a.bpafb-filter-bar__button[href="${ window.CSS.escape( link.getAttribute( 'href' ) ) }"]` );
		if ( chosen ) {
			chosen.focus();
		}
		const status = filter.querySelector( '.bpafb-loop-filter__status' );
		if ( status ) {
			const count = document.querySelectorAll( `${ gridSelector } .bpafb-pro-loop-grid-item` ).length;
			status.textContent = ( status.dataset.template || '%d' ).replace( '%d', count );
		}
	} );
}

function init() {
	document.querySelectorAll( '.bpafb-loop-filter' ).forEach( initFilter );
}

// Back / Forward after an in-place filter: show that URL's results.
window.addEventListener( 'popstate', ( event ) => {
	if ( event.state && event.state.bpafbFilter ) {
		window.location.reload();
	}
} );

if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', init );
} else {
	init();
}
