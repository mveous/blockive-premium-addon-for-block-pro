<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Floating Contact Buttons block: a button fixed
 * in a corner of the window. With one channel it links straight to it;
 * with more, it opens a small menu of channels (disclosure pattern,
 * view.js). Channel links are built here from the entered number, address,
 * or username.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block default content (unused, dynamic block).
 * @var WP_Block $block      Block instance.
 */

// Type => [icon, brand color, default label].
$bpafb_types = [
	'whatsapp'  => ['fa-brands fa-whatsapp', '#25d366', __('WhatsApp', 'blockive-premium-addon-for-block-pro')],
	'phone'     => ['fa-solid fa-phone', '#0ea5e9', __('Call us', 'blockive-premium-addon-for-block-pro')],
	'sms'       => ['fa-solid fa-comment-sms', '#6366f1', __('Text us', 'blockive-premium-addon-for-block-pro')],
	'email'     => ['fa-solid fa-envelope', '#ef4444', __('Email us', 'blockive-premium-addon-for-block-pro')],
	'telegram'  => ['fa-brands fa-telegram', '#26a5e4', __('Telegram', 'blockive-premium-addon-for-block-pro')],
	'messenger' => ['fa-brands fa-facebook-messenger', '#0084ff', __('Messenger', 'blockive-premium-addon-for-block-pro')],
	'viber'     => ['fa-brands fa-viber', '#7360f2', __('Viber', 'blockive-premium-addon-for-block-pro')],
	'link'      => ['fa-solid fa-link', '#374151', __('Contact', 'blockive-premium-addon-for-block-pro')],
];

/**
 * The link for one channel, or '' when its value is unusable.
 */
$bpafb_url = function ($channel) {
	$value = isset($channel['value']) ? trim((string) $channel['value']) : '';
	$digits = preg_replace('/\D/', '', $value);
	$message = isset($channel['message']) ? trim((string) $channel['message']) : '';
	switch (isset($channel['type']) ? $channel['type'] : '') {
		case 'whatsapp':
			return $digits ? 'https://wa.me/' . $digits . ('' !== $message ? '?text=' . rawurlencode($message) : '') : '';
		case 'phone':
			return $digits ? 'tel:+' . $digits : '';
		case 'sms':
			return $digits ? 'sms:+' . $digits . ('' !== $message ? '?body=' . rawurlencode($message) : '') : '';
		case 'email':
			return is_email($value) ? 'mailto:' . $value . ('' !== $message ? '?subject=' . rawurlencode($message) : '') : '';
		case 'telegram':
			$user = preg_replace('/[^A-Za-z0-9_]/', '', ltrim($value, '@'));
			return $user ? 'https://t.me/' . $user : '';
		case 'messenger':
			$page = preg_replace('/[^A-Za-z0-9_.-]/', '', $value);
			return $page ? 'https://m.me/' . $page : '';
		case 'viber':
			return $digits ? 'viber://chat?number=%2B' . $digits : '';
		case 'link':
			return wp_http_validate_url($value) ? $value : '';
	}
	return '';
};

$bpafb_channels = [];
foreach ((isset($attributes['channels']) && is_array($attributes['channels']) ? $attributes['channels'] : []) as $bpafb_channel) {
	$bpafb_type = isset($bpafb_channel['type'], $bpafb_types[$bpafb_channel['type']]) ? $bpafb_channel['type'] : '';
	$bpafb_href = $bpafb_type ? $bpafb_url($bpafb_channel) : '';
	if (!$bpafb_href) {
		continue;
	}
	$bpafb_channels[] = [
		'type'  => $bpafb_type,
		'href'  => $bpafb_href,
		'label' => isset($bpafb_channel['label']) && '' !== trim($bpafb_channel['label']) ? trim(wp_strip_all_tags($bpafb_channel['label'])) : $bpafb_types[$bpafb_type][2],
		'web'   => 0 === strpos($bpafb_href, 'https://'),
	];
}
if (!$bpafb_channels) {
	return;
}

$bpafb_s = 'Bpafb_Pro_Site_Blocks';
$bpafb_uid = $bpafb_s::uid($attributes, 'bpafb-floating-');
$bpafb_official = !isset($attributes['colorMode']) || 'custom' !== $attributes['colorMode'];
$bpafb_new_tab_note = '<span class="screen-reader-text"> ' . esc_html__('(opens in a new tab)', 'blockive-premium-addon-for-block-pro') . '</span>';

$bpafb_link = function ($channel, $class, $inner) use ($bpafb_types, $bpafb_official) {
	return sprintf(
		'<a class="%1$s" href="%2$s"%3$s%4$s>%5$s</a>',
		esc_attr($class),
		esc_url($channel['href'], ['http', 'https', 'tel', 'sms', 'mailto', 'viber']),
		$channel['web'] ? ' target="_blank" rel="noopener noreferrer"' : '',
		$bpafb_official ? ' style="--bpafb-fab-channel:' . esc_attr($bpafb_types[$channel['type']][1]) . '"' : '',
		$inner
	);
};

if (1 === count($bpafb_channels)) {
	$bpafb_only = $bpafb_channels[0];
	$bpafb_html = $bpafb_link(
		$bpafb_only,
		'bpafb-fab__main bpafb-fab__main--' . $bpafb_only['type'],
		'<i class="' . esc_attr($bpafb_types[$bpafb_only['type']][0]) . '" aria-hidden="true"></i><span class="bpafb-fab__main-label">' . esc_html($bpafb_only['label']) . '</span>' . ($bpafb_only['web'] ? $bpafb_new_tab_note : '')
	);
} else {
	$bpafb_items = '';
	foreach ($bpafb_channels as $bpafb_channel) {
		$bpafb_items .= '<li>' . $bpafb_link(
			$bpafb_channel,
			'bpafb-fab__channel bpafb-fab__channel--' . $bpafb_channel['type'],
			'<span class="bpafb-fab__icon"><i class="' . esc_attr($bpafb_types[$bpafb_channel['type']][0]) . '" aria-hidden="true"></i></span><span class="bpafb-fab__label">' . esc_html($bpafb_channel['label']) . '</span>' . ($bpafb_channel['web'] ? $bpafb_new_tab_note : '')
		) . '</li>';
	}
	$bpafb_main_label = isset($attributes['mainLabel']) && '' !== trim($attributes['mainLabel']) ? $attributes['mainLabel'] : __('Contact us', 'blockive-premium-addon-for-block-pro');
	$bpafb_main_icon = !empty($attributes['mainIcon']) ? $bpafb_s::icon_class($attributes['mainIcon']) : 'fa-solid fa-comment-dots';
	$bpafb_html = sprintf(
		'<button type="button" class="bpafb-fab__main" aria-expanded="false" aria-controls="%1$s-menu"><i class="%3$s bpafb-fab__open-icon" aria-hidden="true"></i><i class="fa-solid fa-xmark bpafb-fab__close-icon" aria-hidden="true"></i><span class="bpafb-fab__main-label">%4$s</span></button><ul class="bpafb-fab__menu" id="%1$s-menu" hidden>%2$s</ul>',
		esc_attr($bpafb_uid),
		$bpafb_items,
		esc_attr($bpafb_main_icon),
		esc_html($bpafb_main_label)
	);
}

$bpafb_position = isset($attributes['position']) && 'bottom-left' === $attributes['position'] ? 'bottom-left' : 'bottom-right';

// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped inside scoped_vars_css().
echo $bpafb_s::scoped_vars_css($bpafb_uid, [
	'--bpafb-fab-size'     => $bpafb_s::px($attributes, 'size'),
	'--bpafb-fab-offset-x' => $bpafb_s::px($attributes, 'offsetX'),
	'--bpafb-fab-offset-y' => $bpafb_s::px($attributes, 'offsetY'),
	'--bpafb-fab-bg'       => $bpafb_s::color($attributes, 'mainBgColor'),
	'--bpafb-fab-color'    => $bpafb_s::color($attributes, 'mainColor'),
	'--bpafb-fab-custom'   => $bpafb_official ? '' : $bpafb_s::color($attributes, 'channelColor'),
]);

printf(
	'<div %1$s>%2$s</div>',
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	get_block_wrapper_attributes([
		'class' => sprintf(
			'bpafb-fab bpafb-fab--%1$s%2$s%3$s bpafb-uid-%4$s',
			$bpafb_position,
			!empty($attributes['showMainLabel']) ? ' bpafb-fab--main-label' : '',
			(!isset($attributes['showLabels']) || !empty($attributes['showLabels'])) ? ' bpafb-fab--labels' : '',
			$bpafb_uid
		),
	]),
	$bpafb_html // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped above.
);
