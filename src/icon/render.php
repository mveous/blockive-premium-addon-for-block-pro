<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Icon block.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block default content (unused, dynamic block).
 * @var WP_Block $block      Block instance.
 */

$bpafb_icon = isset($attributes['icon']) ? trim(preg_replace('/[^a-z0-9\s_-]/i', '', $attributes['icon'])) : '';
if ($bpafb_icon === '') {
	return;
}

$bpafb_view = isset($attributes['view']) && in_array($attributes['view'], ['default', 'stacked', 'framed'], true) ? $attributes['view'] : 'default';
$bpafb_shape = isset($attributes['shape']) && in_array($attributes['shape'], ['circle', 'square', 'rounded'], true) ? $attributes['shape'] : 'circle';
$bpafb_align = isset($attributes['align']) && in_array($attributes['align'], ['left', 'center', 'right'], true) ? $attributes['align'] : 'center';
$bpafb_uid = Bpafb_Pro_Site_Blocks::uid($attributes, 'bpafb-icon-');
$bpafb_label = isset($attributes['ariaLabel']) ? trim($attributes['ariaLabel']) : '';

$bpafb_glyph = '<i class="' . esc_attr($bpafb_icon) . '" aria-hidden="true"></i>';
$bpafb_sr = $bpafb_label !== '' ? '<span class="screen-reader-text">' . esc_html($bpafb_label) . '</span>' : '';

if (!empty($attributes['link'])) {
	$bpafb_rel = [];
	if (!empty($attributes['linkNewTab'])) {
		$bpafb_rel[] = 'noopener';
		$bpafb_rel[] = 'noreferrer';
	}
	if (!empty($attributes['linkNofollow'])) {
		$bpafb_rel[] = 'nofollow';
	}
	$bpafb_inner = sprintf(
		'<a class="bpafb-icon__inner" href="%1$s"%2$s%3$s>%4$s%5$s</a>',
		esc_url($attributes['link']),
		!empty($attributes['linkNewTab']) ? ' target="_blank"' : '',
		$bpafb_rel ? ' rel="' . esc_attr(implode(' ', $bpafb_rel)) . '"' : '',
		$bpafb_glyph,
		$bpafb_sr
	);
} else {
	$bpafb_inner = '<span class="bpafb-icon__inner"' . ($bpafb_label !== '' ? ' role="img" aria-label="' . esc_attr($bpafb_label) . '"' : '') . '>' . $bpafb_glyph . '</span>';
}

$bpafb_rotate = isset($attributes['rotate']) && is_numeric($attributes['rotate']) && (float) $attributes['rotate'] !== 0.0 ? floatval($attributes['rotate']) . 'deg' : '';

// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped inside scoped_vars_css().
echo Bpafb_Pro_Site_Blocks::scoped_vars_css($bpafb_uid, [
	'--bpafb-icon-size'            => Bpafb_Pro_Site_Blocks::px($attributes, 'size'),
	'--bpafb-icon-size-tablet'     => Bpafb_Pro_Site_Blocks::px($attributes, 'sizeTablet'),
	'--bpafb-icon-size-mobile'     => Bpafb_Pro_Site_Blocks::px($attributes, 'sizeMobile'),
	'--bpafb-icon-padding'         => Bpafb_Pro_Site_Blocks::px($attributes, 'padding'),
	'--bpafb-icon-rotate'          => $bpafb_rotate,
	'--bpafb-icon-border-width'    => Bpafb_Pro_Site_Blocks::px($attributes, 'borderWidth'),
	'--bpafb-icon-radius'          => 'rounded' === $bpafb_shape ? Bpafb_Pro_Site_Blocks::px($attributes, 'borderRadius') : '',
	'--bpafb-icon-primary'         => Bpafb_Pro_Site_Blocks::color($attributes, 'primaryColor'),
	'--bpafb-icon-secondary'       => Bpafb_Pro_Site_Blocks::color($attributes, 'secondaryColor'),
	'--bpafb-icon-hover-primary'   => Bpafb_Pro_Site_Blocks::color($attributes, 'hoverPrimaryColor'),
	'--bpafb-icon-hover-secondary' => Bpafb_Pro_Site_Blocks::color($attributes, 'hoverSecondaryColor'),
]);

printf(
	'<div %1$s>%2$s</div>',
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	get_block_wrapper_attributes([
		'class' => 'bpafb-icon bpafb-icon--' . $bpafb_view . ' bpafb-icon--shape-' . $bpafb_shape . ' bpafb-icon--align-' . $bpafb_align . ' bpafb-uid-' . $bpafb_uid,
	]),
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped above.
	$bpafb_inner
);
