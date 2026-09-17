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
 * Bootstraps Blockive Pro. Deferred to `plugins_loaded` for consistency with
 * the free plugin's own timing (not strictly required here, since Pro never
 * needs to check the free plugin's state before deciding to load - Pro is
 * always authoritative when active).
 */
function bpafb_pro_bootstrap()
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
	require_once BPAFB_PRO_PATH . 'includes/class-bpafb-pro-popup-builder.php';

	new Blockive_Premium_Addon_For_Block();
	new Bpafb_Pro_Template_Kinds();
	new Bpafb_Pro_Theme_Locations();
	new Bpafb_Pro_Loop_Builder();
	new Bpafb_Pro_Woo_Blocks();
	new Bpafb_Pro_Events_Blocks();
	new Bpafb_Pro_Popup_Builder();

	// Pro unlocks the two extension points the free plugin's Template
	// Builder already exposes for exactly this purpose - see
	// includes/class-bpafb-template-post-type.php / class-bpafb-template-display-conditions.php.
	add_filter('bpafb_free_template_types', 'bpafb_pro_all_viewable_post_types');
	add_filter('bpafb_specific_display_condition_enabled', '__return_true');
}

/**
 * Every publicly viewable post type (posts, pages, WooCommerce products,
 * Events Calendar events, any custom post type a site registers, ...)
 * except the `blockive_template` CPT itself, which is deliberately not
 * publicly viewable (see Bpafb_Template_Post_Type) and would never appear
 * here anyway.
 *
 * @return string[] Post type slugs.
 */
function bpafb_pro_all_viewable_post_types()
{
	return array_values(array_filter(get_post_types(['public' => true]), 'is_post_type_viewable'));
}
add_action('plugins_loaded', 'bpafb_pro_bootstrap');
