/**
 * Table of Contents: finds the page's headings, gives each an id, builds
 * the (optionally nested) list of links, highlights the section being
 * read, and handles the collapse toggle. Markup from render.php.
 */
import { buildTocList, headingLevel } from './toc-list';

const reducedMotion = window.matchMedia( '(prefers-reduced-motion: reduce)' );
const mobile = window.matchMedia( '(max-width: 767px)' );

function slugify( text ) {
	return (
		text
			.toLowerCase()
			.normalize( 'NFKD' )
			.replace( /[̀-ͯ]/g, '' )
			.replace( /[^\p{L}\p{N}\s-]/gu, '' )
			.trim()
			.replace( /[\s-]+/g, '-' ) || 'section'
	);
}

function uniqueId( base ) {
	let id = base;
	let n = 2;
	while ( document.getElementById( id ) ) {
		id = `${ base }-${ n++ }`;
	}
	return id;
}

function safeQuery( selector, all = false ) {
	try {
		return all ? [ ...document.querySelectorAll( selector ) ] : document.querySelector( selector );
	} catch ( e ) {
		return all ? [] : null; // Invalid selector typed in the block settings.
	}
}

function safeMatches( node, selector ) {
	try {
		return !! node.closest( selector );
	} catch ( e ) {
		return false;
	}
}

function findHeadings( root ) {
	const tags = ( root.dataset.headings || 'h2,h3,h4' ).split( ',' ).filter( ( t ) => /^h[1-6]$/.test( t ) );
	if ( ! tags.length ) {
		return [];
	}
	const container =
		( root.dataset.container && safeQuery( root.dataset.container ) ) ||
		document.querySelector( 'main, [role="main"], .wp-site-blocks' ) ||
		document.body;
	const exclude = root.dataset.exclude || '';

	return [ ...container.querySelectorAll( tags.join( ',' ) ) ].filter(
		( heading ) =>
			! heading.closest( '.bpafb-toc' ) &&
			! heading.closest( '.bpafb-toc-exclude' ) &&
			// Card titles in a carousel (e.g. Loop Carousel) are not page sections.
			! heading.closest( '.bpafb-carousel' ) &&
			! ( exclude && safeMatches( heading, exclude ) ) &&
			heading.textContent.trim() !== '' &&
			heading.getClientRects().length > 0
	);
}

function initToc( root ) {
	if ( root.dataset.bpafbReady ) {
		return;
	}
	root.dataset.bpafbReady = '1';

	const body = root.querySelector( '.bpafb-toc__body' );
	const empty = root.querySelector( '.bpafb-toc__empty' );
	const toggle = root.querySelector( '.bpafb-toc__toggle' );
	const offset = parseInt( root.dataset.offset, 10 ) || 0;
	const ordered = root.classList.contains( 'bpafb-toc--marker-numbers' );

	const headings = findHeadings( root );
	if ( ! headings.length ) {
		empty.hidden = false;
	} else {
		const items = headings.map( ( heading ) => {
			if ( ! heading.id ) {
				heading.id = uniqueId( slugify( heading.textContent ) );
			}
			if ( offset ) {
				heading.style.scrollMarginTop = `${ offset }px`;
			}
			return { level: headingLevel( heading.tagName ), text: heading.textContent.trim(), id: heading.id };
		} );
		body.append( buildTocList( document, items, { ordered, hierarchical: root.dataset.hierarchical === '1' } ) );
	}

	const links = [ ...root.querySelectorAll( '.bpafb-toc__link' ) ];

	// Smooth scroll, then move focus to the heading so keyboard and screen
	// reader users continue reading from there.
	links.forEach( ( link ) =>
		link.addEventListener( 'click', ( event ) => {
			const target = document.getElementById( link.hash.slice( 1 ) );
			if ( ! target ) {
				return;
			}
			event.preventDefault();
			target.scrollIntoView( { behavior: reducedMotion.matches ? 'auto' : 'smooth', block: 'start' } );
			if ( ! target.hasAttribute( 'tabindex' ) ) {
				target.setAttribute( 'tabindex', '-1' );
			}
			target.focus( { preventScroll: true } );
			window.history.pushState( null, '', link.hash );
		} )
	);

	// Highlight the link of the section being read: the last heading
	// that has scrolled past the top (plus the offset).
	let ticking = false;
	const spy = () => {
		ticking = false;
		let active = -1;
		headings.forEach( ( heading, i ) => {
			if ( heading.getBoundingClientRect().top <= offset + 12 ) {
				active = i;
			}
		} );
		links.forEach( ( link, i ) => {
			link.classList.toggle( 'is-active', i === active );
			if ( i === active ) {
				link.setAttribute( 'aria-current', 'location' );
			} else {
				link.removeAttribute( 'aria-current' );
			}
		} );
	};
	if ( links.length ) {
		window.addEventListener(
			'scroll',
			() => {
				if ( ! ticking ) {
					ticking = true;
					window.requestAnimationFrame( spy );
				}
			},
			{ passive: true }
		);
		spy();
	}

	if ( toggle ) {
		const setOpen = ( open ) => {
			toggle.setAttribute( 'aria-expanded', open ? 'true' : 'false' );
			body.hidden = ! open;
			root.classList.toggle( 'is-collapsed', ! open );
		};
		toggle.addEventListener( 'click', () => setOpen( toggle.getAttribute( 'aria-expanded' ) !== 'true' ) );
		const collapsed = root.dataset.collapsed === '1' || ( root.dataset.collapsedMobile === '1' && mobile.matches );
		setOpen( ! collapsed );
	}
}

function init() {
	document.querySelectorAll( '.bpafb-toc' ).forEach( initToc );
}

// Run after the rest of the page's scripts have had a chance to add
// content, so late-rendered headings are included.
if ( document.readyState === 'complete' ) {
	init();
} else {
	window.addEventListener( 'load', init );
}
