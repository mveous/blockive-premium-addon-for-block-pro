<?php
/**
 * Pro-only: the "Template Kind" dimension (header/footer/archive/search/
 * 404/popup/loop-item, in addition to the free plugin's singular "single"
 * override) plus the richer, rule-based Display Conditions that go with it.
 *
 * Deliberately its own file rather than an edit to the free plugin's
 * class-bpafb-template-post-type.php / class-bpafb-template-display-
 * conditions.php: those files are synced verbatim from the free plugin (see
 * bin/sync-shared-source.js) and would have this class's additions
 * overwritten on the next sync. Registering more post meta on the same
 * `blockive_template` CPT from a second class is a normal WordPress
 * pattern and doesn't conflict with the free plugin's own registrations.
 *
 * This class only builds the schema + resolver API; wiring the resolver's
 * result into actual header/footer/archive/search/404/popup rendering is a
 * later phase.
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
	 * Every kind beyond "single" (the free plugin's only kind - a
	 * singular-content override). "single" is intentionally omitted here:
	 * it's not a Pro concept and Bpafb_Template_Display_Conditions::
	 * get_matching_template_id() remains the sole resolver for it.
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
	];

	/**
	 * Condition rule types available on non-"single" kinds, with a
	 * specificity score used to pick a winner when more than one template
	 * matches the same request (higher = more specific = wins), mirroring
	 * Elementor's "more specific condition wins" model. Ties within the
	 * same specificity fall back to the existing
	 * Bpafb_Template_Display_Conditions::META_PRIORITY meta (lower wins),
	 * so Pro reuses the same tie-break control the free plugin already
	 * exposes rather than adding a second priority field.
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
	];

	/**
	 * Constructor.
	 */
	public function __construct()
	{
		add_action('init', [$this, 'register_meta']);
		add_action('enqueue_block_editor_assets', [$this, 'enqueue_assets']);
	}

	/**
	 * Enqueues the "Location (Pro)" panel bundle, gated to the Template
	 * Builder editor only - same gate and file-existence guards as the free
	 * plugin's own Bpafb_Template_Builder::enqueue_assets(), which this
	 * bundle is loaded alongside (not instead of).
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
	 * Registers the Template Kind and Display Condition Rules meta on the
	 * `blockive_template` CPT (already registered by the free plugin's
	 * Bpafb_Template_Post_Type).
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
							'type'  => ['type' => 'string'],
							'value' => ['type' => 'string'],
						],
					],
				],
			],
			'auth_callback' => $auth_callback,
		]);
	}

	/**
	 * Resolves the Template Kind of a Blockive Template post. Absent/empty
	 * (no Pro yet at the time it was created, or never touched by the Kind
	 * control) means "single" - the free plugin's only kind.
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
	 * Resolves the saved condition rules of a Blockive Template post.
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
	 * Whether a single condition rule matches the current request. Called
	 * only on the frontend, once per rule of every published template of
	 * the kind being resolved (see get_matching_template_id()) - cheap
	 * conditional-tag checks, no extra queries beyond what author_archive/
	 * taxonomy_archive already need to resolve their target.
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
				// v1 value format: "taxonomy:term_id" (a plain taxonomy
				// slug alone matches any term archive of that taxonomy).
				// A term picker UI is a follow-up refinement, not required
				// for the resolver API itself.
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
		}

		return false;
	}

	/**
	 * Per-request memoized result of get_matching_template_id(), keyed by
	 * kind. Header and Footer are resolved once per page load each (from
	 * wp_body_open / wp_footer), and an Archive/Search/404 swap resolves its
	 * kind from both template_include and the wrapper template it points
	 * at - without this, that's up to 2x the get_posts() calls this
	 * function would otherwise need per request.
	 *
	 * @var array<string,int>
	 */
	private static $resolved = [];

	/**
	 * Finds the best-matching published Blockive Template for a given
	 * non-"single" kind against the current request. More specific matched
	 * rule wins across templates; ties broken by the lower
	 * Bpafb_Template_Display_Conditions::META_PRIORITY value.
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
				$score = self::RULE_SPECIFICITY[$rule['type'] ?? ''] ?? 0;
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
