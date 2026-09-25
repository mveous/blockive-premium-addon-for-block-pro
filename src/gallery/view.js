/**
 * Gallery: filter buttons (one gallery at a time, or all) and the shared
 * lightbox, which steps through only the images the filter leaves visible.
 */
import { bindLightbox } from '../pro-components/lightbox/lightbox';

function initGallery( root ) {
	if ( root.dataset.bpafbReady ) {
		return;
	}
	root.dataset.bpafbReady = '1';

	const items = [ ...root.querySelectorAll( '.bpafb-gallery__item' ) ];
	const buttons = [ ...root.querySelectorAll( '.bpafb-gallery__filter' ) ];

	const apply = ( filter ) => {
		buttons.forEach( ( button ) => {
			const active = button.dataset.filter === filter;
			button.classList.toggle( 'is-active', active );
			button.setAttribute( 'aria-pressed', active ? 'true' : 'false' );
		} );
		items.forEach( ( item ) => {
			item.hidden = filter !== 'all' && item.dataset.gallery !== filter;
		} );
	};

	buttons.forEach( ( button ) => button.addEventListener( 'click', () => apply( button.dataset.filter ) ) );
	const initial = buttons.find( ( button ) => button.classList.contains( 'is-active' ) );
	if ( initial ) {
		apply( initial.dataset.filter );
	}

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
