/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dynamic-tags/dynamic-tag-control.js"
/*!*************************************************!*\
  !*** ./src/dynamic-tags/dynamic-tag-control.js ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TOKEN_PATTERN: () => (/* binding */ TOKEN_PATTERN),
/* harmony export */   "default": () => (/* binding */ DynamicTagSwitcher)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/close-small.mjs");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/settings.mjs");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/tag.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);






// Matches a field's whole value against one "{{tag}}" or "{{tag:param}}"
// token. Uses ^...$ so the whole value must be the token, because a field
// using DynamicTagSwitcher is always either a full token or a plain value,
// never a mix of both - unlike the PHP pattern used at render time, which
// finds tokens anywhere inside a longer piece of text.

const TOKEN_PATTERN = /^\{\{\s*([a-z_]+)\s*(?::\s*(.*)\s*)?\}\}$/;

/**
 * Turns the tag list sent from PHP (see
 * Bpafb_Pro_Dynamic_Tags::enqueue_editor_assets()) into groups, filtered
 * by `acceptedTypes`, so for example an image field only shows image-type tags.
 *
 * @param {string[]} [acceptedTypes] Tag `type`s to include; omit for all.
 */
function getFilteredGroups(acceptedTypes) {
  const registry = window.bpafbProDynamicTags?.registry || {};
  return Object.entries(registry).map(([groupKey, group]) => ({
    key: groupKey,
    label: group.label,
    tags: group.tags.filter(tag => !acceptedTypes || acceptedTypes.includes(tag.type || 'text'))
  })).filter(group => group.tags.length > 0);
}
function findTag(key) {
  const registry = window.bpafbProDynamicTags?.registry || {};
  for (const group of Object.values(registry)) {
    const found = group.tags.find(tag => tag.key === key);
    if (found) {
      return found;
    }
  }
  return null;
}

/**
 * The current post's own custom field keys, for the "Custom Field" tag's
 * picker. Leaves out keys starting with an underscore, which is
 * WordPress's own way of marking a field as internal, almost always used
 * for plugin data rather than real content.
 */
function useCurrentPostMetaKeys() {
  return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    const meta = select('core/editor')?.getCurrentPost?.()?.meta;
    return meta ? Object.keys(meta).filter(key => !key.startsWith('_')) : [];
  }, []);
}

/**
 * The popup content for changing a tag's parameter (for example, which
 * custom field key to read), after the tag has already been added. Clicking
 * a small gear icon opens this popup, for tags that take a parameter.
 */
function TagSettingsForm({
  tag,
  initialParam,
  onApply
}) {
  const [param, setParam] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(initialParam);
  const metaKeys = useCurrentPostMetaKeys();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: "bpafb-pro-tag-settings-popup",
    children: [tag.isCustomField ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ComboboxControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Custom field key', 'blockive-premium-addon-for-block-pro'),
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lists this post's own custom fields - type a different key if the one you need isn't saved yet.", 'blockive-premium-addon-for-block-pro'),
      value: param,
      options: metaKeys.map(key => ({
        label: key,
        value: key
      })),
      onFilterValueChange: setParam,
      onChange: value => setParam(value || '')
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: tag.paramLabel || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Parameter', 'blockive-premium-addon-for-block-pro'),
      help: tag.paramHelp || undefined,
      value: param,
      onChange: setParam
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      variant: "primary",
      size: "small",
      onClick: () => onApply(param),
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Apply', 'blockive-premium-addon-for-block-pro')
    })]
  });
}

/**
 * The tag-picker popup, grouped the same way as the tag list sent from
 * PHP, and only showing the types the field accepts (a text field only
 * shows text tags, an image field only shows image tags, and so on).
 */
function TagsListPopover({
  acceptedTypes,
  onSelect
}) {
  const groups = getFilteredGroups(acceptedTypes);
  if (0 === groups.length) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: "bpafb-pro-tags-list bpafb-pro-tags-list--empty",
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('No dynamic tags available for this field.', 'blockive-premium-addon-for-block-pro')
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
    className: "bpafb-pro-tags-list",
    children: groups.map(group => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "bpafb-pro-tags-list__group-title",
        children: group.label
      }), group.tags.map(tag => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "bpafb-pro-tags-list__item",
        role: "button",
        tabIndex: 0,
        onClick: () => onSelect(tag),
        onKeyDown: event => {
          if ('Enter' === event.key || ' ' === event.key) {
            onSelect(tag);
          }
        },
        children: tag.label
      }, tag.key))]
    }, group.key))
  });
}

/**
 * A dynamic tag switcher for one field: a small icon button next to the
 * field opens a filtered list of tags. Picking one turns the field into a
 * "dynamic" state showing the tag's name, a settings gear (for tags that
 * take a parameter), and a remove button, instead of the raw "{{tag}}"
 * text. The field's own existing setting stores the token directly - no
 * new block settings are added.
 *
 * @param {Object}   props
 * @param {string}   props.label           Field label, e.g. "Image" or "Button Link".
 * @param {string}   props.value           The field's current raw value.
 * @param {Function} props.onChange        Called with the new value - "" clears it back
 *   to a plain value, or pass a "{{tag}}" / "{{tag:param}}" token.
 * @param {string[]} [props.acceptedTypes] Tag `type`s this field can use; omit for all.
 */
function DynamicTagSwitcher({
  label,
  value,
  onChange,
  acceptedTypes
}) {
  const [isListOpen, setIsListOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [isSettingsOpen, setIsSettingsOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const match = typeof value === 'string' && value.match(TOKEN_PATTERN);
  const tagKey = match ? match[1] : '';
  const param = match ? match[2] || '' : '';
  const tag = tagKey ? findTag(tagKey) : null;
  const isDynamic = !!tag;
  const applyTag = (key, newParam) => {
    onChange(newParam ? `{{${key}:${newParam}}}` : `{{${key}}}`);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: "bpafb-pro-dynamic-switcher-row",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
      className: "bpafb-pro-dynamic-switcher-row__label",
      children: label
    }), isDynamic ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "bpafb-pro-dynamic-cover",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
        className: "bpafb-pro-dynamic-cover__title",
        children: tag.label
      }), tag.hasParam && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"],
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Tag settings', 'blockive-premium-addon-for-block-pro'),
        onClick: () => setIsSettingsOpen(open => !open)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"],
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove dynamic tag', 'blockive-premium-addon-for-block-pro'),
        onClick: () => onChange('')
      }), isSettingsOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Popover, {
        placement: "bottom-start",
        focusOnMount: false,
        onClose: () => setIsSettingsOpen(false),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(TagSettingsForm, {
          tag: tag,
          initialParam: param,
          onApply: newParam => {
            applyTag(tagKey, newParam);
            setIsSettingsOpen(false);
          }
        })
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "bpafb-pro-dynamic-switcher",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"],
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Dynamic Tags', 'blockive-premium-addon-for-block-pro'),
        onClick: () => setIsListOpen(open => !open)
      }), isListOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Popover, {
        placement: "bottom-start",
        onClose: () => setIsListOpen(false),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(TagsListPopover, {
          acceptedTypes: acceptedTypes,
          onSelect: selectedTag => {
            setIsListOpen(false);
            applyTag(selectedTag.key, '');
            if (selectedTag.hasParam) {
              setIsSettingsOpen(true);
            }
          }
        })
      })]
    })]
  });
}

/***/ },

/***/ "./src/dynamic-tags/editor.scss"
/*!**************************************!*\
  !*** ./src/dynamic-tags/editor.scss ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

module.exports = window["ReactJSXRuntime"];

/***/ },

/***/ "@wordpress/api-fetch"
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
(module) {

module.exports = window["wp"]["apiFetch"];

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

/***/ "@wordpress/compose"
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["compose"];

/***/ },

/***/ "@wordpress/data"
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["data"];

/***/ },

/***/ "@wordpress/element"
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["element"];

/***/ },

/***/ "@wordpress/hooks"
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
(module) {

module.exports = window["wp"]["hooks"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

/***/ },

/***/ "@wordpress/primitives"
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["primitives"];

/***/ },

/***/ "@wordpress/url"
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
(module) {

module.exports = window["wp"]["url"];

/***/ },

/***/ "./node_modules/@wordpress/icons/build-module/library/close-small.mjs"
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/close-small.mjs ***!
  \****************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ close_small_default)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
// packages/icons/src/library/close-small.tsx


var close_small_default = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", style: { fill: "none" }, stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, { d: "M7.75 16.25L16.25 7.75M16.25 16.25L7.75 7.75", vectorEffect: "non-scaling-stroke" }) });

//# sourceMappingURL=close-small.mjs.map


/***/ },

/***/ "./node_modules/@wordpress/icons/build-module/library/settings.mjs"
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/settings.mjs ***!
  \*************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ settings_default)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
// packages/icons/src/library/settings.tsx


var settings_default = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", children: [
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, { d: "m19 7.5h-7.628c-.3089-.87389-1.1423-1.5-2.122-1.5-.97966 0-1.81309.62611-2.12197 1.5h-2.12803v1.5h2.12803c.30888.87389 1.14231 1.5 2.12197 1.5.9797 0 1.8131-.62611 2.122-1.5h7.628z" }),
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, { d: "m19 15h-2.128c-.3089-.8739-1.1423-1.5-2.122-1.5s-1.8131.6261-2.122 1.5h-7.628v1.5h7.628c.3089.8739 1.1423 1.5 2.122 1.5s1.8131-.6261 2.122-1.5h2.128z" })
] });

//# sourceMappingURL=settings.mjs.map


/***/ },

/***/ "./node_modules/@wordpress/icons/build-module/library/tag.mjs"
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/tag.mjs ***!
  \********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ tag_default)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
// packages/icons/src/library/tag.tsx


var tag_default = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, { d: "M4.75 4a.75.75 0 0 0-.75.75v7.826c0 .2.08.39.22.53l6.72 6.716a2.313 2.313 0 0 0 3.276-.001l5.61-5.611-.531-.53.532.528a2.315 2.315 0 0 0 0-3.264L13.104 4.22a.75.75 0 0 0-.53-.22H4.75ZM19 12.576a.815.815 0 0 1-.236.574l-5.61 5.611a.814.814 0 0 1-1.153 0L5.5 12.264V5.5h6.763l6.5 6.502a.816.816 0 0 1 .237.574ZM8.75 9.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" }) });

//# sourceMappingURL=tag.mjs.map


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
/*!***********************************!*\
  !*** ./src/dynamic-tags/index.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _dynamic_tag_control__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dynamic-tag-control */ "./src/dynamic-tags/dynamic-tag-control.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./editor.scss */ "./src/dynamic-tags/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);
/**
 * Adds the Dynamic Tags picker (dynamic-tag-control.js) to a few useful
 * fields: Heading's content, Button's text and link, and Image Box's image
 * and link. This uses the normal `editor.BlockEdit` filter, so a block can
 * be extended without editing its own copied source files. No new
 * attributes are needed - a tag is just saved as plain text in the field
 * (like "{{post_title}}"), and turned into real content by
 * Bpafb_Pro_Dynamic_Tags::resolve_block_tokens() when the page is shown.
 *
 * This also swaps in the real "Dynamic Field" block, replacing the free
 * plugin's locked teaser version - see class-bpafb-pro-dynamic-tags.php.
 */













const DYNAMIC_FIELD_BLOCK = 'blockive-premium-addon-for-block/tb-dynamic-field';

/**
 * Gets a tag's real value from the server, using the same
 * `/wp/v2/block-renderer` endpoint the block editor already uses for
 * dynamic-block previews. This reuses the real PHP code
 * (Bpafb_Pro_Dynamic_Tags::render_dynamic_field_block()) instead of
 * re-writing the same logic in JavaScript, so the preview can never show
 * something different from the live site. Returns the rendered HTML: a
 * `<span>` with escaped text, or a real `<img>` for an image-type tag.
 *
 * @param {string}        tag
 * @param {string}        param
 * @param {number|string} [postId]
 * @return {Promise<string>}
 */
function fetchResolvedTagHtml(tag, param, postId) {
  const path = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_7__.addQueryArgs)(`/wp/v2/block-renderer/${DYNAMIC_FIELD_BLOCK}`, {
    context: 'edit',
    attributes: {
      tag,
      param
    },
    post_id: postId || undefined
  });
  return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6___default()({
    path,
    method: 'POST'
  }).then(result => {
    return result?.rendered || '';
  });
}

/**
 * Pulls out the plain value (text, or an image's `src`) from the HTML
 * fetchResolvedTagHtml() returns, so it can be put straight into an
 * existing field's plain-text setting. The Dynamic Field block does not
 * need this - it can show the wrapped HTML as-is, using RawHTML.
 *
 * @param {string} html
 * @return {string}
 */
function extractResolvedValue(html) {
  const container = document.createElement('div');
  container.innerHTML = html;
  const img = container.querySelector('img');
  return img ? img.getAttribute('src') || '' : container.textContent.trim();
}

// `acceptedTypes` controls which tags a field's picker shows. `isImage`
// marks fields that need the live image-preview swap below: Heading,
// Button, and Image Box are static blocks that show `attributes.imageUrl`
// directly as an <img src>. A raw "{{tag}}" token there would look like a
// broken image in the editor, even though it works fine on the live site.
const FIELDS_BY_BLOCK = {
  'blockive-premium-addon-for-block/heading': [{
    attribute: 'content',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__.__)('Heading Text', 'blockive-premium-addon-for-block-pro'),
    acceptedTypes: ['text']
  }],
  'blockive-premium-addon-for-block/button': [{
    attribute: 'text',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__.__)('Button Text', 'blockive-premium-addon-for-block-pro'),
    acceptedTypes: ['text']
  }, {
    attribute: 'url',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__.__)('Button Link', 'blockive-premium-addon-for-block-pro'),
    acceptedTypes: ['text']
  }],
  'blockive-premium-addon-for-block/image-box': [{
    attribute: 'imageUrl',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__.__)('Image', 'blockive-premium-addon-for-block-pro'),
    acceptedTypes: ['image'],
    isImage: true
  }, {
    attribute: 'linkUrl',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__.__)('Link URL', 'blockive-premium-addon-for-block-pro'),
    acceptedTypes: ['text']
  }]
};

/**
 * For a block's image fields, swaps any "{{tag}}" token for its real value,
 * and returns a copy of `attributes` with just those fields changed, for
 * showing in the editor. The real stored value (the token itself) is not
 * touched - so saving, the live site, and reopening the field later all
 * still see the real token.
 */
function useImageFieldPreviewAttributes(attributes, fields, contextPostId) {
  const editedPostId = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => select('core/editor')?.getCurrentPostId?.(), []);
  const postId = contextPostId || editedPostId;
  const imageFields = fields.filter(field => field.isImage);
  const [resolved, setResolved] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)({});
  const tokenSignature = imageFields.map(field => attributes[field.attribute]).join(' ');
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    let cancelled = false;
    imageFields.forEach(field => {
      const value = attributes[field.attribute];
      const match = typeof value === 'string' && value.match(_dynamic_tag_control__WEBPACK_IMPORTED_MODULE_10__.TOKEN_PATTERN);
      if (!match) {
        return;
      }
      fetchResolvedTagHtml(match[1], match[2] || '', postId).then(html => {
        if (!cancelled) {
          setResolved(prev => ({
            ...prev,
            [field.attribute]: extractResolvedValue(html)
          }));
        }
      }).catch(() => {});
    });
    return () => {
      cancelled = true;
    };
    // tokenSignature stands in for imageFields/attributes here - we
    // only want to fetch again when an image field's own value changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenSignature, postId]);
  if (0 === Object.keys(resolved).length) {
    return attributes;
  }
  const overridden = {
    ...attributes
  };
  imageFields.forEach(field => {
    const value = attributes[field.attribute];
    if (typeof value === 'string' && _dynamic_tag_control__WEBPACK_IMPORTED_MODULE_10__.TOKEN_PATTERN.test(value) && resolved[field.attribute]) {
      overridden[field.attribute] = resolved[field.attribute];
    }
  });
  return overridden;
}
const withDynamicTagsControl = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.createHigherOrderComponent)(BlockEdit => props => {
  const fields = FIELDS_BY_BLOCK[props.name] || [];
  const previewAttributes = useImageFieldPreviewAttributes(props.attributes, fields, props.context?.postId);
  if (!FIELDS_BY_BLOCK[props.name]) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(BlockEdit, {
      ...props
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(BlockEdit, {
      ...props,
      attributes: previewAttributes
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__.__)('Dynamic Tags (Pro)', 'blockive-premium-addon-for-block-pro'),
        initialOpen: false,
        children: fields.map(field => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_dynamic_tag_control__WEBPACK_IMPORTED_MODULE_10__["default"], {
          label: field.label,
          acceptedTypes: field.acceptedTypes,
          value: props.attributes[field.attribute],
          onChange: value => props.setAttributes({
            [field.attribute]: value
          })
        }, field.attribute))
      })
    })]
  });
}, 'withDynamicTagsControl');
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_8__.addFilter)('editor.BlockEdit', 'blockive-pro/dynamic-tags-control', withDynamicTagsControl);

// -- Real "Dynamic Field" block, replacing the free plugin's teaser -------

if ((0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.getBlockType)(DYNAMIC_FIELD_BLOCK)) {
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.unregisterBlockType)(DYNAMIC_FIELD_BLOCK);
}

// The render function (Bpafb_Pro_Dynamic_Tags::render_dynamic_field_block())
// must list the exact same `supports` and call
// get_block_wrapper_attributes(), or these settings would only show in the
// editor preview and do nothing on the live site.
const DYNAMIC_FIELD_SUPPORTS = {
  html: false,
  className: true,
  customClassName: true,
  reusable: false,
  typography: {
    fontSize: true,
    lineHeight: true,
    __experimentalFontFamily: true,
    __experimentalFontWeight: true,
    __experimentalLetterSpacing: true
  },
  color: {
    text: true,
    background: true,
    link: true
  },
  spacing: {
    margin: true,
    padding: true
  }
};

/**
 * Shows the block's real value in the editor, instead of a raw
 * "{{tag:param}}" token, using either the current post or the block's own
 * postId context (like inside a Loop Item template). For an image-type
 * tag, this shows the real `<img>` markup from fetchResolvedTagHtml(), as-is.
 */
function useDynamicFieldPreview(tag, param, contextPostId) {
  const [html, setHtml] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
  const editedPostId = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => select('core/editor')?.getCurrentPostId?.(), []);
  const postId = contextPostId || editedPostId;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    if (!tag) {
      setHtml(null);
      return;
    }
    let cancelled = false;
    setHtml(null);
    fetchResolvedTagHtml(tag, param, postId).then(result => {
      if (!cancelled) {
        setHtml(result);
      }
    }).catch(() => {
      if (!cancelled) {
        setHtml('');
      }
    });
    return () => {
      cancelled = true;
    };
  }, [tag, param, postId]);
  return html;
}
;(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(DYNAMIC_FIELD_BLOCK, {
  apiVersion: 3,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__.__)('Dynamic Field', 'blockive-premium-addon-for-block-pro'),
  category: 'blockive-template',
  icon: 'editor-code',
  usesContext: ['postId', 'postType'],
  attributes: {
    tag: {
      type: 'string',
      default: ''
    },
    param: {
      type: 'string',
      default: ''
    }
  },
  supports: DYNAMIC_FIELD_SUPPORTS,
  // Hover preview in the inserter: a tag every site has a value for.
  example: {
    attributes: {
      tag: 'site_title'
    }
  },
  edit({
    attributes,
    setAttributes,
    context
  }) {
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
    const preview = useDynamicFieldPreview(attributes.tag, attributes.param, context?.postId);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__.__)('Dynamic Tag', 'blockive-premium-addon-for-block-pro'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_dynamic_tag_control__WEBPACK_IMPORTED_MODULE_10__["default"], {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__.__)('Tag', 'blockive-premium-addon-for-block-pro'),
            value: attributes.tag ? attributes.param ? `{{${attributes.tag}:${attributes.param}}}` : `{{${attributes.tag}}}` : '',
            onChange: value => {
              if (!value) {
                setAttributes({
                  tag: '',
                  param: ''
                });
                return;
              }
              const match = value.match(_dynamic_tag_control__WEBPACK_IMPORTED_MODULE_10__.TOKEN_PATTERN);
              if (match) {
                setAttributes({
                  tag: match[1],
                  param: match[2] || ''
                });
              }
            }
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
        ...blockProps,
        children: [!attributes.tag && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("em", {
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__.__)('Dynamic Field: choose a tag in the sidebar.', 'blockive-premium-addon-for-block-pro')
        }), attributes.tag && null === preview && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Spinner, {}), attributes.tag && null !== preview && (preview ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.RawHTML, {
          children: preview
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("em", {
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__.__)('(empty)', 'blockive-premium-addon-for-block-pro')
        }))]
      })]
    });
  },
  save: () => null
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map