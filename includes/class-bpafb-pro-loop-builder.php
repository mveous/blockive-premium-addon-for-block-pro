<?php
/**
 * Lets the free plugin's dynamic Post Grid block render a "loop-item"-kind
 * Blockive Template for each queried post instead of its own built-in card
 * layout - Elementor calls the equivalent feature "Loop Grid".
 *
 * Post Grid's block.json/edit.js/render.php are all synced verbatim from
 * the free plugin (see bin/sync-shared-source.js), so this hooks in from
 * the outside on two fronts instead of editing that block's source:
 *  - Editor: src/post-grid-pro adds the "Loop Template" attribute/control
 *    to the existing block via the standard blocks.registerBlockType /
 *    editor.BlockEdit filters (see that file for why this needs no changes
 *    to Post Grid's own block.json or edit.js).
 *  - Frontend: this class intercepts the already-rendered block output via
 *    WordPress's per-block-name `render_block_{$name}` filter and replaces
 *    it wholesale when a loop template is set.
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
	 * The single instance of this class.
	 *
	 * @var Bpafb_Pro_Loop_Builder|null
	 */
	private static $instance = null;

	/**
	 * Retrieves (creating if necessary) the single instance of this class.
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
	 * Prevents cloning of the instance.
	 */
	private function __clone()
	{
	}

	/**
	 * Prevents unserializing of the instance.
	 */
	public function __wakeup()
	{
		throw new \Exception('Cannot unserialize a singleton.');
	}

	/**
	 * Replaces Post Grid's own rendered output with one Loop Item template
	 * render per queried post, when the block has a valid loop template set.
	 *
	 * The query is rebuilt here from the same subset of the block's own
	 * attributes its free render.php already reads (post type, posts per
	 * page, orderby, order) - a small, deliberate duplication rather than
	 * editing that synced render.php, kept to exactly the fields both sides
	 * need to agree on.
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
			// Fall back to Post Grid's own "No {type} found." message rather
			// than rendering an empty grid.
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
	 * Enqueues the Loop Template inspector control, on every editor screen
	 * (not just the Template Builder) since Post Grid is a normal block
	 * usable on any Post/Page, not a Template Block.
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
