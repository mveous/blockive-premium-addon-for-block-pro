/**
 * Full Screen skin of the Search Form block: the toggle opens an overlay,
 * which closes on Escape, on the close button, or on a click outside the
 * form. Focus moves into the field on open and back to the toggle on close.
 * Live results are in live.js.
 */
import { initLiveSearch } from './live';

const VARS = [
	'--bpafb-search-overlay-bg',
	'--bpafb-search-input-color',
	'--bpafb-search-input-bg',
	'--bpafb-search-input-focus-bg',
	'--bpafb-search-border-color',
	'--bpafb-search-focus-border-color',
	'--bpafb-search-border-width',
	'--bpafb-search-radius',
	'--bpafb-search-input-font-family',
	'--bpafb-search-input-font-size',
	'--bpafb-search-input-font-weight',
	'--bpafb-search-input-line-height',
	'--bpafb-search-input-letter-spacing',
	'--bpafb-search-input-text-transform',
	'--bpafb-search-input-text-decoration',
	'--bpafb-search-results-bg',
	'--bpafb-search-results-color',
	'--bpafb-search-results-active-bg',
];

function initSearch( root ) {
	const toggle = root.querySelector( '.bpafb-tb-search__toggle' );
	const overlay = root.querySelector( '.bpafb-tb-search__overlay' );
	if ( ! toggle || ! overlay || root.dataset.bpafbReady ) {
		return;
	}
	root.dataset.bpafbReady = '1';

	const input = overlay.querySelector( '.bpafb-tb-search__input' );
	const close = overlay.querySelector( '.bpafb-tb-search__close' );

	// Moved to <body> so a transformed/overflow-hidden header can't clip
	// or re-anchor the fixed overlay. The block's style variables are
	// scoped to its wrapper, so they're copied across first.
	const computed = window.getComputedStyle( root );
	VARS.forEach( ( name ) => {
		const value = computed.getPropertyValue( name ).trim();
		if ( value ) {
			overlay.style.setProperty( name, value );
		}
	} );
	document.body.appendChild( overlay );

	const onKey = ( event ) => {
		if ( event.key === 'Escape' ) {
			setOpen( false );
		}
	};

	function setOpen( open ) {
		toggle.setAttribute( 'aria-expanded', open ? 'true' : 'false' );
		overlay.hidden = ! open;
		document.documentElement.classList.toggle( 'bpafb-search-open', open );
		if ( open ) {
			document.addEventListener( 'keydown', onKey );
			window.requestAnimationFrame( () => input && input.focus() );
		} else {
			document.removeEventListener( 'keydown', onKey );
			toggle.focus();
		}
	}

	toggle.addEventListener( 'click', () => setOpen( true ) );
	if ( close ) {
		close.addEventListener( 'click', () => setOpen( false ) );
	}
	overlay.addEventListener( 'click', ( event ) => {
		if ( event.target === overlay ) {
			setOpen( false );
		}
	} );
}

function init() {
	// Before the Full Screen overlay moves to <body>.
	document.querySelectorAll( '.bpafb-tb-search[data-live]' ).forEach( initLiveSearch );
	document.querySelectorAll( '.bpafb-tb-search--full_screen' ).forEach( initSearch );
}

if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', init );
} else {
	init();
}
