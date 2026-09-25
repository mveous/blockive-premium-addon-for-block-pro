import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { BlockControls } from '@wordpress/block-editor';
import { Button, ButtonGroup, ToolbarGroup, ToolbarButton } from '@wordpress/components';

import './editor.css';

/**
 * Editing a list of items saved in one array attribute (carousel slides,
 * price list entries, ...): which item the sidebar edits, plus add /
 * duplicate / remove / move helpers and their buttons.
 */

/**
 * State for an array attribute of items: which one is being edited, and
 * add / duplicate / remove / move helpers.
 *
 * @param {Array}    items         The items.
 * @param {string}   key           Attribute name.
 * @param {Function} setAttributes Block setAttributes.
 * @param {Object}   blank         A new item.
 */
export function useItemList( items, key, setAttributes, blank ) {
	const [ current, setCurrent ] = useState( 0 );
	const index = Math.min( current, Math.max( 0, items.length - 1 ) );
	const save = ( next ) => setAttributes( { [ key ]: next } );

	return {
		index,
		item: items[ index ] || blank,
		select: setCurrent,
		update: ( patch, at = index ) => save( items.map( ( it, i ) => ( i === at ? { ...it, ...patch } : it ) ) ),
		add: ( extra = [ { ...blank } ] ) => {
			save( [ ...items, ...extra ] );
			setCurrent( items.length );
		},
		duplicate: () => {
			save( [ ...items.slice( 0, index + 1 ), { ...items[ index ] }, ...items.slice( index + 1 ) ] );
			setCurrent( index + 1 );
		},
		remove: () => {
			if ( items.length < 2 ) {
				return;
			}
			save( items.filter( ( _, i ) => i !== index ) );
			setCurrent( Math.max( 0, index - 1 ) );
		},
		move: ( delta ) => {
			const next = [ ...items ];
			const [ moved ] = next.splice( index, 1 );
			next.splice( index + delta, 0, moved );
			save( next );
			setCurrent( index + delta );
		},
	};
}

/**
 * Move / duplicate / remove / add buttons for the item being edited.
 *
 * @param {Object}   props
 * @param {Object}   props.list     useItemList() result.
 * @param {number}   props.count    Number of items.
 * @param {string}   props.addLabel Add button text.
 * @param {Function} [props.onAdd]  Custom add action.
 * @param {number}   [props.min]    Fewest items allowed.
 */
export function ItemActions( { list, count, addLabel, onAdd, min = 1 } ) {
	return (
		<ButtonGroup className="bpafb-item-list__actions">
			<Button size="small" icon="arrow-up-alt2" label={ __( 'Move earlier', 'blockive-premium-addon-for-block-pro' ) } disabled={ list.index === 0 } onClick={ () => list.move( -1 ) } />
			<Button size="small" icon="arrow-down-alt2" label={ __( 'Move later', 'blockive-premium-addon-for-block-pro' ) } disabled={ list.index >= count - 1 } onClick={ () => list.move( 1 ) } />
			<Button size="small" icon="admin-page" label={ __( 'Duplicate', 'blockive-premium-addon-for-block-pro' ) } disabled={ ! count } onClick={ list.duplicate } />
			<Button size="small" icon="trash" isDestructive label={ __( 'Remove', 'blockive-premium-addon-for-block-pro' ) } disabled={ count <= min } onClick={ list.remove } />
			<Button size="small" variant="secondary" onClick={ () => ( onAdd ? onAdd() : list.add() ) }>
				{ addLabel }
			</Button>
		</ButtonGroup>
	);
}

/**
 * Toolbar buttons to step through the items.
 *
 * @param {Object}   props
 * @param {Object}   props.list  useItemList() result.
 * @param {number}   props.count Number of items.
 * @param {Function} props.onAdd Add action.
 * @param {string}   props.addLabel Add button label.
 */
export function ItemToolbar( { list, count, onAdd, addLabel } ) {
	return (
		<BlockControls>
			<ToolbarGroup>
				<ToolbarButton icon="arrow-left-alt2" label={ __( 'Previous item', 'blockive-premium-addon-for-block-pro' ) } disabled={ list.index === 0 } onClick={ () => list.select( list.index - 1 ) } />
				<ToolbarButton disabled>{ count ? `${ list.index + 1 } / ${ count }` : '0' }</ToolbarButton>
				<ToolbarButton icon="arrow-right-alt2" label={ __( 'Next item', 'blockive-premium-addon-for-block-pro' ) } disabled={ list.index >= count - 1 } onClick={ () => list.select( list.index + 1 ) } />
				<ToolbarButton icon="plus" label={ addLabel } onClick={ onAdd } />
			</ToolbarGroup>
		</BlockControls>
	);
}
