<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Pro Mega Menu block. Each item can show a
 * dropdown built from a Blockive Template (kind "mega-menu-item"), using
 * the same do_blocks() approach Bpafb_Pro_Loop_Builder already uses for
 * Loop Item templates.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block default content (unused, dynamic block).
 * @var WP_Block $block      Block instance.
 */

$bpafb_items = isset($attributes['items']) && is_array($attributes['items']) ? $attributes['items'] : [];

if (empty($bpafb_items)) {
	return;
}

$bpafb_uid = !empty($attributes['bpafbUid']) ? sanitize_html_class($attributes['bpafbUid']) : wp_unique_id('bpafb-pro-mega-menu-');
$bpafb_dropdown_width = isset($attributes['dropdownWidth']) && 'auto' === $attributes['dropdownWidth'] ? 'auto' : 'full';

$bpafb_wrapper_attributes = get_block_wrapper_attributes([
	'class' => 'bpafb-pro-mega-menu bpafb-pro-mega-menu--width-' . $bpafb_dropdown_width . ' bpafb-uid-' . $bpafb_uid,
]);

/**
 * Renders one item's dropdown content from its picked Blockive Template.
 * Mirrors Bpafb_Pro_Loop_Builder::maybe_render_loop_template(): only a
 * published template of the matching kind is used, and the same
 * do_blocks() plus $is_rendering-style safety Bpafb_Template_Frontend_Render
 * already relies on for every other template render path.
 *
 * @param int $template_id Blockive Template post ID.
 * @return string
 */
$bpafb_render_dropdown = function ($template_id) {
	$template_post = Bpafb_Pro_Template_Kinds::get_renderable_template($template_id, 'mega-menu-item');
	if (!$template_post) {
		return '';
	}

	return '<div class="bpafb-pro-template-render bpafb-pro-mega-menu-dropdown-inner">' . do_blocks($template_post->post_content) . '</div>';
};

?>
<nav <?php
// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
echo $bpafb_wrapper_attributes;
?> aria-label="<?php esc_attr_e('Menu', 'blockive-premium-addon-for-block-pro'); ?>">
	<button type="button" class="bpafb-pro-mega-menu-toggle" aria-expanded="false" aria-label="<?php esc_attr_e('Menu', 'blockive-premium-addon-for-block-pro'); ?>">
		<span></span>
		<span></span>
		<span></span>
	</button>
	<ul class="bpafb-pro-mega-menu-list">
		<?php foreach ($bpafb_items as $bpafb_item):
			$bpafb_title = isset($bpafb_item['title']) ? $bpafb_item['title'] : '';
			$bpafb_link = isset($bpafb_item['link']) && $bpafb_item['link'] !== '' ? $bpafb_item['link'] : '#';
			$bpafb_new_tab = !empty($bpafb_item['linkNewTab']);
			$bpafb_has_dropdown = !empty($bpafb_item['hasDropdown']);
			$bpafb_template_id = isset($bpafb_item['templateId']) ? absint($bpafb_item['templateId']) : 0;
			$bpafb_dropdown_html = $bpafb_has_dropdown ? $bpafb_render_dropdown($bpafb_template_id) : '';
			?>
			<li class="bpafb-pro-mega-menu-item<?php echo $bpafb_dropdown_html !== '' ? ' bpafb-pro-mega-menu-item--has-dropdown' : ''; ?>">
				<a class="bpafb-pro-mega-menu-item-link" href="<?php echo esc_url($bpafb_link); ?>"<?php echo $bpafb_new_tab ? ' target="_blank" rel="noopener noreferrer"' : ''; ?>>
					<?php echo esc_html($bpafb_title); ?>
				</a>
				<?php if ($bpafb_dropdown_html !== ''): ?>
					<div class="bpafb-pro-mega-menu-dropdown">
						<?php
						// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- built by do_blocks() of a trusted, author-authored template.
						echo $bpafb_dropdown_html;
						?>
					</div>
				<?php endif; ?>
			</li>
		<?php endforeach; ?>
	</ul>
</nav>
<?php

// Shared with the other menu block (Bpafb_Pro_Shared_Assets::menu_vars()).
$bpafb_style_vars = array_merge(Bpafb_Pro_Shared_Assets::menu_vars($attributes, '--bpafb-pro-mega-menu'), [
	'--bpafb-pro-mega-menu-dropdown-padding' => (isset($attributes['dropdownPadding']) ? absint($attributes['dropdownPadding']) : 32) . 'px',
]);

$bpafb_mobile_breakpoint = isset($attributes['mobileBreakpoint']) ? absint($attributes['mobileBreakpoint']) : 768;

// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped inside scoped_vars_css().
echo Bpafb_Pro_Site_Blocks::scoped_vars_css($bpafb_uid, $bpafb_style_vars);

printf(
	'<style>@media (max-width: %1$dpx){.bpafb-uid-%2$s .bpafb-pro-mega-menu-toggle{display:flex;}.bpafb-uid-%2$s .bpafb-pro-mega-menu-list{display:none;}.bpafb-uid-%2$s.bpafb-pro-mega-menu--open .bpafb-pro-mega-menu-list{display:block;}}</style>',
	$bpafb_mobile_breakpoint,
	esc_attr($bpafb_uid)
);
