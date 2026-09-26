/**
 * Sticky offset for Blockive blocks set to Advanced → Position: Sticky
 * (applied on the site by Bpafb_Pro_Sticky::apply_block_offset()). Lives
 * in this script because it loads before every Blockive block, which the
 * attribute filter below needs.
 */
import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';

const PREFIX = 'blockive-premium-addon-for-block/';

addFilter( 'blocks.registerBlockType', 'blockive-pro/sticky-offset', ( settings, name ) => {
	if ( ! name.startsWith( PREFIX ) || ( settings.attributes && settings.attributes.bpafbStickyOffset ) ) {
		return settings;
	}
	return {
		...settings,
		attributes: { ...settings.attributes, bpafbStickyOffset: { type: 'number' } },
	};
} );

const withStickyOffset = createHigherOrderComponent(
	( BlockEdit ) => ( props ) => {
		if ( ! props.name.startsWith( PREFIX ) || props.attributes.bpafbPosition !== 'sticky' ) {
			return <BlockEdit { ...props } />;
		}
		return (
			<>
				<BlockEdit { ...props } />
				<InspectorControls>
					<PanelBody title={ __( 'Sticky', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
						<RangeControl
							label={ __( 'Distance From Top (px)', 'blockive-premium-addon-for-block-pro' ) }
							value={ props.attributes.bpafbStickyOffset }
							onChange={ ( value ) => props.setAttributes( { bpafbStickyOffset: value } ) }
							min={ 0 }
							max={ 400 }
							allowReset
							help={ __( 'Sticks this far below the top of the window (the admin bar is added automatically), and only while its parent, such as a column, is in view. It does not stick inside a parent with overflow hidden.', 'blockive-premium-addon-for-block-pro' ) }
						/>
					</PanelBody>
				</InspectorControls>
			</>
		);
	},
	'withBpafbStickyOffset'
);

addFilter( 'editor.BlockEdit', 'blockive-pro/sticky-offset', withStickyOffset );
