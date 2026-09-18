<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Pro Menu block. Shows a real WordPress menu,
 * always matching what is saved under Appearance > Menus - nothing about
 * the menu itself is copied into the block.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block default content (unused, dynamic block).
 * @var WP_Block $block      Block instance.
 */

$bpafb_menu_id = isset($attributes['menuId']) ? absint($attributes['menuId']) : 0;

if (!$bpafb_menu_id) {
	$bpafb_menus = wp_get_nav_menus();
	if (empty($bpafb_menus)) {
		return;
	}
	$bpafb_menu_id = $bpafb_menus[0]->term_id;
}

$bpafb_layout = isset($attributes['layout']) && 'vertical' === $attributes['layout'] ? 'vertical' : 'horizontal';
$bpafb_submenu_indicator = !isset($attributes['submenuIndicator']) || !empty($attributes['submenuIndicator']);
$bpafb_uid = !empty($attributes['bpafbUid']) ? sanitize_html_class($attributes['bpafbUid']) : wp_unique_id('bpafb-pro-menu-');

$bpafb_wrapper_attributes = get_block_wrapper_attributes([
	'class' => 'bpafb-pro-menu bpafb-pro-menu--' . $bpafb_layout . ' bpafb-uid-' . $bpafb_uid,
]);

// Marks which top-level item (if any) matches the current page, and adds
// our own class names - mirrors the free plugin's own convention of
// keeping class names under the block's own render.php, not a shared walker.
$bpafb_add_link_classes = function ($atts, $item, $args, $depth) {
	$classes = $depth ? 'bpafb-pro-menu-sub-item' : 'bpafb-pro-menu-item-link';
	if (in_array('current-menu-item', $item->classes, true) || in_array('current-menu-ancestor', $item->classes, true)) {
		$classes .= ' bpafb-pro-menu-item-active';
	}
	$atts['class'] = isset($atts['class']) ? $atts['class'] . ' ' . $classes : $classes;
	return $atts;
};

$bpafb_add_submenu_class = function ($classes) {
	$classes[] = 'bpafb-pro-menu-dropdown';
	return $classes;
};

add_filter('nav_menu_link_attributes', $bpafb_add_link_classes, 10, 4);
add_filter('nav_menu_submenu_css_class', $bpafb_add_submenu_class);

$bpafb_menu_html = wp_nav_menu([
	'echo' => false,
	'menu' => $bpafb_menu_id,
	'container' => '',
	'menu_class' => 'bpafb-pro-menu-list',
	'fallback_cb' => false,
	'items_wrap' => '<ul id="%1$s" class="%2$s">%3$s</ul>',
]);

remove_filter('nav_menu_link_attributes', $bpafb_add_link_classes, 10);
remove_filter('nav_menu_submenu_css_class', $bpafb_add_submenu_class);

if (empty($bpafb_menu_html)) {
	return;
}

// The submenu indicator is a plain CSS arrow (see style-index.css), toggled
// with a class - so no icon markup needs adding into the menu HTML itself.
$bpafb_indicator_class = $bpafb_submenu_indicator ? ' bpafb-pro-menu--has-indicator' : '';

?>
<nav <?php
// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
echo $bpafb_wrapper_attributes;
?> aria-label="<?php esc_attr_e('Menu', 'blockive-premium-addon-for-block-pro'); ?>">
	<button type="button" class="bpafb-pro-menu-toggle" aria-expanded="false" aria-label="<?php esc_attr_e('Menu', 'blockive-premium-addon-for-block-pro'); ?>">
		<span></span>
		<span></span>
		<span></span>
	</button>
	<div class="bpafb-pro-menu-list-wrap<?php echo esc_attr($bpafb_indicator_class); ?>">
		<?php
		// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- built entirely by wp_nav_menu() and our own filters above.
		echo $bpafb_menu_html;
		?>
	</div>
</nav>
<?php

$bpafb_style_vars = [
	'--bpafb-pro-menu-item-gap' => (isset($attributes['itemGap']) ? absint($attributes['itemGap']) : 24) . 'px',
	'--bpafb-pro-menu-item-padding-v' => (isset($attributes['itemPaddingV']) ? absint($attributes['itemPaddingV']) : 10) . 'px',
	'--bpafb-pro-menu-item-padding-h' => (isset($attributes['itemPaddingH']) ? absint($attributes['itemPaddingH']) : 6) . 'px',
	'--bpafb-pro-menu-item-color' => !empty($attributes['itemColor']) ? $attributes['itemColor'] : 'inherit',
	'--bpafb-pro-menu-item-hover-color' => !empty($attributes['itemHoverColor']) ? $attributes['itemHoverColor'] : 'inherit',
	'--bpafb-pro-menu-item-active-color' => !empty($attributes['itemActiveColor']) ? $attributes['itemActiveColor'] : 'inherit',
	'--bpafb-pro-menu-dropdown-bg' => !empty($attributes['dropdownBgColor']) ? $attributes['dropdownBgColor'] : '#ffffff',
	'--bpafb-pro-menu-dropdown-item-color' => !empty($attributes['dropdownItemColor']) ? $attributes['dropdownItemColor'] : 'inherit',
	'--bpafb-pro-menu-dropdown-item-hover-color' => !empty($attributes['dropdownItemHoverColor']) ? $attributes['dropdownItemHoverColor'] : 'inherit',
	'--bpafb-pro-menu-dropdown-item-hover-bg' => !empty($attributes['dropdownItemHoverBgColor']) ? $attributes['dropdownItemHoverBgColor'] : 'transparent',
	'--bpafb-pro-menu-dropdown-min-width' => (isset($attributes['dropdownMinWidth']) ? absint($attributes['dropdownMinWidth']) : 220) . 'px',
	'--bpafb-pro-menu-dropdown-border-width' => (isset($attributes['dropdownBorderWidth']) ? absint($attributes['dropdownBorderWidth']) : 1) . 'px',
	'--bpafb-pro-menu-dropdown-border-style' => !empty($attributes['dropdownBorderType']) ? $attributes['dropdownBorderType'] : 'solid',
	'--bpafb-pro-menu-dropdown-border-color' => !empty($attributes['dropdownBorderColor']) ? $attributes['dropdownBorderColor'] : '#e2e8f0',
	'--bpafb-pro-menu-dropdown-border-radius' => (isset($attributes['dropdownBorderRadius']) ? absint($attributes['dropdownBorderRadius']) : 8) . 'px',
	'--bpafb-pro-menu-toggle-color' => !empty($attributes['toggleIconColor']) ? $attributes['toggleIconColor'] : 'currentColor',
];

if (!empty($attributes['dropdownShadowEnabled'])) {
	$bpafb_shadow_color = !empty($attributes['dropdownShadowColor']) ? $attributes['dropdownShadowColor'] : 'rgba(15,23,42,0.12)';
	$bpafb_shadow_blur = isset($attributes['dropdownShadowBlur']) ? absint($attributes['dropdownShadowBlur']) : 24;
	$bpafb_shadow_spread = isset($attributes['dropdownShadowSpread']) ? intval($attributes['dropdownShadowSpread']) : 0;
	$bpafb_style_vars['--bpafb-pro-menu-dropdown-shadow'] = sprintf('0 8px %dpx %dpx %s', $bpafb_shadow_blur, $bpafb_shadow_spread, $bpafb_shadow_color);
} else {
	$bpafb_style_vars['--bpafb-pro-menu-dropdown-shadow'] = 'none';
}

$bpafb_mobile_breakpoint = isset($attributes['mobileBreakpoint']) ? absint($attributes['mobileBreakpoint']) : 768;

$bpafb_css_rules = '';
foreach ($bpafb_style_vars as $bpafb_var_name => $bpafb_var_value) {
	$bpafb_css_rules .= esc_html($bpafb_var_name) . ':' . esc_html($bpafb_var_value) . ';';
}

printf(
	'<style>.bpafb-uid-%1$s{%2$s}</style>',
	esc_attr($bpafb_uid),
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- built entirely from esc_html()'d values above.
	$bpafb_css_rules
);

printf(
	'<style>@media (max-width: %1$dpx){.bpafb-uid-%2$s .bpafb-pro-menu-toggle{display:flex;}.bpafb-uid-%2$s .bpafb-pro-menu-list-wrap{display:none;}.bpafb-uid-%2$s.bpafb-pro-menu--open .bpafb-pro-menu-list-wrap{display:block;}}</style>',
	$bpafb_mobile_breakpoint,
	esc_attr($bpafb_uid)
);
