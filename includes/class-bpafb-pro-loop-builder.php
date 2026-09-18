<?php
/**
 * Lets the free plugin's Post Grid block show a "loop-item"-kind Blockive
 * Template for each post it lists, instead of its own built-in card
 * layout (Elementor calls this feature "Loop Grid").
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
		if (!$template_id) {
			return $block_content;
		}

		$template_post = get_post($template_id);
		if (
			!$template_post
			|| $template_post->post_type !== Bpafb_Template_Post_Type::POST_TYPE
			|| $template_post->post_status !== 'publish'
			|| empty($template_post->post_content)
			|| Bpafb_Pro_Template_Kinds::get_kind($template_id) !== 'loop-item'
		) {
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
