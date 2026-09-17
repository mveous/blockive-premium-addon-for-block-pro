<?php
/**
 * Real, server-rendered implementations of the 9 Events Calendar Template
 * Blocks the free plugin already advertises as client-only "(Pro)" teaser
 * placeholders (see src/template-blocks/pro-teasers/block-list.js) - same
 * block names (blockive-premium-addon-for-block/tb-event-*), so a template
 * built under a future free-only install (where these stay inert teasers)
 * keeps rendering unchanged once Pro is active.
 *
 * Gated entirely on The Events Calendar being active. Every render method
 * additionally guards each individual tribe_*() call with function_exists()
 * before calling it, rather than assuming the exact set available in every
 * Events Calendar version - the plugin's public template-tag API has grown
 * over major versions, and a missing tag should make that one block quietly
 * render nothing rather than fatal the whole page.
 *
 * @package BlockivePro
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

class Bpafb_Pro_Events_Blocks
{
	const NAME_PREFIX = 'blockive-premium-addon-for-block/tb-';

	/**
	 * Constructor.
	 */
	public function __construct()
	{
		if (!class_exists('Tribe__Events__Main')) {
			return;
		}

		add_action('blockive_register_template_block', [$this, 'register_blocks']);
		add_action('enqueue_block_editor_assets', [$this, 'enqueue_editor_assets'], 21);
	}

	/**
	 * Resolves the event post id a block instance should render.
	 *
	 * @param WP_Block $block Block instance.
	 * @return int
	 */
	private static function post_id($block)
	{
		return Bpafb_Template_Block_Render::get_post_id($block);
	}

	// -- Render callbacks, one per block --------------------------------

	public function render_event_title($attributes, $content, $block)
	{
		ob_start();
		Bpafb_Template_Block_Render::render_title_block($block, $attributes, 'bpafb-tb-event-title');
		return ob_get_clean();
	}

	public function render_event_image($attributes, $content, $block)
	{
		$post_id = self::post_id($block);
		if (!$post_id || !has_post_thumbnail($post_id)) {
			return '';
		}
		return '<div class="bpafb-tb-event-image">' . get_the_post_thumbnail($post_id, 'large') . '</div>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}

	public function render_event_date($attributes, $content, $block)
	{
		$post_id = self::post_id($block);
		if (!$post_id || !function_exists('tribe_get_start_date')) {
			return '';
		}

		$start = tribe_get_start_date($post_id, false);
		$end   = function_exists('tribe_get_end_date') ? tribe_get_end_date($post_id, false) : '';

		$text = ($end && $end !== $start) ? $start . ' &ndash; ' . $end : $start;
		if ($text === '') {
			return '';
		}

		return '<div class="bpafb-tb-event-date">' . wp_kses_post($text) . '</div>';
	}

	public function render_event_time($attributes, $content, $block)
	{
		$post_id = self::post_id($block);
		if (!$post_id || !function_exists('tribe_get_start_time')) {
			return '';
		}
		if (function_exists('tribe_event_is_all_day') && tribe_event_is_all_day($post_id)) {
			return '';
		}

		$start = tribe_get_start_time($post_id);
		$end   = function_exists('tribe_get_end_time') ? tribe_get_end_time($post_id) : '';

		$text = ($end && $end !== $start) ? $start . ' &ndash; ' . $end : $start;
		if ($text === '') {
			return '';
		}

		return '<div class="bpafb-tb-event-time">' . wp_kses_post($text) . '</div>';
	}

	public function render_event_venue($attributes, $content, $block)
	{
		$post_id = self::post_id($block);
		if (!$post_id || !function_exists('tribe_get_venue')) {
			return '';
		}

		$venue   = tribe_get_venue($post_id);
		$address = function_exists('tribe_get_full_address') ? tribe_get_full_address($post_id) : '';

		if ($venue === '' && $address === '') {
			return '';
		}

		$parts = array_filter([$venue, $address]);

		return '<div class="bpafb-tb-event-venue">' . wp_kses_post(implode('<br>', array_map('esc_html', $parts))) . '</div>';
	}

	public function render_event_organizer($attributes, $content, $block)
	{
		$post_id = self::post_id($block);
		if (!$post_id || !function_exists('tribe_get_organizer')) {
			return '';
		}
		$organizer = tribe_get_organizer($post_id);
		if ($organizer === '') {
			return '';
		}
		return '<div class="bpafb-tb-event-organizer">' . esc_html($organizer) . '</div>';
	}

	public function render_event_cost($attributes, $content, $block)
	{
		$post_id = self::post_id($block);
		if (!$post_id || !function_exists('tribe_get_cost')) {
			return '';
		}
		$cost = tribe_get_cost($post_id, true);
		if ($cost === '') {
			return '';
		}
		return '<div class="bpafb-tb-event-cost">' . wp_kses_post($cost) . '</div>';
	}

	public function render_event_map($attributes, $content, $block)
	{
		$post_id = self::post_id($block);
		if (!$post_id || !function_exists('tribe_get_embedded_map')) {
			return '';
		}
		if (function_exists('tribe_embedded_map_only_venue_with_address') && !tribe_embedded_map_only_venue_with_address($post_id)) {
			return '';
		}
		$map = tribe_get_embedded_map($post_id);
		return $map ? '<div class="bpafb-tb-event-map">' . $map . '</div>' : ''; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}

	/**
	 * Links to the event's own page. Full ticket-selling/RSVP integration
	 * belongs to the separate Event Tickets plugin's own APIs, not core
	 * Events Calendar - out of scope here; this is the "View Event" style
	 * call to action every event page can support on its own.
	 */
	public function render_event_register_button($attributes, $content, $block)
	{
		$post_id = self::post_id($block);
		if (!$post_id) {
			return '';
		}
		$url = function_exists('tribe_get_event_website_link') && tribe_get_event_website_link($post_id)
			? get_post_meta($post_id, '_EventURL', true)
			: get_permalink($post_id);
		if (!$url) {
			$url = get_permalink($post_id);
		}

		$label = isset($attributes['label']) && $attributes['label'] !== ''
			? $attributes['label']
			: __('View Event', 'blockive-premium-addon-for-block-pro');

		return sprintf(
			'<a class="bpafb-tb-event-register-button button" href="%1$s">%2$s</a>',
			esc_url($url),
			esc_html($label)
		);
	}

	// -- Registration -----------------------------------------------------

	/**
	 * Block slug => [title, icon, render method] for every block this
	 * class provides.
	 *
	 * @return array<string,array{0:string,1:string,2:string}>
	 */
	private function block_defs()
	{
		return [
			'event-title'            => [__('Event Title', 'blockive-premium-addon-for-block-pro'), 'calendar-alt', 'render_event_title'],
			'event-image'            => [__('Event Image', 'blockive-premium-addon-for-block-pro'), 'format-image', 'render_event_image'],
			'event-date'             => [__('Event Date', 'blockive-premium-addon-for-block-pro'), 'calendar', 'render_event_date'],
			'event-time'             => [__('Event Time', 'blockive-premium-addon-for-block-pro'), 'clock', 'render_event_time'],
			'event-venue'            => [__('Venue', 'blockive-premium-addon-for-block-pro'), 'location-alt', 'render_event_venue'],
			'event-organizer'        => [__('Organizer', 'blockive-premium-addon-for-block-pro'), 'admin-users', 'render_event_organizer'],
			'event-cost'             => [__('Event Cost', 'blockive-premium-addon-for-block-pro'), 'tickets-alt', 'render_event_cost'],
			'event-map'              => [__('Event Map', 'blockive-premium-addon-for-block-pro'), 'location', 'render_event_map'],
			'event-register-button'  => [__('Register Button', 'blockive-premium-addon-for-block-pro'), 'megaphone', 'render_event_register_button'],
		];
	}

	/**
	 * Registers every block above and marks it as a Template Block, via the
	 * exact extension point the free plugin already fires for this purpose
	 * (see Bpafb_Template_Blocks::fire_registration_hook()).
	 */
	public function register_blocks()
	{
		foreach ($this->block_defs() as $slug => list($title, $icon, $method)) {
			$name = self::NAME_PREFIX . $slug;

			register_block_type($name, [
				'api_version'     => 3,
				'title'           => $title,
				'category'        => 'blockive-template',
				'icon'            => $icon,
				'uses_context'    => ['postId', 'postType'],
				'supports'        => ['html' => false],
				'render_callback' => [$this, $method],
			]);

			Bpafb_Template_Blocks::register_block_name($name);
		}
	}

	/**
	 * Enqueues the client-side registration bundle that replaces each
	 * block's free-plugin teaser with the real thing, gated to the
	 * Template Builder editor only.
	 */
	public function enqueue_editor_assets()
	{
		if (!Bpafb_Screen_Helper::is_template_editor()) {
			return;
		}

		$script_path = BPAFB_PRO_PATH . 'build/template-blocks-events/index.js';
		if (!file_exists($script_path)) {
			return;
		}

		$asset_file = BPAFB_PRO_PATH . 'build/template-blocks-events/index.asset.php';
		$asset      = file_exists($asset_file) ? require $asset_file : [
			'dependencies' => ['bpafb-template-blocks'],
			'version'      => BPAFB_PRO_VERSION,
		];

		wp_enqueue_script(
			'bpafb-pro-template-blocks-events',
			BPAFB_PRO_URL . 'build/template-blocks-events/index.js',
			array_unique(array_merge($asset['dependencies'], ['bpafb-template-blocks'])),
			$asset['version'],
			true
		);
	}
}
