/**
 * Adds the Dynamic Tags picker (dynamic-tag-control.js) to a few useful
 * fields: Heading's content, Button's text and link, and Image Box's image
 * and link. This uses the normal `editor.BlockEdit` filter, so a block can
 * be extended without editing its own copied source files. No new
 * attributes are needed - a tag is just saved as plain text in the field
 * (like "{{post_title}}"), and turned into real content by
 * Bpafb_Pro_Dynamic_Tags::resolve_block_tokens() when the page is shown.
 *
 * This also swaps in the real "Dynamic Field" block, replacing the free
 * plugin's locked teaser version - see class-bpafb-pro-dynamic-tags.php.
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
import DynamicTagSwitcher, { TOKEN_PATTERN } from './dynamic-tag-control';
import './editor.scss';

const DYNAMIC_FIELD_BLOCK = 'blockive-premium-addon-for-block/tb-dynamic-field';

/**
 * Gets a tag's real value from the server, using the same
 * `/wp/v2/block-renderer` endpoint the block editor already uses for
 * dynamic-block previews. This reuses the real PHP code
 * (Bpafb_Pro_Dynamic_Tags::render_dynamic_field_block()) instead of
 * re-writing the same logic in JavaScript, so the preview can never show
 * something different from the live site. Returns the rendered HTML: a
 * `<span>` with escaped text, or a real `<img>` for an image-type tag.
 *
 * @param {string}        tag
 * @param {string}        param
 * @param {number|string} [postId]
 * @return {Promise<string>}
 */
function fetchResolvedTagHtml( tag, param, postId ) {
	const path = addQueryArgs( `/wp/v2/block-renderer/${ DYNAMIC_FIELD_BLOCK }`, {
		context: 'edit',
		attributes: { tag, param },
		post_id: postId || undefined,
	} );
	return apiFetch( {
		path,
		method: 'POST',
	} ).then( ( result ) => {
		return result?.rendered || '';
	} );
}

/**
 * Pulls out the plain value (text, or an image's `src`) from the HTML
 * fetchResolvedTagHtml() returns, so it can be put straight into an
 * existing field's plain-text setting. The Dynamic Field block does not
 * need this - it can show the wrapped HTML as-is, using RawHTML.
 *
 * @param {string} html
 * @return {string}
 */
function extractResolvedValue( html ) {
	const container = document.createElement( 'div' );
	container.innerHTML = html;
	const img = container.querySelector( 'img' );
	return img ? img.getAttribute( 'src' ) || '' : container.textContent.trim();
}

// `acceptedTypes` controls which tags a field's picker shows. `isImage`
// marks fields that need the live image-preview swap below: Heading,
// Button, and Image Box are static blocks that show `attributes.imageUrl`
// directly as an <img src>. A raw "{{tag}}" token there would look like a
// broken image in the editor, even though it works fine on the live site.
const FIELDS_BY_BLOCK = {
	'blockive-premium-addon-for-block/heading': [
		{ attribute: 'content', label: __( 'Heading Text', 'blockive-premium-addon-for-block-pro' ), acceptedTypes: [ 'text' ] },
	],
	'blockive-premium-addon-for-block/button': [
		{ attribute: 'text', label: __( 'Button Text', 'blockive-premium-addon-for-block-pro' ), acceptedTypes: [ 'text' ] },
		{ attribute: 'url', label: __( 'Button Link', 'blockive-premium-addon-for-block-pro' ), acceptedTypes: [ 'text' ] },
	],
	'blockive-premium-addon-for-block/image-box': [
		{ attribute: 'imageUrl', label: __( 'Image', 'blockive-premium-addon-for-block-pro' ), acceptedTypes: [ 'image' ], isImage: true },
		{ attribute: 'linkUrl', label: __( 'Link URL', 'blockive-premium-addon-for-block-pro' ), acceptedTypes: [ 'text' ] },
	],
};

/**
 * For a block's image fields, swaps any "{{tag}}" token for its real value,
 * and returns a copy of `attributes` with just those fields changed, for
 * showing in the editor. The real stored value (the token itself) is not
 * touched - so saving, the live site, and reopening the field later all
 * still see the real token.
 */
function useImageFieldPreviewAttributes( attributes, fields, contextPostId ) {
	const editedPostId = useSelect( ( select ) => select( 'core/editor' )?.getCurrentPostId?.(), [] );
	const postId = contextPostId || editedPostId;
	const imageFields = fields.filter( ( field ) => field.isImage );
	const [ resolved, setResolved ] = useState( {} );

	const tokenSignature = imageFields.map( ( field ) => attributes[ field.attribute ] ).join( ' ' );

	useEffect( () => {
		let cancelled = false;
		imageFields.forEach( ( field ) => {
			const value = attributes[ field.attribute ];
			const match = typeof value === 'string' && value.match( TOKEN_PATTERN );
			if ( ! match ) {
				return;
			}
			fetchResolvedTagHtml( match[ 1 ], match[ 2 ] || '', postId )
				.then( ( html ) => {
					if ( ! cancelled ) {
						setResolved( ( prev ) => ( { ...prev, [ field.attribute ]: extractResolvedValue( html ) } ) );
					}
				} )
				.catch( () => {} );
		} );
		return () => {
			cancelled = true;
		};
		// tokenSignature stands in for imageFields/attributes here - we
		// only want to fetch again when an image field's own value changes.
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ tokenSignature, postId ] );

	if ( 0 === Object.keys( resolved ).length ) {
		return attributes;
	}

	const overridden = { ...attributes };
	imageFields.forEach( ( field ) => {
		const value = attributes[ field.attribute ];
		if ( typeof value === 'string' && TOKEN_PATTERN.test( value ) && resolved[ field.attribute ] ) {
			overridden[ field.attribute ] = resolved[ field.attribute ];
		}
	} );
	return overridden;
}

const withDynamicTagsControl = createHigherOrderComponent( ( BlockEdit ) => ( props ) => {
	const fields = FIELDS_BY_BLOCK[ props.name ] || [];
	const previewAttributes = useImageFieldPreviewAttributes( props.attributes, fields, props.context?.postId );

	if ( ! FIELDS_BY_BLOCK[ props.name ] ) {
		return <BlockEdit { ...props } />;
	}

	return (
		<>
			<BlockEdit { ...props } attributes={ previewAttributes } />
			<InspectorControls>
				<PanelBody title={ __( 'Dynamic Tags (Pro)', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
					{ fields.map( ( field ) => (
						<DynamicTagSwitcher
							key={ field.attribute }
							label={ field.label }
							acceptedTypes={ field.acceptedTypes }
							value={ props.attributes[ field.attribute ] }
							onChange={ ( value ) => props.setAttributes( { [ field.attribute ]: value } ) }
						/>
					) ) }
				</PanelBody>
			</InspectorControls>
		</>
	);
}, 'withDynamicTagsControl' );

addFilter( 'editor.BlockEdit', 'blockive-pro/dynamic-tags-control', withDynamicTagsControl );

// -- Real "Dynamic Field" block, replacing the free plugin's teaser -------

if ( getBlockType( DYNAMIC_FIELD_BLOCK ) ) {
	unregisterBlockType( DYNAMIC_FIELD_BLOCK );
}

// The render function (Bpafb_Pro_Dynamic_Tags::render_dynamic_field_block())
// must list the exact same `supports` and call
// get_block_wrapper_attributes(), or these settings would only show in the
// editor preview and do nothing on the live site.
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
 * Shows the block's real value in the editor, instead of a raw
 * "{{tag:param}}" token, using either the current post or the block's own
 * postId context (like inside a Loop Item template). For an image-type
 * tag, this shows the real `<img>` markup from fetchResolvedTagHtml(), as-is.
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
		fetchResolvedTagHtml( tag, param, postId )
			.then( ( result ) => {
				if ( ! cancelled ) {
					setHtml( result );
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
						<DynamicTagSwitcher
							label={ __( 'Tag', 'blockive-premium-addon-for-block-pro' ) }
							value={ attributes.tag ? ( attributes.param ? `{{${ attributes.tag }:${ attributes.param }}}` : `{{${ attributes.tag }}}` ) : '' }
							onChange={ ( value ) => {
								if ( ! value ) {
									setAttributes( { tag: '', param: '' } );
									return;
								}
								const match = value.match( TOKEN_PATTERN );
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
