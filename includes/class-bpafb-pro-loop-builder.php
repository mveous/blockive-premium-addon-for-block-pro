<?php
/**
 * Lets the free plugin's Post Grid block show a "loop-item"-kind Blockive
 * Template for each post it lists, instead of its own built-in card
 * layout.
 *
 * Post Grid's own block.json, edit.js, and render.php files are copied
 * over as-is from the free plugin, so this adds to it from the outside
 * instead of editing that block's own files: src/post-grid-pro adds the
 * editor control using the normal editor.BlockEdit filter, and this class
 * catches the block's already-rendered HTML using `render_block_{$name}`
 * and replaces the whole thing, when a loop template is set.
 *
 * @package BlockivePro
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

class Bpafb_Pro_Loop_Builder
{
	const POST_GRID_BLOCK = 'blockive-premium-addon-for-block/post-grid';

	/**
	 * The one and only instance of this class.
	 *
	 * @var Bpafb_Pro_Loop_Builder|null
	 */
	private static $instance = null;

	/**
	 * Gives back the one instance of this class, making it first if needed.
	 *
	 * @return Bpafb_Pro_Loop_Builder
	 */
	public static function get_instance()
	{
		if (null === self::$instance) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Constructor.
	 */
	private function __construct()
	{
		add_filter('render_block_' . self::POST_GRID_BLOCK, [$this, 'maybe_render_loop_template'], 10, 2);
		add_action('enqueue_block_editor_assets', [$this, 'enqueue_editor_assets']);
	}

	/**
	 * Stops this class from being copied.
	 */
	private function __clone()
	{
	}

	/**
	 * Stops this class from being restored from stored data.
	 */
	public function __wakeup()
	{
		throw new \Exception('Cannot unserialize a singleton.');
	}

	/**
	 * Replaces Post Grid's own rendered output with one Loop Item template
	 * for each listed post, when the block has a loop template set.
	 *
	 * The query here is rebuilt using the same settings the free
	 * render.php reads (post type, posts per page, order by, order). This
	 * is a small, deliberate copy of that logic, instead of editing that
	 * synced file directly.
	 *
	 * @param string $block_content Post Grid's own rendered HTML.
	 * @param array  $parsed_block  The parsed block, including its attrs.
	 * @return string
	 */
	public function maybe_render_loop_template($block_content, $parsed_block)
	{
		$attrs = isset($parsed_block['attrs']) ? $parsed_block['attrs'] : [];

		$template_id = isset($attrs['bpafbLoopTemplateId']) ? absint($attrs['bpafbLoopTemplateId']) : 0;
		$template_post = Bpafb_Pro_Template_Kinds::get_renderable_template($template_id, 'loop-item');
		if (!$template_post) {
			return $block_content;
		}

		$post_type = isset($attrs['postType']) && is_post_type_viewable($attrs['postType']) ? $attrs['postType'] : 'post';

		$posts_per_page = isset($attrs['postsPerPage']) ? absint($attrs['postsPerPage']) : 9;
		$posts_per_page = max(1, min(50, $posts_per_page));

		$allowed_orderby = ['date', 'title', 'rand', 'id'];
		$orderby         = isset($attrs['orderBy']) && in_array($attrs['orderBy'], $allowed_orderby, true) ? $attrs['orderBy'] : 'date';
		$orderby         = ('id' === $orderby) ? 'ID' : $orderby;

		$order = isset($attrs['order']) && in_array(strtolower((string) $attrs['order']), ['asc', 'desc'], true)
			? $attrs['order']
			: 'desc';

		$columns = isset($attrs['columns']) ? absint($attrs['columns']) : 3;

		$query = new WP_Query([
			'post_type'      => $post_type,
			'posts_per_page' => $posts_per_page,
			'orderby'        => $orderby,
			'order'          => $order,
			'post_status'    => 'publish',
			'no_found_rows'  => true,
		]);

		if (!$query->have_posts()) {
			// Show Post Grid's own "No {type} found." message instead of
			// an empty grid.
			return $block_content;
		}

		$items = '';
		while ($query->have_posts()) {
			$query->the_post();
			$items .= '<div class="bpafb-pro-loop-item">' . do_blocks($template_post->post_content) . '</div>';
		}
		wp_reset_postdata();

		return sprintf(
			'<div class="bpafb-post-grid-wrapper bpafb-pro-loop-grid"><div class="bpafb-post-grid" style="grid-template-columns: repeat(%d, 1fr);">%s</div></div>',
			$columns,
			$items // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- built entirely from do_blocks() of a trusted, author-authored template.
		);
	}

	/**
	 * WP_Query arguments for the Loop Grid and Loop Carousel blocks, from
	 * their shared query attributes (postType, postsPerPage, orderBy,
	 * order, taxonomy, termIds, excludeCurrentPost).
	 *
	 * @param array $attributes Block attributes.
	 * @param int   $defaults_per_page Items when postsPerPage is not set.
	 * @return array
	 */
	public static function block_query_args($attributes, $defaults_per_page = 6)
	{
		$post_type = isset($attributes['postType']) && is_post_type_viewable($attributes['postType']) ? $attributes['postType'] : 'post';

		$posts_per_page = isset($attributes['postsPerPage']) ? absint($attributes['postsPerPage']) : $defaults_per_page;
		$posts_per_page = max(1, min(50, $posts_per_page));

		$allowed_orderby = ['date', 'title', 'rand', 'id', 'menu_order'];
		$orderby = isset($attributes['orderBy']) && in_array($attributes['orderBy'], $allowed_orderby, true) ? $attributes['orderBy'] : 'date';
		$orderby = ('id' === $orderby) ? 'ID' : $orderby;

		$order = isset($attributes['order']) && in_array(strtolower((string) $attributes['order']), ['asc', 'desc'], true)
			? $attributes['order']
			: 'desc';

		$args = [
			'post_type'      => $post_type,
			'posts_per_page' => $posts_per_page,
			'orderby'        => $orderby,
			'order'          => $order,
			'post_status'    => 'publish',
		];

		$taxonomy = isset($attributes['taxonomy']) ? sanitize_key($attributes['taxonomy']) : '';
		$term_ids = isset($attributes['termIds']) && is_array($attributes['termIds']) ? array_map('absint', $attributes['termIds']) : [];

		if ($taxonomy && !empty($term_ids) && taxonomy_exists($taxonomy)) {
			$args['tax_query'] = [[ // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_tax_query
				'taxonomy' => $taxonomy,
				'field'    => 'term_id',
				'terms'    => $term_ids,
			]];
		}

		if (!empty($attributes['excludeCurrentPost']) && is_singular()) {
			$args['post__not_in'] = [get_the_ID()];
		}

		// A Loop Filter block pointed at this block (see active_filter()).
		$filter = self::active_filter($attributes, $post_type);
		if ($filter) {
			$args['tax_query'] = isset($args['tax_query']) ? $args['tax_query'] : []; // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_tax_query
			$args['tax_query'][] = [
				'taxonomy' => $filter['taxonomy'],
				'field'    => 'term_id',
				'terms'    => [$filter['term_id']],
			];
		}

		return $args;
	}

	/**
	 * The URL parameter a Loop Filter block uses for a loop block, e.g.
	 * `bpafb-filter-abc123=category:news`.
	 *
	 * @param string $uid The loop block's bpafbUid.
	 * @return string
	 */
	public static function filter_param($uid)
	{
		return 'bpafb-filter-' . sanitize_html_class($uid);
	}

	/**
	 * The filter chosen for a loop block through its URL parameter, after
	 * checking it: a public taxonomy of the block's post type, and a term
	 * that exists in it. The value comes from the visitor's URL, so
	 * anything else is ignored.
	 *
	 * @param array  $attributes Loop block attributes.
	 * @param string $post_type  The block's post type.
	 * @return array{taxonomy: string, term_id: int, slug: string}|null
	 */
	public static function active_filter($attributes, $post_type)
	{
		$uid = !empty($attributes['bpafbUid']) ? sanitize_html_class($attributes['bpafbUid']) : '';
		$param = $uid ? self::filter_param($uid) : '';
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended -- a public, read-only filter.
		if (!$param || empty($_GET[$param]) || !is_string($_GET[$param])) {
			return null;
		}
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		$parts = explode(':', sanitize_text_field(wp_unslash($_GET[$param])), 2);
		if (2 !== count($parts)) {
			return null;
		}
		$taxonomy = sanitize_key($parts[0]);
		if (!taxonomy_exists($taxonomy) || !is_taxonomy_viewable($taxonomy) || !is_object_in_taxonomy($post_type, $taxonomy)) {
			return null;
		}
		$term = get_term_by('slug', sanitize_title($parts[1]), $taxonomy);
		if (!$term || is_wp_error($term)) {
			return null;
		}
		return ['taxonomy' => $taxonomy, 'term_id' => (int) $term->term_id, 'slug' => $term->slug];
	}

	/**
	 * Loads the Loop Template control, on every editor screen, not just
	 * the Template Builder, since Post Grid is a normal block that can be
	 * used on any Post or Page, not a Template Block.
	 */
	public function enqueue_editor_assets()
	{
		$script_path = BPAFB_PRO_PATH . 'build/post-grid-pro/index.js';
		if (!file_exists($script_path)) {
			return;
		}

		$asset_file = BPAFB_PRO_PATH . 'build/post-grid-pro/index.asset.php';
		$asset      = file_exists($asset_file) ? require $asset_file : [
			'dependencies' => [],
			'version'      => BPAFB_PRO_VERSION,
		];

		wp_enqueue_script(
			'bpafb-pro-post-grid',
			BPAFB_PRO_URL . 'build/post-grid-pro/index.js',
			$asset['dependencies'],
			$asset['version'],
			true
		);
	}
}
