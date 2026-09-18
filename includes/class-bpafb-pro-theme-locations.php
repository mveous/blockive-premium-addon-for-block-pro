<?php
/**
 * Shows a matched Header, Footer, Archive, Search, or 404-kind Blockive
 * Template (see Bpafb_Pro_Template_Kinds) on the live site.
 *
 * Header and Footer are added using the `wp_body_open` and `wp_footer`
 * hooks, since every theme fires these, unlike trying to change
 * get_header()/get_footer() for each theme. On a block theme, the theme's
 * own matching `core/template-part` block is hidden. On a classic theme,
 * there is no safe way to hide an unknown theme's own header.php or
 * footer.php file, so the Pro header/footer is simply added alongside it.
 * A site owner can use their theme's own "disable header/footer for this
 * page" setting, if it has one, to fully replace it.
 *
 * Archive, Search, and 404 pages are swapped in through `template_include`.
 * The theme's own template file is replaced with a short wrapper file that
 * still calls get_header() and get_footer(), so the theme's scripts, styles,
 * and menu still show. Only the main list of posts is replaced.
 *
 * @package BlockivePro
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

class Bpafb_Pro_Theme_Locations
{
	/**
	 * Template post ID chosen for the current page by
	 * maybe_swap_archive_search_404_template(). Read back by the wrapper
	 * template it points to (templates/archive-search-404-wrapper.php).
	 *
	 * @var int
	 */
	private static $swapped_template_id = 0;

	/**
	 * The kind ('archive', 'search', or '404') that goes with
	 * $swapped_template_id above. Lets the wrapper template give its
	 * wrapper the matching bpafb-pro-{kind} class, instead of a fixed one.
	 *
	 * @var string
	 */
	private static $swapped_kind = '';

	/**
	 * The one and only instance of this class.
	 *
	 * @var Bpafb_Pro_Theme_Locations|null
	 */
	private static $instance = null;

	/**
	 * Gives back the one instance of this class, making it first if needed.
	 *
	 * @return Bpafb_Pro_Theme_Locations
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
		add_action('wp_body_open', [$this, 'render_header'], 5);
		add_action('wp_footer', [$this, 'render_footer'], 20);
		add_filter('pre_render_block', [$this, 'suppress_theme_template_part'], 10, 2);
		add_filter('template_include', [$this, 'maybe_swap_archive_search_404_template'], PHP_INT_MAX);
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
	 * Shows a matched template's content for a given kind, wrapped the
	 * same way Bpafb_Template_Frontend_Render wraps a single-post override.
	 *
	 * @param string $kind Bpafb_Pro_Template_Kinds::KINDS entry.
	 */
	private function render_kind($kind)
	{
		if (is_admin()) {
			return;
		}

		$template_id = Bpafb_Pro_Template_Kinds::get_matching_template_id($kind);
		if (!$template_id) {
			return;
		}

		$template_post = get_post($template_id);
		if (!$template_post || empty($template_post->post_content)) {
			return;
		}

		echo '<div class="bpafb-pro-template-render bpafb-pro-' . esc_attr($kind) . '">' // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			. do_blocks($template_post->post_content)
			. '</div>';
	}

	/**
	 * Fires on `wp_body_open`, right after `<body>` opens on every theme,
	 * so a matched Header-kind template always shows above the theme's own
	 * header, no matter how the theme's HTML is structured.
	 */
	public function render_header()
	{
		$this->render_kind('header');
	}

	/**
	 * Fires on `wp_footer`. Priority 20, which is after WordPress's usual
	 * default of 10, so a matched Footer-kind template shows after most
	 * other wp_footer output (the admin bar always shows last, though).
	 */
	public function render_footer()
	{
		$this->render_kind('footer');
	}

	/**
	 * Hides a block theme's own Header/Footer template parts when a Pro
	 * Header/Footer template matches the current page.
	 *
	 * @param string|null $pre_render   Short-circuit value; non-null skips this block entirely.
	 * @param array       $parsed_block The block about to render.
	 * @return string|null
	 */
	public function suppress_theme_template_part($pre_render, $parsed_block)
	{
		if (null !== $pre_render || is_admin()) {
			return $pre_render;
		}

		if ('core/template-part' !== ($parsed_block['blockName'] ?? '')) {
			return $pre_render;
		}

		$slug = $parsed_block['attrs']['slug'] ?? '';
		$area = $parsed_block['attrs']['area'] ?? '';

		if (('header' === $slug || 'header' === $area) && Bpafb_Pro_Template_Kinds::get_matching_template_id('header')) {
			return '';
		}

		if (('footer' === $slug || 'footer' === $area) && Bpafb_Pro_Template_Kinds::get_matching_template_id('footer')) {
			return '';
		}

		return $pre_render;
	}

	/**
	 * Works out the Template Kind for the current page, if Archive,
	 * Search, or 404 applies.
	 *
	 * @return string|null
	 */
	private function current_request_kind()
	{
		if (is_404()) {
			return '404';
		}
		if (is_search()) {
			return 'search';
		}
		// is_home() covers the default blog listing page (either no
		// static front page is set, or a page is set as "Posts page").
		// is_archive() does not cover this case on its own, but it is
		// still the same "list of posts" that an Archive-kind template
		// should cover.
		if (is_archive() || is_home()) {
			return 'archive';
		}
		return null;
	}

	/**
	 * Swaps in a short wrapper template when the current page's kind (see
	 * current_request_kind()) has a matching published Blockive Template.
	 *
	 * @param string $template Absolute path to the template PHP core resolved.
	 * @return string
	 */
	public function maybe_swap_archive_search_404_template($template)
	{
		if (is_admin()) {
			return $template;
		}

		$kind = $this->current_request_kind();
		if (!$kind) {
			return $template;
		}

		$template_id = Bpafb_Pro_Template_Kinds::get_matching_template_id($kind);
		if (!$template_id) {
			return $template;
		}

		$wrapper = BPAFB_PRO_PATH . 'includes/templates/archive-search-404-wrapper.php';
		if (!file_exists($wrapper)) {
			return $template;
		}

		self::$swapped_template_id = $template_id;
		self::$swapped_kind        = $kind;

		return $wrapper;
	}

	/**
	 * Returns the template post ID that
	 * maybe_swap_archive_search_404_template() found for the current
	 * page, for the wrapper template file to show.
	 *
	 * @return int
	 */
	public static function get_swapped_template_id()
	{
		return self::$swapped_template_id;
	}

	/**
	 * Returns the kind ('archive', 'search', or '404') that goes with
	 * get_swapped_template_id(), for the wrapper template's own class name.
	 *
	 * @return string
	 */
	public static function get_swapped_kind()
	{
		return self::$swapped_kind;
	}
}
