import { __, sprintf } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { PanelBody, SelectControl, RangeControl, TextControl, ToggleControl } from '@wordpress/components';

import InspectorTabs from '../components/inspector-tabs';
import AdvancedTab from '../components/advanced-tab';
import ColorStateControls from '../components/color-state-controls';
import TypographyControls from '../components/typography-controls';
import ImageControl from '../pro-components/image-control';
import { useItemList, ItemActions, ItemToolbar } from '../pro-components/item-list';
import { typoValues, typoOnChange, typoVars, cssVars } from '../template-blocks-site/shared';

import './editor.css';

const BLANK = { title: 'New item', price: '$10', description: '', imageId: 0, imageUrl: '', link: '', newTab: false };

export default function Edit( { attributes, setAttributes } ) {
	const {
		items,
		titleTag,
		imagePosition,
		imageSize,
		imageRadius,
		imageGap,
		verticalAlign,
		itemSpacing,
		separator,
		separatorWeight,
		separatorColor,
		separatorSpacing,
		divider,
		dividerColor,
		titleColor,
		titleHoverColor,
		priceColor,
		descriptionColor,
	} = attributes;

	const list = useItemList( items, 'items', setAttributes, BLANK );
	const { item } = list;
	const set = ( key ) => ( val ) => setAttributes( { [ key ]: val } );

	const blockProps = useBlockProps( {
		className: `bpafb-price-list bpafb-price-list--image-${ imagePosition } bpafb-price-list--valign-${ verticalAlign }${ divider ? ' bpafb-price-list--divider' : '' }`,
		style: cssVars( {
			'--bpafb-pl-image-size': imageSize,
			'--bpafb-pl-image-radius': imageRadius,
			'--bpafb-pl-image-gap': imageGap,
			'--bpafb-pl-item-spacing': itemSpacing,
			'--bpafb-pl-sep-style': separator === 'none' ? undefined : separator,
			'--bpafb-pl-sep-weight': separatorWeight,
			'--bpafb-pl-sep-color': separatorColor,
			'--bpafb-pl-sep-spacing': separatorSpacing,
			'--bpafb-pl-divider-color': dividerColor,
			'--bpafb-pl-title-color': titleColor,
			'--bpafb-pl-title-hover': titleHoverColor,
			'--bpafb-pl-price-color': priceColor,
			'--bpafb-pl-desc-color': descriptionColor,
			...typoVars( attributes, 'title', '--bpafb-pl-title' ),
			...typoVars( attributes, 'price', '--bpafb-pl-price' ),
			...typoVars( attributes, 'description', '--bpafb-pl-desc' ),
		} ),
	} );

	/* translators: 1: item number, 2: total items. */
	const itemLabel = sprintf( __( 'Item %1$d of %2$d', 'blockive-premium-addon-for-block-pro' ), list.index + 1, items.length );
	const addLabel = __( 'Add Item', 'blockive-premium-addon-for-block-pro' );

	return (
		<>
			<ItemToolbar list={ list } count={ items.length } onAdd={ () => list.add() } addLabel={ addLabel } />
			<InspectorTabs
				general={
					<>
						<PanelBody title={ itemLabel } initialOpen={ true }>
							<ItemActions list={ list } count={ items.length } addLabel={ addLabel } />
							<ImageControl label={ __( 'Photo', 'blockive-premium-addon-for-block-pro' ) } id={ item.imageId } url={ item.imageUrl } onChange={ ( media ) => list.update( { imageId: media.id, imageUrl: media.url } ) } />
							<TextControl label={ __( 'Link', 'blockive-premium-addon-for-block-pro' ) } type="url" value={ item.link } onChange={ ( val ) => list.update( { link: val } ) } help={ __( 'Links the item title.', 'blockive-premium-addon-for-block-pro' ) } />
							{ !! item.link && <ToggleControl label={ __( 'Open in New Tab', 'blockive-premium-addon-for-block-pro' ) } checked={ !! item.newTab } onChange={ ( val ) => list.update( { newTab: val } ) } /> }
							<p className="components-base-control__help">{ __( 'Edit the title, price, and description directly in the block.', 'blockive-premium-addon-for-block-pro' ) }</p>
						</PanelBody>
						<PanelBody title={ __( 'Layout', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<SelectControl
								label={ __( 'Title HTML Tag', 'blockive-premium-addon-for-block-pro' ) }
								value={ titleTag }
								options={ [ 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div' ].map( ( t ) => ( { label: t.toUpperCase(), value: t } ) ) }
								onChange={ set( 'titleTag' ) }
							/>
							<SelectControl
								label={ __( 'Photo Position', 'blockive-premium-addon-for-block-pro' ) }
								value={ imagePosition }
								options={ [
									{ label: __( 'Left', 'blockive-premium-addon-for-block-pro' ), value: 'left' },
									{ label: __( 'Right', 'blockive-premium-addon-for-block-pro' ), value: 'right' },
								] }
								onChange={ set( 'imagePosition' ) }
							/>
							<SelectControl
								label={ __( 'Vertical Alignment', 'blockive-premium-addon-for-block-pro' ) }
								value={ verticalAlign }
								options={ [
									{ label: __( 'Top', 'blockive-premium-addon-for-block-pro' ), value: 'top' },
									{ label: __( 'Middle', 'blockive-premium-addon-for-block-pro' ), value: 'center' },
								] }
								onChange={ set( 'verticalAlign' ) }
							/>
							<SelectControl
								label={ __( 'Leader Line', 'blockive-premium-addon-for-block-pro' ) }
								value={ separator }
								options={ [
									{ label: __( 'Dotted', 'blockive-premium-addon-for-block-pro' ), value: 'dotted' },
									{ label: __( 'Dashed', 'blockive-premium-addon-for-block-pro' ), value: 'dashed' },
									{ label: __( 'Solid', 'blockive-premium-addon-for-block-pro' ), value: 'solid' },
									{ label: __( 'Double', 'blockive-premium-addon-for-block-pro' ), value: 'double' },
									{ label: __( 'None', 'blockive-premium-addon-for-block-pro' ), value: 'none' },
								] }
								onChange={ set( 'separator' ) }
							/>
							<ToggleControl label={ __( 'Divider Between Items', 'blockive-premium-addon-for-block-pro' ) } checked={ !! divider } onChange={ set( 'divider' ) } />
						</PanelBody>
					</>
				}
				style={
					<>
						<PanelBody title={ __( 'List', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							<RangeControl label={ __( 'Space Between Items (px)', 'blockive-premium-addon-for-block-pro' ) } value={ itemSpacing } onChange={ set( 'itemSpacing' ) } min={ 0 } max={ 80 } />
							{ divider && <ColorStateControls normal={ [ { label: __( 'Divider Color', 'blockive-premium-addon-for-block-pro' ), value: dividerColor, onChange: set( 'dividerColor' ) } ] } /> }
						</PanelBody>
						<PanelBody title={ __( 'Photo', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<RangeControl label={ __( 'Size (px)', 'blockive-premium-addon-for-block-pro' ) } value={ imageSize } onChange={ set( 'imageSize' ) } min={ 20 } max={ 300 } />
							<RangeControl label={ __( 'Border Radius (px)', 'blockive-premium-addon-for-block-pro' ) } value={ imageRadius } onChange={ set( 'imageRadius' ) } min={ 0 } max={ 150 } />
							<RangeControl label={ __( 'Gap (px)', 'blockive-premium-addon-for-block-pro' ) } value={ imageGap } onChange={ set( 'imageGap' ) } min={ 0 } max={ 60 } />
						</PanelBody>
						<PanelBody title={ __( 'Title', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<TypographyControls values={ typoValues( attributes, 'title' ) } onChange={ typoOnChange( setAttributes, 'title' ) } />
							<ColorStateControls
								normal={ [ { label: __( 'Color', 'blockive-premium-addon-for-block-pro' ), value: titleColor, onChange: set( 'titleColor' ) } ] }
								hover={ [ { label: __( 'Link Color', 'blockive-premium-addon-for-block-pro' ), value: titleHoverColor, onChange: set( 'titleHoverColor' ) } ] }
							/>
						</PanelBody>
						<PanelBody title={ __( 'Price', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<TypographyControls values={ typoValues( attributes, 'price' ) } onChange={ typoOnChange( setAttributes, 'price' ) } />
							<ColorStateControls normal={ [ { label: __( 'Color', 'blockive-premium-addon-for-block-pro' ), value: priceColor, onChange: set( 'priceColor' ) } ] } />
						</PanelBody>
						<PanelBody title={ __( 'Description', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<TypographyControls values={ typoValues( attributes, 'description' ) } onChange={ typoOnChange( setAttributes, 'description' ) } />
							<ColorStateControls normal={ [ { label: __( 'Color', 'blockive-premium-addon-for-block-pro' ), value: descriptionColor, onChange: set( 'descriptionColor' ) } ] } />
						</PanelBody>
						{ separator !== 'none' && (
							<PanelBody title={ __( 'Leader Line', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
								<RangeControl label={ __( 'Weight (px)', 'blockive-premium-addon-for-block-pro' ) } value={ separatorWeight } onChange={ set( 'separatorWeight' ) } min={ 1 } max={ 10 } />
								<RangeControl label={ __( 'Spacing (px)', 'blockive-premium-addon-for-block-pro' ) } value={ separatorSpacing } onChange={ set( 'separatorSpacing' ) } min={ 0 } max={ 40 } />
								<ColorStateControls normal={ [ { label: __( 'Color', 'blockive-premium-addon-for-block-pro' ), value: separatorColor, onChange: set( 'separatorColor' ) } ] } />
							</PanelBody>
						) }
					</>
				}
				advanced={ <AdvancedTab attributes={ attributes } setAttributes={ setAttributes } /> }
			/>

			<ul { ...blockProps }>
				{ items.map( ( it, i ) => (
					// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
					<li key={ i } className={ `bpafb-price-list__item${ i === list.index ? ' is-editing' : '' }` } onClick={ () => list.select( i ) }>
						{ it.imageUrl && <img className="bpafb-price-list__image" src={ it.imageUrl } alt="" /> }
						<div className="bpafb-price-list__body">
							<div className="bpafb-price-list__header">
								<RichText tagName={ titleTag } className="bpafb-price-list__title" value={ it.title } onChange={ ( val ) => list.update( { title: val }, i ) } placeholder={ __( 'Item title', 'blockive-premium-addon-for-block-pro' ) } allowedFormats={ [ 'core/bold', 'core/italic' ] } />
								{ separator !== 'none' && <span className="bpafb-price-list__separator" aria-hidden="true" /> }
								<RichText tagName="span" className="bpafb-price-list__price" value={ it.price } onChange={ ( val ) => list.update( { price: val }, i ) } placeholder={ __( 'Price', 'blockive-premium-addon-for-block-pro' ) } allowedFormats={ [ 'core/bold', 'core/italic', 'core/strikethrough' ] } />
							</div>
							<RichText tagName="p" className="bpafb-price-list__description" value={ it.description } onChange={ ( val ) => list.update( { description: val }, i ) } placeholder={ __( 'Description (optional)', 'blockive-premium-addon-for-block-pro' ) } allowedFormats={ [ 'core/bold', 'core/italic', 'core/link' ] } />
						</div>
					</li>
				) ) }
			</ul>
		</>
	);
}
