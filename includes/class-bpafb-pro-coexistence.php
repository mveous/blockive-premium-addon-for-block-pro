<?php
/**
 * Keeps Blockive Pro and the free plugin from ever running at the same
 * time, without touching any block/template data - both plugins agree on
 * identical block names, the `blockive_template` CPT slug, and every meta
 * key, so nothing needs to migrate in either direction.
 *
 * @package BlockivePro
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

class Bpafb_Pro_Coexistence
{
	/**
	 * Runs on Pro's own activation. If the free plugin is active, deactivates
	 * it and queues an admin notice explaining why.
	 */
	public static function on_activate()
	{
		self::deactivate_free_if_active();
	}

	/**
	 * Runs on Pro's deactivation. Deliberately does nothing beyond what
	 * WordPress already does on its own (the built-in "Plugin deactivated."
	 * notice): a custom admin_notices message here would need to fire on the
	 * *next* page load, by which point Pro's PHP is no longer included at
	 * all - there's nothing left running to register that hook. (This is
	 * also why Pro never auto-reactivates the free plugin here: that would
	 * be a surprising background action the user didn't ask for, on top of
	 * not being reliably announceable anyway.)
	 */
	public static function on_deactivate()
	{
	}

	/**
	 * Fires whenever any plugin is activated. Catches a user manually
	 * re-activating the free plugin while Pro is still active, and stands it
	 * back down immediately rather than leaving both nominally "active".
	 *
	 * @param string $plugin Plugin basename that was just activated.
	 */
	public static function on_any_plugin_activated($plugin)
	{
		if ($plugin === BPAFB_PRO_FREE_PLUGIN_BASENAME) {
			self::deactivate_free_if_active();
		}
	}

	/**
	 * Deactivates the free plugin if it's active, and queues the "why did
	 * this happen" admin notice.
	 */
	private static function deactivate_free_if_active()
	{
		if (!function_exists('is_plugin_active')) {
			require_once ABSPATH . 'wp-admin/includes/plugin.php';
		}

		if (!is_plugin_active(BPAFB_PRO_FREE_PLUGIN_BASENAME)) {
			return;
		}

		deactivate_plugins(BPAFB_PRO_FREE_PLUGIN_BASENAME);
		set_transient(BPAFB_PRO_DEACTIVATED_FREE_NOTICE_OPTION, 1, MINUTE_IN_SECONDS * 5);
	}

	/**
	 * Renders the one-time "why did Blockive Free just disappear" admin
	 * notice (WordPress clears the transient once read here, so it shows
	 * only immediately after the triggering activation).
	 */
	public static function render_admin_notices()
	{
		if (!current_user_can('activate_plugins')) {
			return;
		}

		if (get_transient(BPAFB_PRO_DEACTIVATED_FREE_NOTICE_OPTION)) {
			delete_transient(BPAFB_PRO_DEACTIVATED_FREE_NOTICE_OPTION);
			echo '<div class="notice notice-success is-dismissible"><p>' .
				esc_html__('Blockive - Premium Addon For Block was deactivated because Blockive Pro already includes all of its features. Nothing was migrated - your existing blocks and templates are unaffected.', 'blockive-premium-addon-for-block-pro') .
				'</p></div>';
		}
	}
}
