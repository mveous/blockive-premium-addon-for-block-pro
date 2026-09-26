/**
 * Editor controls shared by the WooCommerce blocks (Products, Product
 * Categories, Add to Cart Button): pick terms or products by name.
 */
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { FormTokenField, ComboboxControl } from '@wordpress/components';

/**
 * Tokens for terms of a product taxonomy, stored as term IDs.
 *
 * @param {Object}   props
 * @param {string}   props.label    Field label.
 * @param {string}   props.taxonomy product_cat or product_tag.
 * @param {number[]} props.value    Term IDs.
 * @param {Function} props.onChange Receives term IDs.
 */
export function TermTokens( { label, taxonomy, value, onChange } ) {
	const terms = useSelect( ( select ) => select( 'core' ).getEntityRecords( 'taxonomy', taxonomy, { per_page: 100, context: 'view' } ) || [], [ taxonomy ] );
	const nameOf = ( id ) => terms.find( ( term ) => term.id === id )?.name || `#${ id }`;
	return (
		<FormTokenField
			label={ label }
			value={ ( value || [] ).map( nameOf ) }
			suggestions={ terms.map( ( term ) => term.name ) }
			onChange={ ( tokens ) => onChange( tokens.map( ( token ) => terms.find( ( term ) => term.name === token )?.id ).filter( Boolean ) ) }
			__experimentalShowHowTo={ false }
		/>
	);
}

/**
 * Published products matching a search, plus the given IDs.
 *
 * @param {string}   search Search text.
 * @param {number[]} ids    Products to always include.
 * @return {Object[]}
 */
function useProducts( search, ids ) {
	return useSelect(
		( select ) => {
			const core = select( 'core' );
			const found = core.getEntityRecords( 'postType', 'product', { per_page: 20, search: search || undefined, status: 'publish', _fields: 'id,title' } ) || [];
			const chosen = ids.length ? core.getEntityRecords( 'postType', 'product', { include: ids, per_page: ids.length, _fields: 'id,title' } ) || [] : [];
			const all = [ ...chosen ];
			found.forEach( ( product ) => ! all.some( ( p ) => p.id === product.id ) && all.push( product ) );
			return all;
		},
		[ search, ids.join( ',' ) ]
	);
}

const titleOf = ( product ) => ( product.title?.rendered || '' ).replace( /<[^>]*>/g, '' ) + ` (#${ product.id })`;

/**
 * Several products, in the chosen order.
 *
 * @param {Object}   props
 * @param {number[]} props.value    Product IDs.
 * @param {Function} props.onChange Receives product IDs.
 */
export function ProductTokens( { value, onChange } ) {
	const [ search, setSearch ] = useState( '' );
	const ids = value || [];
	const products = useProducts( search, ids );
	return (
		<FormTokenField
			label={ __( 'Products', 'blockive-premium-addon-for-block-pro' ) }
			value={ ids.map( ( id ) => {
				const product = products.find( ( p ) => p.id === id );
				return product ? titleOf( product ) : `#${ id }`;
			} ) }
			suggestions={ products.map( titleOf ) }
			onInputChange={ setSearch }
			onChange={ ( tokens ) =>
				onChange(
					tokens
						.map( ( token ) => {
							const match = String( token ).match( /\(#(\d+)\)$|^#(\d+)$/ );
							return match ? Number( match[ 1 ] || match[ 2 ] ) : 0;
						} )
						.filter( Boolean )
				)
			}
			__experimentalShowHowTo={ false }
		/>
	);
}

/**
 * One product.
 *
 * @param {Object}   props
 * @param {number}   props.value    Product ID (0 = none).
 * @param {Function} props.onChange Receives the product ID.
 */
export function ProductPicker( { value, onChange } ) {
	const [ search, setSearch ] = useState( '' );
	const products = useProducts( search, value ? [ value ] : [] );
	return (
		<ComboboxControl
			label={ __( 'Product', 'blockive-premium-addon-for-block-pro' ) }
			value={ value || null }
			options={ products.map( ( product ) => ( { value: product.id, label: titleOf( product ) } ) ) }
			onFilterValueChange={ setSearch }
			onChange={ ( id ) => onChange( Number( id ) || 0 ) }
			__nextHasNoMarginBottom
		/>
	);
}
