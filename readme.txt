=== Blockive Pro ===
Contributors:      deep7197
Tags:              block, blocks, gutenberg, blockive, template builder
Requires at least: 6.8
Requires PHP:      7.4
Tested up to:      7.1
Stable tag:        1.0.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

A standalone Gutenberg block library and full-site Template Builder for WordPress - 28 blocks, Header/Footer/Archive/Search/404/Popup templates, WooCommerce & Events blocks, Loop Builder, and Dynamic Tags.

== Description ==

**Blockive Pro** is a complete Gutenberg block library and Template Builder for WordPress: 28 premium blocks, a full Template Builder covering every major template area of your site, and dynamic content tools for WooCommerce and Events - all in one standalone plugin. Create stunning, fast, and responsive websites with ease - no bulky page builders or coding required.

Every block is engineered with performance and clean code standards in mind, ensuring minimal asset footprints, mobile-first responsive controls, and built-in accessibility (a11y).

---

### 28 Premium Blocks

1. **Accordion**: Collapsible content panels with expand/collapse animations, custom icons, and active state styles.
2. **Business Hours**: Display opening and closing schedules with current-day highlighting and custom row borders.
3. **Button**: Highly customizable buttons with icons, badges, hover animations, and preset styles.
4. **Category List**: Styled taxonomy navigation with post counts, hierarchy view, and flexible grid/list layouts.
5. **Contact Form 7**: Seamlessly embed and style CF7 forms directly within the Gutenberg editor.
6. **Countdown Timer**: Urgency-driven countdown timers for product launches, sales, and upcoming events.
7. **Drop Caps**: Elegant editorial initial capitals with shape, background, and typography options.
8. **FAQ**: Accordion-style FAQ lists with automatic Schema.org structured data for rich search results.
9. **Fun Fact**: Animated number counter and milestone statistics with prefixes, suffixes, and custom icons.
10. **Heading**: Advanced headings with text gradients, text stroke highlights, and layered text shadows.
11. **Icon Box**: Feature boxes combining icons, headings, descriptions, and call-to-action links.
12. **Image Accordion**: Interactive hover-expanding image panels with custom text overlays and transitions.
13. **Image Box**: Showcase images with custom layouts, badges, hover zoom effects, and descriptions.
14. **Image Comparison**: Keyboard-accessible before/after slider with horizontal or vertical orientations.
15. **Lottie Animation**: Lightweight vector animations with control over autoplay, loops, speed, and scroll/hover triggers.
16. **Mailchimp**: Clean newsletter subscription forms with custom field styling and direct API submission.
17. **Mega Menu**: Multi-level dropdown navigation with per-item template-driven dropdown panels and a responsive mobile breakpoint.
18. **Menu**: Renders any existing WordPress navigation menu with horizontal or dropdown layouts.
19. **Pie Chart**: Interactive dynamic pie and donut charts powered by Chart.js.
20. **Post Grid**: Dynamic post showcase with custom query filters, taxonomy filters, pagination, and responsive columns.
21. **Loop Grid**: Post Grid's query power combined with a full Blockive Template for every card, for a fully custom, reusable card design.
22. **Pricing Table**: Feature-rich pricing tables with ribbon badges, toggle support, bulleted lists, and CTA buttons.
23. **Progress Bar**: Animated linear and skill progress bars with customizable percentage labels.
24. **Social Icons**: Social profile links with custom SVG shapes (square, circle, rounded) and hover interactions.
25. **Tabs**: Sleek content switchers with segmented pill controls and full keyboard navigation.
26. **Team**: Showcase team members with photos, job titles, bios, and social profile links.
27. **Testimonial**: Testimonials slider with star ratings, author avatars, and customizable autoplay settings.
28. **Video**: Embed responsive video players with custom cover images, play buttons, and lightbox playback.

---

### Full Template Builder - Every Template Area

Design custom templates with display conditions for every major area of your site:

* **Single** - Custom post and page templates.
* **Header** - Replaces or augments your theme's header via `wp_body_open`, with the matching block-theme template part hidden automatically.
* **Footer** - Same approach via `wp_footer`, working on both block and classic themes.
* **Archive** - Category, tag, author, and date archive templates.
* **Search Results** - Custom search results layout.
* **404 Page** - Custom "not found" page design.
* **Popup** - On-page popups with configurable triggers (page-load delay, scroll percentage, click, exit-intent) and display frequency (always, once per session, once every N days).

An **Edit Template** item is added to the WordPress admin bar on the live site, listing every template that is active on the page you're viewing - Header, Footer, Single, Archive/Search/404, and Popup can all be active at once.

---

### Dynamic Template Builder Blocks

Build the Single, Header, Footer, Archive, Search, and 404 templates above using dynamic content blocks:

* **Post Title**, **Post Content**, **Featured Image**, **Featured Video**
* **Author & Author Avatar**, **Publish Date & Modified Date**
* **Categories & Tags**, **Comments Count**, **Reading Time**
* **Breadcrumbs**, **Previous / Next Navigation**, **Related Posts**, **Post Meta**

---

### WooCommerce Template Blocks (17)

Build fully custom WooCommerce product pages with dynamic blocks for Product Title, Gallery, Images, Price, Sale Badge, Rating, Add To Cart, SKU, Stock, Short Description, Description, Attributes, Meta, Tabs, Variations, Related Products, Upsells, and Cross-Sells. Every block checks that WooCommerce is active before rendering, so a site without WooCommerce is never affected.

### Events Template Blocks (9)

Dynamic blocks for Event Title, Event Image, Event Date, Event Time, Venue, Organizer, Event Cost, Event Map, and a Register Button, for building custom single-event templates.

---

### Dynamic Tags

Any text or URL setting on any Blockive block can hold a `{{tag}}` token - such as `{{post_title}}` or `{{post_date:F j, Y}}` - which is replaced with live content when the page is displayed. Works across every block, static or dynamic, with no extra setup required.

---

### Advanced Shared Design Controls

* **Typography**: Custom fonts, weights, font sizes, line heights, letter spacing, and text transforms.
* **Spacing**: Comprehensive margin and padding controls with responsive unit support (px, em, rem, %, vh, vw).
* **Borders & Radius**: Solid, dashed, dotted borders, individual side control, and corner rounding.
* **Backgrounds**: Solid colors, multi-stop linear/radial gradients, and image backgrounds.
* **Box Shadows & Text Shadows**: Multi-layered shadow effects with customizable blur, spread, and color.
* **Animations**: Entrance and hover animations with custom speed and delay.
* **Accessible (A11y)**: Keyboard navigation, ARIA attributes, and semantic HTML markup across interactive blocks.

== Installation ==

1. Upload the `blockive-premium-addon-for-block-pro` folder to the `/wp-content/plugins/` directory, or install it via the WordPress Plugins screen (Plugins > Add New).
2. Activate the plugin through the Plugins menu in WordPress.
3. Open any page or post editor and search for "Blockive" in the block inserter.
4. Go to Blockive > Templates in your WordPress admin dashboard to build Header, Footer, Archive, Search, 404, Popup, and Single templates.

== Frequently Asked Questions ==

= Does this work without WooCommerce or an events plugin installed? =
Yes. The WooCommerce and Events template blocks are safe to have in a template even without those plugins active - they simply render nothing until the corresponding plugin is installed.

= Can I show a different header, footer, or popup on different pages? =
Yes. Every template kind uses the same Display Conditions system, so you can target specific pages, post types, taxonomies, or the whole site per template.

= Are all blocks mobile-responsive? =
Yes. Every block is mobile-first and includes dedicated responsive breakpoints for desktop, tablet, and mobile devices.

= Does Blockive Pro slow down my website? =
No. Blockive Pro enqueues CSS and JavaScript assets on demand, only loading the assets required for the specific blocks used on that page.

= Can I use Blockive Pro with any WordPress theme? =
Yes. Blockive Pro works with block themes (Full Site Editing) and classic themes supporting the Gutenberg block editor.

= How do I create custom templates? =
Go to Blockive > Templates in your WordPress admin dashboard, create a new template, choose its kind (Single, Header, Footer, Archive, Search, 404, or Popup), set your display conditions, and build the layout using the blocks.

== Screenshots ==

1. Blockive Pro block collection inside the Gutenberg editor.
2. Template Builder with Header, Footer, Archive, Search, 404, and Popup template kinds.
3. WooCommerce template blocks used on a custom single-product template.
4. Popup Builder trigger and frequency settings.

== Changelog ==

= 1.0.0 =
* Initial release: 28 premium Gutenberg blocks.
* Full Template Builder for Single, Header, Footer, Archive, Search Results, 404, and Popup templates.
* 17 WooCommerce and 9 Events template blocks.
* Dynamic Tags for text and URL settings across every block.
* Admin bar "Edit Template" quick-access menu.
