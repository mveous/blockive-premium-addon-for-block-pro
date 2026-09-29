<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Search Form block.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block default content (unused, dynamic block).
 * @var WP_Block $block      Block instance.
 */

$bpafb_skin = isset($attributes['skin']) && in_array($attributes['skin'], ['classic', 'minimal', 'full_screen'], true) ? $attributes['skin'] : 'classic';
$bpafb_align = isset($attributes['align']) && in_array($attributes['align'], ['left', 'center', 'right'], true) ? $attributes['align'] : 'left';
$bpafb_uid = Bpafb_Pro_Site_Blocks::uid($attributes, 'bpafb-search-');
$bpafb_placeholder = isset($attributes['placeholder']) ? $attributes['placeholder'] : __('Search...', 'blockive-premium-addon-for-block-pro');
$bpafb_post_type = !empty($attributes['postType']) && post_type_exists($attributes['postType']) ? $attributes['postType'] : '';
$bpafb_input_id = 'bpafb-search-input-' . $bpafb_uid;
$bpafb_live = !empty($attributes['liveResults']) && class_exists('Bpafb_Pro_Live_Search');
$bpafb_results_id = 'bpafb-search-results-' . $bpafb_uid;

// Live results (view.js): the field becomes a combobox with a listbox of
// matches under it, and a status line for screen readers.
$bpafb_combobox = '';
$bpafb_results = '';
if ($bpafb_live) {
	$bpafb_combobox = sprintf(' role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="%s"', esc_attr($bpafb_results_id));
	$bpafb_results = sprintf(
		'<div class="bpafb-tb-search__results" hidden><ul id="%1$s" class="bpafb-tb-search__list" role="listbox" aria-label="%2$s"></ul><p class="bpafb-tb-search__empty"></p></div><div class="bpafb-tb-search__status screen-reader-text" role="status" aria-live="polite"></div>',
		esc_attr($bpafb_results_id),
		esc_attr__('Search results', 'blockive-premium-addon-for-block-pro')
	);
}

$bpafb_button = '';
if ('classic' === $bpafb_skin) {
	$bpafb_is_text = isset($attributes['buttonType']) && 'text' === $attributes['buttonType'];
	$bpafb_button = sprintf(
		'<button type="submit" class="bpafb-tb-search__button" aria-label="%1$s">%2$s</button>',
		esc_attr__('Search', 'blockive-premium-addon-for-block-pro'),
		$bpafb_is_text
			? esc_html(!empty($attributes['buttonText']) ? $attributes['buttonText'] : __('Search', 'blockive-premium-addon-for-block-pro'))
			: Bpafb_Pro_Site_Blocks::svg_icon('search')
	);
} elseif ('minimal' === $bpafb_skin) {
	$bpafb_button = '<span class="bpafb-tb-search__icon">' . Bpafb_Pro_Site_Blocks::svg_icon('search') . '</span>';
} else {
	$bpafb_button = sprintf(
		'<button type="button" class="bpafb-tb-search__close" aria-label="%1$s">%2$s</button>',
		esc_attr__('Close search', 'blockive-premium-addon-for-block-pro'),
		Bpafb_Pro_Site_Blocks::svg_icon('close')
	);
}

$bpafb_form = sprintf(
	'<form role="search" method="get" class="bpafb-tb-search__form" action="%1$s">'
	. '<label class="screen-reader-text" for="%2$s">%3$s</label>'
	. '<input id="%2$s" class="bpafb-tb-search__input" type="search" name="s" value="%4$s" placeholder="%5$s" autocomplete="off"%8$s>'
	. '%6$s%7$s%9$s</form>',
	esc_url(home_url('/')),
	esc_attr($bpafb_input_id),
	esc_html__('Search for:', 'blockive-premium-addon-for-block-pro'),
	esc_attr(get_search_query()),
	esc_attr($bpafb_placeholder),
	$bpafb_post_type ? '<input type="hidden" name="post_type" value="' . esc_attr($bpafb_post_type) . '">' : '',
	$bpafb_button,
	$bpafb_combobox, // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped above.
	$bpafb_results // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped above.
);

if ('full_screen' === $bpafb_skin) {
	$bpafb_inner = sprintf(
		'<button type="button" class="bpafb-tb-search__toggle" aria-expanded="false" aria-controls="%1$s" aria-label="%2$s">%3$s</button>'
		. '<div id="%1$s" class="bpafb-tb-search__overlay" role="dialog" aria-modal="true" aria-label="%2$s" hidden>%4$s</div>',
		esc_attr('bpafb-search-overlay-' . $bpafb_uid),
		esc_attr__('Search', 'blockive-premium-addon-for-block-pro'),
		Bpafb_Pro_Site_Blocks::svg_icon('search'),
		$bpafb_form
	);
} else {
	$bpafb_inner = $bpafb_form;
}

// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped inside scoped_vars_css().
echo Bpafb_Pro_Site_Blocks::scoped_vars_css($bpafb_uid, array_merge([
	'--bpafb-search-width'              => Bpafb_Pro_Site_Blocks::px($attributes, 'inputWidth'),
	'--bpafb-search-height'             => Bpafb_Pro_Site_Blocks::px($attributes, 'height'),
	'--bpafb-search-toggle-size'        => Bpafb_Pro_Site_Blocks::px($attributes, 'toggleSize'),
	'--bpafb-search-input-color'        => Bpafb_Pro_Site_Blocks::color($attributes, 'inputColor'),
	'--bpafb-search-input-bg'           => Bpafb_Pro_Site_Blocks::color($attributes, 'inputBgColor'),
	'--bpafb-search-input-focus-bg'     => Bpafb_Pro_Site_Blocks::color($attributes, 'inputFocusBgColor'),
	'--bpafb-search-border-color'       => Bpafb_Pro_Site_Blocks::color($attributes, 'inputBorderColor'),
	'--bpafb-search-focus-border-color' => Bpafb_Pro_Site_Blocks::color($attributes, 'inputFocusBorderColor'),
	'--bpafb-search-border-width'       => Bpafb_Pro_Site_Blocks::px($attributes, 'borderWidth'),
	'--bpafb-search-radius'             => Bpafb_Pro_Site_Blocks::px($attributes, 'borderRadius'),
	'--bpafb-search-button-color'       => Bpafb_Pro_Site_Blocks::color($attributes, 'buttonColor'),
	'--bpafb-search-button-bg'          => Bpafb_Pro_Site_Blocks::color($attributes, 'buttonBgColor'),
	'--bpafb-search-button-hover-color' => Bpafb_Pro_Site_Blocks::color($attributes, 'buttonHoverColor'),
	'--bpafb-search-button-hover-bg'    => Bpafb_Pro_Site_Blocks::color($attributes, 'buttonHoverBgColor'),
	'--bpafb-search-button-width'       => Bpafb_Pro_Site_Blocks::px($attributes, 'buttonWidth'),
	'--bpafb-search-toggle-color'       => Bpafb_Pro_Site_Blocks::color($attributes, 'toggleColor'),
	'--bpafb-search-toggle-hover-color' => Bpafb_Pro_Site_Blocks::color($attributes, 'toggleHoverColor'),
	'--bpafb-search-overlay-bg'         => Bpafb_Pro_Site_Blocks::color($attributes, 'overlayBgColor'),
	'--bpafb-search-results-bg'         => Bpafb_Pro_Site_Blocks::color($attributes, 'resultsBgColor'),
	'--bpafb-search-results-color'      => Bpafb_Pro_Site_Blocks::color($attributes, 'resultsTextColor'),
	'--bpafb-search-results-active-bg'  => Bpafb_Pro_Site_Blocks::color($attributes, 'resultsActiveBgColor'),
], Bpafb_Pro_Site_Blocks::typography_vars($attributes, 'input', '--bpafb-search-input')));

printf(
	'<div %1$s>%2$s</div>',
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	get_block_wrapper_attributes(array_merge([
		'class' => 'bpafb-tb-search bpafb-tb-search--' . $bpafb_skin . ' bpafb-tb-align-' . $bpafb_align . ' bpafb-uid-' . $bpafb_uid,
	], $bpafb_live ? [
		'data-live' => wp_json_encode([
			'url'     => Bpafb_Pro_Live_Search::url(),
			'count'   => isset($attributes['liveCount']) ? max(1, min(Bpafb_Pro_Live_Search::MAX_RESULTS, absint($attributes['liveCount']))) : 5,
			'min'     => isset($attributes['liveMinChars']) ? max(1, min(5, absint($attributes['liveMinChars']))) : 2,
			'image'   => !isset($attributes['liveShowImage']) || !empty($attributes['liveShowImage']),
			'excerpt' => !empty($attributes['liveShowExcerpt']),
			'i18n'    => [
				/* translators: %d: number of results. */
				'count'   => __('%d results available. Use the up and down arrow keys to choose one.', 'blockive-premium-addon-for-block-pro'),
				/* translators: %s: what was searched for. */
				'none'    => __('No results for “%s”.', 'blockive-premium-addon-for-block-pro'),
				/* translators: %d: number of results. */
				'all'     => __('See all %d results', 'blockive-premium-addon-for-block-pro'),
				'error'   => __('Results could not be loaded. Press Enter to search.', 'blockive-premium-addon-for-block-pro'),
			],
		]),
	] : [])),
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- built from escaped parts above.
	$bpafb_inner
);
