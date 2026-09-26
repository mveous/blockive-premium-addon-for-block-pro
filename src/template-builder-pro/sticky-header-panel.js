import { __ } from '@wordpress/i18n';
import { registerPlugin } from '@wordpress/plugins';
import { PluginDocumentSettingPanel } from '@wordpress/editor';
import { ToggleControl, SelectControl, RangeControl, BaseControl } from '@wordpress/components';
import { useEntityProp } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';

import ColorStateControls from '../components/color-state-controls';

const TEMPLATE_POST_TYPE = window.bpafbTemplateBuilder?.postType || 'blockive_template';
const META = '_bpafb_sticky_header';

// Same as Bpafb_Pro_Sticky::DEFAULTS.
const DEFAULTS = {
	enabled: false,
	desktop: true,
	tablet: true,
	mobile: true,
	behavior: 'always',
	scrolledOffset: 50,
	scrolledBg: '#ffffff',
	scrolledColor: '',
	scrolledShadow: true,
	zIndex: 100,
};

/**
 * "Sticky Header" document panel, for Header templates only
 * (Bpafb_Pro_Sticky).
 */
function StickyHeaderPanel() {
	const postType = useSelect( ( select ) => select( 'core/editor' ).getCurrentPostType(), [] );
	const [ meta, setMeta ] = useEntityProp( 'postType', TEMPLATE_POST_TYPE, 'meta' );

	if ( postType !== TEMPLATE_POST_TYPE || ! meta || meta._bpafb_template_kind !== 'header' ) {
		return null;
	}

	const settings = { ...DEFAULTS, ...( meta[ META ] || {} ) };
	const set = ( key ) => ( value ) => setMeta( { ...meta, [ META ]: { ...settings, [ key ]: value } } );

	return (
		<PluginDocumentSettingPanel name="bpafb-sticky-header" title={ __( 'Sticky Header', 'blockive-premium-addon-for-block-pro' ) }>
			<ToggleControl
				label={ __( 'Stick to the Top', 'blockive-premium-addon-for-block-pro' ) }
				checked={ !! settings.enabled }
				onChange={ set( 'enabled' ) }
				help={ __( 'The header stays at the top of the window while the page scrolls.', 'blockive-premium-addon-for-block-pro' ) }
			/>
			{ settings.enabled && (
				<>
					<BaseControl label={ __( 'On', 'blockive-premium-addon-for-block-pro' ) } __nextHasNoMarginBottom>
						<ToggleControl label={ __( 'Desktop', 'blockive-premium-addon-for-block-pro' ) } checked={ !! settings.desktop } onChange={ set( 'desktop' ) } />
						<ToggleControl label={ __( 'Tablet', 'blockive-premium-addon-for-block-pro' ) } checked={ !! settings.tablet } onChange={ set( 'tablet' ) } />
						<ToggleControl label={ __( 'Mobile', 'blockive-premium-addon-for-block-pro' ) } checked={ !! settings.mobile } onChange={ set( 'mobile' ) } />
					</BaseControl>
					<SelectControl
						label={ __( 'Behavior', 'blockive-premium-addon-for-block-pro' ) }
						value={ settings.behavior }
						options={ [
							{ label: __( 'Always visible', 'blockive-premium-addon-for-block-pro' ), value: 'always' },
							{ label: __( 'Hide on scroll down, show on scroll up', 'blockive-premium-addon-for-block-pro' ), value: 'scroll-up' },
						] }
						onChange={ set( 'behavior' ) }
					/>
					<RangeControl
						label={ __( 'Scrolled Look After (px)', 'blockive-premium-addon-for-block-pro' ) }
						value={ settings.scrolledOffset }
						onChange={ ( value ) => set( 'scrolledOffset' )( value ?? 0 ) }
						min={ 0 }
						max={ 600 }
						help={ __( 'After scrolling this far, the header gets the colors and shadow below, and the class "is-scrolled" for custom CSS.', 'blockive-premium-addon-for-block-pro' ) }
					/>
					<ColorStateControls
						normal={ [
							{ label: __( 'Scrolled Background', 'blockive-premium-addon-for-block-pro' ), value: settings.scrolledBg, onChange: ( value ) => set( 'scrolledBg' )( value || '' ) },
							{ label: __( 'Scrolled Text Color', 'blockive-premium-addon-for-block-pro' ), value: settings.scrolledColor, onChange: ( value ) => set( 'scrolledColor' )( value || '' ) },
						] }
					/>
					<ToggleControl label={ __( 'Shadow When Scrolled', 'blockive-premium-addon-for-block-pro' ) } checked={ !! settings.scrolledShadow } onChange={ set( 'scrolledShadow' ) } />
					<RangeControl
						label={ __( 'Stacking Order (z-index)', 'blockive-premium-addon-for-block-pro' ) }
						value={ settings.zIndex }
						onChange={ ( value ) => set( 'zIndex' )( value ?? 100 ) }
						min={ 1 }
						max={ 9999 }
						help={ __( 'Raise it if page content scrolls over the header.', 'blockive-premium-addon-for-block-pro' ) }
					/>
				</>
			) }
		</PluginDocumentSettingPanel>
	);
}

export default function registerStickyHeaderPanel() {
	registerPlugin( 'bpafb-sticky-header', { render: StickyHeaderPanel } );
}
