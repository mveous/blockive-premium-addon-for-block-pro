<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Facebook Embed block: Facebook's own iframe
 * plugins (page, post, video, Like button), so no Facebook SDK script is
 * loaded. With "load on click" (default), the page shows a placeholder
 * and nothing from Facebook loads until the visitor asks for it (view.js);
 * without JavaScript the placeholder links to the content on Facebook.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block default content (unused, dynamic block).
 * @var WP_Block $block      Block instance.
 */

$bpafb_url = isset($attributes['url']) ? trim((string) $attributes['url']) : '';
$bpafb_host = strtolower((string) wp_parse_url($bpafb_url, PHP_URL_HOST));
$bpafb_ok_host = (bool) preg_match('/(^|\.)(facebook\.com|fb\.com|fb\.watch)$/', $bpafb_host);
if (!$bpafb_ok_host || 'https' !== strtolower((string) wp_parse_url($bpafb_url, PHP_URL_SCHEME))) {
	if (defined('REST_REQUEST') && REST_REQUEST) {
		echo '<p class="bpafb-fb__notice">' . esc_html__('Enter the https:// address of a Facebook page, post, or video.', 'blockive-premium-addon-for-block-pro') . '</p>';
	}
	return;
}

$bpafb_type = isset($attributes['embedType']) && in_array($attributes['embedType'], ['page', 'post', 'video', 'like'], true) ? $attributes['embedType'] : 'post';
$bpafb_width = isset($attributes['width']) ? max(180, min(750, (int) $attributes['width'])) : 500;
$bpafb_height = isset($attributes['height']) ? (int) $attributes['height'] : 0;

$bpafb_args = ['href' => $bpafb_url, 'width' => $bpafb_width];
switch ($bpafb_type) {
	case 'page':
		$bpafb_tabs = array_intersect(isset($attributes['pageTabs']) ? (array) $attributes['pageTabs'] : ['timeline'], ['timeline', 'events', 'messages']);
		$bpafb_height = $bpafb_height ? max(70, min(2000, $bpafb_height)) : 500;
		$bpafb_args += [
			'tabs'                  => implode(',', $bpafb_tabs),
			'height'                => $bpafb_height,
			'small_header'          => !empty($attributes['smallHeader']) ? 'true' : 'false',
			'hide_cover'            => !empty($attributes['hideCover']) ? 'true' : 'false',
			'show_facepile'         => (!isset($attributes['showFacepile']) || !empty($attributes['showFacepile'])) ? 'true' : 'false',
			'adapt_container_width' => 'true',
		];
		break;
	case 'post':
	case 'video':
		$bpafb_height = $bpafb_height ? max(100, min(2000, $bpafb_height)) : ('video' === $bpafb_type ? (int) round($bpafb_width * 9 / 16) + 60 : 600);
		$bpafb_args['show_text'] = (!isset($attributes['showText']) || !empty($attributes['showText'])) ? 'true' : 'false';
		break;
	case 'like':
		$bpafb_layout = isset($attributes['likeLayout']) && in_array($attributes['likeLayout'], ['standard', 'button_count', 'button', 'box_count'], true) ? $attributes['likeLayout'] : 'button_count';
		$bpafb_height = 'box_count' === $bpafb_layout ? 70 : ('standard' === $bpafb_layout ? 80 : 30);
		$bpafb_args += [
			'layout' => $bpafb_layout,
			'action' => isset($attributes['likeAction']) && 'recommend' === $attributes['likeAction'] ? 'recommend' : 'like',
			'size'   => isset($attributes['likeSize']) && 'large' === $attributes['likeSize'] ? 'large' : 'small',
			'share'  => (!isset($attributes['likeShare']) || !empty($attributes['likeShare'])) ? 'true' : 'false',
		];
		break;
}

$bpafb_src = add_query_arg(array_map('rawurlencode', $bpafb_args), 'https://www.facebook.com/plugins/' . $bpafb_type . '.php');
$bpafb_titles = [
	'page'  => __('Facebook page', 'blockive-premium-addon-for-block-pro'),
	'post'  => __('Facebook post', 'blockive-premium-addon-for-block-pro'),
	'video' => __('Facebook video', 'blockive-premium-addon-for-block-pro'),
	'like'  => __('Facebook Like button', 'blockive-premium-addon-for-block-pro'),
];
$bpafb_iframe = sprintf(
	'<iframe class="bpafb-fb__frame" src="%1$s" width="%2$d" height="%3$d" title="%4$s" style="border:none;overflow:hidden" scrolling="no" frameborder="0" loading="lazy" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>',
	esc_url($bpafb_src),
	$bpafb_width,
	$bpafb_height,
	esc_attr($bpafb_titles[$bpafb_type])
);

$bpafb_click = !isset($attributes['clickToLoad']) || !empty($attributes['clickToLoad']);
if ($bpafb_click) {
	$bpafb_text = isset($attributes['consentText']) && '' !== trim($attributes['consentText']) ? $attributes['consentText'] : __('This content is hosted by Facebook, which may set cookies and collect data when it loads.', 'blockive-premium-addon-for-block-pro');
	$bpafb_inner = sprintf(
		'<div class="bpafb-fb__consent" style="max-width:%1$dpx;min-height:%2$dpx"><p>%3$s</p><a class="bpafb-fb__load" href="%4$s" data-src="%5$s" data-width="%1$d" data-height="%2$d" data-title="%6$s" target="_blank" rel="noopener noreferrer">%7$s</a></div>',
		$bpafb_width,
		'like' === $bpafb_type ? 0 : min(300, $bpafb_height),
		esc_html($bpafb_text),
		esc_url($bpafb_url),
		esc_url($bpafb_src),
		esc_attr($bpafb_titles[$bpafb_type]),
		esc_html__('Show Facebook content', 'blockive-premium-addon-for-block-pro')
	);
} else {
	$bpafb_inner = $bpafb_iframe;
}

$bpafb_align = isset($attributes['embedAlign']) && in_array($attributes['embedAlign'], ['left', 'center', 'right'], true) ? $attributes['embedAlign'] : 'center';

printf(
	'<div %1$s>%2$s</div>',
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	get_block_wrapper_attributes(['class' => 'bpafb-fb bpafb-fb--' . $bpafb_type . ' bpafb-fb--align-' . $bpafb_align]),
	$bpafb_inner // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped above.
);
