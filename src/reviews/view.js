/**
 * Reviews: the shared carousel engine (src/pro-components/carousel/view.js).
 */
import { initCarousel, onReady } from '../pro-components/carousel/view';

onReady( () => document.querySelectorAll( '.bpafb-reviews.bpafb-carousel' ).forEach( ( root ) => initCarousel( root ) ) );
