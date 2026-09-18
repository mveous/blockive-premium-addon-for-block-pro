<?php
/**
 * A Pro-only feature: the "Template Kind" setting (header, footer,
 * archive, search, 404, popup, loop-item, plus the free plugin's own
 * "single" post override) and the rule-based Display Conditions that go
 * with it.
 *
 * This is its own file, instead of an edit to the free plugin's
 * class-bpafb-template-post-type.php or class-bpafb-template-display-
 * conditions.php, because those files are copied over as-is from the free
 * plugin (see bin/sync-shared-source.js). Any change made there directly
 * would be lost the next time that copy runs.
 *
 * @package BlockivePro
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

class Bpafb_Pro_Template_Kinds
{
	const META_KIND = '_bpafb_template_kind';
	const META_CONDITION_RULES = '_bpafb_display_condition_rules';

	/**
	 * Every kind except "single", which is the free plugin's only kind (a
	 * single-post override). "single" is left out here on purpose: it is
	 * not a Pro feature, and Bpafb_Template_Display_Conditions::
	 * get_matching_template_id() is still the only place that handles it.
	 *
	 * @var string[]
	 */
	const KINDS = [
		'header',
		'footer',
		'archive',
		'search',
		'404',
		'popup',
		'loop-item',
		'mega-menu-item',
	];

	/**
	 * Condition rule types for kinds other than "single", along with a
	 * score used to pick a winner when more than one template matches the
	 * same page (a higher score wins). If two rules end up with the same
	 * score, the one with the lower
	 * Bpafb_Template_Display_Conditions::META_PRIORITY value wins. This
	 * reuses that same free-plugin setting instead of adding a second one.
	 *
	 * @var array<string,int>
	 */
	const RULE_SPECIFICITY = [
		'entire_site'       => 0,
		'search'            => 10,
		'404'               => 10,
		'date_archive'      => 10,
		'logged_in'         => 5,
		'logged_out'        => 5,
		'user_role'         => 15,
		'author_archive'    => 20,
		'post_type_archive' => 20,
		'taxonomy_archive'  => 30,
		// 'singular' is left out here on purpose. Its score is not fixed -
		// it depends on how narrow the rule is (see rule_specificity() below).
	];

	/**
	 * The one and only instance of this class.
	 *
	 * @var Bpafb_Pro_Template_Kinds|null
	 */
	private static $instance = null;

	/**
	 * Gives back the one instance of this class, making it first if needed.
	 *
	 * @return Bpafb_Pro_Template_Kinds
	 */
	public static function get_instance()
	{
		if (null === self::$instance) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Constructor.
	 */
	private function __construct()
	{
		add_action('init', [$this, 'register_meta']);
		add_action('enqueue_block_editor_assets', [$this, 'enqueue_assets']);

		// The free plugin's own admin-list columns only show
		// _bpafb_template_type and _bpafb_display_condition_scope, which
		// mean nothing for a non-"single" template. We add a column that
		// shows the real answer instead.
		add_filter('manage_' . Bpafb_Template_Post_Type::POST_TYPE . '_posts_columns', [$this, 'add_admin_column']);
		add_action('manage_' . Bpafb_Template_Post_Type::POST_TYPE . '_posts_custom_column', [$this, 'render_admin_column'], 10, 2);
	}

	/**
	 * Stops this class from being copied.
	 */
	private function __clone()
	{
	}

	/**
	 * Stops this class from being restored from stored data.
	 */
	public function __wakeup()
	{
		throw new \Exception('Cannot unserialize a singleton.');
	}

	/**
	 * Text labels for the "Location (Pro)" panel's own KIND_OPTIONS
	 * (src/template-builder-pro/template-kind-panel.js).
	 *
	 * @var array<string,string>
	 */
	const KIND_LABELS = [
		'header'         => 'Header',
		'footer'         => 'Footer',
		'archive'        => 'Archive',
		'search'         => 'Search Results',
		'404'            => '404 Page',
		'popup'          => 'Popup',
		'loop-item'      => 'Loop Item',
		'mega-menu-item' => 'Mega Menu Item',
	];

	/**
	 * Text labels for the "Location (Pro)" panel's own ruleTypeOptions()
	 * (same file).
	 *
	 * @var array<string,string>
	 */
	const RULE_TYPE_LABELS = [
		'entire_site'       => 'Entire Site',
		'post_type_archive' => 'Post Type Archive',
		'taxonomy_archive'  => 'Taxonomy Archive',
		'author_archive'    => 'Author Archive',
		'date_archive'      => 'Date Archive',
		'search'            => 'Search Results',
		'404'               => '404 Page',
		'user_role'         => 'User Role',
		'logged_in'         => 'Logged In',
		'logged_out'        => 'Logged Out',
		'singular'          => 'Singular',
	];

	/**
	 * Adds the "Location (Pro)" column, right after the free plugin's own
	 * two columns.
	 *
	 * @param array $columns Existing column list.
	 * @return array
	 */
	public function add_admin_column($columns)
	{
		$columns['bpafb_pro_location'] = __('Location (Pro)', 'blockive-premium-addon-for-block-pro');
		return $columns;
	}

	/**
	 * Fills in the "Location (Pro)" column. Blank for a "single" kind
	 * template, since the free plugin's own two columns already describe
	 * it well. For every other kind, shows the kind plus a short summary
	 * of its condition rules.
	 *
	 * @param string $column  Column key.
	 * @param int    $post_id Post ID.
	 */
	public function render_admin_column($column, $post_id)
	{
		if ('bpafb_pro_location' !== $column) {
			return;
		}

		$kind = self::get_kind($post_id);
		if ('single' === $kind) {
			echo '&#8212;';
			return;
		}

		$kind_label = self::KIND_LABELS[$kind] ?? $kind;
		$rules      = self::get_condition_rules($post_id);

		if (empty($rules)) {
			printf(
				/* translators: %s: template kind, e.g. "Header". */
				esc_html__('%s (no conditions - matches nowhere)', 'blockive-premium-addon-for-block-pro'),
				esc_html($kind_label)
			);
			return;
		}

		$rule_summaries = array_map(function ($rule) {
			$type  = isset($rule['type']) ? $rule['type'] : '';
			$value = isset($rule['value']) ? $rule['value'] : '';

			if ('singular' === $type) {
				$post_type_slug   = isset($rule['postType']) ? (string) $rule['postType'] : '';
				$post_type_object = $post_type_slug !== '' ? get_post_type_object($post_type_slug) : null;
				$type_label       = $post_type_object
					? $post_type_object->labels->name
					: __('Singular', 'blockive-premium-addon-for-block-pro');

				if ($value === '') {
					return $post_type_slug !== ''
						/* translators: %s: post type name, e.g. "Products". */
						? sprintf(__('All %s', 'blockive-premium-addon-for-block-pro'), $type_label)
						: __('All Singular', 'blockive-premium-addon-for-block-pro');
				}

				$title = get_the_title((int) $value);
				return $type_label . ': ' . ($title !== '' ? $title : '#' . $value);
			}

			$label = self::RULE_TYPE_LABELS[$type] ?? $type;
			return $value !== '' ? $label . ': ' . $value : $label;
		}, $rules);

		echo esc_html($kind_label . ' - ' . implode(', ', $rule_summaries));
	}

	/**
	 * Loads the "Location (Pro)" panel's files, only on the Template
	 * Builder editor screen. Uses the same checks as the free plugin's own
	 * Bpafb_Template_Builder::enqueue_assets(), since this loads alongside
	 * that file, not in place of it.
	 */
	public function enqueue_assets()
	{
		if (!Bpafb_Screen_Helper::is_template_editor()) {
			return;
		}

		$script_path = BPAFB_PRO_PATH . 'build/template-builder-pro/index.js';
		if (!file_exists($script_path)) {
			return;
		}

		$asset_file = BPAFB_PRO_PATH . 'build/template-builder-pro/index.asset.php';
		$asset      = file_exists($asset_file) ? require $asset_file : [
			'dependencies' => [],
			'version'      => BPAFB_PRO_VERSION,
		];

		wp_enqueue_script(
			'bpafb-pro-template-builder',
			BPAFB_PRO_URL . 'build/template-builder-pro/index.js',
			$asset['dependencies'],
			$asset['version'],
			true
		);
	}

	/**
	 * Registers the Template Kind and Display Condition Rules meta fields
	 * on the `blockive_template` post type (which the free plugin's
	 * Bpafb_Template_Post_Type already registers).
	 */
	public function register_meta()
	{
		$post_type = Bpafb_Template_Post_Type::POST_TYPE;

		$auth_callback = function ($allowed, $meta_key, $post_id) {
			return current_user_can('edit_post', $post_id);
		};

		register_post_meta($post_type, self::META_KIND, [
			'type'          => 'string',
			'single'        => true,
			'default'       => 'single',
			'show_in_rest'  => true,
			'auth_callback' => $auth_callback,
		]);

		register_post_meta($post_type, self::META_CONDITION_RULES, [
			'type'          => 'array',
			'single'        => true,
			'default'       => [],
			'show_in_rest'  => [
				'schema' => [
					'type'  => 'array',
					'items' => [
						'type'       => 'object',
						'properties' => [
							'type'     => ['type' => 'string'],
							'value'    => ['type' => 'string'],
							// Only used by a 'singular' rule, for which post
							// type it applies to ('' means any type). We
							// list it here by name so the REST API does
							// not quietly remove it when saving (an
							// unlisted property gets dropped, not just skipped).
							'postType' => ['type' => 'string'],
						],
					],
				],
			],
			'auth_callback' => $auth_callback,
		]);
	}

	/**
	 * Gets the Template Kind of a Blockive Template post. A blank or
	 * missing value means "single" - the free plugin's only kind. This
	 * happens for a template made before Pro was active, or one the Kind
	 * control was never used on.
	 *
	 * @param int $template_id Blockive Template post ID.
	 * @return string
	 */
	public static function get_kind($template_id)
	{
		$kind = get_post_meta($template_id, self::META_KIND, true);
		return $kind ?: 'single';
	}

	/**
	 * Gets the saved condition rules of a Blockive Template post.
	 *
	 * @param int $template_id Blockive Template post ID.
	 * @return array<int,array{type:string,value:string}>
	 */
	public static function get_condition_rules($template_id)
	{
		$rules = get_post_meta($template_id, self::META_CONDITION_RULES, true);
		return is_array($rules) ? $rules : [];
	}

	/**
	 * Whether one condition rule matches the current page. Only runs on
	 * the live site, once per rule of every published template of the
	 * kind being checked (see get_matching_template_id()). These are
	 * cheap checks - no extra database queries beyond what
	 * author_archive/taxonomy_archive already need.
	 *
	 * @param array{type:string,value:string} $rule Condition rule.
	 * @return bool
	 */
	private static function rule_matches($rule)
	{
		$type  = isset($rule['type']) ? (string) $rule['type'] : '';
		$value = isset($rule['value']) ? (string) $rule['value'] : '';

		switch ($type) {
			case 'entire_site':
				return true;

			case 'post_type_archive':
				return is_post_type_archive($value !== '' ? $value : null);

			case 'taxonomy_archive':
				// The value is stored as "taxonomy:term_id". A taxonomy
				// slug alone (with no term_id) matches any term archive
				// of that taxonomy. A picker for choosing one exact term
				// can be added later; it is not needed for this to work.
				if (strpos($value, ':') !== false) {
					list($taxonomy, $term_id) = array_pad(explode(':', $value, 2), 2, '');
					return $taxonomy !== '' && is_tax($taxonomy, $term_id !== '' ? (int) $term_id : null);
				}
				return $value !== '' && is_tax($value);

			case 'author_archive':
				return is_author($value !== '' ? $value : null);

			case 'date_archive':
				return is_date();

			case 'search':
				return is_search();

			case '404':
				return is_404();

			case 'user_role':
				return $value !== ''
					&& is_user_logged_in()
					&& in_array($value, (array) wp_get_current_user()->roles, true);

			case 'logged_in':
				return is_user_logged_in();

			case 'logged_out':
				return !is_user_logged_in();

			case 'singular':
				// An empty postType means "any post type" (a post ID is
				// unique across all post types, so that alone is still an
				// exact match). An empty value means "all posts of that
				// type", not one specific post.
				if (!is_singular()) {
					return false;
				}
				$post_type = isset($rule['postType']) ? (string) $rule['postType'] : '';
				if ($post_type !== '' && get_post_type() !== $post_type) {
					return false;
				}
				return $value === '' || (int) get_queried_object_id() === (int) $value;
		}

		return false;
	}

	/**
	 * Remembers the result of get_matching_template_id() for this page
	 * load, by kind, so we don't run the same database lookup twice.
	 * Header and Footer are each resolved once per page (from
	 * wp_body_open / wp_footer), and an Archive/Search/404 swap looks up
	 * its kind from both template_include and the wrapper template it
	 * points at. Without this, that could mean up to twice as many
	 * database lookups per page.
	 *
	 * @var array<string,int>
	 */
	private static $resolved = [];

	/**
	 * A score for how specific one matched rule is. Every type except
	 * 'singular' uses the fixed RULE_SPECIFICITY table above. 'singular'
	 * changes based on how narrow it is: naming one exact post or page
	 * scores highest, limiting to one post type ("All Products") scores
	 * next, an unscoped "All Singular" scores below that, and "Entire
	 * Site" scores lowest.
	 *
	 * @param array{type:string,value:string,postType?:string} $rule Condition rule.
	 * @return int
	 */
	private static function rule_specificity($rule)
	{
		if ('singular' !== ($rule['type'] ?? '')) {
			return self::RULE_SPECIFICITY[$rule['type'] ?? ''] ?? 0;
		}

		if (isset($rule['value']) && '' !== $rule['value']) {
			return 100;
		}

		if (!empty($rule['postType'])) {
			return 40;
		}

		return 5;
	}

	/**
	 * Finds the best matching published Blockive Template for a given
	 * non-"single" kind, on the current page. The most specific matched
	 * rule wins, across all templates checked. Ties go to the template
	 * with the lower Bpafb_Template_Display_Conditions::META_PRIORITY value.
	 *
	 * @param string $kind One of self::KINDS.
	 * @return int Matched template post ID, or 0 if none matched.
	 */
	public static function get_matching_template_id($kind)
	{
		if (!in_array($kind, self::KINDS, true)) {
			return 0;
		}

		if (array_key_exists($kind, self::$resolved)) {
			return self::$resolved[$kind];
		}

		$templates = get_posts([
			'post_type'      => Bpafb_Template_Post_Type::POST_TYPE,
			'post_status'    => 'publish',
			'posts_per_page' => -1,
			'no_found_rows'  => true,
			'meta_query'     => [ // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_query
				[
					'key'   => self::META_KIND,
					'value' => $kind,
				],
			],
		]);

		if (empty($templates)) {
			return self::$resolved[$kind] = 0;
		}

		$best = null;

		foreach ($templates as $template) {
			$rules    = self::get_condition_rules($template->ID);
			$priority = get_post_meta($template->ID, Bpafb_Template_Display_Conditions::META_PRIORITY, true);
			$priority = ($priority === '' || $priority === false) ? 10 : (int) $priority;

			$matched_specificity = null;
			foreach ($rules as $rule) {
				if (!self::rule_matches($rule)) {
					continue;
				}
				$score = self::rule_specificity($rule);
				if (null === $matched_specificity || $score > $matched_specificity) {
					$matched_specificity = $score;
				}
			}

			if (null === $matched_specificity) {
				continue;
			}

			if (
				null === $best
				|| $matched_specificity > $best['specificity']
				|| ($matched_specificity === $best['specificity'] && $priority < $best['priority'])
			) {
				$best = [
					'id'          => $template->ID,
					'specificity' => $matched_specificity,
					'priority'    => $priority,
				];
			}
		}

		return self::$resolved[$kind] = ($best ? $best['id'] : 0);
	}
}
