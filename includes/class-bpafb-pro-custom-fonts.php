<?php
/**
 * Custom Fonts (a section of Site Tools): upload WOFF2 / WOFF / TTF / OTF
 * files to the Media Library, one row per file with its family, weight,
 * and style. The fonts get @font-face rules on the site and inside the
 * editor, and are added to WordPress's own font lists, so core blocks can
 * pick them; Blockive blocks use them by typing the family name.
 *
 * @package BlockivePro
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

class Bpafb_Pro_Custom_Fonts
{
	const OPTION = 'bpafb_pro_custom_fonts';
	const FORMATS = [
		'woff2' => ['font/woff2', 'woff2'],
		'woff'  => ['font/woff', 'woff'],
		'ttf'   => ['font/ttf', 'truetype'],
		'otf'   => ['font/otf', 'opentype'],
	];

	/**
	 * @var Bpafb_Pro_Custom_Fonts|null
	 */
	private static $instance = null;

	/**
	 * @return Bpafb_Pro_Custom_Fonts
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
		add_filter('upload_mimes', [$this, 'allow_font_uploads']);
		add_filter('wp_check_filetype_and_ext', [$this, 'check_font_file'], 10, 4);
		add_action('wp_head', [$this, 'print_font_faces'], 5);
		// Inside the editor iframe too.
		add_action('enqueue_block_assets', [$this, 'enqueue_editor_font_faces']);
		add_filter('wp_theme_json_data_theme', [$this, 'add_to_font_lists']);
		add_action('admin_enqueue_scripts', [$this, 'enqueue_admin']);
	}

	private function __clone()
	{
	}

	public function __wakeup()
	{
		throw new \Exception('Cannot unserialize a singleton.');
	}

	// -- Uploads ----------------------------------------------------------------

	/**
	 * Font files may be uploaded by users who manage the site.
	 *
	 * @param array $mimes Allowed extension => mime type.
	 * @return array
	 */
	public function allow_font_uploads($mimes)
	{
		if (current_user_can('manage_options')) {
			foreach (self::FORMATS as $ext => $format) {
				$mimes[$ext] = $format[0];
			}
		}
		return $mimes;
	}

	/**
	 * Font files are often detected as application/octet-stream, which
	 * WordPress would refuse. Accepts them by extension for users who may
	 * upload fonts.
	 *
	 * @param array  $data     ext, type, proper_filename.
	 * @param string $file     Path to the file.
	 * @param string $filename File name.
	 * @param array  $mimes    Allowed mime types.
	 * @return array
	 */
	public function check_font_file($data, $file, $filename, $mimes)
	{
		if (!empty($data['ext']) || !current_user_can('manage_options')) {
			return $data;
		}
		$ext = strtolower(pathinfo((string) $filename, PATHINFO_EXTENSION));
		if (isset(self::FORMATS[$ext])) {
			$data['ext'] = $ext;
			$data['type'] = self::FORMATS[$ext][0];
		}
		return $data;
	}

	// -- Settings ---------------------------------------------------------------

	/**
	 * @param mixed $value Submitted rows.
	 * @return array[]
	 */
	public static function sanitize($value)
	{
		$rows = [];
		foreach ((array) $value as $row) {
			if (!is_array($row)) {
				continue;
			}
			$family = trim(preg_replace('/[^\p{L}\p{N} _-]/u', '', isset($row['family']) ? (string) $row['family'] : ''));
			$id = isset($row['id']) ? absint($row['id']) : 0;
			if ('' === $family || !$id || !self::format_of($id)) {
				continue;
			}
			$weight = isset($row['weight']) ? (string) $row['weight'] : '400';
			$rows[] = [
				'family' => mb_substr($family, 0, 60),
				'weight' => preg_match('/^[1-9]00$/', $weight) ? $weight : '400',
				'style'  => isset($row['style']) && 'italic' === $row['style'] ? 'italic' : 'normal',
				'id'     => $id,
			];
		}
		return $rows;
	}

	/**
	 * The font format of an uploaded file, or null when it is not a font.
	 *
	 * @param int $attachment_id Attachment ID.
	 * @return array|null [mime, css format]
	 */
	private static function format_of($attachment_id)
	{
		$file = get_attached_file($attachment_id);
		$ext = strtolower(pathinfo((string) $file, PATHINFO_EXTENSION));
		return 'attachment' === get_post_type($attachment_id) && isset(self::FORMATS[$ext]) ? self::FORMATS[$ext] : null;
	}

	/**
	 * @return array[] Saved rows.
	 */
	public static function rows()
	{
		$rows = get_option(self::OPTION, []);
		return is_array($rows) ? $rows : [];
	}

	// -- Output -------------------------------------------------------------------

	/**
	 * @return string @font-face rules for every saved font file.
	 */
	public static function css()
	{
		$css = '';
		foreach (self::rows() as $row) {
			$format = self::format_of($row['id']);
			$url = wp_get_attachment_url($row['id']);
			if (!$format || !$url) {
				continue;
			}
			$css .= sprintf(
				'@font-face{font-family:"%1$s";src:url("%2$s") format("%3$s");font-weight:%4$s;font-style:%5$s;font-display:swap;}',
				esc_attr($row['family']),
				esc_url($url),
				$format[1],
				(int) $row['weight'],
				'italic' === $row['style'] ? 'italic' : 'normal'
			);
		}
		return $css;
	}

	public function print_font_faces()
	{
		$css = self::css();
		if ($css) {
			echo '<style id="bpafb-custom-fonts">' . $css . '</style>' . "\n"; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- built from escaped parts.
		}
	}

	public function enqueue_editor_font_faces()
	{
		if (!is_admin()) {
			return;
		}
		$css = self::css();
		if ($css) {
			wp_register_style('bpafb-custom-fonts', false, [], BPAFB_PRO_VERSION);
			wp_enqueue_style('bpafb-custom-fonts');
			wp_add_inline_style('bpafb-custom-fonts', $css);
		}
	}

	/**
	 * Adds each family to the theme's font list (name and CSS family only;
	 * the @font-face rules above load the files).
	 *
	 * @param WP_Theme_JSON_Data $theme_json Theme data.
	 * @return WP_Theme_JSON_Data
	 */
	public function add_to_font_lists($theme_json)
	{
		$families = array_unique(wp_list_pluck(self::rows(), 'family'));
		if (!$families) {
			return $theme_json;
		}
		$data = $theme_json->get_data();
		$list = isset($data['settings']['typography']['fontFamilies']) && is_array($data['settings']['typography']['fontFamilies']) ? $data['settings']['typography']['fontFamilies'] : [];
		// Theme data can be grouped by origin.
		if (isset($list['theme']) && is_array($list['theme'])) {
			$list = $list['theme'];
		}
		foreach ($families as $family) {
			$list[] = [
				'name'       => $family,
				'slug'       => 'bpafb-' . sanitize_title($family),
				'fontFamily' => '"' . $family . '", sans-serif',
			];
		}
		return $theme_json->update_with([
			'version'  => isset($data['version']) ? $data['version'] : 3,
			'settings' => ['typography' => ['fontFamilies' => $list]],
		]);
	}

	// -- Site Tools section -------------------------------------------------------

	public function enqueue_admin($hook)
	{
		if (false === strpos((string) $hook, Bpafb_Pro_Site_Tools::PAGE)) {
			return;
		}
		wp_enqueue_media();
	}

	/**
	 * The Custom Fonts section of the Site Tools form.
	 */
	public static function render_section()
	{
		$rows = self::rows();
		$weights = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];
		$name = self::OPTION;
		?>
		<h2><?php esc_html_e('Custom Fonts', 'blockive-premium-addon-for-block-pro'); ?></h2>
		<p><?php esc_html_e('Add one row per font file (WOFF2 is smallest; WOFF, TTF, and OTF work too). Rows with the same family name make up one font. In Blockive blocks, type the family name in Font Family; core blocks list it in their font picker.', 'blockive-premium-addon-for-block-pro'); ?></p>
		<table class="widefat striped" id="bpafb-fonts" style="max-width: 900px;">
			<thead>
				<tr>
					<th scope="col"><?php esc_html_e('Family', 'blockive-premium-addon-for-block-pro'); ?></th>
					<th scope="col"><?php esc_html_e('Weight', 'blockive-premium-addon-for-block-pro'); ?></th>
					<th scope="col"><?php esc_html_e('Style', 'blockive-premium-addon-for-block-pro'); ?></th>
					<th scope="col"><?php esc_html_e('File', 'blockive-premium-addon-for-block-pro'); ?></th>
					<th scope="col"><span class="screen-reader-text"><?php esc_html_e('Remove', 'blockive-premium-addon-for-block-pro'); ?></span></th>
				</tr>
			</thead>
			<tbody>
				<?php
				$render_row = function ($index, $row) use ($name, $weights) {
					$file = !empty($row['id']) ? basename((string) get_attached_file($row['id'])) : '';
					?>
					<tr class="bpafb-font-row">
						<td><input type="text" class="regular-text" aria-label="<?php esc_attr_e('Family', 'blockive-premium-addon-for-block-pro'); ?>" name="<?php echo esc_attr($name . '[' . $index . '][family]'); ?>" value="<?php echo esc_attr(isset($row['family']) ? $row['family'] : ''); ?>" placeholder="Brand Sans"></td>
						<td>
							<select aria-label="<?php esc_attr_e('Weight', 'blockive-premium-addon-for-block-pro'); ?>" name="<?php echo esc_attr($name . '[' . $index . '][weight]'); ?>">
								<?php foreach ($weights as $weight) : ?>
									<option value="<?php echo esc_attr($weight); ?>" <?php selected(isset($row['weight']) ? $row['weight'] : '400', $weight); ?>><?php echo esc_html($weight); ?></option>
								<?php endforeach; ?>
							</select>
						</td>
						<td>
							<select aria-label="<?php esc_attr_e('Style', 'blockive-premium-addon-for-block-pro'); ?>" name="<?php echo esc_attr($name . '[' . $index . '][style]'); ?>">
								<option value="normal" <?php selected(isset($row['style']) ? $row['style'] : 'normal', 'normal'); ?>><?php esc_html_e('Normal', 'blockive-premium-addon-for-block-pro'); ?></option>
								<option value="italic" <?php selected(isset($row['style']) ? $row['style'] : 'normal', 'italic'); ?>><?php esc_html_e('Italic', 'blockive-premium-addon-for-block-pro'); ?></option>
							</select>
						</td>
						<td>
							<input type="hidden" class="bpafb-font-id" name="<?php echo esc_attr($name . '[' . $index . '][id]'); ?>" value="<?php echo esc_attr(isset($row['id']) ? (int) $row['id'] : ''); ?>">
							<button type="button" class="button bpafb-font-pick"><?php esc_html_e('Choose File', 'blockive-premium-addon-for-block-pro'); ?></button>
							<span class="bpafb-font-file"><?php echo esc_html($file); ?></span>
						</td>
						<td><button type="button" class="button-link button-link-delete bpafb-font-remove"><?php esc_html_e('Remove', 'blockive-premium-addon-for-block-pro'); ?></button></td>
					</tr>
					<?php
				};
				foreach ($rows as $index => $row) {
					$render_row($index, $row);
				}
				?>
			</tbody>
		</table>
		<p><button type="button" class="button" id="bpafb-font-add"><?php esc_html_e('Add Font File', 'blockive-premium-addon-for-block-pro'); ?></button></p>
		<template id="bpafb-font-template"><?php $render_row('__i__', []); ?></template>
		<script>
		( function () {
			var table = document.querySelector( '#bpafb-fonts tbody' );
			var next = <?php echo (int) (count($rows) ? max(array_keys($rows)) + 1 : 0); ?>;
			document.getElementById( 'bpafb-font-add' ).addEventListener( 'click', function () {
				var html = document.getElementById( 'bpafb-font-template' ).innerHTML.split( '__i__' ).join( String( next++ ) );
				table.insertAdjacentHTML( 'beforeend', html );
				table.lastElementChild.querySelector( 'input[type="text"]' ).focus();
			} );
			table.addEventListener( 'click', function ( event ) {
				var row = event.target.closest( '.bpafb-font-row' );
				if ( ! row ) {
					return;
				}
				if ( event.target.closest( '.bpafb-font-remove' ) ) {
					var add = document.getElementById( 'bpafb-font-add' );
					row.remove();
					add.focus();
					return;
				}
				if ( event.target.closest( '.bpafb-font-pick' ) && window.wp && wp.media ) {
					var frame = wp.media( { title: <?php echo wp_json_encode(__('Choose a font file', 'blockive-premium-addon-for-block-pro')); ?>, multiple: false } );
					frame.on( 'select', function () {
						var file = frame.state().get( 'selection' ).first().toJSON();
						row.querySelector( '.bpafb-font-id' ).value = file.id;
						row.querySelector( '.bpafb-font-file' ).textContent = file.filename;
					} );
					frame.open();
				}
			} );
		} )();
		</script>
		<?php
	}
}
