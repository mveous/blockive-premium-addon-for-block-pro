<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Products block: WooCommerce's own product loop
 * (WC_Shortcode_Products, the class behind the [products] shortcode), so
 * the cards, prices, ratings, sale badges, and Add to Cart buttons match
 * the shop and the theme's WooCommerce styles.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block default content (unused, dynamic block).
 * @var WP_Block $block      Block instance.
 */

if (!class_exists('WC_Shortcode_Products')) {
	return;
}

$bpafb_ids_to_slugs = function ($ids, $taxonomy) {
	$slugs = [];
	foreach ((array) $ids as $id) {
		$term = get_term(absint($id), $taxonomy);
		if ($term && !is_wp_error($term)) {
			$slugs[] = $term->slug;
		}
	}
	return implode(',', $slugs);
};

$bpafb_source = isset($attributes['source']) ? $attributes['source'] : 'recent';
$bpafb_order_by = isset($attributes['orderBy']) && in_array($attributes['orderBy'], ['date', 'title', 'price', 'popularity', 'rating', 'menu_order', 'rand', 'id'], true) ? $attributes['orderBy'] : 'date';
$bpafb_args = [
	'limit'    => isset($attributes['limit']) ? max(1, min(100, (int) $attributes['limit'])) : 8,
	'columns'  => isset($attributes['columns']) ? max(1, min(6, (int) $attributes['columns'])) : 4,
	'orderby'  => $bpafb_order_by,
	'order'    => isset($attributes['order']) && 'ASC' === $attributes['order'] ? 'ASC' : 'DESC',
	'paginate' => !empty($attributes['paginate']),
	'cache'    => false,
];

// Sale, best-selling, and top-rated are the shortcode class's own types.
$bpafb_type = 'products';
switch ($bpafb_source) {
	case 'sale':
		$bpafb_type = 'sale_products';
		break;
	case 'featured':
		$bpafb_args['visibility'] = 'featured';
		break;
	case 'best_selling':
		$bpafb_type = 'best_selling_products';
		break;
	case 'top_rated':
		$bpafb_type = 'top_rated_products';
		break;
	case 'manual':
		$bpafb_ids = array_filter(array_map('absint', isset($attributes['productIds']) ? (array) $attributes['productIds'] : []));
		if (!$bpafb_ids) {
			return;
		}
		$bpafb_args['ids'] = implode(',', $bpafb_ids);
		$bpafb_args['limit'] = count($bpafb_ids);
		// Hand-picked products keep the chosen order unless another order is set.
		if ('date' === $bpafb_order_by) {
			$bpafb_args['orderby'] = 'post__in';
		}
		break;
}

// Category and tag filters work with every source except hand-picked.
if ('manual' !== $bpafb_source) {
	if (!empty($attributes['categories'])) {
		$bpafb_args['category'] = $bpafb_ids_to_slugs($attributes['categories'], 'product_cat');
		$bpafb_args['cat_operator'] = 'IN';
	}
	if (!empty($attributes['tags'])) {
		$bpafb_args['tag'] = $bpafb_ids_to_slugs($attributes['tags'], 'product_tag');
		$bpafb_args['tag_operator'] = 'IN';
	}
}

$bpafb_shortcode = new WC_Shortcode_Products($bpafb_args, $bpafb_type);
$bpafb_html = $bpafb_shortcode->get_content();

if (false === strpos($bpafb_html, '<li')) {
	// Nothing to show; say so only in the editor preview.
	if (defined('REST_REQUEST') && REST_REQUEST) {
		$bpafb_html = '<p class="bpafb-products__empty">' . esc_html__('No products match these settings.', 'blockive-premium-addon-for-block-pro') . '</p>';
	} else {
		return;
	}
}

printf(
	'<div %1$s>%2$s</div>',
	get_block_wrapper_attributes(['class' => 'bpafb-products']), // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	$bpafb_html // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- WooCommerce template output.
);
