<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Add to Cart Button block: WooCommerce's own
 * [add_to_cart] output for one chosen product (price, then a button that
 * adds it with AJAX where the product allows it, or links to the product
 * for variable products).
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block default content (unused, dynamic block).
 * @var WP_Block $block      Block instance.
 */

$bpafb_product_id = isset($attributes['productId']) ? absint($attributes['productId']) : 0;
$bpafb_product = $bpafb_product_id && function_exists('wc_get_product') ? wc_get_product($bpafb_product_id) : null;
if (!$bpafb_product || 'publish' !== get_post_status($bpafb_product_id) || !class_exists('WC_Shortcodes')) {
	if (defined('REST_REQUEST') && REST_REQUEST) {
		echo '<p class="bpafb-products__empty">' . esc_html__('Choose a published product in the block settings.', 'blockive-premium-addon-for-block-pro') . '</p>';
	}
	return;
}

$bpafb_html = WC_Shortcodes::product_add_to_cart([
	'id'         => $bpafb_product_id,
	'show_price' => (!isset($attributes['showPrice']) || !empty($attributes['showPrice'])) ? 'true' : 'false',
	'quantity'   => isset($attributes['quantity']) ? max(1, min(999, (int) $attributes['quantity'])) : 1,
	// The shortcode's own inline border/padding; the block's settings style it instead.
	'style'      => '',
]);

$bpafb_align = isset($attributes['buttonAlign']) && in_array($attributes['buttonAlign'], ['left', 'center', 'right'], true) ? $attributes['buttonAlign'] : 'left';

printf(
	'<div %1$s>%2$s</div>',
	get_block_wrapper_attributes(['class' => 'bpafb-add-to-cart bpafb-add-to-cart--' . $bpafb_align, 'style' => 'text-align:' . $bpafb_align]), // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	$bpafb_html // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- WooCommerce shortcode output.
);
