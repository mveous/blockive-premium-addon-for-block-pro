<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Call to Action block. Two skins: "classic"
 * (image beside or above the content) and "cover" (content over a
 * full-bleed image with an overlay).
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block default content (unused, dynamic block).
 * @var WP_Block $block      Block instance.
 */

$bpafb_s = 'Bpafb_Pro_Site_Blocks';
$bpafb_uid = $bpafb_s::uid($attributes, 'bpafb-cta-');
$bpafb_skin = isset($attributes['skin']) && 'cover' === $attributes['skin'] ? 'cover' : 'classic';
$bpafb_image_pos = isset($attributes['imagePosition']) && in_array($attributes['imagePosition'], ['left', 'right', 'top'], true) ? $attributes['imagePosition'] : 'left';
$bpafb_align = isset($attributes['contentAlign']) && in_array($attributes['contentAlign'], ['left', 'center', 'right'], true) ? $attributes['contentAlign'] : 'center';
$bpafb_valign = isset($attributes['verticalAlign']) && in_array($attributes['verticalAlign'], ['top', 'center', 'bottom'], true) ? $attributes['verticalAlign'] : 'center';
$bpafb_hover = isset($attributes['hoverEffect']) && in_array($attributes['hoverEffect'], ['none', 'zoom-in', 'zoom-out', 'move-left', 'move-right'], true) ? $attributes['hoverEffect'] : 'zoom-in';
$bpafb_title_tag = isset($attributes['titleTag']) && in_array($attributes['titleTag'], ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div'], true) ? $attributes['titleTag'] : 'h2';
$bpafb_link = !empty($attributes['link']) ? $attributes['link'] : '';
$bpafb_new_tab = !empty($attributes['linkNewTab']);
$bpafb_whole = $bpafb_link && !empty($attributes['linkWholeBox']);
$bpafb_title = isset($attributes['title']) ? wp_kses_post($attributes['title']) : '';
$bpafb_button_style = isset($attributes['buttonStyle']) && 'outline' === $attributes['buttonStyle'] ? 'outline' : 'filled';

// Media.
$bpafb_image_id = isset($attributes['imageId']) ? absint($attributes['imageId']) : 0;
$bpafb_image_html = '';
if ($bpafb_image_id && wp_attachment_is_image($bpafb_image_id)) {
	$bpafb_image_html = wp_get_attachment_image($bpafb_image_id, 'large', false, ['class' => 'bpafb-cta__img', 'alt' => isset($attributes['imageAlt']) ? $attributes['imageAlt'] : '']);
} elseif (!empty($attributes['imageUrl'])) {
	$bpafb_image_html = '<img class="bpafb-cta__img" src="' . esc_url($attributes['imageUrl']) . '" alt="' . esc_attr(isset($attributes['imageAlt']) ? $attributes['imageAlt'] : '') . '" loading="lazy" decoding="async">';
}
$bpafb_media = ($bpafb_image_html || 'cover' === $bpafb_skin)
	? '<div class="bpafb-cta__media">' . $bpafb_image_html . '<div class="bpafb-cta__overlay"></div></div>'
	: '';

// Content.
$bpafb_body = '';
if (isset($attributes['graphic']) && 'icon' === $attributes['graphic'] && !empty($attributes['icon'])) {
	$bpafb_body .= '<div class="bpafb-cta__icon"><i class="' . esc_attr($bpafb_s::icon_class($attributes['icon'])) . '" aria-hidden="true"></i></div>';
}
if ($bpafb_title !== '') {
	$bpafb_body .= sprintf('<%1$s class="bpafb-cta__title">%2$s</%1$s>', tag_escape($bpafb_title_tag), $bpafb_title);
}
if (!empty($attributes['description'])) {
	$bpafb_body .= '<div class="bpafb-cta__desc">' . wp_kses_post($attributes['description']) . '</div>';
}
if (!empty($attributes['buttonText'])) {
	// With the whole box linked, the button is visual only (the box link
	// covers it), so it must not be a second, nested link.
	$bpafb_body .= ($bpafb_link && !$bpafb_whole)
		? '<a class="bpafb-cta__button bpafb-cta__button--' . $bpafb_button_style . '"' . $bpafb_s::link_attrs($bpafb_link, $bpafb_new_tab) . '>' . esc_html($attributes['buttonText']) . '</a>'
		: '<span class="bpafb-cta__button bpafb-cta__button--' . $bpafb_button_style . '">' . esc_html($attributes['buttonText']) . '</span>';
}

$bpafb_ribbon = '';
if (!empty($attributes['ribbonText'])) {
	$bpafb_ribbon_pos = isset($attributes['ribbonPosition']) && 'left' === $attributes['ribbonPosition'] ? 'left' : 'right';
	$bpafb_ribbon = '<div class="bpafb-cta__ribbon bpafb-cta__ribbon--' . $bpafb_ribbon_pos . '"><span>' . esc_html($attributes['ribbonText']) . '</span></div>';
}

$bpafb_box_link = $bpafb_whole
	? '<a class="bpafb-cta__box-link"' . $bpafb_s::link_attrs($bpafb_link, $bpafb_new_tab) . '><span class="screen-reader-text">' . esc_html(wp_strip_all_tags($bpafb_title) ?: $attributes['buttonText']) . '</span></a>'
	: '';

// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped inside scoped_vars_css().
echo $bpafb_s::scoped_vars_css($bpafb_uid, array_merge([
	'--bpafb-cta-image-width'      => isset($attributes['imageWidth']) && is_numeric($attributes['imageWidth']) ? max(10, min(90, (int) $attributes['imageWidth'])) . '%' : '',
	'--bpafb-cta-image-min-height' => $bpafb_s::px($attributes, 'imageMinHeight'),
	'--bpafb-cta-min-height'       => $bpafb_s::px($attributes, 'minHeight'),
	'--bpafb-cta-padding'          => $bpafb_s::px($attributes, 'padding'),
	'--bpafb-cta-radius'           => $bpafb_s::px($attributes, 'borderRadius'),
	'--bpafb-cta-content-bg'       => $bpafb_s::color($attributes, 'contentBg'),
	'--bpafb-cta-overlay'          => $bpafb_s::color($attributes, 'overlayColor'),
	'--bpafb-cta-overlay-hover'    => $bpafb_s::color($attributes, 'overlayHoverColor'),
	'--bpafb-cta-icon-size'        => $bpafb_s::px($attributes, 'iconSize'),
	'--bpafb-cta-icon-color'       => $bpafb_s::color($attributes, 'iconColor'),
	'--bpafb-cta-title-color'      => $bpafb_s::color($attributes, 'titleColor'),
	'--bpafb-cta-desc-color'       => $bpafb_s::color($attributes, 'descColor'),
	'--bpafb-cta-btn-color'        => $bpafb_s::color($attributes, 'buttonColor'),
	'--bpafb-cta-btn-bg'           => $bpafb_s::color($attributes, 'buttonBgColor'),
	'--bpafb-cta-btn-hover-color'  => $bpafb_s::color($attributes, 'buttonHoverColor'),
	'--bpafb-cta-btn-hover-bg'     => $bpafb_s::color($attributes, 'buttonHoverBgColor'),
	'--bpafb-cta-btn-radius'       => $bpafb_s::px($attributes, 'buttonRadius'),
	'--bpafb-cta-ribbon-bg'        => $bpafb_s::color($attributes, 'ribbonBg'),
	'--bpafb-cta-ribbon-color'     => $bpafb_s::color($attributes, 'ribbonColor'),
], $bpafb_s::typography_vars($attributes, 'title', '--bpafb-cta-title'), $bpafb_s::typography_vars($attributes, 'desc', '--bpafb-cta-desc')));

printf(
	'<div %1$s>%2$s%3$s<div class="bpafb-cta__content">%4$s</div>%5$s</div>',
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	get_block_wrapper_attributes([
		'class' => sprintf(
			'bpafb-cta bpafb-cta--%1$s bpafb-cta--image-%2$s bpafb-cta--align-%3$s bpafb-cta--valign-%4$s bpafb-cta--hover-%5$s%6$s bpafb-uid-%7$s',
			$bpafb_skin,
			$bpafb_image_pos,
			$bpafb_align,
			$bpafb_valign,
			$bpafb_hover,
			$bpafb_image_html ? ' has-image' : '',
			$bpafb_uid
		),
	]),
	// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped -- all parts escaped above.
	$bpafb_box_link,
	$bpafb_media,
	$bpafb_body,
	$bpafb_ribbon
	// phpcs:enable
);
