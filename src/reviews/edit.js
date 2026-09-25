import { __, sprintf } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { PanelBody, SelectControl, RangeControl, TextControl, ToggleControl } from '@wordpress/components';

import InspectorTabs from '../components/inspector-tabs';
import AdvancedTab from '../components/advanced-tab';
import ColorStateControls from '../components/color-state-controls';
import TypographyControls from '../components/typography-controls';
import ImageControl from '../pro-components/image-control';
import IconPicker from '../pro-components/icon-picker';
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
	name: 'Reviewer Name',
	title: '@username',
	content: 'Add the review text here.',
	rating: 5,
	imageId: 0,
	imageUrl: '',
	icon: 'fa-brands fa-google',
	link: '',
	newTab: false,
};

// Keep in sync with $bpafb_brand_colors in render.php.
const BRAND_COLORS = {
	google: '#4285f4',
	facebook: '#1877f2',
	'facebook-f': '#1877f2',
	'x-twitter': '#000000',
	twitter: '#1da1f2',
	yelp: '#d32323',
	tripadvisor: '#34e0a1',
	amazon: '#ff9900',
	airbnb: '#ff5a5f',
	apple: '#000000',
	'app-store': '#0d96f6',
	'google-play': '#01875f',
	instagram: '#e4405f',
	linkedin: '#0a66c2',
	'linkedin-in': '#0a66c2',
	youtube: '#ff0000',
	etsy: '#f1641e',
	shopify: '#95bf47',
	'product-hunt': '#da552f',
	wordpress: '#21759b',
	tiktok: '#000000',
};

function Stars( { rating } ) {
	const value = Math.max( 0, Math.min( 5, Math.round( ( Number( rating ) || 0 ) * 2 ) / 2 ) );
	return (
		<div className="bpafb-reviews__rating">
			{ [ 1, 2, 3, 4, 5 ].map( ( n ) => {
				let state = '';
				if ( value >= n ) {
					state = ' is-full';
				} else if ( value >= n - 0.5 ) {
					state = ' is-half';
				}
				return (
					<span key={ n } className={ `bpafb-reviews__star${ state }` }>
						<i className="fa-solid fa-star" />
						<span className="bpafb-reviews__star-fill">
							<i className="fa-solid fa-star" />
						</span>
					</span>
				);
			} ) }
		</div>
	);
}

export default function Edit( { attributes, setAttributes } ) {
	const {
		items,
		showRating,
		showIcon,
		iconColorMode,
		iconColor,
		iconSize,
		starSize,
		starColor,
		starEmptyColor,
		imageSize,
		imageRadius,
		cardBgColor,
		cardBorderColor,
		cardBorderWidth,
		cardRadius,
		cardPadding,
		headerBgColor,
		headerSeparator,
		nameColor,
		titleColor,
		contentColor,
	} = attributes;

	const list = useItemList( items, 'items', setAttributes, BLANK );
	const { item } = list;
	const set = ( key ) => ( val ) => setAttributes( { [ key ]: val } );
	const official = iconColorMode !== 'custom';

	const blockProps = useBlockProps( {
		className: `${ carouselClasses( attributes ) } bpafb-reviews${ headerSeparator ? ' bpafb-reviews--separator' : '' }`,
		style: {
			...carouselVars( attributes ),
			...cssVars( {
				'--bpafb-reviews-icon-color': official ? undefined : iconColor,
				'--bpafb-reviews-icon-size': iconSize,
				'--bpafb-reviews-star-size': starSize,
				'--bpafb-reviews-star-color': starColor,
				'--bpafb-reviews-star-empty': starEmptyColor,
				'--bpafb-reviews-image-size': imageSize,
				'--bpafb-reviews-image-radius': typeof imageRadius === 'number' ? `${ Math.min( 50, imageRadius ) }%` : undefined,
				'--bpafb-reviews-bg': cardBgColor,
				'--bpafb-reviews-border-color': cardBorderColor,
				'--bpafb-reviews-border-width': cardBorderWidth,
				'--bpafb-reviews-radius': cardRadius,
				'--bpafb-reviews-padding': cardPadding,
				'--bpafb-reviews-header-bg': headerBgColor,
				'--bpafb-reviews-name-color': nameColor,
				'--bpafb-reviews-title-color': titleColor,
				'--bpafb-reviews-content-color': contentColor,
				...typoVars( attributes, 'name', '--bpafb-reviews-name' ),
				...typoVars( attributes, 'title', '--bpafb-reviews-title' ),
				...typoVars( attributes, 'content', '--bpafb-reviews-content' ),
			} ),
		},
	} );

	const iconStyle = ( icon ) => {
		const slug = /\bfa-([a-z0-9-]+)\s*$/.exec( icon || '' );
		return official && slug && BRAND_COLORS[ slug[ 1 ] ] ? { color: BRAND_COLORS[ slug[ 1 ] ] } : undefined;
	};

	const slides = items.map( ( it, i ) => (
		<div className="bpafb-reviews__card" key={ i }>
			<div className="bpafb-reviews__header">
				{ it.imageUrl && <img className="bpafb-reviews__image" src={ it.imageUrl } alt="" /> }
				<div className="bpafb-reviews__cite">
					<RichText tagName="span" className="bpafb-reviews__name" value={ it.name } onChange={ ( val ) => list.update( { name: val }, i ) } placeholder={ __( 'Name', 'blockive-premium-addon-for-block-pro' ) } allowedFormats={ [] } />
					<RichText tagName="span" className="bpafb-reviews__title" value={ it.title } onChange={ ( val ) => list.update( { title: val }, i ) } placeholder={ __( 'Title', 'blockive-premium-addon-for-block-pro' ) } allowedFormats={ [] } />
					{ showRating && <Stars rating={ it.rating } /> }
				</div>
				{ showIcon && !! it.icon && (
					<span className="bpafb-reviews__icon" style={ iconStyle( it.icon ) }>
						<i className={ it.icon } aria-hidden="true" />
					</span>
				) }
			</div>
			<RichText
				tagName="div"
				className="bpafb-reviews__content"
				value={ it.content }
				onChange={ ( val ) => list.update( { content: val }, i ) }
				placeholder={ __( 'Review text…', 'blockive-premium-addon-for-block-pro' ) }
				allowedFormats={ [ 'core/bold', 'core/italic' ] }
			/>
		</div>
	) );

	/* translators: 1: item number, 2: total items. */
	const itemLabel = sprintf( __( 'Review %1$d of %2$d', 'blockive-premium-addon-for-block-pro' ), list.index + 1, items.length );
	const addLabel = __( 'Add Review', 'blockive-premium-addon-for-block-pro' );

	return (
		<>
			<ItemToolbar list={ list } count={ items.length } onAdd={ () => list.add() } addLabel={ addLabel } />
			<InspectorTabs
				general={
					<>
						<PanelBody title={ itemLabel } initialOpen={ true }>
							<ItemActions list={ list } count={ items.length } addLabel={ addLabel } />
							<ImageControl label={ __( 'Photo', 'blockive-premium-addon-for-block-pro' ) } id={ item.imageId } url={ item.imageUrl } onChange={ ( media ) => list.update( { imageId: media.id, imageUrl: media.url } ) } />
							<RangeControl label={ __( 'Rating', 'blockive-premium-addon-for-block-pro' ) } value={ item.rating } onChange={ ( val ) => list.update( { rating: val } ) } min={ 0 } max={ 5 } step={ 0.5 } />
							<IconPicker label={ __( 'Source Icon', 'blockive-premium-addon-for-block-pro' ) } allowEmpty value={ item.icon } onChange={ ( val ) => list.update( { icon: val } ) } />
							<TextControl label={ __( 'Name Link', 'blockive-premium-addon-for-block-pro' ) } type="url" value={ item.link } onChange={ ( val ) => list.update( { link: val } ) } help={ __( 'For example, the review on its original site.', 'blockive-premium-addon-for-block-pro' ) } />
							{ !! item.link && (
								<ToggleControl label={ __( 'Open in New Tab', 'blockive-premium-addon-for-block-pro' ) } checked={ !! item.newTab } onChange={ ( val ) => list.update( { newTab: val } ) } />
							) }
						</PanelBody>
						<PanelBody title={ __( 'Display', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<ToggleControl label={ __( 'Show Star Rating', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showRating } onChange={ set( 'showRating' ) } />
							<ToggleControl label={ __( 'Show Source Icon', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showIcon } onChange={ set( 'showIcon' ) } />
							<ToggleControl label={ __( 'Header Separator', 'blockive-premium-addon-for-block-pro' ) } checked={ !! headerSeparator } onChange={ set( 'headerSeparator' ) } />
						</PanelBody>
						<CarouselSettingsPanel attributes={ attributes } setAttributes={ setAttributes } />
					</>
				}
				style={
					<>
						<PanelBody title={ __( 'Card', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							<ColorStateControls
								normal={ [
									{ label: __( 'Background', 'blockive-premium-addon-for-block-pro' ), value: cardBgColor, onChange: set( 'cardBgColor' ) },
									{ label: __( 'Header Background', 'blockive-premium-addon-for-block-pro' ), value: headerBgColor, onChange: set( 'headerBgColor' ) },
									{ label: __( 'Border Color', 'blockive-premium-addon-for-block-pro' ), value: cardBorderColor, onChange: set( 'cardBorderColor' ) },
								] }
							/>
							<RangeControl label={ __( 'Border Width (px)', 'blockive-premium-addon-for-block-pro' ) } value={ cardBorderWidth } onChange={ set( 'cardBorderWidth' ) } min={ 0 } max={ 10 } />
							<RangeControl label={ __( 'Border Radius (px)', 'blockive-premium-addon-for-block-pro' ) } value={ cardRadius } onChange={ set( 'cardRadius' ) } min={ 0 } max={ 50 } />
							<RangeControl label={ __( 'Padding (px)', 'blockive-premium-addon-for-block-pro' ) } value={ cardPadding } onChange={ set( 'cardPadding' ) } min={ 0 } max={ 80 } />
						</PanelBody>
						<PanelBody title={ __( 'Image', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<RangeControl label={ __( 'Size (px)', 'blockive-premium-addon-for-block-pro' ) } value={ imageSize } onChange={ set( 'imageSize' ) } min={ 20 } max={ 150 } />
							<RangeControl label={ __( 'Border Radius (%)', 'blockive-premium-addon-for-block-pro' ) } value={ imageRadius } onChange={ set( 'imageRadius' ) } min={ 0 } max={ 50 } />
						</PanelBody>
						<PanelBody title={ __( 'Name & Title', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<TypographyControls values={ typoValues( attributes, 'name' ) } onChange={ typoOnChange( setAttributes, 'name' ) } />
							<ColorStateControls normal={ [ { label: __( 'Name Color', 'blockive-premium-addon-for-block-pro' ), value: nameColor, onChange: set( 'nameColor' ) } ] } />
							<TypographyControls values={ typoValues( attributes, 'title' ) } onChange={ typoOnChange( setAttributes, 'title' ) } />
							<ColorStateControls normal={ [ { label: __( 'Title Color', 'blockive-premium-addon-for-block-pro' ), value: titleColor, onChange: set( 'titleColor' ) } ] } />
						</PanelBody>
						<PanelBody title={ __( 'Content', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<TypographyControls values={ typoValues( attributes, 'content' ) } onChange={ typoOnChange( setAttributes, 'content' ) } />
							<ColorStateControls normal={ [ { label: __( 'Color', 'blockive-premium-addon-for-block-pro' ), value: contentColor, onChange: set( 'contentColor' ) } ] } />
						</PanelBody>
						{ showRating && (
							<PanelBody title={ __( 'Stars', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
								<RangeControl label={ __( 'Size (px)', 'blockive-premium-addon-for-block-pro' ) } value={ starSize } onChange={ set( 'starSize' ) } min={ 8 } max={ 40 } />
								<ColorStateControls
									normal={ [
										{ label: __( 'Filled', 'blockive-premium-addon-for-block-pro' ), value: starColor, onChange: set( 'starColor' ) },
										{ label: __( 'Empty', 'blockive-premium-addon-for-block-pro' ), value: starEmptyColor, onChange: set( 'starEmptyColor' ) },
									] }
								/>
							</PanelBody>
						) }
						{ showIcon && (
							<PanelBody title={ __( 'Source Icon', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
								<SelectControl
									label={ __( 'Color', 'blockive-premium-addon-for-block-pro' ) }
									value={ iconColorMode }
									options={ [
										{ label: __( 'Official Brand Color', 'blockive-premium-addon-for-block-pro' ), value: 'official' },
										{ label: __( 'Custom', 'blockive-premium-addon-for-block-pro' ), value: 'custom' },
									] }
									onChange={ set( 'iconColorMode' ) }
								/>
								{ ! official && <ColorStateControls normal={ [ { label: __( 'Icon Color', 'blockive-premium-addon-for-block-pro' ), value: iconColor, onChange: set( 'iconColor' ) } ] } /> }
								<RangeControl label={ __( 'Size (px)', 'blockive-premium-addon-for-block-pro' ) } value={ iconSize } onChange={ set( 'iconSize' ) } min={ 10 } max={ 60 } />
							</PanelBody>
						) }
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
