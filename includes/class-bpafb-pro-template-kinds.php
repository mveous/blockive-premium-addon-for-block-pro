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
		'section',
	];

	/**
	 * Kinds that blocks place (Loop Grid / Loop Carousel, Mega Menu, the
	 * Template block), rather than Display Conditions.
	 *
	 * @var string[]
	 */
	const PLACED_BY_BLOCKS = [
		'loop-item',
		'mega-menu-item',
		'section',
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

		// Override the free plugin's admin-list columns so "Template Type"
		// and "Display Condition" accurately reflect the template's kind
		// (e.g. Header, Footer, Archive) and condition rules instead of
		// defaulting to single-post override values.
		remove_action('manage_' . Bpafb_Template_Post_Type::POST_TYPE . '_posts_custom_column', [Bpafb_Template_Post_Type::get_instance(), 'render_admin_column'], 10);
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
		'section'        => 'Section',
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
	 * Renders the "Template Type" and "Display Condition" columns,
	 * accounting for both Pro kinds (Header, Footer, Archive, 404, etc.)
	 * and single-post override templates.
	 *
	 * @param string $column  Column key.
	 * @param int    $post_id Post ID.
	 */
	public function render_admin_column($column, $post_id)
	{
		if ('bpafb_template_type' !== $column && 'bpafb_display_condition' !== $column) {
			return;
		}

		$kind = self::get_kind($post_id);

		if ('bpafb_template_type' === $column) {
			if ('single' === $kind) {
				$post_type_slug = get_post_meta($post_id, '_bpafb_template_type', true) ?: 'post';
				$post_type_obj  = get_post_type_object($post_type_slug);
				$type_label     = $post_type_obj ? $post_type_obj->labels->singular_name : $post_type_slug;

				if (!Bpafb_Template_Post_Type::is_free_template_type($post_type_slug)) {
					$type_label = sprintf(
						/* translators: %s: post type name, e.g. "Product". */
						__('%s (Pro)', 'blockive-premium-addon-for-block-pro'),
						$type_label
					);
				}

				echo esc_html($type_label);
			} else {
				$kind_label = self::KIND_LABELS[$kind] ?? ucfirst($kind);
				echo esc_html($kind_label);
			}
			return;
		}

		if ('bpafb_display_condition' === $column) {
			if ('single' === $kind) {
				$post_type_slug = get_post_meta($post_id, '_bpafb_template_type', true) ?: 'post';
				$post_type_obj  = get_post_type_object($post_type_slug);
				$post_type_name = $post_type_obj ? $post_type_obj->labels->name : $post_type_slug;
				$scope          = get_post_meta($post_id, Bpafb_Template_Display_Conditions::META_SCOPE, true) ?: 'all';

				if ('all' === $scope) {
					echo esc_html(
						sprintf(
							/* translators: %s: post type name, e.g. "Posts". */
							__('All %s', 'blockive-premium-addon-for-block-pro'),
							$post_type_name
						)
					);
				} else {
					$ids = get_post_meta($post_id, Bpafb_Template_Display_Conditions::META_SPECIFIC_IDS, true);
					$first_id = is_array($ids) && !empty($ids) ? reset($ids) : 0;
					$title = $first_id ? get_the_title((int) $first_id) : '';
					if ($title) {
						echo esc_html(
							sprintf(
								/* translators: 1: post type name, 2: post title */
								__('Specific %1$s: %2$s', 'blockive-premium-addon-for-block-pro'),
								$post_type_name,
								$title
							)
						);
					} else {
						echo esc_html(
							sprintf(
								/* translators: %s: post type name */
								__('Specific %s', 'blockive-premium-addon-for-block-pro'),
								$post_type_name
							)
						);
					}
				}
				return;
			}

			if (in_array($kind, self::PLACED_BY_BLOCKS, true)) {
				if ('loop-item' === $kind) {
					esc_html_e('Loop Grid / Carousel', 'blockive-premium-addon-for-block-pro');
				} elseif ('mega-menu-item' === $kind) {
					esc_html_e('Mega Menu', 'blockive-premium-addon-for-block-pro');
				} elseif ('section' === $kind) {
					esc_html_e('Template Block', 'blockive-premium-addon-for-block-pro');
				} else {
					echo '&#8212;';
				}
				return;
			}

			$rules = self::get_condition_rules($post_id);
			if (empty($rules)) {
				esc_html_e('No conditions - matches nowhere', 'blockive-premium-addon-for-block-pro');
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

			echo esc_html(implode(', ', $rule_summaries));
		}
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
	 * Header and Footer are each looked up several times per page (see
	 * Bpafb_Pro_Theme_Locations), and an Archive/Search/404 swap looks up
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
	 * Checks that a Blockive Template post is ready to render as a specific
	 * kind: it exists, is the right post type, is published, has content,
	 * and is actually set to the kind the caller expects. Every place that
	 * renders one Blockive Template's content directly - Mega Menu's
	 * dropdown, Loop Grid, and Post Grid Pro's Loop Builder - used to
	 * repeat these same five checks by hand; they now all call this instead.
	 *
	 * @param int    $template_id Blockive Template post ID.
	 * @param string $kind        Expected kind (see self::KINDS).
	 * @return WP_Post|null The template post, or null if it isn't usable.
	 */
	public static function get_renderable_template($template_id, $kind)
	{
		if (!$template_id) {
			return null;
		}

		$template_post = get_post($template_id);
		if (
			!$template_post
			|| $template_post->post_type !== Bpafb_Template_Post_Type::POST_TYPE
			|| $template_post->post_status !== 'publish'
			|| empty($template_post->post_content)
			|| self::get_kind($template_id) !== $kind
		) {
			return null;
		}

		return $template_post;
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
			/**
			 * Whether a template can be used at all right now, before its
			 * Display Conditions are checked (e.g. a popup outside its
			 * start / end dates).
			 *
			 * @param bool   $available   Default true.
			 * @param int    $template_id Template ID.
			 * @param string $kind        Template kind.
			 */
			if (!apply_filters('bpafb_pro_template_available', true, $template->ID, $kind)) {
				continue;
			}
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
