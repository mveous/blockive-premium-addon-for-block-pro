/**
 * Wires the Dynamic Tags picker (dynamic-tag-control.js) into the highest-
 * value existing fields - Heading's content, Button's text/link, Image
 * Box's image/link - via the standard `editor.BlockEdit` filter, the same
 * external-extension approach used elsewhere in this plugin (see
 * post-grid-pro) to add to a block without editing its synced source. No
 * new attributes needed: a tag is inserted as the literal string value of
 * the field it targets (e.g. Heading's `content` becomes the string
 * "{{post_title}}"), resolved back to real content at render time by
 * Bpafb_Pro_Dynamic_Tags::resolve_block_tokens() - a generic render_block
 * hook that works on every Blockive block's output, not just these three.
 *
 * Also replaces the free plugin's client-only "Dynamic Field" teaser block
 * with the real one - see class-bpafb-pro-dynamic-tags.php.
 */
import { registerBlockType, unregisterBlockType, getBlockType } from '@wordpress/blocks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';
import DynamicTagControl from './dynamic-tag-control';

const FIELDS_BY_BLOCK = {
	'blockive-premium-addon-for-block/heading': [
		{ attribute: 'content', label: __( 'Heading Text', 'blockive-premium-addon-for-block-pro' ) },
	],
	'blockive-premium-addon-for-block/button': [
		{ attribute: 'text', label: __( 'Button Text', 'blockive-premium-addon-for-block-pro' ) },
		{ attribute: 'url', label: __( 'Button Link', 'blockive-premium-addon-for-block-pro' ) },
	],
	'blockive-premium-addon-for-block/image-box': [
		{ attribute: 'imageUrl', label: __( 'Image URL', 'blockive-premium-addon-for-block-pro' ) },
		{ attribute: 'linkUrl', label: __( 'Link URL', 'blockive-premium-addon-for-block-pro' ) },
	],
};

const withDynamicTagsControl = createHigherOrderComponent( ( BlockEdit ) => ( props ) => {
	const fields = FIELDS_BY_BLOCK[ props.name ];

	if ( ! fields ) {
		return <BlockEdit { ...props } />;
	}

	return (
		<>
			<BlockEdit { ...props } />
			<InspectorControls>
				<PanelBody title={ __( 'Dynamic Tags (Pro)', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
					{ fields.map( ( field ) => (
						<DynamicTagControl
							key={ field.attribute }
							label={ field.label }
							onInsert={ ( token ) => props.setAttributes( { [ field.attribute ]: token } ) }
						/>
					) ) }
				</PanelBody>
			</InspectorControls>
		</>
	);
}, 'withDynamicTagsControl' );

addFilter( 'editor.BlockEdit', 'blockive-pro/dynamic-tags-control', withDynamicTagsControl );

// -- Real "Dynamic Field" block, replacing the free plugin's teaser -------

const DYNAMIC_FIELD_BLOCK = 'blockive-premium-addon-for-block/tb-dynamic-field';

if ( getBlockType( DYNAMIC_FIELD_BLOCK ) ) {
	unregisterBlockType( DYNAMIC_FIELD_BLOCK );
}

registerBlockType( DYNAMIC_FIELD_BLOCK, {
	apiVersion: 3,
	title: __( 'Dynamic Field', 'blockive-premium-addon-for-block-pro' ),
	category: 'blockive-template',
	icon: 'editor-code',
	usesContext: [ 'postId', 'postType' ],
	attributes: {
		tag: { type: 'string', default: '' },
		param: { type: 'string', default: '' },
	},
	supports: { html: false, className: false, customClassName: false, reusable: false },
	edit( { attributes, setAttributes } ) {
		return (
			<div style={ { padding: '12px', border: '1px dashed #ccc' } }>
				<DynamicTagControl
					label={ __( 'Tag', 'blockive-premium-addon-for-block-pro' ) }
					onInsert={ ( token ) => {
						const match = token.match( /^\{\{\s*([a-z_]+)\s*(?::\s*(.*)\s*)?\}\}$/ );
						if ( match ) {
							setAttributes( { tag: match[ 1 ], param: match[ 2 ] || '' } );
						}
					} }
				/>
				<p>
					{ attributes.tag
						? `{{${ attributes.tag }${ attributes.param ? ':' + attributes.param : '' }}}`
						: __( 'Choose a tag above.', 'blockive-premium-addon-for-block-pro' ) }
				</p>
			</div>
		);
	},
	save: () => null,
} );
