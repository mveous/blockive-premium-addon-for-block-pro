<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Price List block: a list of items, each with an
 * optional photo, a title and price joined by a leader line, and a short
 * description.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block default content (unused, dynamic block).
 * @var WP_Block $block      Block instance.
 */

$bpafb_items = isset($attributes['items']) && is_array($attributes['items']) ? array_values($attributes['items']) : [];

$bpafb_s = 'Bpafb_Pro_Site_Blocks';
$bpafb_uid = $bpafb_s::uid($attributes, 'bpafb-price-list-');
$bpafb_title_tag = isset($attributes['titleTag']) && in_array($attributes['titleTag'], ['h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div'], true) ? $attributes['titleTag'] : 'span';
$bpafb_separator = isset($attributes['separator']) && in_array($attributes['separator'], ['dotted', 'dashed', 'solid', 'double', 'none'], true) ? $attributes['separator'] : 'dotted';
$bpafb_img_size = isset($attributes['imageSize']) ? max(20, min(300, absint($attributes['imageSize']))) : 60;

$bpafb_rows = '';
foreach ($bpafb_items as $bpafb_item) {
	$bpafb_title = isset($bpafb_item['title']) ? $bpafb_item['title'] : '';
	$bpafb_price = isset($bpafb_item['price']) ? $bpafb_item['price'] : '';
	$bpafb_desc = isset($bpafb_item['description']) ? $bpafb_item['description'] : '';
	if ('' === trim(wp_strip_all_tags($bpafb_title . $bpafb_price . $bpafb_desc))) {
		continue;
	}

	$bpafb_img_url = $bpafb_s::image_url(isset($bpafb_item['imageId']) ? absint($bpafb_item['imageId']) : 0, isset($bpafb_item['imageUrl']) ? $bpafb_item['imageUrl'] : '', $bpafb_img_size > 150 ? 'medium' : 'thumbnail');
	// The title right beside it names the item, so the photo is decorative.
	$bpafb_img = $bpafb_img_url ? '<img class="bpafb-price-list__image" src="' . esc_url($bpafb_img_url) . '" width="' . $bpafb_img_size . '" height="' . $bpafb_img_size . '" alt="" loading="lazy" decoding="async">' : '';

	$bpafb_title_html = wp_kses_post($bpafb_title);
	if (!empty($bpafb_item['link']) && '' !== trim($bpafb_title)) {
		$bpafb_title_html = '<a' . $bpafb_s::link_attrs($bpafb_item['link'], !empty($bpafb_item['newTab'])) . '>' . $bpafb_title_html . '</a>';
	}

	$bpafb_header = '<div class="bpafb-price-list__header">'
		. ('' !== trim($bpafb_title) ? sprintf('<%1$s class="bpafb-price-list__title">%2$s</%1$s>', tag_escape($bpafb_title_tag), $bpafb_title_html) : '')
		. ('none' !== $bpafb_separator ? '<span class="bpafb-price-list__separator" aria-hidden="true"></span>' : '')
		. ('' !== trim($bpafb_price) ? '<span class="bpafb-price-list__price">' . wp_kses_post($bpafb_price) . '</span>' : '')
		. '</div>';

	$bpafb_rows .= '<li class="bpafb-price-list__item">'
		. $bpafb_img
		. '<div class="bpafb-price-list__body">' . $bpafb_header
		. ('' !== trim($bpafb_desc) ? '<p class="bpafb-price-list__description">' . wp_kses_post($bpafb_desc) . '</p>' : '')
		. '</div></li>';
}

if ('' === $bpafb_rows) {
	return;
}

// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped inside scoped_vars_css().
echo $bpafb_s::scoped_vars_css($bpafb_uid, array_merge(
	[
		'--bpafb-pl-image-size'    => $bpafb_img_size . 'px',
		'--bpafb-pl-image-radius'  => $bpafb_s::px($attributes, 'imageRadius'),
		'--bpafb-pl-image-gap'     => $bpafb_s::px($attributes, 'imageGap'),
		'--bpafb-pl-item-spacing'  => $bpafb_s::px($attributes, 'itemSpacing'),
		'--bpafb-pl-sep-style'     => $bpafb_separator,
		'--bpafb-pl-sep-weight'    => $bpafb_s::px($attributes, 'separatorWeight'),
		'--bpafb-pl-sep-color'     => $bpafb_s::color($attributes, 'separatorColor'),
		'--bpafb-pl-sep-spacing'   => $bpafb_s::px($attributes, 'separatorSpacing'),
		'--bpafb-pl-divider-color' => $bpafb_s::color($attributes, 'dividerColor'),
		'--bpafb-pl-title-color'   => $bpafb_s::color($attributes, 'titleColor'),
		'--bpafb-pl-title-hover'   => $bpafb_s::color($attributes, 'titleHoverColor'),
		'--bpafb-pl-price-color'   => $bpafb_s::color($attributes, 'priceColor'),
		'--bpafb-pl-desc-color'    => $bpafb_s::color($attributes, 'descriptionColor'),
	],
	$bpafb_s::typography_vars($attributes, 'title', '--bpafb-pl-title'),
	$bpafb_s::typography_vars($attributes, 'price', '--bpafb-pl-price'),
	$bpafb_s::typography_vars($attributes, 'description', '--bpafb-pl-desc')
));

printf(
	'<ul %1$s>%2$s</ul>',
	// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped above.
	get_block_wrapper_attributes([
		'class' => sprintf(
			'bpafb-price-list bpafb-price-list--image-%1$s bpafb-price-list--valign-%2$s%3$s bpafb-uid-%4$s',
			isset($attributes['imagePosition']) && 'right' === $attributes['imagePosition'] ? 'right' : 'left',
			isset($attributes['verticalAlign']) && 'center' === $attributes['verticalAlign'] ? 'center' : 'top',
			!empty($attributes['divider']) ? ' bpafb-price-list--divider' : '',
			$bpafb_uid
		),
	]),
	$bpafb_rows
	// phpcs:enable
);
