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

/***/ "./src/components/color-state-controls/index.js"
/*!******************************************************!*\
  !*** ./src/components/color-state-controls/index.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ColorStateControls)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Renders a list of { label, value, onChange } color fields. When a `hover`
 * list is also provided, wraps everything in a Normal/Hover TabPanel so
 * every block gets the same state-control UX (Button, Icon Box, Image Box,
 * Accordion, FAQ, Progress Bar, etc.).
 */

function ColorStateControls({
  normal = [],
  hover = []
}) {
  const renderFields = fields => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: fields.map(field => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
      label: field.label,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
        value: field.value,
        onChange: field.onChange
      })
    }, field.label))
  });
  if (!hover.length) {
    return renderFields(normal);
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    className: "bpafb-color-tabs",
    activeClass: "is-active",
    tabs: [{
      name: 'normal',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Normal', 'blockive-premium-addon-for-block'),
      className: 'tab-normal'
    }, {
      name: 'hover',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hover', 'blockive-premium-addon-for-block'),
      className: 'tab-hover'
    }],
    children: tab => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "bpafb-color-tab-content",
      children: renderFields(tab.name === 'normal' ? normal : hover)
    })
  });
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

/***/ "./src/components/typography-controls/index.js"
/*!*****************************************************!*\
  !*** ./src/components/typography-controls/index.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TypographyControls),
/* harmony export */   getTypographyStyles: () => (/* binding */ getTypographyStyles)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const WEIGHT_OPTIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Default', 'blockive-premium-addon-for-block'),
  value: ''
}, {
  label: '100',
  value: '100'
}, {
  label: '200',
  value: '200'
}, {
  label: '300',
  value: '300'
}, {
  label: '400 (Normal)',
  value: '400'
}, {
  label: '500',
  value: '500'
}, {
  label: '600',
  value: '600'
}, {
  label: '700 (Bold)',
  value: '700'
}, {
  label: '800',
  value: '800'
}, {
  label: '900',
  value: '900'
}];
const TRANSFORM_OPTIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Default', 'blockive-premium-addon-for-block'),
  value: ''
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('None', 'blockive-premium-addon-for-block'),
  value: 'none'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Uppercase', 'blockive-premium-addon-for-block'),
  value: 'uppercase'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Lowercase', 'blockive-premium-addon-for-block'),
  value: 'lowercase'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Capitalize', 'blockive-premium-addon-for-block'),
  value: 'capitalize'
}];
const DECORATION_OPTIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Default', 'blockive-premium-addon-for-block'),
  value: ''
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('None', 'blockive-premium-addon-for-block'),
  value: 'none'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Underline', 'blockive-premium-addon-for-block'),
  value: 'underline'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Line Through', 'blockive-premium-addon-for-block'),
  value: 'line-through'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Overline', 'blockive-premium-addon-for-block'),
  value: 'overline'
}];

/**
 * values: { fontFamily, fontSize, fontWeight, lineHeight, letterSpacing, textTransform, textDecoration }
 * onChange( key, value )
 */
function TypographyControls({
  values = {},
  onChange
}) {
  const {
    fontFamily = '',
    fontSize,
    fontWeight = '',
    lineHeight,
    letterSpacing,
    textTransform = '',
    textDecoration = ''
  } = values;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Font Family', 'blockive-premium-addon-for-block'),
      value: fontFamily,
      onChange: val => onChange('fontFamily', val),
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("e.g. 'Poppins', sans-serif", 'blockive-premium-addon-for-block')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Font Size (px)', 'blockive-premium-addon-for-block'),
      value: fontSize,
      onChange: val => onChange('fontSize', val),
      min: 8,
      max: 120
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Font Weight', 'blockive-premium-addon-for-block'),
      value: fontWeight,
      options: WEIGHT_OPTIONS,
      onChange: val => onChange('fontWeight', val)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Line Height', 'blockive-premium-addon-for-block'),
      value: lineHeight,
      onChange: val => onChange('lineHeight', val),
      min: 0.5,
      max: 3,
      step: 0.1
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Letter Spacing (px)', 'blockive-premium-addon-for-block'),
      value: letterSpacing,
      onChange: val => onChange('letterSpacing', val),
      min: -5,
      max: 20,
      step: 0.5
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text Transform', 'blockive-premium-addon-for-block'),
      value: textTransform,
      options: TRANSFORM_OPTIONS,
      onChange: val => onChange('textTransform', val)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text Decoration', 'blockive-premium-addon-for-block'),
      value: textDecoration,
      options: DECORATION_OPTIONS,
      onChange: val => onChange('textDecoration', val)
    })]
  });
}

/**
 * Turns a typography values object into a CSS custom-property-friendly style object.
 * `prefix` is the CSS variable prefix, e.g. '--bpafb-btn-text'.
 */
function getTypographyStyles(values = {}, prefix) {
  const {
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    textTransform,
    textDecoration
  } = values;
  const styles = {};
  if (fontFamily) styles[`${prefix}-font-family`] = fontFamily;
  if (fontSize !== undefined && fontSize !== null) styles[`${prefix}-font-size`] = `${fontSize}px`;
  if (fontWeight) styles[`${prefix}-font-weight`] = fontWeight;
  if (lineHeight !== undefined && lineHeight !== null) styles[`${prefix}-line-height`] = lineHeight;
  if (letterSpacing !== undefined && letterSpacing !== null) styles[`${prefix}-letter-spacing`] = `${letterSpacing}px`;
  if (textTransform) styles[`${prefix}-text-transform`] = textTransform;
  if (textDecoration) styles[`${prefix}-text-decoration`] = textDecoration;
  return styles;
}

/***/ },

/***/ "./src/icon-list/edit.js"
/*!*******************************!*\
  !*** ./src/icon-list/edit.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_inspector_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/inspector-tabs */ "./src/components/inspector-tabs/index.js");
/* harmony import */ var _components_advanced_tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/advanced-tab */ "./src/components/advanced-tab/index.js");
/* harmony import */ var _components_color_state_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/color-state-controls */ "./src/components/color-state-controls/index.js");
/* harmony import */ var _components_typography_controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/typography-controls */ "./src/components/typography-controls/index.js");
/* harmony import */ var _pro_components_icon_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pro-components/icon-picker */ "./src/pro-components/icon-picker/index.js");
/* harmony import */ var _template_blocks_site_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../template-blocks-site/shared */ "./src/template-blocks-site/shared.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);










const NEW_ITEM = {
  text: 'List Item',
  icon: 'fa-solid fa-check',
  url: '',
  newTab: false
};
function Edit({
  attributes,
  setAttributes
}) {
  const {
    items,
    layout,
    align,
    alignMobile,
    spaceBetween,
    showDivider,
    dividerStyle,
    dividerWidth,
    dividerColor,
    iconSize,
    iconColor,
    iconHoverColor,
    iconGap,
    iconVAlign,
    textColor,
    textHoverColor
  } = attributes;
  const set = key => val => setAttributes({
    [key]: val
  });
  const updateItem = (index, patch) => setAttributes({
    items: items.map((item, i) => i === index ? {
      ...item,
      ...patch
    } : item)
  });
  const moveItem = (index, delta) => {
    const next = [...items];
    const [moved] = next.splice(index, 1);
    next.splice(index + delta, 0, moved);
    setAttributes({
      items: next
    });
  };
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: ['bpafb-icon-list', `bpafb-icon-list--${layout}`, `bpafb-icon-list--align-${align || 'left'}`, alignMobile ? `bpafb-icon-list--align-mobile-${alignMobile}` : '', showDivider ? 'bpafb-icon-list--divider' : ''].filter(Boolean).join(' '),
    style: (0,_template_blocks_site_shared__WEBPACK_IMPORTED_MODULE_8__.cssVars)({
      '--bpafb-il-space': spaceBetween,
      '--bpafb-il-divider-style': dividerStyle,
      '--bpafb-il-divider-width': dividerWidth,
      '--bpafb-il-divider-color': dividerColor,
      '--bpafb-il-icon-size': iconSize,
      '--bpafb-il-icon-color': iconColor,
      '--bpafb-il-icon-hover-color': iconHoverColor,
      '--bpafb-il-icon-gap': iconGap,
      '--bpafb-il-icon-valign': iconVAlign === 'top' ? 'flex-start' : 'center',
      '--bpafb-il-text-color': textColor,
      '--bpafb-il-text-hover-color': textHoverColor,
      ...(0,_template_blocks_site_shared__WEBPACK_IMPORTED_MODULE_8__.typoVars)(attributes, 'text', '--bpafb-il-text')
    })
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.AlignmentControl, {
        value: align,
        onChange: val => setAttributes({
          align: val || 'left'
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_inspector_tabs__WEBPACK_IMPORTED_MODULE_3__["default"], {
      general: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Items', 'blockive-premium-addon-for-block-pro'),
          initialOpen: true,
          children: [items.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
            title: (item.text || '').replace(/<[^>]+>/g, '') || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('(empty)', 'blockive-premium-addon-for-block-pro'),
            initialOpen: false,
            className: "bpafb-icon-list-editor__item",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text', 'blockive-premium-addon-for-block-pro'),
              value: item.text,
              onChange: val => updateItem(index, {
                text: val
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_pro_components_icon_picker__WEBPACK_IMPORTED_MODULE_7__["default"], {
              allowEmpty: true,
              value: item.icon,
              onChange: val => updateItem(index, {
                icon: val
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Link', 'blockive-premium-addon-for-block-pro'),
              help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('e.g. tel:+15551234567, mailto:hello@example.com, or a page URL.', 'blockive-premium-addon-for-block-pro'),
              value: item.url,
              onChange: val => updateItem(index, {
                url: val
              })
            }), !!item.url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Open in New Tab', 'blockive-premium-addon-for-block-pro'),
              checked: !!item.newTab,
              onChange: val => updateItem(index, {
                newTab: val
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                size: "small",
                icon: "arrow-up-alt2",
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Move up', 'blockive-premium-addon-for-block-pro'),
                disabled: index === 0,
                onClick: () => moveItem(index, -1)
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                size: "small",
                icon: "arrow-down-alt2",
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Move down', 'blockive-premium-addon-for-block-pro'),
                disabled: index === items.length - 1,
                onClick: () => moveItem(index, 1)
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                size: "small",
                icon: "admin-page",
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Duplicate', 'blockive-premium-addon-for-block-pro'),
                onClick: () => setAttributes({
                  items: [...items.slice(0, index + 1), {
                    ...item
                  }, ...items.slice(index + 1)]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                size: "small",
                icon: "trash",
                isDestructive: true,
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove', 'blockive-premium-addon-for-block-pro'),
                onClick: () => setAttributes({
                  items: items.filter((_, i) => i !== index)
                })
              })]
            })]
          }, index)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            variant: "secondary",
            onClick: () => setAttributes({
              items: [...items, {
                ...NEW_ITEM,
                icon: items[items.length - 1]?.icon || NEW_ITEM.icon
              }]
            }),
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add Item', 'blockive-premium-addon-for-block-pro')
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Layout', 'blockive-premium-addon-for-block-pro'),
          initialOpen: false,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Layout', 'blockive-premium-addon-for-block-pro'),
            value: layout,
            options: [{
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Default (stacked)', 'blockive-premium-addon-for-block-pro'),
              value: 'vertical'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Inline', 'blockive-premium-addon-for-block-pro'),
              value: 'inline'
            }],
            onChange: set('layout')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Mobile Alignment', 'blockive-premium-addon-for-block-pro'),
            value: alignMobile,
            options: [{
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Same as desktop', 'blockive-premium-addon-for-block-pro'),
              value: ''
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Left', 'blockive-premium-addon-for-block-pro'),
              value: 'left'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Center', 'blockive-premium-addon-for-block-pro'),
              value: 'center'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Right', 'blockive-premium-addon-for-block-pro'),
              value: 'right'
            }],
            onChange: set('alignMobile')
          })]
        })]
      }),
      style: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('List', 'blockive-premium-addon-for-block-pro'),
          initialOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Space Between (px)', 'blockive-premium-addon-for-block-pro'),
            value: spaceBetween,
            onChange: set('spaceBetween'),
            min: 0,
            max: 60
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Divider', 'blockive-premium-addon-for-block-pro'),
            checked: !!showDivider,
            onChange: set('showDivider')
          }), showDivider && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Divider Style', 'blockive-premium-addon-for-block-pro'),
              value: dividerStyle,
              options: ['solid', 'dashed', 'dotted', 'double'].map(v => ({
                label: v,
                value: v
              })),
              onChange: set('dividerStyle')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Divider Weight (px)', 'blockive-premium-addon-for-block-pro'),
              value: dividerWidth,
              onChange: set('dividerWidth'),
              min: 1,
              max: 10
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_color_state_controls__WEBPACK_IMPORTED_MODULE_5__["default"], {
              normal: [{
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Divider Color', 'blockive-premium-addon-for-block-pro'),
                value: dividerColor,
                onChange: set('dividerColor')
              }]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Icon', 'blockive-premium-addon-for-block-pro'),
          initialOpen: false,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_color_state_controls__WEBPACK_IMPORTED_MODULE_5__["default"], {
            normal: [{
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Color', 'blockive-premium-addon-for-block-pro'),
              value: iconColor,
              onChange: set('iconColor')
            }],
            hover: [{
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Color', 'blockive-premium-addon-for-block-pro'),
              value: iconHoverColor,
              onChange: set('iconHoverColor')
            }]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Size (px)', 'blockive-premium-addon-for-block-pro'),
            value: iconSize,
            onChange: set('iconSize'),
            min: 6,
            max: 100
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Gap to Text (px)', 'blockive-premium-addon-for-block-pro'),
            value: iconGap,
            onChange: set('iconGap'),
            min: 0,
            max: 50
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Vertical Alignment', 'blockive-premium-addon-for-block-pro'),
            value: iconVAlign,
            options: [{
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Center', 'blockive-premium-addon-for-block-pro'),
              value: 'center'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Top', 'blockive-premium-addon-for-block-pro'),
              value: 'top'
            }],
            onChange: set('iconVAlign')
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text', 'blockive-premium-addon-for-block-pro'),
          initialOpen: false,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_typography_controls__WEBPACK_IMPORTED_MODULE_6__["default"], {
            values: (0,_template_blocks_site_shared__WEBPACK_IMPORTED_MODULE_8__.typoValues)(attributes, 'text'),
            onChange: (0,_template_blocks_site_shared__WEBPACK_IMPORTED_MODULE_8__.typoOnChange)(setAttributes, 'text')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_color_state_controls__WEBPACK_IMPORTED_MODULE_5__["default"], {
            normal: [{
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Color', 'blockive-premium-addon-for-block-pro'),
              value: textColor,
              onChange: set('textColor')
            }],
            hover: [{
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Color', 'blockive-premium-addon-for-block-pro'),
              value: textHoverColor,
              onChange: set('textHoverColor')
            }]
          })]
        })]
      }),
      advanced: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_advanced_tab__WEBPACK_IMPORTED_MODULE_4__["default"], {
        attributes: attributes,
        setAttributes: setAttributes
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      ...blockProps,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("ul", {
        className: "bpafb-icon-list__items",
        children: items.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("li", {
          className: "bpafb-icon-list__item",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("span", {
            className: "bpafb-icon-list__link",
            children: [item.icon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
              className: "bpafb-icon-list__icon",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("i", {
                className: item.icon,
                "aria-hidden": "true"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "span",
              className: "bpafb-icon-list__text",
              value: item.text,
              allowedFormats: ['core/bold', 'core/italic'],
              onChange: val => updateItem(index, {
                text: val
              }),
              placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('List item…', 'blockive-premium-addon-for-block-pro')
            })]
          })
        }, index))
      })
    })]
  });
}

/***/ },

/***/ "./src/icon-list/index.js"
/*!********************************!*\
  !*** ./src/icon-list/index.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/icon-list/style.css");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/icon-list/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/icon-list/block.json");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  ..._block_json__WEBPACK_IMPORTED_MODULE_3__,
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: () => null
});

/***/ },

/***/ "./src/pro-components/icon-picker/index.js"
/*!*************************************************!*\
  !*** ./src/pro-components/icon-picker/index.js ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ICONS: () => (/* binding */ ICONS),
/* harmony export */   "default": () => (/* binding */ IconPicker)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.css */ "./src/pro-components/icon-picker/editor.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





/**
 * Font Awesome 6 icon picker (the plugin already loads Font Awesome 6.5 on
 * the site and in the editor). Offers a searchable set of commonly used
 * icons, plus a free-text field for any other Font Awesome class.
 * Pro-only: lives outside src/components, which the sync script
 * overwrites from the free plugin.
 */

const SOLID = ['star', 'check', 'circle-check', 'xmark', 'plus', 'minus', 'heart', 'bars', 'magnifying-glass', 'house', 'phone', 'mobile-screen', 'envelope', 'location-dot', 'map-location-dot', 'clock', 'calendar', 'calendar-days', 'user', 'users', 'user-tie', 'cart-shopping', 'bag-shopping', 'basket-shopping', 'credit-card', 'truck', 'tag', 'tags', 'gift', 'percent', 'dollar-sign', 'euro-sign', 'sterling-sign', 'globe', 'link', 'share-nodes', 'arrow-right', 'arrow-left', 'arrow-up', 'arrow-down', 'angle-right', 'angle-left', 'chevron-right', 'chevron-down', 'caret-right', 'circle-arrow-right', 'arrow-up-right-from-square', 'download', 'upload', 'paper-plane', 'comment', 'comments', 'bell', 'bookmark', 'flag', 'thumbs-up', 'award', 'trophy', 'medal', 'crown', 'gem', 'bolt', 'fire', 'rocket', 'lightbulb', 'gear', 'gears', 'wrench', 'screwdriver-wrench', 'shield-halved', 'lock', 'unlock', 'key', 'eye', 'image', 'images', 'camera', 'video', 'play', 'circle-play', 'music', 'headphones', 'microphone', 'file', 'file-lines', 'folder', 'book', 'graduation-cap', 'briefcase', 'building', 'store', 'hospital', 'stethoscope', 'car', 'plane', 'bicycle', 'utensils', 'mug-hot', 'leaf', 'seedling', 'tree', 'sun', 'moon', 'cloud', 'umbrella', 'paw', 'code', 'laptop', 'desktop', 'server', 'database', 'wifi', 'chart-line', 'chart-pie', 'chart-simple', 'list', 'list-check', 'circle-info', 'circle-question', 'triangle-exclamation', 'circle-exclamation', 'hand-holding-heart', 'handshake', 'face-smile', 'quote-left', 'quote-right', 'pen', 'pen-to-square', 'trash', 'print', 'fax', 'headset', 'life-ring', 'compass', 'map'];
const REGULAR = ['star', 'heart', 'circle-check', 'clock', 'calendar', 'envelope', 'user', 'comment', 'bell', 'bookmark', 'file', 'folder', 'image', 'lightbulb', 'thumbs-up', 'face-smile', 'eye', 'circle', 'square', 'paper-plane'];
const BRANDS = ['facebook', 'facebook-f', 'x-twitter', 'twitter', 'instagram', 'linkedin', 'linkedin-in', 'youtube', 'tiktok', 'pinterest', 'pinterest-p', 'whatsapp', 'telegram', 'snapchat', 'reddit', 'discord', 'threads', 'tumblr', 'vimeo-v', 'twitch', 'spotify', 'soundcloud', 'github', 'gitlab', 'dribbble', 'behance', 'medium', 'wordpress', 'google', 'apple', 'android', 'amazon', 'paypal', 'stripe', 'cc-visa', 'cc-mastercard', 'skype', 'slack', 'yelp', 'tripadvisor', 'etsy', 'shopify', 'airbnb', 'weixin', 'line', 'viber', 'rss'];
const ICONS = [...SOLID.map(name => ({
  name,
  className: `fa-solid fa-${name}`
})), ...REGULAR.map(name => ({
  name: `${name} (outline)`,
  className: `fa-regular fa-${name}`
})), ...BRANDS.map(name => ({
  name: `${name} (brand)`,
  className: `fa-brands fa-${name}`
}))];

/**
 * Normalizes older / shorthand class strings ("fas fa-star") so the
 * selected-state highlight also matches them.
 *
 * @param {string} value Icon class string.
 * @return {string}
 */
function normalize(value = '') {
  return value.trim().replace(/^fas\b/, 'fa-solid').replace(/^far\b/, 'fa-regular').replace(/^fab\b/, 'fa-brands');
}
function IconPicker({
  label,
  value,
  onChange,
  allowEmpty = false
}) {
  const [search, setSearch] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const current = normalize(value);
  const term = search.trim().toLowerCase();
  const results = term ? ICONS.filter(icon => icon.name.includes(term) || icon.className.includes(term)) : ICONS;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    label: label || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Icon', 'blockive-premium-addon-for-block-pro'),
    className: "bpafb-icon-picker",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "bpafb-icon-picker__row",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        className: "bpafb-icon-picker__preview",
        "aria-hidden": "true",
        children: value ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
          className: value
        }) : '—'
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
        popoverProps: {
          placement: 'left-start'
        },
        renderToggle: ({
          isOpen,
          onToggle
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "secondary",
          onClick: onToggle,
          "aria-expanded": isOpen,
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Choose Icon', 'blockive-premium-addon-for-block-pro')
        }),
        renderContent: ({
          onClose
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "bpafb-icon-picker__popover",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SearchControl, {
            value: search,
            onChange: setSearch,
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Search icons…', 'blockive-premium-addon-for-block-pro'),
            __nextHasNoMarginBottom: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "bpafb-icon-picker__grid",
            role: "listbox",
            "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Icons', 'blockive-premium-addon-for-block-pro'),
            children: [results.map(icon => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
              type: "button",
              role: "option",
              "aria-selected": current === icon.className,
              className: `bpafb-icon-picker__item${current === icon.className ? ' is-selected' : ''}`,
              title: icon.name,
              onClick: () => {
                onChange(icon.className);
                onClose();
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                className: icon.className,
                "aria-hidden": "true"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                className: "screen-reader-text",
                children: icon.name
              })]
            }, icon.className)), !results.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              className: "bpafb-icon-picker__empty",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('No match. Type any Font Awesome class in the field below the button.', 'blockive-premium-addon-for-block-pro')
            })]
          })]
        })
      }), allowEmpty && value && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "link",
        isDestructive: true,
        onClick: () => onChange(''),
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Clear', 'blockive-premium-addon-for-block-pro')
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      value: value || '',
      onChange: onChange,
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Or any Font Awesome 6 class, e.g. "fa-solid fa-mug-hot".', 'blockive-premium-addon-for-block-pro'),
      __nextHasNoMarginBottom: true
    })]
  });
}

/***/ },

/***/ "./src/template-blocks-site/shared.js"
/*!********************************************!*\
  !*** ./src/template-blocks-site/shared.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ICON_PATHS: () => (/* binding */ ICON_PATHS),
/* harmony export */   SvgIcon: () => (/* binding */ SvgIcon),
/* harmony export */   TEXT_TAG_OPTIONS: () => (/* binding */ TEXT_TAG_OPTIONS),
/* harmony export */   cssVars: () => (/* binding */ cssVars),
/* harmony export */   typoOnChange: () => (/* binding */ typoOnChange),
/* harmony export */   typoValues: () => (/* binding */ typoValues),
/* harmony export */   typoVars: () => (/* binding */ typoVars),
/* harmony export */   useSiteInfo: () => (/* binding */ useSiteInfo)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Site name, tagline, and URL for editor previews. Reads the public REST
 * index (`__unstableBase`), so it works for every user who can edit a
 * template, not only administrators.
 *
 * @return {{ name: string, description: string, url: string, isResolving: boolean }}
 */

function useSiteInfo() {
  return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    const base = select('core').getEntityRecord('root', '__unstableBase');
    return {
      name: base?.name || '',
      description: base?.description || '',
      url: base?.home || base?.url || '',
      siteLogo: base?.site_logo || 0,
      isResolving: !base
    };
  }, []);
}
const TYPO_KEYS = ['FontFamily', 'FontSize', 'FontWeight', 'LineHeight', 'LetterSpacing', 'TextTransform', 'TextDecoration'];

/**
 * Maps `<prefix>FontSize`-style attributes to the `values` object that
 * TypographyControls expects.
 *
 * @param {Object} attributes Block attributes.
 * @param {string} prefix     Attribute prefix, e.g. 'input'.
 * @return {Object}
 */
function typoValues(attributes, prefix) {
  const values = {};
  TYPO_KEYS.forEach(key => {
    values[key.charAt(0).toLowerCase() + key.slice(1)] = attributes[prefix + key];
  });
  return values;
}

/**
 * The matching `onChange( key, value )` for TypographyControls.
 *
 * @param {Function} setAttributes Block setAttributes.
 * @param {string}   prefix        Attribute prefix, e.g. 'input'.
 * @return {Function}
 */
function typoOnChange(setAttributes, prefix) {
  return (key, value) => setAttributes({
    [prefix + key.charAt(0).toUpperCase() + key.slice(1)]: value
  });
}

/**
 * Editor-side twin of Bpafb_Pro_Site_Blocks::typography_vars().
 *
 * @param {Object} attributes Block attributes.
 * @param {string} prefix     Attribute prefix, e.g. 'input'.
 * @param {string} varPrefix  CSS variable prefix, e.g. '--bpafb-search-input'.
 * @return {Object}
 */
function typoVars(attributes, prefix, varPrefix) {
  const v = typoValues(attributes, prefix);
  const out = {};
  if (v.fontFamily) out[`${varPrefix}-font-family`] = v.fontFamily;
  if (typeof v.fontSize === 'number') out[`${varPrefix}-font-size`] = `${v.fontSize}px`;
  if (v.fontWeight) out[`${varPrefix}-font-weight`] = v.fontWeight;
  if (typeof v.lineHeight === 'number') out[`${varPrefix}-line-height`] = v.lineHeight;
  if (typeof v.letterSpacing === 'number') out[`${varPrefix}-letter-spacing`] = `${v.letterSpacing}px`;
  if (v.textTransform) out[`${varPrefix}-text-transform`] = v.textTransform;
  if (v.textDecoration) out[`${varPrefix}-text-decoration`] = v.textDecoration;
  return out;
}

/**
 * Drops empty values and adds `px` to numbers, for inline CSS variables.
 *
 * @param {Object} vars CSS variable name => value (number = px).
 * @return {Object}
 */
function cssVars(vars) {
  const out = {};
  Object.entries(vars).forEach(([key, value]) => {
    if (value === undefined || value === null || value === '') {
      return;
    }
    out[key] = typeof value === 'number' ? `${value}px` : value;
  });
  return out;
}
const TEXT_TAG_OPTIONS = [{
  label: 'H1',
  value: 'h1'
}, {
  label: 'H2',
  value: 'h2'
}, {
  label: 'H3',
  value: 'h3'
}, {
  label: 'H4',
  value: 'h4'
}, {
  label: 'H5',
  value: 'h5'
}, {
  label: 'H6',
  value: 'h6'
}, {
  label: 'p',
  value: 'p'
}, {
  label: 'div',
  value: 'div'
}, {
  label: 'span',
  value: 'span'
}];

/**
 * Inline SVG icons shared by the editor previews. The render.php files
 * print the same paths (see icons.php).
 */
const ICON_PATHS = {
  search: 'M10.5 3a7.5 7.5 0 0 1 5.93 12.1l4.24 4.24-1.41 1.41-4.24-4.24A7.5 7.5 0 1 1 10.5 3Zm0 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z',
  cart: 'M7 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm10 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM1 2h3.27l.94 2H21a1 1 0 0 1 .96 1.27l-2.5 9A1 1 0 0 1 18.5 15H8.1l-.9 2H19v2H5.6a1 1 0 0 1-.9-1.45L6.2 14.5 3 4H1V2Zm5.14 4 1.84 7h9.76l1.94-7H6.14Z',
  bag: 'M7 7V6a5 5 0 0 1 10 0v1h3a1 1 0 0 1 1 1v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a1 1 0 0 1 1-1h3Zm2 0h6V6a3 3 0 0 0-6 0v1Zm-4 2v11h14V9h-2v2h-2V9H9v2H7V9H5Z',
  basket: 'M17.21 9 13 2.7a1 1 0 0 0-1.66 1.1L14.8 9H9.2l3.45-5.2L11 2.7 6.79 9H2a1 1 0 0 0-.97 1.24l2.54 9.27A2 2 0 0 0 5.5 21h13a2 2 0 0 0 1.93-1.49l2.55-9.27A1 1 0 0 0 22 9h-4.79ZM12 17a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z',
  close: 'M6.4 5 12 10.6 17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6L6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5Z'
};
function SvgIcon({
  name,
  size
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: "bpafb-tb-svg-icon",
    width: size || 20,
    height: size || 20,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: ICON_PATHS[name] || ICON_PATHS.search
    })
  });
}

/***/ },

/***/ "./src/icon-list/style.css"
/*!*********************************!*\
  !*** ./src/icon-list/style.css ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/pro-components/icon-picker/editor.css"
/*!***************************************************!*\
  !*** ./src/pro-components/icon-picker/editor.css ***!
  \***************************************************/
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

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

/***/ },

/***/ "./src/icon-list/block.json"
/*!**********************************!*\
  !*** ./src/icon-list/block.json ***!
  \**********************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"blockive-premium-addon-for-block/icon-list","version":"1.0.0","title":"Icon List","category":"bpafb-widgets","icon":"editor-ul","description":"A list of items with icons and optional links: contact details, features, or footer links.","keywords":["icon list","list","features","contact","links"],"textdomain":"blockive-premium-addon-for-block-pro","example":{},"attributes":{"items":{"type":"array","default":[{"text":"List Item #1","icon":"fa-solid fa-check","url":"","newTab":false},{"text":"List Item #2","icon":"fa-solid fa-check","url":"","newTab":false},{"text":"List Item #3","icon":"fa-solid fa-check","url":"","newTab":false}]},"layout":{"type":"string","default":"vertical"},"align":{"type":"string","default":"left"},"alignMobile":{"type":"string","default":""},"spaceBetween":{"type":"number","default":8},"showDivider":{"type":"boolean","default":false},"dividerStyle":{"type":"string","default":"solid"},"dividerWidth":{"type":"number","default":1},"dividerColor":{"type":"string","default":""},"iconSize":{"type":"number","default":14},"iconColor":{"type":"string","default":""},"iconHoverColor":{"type":"string","default":""},"iconGap":{"type":"number","default":10},"iconVAlign":{"type":"string","default":"center"},"textFontFamily":{"type":"string","default":""},"textFontSize":{"type":"number"},"textFontWeight":{"type":"string","default":""},"textLineHeight":{"type":"number"},"textLetterSpacing":{"type":"number"},"textTextTransform":{"type":"string","default":""},"textTextDecoration":{"type":"string","default":""},"textColor":{"type":"string","default":""},"textHoverColor":{"type":"string","default":""},"bpafbUid":{"type":"string","default":""},"bpafbDisplay":{"type":"string","default":""},"bpafbOverflow":{"type":"string","default":""},"bpafbPosition":{"type":"string","default":""},"bpafbContainerWidth":{"type":"number"},"bpafbContainerWidthUnit":{"type":"string","default":"px"},"bpafbContainerMinHeight":{"type":"number"},"bpafbContainerMaxHeight":{"type":"number"},"bpafbContainerBgType":{"type":"string","default":"color"},"bpafbContainerBgColor":{"type":"string","default":""},"bpafbContainerBgGradient":{"type":"string","default":""},"bpafbContainerBgImageUrl":{"type":"string","default":""},"bpafbContainerBgImageId":{"type":"number","default":0},"bpafbContainerBgImageSize":{"type":"string","default":"cover"},"bpafbContainerOverlayColor":{"type":"string","default":""},"bpafbContainerBorderStyle":{"type":"string","default":"none"},"bpafbContainerBorderWidth":{"type":"number"},"bpafbContainerBorderRadius":{"type":"number"},"bpafbContainerBorderColor":{"type":"string","default":""},"bpafbContainerBoxShadow":{"type":"boolean","default":false},"bpafbContainerShadowColor":{"type":"string","default":"rgba(0,0,0,0.15)"},"bpafbContainerShadowBlur":{"type":"number","default":15},"bpafbContainerShadowSpread":{"type":"number","default":0},"bpafbContainerHoverBoxShadow":{"type":"boolean","default":false},"bpafbContainerHoverShadowColor":{"type":"string","default":"rgba(0,0,0,0.15)"},"bpafbContainerHoverShadowBlur":{"type":"number","default":15},"bpafbContainerHoverShadowSpread":{"type":"number","default":0},"bpafbHideDesktop":{"type":"boolean","default":false},"bpafbHideTablet":{"type":"boolean","default":false},"bpafbHideMobile":{"type":"boolean","default":false},"bpafbAnimationType":{"type":"string","default":"none"},"bpafbAnimationDuration":{"type":"number","default":800},"bpafbAnimationDelay":{"type":"number","default":0},"bpafbAnimationEasing":{"type":"string","default":"ease"},"bpafbTransformRotate":{"type":"number","default":0},"bpafbTransformScale":{"type":"number","default":100},"bpafbTransformTranslateX":{"type":"number","default":0},"bpafbTransformTranslateY":{"type":"number","default":0},"bpafbHoverAnimation":{"type":"string","default":"none"},"bpafbFloatingEffect":{"type":"boolean","default":false},"bpafbZIndex":{"type":"number"},"bpafbHtmlId":{"type":"string","default":""},"bpafbHtmlClasses":{"type":"string","default":""},"bpafbCustomCss":{"type":"string","default":""},"bpafbContainerAlign":{"type":"string","default":""},"bpafbContainerPaddingTop":{"type":"number"},"bpafbContainerMarginTop":{"type":"number"},"bpafbContainerPaddingRight":{"type":"number"},"bpafbContainerMarginRight":{"type":"number"},"bpafbContainerPaddingBottom":{"type":"number"},"bpafbContainerMarginBottom":{"type":"number"},"bpafbContainerPaddingLeft":{"type":"number"},"bpafbContainerMarginLeft":{"type":"number"},"bpafbContainerPaddingTopTablet":{"type":"number"},"bpafbContainerMarginTopTablet":{"type":"number"},"bpafbContainerPaddingRightTablet":{"type":"number"},"bpafbContainerMarginRightTablet":{"type":"number"},"bpafbContainerPaddingBottomTablet":{"type":"number"},"bpafbContainerMarginBottomTablet":{"type":"number"},"bpafbContainerPaddingLeftTablet":{"type":"number"},"bpafbContainerMarginLeftTablet":{"type":"number"},"bpafbContainerPaddingTopMobile":{"type":"number"},"bpafbContainerMarginTopMobile":{"type":"number"},"bpafbContainerPaddingRightMobile":{"type":"number"},"bpafbContainerMarginRightMobile":{"type":"number"},"bpafbContainerPaddingBottomMobile":{"type":"number"},"bpafbContainerMarginBottomMobile":{"type":"number"},"bpafbContainerPaddingLeftMobile":{"type":"number"},"bpafbContainerMarginLeftMobile":{"type":"number"}},"supports":{"html":false,"anchor":true},"render":"file:./render.php","editorScript":"file:./index.js","style":"file:./style-index.css","editorStyle":"file:./index.css"}');

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
/******/ 			"icon-list/index": 0,
/******/ 			"icon-list/style-index": 0
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
/******/ 	let __webpack_exports__ = __webpack_require__.O(undefined, ["icon-list/style-index"], () => (__webpack_require__("./src/icon-list/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map