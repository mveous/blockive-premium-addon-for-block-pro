<?php
/**
 * Site Tools (Blockive Templates → Site Tools), like Elementor Pro's site
 * settings:
 *
 * - Custom Code: snippets printed in <head>, right after <body> opens, and
 *   before </body> on every front-end page. Only users who may post
 *   unfiltered HTML can see or change them.
 * - Element Manager: Blockive blocks turned off here are hidden from the
 *   inserter. Blocks already on pages keep working.
 * - Page Transitions: a fade between pages with the browser's own View
 *   Transitions (no script; skipped for reduced motion).
 * - Custom Fonts: see Bpafb_Pro_Custom_Fonts.
 *
 * @package BlockivePro
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

class Bpafb_Pro_Site_Tools
{
	const PAGE = 'bpafb-site-tools';
	const OPTION_CODE = 'bpafb_pro_custom_code';
	const OPTION_DISABLED = 'bpafb_pro_disabled_blocks';
	const OPTION_TRANSITIONS = 'bpafb_pro_page_transitions';
	const NAMESPACE_PREFIX = 'blockive-premium-addon-for-block/';
	const CODE_PLACES = ['head', 'body', 'footer'];

	/**
	 * @var Bpafb_Pro_Site_Tools|null
	 */
	private static $instance = null;

	/**
	 * @return Bpafb_Pro_Site_Tools
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
		add_action('admin_menu', [$this, 'add_page']);
		add_action('admin_init', [$this, 'register_settings']);
		add_filter('register_block_type_args', [$this, 'hide_disabled_blocks'], 20, 2);
		// After Bpafb_Pro_Custom_Attributes enqueues its script (10).
		add_action('enqueue_block_editor_assets', [$this, 'pass_hidden_blocks'], 11);

		add_action('wp_head', [$this, 'print_head'], 99);
		add_action('wp_body_open', [$this, 'print_body'], 1);
		add_action('wp_footer', [$this, 'print_footer'], 99);
	}

	private function __clone()
	{
	}

	public function __wakeup()
	{
		throw new \Exception('Cannot unserialize a singleton.');
	}

	// -- Settings ------------------------------------------------------------

	public function add_page()
	{
		add_submenu_page(
			'edit.php?post_type=' . Bpafb_Template_Post_Type::POST_TYPE,
			__('Site Tools', 'blockive-premium-addon-for-block-pro'),
			__('Site Tools', 'blockive-premium-addon-for-block-pro'),
			'manage_options',
			self::PAGE,
			[$this, 'render_page']
		);
	}

	public function register_settings()
	{
		register_setting(self::PAGE, self::OPTION_CODE, [
			'type'              => 'array',
			'sanitize_callback' => [$this, 'sanitize_code'],
			'default'           => [],
		]);
		register_setting(self::PAGE, self::OPTION_DISABLED, [
			'type'              => 'array',
			'sanitize_callback' => [$this, 'sanitize_disabled'],
			'default'           => [],
		]);
		register_setting(self::PAGE, Bpafb_Pro_Custom_Fonts::OPTION, [
			'type'              => 'array',
			'sanitize_callback' => ['Bpafb_Pro_Custom_Fonts', 'sanitize'],
			'default'           => [],
		]);
		register_setting(self::PAGE, self::OPTION_TRANSITIONS, [
			'type'              => 'array',
			'sanitize_callback' => [$this, 'sanitize_transitions'],
			'default'           => [],
		]);
	}

	/**
	 * Keeps the saved code unless the user may post unfiltered HTML (the
	 * code is printed as it is, script included).
	 *
	 * @param mixed $value Submitted value.
	 * @return array
	 */
	public function sanitize_code($value)
	{
		$saved = get_option(self::OPTION_CODE, []);
		if (!current_user_can('unfiltered_html')) {
			return is_array($saved) ? $saved : [];
		}
		$clean = [];
		foreach (self::CODE_PLACES as $place) {
			$clean[$place] = isset($value[$place]) && is_string($value[$place]) ? $value[$place] : '';
		}
		return $clean;
	}

	/**
	 * @param mixed $value Submitted block names.
	 * @return string[]
	 */
	public function sanitize_disabled($value)
	{
		$names = [];
		foreach ((array) $value as $name) {
			$name = (string) $name;
			if (0 === strpos($name, self::NAMESPACE_PREFIX) && preg_match('#^[a-z0-9-]+/[a-z0-9-]+$#', $name)) {
				$names[] = $name;
			}
		}
		return array_values(array_unique($names));
	}

	/**
	 * @param mixed $value Submitted settings.
	 * @return array
	 */
	public function sanitize_transitions($value)
	{
		return [
			'enabled'  => !empty($value['enabled']),
			'duration' => isset($value['duration']) ? max(100, min(1500, (int) $value['duration'])) : 300,
		];
	}

	// -- Element Manager -----------------------------------------------------

	/**
	 * @param array  $args       Block type arguments.
	 * @param string $block_name Block name.
	 * @return array
	 */
	public function hide_disabled_blocks($args, $block_name)
	{
		static $disabled = null;
		if (0 !== strpos($block_name, self::NAMESPACE_PREFIX)) {
			return $args;
		}
		if (null === $disabled) {
			$disabled = array_flip((array) get_option(self::OPTION_DISABLED, []));
		}
		if (isset($disabled[$block_name])) {
			$args['supports'] = array_merge(isset($args['supports']) ? $args['supports'] : [], ['inserter' => false]);
		}
		return $args;
	}

	/**
	 * Blocks to leave out of the inserter: turned off here, or needing
	 * WooCommerce when it is not active.
	 *
	 * @return string[]
	 */
	public static function hidden_blocks()
	{
		$hidden = (array) get_option(self::OPTION_DISABLED, []);
		if (!class_exists('WooCommerce') && class_exists('Bpafb_Pro_Woo_Blocks')) {
			$hidden = array_merge($hidden, Bpafb_Pro_Woo_Blocks::WOO_ONLY_BLOCKS);
		}
		return array_values(array_unique($hidden));
	}

	/**
	 * The editor registers blocks from their own block.json, so the
	 * server's "inserter: false" does not reach it. The list goes to the
	 * Custom Attributes script, which loads before every Blockive block
	 * and applies it (src/custom-attributes/hidden-blocks.js).
	 */
	public function pass_hidden_blocks()
	{
		wp_add_inline_script(
			Bpafb_Pro_Custom_Attributes::SCRIPT,
			'window.bpafbProHiddenBlocks = ' . wp_json_encode(self::hidden_blocks()) . ';',
			'before'
		);
	}

	/**
	 * Blockive blocks a site owner would add (not template-only pieces or
	 * child blocks), sorted by title.
	 *
	 * @return WP_Block_Type[]
	 */
	private static function manageable_blocks()
	{
		$blocks = [];
		foreach (WP_Block_Type_Registry::get_instance()->get_all_registered() as $name => $type) {
			if (0 !== strpos($name, self::NAMESPACE_PREFIX) || !empty($type->parent) || 0 === strpos($name, self::NAMESPACE_PREFIX . 'tb-')) {
				continue;
			}
			$blocks[] = $type;
		}
		usort($blocks, function ($a, $b) {
			return strcasecmp((string) $a->title, (string) $b->title);
		});
		return $blocks;
	}

	// -- Front end -------------------------------------------------------------

	/**
	 * @param string $place head, body, or footer.
	 * @return string
	 */
	private static function code($place)
	{
		$code = get_option(self::OPTION_CODE, []);
		return is_array($code) && isset($code[$place]) ? (string) $code[$place] : '';
	}

	public function print_head()
	{
		if (is_admin()) {
			return;
		}
		$transitions = get_option(self::OPTION_TRANSITIONS, []);
		if (!empty($transitions['enabled'])) {
			$duration = isset($transitions['duration']) ? (int) $transitions['duration'] : 300;
			printf(
				'<style id="bpafb-page-transitions">@media (prefers-reduced-motion: no-preference) { @view-transition { navigation: auto; } ::view-transition-old(root), ::view-transition-new(root) { animation-duration: %dms; } }</style>' . "\n",
				max(100, min(1500, $duration))
			);
		}
		echo self::code('head'); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- saved only by users with unfiltered_html.
	}

	public function print_body()
	{
		if (!is_admin()) {
			echo self::code('body'); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- saved only by users with unfiltered_html.
		}
	}

	public function print_footer()
	{
		if (!is_admin()) {
			echo self::code('footer'); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- saved only by users with unfiltered_html.
		}
	}

	// -- Page ------------------------------------------------------------------

	public function render_page()
	{
		if (!current_user_can('manage_options')) {
			return;
		}
		$code = get_option(self::OPTION_CODE, []);
		$disabled = array_flip((array) get_option(self::OPTION_DISABLED, []));
		$transitions = wp_parse_args(get_option(self::OPTION_TRANSITIONS, []), ['enabled' => false, 'duration' => 300]);
		$can_code = current_user_can('unfiltered_html');
		$labels = [
			'head'   => __('Inside <head>', 'blockive-premium-addon-for-block-pro'),
			'body'   => __('Right after <body> opens', 'blockive-premium-addon-for-block-pro'),
			'footer' => __('Before </body>', 'blockive-premium-addon-for-block-pro'),
		];
		?>
		<div class="wrap">
			<h1><?php esc_html_e('Site Tools', 'blockive-premium-addon-for-block-pro'); ?></h1>
			<?php settings_errors(); ?>
			<form method="post" action="options.php">
				<?php settings_fields(self::PAGE); ?>

				<h2><?php esc_html_e('Custom Code', 'blockive-premium-addon-for-block-pro'); ?></h2>
				<?php if ($can_code) : ?>
					<p><?php esc_html_e('Printed on every page of the site as entered, for analytics, verification tags, chat widgets, and the like. Code that breaks the page can be removed here again.', 'blockive-premium-addon-for-block-pro'); ?></p>
					<table class="form-table" role="presentation">
						<?php foreach (self::CODE_PLACES as $place) : ?>
							<tr>
								<th scope="row"><label for="bpafb-code-<?php echo esc_attr($place); ?>"><?php echo esc_html($labels[$place]); ?></label></th>
								<td><textarea id="bpafb-code-<?php echo esc_attr($place); ?>" name="<?php echo esc_attr(self::OPTION_CODE . '[' . $place . ']'); ?>" rows="6" class="large-text code" spellcheck="false"><?php echo esc_textarea(isset($code[$place]) ? $code[$place] : ''); ?></textarea></td>
							</tr>
						<?php endforeach; ?>
					</table>
				<?php else : ?>
					<p><?php esc_html_e('Only users who may add unfiltered HTML (usually administrators) can see or change custom code.', 'blockive-premium-addon-for-block-pro'); ?></p>
				<?php endif; ?>

				<h2><?php esc_html_e('Page Transitions', 'blockive-premium-addon-for-block-pro'); ?></h2>
				<table class="form-table" role="presentation">
					<tr>
						<th scope="row"><?php esc_html_e('Fade Between Pages', 'blockive-premium-addon-for-block-pro'); ?></th>
						<td>
							<label><input type="checkbox" name="<?php echo esc_attr(self::OPTION_TRANSITIONS); ?>[enabled]" value="1" <?php checked(!empty($transitions['enabled'])); ?>> <?php esc_html_e('Fade from one page to the next', 'blockive-premium-addon-for-block-pro'); ?></label>
							<p class="description"><?php esc_html_e('Uses the browser\'s own page transitions (Chrome, Edge, Safari); other browsers change pages as usual. Visitors who turn off animations see no fade.', 'blockive-premium-addon-for-block-pro'); ?></p>
						</td>
					</tr>
					<tr>
						<th scope="row"><label for="bpafb-transition-duration"><?php esc_html_e('Duration (ms)', 'blockive-premium-addon-for-block-pro'); ?></label></th>
						<td><input id="bpafb-transition-duration" type="number" min="100" max="1500" step="50" class="small-text" name="<?php echo esc_attr(self::OPTION_TRANSITIONS); ?>[duration]" value="<?php echo esc_attr((int) $transitions['duration']); ?>"></td>
					</tr>
				</table>

				<?php Bpafb_Pro_Custom_Fonts::render_section(); ?>

				<h2><?php esc_html_e('Element Manager', 'blockive-premium-addon-for-block-pro'); ?></h2>
				<p><?php esc_html_e('Turned-off blocks are hidden from the block inserter. Blocks already on pages keep working and can still be edited.', 'blockive-premium-addon-for-block-pro'); ?></p>
				<fieldset>
					<legend class="screen-reader-text"><?php esc_html_e('Blocks', 'blockive-premium-addon-for-block-pro'); ?></legend>
					<div style="columns: 16em; column-gap: 2em;">
						<?php foreach (self::manageable_blocks() as $type) : ?>
							<label style="display: block; margin: 0 0 8px; break-inside: avoid;">
								<input type="checkbox" name="<?php echo esc_attr(self::OPTION_DISABLED); ?>[]" value="<?php echo esc_attr($type->name); ?>" <?php checked(isset($disabled[$type->name])); ?>>
								<?php
								/* translators: %s: block title. */
								printf(esc_html__('Turn off %s', 'blockive-premium-addon-for-block-pro'), '<strong>' . esc_html($type->title ? $type->title : $type->name) . '</strong>');
								?>
							</label>
						<?php endforeach; ?>
					</div>
				</fieldset>

				<?php submit_button(); ?>
			</form>
		</div>
		<?php
	}
}
