import { __ } from '@wordpress/i18n';
import { useBlockProps, BlockControls, AlignmentControl, RichText } from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	RangeControl,
	TextControl,
	ToggleControl,
	Button,
	ButtonGroup,
} from '@wordpress/components';

import InspectorTabs from '../components/inspector-tabs';
import AdvancedTab from '../components/advanced-tab';
import ColorStateControls from '../components/color-state-controls';
import TypographyControls from '../components/typography-controls';
import IconPicker from '../pro-components/icon-picker';
import { typoValues, typoOnChange, typoVars, cssVars } from '../template-blocks-site/shared';

const NEW_ITEM = { text: 'List Item', icon: 'fa-solid fa-check', url: '', newTab: false };

export default function Edit( { attributes, setAttributes } ) {
	const {
		items,
		layout,
		align,
		alignMobile,
		spaceBetween,
		showDivider,
		dividerStyle,
		dividerWidth,
		dividerColor,
		iconSize,
		iconColor,
		iconHoverColor,
		iconGap,
		iconVAlign,
		textColor,
		textHoverColor,
	} = attributes;

	const set = ( key ) => ( val ) => setAttributes( { [ key ]: val } );

	const updateItem = ( index, patch ) =>
		setAttributes( { items: items.map( ( item, i ) => ( i === index ? { ...item, ...patch } : item ) ) } );

	const moveItem = ( index, delta ) => {
		const next = [ ...items ];
		const [ moved ] = next.splice( index, 1 );
		next.splice( index + delta, 0, moved );
		setAttributes( { items: next } );
	};

	const blockProps = useBlockProps( {
		className: [
			'bpafb-icon-list',
			`bpafb-icon-list--${ layout }`,
			`bpafb-icon-list--align-${ align || 'left' }`,
			alignMobile ? `bpafb-icon-list--align-mobile-${ alignMobile }` : '',
			showDivider ? 'bpafb-icon-list--divider' : '',
		]
			.filter( Boolean )
			.join( ' ' ),
		style: cssVars( {
			'--bpafb-il-space': spaceBetween,
			'--bpafb-il-divider-style': dividerStyle,
			'--bpafb-il-divider-width': dividerWidth,
			'--bpafb-il-divider-color': dividerColor,
			'--bpafb-il-icon-size': iconSize,
			'--bpafb-il-icon-color': iconColor,
			'--bpafb-il-icon-hover-color': iconHoverColor,
			'--bpafb-il-icon-gap': iconGap,
			'--bpafb-il-icon-valign': iconVAlign === 'top' ? 'flex-start' : 'center',
			'--bpafb-il-text-color': textColor,
			'--bpafb-il-text-hover-color': textHoverColor,
			...typoVars( attributes, 'text', '--bpafb-il-text' ),
		} ),
	} );

	return (
		<>
			<BlockControls>
				<AlignmentControl value={ align } onChange={ ( val ) => setAttributes( { align: val || 'left' } ) } />
			</BlockControls>

			<InspectorTabs
				general={
					<>
						<PanelBody title={ __( 'Items', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							{ items.map( ( item, index ) => (
								<PanelBody
									key={ index }
									title={ ( item.text || '' ).replace( /<[^>]+>/g, '' ) || __( '(empty)', 'blockive-premium-addon-for-block-pro' ) }
									initialOpen={ false }
									className="bpafb-icon-list-editor__item"
								>
									<TextControl
										label={ __( 'Text', 'blockive-premium-addon-for-block-pro' ) }
										value={ item.text }
										onChange={ ( val ) => updateItem( index, { text: val } ) }
									/>
									<IconPicker allowEmpty value={ item.icon } onChange={ ( val ) => updateItem( index, { icon: val } ) } />
									<TextControl
										label={ __( 'Link', 'blockive-premium-addon-for-block-pro' ) }
										help={ __( 'e.g. tel:+15551234567, mailto:hello@example.com, or a page URL.', 'blockive-premium-addon-for-block-pro' ) }
										value={ item.url }
										onChange={ ( val ) => updateItem( index, { url: val } ) }
									/>
									{ !! item.url && (
										<ToggleControl
											label={ __( 'Open in New Tab', 'blockive-premium-addon-for-block-pro' ) }
											checked={ !! item.newTab }
											onChange={ ( val ) => updateItem( index, { newTab: val } ) }
										/>
									) }
									<ButtonGroup>
										<Button size="small" icon="arrow-up-alt2" label={ __( 'Move up', 'blockive-premium-addon-for-block-pro' ) } disabled={ index === 0 } onClick={ () => moveItem( index, -1 ) } />
										<Button size="small" icon="arrow-down-alt2" label={ __( 'Move down', 'blockive-premium-addon-for-block-pro' ) } disabled={ index === items.length - 1 } onClick={ () => moveItem( index, 1 ) } />
										<Button size="small" icon="admin-page" label={ __( 'Duplicate', 'blockive-premium-addon-for-block-pro' ) } onClick={ () => setAttributes( { items: [ ...items.slice( 0, index + 1 ), { ...item }, ...items.slice( index + 1 ) ] } ) } />
										<Button size="small" icon="trash" isDestructive label={ __( 'Remove', 'blockive-premium-addon-for-block-pro' ) } onClick={ () => setAttributes( { items: items.filter( ( _, i ) => i !== index ) } ) } />
									</ButtonGroup>
								</PanelBody>
							) ) }
							<Button variant="secondary" onClick={ () => setAttributes( { items: [ ...items, { ...NEW_ITEM, icon: items[ items.length - 1 ]?.icon || NEW_ITEM.icon } ] } ) }>
								{ __( 'Add Item', 'blockive-premium-addon-for-block-pro' ) }
							</Button>
						</PanelBody>
						<PanelBody title={ __( 'Layout', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<SelectControl
								label={ __( 'Layout', 'blockive-premium-addon-for-block-pro' ) }
								value={ layout }
								options={ [
									{ label: __( 'Default (stacked)', 'blockive-premium-addon-for-block-pro' ), value: 'vertical' },
									{ label: __( 'Inline', 'blockive-premium-addon-for-block-pro' ), value: 'inline' },
								] }
								onChange={ set( 'layout' ) }
							/>
							<SelectControl
								label={ __( 'Mobile Alignment', 'blockive-premium-addon-for-block-pro' ) }
								value={ alignMobile }
								options={ [
									{ label: __( 'Same as desktop', 'blockive-premium-addon-for-block-pro' ), value: '' },
									{ label: __( 'Left', 'blockive-premium-addon-for-block-pro' ), value: 'left' },
									{ label: __( 'Center', 'blockive-premium-addon-for-block-pro' ), value: 'center' },
									{ label: __( 'Right', 'blockive-premium-addon-for-block-pro' ), value: 'right' },
								] }
								onChange={ set( 'alignMobile' ) }
							/>
						</PanelBody>
					</>
				}
				style={
					<>
						<PanelBody title={ __( 'List', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							<RangeControl label={ __( 'Space Between (px)', 'blockive-premium-addon-for-block-pro' ) } value={ spaceBetween } onChange={ set( 'spaceBetween' ) } min={ 0 } max={ 60 } />
							<ToggleControl label={ __( 'Divider', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showDivider } onChange={ set( 'showDivider' ) } />
							{ showDivider && (
								<>
									<SelectControl
										label={ __( 'Divider Style', 'blockive-premium-addon-for-block-pro' ) }
										value={ dividerStyle }
										options={ [ 'solid', 'dashed', 'dotted', 'double' ].map( ( v ) => ( { label: v, value: v } ) ) }
										onChange={ set( 'dividerStyle' ) }
									/>
									<RangeControl label={ __( 'Divider Weight (px)', 'blockive-premium-addon-for-block-pro' ) } value={ dividerWidth } onChange={ set( 'dividerWidth' ) } min={ 1 } max={ 10 } />
									<ColorStateControls normal={ [ { label: __( 'Divider Color', 'blockive-premium-addon-for-block-pro' ), value: dividerColor, onChange: set( 'dividerColor' ) } ] } />
								</>
							) }
						</PanelBody>
						<PanelBody title={ __( 'Icon', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<ColorStateControls
								normal={ [ { label: __( 'Color', 'blockive-premium-addon-for-block-pro' ), value: iconColor, onChange: set( 'iconColor' ) } ] }
								hover={ [ { label: __( 'Color', 'blockive-premium-addon-for-block-pro' ), value: iconHoverColor, onChange: set( 'iconHoverColor' ) } ] }
							/>
							<RangeControl label={ __( 'Size (px)', 'blockive-premium-addon-for-block-pro' ) } value={ iconSize } onChange={ set( 'iconSize' ) } min={ 6 } max={ 100 } />
							<RangeControl label={ __( 'Gap to Text (px)', 'blockive-premium-addon-for-block-pro' ) } value={ iconGap } onChange={ set( 'iconGap' ) } min={ 0 } max={ 50 } />
							<SelectControl
								label={ __( 'Vertical Alignment', 'blockive-premium-addon-for-block-pro' ) }
								value={ iconVAlign }
								options={ [
									{ label: __( 'Center', 'blockive-premium-addon-for-block-pro' ), value: 'center' },
									{ label: __( 'Top', 'blockive-premium-addon-for-block-pro' ), value: 'top' },
								] }
								onChange={ set( 'iconVAlign' ) }
							/>
						</PanelBody>
						<PanelBody title={ __( 'Text', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<TypographyControls values={ typoValues( attributes, 'text' ) } onChange={ typoOnChange( setAttributes, 'text' ) } />
							<ColorStateControls
								normal={ [ { label: __( 'Color', 'blockive-premium-addon-for-block-pro' ), value: textColor, onChange: set( 'textColor' ) } ] }
								hover={ [ { label: __( 'Color', 'blockive-premium-addon-for-block-pro' ), value: textHoverColor, onChange: set( 'textHoverColor' ) } ] }
							/>
						</PanelBody>
					</>
				}
				advanced={ <AdvancedTab attributes={ attributes } setAttributes={ setAttributes } /> }
			/>

			<div { ...blockProps }>
				<ul className="bpafb-icon-list__items">
					{ items.map( ( item, index ) => (
						<li className="bpafb-icon-list__item" key={ index }>
							<span className="bpafb-icon-list__link">
								{ item.icon && (
									<span className="bpafb-icon-list__icon">
										<i className={ item.icon } aria-hidden="true" />
									</span>
								) }
								<RichText
									tagName="span"
									className="bpafb-icon-list__text"
									value={ item.text }
									allowedFormats={ [ 'core/bold', 'core/italic' ] }
									onChange={ ( val ) => updateItem( index, { text: val } ) }
									placeholder={ __( 'List item…', 'blockive-premium-addon-for-block-pro' ) }
								/>
							</span>
						</li>
					) ) }
				</ul>
			</div>
		</>
	);
}
