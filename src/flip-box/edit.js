import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { useBlockProps, RichText, BlockControls, AlignmentControl } from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	RangeControl,
	TextControl,
	ToggleControl,
	ToolbarGroup,
	ToolbarButton,
} from '@wordpress/components';

import InspectorTabs from '../components/inspector-tabs';
import AdvancedTab from '../components/advanced-tab';
import ColorStateControls from '../components/color-state-controls';
import TypographyControls from '../components/typography-controls';
import IconPicker from '../pro-components/icon-picker';
import ImageControl from '../pro-components/image-control';
import { typoValues, typoOnChange, typoVars, cssVars } from '../template-blocks-site/shared';

export default function Edit( { attributes, setAttributes } ) {
	const {
		frontGraphic,
		frontIcon,
		frontImageId,
		frontImageUrl,
		frontTitle,
		frontDesc,
		frontBg,
		frontBgImageUrl,
		frontBgImageId,
		frontOverlay,
		frontColor,
		backTitle,
		backDesc,
		buttonText,
		link,
		linkNewTab,
		linkType,
		backBg,
		backBgImageUrl,
		backBgImageId,
		backOverlay,
		backColor,
		effect,
		direction,
		height,
		heightMobile,
		radius,
		padding,
		contentAlign,
		verticalAlign,
		iconSize,
		iconColor,
		duration,
		buttonColor,
		buttonBgColor,
		buttonHoverColor,
		buttonHoverBgColor,
		buttonRadius,
	} = attributes;

	const [ side, setSide ] = useState( 'front' );
	const set = ( key ) => ( val ) => setAttributes( { [ key ]: val } );

	const blockProps = useBlockProps( {
		className: `bpafb-flip bpafb-flip--${ effect } bpafb-flip--dir-${ direction } bpafb-flip--align-${ contentAlign } bpafb-flip--valign-${ verticalAlign } is-editor is-editing-${ side }`,
		style: cssVars( {
			'--bpafb-flip-height': height,
			'--bpafb-flip-radius': radius,
			'--bpafb-flip-padding': padding,
			'--bpafb-flip-front-bg': frontBg,
			'--bpafb-flip-front-overlay': frontOverlay,
			'--bpafb-flip-front-color': frontColor,
			'--bpafb-flip-back-bg': backBg,
			'--bpafb-flip-back-overlay': backOverlay,
			'--bpafb-flip-back-color': backColor,
			'--bpafb-flip-icon-size': iconSize,
			'--bpafb-flip-icon-color': iconColor,
			'--bpafb-flip-btn-color': buttonColor,
			'--bpafb-flip-btn-bg': buttonBgColor,
			'--bpafb-flip-btn-radius': buttonRadius,
			...typoVars( attributes, 'title', '--bpafb-flip-title' ),
			...typoVars( attributes, 'desc', '--bpafb-flip-desc' ),
		} ),
	} );

	const sideSwitch = (
		<ToolbarGroup>
			<ToolbarButton isPressed={ side === 'front' } onClick={ () => setSide( 'front' ) }>
				{ __( 'Front', 'blockive-premium-addon-for-block-pro' ) }
			</ToolbarButton>
			<ToolbarButton isPressed={ side === 'back' } onClick={ () => setSide( 'back' ) }>
				{ __( 'Back', 'blockive-premium-addon-for-block-pro' ) }
			</ToolbarButton>
		</ToolbarGroup>
	);

	return (
		<>
			<BlockControls>
				{ sideSwitch }
				<AlignmentControl value={ contentAlign } onChange={ ( val ) => setAttributes( { contentAlign: val || 'center' } ) } />
			</BlockControls>

			<InspectorTabs
				general={
					<>
						<PanelBody title={ __( 'Front', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true } onToggle={ () => setSide( 'front' ) }>
							<SelectControl
								label={ __( 'Graphic', 'blockive-premium-addon-for-block-pro' ) }
								value={ frontGraphic }
								options={ [
									{ label: __( 'Icon', 'blockive-premium-addon-for-block-pro' ), value: 'icon' },
									{ label: __( 'Image', 'blockive-premium-addon-for-block-pro' ), value: 'image' },
									{ label: __( 'None', 'blockive-premium-addon-for-block-pro' ), value: 'none' },
								] }
								onChange={ set( 'frontGraphic' ) }
							/>
							{ frontGraphic === 'icon' && <IconPicker value={ frontIcon } onChange={ set( 'frontIcon' ) } /> }
							{ frontGraphic === 'image' && (
								<ImageControl
									label={ __( 'Image', 'blockive-premium-addon-for-block-pro' ) }
									id={ frontImageId }
									url={ frontImageUrl }
									onChange={ ( media ) => setAttributes( { frontImageId: media.id, frontImageUrl: media.url } ) }
								/>
							) }
							<ImageControl
								label={ __( 'Background Image', 'blockive-premium-addon-for-block-pro' ) }
								id={ frontBgImageId }
								url={ frontBgImageUrl }
								onChange={ ( media ) => setAttributes( { frontBgImageId: media.id, frontBgImageUrl: media.url } ) }
							/>
						</PanelBody>
						<PanelBody title={ __( 'Back', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false } onToggle={ () => setSide( 'back' ) }>
							<TextControl label={ __( 'Button Text', 'blockive-premium-addon-for-block-pro' ) } value={ buttonText } onChange={ set( 'buttonText' ) } help={ __( 'Leave empty to hide the button.', 'blockive-premium-addon-for-block-pro' ) } />
							<TextControl label={ __( 'Link', 'blockive-premium-addon-for-block-pro' ) } type="url" value={ link } onChange={ set( 'link' ) } />
							{ !! link && (
								<>
									<SelectControl
										label={ __( 'Link Applies To', 'blockive-premium-addon-for-block-pro' ) }
										value={ linkType }
										options={ [
											{ label: __( 'Button only', 'blockive-premium-addon-for-block-pro' ), value: 'button' },
											{ label: __( 'Whole back side', 'blockive-premium-addon-for-block-pro' ), value: 'box' },
										] }
										onChange={ set( 'linkType' ) }
									/>
									<ToggleControl label={ __( 'Open in New Tab', 'blockive-premium-addon-for-block-pro' ) } checked={ !! linkNewTab } onChange={ set( 'linkNewTab' ) } />
								</>
							) }
							<ImageControl
								label={ __( 'Background Image', 'blockive-premium-addon-for-block-pro' ) }
								id={ backBgImageId }
								url={ backBgImageUrl }
								onChange={ ( media ) => setAttributes( { backBgImageId: media.id, backBgImageUrl: media.url } ) }
							/>
						</PanelBody>
						<PanelBody title={ __( 'Effect', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<SelectControl
								label={ __( 'Effect', 'blockive-premium-addon-for-block-pro' ) }
								value={ effect }
								options={ [
									{ label: __( 'Flip (3D)', 'blockive-premium-addon-for-block-pro' ), value: 'flip' },
									{ label: __( 'Slide', 'blockive-premium-addon-for-block-pro' ), value: 'slide' },
									{ label: __( 'Push', 'blockive-premium-addon-for-block-pro' ), value: 'push' },
									{ label: __( 'Fade', 'blockive-premium-addon-for-block-pro' ), value: 'fade' },
									{ label: __( 'Zoom In', 'blockive-premium-addon-for-block-pro' ), value: 'zoom-in' },
									{ label: __( 'Zoom Out', 'blockive-premium-addon-for-block-pro' ), value: 'zoom-out' },
								] }
								onChange={ set( 'effect' ) }
							/>
							{ [ 'flip', 'slide', 'push' ].includes( effect ) && (
								<SelectControl
									label={ __( 'Direction', 'blockive-premium-addon-for-block-pro' ) }
									value={ direction }
									options={ [
										{ label: __( 'Left', 'blockive-premium-addon-for-block-pro' ), value: 'left' },
										{ label: __( 'Right', 'blockive-premium-addon-for-block-pro' ), value: 'right' },
										{ label: __( 'Up', 'blockive-premium-addon-for-block-pro' ), value: 'up' },
										{ label: __( 'Down', 'blockive-premium-addon-for-block-pro' ), value: 'down' },
									] }
									onChange={ set( 'direction' ) }
								/>
							) }
							<RangeControl label={ __( 'Duration (ms)', 'blockive-premium-addon-for-block-pro' ) } value={ duration } onChange={ set( 'duration' ) } min={ 100 } max={ 2000 } step={ 50 } />
							<p className="bpafb-help-text">
								{ __( 'The back shows on hover, on keyboard focus, and on tap on touch screens.', 'blockive-premium-addon-for-block-pro' ) }
							</p>
						</PanelBody>
					</>
				}
				style={
					<>
						<PanelBody title={ __( 'Box', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							<RangeControl label={ __( 'Height (px)', 'blockive-premium-addon-for-block-pro' ) } value={ height } onChange={ set( 'height' ) } min={ 120 } max={ 900 } />
							<RangeControl label={ __( 'Mobile Height (px)', 'blockive-premium-addon-for-block-pro' ) } value={ heightMobile } onChange={ set( 'heightMobile' ) } min={ 120 } max={ 900 } allowReset />
							<RangeControl label={ __( 'Border Radius (px)', 'blockive-premium-addon-for-block-pro' ) } value={ radius } onChange={ set( 'radius' ) } min={ 0 } max={ 60 } />
							<RangeControl label={ __( 'Padding (px)', 'blockive-premium-addon-for-block-pro' ) } value={ padding } onChange={ set( 'padding' ) } min={ 0 } max={ 100 } />
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
						</PanelBody>
						<PanelBody title={ __( 'Front Colors', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<ColorStateControls
								normal={ [
									{ label: __( 'Background', 'blockive-premium-addon-for-block-pro' ), value: frontBg, onChange: set( 'frontBg' ) },
									{ label: __( 'Image Overlay', 'blockive-premium-addon-for-block-pro' ), value: frontOverlay, onChange: set( 'frontOverlay' ) },
									{ label: __( 'Text', 'blockive-premium-addon-for-block-pro' ), value: frontColor, onChange: set( 'frontColor' ) },
									{ label: __( 'Icon', 'blockive-premium-addon-for-block-pro' ), value: iconColor, onChange: set( 'iconColor' ) },
								] }
							/>
							{ frontGraphic === 'icon' && (
								<RangeControl label={ __( 'Icon Size (px)', 'blockive-premium-addon-for-block-pro' ) } value={ iconSize } onChange={ set( 'iconSize' ) } min={ 10 } max={ 150 } />
							) }
						</PanelBody>
						<PanelBody title={ __( 'Back Colors & Button', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<ColorStateControls
								normal={ [
									{ label: __( 'Background', 'blockive-premium-addon-for-block-pro' ), value: backBg, onChange: set( 'backBg' ) },
									{ label: __( 'Image Overlay', 'blockive-premium-addon-for-block-pro' ), value: backOverlay, onChange: set( 'backOverlay' ) },
									{ label: __( 'Text', 'blockive-premium-addon-for-block-pro' ), value: backColor, onChange: set( 'backColor' ) },
									{ label: __( 'Button Text', 'blockive-premium-addon-for-block-pro' ), value: buttonColor, onChange: set( 'buttonColor' ) },
									{ label: __( 'Button Background / Border', 'blockive-premium-addon-for-block-pro' ), value: buttonBgColor, onChange: set( 'buttonBgColor' ) },
								] }
								hover={ [
									{ label: __( 'Button Text', 'blockive-premium-addon-for-block-pro' ), value: buttonHoverColor, onChange: set( 'buttonHoverColor' ) },
									{ label: __( 'Button Background', 'blockive-premium-addon-for-block-pro' ), value: buttonHoverBgColor, onChange: set( 'buttonHoverBgColor' ) },
								] }
							/>
							<RangeControl label={ __( 'Button Radius (px)', 'blockive-premium-addon-for-block-pro' ) } value={ buttonRadius } onChange={ set( 'buttonRadius' ) } min={ 0 } max={ 50 } />
						</PanelBody>
						<PanelBody title={ __( 'Title', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<TypographyControls values={ typoValues( attributes, 'title' ) } onChange={ typoOnChange( setAttributes, 'title' ) } />
						</PanelBody>
						<PanelBody title={ __( 'Description', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<TypographyControls values={ typoValues( attributes, 'desc' ) } onChange={ typoOnChange( setAttributes, 'desc' ) } />
						</PanelBody>
					</>
				}
				advanced={ <AdvancedTab attributes={ attributes } setAttributes={ setAttributes } /> }
			/>

			<div { ...blockProps }>
				<div className="bpafb-flip__inner">
					<div className="bpafb-flip__side bpafb-flip__front" style={ frontBgImageUrl ? { backgroundImage: `url(${ frontBgImageUrl })` } : undefined }>
						<div className="bpafb-flip__overlay" />
						<div className="bpafb-flip__content">
							{ frontGraphic === 'icon' && (
								<div className="bpafb-flip__icon">
									<i className={ frontIcon } aria-hidden="true" />
								</div>
							) }
							{ frontGraphic === 'image' && frontImageUrl && (
								<div className="bpafb-flip__image">
									<img src={ frontImageUrl } alt="" />
								</div>
							) }
							<RichText tagName="h3" className="bpafb-flip__title" value={ frontTitle } onChange={ set( 'frontTitle' ) } placeholder={ __( 'Front heading…', 'blockive-premium-addon-for-block-pro' ) } allowedFormats={ [ 'core/bold', 'core/italic' ] } />
							<RichText tagName="div" className="bpafb-flip__desc" value={ frontDesc } onChange={ set( 'frontDesc' ) } placeholder={ __( 'Front text…', 'blockive-premium-addon-for-block-pro' ) } />
						</div>
					</div>
					<div className="bpafb-flip__side bpafb-flip__back" style={ backBgImageUrl ? { backgroundImage: `url(${ backBgImageUrl })` } : undefined }>
						<div className="bpafb-flip__overlay" />
						<div className="bpafb-flip__content">
							<RichText tagName="h3" className="bpafb-flip__title" value={ backTitle } onChange={ set( 'backTitle' ) } placeholder={ __( 'Back heading…', 'blockive-premium-addon-for-block-pro' ) } allowedFormats={ [ 'core/bold', 'core/italic' ] } />
							<RichText tagName="div" className="bpafb-flip__desc" value={ backDesc } onChange={ set( 'backDesc' ) } placeholder={ __( 'Back text…', 'blockive-premium-addon-for-block-pro' ) } />
							{ !! buttonText && <span className="bpafb-flip__button">{ buttonText }</span> }
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
