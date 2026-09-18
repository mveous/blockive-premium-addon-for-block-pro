import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { PanelRow, SelectControl, TextControl, ComboboxControl, Button, BaseControl } from '@wordpress/components';

/**
 * Flattens the localized registry (see
 * Bpafb_Pro_Dynamic_Tags::enqueue_editor_assets()) into one option list for
 * a single SelectControl, since @wordpress/components' SelectControl has no
 * native option-group support. Filtered by `acceptedTypes` when given -
 * e.g. an image field (Image Box's imageUrl) has no sane use for a plain
 * text tag like Post Title, the same way an Elementor control only offers
 * dynamic tags compatible with that control's own type.
 *
 * @param {string[]} [acceptedTypes] Tag `type`s to include; omit for all.
 */
function flatTagOptions( acceptedTypes ) {
	const registry = window.bpafbProDynamicTags?.registry || {};
	const options = [ { label: __( '— Select a tag —', 'blockive-premium-addon-for-block-pro' ), value: '' } ];

	Object.values( registry ).forEach( ( group ) => {
		group.tags.forEach( ( tag ) => {
			if ( acceptedTypes && ! acceptedTypes.includes( tag.type || 'text' ) ) {
				return;
			}
			options.push( {
				label: `${ group.label }: ${ tag.label }`,
				value: tag.key,
			} );
		} );
	} );

	return options;
}

function findTag( key ) {
	const registry = window.bpafbProDynamicTags?.registry || {};
	for ( const group of Object.values( registry ) ) {
		const found = group.tags.find( ( tag ) => tag.key === key );
		if ( found ) {
			return found;
		}
	}
	return null;
}

/**
 * The current post's own custom field keys (the block editor already has
 * its full meta object loaded - no extra request needed), for the "Custom
 * Field" tags' parameter picker. Excludes underscore-prefixed keys, the
 * WordPress convention for "internal/protected", which is almost always
 * plugin bookkeeping (this plugin's own meta included) rather than a
 * genuine content field a site owner would want to output.
 */
function useCurrentPostMetaKeys() {
	return useSelect( ( select ) => {
		const meta = select( 'core/editor' )?.getCurrentPost?.()?.meta;
		return meta ? Object.keys( meta ).filter( ( key ) => ! key.startsWith( '_' ) ) : [];
	}, [] );
}

/**
 * Lets the user build a `{{tag}}` / `{{tag:param}}` token and insert it as
 * the current value of a text/URL/image attribute - see
 * Bpafb_Pro_Dynamic_Tags::resolve_string() for how it's resolved on the
 * frontend. Deliberately replaces the whole field rather than inserting at
 * a cursor position (no rich-text/cursor API to hook for a plain string
 * attribute) - predictable and simple to undo (just retype static text)
 * for this MVP.
 *
 * @param {Object}   props
 * @param {string}   props.label            Field label, e.g. "Content" or "Image".
 * @param {Function} props.onInsert         Called with the built token string.
 * @param {string[]} [props.acceptedTypes]  Tag `type`s this field can use
 *   (e.g. `[ 'image' ]` for an image field); omit to allow any.
 * @param {string}   [props.initialTag]     Tag key to preselect - the field/
 *   block's already-saved tag, if any, so reopening it shows what's
 *   actually selected instead of resetting to "— Select a tag —" every time.
 * @param {string}   [props.initialParam]   Param to preselect alongside initialTag.
 */
export default function DynamicTagControl( { label, onInsert, acceptedTypes, initialTag = '', initialParam = '' } ) {
	const [ tagKey, setTagKey ] = useState( initialTag );
	const [ param, setParam ] = useState( initialParam );
	const metaKeys = useCurrentPostMetaKeys();

	const tag = tagKey ? findTag( tagKey ) : null;

	return (
		<BaseControl className="bpafb-pro-dynamic-tag-control">
			<PanelRow>
				<SelectControl
					label={ label }
					value={ tagKey }
					options={ flatTagOptions( acceptedTypes ) }
					onChange={ ( value ) => {
						setTagKey( value );
						setParam( '' );
					} }
				/>
			</PanelRow>

			{ tag?.hasParam && tag?.isCustomField && (
				<PanelRow>
					<ComboboxControl
						label={ __( 'Custom field key', 'blockive-premium-addon-for-block-pro' ) }
						help={ __( 'Lists this post\'s own custom fields - type a different key if the one you need isn\'t saved yet.', 'blockive-premium-addon-for-block-pro' ) }
						value={ param }
						options={ metaKeys.map( ( key ) => ( { label: key, value: key } ) ) }
						onFilterValueChange={ setParam }
						onChange={ ( value ) => setParam( value || '' ) }
					/>
				</PanelRow>
			) }

			{ tag?.hasParam && ! tag?.isCustomField && (
				<PanelRow>
					<TextControl
						label={ __( 'Parameter (optional)', 'blockive-premium-addon-for-block-pro' ) }
						value={ param }
						onChange={ setParam }
					/>
				</PanelRow>
			) }

			{ tagKey && (
				<PanelRow>
					<Button
						variant="secondary"
						onClick={ () => {
							const token = param ? `{{${ tagKey }:${ param }}}` : `{{${ tagKey }}}`;
							onInsert( token );
						} }
					>
						{ __( 'Insert Tag', 'blockive-premium-addon-for-block-pro' ) }
					</Button>
				</PanelRow>
			) }
		</BaseControl>
	);
}
