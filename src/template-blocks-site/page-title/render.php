<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Page Title block. Unlike Post Title, this
 * follows the main query, so a single Header template can show the right
 * heading on every kind of page.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block default content (unused, dynamic block).
 * @var WP_Block $block      Block instance.
 */

$bpafb_title = '';

if (is_404()) {
	$bpafb_title = isset($attributes['notFoundText']) ? $attributes['notFoundText'] : __('Page not found', 'blockive-premium-addon-for-block-pro');
} elseif (is_search()) {
	$bpafb_title = isset($attributes['searchPrefix']) ? $attributes['searchPrefix'] : __('Search results for:', 'blockive-premium-addon-for-block-pro');
	if (!isset($attributes['showSearchQuery']) || !empty($attributes['showSearchQuery'])) {
		$bpafb_title = trim($bpafb_title . ' ' . get_search_query(false));
	}
} elseif (is_home() && is_front_page()) {
	// Front page showing latest posts - there is no page to take a title from.
	$bpafb_title = get_bloginfo('name');
} elseif (is_home()) {
	$bpafb_title = single_post_title('', false);
} elseif (is_singular() || is_front_page()) {
	$bpafb_title = get_the_title(get_queried_object_id());
} elseif (is_archive()) {
	$bpafb_strip = !isset($attributes['stripArchivePrefix']) || !empty($attributes['stripArchivePrefix']);
	if ($bpafb_strip) {
		add_filter('get_the_archive_title_prefix', '__return_empty_string');
	}
	$bpafb_title = wp_strip_all_tags(get_the_archive_title());
	if ($bpafb_strip) {
		remove_filter('get_the_archive_title_prefix', '__return_empty_string');
	}
} else {
	$bpafb_title = wp_get_document_title();
}

if ($bpafb_title === '') {
	return;
}

$bpafb_tags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div', 'span'];
$bpafb_tag = isset($attributes['tagName']) && in_array($attributes['tagName'], $bpafb_tags, true) ? $attributes['tagName'] : 'h1';
$bpafb_align = isset($attributes['textAlign']) && in_array($attributes['textAlign'], ['left', 'center', 'right'], true) ? $attributes['textAlign'] : '';
$bpafb_color = Bpafb_Pro_Site_Blocks::color($attributes, 'textColor');

printf(
	'<%1$s %2$s>%3$s</%1$s>',
	tag_escape($bpafb_tag),
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	get_block_wrapper_attributes([
		'class' => 'bpafb-tb-page-title',
		'style' => ($bpafb_align ? 'text-align:' . $bpafb_align . ';' : '') . ($bpafb_color ? 'color:' . $bpafb_color . ';' : ''),
	]),
	esc_html($bpafb_title)
);
