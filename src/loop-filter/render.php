<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Loop Filter block: term links for a Loop Grid,
 * Loop Carousel, or Portfolio on the same page. Each link sets that block's
 * `bpafb-filter-{uid}` URL parameter, which
 * Bpafb_Pro_Loop_Builder::block_query_args() turns into a taxonomy filter,
 * so filtering works without JavaScript and filtered pages can be shared.
 * view.js swaps a Loop Grid's results in place instead of reloading.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block default content (unused, dynamic block).
 * @var WP_Block $block      Block instance.
 */

$bpafb_target = isset($attributes['targetUid']) ? sanitize_html_class($attributes['targetUid']) : '';
$bpafb_taxonomy = isset($attributes['taxonomy']) ? sanitize_key($attributes['taxonomy']) : '';
if (!$bpafb_target || !$bpafb_taxonomy || !taxonomy_exists($bpafb_taxonomy) || !is_taxonomy_viewable($bpafb_taxonomy)) {
	return;
}

$bpafb_args = [
	'taxonomy'   => $bpafb_taxonomy,
	'hide_empty' => !isset($attributes['hideEmpty']) || !empty($attributes['hideEmpty']),
	'orderby'    => isset($attributes['orderBy']) && 'count' === $attributes['orderBy'] ? 'count' : 'name',
	'order'      => isset($attributes['orderBy']) && 'count' === $attributes['orderBy'] ? 'DESC' : 'ASC',
];
$bpafb_include = isset($attributes['termIds']) && is_array($attributes['termIds']) ? array_filter(array_map('absint', $attributes['termIds'])) : [];
if ($bpafb_include) {
	$bpafb_args['include'] = $bpafb_include;
}
$bpafb_terms = get_terms($bpafb_args);
if (is_wp_error($bpafb_terms) || !$bpafb_terms) {
	return;
}

$bpafb_param = Bpafb_Pro_Loop_Builder::filter_param($bpafb_target);
// phpcs:ignore WordPress.Security.NonceVerification.Recommended -- which link is current; the value is only compared.
$bpafb_current = isset($_GET[$bpafb_param]) && is_string($_GET[$bpafb_param]) ? sanitize_text_field(wp_unslash($_GET[$bpafb_param])) : '';
// A value that is not one of these links is ignored by the loop block
// too (see Bpafb_Pro_Loop_Builder::active_filter()), so "All" is current.
$bpafb_values = array_map(function ($term) use ($bpafb_taxonomy) {
	return $bpafb_taxonomy . ':' . $term->slug;
}, $bpafb_terms);
if (!in_array($bpafb_current, $bpafb_values, true)) {
	$bpafb_current = '';
}

$bpafb_link = function ($value, $label) use ($bpafb_param, $bpafb_current) {
	$active = $value === $bpafb_current;
	// Changing the filter starts again from the first page.
	$url = '' === $value ? remove_query_arg([$bpafb_param, 'bpafb-page']) : add_query_arg([$bpafb_param => $value, 'bpafb-page' => false]);
	return sprintf(
		'<a class="bpafb-filter-bar__button%1$s" href="%2$s"%3$s>%4$s</a>',
		$active ? ' is-active' : '',
		esc_url($url),
		$active ? ' aria-current="true"' : '',
		esc_html($label)
	);
};

$bpafb_links = '';
if (!isset($attributes['showAll']) || !empty($attributes['showAll'])) {
	$bpafb_links .= $bpafb_link('', isset($attributes['allLabel']) && '' !== trim($attributes['allLabel']) ? $attributes['allLabel'] : __('All', 'blockive-premium-addon-for-block-pro'));
}
foreach ($bpafb_terms as $bpafb_term) {
	$bpafb_links .= $bpafb_link($bpafb_taxonomy . ':' . $bpafb_term->slug, $bpafb_term->name);
}

$bpafb_s = 'Bpafb_Pro_Site_Blocks';
$bpafb_uid = $bpafb_s::uid($attributes, 'bpafb-loop-filter-');
$bpafb_align = isset($attributes['filterAlign']) && in_array($attributes['filterAlign'], ['left', 'center', 'right'], true) ? $attributes['filterAlign'] : 'center';
$bpafb_tax_object = get_taxonomy($bpafb_taxonomy);

// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped inside scoped_vars_css().
echo $bpafb_s::scoped_vars_css($bpafb_uid, Bpafb_Pro_Shared_Assets::filter_bar_vars($attributes));

printf(
	'<nav %1$s><div class="bpafb-filter-bar bpafb-filter-bar--%2$s">%3$s</div><p class="bpafb-loop-filter__status" role="status" data-template="%4$s"></p></nav>',
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	get_block_wrapper_attributes([
		'class'       => 'bpafb-loop-filter bpafb-uid-' . $bpafb_uid,
		/* translators: %s: taxonomy name, e.g. "Categories". */
		'aria-label'  => sprintf(__('Filter by %s', 'blockive-premium-addon-for-block-pro'), $bpafb_tax_object ? $bpafb_tax_object->labels->singular_name : $bpafb_taxonomy),
		'data-target' => $bpafb_target,
	]),
	$bpafb_align,
	$bpafb_links, // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped in $bpafb_link.
	/* translators: %d: number of items shown after filtering. */
	esc_attr__('%d items shown', 'blockive-premium-addon-for-block-pro')
);
