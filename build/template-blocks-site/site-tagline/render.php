<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Site Tagline block.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block default content (unused, dynamic block).
 * @var WP_Block $block      Block instance.
 */

$bpafb_tagline = get_bloginfo('description');
if ($bpafb_tagline === '') {
	return;
}

$bpafb_tags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div', 'span'];
$bpafb_tag = isset($attributes['tagName']) && in_array($attributes['tagName'], $bpafb_tags, true) ? $attributes['tagName'] : 'p';
$bpafb_align = isset($attributes['textAlign']) && in_array($attributes['textAlign'], ['left', 'center', 'right'], true) ? $attributes['textAlign'] : '';
$bpafb_color = Bpafb_Pro_Site_Blocks::color($attributes, 'textColor');

printf(
	'<%1$s %2$s>%3$s</%1$s>',
	tag_escape($bpafb_tag),
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	get_block_wrapper_attributes([
		'class' => 'bpafb-tb-site-tagline',
		'style' => ($bpafb_align ? 'text-align:' . $bpafb_align . ';' : '') . ($bpafb_color ? 'color:' . $bpafb_color . ';' : ''),
	]),
	esc_html($bpafb_tagline)
);
