import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { useBlockProps } from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';
import { PanelBody, SelectControl, RangeControl, TextControl, ToggleControl, Disabled } from '@wordpress/components';

import InspectorTabs from '../components/inspector-tabs';
import AdvancedTab from '../components/advanced-tab';
import ResponsiveControls from '../components/responsive-controls';
import ColorStateControls from '../components/color-state-controls';
import TypographyControls from '../components/typography-controls';
import { LoopQueryPanel } from '../loop-grid/query-panels';
import { FilterBarSettingsPanel, FilterBarStylePanel } from '../pro-components/filter-bar/editor';
import { typoValues, typoOnChange } from '../template-blocks-site/shared';

const IMAGE_SIZES = [
	{ label: __( 'Medium', 'blockive-premium-addon-for-block-pro' ), value: 'medium' },
	{ label: __( 'Medium Large', 'blockive-premium-addon-for-block-pro' ), value: 'medium_large' },
	{ label: __( 'Large', 'blockive-premium-addon-for-block-pro' ), value: 'large' },
	{ label: __( 'Full', 'blockive-premium-addon-for-block-pro' ), value: 'full' },
];

export default function Edit( { attributes, setAttributes } ) {
	const {
		postType,
		filterTaxonomy,
		showFilter,
		layout,
		aspectRatio,
		imageSize,
		titlePosition,
		titleTag,
		showTerms,
		hoverEffect,
		overlayColor,
		borderRadius,
		gap,
		nothingFoundText,
		titleColor,
		termsColor,
	} = attributes;
	const set = ( key ) => ( val ) => setAttributes( { [ key ]: val } );

	const taxonomyOptions = useSelect(
		( select ) => {
			const taxonomies = select( 'core' ).getTaxonomies( { per_page: -1 } ) || [];
			return [
				{ label: __( 'None (no filter)', 'blockive-premium-addon-for-block-pro' ), value: '' },
				...taxonomies.filter( ( tax ) => tax.types?.includes( postType ) ).map( ( tax ) => ( { label: tax.name, value: tax.slug } ) ),
			];
		},
		[ postType ]
	);

	return (
		<>
			<InspectorTabs
				general={
					<>
						<LoopQueryPanel attributes={ attributes } setAttributes={ setAttributes } countLabel={ __( 'Number of Items', 'blockive-premium-addon-for-block-pro' ) } />
						<FilterBarSettingsPanel attributes={ attributes } setAttributes={ setAttributes }>
							<ToggleControl label={ __( 'Show Filter Buttons', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showFilter } onChange={ set( 'showFilter' ) } />
							<SelectControl
								label={ __( 'Filter By', 'blockive-premium-addon-for-block-pro' ) }
								value={ filterTaxonomy }
								options={ taxonomyOptions }
								onChange={ set( 'filterTaxonomy' ) }
								help={ __( 'One button per term used by the listed items. The terms also show under each title.', 'blockive-premium-addon-for-block-pro' ) }
							/>
						</FilterBarSettingsPanel>
						<PanelBody title={ __( 'Layout', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<SelectControl
								label={ __( 'Layout', 'blockive-premium-addon-for-block-pro' ) }
								value={ layout }
								options={ [
									{ label: __( 'Grid', 'blockive-premium-addon-for-block-pro' ), value: 'grid' },
									{ label: __( 'Masonry', 'blockive-premium-addon-for-block-pro' ), value: 'masonry' },
								] }
								onChange={ set( 'layout' ) }
							/>
							<ResponsiveControls>
								{ ( device ) => {
									const key = { desktop: 'columns', tablet: 'columnsTablet', mobile: 'columnsMobile' }[ device ] || 'columns';
									return <RangeControl label={ __( 'Columns', 'blockive-premium-addon-for-block-pro' ) } value={ attributes[ key ] } onChange={ ( val ) => setAttributes( { [ key ]: val } ) } min={ 1 } max={ 8 } />;
								} }
							</ResponsiveControls>
							<SelectControl
								label={ __( 'Image Ratio', 'blockive-premium-addon-for-block-pro' ) }
								value={ aspectRatio }
								options={ [
									...[ '1/1', '4/3', '3/2', '16/9', '3/4', '2/3' ].map( ( value ) => ( { label: value.replace( '/', ':' ), value } ) ),
									{ label: __( 'Original', 'blockive-premium-addon-for-block-pro' ), value: 'auto' },
								] }
								onChange={ set( 'aspectRatio' ) }
							/>
							<SelectControl label={ __( 'Image Size', 'blockive-premium-addon-for-block-pro' ) } value={ imageSize } options={ IMAGE_SIZES } onChange={ set( 'imageSize' ) } />
							<SelectControl
								label={ __( 'Title', 'blockive-premium-addon-for-block-pro' ) }
								value={ titlePosition }
								options={ [
									{ label: __( 'Over the Image, on Hover', 'blockive-premium-addon-for-block-pro' ), value: 'overlay' },
									{ label: __( 'Below the Image', 'blockive-premium-addon-for-block-pro' ), value: 'below' },
									{ label: __( 'Hidden', 'blockive-premium-addon-for-block-pro' ), value: 'none' },
								] }
								onChange={ set( 'titlePosition' ) }
							/>
							{ titlePosition !== 'none' && (
								<>
									<SelectControl
										label={ __( 'Title HTML Tag', 'blockive-premium-addon-for-block-pro' ) }
										value={ titleTag }
										options={ [ 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div' ].map( ( t ) => ( { label: t.toUpperCase(), value: t } ) ) }
										onChange={ set( 'titleTag' ) }
									/>
									<ToggleControl label={ __( 'Show Terms', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showTerms } onChange={ set( 'showTerms' ) } />
								</>
							) }
							<TextControl label={ __( 'Nothing Found Message', 'blockive-premium-addon-for-block-pro' ) } value={ nothingFoundText } onChange={ set( 'nothingFoundText' ) } />
						</PanelBody>
					</>
				}
				style={
					<>
						<PanelBody title={ __( 'Items', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							<RangeControl label={ __( 'Gap (px)', 'blockive-premium-addon-for-block-pro' ) } value={ gap } onChange={ set( 'gap' ) } min={ 0 } max={ 60 } />
							<RangeControl label={ __( 'Border Radius (px)', 'blockive-premium-addon-for-block-pro' ) } value={ borderRadius } onChange={ set( 'borderRadius' ) } min={ 0 } max={ 40 } />
							<SelectControl
								label={ __( 'Hover Effect', 'blockive-premium-addon-for-block-pro' ) }
								value={ hoverEffect }
								options={ [
									{ label: __( 'Zoom', 'blockive-premium-addon-for-block-pro' ), value: 'zoom' },
									{ label: __( 'None', 'blockive-premium-addon-for-block-pro' ), value: 'none' },
								] }
								onChange={ set( 'hoverEffect' ) }
							/>
							{ titlePosition === 'overlay' && <ColorStateControls normal={ [ { label: __( 'Overlay', 'blockive-premium-addon-for-block-pro' ), value: overlayColor, onChange: set( 'overlayColor' ) } ] } /> }
						</PanelBody>
						{ titlePosition !== 'none' && (
							<PanelBody title={ __( 'Title', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
								<TypographyControls values={ typoValues( attributes, 'title' ) } onChange={ typoOnChange( setAttributes, 'title' ) } />
								<ColorStateControls
									normal={ [
										{ label: __( 'Title', 'blockive-premium-addon-for-block-pro' ), value: titleColor, onChange: set( 'titleColor' ) },
										{ label: __( 'Terms', 'blockive-premium-addon-for-block-pro' ), value: termsColor, onChange: set( 'termsColor' ) },
									] }
								/>
							</PanelBody>
						) }
						<FilterBarStylePanel attributes={ attributes } setAttributes={ setAttributes } />
					</>
				}
				advanced={ <AdvancedTab attributes={ attributes } setAttributes={ setAttributes } /> }
			/>

			<div { ...useBlockProps() }>
				<Disabled>
					<ServerSideRender block="blockive-premium-addon-for-block/portfolio" attributes={ attributes } />
				</Disabled>
			</div>
		</>
	);
}
