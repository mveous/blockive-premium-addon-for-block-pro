/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/advanced-tab/index.js"
/*!**********************************************!*\
  !*** ./src/components/advanced-tab/index.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AdvancedTab)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _spacing_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../spacing-controls */ "./src/components/spacing-controls/index.js");
/* harmony import */ var _responsive_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../responsive-controls */ "./src/components/responsive-controls/index.js");
/* harmony import */ var _border_controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../border-controls */ "./src/components/border-controls/index.js");
/* harmony import */ var _shadow_controls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shadow-controls */ "./src/components/shadow-controls/index.js");
/* harmony import */ var _background_controls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../background-controls */ "./src/components/background-controls/index.js");
/* harmony import */ var _animation_controls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../animation-controls */ "./src/components/animation-controls/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);











const DISPLAY_OPTIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Default', 'blockive-premium-addon-for-block'),
  value: ''
}, {
  label: 'Block',
  value: 'block'
}, {
  label: 'Inline Block',
  value: 'inline-block'
}, {
  label: 'Flex',
  value: 'flex'
}, {
  label: 'Inline Flex',
  value: 'inline-flex'
}, {
  label: 'None',
  value: 'none'
}];
const OVERFLOW_OPTIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Default', 'blockive-premium-addon-for-block'),
  value: ''
}, {
  label: 'Visible',
  value: 'visible'
}, {
  label: 'Hidden',
  value: 'hidden'
}, {
  label: 'Auto',
  value: 'auto'
}, {
  label: 'Scroll',
  value: 'scroll'
}];
const POSITION_OPTIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Default', 'blockive-premium-addon-for-block'),
  value: ''
}, {
  label: 'Static',
  value: 'static'
}, {
  label: 'Relative',
  value: 'relative'
}, {
  label: 'Absolute',
  value: 'absolute'
}, {
  label: 'Fixed',
  value: 'fixed'
}, {
  label: 'Sticky',
  value: 'sticky'
}];
const HOVER_ANIMATION_OPTIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('None', 'blockive-premium-addon-for-block'),
  value: 'none'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Grow', 'blockive-premium-addon-for-block'),
  value: 'grow'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Shrink', 'blockive-premium-addon-for-block'),
  value: 'shrink'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Float Up', 'blockive-premium-addon-for-block'),
  value: 'float-up'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sink Down', 'blockive-premium-addon-for-block'),
  value: 'sink-down'
}];
const PADDING_ATTR = {
  desktop: ['bpafbContainerPaddingTop', 'bpafbContainerPaddingRight', 'bpafbContainerPaddingBottom', 'bpafbContainerPaddingLeft'],
  tablet: ['bpafbContainerPaddingTopTablet', 'bpafbContainerPaddingRightTablet', 'bpafbContainerPaddingBottomTablet', 'bpafbContainerPaddingLeftTablet'],
  mobile: ['bpafbContainerPaddingTopMobile', 'bpafbContainerPaddingRightMobile', 'bpafbContainerPaddingBottomMobile', 'bpafbContainerPaddingLeftMobile']
};
const MARGIN_ATTR = {
  desktop: ['bpafbContainerMarginTop', 'bpafbContainerMarginRight', 'bpafbContainerMarginBottom', 'bpafbContainerMarginLeft'],
  tablet: ['bpafbContainerMarginTopTablet', 'bpafbContainerMarginRightTablet', 'bpafbContainerMarginBottomTablet', 'bpafbContainerMarginLeftTablet'],
  mobile: ['bpafbContainerMarginTopMobile', 'bpafbContainerMarginRightMobile', 'bpafbContainerMarginBottomMobile', 'bpafbContainerMarginLeftMobile']
};
function boxValueFromAttrs(attributes, attrNames) {
  const [top, right, bottom, left] = attrNames;
  return {
    top: attributes[top],
    right: attributes[right],
    bottom: attributes[bottom],
    left: attributes[left]
  };
}
function generateUid() {
  return Math.random().toString(36).slice(2, 10);
}

// Tracks which bpafbUid values are already claimed by a mounted block
// instance in this editor session, so a duplicated block (which starts out
// with a copy of the original's uid) can detect the collision and get a
// fresh one instead of silently sharing CSS scope with the original.
const claimedUids = new Set();

/**
 * The single shared "Advanced" control set rendered identically by every
 * Blockive block. Its panels are split across the block's two native
 * inspector tabs (no custom tab navigation of its own): layout/visibility/
 * z-index are functional settings and land in the native Settings tab,
 * while spacing/background/border/shadow/animation/transform/motion are
 * visual and land in the native Styles tab, next to the rest of the
 * block's style controls.
 */
function AdvancedTab({
  attributes,
  setAttributes
}) {
  const {
    bpafbUid,
    bpafbDisplay = '',
    bpafbOverflow = '',
    bpafbPosition = '',
    bpafbContainerWidth,
    bpafbContainerWidthUnit = 'px',
    bpafbContainerMinHeight,
    bpafbContainerMaxHeight,
    bpafbContainerBgType = 'color',
    bpafbContainerBgColor = '',
    bpafbContainerBgGradient = '',
    bpafbContainerBgImageUrl = '',
    bpafbContainerBgImageId = 0,
    bpafbContainerBgImageSize = 'cover',
    bpafbContainerOverlayColor = '',
    bpafbContainerBorderStyle = 'none',
    bpafbContainerBorderWidth,
    bpafbContainerBorderRadius,
    bpafbContainerBorderColor = '',
    bpafbContainerBoxShadow = false,
    bpafbContainerShadowColor,
    bpafbContainerShadowBlur,
    bpafbContainerShadowSpread,
    bpafbContainerHoverBoxShadow = false,
    bpafbContainerHoverShadowColor,
    bpafbContainerHoverShadowBlur,
    bpafbContainerHoverShadowSpread,
    bpafbHideDesktop = false,
    bpafbHideTablet = false,
    bpafbHideMobile = false,
    bpafbAnimationType = 'none',
    bpafbAnimationDuration = 800,
    bpafbAnimationDelay = 0,
    bpafbAnimationEasing = 'ease',
    bpafbTransformRotate = 0,
    bpafbTransformScale = 100,
    bpafbTransformTranslateX = 0,
    bpafbTransformTranslateY = 0,
    bpafbHoverAnimation = 'none',
    bpafbFloatingEffect = false,
    bpafbZIndex,
    bpafbHtmlId = '',
    bpafbHtmlClasses = '',
    bpafbCustomCss = ''
  } = attributes;

  // Custom CSS output requires the same capability WordPress uses to gate
  // unfiltered/raw markup in post content (see bpafb_strip_unauthorized_custom_css()
  // in the main plugin file, which enforces this server-side at save time --
  // this flag only controls whether the field is shown, it is not the
  // security boundary itself).
  const canUseCustomCss = typeof window !== 'undefined' && window.bpafbEditorSettings ? !!window.bpafbEditorSettings.canUseCustomCss : false;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!bpafbUid || claimedUids.has(bpafbUid)) {
      const newUid = generateUid();
      claimedUids.add(newUid);
      setAttributes({
        bpafbUid: newUid
      });
    } else {
      claimedUids.add(bpafbUid);
    }
    // Intentionally run only on mount: this is a one-time claim check per
    // block instance, not a reaction to bpafbUid changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
      group: "settings",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Layout', 'blockive-premium-addon-for-block'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Display', 'blockive-premium-addon-for-block'),
          value: bpafbDisplay,
          options: DISPLAY_OPTIONS,
          onChange: val => setAttributes({
            bpafbDisplay: val
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          style: {
            display: 'flex',
            gap: '10px',
            alignItems: 'flex-end'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
            style: {
              flexGrow: 1
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Max Width', 'blockive-premium-addon-for-block'),
              value: bpafbContainerWidth,
              onChange: val => setAttributes({
                bpafbContainerWidth: val
              }),
              min: 10,
              max: 2000
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
            style: {
              width: '80px',
              marginBottom: '16px'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Unit', 'blockive-premium-addon-for-block'),
              value: bpafbContainerWidthUnit,
              options: [{
                label: 'px',
                value: 'px'
              }, {
                label: '%',
                value: '%'
              }, {
                label: 'rem',
                value: 'rem'
              }],
              onChange: val => setAttributes({
                bpafbContainerWidthUnit: val
              })
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Min Height (px)', 'blockive-premium-addon-for-block'),
          value: bpafbContainerMinHeight,
          onChange: val => setAttributes({
            bpafbContainerMinHeight: val
          }),
          min: 0,
          max: 1200
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Max Height (px)', 'blockive-premium-addon-for-block'),
          value: bpafbContainerMaxHeight,
          onChange: val => setAttributes({
            bpafbContainerMaxHeight: val
          }),
          min: 0,
          max: 2000
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Overflow', 'blockive-premium-addon-for-block'),
          value: bpafbOverflow,
          options: OVERFLOW_OPTIONS,
          onChange: val => setAttributes({
            bpafbOverflow: val
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Position', 'blockive-premium-addon-for-block'),
          value: bpafbPosition,
          options: POSITION_OPTIONS,
          onChange: val => setAttributes({
            bpafbPosition: val
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Visibility', 'blockive-premium-addon-for-block'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hide On Desktop', 'blockive-premium-addon-for-block'),
          checked: !!bpafbHideDesktop,
          onChange: val => setAttributes({
            bpafbHideDesktop: val
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hide On Tablet', 'blockive-premium-addon-for-block'),
          checked: !!bpafbHideTablet,
          onChange: val => setAttributes({
            bpafbHideTablet: val
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hide On Mobile', 'blockive-premium-addon-for-block'),
          checked: !!bpafbHideMobile,
          onChange: val => setAttributes({
            bpafbHideMobile: val
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Z-Index', 'blockive-premium-addon-for-block'),
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Z-Index', 'blockive-premium-addon-for-block'),
          value: bpafbZIndex,
          onChange: val => setAttributes({
            bpafbZIndex: val
          }),
          min: -10,
          max: 999
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Custom Attributes', 'blockive-premium-addon-for-block'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('HTML ID', 'blockive-premium-addon-for-block'),
          value: bpafbHtmlId,
          onChange: val => setAttributes({
            bpafbHtmlId: val
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sets a custom id on this block’s wrapper element. Ignored if the block already has an id (e.g. from the native HTML Anchor field below).', 'blockive-premium-addon-for-block')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('HTML Classes', 'blockive-premium-addon-for-block'),
          value: bpafbHtmlClasses,
          onChange: val => setAttributes({
            bpafbHtmlClasses: val
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Space-separated custom classes added to this block’s wrapper element, alongside any native Additional CSS Class(es).', 'blockive-premium-addon-for-block')
        }), canUseCustomCss ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextareaControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Custom CSS (Blockive)', 'blockive-premium-addon-for-block'),
          value: bpafbCustomCss,
          onChange: val => setAttributes({
            bpafbCustomCss: val
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Scoped to this block instance only -- use the word "selector" to target its wrapper, e.g. "selector { color: red; }". This is separate from the native Gutenberg Additional CSS field: that one applies as inline styles on this block only and isn’t scoped the same way.', 'blockive-premium-addon-for-block')
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
          className: "bpafb-custom-css-restricted",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Custom CSS requires the "unfiltered_html" capability on your account. Ask an administrator if you need this enabled.', 'blockive-premium-addon-for-block')
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
      group: "styles",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Spacing', 'blockive-premium-addon-for-block'),
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_responsive_controls__WEBPACK_IMPORTED_MODULE_5__["default"], {
          children: device => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_spacing_controls__WEBPACK_IMPORTED_MODULE_4__["default"], {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Padding (px)', 'blockive-premium-addon-for-block'),
              value: boxValueFromAttrs(attributes, PADDING_ATTR[device]),
              onChange: box => {
                const [top, right, bottom, left] = PADDING_ATTR[device];
                setAttributes({
                  [top]: box.top,
                  [right]: box.right,
                  [bottom]: box.bottom,
                  [left]: box.left
                });
              },
              min: 0
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_spacing_controls__WEBPACK_IMPORTED_MODULE_4__["default"], {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Margin (px)', 'blockive-premium-addon-for-block'),
              value: boxValueFromAttrs(attributes, MARGIN_ATTR[device]),
              onChange: box => {
                const [top, right, bottom, left] = MARGIN_ATTR[device];
                setAttributes({
                  [top]: box.top,
                  [right]: box.right,
                  [bottom]: box.bottom,
                  [left]: box.left
                });
              }
            })]
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Background', 'blockive-premium-addon-for-block'),
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_background_controls__WEBPACK_IMPORTED_MODULE_8__["default"], {
          values: {
            bgType: bpafbContainerBgType,
            bgColor: bpafbContainerBgColor,
            bgGradient: bpafbContainerBgGradient,
            bgImageUrl: bpafbContainerBgImageUrl,
            bgImageId: bpafbContainerBgImageId,
            bgImageSize: bpafbContainerBgImageSize,
            overlayColor: bpafbContainerOverlayColor
          },
          onChange: (key, val) => {
            const map = {
              bgType: 'bpafbContainerBgType',
              bgColor: 'bpafbContainerBgColor',
              bgGradient: 'bpafbContainerBgGradient',
              bgImageUrl: 'bpafbContainerBgImageUrl',
              bgImageId: 'bpafbContainerBgImageId',
              bgImageSize: 'bpafbContainerBgImageSize',
              overlayColor: 'bpafbContainerOverlayColor'
            };
            setAttributes({
              [map[key]]: val
            });
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border', 'blockive-premium-addon-for-block'),
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_border_controls__WEBPACK_IMPORTED_MODULE_6__["default"], {
          values: {
            borderType: bpafbContainerBorderStyle,
            borderWidth: bpafbContainerBorderWidth,
            borderRadius: bpafbContainerBorderRadius,
            borderColor: bpafbContainerBorderColor
          },
          onChange: (key, val) => {
            const map = {
              borderType: 'bpafbContainerBorderStyle',
              borderWidth: 'bpafbContainerBorderWidth',
              borderRadius: 'bpafbContainerBorderRadius',
              borderColor: 'bpafbContainerBorderColor'
            };
            setAttributes({
              [map[key]]: val
            });
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Shadow', 'blockive-premium-addon-for-block'),
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_shadow_controls__WEBPACK_IMPORTED_MODULE_7__["default"], {
          normalValues: {
            enabled: bpafbContainerBoxShadow,
            color: bpafbContainerShadowColor,
            blur: bpafbContainerShadowBlur,
            spread: bpafbContainerShadowSpread
          },
          onNormalChange: (key, val) => {
            const map = {
              enabled: 'bpafbContainerBoxShadow',
              color: 'bpafbContainerShadowColor',
              blur: 'bpafbContainerShadowBlur',
              spread: 'bpafbContainerShadowSpread'
            };
            setAttributes({
              [map[key]]: val
            });
          },
          hoverValues: {
            enabled: bpafbContainerHoverBoxShadow,
            color: bpafbContainerHoverShadowColor,
            blur: bpafbContainerHoverShadowBlur,
            spread: bpafbContainerHoverShadowSpread
          },
          onHoverChange: (key, val) => {
            const map = {
              enabled: 'bpafbContainerHoverBoxShadow',
              color: 'bpafbContainerHoverShadowColor',
              blur: 'bpafbContainerHoverShadowBlur',
              spread: 'bpafbContainerHoverShadowSpread'
            };
            setAttributes({
              [map[key]]: val
            });
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Animation', 'blockive-premium-addon-for-block'),
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_animation_controls__WEBPACK_IMPORTED_MODULE_9__["default"], {
          values: {
            animationType: bpafbAnimationType,
            animationDuration: bpafbAnimationDuration,
            animationDelay: bpafbAnimationDelay,
            animationEasing: bpafbAnimationEasing
          },
          onChange: (key, val) => {
            const map = {
              animationType: 'bpafbAnimationType',
              animationDuration: 'bpafbAnimationDuration',
              animationDelay: 'bpafbAnimationDelay',
              animationEasing: 'bpafbAnimationEasing'
            };
            setAttributes({
              [map[key]]: val
            });
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Transform', 'blockive-premium-addon-for-block'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Rotate (deg)', 'blockive-premium-addon-for-block'),
          value: bpafbTransformRotate,
          onChange: val => setAttributes({
            bpafbTransformRotate: val
          }),
          min: -360,
          max: 360
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Scale (%)', 'blockive-premium-addon-for-block'),
          value: bpafbTransformScale,
          onChange: val => setAttributes({
            bpafbTransformScale: val
          }),
          min: 10,
          max: 300
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Translate X (px)', 'blockive-premium-addon-for-block'),
          value: bpafbTransformTranslateX,
          onChange: val => setAttributes({
            bpafbTransformTranslateX: val
          }),
          min: -300,
          max: 300
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Translate Y (px)', 'blockive-premium-addon-for-block'),
          value: bpafbTransformTranslateY,
          onChange: val => setAttributes({
            bpafbTransformTranslateY: val
          }),
          min: -300,
          max: 300
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Motion Effects', 'blockive-premium-addon-for-block'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hover Animation', 'blockive-premium-addon-for-block'),
          value: bpafbHoverAnimation,
          options: HOVER_ANIMATION_OPTIONS,
          onChange: val => setAttributes({
            bpafbHoverAnimation: val
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Floating Effect', 'blockive-premium-addon-for-block'),
          checked: !!bpafbFloatingEffect,
          onChange: val => setAttributes({
            bpafbFloatingEffect: val
          })
        })]
      })]
    })]
  });
}

/***/ },

/***/ "./src/components/animation-controls/index.js"
/*!****************************************************!*\
  !*** ./src/components/animation-controls/index.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ANIMATION_OPTIONS: () => (/* binding */ ANIMATION_OPTIONS),
/* harmony export */   "default": () => (/* binding */ AnimationControls)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const ANIMATION_OPTIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('None', 'blockive-premium-addon-for-block'),
  value: 'none'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Fade In', 'blockive-premium-addon-for-block'),
  value: 'fadeIn'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Fade In Up', 'blockive-premium-addon-for-block'),
  value: 'fadeInUp'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Fade In Down', 'blockive-premium-addon-for-block'),
  value: 'fadeInDown'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Fade In Left', 'blockive-premium-addon-for-block'),
  value: 'fadeInLeft'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Fade In Right', 'blockive-premium-addon-for-block'),
  value: 'fadeInRight'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Zoom In', 'blockive-premium-addon-for-block'),
  value: 'zoomIn'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Zoom Out', 'blockive-premium-addon-for-block'),
  value: 'zoomOut'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bounce', 'blockive-premium-addon-for-block'),
  value: 'bounce'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Slide In Up', 'blockive-premium-addon-for-block'),
  value: 'slideInUp'
}];
const EASING_OPTIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Ease', 'blockive-premium-addon-for-block'),
  value: 'ease'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Linear', 'blockive-premium-addon-for-block'),
  value: 'linear'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Ease In', 'blockive-premium-addon-for-block'),
  value: 'ease-in'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Ease Out', 'blockive-premium-addon-for-block'),
  value: 'ease-out'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Ease In Out', 'blockive-premium-addon-for-block'),
  value: 'ease-in-out'
}];

/**
 * values: { animationType, animationDuration, animationDelay, animationEasing }
 * onChange( key, value )
 */
function AnimationControls({
  values = {},
  onChange
}) {
  const {
    animationType = 'none',
    animationDuration = 800,
    animationDelay = 0,
    animationEasing = 'ease'
  } = values;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Animation Type', 'blockive-premium-addon-for-block'),
      value: animationType,
      options: ANIMATION_OPTIONS,
      onChange: val => onChange('animationType', val)
    }), animationType !== 'none' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Duration (ms)', 'blockive-premium-addon-for-block'),
        value: animationDuration,
        onChange: val => onChange('animationDuration', val),
        min: 100,
        max: 3000,
        step: 50
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Delay (ms)', 'blockive-premium-addon-for-block'),
        value: animationDelay,
        onChange: val => onChange('animationDelay', val),
        min: 0,
        max: 3000,
        step: 50
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Easing', 'blockive-premium-addon-for-block'),
        value: animationEasing,
        options: EASING_OPTIONS,
        onChange: val => onChange('animationEasing', val)
      })]
    })]
  });
}

/***/ },

/***/ "./src/components/background-controls/index.js"
/*!*****************************************************!*\
  !*** ./src/components/background-controls/index.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BackgroundControls)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const TYPE_OPTIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Solid Color', 'blockive-premium-addon-for-block'),
  value: 'color'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Gradient', 'blockive-premium-addon-for-block'),
  value: 'gradient'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image', 'blockive-premium-addon-for-block'),
  value: 'image'
}];
const SIZE_OPTIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Cover', 'blockive-premium-addon-for-block'),
  value: 'cover'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Contain', 'blockive-premium-addon-for-block'),
  value: 'contain'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Auto', 'blockive-premium-addon-for-block'),
  value: 'auto'
}];

/**
 * values: { bgType, bgColor, bgGradient, bgImageUrl, bgImageId, bgImageSize, overlayColor }
 * onChange( key, value )
 */
function BackgroundControls({
  values = {},
  onChange
}) {
  const {
    bgType = 'color',
    bgColor = '',
    bgGradient = '',
    bgImageUrl = '',
    bgImageSize = 'cover',
    overlayColor = ''
  } = values;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Background Type', 'blockive-premium-addon-for-block'),
      value: bgType,
      options: TYPE_OPTIONS,
      onChange: val => onChange('bgType', val)
    }), bgType === 'color' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Background Color', 'blockive-premium-addon-for-block'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
        value: bgColor,
        onChange: val => onChange('bgColor', val)
      })
    }), bgType === 'gradient' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Background Gradient', 'blockive-premium-addon-for-block'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.GradientPicker, {
        value: bgGradient || undefined,
        onChange: val => onChange('bgGradient', val)
      })
    }), bgType === 'image' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Background Image', 'blockive-premium-addon-for-block'),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
            onSelect: media => {
              onChange('bgImageUrl', media.url);
              onChange('bgImageId', media.id);
            },
            allowedTypes: ['image'],
            value: values.bgImageId,
            render: ({
              open
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
              variant: "secondary",
              onClick: open,
              children: bgImageUrl ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Replace Image', 'blockive-premium-addon-for-block') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select Image', 'blockive-premium-addon-for-block')
            })
          })
        }), bgImageUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "link",
          isDestructive: true,
          onClick: () => {
            onChange('bgImageUrl', '');
            onChange('bgImageId', 0);
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove Image', 'blockive-premium-addon-for-block')
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image Fit', 'blockive-premium-addon-for-block'),
        value: bgImageSize,
        options: SIZE_OPTIONS,
        onChange: val => onChange('bgImageSize', val)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Overlay Color', 'blockive-premium-addon-for-block'),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
          value: overlayColor,
          onChange: val => onChange('overlayColor', val)
        })
      })]
    })]
  });
}

/***/ },

/***/ "./src/components/border-controls/index.js"
/*!*************************************************!*\
  !*** ./src/components/border-controls/index.js ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BorderControls),
/* harmony export */   getBorderStyles: () => (/* binding */ getBorderStyles)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const TYPE_OPTIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('None', 'blockive-premium-addon-for-block'),
  value: 'none'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Solid', 'blockive-premium-addon-for-block'),
  value: 'solid'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Dashed', 'blockive-premium-addon-for-block'),
  value: 'dashed'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Dotted', 'blockive-premium-addon-for-block'),
  value: 'dotted'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Double', 'blockive-premium-addon-for-block'),
  value: 'double'
}];

/**
 * values: { borderType, borderWidth, borderRadius, borderColor }
 * onChange( key, value )
 */
function BorderControls({
  values = {},
  onChange,
  showRadius = true
}) {
  const {
    borderType = 'none',
    borderWidth,
    borderRadius,
    borderColor = ''
  } = values;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border Type', 'blockive-premium-addon-for-block'),
      value: borderType,
      options: TYPE_OPTIONS,
      onChange: val => onChange('borderType', val)
    }), borderType !== 'none' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border Width (px)', 'blockive-premium-addon-for-block'),
        value: borderWidth,
        onChange: val => onChange('borderWidth', val),
        min: 0,
        max: 20
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border Color', 'blockive-premium-addon-for-block'),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
          value: borderColor,
          onChange: val => onChange('borderColor', val)
        })
      })]
    }), showRadius && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border Radius (px)', 'blockive-premium-addon-for-block'),
      value: borderRadius,
      onChange: val => onChange('borderRadius', val),
      min: 0,
      max: 150
    })]
  });
}
function getBorderStyles(values = {}, prefix) {
  const {
    borderType = 'none',
    borderWidth,
    borderRadius,
    borderColor
  } = values;
  const styles = {};
  if (borderType && borderType !== 'none') {
    styles[`${prefix}-border-style`] = borderType;
    if (borderWidth !== undefined && borderWidth !== null) styles[`${prefix}-border-width`] = `${borderWidth}px`;
    if (borderColor) styles[`${prefix}-border-color`] = borderColor;
  } else {
    styles[`${prefix}-border-style`] = 'none';
  }
  if (borderRadius !== undefined && borderRadius !== null) styles[`${prefix}-border-radius`] = `${borderRadius}px`;
  return styles;
}

/***/ },

/***/ "./src/components/inspector-tabs/index.js"
/*!************************************************!*\
  !*** ./src/components/inspector-tabs/index.js ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InspectorTabs)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Shared inspector wiring used by every Blockive block. There is no custom
 * tab navigation here — `general` renders as plain PanelBody sections in
 * the block's native Settings tab, `style` in the block's native Styles
 * tab, and `advanced` (the shared <AdvancedTab />) places its own panels
 * across both native tabs itself. This keeps every existing setting
 * available, just as ordinary collapsible panels instead of behind a
 * second layer of tab navigation.
 */

function InspectorTabs({
  general,
  style,
  advanced
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [general && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
      group: "settings",
      children: general
    }), style && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
      group: "styles",
      children: style
    }), advanced]
  });
}

/***/ },

/***/ "./src/components/responsive-controls/index.js"
/*!*****************************************************!*\
  !*** ./src/components/responsive-controls/index.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResponsiveControls)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const BREAKPOINTS = [{
  name: 'desktop',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Desktop', 'blockive-premium-addon-for-block')
}, {
  name: 'tablet',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Tablet', 'blockive-premium-addon-for-block')
}, {
  name: 'mobile',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Mobile', 'blockive-premium-addon-for-block')
}];

/**
 * Desktop / Tablet / Mobile switcher. Renders `children(device)` for the
 * currently active breakpoint so the caller decides which attribute suffix
 * (e.g. 'PaddingTop' vs 'PaddingTopTablet') to read/write.
 */
function ResponsiveControls({
  children
}) {
  const [device, setDevice] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)('desktop');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "bpafb-responsive-controls",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
      className: "bpafb-responsive-controls__switch",
      children: BREAKPOINTS.map(bp => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
        variant: device === bp.name ? 'primary' : 'secondary',
        isPressed: device === bp.name,
        onClick: () => setDevice(bp.name),
        children: bp.label
      }, bp.name))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "bpafb-responsive-controls__panel",
      children: children(device)
    })]
  });
}

/***/ },

/***/ "./src/components/shadow-controls/index.js"
/*!*************************************************!*\
  !*** ./src/components/shadow-controls/index.js ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShadowControls),
/* harmony export */   getShadowStyle: () => (/* binding */ getShadowStyle)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function ShadowFields({
  values = {},
  onChange
}) {
  const {
    enabled = false,
    color = 'rgba(0,0,0,0.15)',
    blur = 15,
    spread = 0
  } = values;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enable Box Shadow', 'blockive-premium-addon-for-block'),
      checked: !!enabled,
      onChange: val => onChange('enabled', val)
    }), enabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Shadow Color', 'blockive-premium-addon-for-block'),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
          value: color,
          onChange: val => onChange('color', val)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Shadow Blur', 'blockive-premium-addon-for-block'),
        value: blur,
        onChange: val => onChange('blur', val),
        min: 0,
        max: 100
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Shadow Spread', 'blockive-premium-addon-for-block'),
        value: spread,
        onChange: val => onChange('spread', val),
        min: -50,
        max: 50
      })]
    })]
  });
}

/**
 * normalValues / hoverValues: { enabled, color, blur, spread }
 * onNormalChange( key, value ) / onHoverChange( key, value )
 * Pass hasHover=false to render a single (Normal-only) shadow control.
 */
function ShadowControls({
  normalValues,
  onNormalChange,
  hoverValues,
  onHoverChange,
  hasHover = true
}) {
  if (!hasHover) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ShadowFields, {
      values: normalValues,
      onChange: onNormalChange
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    className: "bpafb-color-tabs",
    activeClass: "is-active",
    tabs: [{
      name: 'normal',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Normal', 'blockive-premium-addon-for-block')
    }, {
      name: 'hover',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hover', 'blockive-premium-addon-for-block')
    }],
    children: tab => tab.name === 'normal' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ShadowFields, {
      values: normalValues,
      onChange: onNormalChange
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ShadowFields, {
      values: hoverValues,
      onChange: onHoverChange
    })
  });
}
function getShadowStyle(values = {}) {
  const {
    enabled,
    color = 'rgba(0,0,0,0.15)',
    blur = 15,
    spread = 0
  } = values;
  if (!enabled) return 'none';
  return `0 4px ${blur}px ${spread}px ${color}`;
}

/***/ },

/***/ "./src/components/spacing-controls/index.js"
/*!**************************************************!*\
  !*** ./src/components/spacing-controls/index.js ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SpacingControls)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const SIDES = ['top', 'right', 'bottom', 'left'];
const SIDE_LABELS = {
  top: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Top', 'blockive-premium-addon-for-block'),
  right: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Right', 'blockive-premium-addon-for-block'),
  bottom: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bottom', 'blockive-premium-addon-for-block'),
  left: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Left', 'blockive-premium-addon-for-block')
};

/**
 * Reusable box-model (Top/Right/Bottom/Left) control for Padding, Margin,
 * Gap, Icon Spacing, etc.
 *
 * value: { top, right, bottom, left }
 * onChange( { top, right, bottom, left } )
 */
function SpacingControls({
  label,
  value = {},
  onChange,
  min = -100,
  max = 200
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "bpafb-spacing-controls",
    children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
      className: "bpafb-spacing-controls__label",
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "bpafb-spacing-controls__grid",
      children: SIDES.map(side => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
        label: SIDE_LABELS[side],
        value: value[side],
        onChange: val => onChange({
          ...value,
          [side]: val
        }),
        min: min,
        max: max
      }, side))
    })]
  });
}

/***/ },

/***/ "./src/facebook-embed/edit.js"
/*!************************************!*\
  !*** ./src/facebook-embed/edit.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_inspector_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/inspector-tabs */ "./src/components/inspector-tabs/index.js");
/* harmony import */ var _components_advanced_tab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/advanced-tab */ "./src/components/advanced-tab/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







const PLACEHOLDERS = {
  page: 'https://www.facebook.com/YourPage',
  post: 'https://www.facebook.com/YourPage/posts/…',
  video: 'https://www.facebook.com/YourPage/videos/…',
  like: 'https://www.facebook.com/YourPage'
};
function Edit({
  attributes,
  setAttributes
}) {
  const {
    embedType,
    url,
    width,
    height,
    pageTabs,
    smallHeader,
    hideCover,
    showFacepile,
    likeLayout,
    likeAction,
    likeSize,
    likeShare,
    showText,
    clickToLoad,
    consentText,
    embedAlign
  } = attributes;
  const set = key => value => setAttributes({
    [key]: value
  });
  const tabs = Array.isArray(pageTabs) ? pageTabs : [];
  const toggleTab = tab => checked => setAttributes({
    pageTabs: checked ? [...tabs, tab] : tabs.filter(t => t !== tab)
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.AlignmentControl, {
        value: embedAlign,
        onChange: value => setAttributes({
          embedAlign: value || 'center'
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_inspector_tabs__WEBPACK_IMPORTED_MODULE_4__["default"], {
      general: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Facebook', 'blockive-premium-addon-for-block-pro'),
          initialOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show', 'blockive-premium-addon-for-block-pro'),
            value: embedType,
            options: [{
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Post', 'blockive-premium-addon-for-block-pro'),
              value: 'post'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Video', 'blockive-premium-addon-for-block-pro'),
              value: 'video'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Page', 'blockive-premium-addon-for-block-pro'),
              value: 'page'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Like Button', 'blockive-premium-addon-for-block-pro'),
              value: 'like'
            }],
            onChange: set('embedType')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Facebook Address', 'blockive-premium-addon-for-block-pro'),
            type: "url",
            value: url,
            placeholder: PLACEHOLDERS[embedType],
            onChange: set('url'),
            help: embedType === 'like' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('The page or address people will like.', 'blockive-premium-addon-for-block-pro') : undefined
          }), embedType !== 'like' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Width (px)', 'blockive-premium-addon-for-block-pro'),
            value: width,
            onChange: set('width'),
            min: 180,
            max: 750,
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Shrinks to fit narrower screens.', 'blockive-premium-addon-for-block-pro')
          }), embedType !== 'like' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Height (px, 0 = automatic)', 'blockive-premium-addon-for-block-pro'),
            value: height,
            onChange: set('height'),
            min: 0,
            max: 1200
          }), embedType === 'page' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
              className: "components-base-control__label",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Tabs', 'blockive-premium-addon-for-block-pro')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Timeline', 'blockive-premium-addon-for-block-pro'),
              checked: tabs.includes('timeline'),
              onChange: toggleTab('timeline')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Events', 'blockive-premium-addon-for-block-pro'),
              checked: tabs.includes('events'),
              onChange: toggleTab('events')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Messages', 'blockive-premium-addon-for-block-pro'),
              checked: tabs.includes('messages'),
              onChange: toggleTab('messages')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Small Header', 'blockive-premium-addon-for-block-pro'),
              checked: !!smallHeader,
              onChange: set('smallHeader')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hide Cover Photo', 'blockive-premium-addon-for-block-pro'),
              checked: !!hideCover,
              onChange: set('hideCover')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show Friends Who Like the Page', 'blockive-premium-addon-for-block-pro'),
              checked: !!showFacepile,
              onChange: set('showFacepile')
            })]
          }), (embedType === 'post' || embedType === 'video') && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show Post Text', 'blockive-premium-addon-for-block-pro'),
            checked: !!showText,
            onChange: set('showText')
          }), embedType === 'like' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Layout', 'blockive-premium-addon-for-block-pro'),
              value: likeLayout,
              options: [{
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button with count', 'blockive-premium-addon-for-block-pro'),
                value: 'button_count'
              }, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button only', 'blockive-premium-addon-for-block-pro'),
                value: 'button'
              }, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Count box above button', 'blockive-premium-addon-for-block-pro'),
                value: 'box_count'
              }, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Standard (with text)', 'blockive-premium-addon-for-block-pro'),
                value: 'standard'
              }],
              onChange: set('likeLayout')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button Says', 'blockive-premium-addon-for-block-pro'),
              value: likeAction,
              options: [{
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Like', 'blockive-premium-addon-for-block-pro'),
                value: 'like'
              }, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Recommend', 'blockive-premium-addon-for-block-pro'),
                value: 'recommend'
              }],
              onChange: set('likeAction')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Size', 'blockive-premium-addon-for-block-pro'),
              value: likeSize,
              options: [{
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Small', 'blockive-premium-addon-for-block-pro'),
                value: 'small'
              }, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Large', 'blockive-premium-addon-for-block-pro'),
                value: 'large'
              }],
              onChange: set('likeSize')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Share Button', 'blockive-premium-addon-for-block-pro'),
              checked: !!likeShare,
              onChange: set('likeShare')
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Privacy', 'blockive-premium-addon-for-block-pro'),
          initialOpen: false,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Load Only After a Click', 'blockive-premium-addon-for-block-pro'),
            checked: !!clickToLoad,
            onChange: set('clickToLoad'),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Nothing from Facebook loads until the visitor asks for it. Turning this off loads Facebook right away, which may need cookie consent where you are.', 'blockive-premium-addon-for-block-pro')
          }), clickToLoad && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextareaControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Message', 'blockive-premium-addon-for-block-pro'),
            value: consentText,
            onChange: set('consentText'),
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('This content is hosted by Facebook, which may set cookies and collect data when it loads.', 'blockive-premium-addon-for-block-pro'),
            rows: 3
          })]
        })]
      }),
      advanced: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_advanced_tab__WEBPACK_IMPORTED_MODULE_5__["default"], {
        attributes: attributes,
        setAttributes: setAttributes
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)(),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Disabled, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_2___default()), {
          block: "blockive-premium-addon-for-block/facebook-embed",
          attributes: {
            ...attributes,
            clickToLoad: true
          }
        })
      })
    })]
  });
}

/***/ },

/***/ "./src/facebook-embed/index.js"
/*!*************************************!*\
  !*** ./src/facebook-embed/index.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/facebook-embed/style.css");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/facebook-embed/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/facebook-embed/block.json");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  ..._block_json__WEBPACK_IMPORTED_MODULE_3__,
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: () => null
});

/***/ },

/***/ "./src/facebook-embed/style.css"
/*!**************************************!*\
  !*** ./src/facebook-embed/style.css ***!
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

/***/ "@wordpress/element"
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["element"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

/***/ },

/***/ "@wordpress/server-side-render"
/*!******************************************!*\
  !*** external ["wp","serverSideRender"] ***!
  \******************************************/
(module) {

module.exports = window["wp"]["serverSideRender"];

/***/ },

/***/ "./src/facebook-embed/block.json"
/*!***************************************!*\
  !*** ./src/facebook-embed/block.json ***!
  \***************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"blockive-premium-addon-for-block/facebook-embed","version":"1.0.0","title":"Facebook Embed","category":"bpafb-widgets","icon":"facebook","description":"A Facebook page, post, video, or Like button, loaded only after the visitor agrees.","keywords":["facebook","embed","social","like","page"],"textdomain":"blockive-premium-addon-for-block-pro","example":{},"attributes":{"embedType":{"type":"string","default":"post"},"url":{"type":"string","default":""},"width":{"type":"number","default":500},"height":{"type":"number","default":0},"pageTabs":{"type":"array","items":{"type":"string"},"default":["timeline"]},"smallHeader":{"type":"boolean","default":false},"hideCover":{"type":"boolean","default":false},"showFacepile":{"type":"boolean","default":true},"likeLayout":{"type":"string","default":"button_count"},"likeAction":{"type":"string","default":"like"},"likeSize":{"type":"string","default":"small"},"likeShare":{"type":"boolean","default":true},"showText":{"type":"boolean","default":true},"clickToLoad":{"type":"boolean","default":true},"consentText":{"type":"string","default":""},"embedAlign":{"type":"string","default":"center"},"bpafbUid":{"type":"string","default":""},"bpafbDisplay":{"type":"string","default":""},"bpafbOverflow":{"type":"string","default":""},"bpafbPosition":{"type":"string","default":""},"bpafbContainerWidth":{"type":"number"},"bpafbContainerWidthUnit":{"type":"string","default":"px"},"bpafbContainerMinHeight":{"type":"number"},"bpafbContainerMaxHeight":{"type":"number"},"bpafbContainerBgType":{"type":"string","default":"color"},"bpafbContainerBgColor":{"type":"string","default":""},"bpafbContainerBgGradient":{"type":"string","default":""},"bpafbContainerBgImageUrl":{"type":"string","default":""},"bpafbContainerBgImageId":{"type":"number","default":0},"bpafbContainerBgImageSize":{"type":"string","default":"cover"},"bpafbContainerOverlayColor":{"type":"string","default":""},"bpafbContainerBorderStyle":{"type":"string","default":"none"},"bpafbContainerBorderWidth":{"type":"number"},"bpafbContainerBorderRadius":{"type":"number"},"bpafbContainerBorderColor":{"type":"string","default":""},"bpafbContainerBoxShadow":{"type":"boolean","default":false},"bpafbContainerShadowColor":{"type":"string","default":"rgba(0,0,0,0.15)"},"bpafbContainerShadowBlur":{"type":"number","default":15},"bpafbContainerShadowSpread":{"type":"number","default":0},"bpafbContainerHoverBoxShadow":{"type":"boolean","default":false},"bpafbContainerHoverShadowColor":{"type":"string","default":"rgba(0,0,0,0.15)"},"bpafbContainerHoverShadowBlur":{"type":"number","default":15},"bpafbContainerHoverShadowSpread":{"type":"number","default":0},"bpafbHideDesktop":{"type":"boolean","default":false},"bpafbHideTablet":{"type":"boolean","default":false},"bpafbHideMobile":{"type":"boolean","default":false},"bpafbAnimationType":{"type":"string","default":"none"},"bpafbAnimationDuration":{"type":"number","default":800},"bpafbAnimationDelay":{"type":"number","default":0},"bpafbAnimationEasing":{"type":"string","default":"ease"},"bpafbTransformRotate":{"type":"number","default":0},"bpafbTransformScale":{"type":"number","default":100},"bpafbTransformTranslateX":{"type":"number","default":0},"bpafbTransformTranslateY":{"type":"number","default":0},"bpafbHoverAnimation":{"type":"string","default":"none"},"bpafbFloatingEffect":{"type":"boolean","default":false},"bpafbZIndex":{"type":"number"},"bpafbHtmlId":{"type":"string","default":""},"bpafbHtmlClasses":{"type":"string","default":""},"bpafbCustomCss":{"type":"string","default":""},"bpafbContainerAlign":{"type":"string","default":""},"bpafbContainerPaddingTop":{"type":"number"},"bpafbContainerMarginTop":{"type":"number"},"bpafbContainerPaddingRight":{"type":"number"},"bpafbContainerMarginRight":{"type":"number"},"bpafbContainerPaddingBottom":{"type":"number"},"bpafbContainerMarginBottom":{"type":"number"},"bpafbContainerPaddingLeft":{"type":"number"},"bpafbContainerMarginLeft":{"type":"number"},"bpafbContainerPaddingTopTablet":{"type":"number"},"bpafbContainerMarginTopTablet":{"type":"number"},"bpafbContainerPaddingRightTablet":{"type":"number"},"bpafbContainerMarginRightTablet":{"type":"number"},"bpafbContainerPaddingBottomTablet":{"type":"number"},"bpafbContainerMarginBottomTablet":{"type":"number"},"bpafbContainerPaddingLeftTablet":{"type":"number"},"bpafbContainerMarginLeftTablet":{"type":"number"},"bpafbContainerPaddingTopMobile":{"type":"number"},"bpafbContainerMarginTopMobile":{"type":"number"},"bpafbContainerPaddingRightMobile":{"type":"number"},"bpafbContainerMarginRightMobile":{"type":"number"},"bpafbContainerPaddingBottomMobile":{"type":"number"},"bpafbContainerMarginBottomMobile":{"type":"number"},"bpafbContainerPaddingLeftMobile":{"type":"number"},"bpafbContainerMarginLeftMobile":{"type":"number"}},"supports":{"html":false,"anchor":true},"render":"file:./render.php","editorScript":"file:./index.js","style":"file:./style-index.css","viewScript":"file:./view.js"}');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		const deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn) => {
/******/ 			if(chunkIds) {
/******/ 				deferred.push([chunkIds, fn]);
/******/ 				return;
/******/ 			}
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				let [chunkIds, fn] = deferred[i];
/******/ 				let fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if (__webpack_require__.O.j(chunkIds[j])) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					const r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		const installedChunks = {
/******/ 			"facebook-embed/index": 0,
/******/ 			"facebook-embed/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		const webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			let [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		const chunkLoadingGlobal = globalThis["webpackChunkblockive_premium_addon_for_block_pro"] ||= [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	let __webpack_exports__ = __webpack_require__.O(undefined, ["facebook-embed/style-index"], () => (__webpack_require__("./src/facebook-embed/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map