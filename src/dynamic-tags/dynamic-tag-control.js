import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { PanelRow, SelectControl, TextControl, Button, BaseControl } from '@wordpress/components';

/**
 * Flattens the localized registry (see
 * Bpafb_Pro_Dynamic_Tags::enqueue_editor_assets()) into one option list for
 * a single SelectControl, since @wordpress/components' SelectControl has no
 * native option-group support.
 */
function flatTagOptions() {
	const registry = window.bpafbProDynamicTags?.registry || {};
	const options = [ { label: __( '— Select a tag —', 'blockive-premium-addon-for-block-pro' ), value: '' } ];

	Object.values( registry ).forEach( ( group ) => {
		group.tags.forEach( ( tag ) => {
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
 * Lets the user build a `{{tag}}` / `{{tag:param}}` token and insert it as
 * the current value of a text/URL attribute - see
 * Bpafb_Pro_Dynamic_Tags::resolve_string() for how it's resolved on the
 * frontend. Deliberately replaces the whole field rather than inserting at
 * a cursor position (no rich-text/cursor API to hook for a plain string
 * attribute) - predictable and simple to undo (just retype static text)
 * for this MVP.
 *
 * @param {Object}   props
 * @param {string}   props.label       Field label, e.g. "Content" or "URL".
 * @param {Function} props.onInsert    Called with the built token string.
 * @param {string}   [props.initialTag]   Tag key to preselect - the field/
 *   block's already-saved tag, if any, so reopening it shows what's
 *   actually selected instead of resetting to "— Select a tag —" every time.
 * @param {string}   [props.initialParam] Param to preselect alongside initialTag.
 */
export default function DynamicTagControl( { label, onInsert, initialTag = '', initialParam = '' } ) {
	const [ tagKey, setTagKey ] = useState( initialTag );
	const [ param, setParam ] = useState( initialParam );

	const tag = tagKey ? findTag( tagKey ) : null;

	return (
		<BaseControl className="bpafb-pro-dynamic-tag-control">
			<PanelRow>
				<SelectControl
					label={ label }
					value={ tagKey }
					options={ flatTagOptions() }
					onChange={ ( value ) => {
						setTagKey( value );
						setParam( '' );
					} }
				/>
			</PanelRow>

			{ tag?.hasParam && (
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
