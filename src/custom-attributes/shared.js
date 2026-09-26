/**
 * Helpers for the features in this script that extend every Blockive
 * block (the editor twin of Bpafb_Pro_Custom_Attributes::share_attribute()).
 */
import { addFilter } from '@wordpress/hooks';

export const PREFIX = 'blockive-premium-addon-for-block/';

/**
 * Adds an attribute to every Blockive block in the editor. A block's
 * block.json attributes replace the server's list in the editor, so the
 * server-side attribute alone does not reach it.
 *
 * @param {string} name   Attribute name.
 * @param {Object} schema Attribute schema.
 */
export function shareAttribute( name, schema ) {
	addFilter( 'blocks.registerBlockType', `blockive-pro/${ name }`, ( settings, blockName ) => {
		if ( ! blockName.startsWith( PREFIX ) || ( settings.attributes && settings.attributes[ name ] ) ) {
			return settings;
		}
		return {
			...settings,
			attributes: { ...settings.attributes, [ name ]: schema },
		};
	} );
}
