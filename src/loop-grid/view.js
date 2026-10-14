/**
 * Loop Grid "Load More": fetches the next page of items from the
 * bpafb-pro/v1/loop-items REST route (see Bpafb_Pro_Loop_Builder) and
 * appends them, removing the button after the last page. The request
 * carries the signed settings render.php put on the button, so the server
 * renders exactly the same query.
 */
document.addEventListener( 'click', async ( event ) => {
	const button = event.target.closest( '.bpafb-pro-loop-grid-load-more' );
	if ( ! button || button.disabled ) {
		return;
	}

	const list = button.closest( '.bpafb-pro-loop-grid' )?.querySelector( '.bpafb-pro-loop-grid-items' );
	if ( ! list ) {
		return;
	}

	const nextPage = Number( button.dataset.page || 1 ) + 1;
	button.disabled = true;
	button.classList.add( 'is-loading' );
	button.setAttribute( 'aria-busy', 'true' );

	try {
		const body = new FormData();
		body.append( 'attrs', button.dataset.attrs );
		body.append( 'sig', button.dataset.sig );
		body.append( 'page', String( nextPage ) );

		const response = await fetch( button.dataset.endpoint, { method: 'POST', body, credentials: 'same-origin' } );
		if ( ! response.ok ) {
			throw new Error( `Load More failed: ${ response.status }` );
		}
		const data = await response.json();

		list.insertAdjacentHTML( 'beforeend', data.html || '' );
		button.dataset.page = String( nextPage );

		if ( nextPage >= Number( data.maxPages || button.dataset.maxPages ) ) {
			button.closest( '.bpafb-pro-loop-grid-load-more-wrap' )?.remove();
			return;
		}
	} catch ( error ) {
		// Leave the button in place so the visitor can try again.
		// eslint-disable-next-line no-console
		console.error( error );
	}

	button.disabled = false;
	button.classList.remove( 'is-loading' );
	button.removeAttribute( 'aria-busy' );
} );
