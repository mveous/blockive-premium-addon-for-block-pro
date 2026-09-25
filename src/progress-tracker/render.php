<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Progress Tracker block: a reading-progress bar
 * fixed to the top or bottom of the window, or a circle in a corner. view.js
 * sets --bpafb-progress (0 to 1) as the visitor scrolls through the page,
 * the post content, or a chosen element. It only repeats what the scroll
 * position already tells, so it is hidden from assistive technology.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block default content (unused, dynamic block).
 * @var WP_Block $block      Block instance.
 */

$bpafb_s = 'Bpafb_Pro_Site_Blocks';
$bpafb_uid = $bpafb_s::uid($attributes, 'bpafb-progress-');
$bpafb_circular = isset($attributes['type']) && 'circular' === $attributes['type'];
$bpafb_relative = isset($attributes['relativeTo']) && in_array($attributes['relativeTo'], ['page', 'content', 'selector'], true) ? $attributes['relativeTo'] : 'page';
$bpafb_percent = !empty($attributes['showPercentage']) ? '<span class="bpafb-progress__percent">0%</span>' : '';

if ($bpafb_circular) {
	$bpafb_place = isset($attributes['corner']) && in_array($attributes['corner'], ['bottom-right', 'bottom-left', 'top-right', 'top-left'], true) ? $attributes['corner'] : 'bottom-left';
	$bpafb_inner = '<svg class="bpafb-progress__circle" viewBox="0 0 36 36" focusable="false"><circle class="bpafb-progress__track" cx="18" cy="18" r="16" pathLength="100"></circle><circle class="bpafb-progress__fill" cx="18" cy="18" r="16" pathLength="100"></circle></svg>' . $bpafb_percent;
} else {
	$bpafb_place = isset($attributes['position']) && 'bottom' === $attributes['position'] ? 'bottom' : 'top';
	$bpafb_inner = '<div class="bpafb-progress__bar"><div class="bpafb-progress__fill"></div></div>' . $bpafb_percent;
}

// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped inside scoped_vars_css().
echo $bpafb_s::scoped_vars_css($bpafb_uid, [
	'--bpafb-progress-height'       => $bpafb_s::px($attributes, 'height'),
	'--bpafb-progress-offset'       => $bpafb_s::px($attributes, 'offset'),
	'--bpafb-progress-circle-size'  => $bpafb_s::px($attributes, 'circleSize'),
	'--bpafb-progress-circle-width' => isset($attributes['circleWidth']) && is_numeric($attributes['circleWidth']) ? (string) max(1, min(10, floatval($attributes['circleWidth']))) : '',
	'--bpafb-progress-fill'         => $bpafb_s::color($attributes, 'fillColor'),
	'--bpafb-progress-track'        => $bpafb_s::color($attributes, 'trackColor'),
	'--bpafb-progress-percent'      => $bpafb_s::color($attributes, 'percentColor'),
]);

$bpafb_wrapper = [
	'class'         => sprintf(
		'bpafb-progress bpafb-progress--%1$s bpafb-progress--at-%2$s bpafb-uid-%3$s',
		$bpafb_circular ? 'circular' : 'horizontal',
		$bpafb_place,
		$bpafb_uid
	),
	'aria-hidden'   => 'true',
	'data-relative' => $bpafb_relative,
];
if ('selector' === $bpafb_relative && !empty($attributes['selector'])) {
	$bpafb_wrapper['data-selector'] = wp_strip_all_tags($attributes['selector']);
}

printf(
	'<div %1$s>%2$s</div>',
	// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped above.
	get_block_wrapper_attributes($bpafb_wrapper),
	$bpafb_inner
	// phpcs:enable
);
