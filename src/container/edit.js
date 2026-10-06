import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps, InnerBlocks } from '@wordpress/block-editor';
import { PanelBody, SelectControl, RangeControl } from '@wordpress/components';

import InspectorTabs from '../components/inspector-tabs';
import AdvancedTab from '../components/advanced-tab';
import ResponsiveControls from '../components/responsive-controls';

const TAG_OPTIONS = [
	{ label: __( 'div', 'blockive-premium-addon-for-block-pro' ), value: 'div' },
	{ label: __( 'section', 'blockive-premium-addon-for-block-pro' ), value: 'section' },
	{ label: __( 'header', 'blockive-premium-addon-for-block-pro' ), value: 'header' },
	{ label: __( 'footer', 'blockive-premium-addon-for-block-pro' ), value: 'footer' },
	{ label: __( 'article', 'blockive-premium-addon-for-block-pro' ), value: 'article' },
	{ label: __( 'aside', 'blockive-premium-addon-for-block-pro' ), value: 'aside' },
	{ label: __( 'main', 'blockive-premium-addon-for-block-pro' ), value: 'main' },
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

const DIRECTION_ATTR = { desktop: 'direction', tablet: 'directionTablet', mobile: 'directionMobile' };
const GAP_ATTR = { desktop: 'gap', tablet: 'gapTablet', mobile: 'gapMobile' };

// Same two breakpoints the shared Advanced tab's own per-device Padding and
// Margin controls use (see Bpafb_Core::bpafb_build_responsive_css on the PHP
// side, mirrored here so the editor canvas previews Tablet/Mobile exactly
// like the live site does).
const BREAKPOINTS = {
	tablet: '(max-width: 1024px)',
	mobile: '(max-width: 767px)',
};

function responsiveStyleTag( uid, attributes ) {
	if ( ! uid ) {
		return null;
	}

	const rulesByBreakpoint = { tablet: '', mobile: '' };

	[ 'tablet', 'mobile' ].forEach( ( device ) => {
		const direction = attributes[ DIRECTION_ATTR[ device ] ];
		if ( direction ) {
			rulesByBreakpoint[ device ] += `flex-direction:${ direction };`;
		}
		const gap = attributes[ GAP_ATTR[ device ] ];
		if ( Number.isFinite( gap ) ) {
			rulesByBreakpoint[ device ] += `gap:${ gap }px;`;
		}
	} );

	const css = Object.entries( rulesByBreakpoint )
		.filter( ( [ , rules ] ) => rules )
		.map( ( [ device, rules ] ) => `@media ${ BREAKPOINTS[ device ] } { .bpafb-uid-${ uid } { ${ rules } } }` )
		.join( ' ' );

	return css || null;
}

export default function Edit( { attributes, setAttributes, clientId } ) {
	const { tagName, direction, wrap, justifyContent, alignItems, gap, bpafbUid } = attributes;

	const set = ( key ) => ( value ) => setAttributes( { [ key ]: value } );

	const uid = bpafbUid || clientId.slice( 0, 8 );
	const Tag = tagName || 'div';

	const blockProps = useBlockProps( {
		className: `bpafb-container bpafb-uid-${ uid }`,
		style: {
			display: 'flex',
			flexDirection: direction,
			flexWrap: wrap,
			justifyContent,
			alignItems,
			gap: Number.isFinite( gap ) ? `${ gap }px` : undefined,
		},
	} );

	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		orientation: direction === 'column' || direction === 'column-reverse' ? 'vertical' : 'horizontal',
		renderAppender: InnerBlocks.ButtonBlockAppender,
	} );

	const responsiveCss = responsiveStyleTag( uid, attributes );

	return (
		<>
			<InspectorTabs
				general={
					<PanelBody title={ __( 'Layout', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
						<SelectControl
							label={ __( 'HTML Tag', 'blockive-premium-addon-for-block-pro' ) }
							value={ tagName }
							options={ TAG_OPTIONS }
							onChange={ set( 'tagName' ) }
						/>
						<ResponsiveControls>
							{ ( device ) => (
								<SelectControl
									label={ __( 'Direction', 'blockive-premium-addon-for-block-pro' ) }
									value={ attributes[ DIRECTION_ATTR[ device ] ] }
									options={
										'desktop' === device
											? DIRECTION_OPTIONS
											: [ { label: __( 'Inherit from Desktop', 'blockive-premium-addon-for-block-pro' ), value: '' }, ...DIRECTION_OPTIONS ]
									}
									onChange={ set( DIRECTION_ATTR[ device ] ) }
								/>
							) }
						</ResponsiveControls>
						<SelectControl
							label={ __( 'Wrap', 'blockive-premium-addon-for-block-pro' ) }
							value={ wrap }
							options={ WRAP_OPTIONS }
							onChange={ set( 'wrap' ) }
						/>
					</PanelBody>
				}
				style={
					<PanelBody title={ __( 'Flex Layout', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
						<SelectControl
							label={ __( 'Justify Content', 'blockive-premium-addon-for-block-pro' ) }
							help={ __( 'Alignment along the direction above.', 'blockive-premium-addon-for-block-pro' ) }
							value={ justifyContent }
							options={ JUSTIFY_OPTIONS }
							onChange={ set( 'justifyContent' ) }
						/>
						<SelectControl
							label={ __( 'Align Items', 'blockive-premium-addon-for-block-pro' ) }
							help={ __( 'Alignment across the direction above.', 'blockive-premium-addon-for-block-pro' ) }
							value={ alignItems }
							options={ ALIGN_OPTIONS }
							onChange={ set( 'alignItems' ) }
						/>
						<ResponsiveControls>
							{ ( device ) => (
								<RangeControl
									label={ __( 'Gap (px)', 'blockive-premium-addon-for-block-pro' ) }
									value={ attributes[ GAP_ATTR[ device ] ] }
									onChange={ set( GAP_ATTR[ device ] ) }
									min={ 0 }
									max={ 120 }
									allowReset={ 'desktop' !== device }
								/>
							) }
						</ResponsiveControls>
					</PanelBody>
				}
				advanced={ <AdvancedTab attributes={ attributes } setAttributes={ setAttributes } /> }
			/>

			{ responsiveCss && <style>{ responsiveCss }</style> }
			<Tag { ...innerBlocksProps } />
		</>
	);
}
