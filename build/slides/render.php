<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Slides block: an accessible hero slider
 * (WAI-ARIA carousel pattern) driven by view.js. Without JavaScript, the
 * first slide simply shows on its own.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block default content (unused, dynamic block).
 * @var WP_Block $block      Block instance.
 */

$bpafb_slides = isset($attributes['slides']) && is_array($attributes['slides']) ? array_values($attributes['slides']) : [];
if (!$bpafb_slides) {
	return;
}

$bpafb_s = 'Bpafb_Pro_Site_Blocks';
$bpafb_uid = $bpafb_s::uid($attributes, 'bpafb-slides-');
$bpafb_count = count($bpafb_slides);
$bpafb_effect = isset($attributes['effect']) && 'fade' === $attributes['effect'] ? 'fade' : 'slide';
$bpafb_nav = isset($attributes['navigation']) && in_array($attributes['navigation'], ['both', 'arrows', 'dots', 'none'], true) ? $attributes['navigation'] : 'both';
$bpafb_aligns = ['left', 'center', 'right'];
$bpafb_align = isset($attributes['contentAlign']) && in_array($attributes['contentAlign'], $bpafb_aligns, true) ? $attributes['contentAlign'] : 'center';
$bpafb_valign = isset($attributes['verticalAlign']) && in_array($attributes['verticalAlign'], ['top', 'center', 'bottom'], true) ? $attributes['verticalAlign'] : 'center';
$bpafb_heading_tag = isset($attributes['headingTag']) && in_array($attributes['headingTag'], ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div'], true) ? $attributes['headingTag'] : 'h2';
$bpafb_autoplay = $bpafb_count > 1 && (!isset($attributes['autoplay']) || !empty($attributes['autoplay']));
$bpafb_whole = !empty($attributes['linkWholeSlide']);
$bpafb_button_style = isset($attributes['buttonStyle']) && 'filled' === $attributes['buttonStyle'] ? 'filled' : 'outline';

$bpafb_items = '';
foreach ($bpafb_slides as $bpafb_i => $bpafb_slide) {
	$bpafb_slide_align = isset($bpafb_slide['align']) && in_array($bpafb_slide['align'], $bpafb_aligns, true) ? $bpafb_slide['align'] : $bpafb_align;
	$bpafb_bg_color = Bpafb_Template_Block_Render::sanitize_css_color(isset($bpafb_slide['bgColor']) ? $bpafb_slide['bgColor'] : '');
	$bpafb_overlay = Bpafb_Template_Block_Render::sanitize_css_color(isset($bpafb_slide['overlay']) ? $bpafb_slide['overlay'] : '');
	$bpafb_url = !empty($bpafb_slide['url']) ? $bpafb_slide['url'] : '';
	$bpafb_new_tab = !empty($bpafb_slide['newTab']);

	$bpafb_img_url = $bpafb_s::image_url(isset($bpafb_slide['bgImageId']) ? absint($bpafb_slide['bgImageId']) : 0, isset($bpafb_slide['bgImageUrl']) ? $bpafb_slide['bgImageUrl'] : '', 'full');
	$bpafb_bg = $bpafb_img_url
		? '<img class="bpafb-slides__bg" src="' . esc_url($bpafb_img_url) . '" alt="" decoding="async"' . (0 === $bpafb_i ? ' fetchpriority="high"' : ' loading="lazy"') . '>'
		: '';

	$bpafb_inner = '';
	if (!empty($bpafb_slide['heading'])) {
		$bpafb_inner .= sprintf('<%1$s class="bpafb-slides__heading">%2$s</%1$s>', tag_escape($bpafb_heading_tag), wp_kses_post($bpafb_slide['heading']));
	}
	if (!empty($bpafb_slide['description'])) {
		$bpafb_inner .= '<div class="bpafb-slides__desc">' . wp_kses_post($bpafb_slide['description']) . '</div>';
	}
	if (!empty($bpafb_slide['buttonText'])) {
		$bpafb_inner .= ($bpafb_url && !$bpafb_whole)
			? '<a class="bpafb-slides__button bpafb-slides__button--' . $bpafb_button_style . '"' . $bpafb_s::link_attrs($bpafb_url, $bpafb_new_tab) . '>' . esc_html($bpafb_slide['buttonText']) . '</a>'
			: '<span class="bpafb-slides__button bpafb-slides__button--' . $bpafb_button_style . '">' . esc_html($bpafb_slide['buttonText']) . '</span>';
	}

	$bpafb_link = ($bpafb_url && $bpafb_whole)
		? '<a class="bpafb-slides__link"' . $bpafb_s::link_attrs($bpafb_url, $bpafb_new_tab) . '><span class="screen-reader-text">' . esc_html(wp_strip_all_tags(isset($bpafb_slide['heading']) ? $bpafb_slide['heading'] : '')) . '</span></a>'
		: '';

	$bpafb_items .= sprintf(
		'<div class="bpafb-slides__slide bpafb-slides__slide--align-%1$s%2$s" role="group" aria-roledescription="%3$s" aria-label="%4$s"%5$s%6$s>%7$s<div class="bpafb-slides__overlay"%8$s></div><div class="bpafb-slides__content">%9$s</div>%10$s</div>',
		esc_attr($bpafb_slide_align),
		0 === $bpafb_i ? ' is-active' : '',
		esc_attr__('slide', 'blockive-premium-addon-for-block-pro'),
		/* translators: 1: slide number, 2: total slides. */
		esc_attr(sprintf(__('%1$d of %2$d', 'blockive-premium-addon-for-block-pro'), $bpafb_i + 1, $bpafb_count)),
		$bpafb_bg_color ? ' style="background-color:' . esc_attr($bpafb_bg_color) . '"' : '',
		0 === $bpafb_i ? '' : ' aria-hidden="true" inert',
		$bpafb_bg,
		$bpafb_overlay ? ' style="background:' . esc_attr($bpafb_overlay) . '"' : '',
		$bpafb_inner,
		$bpafb_link
	);
}

$bpafb_controls = '';
if ($bpafb_count > 1) {
	if ('both' === $bpafb_nav || 'arrows' === $bpafb_nav) {
		$bpafb_controls .= '<button type="button" class="bpafb-slides__arrow bpafb-slides__arrow--prev" aria-label="' . esc_attr__('Previous slide', 'blockive-premium-addon-for-block-pro') . '"><i class="fa-solid fa-chevron-left" aria-hidden="true"></i></button>'
			. '<button type="button" class="bpafb-slides__arrow bpafb-slides__arrow--next" aria-label="' . esc_attr__('Next slide', 'blockive-premium-addon-for-block-pro') . '"><i class="fa-solid fa-chevron-right" aria-hidden="true"></i></button>';
	}
	$bpafb_bottom = '';
	if ($bpafb_autoplay) {
		$bpafb_bottom .= '<button type="button" class="bpafb-slides__pause" aria-label="' . esc_attr__('Pause slideshow', 'blockive-premium-addon-for-block-pro') . '" data-label-play="' . esc_attr__('Play slideshow', 'blockive-premium-addon-for-block-pro') . '" data-label-pause="' . esc_attr__('Pause slideshow', 'blockive-premium-addon-for-block-pro') . '"><i class="fa-solid fa-pause" aria-hidden="true"></i></button>';
	}
	if ('both' === $bpafb_nav || 'dots' === $bpafb_nav) {
		$bpafb_dots = '';
		for ($bpafb_d = 0; $bpafb_d < $bpafb_count; $bpafb_d++) {
			$bpafb_dots .= sprintf(
				'<button type="button" class="bpafb-slides__dot%1$s" aria-label="%2$s"%3$s></button>',
				0 === $bpafb_d ? ' is-active' : '',
				/* translators: %d: slide number. */
				esc_attr(sprintf(__('Go to slide %d', 'blockive-premium-addon-for-block-pro'), $bpafb_d + 1)),
				0 === $bpafb_d ? ' aria-current="true"' : ''
			);
		}
		$bpafb_bottom .= '<div class="bpafb-slides__dots">' . $bpafb_dots . '</div>';
	}
	if ($bpafb_bottom) {
		$bpafb_controls .= '<div class="bpafb-slides__bottom">' . $bpafb_bottom . '</div>';
	}
}

// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped inside scoped_vars_css().
echo $bpafb_s::scoped_vars_css($bpafb_uid, array_merge([
	'--bpafb-slides-height'          => $bpafb_s::px($attributes, 'height'),
	'--bpafb-slides-height-tablet'   => $bpafb_s::px($attributes, 'heightTablet'),
	'--bpafb-slides-height-mobile'   => $bpafb_s::px($attributes, 'heightMobile'),
	'--bpafb-slides-content-width'   => $bpafb_s::px($attributes, 'contentWidth'),
	'--bpafb-slides-padding'         => $bpafb_s::px($attributes, 'padding'),
	'--bpafb-slides-radius'          => $bpafb_s::px($attributes, 'borderRadius'),
	'--bpafb-slides-speed'           => isset($attributes['speed']) ? min(3000, absint($attributes['speed'])) . 'ms' : '',
	'--bpafb-slides-heading-color'   => $bpafb_s::color($attributes, 'headingColor'),
	'--bpafb-slides-desc-color'      => $bpafb_s::color($attributes, 'descColor'),
	'--bpafb-slides-btn-color'       => $bpafb_s::color($attributes, 'buttonColor'),
	'--bpafb-slides-btn-bg'          => $bpafb_s::color($attributes, 'buttonBgColor'),
	'--bpafb-slides-btn-border'      => $bpafb_s::color($attributes, 'buttonBorderColor'),
	'--bpafb-slides-btn-hover-color' => $bpafb_s::color($attributes, 'buttonHoverColor'),
	'--bpafb-slides-btn-hover-bg'    => $bpafb_s::color($attributes, 'buttonHoverBgColor'),
	'--bpafb-slides-btn-radius'      => $bpafb_s::px($attributes, 'buttonRadius'),
	'--bpafb-slides-arrow-color'     => $bpafb_s::color($attributes, 'arrowColor'),
	'--bpafb-slides-arrow-size'      => $bpafb_s::px($attributes, 'arrowSize'),
	'--bpafb-slides-dot-color'       => $bpafb_s::color($attributes, 'dotColor'),
	'--bpafb-slides-dot-active'      => $bpafb_s::color($attributes, 'dotActiveColor'),
], $bpafb_s::typography_vars($attributes, 'heading', '--bpafb-slides-heading'), $bpafb_s::typography_vars($attributes, 'desc', '--bpafb-slides-desc')));

printf(
	'<div %1$s><div class="bpafb-slides__viewport"><div class="bpafb-slides__track" aria-live="%2$s">%3$s</div></div>%4$s</div>',
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	get_block_wrapper_attributes([
		'class'                 => sprintf(
			'bpafb-slides bpafb-slides--%1$s bpafb-slides--valign-%2$s%3$s bpafb-uid-%4$s',
			$bpafb_effect,
			$bpafb_valign,
			!empty($attributes['kenBurns']) ? ' bpafb-slides--ken-burns' : '',
			$bpafb_uid
		),
		'role'                  => 'region',
		'aria-roledescription'  => __('carousel', 'blockive-premium-addon-for-block-pro'),
		'aria-label'            => __('Slides', 'blockive-premium-addon-for-block-pro'),
		'data-autoplay'         => $bpafb_autoplay ? '1' : '0',
		'data-interval'         => (string) (isset($attributes['autoplaySpeed']) ? max(1500, absint($attributes['autoplaySpeed'])) : 5000),
		'data-loop'             => (!isset($attributes['loop']) || !empty($attributes['loop'])) ? '1' : '0',
		'data-pause-hover'      => (!isset($attributes['pauseOnHover']) || !empty($attributes['pauseOnHover'])) ? '1' : '0',
	]),
	$bpafb_autoplay ? 'off' : 'polite',
	// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped above.
	$bpafb_items,
	$bpafb_controls
	// phpcs:enable
);
