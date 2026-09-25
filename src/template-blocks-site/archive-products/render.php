<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Archive Products block. Loops the main
 * WooCommerce query (shop, product category/tag/attribute archives, and
 * product search), with WooCommerce's own result count and sorting
 * dropdown. Three layouts: Blockive cards, WooCommerce's native loop
 * (theme/plugin compatible content-product.php), or a Loop Item template.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block default content (unused, dynamic block).
 * @var WP_Block $block      Block instance.
 */

if (!class_exists('WooCommerce') || !function_exists('wc_get_product')) {
	return;
}

// Only on product listings - a generic Archive template shared with the
// blog must not list blog posts as products.
$bpafb_is_product_listing = Bpafb_Pro_Archive_Loop::is_editor_preview()
	|| (function_exists('is_shop') && is_shop())
	|| (function_exists('is_product_taxonomy') && is_product_taxonomy())
	|| (is_search() && 'product' === get_query_var('post_type'));

if (!$bpafb_is_product_listing) {
	return;
}

$bpafb_columns = isset($attributes['columns']) ? max(1, min(8, absint($attributes['columns']))) : 4;
$bpafb_query = Bpafb_Pro_Archive_Loop::get_query('product', $bpafb_columns * 2);
if (!$bpafb_query || !Bpafb_Pro_Archive_Loop::begin()) {
	return;
}

$bpafb_uid = Bpafb_Pro_Site_Blocks::uid($attributes, 'bpafb-archive-products-');
$bpafb_template = Bpafb_Pro_Archive_Loop::loop_template($attributes);
$bpafb_layout = $bpafb_template ? 'template' : (isset($attributes['layout']) && 'woocommerce' === $attributes['layout'] ? 'woocommerce' : 'card');

$bpafb_opt = function ($key, $default = true) use ($attributes) {
	return isset($attributes[$key]) ? !empty($attributes[$key]) : $default;
};

$bpafb_title_tag = isset($attributes['titleTag']) && in_array($attributes['titleTag'], ['h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div'], true) ? $attributes['titleTag'] : 'h3';
$bpafb_align = isset($attributes['contentAlign']) && in_array($attributes['contentAlign'], ['left', 'center', 'right'], true) ? $attributes['contentAlign'] : 'left';

// WooCommerce's loop props drive the result count, sorting dropdown, and
// the native loop's column class - always set them from the query we
// actually loop (the editor preview uses its own).
wc_reset_loop();
wc_setup_loop([
	'columns'      => $bpafb_columns,
	'is_paginated' => true,
	'is_search'    => $bpafb_query->is_search(),
	'is_filtered'  => function_exists('is_filtered') && is_filtered(),
	'total'        => (int) $bpafb_query->found_posts,
	'total_pages'  => (int) $bpafb_query->max_num_pages,
	'per_page'     => (int) $bpafb_query->get('posts_per_page'),
	'current_page' => max(1, (int) $bpafb_query->get('paged')),
]);

$bpafb_toolbar = '';
if ($bpafb_query->have_posts() && ($bpafb_opt('showResultCount') || $bpafb_opt('showOrdering'))) {
	ob_start();
	if ($bpafb_opt('showResultCount')) {
		woocommerce_result_count();
	}
	if ($bpafb_opt('showOrdering')) {
		woocommerce_catalog_ordering();
	}
	$bpafb_toolbar = trim(ob_get_clean());
	if ($bpafb_toolbar !== '') {
		$bpafb_toolbar = '<div class="bpafb-tb-archive-toolbar">' . $bpafb_toolbar . '</div>';
	}
}

$bpafb_items = '';

if ($bpafb_query->have_posts()) {
	ob_start();

	if ('woocommerce' === $bpafb_layout) {
		woocommerce_product_loop_start();
		while ($bpafb_query->have_posts()) {
			$bpafb_query->the_post();
			wc_get_template_part('content', 'product');
		}
		woocommerce_product_loop_end();
	} else {
		echo '<div class="bpafb-tb-archive-grid">';
		while ($bpafb_query->have_posts()) {
			$bpafb_query->the_post();

			if ($bpafb_template) {
				// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- do_blocks() of an author-built template.
				echo '<div class="bpafb-tb-archive-item">' . do_blocks($bpafb_template->post_content) . '</div>';
				continue;
			}

			$bpafb_product = wc_get_product(get_the_ID());
			if (!$bpafb_product || !$bpafb_product->is_visible()) {
				continue;
			}
			$GLOBALS['product'] = $bpafb_product; // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited -- WooCommerce's loop templates read it.
			$bpafb_link = $bpafb_product->get_permalink();

			printf('<div class="%s">', esc_attr(implode(' ', array_merge(['bpafb-tb-archive-item', 'bpafb-tb-archive-card', 'bpafb-tb-archive-card--' . $bpafb_align], wc_get_product_class('', $bpafb_product)))));

			if ($bpafb_opt('showImage')) {
				echo '<a class="bpafb-tb-archive-card__media" href="' . esc_url($bpafb_link) . '" tabindex="-1" aria-hidden="true">';
				// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- core image markup.
				echo $bpafb_product->get_image('woocommerce_thumbnail', ['alt' => '']);
				if ($bpafb_opt('showSaleBadge') && $bpafb_product->is_on_sale()) {
					echo '<span class="bpafb-tb-archive-card__badge">' . esc_html(!empty($attributes['saleText']) ? $attributes['saleText'] : __('Sale!', 'blockive-premium-addon-for-block-pro')) . '</span>';
				}
				echo '</a>';
			}

			echo '<div class="bpafb-tb-archive-card__body">';

			if ($bpafb_opt('showTitle')) {
				printf(
					'<%1$s class="bpafb-tb-archive-card__title woocommerce-loop-product__title"><a href="%2$s">%3$s</a></%1$s>',
					tag_escape($bpafb_title_tag),
					esc_url($bpafb_link),
					esc_html($bpafb_product->get_name())
				);
			}

			if ($bpafb_opt('showRating') && wc_review_ratings_enabled() && $bpafb_product->get_average_rating() > 0) {
				// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- WooCommerce's own rating markup.
				echo '<div class="bpafb-tb-archive-card__rating">' . wc_get_rating_html($bpafb_product->get_average_rating()) . '</div>';
			}

			if ($bpafb_opt('showPrice') && $bpafb_product->get_price_html() !== '') {
				echo '<div class="bpafb-tb-archive-card__price price">' . wp_kses_post($bpafb_product->get_price_html()) . '</div>';
			}

			if ($bpafb_opt('showAddToCart')) {
				echo '<div class="bpafb-tb-archive-card__cart">';
				woocommerce_template_loop_add_to_cart();
				echo '</div>';
			}

			echo '</div></div>';
		}
		echo '</div>';
	}

	$bpafb_items = ob_get_clean();
}

$bpafb_has_items = trim($bpafb_items) !== '';
$bpafb_pagination = $bpafb_has_items ? Bpafb_Pro_Archive_Loop::pagination_html($bpafb_query, $attributes) : '';

wc_reset_loop();
Bpafb_Pro_Archive_Loop::end($bpafb_query);

$bpafb_inner = $bpafb_has_items
	? $bpafb_toolbar . $bpafb_items . $bpafb_pagination
	: Bpafb_Pro_Archive_Loop::nothing_found_html($attributes, __('No products were found matching your selection.', 'blockive-premium-addon-for-block-pro'));

// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped inside scoped_vars_css().
echo Bpafb_Pro_Site_Blocks::scoped_vars_css($bpafb_uid, array_merge(
	Bpafb_Pro_Archive_Loop::shared_vars($attributes, [4, 3, 2]),
	[
		'--bpafb-archive-price-color'        => Bpafb_Pro_Site_Blocks::color($attributes, 'priceColor'),
		'--bpafb-archive-badge-bg'           => Bpafb_Pro_Site_Blocks::color($attributes, 'saleBadgeBg'),
		'--bpafb-archive-badge-color'        => Bpafb_Pro_Site_Blocks::color($attributes, 'saleBadgeColor'),
		'--bpafb-archive-button-color'       => Bpafb_Pro_Site_Blocks::color($attributes, 'buttonColor'),
		'--bpafb-archive-button-bg'          => Bpafb_Pro_Site_Blocks::color($attributes, 'buttonBgColor'),
		'--bpafb-archive-button-hover-color' => Bpafb_Pro_Site_Blocks::color($attributes, 'buttonHoverColor'),
		'--bpafb-archive-button-hover-bg'    => Bpafb_Pro_Site_Blocks::color($attributes, 'buttonHoverBgColor'),
		'--bpafb-archive-button-radius'      => Bpafb_Pro_Site_Blocks::px($attributes, 'buttonRadius'),
	]
));

printf(
	'<div %1$s>%2$s</div>',
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	get_block_wrapper_attributes([
		// `woocommerce` gives the native layout (and plugins hooking into
		// it) the same styling context as a regular shop page.
		'class' => 'woocommerce bpafb-tb-archive bpafb-tb-archive-products bpafb-tb-archive--' . $bpafb_layout . ' bpafb-tb-archive--equal bpafb-uid-' . $bpafb_uid
			. (!empty($attributes['cardShadow']) ? ' bpafb-tb-archive--shadow' : ''),
	]),
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped parts plus WooCommerce's own templates.
	$bpafb_inner
);
