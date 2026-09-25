<?php
/**
 * Shared loop code for the Archive Posts and Archive Products Template
 * Blocks (src/template-blocks-site/archive-posts|archive-products).
 *
 * Unlike Post Grid / Loop Grid, which always run their own WP_Query,
 * these two blocks list whatever the *main* query already found - the
 * category, tag, author, date, custom post type archive, blog page,
 * search results, or WooCommerce shop being viewed - so an Archive or
 * Search Results template shows the right posts, and uses WordPress's own
 * pagination (/page/2/) instead of a custom query string.
 *
 * @package BlockivePro
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

class Bpafb_Pro_Archive_Loop
{
	/**
	 * How many archive loops are currently rendering. A Loop Item template
	 * that itself holds an Archive Posts block would otherwise loop the
	 * same main query inside every item, forever.
	 *
	 * @var int
	 */
	private static $depth = 0;

	/**
	 * Whether this is the editor's server-side preview (ServerSideRender
	 * goes through the REST API, where the main query is not an archive).
	 *
	 * @return bool
	 */
	public static function is_editor_preview()
	{
		return defined('REST_REQUEST') && REST_REQUEST;
	}

	/**
	 * The query the block should loop, or null when there is nothing to
	 * list on this page (e.g. the block was placed in a Single template).
	 *
	 * @param string $preview_post_type Post type to preview with in the editor.
	 * @param int    $preview_count     Number of items to preview with.
	 * @return WP_Query|null
	 */
	public static function get_query($preview_post_type, $preview_count)
	{
		if (self::is_editor_preview()) {
			return new WP_Query([
				'post_type'           => $preview_post_type,
				'post_status'         => 'publish',
				'posts_per_page'      => max(1, min(12, (int) $preview_count)),
				'ignore_sticky_posts' => true,
				'no_found_rows'       => false,
			]);
		}

		if (!(is_archive() || is_home() || is_search())) {
			return null;
		}

		global $wp_query;
		return $wp_query instanceof WP_Query ? $wp_query : null;
	}

	/**
	 * Marks the start of a loop. Returns false when already inside one,
	 * so the caller renders nothing instead of recursing.
	 *
	 * @return bool
	 */
	public static function begin()
	{
		if (self::$depth > 0) {
			return false;
		}
		self::$depth++;
		return true;
	}

	/**
	 * Marks the end of a loop and restores the global post / query state.
	 *
	 * @param WP_Query $query The query that was looped.
	 */
	public static function end($query)
	{
		self::$depth = max(0, self::$depth - 1);

		if (self::is_editor_preview()) {
			wp_reset_postdata();
			return;
		}

		// Rewind the main query so anything after this block (another
		// archive block, the theme's footer, a sidebar widget) can still
		// loop it from the start, then restore $post to its first item.
		$query->rewind_posts();
		wp_reset_postdata();
	}

	/**
	 * Pagination links for the main query. Uses WordPress's own paging
	 * URLs (/page/2/, ?paged=2, search and filter query args preserved),
	 * so it matches what the theme and SEO plugins expect.
	 *
	 * @param WP_Query $query      The query that was looped.
	 * @param array    $attributes Block attributes.
	 * @return string
	 */
	public static function pagination_html($query, $attributes)
	{
		$type = isset($attributes['paginationType']) && in_array($attributes['paginationType'], ['numbers', 'prev_next', 'none'], true)
			? $attributes['paginationType']
			: 'numbers';

		$total = (int) $query->max_num_pages;
		if ('none' === $type || $total < 2) {
			return '';
		}

		$current = max(1, (int) $query->get('paged'), (int) get_query_var('paged'));
		$prev = !empty($attributes['prevText']) ? $attributes['prevText'] : __('« Previous', 'blockive-premium-addon-for-block-pro');
		$next = !empty($attributes['nextText']) ? $attributes['nextText'] : __('Next »', 'blockive-premium-addon-for-block-pro');

		// The editor preview has no real archive URL to page through.
		$base_args = self::is_editor_preview() ? ['base' => '#%#%', 'format' => ''] : [];

		if ('numbers' === $type) {
			$links = paginate_links(array_merge($base_args, [
				'total'     => $total,
				'current'   => $current,
				'prev_text' => esc_html($prev),
				'next_text' => esc_html($next),
				'mid_size'  => 1,
				'type'      => 'plain',
			]));
		} else {
			$links = '';
			if ($current > 1) {
				$links .= sprintf('<a class="prev page-numbers" href="%1$s">%2$s</a>', esc_url(self::is_editor_preview() ? '#' : get_pagenum_link($current - 1)), esc_html($prev));
			}
			if ($current < $total) {
				$links .= sprintf('<a class="next page-numbers" href="%1$s">%2$s</a>', esc_url(self::is_editor_preview() ? '#' : get_pagenum_link($current + 1)), esc_html($next));
			}
		}

		if (!$links) {
			return '';
		}

		$align = isset($attributes['paginationAlign']) && in_array($attributes['paginationAlign'], ['left', 'center', 'right'], true)
			? $attributes['paginationAlign']
			: 'center';

		return sprintf(
			'<nav class="bpafb-tb-archive-pagination bpafb-tb-archive-pagination--%1$s" aria-label="%2$s">%3$s</nav>',
			esc_attr($align),
			esc_attr__('Posts pagination', 'blockive-premium-addon-for-block-pro'),
			$links // Built by paginate_links() / escaped above.
		);
	}

	/**
	 * CSS custom properties shared by both blocks' grid, card, and
	 * pagination.
	 *
	 * @param array $attributes Block attributes.
	 * @param array $defaults   Column defaults: [desktop, tablet, mobile].
	 * @return array<string,string>
	 */
	public static function shared_vars($attributes, $defaults)
	{
		$cols = function ($key, $default) use ($attributes) {
			return (string) max(1, min(8, isset($attributes[$key]) ? absint($attributes[$key]) : $default));
		};

		$ratio = isset($attributes['imageRatio']) && preg_match('#^\d+/\d+$#', $attributes['imageRatio']) ? str_replace('/', ' / ', $attributes['imageRatio']) : '';

		return array_merge([
			'--bpafb-archive-columns'          => $cols('columns', $defaults[0]),
			'--bpafb-archive-columns-tablet'   => $cols('columnsTablet', $defaults[1]),
			'--bpafb-archive-columns-mobile'   => $cols('columnsMobile', $defaults[2]),
			'--bpafb-archive-column-gap'       => Bpafb_Pro_Site_Blocks::px($attributes, 'columnGap'),
			'--bpafb-archive-row-gap'          => Bpafb_Pro_Site_Blocks::px($attributes, 'rowGap'),
			'--bpafb-archive-image-ratio'      => $ratio,
			'--bpafb-archive-card-bg'          => Bpafb_Pro_Site_Blocks::color($attributes, 'cardBgColor'),
			'--bpafb-archive-card-radius'      => Bpafb_Pro_Site_Blocks::px($attributes, 'cardRadius'),
			'--bpafb-archive-card-border-width' => Bpafb_Pro_Site_Blocks::px($attributes, 'cardBorderWidth'),
			'--bpafb-archive-card-border-color' => Bpafb_Pro_Site_Blocks::color($attributes, 'cardBorderColor'),
			'--bpafb-archive-card-padding'     => Bpafb_Pro_Site_Blocks::px($attributes, 'cardPadding'),
			'--bpafb-archive-title-color'      => Bpafb_Pro_Site_Blocks::color($attributes, 'titleColor'),
			'--bpafb-archive-title-hover-color' => Bpafb_Pro_Site_Blocks::color($attributes, 'titleHoverColor'),
			'--bpafb-archive-page-color'       => Bpafb_Pro_Site_Blocks::color($attributes, 'paginationColor'),
			'--bpafb-archive-page-active-color' => Bpafb_Pro_Site_Blocks::color($attributes, 'paginationActiveColor'),
			'--bpafb-archive-page-active-bg'   => Bpafb_Pro_Site_Blocks::color($attributes, 'paginationActiveBg'),
		], Bpafb_Pro_Site_Blocks::typography_vars($attributes, 'title', '--bpafb-archive-title'));
	}

	/**
	 * The chosen Loop Item template, when the block's layout is "template".
	 *
	 * @param array $attributes Block attributes.
	 * @return WP_Post|null
	 */
	public static function loop_template($attributes)
	{
		if (!isset($attributes['layout']) || 'template' !== $attributes['layout']) {
			return null;
		}
		$template_id = isset($attributes['templateId']) ? absint($attributes['templateId']) : 0;
		return Bpafb_Pro_Template_Kinds::get_renderable_template($template_id, 'loop-item');
	}

	/**
	 * "Nothing found" markup.
	 *
	 * @param array  $attributes Block attributes.
	 * @param string $fallback   Default text.
	 * @return string
	 */
	public static function nothing_found_html($attributes, $fallback)
	{
		$text = isset($attributes['nothingFoundText']) && $attributes['nothingFoundText'] !== '' ? $attributes['nothingFoundText'] : $fallback;
		return '<p class="bpafb-tb-archive-empty">' . esc_html($text) . '</p>';
	}
}
