<?php
/**
 * Thin template_include replacement for the active theme's own archive/
 * search/404 template, used when Bpafb_Pro_Theme_Locations resolves a
 * matching Archive/Search/404-kind Blockive Template for the current
 * request.
 *
 * Still calls get_header()/get_footer() like any normal theme template
 * would, so the theme's <head> assets, nav markup, and (if separately
 * matched) the Header/Footer Blockive Templates injected via wp_body_open/
 * wp_footer all render exactly as they would on any other page - only the
 * theme's own loop/content markup is replaced.
 *
 * This file is a plain Pro-only addition under includes/templates/ (not
 * one bin/sync-shared-source.js copies from the free plugin), so it is
 * never touched by re-syncing shared code from there.
 *
 * @package BlockivePro
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

get_header();

$bpafb_pro_template_id   = Bpafb_Pro_Theme_Locations::get_swapped_template_id();
$bpafb_pro_template_post = $bpafb_pro_template_id ? get_post($bpafb_pro_template_id) : null;
$bpafb_pro_kind          = Bpafb_Pro_Theme_Locations::get_swapped_kind() ?: 'archive';

if ($bpafb_pro_template_post && !empty($bpafb_pro_template_post->post_content)) {
	echo '<div class="bpafb-pro-template-render bpafb-pro-' . esc_attr($bpafb_pro_kind) . '">' // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		. do_blocks($bpafb_pro_template_post->post_content)
		. '</div>';
} else {
	// Should be unreachable - maybe_swap_archive_search_404_template() only
	// swaps in this file once it has already confirmed a match - but never
	// render a completely blank <body> if something upstream changes.
	while (have_posts()) {
		the_post();
		the_title('<h2>', '</h2>');
		the_excerpt();
	}
}

get_footer();
