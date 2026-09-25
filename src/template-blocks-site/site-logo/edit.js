import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import {
	useBlockProps,
	BlockControls,
	AlignmentControl,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	ToggleControl,
	RangeControl,
	TextControl,
	Button,
	Notice,
} from '@wordpress/components';

import InspectorTabs from '../../components/inspector-tabs';
import AdvancedTab from '../../components/advanced-tab';
import ResponsiveControls from '../../components/responsive-controls';
import { useSiteInfo, cssVars } from '../shared';

const SIZE_OPTIONS = [
	{ label: __( 'Full', 'blockive-premium-addon-for-block-pro' ), value: 'full' },
	{ label: __( 'Large', 'blockive-premium-addon-for-block-pro' ), value: 'large' },
	{ label: __( 'Medium', 'blockive-premium-addon-for-block-pro' ), value: 'medium' },
	{ label: __( 'Thumbnail', 'blockive-premium-addon-for-block-pro' ), value: 'thumbnail' },
];

export default function Edit( { attributes, setAttributes } ) {
	const {
		source,
		customImageId,
		customImageUrl,
		imageSize,
		width,
		widthTablet,
		widthMobile,
		maxHeight,
		align,
		isLink,
		linkTarget,
		customLink,
		borderRadius,
		opacity,
		hoverOpacity,
	} = attributes;

	const site = useSiteInfo();

	const siteLogoUrl = useSelect(
		( select ) => {
			if ( source !== 'site' || ! site.siteLogo ) {
				return '';
			}
			const media = select( 'core' ).getMedia( site.siteLogo, { context: 'view' } );
			return media?.media_details?.sizes?.[ imageSize ]?.source_url || media?.source_url || '';
		},
		[ source, site.siteLogo, imageSize ]
	);

	const imageUrl = source === 'custom' ? customImageUrl : siteLogoUrl;

	const blockProps = useBlockProps( {
		className: `bpafb-tb-site-logo bpafb-tb-align-${ align || 'left' }`,
		style: cssVars( {
			'--bpafb-logo-width': width,
			'--bpafb-logo-width-tablet': widthTablet,
			'--bpafb-logo-width-mobile': widthMobile,
			'--bpafb-logo-max-height': maxHeight,
			'--bpafb-logo-radius': borderRadius,
			'--bpafb-logo-opacity': typeof opacity === 'number' ? opacity / 100 : undefined,
			'--bpafb-logo-hover-opacity': typeof hoverOpacity === 'number' ? hoverOpacity / 100 : undefined,
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
						<PanelBody title={ __( 'Logo', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							<SelectControl
								label={ __( 'Source', 'blockive-premium-addon-for-block-pro' ) }
								value={ source }
								options={ [
									{ label: __( 'Site Logo (Customizer / Site Editor)', 'blockive-premium-addon-for-block-pro' ), value: 'site' },
									{ label: __( 'Custom Image', 'blockive-premium-addon-for-block-pro' ), value: 'custom' },
								] }
								onChange={ ( val ) => setAttributes( { source: val } ) }
							/>
							{ source === 'site' && ! site.isResolving && ! site.siteLogo && (
								<Notice status="info" isDismissible={ false }>
									{ __( 'No site logo is set yet, so the site title is shown instead. Set one under Appearance → Customize → Site Identity, or choose a custom image.', 'blockive-premium-addon-for-block-pro' ) }
								</Notice>
							) }
							{ source === 'custom' && (
								<MediaUploadCheck>
									<MediaUpload
										allowedTypes={ [ 'image' ] }
										value={ customImageId }
										onSelect={ ( media ) =>
											setAttributes( {
												customImageId: media.id,
												customImageUrl: media.url,
												customImageAlt: media.alt || '',
											} )
										}
										render={ ( { open } ) => (
											<div className="bpafb-tb-media-actions">
												<Button variant="secondary" onClick={ open }>
													{ customImageId
														? __( 'Replace Image', 'blockive-premium-addon-for-block-pro' )
														: __( 'Choose Image', 'blockive-premium-addon-for-block-pro' ) }
												</Button>
												{ !! customImageId && (
													<Button
														variant="link"
														isDestructive
														onClick={ () => setAttributes( { customImageId: 0, customImageUrl: '', customImageAlt: '' } ) }
													>
														{ __( 'Remove', 'blockive-premium-addon-for-block-pro' ) }
													</Button>
												) }
											</div>
										) }
									/>
								</MediaUploadCheck>
							) }
							<SelectControl
								label={ __( 'Image Size', 'blockive-premium-addon-for-block-pro' ) }
								value={ imageSize }
								options={ SIZE_OPTIONS }
								onChange={ ( val ) => setAttributes( { imageSize: val } ) }
							/>
						</PanelBody>
						<PanelBody title={ __( 'Link', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<ToggleControl
								label={ __( 'Link Logo', 'blockive-premium-addon-for-block-pro' ) }
								checked={ !! isLink }
								onChange={ ( val ) => setAttributes( { isLink: val } ) }
							/>
							{ isLink && (
								<>
									<TextControl
										label={ __( 'Custom URL', 'blockive-premium-addon-for-block-pro' ) }
										help={ __( 'Leave empty to link to the home page.', 'blockive-premium-addon-for-block-pro' ) }
										value={ customLink }
										onChange={ ( val ) => setAttributes( { customLink: val } ) }
									/>
									<ToggleControl
										label={ __( 'Open in New Tab', 'blockive-premium-addon-for-block-pro' ) }
										checked={ linkTarget === '_blank' }
										onChange={ ( val ) => setAttributes( { linkTarget: val ? '_blank' : '_self' } ) }
									/>
								</>
							) }
						</PanelBody>
					</>
				}
				style={
					<PanelBody title={ __( 'Logo', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
						<ResponsiveControls>
							{ ( device ) => {
								const key = { desktop: 'width', tablet: 'widthTablet', mobile: 'widthMobile' }[ device ] || 'width';
								return (
									<RangeControl
										label={ __( 'Width (px)', 'blockive-premium-addon-for-block-pro' ) }
										value={ attributes[ key ] }
										onChange={ ( val ) => setAttributes( { [ key ]: val } ) }
										min={ 20 }
										max={ 600 }
										allowReset
									/>
								);
							} }
						</ResponsiveControls>
						<RangeControl
							label={ __( 'Max Height (px)', 'blockive-premium-addon-for-block-pro' ) }
							value={ maxHeight }
							onChange={ ( val ) => setAttributes( { maxHeight: val } ) }
							min={ 10 }
							max={ 400 }
							allowReset
						/>
						<RangeControl
							label={ __( 'Border Radius (px)', 'blockive-premium-addon-for-block-pro' ) }
							value={ borderRadius }
							onChange={ ( val ) => setAttributes( { borderRadius: val } ) }
							min={ 0 }
							max={ 200 }
							allowReset
						/>
						<RangeControl
							label={ __( 'Opacity (%)', 'blockive-premium-addon-for-block-pro' ) }
							value={ opacity }
							onChange={ ( val ) => setAttributes( { opacity: val } ) }
							min={ 0 }
							max={ 100 }
							allowReset
						/>
						<RangeControl
							label={ __( 'Hover Opacity (%)', 'blockive-premium-addon-for-block-pro' ) }
							value={ hoverOpacity }
							onChange={ ( val ) => setAttributes( { hoverOpacity: val } ) }
							min={ 0 }
							max={ 100 }
							allowReset
						/>
					</PanelBody>
				}
				advanced={ <AdvancedTab attributes={ attributes } setAttributes={ setAttributes } /> }
			/>

			<div { ...blockProps }>
				<span className="bpafb-tb-site-logo__link">
					{ imageUrl ? (
						<img className="bpafb-tb-site-logo__img" src={ imageUrl } alt="" />
					) : (
						<span className="bpafb-tb-site-logo__text">
							{ site.name || __( 'Site Logo', 'blockive-premium-addon-for-block-pro' ) }
						</span>
					) }
				</span>
			</div>
		</>
	);
}
