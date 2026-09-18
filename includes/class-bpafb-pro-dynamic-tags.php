<?php
/**
 * Dynamic Tags: lets any Blockive block's text/URL attribute contain a
 * `{{tag}}` or `{{tag:param}}` token (e.g. `{{post_title}}`,
 * `{{post_date:F j, Y}}`) that's resolved to real content at render time,
 * the same way every page-builder's "dynamic content" feature works.
 *
 * Resolution hooks the generic `render_block` filter, scoped to the
 * `blockive-premium-addon-for-block/` namespace - the exact same boundary
 * Bpafb_Core::bpafb_render_block_container() already uses for container
 * styling - so it works uniformly across every Blockive block, static or
 * dynamic, without per-block wiring: a static block's saved HTML (Heading,
 * Button, Image Box, ...) still passes through `render_block` like any
 * other block's output, token or not.
 *
 * @package BlockivePro
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

class Bpafb_Pro_Dynamic_Tags
{
	const NAME_PREFIX      = 'blockive-premium-addon-for-block/';
	const DYNAMIC_FIELD_BLOCK = self::NAME_PREFIX . 'tb-dynamic-field';

	/**
	 * Matches `{{tag}}` or `{{tag:param}}`. Tag/param characters are kept
	 * deliberately narrow (letters, numbers, underscore, space, common date-
	 * format punctuation) - wide enough for every tag's own param format,
	 * narrow enough that ordinary curly-brace text elsewhere in a block
	 * (code samples, JSON examples a user typed) doesn't look like a tag and
	 * get silently eaten.
	 *
	 * @var string
	 */
	const TOKEN_PATTERN = '/\{\{\s*([a-z_]+)\s*(?::\s*([a-zA-Z0-9_ ,\.\/\-:]*)\s*)?\}\}/';

	/**
	 * Constructor.
	 */
	public function __construct()
	{
		add_action('init', [$this, 'register_dynamic_field_block']);
		add_action('enqueue_block_editor_assets', [$this, 'enqueue_editor_assets'], 22);
		// Priority 20: after Bpafb_Core::bpafb_render_block_container() (the
		// free plugin's own render_block hook, default priority 10) has
		// already injected container styles/classes - token resolution
		// should see and can safely run on top of that finished markup.
		add_filter('render_block', [$this, 'resolve_block_tokens'], 20, 2);
	}

	/**
	 * Tag definitions grouped for the editor's picker UI. Each resolver
	 * receives the resolved "current" post ID (falls back to the main
	 * queried post) and the raw param string from the token, if any.
	 *
	 * @return array<string,array{label:string,tags:array<string,array{label:string,hasParam?:bool,resolve:callable}>}>
	 */
	public static function get_registry()
	{
		$registry = [
			'post' => [
				'label' => __('Post', 'blockive-premium-addon-for-block-pro'),
				'tags'  => [
					'post_title' => [
						'label'   => __('Post Title', 'blockive-premium-addon-for-block-pro'),
						'resolve' => function ($post_id) {
							return $post_id ? get_the_title($post_id) : '';
						},
					],
					'post_excerpt' => [
						'label'   => __('Post Excerpt', 'blockive-premium-addon-for-block-pro'),
						'resolve' => function ($post_id) {
							return $post_id ? wp_strip_all_tags(get_the_excerpt($post_id)) : '';
						},
					],
					'post_date' => [
						'label'    => __('Post Date', 'blockive-premium-addon-for-block-pro'),
						'hasParam' => true,
						'resolve'  => function ($post_id, $param) {
							if (!$post_id) {
								return '';
							}
							$format = $param !== '' ? $param : get_option('date_format');
							return get_the_date($format, $post_id);
						},
					],
					'post_permalink' => [
						'label'   => __('Post URL', 'blockive-premium-addon-for-block-pro'),
						'resolve' => function ($post_id) {
							return $post_id ? get_permalink($post_id) : '';
						},
					],
					'post_id' => [
						'label'   => __('Post ID', 'blockive-premium-addon-for-block-pro'),
						'resolve' => function ($post_id) {
							return $post_id ? (string) $post_id : '';
						},
					],
					'featured_image_url' => [
						'label'    => __('Featured Image URL', 'blockive-premium-addon-for-block-pro'),
						'type'     => 'image',
						'hasParam' => true,
						'resolve'  => function ($post_id, $param) {
							if (!$post_id || !has_post_thumbnail($post_id)) {
								return '';
							}
							$size = $param !== '' ? $param : 'full';
							$src  = wp_get_attachment_image_src(get_post_thumbnail_id($post_id), $size);
							return $src ? $src[0] : '';
						},
					],
					'post_custom_field' => [
						'label'    => __('Custom Field', 'blockive-premium-addon-for-block-pro'),
						'hasParam' => true,
						// Param is the meta key. Coerced to a display string
						// the same defensive way WordPress's own "Custom
						// Fields" panel does - a scalar value is used as-is,
						// anything else (a serialized array some plugins
						// store) has no sane single-string representation.
						'resolve'  => function ($post_id, $param) {
							if (!$post_id || $param === '') {
								return '';
							}
							$value = get_post_meta($post_id, $param, true);
							return is_scalar($value) ? (string) $value : '';
						},
					],
					'post_custom_field_image' => [
						'label'    => __('Custom Field (Image)', 'blockive-premium-addon-for-block-pro'),
						'type'     => 'image',
						'hasParam' => true,
						// Accepts the common shapes a custom field ends up
						// storing an image as: a plain attachment ID, an
						// ACF-style array (has 'url', or an 'ID'/'id' this
						// falls through to below), or an already-complete URL.
						'resolve'  => function ($post_id, $param) {
							if (!$post_id || $param === '') {
								return '';
							}
							$value = get_post_meta($post_id, $param, true);

							if (is_array($value)) {
								if (!empty($value['url'])) {
									return (string) $value['url'];
								}
								$value = $value['ID'] ?? ($value['id'] ?? '');
							}

							if (is_numeric($value)) {
								$url = wp_get_attachment_image_url((int) $value, 'full');
								return $url ?: '';
							}

							if (is_string($value) && filter_var($value, FILTER_VALIDATE_URL)) {
								return $value;
							}

							return '';
						},
					],
				],
			],
			'author' => [
				'label' => __('Author', 'blockive-premium-addon-for-block-pro'),
				'tags'  => [
					'author_name' => [
						'label'   => __('Author Name', 'blockive-premium-addon-for-block-pro'),
						'resolve' => function ($post_id) {
							return $post_id ? get_the_author_meta('display_name', (int) get_post_field('post_author', $post_id)) : '';
						},
					],
					'author_bio' => [
						'label'   => __('Author Bio', 'blockive-premium-addon-for-block-pro'),
						'resolve' => function ($post_id) {
							return $post_id ? get_the_author_meta('description', (int) get_post_field('post_author', $post_id)) : '';
						},
					],
					'author_avatar_url' => [
						'label'    => __('Author Avatar URL', 'blockive-premium-addon-for-block-pro'),
						'type'     => 'image',
						'hasParam' => true,
						'resolve'  => function ($post_id, $param) {
							if (!$post_id) {
								return '';
							}
							$size      = $param !== '' && is_numeric($param) ? (int) $param : 96;
							$author_id = (int) get_post_field('post_author', $post_id);
							return get_avatar_url($author_id, ['size' => $size]);
						},
					],
				],
			],
			'site' => [
				'label' => __('Site', 'blockive-premium-addon-for-block-pro'),
				'tags'  => [
					'site_title'   => ['label' => __('Site Title', 'blockive-premium-addon-for-block-pro'), 'resolve' => function () {
						return get_bloginfo('name');
					}],
					'site_tagline' => ['label' => __('Site Tagline', 'blockive-premium-addon-for-block-pro'), 'resolve' => function () {
						return get_bloginfo('description');
					}],
					'site_url'     => ['label' => __('Site URL', 'blockive-premium-addon-for-block-pro'), 'resolve' => function () {
						return home_url('/');
					}],
					'site_logo_url' => ['label' => __('Site Logo URL', 'blockive-premium-addon-for-block-pro'), 'type' => 'image', 'resolve' => function () {
						$logo_id = get_theme_mod('custom_logo');
						if (!$logo_id) {
							return '';
						}
						$src = wp_get_attachment_image_src($logo_id, 'full');
						return $src ? $src[0] : '';
					}],
				],
			],
			'archive' => [
				'label' => __('Archive', 'blockive-premium-addon-for-block-pro'),
				'tags'  => [
					'archive_title' => [
						'label'   => __('Archive Title', 'blockive-premium-addon-for-block-pro'),
						'resolve' => function () {
							return is_archive() || is_search() ? wp_strip_all_tags(get_the_archive_title()) : '';
						},
					],
					'archive_description' => [
						'label'   => __('Archive Description', 'blockive-premium-addon-for-block-pro'),
						'resolve' => function () {
							return is_archive() ? wp_strip_all_tags(get_the_archive_description()) : '';
						},
					],
				],
			],
		];

		if (class_exists('WooCommerce')) {
			$registry['woocommerce'] = [
				'label' => __('WooCommerce', 'blockive-premium-addon-for-block-pro'),
				'tags'  => [
					'product_price' => [
						'label'   => __('Product Price', 'blockive-premium-addon-for-block-pro'),
						'resolve' => function ($post_id) {
							$product = $post_id ? wc_get_product($post_id) : null;
							return $product ? wp_strip_all_tags($product->get_price_html()) : '';
						},
					],
					'product_sku' => [
						'label'   => __('Product SKU', 'blockive-premium-addon-for-block-pro'),
						'resolve' => function ($post_id) {
							$product = $post_id ? wc_get_product($post_id) : null;
							return $product ? $product->get_sku() : '';
						},
					],
				],
			];
		}

		/**
		 * Filters the Dynamic Tags registry, letting other code add its own
		 * groups/tags (matching Bpafb_Template_Blocks::register_block_name()'s
		 * "extend without editing core files" precedent elsewhere in this plugin).
		 *
		 * @param array $registry Group => {label, tags: {tag_key => {label, hasParam, resolve}}}.
		 */
		return apply_filters('blockive_pro_dynamic_tags_registry', $registry);
	}

	/**
	 * Flat tag_key => resolver map, built once per request.
	 *
	 * @return array<string,array{resolve:callable,hasParam:bool}>
	 */
	private static function flat_tags()
	{
		static $flat = null;
		if (null !== $flat) {
			return $flat;
		}
		$flat = [];
		foreach (self::get_registry() as $group) {
			foreach ($group['tags'] as $key => $tag) {
				$flat[$key] = $tag;
			}
		}
		return $flat;
	}

	/**
	 * Resolves the post ID a tag should use: the block's own context if it
	 * declares postId (matching every Template Block's own resolution
	 * order), otherwise the main queried post in whatever loop is currently
	 * rendering.
	 *
	 * @param WP_Block|null $block Block instance, when available.
	 * @return int
	 */
	private static function current_post_id($block)
	{
		if ($block instanceof WP_Block && !empty($block->context['postId'])) {
			return (int) $block->context['postId'];
		}
		$id = get_the_ID();
		return $id ? (int) $id : 0;
	}

	/**
	 * Replaces every `{{tag}}` / `{{tag:param}}` occurrence in $text.
	 *
	 * @param string        $text  Text potentially containing tokens.
	 * @param WP_Block|null $block Block instance, for context-aware tags.
	 * @return string
	 */
	public static function resolve_string($text, $block = null)
	{
		if (strpos($text, '{{') === false) {
			return $text;
		}

		$tags    = self::flat_tags();
		$post_id = self::current_post_id($block);

		return preg_replace_callback(
			self::TOKEN_PATTERN,
			function ($matches) use ($tags, $post_id) {
				$key = $matches[1];
				if (!isset($tags[$key])) {
					return $matches[0];
				}
				$param = isset($matches[2]) ? $matches[2] : '';
				return (string) call_user_func($tags[$key]['resolve'], $post_id, $param);
			},
			$text
		);
	}

	/**
	 * Resolves tokens in a Blockive block's already-rendered HTML.
	 *
	 * @param string   $block_content Rendered block HTML.
	 * @param array    $block         Parsed block array.
	 * @return string
	 */
	public function resolve_block_tokens($block_content, $block)
	{
		if (empty($block['blockName']) || strpos($block['blockName'], self::NAME_PREFIX) !== 0) {
			return $block_content;
		}
		if (strpos($block_content, '{{') === false) {
			return $block_content;
		}
		return self::resolve_string($block_content, null);
	}

	/**
	 * Registers the real, generic "Dynamic Field" block - the free plugin's
	 * client-only teaser of the same name (see pro-teasers/block-list.js)
	 * outputs a tag's resolved value directly, for placing any tag
	 * somewhere no other block's attribute already covers.
	 */
	public function register_dynamic_field_block()
	{
		register_block_type(self::DYNAMIC_FIELD_BLOCK, [
			'api_version'     => 3,
			'title'           => __('Dynamic Field', 'blockive-premium-addon-for-block-pro'),
			'category'        => 'blockive-template',
			'icon'            => 'editor-code',
			'uses_context'    => ['postId', 'postType'],
			'attributes'      => [
				'tag'   => ['type' => 'string', 'default' => ''],
				'param' => ['type' => 'string', 'default' => ''],
			],
			// Must exactly match the JS registration's `supports`
			// (src/dynamic-tags/index.js) - real typography/color/spacing
			// support instead of a bare unstyled <span>, matching how
			// Elementor's own dedicated dynamic-content widgets are always
			// fully styleable. get_block_wrapper_attributes() in
			// render_dynamic_field_block() is what actually turns these into
			// the generated class/inline-style on the rendered markup.
			'supports'        => [
				'html'            => false,
				'className'       => true,
				'customClassName' => true,
				'reusable'        => false,
				'typography'      => [
					'fontSize'                    => true,
					'lineHeight'                  => true,
					'__experimentalFontFamily'    => true,
					'__experimentalFontWeight'    => true,
					'__experimentalLetterSpacing' => true,
				],
				'color'           => [
					'text'       => true,
					'background' => true,
					'link'       => true,
				],
				'spacing'         => [
					'margin'  => true,
					'padding' => true,
				],
			],
			'render_callback' => [$this, 'render_dynamic_field_block'],
		]);

		Bpafb_Template_Blocks::register_block_name(self::DYNAMIC_FIELD_BLOCK);
	}

	/**
	 * Render callback for the Dynamic Field block.
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content    Unused (no inner content).
	 * @param WP_Block $block      Block instance.
	 * @return string
	 */
	public function render_dynamic_field_block($attributes, $content, $block)
	{
		$tag = isset($attributes['tag']) ? $attributes['tag'] : '';
		if ($tag === '') {
			return '';
		}
		$param    = isset($attributes['param']) ? $attributes['param'] : '';
		$token    = $param !== '' ? '{{' . $tag . ':' . $param . '}}' : '{{' . $tag . '}}';
		$resolved = self::resolve_string($token, $block);

		// Merges the typography/color/spacing/custom-class supports'
		// generated class(es) and inline style into the wrapper - without
		// this, declaring those supports would do nothing on the frontend
		// (the editor's own useBlockProps() would still preview them,
		// silently diverging from what actually renders).
		$wrapper_attributes = get_block_wrapper_attributes(['class' => 'bpafb-tb-dynamic-field']);

		$tag_def  = self::flat_tags()[$tag] ?? null;
		$is_image = $tag_def && 'image' === ($tag_def['type'] ?? 'text');

		if ($is_image) {
			if ($resolved === '') {
				return '';
			}
			return '<span ' . $wrapper_attributes . '><img src="' . esc_url($resolved) . '" alt="" style="max-width:100%;height:auto;" /></span>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		}

		return '<span ' . $wrapper_attributes . '>' . esc_html($resolved) . '</span>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}

	/**
	 * Enqueues the Dynamic Tags editor bundle, localizing the tag registry
	 * (labels + which tags take a param - resolvers stay server-side only).
	 *
	 * Unconditional on every block editor screen (not gated to the Template
	 * Builder the way the WooCommerce/Events blocks bundles are): Heading,
	 * Button, and Image Box are ordinary blocks used on any Post/Page/
	 * Product, not Template Blocks. Deliberately no dependency on the free
	 * plugin's `bpafb-template-blocks` handle for this reason - that handle
	 * is itself only ever enqueued on the Template Builder screen, and a
	 * script depending on a handle that's never enqueued elsewhere is
	 * silently skipped everywhere else too. The Dynamic Field block's own
	 * teaser replacement doesn't need that dependency either: the free
	 * plugin's teaser script does a plain (unguarded) registerBlockType(),
	 * so whichever of the two scripts runs first simply "wins" the name -
	 * this one already registers the real block unconditionally, so the
	 * outcome is correct regardless of load order.
	 */
	public function enqueue_editor_assets()
	{
		$script_path = BPAFB_PRO_PATH . 'build/dynamic-tags/index.js';
		if (!file_exists($script_path)) {
			return;
		}

		$asset_file = BPAFB_PRO_PATH . 'build/dynamic-tags/index.asset.php';
		$asset      = file_exists($asset_file) ? require $asset_file : [
			'dependencies' => [],
			'version'      => BPAFB_PRO_VERSION,
		];

		wp_enqueue_script(
			'bpafb-pro-dynamic-tags',
			BPAFB_PRO_URL . 'build/dynamic-tags/index.js',
			$asset['dependencies'],
			$asset['version'],
			true
		);

		$js_registry = [];
		foreach (self::get_registry() as $group_key => $group) {
			$js_registry[$group_key] = [
				'label' => $group['label'],
				'tags'  => array_map(
					function ($key, $tag) {
						return [
							'key'      => $key,
							'label'    => $tag['label'],
							'hasParam' => !empty($tag['hasParam']),
							'type'     => $tag['type'] ?? 'text',
							// Flags the two "type the meta key yourself"
							// tags so the editor can offer a picker of the
							// current post's own known meta keys instead of
							// a completely blank text field.
							'isCustomField' => in_array($key, ['post_custom_field', 'post_custom_field_image'], true),
						];
					},
					array_keys($group['tags']),
					array_values($group['tags'])
				),
			];
		}

		wp_localize_script('bpafb-pro-dynamic-tags', 'bpafbProDynamicTags', [
			'registry' => $js_registry,
		]);
	}
}
