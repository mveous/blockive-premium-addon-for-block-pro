import { __ } from '@wordpress/i18n';
import { useBlockProps, BlockControls, AlignmentControl } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl, TextControl } from '@wordpress/components';

import InspectorTabs from '../../components/inspector-tabs';
import AdvancedTab from '../../components/advanced-tab';
import ColorStateControls from '../../components/color-state-controls';
import usePreviewContext from '../../template-blocks/shared/use-preview-context';
import { TEXT_TAG_OPTIONS } from '../shared';

export default function Edit( { attributes, setAttributes } ) {
	const { tagName, textAlign, stripArchivePrefix, showSearchQuery, searchPrefix, notFoundText, textColor } = attributes;
	const { record } = usePreviewContext();
	const TagName = tagName || 'h1';

	const previewTitle = record?.title?.rendered ? record.title.rendered.replace( /<[^>]+>/g, '' ) : '';

	const blockProps = useBlockProps( {
		className: 'bpafb-tb-page-title',
		style: { textAlign: textAlign || undefined, color: textColor || undefined },
	} );

	return (
		<>
			<BlockControls>
				<AlignmentControl value={ textAlign } onChange={ ( val ) => setAttributes( { textAlign: val } ) } />
			</BlockControls>

			<InspectorTabs
				general={
					<PanelBody title={ __( 'Settings', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
						<p className="bpafb-help-text">
							{ __( 'Shows the title of the page being viewed: the post/page title, archive title, search heading, or 404 text.', 'blockive-premium-addon-for-block-pro' ) }
						</p>
						<SelectControl
							label={ __( 'HTML Tag', 'blockive-premium-addon-for-block-pro' ) }
							value={ TagName }
							options={ TEXT_TAG_OPTIONS }
							onChange={ ( val ) => setAttributes( { tagName: val } ) }
						/>
						<ToggleControl
							label={ __( 'Hide Archive Prefix', 'blockive-premium-addon-for-block-pro' ) }
							help={ __( 'Shows "News" instead of "Category: News".', 'blockive-premium-addon-for-block-pro' ) }
							checked={ !! stripArchivePrefix }
							onChange={ ( val ) => setAttributes( { stripArchivePrefix: val } ) }
						/>
						<TextControl
							label={ __( 'Search Results Heading', 'blockive-premium-addon-for-block-pro' ) }
							value={ searchPrefix }
							onChange={ ( val ) => setAttributes( { searchPrefix: val } ) }
						/>
						<ToggleControl
							label={ __( 'Append Search Query', 'blockive-premium-addon-for-block-pro' ) }
							checked={ !! showSearchQuery }
							onChange={ ( val ) => setAttributes( { showSearchQuery: val } ) }
						/>
						<TextControl
							label={ __( '404 Heading', 'blockive-premium-addon-for-block-pro' ) }
							value={ notFoundText }
							onChange={ ( val ) => setAttributes( { notFoundText: val } ) }
						/>
					</PanelBody>
				}
				style={
					<PanelBody title={ __( 'Colors', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
						<ColorStateControls
							normal={ [
								{ label: __( 'Text Color', 'blockive-premium-addon-for-block-pro' ), value: textColor, onChange: ( val ) => setAttributes( { textColor: val } ) },
							] }
						/>
					</PanelBody>
				}
				advanced={ <AdvancedTab attributes={ attributes } setAttributes={ setAttributes } /> }
			/>

			<TagName { ...blockProps }>{ previewTitle || __( 'Page Title', 'blockive-premium-addon-for-block-pro' ) }</TagName>
		</>
	);
}
