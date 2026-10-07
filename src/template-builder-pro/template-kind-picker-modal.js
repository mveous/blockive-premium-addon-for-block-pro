import { __ } from '@wordpress/i18n';
import { registerPlugin } from '@wordpress/plugins';
import { Modal, Button, SelectControl, TextControl } from '@wordpress/components';
import { select as selectData } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data';
import { useState, useEffect } from '@wordpress/element';
import { getQueryArg } from '@wordpress/url';
import { KIND_OPTIONS, PLACED_BY_BLOCKS } from './template-kind-panel';

const TEMPLATE_POST_TYPE = window.bpafbTemplateBuilder?.postType || 'blockive_template';

// Blocks that already know which kind they need - Loop Grid, Mega Menu, the
// Template block, and so on - link to "+ Create a new … template" with this
// in the URL (see e.g. src/loop-grid/query-panels.js), so the kind is
// already decided and asking again here would just be a second, redundant
// prompt. An unrecognized or missing value falls back to the normal prompt.
const PRESET_KIND = ( () => {
	const raw = getQueryArg( window.location.href, 'bpafb_kind' );
	return typeof raw === 'string' && KIND_OPTIONS.some( ( option ) => option.value === raw ) ? raw : '';
} )();

// Every kind except "single" and the ones blocks place - same list, and
// same reason, as template-kind-panel.js's copy of this constant.
const KINDS_DEFAULTING_TO_ENTIRE_SITE = KIND_OPTIONS
	.map( ( option ) => option.value )
	.filter( ( value ) => 'single' !== value && ! ( value in PLACED_BY_BLOCKS ) );

// Short blurbs shown under the Template Type select, keyed by KIND_OPTIONS'
// own values.
const KIND_DESCRIPTIONS = {
	single: __( 'Overrides the layout of a single post, page, or other content type.', 'blockive-premium-addon-for-block-pro' ),
	header: __( 'Replaces the theme\'s header on the site.', 'blockive-premium-addon-for-block-pro' ),
	footer: __( 'Replaces the theme\'s footer on the site.', 'blockive-premium-addon-for-block-pro' ),
	archive: __( 'Replaces the layout of archive pages, like category or tag listings.', 'blockive-premium-addon-for-block-pro' ),
	search: __( 'Replaces the layout of the search results page.', 'blockive-premium-addon-for-block-pro' ),
	'404': __( 'Replaces the layout of the 404 (page not found) screen.', 'blockive-premium-addon-for-block-pro' ),
	popup: __( 'Shows as an on-page popup, triggered by a scroll, click, exit intent, and more.', 'blockive-premium-addon-for-block-pro' ),
	'loop-item': __( 'Used by the Loop Grid and Loop Carousel blocks to show each item.', 'blockive-premium-addon-for-block-pro' ),
	'mega-menu-item': __( 'Used by the Mega Menu block as a dropdown panel.', 'blockive-premium-addon-for-block-pro' ),
	section: __( 'A reusable section placed on any page with the Template block.', 'blockive-premium-addon-for-block-pro' ),
};

/**
 * Asks for a name and which kind of template is being made (Header, Footer,
 * Popup, Single Post/Page, and so on) as soon as a brand-new Blockive
 * Template is opened, instead of leaving it untitled and defaulted to
 * "Single Post/Page" until the user happens to notice the sidebar panel.
 * Both fields are kept in local state, not written to the title / meta
 * directly, until "Create Template" is pressed - so Skip or closing the
 * modal (the X button, Escape, or clicking outside if that's ever enabled)
 * leaves the new template exactly as it was, with nothing typed here saved.
 *
 * Whether the modal should open at all is decided once, from a plain
 * `select()` read at mount, rather than a `useSelect()` subscription -
 * writing the staged values on Create edits the post, which would
 * immediately flip `isCleanNewPost()` to false if that read stayed reactive,
 * closing the modal (or worse, reopening it) out from under the user.
 *
 * When a preset kind arrived via `?bpafb_kind=`, the modal never opens; the
 * effect below applies that kind on its own the same way "Create Template"
 * would, so the new template still ends up configured correctly.
 */
const TemplateKindPickerModal = () => {
	const [ isOpen ] = useState( () => {
		if ( PRESET_KIND ) {
			return false;
		}
		const editor = selectData( 'core/editor' );
		return editor.getCurrentPostType() === TEMPLATE_POST_TYPE && editor.isCleanNewPost();
	} );
	const [ isDismissed, setIsDismissed ] = useState( false );

	const [ title, setTitle ] = useState( '' );
	const [ kind, setKind ] = useState( 'single' );

	const [ , setEntityTitle ] = useEntityProp( 'postType', TEMPLATE_POST_TYPE, 'title' );
	const [ meta, setMeta ] = useEntityProp( 'postType', TEMPLATE_POST_TYPE, 'meta' );

	useEffect( () => {
		if ( ! PRESET_KIND ) {
			return;
		}
		const editor = selectData( 'core/editor' );
		if ( editor.getCurrentPostType() === TEMPLATE_POST_TYPE && editor.isCleanNewPost() ) {
			setMeta( {
				...meta,
				_bpafb_template_kind: PRESET_KIND,
				...( KINDS_DEFAULTING_TO_ENTIRE_SITE.includes( PRESET_KIND )
					? { _bpafb_display_condition_rules: [ { type: 'entire_site', value: '' } ] }
					: {} ),
			} );
		}
		// Runs once, right after the new template's entity data is ready -
		// see the note above on why this can't depend on a reactive selector.
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [] );

	if ( ! isOpen || isDismissed ) {
		return null;
	}

	const handleCreate = () => {
		setEntityTitle( title );
		setMeta( {
			...meta,
			_bpafb_template_kind: kind,
			...( KINDS_DEFAULTING_TO_ENTIRE_SITE.includes( kind )
				? { _bpafb_display_condition_rules: [ { type: 'entire_site', value: '' } ] }
				: {} ),
		} );
		setIsDismissed( true );
	};

	return (
		<Modal
			title={ __( 'Create a New Template', 'blockive-premium-addon-for-block-pro' ) }
			onRequestClose={ () => setIsDismissed( true ) }
			className="bpafb-pro-template-kind-picker-modal"
			shouldCloseOnClickOutside={ false }
		>
			<TextControl
				label={ __( 'Template Name', 'blockive-premium-addon-for-block-pro' ) }
				value={ title }
				onChange={ setTitle }
				placeholder={ __( 'E.g. Main Header', 'blockive-premium-addon-for-block-pro' ) }
			/>
			<SelectControl
				label={ __( 'Template Type', 'blockive-premium-addon-for-block-pro' ) }
				value={ kind }
				options={ KIND_OPTIONS }
				help={ KIND_DESCRIPTIONS[ kind ] }
				onChange={ setKind }
			/>
			<div className="bpafb-pro-template-kind-picker-modal__actions">
				<Button variant="tertiary" onClick={ () => setIsDismissed( true ) }>
					{ __( 'Skip', 'blockive-premium-addon-for-block-pro' ) }
				</Button>
				<Button variant="primary" onClick={ handleCreate } disabled={ ! title.trim() }>
					{ __( 'Create Template', 'blockive-premium-addon-for-block-pro' ) }
				</Button>
			</div>
		</Modal>
	);
};

export default function registerTemplateKindPickerModal() {
	registerPlugin( 'bpafb-pro-template-kind-picker', {
		render: TemplateKindPickerModal,
	} );
}
