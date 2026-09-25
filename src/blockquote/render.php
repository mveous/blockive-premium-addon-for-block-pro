<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Blockquote block: a quotation, its author, and
 * an optional "Tweet" link that opens X's share page with the quote.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block default content (unused, dynamic block).
 * @var WP_Block $block      Block instance.
 */

$bpafb_quote = isset($attributes['content']) ? trim($attributes['content']) : '';
if ('' === wp_strip_all_tags($bpafb_quote)) {
	return;
}

$bpafb_s = 'Bpafb_Pro_Site_Blocks';
$bpafb_uid = $bpafb_s::uid($attributes, 'bpafb-bq-');
$bpafb_author = isset($attributes['author']) ? trim(wp_strip_all_tags($attributes['author'])) : '';
$bpafb_skin = isset($attributes['skin']) && in_array($attributes['skin'], ['border', 'quotation', 'boxed', 'clean'], true) ? $attributes['skin'] : 'border';
$bpafb_align = isset($attributes['align']) && in_array($attributes['align'], ['left', 'center', 'right'], true) ? $attributes['align'] : 'left';

$bpafb_footer = '';
if ('' !== $bpafb_author) {
	$bpafb_footer .= '<cite class="bpafb-bq__author">' . esc_html($bpafb_author) . '</cite>';
}

if (!isset($attributes['showTweet']) || !empty($attributes['showTweet'])) {
	$bpafb_text = html_entity_decode(wp_strip_all_tags($bpafb_quote), ENT_QUOTES, get_bloginfo('charset'));
	if ('' !== $bpafb_author && (!isset($attributes['tweetIncludeAuthor']) || !empty($attributes['tweetIncludeAuthor']))) {
		$bpafb_text = '"' . $bpafb_text . '" - ' . $bpafb_author;
	}
	$bpafb_share = 'https://twitter.com/intent/tweet?text=' . rawurlencode($bpafb_text);
	if (!isset($attributes['tweetIncludeUrl']) || !empty($attributes['tweetIncludeUrl'])) {
		$bpafb_post_id = in_the_loop() || is_singular() ? (in_the_loop() ? get_the_ID() : get_queried_object_id()) : 0;
		$bpafb_share .= '&url=' . rawurlencode($bpafb_post_id ? get_permalink($bpafb_post_id) : home_url('/'));
	}

	$bpafb_label = isset($attributes['tweetLabel']) && '' !== trim($attributes['tweetLabel']) ? $attributes['tweetLabel'] : __('Tweet', 'blockive-premium-addon-for-block-pro');
	$bpafb_style = isset($attributes['tweetStyle']) && in_array($attributes['tweetStyle'], ['icon-text', 'icon', 'text'], true) ? $attributes['tweetStyle'] : 'icon-text';
	$bpafb_footer .= sprintf(
		'<a class="bpafb-bq__tweet bpafb-bq__tweet--%1$s" href="%2$s" target="_blank" rel="noopener noreferrer"%3$s>%4$s%5$s</a>',
		$bpafb_style,
		esc_url($bpafb_share),
		/* translators: %s: button label, e.g. "Tweet". */
		'icon' === $bpafb_style ? ' aria-label="' . esc_attr(sprintf(__('%s (opens in a new tab)', 'blockive-premium-addon-for-block-pro'), $bpafb_label)) . '"' : '',
		'text' !== $bpafb_style ? '<i class="fa-brands fa-x-twitter" aria-hidden="true"></i>' : '',
		'icon' !== $bpafb_style ? '<span>' . esc_html($bpafb_label) . '</span><span class="screen-reader-text"> ' . esc_html__('(opens in a new tab)', 'blockive-premium-addon-for-block-pro') . '</span>' : ''
	);
}

// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped inside scoped_vars_css().
echo $bpafb_s::scoped_vars_css($bpafb_uid, array_merge(
	[
		'--bpafb-bq-content-color'  => $bpafb_s::color($attributes, 'contentColor'),
		'--bpafb-bq-author-color'   => $bpafb_s::color($attributes, 'authorColor'),
		'--bpafb-bq-bg'             => $bpafb_s::color($attributes, 'bgColor'),
		'--bpafb-bq-border-color'   => $bpafb_s::color($attributes, 'borderColor'),
		'--bpafb-bq-border-width'   => $bpafb_s::px($attributes, 'borderWidth'),
		'--bpafb-bq-radius'         => $bpafb_s::px($attributes, 'borderRadius'),
		'--bpafb-bq-padding'        => $bpafb_s::px($attributes, 'padding'),
		'--bpafb-bq-icon-color'     => $bpafb_s::color($attributes, 'quoteIconColor'),
		'--bpafb-bq-icon-size'      => $bpafb_s::px($attributes, 'quoteIconSize'),
		'--bpafb-bq-btn-color'      => $bpafb_s::color($attributes, 'buttonColor'),
		'--bpafb-bq-btn-bg'         => $bpafb_s::color($attributes, 'buttonBgColor'),
		'--bpafb-bq-btn-hover-color' => $bpafb_s::color($attributes, 'buttonHoverColor'),
		'--bpafb-bq-btn-hover-bg'   => $bpafb_s::color($attributes, 'buttonHoverBgColor'),
		'--bpafb-bq-btn-radius'     => $bpafb_s::px($attributes, 'buttonRadius'),
	],
	$bpafb_s::typography_vars($attributes, 'content', '--bpafb-bq-content'),
	$bpafb_s::typography_vars($attributes, 'author', '--bpafb-bq-author')
));

printf(
	'<figure %1$s><blockquote class="bpafb-bq__content">%2$s</blockquote>%3$s</figure>',
	// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped above.
	get_block_wrapper_attributes([
		'class' => sprintf('bpafb-bq bpafb-bq--%1$s bpafb-bq--align-%2$s bpafb-uid-%3$s', $bpafb_skin, $bpafb_align, $bpafb_uid),
	]),
	wpautop(wp_kses_post($bpafb_quote)),
	$bpafb_footer ? '<figcaption class="bpafb-bq__footer">' . $bpafb_footer . '</figcaption>' : ''
	// phpcs:enable
);
