import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';
import { PanelBody, SelectControl, ToggleControl, RangeControl, TextControl } from '@wordpress/components';

import InspectorTabs from '../components/inspector-tabs';
import AdvancedTab from '../components/advanced-tab';
import ResponsiveControls from '../components/responsive-controls';
import { LoopTemplatePanel, LoopQueryPanel } from './query-panels';

const COLUMN_ATTR_SUFFIX = {
	desktop: '',
	tablet: 'Tablet',
	mobile: 'Mobile',
};

export default function Edit( { attributes, setAttributes } ) {
	const {
		templateId,
		columns,
		columnsTablet,
		columnsMobile,
		columnGap,
		rowGap,
		masonry,
		equalHeight,
		enableNothingFound,
		nothingFoundText,
		paginationType,
		paginationAlign,
	} = attributes;

	const blockProps = useBlockProps();

	return (
		<>
			<InspectorTabs
				general={
					<>
						<LoopTemplatePanel attributes={ attributes } setAttributes={ setAttributes } />
						<LoopQueryPanel attributes={ attributes } setAttributes={ setAttributes } />

						<PanelBody title={ __( 'Pagination', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<SelectControl
								label={ __( 'Type', 'blockive-premium-addon-for-block-pro' ) }
								value={ paginationType }
								options={ [
									{ label: __( 'None', 'blockive-premium-addon-for-block-pro' ), value: 'none' },
									{ label: __( 'Numbers', 'blockive-premium-addon-for-block-pro' ), value: 'numbers' },
									{ label: __( 'Previous / Next', 'blockive-premium-addon-for-block-pro' ), value: 'prev_next' },
								] }
								onChange={ ( value ) => setAttributes( { paginationType: value } ) }
							/>
							{ paginationType !== 'none' && (
								<SelectControl
									label={ __( 'Alignment', 'blockive-premium-addon-for-block-pro' ) }
									value={ paginationAlign }
									options={ [
										{ label: __( 'Start', 'blockive-premium-addon-for-block-pro' ), value: 'start' },
										{ label: __( 'Center', 'blockive-premium-addon-for-block-pro' ), value: 'center' },
										{ label: __( 'End', 'blockive-premium-addon-for-block-pro' ), value: 'end' },
									] }
									onChange={ ( value ) => setAttributes( { paginationAlign: value } ) }
								/>
							) }
						</PanelBody>
					</>
				}
				style={
					<>
						<PanelBody title={ __( 'Layout', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							<ResponsiveControls>
								{ ( device ) => {
									const suffix = COLUMN_ATTR_SUFFIX[ device ];
									const attrName = `columns${ suffix }`;
									const value = { columns, columnsTablet, columnsMobile }[ attrName ] ?? columns;
									return (
										<RangeControl
											label={ __( 'Columns', 'blockive-premium-addon-for-block-pro' ) }
											value={ value }
											onChange={ ( val ) => setAttributes( { [ attrName ]: val } ) }
											min={ 1 }
											max={ 6 }
										/>
									);
								} }
							</ResponsiveControls>
							<RangeControl
								label={ __( 'Column Gap', 'blockive-premium-addon-for-block-pro' ) }
								value={ columnGap }
								onChange={ ( value ) => setAttributes( { columnGap: value } ) }
								min={ 0 }
								max={ 100 }
							/>
							<RangeControl
								label={ __( 'Row Gap', 'blockive-premium-addon-for-block-pro' ) }
								value={ rowGap }
								onChange={ ( value ) => setAttributes( { rowGap: value } ) }
								min={ 0 }
								max={ 100 }
							/>
							<ToggleControl
								label={ __( 'Masonry', 'blockive-premium-addon-for-block-pro' ) }
								help={ __( 'Stacks items in even columns instead of even rows.', 'blockive-premium-addon-for-block-pro' ) }
								checked={ !! masonry }
								onChange={ ( value ) => setAttributes( { masonry: value } ) }
							/>
							{ ! masonry && (
								<ToggleControl
									label={ __( 'Equal Height', 'blockive-premium-addon-for-block-pro' ) }
									checked={ !! equalHeight }
									onChange={ ( value ) => setAttributes( { equalHeight: value } ) }
								/>
							) }
						</PanelBody>

						<PanelBody title={ __( 'Nothing Found', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<ToggleControl
								label={ __( 'Show Message', 'blockive-premium-addon-for-block-pro' ) }
								checked={ !! enableNothingFound }
								onChange={ ( value ) => setAttributes( { enableNothingFound: value } ) }
							/>
							{ enableNothingFound && (
								<TextControl
									label={ __( 'Message', 'blockive-premium-addon-for-block-pro' ) }
									value={ nothingFoundText }
									onChange={ ( value ) => setAttributes( { nothingFoundText: value } ) }
								/>
							) }
						</PanelBody>
					</>
				}
				advanced={ <AdvancedTab attributes={ attributes } setAttributes={ setAttributes } /> }
			/>

			<div { ...blockProps }>
				{ templateId ? (
					<ServerSideRender block="blockive-premium-addon-for-block/loop-grid" attributes={ attributes } />
				) : (
					<p className="bpafb-pro-loop-grid-placeholder">
						{ __( 'Choose a Loop Item template in the block settings to preview this grid.', 'blockive-premium-addon-for-block-pro' ) }
					</p>
				) }
			</div>
		</>
	);
}
