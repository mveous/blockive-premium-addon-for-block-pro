/**
 * Facebook Embed: "Show Facebook content" swaps the placeholder for
 * Facebook's iframe (only a facebook.com plugin address is accepted), and
 * moves focus to it. Without this script the button is a plain link to
 * the content on Facebook.
 */
function load( event ) {
	const link = event.target.closest( '.bpafb-fb__load' );
	if ( ! link ) {
		return;
	}
	let src;
	try {
		src = new URL( link.dataset.src );
	} catch ( e ) {
		return;
	}
	if ( src.protocol !== 'https:' || src.hostname !== 'www.facebook.com' || ! src.pathname.startsWith( '/plugins/' ) ) {
		return;
	}
	event.preventDefault();
	const iframe = document.createElement( 'iframe' );
	iframe.className = 'bpafb-fb__frame';
	iframe.src = src.href;
	iframe.width = link.dataset.width;
	iframe.height = link.dataset.height;
	iframe.title = link.dataset.title || 'Facebook';
	iframe.style.border = 'none';
	iframe.style.overflow = 'hidden';
	iframe.setAttribute( 'scrolling', 'no' );
	iframe.setAttribute( 'allowfullscreen', 'true' );
	iframe.setAttribute( 'allow', 'autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share' );
	iframe.tabIndex = -1;
	link.closest( '.bpafb-fb__consent' ).replaceWith( iframe );
	iframe.focus();
}

document.addEventListener( 'click', load );
