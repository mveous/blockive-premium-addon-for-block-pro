<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Video Playlist block: a player and a list of
 * videos (YouTube, Vimeo, or video files). The player shows a poster
 * until played, so no third-party player loads before a click. Every
 * list item is a plain link to its video, so the list still works without
 * JavaScript; view.js plays them in the player instead.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block default content (unused, dynamic block).
 * @var WP_Block $block      Block instance.
 */

$bpafb_s = 'Bpafb_Pro_Site_Blocks';
$bpafb_uid = $bpafb_s::uid($attributes, 'bpafb-vpl-');
$bpafb_items = isset($attributes['items']) && is_array($attributes['items']) ? array_values($attributes['items']) : [];

// Only items with a playable URL.
$bpafb_videos = [];
foreach ($bpafb_items as $bpafb_item) {
	$bpafb_url = isset($bpafb_item['url']) ? trim($bpafb_item['url']) : '';
	$bpafb_play = $bpafb_url ? Bpafb_Pro_Shared_Assets::video_embed($bpafb_url) : null;
	if (!$bpafb_play) {
		continue;
	}
	$bpafb_thumb = $bpafb_s::image_url(isset($bpafb_item['thumbnailId']) ? absint($bpafb_item['thumbnailId']) : 0, isset($bpafb_item['thumbnailUrl']) ? $bpafb_item['thumbnailUrl'] : '', 'large');
	$bpafb_videos[] = [
		'title'    => isset($bpafb_item['title']) && '' !== trim($bpafb_item['title']) ? trim(wp_strip_all_tags($bpafb_item['title'])) : '',
		'url'      => $bpafb_url,
		'duration' => isset($bpafb_item['duration']) ? trim(wp_strip_all_tags($bpafb_item['duration'])) : '',
		'poster'   => $bpafb_thumb ? $bpafb_thumb : $bpafb_play['poster'],
		'embed'    => $bpafb_play['embed'],
		'file'     => $bpafb_play['file'],
	];
}
if (!$bpafb_videos) {
	return;
}

$bpafb_attrs = function ($video, $n) {
	/* translators: %d: video number. */
	$title = '' !== $video['title'] ? $video['title'] : sprintf(__('Video %d', 'blockive-premium-addon-for-block-pro'), $n);
	return sprintf(
		' href="%1$s"%2$s data-title="%3$s"%4$s',
		esc_url($video['url']),
		$video['embed'] ? ' data-embed="' . esc_url($video['embed']) . '"' : ' data-video="' . esc_url($video['file']) . '"',
		esc_attr($title),
		$video['poster'] ? ' data-poster="' . esc_url($video['poster']) . '"' : ''
	);
};

$bpafb_first = $bpafb_videos[0];
/* translators: %s: video title. */
$bpafb_play_label = sprintf(__('Play video: %s', 'blockive-premium-addon-for-block-pro'), '' !== $bpafb_first['title'] ? $bpafb_first['title'] : sprintf(__('Video %d', 'blockive-premium-addon-for-block-pro'), 1));
$bpafb_player = sprintf(
	'<div class="bpafb-vpl__player"><a class="bpafb-vpl__poster"%1$s aria-label="%2$s">%3$s<span class="bpafb-vpl__play" aria-hidden="true"><i class="fa-solid fa-play"></i></span></a></div>',
	$bpafb_attrs($bpafb_first, 1),
	esc_attr($bpafb_play_label),
	$bpafb_first['poster'] ? '<img class="bpafb-vpl__poster-img" src="' . esc_url($bpafb_first['poster']) . '" alt="" decoding="async">' : ''
);

$bpafb_show_thumbs = !isset($attributes['showThumbnails']) || !empty($attributes['showThumbnails']);
$bpafb_show_duration = !isset($attributes['showDuration']) || !empty($attributes['showDuration']);
$bpafb_list = '';
foreach ($bpafb_videos as $bpafb_i => $bpafb_video) {
	/* translators: %d: video number. */
	$bpafb_title = '' !== $bpafb_video['title'] ? $bpafb_video['title'] : sprintf(__('Video %d', 'blockive-premium-addon-for-block-pro'), $bpafb_i + 1);
	$bpafb_list .= sprintf(
		'<li><a class="bpafb-vpl__item%1$s"%2$s%3$s>%4$s<span class="bpafb-vpl__item-text"><span class="bpafb-vpl__item-title">%5$s</span>%6$s</span></a></li>',
		0 === $bpafb_i ? ' is-active' : '',
		$bpafb_attrs($bpafb_video, $bpafb_i + 1),
		0 === $bpafb_i ? ' aria-current="true"' : '',
		($bpafb_show_thumbs && $bpafb_video['poster']) ? '<img class="bpafb-vpl__thumb" src="' . esc_url($bpafb_video['poster']) . '" alt="" loading="lazy" decoding="async">' : '',
		esc_html($bpafb_title),
		($bpafb_show_duration && '' !== $bpafb_video['duration']) ? '<span class="bpafb-vpl__duration">' . esc_html($bpafb_video['duration']) . '</span>' : ''
	);
}

$bpafb_heading = isset($attributes['playlistTitle']) ? trim(wp_strip_all_tags($attributes['playlistTitle'])) : '';
$bpafb_list_id = $bpafb_uid . '-list';
$bpafb_list_html = '<div class="bpafb-vpl__list">'
	. ('' !== $bpafb_heading ? '<p class="bpafb-vpl__list-title" id="' . esc_attr($bpafb_list_id) . '">' . esc_html($bpafb_heading) . ' <span class="bpafb-vpl__count">' . esc_html(sprintf(
		/* translators: %d: number of videos. */
		_n('%d video', '%d videos', count($bpafb_videos), 'blockive-premium-addon-for-block-pro'),
		count($bpafb_videos)
	)) . '</span></p>' : '')
	. '<ol class="bpafb-vpl__items"' . ('' !== $bpafb_heading ? ' aria-labelledby="' . esc_attr($bpafb_list_id) . '"' : '') . '>' . $bpafb_list . '</ol></div>';

// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped inside scoped_vars_css().
echo $bpafb_s::scoped_vars_css($bpafb_uid, array_merge(
	[
		'--bpafb-vpl-ratio'          => isset($attributes['aspectRatio']) && in_array($attributes['aspectRatio'], ['16/9', '4/3', '21/9', '1/1', '9/16'], true) ? $attributes['aspectRatio'] : '',
		'--bpafb-vpl-list-width'     => $bpafb_s::px($attributes, 'listWidth'),
		'--bpafb-vpl-list-bg'        => $bpafb_s::color($attributes, 'listBgColor'),
		'--bpafb-vpl-item-color'     => $bpafb_s::color($attributes, 'itemColor'),
		'--bpafb-vpl-item-active-bg' => $bpafb_s::color($attributes, 'itemActiveBgColor'),
		'--bpafb-vpl-item-active-color' => $bpafb_s::color($attributes, 'itemActiveColor'),
		'--bpafb-vpl-play-color'     => $bpafb_s::color($attributes, 'playColor'),
		'--bpafb-vpl-radius'         => $bpafb_s::px($attributes, 'borderRadius'),
	],
	$bpafb_s::typography_vars($attributes, 'item', '--bpafb-vpl-item')
));

printf(
	'<div %1$s>%2$s%3$s</div>',
	// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped above.
	get_block_wrapper_attributes([
		'class'          => sprintf(
			'bpafb-vpl bpafb-vpl--list-%1$s bpafb-uid-%2$s',
			isset($attributes['listPosition']) && 'bottom' === $attributes['listPosition'] ? 'bottom' : 'right',
			$bpafb_uid
		),
		'data-auto-next' => (!isset($attributes['autoNext']) || !empty($attributes['autoNext'])) ? '1' : '0',
		/* translators: %s: video title. */
		'data-play-label' => __('Play video: %s', 'blockive-premium-addon-for-block-pro'),
	]),
	$bpafb_player,
	$bpafb_list_html
	// phpcs:enable
);
