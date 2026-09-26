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

// Sent from PHP by Bpafb_Template_Builder::get_post_type_singular_names().
// The `/wp/v2/types` REST response only has the plural `name`, not the
// singular one, so this separate list is needed for wording like "All
// Products" or "Specific Product".
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
	{ label: __( 'Mega Menu Item', 'blockive-premium-addon-for-block-pro' ), value: 'mega-menu-item' },
	{ label: __( 'Section (for the Template block)', 'blockive-premium-addon-for-block-pro' ), value: 'section' },
];

// Kinds that blocks place, not Display Conditions (see
// Bpafb_Pro_Template_Kinds::PLACED_BY_BLOCKS).
const PLACED_BY_BLOCKS = {
	'loop-item': __( 'Loop Grid and Loop Carousel blocks show this template for each item.', 'blockive-premium-addon-for-block-pro' ),
	'mega-menu-item': __( 'The Mega Menu block shows this template as a dropdown panel.', 'blockive-premium-addon-for-block-pro' ),
	section: __( 'Add a Template block to any page, post, or template and choose this section to show it there.', 'blockive-premium-addon-for-block-pro' ),
};

// Rule types where the user needs to pick a value. The others (entire_site,
// date_archive, search, 404, logged_in, logged_out) need nothing else.
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
 * The Display Conditions rule types for kinds other than "single".
 * "Singular" here opens its own Post Type, then All/Specific choice (see
 * SingularConditionFields), instead of being one flat "pick a post" field.
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
 * core's aggregated `/wp/v2/search` endpoint rather than a single post
 * type's entity-records query, since a "specific post/page" condition can
 * generally target any searchable content. An optional `postType` prop
 * narrows results to one type via the endpoint's own `subtype` param,
 * used only by the Single Post/Page Display Conditions adapter.
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

	// A saved rule's post might not be in the default results list (for
	// example, if it is older than the 20 newest items). This looks it up
	// directly by ID instead, so opening a saved template shows the real
	// post title, instead of a bare "#id".
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

	// Show a plain "#id" label while the lookup above is still running (or
	// if it fails), instead of losing the selection completely.
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
 * The Display Conditions "Singular" rule: first pick a Post Type ("Any
 * Post Type" matches any single content), then choose whether it applies
 * to All of that type or one Specific item. The local `mode` value tracks
 * the All/Specific choice on its own, apart from `rule.value` being empty,
 * since "Specific, but no post picked yet" and "All" would otherwise look
 * the same in the saved data.
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

	// Since Single Post/Page's own Post Type is already fixed above, this
	// row's two options are relabeled to match it (like "All Products" /
	// "Specific Product"), instead of using the generic "Entire Site" /
	// "Specific Post/Page" wording the general rule list uses.
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

	// Single Post/Page has always stored just one condition value, in the
	// free plugin's own older data format (Bpafb_Template_Display_Conditions):
	// either "all" of its Post Type, or a list of specific IDs. This
	// converts that older format into the same Condition-row shape every
	// other kind uses here, reading and writing the older meta fields
	// instead of _bpafb_display_condition_rules, so the free plugin's own
	// code keeps working exactly as before.
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
				{ PLACED_BY_BLOCKS[ kind ] ? (
					<PanelRow>
						<p className="bpafb-pro-no-conditions-notice">{ PLACED_BY_BLOCKS[ kind ] }</p>
					</PanelRow>
				) : isSingle ? (
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
													// SingularConditionFields (used for 'singular') needs to
													// update both `postType` and `value` at once, so it passes
													// a full patch object. Every other rule type's field just
													// passes the plain new value.
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

				{ ! PLACED_BY_BLOCKS[ kind ] && (
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
				) }

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
