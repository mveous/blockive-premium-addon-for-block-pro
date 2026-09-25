import { __, sprintf } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { useBlockProps, MediaPlaceholder, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, SelectControl, RangeControl, TextControl, ToggleControl, Button, ButtonGroup } from '@wordpress/components';

import InspectorTabs from '../components/inspector-tabs';
import AdvancedTab from '../components/advanced-tab';
import ResponsiveControls from '../components/responsive-controls';
import ColorStateControls from '../components/color-state-controls';
import TypographyControls from '../components/typography-controls';
import { typoValues, typoOnChange, typoVars, cssVars } from '../template-blocks-site/shared';

import './editor.css';

const IMAGE_SIZES = [
	{ label: __( 'Thumbnail', 'blockive-premium-addon-for-block-pro' ), value: 'thumbnail' },
	{ label: __( 'Medium', 'blockive-premium-addon-for-block-pro' ), value: 'medium' },
	{ label: __( 'Medium Large', 'blockive-premium-addon-for-block-pro' ), value: 'medium_large' },
	{ label: __( 'Large', 'blockive-premium-addon-for-block-pro' ), value: 'large' },
	{ label: __( 'Full', 'blockive-premium-addon-for-block-pro' ), value: 'full' },
];

const RATIOS = [ '1/1', '4/3', '3/2', '16/9', '3/4', '2/3' ].map( ( value ) => ( { label: value.replace( '/', ':' ), value } ) );

const stripTags = ( html ) => ( typeof html === 'string' ? html.replace( /<[^>]+>/g, '' ) : '' );

/**
 * Keeps the caption / link already set on an image when the gallery is
 * re-picked in the media frame.
 *
 * @param {Array} media    Media frame selection.
 * @param {Array} previous Images already in the gallery.
 */
const fromMedia = ( media, previous ) =>
	media.map( ( m ) => {
		const old = previous.find( ( img ) => img.id === m.id ) || {};
		return {
			id: m.id,
			url: m.url,
			alt: m.alt || '',
			caption: old.caption !== undefined ? old.caption : stripTags( m.caption ),
			link: old.link || '',
			newTab: !! old.newTab,
			width: m.width || old.width || 0,
			height: m.height || old.height || 0,
		};
	} );

export default function Edit( { attributes, setAttributes } ) {
	const {
		galleries,
		layout,
		aspectRatio,
		imageSize,
		onClick,
		captions,
		hoverEffect,
		overlayColor,
		borderRadius,
		gap,
		captionColor,
		captionBgColor,
		showAllFilter,
		allFilterLabel,
		filterAlign,
		filterColor,
		filterBgColor,
		filterActiveColor,
		filterActiveBgColor,
		filterRadius,
	} = attributes;

	// Which gallery the sidebar edits ('all' previews every gallery).
	const [ current, setCurrent ] = useState( 0 );
	const [ selectedImage, setSelectedImage ] = useState( null );
	const galleryIndex = current === 'all' ? 0 : Math.min( current, galleries.length - 1 );
	const gallery = galleries[ galleryIndex ] || { title: '', images: [] };
	const set = ( key ) => ( val ) => setAttributes( { [ key ]: val } );

	const updateGallery = ( patch, at = galleryIndex ) => setAttributes( { galleries: galleries.map( ( g, i ) => ( i === at ? { ...g, ...patch } : g ) ) } );
	const updateImage = ( imageIndex, patch ) => updateGallery( { images: gallery.images.map( ( img, i ) => ( i === imageIndex ? { ...img, ...patch } : img ) ) } );
	const addGallery = () => {
		/* translators: %d: gallery number. */
		setAttributes( { galleries: [ ...galleries, { title: sprintf( __( 'Gallery %d', 'blockive-premium-addon-for-block-pro' ), galleries.length + 1 ), images: [] } ] } );
		setCurrent( galleries.length );
		setSelectedImage( null );
	};
	const removeGallery = () => {
		if ( galleries.length < 2 ) {
			return;
		}
		setAttributes( { galleries: galleries.filter( ( _, i ) => i !== galleryIndex ) } );
		setCurrent( Math.max( 0, galleryIndex - 1 ) );
		setSelectedImage( null );
	};

	const totalImages = galleries.reduce( ( sum, g ) => sum + ( g.images || [] ).length, 0 );
	const multi = galleries.filter( ( g ) => ( g.images || [] ).length ).length > 1;

	const blockProps = useBlockProps( {
		className: `bpafb-gallery bpafb-gallery--${ layout } bpafb-gallery--caption-${ captions } bpafb-gallery--hover-${ hoverEffect }${ aspectRatio === 'auto' ? ' bpafb-gallery--ratio-auto' : '' }`,
		style: cssVars( {
			'--bpafb-gallery-columns': typeof attributes.columns === 'number' ? String( attributes.columns ) : undefined,
			'--bpafb-gallery-gap': gap,
			'--bpafb-gallery-aspect': aspectRatio,
			'--bpafb-gallery-row-height': attributes.rowHeight,
			'--bpafb-gallery-radius': borderRadius,
			'--bpafb-gallery-overlay': overlayColor,
			'--bpafb-gallery-caption-color': captionColor,
			'--bpafb-gallery-caption-bg': captionBgColor,
			'--bpafb-gallery-filter-color': filterColor,
			'--bpafb-gallery-filter-bg': filterBgColor,
			'--bpafb-gallery-filter-active-color': filterActiveColor,
			'--bpafb-gallery-filter-active-bg': filterActiveBgColor,
			'--bpafb-gallery-filter-radius': filterRadius,
			...typoVars( attributes, 'caption', '--bpafb-gallery-caption' ),
			...typoVars( attributes, 'filter', '--bpafb-gallery-filter' ),
		} ),
	} );

	const galleryPicker = ( label, variant = 'secondary' ) => (
		<MediaUploadCheck>
			<MediaUpload
				allowedTypes={ [ 'image' ] }
				multiple
				gallery
				value={ gallery.images.map( ( img ) => img.id ).filter( Boolean ) }
				onSelect={ ( media ) => {
					updateGallery( { images: fromMedia( media, gallery.images ) } );
					setSelectedImage( null );
				} }
				render={ ( { open } ) => (
					<Button variant={ variant } onClick={ open }>
						{ label }
					</Button>
				) }
			/>
		</MediaUploadCheck>
	);

	if ( ! totalImages && galleries.length === 1 ) {
		return (
			<div { ...blockProps }>
				<MediaPlaceholder
					icon="format-gallery"
					labels={ {
						title: __( 'Gallery', 'blockive-premium-addon-for-block-pro' ),
						instructions: __( 'Choose images for the gallery. You can add more galleries, shown as filter tabs, afterwards.', 'blockive-premium-addon-for-block-pro' ),
					} }
					accept="image/*"
					allowedTypes={ [ 'image' ] }
					multiple
					onSelect={ ( media ) => updateGallery( { images: fromMedia( media, [] ) }, 0 ) }
				/>
			</div>
		);
	}

	// What the preview shows: the gallery being edited, or all of them.
	const shown = [];
	galleries.forEach( ( g, gi ) => {
		if ( current !== 'all' && gi !== galleryIndex ) {
			return;
		}
		( g.images || [] ).forEach( ( img, ii ) => shown.push( { img, gi, ii } ) );
	} );

	const selected = selectedImage !== null && current !== 'all' ? gallery.images[ selectedImage ] : null;

	return (
		<>
			<InspectorTabs
				general={
					<>
						<PanelBody title={ __( 'Galleries', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							{ galleries.length > 1 && (
								<SelectControl
									label={ __( 'Editing', 'blockive-premium-addon-for-block-pro' ) }
									value={ String( galleryIndex ) }
									options={ galleries.map( ( g, i ) => ( { label: g.title || sprintf( __( 'Gallery %d', 'blockive-premium-addon-for-block-pro' ), i + 1 ), value: String( i ) } ) ) }
									onChange={ ( val ) => {
										setCurrent( Number( val ) );
										setSelectedImage( null );
									} }
								/>
							) }
							<TextControl
								label={ __( 'Gallery Name', 'blockive-premium-addon-for-block-pro' ) }
								value={ gallery.title }
								onChange={ ( val ) => updateGallery( { title: val } ) }
								help={ __( 'Shown as a filter button when there is more than one gallery.', 'blockive-premium-addon-for-block-pro' ) }
							/>
							<ButtonGroup className="bpafb-gallery-editor__actions">
								{ galleryPicker( gallery.images.length ? __( 'Add, Remove, or Reorder Images', 'blockive-premium-addon-for-block-pro' ) : __( 'Add Images', 'blockive-premium-addon-for-block-pro' ) ) }
							</ButtonGroup>
							<ButtonGroup className="bpafb-gallery-editor__actions">
								<Button variant="secondary" size="small" onClick={ addGallery }>
									{ __( 'Add Gallery', 'blockive-premium-addon-for-block-pro' ) }
								</Button>
								<Button variant="link" size="small" isDestructive disabled={ galleries.length < 2 } onClick={ removeGallery }>
									{ __( 'Remove This Gallery', 'blockive-premium-addon-for-block-pro' ) }
								</Button>
							</ButtonGroup>
						</PanelBody>
						<PanelBody title={ selected ? __( 'Selected Image', 'blockive-premium-addon-for-block-pro' ) : __( 'Image Details', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ !! selected }>
							{ selected ? (
								<>
									<img className="bpafb-gallery-editor__thumb" src={ selected.url } alt="" />
									<TextControl label={ __( 'Caption', 'blockive-premium-addon-for-block-pro' ) } value={ selected.caption } onChange={ ( val ) => updateImage( selectedImage, { caption: val } ) } />
									<TextControl label={ __( 'Alternative Text', 'blockive-premium-addon-for-block-pro' ) } value={ selected.alt } onChange={ ( val ) => updateImage( selectedImage, { alt: val } ) } />
									{ onClick === 'link' && (
										<>
											<TextControl label={ __( 'Link', 'blockive-premium-addon-for-block-pro' ) } type="url" value={ selected.link } onChange={ ( val ) => updateImage( selectedImage, { link: val } ) } />
											{ !! selected.link && <ToggleControl label={ __( 'Open in New Tab', 'blockive-premium-addon-for-block-pro' ) } checked={ !! selected.newTab } onChange={ ( val ) => updateImage( selectedImage, { newTab: val } ) } /> }
										</>
									) }
								</>
							) : (
								<p className="components-base-control__help">{ __( 'Click an image in the gallery to edit its caption or link.', 'blockive-premium-addon-for-block-pro' ) }</p>
							) }
						</PanelBody>
						<PanelBody title={ __( 'Layout', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<SelectControl
								label={ __( 'Layout', 'blockive-premium-addon-for-block-pro' ) }
								value={ layout }
								options={ [
									{ label: __( 'Grid', 'blockive-premium-addon-for-block-pro' ), value: 'grid' },
									{ label: __( 'Masonry', 'blockive-premium-addon-for-block-pro' ), value: 'masonry' },
									{ label: __( 'Justified', 'blockive-premium-addon-for-block-pro' ), value: 'justified' },
								] }
								onChange={ set( 'layout' ) }
							/>
							{ layout !== 'justified' ? (
								<ResponsiveControls>
									{ ( device ) => {
										const key = { desktop: 'columns', tablet: 'columnsTablet', mobile: 'columnsMobile' }[ device ] || 'columns';
										return <RangeControl label={ __( 'Columns', 'blockive-premium-addon-for-block-pro' ) } value={ attributes[ key ] } onChange={ ( val ) => setAttributes( { [ key ]: val } ) } min={ 1 } max={ 10 } />;
									} }
								</ResponsiveControls>
							) : (
								<ResponsiveControls>
									{ ( device ) => {
										const key = { desktop: 'rowHeight', tablet: 'rowHeightTablet', mobile: 'rowHeightMobile' }[ device ] || 'rowHeight';
										return (
											<RangeControl
												label={ __( 'Row Height (px)', 'blockive-premium-addon-for-block-pro' ) }
												value={ attributes[ key ] }
												onChange={ ( val ) => setAttributes( { [ key ]: val } ) }
												min={ 50 }
												max={ 600 }
												allowReset={ device !== 'desktop' }
											/>
										);
									} }
								</ResponsiveControls>
							) }
							{ layout === 'grid' && (
								<SelectControl
									label={ __( 'Aspect Ratio', 'blockive-premium-addon-for-block-pro' ) }
									value={ aspectRatio }
									options={ [ ...RATIOS, { label: __( 'Original', 'blockive-premium-addon-for-block-pro' ), value: 'auto' } ] }
									onChange={ set( 'aspectRatio' ) }
								/>
							) }
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
							/>
							<SelectControl
								label={ __( 'Captions', 'blockive-premium-addon-for-block-pro' ) }
								value={ captions }
								options={ [
									{ label: __( 'None', 'blockive-premium-addon-for-block-pro' ), value: 'none' },
									{ label: __( 'On Hover', 'blockive-premium-addon-for-block-pro' ), value: 'hover' },
									{ label: __( 'Below the Image', 'blockive-premium-addon-for-block-pro' ), value: 'below' },
								] }
								onChange={ set( 'captions' ) }
							/>
						</PanelBody>
						{ galleries.length > 1 && (
							<PanelBody title={ __( 'Filter', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
								<ToggleControl label={ __( 'Show "All" Button', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showAllFilter } onChange={ set( 'showAllFilter' ) } />
								{ showAllFilter && <TextControl label={ __( '"All" Label', 'blockive-premium-addon-for-block-pro' ) } value={ allFilterLabel } onChange={ set( 'allFilterLabel' ) } /> }
								<SelectControl
									label={ __( 'Alignment', 'blockive-premium-addon-for-block-pro' ) }
									value={ filterAlign }
									options={ [
										{ label: __( 'Left', 'blockive-premium-addon-for-block-pro' ), value: 'left' },
										{ label: __( 'Center', 'blockive-premium-addon-for-block-pro' ), value: 'center' },
										{ label: __( 'Right', 'blockive-premium-addon-for-block-pro' ), value: 'right' },
									] }
									onChange={ set( 'filterAlign' ) }
								/>
							</PanelBody>
						) }
					</>
				}
				style={
					<>
						<PanelBody title={ __( 'Images', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							<RangeControl label={ __( 'Gap (px)', 'blockive-premium-addon-for-block-pro' ) } value={ gap } onChange={ set( 'gap' ) } min={ 0 } max={ 60 } />
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
						{ galleries.length > 1 && (
							<PanelBody title={ __( 'Filter Buttons', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
								<TypographyControls values={ typoValues( attributes, 'filter' ) } onChange={ typoOnChange( setAttributes, 'filter' ) } />
								<ColorStateControls
									normal={ [
										{ label: __( 'Text', 'blockive-premium-addon-for-block-pro' ), value: filterColor, onChange: set( 'filterColor' ) },
										{ label: __( 'Background', 'blockive-premium-addon-for-block-pro' ), value: filterBgColor, onChange: set( 'filterBgColor' ) },
									] }
									hover={ [
										{ label: __( 'Text', 'blockive-premium-addon-for-block-pro' ), value: filterActiveColor, onChange: set( 'filterActiveColor' ) },
										{ label: __( 'Background', 'blockive-premium-addon-for-block-pro' ), value: filterActiveBgColor, onChange: set( 'filterActiveBgColor' ) },
									] }
								/>
								<RangeControl label={ __( 'Border Radius (px)', 'blockive-premium-addon-for-block-pro' ) } value={ filterRadius } onChange={ set( 'filterRadius' ) } min={ 0 } max={ 40 } />
							</PanelBody>
						) }
					</>
				}
				advanced={ <AdvancedTab attributes={ attributes } setAttributes={ setAttributes } /> }
			/>

			<div { ...blockProps }>
				{ multi && (
					<div className={ `bpafb-gallery__filters bpafb-gallery__filters--${ filterAlign }` }>
						{ showAllFilter && (
							<button type="button" className={ `bpafb-gallery__filter${ current === 'all' ? ' is-active' : '' }` } onClick={ () => setCurrent( 'all' ) }>
								{ allFilterLabel || __( 'All', 'blockive-premium-addon-for-block-pro' ) }
							</button>
						) }
						{ galleries.map( ( g, i ) =>
							( g.images || [] ).length ? (
								<button
									type="button"
									key={ i }
									className={ `bpafb-gallery__filter${ current !== 'all' && i === galleryIndex ? ' is-active' : '' }` }
									onClick={ () => {
										setCurrent( i );
										setSelectedImage( null );
									} }
								>
									{ g.title || sprintf( __( 'Gallery %d', 'blockive-premium-addon-for-block-pro' ), i + 1 ) }
								</button>
							) : null
						) }
					</div>
				) }
				{ shown.length ? (
					<div className="bpafb-gallery__items">
						{ shown.map( ( { img, gi, ii } ) => (
							<figure
								key={ `${ gi }-${ ii }` }
								className={ `bpafb-gallery__item${ current !== 'all' && selectedImage === ii ? ' is-selected' : '' }` }
								style={ { '--bpafb-gallery-ratio': img.width && img.height ? img.width / img.height : 1.5 } }
							>
								{ /* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */ }
								<div
									className="bpafb-gallery__media"
									onClick={ () => {
										setCurrent( gi );
										setSelectedImage( ii );
									} }
								>
									<img className="bpafb-gallery__img" src={ img.url } alt={ img.alt || '' } />
								</div>
								{ captions !== 'none' && !! img.caption && <figcaption className="bpafb-gallery__caption">{ img.caption }</figcaption> }
							</figure>
						) ) }
					</div>
				) : (
					<div className="bpafb-gallery-editor__empty">
						<p>{ __( 'This gallery has no images yet.', 'blockive-premium-addon-for-block-pro' ) }</p>
						{ galleryPicker( __( 'Add Images', 'blockive-premium-addon-for-block-pro' ), 'primary' ) }
					</div>
				) }
			</div>
		</>
	);
}
