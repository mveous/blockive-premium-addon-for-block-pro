<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Pro Loop Grid block. Shows any post type in a
 * grid, rendering each item from a "Loop Item" Blockive Template with
 * do_blocks(), the same way Bpafb_Pro_Loop_Builder does it for Post Grid
 * (Elementor Pro calls this same idea "Loop Grid").
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

$bpafb_post_type = isset($attributes['postType']) && is_post_type_viewable($attributes['postType']) ? $attributes['postType'] : 'post';

$bpafb_posts_per_page = isset($attributes['postsPerPage']) ? absint($attributes['postsPerPage']) : 6;
$bpafb_posts_per_page = max(1, min(50, $bpafb_posts_per_page));

$bpafb_allowed_orderby = ['date', 'title', 'rand', 'id', 'menu_order'];
$bpafb_orderby = isset($attributes['orderBy']) && in_array($attributes['orderBy'], $bpafb_allowed_orderby, true) ? $attributes['orderBy'] : 'date';
$bpafb_orderby = ('id' === $bpafb_orderby) ? 'ID' : $bpafb_orderby;

$bpafb_order = isset($attributes['order']) && in_array(strtolower((string) $attributes['order']), ['asc', 'desc'], true)
	? $attributes['order']
	: 'desc';

$bpafb_pagination_type = isset($attributes['paginationType']) && in_array($attributes['paginationType'], ['numbers', 'prev_next'], true)
	? $attributes['paginationType']
	: 'none';

$bpafb_paged = 1;
if ('none' !== $bpafb_pagination_type && isset($_GET['bpafb-page'])) {
	$bpafb_paged = max(1, absint(wp_unslash($_GET['bpafb-page'])));
}

$bpafb_query_args = [
	'post_type'      => $bpafb_post_type,
	'posts_per_page' => $bpafb_posts_per_page,
	'paged'          => $bpafb_paged,
	'orderby'        => $bpafb_orderby,
	'order'          => $bpafb_order,
	'post_status'    => 'publish',
];

$bpafb_taxonomy = isset($attributes['taxonomy']) ? sanitize_key($attributes['taxonomy']) : '';
$bpafb_term_ids = isset($attributes['termIds']) && is_array($attributes['termIds']) ? array_map('absint', $attributes['termIds']) : [];

if ($bpafb_taxonomy && !empty($bpafb_term_ids) && taxonomy_exists($bpafb_taxonomy)) {
	$bpafb_query_args['tax_query'] = [[ // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_tax_query
		'taxonomy' => $bpafb_taxonomy,
		'field'    => 'term_id',
		'terms'    => $bpafb_term_ids,
	]];
}

if (!empty($attributes['excludeCurrentPost']) && is_singular()) {
	$bpafb_query_args['post__not_in'] = [get_the_ID()];
}

$bpafb_uid = !empty($attributes['bpafbUid']) ? sanitize_html_class($attributes['bpafbUid']) : wp_unique_id('bpafb-pro-loop-grid-');
$bpafb_masonry = !empty($attributes['masonry']);
$bpafb_equal_height = !isset($attributes['equalHeight']) || !empty($attributes['equalHeight']);

$bpafb_wrapper_classes = 'bpafb-pro-loop-grid bpafb-uid-' . $bpafb_uid;
$bpafb_wrapper_classes .= $bpafb_masonry ? ' bpafb-pro-loop-grid--masonry' : ' bpafb-pro-loop-grid--grid';
if (!$bpafb_masonry && $bpafb_equal_height) {
	$bpafb_wrapper_classes .= ' bpafb-pro-loop-grid--equal-height';
}

$bpafb_wrapper_attributes = get_block_wrapper_attributes([
	'class' => $bpafb_wrapper_classes,
]);

$bpafb_query = new WP_Query($bpafb_query_args);

?>
<div <?php
// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
echo $bpafb_wrapper_attributes;
?>>
	<?php if ($bpafb_query->have_posts()): ?>
		<div class="bpafb-pro-loop-grid-items">
			<?php
			while ($bpafb_query->have_posts()):
				$bpafb_query->the_post();
				?>
				<div class="bpafb-pro-loop-grid-item">
					<?php
					// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- built from do_blocks() of a trusted, author-authored template.
					echo do_blocks($bpafb_template_post->post_content);
					?>
				</div>
			<?php endwhile; ?>
		</div>

		<?php if ('none' !== $bpafb_pagination_type && $bpafb_query->max_num_pages > 1):
			$bpafb_pagination_align = isset($attributes['paginationAlign']) ? $attributes['paginationAlign'] : 'center';
			$bpafb_base_url = add_query_arg('bpafb-page', '%#%');
			?>
			<nav class="bpafb-pro-loop-grid-pagination bpafb-pro-loop-grid-pagination--<?php echo esc_attr($bpafb_pagination_align); ?>" aria-label="<?php esc_attr_e('Pagination', 'blockive-premium-addon-for-block-pro'); ?>">
				<?php
				if ('numbers' === $bpafb_pagination_type) {
					$bpafb_links = paginate_links([
						'base'      => $bpafb_base_url,
						'format'    => '',
						'current'   => $bpafb_paged,
						'total'     => (int) $bpafb_query->max_num_pages,
						'prev_text' => esc_html__( 'Previous', 'blockive-premium-addon-for-block-pro' ),
						'next_text' => esc_html__( 'Next', 'blockive-premium-addon-for-block-pro' ),
						'type'      => 'plain',
					]);
					if ($bpafb_links) {
						// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- paginate_links() already escapes its own output.
						echo $bpafb_links;
					}
				} else {
					if ($bpafb_paged > 1) {
						?>
						<a class="bpafb-pro-loop-grid-pagination__prev" href="<?php echo esc_url(add_query_arg('bpafb-page', $bpafb_paged - 1)); ?>"><?php esc_html_e('Previous', 'blockive-premium-addon-for-block-pro'); ?></a>
						<?php
					}
					if ($bpafb_paged < $bpafb_query->max_num_pages) {
						?>
						<a class="bpafb-pro-loop-grid-pagination__next" href="<?php echo esc_url(add_query_arg('bpafb-page', $bpafb_paged + 1)); ?>"><?php esc_html_e('Next', 'blockive-premium-addon-for-block-pro'); ?></a>
						<?php
					}
				}
				?>
			</nav>
		<?php endif; ?>

	<?php elseif (!empty($attributes['enableNothingFound'])): ?>
		<p class="bpafb-pro-loop-grid-nothing-found">
			<?php echo esc_html($attributes['nothingFoundText'] ?? __('No items found.', 'blockive-premium-addon-for-block-pro')); ?>
		</p>
	<?php endif; ?>
</div>
<?php
wp_reset_postdata();

$bpafb_columns = isset($attributes['columns']) ? absint($attributes['columns']) : 3;
$bpafb_columns_tablet = isset($attributes['columnsTablet']) ? absint($attributes['columnsTablet']) : 2;
$bpafb_columns_mobile = isset($attributes['columnsMobile']) ? absint($attributes['columnsMobile']) : 1;
$bpafb_column_gap = isset($attributes['columnGap']) ? absint($attributes['columnGap']) : 24;
$bpafb_row_gap = isset($attributes['rowGap']) ? absint($attributes['rowGap']) : 24;

$bpafb_css = sprintf(
	'.bpafb-uid-%1$s{--bpafb-pro-loop-grid-columns:%2$d;--bpafb-pro-loop-grid-columns-tablet:%3$d;--bpafb-pro-loop-grid-columns-mobile:%4$d;--bpafb-pro-loop-grid-column-gap:%5$dpx;--bpafb-pro-loop-grid-row-gap:%6$dpx;}',
	esc_attr($bpafb_uid),
	$bpafb_columns,
	$bpafb_columns_tablet,
	$bpafb_columns_mobile,
	$bpafb_column_gap,
	$bpafb_row_gap
);

printf('<style>%s</style>', $bpafb_css); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- built entirely from absint()'d values above.
