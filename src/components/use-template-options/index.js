import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';

/**
 * Fetches every published `blockive_template` of one Template Kind
 * (`_bpafb_template_kind` meta), as a `{label,value}` options list ready
 * for a `SelectControl`, with a leading placeholder option (`value: 0`).
 * Shared by every block that lets an item pick a Blockive Template of a
 * specific kind: Mega Menu, Loop Grid, and Post Grid Pro's Loop Template
 * control.
 *
 * @param {string} kind             One of Bpafb_Pro_Template_Kinds::KINDS (PHP side).
 * @param {string} [placeholderLabel] Label for the `value: 0` option. Post
 *                                    Grid Pro has a real fallback layout for
 *                                    "none picked", so it passes its own
 *                                    wording instead of the default.
 * @return {Array<{label: string, value: number}>}
 */
export default function useTemplateOptions( kind, placeholderLabel ) {
	return useSelect(
		( select ) => {
			const records = select( 'core' ).getEntityRecords( 'postType', 'blockive_template', {
				status: 'publish',
				per_page: -1,
				context: 'view',
			} );

			const matching = ( records || [] ).filter(
				( record ) => record.meta?._bpafb_template_kind === kind
			);

			return [
				{ label: placeholderLabel || __( 'Select a template…', 'blockive-premium-addon-for-block-pro' ), value: 0 },
				...matching.map( ( record ) => ( {
					label: record.title?.rendered || `#${ record.id }`,
					value: record.id,
				} ) ),
			];
		},
		[ kind, placeholderLabel ]
	);
}
