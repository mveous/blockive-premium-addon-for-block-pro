/**
 * "Scroll Snap" page setting (Bpafb_Pro_Scroll_Snap). Loaded only in the
 * post / page editor.
 */
import { __ } from '@wordpress/i18n';
import { registerPlugin } from '@wordpress/plugins';
import { PluginDocumentSettingPanel } from '@wordpress/editor';
import { SelectControl } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';

const META = '_bpafb_scroll_snap';

function ScrollSnapPanel() {
	const { meta, postType } = useSelect( ( select ) => ( {
		meta: select( 'core/editor' ).getEditedPostAttribute( 'meta' ),
		postType: select( 'core/editor' ).getCurrentPostType(),
	} ), [] );
	const { editPost } = useDispatch( 'core/editor' );

	// Templates are not pages on their own; the meta must be available.
	if ( ! meta || ! ( META in meta ) || postType === 'blockive_template' ) {
		return null;
	}

	return (
		<PluginDocumentSettingPanel name="bpafb-scroll-snap" title={ __( 'Scroll Snap', 'blockive-premium-addon-for-block-pro' ) }>
			<SelectControl
				label={ __( 'Snap to Sections', 'blockive-premium-addon-for-block-pro' ) }
				value={ meta[ META ] || '' }
				options={ [
					{ label: __( 'Off', 'blockive-premium-addon-for-block-pro' ), value: '' },
					{ label: __( 'Gentle (when stopping near a section)', 'blockive-premium-addon-for-block-pro' ), value: 'proximity' },
					{ label: __( 'Strict (always land on a section)', 'blockive-premium-addon-for-block-pro' ), value: 'mandatory' },
				] }
				onChange={ ( value ) => editPost( { meta: { [ META ]: value } } ) }
				help={ __( 'Scrolling comes to rest at the start of the page\'s top-level blocks. Use Strict only when every section fits the window.', 'blockive-premium-addon-for-block-pro' ) }
			/>
		</PluginDocumentSettingPanel>
	);
}

registerPlugin( 'bpafb-scroll-snap', { render: ScrollSnapPanel } );
