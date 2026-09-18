<?php
/**
 * The real, working versions of the 9 Events Calendar Template Blocks. The
 * free plugin only shows these as locked "(Pro)" placeholders (see
 * src/template-blocks/pro-teasers/block-list.js). Same block names are
 * used, so a template built without Pro keeps working the same once Pro is
 * turned on.
 *
 * This does not check if The Events Calendar is active - these blocks are
 * a Pro feature, unlocked as soon as Pro is active. Every render function
 * checks function_exists() before calling a tribe_*() function, so a
 * missing function makes that block show nothing instead of crashing the
 * page. This also keeps these blocks usable even without Events Calendar installed.
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
	 * The one and only instance of this class.
	 *
	 * @var Bpafb_Pro_Events_Blocks|null
	 */
	private static $instance = null;

	/**
	 * Gives back the one instance of this class, making it first if needed.
	 *
	 * @return Bpafb_Pro_Events_Blocks
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
		add_action('blockive_register_template_block', [$this, 'register_blocks']);
		add_action('enqueue_block_editor_assets', [$this, 'enqueue_editor_assets'], 21);
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
	 * Finds the event post ID a block instance should show.
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

		// tribe_get_venue() gives back plain text and needs escaping, but
		// tribe_get_full_address() already gives back its own HTML (with
		// <span> tags). Escaping that too would print the HTML tags
		// themselves as visible text, instead of a formatted address.
		$parts = array_filter([$venue !== '' ? esc_html($venue) : '', $address]);

		return '<div class="bpafb-tb-event-venue">' . wp_kses_post(implode('<br>', $parts)) . '</div>';
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
	 * Links to the event's own page. Selling tickets or taking RSVPs is
	 * handled by the separate Event Tickets plugin, not by Events Calendar
	 * itself, so it is not covered here. This is just a "View Event"
	 * button, which every event page can support on its own.
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
	 * Block slug => [title, icon, render method], for every block this
	 * class adds.
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
	 * Registers every block above, and marks each one as a Template Block,
	 * using the same hook the free plugin already fires for this exact
	 * purpose (see Bpafb_Template_Blocks::fire_registration_hook()).
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
	 * Loads the editor file that swaps each block's free-plugin teaser for
	 * the real one, only on the Template Builder editor screen.
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

		// This always removes the free plugin's teaser (Pro never shows a
		// locked "(Pro)" placeholder for its own included features), but
		// only adds the real block back when The Events Calendar is
		// actually installed. Otherwise an Event block would sit in the
		// block list doing nothing, on a site with no events plugin at
		// all. The PHP-side registration (register_blocks() above) always
		// runs, though, so a template made while Events Calendar was
		// active still works (showing empty content, from each render
		// method's own check) even if Events Calendar is later turned off.
		wp_localize_script('bpafb-pro-template-blocks-events', 'bpafbProEventsBlocks', [
			'active' => class_exists('Tribe__Events__Main'),
		]);
	}
}
