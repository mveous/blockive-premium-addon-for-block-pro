<?php
/**
 * Shared markup for the multi-slide carousels (Media Carousel, Testimonial
 * Carousel, Reviews): wrapper attributes, scoped CSS variables, slide
 * attributes, and the arrow / dot / pause controls that
 * src/pro-components/carousel/view.js drives. Every block using it saves
 * the same carousel attributes (slidesPerView, gap, speed, autoplay,
 * autoplaySpeed, pauseOnHover, loop, navigation, arrowPosition and the
 * arrow / dot colors).
 *
 * @package BlockivePro
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

class Bpafb_Pro_Carousel
{
	/**
	 * Wrapper attributes for get_block_wrapper_attributes().
	 *
	 * @param array  $attributes Block attributes.
	 * @param string $classes    Block-specific classes (already safe).
	 * @param string $label      Accessible name of the carousel.
	 * @param bool   $centered   Keep the current slide in the middle.
	 * @return array<string,string>
	 */
	public static function wrapper_attrs($attributes, $classes, $label, $centered = false)
	{
		$arrows_outside = isset($attributes['arrowPosition']) && 'outside' === $attributes['arrowPosition'] && self::has_arrows($attributes);

		return [
			'class'                => trim(sprintf(
				'bpafb-carousel %1$s%2$s%3$s',
				$classes,
				$centered ? ' bpafb-carousel--centered' : '',
				$arrows_outside ? ' bpafb-carousel--arrows-outside' : ''
			)),
			'role'                 => 'region',
			'aria-roledescription' => __('carousel', 'blockive-premium-addon-for-block-pro'),
			'aria-label'           => $label,
			'data-autoplay'        => self::autoplay($attributes) ? '1' : '0',
			'data-interval'        => (string) (isset($attributes['autoplaySpeed']) ? max(1500, absint($attributes['autoplaySpeed'])) : 5000),
			'data-loop'            => (!isset($attributes['loop']) || !empty($attributes['loop'])) ? '1' : '0',
			'data-pause-hover'     => (!isset($attributes['pauseOnHover']) || !empty($attributes['pauseOnHover'])) ? '1' : '0',
		];
	}

	/**
	 * Carousel CSS custom properties, for Bpafb_Pro_Site_Blocks::scoped_vars_css().
	 *
	 * @param array $attributes Block attributes.
	 * @param bool  $single     Force one slide per view (e.g. the slideshow skin).
	 * @return array<string,string>
	 */
	public static function vars($attributes, $single = false)
	{
		$s = 'Bpafb_Pro_Site_Blocks';
		$per_view = function ($key) use ($attributes, $single) {
			if ($single) {
				return 'slidesPerView' === $key ? '1' : '';
			}
			return isset($attributes[$key]) && is_numeric($attributes[$key]) ? (string) max(1, min(8, absint($attributes[$key]))) : '';
		};

		return [
			'--bpafb-carousel-per-view'         => $per_view('slidesPerView'),
			'--bpafb-carousel-per-view-tablet'  => $per_view('slidesPerViewTablet'),
			'--bpafb-carousel-per-view-mobile'  => $per_view('slidesPerViewMobile'),
			'--bpafb-carousel-gap'              => $s::px($attributes, 'gap'),
			'--bpafb-carousel-speed'            => isset($attributes['speed']) ? min(3000, absint($attributes['speed'])) . 'ms' : '',
			'--bpafb-carousel-arrow-size'       => $s::px($attributes, 'arrowSize'),
			'--bpafb-carousel-arrow-color'      => $s::color($attributes, 'arrowColor'),
			'--bpafb-carousel-arrow-bg'         => $s::color($attributes, 'arrowBgColor'),
			'--bpafb-carousel-arrow-hover-color' => $s::color($attributes, 'arrowHoverColor'),
			'--bpafb-carousel-arrow-hover-bg'   => $s::color($attributes, 'arrowHoverBgColor'),
			'--bpafb-carousel-dot-size'         => $s::px($attributes, 'dotSize'),
			'--bpafb-carousel-dot-color'        => $s::color($attributes, 'dotColor'),
			'--bpafb-carousel-dot-active'       => $s::color($attributes, 'dotActiveColor'),
		];
	}

	/**
	 * Attributes for one slide element (role, label).
	 *
	 * @param int $index Zero-based slide index.
	 * @param int $count Number of slides.
	 * @return string
	 */
	public static function slide_attrs($index, $count)
	{
		return sprintf(
			' role="group" aria-roledescription="%1$s" aria-label="%2$s"',
			esc_attr__('slide', 'blockive-premium-addon-for-block-pro'),
			/* translators: 1: slide number, 2: total slides. */
			esc_attr(sprintf(__('%1$d of %2$d', 'blockive-premium-addon-for-block-pro'), $index + 1, $count))
		);
	}

	/**
	 * The full carousel markup around already-rendered slides.
	 *
	 * @param array    $attributes Block attributes.
	 * @param string[] $slides     Slide inner HTML (escaped), one per slide.
	 * @param string   $slide_class Extra class for every slide element.
	 * @return string
	 */
	public static function markup($attributes, $slides, $slide_class = '')
	{
		$count = count($slides);
		$items = '';
		foreach (array_values($slides) as $i => $html) {
			$items .= '<div class="bpafb-carousel__slide' . ($slide_class ? ' ' . esc_attr($slide_class) : '') . '"' . self::slide_attrs($i, $count) . '>' . $html . '</div>';
		}

		return '<div class="bpafb-carousel__stage"><div class="bpafb-carousel__viewport"><div class="bpafb-carousel__track" aria-live="' . (self::autoplay($attributes) ? 'off' : 'polite') . '">'
			. $items
			. '</div></div>' . self::arrows($attributes, $count) . '</div>'
			. self::bottom($attributes, $count);
	}

	/**
	 * Whether autoplay is on (and there is anything to play).
	 *
	 * @param array $attributes Block attributes.
	 * @return bool
	 */
	public static function autoplay($attributes)
	{
		return !isset($attributes['autoplay']) || !empty($attributes['autoplay']);
	}

	/**
	 * The navigation setting: both, arrows, dots, or none.
	 *
	 * @param array $attributes Block attributes.
	 * @return string
	 */
	private static function navigation($attributes)
	{
		return isset($attributes['navigation']) && in_array($attributes['navigation'], ['both', 'arrows', 'dots', 'none'], true) ? $attributes['navigation'] : 'both';
	}

	/**
	 * @param array $attributes Block attributes.
	 * @return bool
	 */
	private static function has_arrows($attributes)
	{
		return in_array(self::navigation($attributes), ['both', 'arrows'], true);
	}

	/**
	 * Previous / next buttons.
	 *
	 * @param array $attributes Block attributes.
	 * @param int   $count      Number of slides.
	 * @return string
	 */
	private static function arrows($attributes, $count)
	{
		if ($count < 2 || !self::has_arrows($attributes)) {
			return '';
		}
		return '<button type="button" class="bpafb-carousel__arrow bpafb-carousel__arrow--prev" aria-label="' . esc_attr__('Previous slide', 'blockive-premium-addon-for-block-pro') . '"><i class="fa-solid fa-chevron-left" aria-hidden="true"></i></button>'
			. '<button type="button" class="bpafb-carousel__arrow bpafb-carousel__arrow--next" aria-label="' . esc_attr__('Next slide', 'blockive-premium-addon-for-block-pro') . '"><i class="fa-solid fa-chevron-right" aria-hidden="true"></i></button>';
	}

	/**
	 * Pause button and dots. One dot per slide is printed; view.js hides
	 * the ones past the last position for the current slides per view.
	 *
	 * @param array $attributes Block attributes.
	 * @param int   $count      Number of slides.
	 * @return string
	 */
	private static function bottom($attributes, $count)
	{
		if ($count < 2) {
			return '';
		}
		$html = '';
		if (self::autoplay($attributes)) {
			$html .= '<button type="button" class="bpafb-carousel__pause" aria-label="' . esc_attr__('Pause carousel', 'blockive-premium-addon-for-block-pro') . '" data-label-play="' . esc_attr__('Play carousel', 'blockive-premium-addon-for-block-pro') . '" data-label-pause="' . esc_attr__('Pause carousel', 'blockive-premium-addon-for-block-pro') . '"><i class="fa-solid fa-pause" aria-hidden="true"></i></button>';
		}
		if (in_array(self::navigation($attributes), ['both', 'dots'], true)) {
			$dots = '';
			for ($i = 0; $i < $count; $i++) {
				$dots .= sprintf(
					'<button type="button" class="bpafb-carousel__dot%1$s" aria-label="%2$s"%3$s></button>',
					0 === $i ? ' is-active' : '',
					/* translators: %d: slide number. */
					esc_attr(sprintf(__('Go to slide %d', 'blockive-premium-addon-for-block-pro'), $i + 1)),
					0 === $i ? ' aria-current="true"' : ''
				);
			}
			$html .= '<div class="bpafb-carousel__dots">' . $dots . '</div>';
		}
		return $html ? '<div class="bpafb-carousel__bottom">' . $html . '</div>' : '';
	}
}
