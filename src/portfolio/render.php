<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Portfolio block: posts (any post type) as an
 * image grid linking to each one, with the shared filter buttons built
 * from the terms of the listed posts (see Bpafb_Pro_Shared_Assets). The
 * query is Loop Grid's (Bpafb_Pro_Loop_Builder::block_query_args()).
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block default content (unused, dynamic block).
 * @var WP_Block $block      Block instance.
 */

$bpafb_query_args = Bpafb_Pro_Loop_Builder::block_query_args($attributes, 12);
$bpafb_query_args['no_found_rows'] = true;
$bpafb_query = new WP_Query($bpafb_query_args);

$bpafb_s = 'Bpafb_Pro_Site_Blocks';
$bpafb_uid = $bpafb_s::uid($attributes, 'bpafb-portfolio-');

if (!$bpafb_query->have_posts()) {
	$bpafb_nothing = isset($attributes['nothingFoundText']) ? $attributes['nothingFoundText'] : __('No items found.', 'blockive-premium-addon-for-block-pro');
	if ('' !== trim($bpafb_nothing)) {
		printf(
			'<div %1$s><p class="bpafb-portfolio__nothing-found">%2$s</p></div>',
			get_block_wrapper_attributes(['class' => 'bpafb-portfolio']), // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			esc_html($bpafb_nothing)
		);
	}
	return;
}

$bpafb_tax = isset($attributes['filterTaxonomy']) ? sanitize_key($attributes['filterTaxonomy']) : '';
if ($bpafb_tax && (!taxonomy_exists($bpafb_tax) || !is_object_in_taxonomy($bpafb_query_args['post_type'], $bpafb_tax))) {
	$bpafb_tax = '';
}
$bpafb_size = isset($attributes['imageSize']) && in_array($attributes['imageSize'], get_intermediate_image_sizes(), true) ? $attributes['imageSize'] : 'full';
$bpafb_position = isset($attributes['titlePosition']) && in_array($attributes['titlePosition'], ['overlay', 'below', 'none'], true) ? $attributes['titlePosition'] : 'overlay';
$bpafb_title_tag = isset($attributes['titleTag']) && in_array($attributes['titleTag'], ['h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div'], true) ? $attributes['titleTag'] : 'h3';
$bpafb_show_terms = !isset($attributes['showTerms']) || !empty($attributes['showTerms']);

$bpafb_items = '';
$bpafb_filters = [];
while ($bpafb_query->have_posts()) {
	$bpafb_query->the_post();
	$bpafb_id = get_the_ID();

	$bpafb_terms = $bpafb_tax ? get_the_terms($bpafb_id, $bpafb_tax) : [];
	$bpafb_terms = is_array($bpafb_terms) ? $bpafb_terms : [];
	$bpafb_keys = [];
	$bpafb_names = [];
	foreach ($bpafb_terms as $bpafb_term) {
		$bpafb_keys[] = (int) $bpafb_term->term_id;
		$bpafb_names[] = $bpafb_term->name;
		$bpafb_filters[(int) $bpafb_term->term_id] = $bpafb_term->name;
	}

	// The title inside the same link names it, so the image is decorative.
	$bpafb_img = has_post_thumbnail($bpafb_id)
		? get_the_post_thumbnail($bpafb_id, $bpafb_size, ['class' => 'bpafb-portfolio__img', 'alt' => ''])
		: '<span class="bpafb-portfolio__img bpafb-portfolio__img--empty"></span>';

	$bpafb_caption = '';
	if ('none' !== $bpafb_position) {
		$bpafb_caption = '<div class="bpafb-portfolio__caption">'
			. sprintf('<%1$s class="bpafb-portfolio__title">%2$s</%1$s>', tag_escape($bpafb_title_tag), esc_html(get_the_title()))
			. (($bpafb_show_terms && $bpafb_names) ? '<span class="bpafb-portfolio__terms">' . esc_html(implode(', ', $bpafb_names)) . '</span>' : '')
			. '</div>';
	}
	$bpafb_label = 'none' === $bpafb_position ? ' aria-label="' . esc_attr(wp_strip_all_tags(get_the_title())) . '"' : '';

	$bpafb_items .= sprintf(
		'<article class="bpafb-portfolio__item" data-filter-keys="%1$s"><a class="bpafb-portfolio__link" href="%2$s"%3$s><div class="bpafb-portfolio__media">%4$s%5$s</div>%6$s</a></article>',
		esc_attr(implode(' ', $bpafb_keys)),
		esc_url(get_permalink()),
		$bpafb_label,
		$bpafb_img,
		'overlay' === $bpafb_position ? $bpafb_caption : '',
		'below' === $bpafb_position ? $bpafb_caption : ''
	);
}
wp_reset_postdata();

$bpafb_filter_html = '';
if ($bpafb_tax && (!isset($attributes['showFilter']) || !empty($attributes['showFilter']))) {
	asort($bpafb_filters, SORT_NATURAL | SORT_FLAG_CASE);
	$bpafb_filter_html = Bpafb_Pro_Shared_Assets::filter_bar_html($attributes, $bpafb_filters, __('Filter items', 'blockive-premium-addon-for-block-pro'));
}

$bpafb_columns = function ($key) use ($attributes) {
	return isset($attributes[$key]) && is_numeric($attributes[$key]) ? (string) max(1, min(8, absint($attributes[$key]))) : '';
};
$bpafb_ratio = isset($attributes['aspectRatio']) && in_array($attributes['aspectRatio'], ['1/1', '4/3', '3/2', '16/9', '3/4', '2/3', 'auto'], true) ? $attributes['aspectRatio'] : '4/3';
$bpafb_layout = isset($attributes['layout']) && 'masonry' === $attributes['layout'] ? 'masonry' : 'grid';

// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped inside scoped_vars_css().
echo $bpafb_s::scoped_vars_css($bpafb_uid, array_merge(
	[
		'--bpafb-portfolio-columns'        => $bpafb_columns('columns'),
		'--bpafb-portfolio-columns-tablet' => $bpafb_columns('columnsTablet'),
		'--bpafb-portfolio-columns-mobile' => $bpafb_columns('columnsMobile'),
		'--bpafb-portfolio-gap'            => $bpafb_s::px($attributes, 'gap'),
		'--bpafb-portfolio-aspect'         => 'auto' === $bpafb_ratio ? '' : $bpafb_ratio,
		'--bpafb-portfolio-radius'         => $bpafb_s::px($attributes, 'borderRadius'),
		'--bpafb-portfolio-overlay'        => $bpafb_s::color($attributes, 'overlayColor'),
		'--bpafb-portfolio-title-color'    => $bpafb_s::color($attributes, 'titleColor'),
		'--bpafb-portfolio-terms-color'    => $bpafb_s::color($attributes, 'termsColor'),
	],
	$bpafb_s::typography_vars($attributes, 'title', '--bpafb-portfolio-title'),
	Bpafb_Pro_Shared_Assets::filter_bar_vars($attributes)
));

printf(
	'<div %1$s>%2$s<div class="bpafb-portfolio__items">%3$s</div></div>',
	// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped above.
	get_block_wrapper_attributes([
		'class' => sprintf(
			'bpafb-portfolio bpafb-portfolio--%1$s bpafb-portfolio--title-%2$s bpafb-portfolio--hover-%3$s%4$s bpafb-uid-%5$s',
			$bpafb_layout,
			$bpafb_position,
			isset($attributes['hoverEffect']) && 'none' === $attributes['hoverEffect'] ? 'none' : 'zoom',
			'auto' === $bpafb_ratio ? ' bpafb-portfolio--ratio-auto' : '',
			$bpafb_uid
		),
	]),
	$bpafb_filter_html,
	$bpafb_items
	// phpcs:enable
);
