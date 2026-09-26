<?php
/**
 * Form block back end: submissions, validation, actions, and the
 * "Form Submissions" admin screen.
 *
 * A form's settings (fields, email recipients, webhook, redirect, ...) are
 * never taken from the visitor's request. When a post containing Form
 * blocks is saved (a page, a Blockive template, a synced pattern, ...),
 * each form's settings are stored on that post as `_bpafb_form_{formId}`
 * meta; a submission only sends the form id and the field values, and the
 * settings are read back from that meta.
 *
 * Submissions arrive through REST (src/form/view.js) or, without
 * JavaScript, a plain POST to admin-post.php that redirects back with a
 * status. Both go through handle_submission().
 *
 * @package BlockivePro
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

class Bpafb_Pro_Forms
{
	const BLOCK_NAME   = 'blockive-premium-addon-for-block/form';
	const POST_TYPE    = 'bpafb_submission';
	const META_PREFIX  = '_bpafb_form_';
	const REST_NS      = 'blockive-pro/v1';
	const FIELD_TYPES  = ['text', 'email', 'textarea', 'url', 'tel', 'number', 'date', 'select', 'radio', 'checkbox', 'acceptance', 'hidden'];
	const MIN_SECONDS  = 3;
	const RATE_LIMIT   = 10;
	const RATE_WINDOW  = 600;

	/**
	 * @var Bpafb_Pro_Forms|null
	 */
	private static $instance = null;

	/**
	 * @return Bpafb_Pro_Forms
	 */
	public static function get_instance()
	{
		if (null === self::$instance) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	private function __construct()
	{
		add_action('init', [$this, 'register_post_type']);
		add_action('save_post', [$this, 'index_forms'], 10, 2);
		add_action('rest_api_init', [$this, 'register_route']);
		add_action('admin_post_bpafb_form', [$this, 'handle_post_fallback']);
		add_action('admin_post_nopriv_bpafb_form', [$this, 'handle_post_fallback']);
		add_action('add_meta_boxes_' . self::POST_TYPE, [$this, 'add_meta_box']);
		add_filter('manage_' . self::POST_TYPE . '_posts_columns', [$this, 'columns']);
		add_filter('post_row_actions', [$this, 'row_actions'], 10, 2);
		add_action('manage_' . self::POST_TYPE . '_posts_custom_column', [$this, 'column_content'], 10, 2);
		add_filter('wp_privacy_personal_data_exporters', [$this, 'register_exporter']);
		add_filter('wp_privacy_personal_data_erasers', [$this, 'register_eraser']);
	}

	private function __clone()
	{
	}

	public function __wakeup()
	{
		throw new \Exception('Cannot unserialize a singleton.');
	}

	/* ------------------------------------------------------------------
	 * Storage
	 * ------------------------------------------------------------------ */

	/**
	 * Submissions: private, listed under Blockive Templates, not creatable
	 * by hand.
	 */
	public function register_post_type()
	{
		register_post_type(self::POST_TYPE, [
			'labels'          => [
				'name'          => __('Form Submissions', 'blockive-premium-addon-for-block-pro'),
				'singular_name' => __('Form Submission', 'blockive-premium-addon-for-block-pro'),
				'menu_name'     => __('Form Submissions', 'blockive-premium-addon-for-block-pro'),
				'all_items'     => __('Form Submissions', 'blockive-premium-addon-for-block-pro'),
				'edit_item'     => __('Form Submission', 'blockive-premium-addon-for-block-pro'),
				'search_items'  => __('Search Submissions', 'blockive-premium-addon-for-block-pro'),
				'not_found'     => __('No submissions yet.', 'blockive-premium-addon-for-block-pro'),
			],
			'public'          => false,
			'show_ui'         => true,
			'show_in_menu'    => 'edit.php?post_type=' . Bpafb_Template_Post_Type::POST_TYPE,
			'show_in_rest'    => false,
			// Read-only: no title / editor, and the Publish box is swapped for
			// a details box (see add_meta_box()).
			'supports'        => false,
			'capability_type' => 'post',
			'capabilities'    => ['create_posts' => 'do_not_allow'],
			'map_meta_cap'    => true,
		]);
	}

	/**
	 * Stores the settings of every Form block in a saved post as
	 * `_bpafb_form_{formId}` meta, replacing what was stored before.
	 *
	 * @param int     $post_id Post id.
	 * @param WP_Post $post    Post.
	 */
	public function index_forms($post_id, $post)
	{
		if (wp_is_post_revision($post_id) || wp_is_post_autosave($post_id) || self::POST_TYPE === $post->post_type) {
			return;
		}

		foreach (array_keys(get_post_meta($post_id)) as $key) {
			if (0 === strpos($key, self::META_PREFIX)) {
				delete_post_meta($post_id, $key);
			}
		}

		if (false === strpos($post->post_content, '<!-- wp:' . self::BLOCK_NAME . ' ')) {
			return;
		}
		foreach ($this->find_forms(parse_blocks($post->post_content)) as $attrs) {
			$config = self::config_from_attributes($attrs);
			if ($config['id']) {
				update_post_meta($post_id, self::META_PREFIX . $config['id'], wp_slash($config));
			}
		}
	}

	/**
	 * Form block attributes in a block tree.
	 *
	 * @param array $blocks Parsed blocks.
	 * @return array[]
	 */
	private function find_forms($blocks)
	{
		$found = [];
		foreach ($blocks as $block) {
			if (self::BLOCK_NAME === $block['blockName']) {
				$found[] = $block['attrs'];
			}
			if (!empty($block['innerBlocks'])) {
				$found = array_merge($found, $this->find_forms($block['innerBlocks']));
			}
		}
		return $found;
	}

	/**
	 * The server-side settings of a form, normalized from its attributes.
	 * Defaults match the block.json defaults.
	 *
	 * @param array $attrs Block attributes.
	 * @return array
	 */
	public static function config_from_attributes($attrs)
	{
		$get = function ($key, $default) use ($attrs) {
			return isset($attrs[$key]) ? $attrs[$key] : $default;
		};

		$fields = [];
		$seen = [];
		foreach ((array) $get('fields', self::default_fields()) as $field) {
			$field = self::normalize_field($field);
			if ('' === $field['id'] || isset($seen[$field['id']])) {
				continue;
			}
			$seen[$field['id']] = true;
			$fields[] = $field;
		}

		return [
			'id'           => self::sanitize_form_id($get('formId', '')),
			'name'         => sanitize_text_field($get('formName', __('Contact form', 'blockive-premium-addon-for-block-pro'))),
			'fields'       => $fields,
			'save'         => (bool) $get('actionSave', true),
			'email'        => (bool) $get('actionEmail', true),
			'emailTo'      => (string) $get('emailTo', ''),
			'emailSubject' => sanitize_text_field($get('emailSubject', '')),
			'emailMessage' => sanitize_textarea_field($get('emailMessage', '[all-fields]')),
			'redirect'     => (bool) $get('actionRedirect', false),
			'redirectUrl'  => esc_url_raw($get('redirectUrl', '')),
			'webhook'      => (bool) $get('actionWebhook', false),
			'webhookUrl'   => esc_url_raw($get('webhookUrl', '')),
			'success'      => sanitize_text_field($get('successMessage', __('Thanks! Your message has been sent.', 'blockive-premium-addon-for-block-pro'))),
			'error'        => sanitize_text_field($get('errorMessage', __('Something went wrong. Please try again.', 'blockive-premium-addon-for-block-pro'))),
			'required'     => sanitize_text_field($get('requiredMessage', __('This field is required.', 'blockive-premium-addon-for-block-pro'))),
		];
	}

	/**
	 * The default fields, matching block.json.
	 *
	 * @return array[]
	 */
	public static function default_fields()
	{
		return [
			['id' => 'name', 'type' => 'text', 'label' => __('Name', 'blockive-premium-addon-for-block-pro'), 'required' => true],
			['id' => 'email', 'type' => 'email', 'label' => __('Email', 'blockive-premium-addon-for-block-pro'), 'required' => true],
			['id' => 'message', 'type' => 'textarea', 'label' => __('Message', 'blockive-premium-addon-for-block-pro'), 'required' => true],
		];
	}

	/**
	 * One field with every key present and sane.
	 *
	 * @param array $field Field attribute.
	 * @return array
	 */
	public static function normalize_field($field)
	{
		$field = is_array($field) ? $field : [];
		$type = isset($field['type']) && in_array($field['type'], self::FIELD_TYPES, true) ? $field['type'] : 'text';
		$options = [];
		foreach (preg_split('/\r\n|\r|\n/', isset($field['options']) ? (string) $field['options'] : '') as $line) {
			$line = trim(wp_strip_all_tags($line));
			if ('' !== $line) {
				$options[] = $line;
			}
		}
		$width = isset($field['width']) ? (string) $field['width'] : '100';

		return [
			'id'          => self::sanitize_field_id(isset($field['id']) ? $field['id'] : ''),
			'type'        => $type,
			'label'       => isset($field['label']) ? wp_strip_all_tags($field['label']) : '',
			'placeholder' => isset($field['placeholder']) ? wp_strip_all_tags($field['placeholder']) : '',
			'help'        => isset($field['help']) ? wp_strip_all_tags($field['help']) : '',
			'default'     => isset($field['default']) ? wp_strip_all_tags($field['default']) : '',
			'options'     => $options,
			'required'    => !empty($field['required']) && 'hidden' !== $type,
			'rows'        => isset($field['rows']) ? max(2, min(20, absint($field['rows']))) : 5,
			'width'       => in_array($width, ['100', '75', '66', '50', '33', '25'], true) ? $width : '100',
		];
	}

	/**
	 * @param string $id Form id.
	 * @return string
	 */
	public static function sanitize_form_id($id)
	{
		return substr(preg_replace('/[^a-z0-9]/', '', strtolower((string) $id)), 0, 32);
	}

	/**
	 * @param string $id Field id.
	 * @return string
	 */
	public static function sanitize_field_id($id)
	{
		return substr(preg_replace('/[^a-z0-9_-]/', '', strtolower((string) $id)), 0, 40);
	}

	/**
	 * Finds a form's stored settings: on the hinted post first (the page
	 * the form was shown on), otherwise on any post that holds it (e.g. a
	 * header template or a synced pattern).
	 *
	 * @param string $form_id Form id.
	 * @param int    $hint    Post id the form was shown on.
	 * @return array{0: array, 1: int}|null Settings and the post id holding them.
	 */
	public static function find_config($form_id, $hint)
	{
		$key = self::META_PREFIX . $form_id;
		if ($hint && 'trash' !== get_post_status($hint)) {
			$config = get_post_meta($hint, $key, true);
			if (is_array($config)) {
				return [$config, (int) $hint];
			}
		}

		$ids = get_posts([
			'post_type'      => 'any',
			'post_status'    => ['publish', 'private', 'draft', 'pending', 'future'],
			'meta_key'       => $key, // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_key
			'fields'         => 'ids',
			'posts_per_page' => 1,
			'no_found_rows'  => true,
		]);
		if ($ids) {
			$config = get_post_meta($ids[0], $key, true);
			if (is_array($config)) {
				return [$config, (int) $ids[0]];
			}
		}
		return null;
	}

	/* ------------------------------------------------------------------
	 * Submitting
	 * ------------------------------------------------------------------ */

	public function register_route()
	{
		register_rest_route(self::REST_NS, '/forms/(?P<form>[a-z0-9]+)/submit', [
			'methods'             => 'POST',
			// A public form: anyone may submit. Spam is handled in
			// handle_submission() (honeypot, timing, rate limit).
			'permission_callback' => '__return_true',
			'callback'            => function (WP_REST_Request $request) {
				$result = $this->handle_submission($request['form'], $request->get_params());
				return new WP_REST_Response($result, $result['ok'] ? 200 : 400);
			},
		]);
	}

	/**
	 * Without JavaScript: handles the plain POST and redirects back to the
	 * page, where render.php shows the outcome.
	 */
	public function handle_post_fallback()
	{
		// phpcs:disable WordPress.Security.NonceVerification.Missing -- public form; see handle_submission().
		$form_id = isset($_POST['bpafb_form_id']) ? self::sanitize_form_id(wp_unslash($_POST['bpafb_form_id'])) : '';
		$params = wp_unslash($_POST);
		// phpcs:enable
		if (empty($params['bpafb_page'])) {
			$params['bpafb_page'] = (string) wp_get_referer();
		}
		$result = $this->handle_submission($form_id, $params);

		if ($result['ok'] && !empty($result['redirect'])) {
			wp_safe_redirect($result['redirect']);
			exit;
		}
		$back = wp_get_referer();
		$back = $back ? $back : home_url('/');
		$back = remove_query_arg(['bpafb_form', 'bpafb_form_status'], $back);
		wp_safe_redirect(add_query_arg(['bpafb_form' => $form_id, 'bpafb_form_status' => $result['ok'] ? 'sent' : 'error'], $back) . '#bpafb-form-' . $form_id);
		exit;
	}

	/**
	 * Validates a submission and runs the form's actions.
	 *
	 * @param string $form_id Form id.
	 * @param array  $params  Request parameters (fields[...], bpafb_* ...).
	 * @return array{ok: bool, message: string, errors?: array, redirect?: string}
	 */
	public function handle_submission($form_id, $params)
	{
		$form_id = self::sanitize_form_id($form_id);
		$hint = isset($params['bpafb_post_id']) ? absint($params['bpafb_post_id']) : 0;
		$found = $form_id ? self::find_config($form_id, $hint) : null;
		if (!$found) {
			return ['ok' => false, 'message' => __('This form is no longer available.', 'blockive-premium-addon-for-block-pro')];
		}
		list($config, $source_post) = $found;

		// Honeypot: a bot filled the hidden field. Pretend it worked.
		if (!empty($params['bpafb_hp'])) {
			return ['ok' => true, 'message' => $config['success']];
		}
		// Sent faster than a person could fill it in.
		$started = isset($params['bpafb_ts']) ? absint($params['bpafb_ts']) : 0;
		if (!$started || time() - $started < self::MIN_SECONDS) {
			return ['ok' => false, 'message' => $config['error']];
		}
		if (!$this->within_rate_limit()) {
			return ['ok' => false, 'message' => __('Too many submissions. Please wait a few minutes and try again.', 'blockive-premium-addon-for-block-pro')];
		}

		$input = isset($params['fields']) && is_array($params['fields']) ? $params['fields'] : [];
		$values = [];
		$errors = [];
		foreach ($config['fields'] as $field) {
			$raw = isset($input[$field['id']]) ? $input[$field['id']] : null;
			list($value, $error) = $this->validate_field($field, $raw, $config['required']);
			if ($error) {
				$errors[$field['id']] = $error;
			}
			$values[] = ['id' => $field['id'], 'label' => $field['label'], 'type' => $field['type'], 'value' => $value];
		}
		if ($errors) {
			return ['ok' => false, 'message' => __('Please correct the fields marked below.', 'blockive-premium-addon-for-block-pro'), 'errors' => $errors];
		}

		$page_url = isset($params['bpafb_page']) ? esc_url_raw($params['bpafb_page']) : '';
		$context = ['form' => $config, 'source_post' => $source_post, 'page_url' => $page_url];

		if ($config['save']) {
			$this->save_submission($values, $context);
		}
		$sent = true;
		if ($config['email']) {
			$sent = $this->send_email($values, $context);
		}
		if ($config['webhook'] && $config['webhookUrl']) {
			$this->send_webhook($values, $context);
		}

		/**
		 * Fires after a Blockive form is submitted and its actions have run.
		 *
		 * @param array $values  Field values: [ [id, label, type, value], ... ].
		 * @param array $context Form settings, source post id, page URL.
		 */
		do_action('bpafb_form_submitted', $values, $context);

		if (!$sent && !$config['save']) {
			// Nothing kept the message: say so instead of pretending.
			return ['ok' => false, 'message' => $config['error']];
		}

		$result = ['ok' => true, 'message' => $config['success']];
		if ($config['redirect'] && $config['redirectUrl']) {
			$result['redirect'] = $config['redirectUrl'];
		}
		return $result;
	}

	/**
	 * Checks and cleans one field's value.
	 *
	 * @param array  $field          Normalized field.
	 * @param mixed  $raw            Submitted value.
	 * @param string $required_error Message for a missing required value.
	 * @return array{0: string, 1: string} Clean value, error message.
	 */
	private function validate_field($field, $raw, $required_error)
	{
		if ('checkbox' === $field['type']) {
			$chosen = array_values(array_intersect($field['options'], array_map('strval', (array) $raw)));
			if ($field['required'] && !$chosen) {
				return ['', $required_error];
			}
			return [implode(', ', $chosen), ''];
		}

		$raw = is_scalar($raw) ? (string) $raw : '';
		$value = 'textarea' === $field['type'] ? sanitize_textarea_field($raw) : sanitize_text_field($raw);

		if ('acceptance' === $field['type']) {
			if ($field['required'] && '' === $value) {
				return ['', $required_error];
			}
			return ['' !== $value ? __('Yes', 'blockive-premium-addon-for-block-pro') : __('No', 'blockive-premium-addon-for-block-pro'), ''];
		}
		if ('' === $value) {
			return ['', $field['required'] ? $required_error : ''];
		}

		switch ($field['type']) {
			case 'email':
				return is_email($value) ? [sanitize_email($value), ''] : ['', __('Please enter a valid email address.', 'blockive-premium-addon-for-block-pro')];
			case 'url':
				return wp_http_validate_url($value) ? [esc_url_raw($value), ''] : ['', __('Please enter a valid URL.', 'blockive-premium-addon-for-block-pro')];
			case 'number':
				return is_numeric($value) ? [$value, ''] : ['', __('Please enter a number.', 'blockive-premium-addon-for-block-pro')];
			case 'tel':
				return preg_match('/^[0-9+().\s-]{3,30}$/', $value) ? [$value, ''] : ['', __('Please enter a valid phone number.', 'blockive-premium-addon-for-block-pro')];
			case 'date':
				return preg_match('/^\d{4}-\d{2}-\d{2}$/', $value) ? [$value, ''] : ['', __('Please enter a valid date.', 'blockive-premium-addon-for-block-pro')];
			case 'select':
			case 'radio':
				return in_array($value, $field['options'], true) ? [$value, ''] : ['', __('Please choose one of the options.', 'blockive-premium-addon-for-block-pro')];
		}
		return [$value, ''];
	}

	/**
	 * At most RATE_LIMIT submissions per visitor (IP) per RATE_WINDOW.
	 *
	 * @return bool
	 */
	private function within_rate_limit()
	{
		$ip = isset($_SERVER['REMOTE_ADDR']) ? sanitize_text_field(wp_unslash($_SERVER['REMOTE_ADDR'])) : '';
		$key = 'bpafb_form_rate_' . md5($ip . wp_salt('nonce'));
		$count = (int) get_transient($key);
		if ($count >= self::RATE_LIMIT) {
			return false;
		}
		set_transient($key, $count + 1, self::RATE_WINDOW);
		return true;
	}

	/**
	 * @param array $values  Field values.
	 * @param array $context Form settings etc.
	 */
	private function save_submission($values, $context)
	{
		$email = '';
		foreach ($values as $value) {
			if ('email' === $value['type'] && '' !== $value['value']) {
				$email = $value['value'];
				break;
			}
		}
		$post_id = wp_insert_post([
			'post_type'   => self::POST_TYPE,
			'post_status' => 'publish',
			/* translators: %s: form name. */
			'post_title'  => sprintf(__('%s submission', 'blockive-premium-addon-for-block-pro'), $context['form']['name']),
		], true);
		if (is_wp_error($post_id)) {
			return;
		}
		update_post_meta($post_id, '_bpafb_form_id', $context['form']['id']);
		update_post_meta($post_id, '_bpafb_form_name', $context['form']['name']);
		update_post_meta($post_id, '_bpafb_source_post', $context['source_post']);
		update_post_meta($post_id, '_bpafb_page_url', $context['page_url']);
		update_post_meta($post_id, '_bpafb_fields', wp_slash($values));
		if ($email) {
			update_post_meta($post_id, '_bpafb_email', $email);
		}
	}

	/**
	 * Replaces [field-id] and [all-fields] in a template.
	 *
	 * @param string $template Text.
	 * @param array  $values   Field values.
	 * @return string
	 */
	private function merge_tags($template, $values)
	{
		$all = [];
		$map = [];
		foreach ($values as $value) {
			if ('' !== $value['value']) {
				$all[] = ('' !== $value['label'] ? $value['label'] : $value['id']) . ': ' . $value['value'];
			}
			$map['[' . $value['id'] . ']'] = $value['value'];
		}
		$map['[all-fields]'] = implode("\n", $all);
		return strtr($template, $map);
	}

	/**
	 * @param array $values  Field values.
	 * @param array $context Form settings etc.
	 * @return bool Whether wp_mail() accepted it.
	 */
	private function send_email($values, $context)
	{
		$form = $context['form'];
		$to = array_filter(array_map('sanitize_email', array_map('trim', explode(',', $form['emailTo']))), 'is_email');
		if (!$to) {
			$to = [get_option('admin_email')];
		}

		$subject = '' !== $form['emailSubject']
			? $this->merge_tags($form['emailSubject'], $values)
			/* translators: 1: form name, 2: site title. */
			: sprintf(__('New submission: %1$s (%2$s)', 'blockive-premium-addon-for-block-pro'), $form['name'], wp_specialchars_decode(get_bloginfo('name'), ENT_QUOTES));
		$subject = str_replace(["\r", "\n"], ' ', $subject);

		$body = $this->merge_tags('' !== $form['emailMessage'] ? $form['emailMessage'] : '[all-fields]', $values);
		if ($context['page_url']) {
			/* translators: %s: page URL. */
			$body .= "\n\n---\n" . sprintf(__('Sent from: %s', 'blockive-premium-addon-for-block-pro'), $context['page_url']);
		}

		$headers = [];
		foreach ($values as $value) {
			if ('email' === $value['type'] && is_email($value['value'])) {
				$headers[] = 'Reply-To: ' . sanitize_email($value['value']);
				break;
			}
		}

		return (bool) wp_mail($to, $subject, $body, $headers);
	}

	/**
	 * POSTs the submission as JSON. wp_safe_remote_post() refuses local and
	 * private network addresses.
	 *
	 * @param array $values  Field values.
	 * @param array $context Form settings etc.
	 */
	private function send_webhook($values, $context)
	{
		$fields = [];
		foreach ($values as $value) {
			$fields[$value['id']] = $value['value'];
		}
		wp_safe_remote_post($context['form']['webhookUrl'], [
			'timeout'  => 5,
			'blocking' => false,
			'headers'  => ['Content-Type' => 'application/json'],
			'body'     => wp_json_encode([
				'form_id'   => $context['form']['id'],
				'form_name' => $context['form']['name'],
				'page_url'  => $context['page_url'],
				'fields'    => $fields,
				'submitted' => gmdate('c'),
			]),
		]);
	}

	/* ------------------------------------------------------------------
	 * Admin screen
	 * ------------------------------------------------------------------ */

	/**
	 * @param array $columns Columns.
	 * @return array
	 */
	public function columns($columns)
	{
		return [
			'cb'              => $columns['cb'],
			'title'           => __('Submission', 'blockive-premium-addon-for-block-pro'),
			'bpafb_summary'   => __('Details', 'blockive-premium-addon-for-block-pro'),
			'bpafb_page'      => __('Sent From', 'blockive-premium-addon-for-block-pro'),
			'date'            => $columns['date'],
		];
	}

	/**
	 * @param string $column  Column.
	 * @param int    $post_id Submission id.
	 */
	public function column_content($column, $post_id)
	{
		if ('bpafb_summary' === $column) {
			$parts = [];
			foreach (array_slice((array) get_post_meta($post_id, '_bpafb_fields', true), 0, 3) as $value) {
				if (is_array($value) && '' !== $value['value']) {
					$parts[] = wp_trim_words($value['value'], 8);
				}
			}
			echo esc_html(implode(' · ', $parts));
		} elseif ('bpafb_page' === $column) {
			$url = get_post_meta($post_id, '_bpafb_page_url', true);
			if ($url) {
				printf('<a href="%1$s" target="_blank" rel="noopener noreferrer">%2$s</a>', esc_url($url), esc_html(self::short_url($url)));
			}
		}
	}

	public function add_meta_box()
	{
		remove_meta_box('submitdiv', self::POST_TYPE, 'side');
		remove_meta_box('slugdiv', self::POST_TYPE, 'normal');
		add_meta_box('bpafb-submission', __('Submitted Fields', 'blockive-premium-addon-for-block-pro'), [$this, 'render_meta_box'], self::POST_TYPE, 'normal', 'high');
		add_meta_box('bpafb-submission-details', __('Details', 'blockive-premium-addon-for-block-pro'), [$this, 'render_details_box'], self::POST_TYPE, 'side', 'high');
	}

	/**
	 * "View" and "Trash" only: submissions are not edited.
	 *
	 * @param array   $actions Row actions.
	 * @param WP_Post $post    Post.
	 * @return array
	 */
	public function row_actions($actions, $post)
	{
		if (self::POST_TYPE !== $post->post_type) {
			return $actions;
		}
		unset($actions['inline hide-if-no-js']);
		if (isset($actions['edit'])) {
			$actions['edit'] = sprintf('<a href="%1$s">%2$s</a>', esc_url(get_edit_post_link($post->ID)), esc_html__('View', 'blockive-premium-addon-for-block-pro'));
		}
		return $actions;
	}

	/**
	 * Side box: form, date, page, and a trash link.
	 *
	 * @param WP_Post $post Submission.
	 */
	public function render_details_box($post)
	{
		$page = get_post_meta($post->ID, '_bpafb_page_url', true);
		echo '<p><strong>' . esc_html__('Form', 'blockive-premium-addon-for-block-pro') . ':</strong> ' . esc_html(get_post_meta($post->ID, '_bpafb_form_name', true)) . '</p>';
		echo '<p><strong>' . esc_html__('Received', 'blockive-premium-addon-for-block-pro') . ':</strong> ' . esc_html(get_the_date('', $post) . ' ' . get_the_time('', $post)) . '</p>';
		if ($page) {
			echo '<p><strong>' . esc_html__('Sent from', 'blockive-premium-addon-for-block-pro') . ':</strong> <a href="' . esc_url($page) . '" target="_blank" rel="noopener noreferrer">' . esc_html(self::short_url($page)) . '</a></p>';
		}
		if (current_user_can('delete_post', $post->ID)) {
			echo '<p><a class="submitdelete" href="' . esc_url(get_delete_post_link($post->ID)) . '">' . esc_html__('Move to Trash', 'blockive-premium-addon-for-block-pro') . '</a></p>';
		}
	}

	/**
	 * A URL without its scheme and host, keeping the query.
	 *
	 * @param string $url URL.
	 * @return string
	 */
	private static function short_url($url)
	{
		$path = (string) wp_parse_url($url, PHP_URL_PATH);
		$query = (string) wp_parse_url($url, PHP_URL_QUERY);
		$short = ($path ? $path : '/') . ($query ? '?' . $query : '');
		return $short;
	}

	/**
	 * @param WP_Post $post Submission.
	 */
	public function render_meta_box($post)
	{
		$values = (array) get_post_meta($post->ID, '_bpafb_fields', true);
		echo '<table class="widefat striped"><tbody>';
		foreach ($values as $value) {
			if (!is_array($value)) {
				continue;
			}
			printf(
				'<tr><th scope="row" style="width:30%%">%1$s</th><td>%2$s</td></tr>',
				esc_html('' !== $value['label'] ? $value['label'] : $value['id']),
				nl2br(esc_html($value['value']))
			);
		}
		echo '</tbody></table>';
	}

	/* ------------------------------------------------------------------
	 * Privacy (Tools > Export / Erase Personal Data)
	 * ------------------------------------------------------------------ */

	/**
	 * @param array $exporters Exporters.
	 * @return array
	 */
	public function register_exporter($exporters)
	{
		$exporters['blockive-forms'] = [
			'exporter_friendly_name' => __('Blockive Form Submissions', 'blockive-premium-addon-for-block-pro'),
			'callback'               => [$this, 'export_personal_data'],
		];
		return $exporters;
	}

	/**
	 * @param array $erasers Erasers.
	 * @return array
	 */
	public function register_eraser($erasers)
	{
		$erasers['blockive-forms'] = [
			'eraser_friendly_name' => __('Blockive Form Submissions', 'blockive-premium-addon-for-block-pro'),
			'callback'             => [$this, 'erase_personal_data'],
		];
		return $erasers;
	}

	/**
	 * @param string $email Email address.
	 * @param int    $page  Page.
	 * @return int[]
	 */
	private function submissions_for($email, $page)
	{
		return get_posts([
			'post_type'      => self::POST_TYPE,
			'post_status'    => 'any',
			'meta_key'       => '_bpafb_email', // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_key
			'meta_value'     => $email, // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_value
			'fields'         => 'ids',
			'posts_per_page' => 50,
			'paged'          => max(1, (int) $page),
		]);
	}

	/**
	 * @param string $email Email address.
	 * @param int    $page  Page.
	 * @return array
	 */
	public function export_personal_data($email, $page = 1)
	{
		$ids = $this->submissions_for($email, $page);
		$data = [];
		foreach ($ids as $id) {
			$items = [];
			foreach ((array) get_post_meta($id, '_bpafb_fields', true) as $value) {
				if (is_array($value)) {
					$items[] = ['name' => '' !== $value['label'] ? $value['label'] : $value['id'], 'value' => $value['value']];
				}
			}
			$data[] = [
				'group_id'    => 'blockive-forms',
				'group_label' => __('Form Submissions', 'blockive-premium-addon-for-block-pro'),
				'item_id'     => 'bpafb-submission-' . $id,
				'data'        => $items,
			];
		}
		return ['data' => $data, 'done' => count($ids) < 50];
	}

	/**
	 * @param string $email Email address.
	 * @param int    $page  Page.
	 * @return array
	 */
	public function erase_personal_data($email, $page = 1)
	{
		// Always the first page: each pass deletes what it finds.
		$ids = $this->submissions_for($email, 1);
		foreach ($ids as $id) {
			wp_delete_post($id, true);
		}
		return ['items_removed' => count($ids) > 0, 'items_retained' => false, 'messages' => [], 'done' => count($ids) < 50];
	}
}
