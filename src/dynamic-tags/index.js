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
import DynamicTagSwitcher, { TOKEN_PATTERN } from './dynamic-tag-control';
import './editor.scss';

const DYNAMIC_FIELD_BLOCK = 'blockive-premium-addon-for-block/tb-dynamic-field';

/**
 * Fetches a tag's resolved value via the same `/wp/v2/block-renderer`
 * endpoint the block editor's own dynamic-block previews use - reuses the
 * Dynamic Field block's real PHP render (Bpafb_Pro_Dynamic_Tags::
 * render_dynamic_field_block()) rather than re-implementing tag resolution
 * in JS, so a preview can never drift from what the frontend actually shows.
 * Returns the rendered HTML string (a `<span>` wrapping either escaped text
 * or, for an image-type tag, a real `<img>`).
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
 * Extracts the bare value (text or image `src`) from fetchResolvedTagHtml()'s
 * wrapped HTML, for substituting directly into an existing field's own
 * plain-string attribute (as opposed to the Dynamic Field block, which can
 * just render the wrapped HTML as-is via RawHTML).
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

// `acceptedTypes` restricts which tags a field's picker offers - an image
// field has no sane use for a text tag (Post Title) any more than a text
// field has a use for an image URL as its literal text. `isImage` marks
// which fields additionally need the live image-preview substitution below,
// since unlike the dedicated Dynamic Field block (a dynamic, PHP-rendered
// block whose own editor preview already goes through block-renderer),
// Heading/Button/Image Box are static blocks whose synced edit() renders
// `attributes.imageUrl` directly as an <img src> - a raw "{{tag}}" token
// there is a broken image in the editor even though it resolves correctly
// on the frontend, so image-type tokens need substituting for display only.
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
 * For a block's `isImage`-flagged fields, resolves any currently-set
 * "{{tag}}" token to its real value and returns an `attributes` object with
 * just those fields substituted for display - the real stored value (the
 * token itself) is untouched, so `setAttributes` calls from the wrapped
 * block's own UI, frontend resolution, and reopening the field later all
 * still see the genuine token, not this preview's resolved value.
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
		// tokenSignature stands in for imageFields/attributes - only the
		// image fields' own values should trigger a refetch.
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
 * Renders the block's actual resolved value in the editor canvas - instead
 * of a raw "{{tag:param}}" token string, so what you see while editing
 * matches what visitors see, the same live-preview behavior Elementor's own
 * Dynamic Tags already give you (resolving against your own post while
 * you're editing it, or the block's own postId context - e.g. inside a Loop
 * Item template - when it declares one). For an image-type tag this is the
 * real `<img>` markup fetchResolvedTagHtml() returns, rendered as-is via
 * RawHTML - no separate image-handling needed here, unlike the
 * attribute-substitution case above, since this block has no other design
 * to preserve around the value.
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
