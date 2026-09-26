import { __ } from '@wordpress/i18n';
import { useBlockProps, BlockControls, AlignmentControl } from '@wordpress/block-editor';
import { PanelBody, RangeControl, TextControl, ToggleControl } from '@wordpress/components';

import InspectorTabs from '../../components/inspector-tabs';
import AdvancedTab from '../../components/advanced-tab';
import ColorStateControls from '../../components/color-state-controls';
import TypographyControls from '../../components/typography-controls';
import { typoValues, typoOnChange } from '../shared';
import PostPreview from '../post-preview';

export default function Edit( { attributes, setAttributes } ) {
	const { length, useManual, showMore, moreText, align, textColor, linkColor, linkHoverColor } = attributes;
	const set = ( key ) => ( val ) => setAttributes( { [ key ]: val } );

	return (
		<>
			<BlockControls>
				<AlignmentControl value={ align } onChange={ ( val ) => setAttributes( { align: val || 'left' } ) } />
			</BlockControls>
			<InspectorTabs
				general={
					<PanelBody title={ __( 'Excerpt', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
						<ToggleControl
							label={ __( 'Use the Written Excerpt', 'blockive-premium-addon-for-block-pro' ) }
							checked={ !! useManual }
							onChange={ set( 'useManual' ) }
							help={ __( 'When the post has one. Otherwise the start of the content is used.', 'blockive-premium-addon-for-block-pro' ) }
						/>
						<RangeControl label={ __( 'Length (words)', 'blockive-premium-addon-for-block-pro' ) } value={ length } onChange={ set( 'length' ) } min={ 5 } max={ 200 } />
						<ToggleControl label={ __( 'Show "Read More" Link', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showMore } onChange={ set( 'showMore' ) } />
						{ showMore && <TextControl label={ __( 'Link Text', 'blockive-premium-addon-for-block-pro' ) } value={ moreText } onChange={ set( 'moreText' ) } /> }
					</PanelBody>
				}
				style={
					<PanelBody title={ __( 'Text', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
						<TypographyControls values={ typoValues( attributes, 'text' ) } onChange={ typoOnChange( setAttributes, 'text' ) } />
						<ColorStateControls
							normal={ [
								{ label: __( 'Text', 'blockive-premium-addon-for-block-pro' ), value: textColor, onChange: set( 'textColor' ) },
								{ label: __( 'Link', 'blockive-premium-addon-for-block-pro' ), value: linkColor, onChange: set( 'linkColor' ) },
							] }
							hover={ [ { label: __( 'Link', 'blockive-premium-addon-for-block-pro' ), value: linkHoverColor, onChange: set( 'linkHoverColor' ) } ] }
						/>
					</PanelBody>
				}
				advanced={ <AdvancedTab attributes={ attributes } setAttributes={ setAttributes } /> }
			/>
			<div { ...useBlockProps() }>
				<PostPreview name="blockive-premium-addon-for-block/tb-post-excerpt" attributes={ attributes } emptyText={ __( 'The previewed post has no excerpt or content.', 'blockive-premium-addon-for-block-pro' ) } />
			</div>
		</>
	);
}
