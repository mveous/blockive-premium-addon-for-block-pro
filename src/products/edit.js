import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';
import { PanelBody, SelectControl, RangeControl, ToggleControl, Disabled } from '@wordpress/components';

import InspectorTabs from '../components/inspector-tabs';
import AdvancedTab from '../components/advanced-tab';
import { TermTokens, ProductTokens } from '../pro-components/woo/editor';

const SOURCES = [
	{ label: __( 'Latest Products', 'blockive-premium-addon-for-block-pro' ), value: 'recent' },
	{ label: __( 'On Sale', 'blockive-premium-addon-for-block-pro' ), value: 'sale' },
	{ label: __( 'Featured', 'blockive-premium-addon-for-block-pro' ), value: 'featured' },
	{ label: __( 'Best Selling', 'blockive-premium-addon-for-block-pro' ), value: 'best_selling' },
	{ label: __( 'Top Rated', 'blockive-premium-addon-for-block-pro' ), value: 'top_rated' },
	{ label: __( 'Hand-picked', 'blockive-premium-addon-for-block-pro' ), value: 'manual' },
];

const ORDER_BY = [
	{ label: __( 'Date', 'blockive-premium-addon-for-block-pro' ), value: 'date' },
	{ label: __( 'Title', 'blockive-premium-addon-for-block-pro' ), value: 'title' },
	{ label: __( 'Price', 'blockive-premium-addon-for-block-pro' ), value: 'price' },
	{ label: __( 'Popularity (sales)', 'blockive-premium-addon-for-block-pro' ), value: 'popularity' },
	{ label: __( 'Rating', 'blockive-premium-addon-for-block-pro' ), value: 'rating' },
	{ label: __( 'Menu Order', 'blockive-premium-addon-for-block-pro' ), value: 'menu_order' },
	{ label: __( 'Random', 'blockive-premium-addon-for-block-pro' ), value: 'rand' },
];

export default function Edit( { attributes, setAttributes } ) {
	const { source, categories, tags, productIds, columns, limit, orderBy, order, paginate } = attributes;
	const set = ( key ) => ( value ) => setAttributes( { [ key ]: value } );
	const manual = source === 'manual';

	return (
		<>
			<InspectorTabs
				general={
					<PanelBody title={ __( 'Query', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
						<SelectControl label={ __( 'Show', 'blockive-premium-addon-for-block-pro' ) } value={ source } options={ SOURCES } onChange={ set( 'source' ) } />
						{ manual ? (
							<ProductTokens value={ productIds } onChange={ set( 'productIds' ) } />
						) : (
							<>
								<TermTokens label={ __( 'Only These Categories', 'blockive-premium-addon-for-block-pro' ) } taxonomy="product_cat" value={ categories } onChange={ set( 'categories' ) } />
								<TermTokens label={ __( 'Only These Tags', 'blockive-premium-addon-for-block-pro' ) } taxonomy="product_tag" value={ tags } onChange={ set( 'tags' ) } />
								<RangeControl label={ __( 'Number of Products', 'blockive-premium-addon-for-block-pro' ) } value={ limit } onChange={ set( 'limit' ) } min={ 1 } max={ 48 } />
							</>
						) }
						<RangeControl label={ __( 'Columns', 'blockive-premium-addon-for-block-pro' ) } value={ columns } onChange={ set( 'columns' ) } min={ 1 } max={ 6 } />
						<SelectControl label={ __( 'Order By', 'blockive-premium-addon-for-block-pro' ) } value={ orderBy } options={ ORDER_BY } onChange={ set( 'orderBy' ) } help={ manual && orderBy === 'date' ? __( 'Hand-picked products keep the order above while this is Date.', 'blockive-premium-addon-for-block-pro' ) : undefined } />
						<SelectControl
							label={ __( 'Order', 'blockive-premium-addon-for-block-pro' ) }
							value={ order }
							options={ [
								{ label: __( 'Descending', 'blockive-premium-addon-for-block-pro' ), value: 'DESC' },
								{ label: __( 'Ascending', 'blockive-premium-addon-for-block-pro' ), value: 'ASC' },
							] }
							onChange={ set( 'order' ) }
						/>
						{ ! manual && <ToggleControl label={ __( 'Pagination', 'blockive-premium-addon-for-block-pro' ) } checked={ !! paginate } onChange={ set( 'paginate' ) } help={ __( 'Shows page links and the result count when there are more products.', 'blockive-premium-addon-for-block-pro' ) } /> }
					</PanelBody>
				}
				advanced={ <AdvancedTab attributes={ attributes } setAttributes={ setAttributes } /> }
			/>
			<div { ...useBlockProps() }>
				<Disabled>
					<ServerSideRender block="blockive-premium-addon-for-block/products" attributes={ attributes } />
				</Disabled>
			</div>
		</>
	);
}
