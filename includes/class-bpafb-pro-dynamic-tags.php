<?php
/**
 * Dynamic Tags: lets any Blockive block's text or URL setting hold a
 * `{{tag}}` or `{{tag:param}}` token (like `{{post_title}}` or
 * `{{post_date:F j, Y}}`), which gets swapped for real content when the
 * page is shown. This is the same idea as "dynamic content" in other
 * page builders.
 *
 * This works by hooking into the general `render_block` filter, but only
 * for blocks named `blockive-premium-addon-for-block/...`. That way it
 * works for every Blockive block, static or dynamic, with no extra setup
 * needed on each block.
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
	 * Matches `{{tag}}` or `{{tag:param}}`. Only lets in letters, numbers,
	 * underscores, spaces, and common date-format characters. This is wide
	 * enough for every tag's own param, but narrow enough that normal
	 * curly-brace text elsewhere in a block (like a code sample or JSON
	 * example a user typed) does not get mistaken for a tag and removed.
	 *
	 * @var string
	 */
	const TOKEN_PATTERN = '/\{\{\s*([a-z_]+)\s*(?::\s*([a-zA-Z0-9_ ,\.\/\-:]*)\s*)?\}\}/';

	/**
	 * The one and only instance of this class.
	 *
	 * @var Bpafb_Pro_Dynamic_Tags|null
	 */
	private static $instance = null;

	/**
	 * Gives back the one instance of this class, making it first if needed.
	 *
	 * @return Bpafb_Pro_Dynamic_Tags
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
		add_action('init', [$this, 'register_dynamic_field_block']);
		add_action('enqueue_block_editor_assets', [$this, 'enqueue_editor_assets'], 22);
		// Priority 20: this runs after Bpafb_Core::bpafb_render_block_container()
		// (the free plugin's own render_block hook, priority 10) has
		// already added container styles and classes. So token resolution
		// can safely run on top of that finished HTML.
		add_filter('render_block', [$this, 'resolve_block_tokens'], 20, 2);
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
	 * The tag list, grouped for the editor's picker. Each resolver
	 * function gets the current post ID (or falls back to the main post
	 * being viewed) and the raw param text from the token, if there is one.
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
						'paramLabel' => __('Date format', 'blockive-premium-addon-for-block-pro'),
						'paramHelp'  => __('Blank uses the site\'s date format, e.g. F j, Y', 'blockive-premium-addon-for-block-pro'),
						'resolve'  => function ($post_id, $param) {
							if (!$post_id) {
								return '';
							}
							$format = $param !== '' ? $param : get_option('date_format');
							return get_the_date($format, $post_id);
						},
					],
					'post_modified' => [
						'label'     => __('Last Modified Date', 'blockive-premium-addon-for-block-pro'),
						'hasParam'  => true,
						'paramLabel' => __('Date format', 'blockive-premium-addon-for-block-pro'),
						'paramHelp'  => __('Blank uses the site\'s date format, e.g. F j, Y', 'blockive-premium-addon-for-block-pro'),
						'resolve'   => function ($post_id, $param) {
							return $post_id ? get_the_modified_date($param !== '' ? $param : get_option('date_format'), $post_id) : '';
						},
					],
					'post_terms' => [
						'label'     => __('Post Terms', 'blockive-premium-addon-for-block-pro'),
						'hasParam'  => true,
						'paramLabel' => __('Taxonomy', 'blockive-premium-addon-for-block-pro'),
						'paramHelp'  => __('Blank = category. E.g. post_tag or product_cat.', 'blockive-premium-addon-for-block-pro'),
						// Names of the post's terms, comma-separated. Only public taxonomies.
						'resolve'   => function ($post_id, $param) {
							$taxonomy = $param !== '' ? sanitize_key($param) : 'category';
							if (!$post_id || !taxonomy_exists($taxonomy) || !is_taxonomy_viewable($taxonomy)) {
								return '';
							}
							$terms = get_the_terms($post_id, $taxonomy);
							return is_array($terms) ? implode(', ', wp_list_pluck($terms, 'name')) : '';
						},
					],
					'comment_count' => [
						'label'   => __('Comment Count', 'blockive-premium-addon-for-block-pro'),
						'resolve' => function ($post_id) {
							return $post_id ? (string) get_comments_number($post_id) : '';
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
						'paramLabel' => __('Image size', 'blockive-premium-addon-for-block-pro'),
						'paramHelp'  => __('Blank = full. E.g. thumbnail, medium, large', 'blockive-premium-addon-for-block-pro'),
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
						// The param is the meta key. We only show a value we
						// can safely turn into plain text - the same way
						// WordPress's own "Custom Fields" panel does. Some
						// plugins store an array instead of plain text, and
						// there is no safe way to show that as one string.
						// Refuse protected fields (names starting with _).
						'resolve'  => function ($post_id, $param) {
							if (!$post_id || $param === '' || is_protected_meta($param, 'post') || 0 === strpos($param, '_')) {
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
						// Accepts the common ways a custom field can store an
						// image: a plain attachment ID, an ACF-style array
						// (with a 'url', or an 'ID'/'id' handled below), or
						// a URL that is already complete.
						// Refuse protected fields (names starting with _).
						'resolve'  => function ($post_id, $param) {
							if (!$post_id || $param === '' || is_protected_meta($param, 'post') || 0 === strpos($param, '_')) {
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
						'paramLabel' => __('Size (px)', 'blockive-premium-addon-for-block-pro'),
						'paramHelp'  => __('Blank = 96', 'blockive-premium-addon-for-block-pro'),
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
			'user' => [
				// The visitor who is logged in, not the post author. A page
				// cache must not serve these to other visitors.
				'label' => __('Logged-in User', 'blockive-premium-addon-for-block-pro'),
				'tags'  => [
					'user_display_name' => ['label' => __('Display Name', 'blockive-premium-addon-for-block-pro'), 'resolve' => function () {
						return is_user_logged_in() ? wp_get_current_user()->display_name : '';
					}],
					'user_first_name' => ['label' => __('First Name', 'blockive-premium-addon-for-block-pro'), 'resolve' => function () {
						return is_user_logged_in() ? wp_get_current_user()->first_name : '';
					}],
					'user_last_name' => ['label' => __('Last Name', 'blockive-premium-addon-for-block-pro'), 'resolve' => function () {
						return is_user_logged_in() ? wp_get_current_user()->last_name : '';
					}],
					'user_avatar_url' => ['label' => __('Avatar URL', 'blockive-premium-addon-for-block-pro'), 'type' => 'image', 'resolve' => function () {
						return is_user_logged_in() ? (string) get_avatar_url(get_current_user_id(), ['size' => 96]) : '';
					}],
				],
			],
			'request' => [
				'label' => __('Date & Request', 'blockive-premium-addon-for-block-pro'),
				'tags'  => [
					'current_date' => [
						'label'     => __('Current Date & Time', 'blockive-premium-addon-for-block-pro'),
						'hasParam'  => true,
						'paramLabel' => __('Date format', 'blockive-premium-addon-for-block-pro'),
						'paramHelp'  => __('Blank uses the site\'s date format. E.g. l, F j or g:i a', 'blockive-premium-addon-for-block-pro'),
						'resolve'   => function ($post_id, $param) {
							return wp_date($param !== '' ? $param : get_option('date_format'));
						},
					],
					'request_param' => [
						'label'     => __('URL Parameter', 'blockive-premium-addon-for-block-pro'),
						'hasParam'  => true,
						'paramLabel' => __('Parameter name', 'blockive-premium-addon-for-block-pro'),
						'paramHelp'  => __('E.g. utm_campaign for ?utm_campaign=spring. Only letters, numbers, spaces, and - _ . , @ + are kept.', 'blockive-premium-addon-for-block-pro'),
						// Visitor-supplied, so reduced to plain characters: it can
						// then never form markup or a javascript: link, whatever
						// setting it is placed in.
						'resolve'   => function ($post_id, $param) {
							$key = sanitize_key($param);
							// phpcs:ignore WordPress.Security.NonceVerification.Recommended -- read-only display of a public query argument.
							if ('' === $key || !isset($_GET[$key]) || !is_string($_GET[$key])) {
								return '';
							}
							// phpcs:ignore WordPress.Security.NonceVerification.Recommended
							$value = sanitize_text_field(wp_unslash($_GET[$key]));
							return mb_substr(preg_replace('/[^\p{L}\p{N} _.,@+-]/u', '', $value), 0, 200);
						},
					],
				],
			],
			'archive' => [
				'label' => __('Archive', 'blockive-premium-addon-for-block-pro'),
				'tags'  => [
					'archive_url' => [
						'label'   => __('Archive URL', 'blockive-premium-addon-for-block-pro'),
						'resolve' => function () {
							$object = get_queried_object();
							if ($object instanceof WP_Term) {
								$link = get_term_link($object);
								return is_wp_error($link) ? '' : $link;
							}
							if ($object instanceof WP_User) {
								return get_author_posts_url($object->ID);
							}
							if ($object instanceof WP_Post_Type) {
								return (string) get_post_type_archive_link($object->name);
							}
							return '';
						},
					],
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
		 * Lets other code add its own groups and tags to the Dynamic Tags
		 * list. This is the same "add features without editing the plugin's
		 * own files" idea as Bpafb_Template_Blocks::register_block_name().
		 *
		 * @param array $registry Group => {label, tags: {tag_key => {label, hasParam, resolve}}}.
		 */
		return apply_filters('blockive_pro_dynamic_tags_registry', $registry);
	}

	/**
	 * A flat tag_key => resolver list, built once per page load.
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
	 * Finds the post ID a tag should use. Uses the block's own context
	 * first, if it has a postId (the same order every Template Block
	 * uses). Otherwise, falls back to the main post being viewed.
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
	 * Replaces every `{{tag}}` or `{{tag:param}}` found in $text.
	 *
	 * $escape stays off by default for render_dynamic_field_block(), which
	 * resolves one token at a time and escapes the whole result itself
	 * afterward (esc_url() for an image tag, esc_html() otherwise) - the
	 * correct approach when only one call site touches the value. But
	 * resolve_block_tokens() below substitutes tokens straight into HTML
	 * that has already been rendered, in whatever text or attribute context
	 * the token happens to sit in, so it needs each value escaped right
	 * here, per tag, before it goes back into that string. Tag data isn't
	 * always author-controlled (e.g. `{{author_bio}}` reads a profile field
	 * a lower-privileged user can set) and has to be treated the same as
	 * any other untrusted output.
	 *
	 * @param string        $text   Text potentially containing tokens.
	 * @param WP_Block|null $block  Block instance, for context-aware tags.
	 * @param bool          $escape Escape each resolved value before substituting it back in.
	 * @return string
	 */
	public static function resolve_string($text, $block = null, $escape = false)
	{
		if (strpos($text, '{{') === false) {
			return $text;
		}

		$tags    = self::flat_tags();
		$post_id = self::current_post_id($block);

		return preg_replace_callback(
			self::TOKEN_PATTERN,
			function ($matches) use ($tags, $post_id, $escape) {
				$key = $matches[1];
				if (!isset($tags[$key])) {
					return $matches[0];
				}
				$param    = isset($matches[2]) ? $matches[2] : '';
				$resolved = (string) call_user_func($tags[$key]['resolve'], $post_id, $param);

				if (!$escape) {
					return $resolved;
				}

				$is_image = 'image' === ($tags[$key]['type'] ?? 'text');
				return $is_image ? esc_url($resolved) : esc_html($resolved);
			},
			$text
		);
	}

	/**
	 * Replaces tokens in a Blockive block's HTML, after it has rendered.
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
		return self::resolve_string($block_content, null, true);
	}

	/**
	 * Registers the real "Dynamic Field" block. The free plugin only has a
	 * locked teaser version of this block (see
	 * pro-teasers/block-list.js). This real one shows any tag's value
	 * directly, for cases no other block's own setting already covers.
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
			// Must match the JS registration's `supports` exactly
			// (src/dynamic-tags/index.js). This gives the block real
			// typography, color, and spacing settings, instead of a plain
			// unstyled <span>. get_block_wrapper_attributes(), in
			// render_dynamic_field_block() below, is what actually turns
			// these settings into a class and inline style on the HTML.
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

		// Adds the class(es) and inline style from the typography, color,
		// spacing, and custom-class settings onto the wrapper. Without
		// this, those settings would show a preview in the editor but do
		// nothing on the live site.
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
	 * Loads the Dynamic Tags editor files, and sends the tag list to the
	 * browser (only labels and which tags take a param - the resolver
	 * functions stay on the server).
	 *
	 * This loads on every block editor screen, not just the Template
	 * Builder: Heading, Button, and Image Box are normal blocks used on
	 * any Post, Page, or Product, not just Template Blocks. It does not
	 * depend on the free plugin's `bpafb-template-blocks` file, since that
	 * only loads on the Template Builder screen, and a script that depends
	 * on a file loaded nowhere else would be silently skipped too.
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

		if (file_exists(BPAFB_PRO_PATH . 'build/dynamic-tags/index.css')) {
			wp_enqueue_style(
				'bpafb-pro-dynamic-tags',
				BPAFB_PRO_URL . 'build/dynamic-tags/index.css',
				['wp-components'],
				$asset['version']
			);
		}

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
							'paramLabel' => $tag['paramLabel'] ?? '',
							'paramHelp'  => $tag['paramHelp'] ?? '',
							// Marks the two tags where the user types their
							// own meta key, so the editor can show a picker
							// of the current post's known meta keys instead
							// of a blank text field.
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
