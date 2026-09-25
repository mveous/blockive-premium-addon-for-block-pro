/**
 * Media Carousel: the shared carousel engine, slideshow thumbnails, and a
 * lightbox built on a native <dialog> (focus stays inside while it is open
 * and Esc closes it). Videos play in the lightbox; closing it removes the
 * player, which stops playback.
 */
import { initCarousel, onReady } from '../pro-components/carousel/view';

const reducedMotion = window.matchMedia( '(prefers-reduced-motion: reduce)' );

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
 * @param {Object} l10n Translated labels from the block wrapper.
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

function openLightbox( items, index, l10n ) {
	const box = getLightbox( l10n );
	box.items = items;
	box.returnFocus = document.activeElement;
	show( index );
	document.documentElement.classList.add( 'bpafb-lightbox-open' );
	if ( ! box.dialog.open ) {
		box.dialog.showModal();
	}
}

function initMediaCarousel( root ) {
	const thumbs = [ ...root.querySelectorAll( '.bpafb-media-carousel__thumb' ) ];
	const strip = root.querySelector( '.bpafb-media-carousel__thumbs' );

	const syncThumbs = ( index ) => {
		thumbs.forEach( ( thumb, i ) => {
			thumb.classList.toggle( 'is-active', i === index );
			if ( i === index ) {
				thumb.setAttribute( 'aria-current', 'true' );
			} else {
				thumb.removeAttribute( 'aria-current' );
			}
		} );
		const active = thumbs[ index ];
		if ( strip && active ) {
			strip.scrollTo( {
				left: active.offsetLeft - ( strip.clientWidth - active.offsetWidth ) / 2,
				behavior: reducedMotion.matches ? 'auto' : 'smooth',
			} );
		}
	};

	const carousel = initCarousel( root, { onChange: syncThumbs } );
	if ( ! carousel ) {
		return;
	}
	thumbs.forEach( ( thumb, i ) => thumb.addEventListener( 'click', () => carousel.goTo( i ) ) );

	if ( typeof window.HTMLDialogElement !== 'function' ) {
		return; // Very old browser: the links simply open the file.
	}
	let l10n = {};
	try {
		l10n = JSON.parse( root.dataset.l10n || '{}' );
	} catch ( e ) {}

	const links = [ ...root.querySelectorAll( '[data-bpafb-lightbox], [data-bpafb-embed], [data-bpafb-video]' ) ];
	links.forEach( ( link, i ) =>
		link.addEventListener( 'click', ( event ) => {
			if ( event.ctrlKey || event.metaKey || event.shiftKey || event.button === 1 ) {
				return; // Let "open in new tab" work.
			}
			event.preventDefault();
			openLightbox( links, i, l10n );
		} )
	);
}

onReady( () => document.querySelectorAll( '.bpafb-media-carousel' ).forEach( initMediaCarousel ) );
