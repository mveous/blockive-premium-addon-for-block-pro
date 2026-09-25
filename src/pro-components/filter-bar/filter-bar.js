/**
 * Shared filter buttons (Gallery, Portfolio). Each filterable item has a
 * space-separated `data-filter-keys`; each button a `data-filter` key, or
 * "all". The active button is aria-pressed, and a polite status line tells
 * screen reader users how many items now show. Markup from
 * Bpafb_Pro_Shared_Assets::filter_bar_html().
 *
 * @param {HTMLElement}   root  Block wrapper.
 * @param {HTMLElement[]} items Filterable items.
 */
export function initFilterBar( root, items ) {
	const bar = root.querySelector( '.bpafb-filter-bar' );
	if ( ! bar ) {
		return;
	}
	const buttons = [ ...bar.querySelectorAll( '.bpafb-filter-bar__button' ) ];
	const status = bar.querySelector( '.bpafb-filter-bar__status' );

	const apply = ( filter, announce ) => {
		buttons.forEach( ( button ) => {
			const active = button.dataset.filter === filter;
			button.classList.toggle( 'is-active', active );
			button.setAttribute( 'aria-pressed', active ? 'true' : 'false' );
		} );
		let shown = 0;
		items.forEach( ( item ) => {
			const keys = ( item.dataset.filterKeys || '' ).split( ' ' );
			item.hidden = filter !== 'all' && ! keys.includes( filter );
			shown += item.hidden ? 0 : 1;
		} );
		if ( announce && status ) {
			status.textContent = ( status.dataset.template || '%d' ).replace( '%d', shown );
		}
	};

	buttons.forEach( ( button ) => button.addEventListener( 'click', () => apply( button.dataset.filter, true ) ) );
	const initial = buttons.find( ( button ) => button.classList.contains( 'is-active' ) );
	if ( initial ) {
		apply( initial.dataset.filter, false );
	}
}
