<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Code Highlight block: the code as plain,
 * escaped text in <pre><code>, which view.js colors with Prism and splits
 * into lines (line numbers, highlighted lines). Without JavaScript it
 * stays readable, uncolored code.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block default content (unused, dynamic block).
 * @var WP_Block $block      Block instance.
 */

$bpafb_code = isset($attributes['code']) ? (string) $attributes['code'] : '';
if ('' === trim($bpafb_code)) {
	return;
}

// Keep in sync with LANGUAGES in languages.js.
$bpafb_languages = ['markup', 'css', 'javascript', 'typescript', 'jsx', 'tsx', 'php', 'python', 'bash', 'json', 'sql', 'yaml', 'java', 'c', 'cpp', 'csharp', 'go', 'ruby', 'markdown', 'none'];
$bpafb_language = isset($attributes['language']) && in_array($attributes['language'], $bpafb_languages, true) ? $attributes['language'] : 'none';

$bpafb_s = 'Bpafb_Pro_Site_Blocks';
$bpafb_uid = $bpafb_s::uid($attributes, 'bpafb-code-');
$bpafb_title = isset($attributes['title']) ? trim(wp_strip_all_tags($attributes['title'])) : '';
$bpafb_copy = !isset($attributes['copyButton']) || !empty($attributes['copyButton']);

$bpafb_header = '';
if ('' !== $bpafb_title || $bpafb_copy) {
	// Without a title, the header only holds the Copy button, which view.js
	// shows when the browser allows copying; until then it stays hidden.
	$bpafb_header = '<div class="bpafb-code__header"' . ('' === $bpafb_title ? ' hidden' : '') . '>'
		. '<span class="bpafb-code__title">' . esc_html($bpafb_title) . '</span>'
		. ($bpafb_copy ? sprintf(
			'<button type="button" class="bpafb-code__copy" hidden data-copied="%1$s"><i class="fa-regular fa-copy" aria-hidden="true"></i><span>%2$s</span></button><span class="bpafb-code__status" role="status"></span>',
			esc_attr__('Copied', 'blockive-premium-addon-for-block-pro'),
			esc_html__('Copy', 'blockive-premium-addon-for-block-pro')
		) : '')
		. '</div>';
}

$bpafb_label = '' !== $bpafb_title
	? $bpafb_title
	/* translators: %s: programming language, e.g. "php". */
	: ('none' === $bpafb_language ? __('Code', 'blockive-premium-addon-for-block-pro') : sprintf(__('%s code', 'blockive-premium-addon-for-block-pro'), strtoupper($bpafb_language)));

$bpafb_max_height = isset($attributes['maxHeight']) && is_numeric($attributes['maxHeight']) && $attributes['maxHeight'] > 0 ? absint($attributes['maxHeight']) . 'px' : '';

// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped inside scoped_vars_css().
echo $bpafb_s::scoped_vars_css($bpafb_uid, [
	'--bpafb-code-font-size'  => $bpafb_s::px($attributes, 'fontSize'),
	'--bpafb-code-max-height' => $bpafb_max_height,
	'--bpafb-code-radius'     => $bpafb_s::px($attributes, 'borderRadius'),
	'--bpafb-code-highlight'  => $bpafb_s::color($attributes, 'highlightColor'),
]);

printf(
	'<div %1$s>%2$s<pre class="bpafb-code__pre language-%3$s" tabindex="0" aria-label="%4$s"><code class="language-%3$s">%5$s</code></pre></div>',
	// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped above.
	get_block_wrapper_attributes([
		'class'         => sprintf(
			'bpafb-code bpafb-code--%1$s%2$s%3$s bpafb-uid-%4$s',
			isset($attributes['theme']) && 'light' === $attributes['theme'] ? 'light' : 'dark',
			(!isset($attributes['lineNumbers']) || !empty($attributes['lineNumbers'])) ? ' bpafb-code--line-numbers' : '',
			!empty($attributes['wordWrap']) ? ' bpafb-code--wrap' : '',
			$bpafb_uid
		),
		'data-language' => $bpafb_language,
		'data-lines'    => isset($attributes['highlightLines']) ? preg_replace('/[^0-9,\s-]/', '', $attributes['highlightLines']) : '',
	]),
	$bpafb_header,
	esc_attr($bpafb_language),
	esc_attr($bpafb_label),
	esc_html($bpafb_code)
	// phpcs:enable
);
