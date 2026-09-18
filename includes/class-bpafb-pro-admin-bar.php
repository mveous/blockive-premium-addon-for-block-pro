<?php
/**
 * Adds an "Edit Template" item to the WordPress admin bar on the live
 * site, listing every Blockive Template that is active on the current
 * page. A Header, a Footer, a Single-post or Archive/Search/404 override,
 * and a Popup can all be active on the same page at once. So this shows a
 * list, not just one "Edit with ..." link.
 *
 * @package BlockivePro
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

class Bpafb_Pro_Admin_Bar
{
    /**
     * The one and only instance of this class.
     *
     * @var Bpafb_Pro_Admin_Bar|null
     */
    private static $instance = null;

    /**
     * Gives back the one instance of this class, making it first if needed.
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
     * Stops this class from being copied.
     */
    private function __clone()
    {
    }

    /**
     * Stops this class from being restored from stored data.
     */
    public function __wakeup()
    {
        throw new \Exception('Cannot unserialize a singleton.');
    }

    /**
     * Adds the "Edit Template" item, and one item under it for every
     * Blockive Template active on the current page. Adds nothing if no
     * template matches, or the user cannot edit any of the ones that do.
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
     * Finds every Blockive Template active on the current page - the free
     * plugin's single-post override, plus every Pro kind whose condition
     * rules match. Loop Item is skipped, since it only applies inside
     * another template, not to a whole page. Then keeps only the ones the
     * user is allowed to edit.
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
            $kinds_to_check = array_diff(Bpafb_Pro_Template_Kinds::KINDS, ['loop-item', 'mega-menu-item']);

            // A quick check before calling the slower matching function.
            // Archive/Search/404 templates can never apply outside their
            // own matching page type, so this skips a database query on
            // every other page load for kinds that could not match anyway.
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
     * A plain-text label for the template's kind: from
     * Bpafb_Pro_Template_Kinds::KIND_LABELS for a Pro kind, or the real
     * post type's singular name for a "single" one.
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
