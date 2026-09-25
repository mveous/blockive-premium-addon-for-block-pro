<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Login block: a compact login/logout link (for
 * headers) or a full login form. Logged-in visitors get a greeting and a
 * logout link in both layouts.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block default content (unused, dynamic block).
 * @var WP_Block $block      Block instance.
 */

$bpafb_uid = Bpafb_Pro_Site_Blocks::uid($attributes, 'bpafb-login-');
$bpafb_layout = isset($attributes['layout']) && 'form' === $attributes['layout'] ? 'form' : 'link';
$bpafb_align = isset($attributes['align']) && in_array($attributes['align'], ['left', 'center', 'right'], true) ? $attributes['align'] : 'left';

$bpafb_current_url = isset($_SERVER['HTTP_HOST'], $_SERVER['REQUEST_URI'])
	? esc_url_raw((is_ssl() ? 'https://' : 'http://') . sanitize_text_field(wp_unslash($_SERVER['HTTP_HOST'])) . sanitize_text_field(wp_unslash($_SERVER['REQUEST_URI'])))
	: home_url('/');

$bpafb_resolve_redirect = function ($mode) use ($attributes, $bpafb_current_url) {
	if ('home' === $mode) {
		return home_url('/');
	}
	if ('custom' === $mode && !empty($attributes['redirectUrl'])) {
		return esc_url_raw($attributes['redirectUrl']);
	}
	return $bpafb_current_url;
};

$bpafb_login_redirect = $bpafb_resolve_redirect(isset($attributes['redirect']) ? $attributes['redirect'] : 'current');
$bpafb_logout_redirect = $bpafb_resolve_redirect(isset($attributes['logoutRedirect']) ? $attributes['logoutRedirect'] : 'current');

$bpafb_inner = '';

if (is_user_logged_in()) {
	$bpafb_user = wp_get_current_user();

	if (!empty($attributes['accountUrl'])) {
		$bpafb_account_url = $attributes['accountUrl'];
	} elseif (function_exists('wc_get_page_permalink')) {
		$bpafb_account_url = wc_get_page_permalink('myaccount');
	} else {
		$bpafb_account_url = get_edit_profile_url($bpafb_user->ID);
	}

	$bpafb_greeting = '';
	if (!isset($attributes['showGreeting']) || !empty($attributes['showGreeting'])) {
		$bpafb_greeting_format = !empty($attributes['greetingText']) ? $attributes['greetingText'] : __('Hi, %s', 'blockive-premium-addon-for-block-pro');
		$bpafb_greeting_text = false !== strpos($bpafb_greeting_format, '%s')
			? str_replace('%s', $bpafb_user->display_name, $bpafb_greeting_format)
			: $bpafb_greeting_format;

		$bpafb_avatar = (!isset($attributes['showAvatar']) || !empty($attributes['showAvatar']))
			? get_avatar($bpafb_user->ID, 28, '', '', ['class' => 'bpafb-tb-login__avatar'])
			: '';

		$bpafb_greeting = sprintf(
			'<a class="bpafb-tb-login__account" href="%1$s">%2$s<span>%3$s</span></a>',
			esc_url($bpafb_account_url),
			$bpafb_avatar ? $bpafb_avatar : '',
			esc_html($bpafb_greeting_text)
		);
	}

	$bpafb_inner = $bpafb_greeting . sprintf(
		'<a class="bpafb-tb-login__link bpafb-tb-login__logout" href="%1$s">%2$s</a>',
		esc_url(wp_logout_url($bpafb_logout_redirect)),
		esc_html(!empty($attributes['logoutText']) ? $attributes['logoutText'] : __('Log Out', 'blockive-premium-addon-for-block-pro'))
	);
} elseif ('link' === $bpafb_layout) {
	$bpafb_login_url = !empty($attributes['loginUrl']) ? $attributes['loginUrl'] : wp_login_url($bpafb_login_redirect);
	$bpafb_inner = sprintf(
		'<a class="bpafb-tb-login__link bpafb-tb-login__login" href="%1$s">%2$s</a>',
		esc_url($bpafb_login_url),
		esc_html(!empty($attributes['loginText']) ? $attributes['loginText'] : __('Log In', 'blockive-premium-addon-for-block-pro'))
	);
} else {
	$bpafb_show_labels = !isset($attributes['showLabels']) || !empty($attributes['showLabels']);

	$bpafb_inner = wp_login_form([
		'echo'           => false,
		'redirect'       => $bpafb_login_redirect,
		'form_id'        => 'bpafb-login-form-' . $bpafb_uid,
		'id_username'    => 'bpafb-login-user-' . $bpafb_uid,
		'id_password'    => 'bpafb-login-pass-' . $bpafb_uid,
		'id_remember'    => 'bpafb-login-remember-' . $bpafb_uid,
		'id_submit'      => 'bpafb-login-submit-' . $bpafb_uid,
		'remember'       => !isset($attributes['showRemember']) || !empty($attributes['showRemember']),
		'label_log_in'   => !empty($attributes['buttonText']) ? $attributes['buttonText'] : __('Log In', 'blockive-premium-addon-for-block-pro'),
	]);

	if (!$bpafb_show_labels) {
		$bpafb_inner = str_replace('<form ', '<form data-bpafb-hide-labels="1" ', $bpafb_inner);
	}

	$bpafb_links = [];
	if (!isset($attributes['showLostPassword']) || !empty($attributes['showLostPassword'])) {
		$bpafb_links[] = '<a href="' . esc_url(wp_lostpassword_url($bpafb_login_redirect)) . '">' . esc_html__('Lost your password?', 'blockive-premium-addon-for-block-pro') . '</a>';
	}
	if ((!isset($attributes['showRegister']) || !empty($attributes['showRegister'])) && get_option('users_can_register')) {
		$bpafb_links[] = '<a href="' . esc_url(wp_registration_url()) . '">' . esc_html__('Register', 'blockive-premium-addon-for-block-pro') . '</a>';
	}
	if ($bpafb_links) {
		$bpafb_inner .= '<p class="bpafb-tb-login__links">' . implode('<span aria-hidden="true"> | </span>', $bpafb_links) . '</p>';
	}
}

// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped inside scoped_vars_css().
echo Bpafb_Pro_Site_Blocks::scoped_vars_css($bpafb_uid, array_merge([
	'--bpafb-login-text-color'         => Bpafb_Pro_Site_Blocks::color($attributes, 'textColor'),
	'--bpafb-login-text-hover-color'   => Bpafb_Pro_Site_Blocks::color($attributes, 'textHoverColor'),
	'--bpafb-login-button-color'       => Bpafb_Pro_Site_Blocks::color($attributes, 'buttonColor'),
	'--bpafb-login-button-bg'          => Bpafb_Pro_Site_Blocks::color($attributes, 'buttonBgColor'),
	'--bpafb-login-button-hover-color' => Bpafb_Pro_Site_Blocks::color($attributes, 'buttonHoverColor'),
	'--bpafb-login-button-hover-bg'    => Bpafb_Pro_Site_Blocks::color($attributes, 'buttonHoverBgColor'),
	'--bpafb-login-button-radius'      => Bpafb_Pro_Site_Blocks::px($attributes, 'buttonRadius'),
	'--bpafb-login-field-bg'           => Bpafb_Pro_Site_Blocks::color($attributes, 'fieldBgColor'),
	'--bpafb-login-field-border'       => Bpafb_Pro_Site_Blocks::color($attributes, 'fieldBorderColor'),
	'--bpafb-login-field-radius'       => Bpafb_Pro_Site_Blocks::px($attributes, 'fieldRadius'),
	'--bpafb-login-label-color'        => Bpafb_Pro_Site_Blocks::color($attributes, 'labelColor'),
], Bpafb_Pro_Site_Blocks::typography_vars($attributes, 'text', '--bpafb-login-text')));

printf(
	'<div %1$s>%2$s</div>',
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	get_block_wrapper_attributes([
		'class' => 'bpafb-tb-login bpafb-tb-login--' . $bpafb_layout . ' bpafb-tb-align-' . $bpafb_align . ' bpafb-uid-' . $bpafb_uid,
	]),
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped parts plus core's wp_login_form().
	$bpafb_inner
);
