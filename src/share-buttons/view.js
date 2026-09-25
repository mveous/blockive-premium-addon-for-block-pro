/**
 * Share Buttons: open network links in a centered popup (falling back to
 * the normal new tab if popups are blocked), copy the link, print, and use
 * the device's native share sheet where the browser supports it.
 */
async function copy( text ) {
	if ( navigator.clipboard && window.isSecureContext ) {
		await navigator.clipboard.writeText( text );
		return;
	}
	// Fallback for non-HTTPS local sites and older browsers.
	const area = document.createElement( 'textarea' );
	area.value = text;
	area.setAttribute( 'readonly', '' );
	area.style.position = 'fixed';
	area.style.opacity = '0';
	document.body.appendChild( area );
	area.select();
	document.execCommand( 'copy' );
	area.remove();
}

function init() {
	document.querySelectorAll( '.bpafb-share' ).forEach( ( root ) => {
		if ( root.dataset.bpafbReady ) {
			return;
		}
		root.dataset.bpafbReady = '1';
		const status = root.querySelector( '.bpafb-share__status' );

		if ( navigator.share ) {
			root.querySelectorAll( '.bpafb-share__native' ).forEach( ( li ) => li.removeAttribute( 'hidden' ) );
		}

		root.addEventListener( 'click', async ( event ) => {
			const button = event.target.closest( '.bpafb-share__button' );
			if ( ! button ) {
				return;
			}
			const network = button.dataset.network;

			if ( button.tagName === 'A' ) {
				if ( network === 'email' ) {
					return;
				}
				// Only hijack the click when the popup actually opened
				// (`noopener` can't be passed here - it makes window.open()
				// return null - so the opener link is cut by hand instead).
				const opened = window.open( button.href, 'bpafb-share', popupFeatures() );
				if ( opened ) {
					opened.opener = null;
					event.preventDefault();
				}
				return;
			}

			if ( network === 'copy' ) {
				try {
					await copy( button.dataset.url );
					const label = button.querySelector( '.bpafb-share__label' );
					const original = label ? label.textContent : '';
					button.classList.add( 'is-copied' );
					if ( label ) {
						label.textContent = button.dataset.copied;
					}
					if ( status ) {
						status.textContent = button.dataset.copied;
					}
					window.setTimeout( () => {
						button.classList.remove( 'is-copied' );
						if ( label ) {
							label.textContent = original;
						}
						if ( status ) {
							status.textContent = '';
						}
					}, 2000 );
				} catch ( e ) {
					window.prompt( '', button.dataset.url ); // eslint-disable-line no-alert
				}
			} else if ( network === 'print' ) {
				window.print();
			} else if ( network === 'native' && navigator.share ) {
				try {
					await navigator.share( { title: button.dataset.title, url: button.dataset.url } );
				} catch ( e ) {
					// Dismissed by the visitor - nothing to do.
				}
			}
		} );
	} );
}

function popupFeatures() {
	const w = 600;
	const h = 520;
	const left = Math.max( 0, Math.round( ( window.screen.width - w ) / 2 ) );
	const top = Math.max( 0, Math.round( ( window.screen.height - h ) / 2 ) );
	return `width=${ w },height=${ h },left=${ left },top=${ top }`;
}

if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', init );
} else {
	init();
}
