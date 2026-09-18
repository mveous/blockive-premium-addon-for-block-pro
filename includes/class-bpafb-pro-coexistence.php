<?php
/**
 * Keeps Blockive Pro and the free plugin from ever running at the same
 * time, without touching any block or template data. Both plugins use the
 * same block names, the same `blockive_template` post type, and the same
 * meta keys, so nothing ever needs to move or change either way.
 *
 * @package BlockivePro
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

class Bpafb_Pro_Coexistence
{
	/**
	 * Runs when Pro is activated. If the free plugin is active, turns it
	 * off and shows an admin notice explaining why.
	 */
	public static function on_activate()
	{
		self::deactivate_free_if_active();
	}

	/**
	 * Runs when Pro is deactivated. Left empty on purpose, beyond
	 * WordPress's own built-in "Plugin deactivated." message. A custom
	 * message here would need to show on the *next* page load, but by then
	 * Pro's code is no longer loaded to add that message. This is also why
	 * Pro never turns the free plugin back on by itself - that would be a
	 * surprising change the user did not ask for.
	 */
	public static function on_deactivate()
	{
	}

	/**
	 * Runs whenever any plugin is activated. Catches a user turning the
	 * free plugin back on by hand while Pro is still active, and turns it
	 * off again right away, instead of leaving both plugins active.
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
	 * Turns off the free plugin if it is active, and sets up the "why did
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
	 * Shows the one-time "why did Blockive Free just disappear" admin
	 * notice. This clears its own stored flag once shown, so it only
	 * shows right after the activation that caused it.
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
