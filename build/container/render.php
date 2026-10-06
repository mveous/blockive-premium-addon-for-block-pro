<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Container block: a flexbox wrapper around
 * whatever blocks are nested inside it ($content). Its own layout
 * attributes (direction/wrap/justify/align/gap) are applied here; every
 * other visual setting (background, border, shadow, spacing, animation,
 * and so on) comes from the same "Advanced" tab every Blockive block
 * shares, and is applied automatically by
 * Bpafb_Core::bpafb_render_block_container() via the `render_block` filter,
 * once it finds this wrapper's tag.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Inner blocks' rendered HTML.
 * @var WP_Block $block      Block instance.
 */

$bpafb_allowed_tags = ['div', 'section', 'header', 'footer', 'article', 'aside', 'main'];
$bpafb_tag = isset($attributes['tagName']) && in_array($attributes['tagName'], $bpafb_allowed_tags, true)
	? $attributes['tagName']
	: 'div';

$bpafb_uid = Bpafb_Pro_Site_Blocks::uid($attributes, 'bpafb-container-');

$bpafb_allowed_directions = ['row', 'row-reverse', 'column', 'column-reverse'];
$bpafb_direction = isset($attributes['direction']) && in_array($attributes['direction'], $bpafb_allowed_directions, true)
	? $attributes['direction']
	: 'row';

$bpafb_allowed_wraps = ['nowrap', 'wrap', 'wrap-reverse'];
$bpafb_wrap = isset($attributes['wrap']) && in_array($attributes['wrap'], $bpafb_allowed_wraps, true)
	? $attributes['wrap']
	: 'nowrap';

$bpafb_allowed_justify = ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'];
$bpafb_justify = isset($attributes['justifyContent']) && in_array($attributes['justifyContent'], $bpafb_allowed_justify, true)
	? $attributes['justifyContent']
	: 'flex-start';

$bpafb_allowed_align = ['stretch', 'flex-start', 'center', 'flex-end', 'baseline'];
$bpafb_align = isset($attributes['alignItems']) && in_array($attributes['alignItems'], $bpafb_allowed_align, true)
	? $attributes['alignItems']
	: 'stretch';

$bpafb_gap = isset($attributes['gap']) && is_numeric($attributes['gap']) ? floatval($attributes['gap']) . 'px' : '';

$bpafb_style = sprintf(
	'display:flex;flex-direction:%1$s;flex-wrap:%2$s;justify-content:%3$s;align-items:%4$s;',
	esc_attr($bpafb_direction),
	esc_attr($bpafb_wrap),
	esc_attr($bpafb_justify),
	esc_attr($bpafb_align)
);
if ($bpafb_gap !== '') {
	$bpafb_style .= 'gap:' . esc_attr($bpafb_gap) . ';';
}

// Same two breakpoints the shared Advanced tab's own per-device Padding and
// Margin controls use (see Bpafb_Core::bpafb_build_responsive_css).
$bpafb_breakpoints = [
	'Tablet' => '(max-width: 1024px)',
	'Mobile' => '(max-width: 767px)',
];
$bpafb_responsive_css = '';
foreach ($bpafb_breakpoints as $bpafb_suffix => $bpafb_media) {
	$bpafb_rules = '';
	if (!empty($attributes['direction' . $bpafb_suffix]) && in_array($attributes['direction' . $bpafb_suffix], $bpafb_allowed_directions, true)) {
		$bpafb_rules .= 'flex-direction:' . esc_attr($attributes['direction' . $bpafb_suffix]) . ';';
	}
	if (isset($attributes['gap' . $bpafb_suffix]) && is_numeric($attributes['gap' . $bpafb_suffix])) {
		$bpafb_rules .= 'gap:' . floatval($attributes['gap' . $bpafb_suffix]) . 'px;';
	}
	if ($bpafb_rules) {
		$bpafb_responsive_css .= '@media ' . $bpafb_media . ' { .bpafb-uid-' . $bpafb_uid . ' { ' . $bpafb_rules . ' } }';
	}
}
if ($bpafb_responsive_css) {
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- built entirely from esc_attr()'d/validated pieces above.
	echo '<style>' . $bpafb_responsive_css . '</style>';
}

printf(
	'<%1$s %2$s>%3$s</%1$s>',
	esc_attr($bpafb_tag),
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	get_block_wrapper_attributes([
		'class' => 'bpafb-container bpafb-uid-' . $bpafb_uid,
		'style' => $bpafb_style,
	]),
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- already-rendered inner blocks.
	$content
);
