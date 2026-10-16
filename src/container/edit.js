import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	useInnerBlocksProps,
	InnerBlocks,
	__experimentalBlockVariationPicker as ExperimentalBlockVariationPicker,
	BlockVariationPicker as StableBlockVariationPicker,
} from '@wordpress/block-editor';
import { PanelBody, SelectControl, RangeControl, ToggleControl, Button } from '@wordpress/components';
import { createBlock } from '@wordpress/blocks';
import { useSelect, useDispatch } from '@wordpress/data';

import InspectorTabs from '../components/inspector-tabs';
import ResponsiveControls from '../components/responsive-controls';
import SegmentedControl from '../components/segmented-control';

const VariationPicker = StableBlockVariationPicker || ExperimentalBlockVariationPicker;

const TAG_OPTIONS = [
	{ label: 'div', value: 'div' },
	{ label: 'section', value: 'section' },
	{ label: 'header', value: 'header' },
	{ label: 'footer', value: 'footer' },
	{ label: 'article', value: 'article' },
	{ label: 'aside', value: 'aside' },
	{ label: 'main', value: 'main' },
	{ label: 'nav', value: 'nav' },
];

const DIRECTION_OPTIONS = [
	{ label: __( 'Row (Horizontal)', 'blockive-premium-addon-for-block-pro' ), value: 'row' },
	{ label: __( 'Row Reversed', 'blockive-premium-addon-for-block-pro' ), value: 'row-reverse' },
	{ label: __( 'Column (Vertical)', 'blockive-premium-addon-for-block-pro' ), value: 'column' },
	{ label: __( 'Column Reversed', 'blockive-premium-addon-for-block-pro' ), value: 'column-reverse' },
];

const WRAP_OPTIONS = [
	{ label: __( 'No Wrap', 'blockive-premium-addon-for-block-pro' ), value: 'nowrap' },
	{ label: __( 'Wrap', 'blockive-premium-addon-for-block-pro' ), value: 'wrap' },
	{ label: __( 'Wrap Reversed', 'blockive-premium-addon-for-block-pro' ), value: 'wrap-reverse' },
];

const JUSTIFY_OPTIONS = [
	{ label: __( 'Start', 'blockive-premium-addon-for-block-pro' ), value: 'flex-start' },
	{ label: __( 'Center', 'blockive-premium-addon-for-block-pro' ), value: 'center' },
	{ label: __( 'End', 'blockive-premium-addon-for-block-pro' ), value: 'flex-end' },
	{ label: __( 'Space Between', 'blockive-premium-addon-for-block-pro' ), value: 'space-between' },
	{ label: __( 'Space Around', 'blockive-premium-addon-for-block-pro' ), value: 'space-around' },
	{ label: __( 'Space Evenly', 'blockive-premium-addon-for-block-pro' ), value: 'space-evenly' },
];

const ALIGN_OPTIONS = [
	{ label: __( 'Stretch', 'blockive-premium-addon-for-block-pro' ), value: 'stretch' },
	{ label: __( 'Start', 'blockive-premium-addon-for-block-pro' ), value: 'flex-start' },
	{ label: __( 'Center', 'blockive-premium-addon-for-block-pro' ), value: 'center' },
	{ label: __( 'End', 'blockive-premium-addon-for-block-pro' ), value: 'flex-end' },
	{ label: __( 'Baseline', 'blockive-premium-addon-for-block-pro' ), value: 'baseline' },
];

const OVERFLOW_OPTIONS = [
	{ label: __( 'Visible', 'blockive-premium-addon-for-block-pro' ), value: 'visible' },
	{ label: __( 'Hidden', 'blockive-premium-addon-for-block-pro' ), value: 'hidden' },
];

const CONTENT_WIDTH_OPTIONS = [
	{ label: __( 'Boxed', 'blockive-premium-addon-for-block-pro' ), value: 'boxed' },
	{ label: __( 'Full Width', 'blockive-premium-addon-for-block-pro' ), value: 'full' },
];

const UNIT_OPTIONS = [
	{ label: 'px', value: 'px' },
	{ label: '%', value: '%' },
	{ label: 'vw', value: 'vw' },
];

const HEIGHT_UNIT_OPTIONS = [
	{ label: 'px', value: 'px' },
	{ label: 'vh', value: 'vh' },
	{ label: 'em', value: 'em' },
	{ label: 'rem', value: 'rem' },
];

const GAP_UNIT_OPTIONS = [
	{ label: 'px', value: 'px' },
	{ label: 'em', value: 'em' },
	{ label: 'rem', value: 'rem' },
];

const VARIATIONS = [
	{
		name: 'one-column',
		title: __( '1 Column', 'blockive-premium-addon-for-block-pro' ),
		description: __( 'A single full-width container.', 'blockive-premium-addon-for-block-pro' ),
		icon: (
			<svg width="48" height="48" viewBox="0 0 48 48">
				<rect x="6" y="8" width="36" height="32" rx="4" fill="#2563eb" fillOpacity="0.15" stroke="#2563eb" strokeWidth="2" />
			</svg>
		),
		attributes: {
			variationSelected: true,
			direction: 'column',
		},
		innerBlocks: [],
		scope: [ 'block' ],
	},
	{
		name: 'two-columns-equal',
		title: __( '2 Columns (50/50)', 'blockive-premium-addon-for-block-pro' ),
		description: __( 'Two equal-width columns.', 'blockive-premium-addon-for-block-pro' ),
		icon: (
			<svg width="48" height="48" viewBox="0 0 48 48">
				<rect x="6" y="8" width="16" height="32" rx="3" fill="#2563eb" fillOpacity="0.15" stroke="#2563eb" strokeWidth="2" />
				<rect x="26" y="8" width="16" height="32" rx="3" fill="#2563eb" fillOpacity="0.15" stroke="#2563eb" strokeWidth="2" />
			</svg>
		),
		attributes: {
			variationSelected: true,
			direction: 'row',
			wrap: 'nowrap',
			wrapMobile: 'wrap',
		},
		innerBlocks: [
			[ 'blockive-premium-addon-for-block/container', { containerWidth: 50, containerWidthTablet: 100, containerWidthMobile: 100, containerWidthUnit: '%', direction: 'column', variationSelected: true } ],
			[ 'blockive-premium-addon-for-block/container', { containerWidth: 50, containerWidthTablet: 100, containerWidthMobile: 100, containerWidthUnit: '%', direction: 'column', variationSelected: true } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'three-columns-equal',
		title: __( '3 Columns', 'blockive-premium-addon-for-block-pro' ),
		description: __( 'Three equal-width columns.', 'blockive-premium-addon-for-block-pro' ),
		icon: (
			<svg width="48" height="48" viewBox="0 0 48 48">
				<rect x="5" y="8" width="10" height="32" rx="2" fill="#2563eb" fillOpacity="0.15" stroke="#2563eb" strokeWidth="2" />
				<rect x="19" y="8" width="10" height="32" rx="2" fill="#2563eb" fillOpacity="0.15" stroke="#2563eb" strokeWidth="2" />
				<rect x="33" y="8" width="10" height="32" rx="2" fill="#2563eb" fillOpacity="0.15" stroke="#2563eb" strokeWidth="2" />
			</svg>
		),
		attributes: {
			variationSelected: true,
			direction: 'row',
			wrap: 'nowrap',
			wrapTablet: 'wrap',
			wrapMobile: 'wrap',
		},
		innerBlocks: [
			[ 'blockive-premium-addon-for-block/container', { containerWidth: 33.33, containerWidthTablet: 100, containerWidthMobile: 100, containerWidthUnit: '%', direction: 'column', variationSelected: true } ],
			[ 'blockive-premium-addon-for-block/container', { containerWidth: 33.33, containerWidthTablet: 100, containerWidthMobile: 100, containerWidthUnit: '%', direction: 'column', variationSelected: true } ],
			[ 'blockive-premium-addon-for-block/container', { containerWidth: 33.33, containerWidthTablet: 100, containerWidthMobile: 100, containerWidthUnit: '%', direction: 'column', variationSelected: true } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'four-columns-equal',
		title: __( '4 Columns', 'blockive-premium-addon-for-block-pro' ),
		description: __( 'Four equal-width columns.', 'blockive-premium-addon-for-block-pro' ),
		icon: (
			<svg width="48" height="48" viewBox="0 0 48 48">
				<rect x="4" y="8" width="7" height="32" rx="1.5" fill="#2563eb" fillOpacity="0.15" stroke="#2563eb" strokeWidth="1.5" />
				<rect x="15" y="8" width="7" height="32" rx="1.5" fill="#2563eb" fillOpacity="0.15" stroke="#2563eb" strokeWidth="1.5" />
				<rect x="26" y="8" width="7" height="32" rx="1.5" fill="#2563eb" fillOpacity="0.15" stroke="#2563eb" strokeWidth="1.5" />
				<rect x="37" y="8" width="7" height="32" rx="1.5" fill="#2563eb" fillOpacity="0.15" stroke="#2563eb" strokeWidth="1.5" />
			</svg>
		),
		attributes: {
			variationSelected: true,
			direction: 'row',
			wrap: 'nowrap',
			wrapTablet: 'wrap',
			wrapMobile: 'wrap',
		},
		innerBlocks: [
			[ 'blockive-premium-addon-for-block/container', { containerWidth: 25, containerWidthTablet: 50, containerWidthMobile: 100, containerWidthUnit: '%', direction: 'column', variationSelected: true } ],
			[ 'blockive-premium-addon-for-block/container', { containerWidth: 25, containerWidthTablet: 50, containerWidthMobile: 100, containerWidthUnit: '%', direction: 'column', variationSelected: true } ],
			[ 'blockive-premium-addon-for-block/container', { containerWidth: 25, containerWidthTablet: 50, containerWidthMobile: 100, containerWidthUnit: '%', direction: 'column', variationSelected: true } ],
			[ 'blockive-premium-addon-for-block/container', { containerWidth: 25, containerWidthTablet: 50, containerWidthMobile: 100, containerWidthUnit: '%', direction: 'column', variationSelected: true } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'two-columns-one-third-two-thirds',
		title: __( '2 Columns (33/66)', 'blockive-premium-addon-for-block-pro' ),
		description: __( 'Two columns: 1/3 and 2/3 width split.', 'blockive-premium-addon-for-block-pro' ),
		icon: (
			<svg width="48" height="48" viewBox="0 0 48 48">
				<rect x="5" y="8" width="11" height="32" rx="3" fill="#2563eb" fillOpacity="0.15" stroke="#2563eb" strokeWidth="2" />
				<rect x="20" y="8" width="23" height="32" rx="3" fill="#2563eb" fillOpacity="0.15" stroke="#2563eb" strokeWidth="2" />
			</svg>
		),
		attributes: {
			variationSelected: true,
			direction: 'row',
			wrap: 'nowrap',
			wrapMobile: 'wrap',
		},
		innerBlocks: [
			[ 'blockive-premium-addon-for-block/container', { containerWidth: 33.33, containerWidthTablet: 100, containerWidthMobile: 100, containerWidthUnit: '%', direction: 'column', variationSelected: true } ],
			[ 'blockive-premium-addon-for-block/container', { containerWidth: 66.67, containerWidthTablet: 100, containerWidthMobile: 100, containerWidthUnit: '%', direction: 'column', variationSelected: true } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'two-columns-two-thirds-one-third',
		title: __( '2 Columns (66/33)', 'blockive-premium-addon-for-block-pro' ),
		description: __( 'Two columns: 2/3 and 1/3 width split.', 'blockive-premium-addon-for-block-pro' ),
		icon: (
			<svg width="48" height="48" viewBox="0 0 48 48">
				<rect x="5" y="8" width="23" height="32" rx="3" fill="#2563eb" fillOpacity="0.15" stroke="#2563eb" strokeWidth="2" />
				<rect x="32" y="8" width="11" height="32" rx="3" fill="#2563eb" fillOpacity="0.15" stroke="#2563eb" strokeWidth="2" />
			</svg>
		),
		attributes: {
			variationSelected: true,
			direction: 'row',
			wrap: 'nowrap',
			wrapMobile: 'wrap',
		},
		innerBlocks: [
			[ 'blockive-premium-addon-for-block/container', { containerWidth: 66.67, containerWidthTablet: 100, containerWidthMobile: 100, containerWidthUnit: '%', direction: 'column', variationSelected: true } ],
			[ 'blockive-premium-addon-for-block/container', { containerWidth: 33.33, containerWidthTablet: 100, containerWidthMobile: 100, containerWidthUnit: '%', direction: 'column', variationSelected: true } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'three-columns-one-two-one',
		title: __( '3 Columns (25/50/25)', 'blockive-premium-addon-for-block-pro' ),
		description: __( 'Three columns: centered main column with equal side columns.', 'blockive-premium-addon-for-block-pro' ),
		icon: (
			<svg width="48" height="48" viewBox="0 0 48 48">
				<rect x="5" y="8" width="8" height="32" rx="2" fill="#2563eb" fillOpacity="0.15" stroke="#2563eb" strokeWidth="2" />
				<rect x="17" y="8" width="14" height="32" rx="2" fill="#2563eb" fillOpacity="0.15" stroke="#2563eb" strokeWidth="2" />
				<rect x="35" y="8" width="8" height="32" rx="2" fill="#2563eb" fillOpacity="0.15" stroke="#2563eb" strokeWidth="2" />
			</svg>
		),
		attributes: {
			variationSelected: true,
			direction: 'row',
			wrap: 'nowrap',
			wrapTablet: 'wrap',
			wrapMobile: 'wrap',
		},
		innerBlocks: [
			[ 'blockive-premium-addon-for-block/container', { containerWidth: 25, containerWidthTablet: 100, containerWidthMobile: 100, containerWidthUnit: '%', direction: 'column', variationSelected: true } ],
			[ 'blockive-premium-addon-for-block/container', { containerWidth: 50, containerWidthTablet: 100, containerWidthMobile: 100, containerWidthUnit: '%', direction: 'column', variationSelected: true } ],
			[ 'blockive-premium-addon-for-block/container', { containerWidth: 25, containerWidthTablet: 100, containerWidthMobile: 100, containerWidthUnit: '%', direction: 'column', variationSelected: true } ],
		],
		scope: [ 'block' ],
	},
];

const DIRECTION_ATTR = { desktop: 'direction', tablet: 'directionTablet', mobile: 'directionMobile' };
const WRAP_ATTR = { desktop: 'wrap', tablet: 'wrapTablet', mobile: 'wrapMobile' };
const JUSTIFY_ATTR = { desktop: 'justifyContent', tablet: 'justifyContentTablet', mobile: 'justifyContentMobile' };
const ALIGN_ATTR = { desktop: 'alignItems', tablet: 'alignItemsTablet', mobile: 'alignItemsMobile' };
const GAP_ATTR = { desktop: 'gap', tablet: 'gapTablet', mobile: 'gapMobile' };
const ROW_GAP_ATTR = { desktop: 'rowGap', tablet: 'rowGapTablet', mobile: 'rowGapMobile' };
const COL_GAP_ATTR = { desktop: 'columnGap', tablet: 'columnGapTablet', mobile: 'columnGapMobile' };
const BOXED_WIDTH_ATTR = { desktop: 'boxedWidth', tablet: 'boxedWidthTablet', mobile: 'boxedWidthMobile' };
const MIN_HEIGHT_ATTR = { desktop: 'minHeight', tablet: 'minHeightTablet', mobile: 'minHeightMobile' };
const COL_WIDTH_ATTR = { desktop: 'containerWidth', tablet: 'containerWidthTablet', mobile: 'containerWidthMobile' };

const BREAKPOINTS = {
	tablet: '(max-width: 1024px)',
	mobile: '(max-width: 767px)',
};

function responsiveStyleTag( uid, attributes ) {
	if ( ! uid ) {
		return null;
	}

	const rulesByBreakpoint = { tablet: '', mobile: '' };
	const { gapLinked, gapUnit = 'px', contentWidth, boxedWidthUnit = 'px', minHeightUnit = 'px', containerWidthUnit = '%' } = attributes;

	[ 'tablet', 'mobile' ].forEach( ( device ) => {
		const dir = attributes[ DIRECTION_ATTR[ device ] ];
		if ( dir ) {
			rulesByBreakpoint[ device ] += `flex-direction: ${ dir } !important;`;
		}
		const wrapVal = attributes[ WRAP_ATTR[ device ] ];
		if ( wrapVal ) {
			rulesByBreakpoint[ device ] += `flex-wrap: ${ wrapVal } !important;`;
		}
		const justify = attributes[ JUSTIFY_ATTR[ device ] ];
		if ( justify ) {
			rulesByBreakpoint[ device ] += `justify-content: ${ justify } !important;`;
		}
		const align = attributes[ ALIGN_ATTR[ device ] ];
		if ( align ) {
			rulesByBreakpoint[ device ] += `align-items: ${ align } !important;`;
		}

		if ( gapLinked ) {
			const gapVal = attributes[ GAP_ATTR[ device ] ];
			if ( Number.isFinite( gapVal ) ) {
				rulesByBreakpoint[ device ] += `gap: ${ gapVal }${ gapUnit } !important;`;
			}
		} else {
			const rGap = attributes[ ROW_GAP_ATTR[ device ] ];
			if ( Number.isFinite( rGap ) ) {
				rulesByBreakpoint[ device ] += `row-gap: ${ rGap }${ gapUnit } !important;`;
			}
			const cGap = attributes[ COL_GAP_ATTR[ device ] ];
			if ( Number.isFinite( cGap ) ) {
				rulesByBreakpoint[ device ] += `column-gap: ${ cGap }${ gapUnit } !important;`;
			}
		}

		if ( contentWidth === 'boxed' ) {
			const bw = attributes[ BOXED_WIDTH_ATTR[ device ] ];
			if ( Number.isFinite( bw ) ) {
				rulesByBreakpoint[ device ] += `max-width: ${ bw }${ boxedWidthUnit } !important;`;
			}
		}

		const mh = attributes[ MIN_HEIGHT_ATTR[ device ] ];
		if ( Number.isFinite( mh ) ) {
			rulesByBreakpoint[ device ] += `min-height: ${ mh }${ minHeightUnit } !important;`;
		}

		const cw = attributes[ COL_WIDTH_ATTR[ device ] ];
		if ( Number.isFinite( cw ) ) {
			rulesByBreakpoint[ device ] += `flex: 0 1 ${ cw }${ containerWidthUnit } !important; max-width: ${ cw }${ containerWidthUnit } !important;`;
		}
	} );

	const css = Object.entries( rulesByBreakpoint )
		.filter( ( [ , rules ] ) => rules )
		.map( ( [ device, rules ] ) => `@media ${ BREAKPOINTS[ device ] } { .bpafb-uid-${ uid } { ${ rules } } }` )
		.join( ' ' );

	return css || null;
}

function layoutBaseStyleTag( uid, attributes ) {
	if ( ! uid ) {
		return null;
	}

	const {
		direction = 'row',
		wrap = 'nowrap',
		justifyContent = 'flex-start',
		alignItems = 'stretch',
		gapLinked = true,
		gapUnit = 'px',
		gap = 16,
		rowGap = 16,
		columnGap = 16,
	} = attributes;

	let rules = `flex-direction: ${ direction } !important; flex-wrap: ${ wrap } !important; justify-content: ${ justifyContent } !important; align-items: ${ alignItems } !important;`;

	if ( gapLinked ) {
		if ( Number.isFinite( gap ) ) {
			rules += `gap: ${ gap }${ gapUnit } !important;`;
		}
	} else {
		if ( Number.isFinite( rowGap ) ) {
			rules += `row-gap: ${ rowGap }${ gapUnit } !important;`;
		}
		if ( Number.isFinite( columnGap ) ) {
			rules += `column-gap: ${ columnGap }${ gapUnit } !important;`;
		}
	}

	// Gutenberg can render the inner-blocks "layout" element as the block's own
	// wrapper, as a direct child of it, or nested inside an extra
	// .block-editor-inner-blocks div depending on version/context, so cover all
	// three shapes and scope strictly to this block instance via its uid.
	const selector = [
		`.bpafb-uid-${ uid }.block-editor-block-list__layout`,
		`.bpafb-uid-${ uid } > .block-editor-block-list__layout`,
		`.bpafb-uid-${ uid } > .block-editor-inner-blocks > .block-editor-block-list__layout`,
	].join( ', ' );

	return `.editor-styles-wrapper ${ selector } { ${ rules } }`;
}

function editorChildColumnStyle( uid, attributes ) {
	const { containerWidth, containerWidthTablet, containerWidthMobile, containerWidthUnit = '%' } = attributes;
	if ( ! uid ) {
		return null;
	}

	let css = '';
	if ( Number.isFinite( containerWidth ) ) {
		const w = `${ containerWidth }${ containerWidthUnit }`;
		css += `
			.editor-styles-wrapper [data-type="blockive-premium-addon-for-block/container"]:has(> .bpafb-uid-${ uid }),
			.editor-styles-wrapper [data-type="blockive-premium-addon-for-block/container"]:has(> div > .bpafb-uid-${ uid }),
			.editor-styles-wrapper .bpafb-uid-${ uid } {
				flex: 0 1 ${ w } !important;
				max-width: ${ w } !important;
				width: ${ w } !important;
				box-sizing: border-box !important;
			}
		`;
	}

	if ( Number.isFinite( containerWidthTablet ) ) {
		const wt = `${ containerWidthTablet }${ containerWidthUnit }`;
		css += `
			@media (max-width: 1024px) {
				.editor-styles-wrapper [data-type="blockive-premium-addon-for-block/container"]:has(> .bpafb-uid-${ uid }),
				.editor-styles-wrapper [data-type="blockive-premium-addon-for-block/container"]:has(> div > .bpafb-uid-${ uid }),
				.editor-styles-wrapper .bpafb-uid-${ uid } {
					flex: 0 1 ${ wt } !important;
					max-width: ${ wt } !important;
					width: ${ wt } !important;
				}
			}
		`;
	}

	if ( Number.isFinite( containerWidthMobile ) ) {
		const wm = `${ containerWidthMobile }${ containerWidthUnit }`;
		css += `
			@media (max-width: 767px) {
				.editor-styles-wrapper [data-type="blockive-premium-addon-for-block/container"]:has(> .bpafb-uid-${ uid }),
				.editor-styles-wrapper [data-type="blockive-premium-addon-for-block/container"]:has(> div > .bpafb-uid-${ uid }),
				.editor-styles-wrapper .bpafb-uid-${ uid } {
					flex: 0 1 ${ wm } !important;
					max-width: ${ wm } !important;
					width: ${ wm } !important;
				}
			}
		`;
	}

	return css || null;
}

function ContainerInspector( { attributes, setAttributes, isInsideContainer } ) {
	const {
		tagName,
		contentWidth = 'boxed',
		boxedWidth = 1200,
		boxedWidthUnit = 'px',
		minHeight,
		minHeightUnit = 'px',
		overflow = 'visible',
		equalHeight = false,
		direction = 'row',
		wrap = 'nowrap',
		justifyContent = 'flex-start',
		alignItems = 'stretch',
		gap = 16,
		rowGap = 16,
		columnGap = 16,
		gapLinked = true,
		gapUnit = 'px',
		containerWidth,
		containerWidthUnit = '%',
	} = attributes;

	const set = ( key ) => ( value ) => setAttributes( { [ key ]: value } );

	return (
		<InspectorTabs
			general={
				<>
					<PanelBody title={ __( 'Layout', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
						<SelectControl
							label={ __( 'HTML Tag', 'blockive-premium-addon-for-block-pro' ) }
							value={ tagName }
							options={ TAG_OPTIONS }
							onChange={ set( 'tagName' ) }
						/>

						<div style={ { marginBottom: '16px' } }>
							<p style={ { fontSize: '11px', fontWeight: 500, textTransform: 'uppercase', color: '#64748b', marginBottom: '8px' } }>
								{ __( 'Content Width', 'blockive-premium-addon-for-block-pro' ) }
							</p>
							<SegmentedControl
								value={ contentWidth }
								options={ CONTENT_WIDTH_OPTIONS }
								onChange={ set( 'contentWidth' ) }
							/>
						</div>

						{ contentWidth === 'boxed' && (
							<ResponsiveControls>
								{ ( device ) => (
									<div style={ { display: 'flex', gap: '8px', alignItems: 'flex-end', marginBottom: '16px' } }>
										<div style={ { flexGrow: 1 } }>
											<RangeControl
												label={ __( 'Max Width', 'blockive-premium-addon-for-block-pro' ) }
												value={ attributes[ BOXED_WIDTH_ATTR[ device ] ] ?? ( 'desktop' === device ? boxedWidth : undefined ) }
												onChange={ set( BOXED_WIDTH_ATTR[ device ] ) }
												min={ 320 }
												max={ 1920 }
												step={ 10 }
											/>
										</div>
										{ 'desktop' === device && (
											<div style={ { width: '70px', marginBottom: '8px' } }>
												<SelectControl
													label={ __( 'Unit', 'blockive-premium-addon-for-block-pro' ) }
													value={ boxedWidthUnit }
													options={ UNIT_OPTIONS }
													onChange={ set( 'boxedWidthUnit' ) }
												/>
											</div>
										) }
									</div>
								) }
							</ResponsiveControls>
						) }

						<ResponsiveControls>
							{ ( device ) => (
								<div style={ { display: 'flex', gap: '8px', alignItems: 'flex-end', marginBottom: '16px' } }>
									<div style={ { flexGrow: 1 } }>
										<RangeControl
											label={ __( 'Min Height', 'blockive-premium-addon-for-block-pro' ) }
											value={ attributes[ MIN_HEIGHT_ATTR[ device ] ] ?? ( 'desktop' === device ? minHeight : undefined ) }
											onChange={ set( MIN_HEIGHT_ATTR[ device ] ) }
											min={ 0 }
											max={ 1200 }
											step={ 10 }
										/>
									</div>
									{ 'desktop' === device && (
										<div style={ { width: '70px', marginBottom: '8px' } }>
											<SelectControl
												label={ __( 'Unit', 'blockive-premium-addon-for-block-pro' ) }
												value={ minHeightUnit }
												options={ HEIGHT_UNIT_OPTIONS }
												onChange={ set( 'minHeightUnit' ) }
											/>
										</div>
									) }
								</div>
							) }
						</ResponsiveControls>

						<SelectControl
							label={ __( 'Overflow', 'blockive-premium-addon-for-block-pro' ) }
							value={ overflow }
							options={ OVERFLOW_OPTIONS }
							onChange={ set( 'overflow' ) }
						/>

						<ToggleControl
							label={ __( 'Equal Height Columns', 'blockive-premium-addon-for-block-pro' ) }
							help={ __( 'Forces child columns to match height.', 'blockive-premium-addon-for-block-pro' ) }
							checked={ !! equalHeight }
							onChange={ set( 'equalHeight' ) }
						/>
					</PanelBody>

					<PanelBody title={ __( 'Flex Layout', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
						<ResponsiveControls>
							{ ( device ) => (
								<SelectControl
									label={ __( 'Direction', 'blockive-premium-addon-for-block-pro' ) }
									value={ attributes[ DIRECTION_ATTR[ device ] ] ?? ( 'desktop' === device ? direction : '' ) }
									options={ [
										...( 'desktop' !== device ? [ { label: __( 'Inherit Desktop', 'blockive-premium-addon-for-block-pro' ), value: '' } ] : [] ),
										...DIRECTION_OPTIONS,
									] }
									onChange={ set( DIRECTION_ATTR[ device ] ) }
								/>
							) }
						</ResponsiveControls>

						<ResponsiveControls>
							{ ( device ) => (
								<SelectControl
									label={ __( 'Justify Content', 'blockive-premium-addon-for-block-pro' ) }
									value={ attributes[ JUSTIFY_ATTR[ device ] ] ?? ( 'desktop' === device ? justifyContent : '' ) }
									options={ [
										...( 'desktop' !== device ? [ { label: __( 'Inherit Desktop', 'blockive-premium-addon-for-block-pro' ), value: '' } ] : [] ),
										...JUSTIFY_OPTIONS,
									] }
									onChange={ set( JUSTIFY_ATTR[ device ] ) }
								/>
							) }
						</ResponsiveControls>

						<ResponsiveControls>
							{ ( device ) => (
								<SelectControl
									label={ __( 'Align Items', 'blockive-premium-addon-for-block-pro' ) }
									value={ attributes[ ALIGN_ATTR[ device ] ] ?? ( 'desktop' === device ? alignItems : '' ) }
									options={ [
										...( 'desktop' !== device ? [ { label: __( 'Inherit Desktop', 'blockive-premium-addon-for-block-pro' ), value: '' } ] : [] ),
										...ALIGN_OPTIONS,
									] }
									onChange={ set( ALIGN_ATTR[ device ] ) }
								/>
							) }
						</ResponsiveControls>

						<ResponsiveControls>
							{ ( device ) => (
								<SelectControl
									label={ __( 'Wrap', 'blockive-premium-addon-for-block-pro' ) }
									value={ attributes[ WRAP_ATTR[ device ] ] ?? ( 'desktop' === device ? wrap : '' ) }
									options={ [
										...( 'desktop' !== device ? [ { label: __( 'Inherit Desktop', 'blockive-premium-addon-for-block-pro' ), value: '' } ] : [] ),
										...WRAP_OPTIONS,
									] }
									onChange={ set( WRAP_ATTR[ device ] ) }
								/>
							) }
						</ResponsiveControls>
					</PanelBody>

					<PanelBody title={ __( 'Gaps', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
						<div style={ { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' } }>
							<ToggleControl
								label={ __( 'Linked Gaps', 'blockive-premium-addon-for-block-pro' ) }
								checked={ !! gapLinked }
								onChange={ set( 'gapLinked' ) }
							/>
							<div style={ { width: '80px' } }>
								<SelectControl
									value={ gapUnit }
									options={ GAP_UNIT_OPTIONS }
									onChange={ set( 'gapUnit' ) }
								/>
							</div>
						</div>

						{ gapLinked ? (
							<ResponsiveControls>
								{ ( device ) => (
									<RangeControl
										label={ __( 'Gap', 'blockive-premium-addon-for-block-pro' ) }
										value={ attributes[ GAP_ATTR[ device ] ] ?? ( 'desktop' === device ? gap : undefined ) }
										onChange={ set( GAP_ATTR[ device ] ) }
										min={ 0 }
										max={ 100 }
									/>
								) }
							</ResponsiveControls>
						) : (
							<>
								<ResponsiveControls>
									{ ( device ) => (
										<RangeControl
											label={ __( 'Row Gap', 'blockive-premium-addon-for-block-pro' ) }
											value={ attributes[ ROW_GAP_ATTR[ device ] ] ?? ( 'desktop' === device ? rowGap : undefined ) }
											onChange={ set( ROW_GAP_ATTR[ device ] ) }
											min={ 0 }
											max={ 100 }
										/>
									) }
								</ResponsiveControls>
								<ResponsiveControls>
									{ ( device ) => (
										<RangeControl
											label={ __( 'Column Gap', 'blockive-premium-addon-for-block-pro' ) }
											value={ attributes[ COL_GAP_ATTR[ device ] ] ?? ( 'desktop' === device ? columnGap : undefined ) }
											onChange={ set( COL_GAP_ATTR[ device ] ) }
											min={ 0 }
											max={ 100 }
										/>
									) }
								</ResponsiveControls>
							</>
						) }
					</PanelBody>

					{ isInsideContainer && (
						<PanelBody title={ __( 'Column Width', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							<ResponsiveControls>
								{ ( device ) => (
									<RangeControl
										label={ __( 'Width (%)', 'blockive-premium-addon-for-block-pro' ) }
										value={ attributes[ COL_WIDTH_ATTR[ device ] ] ?? ( 'desktop' === device ? containerWidth : undefined ) }
										onChange={ set( COL_WIDTH_ATTR[ device ] ) }
										min={ 5 }
										max={ 100 }
										step={ 0.1 }
									/>
								) }
							</ResponsiveControls>
						</PanelBody>
					) }
				</>
			}
			style={ null }
			attributes={ attributes }
			setAttributes={ setAttributes }
		/>
	);
}

function ContainerPlaceholder( { attributes, setAttributes, clientId } ) {
	const blockProps = useBlockProps( {
		className: 'bpafb-container-variation-picker',
	} );

	const { replaceInnerBlocks } = useDispatch( 'core/block-editor' );

	const onSelectVariation = ( variation ) => {
		if ( ! variation ) {
			setAttributes( { variationSelected: true } );
			return;
		}

		if ( variation.attributes ) {
			setAttributes( { ...variation.attributes, variationSelected: true } );
		} else {
			setAttributes( { variationSelected: true } );
		}

		if ( variation.innerBlocks && variation.innerBlocks.length ) {
			const blocks = variation.innerBlocks.map( ( [ name, attrs ] ) =>
				createBlock( name, attrs )
			);
			replaceInnerBlocks( clientId, blocks );
		}
	};

	return (
		<div { ...blockProps }>
			<ContainerInspector
				attributes={ attributes }
				setAttributes={ setAttributes }
				isInsideContainer={ false }
			/>
			{ VariationPicker ? (
				<VariationPicker
					label={ __( 'Container', 'blockive-premium-addon-for-block-pro' ) }
					instructions={ __( 'Select a layout to start with, or skip to start with a blank container.', 'blockive-premium-addon-for-block-pro' ) }
					variations={ VARIATIONS }
					onSelect={ onSelectVariation }
					allowSkip
				/>
			) : (
				<div className="bpafb-container-variation-picker__grid">
					{ VARIATIONS.map( ( v, idx ) => (
						<button
							key={ idx }
							type="button"
							className="bpafb-container-variation-card"
							onClick={ () => onSelectVariation( v ) }
						>
							<span className="bpafb-container-variation-card__label">{ v.title }</span>
						</button>
					) ) }
				</div>
			) }
		</div>
	);
}

function ContainerEditInner( { attributes, setAttributes, clientId, innerBlocksCount } ) {
	const {
		tagName,
		contentWidth = 'boxed',
		boxedWidth = 1200,
		boxedWidthUnit = 'px',
		minHeight,
		minHeightUnit = 'px',
		overflow = 'visible',
		equalHeight = false,
		direction = 'row',
		wrap = 'nowrap',
		justifyContent = 'flex-start',
		alignItems = 'stretch',
		gap = 16,
		rowGap = 16,
		columnGap = 16,
		gapLinked = true,
		gapUnit = 'px',
		containerWidth,
		containerWidthUnit = '%',
		bpafbUid,
	} = attributes;

	const uid = bpafbUid || clientId.slice( 0, 8 );
	const Tag = tagName || 'div';

	const isInsideContainer = useSelect(
		( select ) => {
			const rootBlock = select( 'core/block-editor' ).getBlockRootClientId( clientId );
			const rootBlockType = rootBlock ? select( 'core/block-editor' ).getBlock( rootBlock )?.name : '';
			return rootBlockType === 'blockive-premium-addon-for-block/container';
		},
		[ clientId ]
	);

	// Inline style for editor canvas
	const computedStyle = {
		display: 'flex',
		flexDirection: direction,
		flexWrap: wrap,
		justifyContent,
		alignItems,
		overflow,
	};

	if ( contentWidth === 'boxed' && Number.isFinite( boxedWidth ) ) {
		computedStyle.maxWidth = `${ boxedWidth }${ boxedWidthUnit }`;
		computedStyle.marginLeft = 'auto';
		computedStyle.marginRight = 'auto';
	}

	if ( Number.isFinite( minHeight ) ) {
		computedStyle.minHeight = `${ minHeight }${ minHeightUnit }`;
	}

	if ( gapLinked ) {
		if ( Number.isFinite( gap ) ) {
			computedStyle.gap = `${ gap }${ gapUnit }`;
		}
	} else {
		if ( Number.isFinite( rowGap ) ) {
			computedStyle.rowGap = `${ rowGap }${ gapUnit }`;
		}
		if ( Number.isFinite( columnGap ) ) {
			computedStyle.columnGap = `${ columnGap }${ gapUnit }`;
		}
	}

	if ( Number.isFinite( containerWidth ) ) {
		computedStyle.flex = `0 1 ${ containerWidth }${ containerWidthUnit }`;
		computedStyle.maxWidth = `${ containerWidth }${ containerWidthUnit }`;
		computedStyle.width = `${ containerWidth }${ containerWidthUnit }`;
		computedStyle.minWidth = 0;
		computedStyle.boxSizing = 'border-box';
	}

	const blockProps = useBlockProps( {
		className: `bpafb-container bpafb-uid-${ uid }${ contentWidth === 'boxed' ? ' is-boxed' : '' }${ equalHeight ? ' is-equal-height' : '' }`,
		style: computedStyle,
	} );

	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		orientation: direction === 'column' || direction === 'column-reverse' ? 'vertical' : 'horizontal',
		renderAppender: ( ! isInsideContainer && innerBlocksCount > 0 ) ? false : InnerBlocks.ButtonBlockAppender,
	} );

	const layoutBaseCss = layoutBaseStyleTag( uid, attributes );
	const responsiveCss = responsiveStyleTag( uid, attributes );
	const childColumnCss = editorChildColumnStyle( uid, attributes );

	return (
		<>
			<ContainerInspector
				attributes={ attributes }
				setAttributes={ setAttributes }
				isInsideContainer={ isInsideContainer }
			/>

			{ ( layoutBaseCss || responsiveCss || childColumnCss ) && (
				<style>{ `${ layoutBaseCss || '' } ${ responsiveCss || '' } ${ childColumnCss || '' }` }</style>
			) }

			<Tag { ...innerBlocksProps } />
		</>
	);
}

export default function Edit( props ) {
	const { attributes, clientId } = props;
	const { variationSelected } = attributes;

	const innerBlocksCount = useSelect(
		( select ) => select( 'core/block-editor' ).getBlock( clientId )?.innerBlocks?.length || 0,
		[ clientId ]
	);

	if ( ! variationSelected && innerBlocksCount === 0 ) {
		return <ContainerPlaceholder { ...props } />;
	}

	return <ContainerEditInner { ...props } innerBlocksCount={ innerBlocksCount } />;
}
