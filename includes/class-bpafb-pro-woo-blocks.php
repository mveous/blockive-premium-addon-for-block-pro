<?php
/**
 * Real, server-rendered implementations of the 18 WooCommerce Template
 * Blocks the free plugin already advertises as client-only "(Pro)" teaser
 * placeholders (see src/template-blocks/pro-teasers/block-list.js) - same
 * block names (blockive-premium-addon-for-block/tb-product-*), so a
 * template built under a future free-only install (where these stay inert
 * teasers) keeps rendering unchanged once Pro is active.
 *
 * Registered via register_block_type() with inline args rather than a
 * block.json + render.php pair per block - 18 near-identical small
 * directories would add more indirection than value here, and unlike the
 * free plugin's Template Blocks none of these need their own build-time
 * asset pipeline; the client-side registration lives in one small
 * dedicated bundle (src/template-blocks-woo) whose only job is replacing
 * each teaser with a real one.
 *
 * Every render method resolves its product the same way every other
 * Template Block resolves its post (Bpafb_Template_Block_Render::get_post_id()),
 * and almost every underlying `woocommerce_template_*()` core function
 * requires `global $product` (some also `global $post`) rather than taking
 * the product as a parameter - with_product_context() sets both up and
 * restores them afterward, so rendering one of these blocks can never leak
 * into whatever product/post a surrounding context (e.g. a future Loop
 * Builder item) already has in scope.
 *
 * Gated entirely on WooCommerce being active - none of this runs at all
 * otherwise, and the free plugin's teaser blocks keep advertising these as
 * "(Pro)" exactly as before.
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
	 * Constructor.
	 */
	public function __construct()
	{
		if (!class_exists('WooCommerce')) {
			return;
		}

		// Priority 21: after Bpafb_Template_Blocks::fire_registration_hook()
		// (priority 20, which is what actually fires the
		// blockive_register_template_block action these blocks register on).
		add_action('blockive_register_template_block', [$this, 'register_blocks']);
		add_action('enqueue_block_editor_assets', [$this, 'enqueue_editor_assets'], 21);
	}

	/**
	 * Runs $render with the WooCommerce/post globals temporarily pointed at
	 * a specific product, then restores whatever they held before.
	 *
	 * @param int      $post_id Product post ID.
	 * @param callable $render  Receives the resolved WC_Product; its echoed output is captured and returned.
	 * @return string Captured output, or '' if the product can't be resolved.
	 */
	private static function with_product_context($post_id, callable $render)
	{
		if (!$post_id) {
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
	 * Resolves the product post id a block instance should render, the same
	 * way every free Template Block resolves its post.
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
		if (!$product_id) {
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
		if (!$product_id) {
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
		if (!$product_id) {
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
	 * Only renders anything for variable products - WooCommerce doesn't
	 * expose "just the variation picker" as a template separate from the
	 * whole add-to-cart form the way it does for price/rating/sku/etc., so
	 * this reuses the same variable-product add-to-cart template
	 * (variation dropdowns + Add to Cart button together) rather than
	 * approximating a split that doesn't exist upstream. Use the Add To
	 * Cart block instead for simple products.
	 */
	public function render_product_variations($attributes, $content, $block)
	{
		$product_id = self::post_id($block);
		if (!$product_id) {
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
	 * Based on the current cart's contents (WooCommerce's own cross-sell
	 * concept), not the previewed/rendered product - meaningful on a Cart
	 * template, a no-op empty-cart response elsewhere. No product/post
	 * context needed.
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
	 * Block slug => [title, icon, render method] for every block this
	 * class provides.
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
		];
	}

	/**
	 * Registers every block above and marks it as a Template Block, via the
	 * exact extension point the free plugin already fires for this purpose
	 * (see Bpafb_Template_Blocks::fire_registration_hook()).
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
	 * Enqueues the client-side registration bundle that replaces each
	 * block's free-plugin teaser with the real thing, gated to the
	 * Template Builder editor only (same gate every other Template Block
	 * editor bundle uses).
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
			// Explicit dependency on the free plugin's Template Blocks bundle
			// (which registers the client-only teasers this bundle replaces)
			// guarantees this always runs after it, regardless of enqueue order.
			array_unique(array_merge($asset['dependencies'], ['bpafb-template-blocks'])),
			$asset['version'],
			true
		);
	}
}
