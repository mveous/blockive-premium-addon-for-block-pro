import { __ } from '@wordpress/i18n';
import { useBlockProps, BlockControls, AlignmentControl } from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';
import { PanelBody, RangeControl, ToggleControl, Disabled } from '@wordpress/components';

import InspectorTabs from '../components/inspector-tabs';
import AdvancedTab from '../components/advanced-tab';
import { ProductPicker } from '../pro-components/woo/editor';

export default function Edit( { attributes, setAttributes } ) {
	const { productId, showPrice, quantity, buttonAlign } = attributes;
	const set = ( key ) => ( value ) => setAttributes( { [ key ]: value } );

	return (
		<>
			<BlockControls>
				<AlignmentControl value={ buttonAlign } onChange={ ( value ) => setAttributes( { buttonAlign: value || 'left' } ) } />
			</BlockControls>
			<InspectorTabs
				general={
					<PanelBody title={ __( 'Add to Cart', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
						<ProductPicker value={ productId } onChange={ set( 'productId' ) } />
						<ToggleControl label={ __( 'Show Price', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showPrice } onChange={ set( 'showPrice' ) } />
						<RangeControl
							label={ __( 'Quantity Added', 'blockive-premium-addon-for-block-pro' ) }
							value={ quantity }
							onChange={ set( 'quantity' ) }
							min={ 1 }
							max={ 20 }
							help={ __( 'Variable products link to the product page to choose options instead.', 'blockive-premium-addon-for-block-pro' ) }
						/>
					</PanelBody>
				}
				advanced={ <AdvancedTab attributes={ attributes } setAttributes={ setAttributes } /> }
			/>
			<div { ...useBlockProps() }>
				<Disabled>
					<ServerSideRender block="blockive-premium-addon-for-block/add-to-cart" attributes={ attributes } />
				</Disabled>
			</div>
		</>
	);
}
