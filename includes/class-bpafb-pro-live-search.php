<?php
/**
 * Live results for the Search Form block: a public REST endpoint that
 * returns the first few published matches as plain data (title, link,
 * type, thumbnail, short excerpt, product price). The block's view.js
 * shows them under the field as the visitor types.
 *
 * Only searchable, public post types are searched, and only published
 * posts without a password are returned, so it shows nothing a visitor
 * could not find on the regular search results page.
 *
 * @package BlockivePro
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

class Bpafb_Pro_Live_Search
{
	const REST_NS = 'blockive-pro/v1';
	const ROUTE = '/live-search';
	const MAX_RESULTS = 10;

	/**
	 * @var Bpafb_Pro_Live_Search|null
	 */
	private static $instance = null;

	/**
	 * @return Bpafb_Pro_Live_Search
	 */
	public static function get_instance()
	{
		if (null === self::$instance) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	private function __construct()
	{
		add_action('rest_api_init', [$this, 'register_route']);
	}

	private function __clone()
	{
	}

	public function __wakeup()
	{
		throw new \Exception('Cannot unserialize a singleton.');
	}

	/**
	 * The endpoint URL, for the block's markup.
	 *
	 * @return string
	 */
	public static function url()
	{
		return rest_url(self::REST_NS . self::ROUTE);
	}

	public function register_route()
	{
		register_rest_route(self::REST_NS, self::ROUTE, [
			'methods'             => WP_REST_Server::READABLE,
			'callback'            => [$this, 'search'],
			'permission_callback' => '__return_true',
			'args'                => [
				's'         => [
					'type'              => 'string',
					'required'          => true,
					'sanitize_callback' => 'sanitize_text_field',
				],
				'post_type' => [
					'type'              => 'string',
					'default'           => '',
					'sanitize_callback' => 'sanitize_key',
				],
				'per_page'  => [
					'type'    => 'integer',
					'default' => 5,
					'minimum' => 1,
					'maximum' => self::MAX_RESULTS,
				],
				'excerpt'   => [
					'type'    => 'boolean',
					'default' => false,
				],
			],
		]);
	}

	/**
	 * Post types a visitor can search: the requested one if it is
	 * searchable, otherwise all searchable ones.
	 *
	 * @param string $requested Requested post type slug.
	 * @return string[]
	 */
	private static function post_types($requested)
	{
		$searchable = get_post_types(['public' => true, 'exclude_from_search' => false]);
		unset($searchable['attachment']);
		if ($requested && isset($searchable[$requested])) {
			return [$requested];
		}
		return array_values($searchable);
	}

	/**
	 * @param WP_REST_Request $request Request.
	 * @return WP_REST_Response
	 */
	public function search($request)
	{
		$term = trim((string) $request['s']);
		$types = self::post_types($request['post_type']);
		if ('' === $term || !$types) {
			return rest_ensure_response(['results' => [], 'total' => 0]);
		}

		$args = [
			's'                   => $term,
			'post_type'           => $types,
			'post_status'         => 'publish',
			'has_password'        => false,
			'posts_per_page'      => (int) $request['per_page'],
			'ignore_sticky_posts' => true,
			'no_found_rows'       => false,
		];
		// WooCommerce hides these from its search only on the main query.
		if (in_array('product', $types, true) && taxonomy_exists('product_visibility')) {
			$args['tax_query'] = [[
				'taxonomy' => 'product_visibility',
				'field'    => 'name',
				'terms'    => ['exclude-from-search'],
				'operator' => 'NOT IN',
			]];
		}
		$query = new WP_Query($args);

		$results = [];
		foreach ($query->posts as $post) {
			$results[] = $this->item($post, !empty($request['excerpt']));
		}

		$response = rest_ensure_response([
			'results' => $results,
			'total'   => (int) $query->found_posts,
		]);
		// Results are public; let browsers reuse them briefly.
		$response->header('Cache-Control', 'public, max-age=60');
		return $response;
	}

	/**
	 * One result as plain text fields (the browser inserts them as text).
	 *
	 * @param WP_Post $post    Post.
	 * @param bool    $excerpt Include a short excerpt.
	 * @return array
	 */
	private function item($post, $excerpt)
	{
		$plain = function ($html) {
			return trim(html_entity_decode(wp_strip_all_tags((string) $html), ENT_QUOTES, get_bloginfo('charset')));
		};
		$type = get_post_type_object($post->post_type);

		$item = [
			'id'    => $post->ID,
			'title' => $plain(get_the_title($post)),
			'url'   => get_permalink($post),
			'type'  => $type ? $type->labels->singular_name : '',
			'image' => (string) get_the_post_thumbnail_url($post, 'thumbnail'),
		];
		if ($excerpt) {
			$text = has_excerpt($post) ? $post->post_excerpt : strip_shortcodes($post->post_content);
			$item['excerpt'] = wp_trim_words($plain(excerpt_remove_blocks($text)), 14, '…');
		}
		if ('product' === $post->post_type && function_exists('wc_get_product')) {
			$product = wc_get_product($post);
			if ($product) {
				$item['price'] = $plain($product->get_price_html());
			}
		}
		return $item;
	}
}
