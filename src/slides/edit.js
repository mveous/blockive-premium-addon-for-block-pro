import { __, sprintf } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { useBlockProps, RichText, BlockControls } from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	RangeControl,
	TextControl,
	ToggleControl,
	Button,
	ButtonGroup,
	ToolbarGroup,
	ToolbarButton,
} from '@wordpress/components';

import InspectorTabs from '../components/inspector-tabs';
import AdvancedTab from '../components/advanced-tab';
import ResponsiveControls from '../components/responsive-controls';
import ColorStateControls from '../components/color-state-controls';
import TypographyControls from '../components/typography-controls';
import ImageControl from '../pro-components/image-control';
import { typoValues, typoOnChange, typoVars, cssVars } from '../template-blocks-site/shared';

const NEW_SLIDE = {
	heading: 'New Slide Heading',
	description: 'Add a short description for this slide.',
	buttonText: 'Click Here',
	url: '',
	newTab: false,
	bgColor: '#374151',
	bgImageUrl: '',
	bgImageId: 0,
	overlay: '',
	align: '',
};

export default function Edit( { attributes, setAttributes } ) {
	const {
		slides,
		height,
		contentWidth,
		padding,
		contentAlign,
		verticalAlign,
		headingTag,
		effect,
		speed,
		autoplay,
		autoplaySpeed,
		pauseOnHover,
		loop,
		navigation,
		kenBurns,
		linkWholeSlide,
		headingColor,
		descColor,
		buttonColor,
		buttonBgColor,
		buttonHoverColor,
		buttonHoverBgColor,
		buttonBorderColor,
		buttonRadius,
		buttonStyle,
		arrowColor,
		arrowSize,
		dotColor,
		dotActiveColor,
		borderRadius,
	} = attributes;

	const [ current, setCurrent ] = useState( 0 );
	const index = Math.min( current, Math.max( 0, slides.length - 1 ) );
	const slide = slides[ index ] || NEW_SLIDE;
	const set = ( key ) => ( val ) => setAttributes( { [ key ]: val } );

	const updateSlide = ( patch ) =>
		setAttributes( { slides: slides.map( ( s, i ) => ( i === index ? { ...s, ...patch } : s ) ) } );

	const addSlide = () => {
		setAttributes( { slides: [ ...slides, { ...NEW_SLIDE } ] } );
		setCurrent( slides.length );
	};
	const duplicateSlide = () => {
		setAttributes( { slides: [ ...slides.slice( 0, index + 1 ), { ...slide }, ...slides.slice( index + 1 ) ] } );
		setCurrent( index + 1 );
	};
	const removeSlide = () => {
		if ( slides.length < 2 ) {
			return;
		}
		setAttributes( { slides: slides.filter( ( _, i ) => i !== index ) } );
		setCurrent( Math.max( 0, index - 1 ) );
	};
	const moveSlide = ( delta ) => {
		const next = [ ...slides ];
		const [ moved ] = next.splice( index, 1 );
		next.splice( index + delta, 0, moved );
		setAttributes( { slides: next } );
		setCurrent( index + delta );
	};

	const align = slide.align || contentAlign;
	const blockProps = useBlockProps( {
		className: `bpafb-slides bpafb-slides--fade bpafb-slides--valign-${ verticalAlign } is-editor`,
		style: cssVars( {
			'--bpafb-slides-height': height,
			'--bpafb-slides-content-width': contentWidth,
			'--bpafb-slides-padding': padding,
			'--bpafb-slides-radius': borderRadius,
			'--bpafb-slides-heading-color': headingColor,
			'--bpafb-slides-desc-color': descColor,
			'--bpafb-slides-btn-color': buttonColor,
			'--bpafb-slides-btn-bg': buttonBgColor,
			'--bpafb-slides-btn-border': buttonBorderColor,
			'--bpafb-slides-btn-radius': buttonRadius,
			'--bpafb-slides-arrow-color': arrowColor,
			'--bpafb-slides-arrow-size': arrowSize,
			'--bpafb-slides-dot-color': dotColor,
			'--bpafb-slides-dot-active': dotActiveColor,
			...typoVars( attributes, 'heading', '--bpafb-slides-heading' ),
			...typoVars( attributes, 'desc', '--bpafb-slides-desc' ),
		} ),
	} );

	/* translators: 1: current slide number, 2: total slides. */
	const slideLabel = sprintf( __( 'Slide %1$d of %2$d', 'blockive-premium-addon-for-block-pro' ), index + 1, slides.length );

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton icon="arrow-left-alt2" label={ __( 'Previous slide', 'blockive-premium-addon-for-block-pro' ) } disabled={ index === 0 } onClick={ () => setCurrent( index - 1 ) } />
					<ToolbarButton disabled>{ `${ index + 1 } / ${ slides.length }` }</ToolbarButton>
					<ToolbarButton icon="arrow-right-alt2" label={ __( 'Next slide', 'blockive-premium-addon-for-block-pro' ) } disabled={ index === slides.length - 1 } onClick={ () => setCurrent( index + 1 ) } />
					<ToolbarButton icon="plus" label={ __( 'Add slide', 'blockive-premium-addon-for-block-pro' ) } onClick={ addSlide } />
				</ToolbarGroup>
			</BlockControls>

			<InspectorTabs
				general={
					<>
						<PanelBody title={ slideLabel } initialOpen={ true }>
							<ButtonGroup className="bpafb-slides-editor__actions">
								<Button size="small" icon="arrow-up-alt2" label={ __( 'Move earlier', 'blockive-premium-addon-for-block-pro' ) } disabled={ index === 0 } onClick={ () => moveSlide( -1 ) } />
								<Button size="small" icon="arrow-down-alt2" label={ __( 'Move later', 'blockive-premium-addon-for-block-pro' ) } disabled={ index === slides.length - 1 } onClick={ () => moveSlide( 1 ) } />
								<Button size="small" icon="admin-page" label={ __( 'Duplicate slide', 'blockive-premium-addon-for-block-pro' ) } onClick={ duplicateSlide } />
								<Button size="small" icon="trash" isDestructive label={ __( 'Remove slide', 'blockive-premium-addon-for-block-pro' ) } disabled={ slides.length < 2 } onClick={ removeSlide } />
								<Button size="small" variant="secondary" onClick={ addSlide }>
									{ __( 'Add Slide', 'blockive-premium-addon-for-block-pro' ) }
								</Button>
							</ButtonGroup>
							<ImageControl
								label={ __( 'Background Image', 'blockive-premium-addon-for-block-pro' ) }
								id={ slide.bgImageId }
								url={ slide.bgImageUrl }
								onChange={ ( media ) => updateSlide( { bgImageId: media.id, bgImageUrl: media.url } ) }
							/>
							<ColorStateControls
								normal={ [
									{ label: __( 'Background Color', 'blockive-premium-addon-for-block-pro' ), value: slide.bgColor, onChange: ( val ) => updateSlide( { bgColor: val || '' } ) },
									{ label: __( 'Overlay', 'blockive-premium-addon-for-block-pro' ), value: slide.overlay, onChange: ( val ) => updateSlide( { overlay: val || '' } ) },
								] }
							/>
							<TextControl label={ __( 'Button Text', 'blockive-premium-addon-for-block-pro' ) } value={ slide.buttonText } onChange={ ( val ) => updateSlide( { buttonText: val } ) } help={ __( 'Leave empty to hide the button.', 'blockive-premium-addon-for-block-pro' ) } />
							<TextControl label={ __( 'Link', 'blockive-premium-addon-for-block-pro' ) } type="url" value={ slide.url } onChange={ ( val ) => updateSlide( { url: val } ) } />
							{ !! slide.url && (
								<ToggleControl label={ __( 'Open in New Tab', 'blockive-premium-addon-for-block-pro' ) } checked={ !! slide.newTab } onChange={ ( val ) => updateSlide( { newTab: val } ) } />
							) }
							<SelectControl
								label={ __( 'Content Alignment (this slide)', 'blockive-premium-addon-for-block-pro' ) }
								value={ slide.align || '' }
								options={ [
									{ label: __( 'Default', 'blockive-premium-addon-for-block-pro' ), value: '' },
									{ label: __( 'Left', 'blockive-premium-addon-for-block-pro' ), value: 'left' },
									{ label: __( 'Center', 'blockive-premium-addon-for-block-pro' ), value: 'center' },
									{ label: __( 'Right', 'blockive-premium-addon-for-block-pro' ), value: 'right' },
								] }
								onChange={ ( val ) => updateSlide( { align: val } ) }
							/>
						</PanelBody>
						<PanelBody title={ __( 'Slider Settings', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<SelectControl
								label={ __( 'Transition', 'blockive-premium-addon-for-block-pro' ) }
								value={ effect }
								options={ [
									{ label: __( 'Slide', 'blockive-premium-addon-for-block-pro' ), value: 'slide' },
									{ label: __( 'Fade', 'blockive-premium-addon-for-block-pro' ), value: 'fade' },
								] }
								onChange={ set( 'effect' ) }
							/>
							<RangeControl label={ __( 'Transition Speed (ms)', 'blockive-premium-addon-for-block-pro' ) } value={ speed } onChange={ set( 'speed' ) } min={ 100 } max={ 2000 } step={ 50 } />
							<SelectControl
								label={ __( 'Navigation', 'blockive-premium-addon-for-block-pro' ) }
								value={ navigation }
								options={ [
									{ label: __( 'Arrows and Dots', 'blockive-premium-addon-for-block-pro' ), value: 'both' },
									{ label: __( 'Arrows', 'blockive-premium-addon-for-block-pro' ), value: 'arrows' },
									{ label: __( 'Dots', 'blockive-premium-addon-for-block-pro' ), value: 'dots' },
									{ label: __( 'None', 'blockive-premium-addon-for-block-pro' ), value: 'none' },
								] }
								onChange={ set( 'navigation' ) }
							/>
							<ToggleControl label={ __( 'Autoplay', 'blockive-premium-addon-for-block-pro' ) } checked={ !! autoplay } onChange={ set( 'autoplay' ) } help={ __( 'A pause button is added automatically, and autoplay stays off for visitors who prefer reduced motion.', 'blockive-premium-addon-for-block-pro' ) } />
							{ autoplay && (
								<>
									<RangeControl label={ __( 'Autoplay Interval (ms)', 'blockive-premium-addon-for-block-pro' ) } value={ autoplaySpeed } onChange={ set( 'autoplaySpeed' ) } min={ 1500 } max={ 15000 } step={ 500 } />
									<ToggleControl label={ __( 'Pause on Hover', 'blockive-premium-addon-for-block-pro' ) } checked={ !! pauseOnHover } onChange={ set( 'pauseOnHover' ) } />
								</>
							) }
							<ToggleControl label={ __( 'Infinite Loop', 'blockive-premium-addon-for-block-pro' ) } checked={ !! loop } onChange={ set( 'loop' ) } />
							<ToggleControl label={ __( 'Ken Burns Zoom', 'blockive-premium-addon-for-block-pro' ) } checked={ !! kenBurns } onChange={ set( 'kenBurns' ) } />
							<ToggleControl label={ __( 'Make Whole Slide Clickable', 'blockive-premium-addon-for-block-pro' ) } checked={ !! linkWholeSlide } onChange={ set( 'linkWholeSlide' ) } />
							<SelectControl
								label={ __( 'Heading Tag', 'blockive-premium-addon-for-block-pro' ) }
								value={ headingTag }
								options={ [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div' ].map( ( t ) => ( { label: t.toUpperCase(), value: t } ) ) }
								onChange={ set( 'headingTag' ) }
							/>
						</PanelBody>
					</>
				}
				style={
					<>
						<PanelBody title={ __( 'Slides', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							<ResponsiveControls>
								{ ( device ) => {
									const key = { desktop: 'height', tablet: 'heightTablet', mobile: 'heightMobile' }[ device ] || 'height';
									return (
										<RangeControl
											label={ __( 'Height (px)', 'blockive-premium-addon-for-block-pro' ) }
											value={ attributes[ key ] }
											onChange={ ( val ) => setAttributes( { [ key ]: val } ) }
											min={ 150 }
											max={ 1200 }
											allowReset={ device !== 'desktop' }
										/>
									);
								} }
							</ResponsiveControls>
							<RangeControl label={ __( 'Content Max Width (px)', 'blockive-premium-addon-for-block-pro' ) } value={ contentWidth } onChange={ set( 'contentWidth' ) } min={ 200 } max={ 1400 } />
							<RangeControl label={ __( 'Padding (px)', 'blockive-premium-addon-for-block-pro' ) } value={ padding } onChange={ set( 'padding' ) } min={ 0 } max={ 150 } />
							<RangeControl label={ __( 'Border Radius (px)', 'blockive-premium-addon-for-block-pro' ) } value={ borderRadius } onChange={ set( 'borderRadius' ) } min={ 0 } max={ 60 } />
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
							<SelectControl
								label={ __( 'Vertical Position', 'blockive-premium-addon-for-block-pro' ) }
								value={ verticalAlign }
								options={ [
									{ label: __( 'Top', 'blockive-premium-addon-for-block-pro' ), value: 'top' },
									{ label: __( 'Middle', 'blockive-premium-addon-for-block-pro' ), value: 'center' },
									{ label: __( 'Bottom', 'blockive-premium-addon-for-block-pro' ), value: 'bottom' },
								] }
								onChange={ set( 'verticalAlign' ) }
							/>
						</PanelBody>
						<PanelBody title={ __( 'Heading', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<TypographyControls values={ typoValues( attributes, 'heading' ) } onChange={ typoOnChange( setAttributes, 'heading' ) } />
							<ColorStateControls normal={ [ { label: __( 'Color', 'blockive-premium-addon-for-block-pro' ), value: headingColor, onChange: set( 'headingColor' ) } ] } />
						</PanelBody>
						<PanelBody title={ __( 'Description', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<TypographyControls values={ typoValues( attributes, 'desc' ) } onChange={ typoOnChange( setAttributes, 'desc' ) } />
							<ColorStateControls normal={ [ { label: __( 'Color', 'blockive-premium-addon-for-block-pro' ), value: descColor, onChange: set( 'descColor' ) } ] } />
						</PanelBody>
						<PanelBody title={ __( 'Button', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<SelectControl
								label={ __( 'Style', 'blockive-premium-addon-for-block-pro' ) }
								value={ buttonStyle }
								options={ [
									{ label: __( 'Outline', 'blockive-premium-addon-for-block-pro' ), value: 'outline' },
									{ label: __( 'Filled', 'blockive-premium-addon-for-block-pro' ), value: 'filled' },
								] }
								onChange={ set( 'buttonStyle' ) }
							/>
							<ColorStateControls
								normal={ [
									{ label: __( 'Text', 'blockive-premium-addon-for-block-pro' ), value: buttonColor, onChange: set( 'buttonColor' ) },
									{ label: __( 'Background', 'blockive-premium-addon-for-block-pro' ), value: buttonBgColor, onChange: set( 'buttonBgColor' ) },
									{ label: __( 'Border', 'blockive-premium-addon-for-block-pro' ), value: buttonBorderColor, onChange: set( 'buttonBorderColor' ) },
								] }
								hover={ [
									{ label: __( 'Text', 'blockive-premium-addon-for-block-pro' ), value: buttonHoverColor, onChange: set( 'buttonHoverColor' ) },
									{ label: __( 'Background', 'blockive-premium-addon-for-block-pro' ), value: buttonHoverBgColor, onChange: set( 'buttonHoverBgColor' ) },
								] }
							/>
							<RangeControl label={ __( 'Border Radius (px)', 'blockive-premium-addon-for-block-pro' ) } value={ buttonRadius } onChange={ set( 'buttonRadius' ) } min={ 0 } max={ 50 } />
						</PanelBody>
						<PanelBody title={ __( 'Navigation', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<RangeControl label={ __( 'Arrow Size (px)', 'blockive-premium-addon-for-block-pro' ) } value={ arrowSize } onChange={ set( 'arrowSize' ) } min={ 10 } max={ 60 } />
							<ColorStateControls
								normal={ [
									{ label: __( 'Arrows', 'blockive-premium-addon-for-block-pro' ), value: arrowColor, onChange: set( 'arrowColor' ) },
									{ label: __( 'Dots', 'blockive-premium-addon-for-block-pro' ), value: dotColor, onChange: set( 'dotColor' ) },
									{ label: __( 'Active Dot', 'blockive-premium-addon-for-block-pro' ), value: dotActiveColor, onChange: set( 'dotActiveColor' ) },
								] }
							/>
						</PanelBody>
					</>
				}
				advanced={ <AdvancedTab attributes={ attributes } setAttributes={ setAttributes } /> }
			/>

			<div { ...blockProps }>
				<div className="bpafb-slides__viewport">
					<div className="bpafb-slides__track">
						<div className={ `bpafb-slides__slide bpafb-slides__slide--align-${ align } is-active` } style={ { backgroundColor: slide.bgColor || undefined } }>
							{ slide.bgImageUrl && <img className="bpafb-slides__bg" src={ slide.bgImageUrl } alt="" /> }
							<div className="bpafb-slides__overlay" style={ slide.overlay ? { background: slide.overlay } : undefined } />
							<div className="bpafb-slides__content">
								<RichText tagName={ headingTag } className="bpafb-slides__heading" value={ slide.heading } onChange={ ( val ) => updateSlide( { heading: val } ) } placeholder={ __( 'Slide heading…', 'blockive-premium-addon-for-block-pro' ) } allowedFormats={ [ 'core/bold', 'core/italic' ] } />
								<RichText tagName="div" className="bpafb-slides__desc" value={ slide.description } onChange={ ( val ) => updateSlide( { description: val } ) } placeholder={ __( 'Slide description…', 'blockive-premium-addon-for-block-pro' ) } />
								{ !! slide.buttonText && <span className={ `bpafb-slides__button bpafb-slides__button--${ buttonStyle }` }>{ slide.buttonText }</span> }
							</div>
						</div>
					</div>
				</div>
				{ slides.length > 1 && navigation !== 'none' && (
					<>
						{ ( navigation === 'both' || navigation === 'arrows' ) && (
							<>
								<button type="button" className="bpafb-slides__arrow bpafb-slides__arrow--prev" onClick={ () => setCurrent( Math.max( 0, index - 1 ) ) } aria-label={ __( 'Previous slide', 'blockive-premium-addon-for-block-pro' ) }>
									<i className="fa-solid fa-chevron-left" aria-hidden="true" />
								</button>
								<button type="button" className="bpafb-slides__arrow bpafb-slides__arrow--next" onClick={ () => setCurrent( Math.min( slides.length - 1, index + 1 ) ) } aria-label={ __( 'Next slide', 'blockive-premium-addon-for-block-pro' ) }>
									<i className="fa-solid fa-chevron-right" aria-hidden="true" />
								</button>
							</>
						) }
						{ ( navigation === 'both' || navigation === 'dots' ) && (
							<div className="bpafb-slides__bottom">
								<div className="bpafb-slides__dots">
									{ slides.map( ( _, i ) => (
										<button
											type="button"
											key={ i }
											className={ `bpafb-slides__dot${ i === index ? ' is-active' : '' }` }
											onClick={ () => setCurrent( i ) }
											/* translators: %d: slide number. */
											aria-label={ sprintf( __( 'Edit slide %d', 'blockive-premium-addon-for-block-pro' ), i + 1 ) }
										/>
									) ) }
								</div>
							</div>
						) }
					</>
				) }
			</div>
		</>
	);
}
