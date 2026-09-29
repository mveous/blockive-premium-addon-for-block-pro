/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/custom-attributes/hidden-blocks.js"
/*!************************************************!*\
  !*** ./src/custom-attributes/hidden-blocks.js ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Leaves blocks out of the inserter that Site Tools → Element Manager
 * turned off, or that need WooCommerce when it is not active
 * (Bpafb_Pro_Site_Tools::hidden_blocks()). Blocks already in content keep
 * working.
 */

const hidden = new Set(Array.isArray(window.bpafbProHiddenBlocks) ? window.bpafbProHiddenBlocks : []);
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('blocks.registerBlockType', 'blockive-pro/hidden-blocks', (settings, name) => hidden.has(name) ? {
  ...settings,
  supports: {
    ...settings.supports,
    inserter: false
  }
} : settings);

/***/ },

/***/ "./src/custom-attributes/motion-effects.js"
/*!*************************************************!*\
  !*** ./src/custom-attributes/motion-effects.js ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared */ "./src/custom-attributes/shared.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
/**
 * "Scrolling & Mouse Effects" panel for Blockive blocks (applied on the
 * site by Bpafb_Pro_Motion). Lives in this script because it loads before
 * every Blockive block, which the attribute filter below needs.
 */








const SHAPES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Fade In', 'blockive-premium-addon-for-block-pro'),
  value: 'in'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Fade Out', 'blockive-premium-addon-for-block-pro'),
  value: 'out'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('In, then Out', 'blockive-premium-addon-for-block-pro'),
  value: 'in-out'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Out, then In', 'blockive-premium-addon-for-block-pro'),
  value: 'out-in'
}];

// Effect key => panel label, direction options, strength label.
const EFFECTS = [{
  key: 'y',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Vertical Scroll (parallax)', 'blockive-premium-addon-for-block-pro'),
  directions: [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Up', 'blockive-premium-addon-for-block-pro'),
    value: 'up'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Down', 'blockive-premium-addon-for-block-pro'),
    value: 'down'
  }]
}, {
  key: 'x',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Horizontal Scroll', 'blockive-premium-addon-for-block-pro'),
  directions: [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('To Left', 'blockive-premium-addon-for-block-pro'),
    value: 'left'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('To Right', 'blockive-premium-addon-for-block-pro'),
    value: 'right'
  }]
}, {
  key: 'fade',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Transparency', 'blockive-premium-addon-for-block-pro'),
  directions: SHAPES,
  strength: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Level', 'blockive-premium-addon-for-block-pro')
}, {
  key: 'blur',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Blur', 'blockive-premium-addon-for-block-pro'),
  directions: [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sharpen In', 'blockive-premium-addon-for-block-pro'),
    value: 'in'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Blur Out', 'blockive-premium-addon-for-block-pro'),
    value: 'out'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sharp, then Blur', 'blockive-premium-addon-for-block-pro'),
    value: 'in-out'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Blur, then Sharp', 'blockive-premium-addon-for-block-pro'),
    value: 'out-in'
  }],
  strength: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Level', 'blockive-premium-addon-for-block-pro')
}, {
  key: 'rotate',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Rotate', 'blockive-premium-addon-for-block-pro'),
  directions: [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('To Left', 'blockive-premium-addon-for-block-pro'),
    value: 'left'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('To Right', 'blockive-premium-addon-for-block-pro'),
    value: 'right'
  }]
}, {
  key: 'scale',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Scale', 'blockive-premium-addon-for-block-pro'),
  directions: [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Grow', 'blockive-premium-addon-for-block-pro'),
    value: 'up'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Shrink', 'blockive-premium-addon-for-block-pro'),
    value: 'down'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Grow, then Shrink', 'blockive-premium-addon-for-block-pro'),
    value: 'up-down'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Shrink, then Grow', 'blockive-premium-addon-for-block-pro'),
    value: 'down-up'
  }]
}, {
  key: 'mouse',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Mouse Track', 'blockive-premium-addon-for-block-pro'),
  directions: [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Opposite', 'blockive-premium-addon-for-block-pro'),
    value: 'opposite'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Direct', 'blockive-premium-addon-for-block-pro'),
    value: 'direct'
  }],
  mouse: true
}, {
  key: 'tilt',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('3D Tilt', 'blockive-premium-addon-for-block-pro'),
  directions: [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Direct', 'blockive-premium-addon-for-block-pro'),
    value: 'direct'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Opposite', 'blockive-premium-addon-for-block-pro'),
    value: 'opposite'
  }],
  mouse: true
}];
(0,_shared__WEBPACK_IMPORTED_MODULE_6__.shareAttribute)('bpafbMotion', {
  type: 'object'
});
function MotionPanel({
  attributes,
  setAttributes
}) {
  const motion = attributes.bpafbMotion || {};
  const set = key => value => setAttributes({
    bpafbMotion: {
      ...motion,
      [key]: value
    }
  });
  const anyScroll = EFFECTS.some(effect => !effect.mouse && motion[`${effect.key}On`]);
  const anyOn = EFFECTS.some(effect => motion[`${effect.key}On`]);
  const clash = anyOn && (attributes.bpafbHoverAnimation && attributes.bpafbHoverAnimation !== 'none' || attributes.bpafbFloatingEffect);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Scrolling & Mouse Effects', 'blockive-premium-addon-for-block-pro'),
    initialOpen: anyOn,
    children: [EFFECTS.map(effect => {
      const on = !!motion[`${effect.key}On`];
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        style: {
          marginBottom: on ? 16 : 0
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
          label: effect.label,
          checked: on,
          onChange: set(`${effect.key}On`),
          __nextHasNoMarginBottom: true
        }), on && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          style: {
            margin: '12px 0 0 12px'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Direction', 'blockive-premium-addon-for-block-pro'),
            value: motion[`${effect.key}Dir`] || effect.directions[0].value,
            options: effect.directions,
            onChange: set(`${effect.key}Dir`)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
            label: effect.strength || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Speed', 'blockive-premium-addon-for-block-pro'),
            value: motion[`${effect.key}Speed`] ?? 4,
            onChange: set(`${effect.key}Speed`),
            min: 1,
            max: 10,
            step: 0.5
          })]
        })]
      }, effect.key);
    }), anyScroll && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Effect Happens Between (% of the window)', 'blockive-premium-addon-for-block-pro'),
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('From where the block enters the window at the bottom (0) to where it leaves at the top (100).', 'blockive-premium-addon-for-block-pro'),
      value: motion.rangeStart ?? 0,
      onChange: set('rangeStart'),
      min: 0,
      max: 99
    }), anyScroll && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Until (%)', 'blockive-premium-addon-for-block-pro'),
      value: motion.rangeEnd ?? 100,
      onChange: set('rangeEnd'),
      min: 1,
      max: 100
    }), anyOn && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
        className: "components-base-control__label",
        style: {
          margin: '8px 0'
        },
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('On', 'blockive-premium-addon-for-block-pro')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Desktop', 'blockive-premium-addon-for-block-pro'),
        checked: motion.desktop !== false,
        onChange: set('desktop')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Tablet', 'blockive-premium-addon-for-block-pro'),
        checked: motion.tablet !== false,
        onChange: set('tablet')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Mobile', 'blockive-premium-addon-for-block-pro'),
        checked: motion.mobile !== false,
        onChange: set('mobile')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
        className: "components-base-control__help",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Shown on the site, not in the editor. Visitors who turn off animations in their system settings see the block still.', 'blockive-premium-addon-for-block-pro')
      })]
    }), clash && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Notice, {
      status: "warning",
      isDismissible: false,
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('The Hover Animation and Floating effect also move this block, and take over from these effects while they run.', 'blockive-premium-addon-for-block-pro')
    })]
  });
}
const withMotionEffects = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.createHigherOrderComponent)(BlockEdit => props => {
  // Blocks with the shared Advanced settings (they all have bpafbUid).
  if (!props.name.startsWith(_shared__WEBPACK_IMPORTED_MODULE_6__.PREFIX) || !(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.getBlockType)(props.name)?.attributes?.bpafbUid) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(BlockEdit, {
      ...props
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(BlockEdit, {
      ...props
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, {
      group: "styles",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(MotionPanel, {
        attributes: props.attributes,
        setAttributes: props.setAttributes
      })
    })]
  });
}, 'withBpafbMotionEffects');
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('editor.BlockEdit', 'blockive-pro/motion-effects', withMotionEffects);

/***/ },

/***/ "./src/custom-attributes/shared.js"
/*!*****************************************!*\
  !*** ./src/custom-attributes/shared.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PREFIX: () => (/* binding */ PREFIX),
/* harmony export */   shareAttribute: () => (/* binding */ shareAttribute)
/* harmony export */ });
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Helpers for the features in this script that extend every Blockive
 * block (the editor twin of Bpafb_Pro_Custom_Attributes::share_attribute()).
 */

const PREFIX = 'blockive-premium-addon-for-block/';

/**
 * Adds an attribute to every Blockive block in the editor. A block's
 * block.json attributes replace the server's list in the editor, so the
 * server-side attribute alone does not reach it.
 *
 * @param {string} name   Attribute name.
 * @param {Object} schema Attribute schema.
 */
function shareAttribute(name, schema) {
  (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('blocks.registerBlockType', `blockive-pro/${name}`, (settings, blockName) => {
    if (!blockName.startsWith(PREFIX) || settings.attributes && settings.attributes[name]) {
      return settings;
    }
    return {
      ...settings,
      attributes: {
        ...settings.attributes,
        [name]: schema
      }
    };
  });
}

/***/ },

/***/ "./src/custom-attributes/sticky-offset.js"
/*!************************************************!*\
  !*** ./src/custom-attributes/sticky-offset.js ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared */ "./src/custom-attributes/shared.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
/**
 * Sticky offset for Blockive blocks set to Advanced → Position: Sticky
 * (applied on the site by Bpafb_Pro_Sticky::apply_block_offset()). Lives
 * in this script because it loads before every Blockive block, which the
 * attribute filter below needs.
 */







(0,_shared__WEBPACK_IMPORTED_MODULE_5__.shareAttribute)('bpafbStickyOffset', {
  type: 'number'
});
const withStickyOffset = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.createHigherOrderComponent)(BlockEdit => props => {
  if (!props.name.startsWith(_shared__WEBPACK_IMPORTED_MODULE_5__.PREFIX) || props.attributes.bpafbPosition !== 'sticky') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(BlockEdit, {
      ...props
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(BlockEdit, {
      ...props
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sticky', 'blockive-premium-addon-for-block-pro'),
        initialOpen: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Distance From Top (px)', 'blockive-premium-addon-for-block-pro'),
          value: props.attributes.bpafbStickyOffset,
          onChange: value => props.setAttributes({
            bpafbStickyOffset: value
          }),
          min: 0,
          max: 400,
          allowReset: true,
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sticks this far below the top of the window (the admin bar is added automatically), and only while its parent, such as a column, is in view. It does not stick inside a parent with overflow hidden.', 'blockive-premium-addon-for-block-pro')
        })
      })
    })]
  });
}, 'withBpafbStickyOffset');
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('editor.BlockEdit', 'blockive-pro/sticky-offset', withStickyOffset);

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

/***/ "@wordpress/compose"
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["compose"];

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
/*!****************************************!*\
  !*** ./src/custom-attributes/index.js ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared */ "./src/custom-attributes/shared.js");
/* harmony import */ var _sticky_offset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sticky-offset */ "./src/custom-attributes/sticky-offset.js");
/* harmony import */ var _motion_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./motion-effects */ "./src/custom-attributes/motion-effects.js");
/* harmony import */ var _hidden_blocks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hidden-blocks */ "./src/custom-attributes/hidden-blocks.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
/**
 * Custom Attributes control in the Advanced panel of every Blockive block.
 * The attribute itself comes from the server's block definitions and is
 * applied there (Bpafb_Pro_Custom_Attributes).
 */










const BLOCKED = ['style', 'id', 'class', 'href', 'src', 'srcset', 'srcdoc', 'action', 'formaction', 'xlink:href', 'data', 'poster', 'background', 'codebase', 'dynsrc', 'lowsrc', 'ping'];

/**
 * Names that will be left out, same rules as Bpafb_Pro_Custom_Attributes::parse().
 *
 * @param {string} text Lines as entered.
 * @return {string[]}
 */
function refusedNames(text) {
  return String(text || '').split('\n').map(line => line.split('|')[0].trim().toLowerCase()).filter(name => name && (!/^[a-z_:][a-z0-9_.:-]*$/.test(name) || name.startsWith('on') || BLOCKED.includes(name)));
}
const withCustomAttributes = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.createHigherOrderComponent)(BlockEdit => props => {
  if (!props.name.startsWith(_shared__WEBPACK_IMPORTED_MODULE_5__.PREFIX) || !('bpafbCustomAttributes' in props.attributes)) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(BlockEdit, {
      ...props
    });
  }
  const value = props.attributes.bpafbCustomAttributes || '';
  const refused = refusedNames(value);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(BlockEdit, {
      ...props
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorAdvancedControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextareaControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Custom Attributes', 'blockive-premium-addon-for-block-pro'),
        value: value,
        onChange: next => props.setAttributes({
          bpafbCustomAttributes: next
        }),
        placeholder: 'data-track|signup\naria-label|Newsletter sign-up',
        help: refused.length ? /* translators: %s: attribute names. */(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Left out (not allowed): ', 'blockive-premium-addon-for-block-pro') + refused.join(', ') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('One per line as name|value, added to the block\'s outer element. Event handlers, style, id, class, and link or source URLs are not allowed.', 'blockive-premium-addon-for-block-pro'),
        __nextHasNoMarginBottom: true
      })
    })]
  });
}, 'withBpafbCustomAttributes');

// The attribute, for Blockive blocks. This script loads before them (see
// Bpafb_Pro_Custom_Attributes::make_dependency()).
(0,_shared__WEBPACK_IMPORTED_MODULE_5__.shareAttribute)('bpafbCustomAttributes', {
  type: 'string',
  default: ''
});
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('editor.BlockEdit', 'blockive-pro/custom-attributes', withCustomAttributes);
})();

/******/ })()
;
//# sourceMappingURL=index.js.map