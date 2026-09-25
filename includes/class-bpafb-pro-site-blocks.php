<?php
/**
 * Header & Footer ("Site") Template Blocks: Site Logo, Site Title, Site
 * Tagline, Page Title, Search Form, Menu Cart, Login, Sitemap, and
 * Copyright - the site-wide pieces a Header or Footer template needs,
 * modelled on Elementor Pro's "Site" widgets. Navigation, Social Icons and
 * Button already exist as regular Blockive blocks, so they are not
 * repeated here.
 *
 * Unlike the Woo/Events blocks, these have no free-plugin teaser to
 * replace, so each one is a normal block.json + render.php block under
 * src/template-blocks-site/. They live two folders deep in build/, which
 * build/blocks-manifest.php does not reach (see the same note in
 * Blockive_Premium_Addon_For_Block::bpafb_register_blocks()), so this class
 * registers each one itself. Their editor code is one combined file, only
 * loaded on the Template Builder screen, same as every other Template Block.
 *
 * @package BlockivePro
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

class Bpafb_Pro_Site_Blocks
{
	const CATEGORY_SLUG = 'blockive-site';

	/**
	 * Folder names under build/template-blocks-site/, one per block.
	 */
	const BLOCK_DIRS = [
		'site-logo',
		'site-title',
		'site-tagline',
		'page-title',
		'search-form',
		'menu-cart',
		'login',
		'sitemap',
		'copyright',
	];

	/**
	 * The one and only instance of this class.
	 *
	 * @var Bpafb_Pro_Site_Blocks|null
	 */
	private static $instance = null;

	/**
	 * Gives back the one instance of this class, making it first if needed.
	 *
	 * @return Bpafb_Pro_Site_Blocks
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
		add_action('blockive_register_template_block', [$this, 'register_blocks']);
		add_filter('block_categories_all', [$this, 'register_category'], 11, 2);
		add_action('enqueue_block_editor_assets', [$this, 'enqueue_editor_assets'], 21);
		add_action('enqueue_block_assets', [$this, 'enqueue_style']);
		add_filter('woocommerce_add_to_cart_fragments', [$this, 'cart_fragments']);
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
	 * Registers every block from its built block.json, and marks it as a
	 * Template Block.
	 */
	public function register_blocks()
	{
		$registry = WP_Block_Type_Registry::get_instance();

		foreach (self::BLOCK_DIRS as $dir) {
			$path = BPAFB_PRO_PATH . 'build/template-blocks-site/' . $dir;
			if (!file_exists($path . '/block.json')) {
				continue;
			}

			$data = json_decode(file_get_contents($path . '/block.json'), true);
			if (empty($data['name'])) {
				continue;
			}
			if ($registry->is_registered($data['name'])) {
				unregister_block_type($data['name']);
			}


			register_block_type($path);
			Bpafb_Template_Blocks::register_block_name($data['name']);
		}
	}

	/**
	 * Adds the "Blockive Header & Footer" category, only while editing a
	 * `blockive_template` post (same rule as the "Blockive Template" one).
	 *
	 * @param array                        $categories     Existing block categories.
	 * @param WP_Block_Editor_Context|null $editor_context Current block editor context.
	 * @return array
	 */
	public function register_category($categories, $editor_context)
	{
		if (empty($editor_context->post) || $editor_context->post->post_type !== Bpafb_Template_Post_Type::POST_TYPE) {
			return $categories;
		}

		return array_merge(
			[
				[
					'slug'  => self::CATEGORY_SLUG,
					'title' => esc_html__('Blockive Header & Footer', 'blockive-premium-addon-for-block-pro'),
				],
			],
			$categories
		);
	}

	/**
	 * Loads the combined editor file, only on the Template Builder screen.
	 */
	public function enqueue_editor_assets()
	{
		if (!Bpafb_Screen_Helper::is_template_editor()) {
			return;
		}

		$script_path = BPAFB_PRO_PATH . 'build/template-blocks-site/index.js';
		if (!file_exists($script_path)) {
			return;
		}

		$asset_file = BPAFB_PRO_PATH . 'build/template-blocks-site/index.asset.php';
		$asset      = file_exists($asset_file) ? require $asset_file : [
			'dependencies' => [],
			'version'      => BPAFB_PRO_VERSION,
		];

		wp_enqueue_script(
			'bpafb-pro-template-blocks-site',
			BPAFB_PRO_URL . 'build/template-blocks-site/index.js',
			$asset['dependencies'],
			$asset['version'],
			true
		);

		wp_localize_script('bpafb-pro-template-blocks-site', 'bpafbProSiteBlocks', [
			'wooActive'    => class_exists('WooCommerce'),
			'currency'     => function_exists('get_woocommerce_currency_symbol') ? html_entity_decode(get_woocommerce_currency_symbol()) : '$',
		]);
	}

	/**
	 * Loads the blocks' combined stylesheet on the live site and inside the
	 * Template Builder's editor iframe. See
	 * Bpafb_Template_Blocks::enqueue_frontend_style() for why this has to
	 * use `enqueue_block_assets`.
	 */
	public function enqueue_style()
	{
		if (is_admin() && !Bpafb_Screen_Helper::is_template_editor()) {
			return;
		}

		foreach (['index.css', 'style-index.css'] as $file) {
			if (file_exists(BPAFB_PRO_PATH . 'build/template-blocks-site/' . $file)) {
				wp_enqueue_style(
					'bpafb-pro-template-blocks-site-' . sanitize_key(str_replace('.css', '', $file)),
					BPAFB_PRO_URL . 'build/template-blocks-site/' . $file,
					[],
					BPAFB_PRO_VERSION
				);
			}
		}
	}

	/**
	 * Keeps every Menu Cart block's count and subtotal in sync after an
	 * AJAX add-to-cart, through WooCommerce's own cart fragments.
	 *
	 * @param array $fragments Selector => replacement HTML.
	 * @return array
	 */
	public function cart_fragments($fragments)
	{
		if (!function_exists('WC') || !WC()->cart) {
			return $fragments;
		}

		$fragments['span.bpafb-tb-menu-cart__count'] = self::cart_count_html();
		$fragments['span.bpafb-tb-menu-cart__subtotal'] = self::cart_subtotal_html();
		// The mini cart itself sits in a `div.widget_shopping_cart_content`,
		// which WooCommerce's own fragments already refresh.

		return $fragments;
	}

	/**
	 * Cart item count badge markup.
	 *
	 * @return string
	 */
	public static function cart_count_html()
	{
		$count = (function_exists('WC') && WC()->cart) ? (int) WC()->cart->get_cart_contents_count() : 0;
		return sprintf(
			'<span class="bpafb-tb-menu-cart__count" data-count="%1$d">%1$d</span>',
			$count
		);
	}

	/**
	 * Cart subtotal markup.
	 *
	 * @return string
	 */
	public static function cart_subtotal_html()
	{
		$subtotal = (function_exists('WC') && WC()->cart) ? WC()->cart->get_cart_subtotal() : '';
		return '<span class="bpafb-tb-menu-cart__subtotal">' . wp_kses_post($subtotal) . '</span>';
	}

	/**
	 * Builds a `<style>` rule of CSS custom properties scoped to one block
	 * instance. Values are checked by the caller; this only drops empty
	 * ones and escapes the result.
	 *
	 * @param string               $uid  Block uid (already sanitized).
	 * @param array<string,string> $vars Custom property name => value.
	 * @return string
	 */
	public static function scoped_vars_css($uid, $vars)
	{
		$rules = '';
		foreach ($vars as $name => $value) {
			if ($value === '' || $value === null) {
				continue;
			}
			$rules .= esc_html($name) . ':' . esc_html($value) . ';';
		}
		if ($rules === '' || $uid === '') {
			return '';
		}
		return '<style>.bpafb-uid-' . esc_attr($uid) . '{' . $rules . '}</style>';
	}

	/**
	 * A px value from a numeric attribute, or '' when not set.
	 *
	 * @param array  $attributes Block attributes.
	 * @param string $key        Attribute name.
	 * @return string
	 */
	public static function px($attributes, $key)
	{
		return (isset($attributes[$key]) && is_numeric($attributes[$key])) ? floatval($attributes[$key]) . 'px' : '';
	}

	/**
	 * A safe CSS color from an attribute, or ''.
	 *
	 * @param array  $attributes Block attributes.
	 * @param string $key        Attribute name.
	 * @return string
	 */
	public static function color($attributes, $key)
	{
		return Bpafb_Template_Block_Render::sanitize_css_color(isset($attributes[$key]) ? $attributes[$key] : '');
	}

	/**
	 * CSS custom properties for one TypographyControls group (see
	 * src/components/typography-controls), e.g. `inputFontSize` =>
	 * `--bpafb-search-input-font-size`.
	 *
	 * @param array  $attributes Block attributes.
	 * @param string $attr_prefix Attribute prefix, e.g. 'input'.
	 * @param string $var_prefix  CSS variable prefix, e.g. '--bpafb-search-input'.
	 * @return array<string,string>
	 */
	public static function typography_vars($attributes, $attr_prefix, $var_prefix)
	{
		$get = function ($key) use ($attributes, $attr_prefix) {
			$key = $attr_prefix . $key;
			return isset($attributes[$key]) ? $attributes[$key] : '';
		};

		$family    = preg_replace('/[^\w\s,\'"-]/', '', (string) $get('FontFamily'));
		$weight    = preg_replace('/[^0-9a-z]/', '', (string) $get('FontWeight'));
		$transform = in_array($get('TextTransform'), ['none', 'uppercase', 'lowercase', 'capitalize'], true) ? $get('TextTransform') : '';
		$decor     = in_array($get('TextDecoration'), ['none', 'underline', 'line-through', 'overline'], true) ? $get('TextDecoration') : '';

		return [
			$var_prefix . '-font-family'     => $family,
			$var_prefix . '-font-size'       => is_numeric($get('FontSize')) ? floatval($get('FontSize')) . 'px' : '',
			$var_prefix . '-font-weight'     => $weight,
			$var_prefix . '-line-height'     => is_numeric($get('LineHeight')) ? (string) floatval($get('LineHeight')) : '',
			$var_prefix . '-letter-spacing'  => is_numeric($get('LetterSpacing')) ? floatval($get('LetterSpacing')) . 'px' : '',
			$var_prefix . '-text-transform'  => $transform,
			$var_prefix . '-text-decoration' => $decor,
		];
	}

	/**
	 * An inline SVG icon. Same paths as ICON_PATHS in
	 * src/template-blocks-site/shared.js, so the editor preview matches.
	 *
	 * @param string $name Icon name.
	 * @return string
	 */
	public static function svg_icon($name)
	{
		$paths = [
			'search' => 'M10.5 3a7.5 7.5 0 0 1 5.93 12.1l4.24 4.24-1.41 1.41-4.24-4.24A7.5 7.5 0 1 1 10.5 3Zm0 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z',
			'cart'   => 'M7 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm10 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM1 2h3.27l.94 2H21a1 1 0 0 1 .96 1.27l-2.5 9A1 1 0 0 1 18.5 15H8.1l-.9 2H19v2H5.6a1 1 0 0 1-.9-1.45L6.2 14.5 3 4H1V2Zm5.14 4 1.84 7h9.76l1.94-7H6.14Z',
			'bag'    => 'M7 7V6a5 5 0 0 1 10 0v1h3a1 1 0 0 1 1 1v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a1 1 0 0 1 1-1h3Zm2 0h6V6a3 3 0 0 0-6 0v1Zm-4 2v11h14V9h-2v2h-2V9H9v2H7V9H5Z',
			'basket' => 'M17.21 9 13 2.7a1 1 0 0 0-1.66 1.1L14.8 9H9.2l3.45-5.2L11 2.7 6.79 9H2a1 1 0 0 0-.97 1.24l2.54 9.27A2 2 0 0 0 5.5 21h13a2 2 0 0 0 1.93-1.49l2.55-9.27A1 1 0 0 0 22 9h-4.79ZM12 17a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z',
			'close'  => 'M6.4 5 12 10.6 17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6L6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5Z',
		];
		$d = isset($paths[$name]) ? $paths[$name] : $paths['search'];

		return '<svg class="bpafb-tb-svg-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="' . esc_attr($d) . '"/></svg>';
	}

	/**
	 * The block's uid, or a fresh unique one when the block has none yet.
	 *
	 * @param array  $attributes Block attributes.
	 * @param string $prefix     Prefix for a generated uid.
	 * @return string
	 */
	public static function uid($attributes, $prefix)
	{
		return !empty($attributes['bpafbUid']) ? sanitize_html_class($attributes['bpafbUid']) : wp_unique_id($prefix);
	}
}
