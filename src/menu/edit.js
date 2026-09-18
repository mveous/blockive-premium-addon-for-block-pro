import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import {
	PanelBody,
	SelectControl,
	ToggleControl,
	RangeControl,
	Notice,
} from '@wordpress/components';

import InspectorTabs from '../components/inspector-tabs';
import AdvancedTab from '../components/advanced-tab';
import TypographyControls from '../components/typography-controls';
import ColorStateControls from '../components/color-state-controls';
import BorderControls from '../components/border-controls';
import ShadowControls from '../components/shadow-controls';

/**
 * Builds a parent/child tree from the flat `nav_menu_item` list the REST
 * API returns, using each item's `parent` field (0 for a top-level item).
 */
function buildMenuTree( items ) {
	const byId = {};
	items.forEach( ( item ) => {
		byId[ item.id ] = { ...item, children: [] };
	} );
	const tree = [];
	items.forEach( ( item ) => {
		if ( item.parent && byId[ item.parent ] ) {
			byId[ item.parent ].children.push( byId[ item.id ] );
		} else {
			tree.push( byId[ item.id ] );
		}
	} );
	return tree;
}

function MenuItemPreview( { item } ) {
	const hasChildren = item.children && item.children.length > 0;
	return (
		<li className="bpafb-pro-menu-item">
			<span className="bpafb-pro-menu-item__title">
				{ item.title?.rendered || item.title }
			</span>
			{ hasChildren && (
				<ul className="bpafb-pro-menu-dropdown">
					{ item.children.map( ( child ) => (
						<MenuItemPreview key={ child.id } item={ child } />
					) ) }
				</ul>
			) }
		</li>
	);
}

export default function Edit( { attributes, setAttributes } ) {
	const {
		menuId,
		layout,
		submenuIndicator,
		mobileBreakpoint,
		itemColor,
		itemHoverColor,
		itemActiveColor,
		itemFontFamily,
		itemFontSize,
		itemFontWeight,
		itemLineHeight,
		itemLetterSpacing,
		itemTextTransform,
		itemTextDecoration,
		itemGap,
		itemPaddingV,
		itemPaddingH,
		dropdownBgColor,
		dropdownItemColor,
		dropdownItemHoverColor,
		dropdownItemHoverBgColor,
		dropdownMinWidth,
		dropdownBorderType,
		dropdownBorderWidth,
		dropdownBorderRadius,
		dropdownBorderColor,
		dropdownShadowEnabled,
		dropdownShadowColor,
		dropdownShadowBlur,
		dropdownShadowSpread,
		toggleIconColor,
	} = attributes;

	const { menus, isResolvingMenus } = useSelect( ( select ) => {
		const query = { per_page: -1 };
		return {
			menus: select( 'core' ).getEntityRecords( 'root', 'menu', query ),
			isResolvingMenus: select( 'core' ).isResolving( 'getEntityRecords', [ 'root', 'menu', query ] ),
		};
	}, [] );

	const activeMenuId = menuId || ( menus && menus.length ? menus[ 0 ].id : 0 );

	const { menuItems, isResolvingItems } = useSelect( ( select ) => {
		if ( ! activeMenuId ) {
			return { menuItems: [], isResolvingItems: false };
		}
		const query = { menus: activeMenuId, per_page: -1, orderby: 'menu_order', order: 'asc' };
		return {
			menuItems: select( 'core' ).getEntityRecords( 'postType', 'nav_menu_item', query ) || [],
			isResolvingItems: select( 'core' ).isResolving( 'getEntityRecords', [ 'postType', 'nav_menu_item', query ] ),
		};
	}, [ activeMenuId ] );

	const menuOptions = ( menus || [] ).map( ( menu ) => ( { label: menu.name, value: menu.id } ) );
	const tree = buildMenuTree( menuItems );

	const blockProps = useBlockProps( {
		className: `bpafb-pro-menu bpafb-pro-menu--${ layout }`,
	} );

	return (
		<>
			<InspectorTabs
				general={
					<>
						<PanelBody title={ __( 'Menu', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							{ ! isResolvingMenus && menuOptions.length === 0 && (
								<Notice status="warning" isDismissible={ false }>
									{ __( 'No menus found. Create one under Appearance → Menus.', 'blockive-premium-addon-for-block-pro' ) }
								</Notice>
							) }
							{ menuOptions.length > 0 && (
								<SelectControl
									label={ __( 'Select Menu', 'blockive-premium-addon-for-block-pro' ) }
									value={ activeMenuId }
									options={ menuOptions }
									onChange={ ( val ) => setAttributes( { menuId: Number( val ) } ) }
								/>
							) }
							<SelectControl
								label={ __( 'Layout', 'blockive-premium-addon-for-block-pro' ) }
								value={ layout }
								options={ [
									{ label: __( 'Horizontal', 'blockive-premium-addon-for-block-pro' ), value: 'horizontal' },
									{ label: __( 'Vertical', 'blockive-premium-addon-for-block-pro' ), value: 'vertical' },
								] }
								onChange={ ( val ) => setAttributes( { layout: val } ) }
							/>
							<ToggleControl
								label={ __( 'Submenu Indicator', 'blockive-premium-addon-for-block-pro' ) }
								checked={ !! submenuIndicator }
								onChange={ ( val ) => setAttributes( { submenuIndicator: val } ) }
							/>
							<RangeControl
								label={ __( 'Mobile Breakpoint (px)', 'blockive-premium-addon-for-block-pro' ) }
								value={ mobileBreakpoint }
								onChange={ ( val ) => setAttributes( { mobileBreakpoint: val } ) }
								min={ 320 }
								max={ 1200 }
							/>
						</PanelBody>
					</>
				}
				style={
					<>
						<PanelBody title={ __( 'Menu Items', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							<TypographyControls
								values={ {
									fontFamily: itemFontFamily,
									fontSize: itemFontSize,
									fontWeight: itemFontWeight,
									lineHeight: itemLineHeight,
									letterSpacing: itemLetterSpacing,
									textTransform: itemTextTransform,
									textDecoration: itemTextDecoration,
								} }
								onChange={ ( key, val ) => setAttributes( { [ `item${ key.charAt( 0 ).toUpperCase() }${ key.slice( 1 ) }` ]: val } ) }
							/>
							<ColorStateControls
								normal={ [
									{ label: __( 'Text Color', 'blockive-premium-addon-for-block-pro' ), value: itemColor, onChange: ( val ) => setAttributes( { itemColor: val } ) },
									{ label: __( 'Active Color', 'blockive-premium-addon-for-block-pro' ), value: itemActiveColor, onChange: ( val ) => setAttributes( { itemActiveColor: val } ) },
								] }
								hover={ [
									{ label: __( 'Text Color', 'blockive-premium-addon-for-block-pro' ), value: itemHoverColor, onChange: ( val ) => setAttributes( { itemHoverColor: val } ) },
								] }
							/>
							<RangeControl
								label={ __( 'Space Between Items', 'blockive-premium-addon-for-block-pro' ) }
								value={ itemGap }
								onChange={ ( val ) => setAttributes( { itemGap: val } ) }
								min={ 0 }
								max={ 80 }
							/>
							<RangeControl
								label={ __( 'Vertical Padding', 'blockive-premium-addon-for-block-pro' ) }
								value={ itemPaddingV }
								onChange={ ( val ) => setAttributes( { itemPaddingV: val } ) }
								min={ 0 }
								max={ 40 }
							/>
							<RangeControl
								label={ __( 'Horizontal Padding', 'blockive-premium-addon-for-block-pro' ) }
								value={ itemPaddingH }
								onChange={ ( val ) => setAttributes( { itemPaddingH: val } ) }
								min={ 0 }
								max={ 40 }
							/>
						</PanelBody>

						<PanelBody title={ __( 'Dropdown', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<ColorStateControls
								normal={ [
									{ label: __( 'Background', 'blockive-premium-addon-for-block-pro' ), value: dropdownBgColor, onChange: ( val ) => setAttributes( { dropdownBgColor: val } ) },
									{ label: __( 'Item Text Color', 'blockive-premium-addon-for-block-pro' ), value: dropdownItemColor, onChange: ( val ) => setAttributes( { dropdownItemColor: val } ) },
								] }
								hover={ [
									{ label: __( 'Item Text Color', 'blockive-premium-addon-for-block-pro' ), value: dropdownItemHoverColor, onChange: ( val ) => setAttributes( { dropdownItemHoverColor: val } ) },
									{ label: __( 'Item Background', 'blockive-premium-addon-for-block-pro' ), value: dropdownItemHoverBgColor, onChange: ( val ) => setAttributes( { dropdownItemHoverBgColor: val } ) },
								] }
							/>
							<RangeControl
								label={ __( 'Minimum Width', 'blockive-premium-addon-for-block-pro' ) }
								value={ dropdownMinWidth }
								onChange={ ( val ) => setAttributes( { dropdownMinWidth: val } ) }
								min={ 120 }
								max={ 500 }
							/>
							<BorderControls
								values={ {
									borderType: dropdownBorderType,
									borderWidth: dropdownBorderWidth,
									borderRadius: dropdownBorderRadius,
									borderColor: dropdownBorderColor,
								} }
								onChange={ ( key, val ) => setAttributes( { [ `dropdown${ key.charAt( 0 ).toUpperCase() }${ key.slice( 1 ) }` ]: val } ) }
							/>
							<ShadowControls
								values={ {
									enabled: dropdownShadowEnabled,
									color: dropdownShadowColor,
									blur: dropdownShadowBlur,
									spread: dropdownShadowSpread,
								} }
								onChange={ ( key, val ) => setAttributes( { [ `dropdownShadow${ key.charAt( 0 ).toUpperCase() }${ key.slice( 1 ) }` ]: val } ) }
							/>
						</PanelBody>

						<PanelBody title={ __( 'Mobile Toggle', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<ColorStateControls
								normal={ [
									{ label: __( 'Icon Color', 'blockive-premium-addon-for-block-pro' ), value: toggleIconColor, onChange: ( val ) => setAttributes( { toggleIconColor: val } ) },
								] }
							/>
						</PanelBody>
					</>
				}
				advanced={ <AdvancedTab attributes={ attributes } setAttributes={ setAttributes } /> }
			/>

			<div { ...blockProps }>
				<div className="bpafb-pro-menu-toggle" aria-hidden="true">
					<span></span>
					<span></span>
					<span></span>
				</div>
				{ isResolvingItems && (
					<p className="bpafb-pro-menu-loading">{ __( 'Loading menu…', 'blockive-premium-addon-for-block-pro' ) }</p>
				) }
				{ ! isResolvingItems && tree.length === 0 && (
					<p className="bpafb-pro-menu-empty">{ __( 'This menu has no items yet.', 'blockive-premium-addon-for-block-pro' ) }</p>
				) }
				{ tree.length > 0 && (
					<ul className="bpafb-pro-menu-list">
						{ tree.map( ( item ) => (
							<MenuItemPreview key={ item.id } item={ item } />
						) ) }
					</ul>
				) }
			</div>
		</>
	);
}
