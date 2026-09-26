<?php
/**
 * Scrolling & Mouse Effects for every Blockive block, like Elementor
 * Pro's Motion Effects: while the page scrolls, a block can move up/down
 * or sideways (parallax), fade, blur, rotate, or scale over a chosen part
 * of the window; and it can follow the mouse or tilt in 3D.
 *
 * Settings are one object attribute, bpafbMotion (editor panel in
 * src/custom-attributes/motion-effects.js). render_block adds the cleaned
 * settings to the block's element as data-bpafb-motion and loads
 * src/motion-effects/ (the script that moves it). Kept in Pro-only files
 * so a sync from the free plugin does not overwrite it.
 *
 * @package BlockivePro
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

class Bpafb_Pro_Motion
{
	const ATTRIBUTE = 'bpafbMotion';
	const HANDLE = 'bpafb-pro-motion';
	const NAMESPACE_PREFIX = 'blockive-premium-addon-for-block/';

	/**
	 * Effect => [allowed directions, first is the default].
	 */
	const EFFECTS = [
		'y'      => ['up', 'down'],
		'x'      => ['left', 'right'],
		'fade'   => ['in', 'out', 'in-out', 'out-in'],
		'blur'   => ['in', 'out', 'in-out', 'out-in'],
		'rotate' => ['left', 'right'],
		'scale'  => ['up', 'down', 'up-down', 'down-up'],
		'mouse'  => ['opposite', 'direct'],
		'tilt'   => ['direct', 'opposite'],
	];

	/**
	 * @var Bpafb_Pro_Motion|null
	 */
	private static $instance = null;

	/**
	 * @return Bpafb_Pro_Motion
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
		Bpafb_Pro_Custom_Attributes::share_attribute(self::ATTRIBUTE, ['type' => 'object']);
		add_filter('render_block', [$this, 'apply'], 11, 2);
	}

	private function __clone()
	{
	}

	public function __wakeup()
	{
		throw new \Exception('Cannot unserialize a singleton.');
	}


	/**
	 * The effects that are on, cleaned, or null when none is.
	 *
	 * @param mixed $motion Saved bpafbMotion value.
	 * @return array|null
	 */
	public static function clean($motion)
	{
		if (!is_array($motion)) {
			return null;
		}
		$effects = [];
		foreach (self::EFFECTS as $effect => $directions) {
			if (empty($motion[$effect . 'On'])) {
				continue;
			}
			$direction = isset($motion[$effect . 'Dir']) && in_array($motion[$effect . 'Dir'], $directions, true) ? $motion[$effect . 'Dir'] : $directions[0];
			$speed = isset($motion[$effect . 'Speed']) ? (float) $motion[$effect . 'Speed'] : 4;
			$effects[$effect] = [$direction, max(1, min(10, round($speed, 1)))];
		}
		if (!$effects) {
			return null;
		}

		$start = isset($motion['rangeStart']) ? max(0, min(100, (int) $motion['rangeStart'])) : 0;
		$end = isset($motion['rangeEnd']) ? max(0, min(100, (int) $motion['rangeEnd'])) : 100;
		if ($end <= $start) {
			$start = 0;
			$end = 100;
		}
		$devices = [];
		foreach (['desktop', 'tablet', 'mobile'] as $device) {
			if (!isset($motion[$device]) || !empty($motion[$device])) {
				$devices[] = $device;
			}
		}
		if (!$devices) {
			return null;
		}

		return [
			'effects' => $effects,
			'range'   => [$start, $end],
			'devices' => $devices,
		];
	}

	/**
	 * Adds the settings to the block's element and loads the script.
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
		$settings = self::clean($block['attrs'][self::ATTRIBUTE]);
		if (!$settings) {
			return $content;
		}

		$processor = Bpafb_Pro_Custom_Attributes::outer_element($content);
		if (!$processor) {
			return $content;
		}
		$processor->set_attribute('data-bpafb-motion', wp_json_encode($settings));
		self::enqueue();
		return $processor->get_updated_html();
	}

	private static function enqueue()
	{
		$asset_file = BPAFB_PRO_PATH . 'build/motion-effects/index.asset.php';
		if (!file_exists($asset_file)) {
			return;
		}
		$asset = require $asset_file;
		wp_enqueue_script(self::HANDLE, BPAFB_PRO_URL . 'build/motion-effects/index.js', $asset['dependencies'], $asset['version'], ['in_footer' => true, 'strategy' => 'defer']);
	}
}
