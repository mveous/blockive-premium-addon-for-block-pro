<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Site Title block.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block default content (unused, dynamic block).
 * @var WP_Block $block      Block instance.
 */

$bpafb_title = get_bloginfo('name');
if ($bpafb_title === '') {
	return;
}

$bpafb_tags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div', 'span'];
$bpafb_tag = isset($attributes['tagName']) && in_array($attributes['tagName'], $bpafb_tags, true) ? $attributes['tagName'] : 'p';
$bpafb_uid = Bpafb_Pro_Site_Blocks::uid($attributes, 'bpafb-site-title-');
$bpafb_align = isset($attributes['textAlign']) && in_array($attributes['textAlign'], ['left', 'center', 'right'], true) ? $attributes['textAlign'] : '';
$bpafb_color = Bpafb_Pro_Site_Blocks::color($attributes, 'textColor');
$bpafb_hover = Bpafb_Pro_Site_Blocks::color($attributes, 'textHoverColor');

$bpafb_style = ($bpafb_align ? 'text-align:' . $bpafb_align . ';' : '') . ($bpafb_color ? 'color:' . $bpafb_color . ';' : '');

$bpafb_inner = esc_html($bpafb_title);
if (!isset($attributes['isLink']) || !empty($attributes['isLink'])) {
	$bpafb_target = isset($attributes['linkTarget']) && '_blank' === $attributes['linkTarget'] ? '_blank' : '_self';
	$bpafb_inner = sprintf(
		'<a href="%1$s" rel="home%2$s" target="%3$s"%4$s>%5$s</a>',
		esc_url(home_url('/')),
		'_blank' === $bpafb_target ? ' noopener noreferrer' : '',
		esc_attr($bpafb_target),
		(is_front_page() || is_home()) ? ' aria-current="page"' : '',
		$bpafb_inner
	);
}

if ($bpafb_hover) {
	printf(
		'<style>.bpafb-uid-%1$s:hover,.bpafb-uid-%1$s:hover a,.bpafb-uid-%1$s a:focus{color:%2$s !important;}</style>',
		esc_attr($bpafb_uid),
		esc_html($bpafb_hover)
	);
}

printf(
	'<%1$s %2$s>%3$s</%1$s>',
	tag_escape($bpafb_tag),
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	get_block_wrapper_attributes(['class' => 'bpafb-tb-site-title bpafb-uid-' . $bpafb_uid, 'style' => $bpafb_style]),
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped above.
	$bpafb_inner
);
