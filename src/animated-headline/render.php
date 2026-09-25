<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Animated Headline block. Screen readers get the
 * whole sentence as plain text; the animated copy is aria-hidden. view.js
 * starts the animation once the headline scrolls into view. Without
 * JavaScript, or with reduced motion, the highlight is drawn and the first
 * rotating word shows.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block default content (unused, dynamic block).
 * @var WP_Block $block      Block instance.
 */

// Keep in sync with SHAPES in shapes.js.
$bpafb_shapes = [
	'circle'           => ['M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7'],
	'curly'            => ['M3,146.1c17.1-8.8,33.5-17.8,51.4-17.8c15.6,0,17.1,18.1,30.2,18.1c22.9,0,36-18.6,53.9-18.6c17.1,0,21.3,18.5,37.5,18.5c21.3,0,31.8-18.6,49-18.6c22.1,0,18.8,18.8,36.8,18.8c18.8,0,37.5-18.6,49-18.6c20.4,0,17.1,19,36.8,19c22.9,0,36.8-20.6,54.7-18.6c17.7,1.4,7.1,19.5,33.5,18.8c17.1,0,47.2-6.5,61.1-15.6'],
	'underline'        => ['M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7'],
	'double'           => ['M8.4,143.1c14.2-8,97.6-8.8,200.6-9.2c122.3-0.4,287.5,7.2,287.5,7.2', 'M8,19.4c72.3-5.3,162-7.8,216-7.8c54,0,136.2,0,267,7.8'],
	'double_underline' => ['M5,125.4c30.5-3.8,137.9-7.6,177.3-7.6c117.2,0,252.2,4.7,312.7,7.6', 'M26.9,143.8c55.1-6.1,126-6.3,162.2-6.1c46.5,0.2,203.9,3.2,268.9,6.4'],
	'zigzag'           => ['M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9'],
	'diagonal'         => ['M13.5,15.5c131,13.7,289.3,55.5,475,125.5'],
	'strikethrough'    => ['M3,75h493.5'],
	'x'                => ['M497.4,23.9C301.6,40,155.9,80.6,4,144.4', 'M14.1,27.6c204.5,20.3,393.8,74,467.3,111.7'],
];

$bpafb_s = 'Bpafb_Pro_Site_Blocks';
$bpafb_uid = $bpafb_s::uid($attributes, 'bpafb-ah-');
$bpafb_rotate = isset($attributes['style']) && 'rotate' === $attributes['style'];
$bpafb_tag = isset($attributes['tag']) && in_array($attributes['tag'], ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div', 'span'], true) ? $attributes['tag'] : 'h3';
$bpafb_align = isset($attributes['align']) && in_array($attributes['align'], ['left', 'center', 'right'], true) ? $attributes['align'] : 'center';
$bpafb_before = isset($attributes['beforeText']) ? trim(wp_strip_all_tags($attributes['beforeText'])) : '';
$bpafb_after = isset($attributes['afterText']) ? trim(wp_strip_all_tags($attributes['afterText'])) : '';

if ($bpafb_rotate) {
	$bpafb_words = array_values(array_filter(array_map('trim', preg_split('/\r\n|\r|\n/', isset($attributes['rotatingText']) ? wp_strip_all_tags($attributes['rotatingText']) : ''))));
	$bpafb_animation = isset($attributes['animation']) && in_array($attributes['animation'], ['typing', 'clip', 'flip', 'slide', 'slide-down', 'drop-in'], true) ? $attributes['animation'] : 'typing';
} else {
	$bpafb_highlighted = isset($attributes['highlightedText']) ? trim(wp_strip_all_tags($attributes['highlightedText'])) : '';
	$bpafb_words = '' !== $bpafb_highlighted ? [$bpafb_highlighted] : [];
	$bpafb_shape = isset($attributes['shape'], $bpafb_shapes[$attributes['shape']]) ? $attributes['shape'] : 'circle';
}

if ('' === $bpafb_before && '' === $bpafb_after && !$bpafb_words) {
	return;
}

// Plain sentence for assistive tech: the rotating words read as a list.
$bpafb_sentence = trim(implode(' ', array_filter([$bpafb_before, implode(', ', $bpafb_words), $bpafb_after], 'strlen')));

$bpafb_dynamic = '';
if ($bpafb_rotate && $bpafb_words) {
	$bpafb_items = '';
	foreach ($bpafb_words as $bpafb_i => $bpafb_word) {
		$bpafb_items .= '<span class="bpafb-ah__word' . (0 === $bpafb_i ? ' is-active' : '') . '">' . esc_html($bpafb_word) . '</span>';
	}
	$bpafb_dynamic = '<span class="bpafb-ah__dynamic bpafb-ah__words">' . $bpafb_items . '</span>';
} elseif ($bpafb_words) {
	$bpafb_paths = '';
	foreach ($bpafb_shapes[$bpafb_shape] as $bpafb_d) {
		$bpafb_paths .= '<path d="' . esc_attr($bpafb_d) . '" pathLength="1"></path>';
	}
	$bpafb_dynamic = '<span class="bpafb-ah__dynamic bpafb-ah__highlight"><span class="bpafb-ah__word">' . esc_html($bpafb_words[0]) . '</span>'
		. '<svg class="bpafb-ah__shape" viewBox="0 0 500 150" preserveAspectRatio="none" focusable="false">' . $bpafb_paths . '</svg></span>';
}

$bpafb_visual = implode(' ', array_filter([
	'' !== $bpafb_before ? '<span class="bpafb-ah__plain">' . esc_html($bpafb_before) . '</span>' : '',
	$bpafb_dynamic,
	'' !== $bpafb_after ? '<span class="bpafb-ah__plain">' . esc_html($bpafb_after) . '</span>' : '',
]));

$bpafb_inner = '<span class="screen-reader-text">' . esc_html($bpafb_sentence) . '</span><span class="bpafb-ah__visual" aria-hidden="true">' . $bpafb_visual . '</span>';
if (!empty($attributes['link'])) {
	$bpafb_inner = '<a class="bpafb-ah__link"' . $bpafb_s::link_attrs($attributes['link'], !empty($attributes['newTab'])) . '>' . $bpafb_inner . '</a>';
}

$bpafb_ms = function ($key, $default, $min, $max) use ($attributes) {
	return (string) (isset($attributes[$key]) && is_numeric($attributes[$key]) ? max($min, min($max, absint($attributes[$key]))) : $default);
};

// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped inside scoped_vars_css().
echo $bpafb_s::scoped_vars_css($bpafb_uid, array_merge(
	[
		'--bpafb-ah-word-color'       => $bpafb_s::color($attributes, 'wordColor'),
		'--bpafb-ah-shape-color'      => $bpafb_s::color($attributes, 'shapeColor'),
		'--bpafb-ah-shape-width'      => isset($attributes['shapeWidth']) && is_numeric($attributes['shapeWidth']) ? (string) max(1, min(30, absint($attributes['shapeWidth']))) : '',
		'--bpafb-ah-duration'         => $bpafb_ms('duration', 1200, 200, 5000) . 'ms',
		'--bpafb-ah-selection'        => $bpafb_s::color($attributes, 'typingSelectionColor'),
		'--bpafb-ah-cursor'           => $bpafb_s::color($attributes, 'typingCursorColor'),
	],
	$bpafb_s::typography_vars($attributes, 'word', '--bpafb-ah-word')
));

// The title's own typography and color, only for what was set, so the
// theme's heading styles apply otherwise (a var() fallback would override
// them).
$bpafb_title_css = '';
foreach ($bpafb_s::typography_vars($attributes, 'title', '') as $bpafb_prop => $bpafb_value) {
	if ('' !== $bpafb_value) {
		$bpafb_title_css .= esc_html(ltrim($bpafb_prop, '-')) . ':' . esc_html($bpafb_value) . ';';
	}
}
if ($bpafb_s::color($attributes, 'titleColor')) {
	$bpafb_title_css .= 'color:' . esc_html($bpafb_s::color($attributes, 'titleColor')) . ';';
}
if ($bpafb_title_css) {
	echo '<style>.bpafb-uid-' . esc_attr($bpafb_uid) . ' .bpafb-ah__title{' . $bpafb_title_css . '}</style>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped above.
}

printf(
	'<div %1$s><%2$s class="bpafb-ah__title">%3$s</%2$s></div>',
	// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped above.
	get_block_wrapper_attributes([
		'class'         => sprintf(
			'bpafb-ah bpafb-ah--%1$s bpafb-ah--align-%2$s%3$s%4$s%5$s bpafb-uid-%6$s',
			$bpafb_rotate ? 'rotate bpafb-ah--anim-' . $bpafb_animation : 'highlight bpafb-ah--shape-' . str_replace('_', '-', $bpafb_shape),
			$bpafb_align,
			(!$bpafb_rotate && !empty($attributes['shapeInFront'])) ? ' bpafb-ah--shape-front' : '',
			(!$bpafb_rotate && (!isset($attributes['roundedEdges']) || !empty($attributes['roundedEdges']))) ? ' bpafb-ah--rounded' : '',
			(!isset($attributes['loop']) || !empty($attributes['loop'])) ? ' bpafb-ah--loop' : '',
			$bpafb_uid
		),
		'data-duration' => $bpafb_ms('duration', 1200, 200, 5000),
		'data-delay'    => $bpafb_ms('delay', 2500, 500, 20000),
	]),
	tag_escape($bpafb_tag),
	$bpafb_inner
	// phpcs:enable
);
