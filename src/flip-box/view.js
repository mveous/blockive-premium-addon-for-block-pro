/**
 * Flip Box on touch screens: there is no hover, so the first tap reveals
 * the back and a second tap (on its link, if any) follows through. Tapping
 * anywhere else flips it back.
 */
const noHover = window.matchMedia( '(hover: none)' );

function init() {
	document.querySelectorAll( '.bpafb-flip' ).forEach( ( box ) => {
		if ( box.dataset.bpafbReady ) {
			return;
		}
		box.dataset.bpafbReady = '1';

		box.addEventListener( 'click', ( event ) => {
			if ( ! noHover.matches ) {
				return;
			}
			if ( ! box.classList.contains( 'is-flipped' ) ) {
				event.preventDefault();
				document.querySelectorAll( '.bpafb-flip.is-flipped' ).forEach( ( other ) => other.classList.remove( 'is-flipped' ) );
				box.classList.add( 'is-flipped' );
			}
		} );
	} );

	document.addEventListener( 'click', ( event ) => {
		if ( ! noHover.matches ) {
			return;
		}
		document.querySelectorAll( '.bpafb-flip.is-flipped' ).forEach( ( box ) => {
			if ( ! box.contains( event.target ) ) {
				box.classList.remove( 'is-flipped' );
			}
		} );
	} );
}

if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', init );
} else {
	init();
}
