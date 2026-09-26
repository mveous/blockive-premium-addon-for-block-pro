<?php
/**
 * Role Manager (a section of Site Tools): which roles can use the
 * Template Builder. Headers, footers, popups, and other templates change
 * the whole site, so a site owner can keep, say, Authors out of them while
 * they still write posts.
 *
 * The template post type gets its own capabilities (edit_bpafb_templates,
 * ...) instead of sharing the post ones, and a user has each of them only
 * when they have the matching post capability and an allowed role. With no
 * roles chosen, everyone who can edit posts keeps access, as before.
 * Administrators always have access.
 *
 * @package BlockivePro
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

class Bpafb_Pro_Role_Manager
{
	const OPTION = 'bpafb_pro_template_roles';
	const CAP_TYPE = ['bpafb_template', 'bpafb_templates'];

	/**
	 * @var Bpafb_Pro_Role_Manager|null
	 */
	private static $instance = null;

	/**
	 * @return Bpafb_Pro_Role_Manager
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
		add_filter('register_post_type_args', [$this, 'own_capabilities'], 10, 2);
		add_filter('user_has_cap', [$this, 'grant'], 10, 4);
	}

	private function __clone()
	{
	}

	public function __wakeup()
	{
		throw new \Exception('Cannot unserialize a singleton.');
	}

	/**
	 * @param array  $args      Post type arguments.
	 * @param string $post_type Post type.
	 * @return array
	 */
	public function own_capabilities($args, $post_type)
	{
		if (Bpafb_Template_Post_Type::POST_TYPE === $post_type) {
			$args['capability_type'] = self::CAP_TYPE;
			$args['map_meta_cap'] = true;
		}
		return $args;
	}

	/**
	 * Roles allowed to use the Template Builder, or [] for everyone who
	 * can edit posts.
	 *
	 * @return string[]
	 */
	public static function allowed_roles()
	{
		$roles = get_option(self::OPTION, []);
		return is_array($roles) ? $roles : [];
	}

	/**
	 * Gives each template capability when the user has the post
	 * capability it stands for and an allowed role.
	 *
	 * @param array   $allcaps All the user's capabilities.
	 * @param array   $caps    Primitive capabilities being checked.
	 * @param array   $args    Requested capability and arguments.
	 * @param WP_User $user    User.
	 * @return array
	 */
	public function grant($allcaps, $caps, $args, $user)
	{
		$suffix = '_' . self::CAP_TYPE[1];
		foreach ($caps as $cap) {
			if (substr($cap, -strlen($suffix)) !== $suffix) {
				continue;
			}
			$post_cap = substr($cap, 0, -strlen($suffix)) . '_posts';
			if (!empty($allcaps[$post_cap]) && self::role_allowed($user)) {
				$allcaps[$cap] = true;
			}
		}
		return $allcaps;
	}

	/**
	 * @param WP_User $user User.
	 * @return bool
	 */
	private static function role_allowed($user)
	{
		$allowed = self::allowed_roles();
		if (!$allowed || in_array('administrator', (array) $user->roles, true) || !empty($user->allcaps['manage_options'])) {
			return true;
		}
		return (bool) array_intersect($allowed, (array) $user->roles);
	}

	/**
	 * @param mixed $value Submitted role slugs.
	 * @return string[]
	 */
	public static function sanitize($value)
	{
		$roles = array_keys(wp_roles()->roles);
		return array_values(array_intersect(array_map('strval', (array) $value), $roles));
	}

	/**
	 * The Template Builder Access section of the Site Tools form.
	 */
	public static function render_section()
	{
		$allowed = self::allowed_roles();
		?>
		<h2><?php esc_html_e('Template Builder Access', 'blockive-premium-addon-for-block-pro'); ?></h2>
		<p><?php esc_html_e('Templates (headers, footers, popups, archives, ...) change the whole site. Choose which roles may create and edit them; they also need permission to edit posts. Leave all unchecked to allow everyone who can edit posts. Administrators always have access.', 'blockive-premium-addon-for-block-pro'); ?></p>
		<fieldset>
			<legend class="screen-reader-text"><?php esc_html_e('Roles', 'blockive-premium-addon-for-block-pro'); ?></legend>
			<?php foreach (wp_roles()->roles as $slug => $role) : ?>
				<?php
				if ('administrator' === $slug || empty($role['capabilities']['edit_posts'])) {
					continue;
				}
				?>
				<label style="display: block; margin: 0 0 8px;">
					<input type="checkbox" name="<?php echo esc_attr(self::OPTION); ?>[]" value="<?php echo esc_attr($slug); ?>" <?php checked(in_array($slug, $allowed, true)); ?>>
					<?php echo esc_html(translate_user_role($role['name'])); ?>
				</label>
			<?php endforeach; ?>
		</fieldset>
		<?php
	}
}
