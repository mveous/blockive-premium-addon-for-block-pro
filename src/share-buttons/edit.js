import { __ } from '@wordpress/i18n';
import { useBlockProps, BlockControls, AlignmentControl } from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	RangeControl,
	TextControl,
	CheckboxControl,
	Button,
} from '@wordpress/components';

import InspectorTabs from '../components/inspector-tabs';
import AdvancedTab from '../components/advanced-tab';
import ColorStateControls from '../components/color-state-controls';
import TypographyControls from '../components/typography-controls';
import { typoValues, typoOnChange, typoVars, cssVars } from '../template-blocks-site/shared';
import { NETWORKS } from './networks';

export default function Edit( { attributes, setAttributes } ) {
	const {
		networks,
		view,
		skin,
		shape,
		align,
		alignMobile,
		columns,
		gap,
		size,
		iconSize,
		labels,
		shareTarget,
		customUrl,
		colorSource,
		primaryColor,
		secondaryColor,
		hoverPrimaryColor,
		hoverSecondaryColor,
	} = attributes;

	const set = ( key ) => ( val ) => setAttributes( { [ key ]: val } );
	const custom = colorSource === 'custom';

	const toggleNetwork = ( key, on ) =>
		setAttributes( { networks: on ? [ ...networks, key ] : networks.filter( ( n ) => n !== key ) } );

	const move = ( key, delta ) => {
		const i = networks.indexOf( key );
		const next = [ ...networks ];
		next.splice( i, 1 );
		next.splice( i + delta, 0, key );
		setAttributes( { networks: next } );
	};

	const blockProps = useBlockProps( {
		className: [
			'bpafb-share',
			`bpafb-share--view-${ view }`,
			`bpafb-share--skin-${ skin }`,
			`bpafb-share--shape-${ shape }`,
			`bpafb-share--align-${ align }`,
			columns ? 'bpafb-share--grid' : '',
		]
			.filter( Boolean )
			.join( ' ' ),
		style: cssVars( {
			'--bpafb-share-columns': columns ? String( columns ) : undefined,
			'--bpafb-share-gap': gap,
			'--bpafb-share-size': size,
			'--bpafb-share-icon-size': iconSize,
			'--bpafb-share-primary': custom ? primaryColor : undefined,
			'--bpafb-share-secondary': custom ? secondaryColor : undefined,
			'--bpafb-share-hover-primary': custom ? hoverPrimaryColor : undefined,
			'--bpafb-share-hover-secondary': custom ? hoverSecondaryColor : undefined,
			...typoVars( attributes, 'text', '--bpafb-share-text' ),
		} ),
	} );

	const unselected = Object.keys( NETWORKS ).filter( ( key ) => ! networks.includes( key ) );

	return (
		<>
			<BlockControls>
				<AlignmentControl value={ align === 'justify' ? undefined : align } onChange={ ( val ) => setAttributes( { align: val || 'left' } ) } />
			</BlockControls>

			<InspectorTabs
				general={
					<>
						<PanelBody title={ __( 'Networks', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							{ networks.filter( ( key ) => NETWORKS[ key ] ).map( ( key, i ) => (
								<div key={ key } style={ { display: 'flex', alignItems: 'center', gap: 4 } }>
									<CheckboxControl label={ NETWORKS[ key ].label } checked onChange={ () => toggleNetwork( key, false ) } __nextHasNoMarginBottom />
									<Button size="small" icon="arrow-up-alt2" label={ __( 'Move up', 'blockive-premium-addon-for-block-pro' ) } disabled={ i === 0 } onClick={ () => move( key, -1 ) } />
									<Button size="small" icon="arrow-down-alt2" label={ __( 'Move down', 'blockive-premium-addon-for-block-pro' ) } disabled={ i === networks.length - 1 } onClick={ () => move( key, 1 ) } />
								</div>
							) ) }
							{ unselected.length > 0 && <p className="bpafb-help-text">{ __( 'More networks:', 'blockive-premium-addon-for-block-pro' ) }</p> }
							{ unselected.map( ( key ) => (
								<CheckboxControl key={ key } label={ NETWORKS[ key ].label } checked={ false } onChange={ () => toggleNetwork( key, true ) } />
							) ) }
							<p className="bpafb-help-text">
								{ __( '"Share" opens the phone\'s own share sheet and only shows on devices that support it.', 'blockive-premium-addon-for-block-pro' ) }
							</p>
						</PanelBody>
						<PanelBody title={ __( 'Button Labels', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							{ networks.filter( ( key ) => NETWORKS[ key ] ).map( ( key ) => (
								<TextControl
									key={ key }
									label={ NETWORKS[ key ].label }
									value={ labels?.[ key ] || '' }
									placeholder={ NETWORKS[ key ].label }
									onChange={ ( val ) => setAttributes( { labels: { ...labels, [ key ]: val } } ) }
								/>
							) ) }
						</PanelBody>
						<PanelBody title={ __( 'Settings', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<SelectControl
								label={ __( 'View', 'blockive-premium-addon-for-block-pro' ) }
								value={ view }
								options={ [
									{ label: __( 'Icon & Text', 'blockive-premium-addon-for-block-pro' ), value: 'icon-text' },
									{ label: __( 'Icon', 'blockive-premium-addon-for-block-pro' ), value: 'icon' },
									{ label: __( 'Text', 'blockive-premium-addon-for-block-pro' ), value: 'text' },
								] }
								onChange={ set( 'view' ) }
							/>
							<SelectControl
								label={ __( 'What to Share', 'blockive-premium-addon-for-block-pro' ) }
								value={ shareTarget }
								options={ [
									{ label: __( 'Current page / post', 'blockive-premium-addon-for-block-pro' ), value: 'current' },
									{ label: __( 'Custom URL', 'blockive-premium-addon-for-block-pro' ), value: 'custom' },
								] }
								onChange={ set( 'shareTarget' ) }
								help={ __( 'Inside a Loop Grid card, "current" shares that card\'s post.', 'blockive-premium-addon-for-block-pro' ) }
							/>
							{ shareTarget === 'custom' && (
								<TextControl label={ __( 'URL', 'blockive-premium-addon-for-block-pro' ) } type="url" value={ customUrl } onChange={ set( 'customUrl' ) } />
							) }
							<SelectControl
								label={ __( 'Mobile Alignment', 'blockive-premium-addon-for-block-pro' ) }
								value={ alignMobile }
								options={ [
									{ label: __( 'Same as desktop', 'blockive-premium-addon-for-block-pro' ), value: '' },
									{ label: __( 'Left', 'blockive-premium-addon-for-block-pro' ), value: 'left' },
									{ label: __( 'Center', 'blockive-premium-addon-for-block-pro' ), value: 'center' },
									{ label: __( 'Right', 'blockive-premium-addon-for-block-pro' ), value: 'right' },
									{ label: __( 'Justified', 'blockive-premium-addon-for-block-pro' ), value: 'justify' },
								] }
								onChange={ set( 'alignMobile' ) }
							/>
							<SelectControl
								label={ __( 'Desktop Alignment', 'blockive-premium-addon-for-block-pro' ) }
								value={ align }
								options={ [
									{ label: __( 'Left', 'blockive-premium-addon-for-block-pro' ), value: 'left' },
									{ label: __( 'Center', 'blockive-premium-addon-for-block-pro' ), value: 'center' },
									{ label: __( 'Right', 'blockive-premium-addon-for-block-pro' ), value: 'right' },
									{ label: __( 'Justified', 'blockive-premium-addon-for-block-pro' ), value: 'justify' },
								] }
								onChange={ set( 'align' ) }
							/>
							<RangeControl
								label={ __( 'Columns (0 = auto)', 'blockive-premium-addon-for-block-pro' ) }
								value={ columns }
								onChange={ set( 'columns' ) }
								min={ 0 }
								max={ 6 }
							/>
						</PanelBody>
					</>
				}
				style={
					<>
						<PanelBody title={ __( 'Buttons', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							<SelectControl
								label={ __( 'Skin', 'blockive-premium-addon-for-block-pro' ) }
								value={ skin }
								options={ [
									{ label: __( 'Flat', 'blockive-premium-addon-for-block-pro' ), value: 'flat' },
									{ label: __( 'Gradient', 'blockive-premium-addon-for-block-pro' ), value: 'gradient' },
									{ label: __( 'Framed', 'blockive-premium-addon-for-block-pro' ), value: 'framed' },
									{ label: __( 'Minimal', 'blockive-premium-addon-for-block-pro' ), value: 'minimal' },
								] }
								onChange={ set( 'skin' ) }
							/>
							<SelectControl
								label={ __( 'Shape', 'blockive-premium-addon-for-block-pro' ) }
								value={ shape }
								options={ [
									{ label: __( 'Square', 'blockive-premium-addon-for-block-pro' ), value: 'square' },
									{ label: __( 'Rounded', 'blockive-premium-addon-for-block-pro' ), value: 'rounded' },
									{ label: __( 'Circle / Pill', 'blockive-premium-addon-for-block-pro' ), value: 'circle' },
								] }
								onChange={ set( 'shape' ) }
							/>
							<RangeControl label={ __( 'Button Height (px)', 'blockive-premium-addon-for-block-pro' ) } value={ size } onChange={ set( 'size' ) } min={ 24 } max={ 80 } />
							<RangeControl label={ __( 'Icon Size (px)', 'blockive-premium-addon-for-block-pro' ) } value={ iconSize } onChange={ set( 'iconSize' ) } min={ 8 } max={ 40 } />
							<RangeControl label={ __( 'Spacing (px)', 'blockive-premium-addon-for-block-pro' ) } value={ gap } onChange={ set( 'gap' ) } min={ 0 } max={ 40 } />
							<SelectControl
								label={ __( 'Colors', 'blockive-premium-addon-for-block-pro' ) }
								value={ colorSource }
								options={ [
									{ label: __( 'Official brand colors', 'blockive-premium-addon-for-block-pro' ), value: 'official' },
									{ label: __( 'Custom', 'blockive-premium-addon-for-block-pro' ), value: 'custom' },
								] }
								onChange={ set( 'colorSource' ) }
							/>
							{ custom && (
								<ColorStateControls
									normal={ [
										{ label: __( 'Primary', 'blockive-premium-addon-for-block-pro' ), value: primaryColor, onChange: set( 'primaryColor' ) },
										{ label: __( 'Secondary', 'blockive-premium-addon-for-block-pro' ), value: secondaryColor, onChange: set( 'secondaryColor' ) },
									] }
									hover={ [
										{ label: __( 'Primary', 'blockive-premium-addon-for-block-pro' ), value: hoverPrimaryColor, onChange: set( 'hoverPrimaryColor' ) },
										{ label: __( 'Secondary', 'blockive-premium-addon-for-block-pro' ), value: hoverSecondaryColor, onChange: set( 'hoverSecondaryColor' ) },
									] }
								/>
							) }
						</PanelBody>
						{ view !== 'icon' && (
							<PanelBody title={ __( 'Text', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
								<TypographyControls values={ typoValues( attributes, 'text' ) } onChange={ typoOnChange( setAttributes, 'text' ) } />
							</PanelBody>
						) }
					</>
				}
				advanced={ <AdvancedTab attributes={ attributes } setAttributes={ setAttributes } /> }
			/>

			<div { ...blockProps }>
				<ul className="bpafb-share__list">
					{ networks.filter( ( key ) => NETWORKS[ key ] ).map( ( key ) => (
						<li key={ key }>
							<span
								className={ `bpafb-share__button bpafb-share__button--${ key }` }
								style={ custom ? undefined : { '--bpafb-share-brand': NETWORKS[ key ].color } }
							>
								{ view !== 'text' && (
									<span className="bpafb-share__icon">
										<i className={ NETWORKS[ key ].icon } aria-hidden="true" />
									</span>
								) }
								{ view !== 'icon' && <span className="bpafb-share__label">{ labels?.[ key ] || NETWORKS[ key ].label }</span> }
							</span>
						</li>
					) ) }
				</ul>
			</div>
		</>
	);
}
