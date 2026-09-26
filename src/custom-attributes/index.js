/**
 * Custom Attributes control in the Advanced panel of every Blockive block.
 * The attribute itself comes from the server's block definitions and is
 * applied there (Bpafb_Pro_Custom_Attributes).
 */
import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { InspectorAdvancedControls } from '@wordpress/block-editor';
import { TextareaControl } from '@wordpress/components';

const PREFIX = 'blockive-premium-addon-for-block/';
const BLOCKED = [ 'style', 'id', 'class', 'href', 'src', 'srcset', 'srcdoc', 'action', 'formaction', 'xlink:href', 'data', 'poster', 'background', 'codebase', 'dynsrc', 'lowsrc', 'ping' ];

/**
 * Names that will be left out, same rules as Bpafb_Pro_Custom_Attributes::parse().
 *
 * @param {string} text Lines as entered.
 * @return {string[]}
 */
function refusedNames( text ) {
	return String( text || '' )
		.split( '\n' )
		.map( ( line ) => line.split( '|' )[ 0 ].trim().toLowerCase() )
		.filter( ( name ) => name && ( ! /^[a-z_:][a-z0-9_.:-]*$/.test( name ) || name.startsWith( 'on' ) || BLOCKED.includes( name ) ) );
}

const withCustomAttributes = createHigherOrderComponent(
	( BlockEdit ) => ( props ) => {
		if ( ! props.name.startsWith( PREFIX ) || ! ( 'bpafbCustomAttributes' in props.attributes ) ) {
			return <BlockEdit { ...props } />;
		}
		const value = props.attributes.bpafbCustomAttributes || '';
		const refused = refusedNames( value );
		return (
			<>
				<BlockEdit { ...props } />
				<InspectorAdvancedControls>
					<TextareaControl
						label={ __( 'Custom Attributes', 'blockive-premium-addon-for-block-pro' ) }
						value={ value }
						onChange={ ( next ) => props.setAttributes( { bpafbCustomAttributes: next } ) }
						placeholder={ 'data-track|signup\naria-label|Newsletter sign-up' }
						help={
							refused.length
								? /* translators: %s: attribute names. */ __( 'Left out (not allowed): ', 'blockive-premium-addon-for-block-pro' ) + refused.join( ', ' )
								: __( 'One per line as name|value, added to the block\'s outer element. Event handlers, style, id, class, and link or source URLs are not allowed.', 'blockive-premium-addon-for-block-pro' )
						}
						__nextHasNoMarginBottom
					/>
				</InspectorAdvancedControls>
			</>
		);
	},
	'withBpafbCustomAttributes'
);

// The attribute, for Blockive blocks. This script loads before them (see
// Bpafb_Pro_Custom_Attributes::make_dependency()).
addFilter( 'blocks.registerBlockType', 'blockive-pro/custom-attributes', ( settings, name ) => {
	if ( ! name.startsWith( PREFIX ) || ( settings.attributes && settings.attributes.bpafbCustomAttributes ) ) {
		return settings;
	}
	return {
		...settings,
		attributes: { ...settings.attributes, bpafbCustomAttributes: { type: 'string', default: '' } },
	};
} );

addFilter( 'editor.BlockEdit', 'blockive-pro/custom-attributes', withCustomAttributes );
