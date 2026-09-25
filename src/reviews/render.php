<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Reviews block: review cards (photo, name, title,
 * star rating, source icon, text) in the shared carousel
 * (Bpafb_Pro_Carousel).
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
$bpafb_uid = $bpafb_s::uid($attributes, 'bpafb-reviews-');
$bpafb_show_rating = !isset($attributes['showRating']) || !empty($attributes['showRating']);
$bpafb_show_icon = !isset($attributes['showIcon']) || !empty($attributes['showIcon']);
$bpafb_official = !isset($attributes['iconColorMode']) || 'custom' !== $attributes['iconColorMode'];

// Brand colors for "Official Color" icons; keep in sync with edit.js.
$bpafb_brand_colors = [
	'google'       => '#4285f4',
	'facebook'     => '#1877f2',
	'facebook-f'   => '#1877f2',
	'x-twitter'    => '#000000',
	'twitter'      => '#1da1f2',
	'yelp'         => '#d32323',
	'tripadvisor'  => '#34e0a1',
	'amazon'       => '#ff9900',
	'airbnb'       => '#ff5a5f',
	'apple'        => '#000000',
	'app-store'    => '#0d96f6',
	'google-play'  => '#01875f',
	'instagram'    => '#e4405f',
	'linkedin'     => '#0a66c2',
	'linkedin-in'  => '#0a66c2',
	'youtube'      => '#ff0000',
	'etsy'         => '#f1641e',
	'shopify'      => '#95bf47',
	'product-hunt' => '#da552f',
	'wordpress'    => '#21759b',
	'tiktok'       => '#000000',
];

$bpafb_slides = [];
foreach ($bpafb_items as $bpafb_item) {
	$bpafb_text = isset($bpafb_item['content']) ? trim($bpafb_item['content']) : '';
	$bpafb_name = isset($bpafb_item['name']) ? $bpafb_item['name'] : '';
	if ('' === $bpafb_text && '' === $bpafb_name) {
		continue;
	}

	$bpafb_img_url = $bpafb_s::image_url(isset($bpafb_item['imageId']) ? absint($bpafb_item['imageId']) : 0, isset($bpafb_item['imageUrl']) ? $bpafb_item['imageUrl'] : '', 'thumbnail');
	$bpafb_image = $bpafb_img_url ? '<img class="bpafb-reviews__image" src="' . esc_url($bpafb_img_url) . '" alt="" loading="lazy" decoding="async">' : '';

	$bpafb_name_html = '';
	if ('' !== $bpafb_name) {
		$bpafb_name_html = !empty($bpafb_item['link'])
			? '<a class="bpafb-reviews__name"' . $bpafb_s::link_attrs($bpafb_item['link'], !empty($bpafb_item['newTab'])) . '>' . wp_kses_post($bpafb_name) . '</a>'
			: '<span class="bpafb-reviews__name">' . wp_kses_post($bpafb_name) . '</span>';
	}
	$bpafb_title_html = !empty($bpafb_item['title']) ? '<span class="bpafb-reviews__title">' . wp_kses_post($bpafb_item['title']) . '</span>' : '';

	// Stars, rounded to the nearest half; the whole row is one image
	// with a text alternative for screen readers.
	$bpafb_rating_html = '';
	if ($bpafb_show_rating && isset($bpafb_item['rating']) && is_numeric($bpafb_item['rating'])) {
		$bpafb_rating = max(0, min(5, round(floatval($bpafb_item['rating']) * 2) / 2));
		$bpafb_stars = '';
		for ($bpafb_i = 1; $bpafb_i <= 5; $bpafb_i++) {
			$bpafb_state = $bpafb_rating >= $bpafb_i ? ' is-full' : ($bpafb_rating >= $bpafb_i - 0.5 ? ' is-half' : '');
			$bpafb_stars .= '<span class="bpafb-reviews__star' . $bpafb_state . '"><i class="fa-solid fa-star"></i><span class="bpafb-reviews__star-fill"><i class="fa-solid fa-star"></i></span></span>';
		}
		$bpafb_rating_html = sprintf(
			'<div class="bpafb-reviews__rating" role="img" aria-label="%1$s">%2$s</div>',
			/* translators: %s: rating, e.g. 4.5. */
			esc_attr(sprintf(__('Rated %s out of 5', 'blockive-premium-addon-for-block-pro'), number_format_i18n($bpafb_rating, floor($bpafb_rating) == $bpafb_rating ? 0 : 1))),
			$bpafb_stars
		);
	}

	$bpafb_icon_html = '';
	$bpafb_icon = $bpafb_show_icon && !empty($bpafb_item['icon']) ? $bpafb_s::icon_class($bpafb_item['icon']) : '';
	if ($bpafb_icon) {
		$bpafb_style = '';
		if ($bpafb_official && preg_match('/\bfa-([a-z0-9-]+)\s*$/', $bpafb_icon, $bpafb_m) && isset($bpafb_brand_colors[$bpafb_m[1]])) {
			$bpafb_style = ' style="color:' . esc_attr($bpafb_brand_colors[$bpafb_m[1]]) . '"';
		}
		$bpafb_icon_html = '<span class="bpafb-reviews__icon"' . $bpafb_style . '><i class="' . esc_attr($bpafb_icon) . '" aria-hidden="true"></i></span>';
	}

	$bpafb_slides[] = '<div class="bpafb-reviews__card">'
		. '<div class="bpafb-reviews__header">' . $bpafb_image
		. '<div class="bpafb-reviews__cite">' . $bpafb_name_html . $bpafb_title_html . $bpafb_rating_html . '</div>'
		. $bpafb_icon_html . '</div>'
		. ('' !== $bpafb_text ? '<div class="bpafb-reviews__content">' . wp_kses_post($bpafb_text) . '</div>' : '')
		. '</div>';
}

if (!$bpafb_slides) {
	return;
}

// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped inside scoped_vars_css().
echo $bpafb_s::scoped_vars_css($bpafb_uid, array_merge(
	Bpafb_Pro_Carousel::vars($attributes),
	[
		'--bpafb-reviews-icon-color'    => $bpafb_official ? '' : $bpafb_s::color($attributes, 'iconColor'),
		'--bpafb-reviews-icon-size'     => $bpafb_s::px($attributes, 'iconSize'),
		'--bpafb-reviews-star-size'     => $bpafb_s::px($attributes, 'starSize'),
		'--bpafb-reviews-star-color'    => $bpafb_s::color($attributes, 'starColor'),
		'--bpafb-reviews-star-empty'    => $bpafb_s::color($attributes, 'starEmptyColor'),
		'--bpafb-reviews-image-size'    => $bpafb_s::px($attributes, 'imageSize'),
		'--bpafb-reviews-image-radius'  => isset($attributes['imageRadius']) && is_numeric($attributes['imageRadius']) ? min(50, absint($attributes['imageRadius'])) . '%' : '',
		'--bpafb-reviews-bg'            => $bpafb_s::color($attributes, 'cardBgColor'),
		'--bpafb-reviews-border-color'  => $bpafb_s::color($attributes, 'cardBorderColor'),
		'--bpafb-reviews-border-width'  => $bpafb_s::px($attributes, 'cardBorderWidth'),
		'--bpafb-reviews-radius'        => $bpafb_s::px($attributes, 'cardRadius'),
		'--bpafb-reviews-padding'       => $bpafb_s::px($attributes, 'cardPadding'),
		'--bpafb-reviews-header-bg'     => $bpafb_s::color($attributes, 'headerBgColor'),
		'--bpafb-reviews-name-color'    => $bpafb_s::color($attributes, 'nameColor'),
		'--bpafb-reviews-title-color'   => $bpafb_s::color($attributes, 'titleColor'),
		'--bpafb-reviews-content-color' => $bpafb_s::color($attributes, 'contentColor'),
	],
	$bpafb_s::typography_vars($attributes, 'name', '--bpafb-reviews-name'),
	$bpafb_s::typography_vars($attributes, 'title', '--bpafb-reviews-title'),
	$bpafb_s::typography_vars($attributes, 'content', '--bpafb-reviews-content')
));

printf(
	'<div %1$s>%2$s</div>',
	// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped above.
	get_block_wrapper_attributes(Bpafb_Pro_Carousel::wrapper_attrs(
		$attributes,
		sprintf(
			'bpafb-reviews%1$s bpafb-uid-%2$s',
			(!isset($attributes['headerSeparator']) || !empty($attributes['headerSeparator'])) ? ' bpafb-reviews--separator' : '',
			$bpafb_uid
		),
		__('Reviews', 'blockive-premium-addon-for-block-pro')
	)),
	Bpafb_Pro_Carousel::markup($attributes, $bpafb_slides)
	// phpcs:enable
);
