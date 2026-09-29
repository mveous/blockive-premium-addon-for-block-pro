<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Post Excerpt Template Block: the post's own
 * excerpt when it has one (unless turned off), otherwise the start of its
 * content, trimmed to a number of words.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block default content (unused, dynamic block).
 * @var WP_Block $block      Block instance.
 */

$bpafb_post_id = Bpafb_Template_Block_Render::get_post_id($block);
if (!$bpafb_post_id || post_password_required($bpafb_post_id)) {
	return;
}

$bpafb_post = get_post($bpafb_post_id);
$bpafb_length = isset($attributes['length']) ? max(5, min(200, absint($attributes['length']))) : 30;

if ((!isset($attributes['useManual']) || !empty($attributes['useManual'])) && has_excerpt($bpafb_post)) {
	$bpafb_text = wp_strip_all_tags($bpafb_post->post_excerpt);
} else {
	// Content without blocks' markup or shortcodes, and without this
	// block's own template rendering again inside it.
	$bpafb_text = wp_trim_words(excerpt_remove_blocks(strip_shortcodes($bpafb_post->post_content)), $bpafb_length, '&hellip;');
	$bpafb_text = wp_strip_all_tags(html_entity_decode($bpafb_text, ENT_QUOTES, get_bloginfo('charset')));
}
if ('' === trim($bpafb_text)) {
	return;
}

$bpafb_more = '';
if (!empty($attributes['showMore'])) {
	$bpafb_more_text = isset($attributes['moreText']) && '' !== trim($attributes['moreText']) ? $attributes['moreText'] : __('Read more', 'blockive-premium-addon-for-block-pro');
	$bpafb_more = sprintf(
		' <a class="bpafb-post-excerpt__more" href="%1$s">%2$s<span class="screen-reader-text"> %3$s</span></a>',
		esc_url(get_permalink($bpafb_post_id)),
		esc_html($bpafb_more_text),
		/* translators: %s: post title. */
		esc_html(sprintf(__('about %s', 'blockive-premium-addon-for-block-pro'), wp_strip_all_tags(get_the_title($bpafb_post_id))))
	);
}

$bpafb_s = 'Bpafb_Pro_Site_Blocks';
$bpafb_uid = $bpafb_s::uid($attributes, 'bpafb-post-excerpt-');
$bpafb_align = isset($attributes['align']) && in_array($attributes['align'], ['left', 'center', 'right', 'justify'], true) ? $attributes['align'] : 'left';

// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped inside scoped_vars_css().
echo $bpafb_s::scoped_vars_css($bpafb_uid, array_merge(
	[
		'--bpafb-excerpt-color'      => $bpafb_s::color($attributes, 'textColor'),
		'--bpafb-excerpt-link'       => $bpafb_s::color($attributes, 'linkColor'),
		'--bpafb-excerpt-link-hover' => $bpafb_s::color($attributes, 'linkHoverColor'),
	],
	$bpafb_s::typography_vars($attributes, 'text', '--bpafb-excerpt')
));

printf(
	'<p %1$s>%2$s%3$s</p>',
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	get_block_wrapper_attributes(['class' => 'bpafb-post-excerpt bpafb-uid-' . $bpafb_uid, 'style' => 'text-align:' . $bpafb_align]),
	esc_html($bpafb_text),
	$bpafb_more // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped above.
);
