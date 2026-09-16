import { __ } from '@wordpress/i18n';
import { registerPlugin } from '@wordpress/plugins';
import { PluginDocumentSettingPanel } from '@wordpress/editor';
import { PanelRow, SelectControl, TextControl, Button, Flex, FlexBlock, FlexItem } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data';

const TEMPLATE_POST_TYPE = window.bpafbTemplateBuilder?.postType || 'blockive_template';

const KIND_OPTIONS = [
	{ label: __( 'Single post/page (Template Settings panel)', 'blockive-premium-addon-for-block-pro' ), value: 'single' },
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
const RULE_TYPES_WITH_VALUE = [ 'post_type_archive', 'taxonomy_archive', 'author_archive', 'user_role' ];

const ROLE_OPTIONS = [
	{ label: __( 'Administrator', 'blockive-premium-addon-for-block-pro' ), value: 'administrator' },
	{ label: __( 'Editor', 'blockive-premium-addon-for-block-pro' ), value: 'editor' },
	{ label: __( 'Author', 'blockive-premium-addon-for-block-pro' ), value: 'author' },
	{ label: __( 'Contributor', 'blockive-premium-addon-for-block-pro' ), value: 'contributor' },
	{ label: __( 'Subscriber', 'blockive-premium-addon-for-block-pro' ), value: 'subscriber' },
	{ label: __( 'Customer (WooCommerce)', 'blockive-premium-addon-for-block-pro' ), value: 'customer' },
	{ label: __( 'Shop Manager (WooCommerce)', 'blockive-premium-addon-for-block-pro' ), value: 'shop_manager' },
];

function ruleTypeOptions() {
	return [
		{ label: __( 'Entire Site', 'blockive-premium-addon-for-block-pro' ), value: 'entire_site' },
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

const RuleValueField = ( { rule, onChange } ) => {
	const postTypes = useSelect(
		( select ) =>
			select( 'core' )
				.getPostTypes( { per_page: -1 } )
				?.filter( ( postType ) => postType.viewable ) || [],
		[]
	);

	if ( 'post_type_archive' === rule.type ) {
		return (
			<SelectControl
				label={ __( 'Post type', 'blockive-premium-addon-for-block-pro' ) }
				value={ rule.value || '' }
				options={ [
					{ label: __( '— Select —', 'blockive-premium-addon-for-block-pro' ), value: '' },
					...postTypes.map( ( postType ) => ( { label: postType.name, value: postType.slug } ) ),
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

	return (
		<PluginDocumentSettingPanel
			name="bpafb-pro-template-kind"
			title={ __( 'Location (Pro)', 'blockive-premium-addon-for-block-pro' ) }
			className="bpafb-pro-template-kind-panel"
		>
			<PanelRow>
				<SelectControl
					label={ __( 'Where should this template be used?', 'blockive-premium-addon-for-block-pro' ) }
					help={
						'single' === kind
							? __( 'Overrides a single post/page\'s content - configure which one(s) in the Template Settings and Display Conditions panels above.', 'blockive-premium-addon-for-block-pro' )
							: __( 'The Template Settings panel\'s Post Type field does not apply to this kind - use the conditions below instead.', 'blockive-premium-addon-for-block-pro' )
					}
					value={ kind }
					options={ KIND_OPTIONS }
					onChange={ ( value ) => setMeta( { ...meta, _bpafb_template_kind: value } ) }
				/>
			</PanelRow>

			{ 'single' !== kind && (
				<>
					{ rules.map( ( rule, index ) => (
						<PanelRow key={ index }>
							<Flex align="flex-end">
								<FlexBlock>
									<SelectControl
										label={ __( 'Condition', 'blockive-premium-addon-for-block-pro' ) }
										value={ rule.type }
										options={ ruleTypeOptions() }
										onChange={ ( value ) => updateRule( index, { type: value, value: '' } ) }
									/>
									{ RULE_TYPES_WITH_VALUE.includes( rule.type ) && (
										<RuleValueField rule={ rule } onChange={ ( value ) => updateRule( index, { value } ) } />
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
		</PluginDocumentSettingPanel>
	);
};

export default function registerTemplateKindPanel() {
	registerPlugin( 'bpafb-pro-template-kind', {
		render: TemplateKindPanel,
	} );
}
