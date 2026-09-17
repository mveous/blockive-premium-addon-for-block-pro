import { __, sprintf } from '@wordpress/i18n';
import { registerPlugin } from '@wordpress/plugins';
import { PluginDocumentSettingPanel } from '@wordpress/editor';
import { PanelRow, SelectControl, TextControl, Button, Flex, FlexBlock, FlexItem, ComboboxControl, ToggleControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data';
import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';
import { usePostTypeOptions, isFreePostType } from '../template-builder/template-settings-panel';

const TEMPLATE_POST_TYPE = window.bpafbTemplateBuilder?.postType || 'blockive_template';

// Localized from Bpafb_Template_Builder::get_post_type_singular_names() -
// core's own `/wp/v2/types` REST response only has the plural `name`, not
// `labels.singular_name`, so "All Products" / "Specific Product"-style
// wording (matching Elementor's own Singular > [Post Type] > All/Specific
// condition wording) needs this separately localized map.
const POST_TYPE_SINGULAR_NAMES = window.bpafbTemplateBuilder?.postTypeSingularNames || {};

const KIND_OPTIONS = [
	{ label: __( 'Single Post/Page', 'blockive-premium-addon-for-block-pro' ), value: 'single' },
	{ label: __( 'Header', 'blockive-premium-addon-for-block-pro' ), value: 'header' },
	{ label: __( 'Footer', 'blockive-premium-addon-for-block-pro' ), value: 'footer' },
	{ label: __( 'Archive', 'blockive-premium-addon-for-block-pro' ), value: 'archive' },
	{ label: __( 'Search Results', 'blockive-premium-addon-for-block-pro' ), value: 'search' },
	{ label: __( '404 Page', 'blockive-premium-addon-for-block-pro' ), value: '404' },
	{ label: __( 'Popup', 'blockive-premium-addon-for-block-pro' ), value: 'popup' },
	{ label: __( 'Loop Item', 'blockive-premium-addon-for-block-pro' ), value: 'loop-item' },
];

// Rule types that need a value picked by the user; the rest (entire_site,
// date_archive, search, 404, logged_in, logged_out) are self-contained.
const RULE_TYPES_WITH_VALUE = [ 'post_type_archive', 'taxonomy_archive', 'author_archive', 'user_role', 'singular' ];

const ROLE_OPTIONS = [
	{ label: __( 'Administrator', 'blockive-premium-addon-for-block-pro' ), value: 'administrator' },
	{ label: __( 'Editor', 'blockive-premium-addon-for-block-pro' ), value: 'editor' },
	{ label: __( 'Author', 'blockive-premium-addon-for-block-pro' ), value: 'author' },
	{ label: __( 'Contributor', 'blockive-premium-addon-for-block-pro' ), value: 'contributor' },
	{ label: __( 'Subscriber', 'blockive-premium-addon-for-block-pro' ), value: 'subscriber' },
	{ label: __( 'Customer (WooCommerce)', 'blockive-premium-addon-for-block-pro' ), value: 'customer' },
	{ label: __( 'Shop Manager (WooCommerce)', 'blockive-premium-addon-for-block-pro' ), value: 'shop_manager' },
];

/**
 * The general (non-"single") Display Conditions rule set - "Singular" here
 * opens into its own Post Type + All/Specific nesting (see
 * SingularConditionFields) rather than being a flat "one specific post"
 * picker, matching Elementor's own Singular > [Post Type] > All/Specific
 * condition tree.
 */
function ruleTypeOptions() {
	return [
		{ label: __( 'Entire Site', 'blockive-premium-addon-for-block-pro' ), value: 'entire_site' },
		{ label: __( 'Singular', 'blockive-premium-addon-for-block-pro' ), value: 'singular' },
		{ label: __( 'Post Type Archive', 'blockive-premium-addon-for-block-pro' ), value: 'post_type_archive' },
		{ label: __( 'Taxonomy Archive', 'blockive-premium-addon-for-block-pro' ), value: 'taxonomy_archive' },
		{ label: __( 'Author Archive', 'blockive-premium-addon-for-block-pro' ), value: 'author_archive' },
		{ label: __( 'Date Archive', 'blockive-premium-addon-for-block-pro' ), value: 'date_archive' },
		{ label: __( 'Search Results', 'blockive-premium-addon-for-block-pro' ), value: 'search' },
		{ label: __( '404 Page', 'blockive-premium-addon-for-block-pro' ), value: '404' },
		{ label: __( 'User Role', 'blockive-premium-addon-for-block-pro' ), value: 'user_role' },
		{ label: __( 'Logged In', 'blockive-premium-addon-for-block-pro' ), value: 'logged_in' },
		{ label: __( 'Logged Out', 'blockive-premium-addon-for-block-pro' ), value: 'logged_out' },
	];
}

const TRIGGER_TYPE_OPTIONS = [
	{ label: __( 'Page Load (delay)', 'blockive-premium-addon-for-block-pro' ), value: 'page_load' },
	{ label: __( 'Scroll Percentage', 'blockive-premium-addon-for-block-pro' ), value: 'scroll' },
	{ label: __( 'Click (element selector)', 'blockive-premium-addon-for-block-pro' ), value: 'click' },
	{ label: __( 'Exit Intent', 'blockive-premium-addon-for-block-pro' ), value: 'exit_intent' },
];

const FREQUENCY_OPTIONS = [
	{ label: __( 'Every page load', 'blockive-premium-addon-for-block-pro' ), value: 'always' },
	{ label: __( 'Once per session', 'blockive-premium-addon-for-block-pro' ), value: 'session' },
	{ label: __( 'Once every N days', 'blockive-premium-addon-for-block-pro' ), value: 'days' },
];

const PopupSettings = ( { meta, setMeta } ) => {
	const triggerType = meta?._bpafb_popup_trigger_type || 'page_load';
	const triggerValue = meta?._bpafb_popup_trigger_value ?? '3000';
	const frequency = meta?._bpafb_popup_frequency || 'session';
	const frequencyDays = meta?._bpafb_popup_frequency_days ?? 1;

	return (
		<>
			<PanelRow>
				<SelectControl
					label={ __( 'Trigger', 'blockive-premium-addon-for-block-pro' ) }
					value={ triggerType }
					options={ TRIGGER_TYPE_OPTIONS }
					onChange={ ( value ) => {
						const defaults = { page_load: '3000', scroll: '50', click: '', exit_intent: '' };
						setMeta( { ...meta, _bpafb_popup_trigger_type: value, _bpafb_popup_trigger_value: defaults[ value ] ?? '' } );
					} }
				/>
			</PanelRow>

			{ 'page_load' === triggerType && (
				<PanelRow>
					<TextControl
						type="number"
						label={ __( 'Delay (milliseconds)', 'blockive-premium-addon-for-block-pro' ) }
						value={ triggerValue }
						onChange={ ( value ) => setMeta( { ...meta, _bpafb_popup_trigger_value: value } ) }
					/>
				</PanelRow>
			) }

			{ 'scroll' === triggerType && (
				<PanelRow>
					<TextControl
						type="number"
						label={ __( 'Scrolled down (%)', 'blockive-premium-addon-for-block-pro' ) }
						value={ triggerValue }
						onChange={ ( value ) => setMeta( { ...meta, _bpafb_popup_trigger_value: value } ) }
					/>
				</PanelRow>
			) }

			{ 'click' === triggerType && (
				<PanelRow>
					<TextControl
						label={ __( 'CSS selector', 'blockive-premium-addon-for-block-pro' ) }
						help={ __( 'Any element matching this selector opens the popup when clicked. Leave blank to use [data-bpafb-popup-trigger].', 'blockive-premium-addon-for-block-pro' ) }
						value={ triggerValue }
						onChange={ ( value ) => setMeta( { ...meta, _bpafb_popup_trigger_value: value } ) }
					/>
				</PanelRow>
			) }

			<PanelRow>
				<SelectControl
					label={ __( 'Frequency', 'blockive-premium-addon-for-block-pro' ) }
					help={ __( 'How often the same visitor sees this popup again after closing it.', 'blockive-premium-addon-for-block-pro' ) }
					value={ frequency }
					options={ FREQUENCY_OPTIONS }
					onChange={ ( value ) => setMeta( { ...meta, _bpafb_popup_frequency: value } ) }
				/>
			</PanelRow>

			{ 'days' === frequency && (
				<PanelRow>
					<TextControl
						type="number"
						label={ __( 'Days', 'blockive-premium-addon-for-block-pro' ) }
						value={ frequencyDays }
						onChange={ ( value ) => setMeta( { ...meta, _bpafb_popup_frequency_days: Number( value ) || 1 } ) }
					/>
				</PanelRow>
			) }
		</>
	);
};

/**
 * Searchable post/page picker for the "singular" rule type, backed by
 * WordPress core's own aggregated `/wp/v2/search` endpoint (the same one
 * Gutenberg's own link-insertion UI uses) rather than a single post type's
 * entity-records query, since a "specific post/page" condition should
 * generally be able to target any searchable content, not just one post
 * type at a time. An optional `postType` prop narrows the search results to
 * one post type via the endpoint's own `subtype` param - used only by the
 * Single Post/Page Display Conditions adapter, where the legacy
 * `_bpafb_display_condition_ids` meta is documented as "IDs of the
 * template's own Post Type", so the picker shouldn't offer unrelated types.
 */
const SingularPicker = ( { value, onChange, postType } ) => {
	const [ options, setOptions ] = useState( [] );

	useEffect( () => {
		let cancelled = false;
		apiFetch( { path: addQueryArgs( '/wp/v2/search', { search: '', per_page: 20, ...( postType ? { subtype: postType } : {} ) } ) } )
			.then( ( results ) => {
				if ( cancelled ) return;
				setOptions( ( results || [] ).map( ( r ) => ( { value: String( r.id ), label: `${ r.title } (${ r.subtype || r.type })` } ) ) );
			} )
			.catch( () => {} );
		return () => {
			cancelled = true;
		};
	}, [ postType ] );

	const handleFilterChange = ( search ) => {
		apiFetch( { path: addQueryArgs( '/wp/v2/search', { search, per_page: 20, ...( postType ? { subtype: postType } : {} ) } ) } )
			.then( ( results ) => {
				setOptions( ( results || [] ).map( ( r ) => ( { value: String( r.id ), label: `${ r.title } (${ r.subtype || r.type })` } ) ) );
			} )
			.catch( () => {} );
	};

	// A saved rule's target might not appear in the default (unsearched)
	// results list - e.g. it's older than the 20 most recent items. Resolve
	// its real title directly by ID (unrestricted by `postType`, so a
	// mismatch still shows the real title instead of a wrong "not found")
	// so re-opening a template never shows a bare "#id" instead of the
	// actual post/page name.
	useEffect( () => {
		if ( ! value || options.some( ( option ) => option.value === value ) ) {
			return;
		}
		let cancelled = false;
		apiFetch( { path: addQueryArgs( '/wp/v2/search', { include: [ value ], per_page: 1 } ) } )
			.then( ( results ) => {
				if ( cancelled || ! results?.length ) return;
				const r = results[ 0 ];
				setOptions( ( current ) =>
					current.some( ( option ) => option.value === String( r.id ) )
						? current
						: [ { value: String( r.id ), label: `${ r.title } (${ r.subtype || r.type })` }, ...current ]
				);
			} )
			.catch( () => {} );
		return () => {
			cancelled = true;
		};
	}, [ value ] );

	// Still fall back to a plain "#id" label while the by-ID lookup above is
	// in flight (or if it fails), rather than losing the selection entirely.
	const knownOptions = value && ! options.some( ( option ) => option.value === value )
		? [ { value, label: `#${ value }` }, ...options ]
		: options;

	return (
		<ComboboxControl
			label={ __( 'Post/Page', 'blockive-premium-addon-for-block-pro' ) }
			value={ value || '' }
			options={ knownOptions }
			onFilterValueChange={ handleFilterChange }
			onChange={ ( newValue ) => onChange( newValue || '' ) }
		/>
	);
};

/**
 * The general Display Conditions list's "Singular" rule, nested the same way
 * Elementor's own Singular condition is: pick a Post Type ("Any Post Type"
 * matches any singular content regardless of type), then whether it applies
 * to All of that type or one Specific item. Local `mode` state tracks the
 * user's All/Specific choice independently of `rule.value` being empty,
 * since "Specific, no post chosen yet" and "All" are otherwise
 * indistinguishable from the rule data alone.
 */
const SingularConditionFields = ( { rule, onChange } ) => {
	const postTypes = useSelect(
		( select ) =>
			select( 'core' )
				.getPostTypes( { per_page: -1 } )
				?.filter( ( pt ) => pt.viewable ) || [],
		[]
	);

	const postType = rule.postType || '';
	const [ mode, setMode ] = useState( () => ( rule.value ? 'specific' : 'all' ) );

	const currentPostType = postTypes.find( ( pt ) => pt.slug === postType );
	const pluralLabel = currentPostType?.name || __( 'Post Types', 'blockive-premium-addon-for-block-pro' );
	const singularLabel = POST_TYPE_SINGULAR_NAMES[ postType ] || pluralLabel;

	return (
		<>
			<SelectControl
				label={ __( 'Post Type', 'blockive-premium-addon-for-block-pro' ) }
				value={ postType }
				options={ [
					{ label: __( 'Any Post Type', 'blockive-premium-addon-for-block-pro' ), value: '' },
					...postTypes.map( ( pt ) => ( { label: pt.name, value: pt.slug } ) ),
				] }
				onChange={ ( value ) => {
					setMode( 'all' );
					onChange( { ...rule, postType: value, value: '' } );
				} }
			/>
			<SelectControl
				label={ __( 'Which', 'blockive-premium-addon-for-block-pro' ) }
				value={ mode }
				options={ [
					{
						label: postType
							? sprintf( /* translators: %s: post type plural name, e.g. "Products". */ __( 'All %s', 'blockive-premium-addon-for-block-pro' ), pluralLabel )
							: __( 'All Singular', 'blockive-premium-addon-for-block-pro' ),
						value: 'all',
					},
					{
						label: postType
							? sprintf( /* translators: %s: post type singular name, e.g. "Product". */ __( 'Specific %s', 'blockive-premium-addon-for-block-pro' ), singularLabel )
							: __( 'Specific Post/Page', 'blockive-premium-addon-for-block-pro' ),
						value: 'specific',
					},
				] }
				onChange={ ( value ) => {
					setMode( value );
					if ( 'all' === value ) {
						onChange( { ...rule, value: '' } );
					}
				} }
			/>
			{ 'specific' === mode && (
				<SingularPicker value={ rule.value || '' } onChange={ ( value ) => onChange( { ...rule, value } ) } postType={ postType || undefined } />
			) }
		</>
	);
};

const RuleValueField = ( { rule, onChange } ) => {
	const postTypes = useSelect(
		( select ) =>
			select( 'core' )
				.getPostTypes( { per_page: -1 } )
				?.filter( ( pt ) => pt.viewable ) || [],
		[]
	);

	if ( 'singular' === rule.type ) {
		return <SingularConditionFields rule={ rule } onChange={ onChange } />;
	}

	if ( 'post_type_archive' === rule.type ) {
		return (
			<SelectControl
				label={ __( 'Post type', 'blockive-premium-addon-for-block-pro' ) }
				value={ rule.value || '' }
				options={ [
					{ label: __( '— Select —', 'blockive-premium-addon-for-block-pro' ), value: '' },
					...postTypes.map( ( pt ) => ( { label: pt.name, value: pt.slug } ) ),
				] }
				onChange={ onChange }
			/>
		);
	}

	if ( 'user_role' === rule.type ) {
		return (
			<SelectControl
				label={ __( 'Role', 'blockive-premium-addon-for-block-pro' ) }
				value={ rule.value || '' }
				options={ [ { label: __( '— Select —', 'blockive-premium-addon-for-block-pro' ), value: '' }, ...ROLE_OPTIONS ] }
				onChange={ onChange }
			/>
		);
	}

	if ( 'taxonomy_archive' === rule.type ) {
		return (
			<TextControl
				label={ __( 'Taxonomy (or taxonomy:term_id)', 'blockive-premium-addon-for-block-pro' ) }
				help={ __( 'e.g. "category" for any category archive, or "category:12" for one specific term.', 'blockive-premium-addon-for-block-pro' ) }
				value={ rule.value || '' }
				onChange={ onChange }
			/>
		);
	}

	if ( 'author_archive' === rule.type ) {
		return (
			<TextControl
				label={ __( 'Author username (blank = any author)', 'blockive-premium-addon-for-block-pro' ) }
				value={ rule.value || '' }
				onChange={ onChange }
			/>
		);
	}

	return null;
};

const TemplateKindPanel = () => {
	const [ meta, setMeta ] = useEntityProp( 'postType', TEMPLATE_POST_TYPE, 'meta' );

	const kind = meta?._bpafb_template_kind || 'single';
	const isSingle = 'single' === kind;

	const templateType = meta?._bpafb_template_type || 'post';
	const postTypeOptions = usePostTypeOptions();

	// Elementor labels this exact choice "All Products" / "Specific Product"
	// once you've picked "Product" as the singular document type - since
	// Single Post/Page's Post Type is already fixed above, the condition
	// row's two options are relabeled the same way instead of the generic
	// "Entire Site" / "Specific Post/Page" wording the general rule list uses.
	const templateTypeObject = useSelect( ( select ) => select( 'core' ).getPostType( templateType ), [ templateType ] );
	const templateTypePluralLabel = templateTypeObject?.name || templateType;
	const templateTypeSingularLabel = POST_TYPE_SINGULAR_NAMES[ templateType ] || templateTypePluralLabel;

	const rules = Array.isArray( meta?._bpafb_display_condition_rules ) ? meta._bpafb_display_condition_rules : [];
	const setRules = ( nextRules ) => setMeta( { ...meta, _bpafb_display_condition_rules: nextRules } );

	const updateRule = ( index, patch ) => {
		const next = rules.slice();
		next[ index ] = { ...next[ index ], ...patch };
		setRules( next );
	};

	const removeRule = ( index ) => {
		setRules( rules.filter( ( _, i ) => i !== index ) );
	};

	const addRule = () => {
		setRules( [ ...rules, { type: 'entire_site', value: '' } ] );
	};

	// Single Post/Page has only ever had one condition value in the legacy
	// data model (Bpafb_Template_Display_Conditions): "all" of its Post Type,
	// or a list of specific IDs. This adapter presents that exact same model
	// through the same Condition-row UI every other kind uses, reading/
	// writing the legacy meta instead of _bpafb_display_condition_rules so
	// the free plugin's resolver keeps working completely unchanged.
	const scope = meta?._bpafb_display_condition_scope || 'all';
	const conditionIds = Array.isArray( meta?._bpafb_display_condition_ids ) ? meta._bpafb_display_condition_ids : [];
	const singleRule = {
		type: 'specific' === scope ? 'singular' : 'entire_site',
		value: conditionIds[ 0 ] != null ? String( conditionIds[ 0 ] ) : '',
	};
	const updateSingleRule = ( patch ) => {
		const next = { ...singleRule, ...patch };
		if ( 'singular' === next.type ) {
			setMeta( {
				...meta,
				_bpafb_display_condition_scope: 'specific',
				_bpafb_display_condition_ids: next.value ? [ Number( next.value ) ] : [],
			} );
		} else {
			setMeta( { ...meta, _bpafb_display_condition_scope: 'all', _bpafb_display_condition_ids: [] } );
		}
	};

	const priority = Number.isFinite( meta?._bpafb_template_priority ) ? meta._bpafb_template_priority : 10;

	return (
		<>
			<PluginDocumentSettingPanel
				name="bpafb-pro-template-type"
				title={ __( 'Template Type', 'blockive-premium-addon-for-block-pro' ) }
				className="bpafb-pro-template-type-panel"
			>
				<PanelRow>
					<SelectControl
						label={ __( 'Template Type', 'blockive-premium-addon-for-block-pro' ) }
						value={ kind }
						options={ KIND_OPTIONS }
						onChange={ ( value ) => setMeta( { ...meta, _bpafb_template_kind: value } ) }
					/>
				</PanelRow>

				{ isSingle && (
					<PanelRow>
						<SelectControl
							label={ __( 'Post Type', 'blockive-premium-addon-for-block-pro' ) }
							help={ __( 'Which post type this template overrides the content of. Template Blocks use it to source live preview data.', 'blockive-premium-addon-for-block-pro' ) }
							value={ templateType }
							options={ postTypeOptions }
							onChange={ ( value ) => {
								if ( ! isFreePostType( value ) ) {
									return;
								}
								setMeta( { ...meta, _bpafb_template_type: value } );
							} }
						/>
					</PanelRow>
				) }
			</PluginDocumentSettingPanel>

			<PluginDocumentSettingPanel
				name="bpafb-pro-display-conditions"
				title={ __( 'Display Conditions', 'blockive-premium-addon-for-block-pro' ) }
				className="bpafb-pro-display-conditions-panel"
			>
				{ isSingle ? (
					<PanelRow>
						<Flex align="flex-end">
							<FlexBlock>
								<SelectControl
									label={ __( 'Condition', 'blockive-premium-addon-for-block-pro' ) }
									value={ singleRule.type }
									options={ [
										{
											label: sprintf( /* translators: %s: post type plural name, e.g. "Products". */ __( 'All %s', 'blockive-premium-addon-for-block-pro' ), templateTypePluralLabel ),
											value: 'entire_site',
										},
										{
											label: sprintf( /* translators: %s: post type singular name, e.g. "Product". */ __( 'Specific %s', 'blockive-premium-addon-for-block-pro' ), templateTypeSingularLabel ),
											value: 'singular',
										},
									] }
									onChange={ ( value ) => updateSingleRule( { type: value, value: '' } ) }
								/>
								{ 'singular' === singleRule.type && (
									<SingularPicker value={ singleRule.value } onChange={ ( value ) => updateSingleRule( { value } ) } postType={ templateType } />
								) }
							</FlexBlock>
						</Flex>
					</PanelRow>
				) : (
					<>
						{ rules.map( ( rule, index ) => (
							<PanelRow key={ index }>
								<Flex align="flex-end">
									<FlexBlock>
										<SelectControl
											label={ __( 'Condition', 'blockive-premium-addon-for-block-pro' ) }
											value={ rule.type }
											options={ ruleTypeOptions() }
											onChange={ ( value ) => updateRule( index, { type: value, value: '', postType: '' } ) }
										/>
										{ RULE_TYPES_WITH_VALUE.includes( rule.type ) && (
											<RuleValueField
												rule={ rule }
												onChange={ ( valueOrPatch ) =>
													// SingularConditionFields (rendered for 'singular') needs to
													// update both `postType` and `value` together, so it passes
													// a full patch object; every other rule type's field just
													// passes the new bare value.
													updateRule( index, 'singular' === rule.type ? valueOrPatch : { value: valueOrPatch } )
												}
											/>
										) }
									</FlexBlock>
									<FlexItem>
										<Button icon="trash" label={ __( 'Remove condition', 'blockive-premium-addon-for-block-pro' ) } onClick={ () => removeRule( index ) } />
									</FlexItem>
								</Flex>
							</PanelRow>
						) ) }

						<PanelRow>
							<Button variant="secondary" onClick={ addRule }>
								{ __( '+ Add condition', 'blockive-premium-addon-for-block-pro' ) }
							</Button>
						</PanelRow>

						{ 0 === rules.length && (
							<PanelRow>
								<p className="bpafb-pro-no-conditions-notice">
									{ __( 'This template matches nowhere until you add at least one condition.', 'blockive-premium-addon-for-block-pro' ) }
								</p>
							</PanelRow>
						) }
					</>
				) }

				<PanelRow>
					<TextControl
						type="number"
						label={ __( 'Priority', 'blockive-premium-addon-for-block-pro' ) }
						help={ __( 'When more than one template matches equally specifically, the lower priority number wins.', 'blockive-premium-addon-for-block-pro' ) }
						value={ priority }
						onChange={ ( value ) => {
							const parsed = parseInt( value, 10 );
							setMeta( { ...meta, _bpafb_template_priority: Number.isNaN( parsed ) ? 10 : parsed } );
						} }
					/>
				</PanelRow>

				{ isSingle && (
					<>
						<PanelRow>
							<ToggleControl
								label={ __( 'Full width (no sidebar)', 'blockive-premium-addon-for-block-pro' ) }
								checked={ !! meta?._bpafb_full_width }
								onChange={ ( value ) => setMeta( { ...meta, _bpafb_full_width: value } ) }
							/>
						</PanelRow>

						<PanelRow>
							<ToggleControl
								label={ __( "Hide theme's post title", 'blockive-premium-addon-for-block-pro' ) }
								checked={ meta?._bpafb_hide_title !== false }
								onChange={ ( value ) => setMeta( { ...meta, _bpafb_hide_title: value } ) }
							/>
						</PanelRow>

						<PanelRow>
							<ToggleControl
								label={ __( "Hide theme's featured image", 'blockive-premium-addon-for-block-pro' ) }
								checked={ meta?._bpafb_hide_featured_image !== false }
								onChange={ ( value ) => setMeta( { ...meta, _bpafb_hide_featured_image: value } ) }
							/>
						</PanelRow>

						<PanelRow>
							<ToggleControl
								label={ __( 'Hide comments', 'blockive-premium-addon-for-block-pro' ) }
								checked={ !! meta?._bpafb_hide_comments }
								onChange={ ( value ) => setMeta( { ...meta, _bpafb_hide_comments: value } ) }
							/>
						</PanelRow>

						<PanelRow>
							<ToggleControl
								label={ __( 'Hide post navigation (previous/next)', 'blockive-premium-addon-for-block-pro' ) }
								checked={ !! meta?._bpafb_hide_post_nav }
								onChange={ ( value ) => setMeta( { ...meta, _bpafb_hide_post_nav: value } ) }
							/>
						</PanelRow>
					</>
				) }

				{ 'popup' === kind && <PopupSettings meta={ meta } setMeta={ setMeta } /> }
			</PluginDocumentSettingPanel>
		</>
	);
};

export default function registerTemplateKindPanel() {
	registerPlugin( 'bpafb-pro-template-kind', {
		render: TemplateKindPanel,
	} );
}
