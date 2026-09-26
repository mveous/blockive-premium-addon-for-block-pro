/**
 * Leaves blocks out of the inserter that Site Tools → Element Manager
 * turned off, or that need WooCommerce when it is not active
 * (Bpafb_Pro_Site_Tools::hidden_blocks()). Blocks already in content keep
 * working.
 */
import { addFilter } from '@wordpress/hooks';

const hidden = new Set( Array.isArray( window.bpafbProHiddenBlocks ) ? window.bpafbProHiddenBlocks : [] );

addFilter( 'blocks.registerBlockType', 'blockive-pro/hidden-blocks', ( settings, name ) =>
	hidden.has( name ) ? { ...settings, supports: { ...settings.supports, inserter: false } } : settings
);
