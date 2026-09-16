<?php
/**
 * Renders a matched Header/Footer/Archive/Search/404-kind Blockive Template
 * (see Bpafb_Pro_Template_Kinds) into the actual frontend output.
 *
 * Header/Footer: injected via `wp_body_open`/`wp_footer` - universal hooks
 * every theme (classic or block) fires, unlike trying to override
 * get_header()/get_footer() per theme. On a block theme, the matching
 * `core/template-part` (header/footer) is also suppressed so nothing shows
 * twice. On a classic theme, there is no reliable, theme-agnostic way to
 * suppress an arbitrary theme's own header.php/footer.php output (every
 * page-builder plugin runs into this) - the Pro header/footer is added
 * alongside it, and a site owner who wants to fully replace a classic
 * theme's header/footer should use that theme's own "disable header/
 * footer for this page" setting where one exists (Astra, GeneratePress,
 * OceanWP, Kadence, Neve, and Blocksy all have one).
 *
 * Archive/Search/404: swapped in via `template_include`, replacing the
 * theme's own archive/search/404 template file with a thin wrapper that
 * still calls get_header()/get_footer() - so the theme's <head> assets,
 * nav, and (if matched) the Header/Footer templates above still render
 * exactly as on any other page - but renders the matched template's
 * content instead of the theme's own loop markup.
 *
 * @package BlockivePro
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

class Bpafb_Pro_Theme_Locations
{
	/**
	 * Template post ID swapped in for the current request by
	 * maybe_swap_archive_search_404_template(), read back by the wrapper
	 * template it points at (templates/archive-search-404-wrapper.php).
	 *
	 * @var int
	 */
	private static $swapped_template_id = 0;

	/**
	 * Kind ('archive'|'search'|'404') resolved alongside
	 * $swapped_template_id, so the wrapper template can give its output
	 * wrapper the matching bpafb-pro-{kind} class instead of a hardcoded one.
	 *
	 * @var string
	 */
	private static $swapped_kind = '';

	/**
	 * Constructor.
	 */
	public function __construct()
	{
		add_action('wp_body_open', [$this, 'render_header'], 5);
		add_action('wp_footer', [$this, 'render_footer'], 20);
		add_filter('pre_render_block', [$this, 'suppress_theme_template_part'], 10, 2);
		add_filter('template_include', [$this, 'maybe_swap_archive_search_404_template'], PHP_INT_MAX);
	}

	/**
	 * Renders a matched template's content for a given kind, wrapped the
	 * same way Bpafb_Template_Frontend_Render wraps a singular override.
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
	 * Fires on `wp_body_open`, right after `<body>` opens on every theme -
	 * classic or block - so a matched Header-kind template always renders
	 * above the theme's own header regardless of theme markup structure.
	 */
	public function render_header()
	{
		$this->render_kind('header');
	}

	/**
	 * Fires on `wp_footer`. Priority 20 (after the WordPress/plugin default
	 * of 10) so a matched Footer-kind template renders after most other
	 * wp_footer output (admin bar aside, which always prints last).
	 */
	public function render_footer()
	{
		$this->render_kind('footer');
	}

	/**
	 * Suppresses a block theme's own Header/Footer template parts when a
	 * Pro Header/Footer template matches the current request, the same
	 * "return '' instead of rendering" technique the free plugin's
	 * Bpafb_Template_Frontend_Render::suppress_duplicate_theme_blocks()
	 * uses for duplicate title/featured-image blocks.
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
	 * Resolves the Template Kind for the current main-query request, if
	 * any of Archive/Search/404 applies. Order matters: is_search() and
	 * is_404() are mutually exclusive with is_archive()/is_home() and with
	 * each other in WordPress's own conditional tags, so checking in this
	 * order without `elseif` chains would still be correct, but reads
	 * clearer as one.
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
		// is_home() covers the default blog listing (no static front page
		// assigned, or the page assigned as "Posts page") - not otherwise
		// matched by is_archive(), but conceptually the same "list of
		// posts" location an Archive-kind template is meant to cover.
		if (is_archive() || is_home()) {
			return 'archive';
		}
		return null;
	}

	/**
	 * Swaps in a thin wrapper template when the current request's kind
	 * (see current_request_kind()) has a matching published Blockive
	 * Template, so its content renders instead of the theme's own archive/
	 * search/404 template.
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
	 * Returns the template post ID maybe_swap_archive_search_404_template()
	 * resolved for the current request, for the wrapper template file to render.
	 *
	 * @return int
	 */
	public static function get_swapped_template_id()
	{
		return self::$swapped_template_id;
	}

	/**
	 * Returns the kind ('archive'|'search'|'404') resolved alongside
	 * get_swapped_template_id(), for the wrapper template's output wrapper class.
	 *
	 * @return string
	 */
	public static function get_swapped_kind()
	{
		return self::$swapped_kind;
	}
}
