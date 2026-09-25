<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Menu Cart block. Count, subtotal, and mini cart
 * are kept current after AJAX add-to-cart through WooCommerce's cart
 * fragments (see Bpafb_Pro_Site_Blocks::cart_fragments()).
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block default content (unused, dynamic block).
 * @var WP_Block $block      Block instance.
 */

if (!class_exists('WooCommerce') || !function_exists('WC')) {
	return;
}

// The cart only exists on front-end requests.
if (null === WC()->cart && function_exists('wc_load_cart') && !is_admin()) {
	wc_load_cart();
}

$bpafb_uid = Bpafb_Pro_Site_Blocks::uid($attributes, 'bpafb-menu-cart-');
$bpafb_icon = isset($attributes['icon']) && in_array($attributes['icon'], ['cart', 'bag', 'basket'], true) ? $attributes['icon'] : 'cart';
$bpafb_align = isset($attributes['align']) && in_array($attributes['align'], ['left', 'center', 'right'], true) ? $attributes['align'] : 'left';
$bpafb_dropdown_align = isset($attributes['dropdownAlign']) && 'left' === $attributes['dropdownAlign'] ? 'left' : 'right';
$bpafb_show_count = !isset($attributes['showCount']) || !empty($attributes['showCount']);
$bpafb_show_subtotal = !isset($attributes['showSubtotal']) || !empty($attributes['showSubtotal']);
$bpafb_hide_empty = !empty($attributes['hideEmptyCount']);

// Like Elementor's Menu Cart, the dropdown is pointless on the cart and
// checkout pages themselves, so it becomes a plain link there.
$bpafb_dropdown = (!isset($attributes['behavior']) || 'dropdown' === $attributes['behavior'])
	&& !(function_exists('is_cart') && is_cart())
	&& !(function_exists('is_checkout') && is_checkout());

if (wp_script_is('wc-cart-fragments', 'registered')) {
	wp_enqueue_script('wc-cart-fragments');
}

$bpafb_count = WC()->cart ? (int) WC()->cart->get_cart_contents_count() : 0;

$bpafb_label = sprintf(
	/* translators: %d: number of items in the cart. */
	_n('Cart, %d item', 'Cart, %d items', $bpafb_count, 'blockive-premium-addon-for-block-pro'),
	$bpafb_count
);

$bpafb_toggle_inner = '<span class="bpafb-tb-menu-cart__icon">' . Bpafb_Pro_Site_Blocks::svg_icon($bpafb_icon)
	. ($bpafb_show_count ? Bpafb_Pro_Site_Blocks::cart_count_html() : '')
	. '</span>'
	. ($bpafb_show_subtotal ? Bpafb_Pro_Site_Blocks::cart_subtotal_html() : '');

if ($bpafb_dropdown) {
	ob_start();
	woocommerce_mini_cart();
	$bpafb_mini = ob_get_clean();

	$bpafb_inner = sprintf(
		'<button type="button" class="bpafb-tb-menu-cart__toggle" aria-expanded="false" aria-controls="%1$s" aria-label="%2$s">%3$s</button>'
		. '<div id="%1$s" class="bpafb-tb-menu-cart__dropdown bpafb-tb-menu-cart__dropdown--%4$s"><div class="widget_shopping_cart_content">%5$s</div></div>',
		esc_attr('bpafb-menu-cart-dropdown-' . $bpafb_uid),
		esc_attr($bpafb_label),
		$bpafb_toggle_inner,
		esc_attr($bpafb_dropdown_align),
		$bpafb_mini
	);
} else {
	$bpafb_inner = sprintf(
		'<a class="bpafb-tb-menu-cart__toggle" href="%1$s" aria-label="%2$s">%3$s</a>',
		esc_url(wc_get_cart_url()),
		esc_attr($bpafb_label),
		$bpafb_toggle_inner
	);
}

// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped inside scoped_vars_css().
echo Bpafb_Pro_Site_Blocks::scoped_vars_css($bpafb_uid, array_merge([
	'--bpafb-cart-icon-size'        => Bpafb_Pro_Site_Blocks::px($attributes, 'iconSize'),
	'--bpafb-cart-icon-color'       => Bpafb_Pro_Site_Blocks::color($attributes, 'iconColor'),
	'--bpafb-cart-icon-hover-color' => Bpafb_Pro_Site_Blocks::color($attributes, 'iconHoverColor'),
	'--bpafb-cart-count-color'      => Bpafb_Pro_Site_Blocks::color($attributes, 'countColor'),
	'--bpafb-cart-count-bg'         => Bpafb_Pro_Site_Blocks::color($attributes, 'countBgColor'),
	'--bpafb-cart-subtotal-color'   => Bpafb_Pro_Site_Blocks::color($attributes, 'subtotalColor'),
	'--bpafb-cart-button-bg'        => Bpafb_Pro_Site_Blocks::color($attributes, 'buttonBgColor'),
	'--bpafb-cart-button-color'     => Bpafb_Pro_Site_Blocks::color($attributes, 'buttonColor'),
	'--bpafb-cart-button-hover-bg'  => Bpafb_Pro_Site_Blocks::color($attributes, 'buttonHoverBgColor'),
	'--bpafb-cart-button-hover-color' => Bpafb_Pro_Site_Blocks::color($attributes, 'buttonHoverColor'),
	'--bpafb-cart-dropdown-bg'      => Bpafb_Pro_Site_Blocks::color($attributes, 'dropdownBgColor'),
	'--bpafb-cart-dropdown-width'   => Bpafb_Pro_Site_Blocks::px($attributes, 'dropdownWidth'),
	'--bpafb-cart-dropdown-radius'  => Bpafb_Pro_Site_Blocks::px($attributes, 'dropdownRadius'),
], Bpafb_Pro_Site_Blocks::typography_vars($attributes, 'subtotal', '--bpafb-cart-subtotal')));

printf(
	'<div %1$s>%2$s</div>',
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	get_block_wrapper_attributes([
		'class' => 'bpafb-tb-menu-cart bpafb-tb-align-' . $bpafb_align . ' bpafb-uid-' . $bpafb_uid
			. ($bpafb_hide_empty ? ' bpafb-tb-menu-cart--hide-empty' : '')
			. ($bpafb_dropdown ? ' bpafb-tb-menu-cart--dropdown' : ''),
	]),
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped parts plus WooCommerce's own mini-cart template.
	$bpafb_inner
);
