import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { Placeholder } from '@wordpress/components';
import { registerBlockType, unregisterBlockType, getBlockType } from '@wordpress/blocks';

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


/**
 * Replaces the free plugin's teaser version of each block with the real,
 * server-rendered one (WooCommerce and Events Calendar Template Blocks).
 * The teaser is always removed; the real block is only added when the
 * plugin it needs is active, so it never sits in the inserter doing
 * nothing. Saved templates still render (the PHP side is always
 * registered).
 *
 * @param {Array<{slug: string, title: string, icon: string}>} blocks Blocks to register.
 * @param {boolean}                                              active Whether the needed plugin is active.
 */
export function replaceTeaserBlocks( blocks, active ) {
	blocks.forEach( ( { slug, title, icon } ) => {
		const name = 'blockive-premium-addon-for-block/tb-' + slug;

		if ( getBlockType( name ) ) {
			unregisterBlockType( name );
		}

		if ( ! active ) {
			return;
		}

		registerBlockType( name, {
			apiVersion: 3,
			title,
			category: 'blockive-template',
			icon,
			usesContext: [ 'postId', 'postType' ],
			supports: { html: false, className: false, customClassName: false, reusable: false },
			edit: createDynamicBlockEdit( title, icon ),
			save: () => null,
		} );
	} );
}
