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
	 * How to play a video URL (Media Carousel, Video Playlist): a
	 * YouTube (privacy-enhanced) or Vimeo embed URL that autoplays, since
	 * it only loads after a click, plus the YouTube poster; or a direct
	 * video file. Null for anything else.
	 *
	 * @param string $url Video URL as entered.
	 * @return array{embed:string,poster:string,file:string}|null
	 */
	public static function video_embed($url)
	{
		$url = trim((string) $url);
		if (preg_match('~(?:youtube(?:-nocookie)?\.com/(?:watch\?(?:.*&)?v=|embed/|shorts/|live/|v/)|youtu\.be/)([\w-]{11})~', $url, $m)) {
			return ['embed' => 'https://www.youtube-nocookie.com/embed/' . $m[1] . '?autoplay=1&rel=0', 'poster' => 'https://i.ytimg.com/vi/' . $m[1] . '/hqdefault.jpg', 'file' => ''];
		}
		if (preg_match('~vimeo\.com/(?:.*?/)?(\d{6,})~', $url, $m)) {
			return ['embed' => 'https://player.vimeo.com/video/' . $m[1] . '?autoplay=1', 'poster' => '', 'file' => ''];
		}
		if (preg_match('~^https?://\S+\.(?:mp4|webm|ogv|mov)(?:\?\S*)?$~i', $url)) {
			return ['embed' => '', 'poster' => '', 'file' => $url];
		}
		return null;
	}

	/**
	 * CSS variables the Menu and Mega Menu blocks share (item spacing and
	 * colors, dropdown background, border, and shadow, toggle icon color),
	 * named under one prefix such as --bpafb-pro-menu. Each block adds its
	 * own extras.
	 *
	 * @param array  $attributes Block attributes.
	 * @param string $prefix     Variable name prefix.
	 * @return array<string,string>
	 */
	public static function menu_vars($attributes, $prefix)
	{
		$px = function ($key, $default) use ($attributes) {
			return (isset($attributes[$key]) ? absint($attributes[$key]) : $default) . 'px';
		};
		$value = function ($key, $default) use ($attributes) {
			return !empty($attributes[$key]) ? $attributes[$key] : $default;
		};

		$vars = [
			$prefix . '-item-gap'             => $px('itemGap', 24),
			$prefix . '-item-padding-v'       => $px('itemPaddingV', 10),
			$prefix . '-item-padding-h'       => $px('itemPaddingH', 6),
			$prefix . '-item-color'           => $value('itemColor', 'inherit'),
			$prefix . '-item-hover-color'     => $value('itemHoverColor', 'inherit'),
			$prefix . '-item-active-color'    => $value('itemActiveColor', 'inherit'),
			$prefix . '-dropdown-bg'          => $value('dropdownBgColor', '#ffffff'),
			$prefix . '-dropdown-border-width'  => $px('dropdownBorderWidth', 1),
			$prefix . '-dropdown-border-style'  => $value('dropdownBorderType', 'solid'),
			$prefix . '-dropdown-border-color'  => $value('dropdownBorderColor', '#e2e8f0'),
			$prefix . '-dropdown-border-radius' => $px('dropdownBorderRadius', 8),
			$prefix . '-toggle-color'         => $value('toggleIconColor', 'currentColor'),
			$prefix . '-dropdown-shadow'      => 'none',
		];

		if (!empty($attributes['dropdownShadowEnabled'])) {
			$vars[$prefix . '-dropdown-shadow'] = sprintf(
				'0 8px %dpx %dpx %s',
				isset($attributes['dropdownShadowBlur']) ? absint($attributes['dropdownShadowBlur']) : 24,
				isset($attributes['dropdownShadowSpread']) ? intval($attributes['dropdownShadowSpread']) : 0,
				$value('dropdownShadowColor', 'rgba(15,23,42,0.12)')
			);
		}
		return $vars;
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
