<?php
/**
 * The real, working versions of the 18 WooCommerce Template Blocks. The
 * free plugin only shows these as locked "(Pro)" placeholders (see
 * src/template-blocks/pro-teasers/block-list.js). Same block names are
 * used, so a template built without Pro keeps working the same once Pro is
 * turned on.
 *
 * These are registered with register_block_type() and plain settings,
 * instead of a block.json plus render.php file for each one. With 18
 * nearly identical blocks, that would just add extra folders with no real benefit.
 *
 * Almost every WooCommerce `woocommerce_template_*()` function needs
 * `global $product` (and sometimes `global $post`) set, instead of taking
 * the product as an argument. with_product_context() sets those up, then
 * puts them back afterward, so showing one of these blocks never changes
 * the product or post that some other code is already using.
 *
 * This does not check if WooCommerce is active - these blocks are a Pro
 * feature, unlocked as soon as Pro is active, no matter what other plugins
 * are installed. Every render function checks function_exists() before
 * calling a WooCommerce function (either directly, or through
 * with_product_context()), so a block stays usable, and just shows nothing,
 * even on a site with no WooCommerce installed.
 *
 * @package BlockivePro
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

class Bpafb_Pro_Woo_Blocks
{
	const NAME_PREFIX = 'blockive-premium-addon-for-block/tb-';

	/**
	 * The one and only instance of this class.
	 *
	 * @var Bpafb_Pro_Woo_Blocks|null
	 */
	private static $instance = null;

	/**
	 * Gives back the one instance of this class, making it first if needed.
	 *
	 * @return Bpafb_Pro_Woo_Blocks
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
		// Priority 21, so this runs after
		// Bpafb_Template_Blocks::fire_registration_hook() (priority 20),
		// which is what actually fires the blockive_register_template_block
		// action these blocks register on.
		add_action('blockive_register_template_block', [$this, 'register_blocks']);
		add_action('enqueue_block_editor_assets', [$this, 'enqueue_editor_assets'], 21);
		add_filter('register_block_type_args', [$this, 'hide_without_woocommerce'], 10, 2);
	}

	/**
	 * The Products, Product Categories, and Add to Cart Button blocks
	 * (src/products, src/product-categories, src/add-to-cart) stay
	 * registered without WooCommerce, so saved content still parses, but
	 * are left out of the inserter, where they would do nothing.
	 *
	 * @param array  $args       Block type arguments.
	 * @param string $block_name Block name.
	 * @return array
	 */
	public function hide_without_woocommerce($args, $block_name)
	{
		$names = ['blockive-premium-addon-for-block/products', 'blockive-premium-addon-for-block/product-categories', 'blockive-premium-addon-for-block/add-to-cart'];
		if (in_array($block_name, $names, true) && !class_exists('WooCommerce')) {
			$args['supports'] = array_merge(isset($args['supports']) ? $args['supports'] : [], ['inserter' => false]);
		}
		return $args;
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
	 * Runs $render with the WooCommerce and post globals set to one
	 * specific product, then puts back whatever they held before.
	 *
	 * @param int      $post_id Product post ID.
	 * @param callable $render  Receives the resolved WC_Product; its echoed output is captured and returned.
	 * @return string Captured output, or '' if the product can't be resolved.
	 */
	private static function with_product_context($post_id, callable $render)
	{
		if (!$post_id || !function_exists('wc_get_product')) {
			return '';
		}

		$product_post = get_post($post_id);
		$product      = wc_get_product($post_id);
		if (!$product_post || !$product) {
			return '';
		}

		global $post, $product; // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
		$prev_post    = $post;
		$prev_product = $product;

		$post    = $product_post;
		$product = wc_get_product($post_id);
		setup_postdata($post);

		ob_start();
		$render($product);
		$output = ob_get_clean();

		$post    = $prev_post;
		$product = $prev_product;
		if ($prev_post) {
			setup_postdata($prev_post);
		} else {
			wp_reset_postdata();
		}

		return $output;
	}

	/**
	 * Finds the product post ID a block instance should show, the same
	 * way every free Template Block finds its post.
	 *
	 * @param WP_Block $block Block instance.
	 * @return int
	 */
	private static function post_id($block)
	{
		return Bpafb_Template_Block_Render::get_post_id($block);
	}

	// -- Render callbacks, one per block --------------------------------

	public function render_product_title($attributes, $content, $block)
	{
		ob_start();
		Bpafb_Template_Block_Render::render_title_block($block, $attributes, 'bpafb-tb-product-title');
		return ob_get_clean();
	}

	public function render_product_gallery($attributes, $content, $block)
	{
		return self::with_product_context(self::post_id($block), function () {
			if (function_exists('woocommerce_show_product_images')) {
				woocommerce_show_product_images();
			}
		});
	}

	public function render_product_images($attributes, $content, $block)
	{
		$product_id = self::post_id($block);
		if (!$product_id || !function_exists('wc_get_product')) {
			return '';
		}
		$product = wc_get_product($product_id);
		if (!$product) {
			return '';
		}
		return $product->get_image('woocommerce_single');
	}

	public function render_product_price($attributes, $content, $block)
	{
		return self::with_product_context(self::post_id($block), function () {
			if (function_exists('woocommerce_template_single_price')) {
				woocommerce_template_single_price();
			}
		});
	}

	public function render_product_sale_badge($attributes, $content, $block)
	{
		return self::with_product_context(self::post_id($block), function () {
			if (function_exists('woocommerce_show_product_sale_flash')) {
				woocommerce_show_product_sale_flash();
			}
		});
	}

	public function render_product_rating($attributes, $content, $block)
	{
		return self::with_product_context(self::post_id($block), function () {
			if (function_exists('woocommerce_template_single_rating')) {
				woocommerce_template_single_rating();
			}
		});
	}

	public function render_product_add_to_cart($attributes, $content, $block)
	{
		return self::with_product_context(self::post_id($block), function () {
			if (function_exists('woocommerce_template_single_add_to_cart')) {
				woocommerce_template_single_add_to_cart();
			}
		});
	}

	public function render_product_sku($attributes, $content, $block)
	{
		return self::with_product_context(self::post_id($block), function () {
			if (function_exists('woocommerce_template_single_sku')) {
				woocommerce_template_single_sku();
			}
		});
	}

	public function render_product_stock($attributes, $content, $block)
	{
		$product_id = self::post_id($block);
		if (!$product_id || !function_exists('wc_get_product')) {
			return '';
		}
		$product = wc_get_product($product_id);
		return $product ? (string) wc_get_stock_html($product) : '';
	}

	public function render_product_short_description($attributes, $content, $block)
	{
		return self::with_product_context(self::post_id($block), function () {
			if (function_exists('woocommerce_template_single_excerpt')) {
				woocommerce_template_single_excerpt();
			}
		});
	}

	public function render_product_description($attributes, $content, $block)
	{
		$product_id = self::post_id($block);
		if (!$product_id || !function_exists('wc_get_product')) {
			return '';
		}
		$product = wc_get_product($product_id);
		if (!$product) {
			return '';
		}
		$description = $product->get_description();
		if ($description === '') {
			return '';
		}
		return '<div class="bpafb-tb-product-description">' . apply_filters('the_content', $description) . '</div>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}

	public function render_product_attributes($attributes, $content, $block)
	{
		$product_id = self::post_id($block);
		if (!$product_id || !function_exists('wc_get_template_html')) {
			return '';
		}
		$product = wc_get_product($product_id);
		if (!$product || !$product->get_attributes()) {
			return '';
		}
		return wc_get_template_html('single-product/product-attributes.php', [
			'product'            => $product,
			'attributes'         => $product->get_attributes(),
			'display_dimensions' => wc_product_dimensions_enabled(),
		]);
	}

	public function render_product_meta($attributes, $content, $block)
	{
		return self::with_product_context(self::post_id($block), function () {
			if (function_exists('woocommerce_template_single_meta')) {
				woocommerce_template_single_meta();
			}
		});
	}

	public function render_product_tabs($attributes, $content, $block)
	{
		return self::with_product_context(self::post_id($block), function () {
			if (function_exists('woocommerce_output_product_data_tabs')) {
				woocommerce_output_product_data_tabs();
			}
		});
	}

	/**
	 * Only shows anything for variable products. WooCommerce has no
	 * "just the variation picker" template on its own, separate from the
	 * whole add-to-cart form, so this reuses that whole form. Use the Add
	 * To Cart block instead for simple products.
	 */
	public function render_product_variations($attributes, $content, $block)
	{
		$product_id = self::post_id($block);
		if (!$product_id || !function_exists('wc_get_product')) {
			return '';
		}
		$product = wc_get_product($product_id);
		if (!$product || !$product->is_type('variable')) {
			return '';
		}
		return self::with_product_context($product_id, function () {
			woocommerce_template_single_add_to_cart();
		});
	}

	public function render_product_related($attributes, $content, $block)
	{
		return self::with_product_context(self::post_id($block), function () {
			if (function_exists('woocommerce_output_related_products')) {
				woocommerce_output_related_products();
			}
		});
	}

	public function render_product_upsells($attributes, $content, $block)
	{
		return self::with_product_context(self::post_id($block), function () {
			if (function_exists('woocommerce_upsell_display')) {
				woocommerce_upsell_display();
			}
		});
	}

	/**
	 * WooCommerce's breadcrumb (Home / Shop / Category / Product), on any
	 * template.
	 */
	public function render_breadcrumb($attributes, $content, $block)
	{
		if (!function_exists('woocommerce_breadcrumb')) {
			return '';
		}
		ob_start();
		woocommerce_breadcrumb();
		return ob_get_clean();
	}

	/**
	 * Store notices ("Added to your cart", errors, ...) for templates that
	 * replace the parts of the page WooCommerce normally prints them in.
	 */
	public function render_notices($attributes, $content, $block)
	{
		if (!function_exists('wc_print_notices') || !function_exists('WC') || !WC()->session) {
			return '';
		}
		return '<div class="woocommerce bpafb-tb-woo-notices">' . wc_print_notices(true) . '</div>';
	}

	/**
	 * The current product category's thumbnail, on a category archive.
	 */
	public function render_category_image($attributes, $content, $block)
	{
		if (!function_exists('is_product_category') || !is_product_category()) {
			return '';
		}
		$term = get_queried_object();
		$thumbnail_id = (int) get_term_meta($term->term_id, 'thumbnail_id', true);
		if (!$thumbnail_id) {
			return '';
		}
		return '<div class="bpafb-tb-category-image">' . wp_get_attachment_image($thumbnail_id, 'large', false, ['alt' => $term->name]) . '</div>';
	}

	/**
	 * The shop page's content, or a category or tag's description, the
	 * way WooCommerce shows it at the top of a product archive.
	 */
	public function render_archive_description($attributes, $content, $block)
	{
		ob_start();
		if (function_exists('woocommerce_taxonomy_archive_description')) {
			woocommerce_taxonomy_archive_description();
		}
		if (function_exists('woocommerce_product_archive_description')) {
			woocommerce_product_archive_description();
		}
		return ob_get_clean();
	}

	/**
	 * Based on what's in the current cart (WooCommerce's own cross-sell
	 * feature), not on the product being previewed or shown. This only
	 * shows something real on a Cart template - it does nothing if the
	 * cart is empty. No product or post context is needed here.
	 */
	public function render_product_cross_sells($attributes, $content, $block)
	{
		ob_start();
		if (function_exists('woocommerce_cross_sell_display')) {
			woocommerce_cross_sell_display();
		}
		return ob_get_clean();
	}

	// -- Registration -----------------------------------------------------

	/**
	 * Block slug => [title, icon, render method], for every block this
	 * class adds.
	 *
	 * @return array<string,array{0:string,1:string,2:string}>
	 */
	private function block_defs()
	{
		return [
			'product-title'             => [__('Product Title', 'blockive-premium-addon-for-block-pro'), 'editor-textcolor', 'render_product_title'],
			'product-gallery'           => [__('Product Gallery', 'blockive-premium-addon-for-block-pro'), 'format-gallery', 'render_product_gallery'],
			'product-images'            => [__('Product Images', 'blockive-premium-addon-for-block-pro'), 'format-image', 'render_product_images'],
			'product-price'             => [__('Product Price', 'blockive-premium-addon-for-block-pro'), 'tag', 'render_product_price'],
			'product-sale-badge'        => [__('Sale Badge', 'blockive-premium-addon-for-block-pro'), 'megaphone', 'render_product_sale_badge'],
			'product-rating'            => [__('Product Rating', 'blockive-premium-addon-for-block-pro'), 'star-filled', 'render_product_rating'],
			'product-add-to-cart'       => [__('Add To Cart', 'blockive-premium-addon-for-block-pro'), 'cart', 'render_product_add_to_cart'],
			'product-sku'               => [__('Product SKU', 'blockive-premium-addon-for-block-pro'), 'id', 'render_product_sku'],
			'product-stock'             => [__('Product Stock', 'blockive-premium-addon-for-block-pro'), 'clipboard', 'render_product_stock'],
			'product-short-description' => [__('Product Short Description', 'blockive-premium-addon-for-block-pro'), 'editor-alignleft', 'render_product_short_description'],
			'product-description'       => [__('Product Description', 'blockive-premium-addon-for-block-pro'), 'editor-justify', 'render_product_description'],
			'product-attributes'        => [__('Product Attributes', 'blockive-premium-addon-for-block-pro'), 'list-view', 'render_product_attributes'],
			'product-meta'              => [__('Product Meta', 'blockive-premium-addon-for-block-pro'), 'list-view', 'render_product_meta'],
			'product-tabs'              => [__('Product Tabs', 'blockive-premium-addon-for-block-pro'), 'index-card', 'render_product_tabs'],
			'product-variations'        => [__('Product Variations', 'blockive-premium-addon-for-block-pro'), 'screenoptions', 'render_product_variations'],
			'product-related'           => [__('Related Products', 'blockive-premium-addon-for-block-pro'), 'grid-view', 'render_product_related'],
			'product-upsells'           => [__('Upsells', 'blockive-premium-addon-for-block-pro'), 'arrow-up-alt', 'render_product_upsells'],
			'product-cross-sells'       => [__('Cross Sells', 'blockive-premium-addon-for-block-pro'), 'randomize', 'render_product_cross_sells'],
			'woo-breadcrumb'            => [__('WooCommerce Breadcrumb', 'blockive-premium-addon-for-block-pro'), 'arrow-right-alt2', 'render_breadcrumb'],
			'woo-notices'               => [__('Store Notices', 'blockive-premium-addon-for-block-pro'), 'info-outline', 'render_notices'],
			'product-category-image'    => [__('Category Image', 'blockive-premium-addon-for-block-pro'), 'format-image', 'render_category_image'],
			'shop-archive-description'  => [__('Shop Archive Description', 'blockive-premium-addon-for-block-pro'), 'editor-alignleft', 'render_archive_description'],
		];
	}

	/**
	 * Registers every block above, and marks each one as a Template Block,
	 * using the same hook the free plugin already fires for this exact
	 * purpose (see Bpafb_Template_Blocks::fire_registration_hook()).
	 */
	public function register_blocks()
	{
		foreach ($this->block_defs() as $slug => list($title, $icon, $method)) {
			$name = self::NAME_PREFIX . $slug;

			register_block_type($name, [
				'api_version'     => 3,
				'title'           => $title,
				'category'        => 'blockive-template',
				'icon'            => $icon,
				'uses_context'    => ['postId', 'postType'],
				'supports'        => ['html' => false],
				'render_callback' => [$this, $method],
			]);

			Bpafb_Template_Blocks::register_block_name($name);
		}
	}

	/**
	 * Loads the editor file that swaps each block's free-plugin teaser for
	 * the real one, only on the Template Builder editor screen (the same
	 * check every other Template Block editor file uses).
	 */
	public function enqueue_editor_assets()
	{
		if (!Bpafb_Screen_Helper::is_template_editor()) {
			return;
		}

		$script_path = BPAFB_PRO_PATH . 'build/template-blocks-woo/index.js';
		if (!file_exists($script_path)) {
			return;
		}

		$asset_file = BPAFB_PRO_PATH . 'build/template-blocks-woo/index.asset.php';
		$asset      = file_exists($asset_file) ? require $asset_file : [
			'dependencies' => ['bpafb-template-blocks'],
			'version'      => BPAFB_PRO_VERSION,
		];

		wp_enqueue_script(
			'bpafb-pro-template-blocks-woo',
			BPAFB_PRO_URL . 'build/template-blocks-woo/index.js',
			// Depends on the free plugin's Template Blocks file (which
			// registers the locked teasers this file replaces), so this
			// always runs after it, no matter the load order.
			array_unique(array_merge($asset['dependencies'], ['bpafb-template-blocks'])),
			$asset['version'],
			true
		);

		// This always removes the free plugin's teaser (Pro never shows a
		// locked "(Pro)" placeholder for its own included features), but
		// only adds the real block back when WooCommerce is actually
		// installed. Otherwise a Product block would sit in the block list
		// doing nothing, on a site with no products at all. The PHP-side
		// registration (register_blocks() above) always runs, though, so a
		// template made while WooCommerce was active still works (showing
		// empty content, from each render method's own check) even if
		// WooCommerce is later turned off.
		wp_localize_script('bpafb-pro-template-blocks-woo', 'bpafbProWooBlocks', [
			'active' => class_exists('WooCommerce'),
		]);
	}
}
