<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Sitemap block: one column per chosen post type
 * or taxonomy, each a (optionally nested) list of links.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block default content (unused, dynamic block).
 * @var WP_Block $block      Block instance.
 */

$bpafb_items = isset($attributes['items']) && is_array($attributes['items']) ? $attributes['items'] : [];
if (!$bpafb_items) {
	return;
}

$bpafb_uid = Bpafb_Pro_Site_Blocks::uid($attributes, 'bpafb-sitemap-');
$bpafb_order_by = isset($attributes['orderBy']) && in_array($attributes['orderBy'], ['menu_order', 'title', 'date', 'modified'], true) ? $attributes['orderBy'] : 'menu_order';
$bpafb_order = isset($attributes['order']) && 'desc' === strtolower($attributes['order']) ? 'DESC' : 'ASC';
$bpafb_limit = isset($attributes['limit']) ? absint($attributes['limit']) : 0;
$bpafb_hierarchical = !isset($attributes['hierarchical']) || !empty($attributes['hierarchical']);
$bpafb_hide_empty = !isset($attributes['hideEmpty']) || !empty($attributes['hideEmpty']);
$bpafb_show_titles = !isset($attributes['showTitles']) || !empty($attributes['showTitles']);
$bpafb_title_tag = isset($attributes['titleTag']) && in_array($attributes['titleTag'], ['h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div'], true) ? $attributes['titleTag'] : 'h4';
$bpafb_exclude = isset($attributes['exclude']) ? implode(',', array_filter(array_map('absint', explode(',', (string) $attributes['exclude'])))) : '';
$bpafb_list_style = isset($attributes['listStyle']) && in_array($attributes['listStyle'], ['disc', 'circle', 'square', 'none'], true) ? $attributes['listStyle'] : 'disc';

$bpafb_post_sort = [
	'menu_order' => 'menu_order, post_title',
	'title'      => 'post_title',
	'date'       => 'post_date',
	'modified'   => 'post_modified',
];
$bpafb_term_sort = [
	'menu_order' => 'name',
	'title'      => 'name',
	'date'       => 'term_id',
	'modified'   => 'term_id',
];

$bpafb_sections = '';

foreach ($bpafb_items as $bpafb_item) {
	$bpafb_kind = isset($bpafb_item['kind']) && 'taxonomy' === $bpafb_item['kind'] ? 'taxonomy' : 'post_type';
	$bpafb_name = isset($bpafb_item['name']) ? sanitize_key($bpafb_item['name']) : '';
	$bpafb_list = '';

	if ('post_type' === $bpafb_kind) {
		$bpafb_type = get_post_type_object($bpafb_name);
		if (!$bpafb_type || !is_post_type_viewable($bpafb_type) || 'blockive_template' === $bpafb_name) {
			continue;
		}
		$bpafb_default_title = $bpafb_type->labels->name;

		if ($bpafb_type->hierarchical) {
			$bpafb_list = wp_list_pages([
				'post_type'   => $bpafb_name,
				'title_li'    => '',
				'echo'        => false,
				'sort_column' => $bpafb_post_sort[$bpafb_order_by],
				'sort_order'  => $bpafb_order,
				'exclude'     => $bpafb_exclude,
				'depth'       => $bpafb_hierarchical ? 0 : -1,
				'number'      => $bpafb_limit ? $bpafb_limit : '',
			]);
		} else {
			$bpafb_posts = get_posts([
				'post_type'        => $bpafb_name,
				'post_status'      => 'publish',
				'numberposts'      => $bpafb_limit ? $bpafb_limit : -1,
				'orderby'          => 'menu_order' === $bpafb_order_by ? 'menu_order title' : $bpafb_order_by,
				'order'            => $bpafb_order,
				'exclude'          => $bpafb_exclude ? explode(',', $bpafb_exclude) : [],
				'suppress_filters' => false,
			]);
			foreach ($bpafb_posts as $bpafb_post) {
				$bpafb_list .= sprintf(
					'<li class="page_item"><a href="%1$s">%2$s</a></li>',
					esc_url(get_permalink($bpafb_post)),
					esc_html(get_the_title($bpafb_post))
				);
			}
		}
	} else {
		$bpafb_tax = get_taxonomy($bpafb_name);
		if (!$bpafb_tax || !$bpafb_tax->public) {
			continue;
		}
		$bpafb_default_title = $bpafb_tax->labels->name;

		$bpafb_list = wp_list_categories([
			'taxonomy'         => $bpafb_name,
			'title_li'         => '',
			'echo'             => false,
			'hierarchical'     => $bpafb_hierarchical,
			'hide_empty'       => $bpafb_hide_empty,
			'orderby'          => $bpafb_term_sort[$bpafb_order_by],
			'order'            => $bpafb_order,
			'exclude'          => $bpafb_exclude,
			'number'           => $bpafb_limit ? $bpafb_limit : '',
			'show_option_none' => '',
		]);
	}

	if (trim(wp_strip_all_tags($bpafb_list)) === '') {
		continue;
	}

	$bpafb_section_title = '';
	if ($bpafb_show_titles) {
		$bpafb_section_title = sprintf(
			'<%1$s class="bpafb-tb-sitemap__title">%2$s</%1$s>',
			tag_escape($bpafb_title_tag),
			esc_html(isset($bpafb_item['title']) && $bpafb_item['title'] !== '' ? $bpafb_item['title'] : $bpafb_default_title)
		);
	}

	$bpafb_sections .= '<div class="bpafb-tb-sitemap__section">' . $bpafb_section_title
		. '<ul class="bpafb-tb-sitemap__list">' . $bpafb_list . '</ul></div>';
}

if ($bpafb_sections === '') {
	return;
}

if (!empty($attributes['nofollow'])) {
	$bpafb_sections = str_replace('<a ', '<a rel="nofollow" ', $bpafb_sections);
}

$bpafb_cols = function ($key, $default) use ($attributes) {
	return (string) max(1, min(6, isset($attributes[$key]) ? absint($attributes[$key]) : $default));
};

// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped inside scoped_vars_css().
echo Bpafb_Pro_Site_Blocks::scoped_vars_css($bpafb_uid, array_merge([
	'--bpafb-sitemap-columns'          => $bpafb_cols('columns', 2),
	'--bpafb-sitemap-columns-tablet'   => $bpafb_cols('columnsTablet', 2),
	'--bpafb-sitemap-columns-mobile'   => $bpafb_cols('columnsMobile', 1),
	'--bpafb-sitemap-column-gap'       => Bpafb_Pro_Site_Blocks::px($attributes, 'columnGap'),
	'--bpafb-sitemap-row-gap'          => Bpafb_Pro_Site_Blocks::px($attributes, 'rowGap'),
	'--bpafb-sitemap-title-color'      => Bpafb_Pro_Site_Blocks::color($attributes, 'titleColor'),
	'--bpafb-sitemap-link-color'       => Bpafb_Pro_Site_Blocks::color($attributes, 'linkColor'),
	'--bpafb-sitemap-link-hover-color' => Bpafb_Pro_Site_Blocks::color($attributes, 'linkHoverColor'),
	'--bpafb-sitemap-bullet-color'     => Bpafb_Pro_Site_Blocks::color($attributes, 'bulletColor'),
	'--bpafb-sitemap-list-style'       => $bpafb_list_style,
], Bpafb_Pro_Site_Blocks::typography_vars($attributes, 'title', '--bpafb-sitemap-title'), Bpafb_Pro_Site_Blocks::typography_vars($attributes, 'link', '--bpafb-sitemap-link')));

printf(
	'<nav %1$s aria-label="%2$s">%3$s</nav>',
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	get_block_wrapper_attributes(['class' => 'bpafb-tb-sitemap bpafb-uid-' . $bpafb_uid]),
	esc_attr__('Sitemap', 'blockive-premium-addon-for-block-pro'),
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- core list functions plus escaped parts above.
	$bpafb_sections
);
