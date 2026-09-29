/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pro-dynamic-blocks-shared/dynamic-block-edit.js"
/*!*************************************************************!*\
  !*** ./src/pro-dynamic-blocks-shared/dynamic-block-edit.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDynamicBlockEdit: () => (/* binding */ createDynamicBlockEdit),
/* harmony export */   replaceTeaserBlocks: () => (/* binding */ replaceTeaserBlocks)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





/**
 * Builds the `edit` view for a real Template Block whose content comes
 * from WooCommerce or Events Calendar data on the server (see
 * Bpafb_Pro_Woo_Blocks / Bpafb_Pro_Events_Blocks). Shows a plain
 * placeholder instead of a live preview, since most of these show
 * detailed markup (a gallery, tabs, a variation form) that is not worth
 * building twice.
 *
 * @param {string} title Block title, e.g. "Product Price".
 * @param {string} icon  Dashicon name matching the block's real icon.
 * @return {Function} React component.
 */

function createDynamicBlockEdit(title, icon) {
  return function DynamicBlockEdit() {
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      ...blockProps,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Placeholder, {
        icon: icon,
        label: title,
        instructions: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Renders dynamically on the frontend from the previewed product/event.', 'blockive-premium-addon-for-block-pro')
      })
    });
  };
}

/**
 * Replaces the free plugin's teaser version of each block with the real,
 * server-rendered one (WooCommerce and Events Calendar Template Blocks).
 * The teaser is always removed; the real block is only added when the
 * plugin it needs is active, so it never sits in the inserter doing
 * nothing. Saved templates still render (the PHP side is always
 * registered).
 *
 * @param {Array<{slug: string, title: string, icon: string}>} blocks Blocks to register.
 * @param {boolean}                                              active Whether the needed plugin is active.
 */
function replaceTeaserBlocks(blocks, active) {
  blocks.forEach(({
    slug,
    title,
    icon
  }) => {
    const name = 'blockive-premium-addon-for-block/tb-' + slug;
    if ((0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.getBlockType)(name)) {
      (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.unregisterBlockType)(name);
    }
    if (!active) {
      return;
    }
    ;(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.registerBlockType)(name, {
      apiVersion: 3,
      title,
      category: 'blockive-template',
      icon,
      usesContext: ['postId', 'postType'],
      supports: {
        html: false,
        className: false,
        customClassName: false,
        reusable: false
      },
      // Hover preview in the inserter: the placeholder above.
      example: {},
      edit: createDynamicBlockEdit(title, icon),
      save: () => null
    });
  });
}

/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

module.exports = window["ReactJSXRuntime"];

/***/ },

/***/ "@wordpress/block-editor"
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
(module) {

module.exports = window["wp"]["blockEditor"];

/***/ },

/***/ "@wordpress/blocks"
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
(module) {

module.exports = window["wp"]["blocks"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["components"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
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
/*!*********************************************!*\
  !*** ./src/template-blocks-events/index.js ***!
  \*********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pro_dynamic_blocks_shared_dynamic_block_edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pro-dynamic-blocks-shared/dynamic-block-edit */ "./src/pro-dynamic-blocks-shared/dynamic-block-edit.js");
/**
 * Replaces the free plugin's 9 client-only Events Calendar "(Pro)" teaser
 * blocks with real, server-rendered blocks - see
 * class-bpafb-pro-events-blocks.php for the render side. Same replace
 * strategy as src/template-blocks-woo - see that file's docblock: the
 * teaser is always removed, but the real block only takes its place when
 * `bpafbProEventsBlocks.active` (localized from
 * `class_exists('Tribe__Events__Main')`) is true.
 */


const EVENTS_CALENDAR_ACTIVE = !!window.bpafbProEventsBlocks?.active;
const BLOCKS = [{
  slug: 'event-title',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Event Title', 'blockive-premium-addon-for-block-pro'),
  icon: 'calendar-alt'
}, {
  slug: 'event-image',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Event Image', 'blockive-premium-addon-for-block-pro'),
  icon: 'format-image'
}, {
  slug: 'event-date',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Event Date', 'blockive-premium-addon-for-block-pro'),
  icon: 'calendar'
}, {
  slug: 'event-time',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Event Time', 'blockive-premium-addon-for-block-pro'),
  icon: 'clock'
}, {
  slug: 'event-venue',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Venue', 'blockive-premium-addon-for-block-pro'),
  icon: 'location-alt'
}, {
  slug: 'event-organizer',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Organizer', 'blockive-premium-addon-for-block-pro'),
  icon: 'admin-users'
}, {
  slug: 'event-cost',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Event Cost', 'blockive-premium-addon-for-block-pro'),
  icon: 'tickets-alt'
}, {
  slug: 'event-map',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Event Map', 'blockive-premium-addon-for-block-pro'),
  icon: 'location'
}, {
  slug: 'event-register-button',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Register Button', 'blockive-premium-addon-for-block-pro'),
  icon: 'megaphone'
}];
(0,_pro_dynamic_blocks_shared_dynamic_block_edit__WEBPACK_IMPORTED_MODULE_1__.replaceTeaserBlocks)(BLOCKS, EVENTS_CALENDAR_ACTIVE);
})();

/******/ })()
;
//# sourceMappingURL=index.js.map