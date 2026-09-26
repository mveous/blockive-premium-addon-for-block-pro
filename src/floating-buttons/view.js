/**
 * Floating Contact Buttons: the main button opens and closes the channel
 * menu (disclosure pattern). Esc closes it and returns focus to the
 * button; a click elsewhere closes it too.
 */
function initFab( root ) {
	const button = root.querySelector( 'button.bpafb-fab__main' );
	const menu = root.querySelector( '.bpafb-fab__menu' );
	if ( ! button || ! menu || root.dataset.bpafbReady ) {
		return;
	}
	root.dataset.bpafbReady = '1';

	const setOpen = ( open ) => {
		menu.hidden = ! open;
		button.setAttribute( 'aria-expanded', open ? 'true' : 'false' );
		root.classList.toggle( 'is-open', open );
	};

	button.addEventListener( 'click', () => setOpen( menu.hidden ) );
	root.addEventListener( 'keydown', ( event ) => {
		if ( event.key === 'Escape' && ! menu.hidden ) {
			setOpen( false );
			button.focus();
		}
	} );
	document.addEventListener( 'click', ( event ) => {
		if ( ! menu.hidden && ! root.contains( event.target ) ) {
			setOpen( false );
		}
	} );
}

function init() {
	document.querySelectorAll( '.bpafb-fab' ).forEach( initFab );
}

if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', init );
} else {
	init();
}
