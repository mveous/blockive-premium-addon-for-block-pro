<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Testimonial Carousel block: quotes with an
 * optional photo, name, and title in the shared carousel
 * (Bpafb_Pro_Carousel). Without JavaScript the first slides simply show.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block default content (unused, dynamic block).
 * @var WP_Block $block      Block instance.
 */

$bpafb_items = isset($attributes['items']) && is_array($attributes['items']) ? array_values($attributes['items']) : [];
if (!$bpafb_items) {
	return;
}

$bpafb_s = 'Bpafb_Pro_Site_Blocks';
$bpafb_uid = $bpafb_s::uid($attributes, 'bpafb-testimonial-carousel-');
$bpafb_skin = isset($attributes['skin']) && 'bubble' === $attributes['skin'] ? 'bubble' : 'default';
$bpafb_layout = isset($attributes['layout']) && in_array($attributes['layout'], ['image_inline', 'image_stacked', 'image_above', 'image_left', 'image_right'], true) ? $attributes['layout'] : 'image_inline';
$bpafb_align = isset($attributes['align']) && in_array($attributes['align'], ['left', 'center', 'right'], true) ? $attributes['align'] : 'center';

$bpafb_slides = [];
foreach ($bpafb_items as $bpafb_item) {
	$bpafb_text = isset($bpafb_item['content']) ? trim($bpafb_item['content']) : '';
	$bpafb_name = isset($bpafb_item['name']) ? $bpafb_item['name'] : '';
	if ('' === $bpafb_text && '' === $bpafb_name) {
		continue;
	}

	$bpafb_img_url = $bpafb_s::image_url(isset($bpafb_item['imageId']) ? absint($bpafb_item['imageId']) : 0, isset($bpafb_item['imageUrl']) ? $bpafb_item['imageUrl'] : '', 'thumbnail');
	// The name is right beside the photo, so the photo itself is decorative.
	$bpafb_image = $bpafb_img_url ? '<img class="bpafb-tc__image" src="' . esc_url($bpafb_img_url) . '" alt="" loading="lazy" decoding="async">' : '';

	$bpafb_name_html = '';
	if ('' !== $bpafb_name) {
		$bpafb_name_html = !empty($bpafb_item['link'])
			? '<a class="bpafb-tc__name"' . $bpafb_s::link_attrs($bpafb_item['link'], !empty($bpafb_item['newTab'])) . '>' . wp_kses_post($bpafb_name) . '</a>'
			: '<span class="bpafb-tc__name">' . wp_kses_post($bpafb_name) . '</span>';
	}
	$bpafb_title_html = !empty($bpafb_item['title']) ? '<span class="bpafb-tc__title">' . wp_kses_post($bpafb_item['title']) . '</span>' : '';
	$bpafb_cite = ($bpafb_name_html || $bpafb_title_html) ? '<div class="bpafb-tc__cite">' . $bpafb_name_html . $bpafb_title_html . '</div>' : '';
	$bpafb_quote = '' !== $bpafb_text ? '<blockquote class="bpafb-tc__text">' . wp_kses_post($bpafb_text) . '</blockquote>' : '';

	switch ($bpafb_layout) {
		case 'image_above':
			$bpafb_inner = $bpafb_image . $bpafb_quote . $bpafb_cite;
			break;
		case 'image_left':
		case 'image_right':
			$bpafb_inner = $bpafb_image . '<div class="bpafb-tc__body">' . $bpafb_quote . $bpafb_cite . '</div>';
			break;
		default: // image_inline, image_stacked.
			$bpafb_inner = $bpafb_quote . (($bpafb_image || $bpafb_cite) ? '<div class="bpafb-tc__footer">' . $bpafb_image . $bpafb_cite . '</div>' : '');
	}

	$bpafb_slides[] = '<div class="bpafb-tc__item">' . $bpafb_inner . '</div>';
}

if (!$bpafb_slides) {
	return;
}

// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped inside scoped_vars_css().
echo $bpafb_s::scoped_vars_css($bpafb_uid, array_merge(
	Bpafb_Pro_Carousel::vars($attributes),
	[
		'--bpafb-tc-image-size'   => $bpafb_s::px($attributes, 'imageSize'),
		'--bpafb-tc-image-radius' => isset($attributes['imageRadius']) && is_numeric($attributes['imageRadius']) ? min(50, absint($attributes['imageRadius'])) . '%' : '',
		'--bpafb-tc-bg'           => $bpafb_s::color($attributes, 'cardBgColor'),
		'--bpafb-tc-border-color' => $bpafb_s::color($attributes, 'cardBorderColor'),
		'--bpafb-tc-border-width' => $bpafb_s::px($attributes, 'cardBorderWidth'),
		'--bpafb-tc-radius'       => $bpafb_s::px($attributes, 'cardRadius'),
		'--bpafb-tc-padding'      => $bpafb_s::px($attributes, 'cardPadding'),
		'--bpafb-tc-content-color' => $bpafb_s::color($attributes, 'contentColor'),
		'--bpafb-tc-name-color'   => $bpafb_s::color($attributes, 'nameColor'),
		'--bpafb-tc-title-color'  => $bpafb_s::color($attributes, 'titleColor'),
	],
	$bpafb_s::typography_vars($attributes, 'content', '--bpafb-tc-content'),
	$bpafb_s::typography_vars($attributes, 'name', '--bpafb-tc-name'),
	$bpafb_s::typography_vars($attributes, 'title', '--bpafb-tc-title')
));

printf(
	'<div %1$s>%2$s</div>',
	// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped above.
	get_block_wrapper_attributes(Bpafb_Pro_Carousel::wrapper_attrs(
		$attributes,
		sprintf(
			'bpafb-tc bpafb-tc--skin-%1$s bpafb-tc--%2$s bpafb-tc--align-%3$s bpafb-uid-%4$s',
			$bpafb_skin,
			str_replace('_', '-', $bpafb_layout),
			$bpafb_align,
			$bpafb_uid
		),
		__('Testimonials', 'blockive-premium-addon-for-block-pro')
	)),
	Bpafb_Pro_Carousel::markup($attributes, $bpafb_slides)
	// phpcs:enable
);
