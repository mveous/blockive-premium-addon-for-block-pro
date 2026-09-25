/**
 * Hotspot: each pin toggles its tooltip (disclosure pattern). One tooltip
 * is open at a time; Esc closes it and returns focus to its pin, and a
 * click anywhere else closes it. In hover mode, tooltips also show on
 * hover / focus (CSS), and a tap still opens them on touch screens.
 */
function initHotspot( root ) {
	if ( root.dataset.bpafbReady ) {
		return;
	}
	root.dataset.bpafbReady = '1';
	root.classList.add( 'is-ready' );

	const spots = [ ...root.querySelectorAll( '.bpafb-hotspot__spot' ) ];
	const pinOf = ( spot ) => spot.querySelector( '.bpafb-hotspot__pin[aria-controls]' );

	const setOpen = ( spot, open ) => {
		const pin = pinOf( spot );
		if ( ! pin ) {
			return;
		}
		spot.classList.toggle( 'is-open', open );
		pin.setAttribute( 'aria-expanded', open ? 'true' : 'false' );
	};
	const closeAll = ( except ) => spots.forEach( ( spot ) => spot !== except && setOpen( spot, false ) );

	spots.forEach( ( spot ) => {
		const pin = pinOf( spot );
		if ( ! pin ) {
			return;
		}
		pin.addEventListener( 'click', () => {
			const open = ! spot.classList.contains( 'is-open' );
			closeAll( spot );
			setOpen( spot, open );
		} );
		spot.addEventListener( 'keydown', ( event ) => {
			if ( event.key === 'Escape' && spot.classList.contains( 'is-open' ) ) {
				setOpen( spot, false );
				pin.focus();
			}
		} );
	} );

	document.addEventListener( 'click', ( event ) => {
		if ( ! event.target.closest( '.bpafb-hotspot__spot' ) || ! root.contains( event.target ) ) {
			closeAll();
		}
	} );
}

function init() {
	document.querySelectorAll( '.bpafb-hotspot' ).forEach( initHotspot );
}

if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', init );
} else {
	init();
}
