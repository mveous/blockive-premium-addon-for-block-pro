/**
 * Video Playlist: plays the chosen list item in the player. The player
 * shows a poster until played, so YouTube / Vimeo only load after a click.
 * Video files move on to the next item when they end (if enabled); YouTube
 * and Vimeo do not report that without their own script APIs.
 */
function el( tag, attrs = {} ) {
	const node = document.createElement( tag );
	Object.entries( attrs ).forEach( ( [ key, value ] ) => node.setAttribute( key, value ) );
	return node;
}

function initPlaylist( root ) {
	if ( root.dataset.bpafbReady ) {
		return;
	}
	root.dataset.bpafbReady = '1';

	const player = root.querySelector( '.bpafb-vpl__player' );
	const items = [ ...root.querySelectorAll( '.bpafb-vpl__item' ) ];
	const autoNext = root.dataset.autoNext === '1';
	const playLabel = root.dataset.playLabel || 'Play video: %s';
	let current = 0;

	const poster = ( item ) => {
		const link = el( 'a', {
			class: 'bpafb-vpl__poster',
			href: item.href,
			'aria-label': playLabel.replace( '%s', item.dataset.title ),
		} );
		if ( item.dataset.poster ) {
			link.append( el( 'img', { class: 'bpafb-vpl__poster-img', src: item.dataset.poster, alt: '' } ) );
		}
		const play = el( 'span', { class: 'bpafb-vpl__play', 'aria-hidden': 'true' } );
		play.append( el( 'i', { class: 'fa-solid fa-play' } ) );
		link.append( play );
		link.addEventListener( 'click', ( event ) => {
			event.preventDefault();
			show( current, true );
		} );
		return link;
	};

	const media = ( item ) => {
		if ( item.dataset.embed ) {
			return el( 'iframe', {
				src: item.dataset.embed,
				title: item.dataset.title,
				allow: 'autoplay; fullscreen; picture-in-picture; encrypted-media',
				allowfullscreen: '',
			} );
		}
		const video = el( 'video', { src: item.dataset.video, controls: '', autoplay: '', playsinline: '', title: item.dataset.title } );
		video.addEventListener( 'ended', () => {
			if ( autoNext && current < items.length - 1 ) {
				show( current + 1, true );
			}
		} );
		return video;
	};

	function show( index, play ) {
		current = index;
		items.forEach( ( item, i ) => {
			item.classList.toggle( 'is-active', i === index );
			if ( i === index ) {
				item.setAttribute( 'aria-current', 'true' );
			} else {
				item.removeAttribute( 'aria-current' );
			}
		} );
		// Replacing the player also stops whatever was playing before.
		player.replaceChildren( play ? media( items[ index ] ) : poster( items[ index ] ) );
	}

	player.querySelector( '.bpafb-vpl__poster' )?.addEventListener( 'click', ( event ) => {
		event.preventDefault();
		show( current, true );
	} );
	items.forEach( ( item, i ) =>
		item.addEventListener( 'click', ( event ) => {
			if ( event.ctrlKey || event.metaKey || event.shiftKey || event.button === 1 ) {
				return; // Let "open in new tab" work.
			}
			event.preventDefault();
			show( i, true );
		} )
	);

	// Stack the list under the player when the block itself is narrow
	// (e.g. in a sidebar or column), not only on small screens.
	if ( 'ResizeObserver' in window ) {
		new window.ResizeObserver( () => root.classList.toggle( 'is-narrow', root.offsetWidth < 700 ) ).observe( root );
	}
}

function init() {
	document.querySelectorAll( '.bpafb-vpl' ).forEach( initPlaylist );
}

if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', init );
} else {
	init();
}
