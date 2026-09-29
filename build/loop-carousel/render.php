<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Loop Carousel block: Loop Grid's query, with
 * each item rendered from a "Loop Item" Blockive Template, in the shared
 * carousel (Bpafb_Pro_Carousel).
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block default content (unused, dynamic block).
 * @var WP_Block $block      Block instance.
 */

$bpafb_template_id = isset($attributes['templateId']) ? absint($attributes['templateId']) : 0;
$bpafb_template_post = Bpafb_Pro_Template_Kinds::get_renderable_template($bpafb_template_id, 'loop-item');
if (!$bpafb_template_post) {
	return;
}

$bpafb_query_args = Bpafb_Pro_Loop_Builder::block_query_args($attributes, 8);
$bpafb_query_args['no_found_rows'] = true;
$bpafb_query = new WP_Query($bpafb_query_args);

$bpafb_s = 'Bpafb_Pro_Site_Blocks';
$bpafb_uid = $bpafb_s::uid($attributes, 'bpafb-loop-carousel-');
$bpafb_equal = !isset($attributes['equalHeight']) || !empty($attributes['equalHeight']);

if (!$bpafb_query->have_posts()) {
	if (!isset($attributes['enableNothingFound']) || !empty($attributes['enableNothingFound'])) {
		printf(
			'<div %1$s><p class="bpafb-loop-carousel__nothing-found">%2$s</p></div>',
			get_block_wrapper_attributes(['class' => 'bpafb-loop-carousel']), // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			esc_html(isset($attributes['nothingFoundText']) ? $attributes['nothingFoundText'] : __('No items found.', 'blockive-premium-addon-for-block-pro'))
		);
	}
	return;
}

$bpafb_slides = [];
while ($bpafb_query->have_posts()) {
	$bpafb_query->the_post();
	// Built from do_blocks() of a trusted, author-authored template.
	$bpafb_slides[] = '<div class="bpafb-loop-carousel__item">' . do_blocks($bpafb_template_post->post_content) . '</div>';
}
wp_reset_postdata();

// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped inside scoped_vars_css().
echo $bpafb_s::scoped_vars_css($bpafb_uid, Bpafb_Pro_Carousel::vars($attributes));

printf(
	'<div %1$s>%2$s</div>',
	// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped in the helpers; slides are do_blocks() output.
	get_block_wrapper_attributes(Bpafb_Pro_Carousel::wrapper_attrs(
		$attributes,
		'bpafb-loop-carousel' . ($bpafb_equal ? ' bpafb-loop-carousel--equal-height' : '') . ' bpafb-uid-' . $bpafb_uid,
		__('Posts', 'blockive-premium-addon-for-block-pro')
	)),
	Bpafb_Pro_Carousel::markup($attributes, $bpafb_slides)
	// phpcs:enable
);
