/**
 * Portfolio: the shared filter buttons (src/pro-components/filter-bar).
 */
import { initFilterBar } from '../pro-components/filter-bar/filter-bar';

function init() {
	document.querySelectorAll( '.bpafb-portfolio' ).forEach( ( root ) => {
		if ( root.dataset.bpafbReady ) {
			return;
		}
		root.dataset.bpafbReady = '1';
		initFilterBar( root, [ ...root.querySelectorAll( '.bpafb-portfolio__item' ) ] );
	} );
}

if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', init );
} else {
	init();
}
