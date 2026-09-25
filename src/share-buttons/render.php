<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Share Buttons block. Plain share links (they
 * work without JavaScript); view.js opens them in a small popup and adds
 * Copy Link, Print, and the device's native share sheet.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block default content (unused, dynamic block).
 * @var WP_Block $block      Block instance.
 */

$bpafb_networks = isset($attributes['networks']) && is_array($attributes['networks']) ? $attributes['networks'] : [];
if (!$bpafb_networks) {
	return;
}

$bpafb_s = 'Bpafb_Pro_Site_Blocks';
$bpafb_uid = $bpafb_s::uid($attributes, 'bpafb-share-');

// What to share: a custom URL, the post in the current loop (e.g. inside a
// Loop Grid card), the singular post/page being viewed, or the current URL.
$bpafb_post_id = 0;
if (!empty($attributes['shareTarget']) && 'custom' === $attributes['shareTarget'] && !empty($attributes['customUrl'])) {
	$bpafb_url = $attributes['customUrl'];
	$bpafb_title = wp_get_document_title();
} else {
	if (in_the_loop() || is_singular()) {
		$bpafb_post_id = in_the_loop() ? get_the_ID() : get_queried_object_id();
	}
	if ($bpafb_post_id) {
		$bpafb_url = get_permalink($bpafb_post_id);
		$bpafb_title = wp_strip_all_tags(get_the_title($bpafb_post_id));
	} else {
		global $wp;
		$bpafb_url = home_url(add_query_arg([], isset($wp->request) ? $wp->request : ''));
		$bpafb_title = wp_get_document_title();
	}
}
$bpafb_image = $bpafb_post_id ? (string) get_the_post_thumbnail_url($bpafb_post_id, 'large') : '';

$bpafb_u = rawurlencode($bpafb_url);
$bpafb_t = rawurlencode(html_entity_decode($bpafb_title, ENT_QUOTES, get_bloginfo('charset')));

$bpafb_defs = [
	'facebook'  => ['Facebook', 'fa-brands fa-facebook-f', '#1877f2', 'https://www.facebook.com/sharer/sharer.php?u=' . $bpafb_u],
	'x-twitter' => ['X', 'fa-brands fa-x-twitter', '#000000', 'https://twitter.com/intent/tweet?url=' . $bpafb_u . '&text=' . $bpafb_t],
	'linkedin'  => ['LinkedIn', 'fa-brands fa-linkedin-in', '#0a66c2', 'https://www.linkedin.com/sharing/share-offsite/?url=' . $bpafb_u],
	'whatsapp'  => ['WhatsApp', 'fa-brands fa-whatsapp', '#25d366', 'https://api.whatsapp.com/send?text=' . $bpafb_t . '%20' . $bpafb_u],
	'pinterest' => ['Pinterest', 'fa-brands fa-pinterest-p', '#e60023', 'https://pinterest.com/pin/create/button/?url=' . $bpafb_u . '&description=' . $bpafb_t . ($bpafb_image ? '&media=' . rawurlencode($bpafb_image) : '')],
	'telegram'  => ['Telegram', 'fa-brands fa-telegram', '#26a5e4', 'https://t.me/share/url?url=' . $bpafb_u . '&text=' . $bpafb_t],
	'reddit'    => ['Reddit', 'fa-brands fa-reddit-alien', '#ff4500', 'https://www.reddit.com/submit?url=' . $bpafb_u . '&title=' . $bpafb_t],
	'threads'   => ['Threads', 'fa-brands fa-threads', '#000000', 'https://www.threads.net/intent/post?text=' . $bpafb_t . '%20' . $bpafb_u],
	'tumblr'    => ['Tumblr', 'fa-brands fa-tumblr', '#36465d', 'https://www.tumblr.com/widgets/share/tool?canonicalUrl=' . $bpafb_u . '&title=' . $bpafb_t],
	'pocket'    => ['Pocket', 'fa-brands fa-get-pocket', '#ef4056', 'https://getpocket.com/save?url=' . $bpafb_u . '&title=' . $bpafb_t],
	'email'     => [__('Email', 'blockive-premium-addon-for-block-pro'), 'fa-solid fa-envelope', '#6b7280', 'mailto:?subject=' . $bpafb_t . '&body=' . $bpafb_u],
	'copy'      => [__('Copy Link', 'blockive-premium-addon-for-block-pro'), 'fa-solid fa-link', '#4b5563', ''],
	'print'     => [__('Print', 'blockive-premium-addon-for-block-pro'), 'fa-solid fa-print', '#374151', ''],
	'native'    => [__('Share', 'blockive-premium-addon-for-block-pro'), 'fa-solid fa-share-nodes', '#4f46e5', ''],
];

$bpafb_view = isset($attributes['view']) && in_array($attributes['view'], ['icon-text', 'icon', 'text'], true) ? $attributes['view'] : 'icon-text';
$bpafb_skin = isset($attributes['skin']) && in_array($attributes['skin'], ['flat', 'gradient', 'framed', 'minimal'], true) ? $attributes['skin'] : 'flat';
$bpafb_shape = isset($attributes['shape']) && in_array($attributes['shape'], ['square', 'rounded', 'circle'], true) ? $attributes['shape'] : 'rounded';
$bpafb_aligns = ['left', 'center', 'right', 'justify'];
$bpafb_align = isset($attributes['align']) && in_array($attributes['align'], $bpafb_aligns, true) ? $attributes['align'] : 'left';
$bpafb_align_mobile = isset($attributes['alignMobile']) && in_array($attributes['alignMobile'], $bpafb_aligns, true) ? $attributes['alignMobile'] : '';
$bpafb_custom_colors = isset($attributes['colorSource']) && 'custom' === $attributes['colorSource'];
$bpafb_labels = isset($attributes['labels']) && is_array($attributes['labels']) ? $attributes['labels'] : [];

$bpafb_items = '';
foreach ($bpafb_networks as $bpafb_key) {
	if (!is_string($bpafb_key) || !isset($bpafb_defs[$bpafb_key])) {
		continue;
	}
	list($bpafb_label, $bpafb_icon, $bpafb_color, $bpafb_href) = $bpafb_defs[$bpafb_key];
	if (!empty($bpafb_labels[$bpafb_key]) && is_string($bpafb_labels[$bpafb_key])) {
		$bpafb_label = $bpafb_labels[$bpafb_key];
	}

	$bpafb_inner = ('text' !== $bpafb_view ? '<span class="bpafb-share__icon"><i class="' . esc_attr($bpafb_icon) . '" aria-hidden="true"></i></span>' : '')
		. ('icon' !== $bpafb_view ? '<span class="bpafb-share__label">' . esc_html($bpafb_label) . '</span>' : '');

	$bpafb_attrs = sprintf(
		' class="bpafb-share__button bpafb-share__button--%1$s" data-network="%1$s"%2$s%3$s',
		esc_attr($bpafb_key),
		$bpafb_custom_colors ? '' : ' style="--bpafb-share-brand:' . esc_attr($bpafb_color) . '"',
		'icon' === $bpafb_view ? ' aria-label="' . esc_attr($bpafb_label) . '"' : ''
	);

	if ($bpafb_href) {
		$bpafb_items .= sprintf(
			'<li><a%1$s href="%2$s"%3$s>%4$s</a></li>',
			$bpafb_attrs,
			esc_url($bpafb_href, ['https', 'mailto']),
			'email' === $bpafb_key ? '' : ' target="_blank" rel="noopener noreferrer nofollow"',
			$bpafb_inner
		);
	} else {
		$bpafb_items .= sprintf(
			'<li%1$s><button type="button"%2$s data-url="%3$s" data-title="%4$s" data-copied="%5$s">%6$s</button></li>',
			'native' === $bpafb_key ? ' class="bpafb-share__native" hidden' : '',
			$bpafb_attrs,
			esc_attr($bpafb_url),
			esc_attr($bpafb_title),
			esc_attr__('Link copied!', 'blockive-premium-addon-for-block-pro'),
			$bpafb_inner
		);
	}
}

if ($bpafb_items === '') {
	return;
}

$bpafb_columns = isset($attributes['columns']) ? min(6, absint($attributes['columns'])) : 0;

// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped inside scoped_vars_css().
echo $bpafb_s::scoped_vars_css($bpafb_uid, array_merge([
	'--bpafb-share-columns'     => $bpafb_columns ? (string) $bpafb_columns : '',
	'--bpafb-share-gap'         => $bpafb_s::px($attributes, 'gap'),
	'--bpafb-share-size'        => $bpafb_s::px($attributes, 'size'),
	'--bpafb-share-icon-size'   => $bpafb_s::px($attributes, 'iconSize'),
	'--bpafb-share-primary'     => $bpafb_custom_colors ? $bpafb_s::color($attributes, 'primaryColor') : '',
	'--bpafb-share-secondary'   => $bpafb_custom_colors ? $bpafb_s::color($attributes, 'secondaryColor') : '',
	'--bpafb-share-hover-primary' => $bpafb_custom_colors ? $bpafb_s::color($attributes, 'hoverPrimaryColor') : '',
	'--bpafb-share-hover-secondary' => $bpafb_custom_colors ? $bpafb_s::color($attributes, 'hoverSecondaryColor') : '',
], $bpafb_s::typography_vars($attributes, 'text', '--bpafb-share-text')));

printf(
	'<div %1$s><ul class="bpafb-share__list">%2$s</ul><span class="bpafb-share__status screen-reader-text" role="status" aria-live="polite"></span></div>',
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	get_block_wrapper_attributes([
		'class' => sprintf(
			'bpafb-share bpafb-share--view-%1$s bpafb-share--skin-%2$s bpafb-share--shape-%3$s bpafb-share--align-%4$s%5$s%6$s bpafb-uid-%7$s',
			$bpafb_view,
			$bpafb_skin,
			$bpafb_shape,
			$bpafb_align,
			$bpafb_align_mobile ? ' bpafb-share--align-mobile-' . $bpafb_align_mobile : '',
			$bpafb_columns ? ' bpafb-share--grid' : '',
			$bpafb_uid
		),
	]),
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped per item above.
	$bpafb_items
);
