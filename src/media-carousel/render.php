<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Media Carousel block: images and videos in the
 * shared carousel (Bpafb_Pro_Carousel), as a carousel, a slideshow with
 * thumbnails, or a coverflow. Image and video links work without
 * JavaScript; view.js adds the carousel and opens them in a lightbox.
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
$bpafb_uid = $bpafb_s::uid($attributes, 'bpafb-media-carousel-');
$bpafb_skin = isset($attributes['skin']) && in_array($attributes['skin'], ['carousel', 'slideshow', 'coverflow'], true) ? $attributes['skin'] : 'carousel';
$bpafb_on_click = isset($attributes['onClick']) && in_array($attributes['onClick'], ['lightbox', 'link', 'none'], true) ? $attributes['onClick'] : 'lightbox';
$bpafb_captions = isset($attributes['captions']) && in_array($attributes['captions'], ['none', 'overlay', 'below'], true) ? $attributes['captions'] : 'none';
$bpafb_hover = isset($attributes['hoverEffect']) && 'none' === $attributes['hoverEffect'] ? 'none' : 'zoom';
$bpafb_fit = isset($attributes['imageFit']) && 'contain' === $attributes['imageFit'] ? 'contain' : 'cover';
$bpafb_size = isset($attributes['imageSize']) && in_array($attributes['imageSize'], get_intermediate_image_sizes(), true) ? $attributes['imageSize'] : 'full';

/**
 * A YouTube / Vimeo embed URL (autoplaying, for the lightbox) and the
 * YouTube poster, or a direct video file URL.
 */
$bpafb_video = function ($url) {
	$url = trim((string) $url);
	if (preg_match('~(?:youtube(?:-nocookie)?\.com/(?:watch\?(?:.*&)?v=|embed/|shorts/|live/|v/)|youtu\.be/)([\w-]{11})~', $url, $m)) {
		return ['embed' => 'https://www.youtube-nocookie.com/embed/' . $m[1] . '?autoplay=1&rel=0', 'poster' => 'https://i.ytimg.com/vi/' . $m[1] . '/hqdefault.jpg', 'file' => ''];
	}
	if (preg_match('~vimeo\.com/(?:.*?/)?(\d{6,})~', $url, $m)) {
		return ['embed' => 'https://player.vimeo.com/video/' . $m[1] . '?autoplay=1', 'poster' => '', 'file' => ''];
	}
	if (preg_match('~^https?://\S+\.(?:mp4|webm|ogv|mov)(?:\?\S*)?$~i', $url)) {
		return ['embed' => '', 'poster' => '', 'file' => $url];
	}
	return null;
};

$bpafb_slides = [];
$bpafb_thumbs = [];
foreach ($bpafb_items as $bpafb_item) {
	$bpafb_id = isset($bpafb_item['imageId']) ? absint($bpafb_item['imageId']) : 0;
	$bpafb_saved_url = isset($bpafb_item['imageUrl']) ? $bpafb_item['imageUrl'] : '';
	$bpafb_caption = isset($bpafb_item['caption']) ? trim(wp_strip_all_tags($bpafb_item['caption'])) : '';
	$bpafb_alt = isset($bpafb_item['alt']) ? $bpafb_item['alt'] : '';
	$bpafb_video_data = (isset($bpafb_item['type']) && 'video' === $bpafb_item['type'] && !empty($bpafb_item['videoUrl'])) ? $bpafb_video($bpafb_item['videoUrl']) : null;

	$bpafb_img_url = $bpafb_s::image_url($bpafb_id, $bpafb_saved_url, $bpafb_size);
	if (!$bpafb_img_url && $bpafb_video_data) {
		$bpafb_img_url = $bpafb_video_data['poster'];
	}
	if (!$bpafb_img_url && !$bpafb_video_data) {
		continue; // Nothing to show.
	}

	$bpafb_n = count($bpafb_slides) + 1;
	if ($bpafb_img_url && $bpafb_id && wp_get_attachment_image_url($bpafb_id, $bpafb_size)) {
		$bpafb_img = wp_get_attachment_image($bpafb_id, $bpafb_size, false, ['class' => 'bpafb-media-carousel__img']);
	} elseif ($bpafb_img_url) {
		$bpafb_img = '<img class="bpafb-media-carousel__img" src="' . esc_url($bpafb_img_url) . '" alt="' . esc_attr($bpafb_alt) . '" loading="lazy" decoding="async">';
	} else {
		$bpafb_img = '<span class="bpafb-media-carousel__img bpafb-media-carousel__img--empty"></span>';
	}
	$bpafb_name = $bpafb_alt ? $bpafb_alt : $bpafb_caption;

	if ($bpafb_video_data) {
		$bpafb_media = sprintf(
			'<a class="bpafb-media-carousel__media" href="%1$s" %2$s aria-label="%3$s"%4$s>%5$s<span class="bpafb-media-carousel__play" aria-hidden="true"><i class="fa-solid fa-circle-play"></i></span></a>',
			esc_url($bpafb_item['videoUrl']),
			$bpafb_video_data['embed'] ? 'data-bpafb-embed="' . esc_url($bpafb_video_data['embed']) . '"' : 'data-bpafb-video="' . esc_url($bpafb_video_data['file']) . '"',
			/* translators: %s: video caption or number. */
			esc_attr(sprintf(__('Play video: %s', 'blockive-premium-addon-for-block-pro'), $bpafb_name ? $bpafb_name : $bpafb_n)),
			$bpafb_caption ? ' data-caption="' . esc_attr($bpafb_caption) . '"' : '',
			$bpafb_img
		);
	} elseif ('lightbox' === $bpafb_on_click) {
		$bpafb_full = $bpafb_s::image_url($bpafb_id, $bpafb_saved_url, 'full');
		$bpafb_media = sprintf(
			'<a class="bpafb-media-carousel__media" href="%1$s" data-bpafb-lightbox aria-label="%2$s"%3$s>%4$s</a>',
			esc_url($bpafb_full),
			/* translators: %s: image description or number. */
			esc_attr(sprintf(__('View larger: %s', 'blockive-premium-addon-for-block-pro'), $bpafb_name ? $bpafb_name : $bpafb_n)),
			$bpafb_caption ? ' data-caption="' . esc_attr($bpafb_caption) . '"' : '',
			$bpafb_img
		);
	} elseif ('link' === $bpafb_on_click && !empty($bpafb_item['link'])) {
		$bpafb_media = '<a class="bpafb-media-carousel__media"' . $bpafb_s::link_attrs($bpafb_item['link'], !empty($bpafb_item['newTab'])) . ($bpafb_name ? '' : ' aria-label="' . esc_attr($bpafb_item['link']) . '"') . '>' . $bpafb_img . '</a>';
	} else {
		$bpafb_media = '<div class="bpafb-media-carousel__media">' . $bpafb_img . '</div>';
	}

	$bpafb_figcaption = ('none' !== $bpafb_captions && $bpafb_caption) ? '<figcaption class="bpafb-media-carousel__caption">' . esc_html($bpafb_caption) . '</figcaption>' : '';
	$bpafb_slides[] = '<figure class="bpafb-media-carousel__item">' . $bpafb_media . $bpafb_figcaption . '</figure>';

	if ('slideshow' === $bpafb_skin) {
		$bpafb_thumb_url = $bpafb_s::image_url($bpafb_id, $bpafb_saved_url, 'thumbnail');
		$bpafb_thumbs[] = $bpafb_thumb_url ? $bpafb_thumb_url : $bpafb_img_url;
	}
}

if (!$bpafb_slides) {
	return;
}

$bpafb_thumbs_html = '';
if ($bpafb_thumbs && count($bpafb_thumbs) > 1) {
	foreach ($bpafb_thumbs as $bpafb_i => $bpafb_thumb) {
		$bpafb_thumbs_html .= sprintf(
			'<button type="button" class="bpafb-media-carousel__thumb%1$s" aria-label="%2$s"%3$s>%4$s</button>',
			0 === $bpafb_i ? ' is-active' : '',
			/* translators: %d: slide number. */
			esc_attr(sprintf(__('Show slide %d', 'blockive-premium-addon-for-block-pro'), $bpafb_i + 1)),
			0 === $bpafb_i ? ' aria-current="true"' : '',
			$bpafb_thumb ? '<img src="' . esc_url($bpafb_thumb) . '" alt="" loading="lazy" decoding="async">' : ''
		);
	}
	$bpafb_thumbs_html = '<div class="bpafb-media-carousel__thumbs">' . $bpafb_thumbs_html . '</div>';
}

// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped inside scoped_vars_css().
echo $bpafb_s::scoped_vars_css($bpafb_uid, array_merge(
	Bpafb_Pro_Carousel::vars($attributes, 'slideshow' === $bpafb_skin),
	[
		'--bpafb-mc-height'        => $bpafb_s::px($attributes, 'height'),
		'--bpafb-mc-height-tablet' => $bpafb_s::px($attributes, 'heightTablet'),
		'--bpafb-mc-height-mobile' => $bpafb_s::px($attributes, 'heightMobile'),
		'--bpafb-mc-radius'        => $bpafb_s::px($attributes, 'borderRadius'),
		'--bpafb-mc-overlay'       => $bpafb_s::color($attributes, 'overlayColor'),
		'--bpafb-mc-caption-color' => $bpafb_s::color($attributes, 'captionColor'),
		'--bpafb-mc-caption-bg'    => $bpafb_s::color($attributes, 'captionBgColor'),
		'--bpafb-mc-play-size'     => $bpafb_s::px($attributes, 'playIconSize'),
		'--bpafb-mc-play-color'    => $bpafb_s::color($attributes, 'playIconColor'),
		'--bpafb-mc-thumb-size'    => $bpafb_s::px($attributes, 'thumbSize'),
	],
	$bpafb_s::typography_vars($attributes, 'caption', '--bpafb-mc-caption')
));

$bpafb_wrapper = Bpafb_Pro_Carousel::wrapper_attrs(
	$attributes,
	sprintf(
		'bpafb-media-carousel bpafb-media-carousel--%1$s bpafb-media-carousel--caption-%2$s bpafb-media-carousel--hover-%3$s bpafb-media-carousel--fit-%4$s bpafb-uid-%5$s',
		$bpafb_skin,
		$bpafb_captions,
		$bpafb_hover,
		$bpafb_fit,
		$bpafb_uid
	),
	__('Media carousel', 'blockive-premium-addon-for-block-pro'),
	'coverflow' === $bpafb_skin
);
$bpafb_wrapper['data-l10n'] = wp_json_encode([
	'dialog'  => __('Media viewer', 'blockive-premium-addon-for-block-pro'),
	'close'   => __('Close', 'blockive-premium-addon-for-block-pro'),
	'prev'    => __('Previous', 'blockive-premium-addon-for-block-pro'),
	'next'    => __('Next', 'blockive-premium-addon-for-block-pro'),
	/* translators: 1: current item number, 2: total items. */
	'counter' => __('%1$d / %2$d', 'blockive-premium-addon-for-block-pro'),
]);

printf(
	'<div %1$s>%2$s%3$s</div>',
	// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped above.
	get_block_wrapper_attributes($bpafb_wrapper),
	Bpafb_Pro_Carousel::markup($attributes, $bpafb_slides),
	$bpafb_thumbs_html
	// phpcs:enable
);
