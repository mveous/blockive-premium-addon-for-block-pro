/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pro-components/carousel/view.js"
/*!*********************************************!*\
  !*** ./src/pro-components/carousel/view.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initCarousel: () => (/* binding */ initCarousel),
/* harmony export */   onReady: () => (/* binding */ onReady)
/* harmony export */ });
/**
 * Shared engine for the multi-slide carousels (Media Carousel, Testimonial
 * Carousel, Reviews). Layout is pure CSS: slides per view come from
 * responsive CSS variables and the track is moved by
 * `--bpafb-carousel-index` (see style.css), so this only keeps the index,
 * the controls, and the accessibility state in sync. Follows the WAI-ARIA
 * carousel pattern like the Slides block: arrows, dots, a pause button,
 * keyboard arrows, touch swipe, and autoplay that pauses on hover / focus /
 * hidden tab and never starts for visitors who prefer reduced motion.
 *
 * Markup comes from Bpafb_Pro_Carousel (PHP).
 */
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

/**
 * @param {HTMLElement} root              The `.bpafb-carousel` element.
 * @param {Object}      options
 * @param {Function}    [options.onChange] Called with the new index after every move.
 * @return {{ goTo: Function, getIndex: Function }|null} Null when already initialised.
 */
function initCarousel(root, {
  onChange
} = {}) {
  if (root.dataset.bpafbReady) {
    return null;
  }
  // Only this carousel's own parts, not those of a carousel nested in a
  // slide (e.g. a Media Carousel inside a Loop Carousel card).
  const own = selector => [...root.querySelectorAll(selector)].filter(node => node.closest('.bpafb-carousel') === root);
  const mine = event => event.target.closest('.bpafb-carousel') === root;
  const track = own('.bpafb-carousel__track')[0];
  if (!track) {
    return null;
  }
  root.dataset.bpafbReady = '1';
  const slides = [...track.children];
  const viewport = own('.bpafb-carousel__viewport')[0];
  const dots = own('.bpafb-carousel__dot');
  const prev = own('.bpafb-carousel__arrow--prev')[0];
  const next = own('.bpafb-carousel__arrow--next')[0];
  const pauseBtn = own('.bpafb-carousel__pause')[0];
  const loop = root.dataset.loop === '1';
  const interval = parseInt(root.dataset.interval, 10) || 5000;
  const centered = root.classList.contains('bpafb-carousel--centered');
  const autoplay = root.dataset.autoplay === '1';
  let index = 0;
  let timer = null;
  let userPaused = reducedMotion.matches;
  let hoverPaused = false;
  let focusPaused = false;

  // Slides per view for the current breakpoint, as resolved by the CSS.
  const cols = () => {
    const n = parseInt(window.getComputedStyle(root).getPropertyValue('--bpafb-carousel-cols'), 10);
    return Math.max(1, Math.min(slides.length, n || 1));
  };
  const maxIndex = () => centered ? slides.length - 1 : Math.max(0, slides.length - cols());
  function goTo(target, silent) {
    const last = maxIndex();
    const perView = cols();
    let n = target;
    if (n < 0) {
      n = loop ? last : 0;
    } else if (n > last) {
      n = loop ? 0 : last;
    }
    index = n;
    root.style.setProperty('--bpafb-carousel-index', String(index));
    root.classList.toggle('is-static', last === 0);

    // Only the slides in view are reachable; the rest are inert so
    // keyboard and screen reader users never land on a hidden slide.
    const before = centered ? Math.floor((perView - 1) / 2) : 0;
    const after = centered ? before : perView - 1;
    slides.forEach((slide, i) => {
      const visible = i >= index - before && i <= index + after;
      slide.toggleAttribute('inert', !visible);
      slide.setAttribute('aria-hidden', visible ? 'false' : 'true');
      slide.classList.toggle('is-current', i === index);
      slide.classList.toggle('is-before', i < index);
      slide.classList.toggle('is-after', i > index);
    });
    dots.forEach((dot, i) => {
      dot.hidden = i > last;
      dot.classList.toggle('is-active', i === index);
      if (i === index) {
        dot.setAttribute('aria-current', 'true');
      } else {
        dot.removeAttribute('aria-current');
      }
    });
    if (prev) {
      prev.disabled = !loop && index === 0;
    }
    if (next) {
      next.disabled = !loop && index === last;
    }
    if (!silent && onChange) {
      onChange(index);
    }
  }
  function schedule() {
    window.clearTimeout(timer);
    timer = null;
    if (!autoplay || userPaused || hoverPaused || focusPaused || document.hidden || maxIndex() === 0) {
      return;
    }
    timer = window.setTimeout(() => {
      if (!loop && index === maxIndex()) {
        return;
      }
      goTo(index + 1);
      schedule();
    }, interval);
  }
  function updatePauseButton() {
    if (!pauseBtn) {
      return;
    }
    pauseBtn.setAttribute('aria-label', userPaused ? pauseBtn.dataset.labelPlay : pauseBtn.dataset.labelPause);
    const icon = pauseBtn.querySelector('i');
    if (icon) {
      icon.className = userPaused ? 'fa-solid fa-play' : 'fa-solid fa-pause';
    }
    // Announce slide changes only while nothing moves on its own.
    track.setAttribute('aria-live', autoplay && !userPaused ? 'off' : 'polite');
  }
  const step = delta => {
    goTo(index + delta);
    schedule();
  };
  if (prev) {
    prev.addEventListener('click', () => step(-1));
  }
  if (next) {
    next.addEventListener('click', () => step(1));
  }
  dots.forEach((dot, i) => dot.addEventListener('click', () => {
    goTo(i);
    schedule();
  }));
  if (pauseBtn) {
    pauseBtn.addEventListener('click', () => {
      userPaused = !userPaused;
      updatePauseButton();
      schedule();
    });
  }

  // A click on a partly visible (inert) slide - e.g. a side slide in
  // the coverflow skin - brings it into view. Inert slides are skipped
  // by hit testing, so the click lands on the viewport itself.
  viewport.addEventListener('click', event => {
    if (event.target.closest('.bpafb-carousel__slide')) {
      return;
    }
    const hit = slides.findIndex(slide => {
      const rect = slide.getBoundingClientRect();
      return event.clientX >= rect.left && event.clientX <= rect.right;
    });
    if (hit !== -1) {
      goTo(centered ? hit : Math.min(hit, maxIndex()));
      schedule();
    }
  });
  if (root.dataset.pauseHover === '1') {
    root.addEventListener('mouseenter', () => {
      hoverPaused = true;
      schedule();
    });
    root.addEventListener('mouseleave', () => {
      hoverPaused = false;
      schedule();
    });
  }

  // Autoplay must stop while a keyboard user is inside the carousel.
  root.addEventListener('focusin', () => {
    focusPaused = true;
    schedule();
  });
  root.addEventListener('focusout', event => {
    if (!root.contains(event.relatedTarget)) {
      focusPaused = false;
      schedule();
    }
  });
  document.addEventListener('visibilitychange', schedule);
  root.addEventListener('keydown', event => {
    if (!mine(event) || event.target.closest('input, textarea, select')) {
      return;
    }
    const rtl = window.getComputedStyle(root).direction === 'rtl';
    if (event.key === 'ArrowLeft') {
      step(rtl ? 1 : -1);
    } else if (event.key === 'ArrowRight') {
      step(rtl ? -1 : 1);
    }
  });

  // Touch / pen swipe.
  let startX = null;
  let startY = null;
  viewport.addEventListener('pointerdown', event => {
    if (event.pointerType === 'mouse' || !mine(event)) {
      return;
    }
    startX = event.clientX;
    startY = event.clientY;
  }, {
    passive: true
  });
  viewport.addEventListener('pointerup', event => {
    if (startX === null) {
      return;
    }
    const dx = event.clientX - startX;
    const dy = event.clientY - startY;
    startX = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      const rtl = window.getComputedStyle(root).direction === 'rtl';
      step(dx < 0 !== rtl ? 1 : -1);
    }
  }, {
    passive: true
  });

  // Slides per view change with the breakpoint: re-clamp the index.
  if ('ResizeObserver' in window) {
    let lastCols = cols();
    new window.ResizeObserver(() => {
      const now = cols();
      if (now !== lastCols) {
        lastCols = now;
        goTo(index, true);
        schedule();
      }
    }).observe(root);
  }
  updatePauseButton();
  goTo(0, true);
  root.classList.add('is-ready');
  schedule();
  return {
    goTo: i => {
      goTo(i);
      schedule();
    },
    getIndex: () => index
  };
}

/**
 * Runs `callback` once the DOM is ready.
 *
 * @param {Function} callback
 */
function onReady(callback) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback);
  } else {
    callback();
  }
}

/***/ },

/***/ "./src/pro-components/lightbox/lightbox.js"
/*!*************************************************!*\
  !*** ./src/pro-components/lightbox/lightbox.js ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bindLightbox: () => (/* binding */ bindLightbox),
/* harmony export */   openLightbox: () => (/* binding */ openLightbox)
/* harmony export */ });
/**
 * Shared lightbox (Media Carousel, Gallery), built on a native <dialog>:
 * focus stays inside while it is open, Esc closes it, and focus goes back
 * to the link that opened it. Videos play in it; closing it removes the
 * player, which stops playback. Styles: ./style.css (bpafb-pro-lightbox).
 *
 * Links opt in with one of:
 *   data-bpafb-lightbox  (href is the full-size image)
 *   data-bpafb-embed     (YouTube / Vimeo embed URL)
 *   data-bpafb-video     (video file URL)
 * plus an optional data-caption.
 */

let lightbox = null;
function el(tag, className, attrs = {}) {
  const node = document.createElement(tag);
  if (className) {
    node.className = className;
  }
  Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
  return node;
}
function iconButton(className, label, icon) {
  const button = el('button', `bpafb-lightbox__button ${className}`, {
    type: 'button',
    'aria-label': label
  });
  button.append(el('i', icon, {
    'aria-hidden': 'true'
  }));
  return button;
}

/**
 * Builds the one lightbox <dialog> the first time it is needed.
 *
 * @param {Object} l10n Translated labels.
 */
function getLightbox(l10n) {
  if (lightbox) {
    return lightbox;
  }
  const dialog = el('dialog', 'bpafb-lightbox', {
    'aria-label': l10n.dialog || 'Media viewer'
  });
  const close = iconButton('bpafb-lightbox__close', l10n.close || 'Close', 'fa-solid fa-xmark');
  const counter = el('p', 'bpafb-lightbox__counter');
  const figure = el('figure', 'bpafb-lightbox__figure');
  const prev = iconButton('bpafb-lightbox__prev', l10n.prev || 'Previous', 'fa-solid fa-chevron-left');
  const next = iconButton('bpafb-lightbox__next', l10n.next || 'Next', 'fa-solid fa-chevron-right');
  dialog.append(close, counter, figure, prev, next);
  document.body.append(dialog);
  lightbox = {
    dialog,
    figure,
    counter,
    prev,
    next,
    items: [],
    index: 0,
    l10n,
    returnFocus: null
  };
  close.addEventListener('click', () => dialog.close());
  prev.addEventListener('click', () => show(lightbox.index - 1));
  next.addEventListener('click', () => show(lightbox.index + 1));

  // A click on the dark area around the media closes it.
  dialog.addEventListener('click', event => {
    if (event.target === dialog || event.target === figure) {
      dialog.close();
    }
  });
  dialog.addEventListener('keydown', event => {
    if (event.target.closest('iframe, video')) {
      return;
    }
    if (event.key === 'ArrowLeft') {
      show(lightbox.index + (document.dir === 'rtl' ? 1 : -1));
    } else if (event.key === 'ArrowRight') {
      show(lightbox.index + (document.dir === 'rtl' ? -1 : 1));
    }
  });
  dialog.addEventListener('close', () => {
    figure.replaceChildren();
    document.documentElement.classList.remove('bpafb-lightbox-open');
    if (lightbox.returnFocus && lightbox.returnFocus.isConnected) {
      lightbox.returnFocus.focus();
    }
  });
  return lightbox;
}
function show(target) {
  const {
    items,
    figure,
    counter,
    prev,
    next,
    l10n
  } = lightbox;
  const count = items.length;
  lightbox.index = (target + count) % count;
  const link = items[lightbox.index];
  const caption = link.dataset.caption || '';
  let media;
  if (link.dataset.bpafbEmbed) {
    media = el('iframe', '', {
      src: link.dataset.bpafbEmbed,
      title: caption || link.getAttribute('aria-label') || '',
      allow: 'autoplay; fullscreen; picture-in-picture; encrypted-media',
      allowfullscreen: ''
    });
  } else if (link.dataset.bpafbVideo) {
    media = el('video', '', {
      src: link.dataset.bpafbVideo,
      controls: '',
      autoplay: '',
      playsinline: ''
    });
  } else {
    const img = link.querySelector('img');
    media = el('img', '', {
      src: link.href,
      alt: img && img.alt || caption
    });
  }
  const children = [media];
  if (caption) {
    const figcaption = el('figcaption', 'bpafb-lightbox__caption');
    figcaption.textContent = caption;
    children.push(figcaption);
  }
  figure.replaceChildren(...children);
  counter.textContent = (l10n.counter || '%1$d / %2$d').replace('%1$d', lightbox.index + 1).replace('%2$d', count);
  counter.hidden = count < 2;
  prev.hidden = count < 2;
  next.hidden = count < 2;
}

/**
 * Opens the lightbox on `items[ index ]`.
 *
 * @param {HTMLAnchorElement[]} items Links to step through.
 * @param {number}              index Link to show first.
 * @param {Object}              l10n  Translated labels.
 */
function openLightbox(items, index, l10n = {}) {
  const box = getLightbox(l10n);
  box.items = items;
  box.returnFocus = document.activeElement;
  show(index);
  document.documentElement.classList.add('bpafb-lightbox-open');
  if (!box.dialog.open) {
    box.dialog.showModal();
  }
}

/**
 * Makes the lightbox links inside `root` open the lightbox. `getItems`
 * returns the links to step through when one is clicked (e.g. only the
 * ones a Gallery filter leaves visible); by default, all of them.
 * Translated labels come from the root's data-l10n (see
 * Bpafb_Pro_Shared_Assets::lightbox_l10n()).
 *
 * @param {HTMLElement} root       Block wrapper.
 * @param {Function}    [getItems] Returns the current link list.
 */
function bindLightbox(root, getItems) {
  if (typeof window.HTMLDialogElement !== 'function') {
    return; // Very old browser: the links simply open the file.
  }
  let l10n = {};
  try {
    l10n = JSON.parse(root.dataset.l10n || '{}');
  } catch (e) {}
  const selector = '[data-bpafb-lightbox], [data-bpafb-embed], [data-bpafb-video]';
  const all = () => [...root.querySelectorAll(selector)];
  root.addEventListener('click', event => {
    const link = event.target.closest(selector);
    if (!link || !root.contains(link)) {
      return;
    }
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.button === 1) {
      return; // Let "open in new tab" work.
    }
    const items = getItems ? getItems() : all();
    const index = items.indexOf(link);
    if (index === -1) {
      return;
    }
    event.preventDefault();
    openLightbox(items, index, l10n);
  });
}

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.hasOwn(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!************************************!*\
  !*** ./src/media-carousel/view.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pro_components_carousel_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pro-components/carousel/view */ "./src/pro-components/carousel/view.js");
/* harmony import */ var _pro_components_lightbox_lightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pro-components/lightbox/lightbox */ "./src/pro-components/lightbox/lightbox.js");
/**
 * Media Carousel: the shared carousel engine, slideshow thumbnails, and
 * the shared lightbox.
 */


const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
function initMediaCarousel(root) {
  const thumbs = [...root.querySelectorAll('.bpafb-media-carousel__thumb')];
  const strip = root.querySelector('.bpafb-media-carousel__thumbs');
  const syncThumbs = index => {
    thumbs.forEach((thumb, i) => {
      thumb.classList.toggle('is-active', i === index);
      if (i === index) {
        thumb.setAttribute('aria-current', 'true');
      } else {
        thumb.removeAttribute('aria-current');
      }
    });
    const active = thumbs[index];
    if (strip && active) {
      strip.scrollTo({
        left: active.offsetLeft - (strip.clientWidth - active.offsetWidth) / 2,
        behavior: reducedMotion.matches ? 'auto' : 'smooth'
      });
    }
  };
  const carousel = (0,_pro_components_carousel_view__WEBPACK_IMPORTED_MODULE_0__.initCarousel)(root, {
    onChange: syncThumbs
  });
  if (!carousel) {
    return;
  }
  thumbs.forEach((thumb, i) => thumb.addEventListener('click', () => carousel.goTo(i)));
  (0,_pro_components_lightbox_lightbox__WEBPACK_IMPORTED_MODULE_1__.bindLightbox)(root);
}
;(0,_pro_components_carousel_view__WEBPACK_IMPORTED_MODULE_0__.onReady)(() => document.querySelectorAll('.bpafb-media-carousel').forEach(initMediaCarousel));
})();

/******/ })()
;
//# sourceMappingURL=view.js.map