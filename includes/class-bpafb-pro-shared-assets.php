<?php
/**
 * Stylesheets shared by several blocks (the carousel and the lightbox),
 * registered as style handles that each block lists in its block.json
 * "style". Each is its own webpack entry (see webpack.config.js), because
 * wp-scripts puts a style.css imported by several blocks into only one
 * block's style-index.css.
 *
 * @package BlockivePro
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

class Bpafb_Pro_Shared_Assets
{
	/**
	 * Style handle => folder under build/.
	 */
	const STYLES = [
		'bpafb-pro-carousel' => 'pro-components/carousel',
		'bpafb-pro-lightbox' => 'pro-components/lightbox',
	];

	/**
	 * Registers the shared stylesheets. Runs on `init` before the blocks
	 * are registered.
	 */
	public static function register_styles()
	{
		foreach (self::STYLES as $handle => $dir) {
			$file = 'build/' . $dir . '/style-index.css';
			if (!file_exists(BPAFB_PRO_PATH . $file)) {
				continue;
			}
			wp_register_style($handle, BPAFB_PRO_URL . $file, [], BPAFB_PRO_VERSION);
			wp_style_add_data($handle, 'rtl', 'replace');
		}
	}

	/**
	 * Translated lightbox labels, for the block wrapper's data-l10n
	 * attribute (read by src/pro-components/lightbox/lightbox.js).
	 *
	 * @return string JSON.
	 */
	public static function lightbox_l10n()
	{
		return (string) wp_json_encode([
			'dialog'  => __('Media viewer', 'blockive-premium-addon-for-block-pro'),
			'close'   => __('Close', 'blockive-premium-addon-for-block-pro'),
			'prev'    => __('Previous', 'blockive-premium-addon-for-block-pro'),
			'next'    => __('Next', 'blockive-premium-addon-for-block-pro'),
			/* translators: 1: current item number, 2: total items. */
			'counter' => __('%1$d / %2$d', 'blockive-premium-addon-for-block-pro'),
		]);
	}
}
