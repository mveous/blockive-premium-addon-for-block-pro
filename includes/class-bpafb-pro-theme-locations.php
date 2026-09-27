<?php
/**
 * Shows a matched Header, Footer, Archive, Search, or 404-kind Blockive
 * Template (see Bpafb_Pro_Template_Kinds) on the live site.
 *
 * Header and Footer replace the theme's own, in its place, inside a real
 * <header> / <footer> element:
 *
 * - Block themes: the theme's header / footer template part is swapped
 *   for the Pro one where it stands (see replace_template_part()).
 * - Classic themes listed in THEMES (Astra, GeneratePress, OceanWP,
 *   Kadence, Neve, Blocksy): the theme's own header / footer is taken off
 *   the hook that prints it, and the Pro one is added to that hook, the
 *   same way these themes support Elementor Pro and Beaver Themer. The
 *   theme's page wrappers, styles, and scripts stay as they are.
 * - Any other classic theme: header.php / footer.php are replaced as a
 *   whole (see take_over_header() / take_over_footer()), the way Elementor
 *   Pro handles themes it does not know. The theme's header.php is still
 *   run, with its output thrown away, so nothing it sets up is lost.
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
	 * Classic themes with their own header / footer hooks (parent theme
	 * slug => settings), for header and footer:
	 * - hook:    where the Pro header / footer is printed.
	 * - remove:  hook => '*' (everything on it) or the callbacks to take
	 *            off ('function' or 'Class::method'), which together print
	 *            the theme's own header / footer.
	 * - disable: a filter that turns the theme's own one off.
	 */
	const THEMES = [
		'astra'         => [
			'header' => ['hook' => 'astra_header', 'remove' => ['astra_header' => '*']],
			// astra_footer also holds the header's mobile menu popup, so
			// only the footer markup itself comes off.
			'footer' => ['hook' => 'astra_footer', 'remove' => ['astra_footer' => ['astra_footer_markup', 'Astra_Builder_Footer::footer_markup']]],
		],
		'generatepress' => [
			'header' => [
				'hook'   => 'generate_header',
				'remove' => [
					'generate_header'        => '*',
					'generate_before_header' => ['generate_top_bar', 'generate_add_navigation_before_header'],
					'generate_after_header'  => ['generate_add_navigation_after_header'],
				],
			],
			'footer' => ['hook' => 'generate_footer', 'remove' => ['generate_footer' => '*']],
		],
		'oceanwp'       => [
			'header' => ['hook' => 'ocean_header', 'remove' => ['ocean_header' => '*', 'ocean_top_bar' => '*']],
			'footer' => ['hook' => 'ocean_footer', 'remove' => ['ocean_footer' => '*']],
		],
		'kadence'       => [
			'header' => ['hook' => 'kadence_header', 'remove' => ['kadence_header' => '*']],
			'footer' => ['hook' => 'kadence_footer', 'remove' => ['kadence_footer' => '*']],
		],
		'neve'          => [
			'header' => ['hook' => 'neve_do_header', 'remove' => ['neve_do_header' => '*']],
			'footer' => ['hook' => 'neve_do_footer', 'remove' => ['neve_do_footer' => '*']],
		],
		'blocksy'       => [
			'header' => ['hook' => 'blocksy:header:before', 'disable' => 'blocksy:builder:header:enabled'],
			'footer' => ['hook' => 'blocksy:footer:before', 'disable' => 'blocksy:builder:footer:enabled'],
		],
	];

	/**
	 * Header / Footer template meta: how wide it is on the page (full
	 * width, the theme's content or wide width, or a width in px).
	 */
	const LAYOUT_META = '_bpafb_header_footer_layout';
	const LAYOUT_DEFAULTS = [
		'width'       => 'full',
		'customWidth' => 1200,
	];

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
		// Late, once the query is known (templates match by page) and the
		// theme has added its own header / footer callbacks.
		add_action('template_redirect', [$this, 'set_up_header_footer'], PHP_INT_MAX);
		add_action('init', [$this, 'register_layout_meta']);
		add_action('wp_enqueue_scripts', [$this, 'enqueue_layout_css']);
		add_filter('pre_render_block', [$this, 'replace_template_part'], 10, 2);
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
	 * The matched Header or Footer template for this page, wrapped in
	 * <header> / <footer> (or $tag), or '' when none matches.
	 *
	 * @param string $kind    'header' or 'footer'.
	 * @param string $tag     Wrapper element.
	 * @param array  $classes Extra classes.
	 * @return string
	 */
	private static function markup($kind, $tag = '', array $classes = [])
	{
		$template_id = Bpafb_Pro_Template_Kinds::get_matching_template_id($kind);
		$template_post = $template_id ? get_post($template_id) : null;
		if (!$template_post || '' === trim($template_post->post_content)) {
			return '';
		}

		$tag = in_array($tag, ['header', 'footer', 'div', 'section'], true) ? $tag : $kind;
		$classes = array_merge($classes, ['bpafb-pro-template-render', 'bpafb-pro-' . $kind]);
		$attributes = '';
		if ('header' === $kind) {
			$sticky = Bpafb_Pro_Sticky::wrapper($template_id);
			if ($sticky) {
				$classes = array_merge($classes, $sticky['classes']);
				$attributes = $sticky['attributes'];
			}
		}

		// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- attributes escaped in Bpafb_Pro_Sticky::wrapper().
		return '<' . $tag . ' class="' . esc_attr(implode(' ', $classes)) . '"' . $attributes . '>'
			. do_blocks($template_post->post_content)
			. '</' . $tag . '>';
	}

	public function register_layout_meta()
	{
		register_post_meta(Bpafb_Template_Post_Type::POST_TYPE, self::LAYOUT_META, [
			'type'          => 'object',
			'single'        => true,
			'default'       => self::LAYOUT_DEFAULTS,
			'show_in_rest'  => [
				'schema' => [
					'type'                 => 'object',
					'properties'           => [
						'width'       => ['type' => 'string', 'enum' => ['full', 'content', 'wide', 'custom']],
						'customWidth' => ['type' => 'integer'],
					],
					'additionalProperties' => false,
				],
			],
			'auth_callback' => function ($allowed, $meta_key, $post_id) {
				return current_user_can('edit_post', $post_id);
			},
		]);
	}

	/**
	 * The CSS max-width for a Header / Footer template, or '' for full
	 * width.
	 *
	 * @param int $template_id Template ID.
	 * @return string
	 */
	private static function max_width($template_id)
	{
		$saved = get_post_meta($template_id, self::LAYOUT_META, true);
		$layout = array_merge(self::LAYOUT_DEFAULTS, is_array($saved) ? $saved : []);
		switch ($layout['width']) {
			case 'content':
				return 'var(--wp--style--global--content-size, 1200px)';
			case 'wide':
				return 'var(--wp--style--global--wide-size, 1340px)';
			case 'custom':
				return max(320, min(3840, (int) $layout['customWidth'])) . 'px';
		}
		return '';
	}

	/**
	 * Styles for this page's Header / Footer: its width, and no stray
	 * space from the first / last block's margin or an empty paragraph
	 * (which a sticky header's scrolled background would show as a band).
	 */
	public function enqueue_layout_css()
	{
		$css = '';
		foreach (['header', 'footer'] as $kind) {
			$template_id = Bpafb_Pro_Template_Kinds::get_matching_template_id($kind);
			if (!$template_id) {
				continue;
			}
			$wrapper = '.bpafb-pro-template-render.bpafb-pro-' . $kind;
			$css .= $wrapper . '>:first-child{margin-top:0}'
				. $wrapper . '>:last-child{margin-bottom:0}'
				. $wrapper . '>p:empty{display:none}';
			$max_width = self::max_width($template_id);
			if ($max_width) {
				// width:100% too, or in a flex column (Astra's #page) the
				// auto margins shrink it to its content's width.
				$css .= $wrapper . '{box-sizing:border-box;width:100%;max-width:' . $max_width . ';margin-left:auto;margin-right:auto}';
			}
		}
		if ('' === $css) {
			return;
		}
		wp_register_style('bpafb-pro-header-footer', false, [], BPAFB_PRO_VERSION);
		wp_enqueue_style('bpafb-pro-header-footer');
		wp_add_inline_style('bpafb-pro-header-footer', $css);
	}

	/**
	 * Hooks the matched Header / Footer into a classic theme (block themes
	 * are handled block by block in replace_template_part()).
	 */
	public function set_up_header_footer()
	{
		if (is_admin() || wp_is_block_theme()) {
			return;
		}

		/**
		 * Theme settings for placing the Header / Footer in a classic theme
		 * (see THEMES), so another theme can be added.
		 *
		 * @param array  $settings THEMES entry for this theme, or [].
		 * @param string $theme    Parent theme slug.
		 */
		$settings = apply_filters('bpafb_pro_theme_location_hooks', self::THEMES[get_template()] ?? [], get_template());

		foreach (['header', 'footer'] as $kind) {
			if (!Bpafb_Pro_Template_Kinds::get_matching_template_id($kind)) {
				continue;
			}
			if (!empty($settings[$kind]['hook'])) {
				$this->use_theme_hook($kind, $settings[$kind]);
			} else {
				add_action('get_' . $kind, [$this, 'take_over_' . $kind], PHP_INT_MAX);
			}
		}
	}

	/**
	 * Takes a known theme's own header / footer off and puts the Pro one on
	 * the same hook.
	 *
	 * @param string $kind     'header' or 'footer'.
	 * @param array  $settings THEMES entry for $kind.
	 */
	private function use_theme_hook($kind, array $settings)
	{
		foreach ($settings['remove'] ?? [] as $hook => $callbacks) {
			self::remove_callbacks($hook, $callbacks);
		}
		if (!empty($settings['disable'])) {
			add_filter($settings['disable'], '__return_false', PHP_INT_MAX);
		}
		add_action($settings['hook'], function () use ($kind) {
			echo self::markup($kind); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- built by markup().
		});
	}

	/**
	 * @param string          $hook      Action name.
	 * @param string|string[] $callbacks '*' or 'function' / 'Class::method' names.
	 */
	private static function remove_callbacks($hook, $callbacks)
	{
		global $wp_filter;
		if ('*' === $callbacks) {
			remove_all_actions($hook);
			return;
		}
		if (empty($wp_filter[$hook])) {
			return;
		}
		foreach ($wp_filter[$hook]->callbacks as $priority => $list) {
			foreach ($list as $callback) {
				$function = $callback['function'];
				if (is_array($function) && 2 === count($function)) {
					$name = (is_object($function[0]) ? get_class($function[0]) : (string) $function[0]) . '::' . $function[1];
				} else {
					$name = is_string($function) ? $function : '';
				}
				if (in_array($name, (array) $callbacks, true)) {
					remove_action($hook, $function, $priority);
				}
			}
		}
	}

	/**
	 * Replaces an unknown classic theme's header.php (on `get_header`):
	 * prints the page head and the Pro header, then runs the theme's
	 * header.php with its output thrown away and its <head> hooks
	 * already done.
	 *
	 * @param string|null $name Header name passed to get_header().
	 */
	public function take_over_header($name)
	{
		?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
		<?php
		wp_body_open();
		echo self::markup('header'); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- built by markup().

		remove_all_actions('wp_head');
		remove_all_actions('wp_body_open');
		self::discard_theme_file('header', $name);
	}

	/**
	 * Replaces an unknown classic theme's footer.php (on `get_footer`):
	 * prints the Pro footer and closes the page, then runs the theme's
	 * footer.php with its output thrown away.
	 *
	 * @param string|null $name Footer name passed to get_footer().
	 */
	public function take_over_footer($name)
	{
		echo self::markup('footer'); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- built by markup().
		wp_footer();
		echo "\n</body>\n</html>\n";

		remove_all_actions('wp_footer');
		self::discard_theme_file('footer', $name);
	}

	/**
	 * Runs the theme's header.php / footer.php without printing it (what
	 * get_header() / get_footer() would load next).
	 *
	 * @param string      $kind 'header' or 'footer'.
	 * @param string|null $name Name passed to get_header() / get_footer().
	 */
	private static function discard_theme_file($kind, $name)
	{
		$templates = [];
		$name = (string) $name;
		if ('' !== $name) {
			$templates[] = $kind . '-' . $name . '.php';
		}
		$templates[] = $kind . '.php';

		ob_start();
		locate_template($templates, true);
		ob_end_clean();
	}

	/**
	 * On a block theme, shows the matched Header / Footer in place of the
	 * theme's own header / footer template part, in the same element.
	 *
	 * @param string|null $pre_render   Short-circuit value; non-null skips this block entirely.
	 * @param array       $parsed_block The block about to render.
	 * @return string|null
	 */
	public function replace_template_part($pre_render, $parsed_block)
	{
		if (null !== $pre_render || is_admin() || 'core/template-part' !== ($parsed_block['blockName'] ?? '')) {
			return $pre_render;
		}

		$attrs = $parsed_block['attrs'] ?? [];
		foreach (['header', 'footer'] as $kind) {
			if ($kind !== ($attrs['slug'] ?? '') && $kind !== ($attrs['area'] ?? '')) {
				continue;
			}
			if (!Bpafb_Pro_Template_Kinds::get_matching_template_id($kind)) {
				return $pre_render;
			}
			$classes = ['wp-block-template-part'];
			if (!empty($attrs['className'])) {
				$classes[] = $attrs['className'];
			}
			return self::markup($kind, $attrs['tagName'] ?? $kind, $classes);
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
