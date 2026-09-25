import { __ } from '@wordpress/i18n';
import { useBlockProps, BlockControls, AlignmentControl } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl } from '@wordpress/components';

import InspectorTabs from '../../components/inspector-tabs';
import AdvancedTab from '../../components/advanced-tab';
import ColorStateControls from '../../components/color-state-controls';
import { useSiteInfo, TEXT_TAG_OPTIONS } from '../shared';

export default function Edit( { attributes, setAttributes } ) {
	const { tagName, textAlign, isLink, linkTarget, textColor, textHoverColor } = attributes;
	const site = useSiteInfo();
	const TagName = tagName || 'p';

	const blockProps = useBlockProps( {
		className: 'bpafb-tb-site-title',
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
						<SelectControl
							label={ __( 'HTML Tag', 'blockive-premium-addon-for-block-pro' ) }
							value={ TagName }
							options={ TEXT_TAG_OPTIONS }
							onChange={ ( val ) => setAttributes( { tagName: val } ) }
						/>
						<ToggleControl
							label={ __( 'Link to Home Page', 'blockive-premium-addon-for-block-pro' ) }
							checked={ !! isLink }
							onChange={ ( val ) => setAttributes( { isLink: val } ) }
						/>
						{ isLink && (
							<ToggleControl
								label={ __( 'Open in New Tab', 'blockive-premium-addon-for-block-pro' ) }
								checked={ linkTarget === '_blank' }
								onChange={ ( val ) => setAttributes( { linkTarget: val ? '_blank' : '_self' } ) }
							/>
						) }
					</PanelBody>
				}
				style={
					<PanelBody title={ __( 'Colors', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
						<ColorStateControls
							normal={ [
								{ label: __( 'Text Color', 'blockive-premium-addon-for-block-pro' ), value: textColor, onChange: ( val ) => setAttributes( { textColor: val } ) },
							] }
							hover={ [
								{ label: __( 'Text Color', 'blockive-premium-addon-for-block-pro' ), value: textHoverColor, onChange: ( val ) => setAttributes( { textHoverColor: val } ) },
							] }
						/>
						<p className="bpafb-help-text">
							{ __( 'Font, size, weight and other typography options are available in the native Styles panel above.', 'blockive-premium-addon-for-block-pro' ) }
						</p>
					</PanelBody>
				}
				advanced={ <AdvancedTab attributes={ attributes } setAttributes={ setAttributes } /> }
			/>

			<TagName { ...blockProps }>
				{ site.isResolving ? __( 'Loading…', 'blockive-premium-addon-for-block-pro' ) : site.name || __( 'Site Title', 'blockive-premium-addon-for-block-pro' ) }
			</TagName>
		</>
	);
}
