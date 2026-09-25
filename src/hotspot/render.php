<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Hotspot block: an image with pins placed by
 * percentage. Each pin is a button that shows its tooltip (disclosure
 * pattern, driven by view.js). Without JavaScript, tooltips still show on
 * hover and keyboard focus.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block default content (unused, dynamic block).
 * @var WP_Block $block      Block instance.
 */

$bpafb_s = 'Bpafb_Pro_Site_Blocks';
$bpafb_img_url = $bpafb_s::image_url(isset($attributes['imageId']) ? absint($attributes['imageId']) : 0, isset($attributes['imageUrl']) ? $attributes['imageUrl'] : '', 'full');
if (!$bpafb_img_url) {
	return;
}

$bpafb_uid = $bpafb_s::uid($attributes, 'bpafb-hotspot-');
$bpafb_spots = isset($attributes['hotspots']) && is_array($attributes['hotspots']) ? array_values($attributes['hotspots']) : [];
$bpafb_alt = isset($attributes['alt']) ? $attributes['alt'] : '';
$bpafb_image_id = isset($attributes['imageId']) ? absint($attributes['imageId']) : 0;
$bpafb_img = ($bpafb_image_id && wp_get_attachment_image_url($bpafb_image_id, 'full'))
	? wp_get_attachment_image($bpafb_image_id, 'full', false, array_filter(['class' => 'bpafb-hotspot__image', 'alt' => $bpafb_alt]))
	: '<img class="bpafb-hotspot__image" src="' . esc_url($bpafb_img_url) . '" alt="' . esc_attr($bpafb_alt) . '" loading="lazy" decoding="async">';

$bpafb_pins = '';
foreach ($bpafb_spots as $bpafb_i => $bpafb_spot) {
	$bpafb_x = isset($bpafb_spot['x']) && is_numeric($bpafb_spot['x']) ? max(0, min(100, floatval($bpafb_spot['x']))) : 50;
	$bpafb_y = isset($bpafb_spot['y']) && is_numeric($bpafb_spot['y']) ? max(0, min(100, floatval($bpafb_spot['y']))) : 50;
	$bpafb_label = isset($bpafb_spot['label']) ? trim(wp_strip_all_tags($bpafb_spot['label'])) : '';
	$bpafb_icon = !empty($bpafb_spot['icon']) ? $bpafb_s::icon_class($bpafb_spot['icon']) : '';
	$bpafb_text = isset($bpafb_spot['content']) ? trim($bpafb_spot['content']) : '';
	$bpafb_position = isset($bpafb_spot['position']) && in_array($bpafb_spot['position'], ['top', 'bottom', 'left', 'right'], true) ? $bpafb_spot['position'] : 'top';
	$bpafb_tip_id = $bpafb_uid . '-tip-' . $bpafb_i;

	$bpafb_tip = '';
	if ('' !== $bpafb_text) {
		$bpafb_tip .= wpautop(wp_kses_post($bpafb_text));
	}
	if (!empty($bpafb_spot['link'])) {
		$bpafb_link_text = isset($bpafb_spot['linkText']) && '' !== trim($bpafb_spot['linkText']) ? $bpafb_spot['linkText'] : __('Learn more', 'blockive-premium-addon-for-block-pro');
		$bpafb_tip .= '<p><a class="bpafb-hotspot__link"' . $bpafb_s::link_attrs($bpafb_spot['link'], !empty($bpafb_spot['newTab'])) . '>' . esc_html($bpafb_link_text) . '</a></p>';
	}

	/* translators: %d: hotspot number. */
	$bpafb_name = '' !== $bpafb_label ? $bpafb_label : sprintf(__('Hotspot %d', 'blockive-premium-addon-for-block-pro'), $bpafb_i + 1);
	$bpafb_button = sprintf(
		'<button type="button" class="bpafb-hotspot__pin%1$s"%2$s>%3$s%4$s</button>',
		'' !== $bpafb_label ? ' bpafb-hotspot__pin--label' : '',
		$bpafb_tip ? ' aria-expanded="false" aria-controls="' . esc_attr($bpafb_tip_id) . '"' : '',
		$bpafb_icon ? '<i class="' . esc_attr($bpafb_icon) . '" aria-hidden="true"></i>' : '',
		'' !== $bpafb_label ? '<span>' . esc_html($bpafb_label) . '</span>' : '<span class="screen-reader-text">' . esc_html($bpafb_name) . '</span>'
	);

	$bpafb_pins .= sprintf(
		'<div class="bpafb-hotspot__spot bpafb-hotspot__spot--%1$s" style="left:%2$s%%;top:%3$s%%">%4$s%5$s</div>',
		$bpafb_position,
		esc_attr((string) $bpafb_x),
		esc_attr((string) $bpafb_y),
		$bpafb_button,
		$bpafb_tip ? '<div class="bpafb-hotspot__tooltip" id="' . esc_attr($bpafb_tip_id) . '">' . $bpafb_tip . '</div>' : ''
	);
}

// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped inside scoped_vars_css().
echo $bpafb_s::scoped_vars_css($bpafb_uid, array_merge(
	[
		'--bpafb-hotspot-pin-size'     => $bpafb_s::px($attributes, 'pinSize'),
		'--bpafb-hotspot-icon-size'    => $bpafb_s::px($attributes, 'pinIconSize'),
		'--bpafb-hotspot-pin-color'    => $bpafb_s::color($attributes, 'pinColor'),
		'--bpafb-hotspot-pin-bg'       => $bpafb_s::color($attributes, 'pinBgColor'),
		'--bpafb-hotspot-tip-width'    => $bpafb_s::px($attributes, 'tooltipWidth'),
		'--bpafb-hotspot-tip-color'    => $bpafb_s::color($attributes, 'tooltipColor'),
		'--bpafb-hotspot-tip-bg'       => $bpafb_s::color($attributes, 'tooltipBgColor'),
		'--bpafb-hotspot-tip-radius'   => $bpafb_s::px($attributes, 'tooltipRadius'),
	],
	$bpafb_s::typography_vars($attributes, 'tooltip', '--bpafb-hotspot-tip'),
	$bpafb_s::typography_vars($attributes, 'label', '--bpafb-hotspot-label')
));

printf(
	'<div %1$s><div class="bpafb-hotspot__stage">%2$s%3$s</div></div>',
	// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped above.
	get_block_wrapper_attributes([
		'class' => sprintf(
			'bpafb-hotspot bpafb-hotspot--trigger-%1$s%2$s bpafb-uid-%3$s',
			isset($attributes['trigger']) && 'hover' === $attributes['trigger'] ? 'hover' : 'click',
			(!isset($attributes['pulse']) || !empty($attributes['pulse'])) ? ' bpafb-hotspot--pulse' : '',
			$bpafb_uid
		),
	]),
	$bpafb_img,
	$bpafb_pins
	// phpcs:enable
);
