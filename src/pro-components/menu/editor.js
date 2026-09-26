/**
 * Style controls shared by the Menu and Mega Menu blocks (their render
 * side shares Bpafb_Pro_Shared_Assets::menu_vars()).
 */
import { __ } from '@wordpress/i18n';
import { PanelBody, RangeControl } from '@wordpress/components';

import TypographyControls from '../../components/typography-controls';
import ColorStateControls from '../../components/color-state-controls';
import BorderControls from '../../components/border-controls';
import ShadowControls from '../../components/shadow-controls';

// ( 'dropdown', 'borderType' ) => 'dropdownBorderType'.
const prefixed = ( prefix, key ) => `${ prefix }${ key.charAt( 0 ).toUpperCase() }${ key.slice( 1 ) }`;

/**
 * "Menu Items" style panel: typography, colors, spacing, and padding.
 *
 * @param {Object}   props
 * @param {Object}   props.attributes    Block attributes.
 * @param {Function} props.setAttributes Block setAttributes.
 */
export function MenuItemsStylePanel( { attributes, setAttributes } ) {
	const set = ( key ) => ( val ) => setAttributes( { [ key ]: val } );
	return (
		<PanelBody title={ __( 'Menu Items', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
			<TypographyControls
				values={ {
					fontFamily: attributes.itemFontFamily,
					fontSize: attributes.itemFontSize,
					fontWeight: attributes.itemFontWeight,
					lineHeight: attributes.itemLineHeight,
					letterSpacing: attributes.itemLetterSpacing,
					textTransform: attributes.itemTextTransform,
					textDecoration: attributes.itemTextDecoration,
				} }
				onChange={ ( key, val ) => setAttributes( { [ prefixed( 'item', key ) ]: val } ) }
			/>
			<ColorStateControls
				normal={ [
					{ label: __( 'Text Color', 'blockive-premium-addon-for-block-pro' ), value: attributes.itemColor, onChange: set( 'itemColor' ) },
					{ label: __( 'Active Color', 'blockive-premium-addon-for-block-pro' ), value: attributes.itemActiveColor, onChange: set( 'itemActiveColor' ) },
				] }
				hover={ [ { label: __( 'Text Color', 'blockive-premium-addon-for-block-pro' ), value: attributes.itemHoverColor, onChange: set( 'itemHoverColor' ) } ] }
			/>
			<RangeControl label={ __( 'Space Between Items', 'blockive-premium-addon-for-block-pro' ) } value={ attributes.itemGap } onChange={ set( 'itemGap' ) } min={ 0 } max={ 80 } />
			<RangeControl label={ __( 'Vertical Padding', 'blockive-premium-addon-for-block-pro' ) } value={ attributes.itemPaddingV } onChange={ set( 'itemPaddingV' ) } min={ 0 } max={ 40 } />
			<RangeControl label={ __( 'Horizontal Padding', 'blockive-premium-addon-for-block-pro' ) } value={ attributes.itemPaddingH } onChange={ set( 'itemPaddingH' ) } min={ 0 } max={ 40 } />
		</PanelBody>
	);
}

/**
 * The dropdown's border and shadow controls.
 *
 * @param {Object}   props
 * @param {Object}   props.attributes    Block attributes.
 * @param {Function} props.setAttributes Block setAttributes.
 */
export function DropdownFrameControls( { attributes, setAttributes } ) {
	return (
		<>
			<BorderControls
				values={ {
					borderType: attributes.dropdownBorderType,
					borderWidth: attributes.dropdownBorderWidth,
					borderRadius: attributes.dropdownBorderRadius,
					borderColor: attributes.dropdownBorderColor,
				} }
				onChange={ ( key, val ) => setAttributes( { [ prefixed( 'dropdown', key ) ]: val } ) }
			/>
			<ShadowControls
				values={ {
					enabled: attributes.dropdownShadowEnabled,
					color: attributes.dropdownShadowColor,
					blur: attributes.dropdownShadowBlur,
					spread: attributes.dropdownShadowSpread,
				} }
				onChange={ ( key, val ) => setAttributes( { [ prefixed( 'dropdownShadow', key ) ]: val } ) }
			/>
		</>
	);
}
