<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Off-Canvas block: a trigger button plus a
 * slide-in panel holding the block's inner blocks ($content). view.js moves
 * the panel to <body> (so a sticky or transformed header can't clip it) and
 * handles opening, closing, focus, and scroll locking. Any link pointing at
 * the panel's ID (e.g. href="#mobile-menu") also opens it.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Inner blocks' rendered HTML.
 * @var WP_Block $block      Block instance.
 */

$bpafb_uid = Bpafb_Pro_Site_Blocks::uid($attributes, 'bpafb-offcanvas-');
$bpafb_position = isset($attributes['position']) && in_array($attributes['position'], ['left', 'right', 'top', 'bottom'], true) ? $attributes['position'] : 'right';
$bpafb_panel_id = !empty($attributes['panelId']) ? sanitize_html_class($attributes['panelId']) : 'bpafb-offcanvas-' . $bpafb_uid;
$bpafb_label = !empty($attributes['triggerLabel']) ? $attributes['triggerLabel'] : __('Open menu', 'blockive-premium-addon-for-block-pro');
$bpafb_trigger_align = isset($attributes['triggerAlign']) && in_array($attributes['triggerAlign'], ['left', 'center', 'right'], true) ? $attributes['triggerAlign'] : 'left';
$bpafb_opt = function ($key, $default = true) use ($attributes) {
	return isset($attributes[$key]) ? !empty($attributes[$key]) : $default;
};

$bpafb_icon_class = function ($key, $fallback) use ($attributes) {
	$value = isset($attributes[$key]) ? trim(preg_replace('/[^a-z0-9\s_-]/i', '', (string) $attributes[$key])) : '';
	return $value !== '' ? $value : $fallback;
};

$bpafb_trigger = '';
if ($bpafb_opt('showTrigger')) {
	$bpafb_type = isset($attributes['triggerType']) && in_array($attributes['triggerType'], ['icon', 'text', 'both'], true) ? $attributes['triggerType'] : 'icon';
	$bpafb_trigger_inner = '';
	if ('text' !== $bpafb_type) {
		$bpafb_trigger_inner .= '<i class="' . esc_attr($bpafb_icon_class('triggerIcon', 'fa-solid fa-bars')) . '" aria-hidden="true"></i>';
	}
	if ('icon' !== $bpafb_type) {
		$bpafb_trigger_inner .= '<span class="bpafb-off-canvas__trigger-text">' . esc_html(isset($attributes['triggerText']) ? $attributes['triggerText'] : '') . '</span>';
	}

	$bpafb_trigger = sprintf(
		'<button type="button" class="bpafb-off-canvas__trigger" aria-controls="%1$s" aria-expanded="false"%2$s>%3$s</button>',
		esc_attr($bpafb_panel_id),
		'icon' === $bpafb_type ? ' aria-label="' . esc_attr($bpafb_label) . '"' : '',
		$bpafb_trigger_inner
	);
}

$bpafb_close = $bpafb_opt('showCloseButton')
	? '<button type="button" class="bpafb-off-canvas__close" aria-label="' . esc_attr__('Close', 'blockive-premium-addon-for-block-pro') . '"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button>'
	: '';

$bpafb_panel_classes = 'bpafb-off-canvas__panel bpafb-off-canvas__panel--' . $bpafb_position . ' bpafb-uid-' . $bpafb_uid . '-panel'
	. ($bpafb_opt('panelShadow') ? ' has-shadow' : '');

$bpafb_panel = sprintf(
	'%1$s<div id="%2$s" class="%3$s" role="dialog" aria-modal="true" aria-label="%4$s" tabindex="-1" aria-hidden="true" inert>%5$s<div class="bpafb-off-canvas__content">%6$s</div></div>',
	$bpafb_opt('showOverlay') ? '<div class="bpafb-off-canvas__overlay bpafb-uid-' . esc_attr($bpafb_uid) . '-panel" aria-hidden="true"></div>' : '',
	esc_attr($bpafb_panel_id),
	esc_attr($bpafb_panel_classes),
	esc_attr($bpafb_label),
	$bpafb_close,
	$content
);

$bpafb_duration = isset($attributes['transitionDuration']) ? min(2000, absint($attributes['transitionDuration'])) . 'ms' : '';
$bpafb_panel_vars = [
	'--bpafb-oc-width'        => Bpafb_Pro_Site_Blocks::px($attributes, 'panelWidth'),
	'--bpafb-oc-width-mobile' => Bpafb_Pro_Site_Blocks::px($attributes, 'panelWidthMobile'),
	'--bpafb-oc-height'       => isset($attributes['panelHeight']) && is_numeric($attributes['panelHeight']) ? max(10, min(100, (int) $attributes['panelHeight'])) . 'vh' : '',
	'--bpafb-oc-bg'           => Bpafb_Pro_Site_Blocks::color($attributes, 'panelBgColor'),
	'--bpafb-oc-color'        => Bpafb_Pro_Site_Blocks::color($attributes, 'panelColor'),
	'--bpafb-oc-padding'      => Bpafb_Pro_Site_Blocks::px($attributes, 'panelPadding'),
	'--bpafb-oc-overlay'      => Bpafb_Pro_Site_Blocks::color($attributes, 'overlayColor'),
	'--bpafb-oc-close-color'  => Bpafb_Pro_Site_Blocks::color($attributes, 'closeColor'),
	'--bpafb-oc-close-size'   => Bpafb_Pro_Site_Blocks::px($attributes, 'closeSize'),
	'--bpafb-oc-duration'     => $bpafb_duration,
];

// Trigger variables sit on the block wrapper; panel variables on the
// panel and overlay, which view.js moves out to <body>.
// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped inside scoped_vars_css().
echo Bpafb_Pro_Site_Blocks::scoped_vars_css($bpafb_uid, [
	'--bpafb-oc-trigger-size'        => Bpafb_Pro_Site_Blocks::px($attributes, 'triggerSize'),
	'--bpafb-oc-trigger-color'       => Bpafb_Pro_Site_Blocks::color($attributes, 'triggerColor'),
	'--bpafb-oc-trigger-hover-color' => Bpafb_Pro_Site_Blocks::color($attributes, 'triggerHoverColor'),
	'--bpafb-oc-trigger-bg'          => Bpafb_Pro_Site_Blocks::color($attributes, 'triggerBgColor'),
	'--bpafb-oc-trigger-hover-bg'    => Bpafb_Pro_Site_Blocks::color($attributes, 'triggerHoverBgColor'),
	'--bpafb-oc-trigger-padding'     => Bpafb_Pro_Site_Blocks::px($attributes, 'triggerPadding'),
	'--bpafb-oc-trigger-radius'      => Bpafb_Pro_Site_Blocks::px($attributes, 'triggerRadius'),
]);
echo Bpafb_Pro_Site_Blocks::scoped_vars_css($bpafb_uid . '-panel', $bpafb_panel_vars);
// phpcs:enable

printf(
	'<div %1$s>%2$s%3$s</div>',
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	get_block_wrapper_attributes([
		'class'                  => 'bpafb-off-canvas bpafb-off-canvas--trigger-' . $bpafb_trigger_align . ' bpafb-uid-' . $bpafb_uid,
		'data-bpafb-offcanvas'   => $bpafb_panel_id,
		'data-close-overlay'     => $bpafb_opt('closeOnOverlay') ? '1' : '0',
		'data-close-esc'         => $bpafb_opt('closeOnEsc') ? '1' : '0',
		'data-close-links'       => $bpafb_opt('closeOnLinkClick') ? '1' : '0',
		'data-lock-scroll'       => $bpafb_opt('preventScroll') ? '1' : '0',
	]),
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped above.
	$bpafb_trigger,
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped parts plus rendered inner blocks.
	$bpafb_panel
);
