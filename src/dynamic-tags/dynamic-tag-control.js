import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { Button, Popover, ComboboxControl, TextControl } from '@wordpress/components';
import { tag as tagIcon, settings as settingsIcon, closeSmall as closeIcon } from '@wordpress/icons';

// Matches a field's whole raw value against a single "{{tag}}" /
// "{{tag:param}}" token - anchored (^...$) because, unlike the render-time
// PHP pattern (which finds tokens anywhere inside surrounding text), a
// field wired through DynamicTagSwitcher is either entirely a token or
// entirely a static value, never a mix.
export const TOKEN_PATTERN = /^\{\{\s*([a-z_]+)\s*(?::\s*(.*)\s*)?\}\}$/;

/**
 * Flattens the localized registry (see
 * Bpafb_Pro_Dynamic_Tags::enqueue_editor_assets()) into groups filtered by
 * `acceptedTypes` - e.g. an image field (Image Box's imageUrl) has no sane
 * use for a plain text tag like Post Title, the same way Elementor Pro's own
 * dynamic tags list only offers tags compatible with the field you opened it
 * from.
 *
 * @param {string[]} [acceptedTypes] Tag `type`s to include; omit for all.
 */
function getFilteredGroups( acceptedTypes ) {
	const registry = window.bpafbProDynamicTags?.registry || {};
	return Object.entries( registry )
		.map( ( [ groupKey, group ] ) => ( {
			key: groupKey,
			label: group.label,
			tags: group.tags.filter(
				( tag ) => ! acceptedTypes || acceptedTypes.includes( tag.type || 'text' )
			),
		} ) )
		.filter( ( group ) => group.tags.length > 0 );
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
 * The tag-settings popover content - lets the user set or change a tag's
 * parameter (e.g. which custom field key to read) after it's already been
 * inserted, mirroring Elementor Pro's own "gear icon reopens a small
 * settings popup" flow for tags that take one.
 */
function TagSettingsForm( { tag, initialParam, onApply } ) {
	const [ param, setParam ] = useState( initialParam );
	const metaKeys = useCurrentPostMetaKeys();

	return (
		<div className="bpafb-pro-tag-settings-popup">
			{ tag.isCustomField ? (
				<ComboboxControl
					label={ __( 'Custom field key', 'blockive-premium-addon-for-block-pro' ) }
					help={ __( "Lists this post's own custom fields - type a different key if the one you need isn't saved yet.", 'blockive-premium-addon-for-block-pro' ) }
					value={ param }
					options={ metaKeys.map( ( key ) => ( { label: key, value: key } ) ) }
					onFilterValueChange={ setParam }
					onChange={ ( value ) => setParam( value || '' ) }
				/>
			) : (
				<TextControl
					label={ __( 'Parameter', 'blockive-premium-addon-for-block-pro' ) }
					value={ param }
					onChange={ setParam }
				/>
			) }
			<Button variant="primary" size="small" onClick={ () => onApply( param ) }>
				{ __( 'Apply', 'blockive-premium-addon-for-block-pro' ) }
			</Button>
		</div>
	);
}

/**
 * The categorized tag-picker popover, grouped exactly like the localized
 * registry and filtered to the types the field accepts - Elementor Pro's
 * own dynamic tags list works the same way (a text control only ever shows
 * text-category tags, an image control only image-category tags, etc.).
 */
function TagsListPopover( { acceptedTypes, onSelect } ) {
	const groups = getFilteredGroups( acceptedTypes );

	if ( 0 === groups.length ) {
		return (
			<div className="bpafb-pro-tags-list bpafb-pro-tags-list--empty">
				{ __( 'No dynamic tags available for this field.', 'blockive-premium-addon-for-block-pro' ) }
			</div>
		);
	}

	return (
		<div className="bpafb-pro-tags-list">
			{ groups.map( ( group ) => (
				<div key={ group.key }>
					<div className="bpafb-pro-tags-list__group-title">{ group.label }</div>
					{ group.tags.map( ( tag ) => (
						<div
							key={ tag.key }
							className="bpafb-pro-tags-list__item"
							role="button"
							tabIndex={ 0 }
							onClick={ () => onSelect( tag ) }
							onKeyDown={ ( event ) => {
								if ( 'Enter' === event.key || ' ' === event.key ) {
									onSelect( tag );
								}
							} }
						>
							{ tag.label }
						</div>
					) ) }
				</div>
			) ) }
		</div>
	);
}

/**
 * A field-level dynamic tag switcher matching Elementor Pro's own dynamic
 * tags UX: a small icon button next to the field opens a category-filtered
 * list of tags (text-only for a text field, image-only for an image field,
 * url-only for a URL field); picking one switches the field into a
 * "dynamic" cover state - the tag's name plus a settings gear (for tags
 * that take a parameter) and a remove button - instead of showing the raw
 * "{{tag}}" token, and the gear reopens the same parameter editor to change
 * it later. No new block attributes needed: the field's own existing
 * string attribute holds the token directly, same as before.
 *
 * @param {Object}   props
 * @param {string}   props.label           Field label, e.g. "Image" or "Button Link".
 * @param {string}   props.value           The field's current raw attribute value.
 * @param {Function} props.onChange        Called with the new raw value - "" to clear
 *   back to a static value, or a "{{tag}}" / "{{tag:param}}" token.
 * @param {string[]} [props.acceptedTypes] Tag `type`s this field can use; omit for all.
 */
export default function DynamicTagSwitcher( { label, value, onChange, acceptedTypes } ) {
	const [ isListOpen, setIsListOpen ] = useState( false );
	const [ isSettingsOpen, setIsSettingsOpen ] = useState( false );

	const match = typeof value === 'string' && value.match( TOKEN_PATTERN );
	const tagKey = match ? match[ 1 ] : '';
	const param = match ? match[ 2 ] || '' : '';
	const tag = tagKey ? findTag( tagKey ) : null;
	const isDynamic = !! tag;

	const applyTag = ( key, newParam ) => {
		onChange( newParam ? `{{${ key }:${ newParam }}}` : `{{${ key }}}` );
	};

	return (
		<div className="bpafb-pro-dynamic-switcher-row">
			<span className="bpafb-pro-dynamic-switcher-row__label">{ label }</span>

			{ isDynamic ? (
				<div className="bpafb-pro-dynamic-cover">
					<span className="bpafb-pro-dynamic-cover__title">{ tag.label }</span>
					{ tag.hasParam && (
						<Button
							icon={ settingsIcon }
							label={ __( 'Tag settings', 'blockive-premium-addon-for-block-pro' ) }
							onClick={ () => setIsSettingsOpen( ( open ) => ! open ) }
						/>
					) }
					<Button
						icon={ closeIcon }
						label={ __( 'Remove dynamic tag', 'blockive-premium-addon-for-block-pro' ) }
						onClick={ () => onChange( '' ) }
					/>
					{ isSettingsOpen && (
						<Popover placement="bottom-start" focusOnMount={ false } onClose={ () => setIsSettingsOpen( false ) }>
							<TagSettingsForm
								tag={ tag }
								initialParam={ param }
								onApply={ ( newParam ) => {
									applyTag( tagKey, newParam );
									setIsSettingsOpen( false );
								} }
							/>
						</Popover>
					) }
				</div>
			) : (
				<div className="bpafb-pro-dynamic-switcher">
					<Button
						icon={ tagIcon }
						label={ __( 'Dynamic Tags', 'blockive-premium-addon-for-block-pro' ) }
						onClick={ () => setIsListOpen( ( open ) => ! open ) }
					/>
					{ isListOpen && (
						<Popover placement="bottom-start" onClose={ () => setIsListOpen( false ) }>
							<TagsListPopover
								acceptedTypes={ acceptedTypes }
								onSelect={ ( selectedTag ) => {
									setIsListOpen( false );
									applyTag( selectedTag.key, '' );
									if ( selectedTag.hasParam ) {
										setIsSettingsOpen( true );
									}
								} }
							/>
						</Popover>
					) }
				</div>
			) }
		</div>
	);
}
