<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Container block: a flexible responsive container
 * (matching ELB flex-container layout, UX, and controls) that lays out
 * whatever blocks are nested inside it ($content).
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Inner blocks' rendered HTML.
 * @var WP_Block $block      Block instance.
 */

$bpafb_allowed_tags = ['div', 'section', 'header', 'footer', 'article', 'aside', 'main', 'nav'];
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

$bpafb_content_width = isset($attributes['contentWidth']) ? $attributes['contentWidth'] : 'boxed';
$bpafb_boxed_unit = isset($attributes['boxedWidthUnit']) ? $attributes['boxedWidthUnit'] : 'px';
$bpafb_boxed_width = isset($attributes['boxedWidth']) && is_numeric($attributes['boxedWidth']) ? floatval($attributes['boxedWidth']) : 1200;

$bpafb_min_height_unit = isset($attributes['minHeightUnit']) ? $attributes['minHeightUnit'] : 'px';
$bpafb_overflow = isset($attributes['overflow']) && in_array($attributes['overflow'], ['visible', 'hidden'], true)
	? $attributes['overflow']
	: 'visible';

$bpafb_gap_linked = !isset($attributes['gapLinked']) || !empty($attributes['gapLinked']);
$bpafb_gap_unit = isset($attributes['gapUnit']) ? $attributes['gapUnit'] : 'px';

$bpafb_container_width_unit = isset($attributes['containerWidthUnit']) ? $attributes['containerWidthUnit'] : '%';

$bpafb_style = sprintf(
	'display:flex;flex-direction:%1$s;flex-wrap:%2$s;justify-content:%3$s;align-items:%4$s;overflow:%5$s;',
	esc_attr($bpafb_direction),
	esc_attr($bpafb_wrap),
	esc_attr($bpafb_justify),
	esc_attr($bpafb_align),
	esc_attr($bpafb_overflow)
);

if ($bpafb_content_width === 'boxed') {
	$bpafb_style .= sprintf('max-width:%1$s%2$s;margin-left:auto;margin-right:auto;', floatval($bpafb_boxed_width), esc_attr($bpafb_boxed_unit));
}

if (!empty($attributes['minHeight']) && is_numeric($attributes['minHeight'])) {
	$bpafb_style .= sprintf('min-height:%1$s%2$s;', floatval($attributes['minHeight']), esc_attr($bpafb_min_height_unit));
}

if ($bpafb_gap_linked) {
	if (isset($attributes['gap']) && is_numeric($attributes['gap'])) {
		$bpafb_style .= sprintf('gap:%1$s%2$s;', floatval($attributes['gap']), esc_attr($bpafb_gap_unit));
	}
} else {
	if (isset($attributes['rowGap']) && is_numeric($attributes['rowGap'])) {
		$bpafb_style .= sprintf('row-gap:%1$s%2$s;', floatval($attributes['rowGap']), esc_attr($bpafb_gap_unit));
	}
	if (isset($attributes['columnGap']) && is_numeric($attributes['columnGap'])) {
		$bpafb_style .= sprintf('column-gap:%1$s%2$s;', floatval($attributes['columnGap']), esc_attr($bpafb_gap_unit));
	}
}

if (isset($attributes['containerWidth']) && is_numeric($attributes['containerWidth'])) {
	$bpafb_cw = floatval($attributes['containerWidth']) . esc_attr($bpafb_container_width_unit);
	$bpafb_style .= sprintf('flex:0 1 %1$s;max-width:%1$s;min-width:0;', $bpafb_cw);
}

// Responsive Breakpoints: Tablet (1024px) & Mobile (767px)
$bpafb_breakpoints = [
	'Tablet' => '(max-width: 1024px)',
	'Mobile' => '(max-width: 767px)',
];
$bpafb_responsive_css = '';
foreach ($bpafb_breakpoints as $bpafb_suffix => $bpafb_media) {
	$bpafb_rules = '';
	if (!empty($attributes['direction' . $bpafb_suffix]) && in_array($attributes['direction' . $bpafb_suffix], $bpafb_allowed_directions, true)) {
		$bpafb_rules .= 'flex-direction:' . esc_attr($attributes['direction' . $bpafb_suffix]) . ' !important;';
	}
	if (!empty($attributes['wrap' . $bpafb_suffix]) && in_array($attributes['wrap' . $bpafb_suffix], $bpafb_allowed_wraps, true)) {
		$bpafb_rules .= 'flex-wrap:' . esc_attr($attributes['wrap' . $bpafb_suffix]) . ' !important;';
	}
	if (!empty($attributes['justifyContent' . $bpafb_suffix]) && in_array($attributes['justifyContent' . $bpafb_suffix], $bpafb_allowed_justify, true)) {
		$bpafb_rules .= 'justify-content:' . esc_attr($attributes['justifyContent' . $bpafb_suffix]) . ' !important;';
	}
	if (!empty($attributes['alignItems' . $bpafb_suffix]) && in_array($attributes['alignItems' . $bpafb_suffix], $bpafb_allowed_align, true)) {
		$bpafb_rules .= 'align-items:' . esc_attr($attributes['alignItems' . $bpafb_suffix]) . ' !important;';
	}

	if ($bpafb_gap_linked) {
		if (isset($attributes['gap' . $bpafb_suffix]) && is_numeric($attributes['gap' . $bpafb_suffix])) {
			$bpafb_rules .= 'gap:' . floatval($attributes['gap' . $bpafb_suffix]) . esc_attr($bpafb_gap_unit) . ' !important;';
		}
	} else {
		if (isset($attributes['rowGap' . $bpafb_suffix]) && is_numeric($attributes['rowGap' . $bpafb_suffix])) {
			$bpafb_rules .= 'row-gap:' . floatval($attributes['rowGap' . $bpafb_suffix]) . esc_attr($bpafb_gap_unit) . ' !important;';
		}
		if (isset($attributes['columnGap' . $bpafb_suffix]) && is_numeric($attributes['columnGap' . $bpafb_suffix])) {
			$bpafb_rules .= 'column-gap:' . floatval($attributes['columnGap' . $bpafb_suffix]) . esc_attr($bpafb_gap_unit) . ' !important;';
		}
	}

	if ($bpafb_content_width === 'boxed' && isset($attributes['boxedWidth' . $bpafb_suffix]) && is_numeric($attributes['boxedWidth' . $bpafb_suffix])) {
		$bpafb_rules .= 'max-width:' . floatval($attributes['boxedWidth' . $bpafb_suffix]) . esc_attr($bpafb_boxed_unit) . ' !important;';
	}
	if (isset($attributes['minHeight' . $bpafb_suffix]) && is_numeric($attributes['minHeight' . $bpafb_suffix])) {
		$bpafb_rules .= 'min-height:' . floatval($attributes['minHeight' . $bpafb_suffix]) . esc_attr($bpafb_min_height_unit) . ' !important;';
	}
	if (isset($attributes['containerWidth' . $bpafb_suffix]) && is_numeric($attributes['containerWidth' . $bpafb_suffix])) {
		$bpafb_rcw = floatval($attributes['containerWidth' . $bpafb_suffix]) . esc_attr($bpafb_container_width_unit);
		$bpafb_rules .= 'flex:0 1 ' . $bpafb_rcw . ' !important;max-width:' . $bpafb_rcw . ' !important;';
	}

	if ($bpafb_rules) {
		$bpafb_responsive_css .= '@media ' . $bpafb_media . ' { .bpafb-uid-' . $bpafb_uid . ' { ' . $bpafb_rules . ' } }';
	}
}
if ($bpafb_responsive_css) {
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	echo '<style>' . $bpafb_responsive_css . '</style>';
}

$bpafb_classes = 'bpafb-container bpafb-uid-' . $bpafb_uid;
if ($bpafb_content_width === 'boxed') {
	$bpafb_classes .= ' is-boxed';
}
if (!empty($attributes['equalHeight'])) {
	$bpafb_classes .= ' is-equal-height';
}

printf(
	'<%1$s %2$s>%3$s</%1$s>',
	esc_attr($bpafb_tag),
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	get_block_wrapper_attributes([
		'class' => $bpafb_classes,
		'style' => $bpafb_style,
	]),
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- already-rendered inner blocks.
	$content
);
