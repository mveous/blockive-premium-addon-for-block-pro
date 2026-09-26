<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Link in Bio block: a centered, mobile-first
 * profile (photo, name, headline, bio), a row of social icons, and a
 * stack of full-width link buttons.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block default content (unused, dynamic block).
 * @var WP_Block $block      Block instance.
 */

// Network => [label, icon].
$bpafb_networks = [
	'instagram' => ['Instagram', 'fa-brands fa-instagram'],
	'facebook'  => ['Facebook', 'fa-brands fa-facebook-f'],
	'x'         => ['X', 'fa-brands fa-x-twitter'],
	'tiktok'    => ['TikTok', 'fa-brands fa-tiktok'],
	'youtube'   => ['YouTube', 'fa-brands fa-youtube'],
	'linkedin'  => ['LinkedIn', 'fa-brands fa-linkedin-in'],
	'pinterest' => ['Pinterest', 'fa-brands fa-pinterest-p'],
	'threads'   => ['Threads', 'fa-brands fa-threads'],
	'github'    => ['GitHub', 'fa-brands fa-github'],
	'spotify'   => ['Spotify', 'fa-brands fa-spotify'],
	'whatsapp'  => ['WhatsApp', 'fa-brands fa-whatsapp'],
	'telegram'  => ['Telegram', 'fa-brands fa-telegram'],
	'email'     => [__('Email', 'blockive-premium-addon-for-block-pro'), 'fa-solid fa-envelope'],
	'website'   => [__('Website', 'blockive-premium-addon-for-block-pro'), 'fa-solid fa-globe'],
];

$bpafb_s = 'Bpafb_Pro_Site_Blocks';
$bpafb_uid = $bpafb_s::uid($attributes, 'bpafb-bio-');
$bpafb_new_tab = !empty($attributes['newTab']);
$bpafb_new_tab_note = $bpafb_new_tab ? '<span class="screen-reader-text"> ' . esc_html__('(opens in a new tab)', 'blockive-premium-addon-for-block-pro') . '</span>' : '';

/**
 * A usable link: http(s), mailto, or tel; an email address becomes mailto.
 */
$bpafb_href = function ($url) {
	$url = trim((string) $url);
	if (is_email($url)) {
		return 'mailto:' . $url;
	}
	// A bare domain such as example.com/shop.
	if (preg_match('#^[a-z0-9-]+(\.[a-z0-9-]+)+(/\S*)?$#i', $url)) {
		return 'https://' . $url;
	}
	return preg_match('#^(https?://|mailto:|tel:)#i', $url) ? $url : '';
};

$bpafb_html = '';

$bpafb_image = $bpafb_s::image_url(isset($attributes['imageId']) ? $attributes['imageId'] : 0, isset($attributes['imageUrl']) ? $attributes['imageUrl'] : '', 'medium');
if ($bpafb_image) {
	$bpafb_html .= '<img class="bpafb-bio__image" src="' . esc_url($bpafb_image) . '" alt="" width="' . (int) (isset($attributes['imageSize']) ? $attributes['imageSize'] : 110) . '" height="' . (int) (isset($attributes['imageSize']) ? $attributes['imageSize'] : 110) . '">';
}

$bpafb_tag = isset($attributes['nameTag']) && in_array($attributes['nameTag'], ['h1', 'h2', 'h3', 'p'], true) ? $attributes['nameTag'] : 'h1';
if (!empty($attributes['name'])) {
	$bpafb_html .= sprintf('<%1$s class="bpafb-bio__name">%2$s</%1$s>', $bpafb_tag, esc_html($attributes['name']));
}
if (!empty($attributes['headline'])) {
	$bpafb_html .= '<p class="bpafb-bio__headline">' . esc_html($attributes['headline']) . '</p>';
}
if (!empty($attributes['bio'])) {
	$bpafb_html .= '<p class="bpafb-bio__text">' . nl2br(esc_html($attributes['bio'])) . '</p>';
}

$bpafb_socials = '';
foreach ((isset($attributes['socials']) && is_array($attributes['socials']) ? $attributes['socials'] : []) as $bpafb_social) {
	$bpafb_network = isset($bpafb_social['network'], $bpafb_networks[$bpafb_social['network']]) ? $bpafb_social['network'] : '';
	$bpafb_url = $bpafb_network ? $bpafb_href(isset($bpafb_social['url']) ? $bpafb_social['url'] : '') : '';
	if (!$bpafb_url) {
		continue;
	}
	$bpafb_web = 0 === stripos($bpafb_url, 'http');
	$bpafb_socials .= sprintf(
		'<li><a class="bpafb-bio__social"%1$s><i class="%2$s" aria-hidden="true"></i><span class="screen-reader-text">%3$s</span>%4$s</a></li>',
		$bpafb_s::link_attrs($bpafb_url, $bpafb_new_tab && $bpafb_web),
		esc_attr($bpafb_networks[$bpafb_network][1]),
		esc_html($bpafb_networks[$bpafb_network][0]),
		$bpafb_new_tab && $bpafb_web ? $bpafb_new_tab_note : ''
	);
}
if ($bpafb_socials) {
	$bpafb_html .= '<ul class="bpafb-bio__socials" aria-label="' . esc_attr__('Social profiles', 'blockive-premium-addon-for-block-pro') . '">' . $bpafb_socials . '</ul>';
}

$bpafb_links = '';
foreach ((isset($attributes['links']) && is_array($attributes['links']) ? $attributes['links'] : []) as $bpafb_link) {
	$bpafb_label = isset($bpafb_link['label']) ? trim(wp_strip_all_tags($bpafb_link['label'])) : '';
	$bpafb_url = $bpafb_href(isset($bpafb_link['url']) ? $bpafb_link['url'] : '');
	if ('' === $bpafb_label || !$bpafb_url) {
		continue;
	}
	$bpafb_web = 0 === stripos($bpafb_url, 'http');
	$bpafb_icon = !empty($bpafb_link['icon']) ? '<i class="' . esc_attr($bpafb_s::icon_class($bpafb_link['icon'])) . '" aria-hidden="true"></i>' : '';
	$bpafb_links .= sprintf(
		'<li><a class="bpafb-bio__link"%1$s>%2$s<span>%3$s</span>%4$s</a></li>',
		$bpafb_s::link_attrs($bpafb_url, $bpafb_new_tab && $bpafb_web),
		$bpafb_icon,
		esc_html($bpafb_label),
		$bpafb_new_tab && $bpafb_web ? $bpafb_new_tab_note : ''
	);
}
if ($bpafb_links) {
	$bpafb_html .= '<ul class="bpafb-bio__links">' . $bpafb_links . '</ul>';
}

if ('' === $bpafb_html) {
	return;
}

// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped inside scoped_vars_css().
echo $bpafb_s::scoped_vars_css($bpafb_uid, [
	'--bpafb-bio-image'        => $bpafb_s::px($attributes, 'imageSize'),
	'--bpafb-bio-width'        => $bpafb_s::px($attributes, 'maxWidth'),
	'--bpafb-bio-radius'       => $bpafb_s::px($attributes, 'buttonRadius'),
	'--bpafb-bio-bg'           => $bpafb_s::color($attributes, 'pageBgColor'),
	'--bpafb-bio-color'        => $bpafb_s::color($attributes, 'textColor'),
	'--bpafb-bio-btn-bg'       => $bpafb_s::color($attributes, 'buttonBgColor'),
	'--bpafb-bio-btn-color'    => $bpafb_s::color($attributes, 'buttonColor'),
	'--bpafb-bio-btn-hover-bg' => $bpafb_s::color($attributes, 'buttonHoverBgColor'),
	'--bpafb-bio-btn-hover'    => $bpafb_s::color($attributes, 'buttonHoverColor'),
	'--bpafb-bio-icon'         => $bpafb_s::color($attributes, 'iconColor'),
]);

printf(
	'<div %1$s><div class="bpafb-bio__inner">%2$s</div></div>',
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	get_block_wrapper_attributes(['class' => 'bpafb-bio bpafb-bio--' . (isset($attributes['buttonStyle']) && 'outline' === $attributes['buttonStyle'] ? 'outline' : 'fill') . ' bpafb-uid-' . $bpafb_uid]),
	$bpafb_html // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped above.
);
