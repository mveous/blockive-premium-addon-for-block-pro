<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Template block: shows a published "Section"
 * Blockive Template wherever the block is placed (a page, a post, another
 * template, ...). A section that ends up inside itself, directly or
 * through other sections, is skipped instead of repeating forever.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block default content (unused, dynamic block).
 * @var WP_Block $block      Block instance.
 */

$bpafb_template_id = isset($attributes['templateId']) ? absint($attributes['templateId']) : 0;
$bpafb_template = Bpafb_Pro_Template_Kinds::get_renderable_template($bpafb_template_id, 'section');
if (!$bpafb_template) {
	return;
}

// Sections being rendered right now, outermost first. A global, because
// this file is included afresh for every render (a `static` here would not
// be shared between renders).
if (!isset($GLOBALS['bpafb_rendering_sections'])) {
	$GLOBALS['bpafb_rendering_sections'] = [];
}
if (in_array($bpafb_template_id, $GLOBALS['bpafb_rendering_sections'], true)) {
	return;
}

$GLOBALS['bpafb_rendering_sections'][] = $bpafb_template_id;
$bpafb_inner = do_blocks($bpafb_template->post_content);
array_pop($GLOBALS['bpafb_rendering_sections']);

printf(
	'<div %1$s>%2$s</div>',
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	get_block_wrapper_attributes(['class' => 'bpafb-template-embed bpafb-pro-template-render']),
	$bpafb_inner // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- do_blocks() of a published, author-made template.
);
