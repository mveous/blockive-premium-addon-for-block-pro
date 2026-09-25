import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import metadata from './block.json';

// Always registered, so a template that already holds this block keeps
// editing normally, but only offered in the inserter when WooCommerce is
// active (same rule as the Woo/Events Template Blocks).
registerBlockType( metadata.name, {
	...metadata,
	supports: {
		...metadata.supports,
		inserter: !! window.bpafbProSiteBlocks?.wooActive,
	},
	edit: Edit,
	save: () => null,
} );
