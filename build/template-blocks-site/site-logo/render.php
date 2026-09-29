<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Site Logo block. Uses the site's own custom
 * logo (Customizer / Site Editor) or a custom image, falling back to the
 * site title as text when neither exists.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block default content (unused, dynamic block).
 * @var WP_Block $block      Block instance.
 */

$bpafb_source = isset($attributes['source']) && 'custom' === $attributes['source'] ? 'custom' : 'site';
$bpafb_size = isset($attributes['imageSize']) && in_array($attributes['imageSize'], ['full', 'large', 'medium', 'thumbnail'], true) ? $attributes['imageSize'] : 'full';
$bpafb_align = isset($attributes['align']) && in_array($attributes['align'], ['left', 'center', 'right'], true) ? $attributes['align'] : 'left';
$bpafb_uid = Bpafb_Pro_Site_Blocks::uid($attributes, 'bpafb-site-logo-');
$bpafb_site_name = get_bloginfo('name');

$bpafb_image_id = 'custom' === $bpafb_source
	? (isset($attributes['customImageId']) ? absint($attributes['customImageId']) : 0)
	: absint(get_theme_mod('custom_logo'));

$bpafb_img_attrs = [
	'class'    => 'bpafb-tb-site-logo__img',
	'loading'  => false,
	'decoding' => 'async',
];
if ('custom' === $bpafb_source && !empty($attributes['customImageAlt'])) {
	$bpafb_img_attrs['alt'] = $attributes['customImageAlt'];
} elseif ('site' === $bpafb_source && $bpafb_image_id && !get_post_meta($bpafb_image_id, '_wp_attachment_image_alt', true)) {
	$bpafb_img_attrs['alt'] = $bpafb_site_name;
}

$bpafb_inner = $bpafb_image_id ? wp_get_attachment_image($bpafb_image_id, $bpafb_size, false, $bpafb_img_attrs) : '';

// A custom image whose attachment was deleted still has its saved URL.
if (!$bpafb_inner && 'custom' === $bpafb_source && !empty($attributes['customImageUrl'])) {
	$bpafb_inner = sprintf(
		'<img class="bpafb-tb-site-logo__img" src="%1$s" alt="%2$s" decoding="async">',
		esc_url($attributes['customImageUrl']),
		esc_attr(!empty($attributes['customImageAlt']) ? $attributes['customImageAlt'] : $bpafb_site_name)
	);
}

if (!$bpafb_inner) {
	$bpafb_inner = '<span class="bpafb-tb-site-logo__text">' . esc_html($bpafb_site_name) . '</span>';
}

$bpafb_is_link = !isset($attributes['isLink']) || !empty($attributes['isLink']);
if ($bpafb_is_link) {
	$bpafb_url = !empty($attributes['customLink']) ? $attributes['customLink'] : home_url('/');
	$bpafb_target = isset($attributes['linkTarget']) && '_blank' === $attributes['linkTarget'] ? '_blank' : '_self';
	$bpafb_is_home = empty($attributes['customLink']) && (is_front_page() || is_home());

	$bpafb_inner = sprintf(
		'<a class="bpafb-tb-site-logo__link" href="%1$s" rel="home%2$s" target="%3$s"%4$s>%5$s</a>',
		esc_url($bpafb_url),
		'_blank' === $bpafb_target ? ' noopener noreferrer' : '',
		esc_attr($bpafb_target),
		$bpafb_is_home ? ' aria-current="page"' : '',
		$bpafb_inner
	);
} else {
	$bpafb_inner = '<span class="bpafb-tb-site-logo__link">' . $bpafb_inner . '</span>';
}

$bpafb_opacity = isset($attributes['opacity']) && is_numeric($attributes['opacity']) ? (string) (floatval($attributes['opacity']) / 100) : '';
$bpafb_hover_opacity = isset($attributes['hoverOpacity']) && is_numeric($attributes['hoverOpacity']) ? (string) (floatval($attributes['hoverOpacity']) / 100) : '';

// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped inside scoped_vars_css().
echo Bpafb_Pro_Site_Blocks::scoped_vars_css($bpafb_uid, [
	'--bpafb-logo-width'         => Bpafb_Pro_Site_Blocks::px($attributes, 'width'),
	'--bpafb-logo-width-tablet'  => Bpafb_Pro_Site_Blocks::px($attributes, 'widthTablet'),
	'--bpafb-logo-width-mobile'  => Bpafb_Pro_Site_Blocks::px($attributes, 'widthMobile'),
	'--bpafb-logo-max-height'    => Bpafb_Pro_Site_Blocks::px($attributes, 'maxHeight'),
	'--bpafb-logo-radius'        => Bpafb_Pro_Site_Blocks::px($attributes, 'borderRadius'),
	'--bpafb-logo-opacity'       => $bpafb_opacity,
	'--bpafb-logo-hover-opacity' => $bpafb_hover_opacity,
]);

printf(
	'<div %1$s>%2$s</div>',
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	get_block_wrapper_attributes(['class' => 'bpafb-tb-site-logo bpafb-tb-align-' . $bpafb_align . ' bpafb-uid-' . $bpafb_uid]),
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- built from escaped parts above.
	$bpafb_inner
);
