<?php
/**
 * Sticky settings.
 *
 * Blocks: Advanced → Position: Sticky gets an offset (bpafbStickyOffset,
 * set in src/custom-attributes/sticky-offset.js). The block sticks that far
 * below the top of the window, plus the admin bar, and stays inside its
 * parent (CSS sticky), e.g. a column. Added here, not in the shared
 * class-bpafb-core.php, so a sync from the free plugin keeps it.
 *
 * Sticky Header: a Header-kind Blockive Template can stick to the top of
 * the window, per device, either always or only while scrolling up, and
 * change its look once the page has scrolled (background, text color,
 * shadow; plus `is-scrolled` / `is-hidden` classes for custom CSS).
 *
 * Settings are one object in the template's _bpafb_sticky_header meta
 * (src/template-builder-pro/sticky-header-panel.js). The wrapper that
 * Bpafb_Pro_Theme_Locations prints around the header gets the classes,
 * and src/sticky-header/ (CSS position: sticky, plus a small script for
 * the scroll classes) does the rest.
 *
 * @package BlockivePro
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

class Bpafb_Pro_Sticky
{
	const META = '_bpafb_sticky_header';
	const HANDLE = 'bpafb-pro-sticky-header';
	const OFFSET_ATTRIBUTE = 'bpafbStickyOffset';
	const NAMESPACE_PREFIX = 'blockive-premium-addon-for-block/';

	const DEFAULTS = [
		'enabled'        => false,
		'desktop'        => true,
		'tablet'         => true,
		'mobile'         => true,
		'behavior'       => 'always',
		'scrolledOffset' => 50,
		'scrolledBg'     => '#ffffff',
		'scrolledColor'  => '',
		'scrolledShadow' => true,
		'zIndex'         => 100,
	];

	/**
	 * @var Bpafb_Pro_Sticky|null
	 */
	private static $instance = null;

	/**
	 * @return Bpafb_Pro_Sticky
	 */
	public static function get_instance()
	{
		if (null === self::$instance) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	private function __construct()
	{
		add_action('init', [$this, 'register_meta']);
		add_action('wp_enqueue_scripts', [$this, 'enqueue_for_page']);
		Bpafb_Pro_Custom_Attributes::share_attribute(self::OFFSET_ATTRIBUTE, ['type' => 'number']);
		// After Bpafb_Core::bpafb_render_block_container() (10) sets the position.
		add_filter('render_block', [$this, 'apply_block_offset'], 11, 2);
	}

	private function __clone()
	{
	}

	public function __wakeup()
	{
		throw new \Exception('Cannot unserialize a singleton.');
	}


	/**
	 * Gives a sticky block its top offset, below the admin bar. Without a
	 * top, position: sticky does nothing, so this also applies with no
	 * offset set.
	 *
	 * @param string $content Rendered block.
	 * @param array  $block   Parsed block.
	 * @return string
	 */
	public function apply_block_offset($content, $block)
	{
		if (empty($block['attrs']['bpafbPosition']) || 'sticky' !== $block['attrs']['bpafbPosition'] || empty($block['blockName']) || 0 !== strpos($block['blockName'], self::NAMESPACE_PREFIX)) {
			return $content;
		}
		$offset = isset($block['attrs'][self::OFFSET_ATTRIBUTE]) ? max(0, min(1000, (int) $block['attrs'][self::OFFSET_ATTRIBUTE])) : 0;

		$processor = Bpafb_Pro_Custom_Attributes::outer_element($content);
		if (!$processor) {
			return $content;
		}
		$style = trim((string) $processor->get_attribute('style'));
		if (preg_match('/(^|;)\s*top\s*:/i', $style)) {
			return $content;
		}
		$processor->set_attribute('style', ($style ? rtrim($style, ';') . ';' : '') . 'top:calc(' . $offset . 'px + var(--wp-admin--admin-bar--height, 0px));');
		return $processor->get_updated_html();
	}

	public function register_meta()
	{
		$properties = [];
		foreach (self::DEFAULTS as $key => $default) {
			$properties[$key] = ['type' => is_bool($default) ? 'boolean' : (is_int($default) ? 'integer' : 'string')];
		}
		register_post_meta(Bpafb_Template_Post_Type::POST_TYPE, self::META, [
			'type'          => 'object',
			'single'        => true,
			'default'       => self::DEFAULTS,
			'show_in_rest'  => [
				'schema' => [
					'type'                 => 'object',
					'properties'           => $properties,
					'additionalProperties' => false,
				],
			],
			'auth_callback' => function ($allowed, $meta_key, $post_id) {
				return current_user_can('edit_post', $post_id);
			},
		]);
	}

	/**
	 * A template's settings, with defaults and clean values.
	 *
	 * @param int $template_id Header template ID.
	 * @return array
	 */
	public static function settings($template_id)
	{
		$saved = get_post_meta($template_id, self::META, true);
		$settings = array_merge(self::DEFAULTS, is_array($saved) ? array_intersect_key($saved, self::DEFAULTS) : []);
		$settings['behavior'] = 'scroll-up' === $settings['behavior'] ? 'scroll-up' : 'always';
		$settings['scrolledOffset'] = max(0, min(2000, (int) $settings['scrolledOffset']));
		$settings['zIndex'] = max(1, min(99999, (int) $settings['zIndex']));
		$settings['scrolledBg'] = self::color($settings['scrolledBg']);
		$settings['scrolledColor'] = self::color($settings['scrolledColor']);
		return $settings;
	}

	/**
	 * A CSS color, or ''.
	 *
	 * @param mixed $value Color.
	 * @return string
	 */
	private static function color($value)
	{
		$value = trim((string) $value);
		if (preg_match('/^#[0-9a-f]{3,8}$/i', $value) || preg_match('/^(rgb|rgba|hsl|hsla)\([0-9.,%\s\/]+\)$/i', $value) || preg_match('/^var\(--[a-z0-9-]+\)$/i', $value)) {
			return $value;
		}
		return '';
	}

	/**
	 * Classes and attributes for the header wrapper when the template's
	 * header is sticky, or null.
	 *
	 * @param int $template_id Header template ID.
	 * @return array{classes: string[], attributes: string}|null
	 */
	public static function wrapper($template_id)
	{
		$settings = self::settings($template_id);
		if (!self::is_on($settings)) {
			return null;
		}

		$classes = ['bpafb-sticky'];
		foreach (['desktop', 'tablet', 'mobile'] as $device) {
			if (empty($settings[$device])) {
				$classes[] = 'bpafb-sticky--off-' . $device;
			}
		}
		if (!empty($settings['scrolledShadow'])) {
			$classes[] = 'bpafb-sticky--shadow';
		}

		$vars = '--bpafb-sticky-z:' . $settings['zIndex'] . ';';
		if ($settings['scrolledBg']) {
			$vars .= '--bpafb-sticky-scrolled-bg:' . $settings['scrolledBg'] . ';';
		}
		if ($settings['scrolledColor']) {
			$vars .= '--bpafb-sticky-scrolled-color:' . $settings['scrolledColor'] . ';';
		}

		// Normally loaded in <head> already (enqueue_for_page()).
		self::enqueue();

		return [
			'classes'    => $classes,
			'attributes' => sprintf(
				' style="%1$s" data-behavior="%2$s" data-scrolled-offset="%3$d"',
				esc_attr($vars),
				esc_attr($settings['behavior']),
				$settings['scrolledOffset']
			),
		];
	}

	/**
	 * @param array $settings From settings().
	 * @return bool
	 */
	private static function is_on($settings)
	{
		return !empty($settings['enabled']) && ($settings['desktop'] || $settings['tablet'] || $settings['mobile']);
	}

	/**
	 * Loads the CSS and script in <head> when this page's Header template
	 * is sticky.
	 */
	public function enqueue_for_page()
	{
		if (is_admin()) {
			return;
		}
		$template_id = Bpafb_Pro_Template_Kinds::get_matching_template_id('header');
		if ($template_id && self::is_on(self::settings($template_id))) {
			self::enqueue();
		}
	}

	private static function enqueue()
	{
		$asset_file = BPAFB_PRO_PATH . 'build/sticky-header/index.asset.php';
		if (!file_exists($asset_file)) {
			return;
		}
		$asset = require $asset_file;
		wp_enqueue_script(self::HANDLE, BPAFB_PRO_URL . 'build/sticky-header/index.js', $asset['dependencies'], $asset['version'], ['in_footer' => true, 'strategy' => 'defer']);
		if (file_exists(BPAFB_PRO_PATH . 'build/sticky-header/style-index.css')) {
			wp_enqueue_style(self::HANDLE, BPAFB_PRO_URL . 'build/sticky-header/style-index.css', [], $asset['version']);
			wp_style_add_data(self::HANDLE, 'rtl', 'replace');
		}
	}
}
