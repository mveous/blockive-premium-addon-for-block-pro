/**
 * "Scrolling & Mouse Effects" panel for Blockive blocks (applied on the
 * site by Bpafb_Pro_Motion). Lives in this script because it loads before
 * every Blockive block, which the attribute filter below needs.
 */
import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import { getBlockType } from '@wordpress/blocks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, SelectControl, RangeControl, Notice } from '@wordpress/components';

const PREFIX = 'blockive-premium-addon-for-block/';

const SHAPES = [
	{ label: __( 'Fade In', 'blockive-premium-addon-for-block-pro' ), value: 'in' },
	{ label: __( 'Fade Out', 'blockive-premium-addon-for-block-pro' ), value: 'out' },
	{ label: __( 'In, then Out', 'blockive-premium-addon-for-block-pro' ), value: 'in-out' },
	{ label: __( 'Out, then In', 'blockive-premium-addon-for-block-pro' ), value: 'out-in' },
];

// Effect key => panel label, direction options, strength label.
const EFFECTS = [
	{
		key: 'y',
		label: __( 'Vertical Scroll (parallax)', 'blockive-premium-addon-for-block-pro' ),
		directions: [
			{ label: __( 'Up', 'blockive-premium-addon-for-block-pro' ), value: 'up' },
			{ label: __( 'Down', 'blockive-premium-addon-for-block-pro' ), value: 'down' },
		],
	},
	{
		key: 'x',
		label: __( 'Horizontal Scroll', 'blockive-premium-addon-for-block-pro' ),
		directions: [
			{ label: __( 'To Left', 'blockive-premium-addon-for-block-pro' ), value: 'left' },
			{ label: __( 'To Right', 'blockive-premium-addon-for-block-pro' ), value: 'right' },
		],
	},
	{ key: 'fade', label: __( 'Transparency', 'blockive-premium-addon-for-block-pro' ), directions: SHAPES, strength: __( 'Level', 'blockive-premium-addon-for-block-pro' ) },
	{
		key: 'blur',
		label: __( 'Blur', 'blockive-premium-addon-for-block-pro' ),
		directions: [
			{ label: __( 'Sharpen In', 'blockive-premium-addon-for-block-pro' ), value: 'in' },
			{ label: __( 'Blur Out', 'blockive-premium-addon-for-block-pro' ), value: 'out' },
			{ label: __( 'Sharp, then Blur', 'blockive-premium-addon-for-block-pro' ), value: 'in-out' },
			{ label: __( 'Blur, then Sharp', 'blockive-premium-addon-for-block-pro' ), value: 'out-in' },
		],
		strength: __( 'Level', 'blockive-premium-addon-for-block-pro' ),
	},
	{
		key: 'rotate',
		label: __( 'Rotate', 'blockive-premium-addon-for-block-pro' ),
		directions: [
			{ label: __( 'To Left', 'blockive-premium-addon-for-block-pro' ), value: 'left' },
			{ label: __( 'To Right', 'blockive-premium-addon-for-block-pro' ), value: 'right' },
		],
	},
	{
		key: 'scale',
		label: __( 'Scale', 'blockive-premium-addon-for-block-pro' ),
		directions: [
			{ label: __( 'Grow', 'blockive-premium-addon-for-block-pro' ), value: 'up' },
			{ label: __( 'Shrink', 'blockive-premium-addon-for-block-pro' ), value: 'down' },
			{ label: __( 'Grow, then Shrink', 'blockive-premium-addon-for-block-pro' ), value: 'up-down' },
			{ label: __( 'Shrink, then Grow', 'blockive-premium-addon-for-block-pro' ), value: 'down-up' },
		],
	},
	{
		key: 'mouse',
		label: __( 'Mouse Track', 'blockive-premium-addon-for-block-pro' ),
		directions: [
			{ label: __( 'Opposite', 'blockive-premium-addon-for-block-pro' ), value: 'opposite' },
			{ label: __( 'Direct', 'blockive-premium-addon-for-block-pro' ), value: 'direct' },
		],
		mouse: true,
	},
	{
		key: 'tilt',
		label: __( '3D Tilt', 'blockive-premium-addon-for-block-pro' ),
		directions: [
			{ label: __( 'Direct', 'blockive-premium-addon-for-block-pro' ), value: 'direct' },
			{ label: __( 'Opposite', 'blockive-premium-addon-for-block-pro' ), value: 'opposite' },
		],
		mouse: true,
	},
];

addFilter( 'blocks.registerBlockType', 'blockive-pro/motion-effects', ( settings, name ) => {
	if ( ! name.startsWith( PREFIX ) || ( settings.attributes && settings.attributes.bpafbMotion ) ) {
		return settings;
	}
	return {
		...settings,
		attributes: { ...settings.attributes, bpafbMotion: { type: 'object' } },
	};
} );

function MotionPanel( { attributes, setAttributes } ) {
	const motion = attributes.bpafbMotion || {};
	const set = ( key ) => ( value ) => setAttributes( { bpafbMotion: { ...motion, [ key ]: value } } );
	const anyScroll = EFFECTS.some( ( effect ) => ! effect.mouse && motion[ `${ effect.key }On` ] );
	const anyOn = EFFECTS.some( ( effect ) => motion[ `${ effect.key }On` ] );
	const clash = anyOn && ( ( attributes.bpafbHoverAnimation && attributes.bpafbHoverAnimation !== 'none' ) || attributes.bpafbFloatingEffect );

	return (
		<PanelBody title={ __( 'Scrolling & Mouse Effects', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ anyOn }>
			{ EFFECTS.map( ( effect ) => {
				const on = !! motion[ `${ effect.key }On` ];
				return (
					<div key={ effect.key } style={ { marginBottom: on ? 16 : 0 } }>
						<ToggleControl label={ effect.label } checked={ on } onChange={ set( `${ effect.key }On` ) } __nextHasNoMarginBottom />
						{ on && (
							<div style={ { margin: '12px 0 0 12px' } }>
								<SelectControl
									label={ __( 'Direction', 'blockive-premium-addon-for-block-pro' ) }
									value={ motion[ `${ effect.key }Dir` ] || effect.directions[ 0 ].value }
									options={ effect.directions }
									onChange={ set( `${ effect.key }Dir` ) }
								/>
								<RangeControl
									label={ effect.strength || __( 'Speed', 'blockive-premium-addon-for-block-pro' ) }
									value={ motion[ `${ effect.key }Speed` ] ?? 4 }
									onChange={ set( `${ effect.key }Speed` ) }
									min={ 1 }
									max={ 10 }
									step={ 0.5 }
								/>
							</div>
						) }
					</div>
				);
			} ) }
			{ anyScroll && (
				<RangeControl
					label={ __( 'Effect Happens Between (% of the window)', 'blockive-premium-addon-for-block-pro' ) }
					help={ __( 'From where the block enters the window at the bottom (0) to where it leaves at the top (100).', 'blockive-premium-addon-for-block-pro' ) }
					value={ motion.rangeStart ?? 0 }
					onChange={ set( 'rangeStart' ) }
					min={ 0 }
					max={ 99 }
				/>
			) }
			{ anyScroll && <RangeControl label={ __( 'Until (%)', 'blockive-premium-addon-for-block-pro' ) } value={ motion.rangeEnd ?? 100 } onChange={ set( 'rangeEnd' ) } min={ 1 } max={ 100 } /> }
			{ anyOn && (
				<>
					<p className="components-base-control__label" style={ { margin: '8px 0' } }>{ __( 'On', 'blockive-premium-addon-for-block-pro' ) }</p>
					<ToggleControl label={ __( 'Desktop', 'blockive-premium-addon-for-block-pro' ) } checked={ motion.desktop !== false } onChange={ set( 'desktop' ) } />
					<ToggleControl label={ __( 'Tablet', 'blockive-premium-addon-for-block-pro' ) } checked={ motion.tablet !== false } onChange={ set( 'tablet' ) } />
					<ToggleControl label={ __( 'Mobile', 'blockive-premium-addon-for-block-pro' ) } checked={ motion.mobile !== false } onChange={ set( 'mobile' ) } />
					<p className="components-base-control__help">{ __( 'Shown on the site, not in the editor. Visitors who turn off animations in their system settings see the block still.', 'blockive-premium-addon-for-block-pro' ) }</p>
				</>
			) }
			{ clash && (
				<Notice status="warning" isDismissible={ false }>
					{ __( 'The Hover Animation and Floating effect also move this block, and take over from these effects while they run.', 'blockive-premium-addon-for-block-pro' ) }
				</Notice>
			) }
		</PanelBody>
	);
}

const withMotionEffects = createHigherOrderComponent(
	( BlockEdit ) => ( props ) => {
		// Blocks with the shared Advanced settings (they all have bpafbUid).
		if ( ! props.name.startsWith( PREFIX ) || ! getBlockType( props.name )?.attributes?.bpafbUid ) {
			return <BlockEdit { ...props } />;
		}
		return (
			<>
				<BlockEdit { ...props } />
				<InspectorControls group="styles">
					<MotionPanel attributes={ props.attributes } setAttributes={ props.setAttributes } />
				</InspectorControls>
			</>
		);
	},
	'withBpafbMotionEffects'
);

addFilter( 'editor.BlockEdit', 'blockive-pro/motion-effects', withMotionEffects );
