import { __ } from '@wordpress/i18n';
import { useBlockProps, BlockControls, AlignmentControl } from '@wordpress/block-editor';
import { PanelBody, SelectControl, RangeControl, TextControl, ToggleControl } from '@wordpress/components';

import InspectorTabs from '../components/inspector-tabs';
import AdvancedTab from '../components/advanced-tab';
import ResponsiveControls from '../components/responsive-controls';
import ColorStateControls from '../components/color-state-controls';
import IconPicker from '../pro-components/icon-picker';
import { cssVars } from '../template-blocks-site/shared';

export default function Edit( { attributes, setAttributes } ) {
	const {
		icon,
		view,
		shape,
		align,
		size,
		sizeTablet,
		sizeMobile,
		padding,
		rotate,
		borderWidth,
		borderRadius,
		primaryColor,
		secondaryColor,
		hoverPrimaryColor,
		hoverSecondaryColor,
		link,
		linkNewTab,
		linkNofollow,
		ariaLabel,
	} = attributes;

	const set = ( key ) => ( val ) => setAttributes( { [ key ]: val } );
	const hasShape = view !== 'default';

	const blockProps = useBlockProps( {
		className: `bpafb-icon bpafb-icon--${ view } bpafb-icon--shape-${ shape } bpafb-icon--align-${ align || 'center' }`,
		style: cssVars( {
			'--bpafb-icon-size': size,
			'--bpafb-icon-size-tablet': sizeTablet,
			'--bpafb-icon-size-mobile': sizeMobile,
			'--bpafb-icon-padding': padding,
			'--bpafb-icon-rotate': rotate ? `${ rotate }deg` : undefined,
			'--bpafb-icon-border-width': borderWidth,
			'--bpafb-icon-radius': shape === 'rounded' ? borderRadius : undefined,
			'--bpafb-icon-primary': primaryColor,
			'--bpafb-icon-secondary': secondaryColor,
			'--bpafb-icon-hover-primary': hoverPrimaryColor,
			'--bpafb-icon-hover-secondary': hoverSecondaryColor,
		} ),
	} );

	const primaryLabel = {
		default: __( 'Icon Color', 'blockive-premium-addon-for-block-pro' ),
		stacked: __( 'Background', 'blockive-premium-addon-for-block-pro' ),
		framed: __( 'Icon & Border', 'blockive-premium-addon-for-block-pro' ),
	}[ view ];
	const secondaryLabel = view === 'stacked' ? __( 'Icon Color', 'blockive-premium-addon-for-block-pro' ) : __( 'Background', 'blockive-premium-addon-for-block-pro' );

	return (
		<>
			<BlockControls>
				<AlignmentControl value={ align } onChange={ ( val ) => setAttributes( { align: val || 'center' } ) } />
			</BlockControls>

			<InspectorTabs
				general={
					<PanelBody title={ __( 'Icon', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
						<IconPicker value={ icon } onChange={ set( 'icon' ) } />
						<SelectControl
							label={ __( 'View', 'blockive-premium-addon-for-block-pro' ) }
							value={ view }
							options={ [
								{ label: __( 'Default', 'blockive-premium-addon-for-block-pro' ), value: 'default' },
								{ label: __( 'Stacked', 'blockive-premium-addon-for-block-pro' ), value: 'stacked' },
								{ label: __( 'Framed', 'blockive-premium-addon-for-block-pro' ), value: 'framed' },
							] }
							onChange={ set( 'view' ) }
						/>
						{ hasShape && (
							<SelectControl
								label={ __( 'Shape', 'blockive-premium-addon-for-block-pro' ) }
								value={ shape }
								options={ [
									{ label: __( 'Circle', 'blockive-premium-addon-for-block-pro' ), value: 'circle' },
									{ label: __( 'Square', 'blockive-premium-addon-for-block-pro' ), value: 'square' },
									{ label: __( 'Rounded', 'blockive-premium-addon-for-block-pro' ), value: 'rounded' },
								] }
								onChange={ set( 'shape' ) }
							/>
						) }
						<TextControl label={ __( 'Link', 'blockive-premium-addon-for-block-pro' ) } type="url" value={ link } onChange={ set( 'link' ) } />
						{ !! link && (
							<>
								<ToggleControl label={ __( 'Open in New Tab', 'blockive-premium-addon-for-block-pro' ) } checked={ !! linkNewTab } onChange={ set( 'linkNewTab' ) } />
								<ToggleControl label={ __( 'Add rel="nofollow"', 'blockive-premium-addon-for-block-pro' ) } checked={ !! linkNofollow } onChange={ set( 'linkNofollow' ) } />
							</>
						) }
						<TextControl
							label={ __( 'Accessible Label', 'blockive-premium-addon-for-block-pro' ) }
							help={ __( 'Read by screen readers. Recommended when the icon is a link.', 'blockive-premium-addon-for-block-pro' ) }
							value={ ariaLabel }
							onChange={ set( 'ariaLabel' ) }
						/>
					</PanelBody>
				}
				style={
					<PanelBody title={ __( 'Icon', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
						<ColorStateControls
							normal={ [
								{ label: primaryLabel, value: primaryColor, onChange: set( 'primaryColor' ) },
								...( hasShape ? [ { label: secondaryLabel, value: secondaryColor, onChange: set( 'secondaryColor' ) } ] : [] ),
							] }
							hover={ [
								{ label: primaryLabel, value: hoverPrimaryColor, onChange: set( 'hoverPrimaryColor' ) },
								...( hasShape ? [ { label: secondaryLabel, value: hoverSecondaryColor, onChange: set( 'hoverSecondaryColor' ) } ] : [] ),
							] }
						/>
						<ResponsiveControls>
							{ ( device ) => {
								const key = { desktop: 'size', tablet: 'sizeTablet', mobile: 'sizeMobile' }[ device ] || 'size';
								return (
									<RangeControl
										label={ __( 'Size (px)', 'blockive-premium-addon-for-block-pro' ) }
										value={ attributes[ key ] }
										onChange={ ( val ) => setAttributes( { [ key ]: val } ) }
										min={ 6 }
										max={ 300 }
										allowReset={ device !== 'desktop' }
									/>
								);
							} }
						</ResponsiveControls>
						{ hasShape && (
							<RangeControl label={ __( 'Padding (px)', 'blockive-premium-addon-for-block-pro' ) } value={ padding } onChange={ set( 'padding' ) } min={ 0 } max={ 100 } />
						) }
						{ view === 'framed' && (
							<RangeControl label={ __( 'Border Width (px)', 'blockive-premium-addon-for-block-pro' ) } value={ borderWidth } onChange={ set( 'borderWidth' ) } min={ 1 } max={ 20 } />
						) }
						{ hasShape && shape === 'rounded' && (
							<RangeControl label={ __( 'Border Radius (px)', 'blockive-premium-addon-for-block-pro' ) } value={ borderRadius } onChange={ set( 'borderRadius' ) } min={ 0 } max={ 100 } />
						) }
						<RangeControl label={ __( 'Rotate (deg)', 'blockive-premium-addon-for-block-pro' ) } value={ rotate } onChange={ set( 'rotate' ) } min={ 0 } max={ 360 } />
					</PanelBody>
				}
				advanced={ <AdvancedTab attributes={ attributes } setAttributes={ setAttributes } /> }
			/>

			<div { ...blockProps }>
				<span className="bpafb-icon__inner">
					<i className={ icon || 'fa-solid fa-star' } aria-hidden="true" />
				</span>
			</div>
		</>
	);
}
