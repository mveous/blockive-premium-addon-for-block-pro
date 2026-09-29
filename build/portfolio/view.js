/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pro-components/filter-bar/filter-bar.js"
/*!*****************************************************!*\
  !*** ./src/pro-components/filter-bar/filter-bar.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initFilterBar: () => (/* binding */ initFilterBar)
/* harmony export */ });
/**
 * Shared filter buttons (Gallery, Portfolio). Each filterable item has a
 * space-separated `data-filter-keys`; each button a `data-filter` key, or
 * "all". The active button is aria-pressed, and a polite status line tells
 * screen reader users how many items now show. Markup from
 * Bpafb_Pro_Shared_Assets::filter_bar_html().
 *
 * @param {HTMLElement}   root  Block wrapper.
 * @param {HTMLElement[]} items Filterable items.
 */
function initFilterBar(root, items) {
  const bar = root.querySelector('.bpafb-filter-bar');
  if (!bar) {
    return;
  }
  const buttons = [...bar.querySelectorAll('.bpafb-filter-bar__button')];
  const status = bar.querySelector('.bpafb-filter-bar__status');
  const apply = (filter, announce) => {
    buttons.forEach(button => {
      const active = button.dataset.filter === filter;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    let shown = 0;
    items.forEach(item => {
      const keys = (item.dataset.filterKeys || '').split(' ');
      item.hidden = filter !== 'all' && !keys.includes(filter);
      shown += item.hidden ? 0 : 1;
    });
    if (announce && status) {
      status.textContent = (status.dataset.template || '%d').replace('%d', shown);
    }
  };
  buttons.forEach(button => button.addEventListener('click', () => apply(button.dataset.filter, true)));
  const initial = buttons.find(button => button.classList.contains('is-active'));
  if (initial) {
    apply(initial.dataset.filter, false);
  }
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
/*!*******************************!*\
  !*** ./src/portfolio/view.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pro_components_filter_bar_filter_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pro-components/filter-bar/filter-bar */ "./src/pro-components/filter-bar/filter-bar.js");
/**
 * Portfolio: the shared filter buttons (src/pro-components/filter-bar).
 */

function init() {
  document.querySelectorAll('.bpafb-portfolio').forEach(root => {
    if (root.dataset.bpafbReady) {
      return;
    }
    root.dataset.bpafbReady = '1';
    (0,_pro_components_filter_bar_filter_bar__WEBPACK_IMPORTED_MODULE_0__.initFilterBar)(root, [...root.querySelectorAll('.bpafb-portfolio__item')]);
  });
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
})();

/******/ })()
;
//# sourceMappingURL=view.js.map