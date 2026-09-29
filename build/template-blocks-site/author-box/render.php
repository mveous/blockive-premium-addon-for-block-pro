<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Author Box Template Block: the post author's
 * avatar, name, bio, and a link to their posts or website - or a custom
 * person entered in the block.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block default content (unused, dynamic block).
 * @var WP_Block $block      Block instance.
 */

$bpafb_s = 'Bpafb_Pro_Site_Blocks';
$bpafb_uid = $bpafb_s::uid($attributes, 'bpafb-author-box-');
$bpafb_custom = isset($attributes['source']) && 'custom' === $attributes['source'];

$bpafb_avatar_size = isset($attributes['avatarSize']) ? max(24, min(300, absint($attributes['avatarSize']))) : 96;
$bpafb_name = '';
$bpafb_bio = '';
$bpafb_avatar = '';
$bpafb_archive_url = '';
$bpafb_website = '';

if ($bpafb_custom) {
	$bpafb_name = isset($attributes['customName']) ? $attributes['customName'] : '';
	$bpafb_bio = isset($attributes['customBio']) ? $attributes['customBio'] : '';
	$bpafb_website = isset($attributes['customLink']) ? $attributes['customLink'] : '';
	$bpafb_img = $bpafb_s::image_url(isset($attributes['customImageId']) ? absint($attributes['customImageId']) : 0, isset($attributes['customImageUrl']) ? $attributes['customImageUrl'] : '', 'medium');
	if ($bpafb_img) {
		$bpafb_avatar = '<img class="bpafb-author-box__avatar" src="' . esc_url($bpafb_img) . '" width="' . $bpafb_avatar_size . '" height="' . $bpafb_avatar_size . '" alt="" loading="lazy" decoding="async">';
	}
} else {
	$bpafb_post_id = Bpafb_Template_Block_Render::get_post_id($block);
	$bpafb_author_id = $bpafb_post_id ? (int) get_post_field('post_author', $bpafb_post_id) : 0;
	if (!$bpafb_author_id) {
		return;
	}
	$bpafb_name = get_the_author_meta('display_name', $bpafb_author_id);
	$bpafb_bio = get_the_author_meta('description', $bpafb_author_id);
	$bpafb_website = get_the_author_meta('user_url', $bpafb_author_id);
	$bpafb_archive_url = get_author_posts_url($bpafb_author_id);
	// The name is printed right beside it, so the photo is decorative.
	$bpafb_avatar = get_avatar($bpafb_author_id, $bpafb_avatar_size * 2, '', '', [
		'class'  => 'bpafb-author-box__avatar',
		'width'  => $bpafb_avatar_size,
		'height' => $bpafb_avatar_size,
	]);
}

if ('' === trim($bpafb_name) && '' === trim($bpafb_bio)) {
	return;
}

// Where the name and the button link to. A custom person only has a website.
$bpafb_target = function ($choice) use ($bpafb_custom, $bpafb_archive_url, $bpafb_website) {
	if ('none' === $choice) {
		return '';
	}
	if ($bpafb_custom || 'website' === $choice) {
		return $bpafb_website;
	}
	return $bpafb_archive_url;
};

$bpafb_html = '';
if (!isset($attributes['showAvatar']) || !empty($attributes['showAvatar'])) {
	$bpafb_html .= $bpafb_avatar ? '<div class="bpafb-author-box__media">' . $bpafb_avatar . '</div>' : '';
}

$bpafb_body = '';
if ((!isset($attributes['showName']) || !empty($attributes['showName'])) && '' !== trim($bpafb_name)) {
	$bpafb_tag = isset($attributes['nameTag']) && in_array($attributes['nameTag'], ['h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div', 'span'], true) ? $attributes['nameTag'] : 'h4';
	$bpafb_name_url = $bpafb_target(isset($attributes['nameLinkTo']) ? $attributes['nameLinkTo'] : 'archive');
	$bpafb_body .= sprintf(
		'<%1$s class="bpafb-author-box__name">%2$s</%1$s>',
		tag_escape($bpafb_tag),
		$bpafb_name_url ? '<a href="' . esc_url($bpafb_name_url) . '">' . esc_html($bpafb_name) . '</a>' : esc_html($bpafb_name)
	);
}
if ((!isset($attributes['showBio']) || !empty($attributes['showBio'])) && '' !== trim($bpafb_bio)) {
	$bpafb_body .= '<div class="bpafb-author-box__bio">' . wpautop(wp_kses_post($bpafb_bio)) . '</div>';
}
if (!isset($attributes['showLink']) || !empty($attributes['showLink'])) {
	$bpafb_button_url = $bpafb_target(isset($attributes['linkTo']) ? $attributes['linkTo'] : 'archive');
	$bpafb_button_text = isset($attributes['linkText']) && '' !== trim($attributes['linkText']) ? $attributes['linkText'] : __('All Posts', 'blockive-premium-addon-for-block-pro');
	if ($bpafb_button_url) {
		$bpafb_style = isset($attributes['buttonStyle']) && in_array($attributes['buttonStyle'], ['outline', 'filled', 'link'], true) ? $attributes['buttonStyle'] : 'outline';
		$bpafb_body .= sprintf(
			'<a class="bpafb-author-box__button bpafb-author-box__button--%1$s" href="%2$s">%3$s</a>',
			$bpafb_style,
			esc_url($bpafb_button_url),
			esc_html($bpafb_button_text)
		);
	}
}
$bpafb_html .= $bpafb_body ? '<div class="bpafb-author-box__body">' . $bpafb_body . '</div>' : '';

$bpafb_layout = isset($attributes['layout']) && in_array($attributes['layout'], ['left', 'above', 'right'], true) ? $attributes['layout'] : 'left';
$bpafb_align = isset($attributes['align']) && in_array($attributes['align'], ['left', 'center', 'right'], true) ? $attributes['align'] : 'left';

// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped inside scoped_vars_css().
echo $bpafb_s::scoped_vars_css($bpafb_uid, array_merge(
	[
		'--bpafb-author-box-gap'           => $bpafb_s::px($attributes, 'gap'),
		'--bpafb-author-box-avatar-size'   => $bpafb_avatar_size . 'px',
		'--bpafb-author-box-avatar-radius' => isset($attributes['avatarRadius']) && is_numeric($attributes['avatarRadius']) ? min(50, absint($attributes['avatarRadius'])) . '%' : '',
		'--bpafb-author-box-avatar-border' => $bpafb_s::px($attributes, 'avatarBorderWidth'),
		'--bpafb-author-box-avatar-border-color' => $bpafb_s::color($attributes, 'avatarBorderColor'),
		'--bpafb-author-box-name-color'    => $bpafb_s::color($attributes, 'nameColor'),
		'--bpafb-author-box-name-hover'    => $bpafb_s::color($attributes, 'nameHoverColor'),
		'--bpafb-author-box-bio-color'     => $bpafb_s::color($attributes, 'bioColor'),
		'--bpafb-author-box-btn-color'     => $bpafb_s::color($attributes, 'buttonColor'),
		'--bpafb-author-box-btn-bg'        => $bpafb_s::color($attributes, 'buttonBgColor'),
		'--bpafb-author-box-btn-border'    => $bpafb_s::color($attributes, 'buttonBorderColor'),
		'--bpafb-author-box-btn-hover-color' => $bpafb_s::color($attributes, 'buttonHoverColor'),
		'--bpafb-author-box-btn-hover-bg'  => $bpafb_s::color($attributes, 'buttonHoverBgColor'),
		'--bpafb-author-box-btn-radius'    => $bpafb_s::px($attributes, 'buttonRadius'),
		'--bpafb-author-box-bg'            => $bpafb_s::color($attributes, 'bgColor'),
		'--bpafb-author-box-border-color'  => $bpafb_s::color($attributes, 'borderColor'),
		'--bpafb-author-box-border-width'  => $bpafb_s::px($attributes, 'borderWidth'),
		'--bpafb-author-box-radius'        => $bpafb_s::px($attributes, 'borderRadius'),
		'--bpafb-author-box-padding'       => $bpafb_s::px($attributes, 'padding'),
	],
	$bpafb_s::typography_vars($attributes, 'name', '--bpafb-author-box-name'),
	$bpafb_s::typography_vars($attributes, 'bio', '--bpafb-author-box-bio')
));

printf(
	'<div %1$s>%2$s</div>',
	// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped above.
	get_block_wrapper_attributes([
		'class' => sprintf('bpafb-author-box bpafb-author-box--%1$s bpafb-author-box--align-%2$s bpafb-uid-%3$s', $bpafb_layout, $bpafb_align, $bpafb_uid),
	]),
	$bpafb_html
	// phpcs:enable
);
