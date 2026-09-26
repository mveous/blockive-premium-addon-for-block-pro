<?php
/**
 * Scroll Snap: a per-page setting (editor panel in src/scroll-snap/) that makes scrolling come to rest
 * at the start of the page's top-level blocks. "Gentle" snaps only when scrolling stops near a block; "Strict"
 * always lands on one (best when every block fits the window, as a tall
 * block can otherwise be hard to read through).
 *
 * @package BlockivePro
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

class Bpafb_Pro_Scroll_Snap
{
	const META = '_bpafb_scroll_snap';

	/**
	 * @var Bpafb_Pro_Scroll_Snap|null
	 */
	private static $instance = null;

	/**
	 * @return Bpafb_Pro_Scroll_Snap
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
		add_action('wp_head', [$this, 'print_css'], 20);
		add_action('enqueue_block_editor_assets', [$this, 'enqueue_editor']);
	}

	/**
	 * The panel, only in the post / page editor (not the widgets or site
	 * editor, where wp-editor must not load).
	 */
	public function enqueue_editor()
	{
		$screen = function_exists('get_current_screen') ? get_current_screen() : null;
		$asset_file = BPAFB_PRO_PATH . 'build/scroll-snap/index.asset.php';
		if (!$screen || 'post' !== $screen->base || !file_exists($asset_file)) {
			return;
		}
		$asset = require $asset_file;
		wp_enqueue_script('bpafb-pro-scroll-snap', BPAFB_PRO_URL . 'build/scroll-snap/index.js', $asset['dependencies'], $asset['version'], true);
	}

	private function __clone()
	{
	}

	public function __wakeup()
	{
		throw new \Exception('Cannot unserialize a singleton.');
	}

	public function register_meta()
	{
		// Every post type (no subtype).
		register_meta('post', self::META, [
			'type'              => 'string',
			'single'            => true,
			'default'           => '',
			'show_in_rest'      => true,
			'sanitize_callback' => function ($value) {
				return in_array($value, ['proximity', 'mandatory'], true) ? $value : '';
			},
			'auth_callback'     => function ($allowed, $meta_key, $post_id) {
				return current_user_can('edit_post', $post_id);
			},
		]);
	}

	public function print_css()
	{
		if (!is_singular()) {
			return;
		}
		$mode = get_post_meta(get_queried_object_id(), self::META, true);
		if (!in_array($mode, ['proximity', 'mandatory'], true)) {
			return;
		}
		printf(
			'<style id="bpafb-scroll-snap">html{scroll-snap-type:y %s;scroll-padding-top:var(--wp-admin--admin-bar--height,0px)}.entry-content>*,.wp-block-post-content>*{scroll-snap-align:start}</style>' . "\n",
			esc_attr($mode)
		);
	}
}
