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

// Shared with the other menu block (Bpafb_Pro_Shared_Assets::menu_vars()).
$bpafb_style_vars = array_merge(Bpafb_Pro_Shared_Assets::menu_vars($attributes, '--bpafb-pro-menu'), [
	'--bpafb-pro-menu-dropdown-item-color'       => !empty($attributes['dropdownItemColor']) ? $attributes['dropdownItemColor'] : 'inherit',
	'--bpafb-pro-menu-dropdown-item-hover-color' => !empty($attributes['dropdownItemHoverColor']) ? $attributes['dropdownItemHoverColor'] : 'inherit',
	'--bpafb-pro-menu-dropdown-item-hover-bg'    => !empty($attributes['dropdownItemHoverBgColor']) ? $attributes['dropdownItemHoverBgColor'] : 'transparent',
	'--bpafb-pro-menu-dropdown-min-width'        => (isset($attributes['dropdownMinWidth']) ? absint($attributes['dropdownMinWidth']) : 220) . 'px',
]);

$bpafb_mobile_breakpoint = isset($attributes['mobileBreakpoint']) ? absint($attributes['mobileBreakpoint']) : 768;

// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped inside scoped_vars_css().
echo Bpafb_Pro_Site_Blocks::scoped_vars_css($bpafb_uid, $bpafb_style_vars);

printf(
	'<style>@media (max-width: %1$dpx){.bpafb-uid-%2$s .bpafb-pro-menu-toggle{display:flex;}.bpafb-uid-%2$s .bpafb-pro-menu-list-wrap{display:none;}.bpafb-uid-%2$s.bpafb-pro-menu--open .bpafb-pro-menu-list-wrap{display:block;}}</style>',
	$bpafb_mobile_breakpoint,
	esc_attr($bpafb_uid)
);
