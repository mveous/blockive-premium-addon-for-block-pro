/**
 * Gallery: the shared filter buttons (one gallery at a time, or all) and
 * the shared lightbox, which steps through only the images the filter
 * leaves visible.
 */
import { bindLightbox } from '../pro-components/lightbox/lightbox';
import { initFilterBar } from '../pro-components/filter-bar/filter-bar';

function initGallery( root ) {
	if ( root.dataset.bpafbReady ) {
		return;
	}
	root.dataset.bpafbReady = '1';

	const items = [ ...root.querySelectorAll( '.bpafb-gallery__item' ) ];
	initFilterBar( root, items );

	bindLightbox( root, () =>
		items.filter( ( item ) => ! item.hidden ).map( ( item ) => item.querySelector( '[data-bpafb-lightbox]' ) ).filter( Boolean )
	);
}

function init() {
	document.querySelectorAll( '.bpafb-gallery' ).forEach( initGallery );
}

if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', init );
} else {
	init();
}
