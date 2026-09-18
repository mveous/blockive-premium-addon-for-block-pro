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
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, Spinner } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useState, useEffect, RawHTML } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';
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

// Real block supports (typography/color/spacing/custom class) instead of
// the bare, unstyled <span> the teaser implied - matching how Elementor's
// own dedicated dynamic-content widgets (Post Info, etc.) are always fully
// styleable widgets, not a plain value dump. The render callback
// (Bpafb_Pro_Dynamic_Tags::render_dynamic_field_block()) must declare the
// identical `supports` and call get_block_wrapper_attributes() for these to
// actually reach the frontend markup, not just the editor preview.
const DYNAMIC_FIELD_SUPPORTS = {
	html: false,
	className: true,
	customClassName: true,
	reusable: false,
	typography: {
		fontSize: true,
		lineHeight: true,
		__experimentalFontFamily: true,
		__experimentalFontWeight: true,
		__experimentalLetterSpacing: true,
	},
	color: {
		text: true,
		background: true,
		link: true,
	},
	spacing: {
		margin: true,
		padding: true,
	},
};

/**
 * Renders the block's actual resolved value in the editor canvas - via the
 * same `/wp/v2/block-renderer` REST endpoint WordPress core's own block
 * editor uses for every dynamic block's live preview - instead of a raw
 * "{{tag:param}}" token string, so what you see while editing matches what
 * visitors see, the same live-preview behavior Elementor's own Dynamic Tags
 * already give you (resolving against your own post while you're editing
 * it, or the block's own postId context - e.g. inside a Loop Item template
 * - when it declares one).
 */
function useDynamicFieldPreview( tag, param, contextPostId ) {
	const [ html, setHtml ] = useState( null );
	const editedPostId = useSelect( ( select ) => select( 'core/editor' )?.getCurrentPostId?.(), [] );
	const postId = contextPostId || editedPostId;

	useEffect( () => {
		if ( ! tag ) {
			setHtml( null );
			return;
		}
		let cancelled = false;
		setHtml( null );
		apiFetch( {
			path: addQueryArgs( `/wp/v2/block-renderer/${ DYNAMIC_FIELD_BLOCK }`, {
				context: 'edit',
				attributes: { tag, param },
				post_id: postId || undefined,
			} ),
			method: 'POST',
		} )
			.then( ( result ) => {
				if ( ! cancelled ) {
					setHtml( result?.rendered || '' );
				}
			} )
			.catch( () => {
				if ( ! cancelled ) {
					setHtml( '' );
				}
			} );
		return () => {
			cancelled = true;
		};
	}, [ tag, param, postId ] );

	return html;
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
	supports: DYNAMIC_FIELD_SUPPORTS,
	edit( { attributes, setAttributes, context } ) {
		const blockProps = useBlockProps();
		const preview = useDynamicFieldPreview( attributes.tag, attributes.param, context?.postId );

		return (
			<>
				<InspectorControls>
					<PanelBody title={ __( 'Dynamic Tag', 'blockive-premium-addon-for-block-pro' ) }>
						<DynamicTagControl
							label={ __( 'Tag', 'blockive-premium-addon-for-block-pro' ) }
							initialTag={ attributes.tag }
							initialParam={ attributes.param }
							onInsert={ ( token ) => {
								const match = token.match( /^\{\{\s*([a-z_]+)\s*(?::\s*(.*)\s*)?\}\}$/ );
								if ( match ) {
									setAttributes( { tag: match[ 1 ], param: match[ 2 ] || '' } );
								}
							} }
						/>
					</PanelBody>
				</InspectorControls>
				<div { ...blockProps }>
					{ ! attributes.tag && (
						<em>{ __( 'Dynamic Field: choose a tag in the sidebar.', 'blockive-premium-addon-for-block-pro' ) }</em>
					) }
					{ attributes.tag && null === preview && <Spinner /> }
					{ attributes.tag && null !== preview && (
						preview ? <RawHTML>{ preview }</RawHTML> : <em>{ __( '(empty)', 'blockive-premium-addon-for-block-pro' ) }</em>
					) }
				</div>
			</>
		);
	},
	save: () => null,
} );
