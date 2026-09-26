import { __ } from '@wordpress/i18n';
import { useSelect, useDispatch } from '@wordpress/data';
import { useBlockProps, useInnerBlocksProps, BlockControls, store as blockEditorStore } from '@wordpress/block-editor';
import { createBlock } from '@wordpress/blocks';
import { PanelBody, TextControl, ToggleControl, ToolbarGroup, ToolbarButton, Button } from '@wordpress/components';

import InspectorTabs from '../components/inspector-tabs';
import AdvancedTab from '../components/advanced-tab';
import { CarouselSettingsPanel, CarouselNavigationStylePanel, carouselVars } from '../pro-components/carousel/editor';

const SLIDE = 'blockive-premium-addon-for-block/nested-carousel-slide';
const TEMPLATE = [ [ SLIDE ], [ SLIDE ], [ SLIDE ] ];

/**
 * The editor shows every slide side by side in a row that scrolls
 * sideways, sized to the desktop slides per view. Arrows, dots, and
 * autoplay run on the site.
 */
export default function Edit( { attributes, setAttributes, clientId } ) {
	const { carouselLabel, equalHeight, slidesPerView, gap } = attributes;
	const set = ( key ) => ( val ) => setAttributes( { [ key ]: val } );

	const count = useSelect( ( select ) => select( blockEditorStore ).getBlockCount( clientId ), [ clientId ] );
	const { insertBlock } = useDispatch( blockEditorStore );
	const addSlide = () => insertBlock( createBlock( SLIDE ), count, clientId );

	const blockProps = useBlockProps( {
		className: 'bpafb-nested-carousel-editor' + ( equalHeight ? ' bpafb-nested-carousel-editor--equal-height' : '' ),
		style: {
			...carouselVars( attributes ),
			'--bpafb-nested-per-view': String( Math.max( 1, Math.min( count || 1, slidesPerView || 1 ) ) ),
			'--bpafb-nested-gap': `${ typeof gap === 'number' ? gap : 20 }px`,
		},
	} );
	const innerBlocksProps = useInnerBlocksProps(
		{ className: 'bpafb-nested-carousel-editor__track' },
		{
			allowedBlocks: [ SLIDE ],
			template: TEMPLATE,
			orientation: 'horizontal',
			renderAppender: false,
		}
	);

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton icon="plus" label={ __( 'Add Slide', 'blockive-premium-addon-for-block-pro' ) } onClick={ addSlide } />
				</ToolbarGroup>
			</BlockControls>
			<InspectorTabs
				general={
					<>
						<PanelBody title={ __( 'Slides', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							<Button variant="secondary" icon="plus" onClick={ addSlide }>
								{ __( 'Add Slide', 'blockive-premium-addon-for-block-pro' ) }
							</Button>
							<p className="components-base-control__help">{ __( 'Each slide holds any blocks. Select a slide to change its background, padding, or alignment; use the List View or the slide toolbar to reorder or remove slides.', 'blockive-premium-addon-for-block-pro' ) }</p>
							<TextControl
								label={ __( 'Carousel Name', 'blockive-premium-addon-for-block-pro' ) }
								value={ carouselLabel }
								placeholder={ __( 'Carousel', 'blockive-premium-addon-for-block-pro' ) }
								onChange={ set( 'carouselLabel' ) }
								help={ __( 'Read out by screen readers, e.g. "Customer stories".', 'blockive-premium-addon-for-block-pro' ) }
							/>
						</PanelBody>
						<CarouselSettingsPanel attributes={ attributes } setAttributes={ setAttributes } />
					</>
				}
				style={
					<>
						<PanelBody title={ __( 'Slides', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							<ToggleControl
								label={ __( 'Equal Height', 'blockive-premium-addon-for-block-pro' ) }
								help={ __( 'Stretches every slide to the height of the tallest one.', 'blockive-premium-addon-for-block-pro' ) }
								checked={ !! equalHeight }
								onChange={ set( 'equalHeight' ) }
							/>
						</PanelBody>
						<CarouselNavigationStylePanel attributes={ attributes } setAttributes={ setAttributes } />
					</>
				}
				advanced={ <AdvancedTab attributes={ attributes } setAttributes={ setAttributes } /> }
			/>

			<div { ...blockProps }>
				<div { ...innerBlocksProps } />
				<p className="bpafb-nested-carousel-editor__note">
					{ __( 'All slides are shown here; scroll sideways to reach them. Arrows, dots, and autoplay work on the site.', 'blockive-premium-addon-for-block-pro' ) }
				</p>
			</div>
		</>
	);
}
