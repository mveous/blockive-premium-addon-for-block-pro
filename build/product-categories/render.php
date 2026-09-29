<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Product Categories block: WooCommerce's own
 * category loop (the [product_categories] shortcode), with each
 * category's image, name, and product count, styled by the shop.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block default content (unused, dynamic block).
 * @var WP_Block $block      Block instance.
 */

if (!class_exists('WC_Shortcodes')) {
	return;
}

$bpafb_parent = isset($attributes['parent']) ? (string) $attributes['parent'] : '';
$bpafb_ids = array_filter(array_map('absint', isset($attributes['categoryIds']) ? (array) $attributes['categoryIds'] : []));

$bpafb_html = WC_Shortcodes::product_categories([
	'limit'      => isset($attributes['number']) ? max(0, min(100, (int) $attributes['number'])) : 0,
	'columns'    => isset($attributes['columns']) ? max(1, min(6, (int) $attributes['columns'])) : 4,
	'hide_empty' => (!isset($attributes['hideEmpty']) || !empty($attributes['hideEmpty'])) ? 1 : 0,
	// '' = all levels, '0' = top level only, or a category ID.
	'parent'     => '' === $bpafb_parent ? '' : (string) absint($bpafb_parent),
	'ids'        => implode(',', $bpafb_ids),
	'orderby'    => isset($attributes['orderBy']) && in_array($attributes['orderBy'], ['name', 'id', 'count', 'menu_order', 'include'], true) ? $attributes['orderBy'] : 'name',
	'order'      => isset($attributes['order']) && 'DESC' === $attributes['order'] ? 'DESC' : 'ASC',
]);

if (false === strpos($bpafb_html, '<li')) {
	if (defined('REST_REQUEST') && REST_REQUEST) {
		$bpafb_html = '<p class="bpafb-products__empty">' . esc_html__('No product categories match these settings.', 'blockive-premium-addon-for-block-pro') . '</p>';
	} else {
		return;
	}
}

printf(
	'<div %1$s>%2$s</div>',
	get_block_wrapper_attributes(['class' => 'bpafb-product-categories']), // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	$bpafb_html // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- WooCommerce template output.
);
