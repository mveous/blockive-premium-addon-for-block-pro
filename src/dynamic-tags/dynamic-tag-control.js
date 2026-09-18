import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { Button, Popover, ComboboxControl, TextControl } from '@wordpress/components';
import { tag as tagIcon, settings as settingsIcon, closeSmall as closeIcon } from '@wordpress/icons';

// Matches a field's whole value against one "{{tag}}" or "{{tag:param}}"
// token. Uses ^...$ so the whole value must be the token, because a field
// using DynamicTagSwitcher is always either a full token or a plain value,
// never a mix of both - unlike the PHP pattern used at render time, which
// finds tokens anywhere inside a longer piece of text.
export const TOKEN_PATTERN = /^\{\{\s*([a-z_]+)\s*(?::\s*(.*)\s*)?\}\}$/;

/**
 * Turns the tag list sent from PHP (see
 * Bpafb_Pro_Dynamic_Tags::enqueue_editor_assets()) into groups, filtered
 * by `acceptedTypes`, so for example an image field only shows image-type tags.
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
 * The current post's own custom field keys, for the "Custom Field" tag's
 * picker. Leaves out keys starting with an underscore, which is
 * WordPress's own way of marking a field as internal, almost always used
 * for plugin data rather than real content.
 */
function useCurrentPostMetaKeys() {
	return useSelect( ( select ) => {
		const meta = select( 'core/editor' )?.getCurrentPost?.()?.meta;
		return meta ? Object.keys( meta ).filter( ( key ) => ! key.startsWith( '_' ) ) : [];
	}, [] );
}

/**
 * The popup content for changing a tag's parameter (for example, which
 * custom field key to read), after the tag has already been added. Clicking
 * a small gear icon opens this popup, for tags that take a parameter.
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
 * The tag-picker popup, grouped the same way as the tag list sent from
 * PHP, and only showing the types the field accepts (a text field only
 * shows text tags, an image field only shows image tags, and so on).
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
 * A dynamic tag switcher for one field: a small icon button next to the
 * field opens a filtered list of tags. Picking one turns the field into a
 * "dynamic" state showing the tag's name, a settings gear (for tags that
 * take a parameter), and a remove button, instead of the raw "{{tag}}"
 * text. The field's own existing setting stores the token directly - no
 * new block settings are added.
 *
 * @param {Object}   props
 * @param {string}   props.label           Field label, e.g. "Image" or "Button Link".
 * @param {string}   props.value           The field's current raw value.
 * @param {Function} props.onChange        Called with the new value - "" clears it back
 *   to a plain value, or pass a "{{tag}}" / "{{tag:param}}" token.
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
