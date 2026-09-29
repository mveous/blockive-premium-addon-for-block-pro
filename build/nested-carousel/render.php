<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Nested Carousel block: each Carousel Slide inner
 * block (any blocks inside) becomes one slide of the shared carousel
 * (Bpafb_Pro_Carousel).
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Inner blocks' rendered HTML (unused; slides are rendered one by one).
 * @var WP_Block $block      Block instance.
 */

$bpafb_slides = [];
foreach ($block->inner_blocks as $bpafb_inner) {
	if ('blockive-premium-addon-for-block/nested-carousel-slide' === $bpafb_inner->name) {
		// Rendered inner blocks, authored in the editor.
		$bpafb_slides[] = $bpafb_inner->render();
	}
}
if (!$bpafb_slides) {
	return;
}

$bpafb_s = 'Bpafb_Pro_Site_Blocks';
$bpafb_uid = $bpafb_s::uid($attributes, 'bpafb-nested-carousel-');
$bpafb_equal = !isset($attributes['equalHeight']) || !empty($attributes['equalHeight']);
$bpafb_label = isset($attributes['carouselLabel']) && '' !== trim($attributes['carouselLabel']) ? trim($attributes['carouselLabel']) : __('Carousel', 'blockive-premium-addon-for-block-pro');

// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped inside scoped_vars_css().
echo $bpafb_s::scoped_vars_css($bpafb_uid, Bpafb_Pro_Carousel::vars($attributes));

printf(
	'<div %1$s>%2$s</div>',
	// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped in the helpers; slides are rendered blocks.
	get_block_wrapper_attributes(Bpafb_Pro_Carousel::wrapper_attrs(
		$attributes,
		'bpafb-nested-carousel' . ($bpafb_equal ? ' bpafb-nested-carousel--equal-height' : '') . ' bpafb-uid-' . $bpafb_uid,
		$bpafb_label
	)),
	Bpafb_Pro_Carousel::markup($attributes, $bpafb_slides)
	// phpcs:enable
);
