import { __, sprintf } from '@wordpress/i18n';
import { registerPlugin } from '@wordpress/plugins';
import { Modal, Button } from '@wordpress/components';
import { useSelect, useDispatch, select as selectData } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data';
import { useEffect, useState } from '@wordpress/element';

const TEMPLATE_POST_TYPE = window.bpafbTemplateBuilder?.postType || 'blockive_template';

/**
 * Same publish-button interception selector the free plugin's own
 * save-conflict-guard.js uses for the "single" kind - covers both the
 * pre-publish flyout's Publish button and the Update button shown once a
 * template is already published.
 */
const PUBLISH_BUTTON_SELECTOR = '.editor-post-publish-button__button';

const getRecordTitle = ( record ) => {
	if ( ! record ) {
		return '';
	}
	if ( typeof record.title === 'string' ) {
		return record.title;
	}
	return record.title?.rendered || record.title?.raw || '';
};

/**
 * Whether two condition-rule arrays share at least one identical
 * {type, value} rule - the same "exact match" standard the free plugin's
 * own guard uses (same target post type + same "all" scope), rather than
 * attempting general overlap detection between differently-specific rules
 * (e.g. "Entire Site" technically overlaps every other rule; that's a much
 * fuzzier problem than this MVP needs to solve to catch the common
 * "I made two Header templates for the whole site" mistake).
 *
 * @param {Array} rulesA
 * @param {Array} rulesB
 * @return {boolean}
 */
function rulesOverlap( rulesA, rulesB ) {
	return rulesA.some( ( a ) =>
		rulesB.some( ( b ) => a.type === b.type && ( a.value || '' ) === ( b.value || '' ) )
	);
}

/**
 * Warns before publishing a Header/Footer/Archive/Search/404/Popup/Loop
 * Item-kind template if another published template of the same kind
 * shares an identical condition rule, and offers to move the other one to
 * Draft - the equivalent of the free plugin's save-conflict-guard.js for
 * the "single" kind, which only ever checks that one case.
 */
const KindConflictGuard = () => {
	const [ meta ] = useEntityProp( 'postType', TEMPLATE_POST_TYPE, 'meta' );
	const { editPost, savePost } = useDispatch( 'core/editor' );
	const { saveEntityRecord } = useDispatch( 'core' );

	const [ isConfirmOpen, setIsConfirmOpen ] = useState( false );
	const [ isSaving, setIsSaving ] = useState( false );

	const currentPostId = useSelect( ( select ) => select( 'core/editor' ).getCurrentPostId(), [] );
	const kind = meta?._bpafb_template_kind || 'single';
	const rules = Array.isArray( meta?._bpafb_display_condition_rules ) ? meta._bpafb_display_condition_rules : [];

	const conflictingTemplate = useSelect(
		( select ) => {
			// "single" is the free plugin's own concept, already covered by
			// its save-conflict-guard.js - this guard only covers the kinds
			// Pro adds on top of it.
			if ( 'single' === kind || 0 === rules.length ) {
				return null;
			}
			const records = select( 'core' ).getEntityRecords( 'postType', TEMPLATE_POST_TYPE, {
				status: 'publish',
				per_page: -1,
				exclude: [ currentPostId ],
				context: 'view',
			} );
			if ( ! records ) {
				return null;
			}
			return (
				records.find( ( record ) => {
					const otherKind = record.meta?._bpafb_template_kind || 'single';
					const otherRules = Array.isArray( record.meta?._bpafb_display_condition_rules )
						? record.meta._bpafb_display_condition_rules
						: [];
					return otherKind === kind && rulesOverlap( rules, otherRules );
				} ) || null
			);
		},
		[ kind, rules, currentPostId ]
	);

	useEffect( () => {
		const handleClick = ( event ) => {
			if ( ! conflictingTemplate ) {
				return;
			}
			if ( ! event.target.closest( PUBLISH_BUTTON_SELECTOR ) ) {
				return;
			}
			event.preventDefault();
			event.stopImmediatePropagation();
			setIsConfirmOpen( true );
		};

		document.addEventListener( 'click', handleClick, true );
		return () => document.removeEventListener( 'click', handleClick, true );
	}, [ conflictingTemplate ] );

	if ( ! isConfirmOpen ) {
		return null;
	}

	const handleDismiss = () => {
		if ( isSaving ) {
			return;
		}
		setIsConfirmOpen( false );
	};

	// Unlike the free plugin's save-conflict-guard.js (whose "Cancel" just
	// closes the modal - there, keeping both templates active for the same
	// post type/scope is treated as a mistake, not a real option), Pro's
	// rule-based conditions can legitimately overlap on purpose, so both
	// buttons here actually publish - they only differ on whether the other
	// template also gets demoted to Draft.
	const publish = async () => {
		setIsSaving( true );
		try {
			await editPost( { status: 'publish' } );
			await savePost();
			return selectData( 'core/editor' ).didPostSaveRequestSucceed();
		} finally {
			setIsSaving( false );
		}
	};

	const handleKeepBoth = async () => {
		await publish();
		setIsConfirmOpen( false );
	};

	const handleConfirm = async () => {
		const saveSucceeded = await publish();
		if ( saveSucceeded && conflictingTemplate ) {
			await saveEntityRecord( 'postType', TEMPLATE_POST_TYPE, {
				id: conflictingTemplate.id,
				status: 'draft',
			} );
		}
		setIsConfirmOpen( false );
	};

	return (
		<Modal
			title={ __( 'Overlapping template?', 'blockive-premium-addon-for-block-pro' ) }
			onRequestClose={ handleDismiss }
			className="bpafb-pro-kind-conflict-modal"
		>
			<p>
				{ sprintf(
					/* translators: 1: template kind, e.g. "header". 2: title of the existing conflicting template. */
					__(
						'Another published template ("%2$s") already matches an identical condition for this "%1$s" location. Only one will actually apply on the frontend - decided by priority - so having both published can be confusing. If you\'d rather have just this one, move "%2$s" to Draft when you publish.',
						'blockive-premium-addon-for-block-pro'
					),
					kind,
					getRecordTitle( conflictingTemplate )
				) }
			</p>
			<div className="bpafb-pro-kind-conflict-modal__actions">
				<Button variant="tertiary" onClick={ handleDismiss } disabled={ isSaving }>
					{ __( 'Cancel', 'blockive-premium-addon-for-block-pro' ) }
				</Button>
				<Button variant="secondary" onClick={ handleKeepBoth } isBusy={ isSaving } disabled={ isSaving }>
					{ __( 'Publish, Keep Both', 'blockive-premium-addon-for-block-pro' ) }
				</Button>
				<Button variant="primary" onClick={ handleConfirm } isBusy={ isSaving } disabled={ isSaving }>
					{ __( 'Publish & Move Other to Draft', 'blockive-premium-addon-for-block-pro' ) }
				</Button>
			</div>
		</Modal>
	);
};

export default function registerKindConflictGuard() {
	registerPlugin( 'bpafb-pro-kind-conflict-guard', {
		render: KindConflictGuard,
	} );
}
