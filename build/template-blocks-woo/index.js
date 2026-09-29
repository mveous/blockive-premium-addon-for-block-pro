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
/*!******************************************!*\
  !*** ./src/template-blocks-woo/index.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pro_dynamic_blocks_shared_dynamic_block_edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pro-dynamic-blocks-shared/dynamic-block-edit */ "./src/pro-dynamic-blocks-shared/dynamic-block-edit.js");
/**
 * Replaces the free plugin's 18 locked WooCommerce "(Pro)" placeholder
 * blocks with the real, working ones - see class-bpafb-pro-woo-blocks.php
 * for the server-side code.
 *
 * This file is loaded with a set dependency on the free plugin's
 * `bpafb-template-blocks` file (which registers those placeholders), so it
 * always runs after them. It removes each placeholder first, then decides
 * whether to add the real block, based on `bpafbProWooBlocks.active` (sent
 * from PHP, from `class_exists('WooCommerce')`). The placeholder is always
 * removed, but the real block only takes its place when WooCommerce is
 * actually installed.
 */


const WOOCOMMERCE_ACTIVE = !!window.bpafbProWooBlocks?.active;
const BLOCKS = [{
  slug: 'product-title',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Product Title', 'blockive-premium-addon-for-block-pro'),
  icon: 'editor-textcolor'
}, {
  slug: 'product-gallery',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Product Gallery', 'blockive-premium-addon-for-block-pro'),
  icon: 'format-gallery'
}, {
  slug: 'product-images',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Product Images', 'blockive-premium-addon-for-block-pro'),
  icon: 'format-image'
}, {
  slug: 'product-price',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Product Price', 'blockive-premium-addon-for-block-pro'),
  icon: 'tag'
}, {
  slug: 'product-sale-badge',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sale Badge', 'blockive-premium-addon-for-block-pro'),
  icon: 'megaphone'
}, {
  slug: 'product-rating',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Product Rating', 'blockive-premium-addon-for-block-pro'),
  icon: 'star-filled'
}, {
  slug: 'product-add-to-cart',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add To Cart', 'blockive-premium-addon-for-block-pro'),
  icon: 'cart'
}, {
  slug: 'product-sku',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Product SKU', 'blockive-premium-addon-for-block-pro'),
  icon: 'id'
}, {
  slug: 'product-stock',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Product Stock', 'blockive-premium-addon-for-block-pro'),
  icon: 'clipboard'
}, {
  slug: 'product-short-description',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Product Short Description', 'blockive-premium-addon-for-block-pro'),
  icon: 'editor-alignleft'
}, {
  slug: 'product-description',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Product Description', 'blockive-premium-addon-for-block-pro'),
  icon: 'editor-justify'
}, {
  slug: 'product-attributes',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Product Attributes', 'blockive-premium-addon-for-block-pro'),
  icon: 'list-view'
}, {
  slug: 'product-meta',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Product Meta', 'blockive-premium-addon-for-block-pro'),
  icon: 'list-view'
}, {
  slug: 'product-tabs',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Product Tabs', 'blockive-premium-addon-for-block-pro'),
  icon: 'index-card'
}, {
  slug: 'product-variations',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Product Variations', 'blockive-premium-addon-for-block-pro'),
  icon: 'screenoptions'
}, {
  slug: 'product-related',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Related Products', 'blockive-premium-addon-for-block-pro'),
  icon: 'grid-view'
}, {
  slug: 'product-upsells',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Upsells', 'blockive-premium-addon-for-block-pro'),
  icon: 'arrow-up-alt'
}, {
  slug: 'product-cross-sells',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Cross Sells', 'blockive-premium-addon-for-block-pro'),
  icon: 'randomize'
}, {
  slug: 'woo-breadcrumb',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('WooCommerce Breadcrumb', 'blockive-premium-addon-for-block-pro'),
  icon: 'arrow-right-alt2'
}, {
  slug: 'woo-notices',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Store Notices', 'blockive-premium-addon-for-block-pro'),
  icon: 'info-outline'
}, {
  slug: 'product-category-image',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Category Image', 'blockive-premium-addon-for-block-pro'),
  icon: 'format-image'
}, {
  slug: 'shop-archive-description',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Shop Archive Description', 'blockive-premium-addon-for-block-pro'),
  icon: 'editor-alignleft'
}];
(0,_pro_dynamic_blocks_shared_dynamic_block_edit__WEBPACK_IMPORTED_MODULE_1__.replaceTeaserBlocks)(BLOCKS, WOOCOMMERCE_ACTIVE);
})();

/******/ })()
;
//# sourceMappingURL=index.js.map