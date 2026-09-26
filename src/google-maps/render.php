<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Google Maps block. Uses Google's keyless embed
 * URL, so no API key or billing account is needed.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block default content (unused, dynamic block).
 * @var WP_Block $block      Block instance.
 */

$bpafb_address = isset($attributes['address']) ? trim(wp_strip_all_tags($attributes['address'])) : '';
if ($bpafb_address === '') {
	return;
}

$bpafb_uid = Bpafb_Pro_Site_Blocks::uid($attributes, 'bpafb-map-');
$bpafb_zoom = isset($attributes['zoom']) ? max(1, min(21, absint($attributes['zoom']))) : 14;
$bpafb_type = isset($attributes['mapType']) && 'satellite' === $attributes['mapType'] ? 'k' : 'm';
$bpafb_title = !empty($attributes['mapTitle']) ? $attributes['mapTitle'] : $bpafb_address;

$bpafb_src = add_query_arg(
	[
		'q'      => rawurlencode($bpafb_address),
		't'      => $bpafb_type,
		'z'      => $bpafb_zoom,
		'hl'     => substr(get_locale(), 0, 2),
		'output' => 'embed',
		'iwloc'  => 'near',
	],
	'https://maps.google.com/maps'
);

$bpafb_gray = function ($key) use ($attributes) {
	return isset($attributes[$key]) && is_numeric($attributes[$key]) ? max(0, min(100, (int) $attributes[$key])) . '%' : '';
};

// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped inside scoped_vars_css().
echo Bpafb_Pro_Site_Blocks::scoped_vars_css($bpafb_uid, [
	'--bpafb-map-height'          => Bpafb_Pro_Site_Blocks::px($attributes, 'height'),
	'--bpafb-map-height-tablet'   => Bpafb_Pro_Site_Blocks::px($attributes, 'heightTablet'),
	'--bpafb-map-height-mobile'   => Bpafb_Pro_Site_Blocks::px($attributes, 'heightMobile'),
	'--bpafb-map-radius'          => Bpafb_Pro_Site_Blocks::px($attributes, 'borderRadius'),
	'--bpafb-map-grayscale'       => $bpafb_gray('grayscale'),
	'--bpafb-map-hover-grayscale' => $bpafb_gray('hoverGrayscale'),
]);

printf(
	'<div %1$s><iframe class="bpafb-google-map__frame" src="%2$s" title="%3$s" loading="%4$s" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div>',
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	get_block_wrapper_attributes(['class' => 'bpafb-google-map bpafb-uid-' . $bpafb_uid]),
	esc_url($bpafb_src),
	esc_attr($bpafb_title),
	(!isset($attributes['lazy']) || !empty($attributes['lazy'])) ? 'lazy' : 'eager'
);
