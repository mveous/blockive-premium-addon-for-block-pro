import { __ } from '@wordpress/i18n';
import { useBlockProps, BlockControls, AlignmentControl } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';

import InspectorTabs from '../../components/inspector-tabs';
import AdvancedTab from '../../components/advanced-tab';
import ColorStateControls from '../../components/color-state-controls';
import { useSiteInfo, TEXT_TAG_OPTIONS } from '../shared';

export default function Edit( { attributes, setAttributes } ) {
	const { tagName, textAlign, textColor } = attributes;
	const site = useSiteInfo();
	const TagName = tagName || 'p';

	const blockProps = useBlockProps( {
		className: 'bpafb-tb-site-tagline',
		style: { textAlign: textAlign || undefined, color: textColor || undefined },
	} );

	let text = site.description;
	if ( site.isResolving ) {
		text = __( 'Loading…', 'blockive-premium-addon-for-block-pro' );
	} else if ( ! text ) {
		text = __( 'Site tagline (set one under Settings → General)', 'blockive-premium-addon-for-block-pro' );
	}

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

			<TagName { ...blockProps }>{ text }</TagName>
		</>
	);
}
