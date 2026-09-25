# Blockive Pro

A standalone, high-performance Gutenberg block library and full-site **Template Builder** for WordPress. Design websites with advanced layout controls, styling, responsive controls, and dynamic content — no external page builders required.

---

## Key Highlights

- **36 Premium Blocks**: A complete block library covering content, layout, navigation, and dynamic query blocks.
- **Full Template Builder**: Build Single, Header, Footer, Archive, Search Results, 404, and Popup templates, each with its own Display Conditions.
- **WooCommerce & Events Blocks**: 17 WooCommerce product blocks and 9 Events blocks for building fully custom product and event templates.
- **Dynamic Tags**: `{{tag}}` tokens (e.g. `{{post_title}}`, `{{post_date:F j, Y}}`) work in any text or URL field on any Blockive block.
- **Loop Builder**: Post Grid can render a Blockive Template for each card instead of its built-in layout.
- **Popup Builder**: Page-load delay, scroll percentage, click, and exit-intent triggers, with once-per-session / once-every-N-days frequency control.
- **Deep Design Controls**: Advanced typography, responsive spacing, multi-stop gradients, box shadows, text shadows, border styling, and animations shared across every block.
- **Accessibility First (A11y)**: Full keyboard navigation, ARIA attributes, and focus management across interactive blocks (Tabs, Accordions, Sliders).

---

## Included 36 Blocks

| Block Name | Description | Key Customization Features |
|:---|:---|:---|
| **Blockive Accordion** | Collapsible content sections ideal for FAQs and documentation. | Expand/collapse speed, active colors, custom open/close icons, independent styling. |
| **Blockive Business Hours** | Display opening and closing schedules with highlight controls. | Current-day auto-highlighting, typography, row borders, custom time badge format. |
| **Blockive Button** | Customizable button with icon and badge support. | Hover animations, custom badges, icon placement, gradient and solid fills. |
| **Blockive Category List** | Styled taxonomy browser for categories and custom taxonomies. | Hierarchy display, grid/list layouts, post-count badges, custom item spacing. |
| **Blockive Contact Form 7** | Drop-in Contact Form 7 integration with native styling. | Form selection by ID, live preview in editor, custom field and submit button styling. |
| **Blockive Countdown Timer** | Urgency-inducing timers for sales, launches, and events. | Circular & box styles, days/hours/mins/secs labels, expiry actions, styling. |
| **Blockive Drop Caps** | Editorial-style typographic enhancements for standard paragraphs. | First-letter custom padding, custom margins, colored initials, shapes. |
| **Blockive FAQ** | Schema-ready accordion style FAQ lists. | Structured data auto-generation, schema support toggle, icon styles. |
| **Blockive Fun Fact** | Animated milestone statistics and counter block. | Prefix/suffix options, animation speed, layouts, icons, typography. |
| **Blockive Heading** | Titles with gradients, stroke highlights, and shadows. | Text stroke width/color, linear/radial gradients, multi-layer text shadows. |
| **Blockive Icon Box** | Feature card displaying an icon, title, description, and link. | Icon position (top/left/right), hover transitions, border/background options. |
| **Blockive Image Accordion** | Interactive image panels that expand on hover/click. | Custom overlay opacity, animation speed, per-item height, text typography. |
| **Blockive Image Box** | Image card with badges, title, description, and action button. | Image layout modes, hover zoom effects, styling controls. |
| **Blockive Image Comparison** | Draggable before/after slider for visual comparisons. | Keyboard-accessible handle, horizontal/vertical orientation, custom labels. |
| **Blockive Lottie** | Embed lightweight, scalable Lottie vector animations. | Loop, autoplay, speed control, scroll, click, or hover triggers. |
| **Blockive MailChimp** | Capture newsletter signups with a styled Mailchimp subscription form. | API integration, list selection, custom input field and submit button styling. |
| **Blockive Mega Menu** | Multi-level dropdown navigation. | Per-item template-driven dropdown panels, full typography/color controls, responsive mobile breakpoint. |
| **Blockive Menu** | Renders an existing WordPress navigation menu. | Horizontal or dropdown layouts, matching style controls. |
| **Blockive Pie Chart** | Interactive data visualizations with pie and donut charts. | Custom legend placement, donut/pie toggle, tooltip formatting (Chart.js). |
| **Blockive Post Grid** | Query-driven grid for showcasing posts, articles, or custom post types. | Custom queries, pagination, category/tag filters, responsive column controls. |
| **Blockive Loop Grid** | Post Grid's query engine paired with a full Blockive Template per card. | Renders a reusable, fully custom card design for every item instead of a built-in layout. |
| **Blockive Pricing Table** | Fully customizable pricing table with features list and CTA. | Ribbon/badge, features checklist, period toggles, button styling. |
| **Blockive Progress Bar** | Animated linear progress indicators for skills and goals. | Animated steps, custom bar height, percentage display toggle, stripes. |
| **Blockive Social Icons** | Links to social profiles with custom shapes and animations. | Shape variants (round/circle/square), custom SVG colors, hover animations. |
| **Blockive Tabs** | Content switchers to organize tabular content. | Segmented pill styling, responsive tab layout, keyboard arrow-key navigation. |
| **Blockive Team** | Showcase team members with photos, roles, bios, and social links. | Per-member social links, responsive columns, avatar shape and bio styling. |
| **Blockive Testimonial** | Testimonials slider with star ratings and avatars. | Swiper slider, pausable autoplay, star ratings, avatar styling, navigation arrows. |
| **Blockive Video** | Responsive video embed with custom cover image and lightbox. | Custom cover image, play button design, lightbox modal playback. |
| **Blockive Icon** | A single Font Awesome icon with an optional link. | Default / stacked / framed views, circle / square / rounded shapes, responsive size, rotate, hover colors. |
| **Blockive Icon List** | Icon + text items for contact details, features, or footer links. | Per-item icon and link (`tel:`/`mailto:` supported), stacked or inline layout, dividers, typography, hover colors. |
| **Blockive Google Maps** | Keyless Google Maps embed for any address or coordinates. | Zoom, roadmap/satellite, responsive height, grayscale with hover reveal, lazy loading. |
| **Blockive Call to Action** | Promo box with image, heading, text, button, and ribbon. | Classic (image left/right/top) or cover skin, overlay with hover color, image zoom/move effects, whole-box link. |
| **Blockive Flip Box** | Two-sided card revealing its back on hover, keyboard focus, or tap. | Flip (3D), slide, push, fade, zoom in/out in four directions, per-side backgrounds, button or whole-side link. |
| **Blockive Slides** | Full-width hero slider with per-slide background, heading, text, and button. | Slide/fade, autoplay with pause button, arrows, dots, swipe, keyboard, Ken Burns zoom, responsive height. No Swiper dependency. |
| **Blockive Share Buttons** | Share the current page or post (or the Loop Grid card's post). | 10 networks plus email, copy link, print, and the native share sheet. Flat/gradient/framed/minimal skins, brand or custom colors. |
| **Blockive Off-Canvas** | Slide-in panel that holds any blocks, e.g. a mobile menu. | Left/right/top/bottom, trigger button or any `#panel-id` link, overlay, focus trap, Esc to close, scroll lock. |

---

## Template Builder — Every Template Kind

Registered in `includes/class-bpafb-pro-template-kinds.php`:

| Kind | How it's shown |
|:---|:---|
| **Single** | Fully replaces a post/page's content. |
| **Header** | Injected via `wp_body_open`; the theme's matching `core/template-part` is hidden on block themes. |
| **Footer** | Injected via `wp_footer`. |
| **Archive** | Swapped in via `template_include`. |
| **Search Results** | Swapped in via `template_include`. |
| **404 Page** | Swapped in via `template_include`. |
| **Popup** | Rendered on-page with a configurable trigger and display frequency (`class-bpafb-pro-popup-builder.php`). |

The live site's admin bar gets an **Edit Template** item (`class-bpafb-pro-admin-bar.php`) listing every template kind active on the current page, since a Header, Footer, Single/Archive/Search/404 body, and Popup can all be active simultaneously.

### Dynamic Template Builder Blocks

Build the templates above using dynamic content blocks:

| Template Block | Description |
|:---|:---|
| **Post Title** | Dynamic post or page heading with H1–H6 tag selection and typography controls. |
| **Post Content** | Renders post body content with container and layout spacing. |
| **Featured Image** | Dynamic thumbnail image with aspect ratio, border radius, and overlay styling. |
| **Featured Video** | Embeds featured post video formats dynamically. |
| **Author & Author Avatar** | Dynamic author name, biographical info, and circular/square avatar. |
| **Publish Date & Modified Date** | Publication and last updated date formats with custom prefix icons. |
| **Categories & Tags** | Dynamic taxonomy badge lists with custom delimiters and links. |
| **Comments Count** | Dynamic comment count indicator with singular/plural custom labels. |
| **Reading Time** | Calculates and displays reading time estimates based on word count. |
| **Breadcrumbs** | SEO-friendly hierarchical navigation trail. |
| **Previous / Next Navigation** | Post-to-post navigation links with thumbnail previews. |
| **Related Posts** | Dynamic related articles query based on category or tag matches. |
| **Post Meta** | Unified meta container to arrange author, date, and comments in a single line. |

---

## Header & Footer Template Blocks (9)

Defined in `includes/class-bpafb-pro-site-blocks.php`, source in `src/template-blocks-site/`. They appear under **Blockive Header & Footer** in the Template Builder's inserter. Together with the existing Menu / Mega Menu, Social Icons, and Button blocks, they cover Elementor Pro's "Site" widgets.

| Block | Description |
|:---|:---|
| **Site Logo** | Custom logo from the Customizer or Site Editor, or a custom image. Responsive width, max height, radius, and hover opacity. Falls back to the site title when no logo is set. |
| **Site Title** | Site name from Settings → General. Optional home link, H1–H6/p/div/span tag, and hover color. |
| **Site Tagline** | Site tagline from Settings → General. |
| **Page Title** | Context-aware title for the current page, post, archive (prefix optional), search results, or 404 page. |
| **Search Form** | Classic (field + button), Minimal (field with icon), or Full Screen (icon opens an accessible overlay). Can limit results to one post type. |
| **Menu Cart** | WooCommerce cart icon with count badge, subtotal, and mini-cart dropdown. Updates live through cart fragments. Only shown in the inserter when WooCommerce is active. |
| **Login** | Login/logout link with greeting and avatar for headers, or a full login form. Supports login and logout redirects. |
| **Sitemap** | Columns of pages, posts, custom post types, or taxonomies. Can be nested, sorted, and responsive. |
| **Copyright** | Footer line with `{year}`, `{site_title}`, and `{site_url}` placeholders, so the year never goes stale. |

## Archive Template Blocks (2)

Source in `src/template-blocks-site/archive-*`, shared loop code in `includes/class-bpafb-pro-archive-loop.php`. Unlike Post Grid and Loop Grid, which run their own query, these list what the **main query** already found. That means the category, tag, author, date, custom post type archive, blog page, search results, or WooCommerce shop being viewed. They use WordPress's own `/page/2/` pagination, and items per page come from Settings → Reading (or WooCommerce's catalog settings).

| Block | Description |
|:---|:---|
| **Archive Posts** | Shows each result as a Blockive card (image with aspect ratio, categories, title, date, author, comments, excerpt, read more) or as a **Loop Item** template. Responsive columns, numbered or previous/next pagination, and a custom "nothing found" message. Renders nothing on singular pages. |
| **Archive Products** | Three layouts: Blockive card (image, sale badge, title, rating, price, AJAX add-to-cart), WooCommerce's native loop (`content-product.php`, keeps theme and plugin compatibility), or a Loop Item template. Includes WooCommerce's result count and sorting dropdown. Only renders on product listings, so an Archive template shared with the blog is safe. |

## WooCommerce Template Blocks (17)

Defined in `includes/class-bpafb-pro-woo-blocks.php`: Product Title, Product Gallery, Product Images, Product Price, Sale Badge, Product Rating, Add To Cart, Product SKU, Product Stock, Product Short Description, Product Description, Product Attributes, Product Meta, Product Tabs, Product Variations, Related Products, Upsells, Cross Sells.

Every render function checks `function_exists()` before calling a WooCommerce API, so these blocks stay safely inert — never fatal — on a site without WooCommerce installed.

## Events Template Blocks (9)

Defined in `includes/class-bpafb-pro-events-blocks.php`: Event Title, Event Image, Event Date, Event Time, Venue, Organizer, Event Cost, Event Map, Register Button.

## Dynamic Tags

`includes/class-bpafb-pro-dynamic-tags.php` hooks into `render_block` for every `blockive-premium-addon-for-block/*` block, replacing `{{tag}}` / `{{tag:param}}` tokens in text and URL attributes with live content — works on static and dynamic blocks alike, no per-block setup needed.

---

## Advanced Shared Design Controls

- **Typography**: Custom fonts, weights, font sizes, line heights, letter spacing, and text transforms.
- **Spacing**: Comprehensive margin and padding controls with responsive unit support (px, em, rem, %, vh, vw).
- **Borders & Radius**: Solid, dashed, dotted borders, individual side control, and corner rounding.
- **Backgrounds**: Solid colors, multi-stop linear/radial gradients, and image backgrounds.
- **Box Shadows & Text Shadows**: Multi-layered shadow effects with customizable blur, spread, and color.
- **Animations**: Entrance and hover animations with custom speed and delay.

---

## Development Setup

The project uses the official `@wordpress/scripts` toolchain for bundling, linting, and formatting.

### Prerequisites

- **WordPress**: 6.8 or newer
- **PHP**: 7.4 or newer
- **Node.js**: 18.x or newer
- **npm**: 9.x or newer

### Installation & Build Commands

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start hot-reloading development server:
   ```bash
   npm run start
   ```

3. Build production assets:
   ```bash
   npm run build
   ```

4. Lint & format code:
   ```bash
   npm run lint:js
   npm run lint:css
   npm run format
   ```

---

## License & Credits

Distributed under the **GPL-2.0-or-later** License. See `readme.txt` or the [GNU General Public License](https://www.gnu.org/licenses/gpl-2.0.html) for details.

Developed by **Mveous**.
