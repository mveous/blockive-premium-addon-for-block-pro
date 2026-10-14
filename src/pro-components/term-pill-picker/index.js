import { __, sprintf } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { BaseControl, Button, Dropdown, SearchControl, MenuGroup, MenuItem } from '@wordpress/components';

import './editor.css';

/**
 * Multi-select shown as removable pills, with an "All {label}" state when
 * nothing is picked and a "+" menu (with search) for adding more -- the
 * Events Loop Builder taxonomy filter pattern.
 *
 * @param {Object}                           props
 * @param {string}                           props.label        e.g. "Categories".
 * @param {Array<{id: number, name: string}>} props.options      Every pickable item.
 * @param {number[]}                         props.selectedIds
 * @param {Function}                         props.onChange     Receives the new id array.
 */
export default function TermPillPicker( { label, options, selectedIds, onChange } ) {
	const [ search, setSearch ] = useState( '' );

	const byId = {};
	options.forEach( ( option ) => {
		byId[ option.id ] = option.name;
	} );

	const remaining = options.filter( ( option ) => ! selectedIds.includes( option.id ) );
	const visible = search
		? remaining.filter( ( option ) => option.name.toLowerCase().includes( search.toLowerCase() ) )
		: remaining;

	return (
		<BaseControl label={ label } className="bpafb-term-pill-picker">
			<div className="bpafb-term-pill-picker__pills">
				{ selectedIds.length === 0 && (
					<span className="bpafb-term-pill-picker__all">
						{ sprintf(
							/* translators: %s: what is being filtered, e.g. "Categories". */
							__( 'All %s', 'blockive-premium-addon-for-block-pro' ),
							label
						) }
					</span>
				) }
				{ selectedIds.map( ( id ) => (
					<span key={ id } className="bpafb-term-pill-picker__pill">
						{ byId[ id ] || `#${ id }` }
						<Button
							className="bpafb-term-pill-picker__remove"
							icon="no-alt"
							size="small"
							label={ __( 'Remove', 'blockive-premium-addon-for-block-pro' ) }
							onClick={ () => onChange( selectedIds.filter( ( other ) => other !== id ) ) }
						/>
					</span>
				) ) }
				{ remaining.length > 0 && (
					<Dropdown
						popoverProps={ { placement: 'bottom-start' } }
						onClose={ () => setSearch( '' ) }
						renderToggle={ ( { isOpen, onToggle } ) => (
							<Button
								className="bpafb-term-pill-picker__add"
								icon="plus-alt2"
								size="small"
								label={ sprintf(
									/* translators: %s: what is being filtered, e.g. "Categories". */
									__( 'Add %s', 'blockive-premium-addon-for-block-pro' ),
									label
								) }
								onClick={ onToggle }
								aria-expanded={ isOpen }
							/>
						) }
						renderContent={ ( { onClose } ) => (
							<div className="bpafb-term-pill-picker__menu">
								{ remaining.length > 6 && (
									<SearchControl value={ search } onChange={ setSearch } __nextHasNoMarginBottom />
								) }
								<MenuGroup>
									{ visible.map( ( option ) => (
										<MenuItem
											key={ option.id }
											onClick={ () => {
												onChange( [ ...selectedIds, option.id ] );
												if ( remaining.length === 1 ) {
													onClose();
												}
											} }
										>
											{ option.name }
										</MenuItem>
									) ) }
									{ visible.length === 0 && (
										<p className="bpafb-term-pill-picker__empty">
											{ __( 'No matches.', 'blockive-premium-addon-for-block-pro' ) }
										</p>
									) }
								</MenuGroup>
							</div>
						) }
					/>
				) }
			</div>
		</BaseControl>
	);
}
