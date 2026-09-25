<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Table of Contents block. Prints the box and its
 * settings; view.js finds the page's headings in the browser (so it works
 * in any template, whatever renders the content), gives them ids, and
 * builds the linked list.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block default content (unused, dynamic block).
 * @var WP_Block $block      Block instance.
 */

$bpafb_s = 'Bpafb_Pro_Site_Blocks';
$bpafb_uid = $bpafb_s::uid($attributes, 'bpafb-toc-');

$bpafb_tags = isset($attributes['headingTags']) && is_array($attributes['headingTags'])
	? array_values(array_intersect(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'], $attributes['headingTags']))
	: ['h2', 'h3', 'h4'];
if (!$bpafb_tags) {
	$bpafb_tags = ['h2', 'h3', 'h4'];
}

$bpafb_marker = isset($attributes['marker']) && in_array($attributes['marker'], ['numbers', 'bullets', 'none'], true) ? $attributes['marker'] : 'numbers';
$bpafb_title_tag = isset($attributes['titleTag']) && in_array($attributes['titleTag'], ['h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div'], true) ? $attributes['titleTag'] : 'h4';
$bpafb_title = isset($attributes['title']) ? $attributes['title'] : __('Table of Contents', 'blockive-premium-addon-for-block-pro');
$bpafb_collapsible = !isset($attributes['collapsible']) || !empty($attributes['collapsible']);
$bpafb_title_id = $bpafb_uid . '-title';
$bpafb_body_id = $bpafb_uid . '-body';

if ($bpafb_collapsible) {
	$bpafb_title_html = sprintf(
		'<%1$s class="bpafb-toc__title" id="%2$s"><button type="button" class="bpafb-toc__toggle" aria-expanded="true" aria-controls="%3$s"><span>%4$s</span><i class="fa-solid fa-chevron-down" aria-hidden="true"></i></button></%1$s>',
		tag_escape($bpafb_title_tag),
		esc_attr($bpafb_title_id),
		esc_attr($bpafb_body_id),
		esc_html($bpafb_title)
	);
} else {
	$bpafb_title_html = '' !== trim($bpafb_title)
		? sprintf('<%1$s class="bpafb-toc__title" id="%2$s">%3$s</%1$s>', tag_escape($bpafb_title_tag), esc_attr($bpafb_title_id), esc_html($bpafb_title))
		: '';
}

// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped inside scoped_vars_css().
echo $bpafb_s::scoped_vars_css($bpafb_uid, array_merge(
	[
		'--bpafb-toc-bg'           => $bpafb_s::color($attributes, 'bgColor'),
		'--bpafb-toc-border-color' => $bpafb_s::color($attributes, 'borderColor'),
		'--bpafb-toc-border-width' => $bpafb_s::px($attributes, 'borderWidth'),
		'--bpafb-toc-radius'       => $bpafb_s::px($attributes, 'borderRadius'),
		'--bpafb-toc-padding'      => $bpafb_s::px($attributes, 'padding'),
		'--bpafb-toc-title-color'  => $bpafb_s::color($attributes, 'titleColor'),
		'--bpafb-toc-title-bg'     => $bpafb_s::color($attributes, 'titleBgColor'),
		'--bpafb-toc-link-color'   => $bpafb_s::color($attributes, 'linkColor'),
		'--bpafb-toc-link-hover'   => $bpafb_s::color($attributes, 'linkHoverColor'),
		'--bpafb-toc-link-active'  => $bpafb_s::color($attributes, 'linkActiveColor'),
		'--bpafb-toc-marker-color' => $bpafb_s::color($attributes, 'markerColor'),
		'--bpafb-toc-indent'       => $bpafb_s::px($attributes, 'indent'),
		'--bpafb-toc-item-spacing' => $bpafb_s::px($attributes, 'itemSpacing'),
	],
	$bpafb_s::typography_vars($attributes, 'title', '--bpafb-toc-title'),
	$bpafb_s::typography_vars($attributes, 'link', '--bpafb-toc-link')
));

$bpafb_wrapper = [
	'class'                => sprintf(
		'bpafb-toc bpafb-toc--marker-%1$s%2$s%3$s bpafb-uid-%4$s',
		$bpafb_marker,
		$bpafb_collapsible ? ' bpafb-toc--collapsible' : '',
		(!isset($attributes['separator']) || !empty($attributes['separator'])) ? ' bpafb-toc--separator' : '',
		$bpafb_uid
	),
	'data-headings'        => implode(',', $bpafb_tags),
	'data-hierarchical'    => (!isset($attributes['hierarchical']) || !empty($attributes['hierarchical'])) ? '1' : '0',
	'data-offset'          => (string) (isset($attributes['scrollOffset']) ? absint($attributes['scrollOffset']) : 0),
	'data-collapsed'       => ($bpafb_collapsible && !empty($attributes['collapsed'])) ? '1' : '0',
	'data-collapsed-mobile' => ($bpafb_collapsible && (!isset($attributes['collapsedMobile']) || !empty($attributes['collapsedMobile']))) ? '1' : '0',
];
if (!empty($attributes['container'])) {
	$bpafb_wrapper['data-container'] = wp_strip_all_tags($attributes['container']);
}
if (!empty($attributes['exclude'])) {
	$bpafb_wrapper['data-exclude'] = wp_strip_all_tags($attributes['exclude']);
}
if ('' !== trim($bpafb_title)) {
	$bpafb_wrapper['aria-labelledby'] = $bpafb_title_id;
} else {
	$bpafb_wrapper['aria-label'] = __('Table of Contents', 'blockive-premium-addon-for-block-pro');
}

printf(
	'<nav %1$s>%2$s<div class="bpafb-toc__body" id="%3$s"><p class="bpafb-toc__empty" hidden>%4$s</p></div></nav>',
	// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped above.
	get_block_wrapper_attributes($bpafb_wrapper),
	$bpafb_title_html,
	// phpcs:enable
	esc_attr($bpafb_body_id),
	esc_html(isset($attributes['noHeadingsText']) ? $attributes['noHeadingsText'] : __('No headings were found on this page.', 'blockive-premium-addon-for-block-pro'))
);
