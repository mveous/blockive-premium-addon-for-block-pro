/**
 * Shared lightbox (Media Carousel, Gallery), built on a native <dialog>:
 * focus stays inside while it is open, Esc closes it, and focus goes back
 * to the link that opened it. Videos play in it; closing it removes the
 * player, which stops playback. Styles: ./style.css (bpafb-pro-lightbox).
 *
 * Links opt in with one of:
 *   data-bpafb-lightbox  (href is the full-size image)
 *   data-bpafb-embed     (YouTube / Vimeo embed URL)
 *   data-bpafb-video     (video file URL)
 * plus an optional data-caption.
 */

let lightbox = null;

function el( tag, className, attrs = {} ) {
	const node = document.createElement( tag );
	if ( className ) {
		node.className = className;
	}
	Object.entries( attrs ).forEach( ( [ key, value ] ) => node.setAttribute( key, value ) );
	return node;
}

function iconButton( className, label, icon ) {
	const button = el( 'button', `bpafb-lightbox__button ${ className }`, { type: 'button', 'aria-label': label } );
	button.append( el( 'i', icon, { 'aria-hidden': 'true' } ) );
	return button;
}

/**
 * Builds the one lightbox <dialog> the first time it is needed.
 *
 * @param {Object} l10n Translated labels.
 */
function getLightbox( l10n ) {
	if ( lightbox ) {
		return lightbox;
	}
	const dialog = el( 'dialog', 'bpafb-lightbox', { 'aria-label': l10n.dialog || 'Media viewer' } );
	const close = iconButton( 'bpafb-lightbox__close', l10n.close || 'Close', 'fa-solid fa-xmark' );
	const counter = el( 'p', 'bpafb-lightbox__counter' );
	const figure = el( 'figure', 'bpafb-lightbox__figure' );
	const prev = iconButton( 'bpafb-lightbox__prev', l10n.prev || 'Previous', 'fa-solid fa-chevron-left' );
	const next = iconButton( 'bpafb-lightbox__next', l10n.next || 'Next', 'fa-solid fa-chevron-right' );
	dialog.append( close, counter, figure, prev, next );
	document.body.append( dialog );

	lightbox = { dialog, figure, counter, prev, next, items: [], index: 0, l10n, returnFocus: null };

	close.addEventListener( 'click', () => dialog.close() );
	prev.addEventListener( 'click', () => show( lightbox.index - 1 ) );
	next.addEventListener( 'click', () => show( lightbox.index + 1 ) );

	// A click on the dark area around the media closes it.
	dialog.addEventListener( 'click', ( event ) => {
		if ( event.target === dialog || event.target === figure ) {
			dialog.close();
		}
	} );
	dialog.addEventListener( 'keydown', ( event ) => {
		if ( event.target.closest( 'iframe, video' ) ) {
			return;
		}
		if ( event.key === 'ArrowLeft' ) {
			show( lightbox.index + ( document.dir === 'rtl' ? 1 : -1 ) );
		} else if ( event.key === 'ArrowRight' ) {
			show( lightbox.index + ( document.dir === 'rtl' ? -1 : 1 ) );
		}
	} );
	dialog.addEventListener( 'close', () => {
		figure.replaceChildren();
		document.documentElement.classList.remove( 'bpafb-lightbox-open' );
		if ( lightbox.returnFocus && lightbox.returnFocus.isConnected ) {
			lightbox.returnFocus.focus();
		}
	} );

	return lightbox;
}

function show( target ) {
	const { items, figure, counter, prev, next, l10n } = lightbox;
	const count = items.length;
	lightbox.index = ( target + count ) % count;
	const link = items[ lightbox.index ];
	const caption = link.dataset.caption || '';

	let media;
	if ( link.dataset.bpafbEmbed ) {
		media = el( 'iframe', '', {
			src: link.dataset.bpafbEmbed,
			title: caption || link.getAttribute( 'aria-label' ) || '',
			allow: 'autoplay; fullscreen; picture-in-picture; encrypted-media',
			allowfullscreen: '',
		} );
	} else if ( link.dataset.bpafbVideo ) {
		media = el( 'video', '', { src: link.dataset.bpafbVideo, controls: '', autoplay: '', playsinline: '' } );
	} else {
		const img = link.querySelector( 'img' );
		media = el( 'img', '', { src: link.href, alt: ( img && img.alt ) || caption } );
	}

	const children = [ media ];
	if ( caption ) {
		const figcaption = el( 'figcaption', 'bpafb-lightbox__caption' );
		figcaption.textContent = caption;
		children.push( figcaption );
	}
	figure.replaceChildren( ...children );

	counter.textContent = ( l10n.counter || '%1$d / %2$d' ).replace( '%1$d', lightbox.index + 1 ).replace( '%2$d', count );
	counter.hidden = count < 2;
	prev.hidden = count < 2;
	next.hidden = count < 2;
}

/**
 * Opens the lightbox on `items[ index ]`.
 *
 * @param {HTMLAnchorElement[]} items Links to step through.
 * @param {number}              index Link to show first.
 * @param {Object}              l10n  Translated labels.
 */
export function openLightbox( items, index, l10n = {} ) {
	const box = getLightbox( l10n );
	box.items = items;
	box.returnFocus = document.activeElement;
	show( index );
	document.documentElement.classList.add( 'bpafb-lightbox-open' );
	if ( ! box.dialog.open ) {
		box.dialog.showModal();
	}
}

/**
 * Makes the lightbox links inside `root` open the lightbox. `getItems`
 * returns the links to step through when one is clicked (e.g. only the
 * ones a Gallery filter leaves visible); by default, all of them.
 * Translated labels come from the root's data-l10n (see
 * Bpafb_Pro_Shared_Assets::lightbox_l10n()).
 *
 * @param {HTMLElement} root       Block wrapper.
 * @param {Function}    [getItems] Returns the current link list.
 */
export function bindLightbox( root, getItems ) {
	if ( typeof window.HTMLDialogElement !== 'function' ) {
		return; // Very old browser: the links simply open the file.
	}
	let l10n = {};
	try {
		l10n = JSON.parse( root.dataset.l10n || '{}' );
	} catch ( e ) {}

	const selector = '[data-bpafb-lightbox], [data-bpafb-embed], [data-bpafb-video]';
	const all = () => [ ...root.querySelectorAll( selector ) ];
	root.addEventListener( 'click', ( event ) => {
		const link = event.target.closest( selector );
		if ( ! link || ! root.contains( link ) ) {
			return;
		}
		if ( event.ctrlKey || event.metaKey || event.shiftKey || event.button === 1 ) {
			return; // Let "open in new tab" work.
		}
		const items = getItems ? getItems() : all();
		const index = items.indexOf( link );
		if ( index === -1 ) {
			return;
		}
		event.preventDefault();
		openLightbox( items, index, l10n );
	} );
}
