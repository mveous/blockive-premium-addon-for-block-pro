<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Icon List block.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block default content (unused, dynamic block).
 * @var WP_Block $block      Block instance.
 */

$bpafb_items = isset($attributes['items']) && is_array($attributes['items']) ? $attributes['items'] : [];
if (!$bpafb_items) {
	return;
}

$bpafb_layout = isset($attributes['layout']) && 'inline' === $attributes['layout'] ? 'inline' : 'vertical';
$bpafb_aligns = ['left', 'center', 'right'];
$bpafb_align = isset($attributes['align']) && in_array($attributes['align'], $bpafb_aligns, true) ? $attributes['align'] : 'left';
$bpafb_align_mobile = isset($attributes['alignMobile']) && in_array($attributes['alignMobile'], $bpafb_aligns, true) ? $attributes['alignMobile'] : '';
$bpafb_uid = Bpafb_Pro_Site_Blocks::uid($attributes, 'bpafb-icon-list-');
$bpafb_text_tags = ['strong' => [], 'em' => [], 'b' => [], 'i' => [], 'br' => []];

$bpafb_list = '';
foreach ($bpafb_items as $bpafb_item) {
	$bpafb_text = isset($bpafb_item['text']) ? wp_kses((string) $bpafb_item['text'], $bpafb_text_tags) : '';
	$bpafb_icon = isset($bpafb_item['icon']) ? trim(preg_replace('/[^a-z0-9\s_-]/i', '', (string) $bpafb_item['icon'])) : '';
	if ($bpafb_text === '' && $bpafb_icon === '') {
		continue;
	}

	$bpafb_inner = ($bpafb_icon !== '' ? '<span class="bpafb-icon-list__icon"><i class="' . esc_attr($bpafb_icon) . '" aria-hidden="true"></i></span>' : '')
		. '<span class="bpafb-icon-list__text">' . $bpafb_text . '</span>';

	if (!empty($bpafb_item['url'])) {
		$bpafb_new_tab = !empty($bpafb_item['newTab']);
		$bpafb_inner = sprintf(
			'<a class="bpafb-icon-list__link" href="%1$s"%2$s>%3$s</a>',
			// tel:, mailto:, sms:, and whatsapp: links are the point of this block in footers.
			esc_url($bpafb_item['url'], ['http', 'https', 'mailto', 'tel', 'sms', 'whatsapp', 'skype', 'viber']),
			$bpafb_new_tab ? ' target="_blank" rel="noopener noreferrer"' : '',
			$bpafb_inner
		);
	} else {
		$bpafb_inner = '<span class="bpafb-icon-list__link">' . $bpafb_inner . '</span>';
	}

	$bpafb_list .= '<li class="bpafb-icon-list__item">' . $bpafb_inner . '</li>';
}

if ($bpafb_list === '') {
	return;
}

$bpafb_divider_style = isset($attributes['dividerStyle']) && in_array($attributes['dividerStyle'], ['solid', 'dashed', 'dotted', 'double'], true) ? $attributes['dividerStyle'] : 'solid';
$bpafb_valign = isset($attributes['iconVAlign']) && 'top' === $attributes['iconVAlign'] ? 'flex-start' : 'center';

// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped inside scoped_vars_css().
echo Bpafb_Pro_Site_Blocks::scoped_vars_css($bpafb_uid, array_merge([
	'--bpafb-il-space'            => Bpafb_Pro_Site_Blocks::px($attributes, 'spaceBetween'),
	'--bpafb-il-divider-style'    => $bpafb_divider_style,
	'--bpafb-il-divider-width'    => Bpafb_Pro_Site_Blocks::px($attributes, 'dividerWidth'),
	'--bpafb-il-divider-color'    => Bpafb_Pro_Site_Blocks::color($attributes, 'dividerColor'),
	'--bpafb-il-icon-size'        => Bpafb_Pro_Site_Blocks::px($attributes, 'iconSize'),
	'--bpafb-il-icon-color'       => Bpafb_Pro_Site_Blocks::color($attributes, 'iconColor'),
	'--bpafb-il-icon-hover-color' => Bpafb_Pro_Site_Blocks::color($attributes, 'iconHoverColor'),
	'--bpafb-il-icon-gap'         => Bpafb_Pro_Site_Blocks::px($attributes, 'iconGap'),
	'--bpafb-il-icon-valign'      => $bpafb_valign,
	'--bpafb-il-text-color'       => Bpafb_Pro_Site_Blocks::color($attributes, 'textColor'),
	'--bpafb-il-text-hover-color' => Bpafb_Pro_Site_Blocks::color($attributes, 'textHoverColor'),
], Bpafb_Pro_Site_Blocks::typography_vars($attributes, 'text', '--bpafb-il-text')));

printf(
	'<div %1$s><ul class="bpafb-icon-list__items">%2$s</ul></div>',
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	get_block_wrapper_attributes([
		'class' => 'bpafb-icon-list bpafb-icon-list--' . $bpafb_layout . ' bpafb-icon-list--align-' . $bpafb_align
			. ($bpafb_align_mobile ? ' bpafb-icon-list--align-mobile-' . $bpafb_align_mobile : '')
			. (!empty($attributes['showDivider']) ? ' bpafb-icon-list--divider' : '')
			. ' bpafb-uid-' . $bpafb_uid,
	]),
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped per item above.
	$bpafb_list
);
