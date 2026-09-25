<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Gallery block: one or more named galleries of
 * images, in a grid, masonry, or justified layout. With more than one
 * gallery, filter buttons show one gallery at a time (view.js). Image
 * links work without JavaScript; view.js opens them in the shared
 * lightbox.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block default content (unused, dynamic block).
 * @var WP_Block $block      Block instance.
 */

$bpafb_galleries = isset($attributes['galleries']) && is_array($attributes['galleries']) ? array_values($attributes['galleries']) : [];

$bpafb_s = 'Bpafb_Pro_Site_Blocks';
$bpafb_uid = $bpafb_s::uid($attributes, 'bpafb-gallery-');
$bpafb_layout = isset($attributes['layout']) && in_array($attributes['layout'], ['grid', 'masonry', 'justified'], true) ? $attributes['layout'] : 'grid';
$bpafb_on_click = isset($attributes['onClick']) && in_array($attributes['onClick'], ['lightbox', 'link', 'none'], true) ? $attributes['onClick'] : 'lightbox';
$bpafb_captions = isset($attributes['captions']) && in_array($attributes['captions'], ['none', 'hover', 'below'], true) ? $attributes['captions'] : 'none';
$bpafb_hover = isset($attributes['hoverEffect']) && 'none' === $attributes['hoverEffect'] ? 'none' : 'zoom';
$bpafb_size = isset($attributes['imageSize']) && in_array($attributes['imageSize'], get_intermediate_image_sizes(), true) ? $attributes['imageSize'] : 'full';
$bpafb_ratio = isset($attributes['aspectRatio']) && in_array($attributes['aspectRatio'], ['1/1', '4/3', '3/2', '16/9', '3/4', '2/3', 'auto'], true) ? $attributes['aspectRatio'] : '1/1';

$bpafb_items = '';
$bpafb_filters = [];
$bpafb_n = 0;
foreach ($bpafb_galleries as $bpafb_g => $bpafb_gallery) {
	$bpafb_images = isset($bpafb_gallery['images']) && is_array($bpafb_gallery['images']) ? $bpafb_gallery['images'] : [];
	$bpafb_has_images = false;

	foreach ($bpafb_images as $bpafb_image) {
		$bpafb_id = isset($bpafb_image['id']) ? absint($bpafb_image['id']) : 0;
		$bpafb_saved_url = isset($bpafb_image['url']) ? $bpafb_image['url'] : '';
		$bpafb_src = $bpafb_id ? wp_get_attachment_image_src($bpafb_id, $bpafb_size) : false;
		$bpafb_url = $bpafb_src ? $bpafb_src[0] : $bpafb_saved_url;
		if (!$bpafb_url) {
			continue;
		}
		$bpafb_has_images = true;
		$bpafb_n++;

		$bpafb_alt = isset($bpafb_image['alt']) ? $bpafb_image['alt'] : '';
		$bpafb_caption = isset($bpafb_image['caption']) ? trim(wp_strip_all_tags($bpafb_image['caption'])) : '';

		// Justified rows size each image by its own proportions.
		$bpafb_w = $bpafb_src && $bpafb_src[1] ? (int) $bpafb_src[1] : 0;
		$bpafb_h = $bpafb_src && $bpafb_src[2] ? (int) $bpafb_src[2] : 0;
		$bpafb_item_ratio = ($bpafb_w && $bpafb_h) ? round($bpafb_w / $bpafb_h, 4) : 1.5;

		$bpafb_img = ($bpafb_src && $bpafb_id)
			? wp_get_attachment_image($bpafb_id, $bpafb_size, false, array_filter(['class' => 'bpafb-gallery__img', 'alt' => $bpafb_alt]))
			: '<img class="bpafb-gallery__img" src="' . esc_url($bpafb_url) . '" alt="' . esc_attr($bpafb_alt) . '" loading="lazy" decoding="async">';
		$bpafb_label = $bpafb_alt ? $bpafb_alt : ($bpafb_caption ? $bpafb_caption : (string) $bpafb_n);

		if ('lightbox' === $bpafb_on_click) {
			$bpafb_media = sprintf(
				'<a class="bpafb-gallery__media" href="%1$s" data-bpafb-lightbox aria-label="%2$s"%3$s>%4$s</a>',
				esc_url($bpafb_s::image_url($bpafb_id, $bpafb_saved_url, 'full')),
				/* translators: %s: image description or number. */
				esc_attr(sprintf(__('View larger: %s', 'blockive-premium-addon-for-block-pro'), $bpafb_label)),
				$bpafb_caption ? ' data-caption="' . esc_attr($bpafb_caption) . '"' : '',
				$bpafb_img
			);
		} elseif ('link' === $bpafb_on_click && !empty($bpafb_image['link'])) {
			$bpafb_media = '<a class="bpafb-gallery__media"' . $bpafb_s::link_attrs($bpafb_image['link'], !empty($bpafb_image['newTab'])) . ' aria-label="' . esc_attr($bpafb_label) . '">' . $bpafb_img . '</a>';
		} else {
			$bpafb_media = '<div class="bpafb-gallery__media">' . $bpafb_img . '</div>';
		}

		$bpafb_items .= sprintf(
			'<figure class="bpafb-gallery__item" data-filter-keys="%1$d" style="--bpafb-gallery-ratio:%2$s">%3$s%4$s</figure>',
			$bpafb_g,
			esc_attr((string) $bpafb_item_ratio),
			$bpafb_media,
			('none' !== $bpafb_captions && $bpafb_caption) ? '<figcaption class="bpafb-gallery__caption">' . esc_html($bpafb_caption) . '</figcaption>' : ''
		);
	}

	if ($bpafb_has_images) {
		$bpafb_filters[$bpafb_g] = isset($bpafb_gallery['title']) && '' !== trim($bpafb_gallery['title'])
			? $bpafb_gallery['title']
			/* translators: %d: gallery number. */
			: sprintf(__('Gallery %d', 'blockive-premium-addon-for-block-pro'), $bpafb_g + 1);
	}
}

if (!$bpafb_n) {
	return;
}

// Filter buttons (one per gallery that has images), only when there is
// more than one to choose from.
$bpafb_filter_html = Bpafb_Pro_Shared_Assets::filter_bar_html($attributes, $bpafb_filters, __('Filter gallery', 'blockive-premium-addon-for-block-pro'));

$bpafb_row_height = function ($key) use ($attributes) {
	return isset($attributes[$key]) && is_numeric($attributes[$key]) ? max(50, absint($attributes[$key])) . 'px' : '';
};
$bpafb_columns = function ($key) use ($attributes) {
	return isset($attributes[$key]) && is_numeric($attributes[$key]) ? (string) max(1, min(10, absint($attributes[$key]))) : '';
};

// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped inside scoped_vars_css().
echo $bpafb_s::scoped_vars_css($bpafb_uid, array_merge(
	[
		'--bpafb-gallery-columns'           => $bpafb_columns('columns'),
		'--bpafb-gallery-columns-tablet'    => $bpafb_columns('columnsTablet'),
		'--bpafb-gallery-columns-mobile'    => $bpafb_columns('columnsMobile'),
		'--bpafb-gallery-gap'               => $bpafb_s::px($attributes, 'gap'),
		'--bpafb-gallery-aspect'            => $bpafb_ratio,
		'--bpafb-gallery-row-height'        => $bpafb_row_height('rowHeight'),
		'--bpafb-gallery-row-height-tablet' => $bpafb_row_height('rowHeightTablet'),
		'--bpafb-gallery-row-height-mobile' => $bpafb_row_height('rowHeightMobile'),
		'--bpafb-gallery-radius'            => $bpafb_s::px($attributes, 'borderRadius'),
		'--bpafb-gallery-overlay'           => $bpafb_s::color($attributes, 'overlayColor'),
		'--bpafb-gallery-caption-color'     => $bpafb_s::color($attributes, 'captionColor'),
		'--bpafb-gallery-caption-bg'        => $bpafb_s::color($attributes, 'captionBgColor'),
	],
	$bpafb_s::typography_vars($attributes, 'caption', '--bpafb-gallery-caption'),
	Bpafb_Pro_Shared_Assets::filter_bar_vars($attributes)
));

printf(
	'<div %1$s>%2$s<div class="bpafb-gallery__items">%3$s</div></div>',
	// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped above.
	get_block_wrapper_attributes([
		'class'     => sprintf(
			'bpafb-gallery bpafb-gallery--%1$s bpafb-gallery--caption-%2$s bpafb-gallery--hover-%3$s%4$s bpafb-uid-%5$s',
			$bpafb_layout,
			$bpafb_captions,
			$bpafb_hover,
			'auto' === $bpafb_ratio ? ' bpafb-gallery--ratio-auto' : '',
			$bpafb_uid
		),
		'data-l10n' => Bpafb_Pro_Shared_Assets::lightbox_l10n(),
	]),
	$bpafb_filter_html,
	$bpafb_items
	// phpcs:enable
);
