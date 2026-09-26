/**
 * Live results for the Search Form block (Bpafb_Pro_Live_Search): matches
 * show in a listbox under the field as the visitor types. The field is an
 * ARIA combobox: Up / Down move through the results, Enter opens the
 * chosen one (or searches as usual when none is chosen), Escape closes the
 * list. Result text is always inserted as text, never as HTML.
 */

const DELAY = 250;

function sprintf( text, value ) {
	return String( text ).replace( /%[ds]/, value );
}

export function initLiveSearch( root ) {
	let config;
	try {
		config = JSON.parse( root.dataset.live || '' );
	} catch ( e ) {
		return;
	}
	// The Full Screen skin's form may already have moved to <body>.
	const input = root.querySelector( '.bpafb-tb-search__input[role="combobox"]' ) || document.getElementById( root.querySelector( '.bpafb-tb-search__toggle' )?.getAttribute( 'aria-controls' ) || '' )?.querySelector( '.bpafb-tb-search__input[role="combobox"]' );
	if ( ! config || ! config.url || ! input || input.dataset.bpafbLive ) {
		return;
	}
	input.dataset.bpafbLive = '1';

	const form = input.form;
	const panel = form.querySelector( '.bpafb-tb-search__results' );
	const list = form.querySelector( '.bpafb-tb-search__list' );
	const empty = form.querySelector( '.bpafb-tb-search__empty' );
	const status = form.querySelector( '.bpafb-tb-search__status' );
	const i18n = config.i18n || {};
	const cache = new Map();
	let timer;
	let controller;
	let options = [];
	let active = -1;
	let lastTerm = '';

	const setActive = ( index ) => {
		options.forEach( ( option, i ) => option.setAttribute( 'aria-selected', i === index ? 'true' : 'false' ) );
		active = index;
		if ( index >= 0 && options[ index ] ) {
			input.setAttribute( 'aria-activedescendant', options[ index ].id );
			options[ index ].scrollIntoView( { block: 'nearest' } );
		} else {
			input.removeAttribute( 'aria-activedescendant' );
		}
	};

	const close = () => {
		panel.hidden = true;
		input.setAttribute( 'aria-expanded', 'false' );
		setActive( -1 );
	};

	const open = () => {
		panel.hidden = false;
		input.setAttribute( 'aria-expanded', options.length ? 'true' : 'false' );
	};

	const searchUrl = () => {
		const params = new URLSearchParams( new FormData( form ) );
		return form.action + ( form.action.includes( '?' ) ? '&' : '?' ) + params.toString();
	};

	const option = ( id, href, build ) => {
		const li = document.createElement( 'li' );
		li.id = id;
		li.className = 'bpafb-tb-search__option';
		li.setAttribute( 'role', 'option' );
		li.setAttribute( 'aria-selected', 'false' );
		const link = document.createElement( 'a' );
		link.href = href;
		link.tabIndex = -1;
		build( link );
		li.appendChild( link );
		return li;
	};

	const span = ( className, text ) => {
		const el = document.createElement( 'span' );
		el.className = className;
		el.textContent = text;
		return el;
	};

	const render = ( term, data ) => {
		list.textContent = '';
		const results = data && Array.isArray( data.results ) ? data.results : [];
		options = results
			.filter( ( item ) => item && /^https?:/.test( item.url || '' ) )
			.map( ( item, i ) =>
				option( `${ list.id }-${ i }`, item.url, ( link ) => {
					if ( config.image ) {
						const media = span( 'bpafb-tb-search__thumb', '' );
						if ( item.image && /^https?:/.test( item.image ) ) {
							const img = document.createElement( 'img' );
							img.src = item.image;
							img.alt = '';
							img.loading = 'lazy';
							media.appendChild( img );
						}
						link.appendChild( media );
					}
					const text = span( 'bpafb-tb-search__text', '' );
					text.appendChild( span( 'bpafb-tb-search__title', item.title || item.url ) );
					const meta = [ item.type, item.price ].filter( Boolean ).join( ' · ' );
					if ( meta ) {
						text.appendChild( span( 'bpafb-tb-search__meta', meta ) );
					}
					if ( config.excerpt && item.excerpt ) {
						text.appendChild( span( 'bpafb-tb-search__excerpt', item.excerpt ) );
					}
					link.appendChild( text );
				} )
			);
		const total = data && data.total ? data.total : 0;
		if ( total > options.length ) {
			options.push(
				option( `${ list.id }-all`, searchUrl(), ( link ) => {
					link.classList.add( 'bpafb-tb-search__all' );
					link.textContent = sprintf( i18n.all || 'See all %d results', total );
				} )
			);
		}
		options.forEach( ( li ) => list.appendChild( li ) );
		list.hidden = ! options.length;
		empty.textContent = options.length ? '' : sprintf( i18n.none || 'No results for "%s".', term );
		empty.hidden = !! options.length;
		status.textContent = options.length ? sprintf( i18n.count || '%d results available.', results.length ) : empty.textContent;
		active = -1;
		input.removeAttribute( 'aria-activedescendant' );
		open();
	};

	const fail = () => {
		list.textContent = '';
		options = [];
		list.hidden = true;
		empty.textContent = i18n.error || 'Results could not be loaded.';
		empty.hidden = false;
		status.textContent = empty.textContent;
		open();
	};

	const fetchResults = ( term ) => {
		const key = term.toLowerCase();
		if ( cache.has( key ) ) {
			render( term, cache.get( key ) );
			return;
		}
		if ( controller ) {
			controller.abort();
		}
		controller = new AbortController();
		const url = new URL( config.url, window.location.href );
		url.searchParams.set( 's', term );
		url.searchParams.set( 'per_page', String( config.count || 5 ) );
		const type = form.querySelector( 'input[name="post_type"]' );
		if ( type && type.value ) {
			url.searchParams.set( 'post_type', type.value );
		}
		if ( config.excerpt ) {
			url.searchParams.set( 'excerpt', '1' );
		}
		form.classList.add( 'is-loading' );
		window
			.fetch( url.toString(), { signal: controller.signal, credentials: 'omit', headers: { Accept: 'application/json' } } )
			.then( ( response ) => ( response.ok ? response.json() : Promise.reject( response ) ) )
			.then( ( data ) => {
				cache.set( key, data );
				// Only the latest query's answer is shown.
				if ( input.value.trim() === term ) {
					render( term, data );
				}
			} )
			.catch( ( error ) => {
				if ( error && error.name === 'AbortError' ) {
					return;
				}
				fail();
			} )
			.finally( () => form.classList.remove( 'is-loading' ) );
	};

	input.addEventListener( 'input', () => {
		const term = input.value.trim();
		window.clearTimeout( timer );
		if ( term.length < ( config.min || 2 ) ) {
			lastTerm = '';
			if ( controller ) {
				controller.abort();
			}
			close();
			status.textContent = '';
			return;
		}
		if ( term === lastTerm ) {
			return;
		}
		lastTerm = term;
		timer = window.setTimeout( () => fetchResults( term ), DELAY );
	} );

	input.addEventListener( 'keydown', ( event ) => {
		const isOpen = ! panel.hidden;
		switch ( event.key ) {
			case 'ArrowDown':
			case 'ArrowUp': {
				if ( ! options.length ) {
					return;
				}
				event.preventDefault();
				if ( ! isOpen ) {
					open();
				}
				const step = event.key === 'ArrowDown' ? 1 : -1;
				let next = active + step;
				if ( next >= options.length ) {
					next = 0;
				} else if ( next < -1 ) {
					next = options.length - 1;
				}
				setActive( next );
				break;
			}
			case 'Enter':
				if ( isOpen && active >= 0 && options[ active ] ) {
					event.preventDefault();
					window.location.assign( options[ active ].querySelector( 'a' ).href );
				}
				break;
			case 'Escape':
				if ( isOpen ) {
					// Only closes the list; a second Escape closes the Full Screen overlay.
					event.preventDefault();
					event.stopPropagation();
					close();
				}
				break;
		}
	} );

	// Keep focus in the field while a result is clicked.
	panel.addEventListener( 'mousedown', ( event ) => event.preventDefault() );
	panel.addEventListener( 'mousemove', ( event ) => {
		const li = event.target.closest( '.bpafb-tb-search__option' );
		const index = options.indexOf( li );
		if ( index >= 0 && index !== active ) {
			setActive( index );
		}
	} );

	input.addEventListener( 'focus', () => {
		if ( input.value.trim().length >= ( config.min || 2 ) && ( options.length || empty.textContent ) ) {
			open();
		}
	} );
	input.addEventListener( 'blur', close );
}
