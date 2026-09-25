/**
 * Turns code into one HTML string per line, with Prism's token spans
 * closed and reopened at each line break, so every line can be its own
 * element (line numbers, highlighted lines) even when tokens such as
 * block comments span several lines. Used by view.js and the editor.
 */
import Prism from './prism';

const escape = ( text ) => text.replace( /&/g, '&amp;' ).replace( /</g, '&lt;' ).replace( />/g, '&gt;' );

const classesOf = ( token ) => {
	const alias = token.alias ? ( Array.isArray( token.alias ) ? token.alias : [ token.alias ] ) : [];
	return [ 'token', token.type, ...alias ].join( ' ' );
};

/**
 * @param {string} code     Source code.
 * @param {string} language Prism language id.
 * @return {string[]} HTML for each line (already escaped).
 */
export function highlightToLines( code, language ) {
	const grammar = Prism.languages[ language ];
	const tokens = grammar ? Prism.tokenize( code, grammar ) : [ code ];
	const lines = [ '' ];

	const walk = ( list, open ) => {
		list.forEach( ( token ) => {
			if ( typeof token === 'string' ) {
				token.split( '\n' ).forEach( ( part, i ) => {
					if ( i > 0 ) {
						lines.push( '' );
					}
					if ( part ) {
						const text = escape( part );
						lines[ lines.length - 1 ] += open.reduceRight( ( html, cls ) => `<span class="${ cls }">${ html }</span>`, text );
					}
				} );
				return;
			}
			const content = Array.isArray( token.content ) ? token.content : [ token.content ];
			walk( content, [ ...open, classesOf( token ) ] );
		} );
	};
	walk( tokens, [] );

	return lines;
}

/**
 * Parses "2, 5-7" into a Set of line numbers.
 *
 * @param {string} value Line list.
 * @return {Set<number>}
 */
export function parseLineList( value ) {
	const set = new Set();
	String( value || '' )
		.split( ',' )
		.forEach( ( part ) => {
			const m = part.trim().match( /^(\d+)(?:\s*-\s*(\d+))?$/ );
			if ( ! m ) {
				return;
			}
			const from = parseInt( m[ 1 ], 10 );
			const to = Math.min( m[ 2 ] ? parseInt( m[ 2 ], 10 ) : from, from + 5000 );
			for ( let n = from; n <= to; n++ ) {
				set.add( n );
			}
		} );
	return set;
}

/**
 * The lines as HTML elements. Each is a block with a minimum height (see
 * style.css), so they are joined without newlines and empty lines need no
 * filler character that would end up in copied code.
 *
 * @param {string}      code      Source code.
 * @param {string}      language  Prism language id.
 * @param {Set<number>} highlight Line numbers to highlight.
 * @return {string}
 */
export function renderLines( code, language, highlight ) {
	return highlightToLines( code.replace( /\n$/, '' ), language )
		.map( ( html, i ) => `<span class="bpafb-code__line${ highlight.has( i + 1 ) ? ' is-highlighted' : '' }">${ html }</span>` )
		.join( '' );
}
