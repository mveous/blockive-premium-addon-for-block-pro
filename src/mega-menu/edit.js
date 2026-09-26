import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import {
	PanelBody,
	Button,
	TextControl,
	ToggleControl,
	SelectControl,
	RangeControl,
	Icon,
} from '@wordpress/components';
import { plus, trash, chevronUp, chevronDown } from '@wordpress/icons';

import InspectorTabs from '../components/inspector-tabs';
import AdvancedTab from '../components/advanced-tab';
import { MenuItemsStylePanel, DropdownFrameControls } from '../pro-components/menu/editor';
import ColorStateControls from '../components/color-state-controls';
import useTemplateOptions from '../components/use-template-options';

const TEMPLATE_KIND = 'mega-menu-item';

function newItem() {
	return {
		id: String( Date.now() ),
		title: __( 'New Item', 'blockive-premium-addon-for-block-pro' ),
		link: '#',
		linkNewTab: false,
		hasDropdown: false,
		templateId: 0,
	};
}

export default function Edit( { attributes, setAttributes } ) {
	const {
		items,
		dropdownWidth,
		dropdownBgColor,
		dropdownPadding,
		mobileBreakpoint,
		toggleIconColor,
	} = attributes;

	const templateOptions = useTemplateOptions( TEMPLATE_KIND );

	// Derived from the current URL rather than a new localized value, since
	// the block editor always runs under /wp-admin/ (post.php, post-new.php,
	// or the site editor), on single sites and multisite alike.
	const adminBase = window.location.href.split( '/wp-admin/' )[ 0 ] + '/wp-admin/';
	const newTemplateUrl = `${ adminBase }post-new.php?post_type=blockive_template`;

	const updateItem = ( index, patch ) => {
		const next = items.slice();
		next[ index ] = { ...next[ index ], ...patch };
		setAttributes( { items: next } );
	};

	const removeItem = ( index ) => {
		setAttributes( { items: items.filter( ( _, i ) => i !== index ) } );
	};

	const moveItem = ( index, direction ) => {
		const target = index + direction;
		if ( target < 0 || target >= items.length ) {
			return;
		}
		const next = items.slice();
		[ next[ index ], next[ target ] ] = [ next[ target ], next[ index ] ];
		setAttributes( { items: next } );
	};

	const addItem = () => {
		setAttributes( { items: [ ...items, newItem() ] } );
	};

	const blockProps = useBlockProps( {
		className: 'bpafb-pro-mega-menu',
	} );

	return (
		<>
			<InspectorTabs
				general={
					<PanelBody title={ __( 'Menu Items', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
						{ items.map( ( item, index ) => (
							<div className="bpafb-pro-mega-menu-item-editor" key={ item.id }>
								<div className="bpafb-pro-mega-menu-item-editor__row">
									<span className="bpafb-pro-mega-menu-item-editor__index">{ index + 1 }</span>
									<Button icon={ chevronUp } label={ __( 'Move up', 'blockive-premium-addon-for-block-pro' ) } onClick={ () => moveItem( index, -1 ) } disabled={ index === 0 } />
									<Button icon={ chevronDown } label={ __( 'Move down', 'blockive-premium-addon-for-block-pro' ) } onClick={ () => moveItem( index, 1 ) } disabled={ index === items.length - 1 } />
									<Button icon={ trash } label={ __( 'Remove item', 'blockive-premium-addon-for-block-pro' ) } onClick={ () => removeItem( index ) } isDestructive />
								</div>
								<TextControl
									label={ __( 'Title', 'blockive-premium-addon-for-block-pro' ) }
									value={ item.title }
									onChange={ ( val ) => updateItem( index, { title: val } ) }
								/>
								<TextControl
									label={ __( 'Link', 'blockive-premium-addon-for-block-pro' ) }
									value={ item.link }
									onChange={ ( val ) => updateItem( index, { link: val } ) }
								/>
								<ToggleControl
									label={ __( 'Open in New Tab', 'blockive-premium-addon-for-block-pro' ) }
									checked={ !! item.linkNewTab }
									onChange={ ( val ) => updateItem( index, { linkNewTab: val } ) }
								/>
								<ToggleControl
									label={ __( 'Dropdown Content', 'blockive-premium-addon-for-block-pro' ) }
									help={ __( 'Show a Blockive Template as this item’s dropdown.', 'blockive-premium-addon-for-block-pro' ) }
									checked={ !! item.hasDropdown }
									onChange={ ( val ) => updateItem( index, { hasDropdown: val } ) }
								/>
								{ item.hasDropdown && (
									<>
										<SelectControl
											label={ __( 'Dropdown Template', 'blockive-premium-addon-for-block-pro' ) }
											value={ item.templateId || 0 }
											options={ templateOptions }
											onChange={ ( val ) => updateItem( index, { templateId: Number( val ) } ) }
										/>
										<Button
											variant="link"
											href={ newTemplateUrl }
											target="_blank"
											rel="noopener noreferrer"
										>
											{ __( '+ Create a new Mega Menu Item template', 'blockive-premium-addon-for-block-pro' ) }
										</Button>
									</>
								) }
								<hr />
							</div>
						) ) }
						<Button variant="secondary" icon={ plus } onClick={ addItem }>
							{ __( 'Add Item', 'blockive-premium-addon-for-block-pro' ) }
						</Button>
					</PanelBody>
				}
				style={
					<>
						<MenuItemsStylePanel attributes={ attributes } setAttributes={ setAttributes } />

						<PanelBody title={ __( 'Dropdown', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<SelectControl
								label={ __( 'Width', 'blockive-premium-addon-for-block-pro' ) }
								value={ dropdownWidth }
								options={ [
									{ label: __( 'Full Width', 'blockive-premium-addon-for-block-pro' ), value: 'full' },
									{ label: __( 'Fit to Content', 'blockive-premium-addon-for-block-pro' ), value: 'auto' },
								] }
								onChange={ ( val ) => setAttributes( { dropdownWidth: val } ) }
							/>
							<ColorStateControls
								normal={ [
									{ label: __( 'Background', 'blockive-premium-addon-for-block-pro' ), value: dropdownBgColor, onChange: ( val ) => setAttributes( { dropdownBgColor: val } ) },
								] }
							/>
							<RangeControl
								label={ __( 'Padding', 'blockive-premium-addon-for-block-pro' ) }
								value={ dropdownPadding }
								onChange={ ( val ) => setAttributes( { dropdownPadding: val } ) }
								min={ 0 }
								max={ 100 }
							/>
							<DropdownFrameControls attributes={ attributes } setAttributes={ setAttributes } />
						</PanelBody>

						<PanelBody title={ __( 'Mobile', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<RangeControl
								label={ __( 'Breakpoint (px)', 'blockive-premium-addon-for-block-pro' ) }
								value={ mobileBreakpoint }
								onChange={ ( val ) => setAttributes( { mobileBreakpoint: val } ) }
								min={ 320 }
								max={ 1200 }
							/>
							<ColorStateControls
								normal={ [
									{ label: __( 'Toggle Icon Color', 'blockive-premium-addon-for-block-pro' ), value: toggleIconColor, onChange: ( val ) => setAttributes( { toggleIconColor: val } ) },
								] }
							/>
						</PanelBody>
					</>
				}
				advanced={ <AdvancedTab attributes={ attributes } setAttributes={ setAttributes } /> }
			/>

			<div { ...blockProps }>
				<div className="bpafb-pro-mega-menu-toggle" aria-hidden="true">
					<span></span>
					<span></span>
					<span></span>
				</div>
				<ul className="bpafb-pro-mega-menu-list">
					{ items.map( ( item ) => (
						<li key={ item.id } className="bpafb-pro-mega-menu-item">
							<span className="bpafb-pro-mega-menu-item__title">{ item.title }</span>
							{ item.hasDropdown && (
								<Icon icon={ item.templateId ? 'yes-alt' : 'warning' } className="bpafb-pro-mega-menu-item__badge" />
							) }
						</li>
					) ) }
				</ul>
			</div>
		</>
	);
}
