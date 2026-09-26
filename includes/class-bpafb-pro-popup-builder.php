<?php
/**
 * Shows a matched "popup"-kind Blockive Template (see
 * Bpafb_Pro_Template_Kinds) as an on-page popup. A small plain-JavaScript
 * file (assets/js/popup-triggers.js) controls when it opens.
 *
 * Where a popup applies reuses the same Display Conditions system every
 * other kind uses (Bpafb_Pro_Template_Kinds::get_matching_template_id());
 * this class only adds the "when and how" part: the trigger (page load
 * delay, scroll percent, click, exit intent, scrolled to an element,
 * inactivity), how often it can show (always, once per session, once
 * every N days), and the Advanced Rules in META_RULES: after N page views
 * or visits, at most N times, arriving from, devices (all checked in the
 * browser), and a start / end date (checked here, so an out-of-date popup
 * does not match and another one can).
 *
 * @package BlockivePro
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

class Bpafb_Pro_Popup_Builder
{
	const META_TRIGGER_TYPE    = '_bpafb_popup_trigger_type';
	const META_TRIGGER_VALUE   = '_bpafb_popup_trigger_value';
	const META_FREQUENCY       = '_bpafb_popup_frequency';
	const META_FREQUENCY_DAYS  = '_bpafb_popup_frequency_days';
	const META_RULES           = '_bpafb_popup_rules';

	const TRIGGER_TYPES   = ['page_load', 'scroll', 'click', 'exit_intent', 'element', 'inactivity'];
	const REFERRERS       = ['any', 'search', 'external', 'internal', 'contains'];

	/**
	 * Advanced Rules defaults (0 / empty = no limit).
	 */
	const RULE_DEFAULTS = [
		'pageViews'    => 0,
		'sessions'     => 0,
		'maxTimes'     => 0,
		'referrer'     => 'any',
		'referrerText' => '',
		'desktop'      => true,
		'tablet'       => true,
		'mobile'       => true,
		'startDate'    => '',
		'endDate'      => '',
	];
	const FREQUENCIES     = ['always', 'session', 'days'];

	/**
	 * The one and only instance of this class.
	 *
	 * @var Bpafb_Pro_Popup_Builder|null
	 */
	private static $instance = null;

	/**
	 * Gives back the one instance of this class, making it first if needed.
	 *
	 * @return Bpafb_Pro_Popup_Builder
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
		add_filter('bpafb_pro_template_available', [$this, 'in_date_range'], 10, 3);
		// Loading this on wp_footer itself is too late: WordPress's own
		// wp_print_footer_scripts() runs on wp_footer at priority 10, and
		// only runs once per page. A script added from a later wp_footer
		// callback never actually gets printed. So loading scripts and
		// styles has to happen on wp_enqueue_scripts instead, which always
		// runs before wp_footer. Only the popup's HTML waits for wp_footer.
		add_action('wp_enqueue_scripts', [$this, 'maybe_enqueue_assets']);
		add_action('wp_footer', [$this, 'render_popup'], 25);
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
	 * Checks if a popup matches the current page, and if so, loads its
	 * files. Runs early (on wp_enqueue_scripts) so the loading actually
	 * works. render_popup() checks the same result again later, once
	 * wp_footer fires, to print the popup's HTML.
	 */
	public function maybe_enqueue_assets()
	{
		if (is_admin() || !Bpafb_Pro_Template_Kinds::get_matching_template_id('popup')) {
			return;
		}

		wp_enqueue_style(
			'bpafb-pro-popup',
			BPAFB_PRO_URL . 'assets/css/popup.css',
			[],
			BPAFB_PRO_VERSION
		);
		wp_enqueue_script(
			'bpafb-pro-popup-triggers',
			BPAFB_PRO_URL . 'assets/js/popup-triggers.js',
			[],
			BPAFB_PRO_VERSION,
			true
		);
	}

	/**
	 * Registers the Popup trigger and frequency meta fields on the
	 * `blockive_template` post type.
	 */
	public function register_meta()
	{
		$post_type     = Bpafb_Template_Post_Type::POST_TYPE;
		$auth_callback = function ($allowed, $meta_key, $post_id) {
			return current_user_can('edit_post', $post_id);
		};

		register_post_meta($post_type, self::META_TRIGGER_TYPE, [
			'type'          => 'string',
			'single'        => true,
			'default'       => 'page_load',
			'show_in_rest'  => true,
			'auth_callback' => $auth_callback,
		]);

		register_post_meta($post_type, self::META_TRIGGER_VALUE, [
			'type'          => 'string',
			'single'        => true,
			'default'       => '3000',
			'show_in_rest'  => true,
			'auth_callback' => $auth_callback,
		]);

		register_post_meta($post_type, self::META_FREQUENCY, [
			'type'          => 'string',
			'single'        => true,
			'default'       => 'session',
			'show_in_rest'  => true,
			'auth_callback' => $auth_callback,
		]);

		$rule_properties = [];
		foreach (self::RULE_DEFAULTS as $key => $default) {
			$rule_properties[$key] = ['type' => is_bool($default) ? 'boolean' : (is_int($default) ? 'integer' : 'string')];
		}
		register_post_meta($post_type, self::META_RULES, [
			'type'          => 'object',
			'single'        => true,
			'default'       => self::RULE_DEFAULTS,
			'show_in_rest'  => [
				'schema' => [
					'type'                 => 'object',
					'properties'           => $rule_properties,
					'additionalProperties' => false,
				],
			],
			'auth_callback' => $auth_callback,
		]);

		register_post_meta($post_type, self::META_FREQUENCY_DAYS, [
			'type'          => 'number',
			'single'        => true,
			'default'       => 1,
			'show_in_rest'  => true,
			'auth_callback' => $auth_callback,
		]);
	}

	/**
	 * A popup's Advanced Rules, with defaults and clean values.
	 *
	 * @param int $template_id Popup template ID.
	 * @return array
	 */
	public static function rules($template_id)
	{
		$saved = get_post_meta($template_id, self::META_RULES, true);
		$rules = array_merge(self::RULE_DEFAULTS, is_array($saved) ? array_intersect_key($saved, self::RULE_DEFAULTS) : []);
		foreach (['pageViews', 'sessions', 'maxTimes'] as $key) {
			$rules[$key] = max(0, min(1000, (int) $rules[$key]));
		}
		$rules['referrer'] = in_array($rules['referrer'], self::REFERRERS, true) ? $rules['referrer'] : 'any';
		$rules['referrerText'] = sanitize_text_field((string) $rules['referrerText']);
		foreach (['desktop', 'tablet', 'mobile'] as $key) {
			$rules[$key] = (bool) $rules[$key];
		}
		return $rules;
	}

	/**
	 * A "Y-m-dTH:i" date in the site's time zone as a timestamp, or null.
	 *
	 * @param string $value Date from the editor (datetime-local).
	 * @return int|null
	 */
	private static function timestamp($value)
	{
		$value = trim((string) $value);
		if ('' === $value) {
			return null;
		}
		$date = date_create_immutable(str_replace('T', ' ', $value), wp_timezone());
		return $date ? $date->getTimestamp() : null;
	}

	/**
	 * Leaves out a popup before its start date or after its end date, so
	 * another matching popup can show instead.
	 *
	 * @param bool   $available   Whether the template can be used.
	 * @param int    $template_id Template ID.
	 * @param string $kind        Template kind.
	 * @return bool
	 */
	public function in_date_range($available, $template_id, $kind)
	{
		if (!$available || 'popup' !== $kind) {
			return $available;
		}
		$rules = self::rules($template_id);
		$now = time();
		$start = self::timestamp($rules['startDate']);
		$end = self::timestamp($rules['endDate']);
		return !(null !== $start && $now < $start) && !(null !== $end && $now > $end);
	}

	/**
	 * Prints the matched popup's HTML (hidden until its trigger fires),
	 * only when a popup actually matches the current page, so no popup
	 * HTML is added otherwise.
	 */
	public function render_popup()
	{
		if (is_admin()) {
			return;
		}

		$template_id = Bpafb_Pro_Template_Kinds::get_matching_template_id('popup');
		if (!$template_id) {
			return;
		}

		$template_post = get_post($template_id);
		if (!$template_post || empty($template_post->post_content)) {
			return;
		}

		$trigger_type = get_post_meta($template_id, self::META_TRIGGER_TYPE, true);
		$trigger_type = in_array($trigger_type, self::TRIGGER_TYPES, true) ? $trigger_type : 'page_load';

		$trigger_value = (string) get_post_meta($template_id, self::META_TRIGGER_VALUE, true);

		$frequency = get_post_meta($template_id, self::META_FREQUENCY, true);
		$frequency = in_array($frequency, self::FREQUENCIES, true) ? $frequency : 'session';

		$frequency_days = get_post_meta($template_id, self::META_FREQUENCY_DAYS, true);
		$frequency_days = $frequency_days !== '' ? (float) $frequency_days : 1;

		$rules = self::rules($template_id);
		// Only what the browser checks; the dates were checked when matching.
		$client_rules = array_diff_key($rules, ['startDate' => 1, 'endDate' => 1]);

		printf(
			'<div class="bpafb-pro-popup" id="bpafb-pro-popup-%1$d" data-popup-id="%1$d" data-trigger="%2$s" data-trigger-value="%3$s" data-frequency="%4$s" data-frequency-days="%5$s" data-rules="%8$s" aria-hidden="true">' // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
				. '<div class="bpafb-pro-popup-overlay" data-bpafb-popup-close></div>'
				. '<div class="bpafb-pro-popup-content" role="dialog" aria-modal="true" aria-label="%9$s" tabindex="-1">'
				. '<button type="button" class="bpafb-pro-popup-close" data-bpafb-popup-close aria-label="%6$s">&times;</button>'
				. '%7$s'
				. '</div>'
				. '</div>',
			$template_id,
			esc_attr($trigger_type),
			esc_attr($trigger_value),
			esc_attr($frequency),
			esc_attr($frequency_days),
			esc_attr__('Close', 'blockive-premium-addon-for-block-pro'),
			'<div class="bpafb-pro-template-render bpafb-pro-popup-inner">' . do_blocks($template_post->post_content) . '</div>', // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			esc_attr(wp_json_encode($client_rules)),
			esc_attr(get_the_title($template_post))
		);
	}
}
