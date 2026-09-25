<?php
/**
 * Stylesheets shared by several blocks (the carousel, the lightbox, and the
 * filter buttons), registered as style handles that each block lists in its
 * block.json "style". Each is its own webpack entry (see webpack.config.js),
 * because wp-scripts puts a style.css imported by several blocks into only
 * one block's style-index.css. Also the filter buttons' markup and the
 * lightbox labels.
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
		'bpafb-pro-filter-bar' => 'pro-components/filter-bar',
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
	 * Filter buttons (Gallery, Portfolio), driven by
	 * src/pro-components/filter-bar/filter-bar.js. Uses the block's
	 * showAllFilter, allFilterLabel, and filterAlign attributes. Nothing is
	 * printed for fewer than two filters.
	 *
	 * @param array                $attributes Block attributes.
	 * @param array<string,string> $filters    Filter key => button label.
	 * @param string               $label      Accessible name of the group.
	 * @return string
	 */
	public static function filter_bar_html($attributes, $filters, $label)
	{
		if (count($filters) < 2) {
			return '';
		}
		$show_all = !isset($attributes['showAllFilter']) || !empty($attributes['showAllFilter']);
		$buttons = '';
		if ($show_all) {
			$buttons .= '<button type="button" class="bpafb-filter-bar__button is-active" data-filter="all" aria-pressed="true">'
				. esc_html(isset($attributes['allFilterLabel']) && '' !== trim($attributes['allFilterLabel']) ? $attributes['allFilterLabel'] : __('All', 'blockive-premium-addon-for-block-pro'))
				. '</button>';
		}
		$first = true;
		foreach ($filters as $key => $text) {
			$active = !$show_all && $first;
			$buttons .= sprintf(
				'<button type="button" class="bpafb-filter-bar__button%1$s" data-filter="%2$s" aria-pressed="%3$s">%4$s</button>',
				$active ? ' is-active' : '',
				esc_attr((string) $key),
				$active ? 'true' : 'false',
				esc_html($text)
			);
			$first = false;
		}
		$align = isset($attributes['filterAlign']) && in_array($attributes['filterAlign'], ['left', 'center', 'right'], true) ? $attributes['filterAlign'] : 'center';

		return '<div class="bpafb-filter-bar bpafb-filter-bar--' . $align . '" role="group" aria-label="' . esc_attr($label) . '">'
			. $buttons
			/* translators: %d: number of items shown after filtering. */
			. '<span class="bpafb-filter-bar__status" role="status" data-template="' . esc_attr__('%d items shown', 'blockive-premium-addon-for-block-pro') . '"></span>'
			. '</div>';
	}

	/**
	 * Filter button CSS variables, for Bpafb_Pro_Site_Blocks::scoped_vars_css().
	 *
	 * @param array $attributes Block attributes.
	 * @return array<string,string>
	 */
	public static function filter_bar_vars($attributes)
	{
		$s = 'Bpafb_Pro_Site_Blocks';
		return array_merge(
			[
				'--bpafb-filter-color'        => $s::color($attributes, 'filterColor'),
				'--bpafb-filter-bg'           => $s::color($attributes, 'filterBgColor'),
				'--bpafb-filter-active-color' => $s::color($attributes, 'filterActiveColor'),
				'--bpafb-filter-active-bg'    => $s::color($attributes, 'filterActiveBgColor'),
				'--bpafb-filter-radius'       => $s::px($attributes, 'filterRadius'),
			],
			$s::typography_vars($attributes, 'filter', '--bpafb-filter')
		);
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
