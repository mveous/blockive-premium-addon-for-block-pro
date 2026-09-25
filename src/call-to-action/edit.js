import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, BlockControls, AlignmentControl } from '@wordpress/block-editor';
import { PanelBody, SelectControl, RangeControl, TextControl, ToggleControl } from '@wordpress/components';

import InspectorTabs from '../components/inspector-tabs';
import AdvancedTab from '../components/advanced-tab';
import ColorStateControls from '../components/color-state-controls';
import TypographyControls from '../components/typography-controls';
import IconPicker from '../pro-components/icon-picker';
import ImageControl from '../pro-components/image-control';
import { typoValues, typoOnChange, typoVars, cssVars } from '../template-blocks-site/shared';

const TAGS = [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div' ].map( ( t ) => ( { label: t.toUpperCase(), value: t } ) );

export default function Edit( { attributes, setAttributes } ) {
	const {
		skin,
		imagePosition,
		imageId,
		imageUrl,
		imageAlt,
		imageWidth,
		imageMinHeight,
		graphic,
		icon,
		iconSize,
		iconColor,
		title,
		titleTag,
		description,
		buttonText,
		link,
		linkNewTab,
		linkWholeBox,
		ribbonText,
		ribbonPosition,
		ribbonBg,
		ribbonColor,
		contentAlign,
		verticalAlign,
		minHeight,
		padding,
		borderRadius,
		contentBg,
		overlayColor,
		overlayHoverColor,
		hoverEffect,
		titleColor,
		descColor,
		buttonColor,
		buttonBgColor,
		buttonHoverColor,
		buttonHoverBgColor,
		buttonRadius,
		buttonStyle,
	} = attributes;

	const set = ( key ) => ( val ) => setAttributes( { [ key ]: val } );

	const blockProps = useBlockProps( {
		className: [
			'bpafb-cta',
			`bpafb-cta--${ skin }`,
			`bpafb-cta--image-${ imagePosition }`,
			`bpafb-cta--align-${ contentAlign }`,
			`bpafb-cta--valign-${ verticalAlign }`,
			`bpafb-cta--hover-${ hoverEffect }`,
			imageUrl ? 'has-image' : '',
		]
			.filter( Boolean )
			.join( ' ' ),
		style: cssVars( {
			'--bpafb-cta-image-width': typeof imageWidth === 'number' ? `${ imageWidth }%` : undefined,
			'--bpafb-cta-image-min-height': imageMinHeight,
			'--bpafb-cta-min-height': minHeight,
			'--bpafb-cta-padding': padding,
			'--bpafb-cta-radius': borderRadius,
			'--bpafb-cta-content-bg': contentBg,
			'--bpafb-cta-overlay': overlayColor,
			'--bpafb-cta-overlay-hover': overlayHoverColor,
			'--bpafb-cta-icon-size': iconSize,
			'--bpafb-cta-icon-color': iconColor,
			'--bpafb-cta-title-color': titleColor,
			'--bpafb-cta-desc-color': descColor,
			'--bpafb-cta-btn-color': buttonColor,
			'--bpafb-cta-btn-bg': buttonBgColor,
			'--bpafb-cta-btn-hover-color': buttonHoverColor,
			'--bpafb-cta-btn-hover-bg': buttonHoverBgColor,
			'--bpafb-cta-btn-radius': buttonRadius,
			'--bpafb-cta-ribbon-bg': ribbonBg,
			'--bpafb-cta-ribbon-color': ribbonColor,
			...typoVars( attributes, 'title', '--bpafb-cta-title' ),
			...typoVars( attributes, 'desc', '--bpafb-cta-desc' ),
		} ),
	} );

	return (
		<>
			<BlockControls>
				<AlignmentControl value={ contentAlign } onChange={ ( val ) => setAttributes( { contentAlign: val || 'center' } ) } />
			</BlockControls>

			<InspectorTabs
				general={
					<>
						<PanelBody title={ __( 'Layout & Image', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							<SelectControl
								label={ __( 'Skin', 'blockive-premium-addon-for-block-pro' ) }
								value={ skin }
								options={ [
									{ label: __( 'Classic (image beside content)', 'blockive-premium-addon-for-block-pro' ), value: 'classic' },
									{ label: __( 'Cover (content over image)', 'blockive-premium-addon-for-block-pro' ), value: 'cover' },
								] }
								onChange={ set( 'skin' ) }
							/>
							<ImageControl
								label={ skin === 'cover' ? __( 'Background Image', 'blockive-premium-addon-for-block-pro' ) : __( 'Image', 'blockive-premium-addon-for-block-pro' ) }
								id={ imageId }
								url={ imageUrl }
								onChange={ ( media ) => setAttributes( { imageId: media.id, imageUrl: media.url, imageAlt: media.alt } ) }
							/>
							{ !! imageUrl && (
								<TextControl label={ __( 'Image Alt Text', 'blockive-premium-addon-for-block-pro' ) } value={ imageAlt } onChange={ set( 'imageAlt' ) } />
							) }
							{ skin === 'classic' && (
								<SelectControl
									label={ __( 'Image Position', 'blockive-premium-addon-for-block-pro' ) }
									value={ imagePosition }
									options={ [
										{ label: __( 'Left', 'blockive-premium-addon-for-block-pro' ), value: 'left' },
										{ label: __( 'Right', 'blockive-premium-addon-for-block-pro' ), value: 'right' },
										{ label: __( 'Top', 'blockive-premium-addon-for-block-pro' ), value: 'top' },
									] }
									onChange={ set( 'imagePosition' ) }
								/>
							) }
							<SelectControl
								label={ __( 'Graphic Element', 'blockive-premium-addon-for-block-pro' ) }
								value={ graphic }
								options={ [
									{ label: __( 'None', 'blockive-premium-addon-for-block-pro' ), value: 'none' },
									{ label: __( 'Icon', 'blockive-premium-addon-for-block-pro' ), value: 'icon' },
								] }
								onChange={ set( 'graphic' ) }
							/>
							{ graphic === 'icon' && <IconPicker value={ icon } onChange={ set( 'icon' ) } /> }
						</PanelBody>
						<PanelBody title={ __( 'Content & Link', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<SelectControl label={ __( 'Title Tag', 'blockive-premium-addon-for-block-pro' ) } value={ titleTag } options={ TAGS } onChange={ set( 'titleTag' ) } />
							<TextControl label={ __( 'Button Text', 'blockive-premium-addon-for-block-pro' ) } value={ buttonText } onChange={ set( 'buttonText' ) } help={ __( 'Leave empty to hide the button.', 'blockive-premium-addon-for-block-pro' ) } />
							<TextControl label={ __( 'Link', 'blockive-premium-addon-for-block-pro' ) } type="url" value={ link } onChange={ set( 'link' ) } />
							{ !! link && (
								<>
									<ToggleControl label={ __( 'Open in New Tab', 'blockive-premium-addon-for-block-pro' ) } checked={ !! linkNewTab } onChange={ set( 'linkNewTab' ) } />
									<ToggleControl label={ __( 'Make the Whole Box Clickable', 'blockive-premium-addon-for-block-pro' ) } checked={ !! linkWholeBox } onChange={ set( 'linkWholeBox' ) } />
								</>
							) }
						</PanelBody>
						<PanelBody title={ __( 'Ribbon', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<TextControl label={ __( 'Ribbon Text', 'blockive-premium-addon-for-block-pro' ) } value={ ribbonText } onChange={ set( 'ribbonText' ) } help={ __( 'e.g. "New" or "-20%". Leave empty for no ribbon.', 'blockive-premium-addon-for-block-pro' ) } />
							{ !! ribbonText && (
								<SelectControl
									label={ __( 'Ribbon Corner', 'blockive-premium-addon-for-block-pro' ) }
									value={ ribbonPosition }
									options={ [
										{ label: __( 'Right', 'blockive-premium-addon-for-block-pro' ), value: 'right' },
										{ label: __( 'Left', 'blockive-premium-addon-for-block-pro' ), value: 'left' },
									] }
									onChange={ set( 'ribbonPosition' ) }
								/>
							) }
						</PanelBody>
					</>
				}
				style={
					<>
						<PanelBody title={ __( 'Box', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							<SelectControl
								label={ __( 'Vertical Alignment', 'blockive-premium-addon-for-block-pro' ) }
								value={ verticalAlign }
								options={ [
									{ label: __( 'Top', 'blockive-premium-addon-for-block-pro' ), value: 'top' },
									{ label: __( 'Middle', 'blockive-premium-addon-for-block-pro' ), value: 'center' },
									{ label: __( 'Bottom', 'blockive-premium-addon-for-block-pro' ), value: 'bottom' },
								] }
								onChange={ set( 'verticalAlign' ) }
							/>
							<RangeControl label={ __( 'Min Height (px)', 'blockive-premium-addon-for-block-pro' ) } value={ minHeight } onChange={ set( 'minHeight' ) } min={ 100 } max={ 1000 } allowReset />
							<RangeControl label={ __( 'Content Padding (px)', 'blockive-premium-addon-for-block-pro' ) } value={ padding } onChange={ set( 'padding' ) } min={ 0 } max={ 120 } />
							<RangeControl label={ __( 'Border Radius (px)', 'blockive-premium-addon-for-block-pro' ) } value={ borderRadius } onChange={ set( 'borderRadius' ) } min={ 0 } max={ 60 } />
							{ skin === 'classic' && imagePosition !== 'top' && (
								<RangeControl label={ __( 'Image Width (%)', 'blockive-premium-addon-for-block-pro' ) } value={ imageWidth } onChange={ set( 'imageWidth' ) } min={ 10 } max={ 90 } />
							) }
							{ skin === 'classic' && (
								<RangeControl label={ __( 'Image Min Height (px)', 'blockive-premium-addon-for-block-pro' ) } value={ imageMinHeight } onChange={ set( 'imageMinHeight' ) } min={ 50 } max={ 800 } />
							) }
							<SelectControl
								label={ __( 'Image Hover Effect', 'blockive-premium-addon-for-block-pro' ) }
								value={ hoverEffect }
								options={ [
									{ label: __( 'None', 'blockive-premium-addon-for-block-pro' ), value: 'none' },
									{ label: __( 'Zoom In', 'blockive-premium-addon-for-block-pro' ), value: 'zoom-in' },
									{ label: __( 'Zoom Out', 'blockive-premium-addon-for-block-pro' ), value: 'zoom-out' },
									{ label: __( 'Move Left', 'blockive-premium-addon-for-block-pro' ), value: 'move-left' },
									{ label: __( 'Move Right', 'blockive-premium-addon-for-block-pro' ), value: 'move-right' },
								] }
								onChange={ set( 'hoverEffect' ) }
							/>
							<ColorStateControls
								normal={ [
									{ label: __( 'Content Background', 'blockive-premium-addon-for-block-pro' ), value: contentBg, onChange: set( 'contentBg' ) },
									{ label: __( 'Image Overlay', 'blockive-premium-addon-for-block-pro' ), value: overlayColor, onChange: set( 'overlayColor' ) },
								] }
								hover={ [ { label: __( 'Image Overlay', 'blockive-premium-addon-for-block-pro' ), value: overlayHoverColor, onChange: set( 'overlayHoverColor' ) } ] }
							/>
						</PanelBody>
						{ graphic === 'icon' && (
							<PanelBody title={ __( 'Icon', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
								<RangeControl label={ __( 'Size (px)', 'blockive-premium-addon-for-block-pro' ) } value={ iconSize } onChange={ set( 'iconSize' ) } min={ 10 } max={ 150 } />
								<ColorStateControls normal={ [ { label: __( 'Color', 'blockive-premium-addon-for-block-pro' ), value: iconColor, onChange: set( 'iconColor' ) } ] } />
							</PanelBody>
						) }
						<PanelBody title={ __( 'Title', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<TypographyControls values={ typoValues( attributes, 'title' ) } onChange={ typoOnChange( setAttributes, 'title' ) } />
							<ColorStateControls normal={ [ { label: __( 'Color', 'blockive-premium-addon-for-block-pro' ), value: titleColor, onChange: set( 'titleColor' ) } ] } />
						</PanelBody>
						<PanelBody title={ __( 'Description', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<TypographyControls values={ typoValues( attributes, 'desc' ) } onChange={ typoOnChange( setAttributes, 'desc' ) } />
							<ColorStateControls normal={ [ { label: __( 'Color', 'blockive-premium-addon-for-block-pro' ), value: descColor, onChange: set( 'descColor' ) } ] } />
						</PanelBody>
						<PanelBody title={ __( 'Button & Ribbon', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<SelectControl
								label={ __( 'Button Style', 'blockive-premium-addon-for-block-pro' ) }
								value={ buttonStyle }
								options={ [
									{ label: __( 'Filled', 'blockive-premium-addon-for-block-pro' ), value: 'filled' },
									{ label: __( 'Outline', 'blockive-premium-addon-for-block-pro' ), value: 'outline' },
								] }
								onChange={ set( 'buttonStyle' ) }
							/>
							<ColorStateControls
								normal={ [
									{ label: __( 'Button Text', 'blockive-premium-addon-for-block-pro' ), value: buttonColor, onChange: set( 'buttonColor' ) },
									{ label: __( 'Button Background / Border', 'blockive-premium-addon-for-block-pro' ), value: buttonBgColor, onChange: set( 'buttonBgColor' ) },
									{ label: __( 'Ribbon Background', 'blockive-premium-addon-for-block-pro' ), value: ribbonBg, onChange: set( 'ribbonBg' ) },
									{ label: __( 'Ribbon Text', 'blockive-premium-addon-for-block-pro' ), value: ribbonColor, onChange: set( 'ribbonColor' ) },
								] }
								hover={ [
									{ label: __( 'Button Text', 'blockive-premium-addon-for-block-pro' ), value: buttonHoverColor, onChange: set( 'buttonHoverColor' ) },
									{ label: __( 'Button Background', 'blockive-premium-addon-for-block-pro' ), value: buttonHoverBgColor, onChange: set( 'buttonHoverBgColor' ) },
								] }
							/>
							<RangeControl label={ __( 'Button Radius (px)', 'blockive-premium-addon-for-block-pro' ) } value={ buttonRadius } onChange={ set( 'buttonRadius' ) } min={ 0 } max={ 50 } />
						</PanelBody>
					</>
				}
				advanced={ <AdvancedTab attributes={ attributes } setAttributes={ setAttributes } /> }
			/>

			<div { ...blockProps }>
				{ ( imageUrl || skin === 'cover' ) && (
					<div className="bpafb-cta__media">
						{ imageUrl && <img className="bpafb-cta__img" src={ imageUrl } alt="" /> }
						<div className="bpafb-cta__overlay" />
					</div>
				) }
				<div className="bpafb-cta__content">
					{ graphic === 'icon' && (
						<div className="bpafb-cta__icon">
							<i className={ icon } aria-hidden="true" />
						</div>
					) }
					<RichText tagName={ titleTag } className="bpafb-cta__title" value={ title } onChange={ set( 'title' ) } placeholder={ __( 'Heading…', 'blockive-premium-addon-for-block-pro' ) } allowedFormats={ [ 'core/bold', 'core/italic' ] } />
					<RichText tagName="div" className="bpafb-cta__desc" value={ description } onChange={ set( 'description' ) } placeholder={ __( 'Description…', 'blockive-premium-addon-for-block-pro' ) } />
					{ !! buttonText && <span className={ `bpafb-cta__button bpafb-cta__button--${ buttonStyle }` }>{ buttonText }</span> }
				</div>
				{ !! ribbonText && (
					<div className={ `bpafb-cta__ribbon bpafb-cta__ribbon--${ ribbonPosition }` }>
						<span>{ ribbonText }</span>
					</div>
				) }
			</div>
		</>
	);
}
