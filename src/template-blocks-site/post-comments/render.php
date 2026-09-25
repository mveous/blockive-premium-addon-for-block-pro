<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Post Comments Template Block: the post's
 * approved comments (threaded, following Settings > Discussion) and the
 * comment form. Uses WordPress's own wp_list_comments() and comment_form(),
 * so replies, moderation notices, and comment plugins keep working; the
 * built-in comment-reply script moves the form under the comment being
 * answered.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block default content (unused, dynamic block).
 * @var WP_Block $block      Block instance.
 */

$bpafb_post_id = Bpafb_Template_Block_Render::get_post_id($block);
if (!$bpafb_post_id || post_password_required($bpafb_post_id)) {
	return;
}

$bpafb_open = comments_open($bpafb_post_id);
$bpafb_count = (int) get_comments_number($bpafb_post_id);
if (!$bpafb_open && !$bpafb_count) {
	return; // Comments are off and there are none to show.
}

$bpafb_s = 'Bpafb_Pro_Site_Blocks';
$bpafb_uid = $bpafb_s::uid($attributes, 'bpafb-post-comments-');
$bpafb_show_avatar = !isset($attributes['showAvatar']) || !empty($attributes['showAvatar']);
$bpafb_avatar_size = isset($attributes['avatarSize']) ? max(16, min(150, absint($attributes['avatarSize']))) : 48;
$bpafb_title_tag = isset($attributes['titleTag']) && in_array($attributes['titleTag'], ['h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div'], true) ? $attributes['titleTag'] : 'h3';

$bpafb_order = isset($attributes['order']) && in_array($attributes['order'], ['asc', 'desc'], true)
	? strtoupper($attributes['order'])
	: strtoupper(get_option('comment_order', 'asc'));
$bpafb_threaded = (bool) get_option('thread_comments');

// wp_list_comments(), the reply links, and comment_form() read the global
// post, which inside a Template Block (or the editor preview) is not
// always the post being shown.
global $post;
$bpafb_previous_post = $post;
$post = get_post($bpafb_post_id); // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited -- restored below.
setup_postdata($post);

$bpafb_comments = get_comments([
	'post_id' => $bpafb_post_id,
	'status'  => 'approve',
	'order'   => $bpafb_order,
	// Commenters also see their own comment while it waits for moderation.
	'include_unapproved' => array_filter([get_current_user_id(), wp_get_unapproved_comment_author_email()]),
]);

$bpafb_html = '';

if ((!isset($attributes['showTitle']) || !empty($attributes['showTitle'])) && $bpafb_count) {
	$bpafb_html .= sprintf(
		'<%1$s class="bpafb-post-comments__title">%2$s</%1$s>',
		tag_escape($bpafb_title_tag),
		esc_html(sprintf(
			/* translators: %s: number of comments. */
			_n('%s Comment', '%s Comments', $bpafb_count, 'blockive-premium-addon-for-block-pro'),
			number_format_i18n($bpafb_count)
		))
	);
}

if ($bpafb_comments) {
	$bpafb_html .= '<ol class="bpafb-post-comments__list">' . wp_list_comments([
		'style'             => 'ol',
		'format'            => 'html5',
		'type'              => 'all',
		'avatar_size'       => $bpafb_show_avatar ? $bpafb_avatar_size : 0,
		'max_depth'         => $bpafb_threaded ? (int) get_option('thread_comments_depth', 5) : 1,
		'reverse_top_level' => false,
		'short_ping'        => true,
		'per_page'          => 0,
		'echo'              => false,
	], $bpafb_comments) . '</ol>';
}

if (!$bpafb_open) {
	$bpafb_closed = isset($attributes['closedText']) ? $attributes['closedText'] : __('Comments are closed.', 'blockive-premium-addon-for-block-pro');
	if ('' !== trim($bpafb_closed)) {
		$bpafb_html .= '<p class="bpafb-post-comments__closed">' . esc_html($bpafb_closed) . '</p>';
	}
} elseif (!isset($attributes['showForm']) || !empty($attributes['showForm'])) {
	if ($bpafb_threaded) {
		wp_enqueue_script('comment-reply');
	}
	ob_start();
	comment_form([
		'title_reply'        => isset($attributes['formTitle']) ? esc_html($attributes['formTitle']) : __('Leave a Reply', 'blockive-premium-addon-for-block-pro'),
		'title_reply_before' => '<' . tag_escape($bpafb_title_tag) . ' id="reply-title" class="comment-reply-title bpafb-post-comments__form-title">',
		'title_reply_after'  => '</' . tag_escape($bpafb_title_tag) . '>',
		'label_submit'       => isset($attributes['submitText']) && '' !== trim($attributes['submitText']) ? $attributes['submitText'] : __('Post Comment', 'blockive-premium-addon-for-block-pro'),
		'class_submit'       => 'submit bpafb-post-comments__submit',
	], $bpafb_post_id);
	$bpafb_html .= ob_get_clean();
}

$post = $bpafb_previous_post; // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
if ($post) {
	setup_postdata($post);
} else {
	wp_reset_postdata();
}

// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped inside scoped_vars_css().
echo $bpafb_s::scoped_vars_css($bpafb_uid, array_merge(
	[
		'--bpafb-comments-gap'          => $bpafb_s::px($attributes, 'gap'),
		'--bpafb-comments-indent'       => $bpafb_s::px($attributes, 'nestedIndent'),
		'--bpafb-comments-avatar-size'  => $bpafb_avatar_size . 'px',
		'--bpafb-comments-avatar-radius' => isset($attributes['avatarRadius']) && is_numeric($attributes['avatarRadius']) ? min(50, absint($attributes['avatarRadius'])) . '%' : '',
		'--bpafb-comments-bg'           => $bpafb_s::color($attributes, 'commentBgColor'),
		'--bpafb-comments-border-color' => $bpafb_s::color($attributes, 'commentBorderColor'),
		'--bpafb-comments-border-width' => $bpafb_s::px($attributes, 'commentBorderWidth'),
		'--bpafb-comments-radius'       => $bpafb_s::px($attributes, 'commentRadius'),
		'--bpafb-comments-padding'      => $bpafb_s::px($attributes, 'commentPadding'),
		'--bpafb-comments-title-color'  => $bpafb_s::color($attributes, 'titleColor'),
		'--bpafb-comments-author-color' => $bpafb_s::color($attributes, 'authorColor'),
		'--bpafb-comments-meta-color'   => $bpafb_s::color($attributes, 'metaColor'),
		'--bpafb-comments-content-color' => $bpafb_s::color($attributes, 'contentColor'),
		'--bpafb-comments-link-color'   => $bpafb_s::color($attributes, 'linkColor'),
		'--bpafb-comments-field-bg'     => $bpafb_s::color($attributes, 'fieldBgColor'),
		'--bpafb-comments-field-border' => $bpafb_s::color($attributes, 'fieldBorderColor'),
		'--bpafb-comments-field-radius' => $bpafb_s::px($attributes, 'fieldRadius'),
		'--bpafb-comments-btn-color'    => $bpafb_s::color($attributes, 'buttonColor'),
		'--bpafb-comments-btn-bg'       => $bpafb_s::color($attributes, 'buttonBgColor'),
		'--bpafb-comments-btn-hover-color' => $bpafb_s::color($attributes, 'buttonHoverColor'),
		'--bpafb-comments-btn-hover-bg' => $bpafb_s::color($attributes, 'buttonHoverBgColor'),
		'--bpafb-comments-btn-radius'   => $bpafb_s::px($attributes, 'buttonRadius'),
	],
	$bpafb_s::typography_vars($attributes, 'title', '--bpafb-comments-title'),
	$bpafb_s::typography_vars($attributes, 'content', '--bpafb-comments-content')
));

printf(
	'<section %1$s>%2$s</section>',
	// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped -- core comment functions escape their own output; the rest is escaped above.
	get_block_wrapper_attributes([
		'id'         => 'comments',
		'class'      => 'bpafb-post-comments' . ((!isset($attributes['separator']) || !empty($attributes['separator'])) ? ' bpafb-post-comments--separator' : '') . ' bpafb-uid-' . $bpafb_uid,
		'aria-label' => __('Comments', 'blockive-premium-addon-for-block-pro'),
	]),
	$bpafb_html
	// phpcs:enable
);
