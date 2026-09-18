import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { Placeholder } from '@wordpress/components';

/**
 * Builds the `edit` view for a real Template Block whose content comes
 * from WooCommerce or Events Calendar data on the server (see
 * Bpafb_Pro_Woo_Blocks / Bpafb_Pro_Events_Blocks). Shows a plain
 * placeholder instead of a live preview, since most of these show
 * detailed markup (a gallery, tabs, a variation form) that is not worth
 * building twice.
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

