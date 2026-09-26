<?php
/**
 * Custom Attributes: any HTML attributes on a Blockive block's outer
 * element, entered as `key|value` lines in the block's Advanced panel
 * (src/custom-attributes). Like Elementor Pro's feature of the same name.
 *
 * The attribute is added to every Blockive block on the server (the editor
 * picks it up from the server's block definitions), and applied in
 * render_block. Anything that could run script or change the page's
 * structure is left out: event handlers (on*), style, id, class, and URL
 * attributes (href, src, action, ...).
 *
 * @package BlockivePro
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

class Bpafb_Pro_Custom_Attributes
{
	const ATTRIBUTE = 'bpafbCustomAttributes';
	const SCRIPT = 'bpafb-pro-custom-attributes';
	const NAMESPACE_PREFIX = 'blockive-premium-addon-for-block/';

	/**
	 * Attribute names that are never applied (lowercase). Event handlers
	 * (on*) are refused separately.
	 */
	const BLOCKED = ['style', 'id', 'class', 'href', 'src', 'srcset', 'srcdoc', 'action', 'formaction', 'xlink:href', 'data', 'poster', 'background', 'codebase', 'dynsrc', 'lowsrc', 'ping'];

	/**
	 * Attributes added to every Blockive block outside block.json (name =>
	 * schema): this class's own, and the ones other features share through
	 * share_attribute() (Bpafb_Pro_Sticky, Bpafb_Pro_Motion). The editor
	 * gets them from src/custom-attributes.
	 *
	 * @var array<string,array>
	 */
	private static $shared_attributes = [self::ATTRIBUTE => ['type' => 'string', 'default' => '']];

	/**
	 * @var Bpafb_Pro_Custom_Attributes|null
	 */
	private static $instance = null;

	/**
	 * @return Bpafb_Pro_Custom_Attributes
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
		add_filter('register_block_type_args', [$this, 'add_attribute'], 10, 2);
		add_filter('render_block', [$this, 'apply'], 10, 2);
		add_action('enqueue_block_editor_assets', [$this, 'enqueue_editor_assets']);
	}

	private function __clone()
	{
	}

	public function __wakeup()
	{
		throw new \Exception('Cannot unserialize a singleton.');
	}

	/**
	 * Adds an attribute to every Blockive block (call before blocks are
	 * registered, e.g. from a constructor).
	 *
	 * @param string $name   Attribute name.
	 * @param array  $schema Attribute schema.
	 */
	public static function share_attribute($name, $schema)
	{
		self::$shared_attributes[$name] = $schema;
	}

	/**
	 * @param array  $args       Block type arguments.
	 * @param string $block_name Block name.
	 * @return array
	 */
	public function add_attribute($args, $block_name)
	{
		if (0 === strpos($block_name, self::NAMESPACE_PREFIX)) {
			$args['attributes'] = array_merge(isset($args['attributes']) ? $args['attributes'] : [], self::$shared_attributes);
		}
		return $args;
	}

	/**
	 * A tag processor at a rendered block's outer element: the first tag
	 * that is not a <style>, <script>, or <link> the block prints before
	 * it (for its scoped CSS, for example). Null when there is none.
	 *
	 * @param string $html Rendered block.
	 * @return WP_HTML_Tag_Processor|null
	 */
	public static function outer_element($html)
	{
		$processor = new WP_HTML_Tag_Processor($html);
		while ($processor->next_tag()) {
			if (!in_array($processor->get_tag(), ['STYLE', 'SCRIPT', 'LINK'], true)) {
				return $processor;
			}
		}
		return null;
	}

	/**
	 * `key|value` lines to a clean name => value list.
	 *
	 * @param string $text Lines as entered.
	 * @return array<string,string>
	 */
	public static function parse($text)
	{
		$attributes = [];
		foreach (preg_split('/\r\n|\r|\n/', (string) $text) as $line) {
			$line = trim($line);
			if ('' === $line) {
				continue;
			}
			$parts = explode('|', $line, 2);
			$name = strtolower(trim($parts[0]));
			if (!preg_match('/^[a-z_:][a-z0-9_.:-]*$/', $name) || 0 === strpos($name, 'on') || in_array($name, self::BLOCKED, true)) {
				continue;
			}
			$attributes[$name] = isset($parts[1]) ? trim($parts[1]) : '';
		}
		return $attributes;
	}

	/**
	 * Adds the attributes to the block's first element (after any leading
	 * <style> the block prints for its scoped CSS). Existing attributes
	 * are left alone.
	 *
	 * @param string $content Rendered block.
	 * @param array  $block   Parsed block.
	 * @return string
	 */
	public function apply($content, $block)
	{
		if (empty($block['attrs'][self::ATTRIBUTE]) || empty($block['blockName']) || 0 !== strpos($block['blockName'], self::NAMESPACE_PREFIX) || '' === trim($content)) {
			return $content;
		}
		$attributes = self::parse($block['attrs'][self::ATTRIBUTE]);
		if (!$attributes) {
			return $content;
		}

		$processor = self::outer_element($content);
		if (!$processor) {
			return $content;
		}
		foreach ($attributes as $name => $value) {
			if (null === $processor->get_attribute($name)) {
				// Escaped by the tag processor.
				$processor->set_attribute($name, '' === $value ? true : $value);
			}
		}
		return $processor->get_updated_html();
	}

	/**
	 * Loads the editor control. Its `blocks.registerBlockType` filter has
	 * to run before any Blockive block registers (a block's block.json
	 * attributes replace the server's list in the editor), so every
	 * Blockive editor script is made to depend on it (see make_dependency()).
	 */
	public function enqueue_editor_assets()
	{
		$asset_file = BPAFB_PRO_PATH . 'build/custom-attributes/index.asset.php';
		if (!file_exists($asset_file)) {
			return;
		}
		$asset = require $asset_file;
		wp_enqueue_script(self::SCRIPT, BPAFB_PRO_URL . 'build/custom-attributes/index.js', $asset['dependencies'], $asset['version'], true);
		add_action('admin_print_scripts', [$this, 'make_dependency'], 1);
	}

	/**
	 * Makes every script loaded from this plugin's build/ folder (block
	 * editor scripts and the combined Template Block bundles) depend on
	 * the Custom Attributes script, so its filter is in place first.
	 */
	public function make_dependency()
	{
		$scripts = wp_scripts();
		$build = BPAFB_PRO_URL . 'build/';
		foreach ($scripts->registered as $handle => $script) {
			if (self::SCRIPT === $handle || !is_string($script->src) || 0 !== strpos($script->src, $build) || in_array(self::SCRIPT, $script->deps, true)) {
				continue;
			}
			// Front-end view scripts are not loaded in the editor.
			if (false !== strpos($script->src, '/view.js')) {
				continue;
			}
			$script->deps[] = self::SCRIPT;
		}
	}
}
