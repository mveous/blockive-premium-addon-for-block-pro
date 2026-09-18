<?php
/**
 * Renders a matched "popup"-kind Blockive Template (see
 * Bpafb_Pro_Template_Kinds) as an on-page popup, with a small vanilla-JS
 * trigger engine (assets/js/popup-triggers.js) driving when it opens.
 *
 * Placement ("where does this popup appear") reuses the exact same
 * Display Conditions engine every other kind uses
 * (Bpafb_Pro_Template_Kinds::get_matching_template_id()) - this class only
 * adds the "when/how" layer on top: trigger type (page load delay, scroll
 * %, click, exit intent) and frequency capping (always / once per
 * session / once every N days), matching Elementor's Popup "Triggers" +
 * "Timing" split. Elementor's fuller Timing options (traffic source,
 * URL-arrival rules, device/browser targeting, adblock detection) are a
 * deliberate backlog item, not implemented here.
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

	const TRIGGER_TYPES   = ['page_load', 'scroll', 'click', 'exit_intent'];
	const FREQUENCIES     = ['always', 'session', 'days'];

	/**
	 * The single instance of this class.
	 *
	 * @var Bpafb_Pro_Popup_Builder|null
	 */
	private static $instance = null;

	/**
	 * Retrieves (creating if necessary) the single instance of this class.
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
		// Enqueuing on wp_footer itself is too late: WordPress's own
		// wp_print_footer_scripts() is hooked to wp_footer at priority 10 and
		// only ever runs once per request, so a script enqueued from a later
		// wp_footer callback (this class used to hook priority 25 directly
		// into render_popup()) never actually gets printed. Resolving/
		// enqueueing has to happen on wp_enqueue_scripts (which always fires
		// well before wp_footer); only the actual HTML output waits for
		// wp_footer.
		add_action('wp_enqueue_scripts', [$this, 'maybe_enqueue_assets']);
		add_action('wp_footer', [$this, 'render_popup'], 25);
	}

	/**
	 * Prevents cloning of the instance.
	 */
	private function __clone()
	{
	}

	/**
	 * Prevents unserializing of the instance.
	 */
	public function __wakeup()
	{
		throw new \Exception('Cannot unserialize a singleton.');
	}

	/**
	 * Resolves whether a popup matches the current request and, if so,
	 * enqueues its assets. Called early enough (wp_enqueue_scripts) that the
	 * enqueue actually takes effect; render_popup() re-reads the same
	 * (memoized - see Bpafb_Pro_Template_Kinds) resolution later to output
	 * the markup once wp_footer fires.
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
	 * Registers the Popup trigger/frequency meta on the `blockive_template` CPT.
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

		register_post_meta($post_type, self::META_FREQUENCY_DAYS, [
			'type'          => 'number',
			'single'        => true,
			'default'       => 1,
			'show_in_rest'  => true,
			'auth_callback' => $auth_callback,
		]);
	}

	/**
	 * Outputs the matched popup's markup (hidden until its trigger fires)
	 * and enqueues the trigger engine, gated to only when a popup actually
	 * matches the current request so no popup assets load otherwise.
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

		printf(
			'<div class="bpafb-pro-popup" id="bpafb-pro-popup-%1$d" data-popup-id="%1$d" data-trigger="%2$s" data-trigger-value="%3$s" data-frequency="%4$s" data-frequency-days="%5$s" aria-hidden="true">' // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
				. '<div class="bpafb-pro-popup-overlay" data-bpafb-popup-close></div>'
				. '<div class="bpafb-pro-popup-content" role="dialog" aria-modal="true">'
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
			'<div class="bpafb-pro-template-render bpafb-pro-popup-inner">' . do_blocks($template_post->post_content) . '</div>' // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		);
	}
}
