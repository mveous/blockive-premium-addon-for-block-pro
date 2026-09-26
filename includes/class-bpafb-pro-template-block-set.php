<?php
/**
 * Registration shared by the WooCommerce and Events Calendar Template
 * Blocks (Bpafb_Pro_Woo_Blocks, Bpafb_Pro_Events_Blocks): the server-side
 * blocks, and the editor file that swaps the free plugin's teasers for
 * them (src/pro-dynamic-blocks-shared/dynamic-block-edit.js,
 * replaceTeaserBlocks()).
 *
 * @package BlockivePro
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

class Bpafb_Pro_Template_Block_Set
{
	const NAME_PREFIX = 'blockive-premium-addon-for-block/tb-';

	/**
	 * Registers each block and marks it as a Template Block.
	 *
	 * @param array<string,array{0:string,1:string,2:string}> $defs  Slug => [title, icon, render method].
	 * @param object                                          $owner Object with the render methods.
	 */
	public static function register($defs, $owner)
	{
		foreach ($defs as $slug => list($title, $icon, $method)) {
			$name = self::NAME_PREFIX . $slug;

			register_block_type($name, [
				'api_version'     => 3,
				'title'           => $title,
				'category'        => 'blockive-template',
				'icon'            => $icon,
				'uses_context'    => ['postId', 'postType'],
				'supports'        => ['html' => false],
				'render_callback' => [$owner, $method],
			]);

			Bpafb_Template_Blocks::register_block_name($name);
		}
	}

	/**
	 * Loads the editor file on the Template Builder screen, after the free
	 * plugin's Template Blocks file (which registers the teasers it
	 * replaces). The file always removes the teasers, but only adds the
	 * real blocks when $active, so nothing sits in the inserter doing
	 * nothing on a site without the plugin. The server-side blocks are
	 * always registered, so saved templates keep working (empty) if that
	 * plugin is turned off later.
	 *
	 * @param string $folder Build folder, e.g. template-blocks-woo.
	 * @param string $handle Script handle.
	 * @param string $object Global name for the { active } flag.
	 * @param bool   $active Whether the plugin the blocks need is active.
	 */
	public static function enqueue_editor($folder, $handle, $object, $active)
	{
		if (!Bpafb_Screen_Helper::is_template_editor() || !file_exists(BPAFB_PRO_PATH . 'build/' . $folder . '/index.js')) {
			return;
		}

		$asset_file = BPAFB_PRO_PATH . 'build/' . $folder . '/index.asset.php';
		$asset      = file_exists($asset_file) ? require $asset_file : [
			'dependencies' => ['bpafb-template-blocks'],
			'version'      => BPAFB_PRO_VERSION,
		];

		wp_enqueue_script(
			$handle,
			BPAFB_PRO_URL . 'build/' . $folder . '/index.js',
			array_unique(array_merge($asset['dependencies'], ['bpafb-template-blocks'])),
			$asset['version'],
			true
		);
		wp_localize_script($handle, $object, ['active' => (bool) $active]);
	}
}
