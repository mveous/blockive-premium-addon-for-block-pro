import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';
import { PanelBody, ToggleControl, TextControl } from '@wordpress/components';

import InspectorTabs from '../components/inspector-tabs';
import AdvancedTab from '../components/advanced-tab';
import { LoopTemplatePanel, LoopQueryPanel } from '../loop-grid/query-panels';
import { CarouselSettingsPanel, CarouselNavigationStylePanel } from '../pro-components/carousel/editor';

export default function Edit( { attributes, setAttributes } ) {
	const { templateId, equalHeight, enableNothingFound, nothingFoundText } = attributes;
	const set = ( key ) => ( val ) => setAttributes( { [ key ]: val } );

	return (
		<>
			<InspectorTabs
				general={
					<>
						<LoopTemplatePanel attributes={ attributes } setAttributes={ setAttributes } />
						<LoopQueryPanel attributes={ attributes } setAttributes={ setAttributes } countLabel={ __( 'Number of Items', 'blockive-premium-addon-for-block-pro' ) } />
						<CarouselSettingsPanel attributes={ attributes } setAttributes={ setAttributes } />
						<PanelBody title={ __( 'Nothing Found', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<ToggleControl label={ __( 'Show Message', 'blockive-premium-addon-for-block-pro' ) } checked={ !! enableNothingFound } onChange={ set( 'enableNothingFound' ) } />
							{ enableNothingFound && <TextControl label={ __( 'Message', 'blockive-premium-addon-for-block-pro' ) } value={ nothingFoundText } onChange={ set( 'nothingFoundText' ) } /> }
						</PanelBody>
					</>
				}
				style={
					<>
						<PanelBody title={ __( 'Items', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							<ToggleControl
								label={ __( 'Equal Height', 'blockive-premium-addon-for-block-pro' ) }
								help={ __( 'Stretches every card to the height of the tallest one.', 'blockive-premium-addon-for-block-pro' ) }
								checked={ !! equalHeight }
								onChange={ set( 'equalHeight' ) }
							/>
						</PanelBody>
						<CarouselNavigationStylePanel attributes={ attributes } setAttributes={ setAttributes } />
					</>
				}
				advanced={ <AdvancedTab attributes={ attributes } setAttributes={ setAttributes } /> }
			/>

			<div { ...useBlockProps() }>
				{ templateId ? (
					// The preview shows the first slides; arrows and dots work on the site.
					<ServerSideRender block="blockive-premium-addon-for-block/loop-carousel" attributes={ attributes } />
				) : (
					<p className="bpafb-loop-carousel-placeholder">
						{ __( 'Choose a Loop Item template in the block settings to preview this carousel.', 'blockive-premium-addon-for-block-pro' ) }
					</p>
				) }
			</div>
		</>
	);
}
