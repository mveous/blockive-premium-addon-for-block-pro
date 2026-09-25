/**
 * Builds the Table of Contents list from `{ level, text, id }` items.
 * Shared by view.js (front end) and edit.js (editor preview), so both
 * nest the same way.
 */

export const headingLevel = ( tagName ) => parseInt( String( tagName ).replace( /\D/g, '' ), 10 ) || 2;

/**
 * @param {Document} doc                    Document to create nodes in.
 * @param {Array}    items                  `{ level, text, id }` in page order.
 * @param {Object}   options
 * @param {boolean}  options.ordered        <ol> instead of <ul>.
 * @param {boolean}  options.hierarchical   Nest lower headings under higher ones.
 * @return {HTMLElement} The list.
 */
export function buildTocList( doc, items, { ordered, hierarchical } ) {
	const newList = () => {
		const list = doc.createElement( ordered ? 'ol' : 'ul' );
		list.className = 'bpafb-toc__list';
		return list;
	};
	const rootList = newList();
	// Each open list, with the heading level of the items in it (set by
	// its first item).
	const stack = [ { level: null, list: rootList } ];

	items.forEach( ( item ) => {
		if ( hierarchical ) {
			// Close lists deeper than this heading.
			while ( stack.length > 1 && stack[ stack.length - 1 ].level > item.level ) {
				stack.pop();
			}
			// A lower heading opens a list inside the previous item.
			const current = stack[ stack.length - 1 ];
			if ( current.level !== null && item.level > current.level && current.list.lastElementChild ) {
				const list = newList();
				current.list.lastElementChild.append( list );
				stack.push( { level: item.level, list } );
			}
		}
		const current = stack[ stack.length - 1 ];
		if ( current.level === null ) {
			current.level = item.level;
		}
		const li = doc.createElement( 'li' );
		li.className = 'bpafb-toc__item';
		const link = doc.createElement( 'a' );
		link.className = 'bpafb-toc__link';
		link.href = `#${ item.id }`;
		link.textContent = item.text;
		li.append( link );
		stack[ stack.length - 1 ].list.append( li );
	} );

	return rootList;
}
