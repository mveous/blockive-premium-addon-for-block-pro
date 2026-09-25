import { __, sprintf } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { PanelBody, SelectControl, RangeControl, TextControl, ToggleControl } from '@wordpress/components';

import InspectorTabs from '../components/inspector-tabs';
import AdvancedTab from '../components/advanced-tab';
import ColorStateControls from '../components/color-state-controls';
import TypographyControls from '../components/typography-controls';
import ImageControl from '../pro-components/image-control';
import {
	useItemList,
	ItemActions,
	ItemToolbar,
	CarouselSettingsPanel,
	CarouselNavigationStylePanel,
	CarouselPreview,
	carouselVars,
	carouselClasses,
} from '../pro-components/carousel/editor';
import { typoValues, typoOnChange, typoVars, cssVars } from '../template-blocks-site/shared';

const BLANK = {
	content: 'Add a customer quote here.',
	name: 'Customer Name',
	title: 'Job Title',
	imageId: 0,
	imageUrl: '',
	link: '',
	newTab: false,
};

export default function Edit( { attributes, setAttributes } ) {
	const {
		items,
		skin,
		layout,
		align,
		imageSize,
		imageRadius,
		cardBgColor,
		cardBorderColor,
		cardBorderWidth,
		cardRadius,
		cardPadding,
		contentColor,
		nameColor,
		titleColor,
	} = attributes;

	const list = useItemList( items, 'items', setAttributes, BLANK );
	const { item } = list;
	const set = ( key ) => ( val ) => setAttributes( { [ key ]: val } );

	const blockProps = useBlockProps( {
		className: `${ carouselClasses( attributes ) } bpafb-tc bpafb-tc--skin-${ skin } bpafb-tc--${ layout.replace( '_', '-' ) } bpafb-tc--align-${ align }`,
		style: {
			...carouselVars( attributes ),
			...cssVars( {
				'--bpafb-tc-image-size': imageSize,
				'--bpafb-tc-image-radius': typeof imageRadius === 'number' ? `${ Math.min( 50, imageRadius ) }%` : undefined,
				'--bpafb-tc-bg': cardBgColor,
				'--bpafb-tc-border-color': cardBorderColor,
				'--bpafb-tc-border-width': cardBorderWidth,
				'--bpafb-tc-radius': cardRadius,
				'--bpafb-tc-padding': cardPadding,
				'--bpafb-tc-content-color': contentColor,
				'--bpafb-tc-name-color': nameColor,
				'--bpafb-tc-title-color': titleColor,
				...typoVars( attributes, 'content', '--bpafb-tc-content' ),
				...typoVars( attributes, 'name', '--bpafb-tc-name' ),
				...typoVars( attributes, 'title', '--bpafb-tc-title' ),
			} ),
		},
	} );

	const slides = items.map( ( it, i ) => {
		const image = it.imageUrl ? <img className="bpafb-tc__image" src={ it.imageUrl } alt="" /> : null;
		const quote = (
			<RichText
				tagName="blockquote"
				className="bpafb-tc__text"
				value={ it.content }
				onChange={ ( val ) => list.update( { content: val }, i ) }
				placeholder={ __( 'Testimonial…', 'blockive-premium-addon-for-block-pro' ) }
				allowedFormats={ [ 'core/bold', 'core/italic' ] }
			/>
		);
		const cite = (
			<div className="bpafb-tc__cite">
				<RichText tagName="span" className="bpafb-tc__name" value={ it.name } onChange={ ( val ) => list.update( { name: val }, i ) } placeholder={ __( 'Name', 'blockive-premium-addon-for-block-pro' ) } allowedFormats={ [] } />
				<RichText tagName="span" className="bpafb-tc__title" value={ it.title } onChange={ ( val ) => list.update( { title: val }, i ) } placeholder={ __( 'Title', 'blockive-premium-addon-for-block-pro' ) } allowedFormats={ [] } />
			</div>
		);

		let inner;
		if ( layout === 'image_above' ) {
			inner = (
				<>
					{ image }
					{ quote }
					{ cite }
				</>
			);
		} else if ( layout === 'image_left' || layout === 'image_right' ) {
			inner = (
				<>
					{ image }
					<div className="bpafb-tc__body">
						{ quote }
						{ cite }
					</div>
				</>
			);
		} else {
			inner = (
				<>
					{ quote }
					<div className="bpafb-tc__footer">
						{ image }
						{ cite }
					</div>
				</>
			);
		}
		return <div className="bpafb-tc__item" key={ i }>{ inner }</div>;
	} );

	/* translators: 1: item number, 2: total items. */
	const itemLabel = sprintf( __( 'Testimonial %1$d of %2$d', 'blockive-premium-addon-for-block-pro' ), list.index + 1, items.length );
	const addLabel = __( 'Add Testimonial', 'blockive-premium-addon-for-block-pro' );

	return (
		<>
			<ItemToolbar list={ list } count={ items.length } onAdd={ () => list.add() } addLabel={ addLabel } />
			<InspectorTabs
				general={
					<>
						<PanelBody title={ itemLabel } initialOpen={ true }>
							<ItemActions list={ list } count={ items.length } addLabel={ addLabel } />
							<ImageControl label={ __( 'Photo', 'blockive-premium-addon-for-block-pro' ) } id={ item.imageId } url={ item.imageUrl } onChange={ ( media ) => list.update( { imageId: media.id, imageUrl: media.url } ) } />
							<TextControl label={ __( 'Name Link', 'blockive-premium-addon-for-block-pro' ) } type="url" value={ item.link } onChange={ ( val ) => list.update( { link: val } ) } />
							{ !! item.link && (
								<ToggleControl label={ __( 'Open in New Tab', 'blockive-premium-addon-for-block-pro' ) } checked={ !! item.newTab } onChange={ ( val ) => list.update( { newTab: val } ) } />
							) }
							<p className="components-base-control__help">{ __( 'Edit the quote, name, and title directly in the block.', 'blockive-premium-addon-for-block-pro' ) }</p>
						</PanelBody>
						<PanelBody title={ __( 'Layout', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<SelectControl
								label={ __( 'Skin', 'blockive-premium-addon-for-block-pro' ) }
								value={ skin }
								options={ [
									{ label: __( 'Default', 'blockive-premium-addon-for-block-pro' ), value: 'default' },
									{ label: __( 'Bubble', 'blockive-premium-addon-for-block-pro' ), value: 'bubble' },
								] }
								onChange={ set( 'skin' ) }
							/>
							<SelectControl
								label={ __( 'Image Position', 'blockive-premium-addon-for-block-pro' ) }
								value={ layout }
								options={ [
									{ label: __( 'Inline (beside the name)', 'blockive-premium-addon-for-block-pro' ), value: 'image_inline' },
									{ label: __( 'Stacked (above the name)', 'blockive-premium-addon-for-block-pro' ), value: 'image_stacked' },
									{ label: __( 'Top', 'blockive-premium-addon-for-block-pro' ), value: 'image_above' },
									{ label: __( 'Left', 'blockive-premium-addon-for-block-pro' ), value: 'image_left' },
									{ label: __( 'Right', 'blockive-premium-addon-for-block-pro' ), value: 'image_right' },
								] }
								onChange={ set( 'layout' ) }
							/>
							<SelectControl
								label={ __( 'Alignment', 'blockive-premium-addon-for-block-pro' ) }
								value={ align }
								options={ [
									{ label: __( 'Left', 'blockive-premium-addon-for-block-pro' ), value: 'left' },
									{ label: __( 'Center', 'blockive-premium-addon-for-block-pro' ), value: 'center' },
									{ label: __( 'Right', 'blockive-premium-addon-for-block-pro' ), value: 'right' },
								] }
								onChange={ set( 'align' ) }
							/>
						</PanelBody>
						<CarouselSettingsPanel attributes={ attributes } setAttributes={ setAttributes } maxPerView={ 4 } />
					</>
				}
				style={
					<>
						<PanelBody title={ skin === 'bubble' ? __( 'Bubble', 'blockive-premium-addon-for-block-pro' ) : __( 'Card', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							<ColorStateControls
								normal={ [
									{ label: __( 'Background', 'blockive-premium-addon-for-block-pro' ), value: cardBgColor, onChange: set( 'cardBgColor' ) },
									{ label: __( 'Border Color', 'blockive-premium-addon-for-block-pro' ), value: cardBorderColor, onChange: set( 'cardBorderColor' ) },
								] }
							/>
							<RangeControl label={ __( 'Border Width (px)', 'blockive-premium-addon-for-block-pro' ) } value={ cardBorderWidth } onChange={ set( 'cardBorderWidth' ) } min={ 0 } max={ 10 } />
							<RangeControl label={ __( 'Border Radius (px)', 'blockive-premium-addon-for-block-pro' ) } value={ cardRadius } onChange={ set( 'cardRadius' ) } min={ 0 } max={ 50 } />
							<RangeControl label={ __( 'Padding (px)', 'blockive-premium-addon-for-block-pro' ) } value={ cardPadding } onChange={ set( 'cardPadding' ) } min={ 0 } max={ 80 } />
						</PanelBody>
						<PanelBody title={ __( 'Content', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<TypographyControls values={ typoValues( attributes, 'content' ) } onChange={ typoOnChange( setAttributes, 'content' ) } />
							<ColorStateControls normal={ [ { label: __( 'Color', 'blockive-premium-addon-for-block-pro' ), value: contentColor, onChange: set( 'contentColor' ) } ] } />
						</PanelBody>
						<PanelBody title={ __( 'Image', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<RangeControl label={ __( 'Size (px)', 'blockive-premium-addon-for-block-pro' ) } value={ imageSize } onChange={ set( 'imageSize' ) } min={ 20 } max={ 200 } />
							<RangeControl label={ __( 'Border Radius (%)', 'blockive-premium-addon-for-block-pro' ) } value={ imageRadius } onChange={ set( 'imageRadius' ) } min={ 0 } max={ 50 } />
						</PanelBody>
						<PanelBody title={ __( 'Name', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<TypographyControls values={ typoValues( attributes, 'name' ) } onChange={ typoOnChange( setAttributes, 'name' ) } />
							<ColorStateControls normal={ [ { label: __( 'Color', 'blockive-premium-addon-for-block-pro' ), value: nameColor, onChange: set( 'nameColor' ) } ] } />
						</PanelBody>
						<PanelBody title={ __( 'Title', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<TypographyControls values={ typoValues( attributes, 'title' ) } onChange={ typoOnChange( setAttributes, 'title' ) } />
							<ColorStateControls normal={ [ { label: __( 'Color', 'blockive-premium-addon-for-block-pro' ), value: titleColor, onChange: set( 'titleColor' ) } ] } />
						</PanelBody>
						<CarouselNavigationStylePanel attributes={ attributes } setAttributes={ setAttributes } />
					</>
				}
				advanced={ <AdvancedTab attributes={ attributes } setAttributes={ setAttributes } /> }
			/>

			<div { ...blockProps }>
				<CarouselPreview attributes={ attributes } list={ list } slides={ slides } />
			</div>
		</>
	);
}
