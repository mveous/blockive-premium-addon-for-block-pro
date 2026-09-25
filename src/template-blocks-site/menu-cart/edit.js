import { __ } from '@wordpress/i18n';
import { useBlockProps, BlockControls, AlignmentControl } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl, RangeControl, Notice } from '@wordpress/components';

import InspectorTabs from '../../components/inspector-tabs';
import AdvancedTab from '../../components/advanced-tab';
import ColorStateControls from '../../components/color-state-controls';
import TypographyControls from '../../components/typography-controls';
import { typoValues, typoOnChange, typoVars, cssVars, SvgIcon } from '../shared';

const WOO_ACTIVE = !! window.bpafbProSiteBlocks?.wooActive;
const CURRENCY = window.bpafbProSiteBlocks?.currency || '$';

export default function Edit( { attributes, setAttributes } ) {
	const {
		icon,
		showCount,
		hideEmptyCount,
		showSubtotal,
		behavior,
		dropdownAlign,
		align,
		iconSize,
		iconColor,
		iconHoverColor,
		countColor,
		countBgColor,
		subtotalColor,
		buttonBgColor,
		buttonColor,
		buttonHoverBgColor,
		buttonHoverColor,
		dropdownBgColor,
		dropdownWidth,
		dropdownRadius,
	} = attributes;

	const set = ( key ) => ( val ) => setAttributes( { [ key ]: val } );

	const blockProps = useBlockProps( {
		className: `bpafb-tb-menu-cart bpafb-tb-align-${ align || 'left' }`,
		style: cssVars( {
			'--bpafb-cart-icon-size': iconSize,
			'--bpafb-cart-icon-color': iconColor,
			'--bpafb-cart-icon-hover-color': iconHoverColor,
			'--bpafb-cart-count-color': countColor,
			'--bpafb-cart-count-bg': countBgColor,
			'--bpafb-cart-subtotal-color': subtotalColor,
			...typoVars( attributes, 'subtotal', '--bpafb-cart-subtotal' ),
		} ),
	} );

	return (
		<>
			<BlockControls>
				<AlignmentControl value={ align } onChange={ ( val ) => setAttributes( { align: val || 'left' } ) } />
			</BlockControls>

			<InspectorTabs
				general={
					<PanelBody title={ __( 'Menu Cart', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
						{ ! WOO_ACTIVE && (
							<Notice status="warning" isDismissible={ false }>
								{ __( 'WooCommerce is not active, so this block will not show on the site.', 'blockive-premium-addon-for-block-pro' ) }
							</Notice>
						) }
						<SelectControl
							label={ __( 'Icon', 'blockive-premium-addon-for-block-pro' ) }
							value={ icon }
							options={ [
								{ label: __( 'Cart', 'blockive-premium-addon-for-block-pro' ), value: 'cart' },
								{ label: __( 'Bag', 'blockive-premium-addon-for-block-pro' ), value: 'bag' },
								{ label: __( 'Basket', 'blockive-premium-addon-for-block-pro' ), value: 'basket' },
							] }
							onChange={ set( 'icon' ) }
						/>
						<SelectControl
							label={ __( 'On Click', 'blockive-premium-addon-for-block-pro' ) }
							value={ behavior }
							options={ [
								{ label: __( 'Open Mini Cart Dropdown', 'blockive-premium-addon-for-block-pro' ), value: 'dropdown' },
								{ label: __( 'Go to Cart Page', 'blockive-premium-addon-for-block-pro' ), value: 'link' },
							] }
							onChange={ set( 'behavior' ) }
						/>
						{ behavior === 'dropdown' && (
							<SelectControl
								label={ __( 'Dropdown Position', 'blockive-premium-addon-for-block-pro' ) }
								value={ dropdownAlign }
								options={ [
									{ label: __( 'Align Right', 'blockive-premium-addon-for-block-pro' ), value: 'right' },
									{ label: __( 'Align Left', 'blockive-premium-addon-for-block-pro' ), value: 'left' },
								] }
								onChange={ set( 'dropdownAlign' ) }
							/>
						) }
						<ToggleControl label={ __( 'Show Item Count', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showCount } onChange={ set( 'showCount' ) } />
						{ showCount && (
							<ToggleControl label={ __( 'Hide Count When Empty', 'blockive-premium-addon-for-block-pro' ) } checked={ !! hideEmptyCount } onChange={ set( 'hideEmptyCount' ) } />
						) }
						<ToggleControl label={ __( 'Show Subtotal', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showSubtotal } onChange={ set( 'showSubtotal' ) } />
					</PanelBody>
				}
				style={
					<>
						<PanelBody title={ __( 'Icon & Count', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							<RangeControl label={ __( 'Icon Size (px)', 'blockive-premium-addon-for-block-pro' ) } value={ iconSize } onChange={ set( 'iconSize' ) } min={ 10 } max={ 60 } />
							<ColorStateControls
								normal={ [
									{ label: __( 'Icon Color', 'blockive-premium-addon-for-block-pro' ), value: iconColor, onChange: set( 'iconColor' ) },
									{ label: __( 'Count Text', 'blockive-premium-addon-for-block-pro' ), value: countColor, onChange: set( 'countColor' ) },
									{ label: __( 'Count Background', 'blockive-premium-addon-for-block-pro' ), value: countBgColor, onChange: set( 'countBgColor' ) },
								] }
								hover={ [
									{ label: __( 'Icon Color', 'blockive-premium-addon-for-block-pro' ), value: iconHoverColor, onChange: set( 'iconHoverColor' ) },
								] }
							/>
						</PanelBody>
						<PanelBody title={ __( 'Subtotal', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<TypographyControls values={ typoValues( attributes, 'subtotal' ) } onChange={ typoOnChange( setAttributes, 'subtotal' ) } />
							<ColorStateControls
								normal={ [ { label: __( 'Color', 'blockive-premium-addon-for-block-pro' ), value: subtotalColor, onChange: set( 'subtotalColor' ) } ] }
							/>
						</PanelBody>
						<PanelBody title={ __( 'Mini Cart Dropdown', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<RangeControl label={ __( 'Width (px)', 'blockive-premium-addon-for-block-pro' ) } value={ dropdownWidth } onChange={ set( 'dropdownWidth' ) } min={ 200 } max={ 600 } />
							<RangeControl label={ __( 'Border Radius (px)', 'blockive-premium-addon-for-block-pro' ) } value={ dropdownRadius } onChange={ set( 'dropdownRadius' ) } min={ 0 } max={ 40 } />
							<ColorStateControls
								normal={ [
									{ label: __( 'Background', 'blockive-premium-addon-for-block-pro' ), value: dropdownBgColor, onChange: set( 'dropdownBgColor' ) },
									{ label: __( 'Button Text', 'blockive-premium-addon-for-block-pro' ), value: buttonColor, onChange: set( 'buttonColor' ) },
									{ label: __( 'Button Background', 'blockive-premium-addon-for-block-pro' ), value: buttonBgColor, onChange: set( 'buttonBgColor' ) },
								] }
								hover={ [
									{ label: __( 'Button Text', 'blockive-premium-addon-for-block-pro' ), value: buttonHoverColor, onChange: set( 'buttonHoverColor' ) },
									{ label: __( 'Button Background', 'blockive-premium-addon-for-block-pro' ), value: buttonHoverBgColor, onChange: set( 'buttonHoverBgColor' ) },
								] }
							/>
						</PanelBody>
					</>
				}
				advanced={ <AdvancedTab attributes={ attributes } setAttributes={ setAttributes } /> }
			/>

			<div { ...blockProps }>
				<span className="bpafb-tb-menu-cart__toggle">
					<span className="bpafb-tb-menu-cart__icon">
						<SvgIcon name={ icon } />
						{ showCount && ! hideEmptyCount && <span className="bpafb-tb-menu-cart__count">2</span> }
					</span>
					{ showSubtotal && <span className="bpafb-tb-menu-cart__subtotal">{ `${ CURRENCY }49.00` }</span> }
				</span>
			</div>
		</>
	);
}
