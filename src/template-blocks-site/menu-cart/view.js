/**
 * Menu Cart dropdown: opens on hover/focus through CSS, and on click/tap
 * through the `is-open` class here, so it also works on touch screens.
 * Closes on Escape or a click anywhere outside.
 */
function initCart( root ) {
	const toggle = root.querySelector( '.bpafb-tb-menu-cart__toggle' );
	if ( ! toggle || root.dataset.bpafbReady ) {
		return;
	}
	root.dataset.bpafbReady = '1';

	const setOpen = ( open ) => {
		root.classList.toggle( 'is-open', open );
		toggle.setAttribute( 'aria-expanded', open ? 'true' : 'false' );
	};

	toggle.addEventListener( 'click', ( event ) => {
		event.stopPropagation();
		setOpen( ! root.classList.contains( 'is-open' ) );
	} );

	document.addEventListener( 'click', ( event ) => {
		if ( ! root.contains( event.target ) ) {
			setOpen( false );
		}
	} );

	root.addEventListener( 'keydown', ( event ) => {
		if ( event.key === 'Escape' && root.classList.contains( 'is-open' ) ) {
			setOpen( false );
			toggle.focus();
		}
	} );
}

function init() {
	document.querySelectorAll( '.bpafb-tb-menu-cart--dropdown' ).forEach( initCart );
}

if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', init );
} else {
	init();
}
