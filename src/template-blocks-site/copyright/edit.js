import { __ } from '@wordpress/i18n';
import { useBlockProps, BlockControls, AlignmentControl, RichText } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';

import InspectorTabs from '../../components/inspector-tabs';
import AdvancedTab from '../../components/advanced-tab';
import ColorStateControls from '../../components/color-state-controls';
import { cssVars } from '../shared';

export default function Edit( { attributes, setAttributes } ) {
	const { content, textAlign, textColor, linkColor, linkHoverColor } = attributes;

	const blockProps = useBlockProps( {
		className: 'bpafb-tb-copyright',
		style: {
			textAlign: textAlign || undefined,
			color: textColor || undefined,
			...cssVars( {
				'--bpafb-copyright-link-color': linkColor,
				'--bpafb-copyright-link-hover-color': linkHoverColor,
			} ),
		},
	} );

	return (
		<>
			<BlockControls>
				<AlignmentControl value={ textAlign } onChange={ ( val ) => setAttributes( { textAlign: val } ) } />
			</BlockControls>

			<InspectorTabs
				general={
					<PanelBody title={ __( 'Placeholders', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
						<p className="bpafb-help-text">
							{ __( 'Type these anywhere in the text; they are replaced on the live site:', 'blockive-premium-addon-for-block-pro' ) }
						</p>
						<ul className="bpafb-help-text">
							<li><code>{ '{year}' }</code> — { __( 'current year', 'blockive-premium-addon-for-block-pro' ) }</li>
							<li><code>{ '{site_title}' }</code> — { __( 'site title', 'blockive-premium-addon-for-block-pro' ) }</li>
							<li><code>{ '{site_url}' }</code> — { __( 'link to the home page', 'blockive-premium-addon-for-block-pro' ) }</li>
						</ul>
					</PanelBody>
				}
				style={
					<PanelBody title={ __( 'Colors', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
						<ColorStateControls
							normal={ [
								{ label: __( 'Text Color', 'blockive-premium-addon-for-block-pro' ), value: textColor, onChange: ( val ) => setAttributes( { textColor: val } ) },
								{ label: __( 'Link Color', 'blockive-premium-addon-for-block-pro' ), value: linkColor, onChange: ( val ) => setAttributes( { linkColor: val } ) },
							] }
							hover={ [
								{ label: __( 'Link Color', 'blockive-premium-addon-for-block-pro' ), value: linkHoverColor, onChange: ( val ) => setAttributes( { linkHoverColor: val } ) },
							] }
						/>
						<p className="bpafb-help-text">
							{ __( 'Font, size, weight and other typography options are available in the native Styles panel above.', 'blockive-premium-addon-for-block-pro' ) }
						</p>
					</PanelBody>
				}
				advanced={ <AdvancedTab attributes={ attributes } setAttributes={ setAttributes } /> }
			/>

			<RichText
				{ ...blockProps }
				tagName="p"
				value={ content }
				onChange={ ( val ) => setAttributes( { content: val } ) }
				allowedFormats={ [ 'core/bold', 'core/italic', 'core/link' ] }
				placeholder={ __( '© {year} {site_title}. All rights reserved.', 'blockive-premium-addon-for-block-pro' ) }
			/>
		</>
	);
}
