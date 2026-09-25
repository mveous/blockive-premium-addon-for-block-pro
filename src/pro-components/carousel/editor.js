import { __, sprintf } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import {
	PanelBody,
	SelectControl,
	RangeControl,
	ToggleControl,
} from '@wordpress/components';

import ResponsiveControls from '../../components/responsive-controls';
import ColorStateControls from '../../components/color-state-controls';
import { cssVars } from '../../template-blocks-site/shared';

import './editor.css';

// Item list helpers live in ../item-list; re-exported for the carousel blocks.
export { useItemList, ItemActions, ItemToolbar } from '../item-list';

/**
 * Editor side of the shared multi-slide carousel (see view.js and
 * Bpafb_Pro_Carousel). Each block keeps its own list of items; these
 * helpers add the item list actions, the Carousel Settings / Navigation
 * panels, and a preview that moves like the front end.
 */

/**
 * "Carousel Settings" panel: slides per view, gap, navigation, autoplay.
 *
 * @param {Object}  props
 * @param {Object}  props.attributes    Block attributes.
 * @param {Function} props.setAttributes Block setAttributes.
 * @param {boolean} [props.perView]     Show the slides-per-view control.
 * @param {number}  [props.maxPerView]  Upper limit for slides per view.
 */
export function CarouselSettingsPanel( { attributes, setAttributes, perView = true, maxPerView = 6 } ) {
	const { gap, speed, navigation, arrowPosition, autoplay, autoplaySpeed, pauseOnHover, loop } = attributes;
	const set = ( key ) => ( val ) => setAttributes( { [ key ]: val } );

	return (
		<PanelBody title={ __( 'Carousel Settings', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
			{ perView && (
				<ResponsiveControls>
					{ ( device ) => {
						const key = { desktop: 'slidesPerView', tablet: 'slidesPerViewTablet', mobile: 'slidesPerViewMobile' }[ device ] || 'slidesPerView';
						return (
							<RangeControl
								label={ __( 'Slides per View', 'blockive-premium-addon-for-block-pro' ) }
								value={ attributes[ key ] }
								onChange={ ( val ) => setAttributes( { [ key ]: val } ) }
								min={ 1 }
								max={ maxPerView }
								allowReset={ device !== 'desktop' }
							/>
						);
					} }
				</ResponsiveControls>
			) }
			<RangeControl label={ __( 'Space Between (px)', 'blockive-premium-addon-for-block-pro' ) } value={ gap } onChange={ set( 'gap' ) } min={ 0 } max={ 100 } />
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
			{ ( navigation === 'both' || navigation === 'arrows' ) && (
				<SelectControl
					label={ __( 'Arrows Position', 'blockive-premium-addon-for-block-pro' ) }
					value={ arrowPosition }
					options={ [
						{ label: __( 'Inside', 'blockive-premium-addon-for-block-pro' ), value: 'inside' },
						{ label: __( 'Outside', 'blockive-premium-addon-for-block-pro' ), value: 'outside' },
					] }
					onChange={ set( 'arrowPosition' ) }
				/>
			) }
			<ToggleControl label={ __( 'Autoplay', 'blockive-premium-addon-for-block-pro' ) } checked={ !! autoplay } onChange={ set( 'autoplay' ) } help={ __( 'A pause button is added automatically, and autoplay stays off for visitors who prefer reduced motion.', 'blockive-premium-addon-for-block-pro' ) } />
			{ autoplay && (
				<>
					<RangeControl label={ __( 'Autoplay Interval (ms)', 'blockive-premium-addon-for-block-pro' ) } value={ autoplaySpeed } onChange={ set( 'autoplaySpeed' ) } min={ 1500 } max={ 15000 } step={ 500 } />
					<ToggleControl label={ __( 'Pause on Hover', 'blockive-premium-addon-for-block-pro' ) } checked={ !! pauseOnHover } onChange={ set( 'pauseOnHover' ) } />
				</>
			) }
			<ToggleControl label={ __( 'Loop', 'blockive-premium-addon-for-block-pro' ) } checked={ !! loop } onChange={ set( 'loop' ) } help={ __( 'After the last slide, go back to the first.', 'blockive-premium-addon-for-block-pro' ) } />
		</PanelBody>
	);
}

/**
 * "Navigation" style panel: arrow and dot colors and sizes.
 *
 * @param {Object}   props
 * @param {Object}   props.attributes    Block attributes.
 * @param {Function} props.setAttributes Block setAttributes.
 */
export function CarouselNavigationStylePanel( { attributes, setAttributes } ) {
	const { arrowSize, arrowColor, arrowBgColor, arrowHoverColor, arrowHoverBgColor, dotSize, dotColor, dotActiveColor } = attributes;
	const set = ( key ) => ( val ) => setAttributes( { [ key ]: val } );

	return (
		<PanelBody title={ __( 'Navigation', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
			<RangeControl label={ __( 'Arrow Size (px)', 'blockive-premium-addon-for-block-pro' ) } value={ arrowSize } onChange={ set( 'arrowSize' ) } min={ 10 } max={ 50 } />
			<ColorStateControls
				normal={ [
					{ label: __( 'Arrow', 'blockive-premium-addon-for-block-pro' ), value: arrowColor, onChange: set( 'arrowColor' ) },
					{ label: __( 'Arrow Background', 'blockive-premium-addon-for-block-pro' ), value: arrowBgColor, onChange: set( 'arrowBgColor' ) },
				] }
				hover={ [
					{ label: __( 'Arrow', 'blockive-premium-addon-for-block-pro' ), value: arrowHoverColor, onChange: set( 'arrowHoverColor' ) },
					{ label: __( 'Arrow Background', 'blockive-premium-addon-for-block-pro' ), value: arrowHoverBgColor, onChange: set( 'arrowHoverBgColor' ) },
				] }
			/>
			<RangeControl label={ __( 'Dot Size (px)', 'blockive-premium-addon-for-block-pro' ) } value={ dotSize } onChange={ set( 'dotSize' ) } min={ 4 } max={ 24 } />
			<ColorStateControls
				normal={ [
					{ label: __( 'Dots', 'blockive-premium-addon-for-block-pro' ), value: dotColor, onChange: set( 'dotColor' ) },
					{ label: __( 'Active Dot', 'blockive-premium-addon-for-block-pro' ), value: dotActiveColor, onChange: set( 'dotActiveColor' ) },
				] }
			/>
		</PanelBody>
	);
}

/**
 * Editor twin of Bpafb_Pro_Carousel::vars().
 *
 * @param {Object}  attributes Block attributes.
 * @param {boolean} single     Force one slide per view.
 * @return {Object}
 */
export function carouselVars( attributes, single = false ) {
	const count = ( v ) => ( typeof v === 'number' ? String( v ) : undefined );
	return cssVars( {
		'--bpafb-carousel-per-view': single ? '1' : count( attributes.slidesPerView ),
		'--bpafb-carousel-per-view-tablet': single ? undefined : count( attributes.slidesPerViewTablet ),
		'--bpafb-carousel-per-view-mobile': single ? undefined : count( attributes.slidesPerViewMobile ),
		'--bpafb-carousel-gap': attributes.gap,
		'--bpafb-carousel-speed': typeof attributes.speed === 'number' ? `${ attributes.speed }ms` : undefined,
		'--bpafb-carousel-arrow-size': attributes.arrowSize,
		'--bpafb-carousel-arrow-color': attributes.arrowColor,
		'--bpafb-carousel-arrow-bg': attributes.arrowBgColor,
		'--bpafb-carousel-arrow-hover-color': attributes.arrowHoverColor,
		'--bpafb-carousel-arrow-hover-bg': attributes.arrowHoverBgColor,
		'--bpafb-carousel-dot-size': attributes.dotSize,
		'--bpafb-carousel-dot-color': attributes.dotColor,
		'--bpafb-carousel-dot-active': attributes.dotActiveColor,
	} );
}

/**
 * Wrapper classes shared with Bpafb_Pro_Carousel::wrapper_attrs().
 *
 * @param {Object}  attributes Block attributes.
 * @param {boolean} centered   Centered (coverflow) layout.
 * @return {string}
 */
export function carouselClasses( attributes, centered = false ) {
	const arrows = attributes.navigation === 'both' || attributes.navigation === 'arrows';
	return [
		'bpafb-carousel',
		'is-ready',
		centered && 'bpafb-carousel--centered',
		arrows && attributes.arrowPosition === 'outside' && 'bpafb-carousel--arrows-outside',
	]
		.filter( Boolean )
		.join( ' ' );
}

/**
 * Carousel markup for the editor preview. The first visible slide follows
 * the item being edited, and clicking a slide selects it.
 *
 * @param {Object}   props
 * @param {Object}   props.attributes Block attributes.
 * @param {Object}   props.list       useItemList() result.
 * @param {Array}    props.slides     Rendered slides (elements).
 * @param {boolean}  [props.centered] Centered (coverflow) layout.
 * @param {boolean}  [props.single]   One slide per view.
 */
export function CarouselPreview( { attributes, list, slides, centered = false, single = false } ) {
	const count = slides.length;
	const perView = single ? 1 : Math.max( 1, Math.min( count, attributes.slidesPerView || 1 ) );
	const [ start, setStart ] = useState( 0 );

	// Keep the item being edited in view.
	let position = start;
	if ( centered ) {
		position = list.index;
	} else if ( list.index < start ) {
		position = list.index;
	} else if ( list.index > start + perView - 1 ) {
		position = list.index - perView + 1;
	}
	position = Math.max( 0, Math.min( position, centered ? count - 1 : count - perView ) );
	useEffect( () => setStart( position ), [ position ] );

	const last = centered ? count - 1 : Math.max( 0, count - perView );
	const arrows = count > 1 && ( attributes.navigation === 'both' || attributes.navigation === 'arrows' );
	const dots = count > 1 && ( attributes.navigation === 'both' || attributes.navigation === 'dots' );
	const go = ( i ) => {
		const target = Math.max( 0, Math.min( last, i ) );
		setStart( target );
		list.select( centered ? target : Math.max( target, Math.min( list.index, target + perView - 1 ) ) );
	};

	return (
		<>
			<div className="bpafb-carousel__stage" style={ { '--bpafb-carousel-index': position } }>
				<div className="bpafb-carousel__viewport">
					<div className="bpafb-carousel__track">
						{ slides.map( ( slide, i ) => (
							// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
							<div
								key={ i }
								className={ [
									'bpafb-carousel__slide',
									i === position && 'is-current',
									i < position && 'is-before',
									i > position && 'is-after',
									i === list.index && 'is-editing',
								]
									.filter( Boolean )
									.join( ' ' ) }
								onClick={ () => list.select( i ) }
							>
								{ slide }
							</div>
						) ) }
					</div>
				</div>
				{ arrows && (
					<>
						<button type="button" className="bpafb-carousel__arrow bpafb-carousel__arrow--prev" disabled={ position === 0 } onClick={ () => go( position - 1 ) } aria-label={ __( 'Previous slide', 'blockive-premium-addon-for-block-pro' ) }>
							<i className="fa-solid fa-chevron-left" aria-hidden="true" />
						</button>
						<button type="button" className="bpafb-carousel__arrow bpafb-carousel__arrow--next" disabled={ position === last } onClick={ () => go( position + 1 ) } aria-label={ __( 'Next slide', 'blockive-premium-addon-for-block-pro' ) }>
							<i className="fa-solid fa-chevron-right" aria-hidden="true" />
						</button>
					</>
				) }
			</div>
			{ ( dots || ( count > 1 && attributes.autoplay ) ) && (
				<div className="bpafb-carousel__bottom">
					{ attributes.autoplay && (
						<span className="bpafb-carousel__pause" aria-hidden="true">
							<i className="fa-solid fa-pause" />
						</span>
					) }
					{ dots && (
						<div className="bpafb-carousel__dots">
							{ Array.from( { length: last + 1 }, ( _, i ) => (
								<button
									type="button"
									key={ i }
									className={ `bpafb-carousel__dot${ i === position ? ' is-active' : '' }` }
									onClick={ () => go( i ) }
									/* translators: %d: slide number. */
									aria-label={ sprintf( __( 'Go to slide %d', 'blockive-premium-addon-for-block-pro' ), i + 1 ) }
								/>
							) ) }
						</div>
					) }
				</div>
			) }
		</>
	);
}
