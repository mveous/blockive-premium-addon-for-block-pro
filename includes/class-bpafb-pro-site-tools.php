<?php
/**
 * Site Tools (Blockive Templates → Site Tools):
 *
 * - Custom Code: snippets printed in <head>, right after <body> opens, and
 *   before </body> on every front-end page. Only users who may post
 *   unfiltered HTML can see or change them.
 * - Element Manager: Blockive blocks turned off here are hidden from the
 *   inserter. Blocks already on pages keep working.
 * - Page Transitions: a fade between pages with the browser's own View
 *   Transitions (no script; skipped for reduced motion).
 * - Custom Fonts: see Bpafb_Pro_Custom_Fonts.
 * - Template Builder Access: see Bpafb_Pro_Role_Manager.
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
		add_action('admin_enqueue_scripts', [$this, 'enqueue_admin_assets']);
		add_filter('register_block_type_args', [$this, 'hide_disabled_blocks'], 20, 2);
		// After Bpafb_Pro_Custom_Attributes enqueues its script (10).
		add_action('enqueue_block_editor_assets', [$this, 'pass_hidden_blocks'], 11);

		add_action('wp_head', [$this, 'print_head'], 99);
		add_action('wp_body_open', [$this, 'print_body'], 1);
		add_action('wp_footer', [$this, 'print_footer'], 99);
	}

	public function enqueue_admin_assets($hook)
	{
		if (false === strpos((string) $hook, self::PAGE)) {
			return;
		}
		wp_enqueue_style(
			'bpafb-pro-admin-site-tools',
			plugins_url('assets/css/admin-site-tools.css', dirname(__FILE__)),
			[],
			BPAFB_PRO_VERSION
		);
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
		register_setting(self::PAGE, Bpafb_Pro_Role_Manager::OPTION, [
			'type'              => 'array',
			'sanitize_callback' => ['Bpafb_Pro_Role_Manager', 'sanitize'],
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
	 * @param mixed $value Submitted enabled block names.
	 * @return string[] Array of disabled block names to store.
	 */
	public function sanitize_disabled($value)
	{
		$all_names = wp_list_pluck(self::manageable_blocks(), 'name');
		$enabled = [];
		foreach ((array) $value as $name) {
			$name = (string) $name;
			if (0 === strpos($name, self::NAMESPACE_PREFIX) && preg_match('#^[a-z0-9-]+/[a-z0-9-]+$#', $name)) {
				$enabled[] = $name;
			}
		}
		return array_values(array_diff($all_names, $enabled));
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

	/**
	 * Categorizes a block name for Element Manager filtering.
	 *
	 * @param string $name Block name slug.
	 * @return string Category slug.
	 */
	private static function get_block_category($name)
	{
		$slug = str_replace(self::NAMESPACE_PREFIX, '', $name);
		if (false !== strpos($slug, 'product') || false !== strpos($slug, 'woo') || false !== strpos($slug, 'cart')) {
			return 'woocommerce';
		}
		if (false !== strpos($slug, 'loop') || false !== strpos($slug, 'grid') || false !== strpos($slug, 'portfolio') || false !== strpos($slug, 'archive')) {
			return 'loops';
		}
		if (false !== strpos($slug, 'menu') || false !== strpos($slug, 'search') || false !== strpos($slug, 'sitemap') || false !== strpos($slug, 'breadcrumb') || false !== strpos($slug, 'toc') || false !== strpos($slug, 'table-of-contents')) {
			return 'navigation';
		}
		if (false !== strpos($slug, 'carousel') || false !== strpos($slug, 'slides') || false !== strpos($slug, 'accordion') || false !== strpos($slug, 'tabs') || false !== strpos($slug, 'flip-box') || false !== strpos($slug, 'hotspot') || false !== strpos($slug, 'off-canvas') || false !== strpos($slug, 'form') || false !== strpos($slug, 'mailchimp')) {
			return 'interactive';
		}
		if (false !== strpos($slug, 'price') || false !== strpos($slug, 'pricing') || false !== strpos($slug, 'fun-fact') || false !== strpos($slug, 'progress') || false !== strpos($slug, 'testimonial') || false !== strpos($slug, 'review') || false !== strpos($slug, 'social') || false !== strpos($slug, 'countdown') || false !== strpos($slug, 'floating-button') || false !== strpos($slug, 'link-in-bio') || false !== strpos($slug, 'call-to-action')) {
			return 'marketing';
		}
		return 'content';
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
		$blocks = self::manageable_blocks();
		$total_blocks = count($blocks);
		$disabled_count = count(array_intersect_key($disabled, array_flip(wp_list_pluck($blocks, 'name'))));
		$active_count = max(0, $total_blocks - $disabled_count);

		$labels = [
			'head'   => __('Header Scripts (<head>)', 'blockive-premium-addon-for-block-pro'),
			'body'   => __('Body Open Scripts (<body>)', 'blockive-premium-addon-for-block-pro'),
			'footer' => __('Footer Scripts (Before </body>)', 'blockive-premium-addon-for-block-pro'),
		];
		$sublabels = [
			'head'   => __('Google Analytics, Tag Manager, verification tags, custom fonts', 'blockive-premium-addon-for-block-pro'),
			'body'   => __('GTM noscript fallback, tracking pixels placed right after body opens', 'blockive-premium-addon-for-block-pro'),
			'footer' => __('Live chat widgets, customer support beacons, conversion scripts', 'blockive-premium-addon-for-block-pro'),
		];
		?>
		<div class="wrap bpafb-dashboard-wrap">
			<!-- Header Banner -->
			<div class="bpafb-dashboard-header">
				<div class="bpafb-dashboard-brand">
					<div class="bpafb-dashboard-logo-icon">B</div>
					<div>
						<h1>
							<?php esc_html_e('Blockive Pro', 'blockive-premium-addon-for-block-pro'); ?>
							<span class="bpafb-badge-pro"><?php esc_html_e('Site Tools', 'blockive-premium-addon-for-block-pro'); ?></span>
						</h1>
						<p><?php esc_html_e('Configure site-wide scripts, custom fonts, transitions, permissions, and active blocks.', 'blockive-premium-addon-for-block-pro'); ?></p>
					</div>
				</div>
				<div class="bpafb-dashboard-header-actions">
					<a href="<?php echo esc_url(admin_url('edit.php?post_type=' . Bpafb_Template_Post_Type::POST_TYPE)); ?>" class="bpafb-btn-secondary">
						<span class="dashicons dashicons-layout" style="font-size: 16px; width: 16px; height: 16px; line-height: 16px;"></span>
						<?php esc_html_e('All Templates', 'blockive-premium-addon-for-block-pro'); ?>
					</a>
					<button type="button" class="bpafb-btn-primary bpafb-header-save-btn">
						<span class="dashicons dashicons-saved" style="font-size: 16px; width: 16px; height: 16px; line-height: 16px;"></span>
						<?php esc_html_e('Save Changes', 'blockive-premium-addon-for-block-pro'); ?>
					</button>
				</div>
			</div>

			<?php settings_errors(); ?>

			<form method="post" action="options.php" id="bpafb-site-tools-form">
				<?php settings_fields(self::PAGE); ?>

				<div class="bpafb-dashboard-body">
					<!-- Sidebar Tabs Navigation -->
					<div class="bpafb-nav-tabs" role="tablist">
						<button type="button" class="bpafb-tab-btn is-active" data-tab="custom-code" role="tab" aria-selected="true">
							<span class="bpafb-tab-icon dashicons dashicons-editor-code"></span>
							<span><?php esc_html_e('Custom Code', 'blockive-premium-addon-for-block-pro'); ?></span>
						</button>
						<button type="button" class="bpafb-tab-btn" data-tab="custom-fonts" role="tab" aria-selected="false">
							<span class="bpafb-tab-icon dashicons dashicons-editor-customchar"></span>
							<span><?php esc_html_e('Custom Fonts', 'blockive-premium-addon-for-block-pro'); ?></span>
						</button>
						<button type="button" class="bpafb-tab-btn" data-tab="page-transitions" role="tab" aria-selected="false">
							<span class="bpafb-tab-icon dashicons dashicons-image-rotate"></span>
							<span><?php esc_html_e('Page Transitions', 'blockive-premium-addon-for-block-pro'); ?></span>
						</button>
						<button type="button" class="bpafb-tab-btn" data-tab="role-manager" role="tab" aria-selected="false">
							<span class="bpafb-tab-icon dashicons dashicons-shield"></span>
							<span><?php esc_html_e('Role Access', 'blockive-premium-addon-for-block-pro'); ?></span>
						</button>
						<button type="button" class="bpafb-tab-btn" data-tab="element-manager" role="tab" aria-selected="false">
							<span class="bpafb-tab-icon dashicons dashicons-screenoptions"></span>
							<span><?php esc_html_e('Element Manager', 'blockive-premium-addon-for-block-pro'); ?></span>
						</button>
					</div>

					<!-- Tab Contents -->
					<div class="bpafb-tab-contents">
						<!-- 1. Custom Code Tab -->
						<div class="bpafb-tab-panel is-active" id="tab-custom-code">
							<div class="bpafb-card">
								<div class="bpafb-card-header">
									<div class="bpafb-card-header-left">
										<h2><?php esc_html_e('Custom Code Snippets', 'blockive-premium-addon-for-block-pro'); ?></h2>
										<p><?php esc_html_e('Inject scripts, tracking tags, and pixels site-wide without editing theme files.', 'blockive-premium-addon-for-block-pro'); ?></p>
									</div>
								</div>
								<div class="bpafb-card-body">
									<?php if ($can_code) : ?>
										<?php foreach (self::CODE_PLACES as $place) : ?>
											<div class="bpafb-code-block">
												<div class="bpafb-code-label">
													<span>
														<strong><?php echo esc_html($labels[$place]); ?></strong>
														<span style="font-size: 12px; color: var(--bpafb-slate-400); margin-left: 6px; font-weight: normal;"><?php echo esc_html($sublabels[$place]); ?></span>
													</span>
													<span class="bpafb-code-badge"><?php echo esc_html($place); ?></span>
												</div>
												<textarea id="bpafb-code-<?php echo esc_attr($place); ?>" name="<?php echo esc_attr(self::OPTION_CODE . '[' . $place . ']'); ?>" rows="6" class="bpafb-code-editor" spellcheck="false" placeholder="<?php esc_attr_e('<!-- Paste snippet here -->', 'blockive-premium-addon-for-block-pro'); ?>"><?php echo esc_textarea(isset($code[$place]) ? $code[$place] : ''); ?></textarea>
											</div>
										<?php endforeach; ?>
									<?php else : ?>
										<div style="background: var(--bpafb-slate-50); padding: 20px; border-radius: var(--bpafb-radius-md); border: 1px solid var(--bpafb-slate-200);">
											<p style="margin: 0; color: var(--bpafb-slate-600);"><?php esc_html_e('Only users with "unfiltered_html" capability (administrators) can view or modify custom code snippets.', 'blockive-premium-addon-for-block-pro'); ?></p>
										</div>
									<?php endif; ?>
								</div>
							</div>
						</div>

						<!-- 2. Custom Fonts Tab -->
						<div class="bpafb-tab-panel" id="tab-custom-fonts">
							<?php Bpafb_Pro_Custom_Fonts::render_section(); ?>
						</div>

						<!-- 3. Page Transitions Tab -->
						<div class="bpafb-tab-panel" id="tab-page-transitions">
							<div class="bpafb-card">
								<div class="bpafb-card-header">
									<div class="bpafb-card-header-left">
										<h2><?php esc_html_e('Native Page Transitions', 'blockive-premium-addon-for-block-pro'); ?></h2>
										<p><?php esc_html_e('Smooth, zero-JavaScript page transitions using the modern browser View Transitions API.', 'blockive-premium-addon-for-block-pro'); ?></p>
									</div>
								</div>
								<div class="bpafb-card-body">
									<div class="bpafb-transitions-row">
										<div>
											<strong style="display: block; font-size: 14px; margin-bottom: 4px;"><?php esc_html_e('Enable Page Fade Transition', 'blockive-premium-addon-for-block-pro'); ?></strong>
											<p style="margin: 0; font-size: 13px; color: var(--bpafb-slate-500);"><?php esc_html_e('Smoothly fades between pages in supporting browsers (Chrome, Edge, Safari). Users with "prefers-reduced-motion" automatically bypass animations.', 'blockive-premium-addon-for-block-pro'); ?></p>
										</div>
										<label class="bpafb-switch" title="<?php esc_attr_e('Toggle page transitions', 'blockive-premium-addon-for-block-pro'); ?>">
											<input type="checkbox" name="<?php echo esc_attr(self::OPTION_TRANSITIONS); ?>[enabled]" value="1" <?php checked(!empty($transitions['enabled'])); ?>>
											<span class="bpafb-slider"></span>
										</label>
									</div>

									<div class="bpafb-transitions-row">
										<div>
											<strong style="display: block; font-size: 14px; margin-bottom: 4px;"><?php esc_html_e('Transition Duration', 'blockive-premium-addon-for-block-pro'); ?></strong>
											<p style="margin: 0; font-size: 13px; color: var(--bpafb-slate-500);"><?php esc_html_e('Select the cross-fade animation duration in milliseconds (default: 300ms).', 'blockive-premium-addon-for-block-pro'); ?></p>
										</div>
										<div class="bpafb-range-slider">
											<input id="bpafb-transition-range" type="range" min="100" max="1200" step="50" value="<?php echo esc_attr((int) $transitions['duration']); ?>">
											<input id="bpafb-transition-duration" type="hidden" name="<?php echo esc_attr(self::OPTION_TRANSITIONS); ?>[duration]" value="<?php echo esc_attr((int) $transitions['duration']); ?>">
											<span class="bpafb-range-val" id="bpafb-transition-val"><?php echo esc_html((int) $transitions['duration'] . 'ms'); ?></span>
										</div>
									</div>
								</div>
							</div>
						</div>

						<!-- 4. Role Manager Tab -->
						<div class="bpafb-tab-panel" id="tab-role-manager">
							<?php Bpafb_Pro_Role_Manager::render_section(); ?>
						</div>

						<!-- 5. Element Manager Tab -->
						<div class="bpafb-tab-panel" id="tab-element-manager">
							<div class="bpafb-card">
								<div class="bpafb-card-header">
									<div class="bpafb-card-header-left">
										<h2>
											<?php esc_html_e('Block Element Manager', 'blockive-premium-addon-for-block-pro'); ?>
											<span style="font-size: 12px; font-weight: normal; color: var(--bpafb-slate-500); margin-left: 8px;" id="bpafb-active-count-text">
												(<?php printf(esc_html__('%d active of %d total', 'blockive-premium-addon-for-block-pro'), $active_count, $total_blocks); ?>)
											</span>
										</h2>
										<p><?php esc_html_e('Deactivate blocks you don\'t use to keep the block inserter clean and fast. Existing blocks on published pages remain working.', 'blockive-premium-addon-for-block-pro'); ?></p>
									</div>
									<div class="bpafb-header-actions" style="display: flex; gap: 8px;">
										<button type="button" class="bpafb-btn-secondary-sm" id="bpafb-enable-all-btn"><?php esc_html_e('Enable All', 'blockive-premium-addon-for-block-pro'); ?></button>
										<button type="button" class="bpafb-btn-secondary-sm" id="bpafb-disable-all-btn"><?php esc_html_e('Disable All', 'blockive-premium-addon-for-block-pro'); ?></button>
									</div>
								</div>
								<div class="bpafb-card-body">
									<div class="bpafb-elements-toolbar">
										<div class="bpafb-search-box">
											<span class="dashicons dashicons-search bpafb-search-icon"></span>
											<input type="text" class="bpafb-search-input" id="bpafb-block-search" placeholder="<?php esc_attr_e('Search blocks...', 'blockive-premium-addon-for-block-pro'); ?>">
										</div>
										<div class="bpafb-filter-chips">
											<button type="button" class="bpafb-chip-btn is-active" data-filter="all"><?php esc_html_e('All', 'blockive-premium-addon-for-block-pro'); ?> (<?php echo (int) $total_blocks; ?>)</button>
											<button type="button" class="bpafb-chip-btn" data-filter="content"><?php esc_html_e('Content', 'blockive-premium-addon-for-block-pro'); ?></button>
											<button type="button" class="bpafb-chip-btn" data-filter="interactive"><?php esc_html_e('Interactive', 'blockive-premium-addon-for-block-pro'); ?></button>
											<button type="button" class="bpafb-chip-btn" data-filter="navigation"><?php esc_html_e('Navigation', 'blockive-premium-addon-for-block-pro'); ?></button>
											<button type="button" class="bpafb-chip-btn" data-filter="loops"><?php esc_html_e('Loops & Query', 'blockive-premium-addon-for-block-pro'); ?></button>
											<button type="button" class="bpafb-chip-btn" data-filter="marketing"><?php esc_html_e('Marketing', 'blockive-premium-addon-for-block-pro'); ?></button>
											<button type="button" class="bpafb-chip-btn" data-filter="woocommerce"><?php esc_html_e('WooCommerce', 'blockive-premium-addon-for-block-pro'); ?></button>
										</div>
									</div>

									<fieldset>
										<legend class="screen-reader-text"><?php esc_html_e('Blocks List', 'blockive-premium-addon-for-block-pro'); ?></legend>
										<input type="hidden" name="<?php echo esc_attr(self::OPTION_DISABLED); ?>" value="">
										<div class="bpafb-blocks-grid" id="bpafb-blocks-grid">
											<?php foreach ($blocks as $type) : ?>
												<?php
												$is_disabled = isset($disabled[$type->name]);
												$category = self::get_block_category($type->name);
												$title = $type->title ? $type->title : $type->name;
												?>
												<div class="bpafb-block-card <?php echo $is_disabled ? 'is-disabled' : ''; ?>" data-name="<?php echo esc_attr(strtolower($title . ' ' . $type->name)); ?>" data-category="<?php echo esc_attr($category); ?>">
													<div class="bpafb-block-info">
														<span class="bpafb-block-title" title="<?php echo esc_attr($title); ?>"><?php echo esc_html($title); ?></span>
														<span class="bpafb-block-category"><?php echo esc_html($category); ?></span>
													</div>
													<label class="bpafb-switch" title="<?php printf(esc_attr__('Toggle %s block', 'blockive-premium-addon-for-block-pro'), esc_attr($title)); ?>">
														<input type="checkbox" class="bpafb-block-checkbox" name="<?php echo esc_attr(self::OPTION_DISABLED); ?>[]" value="<?php echo esc_attr($type->name); ?>" <?php checked(!$is_disabled); ?>>
														<span class="bpafb-slider"></span>
													</label>
												</div>
											<?php endforeach; ?>
										</div>
									</fieldset>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div style="margin-top: 24px; display: flex; justify-content: flex-end;">
					<button type="submit" class="bpafb-btn-primary" style="padding: 12px 28px; font-size: 14px;">
						<span class="dashicons dashicons-saved" style="font-size: 18px; width: 18px; height: 18px; line-height: 18px;"></span>
						<?php esc_html_e('Save Changes', 'blockive-premium-addon-for-block-pro'); ?>
					</button>
				</div>
			</form>
		</div>

		<script>
		( function () {
			// Tab Navigation
			var tabButtons = document.querySelectorAll( '.bpafb-tab-btn' );
			var tabPanels = document.querySelectorAll( '.bpafb-tab-panel' );
			function switchTab( targetId ) {
				tabButtons.forEach( function ( btn ) {
					var isActive = btn.getAttribute( 'data-tab' ) === targetId;
					btn.classList.toggle( 'is-active', isActive );
					btn.setAttribute( 'aria-selected', isActive ? 'true' : 'false' );
				} );
				tabPanels.forEach( function ( panel ) {
					panel.classList.toggle( 'is-active', panel.id === 'tab-' + targetId );
				} );
				if ( window.history && window.history.replaceState ) {
					window.history.replaceState( null, null, '#' + targetId );
				}
			}

			tabButtons.forEach( function ( btn ) {
				btn.addEventListener( 'click', function () {
					switchTab( this.getAttribute( 'data-tab' ) );
				} );
			} );

			// Check URL hash for initial tab
			var initialHash = window.location.hash ? window.location.hash.replace( '#', '' ) : 'custom-code';
			if ( document.getElementById( 'tab-' + initialHash ) ) {
				switchTab( initialHash );
			}

			// Header Save Button
			var headerSaveBtn = document.querySelector( '.bpafb-header-save-btn' );
			var form = document.getElementById( 'bpafb-site-tools-form' );
			if ( headerSaveBtn && form ) {
				headerSaveBtn.addEventListener( 'click', function () {
					form.submit();
				} );
			}

			// Page Transitions Duration Slider
			var rangeInput = document.getElementById( 'bpafb-transition-range' );
			var hiddenDuration = document.getElementById( 'bpafb-transition-duration' );
			var durationVal = document.getElementById( 'bpafb-transition-val' );
			if ( rangeInput && hiddenDuration && durationVal ) {
				rangeInput.addEventListener( 'input', function () {
					hiddenDuration.value = this.value;
					durationVal.textContent = this.value + 'ms';
				} );
			}

			// Element Manager Search & Filter
			var searchInput = document.getElementById( 'bpafb-block-search' );
			var filterChips = document.querySelectorAll( '.bpafb-chip-btn' );
			var blockCards = document.querySelectorAll( '.bpafb-block-card' );
			var currentFilter = 'all';
			var currentQuery = '';

			function filterBlocks() {
				blockCards.forEach( function ( card ) {
					var matchesCategory = ( currentFilter === 'all' || card.getAttribute( 'data-category' ) === currentFilter );
					var matchesQuery = ( currentQuery === '' || card.getAttribute( 'data-name' ).indexOf( currentQuery ) !== -1 );
					card.style.display = ( matchesCategory && matchesQuery ) ? 'flex' : 'none';
				} );
			}

			if ( searchInput ) {
				searchInput.addEventListener( 'input', function () {
					currentQuery = this.value.toLowerCase().trim();
					filterBlocks();
				} );
			}

			filterChips.forEach( function ( chip ) {
				chip.addEventListener( 'click', function () {
					filterChips.forEach( function ( c ) { c.classList.remove( 'is-active' ); } );
					this.classList.add( 'is-active' );
					currentFilter = this.getAttribute( 'data-filter' );
					filterBlocks();
				} );
			} );

			// Element Card Toggle Active Style & Dynamic Counter
			var blockCheckboxes = document.querySelectorAll( '.bpafb-block-checkbox' );
			var countText = document.getElementById( 'bpafb-active-count-text' );

			function updateActiveCounter() {
				if ( ! countText || ! blockCheckboxes.length ) return;
				var activeCount = 0;
				blockCheckboxes.forEach( function ( cb ) {
					if ( cb.checked ) activeCount++;
				} );
				countText.textContent = '(' + activeCount + ' active of ' + blockCheckboxes.length + ' total)';
			}

			blockCheckboxes.forEach( function ( cb ) {
				cb.addEventListener( 'change', function () {
					var card = this.closest( '.bpafb-block-card' );
					if ( card ) {
						card.classList.toggle( 'is-disabled', ! this.checked );
					}
					updateActiveCounter();
				} );
			} );

			// Bulk Enable / Disable
			var enableAllBtn = document.getElementById( 'bpafb-enable-all-btn' );
			var disableAllBtn = document.getElementById( 'bpafb-disable-all-btn' );
			if ( enableAllBtn ) {
				enableAllBtn.addEventListener( 'click', function () {
					blockCheckboxes.forEach( function ( cb ) {
						cb.checked = true;
						var card = cb.closest( '.bpafb-block-card' );
						if ( card ) card.classList.remove( 'is-disabled' );
					} );
					updateActiveCounter();
				} );
			}
			if ( disableAllBtn ) {
				disableAllBtn.addEventListener( 'click', function () {
					blockCheckboxes.forEach( function ( cb ) {
						cb.checked = false;
						var card = cb.closest( '.bpafb-block-card' );
						if ( card ) card.classList.add( 'is-disabled' );
					} );
					updateActiveCounter();
				} );
			}
		} )();
		</script>
		<?php
	}
}
