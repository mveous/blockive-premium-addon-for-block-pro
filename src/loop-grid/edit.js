import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';
import { PanelBody, ToggleControl, RangeControl, TextControl } from '@wordpress/components';

import InspectorTabs from '../components/inspector-tabs';
import ResponsiveControls from '../components/responsive-controls';
import SegmentedControl from '../components/segmented-control';
import StepperControl from '../components/stepper-control';
import StyleTilePicker from '../components/style-tile-picker';
import { LoopTemplatePanel, LoopQueryPanel } from './query-panels';
import SetupCard from './setup-card';

const COLUMN_ATTR_SUFFIX = {
	desktop: '',
	tablet: 'Tablet',
	mobile: 'Mobile',
};

const LAYOUT_OPTIONS = [
	{
		value: 'grid',
		label: __( 'Grid', 'blockive-premium-addon-for-block-pro' ),
		preview: () => (
			<svg viewBox="0 0 48 32" xmlns="http://www.w3.org/2000/svg">
				<rect x="2" y="2" width="20" height="13" rx="2" fill="currentColor" />
				<rect x="26" y="2" width="20" height="13" rx="2" fill="currentColor" />
				<rect x="2" y="17" width="20" height="13" rx="2" fill="currentColor" />
				<rect x="26" y="17" width="20" height="13" rx="2" fill="currentColor" />
			</svg>
		),
	},
	{
		value: 'masonry',
		label: __( 'Masonry', 'blockive-premium-addon-for-block-pro' ),
		preview: () => (
			<svg viewBox="0 0 48 32" xmlns="http://www.w3.org/2000/svg">
				<rect x="2" y="2" width="13" height="28" rx="2" fill="currentColor" />
				<rect x="17.5" y="2" width="13" height="18" rx="2" fill="currentColor" />
				<rect x="33" y="2" width="13" height="23" rx="2" fill="currentColor" />
			</svg>
		),
	},
];

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
		loadMoreText,
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
							<SegmentedControl
								label={ __( 'Type', 'blockive-premium-addon-for-block-pro' ) }
								value={ paginationType }
								options={ [
									{ label: __( 'None', 'blockive-premium-addon-for-block-pro' ), value: 'none' },
									{ label: __( 'Numbers', 'blockive-premium-addon-for-block-pro' ), value: 'numbers' },
									{ label: __( 'Prev / Next', 'blockive-premium-addon-for-block-pro' ), value: 'prev_next' },
									{ label: __( 'Load More', 'blockive-premium-addon-for-block-pro' ), value: 'load_more' },
								] }
								onChange={ ( value ) => setAttributes( { paginationType: value } ) }
							/>
							{ paginationType === 'load_more' && (
								<TextControl
									label={ __( 'Button Text', 'blockive-premium-addon-for-block-pro' ) }
									value={ loadMoreText }
									placeholder={ __( 'Load More', 'blockive-premium-addon-for-block-pro' ) }
									onChange={ ( value ) => setAttributes( { loadMoreText: value } ) }
								/>
							) }
							{ paginationType !== 'none' && (
								<SegmentedControl
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
							<StyleTilePicker
								value={ masonry ? 'masonry' : 'grid' }
								options={ LAYOUT_OPTIONS }
								onChange={ ( value ) => setAttributes( { masonry: value === 'masonry' } ) }
							/>
							<ResponsiveControls>
								{ ( device ) => {
									const suffix = COLUMN_ATTR_SUFFIX[ device ];
									const attrName = `columns${ suffix }`;
									const value = { columns, columnsTablet, columnsMobile }[ attrName ] ?? columns;
									return (
										<StepperControl
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
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>

			<div { ...blockProps }>
				{ templateId ? (
					<ServerSideRender block="blockive-premium-addon-for-block/loop-grid" attributes={ attributes } />
				) : (
					<SetupCard attributes={ attributes } setAttributes={ setAttributes } layoutOptions={ LAYOUT_OPTIONS } />
				) }
			</div>
		</>
	);
}
