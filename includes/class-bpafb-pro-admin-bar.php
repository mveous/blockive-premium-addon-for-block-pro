<?php
/**
 * Adds an "Edit Template" item to the frontend WP admin bar, the same
 * "jump straight to the template that's actually rendering this bit of the
 * page" convenience Elementor Pro's Theme Builder gives you - except
 * Blockive Templates can be assembled from several independently-resolved
 * pieces at once (a Header template, a Footer template, and either a
 * Single-kind override or an Archive/Search/404 template, plus a Popup),
 * so this lists every one of them that's actually active on the current
 * request rather than a single "Edit with Elementor"-style link.
 *
 * @package BlockivePro
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

class Bpafb_Pro_Admin_Bar
{
    /**
     * The single instance of this class.
     *
     * @var Bpafb_Pro_Admin_Bar|null
     */
    private static $instance = null;

    /**
     * Retrieves (creating if necessary) the single instance of this class.
     *
     * @return Bpafb_Pro_Admin_Bar
     */
    public static function get_instance()
    {
        if (null === self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    /**
     * Constructor.
     */
    private function __construct()
    {
        add_action('admin_bar_menu', [$this, 'add_menu'], 100);
    }

    /**
     * Prevents cloning of the instance.
     */
    private function __clone()
    {
    }

    /**
     * Prevents unserializing of the instance.
     */
    public function __wakeup()
    {
        throw new \Exception('Cannot unserialize a singleton.');
    }

    /**
     * Adds the "Edit Template" node and one child node per Blockive
     * Template actually active on the current frontend request. Adds
     * nothing at all - matching how WordPress's own "Edit Page" item
     * only appears when there's something to edit - if no template
     * matches or the current user can't edit any of the ones that do.
     *
     * @param WP_Admin_Bar $wp_admin_bar
     */
    public function add_menu($wp_admin_bar)
    {
        if (is_admin() || !is_user_logged_in()) {
            return;
        }

        $templates = $this->get_editable_active_templates();
        if (empty($templates)) {
            return;
        }

        $wp_admin_bar->add_node([
            'id'    => 'bpafb-edit-templates',
            'title' => __('Edit Template', 'blockive-premium-addon-for-block-pro'),
            'href'  => admin_url('edit.php?post_type=' . Bpafb_Template_Post_Type::POST_TYPE),
        ]);

        foreach ($templates as $template) {
            $wp_admin_bar->add_node([
                'id'     => 'bpafb-edit-template-' . $template['id'],
                'parent' => 'bpafb-edit-templates',
                'title'  => esc_html($template['label']),
                'href'   => $template['edit_url'],
            ]);
        }
    }

    /**
     * Resolves every Blockive Template active on the current request -
     * the Free plugin's singular override (Post/Page/Product/Event/... -
     * whatever real post type is being viewed) plus every Pro kind whose
     * own condition rules match, skipping kinds that only ever apply
     * inside another template's own rendering context (Loop Item) rather
     * than to a whole page view - then filters out any the current user
     * isn't actually allowed to edit.
     *
     * @return array<int,array{id:int,label:string,edit_url:string}>
     */
    private function get_editable_active_templates()
    {
        $candidates = [];

        if (class_exists('Bpafb_Template_Frontend_Render')) {
            $single_id = Bpafb_Template_Frontend_Render::get_matched_template_id();
            if ($single_id) {
                $candidates[] = $single_id;
            }
        }

        if (class_exists('Bpafb_Pro_Template_Kinds')) {
            $kinds_to_check = array_diff(Bpafb_Pro_Template_Kinds::KINDS, ['loop-item']);

            // Fast pre-check against the current conditional tags before
            // ever calling the resolver - Archive/Search/404 templates
            // can never legitimately apply outside their own matching
            // page type, so this skips a get_posts() query on every other
            // page load for kinds that couldn't possibly match anyway.
            foreach ($kinds_to_check as $kind) {
                if ('archive' === $kind && !(is_archive() || is_home())) {
                    continue;
                }
                if ('search' === $kind && !is_search()) {
                    continue;
                }
                if ('404' === $kind && !is_404()) {
                    continue;
                }

                $template_id = Bpafb_Pro_Template_Kinds::get_matching_template_id($kind);
                if ($template_id) {
                    $candidates[] = $template_id;
                }
            }
        }

        $templates = [];
        foreach (array_unique($candidates) as $template_id) {
            if (!current_user_can('edit_post', $template_id)) {
                continue;
            }

            $title = get_the_title($template_id);
            if ('' === $title) {
                continue;
            }

            $templates[] = [
                'id'       => $template_id,
                'label'    => $this->describe_kind($template_id) . ': ' . $title,
                'edit_url' => (string) get_edit_post_link($template_id, 'raw'),
            ];
        }

        return $templates;
    }

    /**
     * A human label for the template's own kind - one of Bpafb_Pro_Template_Kinds
     * ::KIND_LABELS for a Pro kind, or the real post type's singular name
     * (Post/Page/Product/Event/...) for a "single" one, matching how the
     * free plugin's own Template Type control already describes it.
     *
     * @param int $template_id Blockive Template post ID.
     * @return string
     */
    private function describe_kind($template_id)
    {
        $kind = class_exists('Bpafb_Pro_Template_Kinds')
            ? Bpafb_Pro_Template_Kinds::get_kind($template_id)
            : 'single';

        if ('single' !== $kind) {
            return Bpafb_Pro_Template_Kinds::KIND_LABELS[$kind] ?? ucfirst($kind);
        }

        $post_type = get_post_meta($template_id, '_bpafb_template_type', true) ?: 'post';
        $post_type_object = get_post_type_object($post_type);

        return $post_type_object ? $post_type_object->labels->singular_name : __('Single', 'blockive-premium-addon-for-block-pro');
    }
}
