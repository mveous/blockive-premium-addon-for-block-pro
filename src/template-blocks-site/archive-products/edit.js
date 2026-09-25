import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl, TextControl, RangeControl, Notice } from '@wordpress/components';

import InspectorTabs from '../../components/inspector-tabs';
import AdvancedTab from '../../components/advanced-tab';
import ColorStateControls from '../../components/color-state-controls';
import {
	LayoutPanel,
	GridPanel,
	PaginationPanel,
	CardStylePanel,
	TitleStylePanel,
	PaginationStylePanel,
	ArchivePreview,
	RATIO_OPTIONS,
	TITLE_TAG_OPTIONS,
} from '../archive-shared';

const WOO_ACTIVE = !! window.bpafbProSiteBlocks?.wooActive;

export default function Edit( { attributes, setAttributes, name } ) {
	const {
		layout,
		showResultCount,
		showOrdering,
		showImage,
		imageRatio,
		showSaleBadge,
		saleText,
		showTitle,
		titleTag,
		showRating,
		showPrice,
		showAddToCart,
		contentAlign,
		priceColor,
		saleBadgeBg,
		saleBadgeColor,
		buttonColor,
		buttonBgColor,
		buttonHoverColor,
		buttonHoverBgColor,
		buttonRadius,
	} = attributes;

	const set = ( key ) => ( val ) => setAttributes( { [ key ]: val } );
	const isCard = layout === 'card';
	const blockProps = useBlockProps( { className: 'bpafb-tb-archive-editor' } );

	if ( ! WOO_ACTIVE ) {
		return (
			<div { ...blockProps }>
				<Notice status="warning" isDismissible={ false }>
					{ __( 'Archive Products needs WooCommerce to be active.', 'blockive-premium-addon-for-block-pro' ) }
				</Notice>
			</div>
		);
	}

	return (
		<>
			<InspectorTabs
				general={
					<>
						<LayoutPanel
							attributes={ attributes }
							setAttributes={ setAttributes }
							layoutOptions={ [
								{ label: __( 'Blockive Card', 'blockive-premium-addon-for-block-pro' ), value: 'card' },
								{ label: __( 'WooCommerce Default (theme styles)', 'blockive-premium-addon-for-block-pro' ), value: 'woocommerce' },
								{ label: __( 'Loop Item Template', 'blockive-premium-addon-for-block-pro' ), value: 'template' },
							] }
						>
							<ToggleControl label={ __( 'Result Count', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showResultCount } onChange={ set( 'showResultCount' ) } />
							<ToggleControl label={ __( 'Sorting Dropdown', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showOrdering } onChange={ set( 'showOrdering' ) } />
						</LayoutPanel>
						<GridPanel attributes={ attributes } setAttributes={ setAttributes } />
						{ isCard && (
							<PanelBody title={ __( 'Card Content', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
								<SelectControl
									label={ __( 'Content Alignment', 'blockive-premium-addon-for-block-pro' ) }
									value={ contentAlign }
									options={ [
										{ label: __( 'Left', 'blockive-premium-addon-for-block-pro' ), value: 'left' },
										{ label: __( 'Center', 'blockive-premium-addon-for-block-pro' ), value: 'center' },
										{ label: __( 'Right', 'blockive-premium-addon-for-block-pro' ), value: 'right' },
									] }
									onChange={ set( 'contentAlign' ) }
								/>
								<ToggleControl label={ __( 'Image', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showImage } onChange={ set( 'showImage' ) } />
								{ showImage && (
									<>
										<SelectControl label={ __( 'Image Ratio', 'blockive-premium-addon-for-block-pro' ) } value={ imageRatio } options={ RATIO_OPTIONS } onChange={ set( 'imageRatio' ) } />
										<ToggleControl label={ __( 'Sale Badge', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showSaleBadge } onChange={ set( 'showSaleBadge' ) } />
										{ showSaleBadge && (
											<TextControl label={ __( 'Sale Badge Text', 'blockive-premium-addon-for-block-pro' ) } value={ saleText } onChange={ set( 'saleText' ) } />
										) }
									</>
								) }
								<ToggleControl label={ __( 'Title', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showTitle } onChange={ set( 'showTitle' ) } />
								{ showTitle && (
									<SelectControl label={ __( 'Title Tag', 'blockive-premium-addon-for-block-pro' ) } value={ titleTag } options={ TITLE_TAG_OPTIONS } onChange={ set( 'titleTag' ) } />
								) }
								<ToggleControl label={ __( 'Rating', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showRating } onChange={ set( 'showRating' ) } />
								<ToggleControl label={ __( 'Price', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showPrice } onChange={ set( 'showPrice' ) } />
								<ToggleControl label={ __( 'Add to Cart Button', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showAddToCart } onChange={ set( 'showAddToCart' ) } />
							</PanelBody>
						) }
						<PaginationPanel attributes={ attributes } setAttributes={ setAttributes } emptyLabel={ __( 'No Products Message', 'blockive-premium-addon-for-block-pro' ) } />
					</>
				}
				style={
					<>
						{ isCard && <CardStylePanel attributes={ attributes } setAttributes={ setAttributes } /> }
						{ isCard && <TitleStylePanel attributes={ attributes } setAttributes={ setAttributes } /> }
						{ isCard && (
							<PanelBody title={ __( 'Price & Badge', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
								<ColorStateControls
									normal={ [
										{ label: __( 'Price Color', 'blockive-premium-addon-for-block-pro' ), value: priceColor, onChange: set( 'priceColor' ) },
										{ label: __( 'Badge Background', 'blockive-premium-addon-for-block-pro' ), value: saleBadgeBg, onChange: set( 'saleBadgeBg' ) },
										{ label: __( 'Badge Text', 'blockive-premium-addon-for-block-pro' ), value: saleBadgeColor, onChange: set( 'saleBadgeColor' ) },
									] }
								/>
							</PanelBody>
						) }
						{ isCard && (
							<PanelBody title={ __( 'Add to Cart Button', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
								<ColorStateControls
									normal={ [
										{ label: __( 'Text', 'blockive-premium-addon-for-block-pro' ), value: buttonColor, onChange: set( 'buttonColor' ) },
										{ label: __( 'Background', 'blockive-premium-addon-for-block-pro' ), value: buttonBgColor, onChange: set( 'buttonBgColor' ) },
									] }
									hover={ [
										{ label: __( 'Text', 'blockive-premium-addon-for-block-pro' ), value: buttonHoverColor, onChange: set( 'buttonHoverColor' ) },
										{ label: __( 'Background', 'blockive-premium-addon-for-block-pro' ), value: buttonHoverBgColor, onChange: set( 'buttonHoverBgColor' ) },
									] }
								/>
								<RangeControl label={ __( 'Border Radius (px)', 'blockive-premium-addon-for-block-pro' ) } value={ buttonRadius } onChange={ set( 'buttonRadius' ) } min={ 0 } max={ 40 } />
							</PanelBody>
						) }
						<PaginationStylePanel attributes={ attributes } setAttributes={ setAttributes } />
					</>
				}
				advanced={ <AdvancedTab attributes={ attributes } setAttributes={ setAttributes } /> }
			/>

			<ArchivePreview
				name={ name }
				attributes={ attributes }
				blockProps={ blockProps }
				note={ __( 'Preview with your latest products. On the site, this lists the shop, product category, or product search being viewed.', 'blockive-premium-addon-for-block-pro' ) }
			/>
		</>
	);
}
