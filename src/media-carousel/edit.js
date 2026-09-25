import { __, sprintf } from '@wordpress/i18n';
import { useBlockProps, MediaPlaceholder, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, SelectControl, RangeControl, TextControl, ToggleControl } from '@wordpress/components';

import InspectorTabs from '../components/inspector-tabs';
import AdvancedTab from '../components/advanced-tab';
import ResponsiveControls from '../components/responsive-controls';
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
import { youtubePoster } from '../pro-components/video';

const BLANK = { type: 'image', imageId: 0, imageUrl: '', alt: '', videoUrl: '', caption: '', link: '', newTab: false };

const IMAGE_SIZES = [
	{ label: __( 'Thumbnail', 'blockive-premium-addon-for-block-pro' ), value: 'thumbnail' },
	{ label: __( 'Medium', 'blockive-premium-addon-for-block-pro' ), value: 'medium' },
	{ label: __( 'Medium Large', 'blockive-premium-addon-for-block-pro' ), value: 'medium_large' },
	{ label: __( 'Large', 'blockive-premium-addon-for-block-pro' ), value: 'large' },
	{ label: __( 'Full', 'blockive-premium-addon-for-block-pro' ), value: 'full' },
];

const fromMedia = ( media ) => ( {
	...BLANK,
	imageId: media.id,
	imageUrl: media.url,
	alt: media.alt || '',
	caption: typeof media.caption === 'string' ? media.caption.replace( /<[^>]+>/g, '' ) : '',
} );

export default function Edit( { attributes, setAttributes } ) {
	const {
		items,
		skin,
		imageFit,
		imageSize,
		onClick,
		captions,
		hoverEffect,
		overlayColor,
		borderRadius,
		captionColor,
		captionBgColor,
		playIconSize,
		playIconColor,
		thumbSize,
	} = attributes;

	const list = useItemList( items, 'items', setAttributes, BLANK );
	const { item } = list;
	const set = ( key ) => ( val ) => setAttributes( { [ key ]: val } );
	const addImages = ( media ) => list.add( ( Array.isArray( media ) ? media : [ media ] ).map( fromMedia ) );

	const blockProps = useBlockProps( ! items.length ? {} : {
		className: `${ carouselClasses( attributes, skin === 'coverflow' ) } bpafb-media-carousel bpafb-media-carousel--${ skin } bpafb-media-carousel--caption-${ captions } bpafb-media-carousel--hover-${ hoverEffect } bpafb-media-carousel--fit-${ imageFit }`,
		style: {
			...carouselVars( attributes, skin === 'slideshow' ),
			...cssVars( {
				'--bpafb-mc-height': attributes.height,
				'--bpafb-mc-radius': borderRadius,
				'--bpafb-mc-overlay': overlayColor,
				'--bpafb-mc-caption-color': captionColor,
				'--bpafb-mc-caption-bg': captionBgColor,
				'--bpafb-mc-play-size': playIconSize,
				'--bpafb-mc-play-color': playIconColor,
				'--bpafb-mc-thumb-size': thumbSize,
				...typoVars( attributes, 'caption', '--bpafb-mc-caption' ),
			} ),
		},
	} );

	if ( ! items.length ) {
		return (
			<div { ...blockProps }>
				<MediaPlaceholder
					icon="images-alt2"
					labels={ {
						title: __( 'Media Carousel', 'blockive-premium-addon-for-block-pro' ),
						instructions: __( 'Choose images for the carousel. You can add videos afterwards.', 'blockive-premium-addon-for-block-pro' ),
					} }
					accept="image/*"
					allowedTypes={ [ 'image' ] }
					multiple
					onSelect={ addImages }
				/>
			</div>
		);
	}

	const poster = ( it ) => it.imageUrl || ( it.type === 'video' ? youtubePoster( it.videoUrl ) : '' );

	const slides = items.map( ( it, i ) => (
		<figure className="bpafb-media-carousel__item" key={ i }>
			<div className="bpafb-media-carousel__media">
				{ poster( it ) ? (
					<img className="bpafb-media-carousel__img" src={ poster( it ) } alt={ it.alt || '' } />
				) : (
					<span className="bpafb-carousel-editor__placeholder">
						{ it.type === 'video' ? __( 'Video (add a cover image)', 'blockive-premium-addon-for-block-pro' ) : __( 'Choose an image', 'blockive-premium-addon-for-block-pro' ) }
					</span>
				) }
				{ it.type === 'video' && (
					<span className="bpafb-media-carousel__play" aria-hidden="true">
						<i className="fa-solid fa-circle-play" />
					</span>
				) }
			</div>
			{ captions !== 'none' && !! it.caption && <figcaption className="bpafb-media-carousel__caption">{ it.caption }</figcaption> }
		</figure>
	) );

	/* translators: 1: item number, 2: total items. */
	const itemLabel = sprintf( __( 'Slide %1$d of %2$d', 'blockive-premium-addon-for-block-pro' ), list.index + 1, items.length );

	return (
		<>
			<MediaUploadCheck>
				<MediaUpload
					allowedTypes={ [ 'image' ] }
					multiple
					onSelect={ addImages }
					render={ ( { open } ) => (
						<>
							<ItemToolbar list={ list } count={ items.length } onAdd={ open } addLabel={ __( 'Add images', 'blockive-premium-addon-for-block-pro' ) } />
							<InspectorTabs
								general={
									<>
										<PanelBody title={ itemLabel } initialOpen={ true }>
											<ItemActions list={ list } count={ items.length } onAdd={ open } addLabel={ __( 'Add Images', 'blockive-premium-addon-for-block-pro' ) } />
											<SelectControl
												label={ __( 'Type', 'blockive-premium-addon-for-block-pro' ) }
												value={ item.type || 'image' }
												options={ [
													{ label: __( 'Image', 'blockive-premium-addon-for-block-pro' ), value: 'image' },
													{ label: __( 'Video', 'blockive-premium-addon-for-block-pro' ), value: 'video' },
												] }
												onChange={ ( val ) => list.update( { type: val } ) }
											/>
											{ item.type === 'video' && (
												<TextControl
													label={ __( 'Video URL', 'blockive-premium-addon-for-block-pro' ) }
													type="url"
													value={ item.videoUrl }
													onChange={ ( val ) => list.update( { videoUrl: val } ) }
													help={ __( 'YouTube, Vimeo, or a link to an .mp4 / .webm file. Plays in the lightbox.', 'blockive-premium-addon-for-block-pro' ) }
												/>
											) }
											<ImageControl
												label={ item.type === 'video' ? __( 'Cover Image', 'blockive-premium-addon-for-block-pro' ) : __( 'Image', 'blockive-premium-addon-for-block-pro' ) }
												id={ item.imageId }
												url={ item.imageUrl }
												onChange={ ( media ) => list.update( { imageId: media.id, imageUrl: media.url, alt: media.alt } ) }
											/>
											<TextControl label={ __( 'Caption', 'blockive-premium-addon-for-block-pro' ) } value={ item.caption } onChange={ ( val ) => list.update( { caption: val } ) } />
											{ onClick === 'link' && item.type !== 'video' && (
												<>
													<TextControl label={ __( 'Link', 'blockive-premium-addon-for-block-pro' ) } type="url" value={ item.link } onChange={ ( val ) => list.update( { link: val } ) } />
													{ !! item.link && (
														<ToggleControl label={ __( 'Open in New Tab', 'blockive-premium-addon-for-block-pro' ) } checked={ !! item.newTab } onChange={ ( val ) => list.update( { newTab: val } ) } />
													) }
												</>
											) }
										</PanelBody>
										<PanelBody title={ __( 'Layout', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
											<SelectControl
												label={ __( 'Skin', 'blockive-premium-addon-for-block-pro' ) }
												value={ skin }
												options={ [
													{ label: __( 'Carousel', 'blockive-premium-addon-for-block-pro' ), value: 'carousel' },
													{ label: __( 'Slideshow (with thumbnails)', 'blockive-premium-addon-for-block-pro' ), value: 'slideshow' },
													{ label: __( 'Coverflow', 'blockive-premium-addon-for-block-pro' ), value: 'coverflow' },
												] }
												onChange={ set( 'skin' ) }
											/>
											<SelectControl label={ __( 'Image Size', 'blockive-premium-addon-for-block-pro' ) } value={ imageSize } options={ IMAGE_SIZES } onChange={ set( 'imageSize' ) } />
											<SelectControl
												label={ __( 'On Image Click', 'blockive-premium-addon-for-block-pro' ) }
												value={ onClick }
												options={ [
													{ label: __( 'Open Lightbox', 'blockive-premium-addon-for-block-pro' ), value: 'lightbox' },
													{ label: __( 'Custom Link', 'blockive-premium-addon-for-block-pro' ), value: 'link' },
													{ label: __( 'Nothing', 'blockive-premium-addon-for-block-pro' ), value: 'none' },
												] }
												onChange={ set( 'onClick' ) }
												help={ __( 'Videos always play in the lightbox.', 'blockive-premium-addon-for-block-pro' ) }
											/>
											<SelectControl
												label={ __( 'Captions', 'blockive-premium-addon-for-block-pro' ) }
												value={ captions }
												options={ [
													{ label: __( 'None', 'blockive-premium-addon-for-block-pro' ), value: 'none' },
													{ label: __( 'Over the Image', 'blockive-premium-addon-for-block-pro' ), value: 'overlay' },
													{ label: __( 'Below the Image', 'blockive-premium-addon-for-block-pro' ), value: 'below' },
												] }
												onChange={ set( 'captions' ) }
											/>
										</PanelBody>
										<CarouselSettingsPanel attributes={ attributes } setAttributes={ setAttributes } perView={ skin !== 'slideshow' } />
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
															min={ 80 }
															max={ 1000 }
															allowReset={ device !== 'desktop' }
														/>
													);
												} }
											</ResponsiveControls>
											<SelectControl
												label={ __( 'Image Fit', 'blockive-premium-addon-for-block-pro' ) }
												value={ imageFit }
												options={ [
													{ label: __( 'Cover', 'blockive-premium-addon-for-block-pro' ), value: 'cover' },
													{ label: __( 'Contain', 'blockive-premium-addon-for-block-pro' ), value: 'contain' },
												] }
												onChange={ set( 'imageFit' ) }
											/>
											<RangeControl label={ __( 'Border Radius (px)', 'blockive-premium-addon-for-block-pro' ) } value={ borderRadius } onChange={ set( 'borderRadius' ) } min={ 0 } max={ 60 } />
											<SelectControl
												label={ __( 'Hover Effect', 'blockive-premium-addon-for-block-pro' ) }
												value={ hoverEffect }
												options={ [
													{ label: __( 'Zoom', 'blockive-premium-addon-for-block-pro' ), value: 'zoom' },
													{ label: __( 'None', 'blockive-premium-addon-for-block-pro' ), value: 'none' },
												] }
												onChange={ set( 'hoverEffect' ) }
											/>
											<ColorStateControls normal={ [ { label: __( 'Hover Overlay', 'blockive-premium-addon-for-block-pro' ), value: overlayColor, onChange: set( 'overlayColor' ) } ] } />
											{ skin === 'slideshow' && (
												<RangeControl label={ __( 'Thumbnail Height (px)', 'blockive-premium-addon-for-block-pro' ) } value={ thumbSize } onChange={ set( 'thumbSize' ) } min={ 30 } max={ 200 } />
											) }
										</PanelBody>
										{ captions !== 'none' && (
											<PanelBody title={ __( 'Caption', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
												<TypographyControls values={ typoValues( attributes, 'caption' ) } onChange={ typoOnChange( setAttributes, 'caption' ) } />
												<ColorStateControls
													normal={ [
														{ label: __( 'Color', 'blockive-premium-addon-for-block-pro' ), value: captionColor, onChange: set( 'captionColor' ) },
														{ label: __( 'Background', 'blockive-premium-addon-for-block-pro' ), value: captionBgColor, onChange: set( 'captionBgColor' ) },
													] }
												/>
											</PanelBody>
										) }
										<PanelBody title={ __( 'Video Play Icon', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
											<RangeControl label={ __( 'Size (px)', 'blockive-premium-addon-for-block-pro' ) } value={ playIconSize } onChange={ set( 'playIconSize' ) } min={ 16 } max={ 120 } />
											<ColorStateControls normal={ [ { label: __( 'Color', 'blockive-premium-addon-for-block-pro' ), value: playIconColor, onChange: set( 'playIconColor' ) } ] } />
										</PanelBody>
										<CarouselNavigationStylePanel attributes={ attributes } setAttributes={ setAttributes } />
									</>
								}
								advanced={ <AdvancedTab attributes={ attributes } setAttributes={ setAttributes } /> }
							/>
						</>
					) }
				/>
			</MediaUploadCheck>

			<div { ...blockProps }>
				<CarouselPreview attributes={ attributes } list={ list } slides={ slides } centered={ skin === 'coverflow' } single={ skin === 'slideshow' } />
				{ skin === 'slideshow' && items.length > 1 && (
					<div className="bpafb-media-carousel__thumbs">
						{ items.map( ( it, i ) => (
							<button type="button" key={ i } className={ `bpafb-media-carousel__thumb${ i === list.index ? ' is-active' : '' }` } onClick={ () => list.select( i ) }>
								{ poster( it ) && <img src={ poster( it ) } alt="" /> }
							</button>
						) ) }
					</div>
				) }
			</div>
		</>
	);
}
