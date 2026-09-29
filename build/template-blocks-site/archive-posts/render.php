<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Archive Posts block. Loops the main query (see
 * Bpafb_Pro_Archive_Loop), as built-in cards or through a Loop Item
 * Blockive Template.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block default content (unused, dynamic block).
 * @var WP_Block $block      Block instance.
 */

$bpafb_query = Bpafb_Pro_Archive_Loop::get_query('post', isset($attributes['columns']) ? absint($attributes['columns']) * 2 : 6);
if (!$bpafb_query || !Bpafb_Pro_Archive_Loop::begin()) {
	return;
}

$bpafb_uid = Bpafb_Pro_Site_Blocks::uid($attributes, 'bpafb-archive-posts-');
$bpafb_template = Bpafb_Pro_Archive_Loop::loop_template($attributes);
$bpafb_equal = !isset($attributes['equalHeight']) || !empty($attributes['equalHeight']);

$bpafb_opt = function ($key, $default = true) use ($attributes) {
	return isset($attributes[$key]) ? !empty($attributes[$key]) : $default;
};

$bpafb_title_tag = isset($attributes['titleTag']) && in_array($attributes['titleTag'], ['h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div'], true) ? $attributes['titleTag'] : 'h3';
$bpafb_image_size = isset($attributes['imageSize']) && in_array($attributes['imageSize'], ['thumbnail', 'medium', 'medium_large', 'large', 'full'], true) ? $attributes['imageSize'] : 'medium_large';
$bpafb_excerpt_length = isset($attributes['excerptLength']) ? max(0, absint($attributes['excerptLength'])) : 20;
$bpafb_read_more = isset($attributes['readMoreText']) && $attributes['readMoreText'] !== '' ? $attributes['readMoreText'] : __('Read More »', 'blockive-premium-addon-for-block-pro');

$bpafb_items = '';

if ($bpafb_query->have_posts()) {
	while ($bpafb_query->have_posts()) {
		$bpafb_query->the_post();

		if ($bpafb_template) {
			$bpafb_items .= '<div class="bpafb-tb-archive-item">' . do_blocks($bpafb_template->post_content) . '</div>';
			continue;
		}

		$bpafb_id = get_the_ID();
		$bpafb_link = get_permalink();
		$bpafb_card = '';

		if ($bpafb_opt('showImage') && has_post_thumbnail()) {
			$bpafb_card .= sprintf(
				'<a class="bpafb-tb-archive-card__media" href="%1$s" tabindex="-1" aria-hidden="true">%2$s</a>',
				esc_url($bpafb_link),
				get_the_post_thumbnail($bpafb_id, $bpafb_image_size, ['alt' => ''])
			);
		}

		$bpafb_body = '';

		if ($bpafb_opt('showCategories', false)) {
			$bpafb_cats = get_the_category_list(', ', '', $bpafb_id);
			if ($bpafb_cats) {
				$bpafb_body .= '<div class="bpafb-tb-archive-card__terms">' . $bpafb_cats . '</div>';
			}
		}

		if ($bpafb_opt('showTitle')) {
			$bpafb_body .= sprintf(
				'<%1$s class="bpafb-tb-archive-card__title"><a href="%2$s">%3$s</a></%1$s>',
				tag_escape($bpafb_title_tag),
				esc_url($bpafb_link),
				esc_html(get_the_title() !== '' ? get_the_title() : __('(no title)', 'blockive-premium-addon-for-block-pro'))
			);
		}

		$bpafb_meta = [];
		if ($bpafb_opt('showDate')) {
			$bpafb_meta[] = sprintf('<time datetime="%1$s">%2$s</time>', esc_attr(get_the_date('c')), esc_html(get_the_date()));
		}
		if ($bpafb_opt('showAuthor')) {
			$bpafb_meta[] = '<span class="bpafb-tb-archive-card__author">' . esc_html(get_the_author()) . '</span>';
		}
		if ($bpafb_opt('showComments', false) && comments_open()) {
			$bpafb_count = (int) get_comments_number();
			/* translators: %s: number of comments. */
			$bpafb_meta[] = '<span>' . esc_html(sprintf(_n('%s Comment', '%s Comments', $bpafb_count, 'blockive-premium-addon-for-block-pro'), number_format_i18n($bpafb_count))) . '</span>';
		}
		if ($bpafb_meta) {
			$bpafb_body .= '<div class="bpafb-tb-archive-card__meta">' . implode('<span class="bpafb-tb-archive-card__sep" aria-hidden="true">•</span>', $bpafb_meta) . '</div>';
		}

		if ($bpafb_opt('showExcerpt') && $bpafb_excerpt_length > 0) {
			$bpafb_excerpt = wp_trim_words(get_the_excerpt(), $bpafb_excerpt_length, '&hellip;');
			if ($bpafb_excerpt !== '') {
				$bpafb_body .= '<div class="bpafb-tb-archive-card__excerpt">' . wp_kses_post($bpafb_excerpt) . '</div>';
			}
		}

		if ($bpafb_opt('showReadMore')) {
			$bpafb_body .= sprintf(
				'<a class="bpafb-tb-archive-card__more" href="%1$s">%2$s<span class="screen-reader-text"> %3$s</span></a>',
				esc_url($bpafb_link),
				esc_html($bpafb_read_more),
				esc_html(get_the_title())
			);
		}

		$bpafb_card .= '<div class="bpafb-tb-archive-card__body">' . $bpafb_body . '</div>';

		$bpafb_items .= sprintf(
			'<article class="%1$s">%2$s</article>',
			esc_attr(implode(' ', array_merge(['bpafb-tb-archive-item', 'bpafb-tb-archive-card'], get_post_class('', $bpafb_id)))),
			$bpafb_card
		);
	}
}

$bpafb_has_items = $bpafb_items !== '';
$bpafb_pagination = $bpafb_has_items ? Bpafb_Pro_Archive_Loop::pagination_html($bpafb_query, $attributes) : '';

Bpafb_Pro_Archive_Loop::end($bpafb_query);

$bpafb_inner = $bpafb_has_items
	? '<div class="bpafb-tb-archive-grid">' . $bpafb_items . '</div>' . $bpafb_pagination
	: Bpafb_Pro_Archive_Loop::nothing_found_html($attributes, __('Nothing found. Please try a different search.', 'blockive-premium-addon-for-block-pro'));

// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped inside scoped_vars_css().
echo Bpafb_Pro_Site_Blocks::scoped_vars_css($bpafb_uid, array_merge(
	Bpafb_Pro_Archive_Loop::shared_vars($attributes, [3, 2, 1]),
	[
		'--bpafb-archive-meta-color'            => Bpafb_Pro_Site_Blocks::color($attributes, 'metaColor'),
		'--bpafb-archive-excerpt-color'         => Bpafb_Pro_Site_Blocks::color($attributes, 'excerptColor'),
		'--bpafb-archive-more-color'            => Bpafb_Pro_Site_Blocks::color($attributes, 'readMoreColor'),
		'--bpafb-archive-more-hover-color'      => Bpafb_Pro_Site_Blocks::color($attributes, 'readMoreHoverColor'),
	]
));

printf(
	'<div %1$s>%2$s</div>',
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	get_block_wrapper_attributes([
		'class' => 'bpafb-tb-archive bpafb-tb-archive-posts bpafb-uid-' . $bpafb_uid
			. ($bpafb_template ? ' bpafb-tb-archive--template' : ' bpafb-tb-archive--card')
			. ($bpafb_equal ? ' bpafb-tb-archive--equal' : '')
			. ($bpafb_opt('cardShadow') ? ' bpafb-tb-archive--shadow' : ''),
	]),
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped parts, core template tags, and do_blocks() of an author-built template.
	$bpafb_inner
);
