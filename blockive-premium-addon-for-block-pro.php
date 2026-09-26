<?php
/**
 * Plugin Name:       Blockive Pro
 * Description:       The complete Blockive experience - every free block and Template Builder feature plus header/footer/archive/search/404/popup templates, WooCommerce & Events blocks, Loop Builder, and Dynamic Tags. Standalone: Blockive - Premium Addon For Block is not required.
 * Plugin URI:        https://mveous.com
 * Version:           1.0.0
 * Requires at least: 6.8
 * Requires PHP:      7.4
 * Author:            Mveous
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       blockive-premium-addon-for-block-pro
 *
 * @package BlockivePro
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

// Defined unconditionally, immediately, at file scope (not deferred to any
// hook): the free plugin's `plugins_loaded` bootstrap checks this constant to
// decide whether to stand down, and relies on every active plugin's main
// file - this one included - having already fully executed by the time
// `plugins_loaded` fires, regardless of which plugin WordPress loaded first.
define('BPAFB_PRO_ACTIVE', true);
define('BPAFB_PRO_VERSION', '1.0.0');

// Deliberately NOT the same constant names the free plugin defines
// (BPAFB_PATH/BPAFB_URL/BPAFB_VERSION): during Pro's own activation request,
// WordPress's plugin_sandbox_scrape() include_once()s this file in the same
// request where the free plugin - if currently active - has already run and
// already defined those names pointing at ITS OWN directory. define() on an
// already-defined constant silently keeps the first value, so reusing those
// names here would make Pro require_once() files from inside the free
// plugin's folder. bin/sync-shared-source.js rewrites every synced file's
// references to these three names to the *_PRO_* versions below, so the
// classes copied from the free plugin need no manual changes.
define('BPAFB_PRO_PATH', plugin_dir_path(__FILE__));
define('BPAFB_PRO_URL', plugin_dir_url(__FILE__));

const BPAFB_PRO_FREE_PLUGIN_BASENAME = 'blockive-premium-addon-for-block/blockive-premium-addon-for-block.php';
const BPAFB_PRO_DEACTIVATED_FREE_NOTICE_OPTION = 'bpafb_pro_deactivated_free_notice';

require_once BPAFB_PRO_PATH . 'includes/class-bpafb-pro-coexistence.php';

register_activation_hook(__FILE__, ['Bpafb_Pro_Coexistence', 'on_activate']);
register_deactivation_hook(__FILE__, ['Bpafb_Pro_Coexistence', 'on_deactivate']);
add_action('activated_plugin', ['Bpafb_Pro_Coexistence', 'on_any_plugin_activated']);
add_action('admin_notices', ['Bpafb_Pro_Coexistence', 'render_admin_notices']);

/**
 * Singleton bootstrap/loader for Blockive Pro. Deferred to `plugins_loaded`
 * for consistency with the free plugin's own timing (not strictly required
 * here, since Pro never needs to check the free plugin's state before
 * deciding to load - Pro is always authoritative when active).
 */
final class Blockive_Premium_Addon_For_Block_Pro_Loader
{

	/**
	 * The single instance of this class.
	 *
	 * @var Blockive_Premium_Addon_For_Block_Pro_Loader|null
	 */
	private static $instance = null;

	/**
	 * Retrieves (creating if necessary) the single instance of this class.
	 *
	 * @return Blockive_Premium_Addon_For_Block_Pro_Loader
	 */
	public static function get_instance()
	{
		if (null === self::$instance) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Constructor. Defers all bootstrapping to `plugins_loaded`.
	 */
	private function __construct()
	{
		add_action('plugins_loaded', [$this, 'bootstrap']);
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
	 * Bootstraps the plugin. See the class docblock for why this is deferred.
	 */
	public function bootstrap()
	{
		require_once BPAFB_PRO_PATH . 'includes/class-bpafb-core.php';
		require_once BPAFB_PRO_PATH . 'includes/class-bpafb-template-post-type.php';
		require_once BPAFB_PRO_PATH . 'includes/class-bpafb-screen-helper.php';
		require_once BPAFB_PRO_PATH . 'includes/class-bpafb-template-builder.php';
		require_once BPAFB_PRO_PATH . 'includes/class-bpafb-template-blocks.php';
		require_once BPAFB_PRO_PATH . 'includes/class-bpafb-template-block-render.php';
		require_once BPAFB_PRO_PATH . 'includes/class-bpafb-post-meta-items.php';
		require_once BPAFB_PRO_PATH . 'includes/class-bpafb-template-display-conditions.php';
		require_once BPAFB_PRO_PATH . 'includes/class-bpafb-template-frontend-render.php';
		require_once BPAFB_PRO_PATH . 'includes/class-bpafb-pro-template-kinds.php';
		require_once BPAFB_PRO_PATH . 'includes/class-bpafb-pro-theme-locations.php';
		require_once BPAFB_PRO_PATH . 'includes/class-bpafb-pro-loop-builder.php';
		require_once BPAFB_PRO_PATH . 'includes/class-bpafb-pro-woo-blocks.php';
		require_once BPAFB_PRO_PATH . 'includes/class-bpafb-pro-events-blocks.php';
		require_once BPAFB_PRO_PATH . 'includes/class-bpafb-pro-site-blocks.php';
		require_once BPAFB_PRO_PATH . 'includes/class-bpafb-pro-shared-assets.php';
		require_once BPAFB_PRO_PATH . 'includes/class-bpafb-pro-carousel.php';
		require_once BPAFB_PRO_PATH . 'includes/class-bpafb-pro-forms.php';
		require_once BPAFB_PRO_PATH . 'includes/class-bpafb-pro-custom-attributes.php';
		require_once BPAFB_PRO_PATH . 'includes/class-bpafb-pro-live-search.php';
		require_once BPAFB_PRO_PATH . 'includes/class-bpafb-pro-sticky.php';
		require_once BPAFB_PRO_PATH . 'includes/class-bpafb-pro-archive-loop.php';
		require_once BPAFB_PRO_PATH . 'includes/class-bpafb-pro-popup-builder.php';
		require_once BPAFB_PRO_PATH . 'includes/class-bpafb-pro-dynamic-tags.php';
		require_once BPAFB_PRO_PATH . 'includes/class-bpafb-pro-admin-bar.php';

		Blockive_Premium_Addon_For_Block::get_instance();
		Bpafb_Pro_Template_Kinds::get_instance();
		Bpafb_Pro_Theme_Locations::get_instance();
		Bpafb_Pro_Loop_Builder::get_instance();
		Bpafb_Pro_Woo_Blocks::get_instance();
		Bpafb_Pro_Events_Blocks::get_instance();
		Bpafb_Pro_Site_Blocks::get_instance();
		add_action('init', ['Bpafb_Pro_Shared_Assets', 'register_styles'], 5);
		Bpafb_Pro_Popup_Builder::get_instance();
		Bpafb_Pro_Forms::get_instance();
		Bpafb_Pro_Custom_Attributes::get_instance();
		Bpafb_Pro_Live_Search::get_instance();
		Bpafb_Pro_Sticky::get_instance();
		Bpafb_Pro_Dynamic_Tags::get_instance();
		Bpafb_Pro_Admin_Bar::get_instance();

		// Pro unlocks the two extension points the free plugin's Template
		// Builder already exposes for exactly this purpose - see
		// includes/class-bpafb-template-post-type.php / class-bpafb-template-display-conditions.php.
		add_filter('bpafb_free_template_types', [$this, 'all_viewable_post_types']);
		add_filter('bpafb_specific_display_condition_enabled', '__return_true');
	}

	/**
	 * Every viewable post type (posts, pages, WooCommerce products, Events
	 * Calendar events, any custom post type a site registers, ...) except the
	 * `blockive_template` CPT itself, which is deliberately not viewable (see
	 * Bpafb_Template_Post_Type) and would never appear here anyway.
	 *
	 * Deliberately does NOT pre-filter get_post_types() by `'public' => true`
	 * first: is_post_type_viewable() already returns true for a post type that
	 * is publicly_queryable (or built-in + public) even when its own `public`
	 * argument is false - some plugins register exactly this combination for a
	 * utility post type meant to be linked to but not listed everywhere (e.g.
	 * The Events Calendar's Calendar Embeds). Pre-filtering by `public` first
	 * would silently exclude those from this Pro build's unlocked list even
	 * though the block editor's own /wp/v2/types `viewable` field (the exact
	 * thing the Template Type / Post Type pickers filter on) already says yes.
	 *
	 * @return string[] Post type slugs.
	 */
	public function all_viewable_post_types()
	{
		return array_values(array_filter(get_post_types(), 'is_post_type_viewable'));
	}
}

// Bootstrap the plugin (see Blockive_Premium_Addon_For_Block_Pro_Loader::bootstrap() for why this is deferred).
Blockive_Premium_Addon_For_Block_Pro_Loader::get_instance();
