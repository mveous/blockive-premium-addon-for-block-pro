import { __ } from '@wordpress/i18n';
import { registerPlugin } from '@wordpress/plugins';
import { PluginDocumentSettingPanel } from '@wordpress/editor';
import { SelectControl, RangeControl } from '@wordpress/components';
import { useEntityProp } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';

const TEMPLATE_POST_TYPE = window.bpafbTemplateBuilder?.postType || 'blockive_template';
const META = '_bpafb_header_footer_layout';

// Same as Bpafb_Pro_Theme_Locations::LAYOUT_DEFAULTS.
const DEFAULTS = {
	width: 'full',
	customWidth: 1200,
};

/**
 * "Layout" document panel for Header and Footer templates: how wide the
 * header / footer is on the page (Bpafb_Pro_Theme_Locations::max_width()).
 */
function HeaderFooterLayoutPanel() {
	const postType = useSelect( ( select ) => select( 'core/editor' ).getCurrentPostType(), [] );
	const [ meta, setMeta ] = useEntityProp( 'postType', TEMPLATE_POST_TYPE, 'meta' );
	const kind = meta?._bpafb_template_kind;

	if ( postType !== TEMPLATE_POST_TYPE || ! meta || ( kind !== 'header' && kind !== 'footer' ) ) {
		return null;
	}

	const settings = { ...DEFAULTS, ...( meta[ META ] || {} ) };
	const set = ( key ) => ( value ) => setMeta( { ...meta, [ META ]: { ...settings, [ key ]: value } } );

	return (
		<PluginDocumentSettingPanel
			name="bpafb-header-footer-layout"
			title={ kind === 'header' ? __( 'Header Layout', 'blockive-premium-addon-for-block-pro' ) : __( 'Footer Layout', 'blockive-premium-addon-for-block-pro' ) }
		>
			<SelectControl
				label={ __( 'Width', 'blockive-premium-addon-for-block-pro' ) }
				value={ settings.width }
				options={ [
					{ label: __( 'Full width', 'blockive-premium-addon-for-block-pro' ), value: 'full' },
					{ label: __( 'Content width (theme)', 'blockive-premium-addon-for-block-pro' ), value: 'content' },
					{ label: __( 'Wide width (theme)', 'blockive-premium-addon-for-block-pro' ), value: 'wide' },
					{ label: __( 'Custom', 'blockive-premium-addon-for-block-pro' ), value: 'custom' },
				] }
				onChange={ set( 'width' ) }
				help={ __( 'Anything narrower than full width is centered. Blocks inside can still have their own width and background.', 'blockive-premium-addon-for-block-pro' ) }
				__nextHasNoMarginBottom
			/>
			{ settings.width === 'custom' && (
				<RangeControl
					label={ __( 'Maximum Width (px)', 'blockive-premium-addon-for-block-pro' ) }
					value={ settings.customWidth }
					onChange={ ( value ) => set( 'customWidth' )( value ?? DEFAULTS.customWidth ) }
					min={ 320 }
					max={ 2560 }
					step={ 10 }
				/>
			) }
		</PluginDocumentSettingPanel>
	);
}

export default function registerHeaderFooterLayoutPanel() {
	registerPlugin( 'bpafb-header-footer-layout', { render: HeaderFooterLayoutPanel } );
}
