<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Flip Box block. The back is revealed on hover
 * (devices with a mouse), on keyboard focus (:focus-within), and on tap
 * (view.js toggles `is-flipped` on touch screens).
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block default content (unused, dynamic block).
 * @var WP_Block $block      Block instance.
 */

$bpafb_s = 'Bpafb_Pro_Site_Blocks';
$bpafb_uid = $bpafb_s::uid($attributes, 'bpafb-flip-');
$bpafb_effect = isset($attributes['effect']) && in_array($attributes['effect'], ['flip', 'slide', 'push', 'fade', 'zoom-in', 'zoom-out'], true) ? $attributes['effect'] : 'flip';
$bpafb_direction = isset($attributes['direction']) && in_array($attributes['direction'], ['left', 'right', 'up', 'down'], true) ? $attributes['direction'] : 'left';
$bpafb_align = isset($attributes['contentAlign']) && in_array($attributes['contentAlign'], ['left', 'center', 'right'], true) ? $attributes['contentAlign'] : 'center';
$bpafb_valign = isset($attributes['verticalAlign']) && in_array($attributes['verticalAlign'], ['top', 'center', 'bottom'], true) ? $attributes['verticalAlign'] : 'center';
$bpafb_link = !empty($attributes['link']) ? $attributes['link'] : '';
$bpafb_new_tab = !empty($attributes['linkNewTab']);
$bpafb_box_link = $bpafb_link && isset($attributes['linkType']) && 'box' === $attributes['linkType'];

$bpafb_bg_url = function ($side) use ($attributes, $bpafb_s) {
	$id = isset($attributes[$side . 'BgImageId']) ? absint($attributes[$side . 'BgImageId']) : 0;
	$url = isset($attributes[$side . 'BgImageUrl']) ? $attributes[$side . 'BgImageUrl'] : '';
	return $bpafb_s::image_url($id, $url, 'large');
};

$bpafb_side = function ($side, $inner) use ($bpafb_bg_url) {
	$bg = $bpafb_bg_url($side);
	return sprintf(
		'<div class="bpafb-flip__side bpafb-flip__%1$s"%2$s><div class="bpafb-flip__overlay"></div><div class="bpafb-flip__content">%3$s</div></div>',
		esc_attr($side),
		$bg ? ' style="background-image:url(' . esc_url($bg) . ')"' : '',
		$inner
	);
};

// Front.
$bpafb_front = '';
$bpafb_graphic = isset($attributes['frontGraphic']) ? $attributes['frontGraphic'] : 'icon';
if ('icon' === $bpafb_graphic && !empty($attributes['frontIcon'])) {
	$bpafb_front .= '<div class="bpafb-flip__icon"><i class="' . esc_attr($bpafb_s::icon_class($attributes['frontIcon'])) . '" aria-hidden="true"></i></div>';
} elseif ('image' === $bpafb_graphic) {
	$bpafb_img = $bpafb_s::image_url(isset($attributes['frontImageId']) ? absint($attributes['frontImageId']) : 0, isset($attributes['frontImageUrl']) ? $attributes['frontImageUrl'] : '', 'medium');
	if ($bpafb_img) {
		$bpafb_front .= '<div class="bpafb-flip__image"><img src="' . esc_url($bpafb_img) . '" alt="" loading="lazy" decoding="async"></div>';
	}
}
if (!empty($attributes['frontTitle'])) {
	$bpafb_front .= '<h3 class="bpafb-flip__title">' . wp_kses_post($attributes['frontTitle']) . '</h3>';
}
if (!empty($attributes['frontDesc'])) {
	$bpafb_front .= '<div class="bpafb-flip__desc">' . wp_kses_post($attributes['frontDesc']) . '</div>';
}

// Back.
$bpafb_back = '';
if (!empty($attributes['backTitle'])) {
	$bpafb_back .= '<h3 class="bpafb-flip__title">' . wp_kses_post($attributes['backTitle']) . '</h3>';
}
if (!empty($attributes['backDesc'])) {
	$bpafb_back .= '<div class="bpafb-flip__desc">' . wp_kses_post($attributes['backDesc']) . '</div>';
}
if (!empty($attributes['buttonText'])) {
	$bpafb_back .= ($bpafb_link && !$bpafb_box_link)
		? '<a class="bpafb-flip__button"' . $bpafb_s::link_attrs($bpafb_link, $bpafb_new_tab) . '>' . esc_html($attributes['buttonText']) . '</a>'
		: '<span class="bpafb-flip__button">' . esc_html($attributes['buttonText']) . '</span>';
}
if ($bpafb_box_link) {
	$bpafb_back .= '<a class="bpafb-flip__box-link"' . $bpafb_s::link_attrs($bpafb_link, $bpafb_new_tab) . '><span class="screen-reader-text">'
		. esc_html(wp_strip_all_tags(!empty($attributes['backTitle']) ? $attributes['backTitle'] : (isset($attributes['buttonText']) ? $attributes['buttonText'] : __('Learn more', 'blockive-premium-addon-for-block-pro'))))
		. '</span></a>';
}

// Keyboard users need something focusable to reveal the back when it
// holds no link of its own.
$bpafb_focusable = !$bpafb_link;

// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped inside scoped_vars_css().
echo $bpafb_s::scoped_vars_css($bpafb_uid, array_merge([
	'--bpafb-flip-height'         => $bpafb_s::px($attributes, 'height'),
	'--bpafb-flip-height-mobile'  => $bpafb_s::px($attributes, 'heightMobile'),
	'--bpafb-flip-radius'         => $bpafb_s::px($attributes, 'radius'),
	'--bpafb-flip-padding'        => $bpafb_s::px($attributes, 'padding'),
	'--bpafb-flip-duration'       => isset($attributes['duration']) ? min(3000, absint($attributes['duration'])) . 'ms' : '',
	'--bpafb-flip-front-bg'       => $bpafb_s::color($attributes, 'frontBg'),
	'--bpafb-flip-front-overlay'  => $bpafb_s::color($attributes, 'frontOverlay'),
	'--bpafb-flip-front-color'    => $bpafb_s::color($attributes, 'frontColor'),
	'--bpafb-flip-back-bg'        => $bpafb_s::color($attributes, 'backBg'),
	'--bpafb-flip-back-overlay'   => $bpafb_s::color($attributes, 'backOverlay'),
	'--bpafb-flip-back-color'     => $bpafb_s::color($attributes, 'backColor'),
	'--bpafb-flip-icon-size'      => $bpafb_s::px($attributes, 'iconSize'),
	'--bpafb-flip-icon-color'     => $bpafb_s::color($attributes, 'iconColor'),
	'--bpafb-flip-btn-color'      => $bpafb_s::color($attributes, 'buttonColor'),
	'--bpafb-flip-btn-bg'         => $bpafb_s::color($attributes, 'buttonBgColor'),
	'--bpafb-flip-btn-hover-color' => $bpafb_s::color($attributes, 'buttonHoverColor'),
	'--bpafb-flip-btn-hover-bg'   => $bpafb_s::color($attributes, 'buttonHoverBgColor'),
	'--bpafb-flip-btn-radius'     => $bpafb_s::px($attributes, 'buttonRadius'),
], $bpafb_s::typography_vars($attributes, 'title', '--bpafb-flip-title'), $bpafb_s::typography_vars($attributes, 'desc', '--bpafb-flip-desc')));

$bpafb_wrapper = [
	'class' => sprintf(
		'bpafb-flip bpafb-flip--%1$s bpafb-flip--dir-%2$s bpafb-flip--align-%3$s bpafb-flip--valign-%4$s bpafb-uid-%5$s',
		$bpafb_effect,
		$bpafb_direction,
		$bpafb_align,
		$bpafb_valign,
		$bpafb_uid
	),
];
if ($bpafb_focusable) {
	$bpafb_wrapper['tabindex'] = '0';
}

printf(
	'<div %1$s><div class="bpafb-flip__inner">%2$s%3$s</div></div>',
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	get_block_wrapper_attributes($bpafb_wrapper),
	// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped above.
	$bpafb_side('front', $bpafb_front),
	$bpafb_side('back', $bpafb_back)
	// phpcs:enable
);
