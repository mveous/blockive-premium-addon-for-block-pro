<?php
/**
 * Blockive Premium Addon For Block Pro license settings page.
 *
 * Added by Smart Licenser's Drag & Drop Licenser. Adds a "Settings →
 * Blockive Premium Addon For Block Pro License" screen and a "License" link on the Plugins
 * list where the customer enters, activates and deactivates their key.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class BPAFB_TEMPLATE_Page {

	const PAGE_SLUG = 'blockive-premium-addon-for-block-pro-license';

	// Where the license screen lives. 'options-general.php' = Settings,
	// '' = its own top-level menu, anything else = a submenu of that
	// existing menu (e.g. 'edit.php?post_type=my_cpt').
	const PARENT_MENU = 'bpafb-site-tools';

	// Comma-separated menu slugs to hide until a license is active.
	// '' = never hide anything.
	const HIDE_MENUS = '';

	private Bpafb_Manager $manager;

	/**
	 * The slug actually registered: PAGE_SLUG, unless some other screen
	 * already owns it (see register_page()).
	 */
	private string $page_slug = self::PAGE_SLUG;

	/**
	 * Screens (menu slugs) closed off while unlicensed. Filled in by
	 * maybe_hide_menus() from the menus it removes.
	 *
	 * @var string[]
	 */
	private array $blocked = array();

	private static ?BPAFB_TEMPLATE_Page $instance = null;

	public static function get_instance( ?Bpafb_Manager $manager = null ): BPAFB_TEMPLATE_Page {
		if ( null === self::$instance ) {
			self::$instance = new self( $manager ?? Bpafb_Manager::instance() );
		}
		return self::$instance;
	}

	public function __construct( Bpafb_Manager $manager ) {
		$this->manager = $manager;

		// After the plugin's own menus (and any reordering they do at
		// priority 999), so the parent exists and we can see which
		// slugs are already taken.
		add_action( 'admin_menu', array( $this, 'register_page' ), 1000 );
		add_action( 'admin_menu', array( $this, 'maybe_hide_menus' ), 9999 );
		add_action( 'current_screen', array( $this, 'block_hidden_screens' ) );
		add_action( 'admin_notices', array( $this, 'license_warning' ) );
		add_filter( 'plugin_action_links_' . plugin_basename( BPAFB_PRO_PATH ), array( $this, 'action_links' ) );
	}

	/**
	 * Turn a menu slug into the top-level menu that really owns it.
	 * The slug may already be a top-level menu, or the slug of one of
	 * its submenu pages (people often copy the latter from a URL like
	 * admin.php?page=my-plugin-tools) — a submenu slug can't be a
	 * parent, so use the menu that contains it. Returns null if no
	 * such menu exists.
	 */
	private function resolve_parent( string $slug ): ?string {
		global $menu, $submenu;

		foreach ( (array) $menu as $item ) {
			if ( isset( $item[2] ) && $slug === $item[2] ) {
				return $slug;
			}
		}

		foreach ( (array) $submenu as $parent => $items ) {
			foreach ( $items as $item ) {
				if ( isset( $item[2] ) && $slug === $item[2] ) {
					return (string) $parent;
				}
			}
		}

		return null;
	}

	/**
	 * Menus HIDE_MENUS lists, or none once a license is active.
	 *
	 * @return string[]
	 */
	private function hidden_slugs(): array {
		if ( '' === self::HIDE_MENUS || $this->manager->is_licensed() ) {
			return array();
		}

		return array_values( array_filter( array_map( 'trim', explode( ',', self::HIDE_MENUS ) ) ) );
	}

	/**
	 * Is this menu (or the slug the license page was pointed at) being
	 * hidden right now?
	 */
	private function is_hidden_now( string $parent ): bool {
		$hidden = $this->hidden_slugs();

		return in_array( $parent, $hidden, true ) || in_array( self::PARENT_MENU, $hidden, true );
	}

	/**
	 * Admin warning shown on every admin screen until a license is active.
	 */
	public function license_warning(): void {
		if ( $this->manager->is_licensed() || ! current_user_can( 'manage_options' ) ) {
			return;
		}

		$screen = function_exists( 'get_current_screen' ) ? get_current_screen() : null;
		if ( $screen && false !== strpos( (string) $screen->id, $this->page_slug ) ) {
			return; // Already on the license screen.
		}

		$url = menu_page_url( $this->page_slug, false );
		if ( ! $url ) {
			$url = admin_url( 'admin.php?page=' . $this->page_slug );
		}

		printf(
			'<div class="notice notice-warning"><p><strong>%1$s</strong> %2$s <a href="%3$s">%4$s</a></p></div>',
			esc_html__( 'Blockive Premium Addon For Block Pro:', 'blockive-premium-addon-for-block-pro' ),
			esc_html__( 'Your license is not activated. Activate it to receive updates and support.', 'blockive-premium-addon-for-block-pro' ),
			esc_url( $url ),
			esc_html__( 'Activate license', 'blockive-premium-addon-for-block-pro' )
		);
	}

	public function register_page(): void {
		$title = 'License';

		// Never take over a slug another screen already uses (e.g. the
		// plugin's own settings or tools page) — that would replace
		// it. Use a "-license" variant instead.
		if ( null !== $this->resolve_parent( $this->page_slug ) ) {
			$this->page_slug = $this->page_slug . '-license';
		}

		if ( '' === self::PARENT_MENU ) {
			add_menu_page( $title, $title, 'manage_options', $this->page_slug, array( $this, 'render' ), 'dashicons-admin-network' );
			return;
		}

		// If the chosen menu isn't there (renamed, removed, other
		// plugin inactive), fall back to Settings so the license
		// screen is never unreachable.
		$parent = $this->resolve_parent( self::PARENT_MENU ) ?? 'options-general.php';

		// While that menu is hidden for lack of a license, the license
		// page can't live inside it: give it its own menu until a
		// license is active, then it moves into the chosen menu.
		if ( $this->is_hidden_now( $parent ) ) {
			add_menu_page( $title, $title, 'manage_options', $this->page_slug, array( $this, 'render' ), 'dashicons-admin-network' );
			return;
		}

		add_submenu_page( $parent, $title, $title, 'manage_options', $this->page_slug, array( $this, 'render' ) );
	}

	/**
	 * Until a license is active, hide the menus listed in HIDE_MENUS
	 * (and, in block_hidden_screens(), keep them from opening).
	 */
	public function maybe_hide_menus(): void {
		global $menu, $submenu;

		foreach ( $this->hidden_slugs() as $slug ) {
			$is_top_level = false;

			foreach ( (array) $menu as $item ) {
				if ( isset( $item[2] ) && $slug === $item[2] ) {
					$is_top_level = true;
					break;
				}
			}

			if ( ! $is_top_level ) {
				// A submenu page: hide just that entry (never the license one).
				$owner = $this->resolve_parent( $slug );

				if ( null !== $owner && $this->page_slug !== $slug ) {
					remove_submenu_page( $owner, $slug );
					$this->blocked[] = $slug;
				}
				continue;
			}

			// A whole menu: it and every submenu under it go, and none
			// of them can be opened.
			foreach ( (array) ( $submenu[ $slug ] ?? array() ) as $item ) {
				if ( $this->page_slug !== $item[2] ) {
					$this->blocked[] = $item[2];
				}
			}
			$this->blocked[] = $slug;

			remove_menu_page( $slug );
		}
	}

	/**
	 * While unlicensed, opening a hidden screen (even by typing its
	 * URL) sends the visitor to the license page instead.
	 */
	public function block_hidden_screens(): void {
		if ( empty( $this->blocked ) || wp_doing_ajax() || $this->manager->is_licensed() ) {
			return;
		}

		// phpcs:ignore WordPress.Security.NonceVerification.Recommended -- read-only routing check, no state change.
		if ( isset( $_GET['page'] ) && $this->page_slug === sanitize_text_field( wp_unslash( $_GET['page'] ) ) ) {
			return;
		}

		foreach ( array_unique( $this->blocked ) as $slug ) {
			if ( $this->request_matches( $slug ) ) {
				wp_safe_redirect( admin_url( 'admin.php?page=' . $this->page_slug ) );
				exit;
			}
		}
	}

	/**
	 * Is the current admin request the screen behind this menu slug?
	 * Handles "my-page" (admin.php?page=my-page) and "edit.php?post_type=x"
	 * style slugs, including the add-new / edit-item screens of that
	 * post type.
	 */
	private function request_matches( string $slug ): bool {
		global $pagenow;

		// phpcs:disable WordPress.Security.NonceVerification.Recommended -- read-only routing check, no state change.
		if ( false === strpos( $slug, '.php' ) ) {
			return isset( $_GET['page'] ) && sanitize_text_field( wp_unslash( $_GET['page'] ) ) === $slug;
		}

		$parts = wp_parse_url( $slug );
		$path  = $parts['path'] ?? '';
		$args  = array();
		parse_str( $parts['query'] ?? '', $args );

		if ( 'edit.php' === $path && isset( $args['post_type'] ) ) {
			$post_type = isset( $_GET['post_type'] ) ? sanitize_key( wp_unslash( $_GET['post_type'] ) ) : '';

			if ( '' === $post_type && isset( $_GET['post'] ) ) {
				$post_type = (string) get_post_type( absint( $_GET['post'] ) );
			}

			return $post_type === $args['post_type']
				&& in_array( $pagenow, array( 'edit.php', 'post-new.php', 'post.php', 'edit-tags.php', 'term.php' ), true );
		}

		if ( $pagenow !== $path ) {
			return false;
		}

		foreach ( $args as $key => $value ) {
			if ( ! isset( $_GET[ $key ] ) || sanitize_text_field( wp_unslash( $_GET[ $key ] ) ) !== (string) $value ) {
				return false;
			}
		}
		// phpcs:enable WordPress.Security.NonceVerification.Recommended

		return true;
	}

	/**
	 * @param string[] $links
	 * @return string[]
	 */
	public function action_links( array $links ): array {
		$url = menu_page_url( $this->page_slug, false ) ?: admin_url( 'admin.php?page=' . $this->page_slug );
		array_unshift( $links, '<a href="' . esc_url( $url ) . '">' . esc_html__( 'License', 'blockive-premium-addon-for-block-pro' ) . '</a>' );

		return $links;
	}

	public function render(): void {
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die( esc_html__( 'Sorry, you are not allowed to access this page.', 'blockive-premium-addon-for-block-pro' ) );
		}

		$notice      = '';
		$notice_type = 'success';

		if ( isset( $_POST['blockive_premium_addon_for_block_pro_license_action'] ) ) {
			check_admin_referer( 'blockive_premium_addon_for_block_pro_license' );
			$action = sanitize_key( wp_unslash( $_POST['blockive_premium_addon_for_block_pro_license_action'] ) );

			if ( 'activate' === $action ) {
				$key    = isset( $_POST['license_key'] ) ? trim( sanitize_text_field( wp_unslash( $_POST['license_key'] ) ) ) : '';
				$result = $this->manager->activate( $key );

				if ( ! empty( $result['valid'] ) ) {
					$notice = __( 'License activated. The plugin\'s menus are available now.', 'blockive-premium-addon-for-block-pro' );
				} else {
					$notice_type = 'error';
					$notice      = ! empty( $result['message'] ) ? (string) $result['message'] : __( 'That license key could not be activated.', 'blockive-premium-addon-for-block-pro' );
				}
			} elseif ( 'deactivate' === $action ) {
				$this->manager->deactivate();
				$notice = __( 'License deactivated.', 'blockive-premium-addon-for-block-pro' );
			} elseif ( 'refresh' === $action ) {
				$this->manager->details( true );
				$notice = __( 'License status refreshed.', 'blockive-premium-addon-for-block-pro' );
			}
		}

		$is_active = $this->manager->is_licensed();
		$details   = $is_active ? $this->manager->details() : null;
		$status    = is_array( $details ) ? (string) ( $details['status'] ?? '' ) : '';
		$valid     = is_array( $details ) && ! empty( $details['valid'] );
		$expires   = is_array( $details ) && ! empty( $details['expires_at'] ) ? strtotime( (string) $details['expires_at'] . ' UTC' ) : false;

		if ( ! $is_active ) {
			$badge_text  = __( 'Not activated', 'blockive-premium-addon-for-block-pro' );
			$badge_color = '#b32d2e';
		} elseif ( null === $details ) {
			$badge_text  = __( 'Active (server not reachable to confirm)', 'blockive-premium-addon-for-block-pro' );
			$badge_color = '#996800';
		} elseif ( $valid ) {
			$badge_text  = __( 'Active', 'blockive-premium-addon-for-block-pro' );
			$badge_color = '#1a7f37';
		} else {
			$badge_text  = ucfirst( '' !== $status ? $status : __( 'problem', 'blockive-premium-addon-for-block-pro' ) );
			$badge_color = '#b32d2e';
		}
		?>
		<div class="wrap">
			<h1><?php echo esc_html( 'Blockive Premium Addon For Block Pro' ); ?> <?php esc_html_e( 'License', 'blockive-premium-addon-for-block-pro' ); ?></h1>

			<?php if ( '' !== $notice ) : ?>
				<div class="notice notice-<?php echo esc_attr( $notice_type ); ?> is-dismissible"><p><?php echo esc_html( $notice ); ?></p></div>
			<?php endif; ?>

			<div class="card" style="max-width:640px;padding:0 20px 20px;">
				<h2 style="display:flex;align-items:center;gap:10px;">
					<?php esc_html_e( 'License status', 'blockive-premium-addon-for-block-pro' ); ?>
					<span style="display:inline-block;padding:2px 10px;border-radius:12px;font-size:12px;font-weight:600;color:#fff;background:<?php echo esc_attr( $badge_color ); ?>;"><?php echo esc_html( $badge_text ); ?></span>
				</h2>

				<?php if ( $is_active ) : ?>
					<?php if ( is_array( $details ) && ! $valid && ! empty( $details['message'] ) ) : ?>
						<div class="notice notice-warning inline"><p><?php echo esc_html( (string) $details['message'] ); ?></p></div>
					<?php endif; ?>

					<table class="widefat striped" style="margin-top:8px;">
						<tbody>
							<tr><th scope="row"><?php esc_html_e( 'Product', 'blockive-premium-addon-for-block-pro' ); ?></th><td><?php echo esc_html( 'Blockive Premium Addon For Block Pro' ); ?></td></tr>
							<tr><th scope="row"><?php esc_html_e( 'License key', 'blockive-premium-addon-for-block-pro' ); ?></th><td><code><?php echo esc_html( $this->manager->masked_key() ); ?></code></td></tr>
							<tr><th scope="row"><?php esc_html_e( 'Activated on', 'blockive-premium-addon-for-block-pro' ); ?></th><td><?php echo esc_html( $this->manager->site_domain() ); ?></td></tr>
							<tr><th scope="row"><?php esc_html_e( 'Plugin version', 'blockive-premium-addon-for-block-pro' ); ?></th><td><?php echo esc_html( defined( 'BLOCKIVE_PREMIUM_ADDON_FOR_BLOCK_PRO_VERSION' ) ? BLOCKIVE_PREMIUM_ADDON_FOR_BLOCK_PRO_VERSION : '' ); ?></td></tr>
							<?php if ( '' !== $status ) : ?>
								<tr><th scope="row"><?php esc_html_e( 'Status', 'blockive-premium-addon-for-block-pro' ); ?></th><td><?php echo esc_html( ucfirst( $status ) ); ?></td></tr>
							<?php endif; ?>
							<?php if ( $expires ) : ?>
								<tr>
									<th scope="row"><?php esc_html_e( 'Expires', 'blockive-premium-addon-for-block-pro' ); ?></th>
									<td>
										<?php echo esc_html( wp_date( get_option( 'date_format' ), $expires ) ); ?>
										<?php if ( $expires > time() ) : ?>
											<?php /* translators: %s: time until expiry, e.g. "11 months" */ ?>
											<span class="description">(<?php echo esc_html( sprintf( __( 'in %s', 'blockive-premium-addon-for-block-pro' ), human_time_diff( time(), $expires ) ) ); ?>)</span>
										<?php else : ?>
											<span class="description" style="color:#b32d2e;"><?php esc_html_e( '(expired)', 'blockive-premium-addon-for-block-pro' ); ?></span>
										<?php endif; ?>
									</td>
								</tr>
							<?php elseif ( is_array( $details ) ) : ?>
								<tr><th scope="row"><?php esc_html_e( 'Expires', 'blockive-premium-addon-for-block-pro' ); ?></th><td><?php esc_html_e( 'Never', 'blockive-premium-addon-for-block-pro' ); ?></td></tr>
							<?php endif; ?>
						</tbody>
					</table>

					<form method="post" style="margin-top:16px;display:flex;gap:8px;">
						<?php wp_nonce_field( 'blockive_premium_addon_for_block_pro_license' ); ?>
						<button type="submit" name="blockive_premium_addon_for_block_pro_license_action" value="refresh" class="button"><?php esc_html_e( 'Refresh status', 'blockive-premium-addon-for-block-pro' ); ?></button>
						<button type="submit" name="blockive_premium_addon_for_block_pro_license_action" value="deactivate" class="button button-link-delete"><?php esc_html_e( 'Deactivate license', 'blockive-premium-addon-for-block-pro' ); ?></button>
					</form>
				<?php else : ?>
					<p><?php esc_html_e( 'Enter your license key to unlock the plugin.', 'blockive-premium-addon-for-block-pro' ); ?></p>
					<form method="post">
						<?php wp_nonce_field( 'blockive_premium_addon_for_block_pro_license' ); ?>
						<input type="hidden" name="blockive_premium_addon_for_block_pro_license_action" value="activate">
						<table class="form-table" role="presentation">
							<tr>
								<th scope="row"><label for="license_key"><?php esc_html_e( 'License Key', 'blockive-premium-addon-for-block-pro' ); ?></label></th>
								<td><input type="text" id="license_key" name="license_key" class="regular-text" autocomplete="off" required></td>
							</tr>
						</table>
						<?php submit_button( __( 'Activate License', 'blockive-premium-addon-for-block-pro' ) ); ?>
					</form>
				<?php endif; ?>
			</div>
		</div>
		<?php
	}
}
