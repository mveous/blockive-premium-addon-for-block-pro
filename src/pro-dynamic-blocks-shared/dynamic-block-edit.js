import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { Placeholder } from '@wordpress/components';

/**
 * Builds the `edit` component for a real, server-rendered Template Block
 * whose actual output only exists on the frontend (it's resolved from
 * WooCommerce/Events Calendar data at render time - see
 * Bpafb_Pro_Woo_Blocks / Bpafb_Pro_Events_Blocks). The editor shows a
 * static placeholder rather than attempting a live per-block preview
 * (unlike e.g. the free plugin's Post Title block, which fetches real
 * text cheaply) - most of these render rich, structured markup (a
 * gallery, tabs, a variation form) that isn't worth reproducing twice.
 *
 * @param {string} title Block title, e.g. "Product Price".
 * @param {string} icon  Dashicon name matching the block's real icon.
 * @return {Function} React component.
 */
export function createDynamicBlockEdit( title, icon ) {
	return function DynamicBlockEdit() {
		const blockProps = useBlockProps();
		return (
			<div { ...blockProps }>
				<Placeholder
					icon={ icon }
					label={ title }
					instructions={ __(
						'Renders dynamically on the frontend from the previewed product/event.',
						'blockive-premium-addon-for-block-pro'
					) }
				/>
			</div>
		);
	};
}

