/**
 * Code Highlight: colors the code with Prism and splits it into lines
 * (for line numbers and highlighted lines), and wires up the Copy button,
 * which copies the original code and announces "Copied".
 */
import { renderLines, parseLineList } from './highlight';

function initCode( root ) {
	if ( root.dataset.bpafbReady ) {
		return;
	}
	root.dataset.bpafbReady = '1';

	const code = root.querySelector( '.bpafb-code__pre code' );
	if ( ! code ) {
		return;
	}
	const source = code.textContent;
	code.innerHTML = renderLines( source, root.dataset.language || 'none', parseLineList( root.dataset.lines ) );
	root.classList.add( 'is-lined' );

	const copy = root.querySelector( '.bpafb-code__copy' );
	const status = root.querySelector( '.bpafb-code__status' );
	if ( ! copy || ! window.navigator.clipboard ) {
		return; // No clipboard access (e.g. not HTTPS): leave the button hidden.
	}
	copy.hidden = false;
	copy.closest( '.bpafb-code__header' ).hidden = false;
	const label = copy.querySelector( 'span' );
	const idle = label.textContent;
	let timer = null;
	copy.addEventListener( 'click', () => {
		window.navigator.clipboard.writeText( source ).then( () => {
			label.textContent = copy.dataset.copied;
			if ( status ) {
				status.textContent = copy.dataset.copied;
			}
			window.clearTimeout( timer );
			timer = window.setTimeout( () => {
				label.textContent = idle;
				if ( status ) {
					status.textContent = '';
				}
			}, 2000 );
		} );
	} );
}

function init() {
	document.querySelectorAll( '.bpafb-code' ).forEach( initCode );
}

if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', init );
} else {
	init();
}
