/**
 * Off-Canvas block: opens/closes the panel, traps focus inside it while
 * open, restores focus to whatever opened it, and optionally locks page
 * scroll. Any link pointing at the panel's ID (href="#panel-id") opens it
 * too, so a Button, Menu item, or Icon can act as the trigger.
 */

const FOCUSABLE =
	'a[href], area[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), iframe, [tabindex]:not([tabindex="-1"]), [contenteditable="true"]';

const openPanels = new Set();

function initOffCanvas( root ) {
	if ( root.dataset.bpafbReady ) {
		return;
	}
	root.dataset.bpafbReady = '1';

	const panelId = root.dataset.bpafbOffcanvas;
	const panel = root.querySelector( '.bpafb-off-canvas__panel' );
	if ( ! panelId || ! panel ) {
		return;
	}
	const overlay = root.querySelector( '.bpafb-off-canvas__overlay' );
	const trigger = root.querySelector( '.bpafb-off-canvas__trigger' );
	const closeBtn = panel.querySelector( '.bpafb-off-canvas__close' );
	const opt = ( name ) => root.dataset[ name ] !== '0';

	// Out of the header (or any transformed / overflow-hidden parent), so
	// `position: fixed` is relative to the viewport again.
	if ( overlay ) {
		document.body.appendChild( overlay );
	}
	document.body.appendChild( panel );

	let lastFocus = null;

	const isOpen = () => panel.classList.contains( 'is-open' );

	const setTriggers = ( open ) => {
		document.querySelectorAll( `[aria-controls="${ panelId }"]` ).forEach( ( el ) => {
			el.setAttribute( 'aria-expanded', open ? 'true' : 'false' );
		} );
	};

	function open( opener ) {
		if ( isOpen() ) {
			return;
		}
		lastFocus = opener || document.activeElement;
		panel.removeAttribute( 'inert' );
		panel.setAttribute( 'aria-hidden', 'false' );
		panel.classList.add( 'is-open' );
		if ( overlay ) {
			overlay.classList.add( 'is-open' );
		}
		if ( opt( 'lockScroll' ) ) {
			document.documentElement.classList.add( 'bpafb-offcanvas-lock' );
		}
		setTriggers( true );
		openPanels.add( close );

		window.requestAnimationFrame( () => {
			const content = panel.querySelector( '.bpafb-off-canvas__content' );
			const first = content ? content.querySelector( FOCUSABLE ) : null;
			( first || closeBtn || panel ).focus( { preventScroll: true } );
		} );
	}

	function close() {
		if ( ! isOpen() ) {
			return;
		}
		panel.classList.remove( 'is-open' );
		panel.setAttribute( 'aria-hidden', 'true' );
		panel.setAttribute( 'inert', '' );
		if ( overlay ) {
			overlay.classList.remove( 'is-open' );
		}
		openPanels.delete( close );
		if ( ! openPanels.size ) {
			document.documentElement.classList.remove( 'bpafb-offcanvas-lock' );
		}
		setTriggers( false );
		if ( lastFocus && typeof lastFocus.focus === 'function' ) {
			lastFocus.focus( { preventScroll: true } );
		}
	}

	if ( trigger ) {
		trigger.addEventListener( 'click', () => ( isOpen() ? close() : open( trigger ) ) );
	}
	if ( closeBtn ) {
		closeBtn.addEventListener( 'click', close );
	}
	if ( overlay && opt( 'closeOverlay' ) ) {
		overlay.addEventListener( 'click', close );
	}

	// Any link on the page pointing at this panel opens it.
	document.addEventListener( 'click', ( event ) => {
		const link = event.target.closest( `a[href="#${ panelId }"]` );
		if ( link && ! panel.contains( link ) ) {
			event.preventDefault();
			open( link );
		}
	} );

	if ( opt( 'closeLinks' ) ) {
		panel.addEventListener( 'click', ( event ) => {
			const link = event.target.closest( 'a[href]' );
			if ( link && link.getAttribute( 'href' ) !== '#' ) {
				close();
			}
		} );
	}

	panel.addEventListener( 'keydown', ( event ) => {
		if ( event.key === 'Escape' && opt( 'closeEsc' ) ) {
			event.stopPropagation();
			close();
			return;
		}
		if ( event.key !== 'Tab' ) {
			return;
		}
		// Keep keyboard focus inside the open panel.
		const focusables = [ ...panel.querySelectorAll( FOCUSABLE ) ].filter( ( el ) => el.offsetParent !== null );
		if ( ! focusables.length ) {
			event.preventDefault();
			return;
		}
		const first = focusables[ 0 ];
		const last = focusables[ focusables.length - 1 ];
		if ( event.shiftKey && document.activeElement === first ) {
			event.preventDefault();
			last.focus();
		} else if ( ! event.shiftKey && document.activeElement === last ) {
			event.preventDefault();
			first.focus();
		}
	} );

	// Opening straight from a shared URL like /page/#mobile-menu.
	if ( window.location.hash === `#${ panelId }` ) {
		open( trigger );
	}
}

function init() {
	document.querySelectorAll( '[data-bpafb-offcanvas]' ).forEach( initOffCanvas );
}

if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', init );
} else {
	init();
}
