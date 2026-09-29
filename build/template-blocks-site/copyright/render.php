<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Copyright block. Replaces {year}, {site_title},
 * and {site_url} so the footer never shows a stale year.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block default content (unused, dynamic block).
 * @var WP_Block $block      Block instance.
 */

$bpafb_text = isset($attributes['content']) ? (string) $attributes['content'] : '';
if (trim($bpafb_text) === '') {
	return;
}

$bpafb_text = strtr(wp_kses_post($bpafb_text), [
	'{year}'       => esc_html(wp_date('Y')),
	'{site_title}' => esc_html(get_bloginfo('name')),
	'{site_url}'   => sprintf('<a href="%1$s">%2$s</a>', esc_url(home_url('/')), esc_html(wp_parse_url(home_url(), PHP_URL_HOST))),
]);

$bpafb_uid = Bpafb_Pro_Site_Blocks::uid($attributes, 'bpafb-copyright-');
$bpafb_align = isset($attributes['textAlign']) && in_array($attributes['textAlign'], ['left', 'center', 'right'], true) ? $attributes['textAlign'] : '';
$bpafb_color = Bpafb_Pro_Site_Blocks::color($attributes, 'textColor');

// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped inside scoped_vars_css().
echo Bpafb_Pro_Site_Blocks::scoped_vars_css($bpafb_uid, [
	'--bpafb-copyright-link-color'       => Bpafb_Pro_Site_Blocks::color($attributes, 'linkColor'),
	'--bpafb-copyright-link-hover-color' => Bpafb_Pro_Site_Blocks::color($attributes, 'linkHoverColor'),
]);

printf(
	'<p %1$s>%2$s</p>',
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	get_block_wrapper_attributes([
		'class' => 'bpafb-tb-copyright bpafb-uid-' . $bpafb_uid,
		'style' => ($bpafb_align ? 'text-align:' . $bpafb_align . ';' : '') . ($bpafb_color ? 'color:' . $bpafb_color . ';' : ''),
	]),
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- wp_kses_post() plus escaped replacements above.
	$bpafb_text
);
