<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Render function for the Form block. A normal HTML form that posts to
 * admin-post.php (so it works without JavaScript); view.js sends it through
 * REST instead and shows errors next to the fields. The form's settings are
 * read on the server from what was saved with the post (see
 * Bpafb_Pro_Forms), never from this markup.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block default content (unused, dynamic block).
 * @var WP_Block $block      Block instance.
 */

$bpafb_config = Bpafb_Pro_Forms::config_from_attributes($attributes);
if (!$bpafb_config['id'] || !$bpafb_config['fields']) {
	return;
}

$bpafb_s = 'Bpafb_Pro_Site_Blocks';
$bpafb_uid = $bpafb_s::uid($attributes, 'bpafb-form-');
$bpafb_form_id = $bpafb_config['id'];
$bpafb_base = 'bpafb-form-' . $bpafb_form_id;
$bpafb_show_labels = !isset($attributes['showLabels']) || !empty($attributes['showLabels']);
$bpafb_marker = (!isset($attributes['requiredMark']) || !empty($attributes['requiredMark'])) ? '<span class="bpafb-form__required" aria-hidden="true">*</span>' : '';

$bpafb_fields_html = '';
foreach ($bpafb_config['fields'] as $bpafb_field) {
	$bpafb_id = $bpafb_base . '-' . $bpafb_field['id'];
	$bpafb_name = 'fields[' . $bpafb_field['id'] . ']';
	$bpafb_help_id = $bpafb_id . '-help';
	$bpafb_error_id = $bpafb_id . '-error';
	$bpafb_described = trim(('' !== $bpafb_field['help'] ? $bpafb_help_id . ' ' : '') . $bpafb_error_id);
	$bpafb_req = $bpafb_field['required'] ? ' required' : '';
	$bpafb_label_text = '' !== $bpafb_field['label'] ? $bpafb_field['label'] : $bpafb_field['id'];
	$bpafb_label_class = 'bpafb-form__label' . ($bpafb_show_labels ? '' : ' screen-reader-text');
	$bpafb_placeholder = '' !== $bpafb_field['placeholder'] ? ' placeholder="' . esc_attr($bpafb_field['placeholder']) . '"' : '';
	$bpafb_common = ' aria-describedby="' . esc_attr($bpafb_described) . '"';

	if ('hidden' === $bpafb_field['type']) {
		$bpafb_fields_html .= '<input type="hidden" name="' . esc_attr($bpafb_name) . '" value="' . esc_attr($bpafb_field['default']) . '">';
		continue;
	}

	$bpafb_control = '';
	switch ($bpafb_field['type']) {
		case 'textarea':
			$bpafb_control = sprintf(
				'<label class="%1$s" for="%2$s">%3$s%4$s</label><textarea class="bpafb-form__input" id="%2$s" name="%5$s" rows="%6$d"%7$s%8$s%9$s>%10$s</textarea>',
				esc_attr($bpafb_label_class),
				esc_attr($bpafb_id),
				esc_html($bpafb_label_text),
				$bpafb_field['required'] ? $bpafb_marker : '',
				esc_attr($bpafb_name),
				$bpafb_field['rows'],
				$bpafb_placeholder,
				$bpafb_req,
				$bpafb_common,
				esc_textarea($bpafb_field['default'])
			);
			break;

		case 'select':
			$bpafb_opts = '<option value="">' . esc_html('' !== $bpafb_field['placeholder'] ? $bpafb_field['placeholder'] : __('Choose…', 'blockive-premium-addon-for-block-pro')) . '</option>';
			foreach ($bpafb_field['options'] as $bpafb_opt) {
				$bpafb_opts .= '<option value="' . esc_attr($bpafb_opt) . '"' . selected($bpafb_opt, $bpafb_field['default'], false) . '>' . esc_html($bpafb_opt) . '</option>';
			}
			$bpafb_control = sprintf(
				'<label class="%1$s" for="%2$s">%3$s%4$s</label><select class="bpafb-form__input" id="%2$s" name="%5$s"%6$s%7$s>%8$s</select>',
				esc_attr($bpafb_label_class),
				esc_attr($bpafb_id),
				esc_html($bpafb_label_text),
				$bpafb_field['required'] ? $bpafb_marker : '',
				esc_attr($bpafb_name),
				$bpafb_req,
				$bpafb_common,
				$bpafb_opts
			);
			break;

		case 'radio':
		case 'checkbox':
			$bpafb_items = '';
			foreach ($bpafb_field['options'] as $bpafb_i => $bpafb_opt) {
				$bpafb_items .= sprintf(
					'<label class="bpafb-form__choice"><input type="%1$s" name="%2$s" value="%3$s"%4$s%5$s> <span>%6$s</span></label>',
					$bpafb_field['type'],
					esc_attr('checkbox' === $bpafb_field['type'] ? $bpafb_name . '[]' : $bpafb_name),
					esc_attr($bpafb_opt),
					checked($bpafb_opt, $bpafb_field['default'], false),
					// A required radio group needs `required` on each input;
					// a required checkbox group is checked by view.js / the server.
					('radio' === $bpafb_field['type'] && $bpafb_field['required']) ? ' required' : '',
					esc_html($bpafb_opt)
				);
			}
			$bpafb_control = sprintf(
				'<fieldset class="bpafb-form__group"%1$s%2$s><legend class="%3$s">%4$s%5$s</legend><div class="bpafb-form__choices">%6$s</div></fieldset>',
				$bpafb_common,
				$bpafb_field['required'] ? ' data-required="1"' : '',
				esc_attr($bpafb_label_class),
				esc_html($bpafb_label_text),
				$bpafb_field['required'] ? $bpafb_marker : '',
				$bpafb_items
			);
			break;

		case 'acceptance':
			$bpafb_control = sprintf(
				'<label class="bpafb-form__choice bpafb-form__acceptance"><input type="checkbox" id="%1$s" name="%2$s" value="1"%3$s%4$s%5$s> <span>%6$s%7$s</span></label>',
				esc_attr($bpafb_id),
				esc_attr($bpafb_name),
				'1' === $bpafb_field['default'] ? ' checked' : '',
				$bpafb_req,
				$bpafb_common,
				esc_html($bpafb_label_text),
				$bpafb_field['required'] ? $bpafb_marker : ''
			);
			break;

		default:
			$bpafb_autocomplete = ['email' => 'email', 'tel' => 'tel', 'url' => 'url'];
			if ('text' === $bpafb_field['type'] && in_array($bpafb_field['id'], ['name', 'full-name', 'fullname'], true)) {
				$bpafb_autocomplete['text'] = 'name';
			}
			$bpafb_control = sprintf(
				'<label class="%1$s" for="%2$s">%3$s%4$s</label><input class="bpafb-form__input" type="%5$s" id="%2$s" name="%6$s" value="%7$s"%8$s%9$s%10$s%11$s>',
				esc_attr($bpafb_label_class),
				esc_attr($bpafb_id),
				esc_html($bpafb_label_text),
				$bpafb_field['required'] ? $bpafb_marker : '',
				esc_attr($bpafb_field['type']),
				esc_attr($bpafb_name),
				esc_attr($bpafb_field['default']),
				$bpafb_placeholder,
				$bpafb_req,
				$bpafb_common,
				isset($bpafb_autocomplete[$bpafb_field['type']]) ? ' autocomplete="' . esc_attr($bpafb_autocomplete[$bpafb_field['type']]) . '"' : ''
			);
	}

	$bpafb_fields_html .= sprintf(
		'<div class="bpafb-form__field bpafb-form__field--%1$s bpafb-form__field--w%2$s" data-field="%3$s">%4$s%5$s<p class="bpafb-form__error" id="%6$s" hidden></p></div>',
		esc_attr($bpafb_field['type']),
		esc_attr($bpafb_field['width']),
		esc_attr($bpafb_field['id']),
		$bpafb_control,
		'' !== $bpafb_field['help'] ? '<p class="bpafb-form__help" id="' . esc_attr($bpafb_help_id) . '">' . esc_html($bpafb_field['help']) . '</p>' : '',
		esc_attr($bpafb_error_id)
	);
}

// Result of a submission made without JavaScript (see handle_post_fallback()).
// phpcs:disable WordPress.Security.NonceVerification.Recommended -- only picks a message to show.
$bpafb_status_html = '';
if (isset($_GET['bpafb_form'], $_GET['bpafb_form_status']) && $bpafb_form_id === sanitize_key(wp_unslash($_GET['bpafb_form']))) {
	$bpafb_ok = 'sent' === sanitize_key(wp_unslash($_GET['bpafb_form_status']));
	$bpafb_status_html = '<p class="bpafb-form__message bpafb-form__message--' . ($bpafb_ok ? 'success' : 'error') . '">' . esc_html($bpafb_ok ? $bpafb_config['success'] : $bpafb_config['error']) . '</p>';
}
// phpcs:enable

$bpafb_button_text = isset($attributes['submitText']) && '' !== trim($attributes['submitText']) ? $attributes['submitText'] : __('Send', 'blockive-premium-addon-for-block-pro');
$bpafb_button_align = isset($attributes['buttonAlign']) && in_array($attributes['buttonAlign'], ['left', 'center', 'right', 'full'], true) ? $attributes['buttonAlign'] : 'left';
$bpafb_hint = is_singular() ? get_queried_object_id() : (int) get_the_ID();

// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped inside scoped_vars_css().
echo $bpafb_s::scoped_vars_css($bpafb_uid, array_merge(
	[
		'--bpafb-form-column-gap'    => $bpafb_s::px($attributes, 'columnGap'),
		'--bpafb-form-row-gap'       => $bpafb_s::px($attributes, 'rowGap'),
		'--bpafb-form-label-color'   => $bpafb_s::color($attributes, 'labelColor'),
		'--bpafb-form-field-color'   => $bpafb_s::color($attributes, 'fieldColor'),
		'--bpafb-form-field-bg'      => $bpafb_s::color($attributes, 'fieldBgColor'),
		'--bpafb-form-field-border'  => $bpafb_s::color($attributes, 'fieldBorderColor'),
		'--bpafb-form-field-focus'   => $bpafb_s::color($attributes, 'fieldFocusColor'),
		'--bpafb-form-field-radius'  => $bpafb_s::px($attributes, 'fieldRadius'),
		'--bpafb-form-btn-color'     => $bpafb_s::color($attributes, 'buttonColor'),
		'--bpafb-form-btn-bg'        => $bpafb_s::color($attributes, 'buttonBgColor'),
		'--bpafb-form-btn-hover-color' => $bpafb_s::color($attributes, 'buttonHoverColor'),
		'--bpafb-form-btn-hover-bg'  => $bpafb_s::color($attributes, 'buttonHoverBgColor'),
		'--bpafb-form-btn-radius'    => $bpafb_s::px($attributes, 'buttonRadius'),
	],
	$bpafb_s::typography_vars($attributes, 'label', '--bpafb-form-label'),
	$bpafb_s::typography_vars($attributes, 'field', '--bpafb-form-field')
));

printf(
	'<div %1$s><form class="bpafb-form__form" method="post" action="%2$s" data-rest="%3$s" data-sending="%4$s" data-required="%14$s">%5$s<div class="bpafb-form__fields">%6$s</div>'
		. '<div class="bpafb-form__hp" aria-hidden="true"><label>%7$s <input type="text" name="bpafb_hp" value="" tabindex="-1" autocomplete="off"></label></div>'
		. '<input type="hidden" name="action" value="bpafb_form"><input type="hidden" name="bpafb_form_id" value="%8$s"><input type="hidden" name="bpafb_post_id" value="%9$d"><input type="hidden" name="bpafb_ts" value="%10$d"><input type="hidden" name="bpafb_page" value="%11$s">'
		. '<div class="bpafb-form__actions bpafb-form__actions--%12$s"><button type="submit" class="bpafb-form__submit">%13$s</button></div>'
		. '<div class="bpafb-form__status" role="status" aria-live="polite"></div></form></div>',
	// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped above / below.
	get_block_wrapper_attributes([
		'id'    => $bpafb_base,
		'class' => 'bpafb-form bpafb-uid-' . $bpafb_uid,
	]),
	esc_url(admin_url('admin-post.php')),
	esc_url(rest_url(Bpafb_Pro_Forms::REST_NS . '/forms/' . $bpafb_form_id . '/submit')),
	esc_attr__('Sending…', 'blockive-premium-addon-for-block-pro'),
	$bpafb_status_html,
	$bpafb_fields_html,
	esc_html__('Leave this field empty', 'blockive-premium-addon-for-block-pro'),
	esc_attr($bpafb_form_id),
	$bpafb_hint,
	time(),
	'', // The page URL: filled in by view.js, or taken from the referer without JavaScript.
	$bpafb_button_align,
	esc_html($bpafb_button_text),
	esc_attr($bpafb_config['required'])
	// phpcs:enable
);
