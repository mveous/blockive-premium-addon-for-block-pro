/**
 * Media Carousel: the shared carousel engine, slideshow thumbnails, and
 * the shared lightbox.
 */
import { initCarousel, onReady } from '../pro-components/carousel/view';
import { bindLightbox } from '../pro-components/lightbox/lightbox';

const reducedMotion = window.matchMedia( '(prefers-reduced-motion: reduce)' );

function initMediaCarousel( root ) {
	const thumbs = [ ...root.querySelectorAll( '.bpafb-media-carousel__thumb' ) ];
	const strip = root.querySelector( '.bpafb-media-carousel__thumbs' );

	const syncThumbs = ( index ) => {
		thumbs.forEach( ( thumb, i ) => {
			thumb.classList.toggle( 'is-active', i === index );
			if ( i === index ) {
				thumb.setAttribute( 'aria-current', 'true' );
			} else {
				thumb.removeAttribute( 'aria-current' );
			}
		} );
		const active = thumbs[ index ];
		if ( strip && active ) {
			strip.scrollTo( {
				left: active.offsetLeft - ( strip.clientWidth - active.offsetWidth ) / 2,
				behavior: reducedMotion.matches ? 'auto' : 'smooth',
			} );
		}
	};

	const carousel = initCarousel( root, { onChange: syncThumbs } );
	if ( ! carousel ) {
		return;
	}
	thumbs.forEach( ( thumb, i ) => thumb.addEventListener( 'click', () => carousel.goTo( i ) ) );
	bindLightbox( root );
}

onReady( () => document.querySelectorAll( '.bpafb-media-carousel' ).forEach( initMediaCarousel ) );
