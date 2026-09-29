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

/***/ "./src/template-blocks/index.js"
/*!**************************************!*\
  !*** ./src/template-blocks/index.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/template-blocks/style.css");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post */ "./src/template-blocks/post/index.js");
/* harmony import */ var _pro_teasers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pro-teasers */ "./src/template-blocks/pro-teasers/index.js");
/**
 * One combined file for the editor code of every Blockive Template Block.
 *
 * This is the only place that calls registerBlockType() for these blocks.
 * Their block.json files do not list an `editorScript`. Instead, this file
 * is loaded by hand, only on the `blockive_template` editor screen (see
 * Bpafb_Template_Blocks::enqueue_editor_assets). That is what keeps these
 * blocks out of every other editor's block list, while render.php still
 * works wherever a template is shown on the live site.
 */


// Post / Core Template Blocks.


// Pro-only Template Blocks (WooCommerce, Events, Dynamic Field). These are
// just locked "(Pro)" placeholders here, shown in the block list.


/***/ },

/***/ "./src/template-blocks/post/author-avatar/edit.js"
/*!********************************************************!*\
  !*** ./src/template-blocks/post/author-avatar/edit.js ***!
  \********************************************************/
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
/* harmony import */ var _components_inspector_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/inspector-tabs */ "./src/components/inspector-tabs/index.js");
/* harmony import */ var _components_advanced_tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/advanced-tab */ "./src/components/advanced-tab/index.js");
/* harmony import */ var _components_border_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/border-controls */ "./src/components/border-controls/index.js");
/* harmony import */ var _components_shadow_controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/shadow-controls */ "./src/components/shadow-controls/index.js");
/* harmony import */ var _shared_use_preview_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/use-preview-context */ "./src/template-blocks/shared/use-preview-context.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);









function Edit({
  attributes,
  setAttributes
}) {
  const {
    size,
    borderRadius,
    borderType,
    borderWidth,
    borderColor,
    shadowEnabled,
    shadowColor,
    shadowBlur,
    shadowSpread
  } = attributes;
  const {
    record,
    isResolving
  } = (0,_shared_use_preview_context__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const avatarUrls = record?._embedded?.author?.[0]?.avatar_urls;
  const previewAvatarUrl = avatarUrls ? avatarUrls['96'] || avatarUrls['48'] || avatarUrls['24'] || Object.values(avatarUrls)[0] : null;
  const customStyles = {
    '--bpafb-aa-size': `${size || 96}px`,
    '--bpafb-aa-radius': `${borderRadius !== undefined ? borderRadius : 9999}px`,
    '--bpafb-aa-shadow': (0,_components_shadow_controls__WEBPACK_IMPORTED_MODULE_6__.getShadowStyle)({
      enabled: shadowEnabled,
      color: shadowColor,
      blur: shadowBlur,
      spread: shadowSpread
    }),
    ...(0,_components_border_controls__WEBPACK_IMPORTED_MODULE_5__.getBorderStyles)({
      borderType,
      borderWidth,
      borderColor
    }, '--bpafb-aa')
  };
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: 'bpafb-tb-author-avatar',
    style: customStyles
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_inspector_tabs__WEBPACK_IMPORTED_MODULE_3__["default"], {
      general: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Avatar', 'blockive-premium-addon-for-block'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Avatar Size (px)', 'blockive-premium-addon-for-block'),
          value: size,
          onChange: value => setAttributes({
            size: value
          }),
          min: 16,
          max: 400
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border Radius (px)', 'blockive-premium-addon-for-block'),
          value: borderRadius,
          onChange: value => setAttributes({
            borderRadius: value
          }),
          min: 0,
          max: 9999
        })]
      }),
      style: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border', 'blockive-premium-addon-for-block'),
          initialOpen: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_border_controls__WEBPACK_IMPORTED_MODULE_5__["default"], {
            values: {
              borderType,
              borderWidth,
              borderColor
            },
            onChange: (key, value) => setAttributes({
              [key]: value
            }),
            showRadius: false
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Shadow', 'blockive-premium-addon-for-block'),
          initialOpen: false,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_shadow_controls__WEBPACK_IMPORTED_MODULE_6__["default"], {
            hasHover: false,
            normalValues: {
              enabled: shadowEnabled,
              color: shadowColor,
              blur: shadowBlur,
              spread: shadowSpread
            },
            onNormalChange: (key, value) => {
              const map = {
                enabled: 'shadowEnabled',
                color: 'shadowColor',
                blur: 'shadowBlur',
                spread: 'shadowSpread'
              };
              setAttributes({
                [map[key]]: value
              });
            }
          })
        })]
      }),
      advanced: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_advanced_tab__WEBPACK_IMPORTED_MODULE_4__["default"], {
        attributes: attributes,
        setAttributes: setAttributes
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      ...blockProps,
      children: previewAvatarUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
        src: previewAvatarUrl,
        alt: "",
        width: size,
        height: size
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "bpafb-tb-author-avatar-placeholder",
        children: isResolving ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Loading…', 'blockive-premium-addon-for-block') : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
          className: "fa-regular fa-circle-user",
          "aria-hidden": "true"
        })
      })
    })]
  });
}

/***/ },

/***/ "./src/template-blocks/post/author-avatar/index.js"
/*!*********************************************************!*\
  !*** ./src/template-blocks/post/author-avatar/index.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style-index.css */ "./src/template-blocks/post/author-avatar/style-index.css");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/template-blocks/post/author-avatar/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/template-blocks/post/author-avatar/block.json");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  ..._block_json__WEBPACK_IMPORTED_MODULE_3__,
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: () => null
});

/***/ },

/***/ "./src/template-blocks/post/author/edit.js"
/*!*************************************************!*\
  !*** ./src/template-blocks/post/author/edit.js ***!
  \*************************************************/
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
/* harmony import */ var _components_inspector_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/inspector-tabs */ "./src/components/inspector-tabs/index.js");
/* harmony import */ var _components_advanced_tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/advanced-tab */ "./src/components/advanced-tab/index.js");
/* harmony import */ var _shared_use_preview_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/use-preview-context */ "./src/template-blocks/shared/use-preview-context.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







const DISPLAY_FORMAT_OPTIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Display Name', 'blockive-premium-addon-for-block'),
  value: 'display_name'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('First Name', 'blockive-premium-addon-for-block'),
  value: 'first_name'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Last Name', 'blockive-premium-addon-for-block'),
  value: 'last_name'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Nickname', 'blockive-premium-addon-for-block'),
  value: 'nickname'
}];
function Edit({
  attributes,
  setAttributes
}) {
  const {
    displayFormat,
    isLink,
    linkTarget,
    textAlign,
    textHoverColor
  } = attributes;
  const {
    record,
    isResolving
  } = (0,_shared_use_preview_context__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const previewName = (0,_shared_use_preview_context__WEBPACK_IMPORTED_MODULE_5__.getEmbeddedAuthorName)(record);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: 'bpafb-tb-author',
    style: {
      textAlign: textAlign || undefined
    }
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.AlignmentControl, {
        value: textAlign,
        onChange: value => setAttributes({
          textAlign: value
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_inspector_tabs__WEBPACK_IMPORTED_MODULE_3__["default"], {
      general: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Settings', 'blockive-premium-addon-for-block'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Display Format', 'blockive-premium-addon-for-block'),
          value: displayFormat,
          options: DISPLAY_FORMAT_OPTIONS,
          onChange: value => setAttributes({
            displayFormat: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Link to Author Archive', 'blockive-premium-addon-for-block'),
          checked: !!isLink,
          onChange: value => setAttributes({
            isLink: value
          })
        }), isLink && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Open in New Tab', 'blockive-premium-addon-for-block'),
          checked: linkTarget === '_blank',
          onChange: value => setAttributes({
            linkTarget: value ? '_blank' : '_self'
          })
        })]
      }),
      style: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style', 'blockive-premium-addon-for-block'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Link Hover Color', 'blockive-premium-addon-for-block'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
            value: textHoverColor,
            onChange: value => setAttributes({
              textHoverColor: value
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
          className: "bpafb-help-text",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Font, size, weight, color and other typography options are available in the native Styles panel above.', 'blockive-premium-addon-for-block')
        })]
      }),
      advanced: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_advanced_tab__WEBPACK_IMPORTED_MODULE_4__["default"], {
        attributes: attributes,
        setAttributes: setAttributes
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
      ...blockProps,
      children: isResolving && !previewName ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Loading…', 'blockive-premium-addon-for-block') : previewName || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Jane Doe', 'blockive-premium-addon-for-block')
    })]
  });
}

/***/ },

/***/ "./src/template-blocks/post/author/index.js"
/*!**************************************************!*\
  !*** ./src/template-blocks/post/author/index.js ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style-index.css */ "./src/template-blocks/post/author/style-index.css");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/template-blocks/post/author/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/template-blocks/post/author/block.json");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  ..._block_json__WEBPACK_IMPORTED_MODULE_3__,
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: () => null
});

/***/ },

/***/ "./src/template-blocks/post/breadcrumbs/edit.js"
/*!******************************************************!*\
  !*** ./src/template-blocks/post/breadcrumbs/edit.js ***!
  \******************************************************/
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
/* harmony import */ var _components_inspector_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/inspector-tabs */ "./src/components/inspector-tabs/index.js");
/* harmony import */ var _components_advanced_tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/advanced-tab */ "./src/components/advanced-tab/index.js");
/* harmony import */ var _components_color_state_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/color-state-controls */ "./src/components/color-state-controls/index.js");
/* harmony import */ var _shared_use_preview_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/use-preview-context */ "./src/template-blocks/shared/use-preview-context.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








function Edit({
  attributes,
  setAttributes
}) {
  const {
    separator,
    showHomeIcon,
    homeIcon,
    textColor,
    textHoverColor
  } = attributes;
  const {
    record,
    isResolving
  } = (0,_shared_use_preview_context__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const previewTitle = record?.title?.rendered ? record.title.rendered.replace(/<[^>]+>/g, '') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sample Post Title', 'blockive-premium-addon-for-block');
  const embeddedTerms = record?._embedded?.['wp:term'] || [];
  const previewCategory = embeddedTerms.flat().find(term => term && term.taxonomy === 'category');
  const trail = [{
    key: 'home',
    label: showHomeIcon ? null : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Home', 'blockive-premium-addon-for-block'),
    icon: showHomeIcon ? homeIcon : null
  }, ...(previewCategory ? [{
    key: 'term',
    label: previewCategory.name
  }] : [{
    key: 'term',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Category', 'blockive-premium-addon-for-block')
  }]), {
    key: 'current',
    label: previewTitle,
    current: true
  }];
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: 'bpafb-tb-breadcrumbs',
    style: {
      color: textColor || undefined
    }
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_inspector_tabs__WEBPACK_IMPORTED_MODULE_3__["default"], {
      general: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Settings', 'blockive-premium-addon-for-block'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Separator', 'blockive-premium-addon-for-block'),
          value: separator,
          onChange: value => setAttributes({
            separator: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show Home Icon', 'blockive-premium-addon-for-block'),
          checked: !!showHomeIcon,
          onChange: value => setAttributes({
            showHomeIcon: value
          })
        }), showHomeIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Home Icon (Font Awesome class)', 'blockive-premium-addon-for-block'),
          value: homeIcon,
          onChange: value => setAttributes({
            homeIcon: value
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('e.g. fa-solid fa-house', 'blockive-premium-addon-for-block')
        })]
      }),
      style: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Colors', 'blockive-premium-addon-for-block'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_color_state_controls__WEBPACK_IMPORTED_MODULE_5__["default"], {
          normal: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Link Color', 'blockive-premium-addon-for-block'),
            value: textColor,
            onChange: value => setAttributes({
              textColor: value
            })
          }],
          hover: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Link Color', 'blockive-premium-addon-for-block'),
            value: textHoverColor,
            onChange: value => setAttributes({
              textHoverColor: value
            })
          }]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
          className: "bpafb-help-text",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Font, size, weight and other typography options are available in the native Styles panel above.', 'blockive-premium-addon-for-block')
        })]
      }),
      advanced: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_advanced_tab__WEBPACK_IMPORTED_MODULE_4__["default"], {
        attributes: attributes,
        setAttributes: setAttributes
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("nav", {
      ...blockProps,
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Breadcrumb', 'blockive-premium-addon-for-block'),
      children: isResolving && !record ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Loading…', 'blockive-premium-addon-for-block') : trail.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
        className: "bpafb-tb-breadcrumb-item",
        children: [index > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
          className: "bpafb-tb-breadcrumb-sep",
          children: separator
        }), item.current ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
          className: "bpafb-tb-breadcrumb-current",
          children: item.label
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("a", {
          href: "#breadcrumb-preview",
          onClick: event => event.preventDefault(),
          children: [item.icon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("i", {
            className: item.icon
          }), item.label]
        })]
      }, item.key))
    })]
  });
}

/***/ },

/***/ "./src/template-blocks/post/breadcrumbs/index.js"
/*!*******************************************************!*\
  !*** ./src/template-blocks/post/breadcrumbs/index.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style-index.css */ "./src/template-blocks/post/breadcrumbs/style-index.css");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/template-blocks/post/breadcrumbs/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/template-blocks/post/breadcrumbs/block.json");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  ..._block_json__WEBPACK_IMPORTED_MODULE_3__,
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: () => null
});

/***/ },

/***/ "./src/template-blocks/post/categories/edit.js"
/*!*****************************************************!*\
  !*** ./src/template-blocks/post/categories/edit.js ***!
  \*****************************************************/
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
/* harmony import */ var _components_inspector_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/inspector-tabs */ "./src/components/inspector-tabs/index.js");
/* harmony import */ var _components_advanced_tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/advanced-tab */ "./src/components/advanced-tab/index.js");
/* harmony import */ var _components_color_state_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/color-state-controls */ "./src/components/color-state-controls/index.js");
/* harmony import */ var _shared_use_preview_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/use-preview-context */ "./src/template-blocks/shared/use-preview-context.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








const SAMPLE_CATEGORIES = [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('News', 'blockive-premium-addon-for-block'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Updates', 'blockive-premium-addon-for-block')];
function Edit({
  attributes,
  setAttributes
}) {
  const {
    separator,
    badgeStyle,
    isLink,
    textColor,
    textHoverColor
  } = attributes;
  const {
    record
  } = (0,_shared_use_preview_context__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const embeddedTerms = record?._embedded?.['wp:term'] || [];
  const categoryTerms = embeddedTerms.flat().filter(term => term.taxonomy === 'category');
  const previewCategories = categoryTerms.length ? categoryTerms.map(term => term.name) : SAMPLE_CATEGORIES;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: `bpafb-tb-categories${badgeStyle ? ' bpafb-tb-categories--badges' : ''}`,
    style: {
      color: textColor || undefined
    }
  });
  const renderLabel = name => isLink ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
    className: "bpafb-tb-category-link",
    children: name
  }) : name;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_inspector_tabs__WEBPACK_IMPORTED_MODULE_3__["default"], {
      general: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Settings', 'blockive-premium-addon-for-block'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Badge Style', 'blockive-premium-addon-for-block'),
          checked: !!badgeStyle,
          onChange: value => setAttributes({
            badgeStyle: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Link to Category Archive', 'blockive-premium-addon-for-block'),
          checked: !!isLink,
          onChange: value => setAttributes({
            isLink: value
          })
        }), !badgeStyle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Separator', 'blockive-premium-addon-for-block'),
          value: separator,
          onChange: value => setAttributes({
            separator: value
          })
        })]
      }),
      style: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Colors', 'blockive-premium-addon-for-block'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_color_state_controls__WEBPACK_IMPORTED_MODULE_5__["default"], {
          normal: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text Color', 'blockive-premium-addon-for-block'),
            value: textColor,
            onChange: value => setAttributes({
              textColor: value
            })
          }],
          hover: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text Color', 'blockive-premium-addon-for-block'),
            value: textHoverColor,
            onChange: value => setAttributes({
              textHoverColor: value
            })
          }]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
          className: "bpafb-help-text",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Font size, weight and other typography options are available in the native Styles panel above.', 'blockive-premium-addon-for-block')
        })]
      }),
      advanced: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_advanced_tab__WEBPACK_IMPORTED_MODULE_4__["default"], {
        attributes: attributes,
        setAttributes: setAttributes
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      ...blockProps,
      children: previewCategories.map((name, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
        className: "bpafb-tb-category-item",
        children: [index > 0 && !badgeStyle && separator && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
          className: "bpafb-tb-category-sep",
          children: separator
        }), renderLabel(name)]
      }, index))
    })]
  });
}

/***/ },

/***/ "./src/template-blocks/post/categories/index.js"
/*!******************************************************!*\
  !*** ./src/template-blocks/post/categories/index.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style-index.css */ "./src/template-blocks/post/categories/style-index.css");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/template-blocks/post/categories/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/template-blocks/post/categories/block.json");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  ..._block_json__WEBPACK_IMPORTED_MODULE_3__,
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: () => null
});

/***/ },

/***/ "./src/template-blocks/post/comments-count/edit.js"
/*!*********************************************************!*\
  !*** ./src/template-blocks/post/comments-count/edit.js ***!
  \*********************************************************/
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
/* harmony import */ var _components_inspector_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/inspector-tabs */ "./src/components/inspector-tabs/index.js");
/* harmony import */ var _components_advanced_tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/advanced-tab */ "./src/components/advanced-tab/index.js");
/* harmony import */ var _shared_use_preview_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/use-preview-context */ "./src/template-blocks/shared/use-preview-context.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







const SAMPLE_COUNT = 5;

/**
 * Mirrors the render.php formatting logic: replaces the {count} token and,
 * for the default-shaped format, swaps the plural "Comments" word for the
 * singular "Comment" when the count is 1.
 */
function formatCommentsLabel(format, count) {
  let label = format || '{count} Comments';
  if (count === 1) {
    label = label.replace(/\bComments\b/i, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Comment', 'blockive-premium-addon-for-block'));
  }
  return label.replace('{count}', count);
}
function Edit({
  attributes,
  setAttributes
}) {
  const {
    icon,
    format,
    isLink,
    textHoverColor
  } = attributes;
  const {
    isResolving
  } = (0,_shared_use_preview_context__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: 'bpafb-tb-comments-count'
  });
  const label = formatCommentsLabel(format, SAMPLE_COUNT);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_inspector_tabs__WEBPACK_IMPORTED_MODULE_3__["default"], {
      general: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Settings', 'blockive-premium-addon-for-block'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Icon (Font Awesome class)', 'blockive-premium-addon-for-block'),
          value: icon,
          onChange: value => setAttributes({
            icon: value
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('e.g. fa-regular fa-comment', 'blockive-premium-addon-for-block')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text Format', 'blockive-premium-addon-for-block'),
          value: format,
          onChange: value => setAttributes({
            format: value
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Use {count} as a placeholder for the comment count.', 'blockive-premium-addon-for-block')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Link to Comments', 'blockive-premium-addon-for-block'),
          checked: !!isLink,
          onChange: value => setAttributes({
            isLink: value
          })
        })]
      }),
      style: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Colors', 'blockive-premium-addon-for-block'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Link Hover Color', 'blockive-premium-addon-for-block'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
            value: textHoverColor,
            onChange: value => setAttributes({
              textHoverColor: value
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
          className: "bpafb-help-text",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text and typography options are available in the native Styles panel above.', 'blockive-premium-addon-for-block')
        })]
      }),
      advanced: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_advanced_tab__WEBPACK_IMPORTED_MODULE_4__["default"], {
        attributes: attributes,
        setAttributes: setAttributes
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
      ...blockProps,
      children: isResolving ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Loading…', 'blockive-premium-addon-for-block') : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
        href: "#comments-preview",
        onClick: event => event.preventDefault(),
        className: isLink ? '' : 'bpafb-tb-comments-count-nolink',
        children: [icon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("i", {
          className: icon
        }), " ", label]
      })
    })]
  });
}

/***/ },

/***/ "./src/template-blocks/post/comments-count/index.js"
/*!**********************************************************!*\
  !*** ./src/template-blocks/post/comments-count/index.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style-index.css */ "./src/template-blocks/post/comments-count/style-index.css");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/template-blocks/post/comments-count/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/template-blocks/post/comments-count/block.json");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  ..._block_json__WEBPACK_IMPORTED_MODULE_3__,
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: () => null
});

/***/ },

/***/ "./src/template-blocks/post/featured-image/edit.js"
/*!*********************************************************!*\
  !*** ./src/template-blocks/post/featured-image/edit.js ***!
  \*********************************************************/
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
/* harmony import */ var _components_inspector_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/inspector-tabs */ "./src/components/inspector-tabs/index.js");
/* harmony import */ var _components_advanced_tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/advanced-tab */ "./src/components/advanced-tab/index.js");
/* harmony import */ var _components_border_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/border-controls */ "./src/components/border-controls/index.js");
/* harmony import */ var _components_shadow_controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/shadow-controls */ "./src/components/shadow-controls/index.js");
/* harmony import */ var _shared_use_preview_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/use-preview-context */ "./src/template-blocks/shared/use-preview-context.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);









const SIZE_OPTIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Thumbnail', 'blockive-premium-addon-for-block'),
  value: 'thumbnail'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Medium', 'blockive-premium-addon-for-block'),
  value: 'medium'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Large', 'blockive-premium-addon-for-block'),
  value: 'large'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Full Size', 'blockive-premium-addon-for-block'),
  value: 'full'
}];
const ASPECT_OPTIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Original', 'blockive-premium-addon-for-block'),
  value: ''
}, {
  label: '1:1',
  value: '1/1'
}, {
  label: '4:3',
  value: '4/3'
}, {
  label: '3:2',
  value: '3/2'
}, {
  label: '16:9',
  value: '16/9'
}, {
  label: '21:9',
  value: '21/9'
}];
const OBJECT_FIT_OPTIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Cover', 'blockive-premium-addon-for-block'),
  value: 'cover'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Contain', 'blockive-premium-addon-for-block'),
  value: 'contain'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Fill', 'blockive-premium-addon-for-block'),
  value: 'fill'
}];
const HOVER_EFFECT_OPTIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('None', 'blockive-premium-addon-for-block'),
  value: 'none'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Zoom In', 'blockive-premium-addon-for-block'),
  value: 'zoom'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Grayscale to Color', 'blockive-premium-addon-for-block'),
  value: 'grayscale'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Darken', 'blockive-premium-addon-for-block'),
  value: 'darken'
}];
function Edit({
  attributes,
  setAttributes
}) {
  const {
    imageSize,
    aspectRatio,
    borderRadius,
    objectFit,
    lazyLoad,
    isLink,
    overlayColor,
    hoverEffect,
    borderType,
    borderWidth,
    borderColor,
    shadowEnabled,
    shadowColor,
    shadowBlur,
    shadowSpread
  } = attributes;
  const {
    record,
    isResolving
  } = (0,_shared_use_preview_context__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const previewImageUrl = (0,_shared_use_preview_context__WEBPACK_IMPORTED_MODULE_7__.getEmbeddedFeaturedImageUrl)(record, imageSize);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: `bpafb-tb-featured-image bpafb-fi-hover-${hoverEffect || 'none'}${overlayColor ? ' bpafb-has-overlay' : ''}`,
    style: {
      aspectRatio: aspectRatio || undefined,
      borderRadius: borderRadius ? `${borderRadius}px` : undefined,
      overflow: borderRadius ? 'hidden' : undefined,
      '--bpafb-fi-overlay-color': overlayColor || undefined,
      '--bpafb-fi-shadow': (0,_components_shadow_controls__WEBPACK_IMPORTED_MODULE_6__.getShadowStyle)({
        enabled: shadowEnabled,
        color: shadowColor,
        blur: shadowBlur,
        spread: shadowSpread
      }),
      ...(0,_components_border_controls__WEBPACK_IMPORTED_MODULE_5__.getBorderStyles)({
        borderType,
        borderWidth,
        borderColor
      }, '--bpafb-fi')
    }
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_inspector_tabs__WEBPACK_IMPORTED_MODULE_3__["default"], {
      general: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image', 'blockive-premium-addon-for-block'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image Size', 'blockive-premium-addon-for-block'),
          value: imageSize,
          options: SIZE_OPTIONS,
          onChange: value => setAttributes({
            imageSize: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Aspect Ratio', 'blockive-premium-addon-for-block'),
          value: aspectRatio,
          options: ASPECT_OPTIONS,
          onChange: value => setAttributes({
            aspectRatio: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Object Fit', 'blockive-premium-addon-for-block'),
          value: objectFit,
          options: OBJECT_FIT_OPTIONS,
          onChange: value => setAttributes({
            objectFit: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Lazy Load', 'blockive-premium-addon-for-block'),
          checked: !!lazyLoad,
          onChange: value => setAttributes({
            lazyLoad: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Link to Post', 'blockive-premium-addon-for-block'),
          checked: !!isLink,
          onChange: value => setAttributes({
            isLink: value
          })
        })]
      }),
      style: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style', 'blockive-premium-addon-for-block'),
          initialOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border Radius (px)', 'blockive-premium-addon-for-block'),
            value: borderRadius,
            onChange: value => setAttributes({
              borderRadius: value
            }),
            min: 0,
            max: 100
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hover Effect', 'blockive-premium-addon-for-block'),
            value: hoverEffect,
            options: HOVER_EFFECT_OPTIONS,
            onChange: value => setAttributes({
              hoverEffect: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Overlay Color', 'blockive-premium-addon-for-block'),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
              value: overlayColor,
              onChange: value => setAttributes({
                overlayColor: value
              })
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border', 'blockive-premium-addon-for-block'),
          initialOpen: false,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_border_controls__WEBPACK_IMPORTED_MODULE_5__["default"], {
            values: {
              borderType,
              borderWidth,
              borderColor
            },
            onChange: (key, value) => setAttributes({
              [key]: value
            }),
            showRadius: false
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Shadow', 'blockive-premium-addon-for-block'),
          initialOpen: false,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_shadow_controls__WEBPACK_IMPORTED_MODULE_6__["default"], {
            hasHover: false,
            normalValues: {
              enabled: shadowEnabled,
              color: shadowColor,
              blur: shadowBlur,
              spread: shadowSpread
            },
            onNormalChange: (key, value) => {
              const map = {
                enabled: 'shadowEnabled',
                color: 'shadowColor',
                blur: 'shadowBlur',
                spread: 'shadowSpread'
              };
              setAttributes({
                [map[key]]: value
              });
            }
          })
        })]
      }),
      advanced: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_advanced_tab__WEBPACK_IMPORTED_MODULE_4__["default"], {
        attributes: attributes,
        setAttributes: setAttributes
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("figure", {
      ...blockProps,
      children: [previewImageUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
        src: previewImageUrl,
        alt: "",
        style: {
          objectFit,
          width: '100%',
          height: '100%'
        }
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "bpafb-tb-featured-image-placeholder",
        children: isResolving ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Loading…', 'blockive-premium-addon-for-block') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Featured Image Placeholder', 'blockive-premium-addon-for-block')
      }), overlayColor && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
        className: "bpafb-tb-fi-overlay"
      })]
    })]
  });
}

/***/ },

/***/ "./src/template-blocks/post/featured-image/index.js"
/*!**********************************************************!*\
  !*** ./src/template-blocks/post/featured-image/index.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style-index.css */ "./src/template-blocks/post/featured-image/style-index.css");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/template-blocks/post/featured-image/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/template-blocks/post/featured-image/block.json");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  ..._block_json__WEBPACK_IMPORTED_MODULE_3__,
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: () => null
});

/***/ },

/***/ "./src/template-blocks/post/featured-video/edit.js"
/*!*********************************************************!*\
  !*** ./src/template-blocks/post/featured-video/edit.js ***!
  \*********************************************************/
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
/* harmony import */ var _components_inspector_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/inspector-tabs */ "./src/components/inspector-tabs/index.js");
/* harmony import */ var _components_advanced_tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/advanced-tab */ "./src/components/advanced-tab/index.js");
/* harmony import */ var _components_border_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/border-controls */ "./src/components/border-controls/index.js");
/* harmony import */ var _components_shadow_controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/shadow-controls */ "./src/components/shadow-controls/index.js");
/* harmony import */ var _shared_use_preview_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/use-preview-context */ "./src/template-blocks/shared/use-preview-context.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);









const ASPECT_OPTIONS = [{
  label: '16:9',
  value: '16/9'
}, {
  label: '4:3',
  value: '4/3'
}, {
  label: '1:1',
  value: '1/1'
}, {
  label: '21:9',
  value: '21/9'
}];
function Edit({
  attributes,
  setAttributes
}) {
  const {
    videoUrl,
    metaKey,
    autoDetect,
    aspectRatio,
    borderRadius,
    borderType,
    borderWidth,
    borderColor,
    shadowEnabled,
    shadowColor,
    shadowBlur,
    shadowSpread
  } = attributes;
  const {
    isResolving
  } = (0,_shared_use_preview_context__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: 'bpafb-tb-featured-video',
    style: {
      aspectRatio: aspectRatio || undefined,
      '--bpafb-fv-shadow': (0,_components_shadow_controls__WEBPACK_IMPORTED_MODULE_6__.getShadowStyle)({
        enabled: shadowEnabled,
        color: shadowColor,
        blur: shadowBlur,
        spread: shadowSpread
      }),
      ...(0,_components_border_controls__WEBPACK_IMPORTED_MODULE_5__.getBorderStyles)({
        borderType,
        borderWidth,
        borderRadius,
        borderColor
      }, '--bpafb-fv')
    }
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_inspector_tabs__WEBPACK_IMPORTED_MODULE_3__["default"], {
      general: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Video', 'blockive-premium-addon-for-block'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Featured Video Meta Key', 'blockive-premium-addon-for-block'),
          value: metaKey,
          onChange: value => setAttributes({
            metaKey: value
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Reads this post meta key first, if it holds a URL.', 'blockive-premium-addon-for-block')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Auto Detect', 'blockive-premium-addon-for-block'),
          checked: !!autoDetect,
          onChange: value => setAttributes({
            autoDetect: value
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Use a video found in the post content or the featured media, if it is a video.', 'blockive-premium-addon-for-block')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Video URL (fallback)', 'blockive-premium-addon-for-block'),
          value: videoUrl,
          onChange: value => setAttributes({
            videoUrl: value
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('YouTube, Vimeo, or a direct .mp4/.webm/.ogg URL. Used when no meta value or auto-detected video is found.', 'blockive-premium-addon-for-block')
        })]
      }),
      style: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style', 'blockive-premium-addon-for-block'),
          initialOpen: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Aspect Ratio', 'blockive-premium-addon-for-block'),
            value: aspectRatio,
            options: ASPECT_OPTIONS,
            onChange: value => setAttributes({
              aspectRatio: value
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border', 'blockive-premium-addon-for-block'),
          initialOpen: false,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_border_controls__WEBPACK_IMPORTED_MODULE_5__["default"], {
            values: {
              borderType,
              borderWidth,
              borderRadius,
              borderColor
            },
            onChange: (key, value) => setAttributes({
              [key]: value
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Shadow', 'blockive-premium-addon-for-block'),
          initialOpen: false,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_shadow_controls__WEBPACK_IMPORTED_MODULE_6__["default"], {
            hasHover: false,
            normalValues: {
              enabled: shadowEnabled,
              color: shadowColor,
              blur: shadowBlur,
              spread: shadowSpread
            },
            onNormalChange: (key, value) => {
              const map = {
                enabled: 'shadowEnabled',
                color: 'shadowColor',
                blur: 'shadowBlur',
                spread: 'shadowSpread'
              };
              setAttributes({
                [map[key]]: value
              });
            }
          })
        })]
      }),
      advanced: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_advanced_tab__WEBPACK_IMPORTED_MODULE_4__["default"], {
        attributes: attributes,
        setAttributes: setAttributes
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      ...blockProps,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "bpafb-tb-featured-video-placeholder",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
          className: "fa-solid fa-circle-play"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
          children: isResolving ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Loading…', 'blockive-premium-addon-for-block') : videoUrl ? videoUrl : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Featured Video Placeholder', 'blockive-premium-addon-for-block')
        })]
      })
    })]
  });
}

/***/ },

/***/ "./src/template-blocks/post/featured-video/index.js"
/*!**********************************************************!*\
  !*** ./src/template-blocks/post/featured-video/index.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style-index.css */ "./src/template-blocks/post/featured-video/style-index.css");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/template-blocks/post/featured-video/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/template-blocks/post/featured-video/block.json");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  ..._block_json__WEBPACK_IMPORTED_MODULE_3__,
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: () => null
});

/***/ },

/***/ "./src/template-blocks/post/index.js"
/*!*******************************************!*\
  !*** ./src/template-blocks/post/index.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _post_title__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post-title */ "./src/template-blocks/post/post-title/index.js");
/* harmony import */ var _featured_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./featured-image */ "./src/template-blocks/post/featured-image/index.js");
/* harmony import */ var _post_meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-meta */ "./src/template-blocks/post/post-meta/index.js");
/* harmony import */ var _post_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-content */ "./src/template-blocks/post/post-content/index.js");
/* harmony import */ var _author__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./author */ "./src/template-blocks/post/author/index.js");
/* harmony import */ var _author_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./author-avatar */ "./src/template-blocks/post/author-avatar/index.js");
/* harmony import */ var _publish_date__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./publish-date */ "./src/template-blocks/post/publish-date/index.js");
/* harmony import */ var _modified_date__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modified-date */ "./src/template-blocks/post/modified-date/index.js");
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./categories */ "./src/template-blocks/post/categories/index.js");
/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tags */ "./src/template-blocks/post/tags/index.js");
/* harmony import */ var _comments_count__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comments-count */ "./src/template-blocks/post/comments-count/index.js");
/* harmony import */ var _breadcrumbs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./breadcrumbs */ "./src/template-blocks/post/breadcrumbs/index.js");
/* harmony import */ var _reading_time__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reading-time */ "./src/template-blocks/post/reading-time/index.js");
/* harmony import */ var _featured_video__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./featured-video */ "./src/template-blocks/post/featured-video/index.js");
/* harmony import */ var _related_posts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./related-posts */ "./src/template-blocks/post/related-posts/index.js");
/* harmony import */ var _previous_next_navigation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./previous-next-navigation */ "./src/template-blocks/post/previous-next-navigation/index.js");

















/***/ },

/***/ "./src/template-blocks/post/modified-date/edit.js"
/*!********************************************************!*\
  !*** ./src/template-blocks/post/modified-date/edit.js ***!
  \********************************************************/
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
/* harmony import */ var _components_inspector_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/inspector-tabs */ "./src/components/inspector-tabs/index.js");
/* harmony import */ var _components_advanced_tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/advanced-tab */ "./src/components/advanced-tab/index.js");
/* harmony import */ var _shared_use_preview_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/use-preview-context */ "./src/template-blocks/shared/use-preview-context.js");
/* harmony import */ var _shared_format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/format */ "./src/template-blocks/shared/format.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








// Static stand-in ISO date used whenever no real preview record is available
// yet, so the Format/Relative Time options still visibly update instead of
// leaving the editor preview blank.

const PLACEHOLDER_DATE = '2026-01-02T14:30:00';
function Edit({
  attributes,
  setAttributes
}) {
  const {
    dateFormat,
    relative
  } = attributes;
  const {
    record
  } = (0,_shared_use_preview_context__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const previewDateSource = record?.modified || record?.date || PLACEHOLDER_DATE;
  const previewDateText = (0,_shared_format__WEBPACK_IMPORTED_MODULE_6__.formatPreviewDate)(previewDateSource, {
    format: dateFormat,
    relative
  });
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: 'bpafb-tb-modified-date'
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_inspector_tabs__WEBPACK_IMPORTED_MODULE_3__["default"], {
      general: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Settings', 'blockive-premium-addon-for-block'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Date Format', 'blockive-premium-addon-for-block'),
          value: dateFormat,
          onChange: value => setAttributes({
            dateFormat: value
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('PHP date format string, e.g. F j, Y. Leave empty for the site default.', 'blockive-premium-addon-for-block')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Relative Time', 'blockive-premium-addon-for-block'),
          checked: !!relative,
          onChange: value => setAttributes({
            relative: value
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show "2 days ago" style relative time instead of a formatted date.', 'blockive-premium-addon-for-block')
        })]
      }),
      style: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style', 'blockive-premium-addon-for-block'),
        initialOpen: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
          className: "bpafb-help-text",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Font size and text color options are available in the native Styles panel above.', 'blockive-premium-addon-for-block')
        })
      }),
      advanced: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_advanced_tab__WEBPACK_IMPORTED_MODULE_4__["default"], {
        attributes: attributes,
        setAttributes: setAttributes
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
      ...blockProps,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("time", {
        children: previewDateText
      })
    })]
  });
}

/***/ },

/***/ "./src/template-blocks/post/modified-date/index.js"
/*!*********************************************************!*\
  !*** ./src/template-blocks/post/modified-date/index.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style-index.css */ "./src/template-blocks/post/modified-date/style-index.css");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/template-blocks/post/modified-date/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/template-blocks/post/modified-date/block.json");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  ..._block_json__WEBPACK_IMPORTED_MODULE_3__,
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: () => null
});

/***/ },

/***/ "./src/template-blocks/post/post-content/edit.js"
/*!*******************************************************!*\
  !*** ./src/template-blocks/post/post-content/edit.js ***!
  \*******************************************************/
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
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_inspector_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/inspector-tabs */ "./src/components/inspector-tabs/index.js");
/* harmony import */ var _components_advanced_tab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/advanced-tab */ "./src/components/advanced-tab/index.js");
/* harmony import */ var _shared_use_preview_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/use-preview-context */ "./src/template-blocks/shared/use-preview-context.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








function Edit({
  attributes,
  setAttributes
}) {
  const {
    displayMode,
    maxWidth,
    dropCap,
    textAlign,
    linkHoverColor
  } = attributes;
  const {
    record,
    isResolving
  } = (0,_shared_use_preview_context__WEBPACK_IMPORTED_MODULE_6__["default"])();
  let previewHtml;
  if (displayMode === 'excerpt') {
    const rawExcerpt = record?.excerpt?.rendered ? record.excerpt.rendered.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() : '';
    const placeholder = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('This is a sample excerpt. A short summary of the post content will be displayed here.', 'blockive-premium-addon-for-block');
    previewHtml = `<p>${rawExcerpt || (!isResolving ? placeholder : '')}</p>`;
  } else {
    const rawHtml = record?.content?.rendered || '';
    const placeholderHtml = `<p>${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('This is sample post content. The full post content will be displayed here dynamically when this template is used on a real post.', 'blockive-premium-addon-for-block')}</p>`;
    previewHtml = rawHtml || (!isResolving ? placeholderHtml : '');
  }
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: `bpafb-tb-post-content${dropCap ? ' bpafb-has-drop-cap' : ''}`,
    style: {
      textAlign: textAlign || undefined,
      maxWidth: maxWidth ? `${maxWidth}px` : undefined
    }
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.AlignmentControl, {
        value: textAlign,
        onChange: value => setAttributes({
          textAlign: value
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_inspector_tabs__WEBPACK_IMPORTED_MODULE_4__["default"], {
      general: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Content', 'blockive-premium-addon-for-block'),
        initialOpen: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Display', 'blockive-premium-addon-for-block'),
          value: displayMode,
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Full Content', 'blockive-premium-addon-for-block'),
            value: 'full'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Excerpt', 'blockive-premium-addon-for-block'),
            value: 'excerpt'
          }],
          onChange: value => setAttributes({
            displayMode: value
          })
        })
      }),
      style: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style', 'blockive-premium-addon-for-block'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Max Width (px, 0 = none)', 'blockive-premium-addon-for-block'),
          value: maxWidth,
          onChange: value => setAttributes({
            maxWidth: value
          }),
          min: 0,
          max: 1600
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Drop Cap', 'blockive-premium-addon-for-block'),
          checked: !!dropCap,
          onChange: value => setAttributes({
            dropCap: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Link Hover Color', 'blockive-premium-addon-for-block'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
            value: linkHoverColor,
            onChange: value => setAttributes({
              linkHoverColor: value
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
          className: "bpafb-help-text",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Font, size, weight, color and other typography options are available in the native Styles panel above.', 'blockive-premium-addon-for-block')
        })]
      }),
      advanced: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_advanced_tab__WEBPACK_IMPORTED_MODULE_5__["default"], {
        attributes: attributes,
        setAttributes: setAttributes
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      ...blockProps,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.RawHTML, {
        children: previewHtml
      })
    })]
  });
}

/***/ },

/***/ "./src/template-blocks/post/post-content/index.js"
/*!********************************************************!*\
  !*** ./src/template-blocks/post/post-content/index.js ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style-index.css */ "./src/template-blocks/post/post-content/style-index.css");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/template-blocks/post/post-content/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/template-blocks/post/post-content/block.json");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  ..._block_json__WEBPACK_IMPORTED_MODULE_3__,
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: () => null
});

/***/ },

/***/ "./src/template-blocks/post/post-meta/edit.js"
/*!****************************************************!*\
  !*** ./src/template-blocks/post/post-meta/edit.js ***!
  \****************************************************/
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
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_inspector_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/inspector-tabs */ "./src/components/inspector-tabs/index.js");
/* harmony import */ var _components_advanced_tab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/advanced-tab */ "./src/components/advanced-tab/index.js");
/* harmony import */ var _shared_use_preview_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/use-preview-context */ "./src/template-blocks/shared/use-preview-context.js");
/* harmony import */ var _shared_format__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/format */ "./src/template-blocks/shared/format.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);









const LABELS = {
  date: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Date', 'blockive-premium-addon-for-block'),
  author: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Author', 'blockive-premium-addon-for-block'),
  categories: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Categories', 'blockive-premium-addon-for-block'),
  tags: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Tags', 'blockive-premium-addon-for-block'),
  comments: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Comments', 'blockive-premium-addon-for-block'),
  readingTime: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Reading Time', 'blockive-premium-addon-for-block')
};
const SAMPLE_VALUES = {
  date: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('January 1, 2026', 'blockive-premium-addon-for-block'),
  author: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Jane Doe', 'blockive-premium-addon-for-block'),
  categories: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('News', 'blockive-premium-addon-for-block'),
  tags: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sample Tag', 'blockive-premium-addon-for-block'),
  comments: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('3 Comments', 'blockive-premium-addon-for-block'),
  readingTime: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('4 min read', 'blockive-premium-addon-for-block')
};

// Mirrors the icon assigned to each item key in Bpafb_Post_Meta_Items::get_html()
// (includes/class-bpafb-post-meta-items.php) so the editor preview matches the
// frontend exactly instead of falling back to a generic icon.
const ICONS = {
  date: 'fa-regular fa-calendar',
  author: 'fa-regular fa-user',
  categories: 'fa-regular fa-folder',
  tags: 'fa-solid fa-tags',
  comments: 'fa-regular fa-comment',
  readingTime: 'fa-regular fa-clock'
};

/**
 * Minimal HTML5 drag-and-drop reorderable list. @wordpress/components has no
 * built-in sortable list, so this implements just enough drag-and-drop to
 * reorder the `items` attribute array without pulling in a new dependency.
 */
function ReorderableItemsList({
  items,
  onChange
}) {
  const [dragIndex, setDragIndex] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  const moveItem = (from, to) => {
    if (from === to || from == null || to == null) {
      return;
    }
    const next = [...items];
    const [moved] = next.splice(from, 1);
    next.splice(to, 0, moved);
    onChange(next);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("ul", {
    className: "bpafb-post-meta-reorder-list",
    children: items.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("li", {
      className: "bpafb-post-meta-reorder-item",
      draggable: true,
      onDragStart: () => setDragIndex(index),
      onDragOver: event => event.preventDefault(),
      onDrop: event => {
        event.preventDefault();
        moveItem(dragIndex, index);
        setDragIndex(null);
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
        className: "bpafb-post-meta-drag-handle",
        "aria-hidden": "true",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
          className: "fa-solid fa-grip-vertical"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
        label: LABELS[item.key] || item.key,
        checked: !!item.enabled,
        onChange: checked => {
          const next = items.map((it, i) => i === index ? {
            ...it,
            enabled: checked
          } : it);
          onChange(next);
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        icon: "arrow-up-alt2",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Move up', 'blockive-premium-addon-for-block'),
        onClick: () => moveItem(index, index - 1),
        disabled: index === 0,
        size: "small"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        icon: "arrow-down-alt2",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Move down', 'blockive-premium-addon-for-block'),
        onClick: () => moveItem(index, index + 1),
        disabled: index === items.length - 1,
        size: "small"
      })]
    }, item.key))
  });
}
function Edit({
  attributes,
  setAttributes
}) {
  const {
    items,
    separator,
    showIcons,
    linkHoverColor
  } = attributes;
  const {
    record
  } = (0,_shared_use_preview_context__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: 'bpafb-tb-post-meta'
  });
  const previewValue = key => {
    if (!record) {
      return SAMPLE_VALUES[key];
    }
    switch (key) {
      case 'date':
        return (0,_shared_format__WEBPACK_IMPORTED_MODULE_7__.formatPreviewDate)(record.date);
      default:
        return SAMPLE_VALUES[key];
    }
  };
  const enabledItems = items.filter(item => item.enabled);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_inspector_tabs__WEBPACK_IMPORTED_MODULE_4__["default"], {
      general: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Meta Items', 'blockive-premium-addon-for-block'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
          className: "bpafb-help-text",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Drag to reorder. Toggle to show or hide.', 'blockive-premium-addon-for-block')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ReorderableItemsList, {
          items: items,
          onChange: next => setAttributes({
            items: next
          })
        })]
      }),
      style: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style', 'blockive-premium-addon-for-block'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Separator', 'blockive-premium-addon-for-block'),
          value: separator,
          onChange: value => setAttributes({
            separator: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show Icons', 'blockive-premium-addon-for-block'),
          checked: !!showIcons,
          onChange: value => setAttributes({
            showIcons: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Link Hover Color', 'blockive-premium-addon-for-block'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
            value: linkHoverColor,
            onChange: value => setAttributes({
              linkHoverColor: value
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
          className: "bpafb-help-text",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Applies to any linked items (Categories, Tags) within this block.', 'blockive-premium-addon-for-block')
        })]
      }),
      advanced: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_advanced_tab__WEBPACK_IMPORTED_MODULE_5__["default"], {
        attributes: attributes,
        setAttributes: setAttributes
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      ...blockProps,
      children: enabledItems.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
        className: "bpafb-tb-post-meta-item",
        children: [index > 0 && separator && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
          className: "bpafb-tb-post-meta-sep",
          children: separator
        }), showIcons && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
          className: ICONS[item.key] || 'fa-regular fa-circle'
        }), ' ', previewValue(item.key)]
      }, item.key))
    })]
  });
}

/***/ },

/***/ "./src/template-blocks/post/post-meta/index.js"
/*!*****************************************************!*\
  !*** ./src/template-blocks/post/post-meta/index.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style-index.css */ "./src/template-blocks/post/post-meta/style-index.css");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/template-blocks/post/post-meta/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/template-blocks/post/post-meta/block.json");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  ..._block_json__WEBPACK_IMPORTED_MODULE_3__,
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: () => null
});

/***/ },

/***/ "./src/template-blocks/post/post-title/edit.js"
/*!*****************************************************!*\
  !*** ./src/template-blocks/post/post-title/edit.js ***!
  \*****************************************************/
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
/* harmony import */ var _components_inspector_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/inspector-tabs */ "./src/components/inspector-tabs/index.js");
/* harmony import */ var _components_advanced_tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/advanced-tab */ "./src/components/advanced-tab/index.js");
/* harmony import */ var _components_color_state_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/color-state-controls */ "./src/components/color-state-controls/index.js");
/* harmony import */ var _shared_use_preview_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/use-preview-context */ "./src/template-blocks/shared/use-preview-context.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








const TAG_OPTIONS = [{
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
  label: 'Div',
  value: 'div'
}, {
  label: 'Span',
  value: 'span'
}];
function Edit({
  attributes,
  setAttributes
}) {
  const {
    tagName,
    textAlign,
    isLink,
    linkTarget,
    textColor,
    textHoverColor
  } = attributes;
  const {
    record,
    isResolving
  } = (0,_shared_use_preview_context__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const previewTitle = record?.title?.rendered ? record.title.rendered.replace(/<[^>]+>/g, '') : null;
  const TagName = tagName || 'h2';
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: 'bpafb-tb-post-title',
    style: {
      textAlign: textAlign || undefined,
      color: textColor || undefined
    }
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.AlignmentControl, {
        value: textAlign,
        onChange: value => setAttributes({
          textAlign: value
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_inspector_tabs__WEBPACK_IMPORTED_MODULE_3__["default"], {
      general: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Settings', 'blockive-premium-addon-for-block'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('HTML Tag', 'blockive-premium-addon-for-block'),
          value: TagName,
          options: TAG_OPTIONS,
          onChange: value => setAttributes({
            tagName: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Link to Post', 'blockive-premium-addon-for-block'),
          checked: !!isLink,
          onChange: value => setAttributes({
            isLink: value
          })
        }), isLink && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Open in New Tab', 'blockive-premium-addon-for-block'),
          checked: linkTarget === '_blank',
          onChange: value => setAttributes({
            linkTarget: value ? '_blank' : '_self'
          })
        })]
      }),
      style: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Colors', 'blockive-premium-addon-for-block'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_color_state_controls__WEBPACK_IMPORTED_MODULE_5__["default"], {
          normal: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text Color', 'blockive-premium-addon-for-block'),
            value: textColor,
            onChange: value => setAttributes({
              textColor: value
            })
          }],
          hover: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text Color', 'blockive-premium-addon-for-block'),
            value: textHoverColor,
            onChange: value => setAttributes({
              textHoverColor: value
            })
          }]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
          className: "bpafb-help-text",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Font, size, weight and other typography options are available in the native Styles panel above.', 'blockive-premium-addon-for-block')
        })]
      }),
      advanced: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_advanced_tab__WEBPACK_IMPORTED_MODULE_4__["default"], {
        attributes: attributes,
        setAttributes: setAttributes
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(TagName, {
      ...blockProps,
      children: isResolving && !previewTitle ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Loading…', 'blockive-premium-addon-for-block') : previewTitle || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sample Post Title', 'blockive-premium-addon-for-block')
    })]
  });
}

/***/ },

/***/ "./src/template-blocks/post/post-title/index.js"
/*!******************************************************!*\
  !*** ./src/template-blocks/post/post-title/index.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style-index.css */ "./src/template-blocks/post/post-title/style-index.css");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/template-blocks/post/post-title/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/template-blocks/post/post-title/block.json");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  ..._block_json__WEBPACK_IMPORTED_MODULE_3__,
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: () => null
});

/***/ },

/***/ "./src/template-blocks/post/previous-next-navigation/edit.js"
/*!*******************************************************************!*\
  !*** ./src/template-blocks/post/previous-next-navigation/edit.js ***!
  \*******************************************************************/
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
/* harmony import */ var _components_inspector_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/inspector-tabs */ "./src/components/inspector-tabs/index.js");
/* harmony import */ var _components_advanced_tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/advanced-tab */ "./src/components/advanced-tab/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const HOVER_STYLE_OPTIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('None', 'blockive-premium-addon-for-block'),
  value: 'none'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Underline', 'blockive-premium-addon-for-block'),
  value: 'underline'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Slide', 'blockive-premium-addon-for-block'),
  value: 'slide'
}];
function Edit({
  attributes,
  setAttributes
}) {
  const {
    prevLabel,
    nextLabel,
    prevIcon,
    nextIcon,
    hoverStyle,
    inSameTerm,
    linkHoverColor
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: `bpafb-tb-prev-next-nav bpafb-hover-${hoverStyle || 'none'}`
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_inspector_tabs__WEBPACK_IMPORTED_MODULE_3__["default"], {
      general: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Settings', 'blockive-premium-addon-for-block'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Previous Label', 'blockive-premium-addon-for-block'),
          value: prevLabel,
          onChange: value => setAttributes({
            prevLabel: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Previous Icon (Font Awesome class)', 'blockive-premium-addon-for-block'),
          value: prevIcon,
          onChange: value => setAttributes({
            prevIcon: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Next Label', 'blockive-premium-addon-for-block'),
          value: nextLabel,
          onChange: value => setAttributes({
            nextLabel: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Next Icon (Font Awesome class)', 'blockive-premium-addon-for-block'),
          value: nextIcon,
          onChange: value => setAttributes({
            nextIcon: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Stay in Same Category', 'blockive-premium-addon-for-block'),
          checked: !!inSameTerm,
          onChange: value => setAttributes({
            inSameTerm: value
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Only link to adjacent posts sharing a category with the current post.', 'blockive-premium-addon-for-block')
        })]
      }),
      style: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style', 'blockive-premium-addon-for-block'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hover Style', 'blockive-premium-addon-for-block'),
          value: hoverStyle,
          options: HOVER_STYLE_OPTIONS,
          onChange: value => setAttributes({
            hoverStyle: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Link Hover Color', 'blockive-premium-addon-for-block'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
            value: linkHoverColor,
            onChange: value => setAttributes({
              linkHoverColor: value
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          className: "bpafb-help-text",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text and typography options are available in the native Styles panel above.', 'blockive-premium-addon-for-block')
        })]
      }),
      advanced: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_advanced_tab__WEBPACK_IMPORTED_MODULE_4__["default"], {
        attributes: attributes,
        setAttributes: setAttributes
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      ...blockProps,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
        href: "#prev-preview",
        className: "bpafb-tb-prev-next-link bpafb-tb-prev-link",
        onClick: event => event.preventDefault(),
        children: [prevIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
          className: prevIcon
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
          className: "bpafb-tb-prev-next-text",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "bpafb-tb-prev-next-label",
            children: prevLabel
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "bpafb-tb-prev-next-title",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sample Previous Post', 'blockive-premium-addon-for-block')
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
        href: "#next-preview",
        className: "bpafb-tb-prev-next-link bpafb-tb-next-link",
        onClick: event => event.preventDefault(),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
          className: "bpafb-tb-prev-next-text",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "bpafb-tb-prev-next-label",
            children: nextLabel
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "bpafb-tb-prev-next-title",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sample Next Post', 'blockive-premium-addon-for-block')
          })]
        }), nextIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
          className: nextIcon
        })]
      })]
    })]
  });
}

/***/ },

/***/ "./src/template-blocks/post/previous-next-navigation/index.js"
/*!********************************************************************!*\
  !*** ./src/template-blocks/post/previous-next-navigation/index.js ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style-index.css */ "./src/template-blocks/post/previous-next-navigation/style-index.css");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/template-blocks/post/previous-next-navigation/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/template-blocks/post/previous-next-navigation/block.json");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  ..._block_json__WEBPACK_IMPORTED_MODULE_3__,
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: () => null
});

/***/ },

/***/ "./src/template-blocks/post/publish-date/edit.js"
/*!*******************************************************!*\
  !*** ./src/template-blocks/post/publish-date/edit.js ***!
  \*******************************************************/
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
/* harmony import */ var _components_inspector_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/inspector-tabs */ "./src/components/inspector-tabs/index.js");
/* harmony import */ var _components_advanced_tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/advanced-tab */ "./src/components/advanced-tab/index.js");
/* harmony import */ var _shared_use_preview_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/use-preview-context */ "./src/template-blocks/shared/use-preview-context.js");
/* harmony import */ var _shared_format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/format */ "./src/template-blocks/shared/format.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








// Static stand-in ISO date used whenever no real preview record is available
// yet, so the Format/Relative Time options still visibly update instead of
// leaving the editor preview blank.

const PLACEHOLDER_DATE = '2026-01-01T09:00:00';
function Edit({
  attributes,
  setAttributes
}) {
  const {
    dateFormat,
    relative,
    icon
  } = attributes;
  const {
    record
  } = (0,_shared_use_preview_context__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const previewDateSource = record?.date || PLACEHOLDER_DATE;
  const previewDateText = (0,_shared_format__WEBPACK_IMPORTED_MODULE_6__.formatPreviewDate)(previewDateSource, {
    format: dateFormat,
    relative
  });
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: 'bpafb-tb-publish-date'
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_inspector_tabs__WEBPACK_IMPORTED_MODULE_3__["default"], {
      general: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Settings', 'blockive-premium-addon-for-block'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Date Format', 'blockive-premium-addon-for-block'),
          value: dateFormat,
          onChange: value => setAttributes({
            dateFormat: value
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('PHP date format string, e.g. F j, Y. Leave empty for the site default.', 'blockive-premium-addon-for-block')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Relative Time', 'blockive-premium-addon-for-block'),
          checked: !!relative,
          onChange: value => setAttributes({
            relative: value
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show "2 days ago" style relative time instead of a formatted date.', 'blockive-premium-addon-for-block')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Icon (Font Awesome class)', 'blockive-premium-addon-for-block'),
          value: icon,
          onChange: value => setAttributes({
            icon: value
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('e.g. fa-regular fa-calendar. Leave empty to hide the icon.', 'blockive-premium-addon-for-block')
        })]
      }),
      style: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style', 'blockive-premium-addon-for-block'),
        initialOpen: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
          className: "bpafb-help-text",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Font, size, weight and text color options are available in the native Styles panel above.', 'blockive-premium-addon-for-block')
        })
      }),
      advanced: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_advanced_tab__WEBPACK_IMPORTED_MODULE_4__["default"], {
        attributes: attributes,
        setAttributes: setAttributes
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
      ...blockProps,
      children: [icon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("i", {
        className: icon,
        "aria-hidden": "true"
      }), ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("time", {
        children: previewDateText
      })]
    })]
  });
}

/***/ },

/***/ "./src/template-blocks/post/publish-date/index.js"
/*!********************************************************!*\
  !*** ./src/template-blocks/post/publish-date/index.js ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style-index.css */ "./src/template-blocks/post/publish-date/style-index.css");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/template-blocks/post/publish-date/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/template-blocks/post/publish-date/block.json");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  ..._block_json__WEBPACK_IMPORTED_MODULE_3__,
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: () => null
});

/***/ },

/***/ "./src/template-blocks/post/reading-time/edit.js"
/*!*******************************************************!*\
  !*** ./src/template-blocks/post/reading-time/edit.js ***!
  \*******************************************************/
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
/* harmony import */ var _components_inspector_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/inspector-tabs */ "./src/components/inspector-tabs/index.js");
/* harmony import */ var _components_advanced_tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/advanced-tab */ "./src/components/advanced-tab/index.js");
/* harmony import */ var _shared_use_preview_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/use-preview-context */ "./src/template-blocks/shared/use-preview-context.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







const SAMPLE_WORD_COUNT = 850;
function stripTags(html) {
  return (html || '').replace(/<[^>]+>/g, ' ');
}
function countWords(text) {
  const trimmed = text.trim();
  return trimmed ? trimmed.split(/\s+/).length : 0;
}
function Edit({
  attributes,
  setAttributes
}) {
  const {
    wpm,
    icon,
    prefix,
    suffix
  } = attributes;
  const {
    record,
    isResolving
  } = (0,_shared_use_preview_context__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const wordCount = record?.content?.rendered ? countWords(stripTags(record.content.rendered)) : SAMPLE_WORD_COUNT;
  const minutes = Math.max(1, Math.ceil(wordCount / (wpm || 200)));
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: 'bpafb-tb-reading-time'
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_inspector_tabs__WEBPACK_IMPORTED_MODULE_3__["default"], {
      general: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Settings', 'blockive-premium-addon-for-block'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Words Per Minute', 'blockive-premium-addon-for-block'),
          value: wpm,
          onChange: value => setAttributes({
            wpm: value
          }),
          min: 50,
          max: 500
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Icon (Font Awesome class)', 'blockive-premium-addon-for-block'),
          value: icon,
          onChange: value => setAttributes({
            icon: value
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('e.g. fa-regular fa-clock', 'blockive-premium-addon-for-block')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Prefix', 'blockive-premium-addon-for-block'),
          value: prefix,
          onChange: value => setAttributes({
            prefix: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Suffix', 'blockive-premium-addon-for-block'),
          value: suffix,
          onChange: value => setAttributes({
            suffix: value
          })
        })]
      }),
      style: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Colors', 'blockive-premium-addon-for-block'),
        initialOpen: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
          className: "bpafb-help-text",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text and typography options are available in the native Styles panel above.', 'blockive-premium-addon-for-block')
        })
      }),
      advanced: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_advanced_tab__WEBPACK_IMPORTED_MODULE_4__["default"], {
        attributes: attributes,
        setAttributes: setAttributes
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
      ...blockProps,
      children: isResolving && !record ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Loading…', 'blockive-premium-addon-for-block') : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: [icon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("i", {
          className: icon
        }), ' ', prefix, minutes, suffix]
      })
    })]
  });
}

/***/ },

/***/ "./src/template-blocks/post/reading-time/index.js"
/*!********************************************************!*\
  !*** ./src/template-blocks/post/reading-time/index.js ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style-index.css */ "./src/template-blocks/post/reading-time/style-index.css");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/template-blocks/post/reading-time/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/template-blocks/post/reading-time/block.json");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  ..._block_json__WEBPACK_IMPORTED_MODULE_3__,
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: () => null
});

/***/ },

/***/ "./src/template-blocks/post/related-posts/edit.js"
/*!********************************************************!*\
  !*** ./src/template-blocks/post/related-posts/edit.js ***!
  \********************************************************/
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
/* harmony import */ var _components_inspector_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/inspector-tabs */ "./src/components/inspector-tabs/index.js");
/* harmony import */ var _components_advanced_tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/advanced-tab */ "./src/components/advanced-tab/index.js");
/* harmony import */ var _components_color_state_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/color-state-controls */ "./src/components/color-state-controls/index.js");
/* harmony import */ var _components_typography_controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/typography-controls */ "./src/components/typography-controls/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








const LAYOUT_OPTIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Grid', 'blockive-premium-addon-for-block'),
  value: 'grid'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Slider', 'blockive-premium-addon-for-block'),
  value: 'slider'
}];
const CARD_STYLE_OPTIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Modern Card (Elevated)', 'blockive-premium-addon-for-block'),
  value: 'modern'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bordered Clean', 'blockive-premium-addon-for-block'),
  value: 'bordered'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Flat Soft', 'blockive-premium-addon-for-block'),
  value: 'flat'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Minimal Editorial', 'blockive-premium-addon-for-block'),
  value: 'minimal'
}];
const CONTENT_TYPE_OPTIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Limited Words', 'blockive-premium-addon-for-block'),
  value: 'limited'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Full Content', 'blockive-premium-addon-for-block'),
  value: 'full'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('None', 'blockive-premium-addon-for-block'),
  value: 'none'
}];
const ORDER_BY_OPTIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Date', 'blockive-premium-addon-for-block'),
  value: 'date'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title', 'blockive-premium-addon-for-block'),
  value: 'title'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Random', 'blockive-premium-addon-for-block'),
  value: 'rand'
}];
const ORDER_OPTIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Descending', 'blockive-premium-addon-for-block'),
  value: 'desc'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Ascending', 'blockive-premium-addon-for-block'),
  value: 'asc'
}];
function Edit({
  attributes,
  setAttributes
}) {
  const {
    numberOfPosts = 3,
    layout = 'grid',
    columns = 3,
    gridGap = 24,
    sliderColumns = 3,
    sliderAutoplay = false,
    sliderAutoplaySpeed = 3000,
    sliderLoop = false,
    sliderShowArrows = true,
    sliderShowDots = true,
    sliderSpaceBetween = 20,
    orderBy = 'date',
    order = 'desc',
    sameCategory = true,
    showImage = true,
    showDate = true,
    contentType = 'limited',
    excerptLength = 20,
    cardStyle = 'modern',
    cardBgColor,
    cardBorderRadius = 16,
    cardPadding = 18,
    cardHoverElevation = true,
    imageZoom = true,
    imageBorderRadius = 12,
    titleColor,
    titleHoverColor,
    titleFontFamily,
    titleFontSize,
    titleFontWeight,
    titleLineHeight,
    titleLetterSpacing,
    titleTextTransform,
    titleTextDecoration,
    dateColor,
    excerptColor
  } = attributes;
  const blockClasses = ['bpafb-tb-related-posts', `bpafb-tb-related-posts-${layout}`, `bpafb-tb-related-posts--style-${cardStyle}`, cardHoverElevation ? 'bpafb-tb-related-posts--hover-elevation' : '', imageZoom ? 'bpafb-tb-related-posts--image-zoom' : ''].filter(Boolean).join(' ');
  const blockStyles = {
    width: '100%',
    maxWidth: '100%',
    boxSizing: 'border-box',
    '--bpafb-rp-columns': columns || 3,
    '--bpafb-rp-gap': `${gridGap ?? 24}px`,
    '--bpafb-rp-card-bg': cardBgColor || undefined,
    '--bpafb-rp-card-radius': `${cardBorderRadius ?? 16}px`,
    '--bpafb-rp-card-padding': `${cardPadding ?? 18}px`,
    '--bpafb-rp-image-radius': `${imageBorderRadius ?? 12}px`,
    '--bpafb-rp-title-color': titleColor || undefined,
    '--bpafb-rp-title-hover-color': titleHoverColor || undefined,
    '--bpafb-rp-date-color': dateColor || undefined,
    '--bpafb-rp-excerpt-color': excerptColor || undefined,
    ...(0,_components_typography_controls__WEBPACK_IMPORTED_MODULE_6__.getTypographyStyles)({
      fontFamily: titleFontFamily,
      fontSize: titleFontSize,
      fontWeight: titleFontWeight,
      lineHeight: titleLineHeight,
      letterSpacing: titleLetterSpacing,
      textTransform: titleTextTransform,
      textDecoration: titleTextDecoration
    }, '--bpafb-rp-title')
  };
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: blockClasses,
    style: blockStyles
  });
  const placeholderCards = Array.from({
    length: Math.min(numberOfPosts || 3, 12)
  });
  const renderCard = (_, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("article", {
    className: "bpafb-tb-related-post-card",
    children: [showImage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: "bpafb-tb-related-post-image bpafb-tb-related-post-image-placeholder",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("svg", {
        width: "40",
        height: "40",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        opacity: "0.4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("rect", {
          width: "18",
          height: "18",
          x: "3",
          y: "3",
          rx: "2",
          ry: "2"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("circle", {
          cx: "9",
          cy: "9",
          r: "2"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("path", {
          d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "bpafb-tb-related-post-content",
      children: [showDate && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
        className: "bpafb-tb-related-post-date",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("svg", {
          width: "12",
          height: "12",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "4",
            rx: "2",
            ry: "2"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("line", {
            x1: "16",
            x2: "16",
            y1: "2",
            y2: "6"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("line", {
            x1: "8",
            x2: "8",
            y1: "2",
            y2: "6"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("line", {
            x1: "3",
            x2: "21",
            y1: "10",
            y2: "10"
          })]
        }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('January 1, 2026', 'blockive-premium-addon-for-block')]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h3", {
        className: "bpafb-tb-related-post-title",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("a", {
          href: "#related-post-preview",
          onClick: event => event.preventDefault(),
          children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sample Related Article', 'blockive-premium-addon-for-block'), " #", index + 1]
        })
      }), contentType !== 'none' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "bpafb-tb-related-post-excerpt",
        children: contentType === 'full' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 'blockive-premium-addon-for-block') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Discover insights, modern strategies, and top trends designed to elevate your website and engage your audience.', 'blockive-premium-addon-for-block')
      })]
    })]
  }, index);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_inspector_tabs__WEBPACK_IMPORTED_MODULE_3__["default"], {
      general: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Layout & Style', 'blockive-premium-addon-for-block'),
          initialOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Card Style Preset', 'blockive-premium-addon-for-block'),
            value: cardStyle,
            options: CARD_STYLE_OPTIONS,
            onChange: value => setAttributes({
              cardStyle: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Layout Mode', 'blockive-premium-addon-for-block'),
            value: layout,
            options: LAYOUT_OPTIONS,
            onChange: value => setAttributes({
              layout: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Total Posts to Fetch', 'blockive-premium-addon-for-block'),
            value: numberOfPosts,
            onChange: value => setAttributes({
              numberOfPosts: value
            }),
            min: 1,
            max: 12
          }), layout === 'grid' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Grid Columns (Desktop)', 'blockive-premium-addon-for-block'),
              value: columns,
              onChange: value => setAttributes({
                columns: value
              }),
              min: 1,
              max: 6
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Grid Gap (px)', 'blockive-premium-addon-for-block'),
              value: gridGap,
              onChange: value => setAttributes({
                gridGap: value
              }),
              min: 0,
              max: 60
            })]
          }), layout === 'slider' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Slides to Show (Desktop)', 'blockive-premium-addon-for-block'),
              value: sliderColumns,
              onChange: value => setAttributes({
                sliderColumns: value
              }),
              min: 1,
              max: 4
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Space Between Slides (px)', 'blockive-premium-addon-for-block'),
              value: sliderSpaceBetween,
              onChange: value => setAttributes({
                sliderSpaceBetween: value
              }),
              min: 0,
              max: 50
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Autoplay', 'blockive-premium-addon-for-block'),
              checked: !!sliderAutoplay,
              onChange: value => setAttributes({
                sliderAutoplay: value
              })
            }), sliderAutoplay && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Autoplay Speed (ms)', 'blockive-premium-addon-for-block'),
              value: sliderAutoplaySpeed,
              onChange: value => setAttributes({
                sliderAutoplaySpeed: value
              }),
              min: 1000,
              max: 10000,
              step: 500
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Infinite Loop', 'blockive-premium-addon-for-block'),
              checked: !!sliderLoop,
              onChange: value => setAttributes({
                sliderLoop: value
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show Navigation Arrows', 'blockive-premium-addon-for-block'),
              checked: !!sliderShowArrows,
              onChange: value => setAttributes({
                sliderShowArrows: value
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show Pagination Dots', 'blockive-premium-addon-for-block'),
              checked: !!sliderShowDots,
              onChange: value => setAttributes({
                sliderShowDots: value
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Query & Relations', 'blockive-premium-addon-for-block'),
          initialOpen: false,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Match Same Category', 'blockive-premium-addon-for-block'),
            checked: !!sameCategory,
            onChange: value => setAttributes({
              sameCategory: value
            }),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Only show posts sharing a category (or primary taxonomy) with current context.', 'blockive-premium-addon-for-block')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Order By', 'blockive-premium-addon-for-block'),
            value: orderBy,
            options: ORDER_BY_OPTIONS,
            onChange: value => setAttributes({
              orderBy: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Order', 'blockive-premium-addon-for-block'),
            value: order,
            options: ORDER_OPTIONS,
            onChange: value => setAttributes({
              order: value
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Card Elements', 'blockive-premium-addon-for-block'),
          initialOpen: false,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show Featured Image', 'blockive-premium-addon-for-block'),
            checked: !!showImage,
            onChange: value => setAttributes({
              showImage: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show Date', 'blockive-premium-addon-for-block'),
            checked: !!showDate,
            onChange: value => setAttributes({
              showDate: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Post Content', 'blockive-premium-addon-for-block'),
            value: contentType,
            options: CONTENT_TYPE_OPTIONS,
            onChange: value => setAttributes({
              contentType: value
            })
          }), contentType === 'limited' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Number of Words', 'blockive-premium-addon-for-block'),
            value: excerptLength,
            onChange: value => setAttributes({
              excerptLength: value
            }),
            min: 5,
            max: 200
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Card Hover Elevation', 'blockive-premium-addon-for-block'),
            checked: !!cardHoverElevation,
            onChange: value => setAttributes({
              cardHoverElevation: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image Hover Zoom Effect', 'blockive-premium-addon-for-block'),
            checked: !!imageZoom,
            onChange: value => setAttributes({
              imageZoom: value
            })
          })]
        })]
      }),
      style: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Card & Spacing', 'blockive-premium-addon-for-block'),
          initialOpen: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Card Border Radius (px)', 'blockive-premium-addon-for-block'),
            value: cardBorderRadius,
            onChange: value => setAttributes({
              cardBorderRadius: value
            }),
            min: 0,
            max: 40
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Card Padding (px)', 'blockive-premium-addon-for-block'),
            value: cardPadding,
            onChange: value => setAttributes({
              cardPadding: value
            }),
            min: 0,
            max: 40
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image Border Radius (px)', 'blockive-premium-addon-for-block'),
            value: imageBorderRadius,
            onChange: value => setAttributes({
              imageBorderRadius: value
            }),
            min: 0,
            max: 30
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Typography & Colors', 'blockive-premium-addon-for-block'),
          initialOpen: false,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_typography_controls__WEBPACK_IMPORTED_MODULE_6__["default"], {
            values: {
              fontFamily: titleFontFamily,
              fontSize: titleFontSize,
              fontWeight: titleFontWeight,
              lineHeight: titleLineHeight,
              letterSpacing: titleLetterSpacing,
              textTransform: titleTextTransform,
              textDecoration: titleTextDecoration
            },
            onChange: (key, value) => setAttributes({
              [`title${key.charAt(0).toUpperCase()}${key.slice(1)}`]: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_color_state_controls__WEBPACK_IMPORTED_MODULE_5__["default"], {
            normal: [{
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title Color', 'blockive-premium-addon-for-block'),
              value: titleColor,
              onChange: value => setAttributes({
                titleColor: value
              })
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Date Color', 'blockive-premium-addon-for-block'),
              value: dateColor,
              onChange: value => setAttributes({
                dateColor: value
              })
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Excerpt / Content Color', 'blockive-premium-addon-for-block'),
              value: excerptColor,
              onChange: value => setAttributes({
                excerptColor: value
              })
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Card Background', 'blockive-premium-addon-for-block'),
              value: cardBgColor,
              onChange: value => setAttributes({
                cardBgColor: value
              })
            }],
            hover: [{
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title Hover Color', 'blockive-premium-addon-for-block'),
              value: titleHoverColor,
              onChange: value => setAttributes({
                titleHoverColor: value
              })
            }]
          })]
        })]
      }),
      advanced: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_advanced_tab__WEBPACK_IMPORTED_MODULE_4__["default"], {
        attributes: attributes,
        setAttributes: setAttributes
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      ...blockProps,
      children: layout === 'slider' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "bpafb-tb-related-posts-slider-editor-wrap",
        style: {
          width: '100%'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "bpafb-tb-related-posts-slider-preview",
          style: {
            display: 'grid',
            width: '100%',
            gridTemplateColumns: `repeat(${Math.min(sliderColumns || 3, placeholderCards.length)}, minmax(0, 1fr))`,
            gap: `${sliderSpaceBetween ?? 20}px`
          },
          children: placeholderCards.slice(0, sliderColumns || 3).map(renderCard)
        }), sliderShowArrows && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "bpafb-tb-slider-preview-arrows",
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '14px',
            padding: '0 4px'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
            className: "bpafb-preview-btn bpafb-preview-btn-prev",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("polyline", {
                points: "15 18 9 12 15 6"
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
            className: "bpafb-preview-btn bpafb-preview-btn-next",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("polyline", {
                points: "9 18 15 12 9 6"
              })
            })
          })]
        }), sliderShowDots && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "bpafb-tb-slider-preview-dots",
          style: {
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '14px'
          },
          children: placeholderCards.map((_, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
            style: {
              width: idx === 0 ? '24px' : '8px',
              height: '8px',
              borderRadius: '999px',
              backgroundColor: idx === 0 ? '#0f172a' : 'rgba(15, 23, 42, 0.25)',
              display: 'inline-block',
              transition: 'all 0.3s ease'
            }
          }, idx))
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "bpafb-tb-related-posts-grid",
        style: {
          display: 'grid',
          width: '100%',
          gridTemplateColumns: `repeat(${columns || 3}, minmax(0, 1fr))`,
          gap: `${gridGap ?? 24}px`
        },
        children: placeholderCards.map(renderCard)
      })
    })]
  });
}

/***/ },

/***/ "./src/template-blocks/post/related-posts/index.js"
/*!*********************************************************!*\
  !*** ./src/template-blocks/post/related-posts/index.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style-index.css */ "./src/template-blocks/post/related-posts/style-index.css");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/template-blocks/post/related-posts/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/template-blocks/post/related-posts/block.json");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  ..._block_json__WEBPACK_IMPORTED_MODULE_3__,
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: () => null
});

/***/ },

/***/ "./src/template-blocks/post/tags/edit.js"
/*!***********************************************!*\
  !*** ./src/template-blocks/post/tags/edit.js ***!
  \***********************************************/
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
/* harmony import */ var _components_inspector_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/inspector-tabs */ "./src/components/inspector-tabs/index.js");
/* harmony import */ var _components_advanced_tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/advanced-tab */ "./src/components/advanced-tab/index.js");
/* harmony import */ var _shared_use_preview_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/use-preview-context */ "./src/template-blocks/shared/use-preview-context.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







const SAMPLE_TAGS = [{
  id: 'sample-1',
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('News', 'blockive-premium-addon-for-block')
}, {
  id: 'sample-2',
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Design', 'blockive-premium-addon-for-block')
}, {
  id: 'sample-3',
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Tips', 'blockive-premium-addon-for-block')
}];
function Edit({
  attributes,
  setAttributes
}) {
  const {
    separator,
    badgeStyle,
    linkHoverColor
  } = attributes;
  const {
    record,
    isResolving
  } = (0,_shared_use_preview_context__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const embeddedTerms = record?._embedded?.['wp:term'] || [];
  const previewTags = embeddedTerms.flat().filter(term => term && term.taxonomy === 'post_tag');
  const tags = previewTags.length ? previewTags : record ? [] : SAMPLE_TAGS;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: `bpafb-tb-tags${badgeStyle ? ' bpafb-tags-badge' : ''}`
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_inspector_tabs__WEBPACK_IMPORTED_MODULE_3__["default"], {
      general: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Settings', 'blockive-premium-addon-for-block'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Separator', 'blockive-premium-addon-for-block'),
          value: separator,
          onChange: value => setAttributes({
            separator: value
          }),
          disabled: !!badgeStyle,
          help: badgeStyle ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Not used in Badge Style.', 'blockive-premium-addon-for-block') : undefined
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Badge Style', 'blockive-premium-addon-for-block'),
          checked: !!badgeStyle,
          onChange: value => setAttributes({
            badgeStyle: value
          })
        })]
      }),
      style: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Colors', 'blockive-premium-addon-for-block'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Link Hover Color', 'blockive-premium-addon-for-block'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
            value: linkHoverColor,
            onChange: value => setAttributes({
              linkHoverColor: value
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
          className: "bpafb-help-text",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text, background and typography options are available in the native Styles panel above.', 'blockive-premium-addon-for-block')
        })]
      }),
      advanced: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_advanced_tab__WEBPACK_IMPORTED_MODULE_4__["default"], {
        attributes: attributes,
        setAttributes: setAttributes
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      ...blockProps,
      children: isResolving && !record ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Loading…', 'blockive-premium-addon-for-block') : tags.length ? tags.map((tag, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
        className: "bpafb-tb-tag-item",
        children: [!badgeStyle && index > 0 && separator && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          className: "bpafb-tb-tag-sep",
          children: separator
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
          href: "#tags-preview",
          className: badgeStyle ? 'bpafb-tb-tag-badge' : 'bpafb-tb-tag-link',
          onClick: event => event.preventDefault(),
          children: tag.name
        })]
      }, tag.id)) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
        className: "bpafb-tb-tags-placeholder",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('No tags', 'blockive-premium-addon-for-block')
      })
    })]
  });
}

/***/ },

/***/ "./src/template-blocks/post/tags/index.js"
/*!************************************************!*\
  !*** ./src/template-blocks/post/tags/index.js ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style-index.css */ "./src/template-blocks/post/tags/style-index.css");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/template-blocks/post/tags/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/template-blocks/post/tags/block.json");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  ..._block_json__WEBPACK_IMPORTED_MODULE_3__,
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: () => null
});

/***/ },

/***/ "./src/template-blocks/pro-teasers/block-list.js"
/*!*******************************************************!*\
  !*** ./src/template-blocks/pro-teasers/block-list.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PRO_TEASER_BLOCKS: () => (/* binding */ PRO_TEASER_BLOCKS)
/* harmony export */ });
/**
 * Registry of the WooCommerce, Events, and Dynamic Field Template Blocks.
 *
 * These blocks aren't implemented in the free version yet - only Post/Page
 * templates are supported so far (see Bpafb_Template_Post_Type::FREE_TEMPLATE_TYPES).
 * They're listed here purely so the inserter can advertise them as "(Pro)"
 * via the teaser block registered for each in ./index.js; slug, title, and
 * icon match what the real blocks used before they shipped.
 */
const PRO_TEASER_BLOCKS = [
// WooCommerce.
{
  slug: 'product-title',
  title: 'Product Title',
  icon: 'editor-textcolor'
}, {
  slug: 'product-gallery',
  title: 'Product Gallery',
  icon: 'format-gallery'
}, {
  slug: 'product-images',
  title: 'Product Images',
  icon: 'format-image'
}, {
  slug: 'product-price',
  title: 'Product Price',
  icon: 'tag'
}, {
  slug: 'product-sale-badge',
  title: 'Sale Badge',
  icon: 'megaphone'
}, {
  slug: 'product-rating',
  title: 'Product Rating',
  icon: 'star-filled'
}, {
  slug: 'product-add-to-cart',
  title: 'Add To Cart',
  icon: 'cart'
}, {
  slug: 'product-sku',
  title: 'Product SKU',
  icon: 'id'
}, {
  slug: 'product-stock',
  title: 'Product Stock',
  icon: 'clipboard'
}, {
  slug: 'product-short-description',
  title: 'Product Short Description',
  icon: 'editor-alignleft'
}, {
  slug: 'product-description',
  title: 'Product Description',
  icon: 'editor-justify'
}, {
  slug: 'product-attributes',
  title: 'Product Attributes',
  icon: 'list-view'
}, {
  slug: 'product-meta',
  title: 'Product Meta',
  icon: 'list-view'
}, {
  slug: 'product-tabs',
  title: 'Product Tabs',
  icon: 'index-card'
}, {
  slug: 'product-variations',
  title: 'Product Variations',
  icon: 'screenoptions'
}, {
  slug: 'product-related',
  title: 'Related Products',
  icon: 'grid-view'
}, {
  slug: 'product-upsells',
  title: 'Upsells',
  icon: 'arrow-up-alt'
}, {
  slug: 'product-cross-sells',
  title: 'Cross Sells',
  icon: 'randomize'
},
// Events.
{
  slug: 'event-title',
  title: 'Event Title',
  icon: 'calendar-alt'
}, {
  slug: 'event-image',
  title: 'Event Image',
  icon: 'format-image'
}, {
  slug: 'event-date',
  title: 'Event Date',
  icon: 'calendar'
}, {
  slug: 'event-time',
  title: 'Event Time',
  icon: 'clock'
}, {
  slug: 'event-venue',
  title: 'Venue',
  icon: 'location-alt'
}, {
  slug: 'event-organizer',
  title: 'Organizer',
  icon: 'admin-users'
}, {
  slug: 'event-cost',
  title: 'Event Cost',
  icon: 'tickets-alt'
}, {
  slug: 'event-map',
  title: 'Event Map',
  icon: 'location'
}, {
  slug: 'event-register-button',
  title: 'Register Button',
  icon: 'megaphone'
},
// Universal Dynamic Field.
{
  slug: 'dynamic-field',
  title: 'Dynamic Field',
  icon: 'editor-code'
}];

/***/ },

/***/ "./src/template-blocks/pro-teasers/icon.js"
/*!*************************************************!*\
  !*** ./src/template-blocks/pro-teasers/icon.js ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   withProBadge: () => (/* binding */ withProBadge)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Overlays a small lock badge on a Dashicon, marking a Template Block as
 * Pro-only in the inserter grid.
 *
 * @param {string} dashicon Dashicon slug (without the "dashicons-" prefix).
 * @return {JSX.Element} Icon element for the block's `icon` setting.
 */
function withProBadge(dashicon) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
    className: "bpafb-pro-teaser-icon",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
      className: `dashicons dashicons-${dashicon}`
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
      className: "dashicons dashicons-lock bpafb-pro-teaser-icon__badge",
      "aria-hidden": "true"
    })]
  });
}

/***/ },

/***/ "./src/template-blocks/pro-teasers/index.js"
/*!**************************************************!*\
  !*** ./src/template-blocks/pro-teasers/index.js ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/template-blocks/pro-teasers/style.css");
/* harmony import */ var _block_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block-list */ "./src/template-blocks/pro-teasers/block-list.js");
/* harmony import */ var _teaser_edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./teaser-edit */ "./src/template-blocks/pro-teasers/teaser-edit.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon */ "./src/template-blocks/pro-teasers/icon.js");
/**
 * Registers "(Pro)" teaser blocks for the WooCommerce, Events, and Dynamic
 * Field Template Blocks, so they're visible (and clearly marked as Pro) in
 * the Blockive Template inserter even though the free version only supports
 * Post/Page templates so far.
 *
 * Each teaser is a purely client-side, static block: no block.json, no
 * render.php, no PHP registration. Inserting one just drops in a locked
 * placeholder (see ./teaser-edit); `save` returns null so nothing is ever
 * output on the frontend.
 */






const NAME_PREFIX = 'blockive-premium-addon-for-block/tb-';
_block_list__WEBPACK_IMPORTED_MODULE_3__.PRO_TEASER_BLOCKS.forEach(({
  slug,
  title,
  icon
}) => {
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(NAME_PREFIX + slug, {
    apiVersion: 3,
    title,
    category: 'blockive-template',
    icon: (0,_icon__WEBPACK_IMPORTED_MODULE_5__.withProBadge)(icon),
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(/* translators: %s: Template Block title, e.g. "Product Price". */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%s - available in Blockive Pro.', 'blockive-premium-addon-for-block'), title),
    keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('pro', 'blockive-premium-addon-for-block')],
    supports: {
      html: false,
      className: false,
      customClassName: false,
      reusable: false
    },
    edit: (0,_teaser_edit__WEBPACK_IMPORTED_MODULE_4__.createTeaserEdit)(title),
    save: () => null
  });
});

/***/ },

/***/ "./src/template-blocks/pro-teasers/teaser-edit.js"
/*!********************************************************!*\
  !*** ./src/template-blocks/pro-teasers/teaser-edit.js ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTeaserEdit: () => (/* binding */ createTeaserEdit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




/**
 * Builds the `edit` component shown when a Pro teaser block is inserted:
 * a locked placeholder, not the real block - these blocks ship with no
 * `render.php` and no server-side registration, so nothing is output on
 * the frontend either.
 *
 * @param {string} title Block title, e.g. "Product Price".
 * @return {Function} React component.
 */

function createTeaserEdit(title) {
  return function TeaserEdit() {
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      ...blockProps,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Placeholder, {
        icon: "lock",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.sprintf)(/* translators: %s: Template Block title, e.g. "Product Price". */
        (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('%s (Pro)', 'blockive-premium-addon-for-block'), title),
        instructions: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('This Template Block is part of Blockive Pro and is not available in the free version yet.', 'blockive-premium-addon-for-block')
      })
    });
  };
}

/***/ },

/***/ "./src/template-blocks/shared/format.js"
/*!**********************************************!*\
  !*** ./src/template-blocks/shared/format.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatPreviewDate: () => (/* binding */ formatPreviewDate)
/* harmony export */ });
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Formats an ISO date string the same way every date-related Template Block
 * (Publish Date, Modified Date, Event Date/Time) formats its editor preview,
 * so behavior matches the PHP render.php side (which uses date_i18n()/
 * human_time_diff()).
 *
 * @param {string} dateString ISO 8601 date.
 * @param {Object} options
 * @param {string} [options.format]   PHP date() format string. Falls back to the site's default date format.
 * @param {boolean} [options.relative] When true, returns a "2 days ago" style relative string instead.
 * @return {string}
 */
function formatPreviewDate(dateString, {
  format,
  relative = false
} = {}) {
  if (!dateString) {
    return '';
  }
  if (relative) {
    return (0,_wordpress_date__WEBPACK_IMPORTED_MODULE_0__.humanTimeDiff)(dateString);
  }
  return (0,_wordpress_date__WEBPACK_IMPORTED_MODULE_0__.dateI18n)(format || 'F j, Y', dateString);
}

/***/ },

/***/ "./src/template-blocks/shared/use-preview-context.js"
/*!***********************************************************!*\
  !*** ./src/template-blocks/shared/use-preview-context.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ usePreviewContext),
/* harmony export */   getEmbeddedAuthorName: () => (/* binding */ getEmbeddedAuthorName),
/* harmony export */   getEmbeddedFeaturedImageUrl: () => (/* binding */ getEmbeddedFeaturedImageUrl)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Gives Template Blocks something real to preview with, in the editor.
 *
 * While editing a `blockive_template`, there is no real post being shown,
 * so each Template Block needs a stand-in post to preview. This gets the
 * newest published post of the given type. If `record` comes back null,
 * the block should show plain placeholder text instead.
 *
 * @param {string} [forcedPostType] Post type to preview. Defaults to the
 *                                  template's own set type, or 'post'.
 * @return {{ postType: string, record: Object|null, isResolving: boolean }}
 */
function usePreviewContext(forcedPostType) {
  return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    const editor = select('core/editor');
    const templateMeta = editor ? editor.getEditedPostAttribute('meta') : undefined;
    const postType = forcedPostType || templateMeta?._bpafb_template_type || 'post';
    const query = {
      per_page: 1,
      orderby: 'date',
      order: 'desc',
      status: 'publish',
      _embed: true
    };
    const records = select('core').getEntityRecords('postType', postType, query);
    const isResolving = select('core').isResolving('getEntityRecords', ['postType', postType, query]);
    return {
      postType,
      record: records && records.length ? records[0] : null,
      isResolving: !!isResolving
    };
  }, [forcedPostType]);
}

/**
 * Gets the featured image URL, at the given size (or the full size if that
 * one is not found), from a preview record's `wp:featuredmedia` data. This
 * is the same shape the REST API returns with `_embed: true`.
 *
 * @param {Object|null} record Entity record fetched with `_embed: true`.
 * @param {string}      [size] Preferred image size key, e.g. 'medium'.
 * @return {string|null}
 */
function getEmbeddedFeaturedImageUrl(record, size = 'full') {
  const media = record?._embedded?.['wp:featuredmedia']?.[0];
  if (!media) {
    return null;
  }
  return media.media_details?.sizes?.[size]?.source_url || media.source_url || null;
}

/**
 * Gets the author's display name from a preview record.
 *
 * @param {Object|null} record Entity record fetched with `_embed: true`.
 * @return {string|null}
 */
function getEmbeddedAuthorName(record) {
  return record?._embedded?.author?.[0]?.name || null;
}

/***/ },

/***/ "./src/template-blocks/post/author-avatar/style-index.css"
/*!****************************************************************!*\
  !*** ./src/template-blocks/post/author-avatar/style-index.css ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/template-blocks/post/author/style-index.css"
/*!*********************************************************!*\
  !*** ./src/template-blocks/post/author/style-index.css ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/template-blocks/post/breadcrumbs/style-index.css"
/*!**************************************************************!*\
  !*** ./src/template-blocks/post/breadcrumbs/style-index.css ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/template-blocks/post/categories/style-index.css"
/*!*************************************************************!*\
  !*** ./src/template-blocks/post/categories/style-index.css ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/template-blocks/post/comments-count/style-index.css"
/*!*****************************************************************!*\
  !*** ./src/template-blocks/post/comments-count/style-index.css ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/template-blocks/post/featured-image/style-index.css"
/*!*****************************************************************!*\
  !*** ./src/template-blocks/post/featured-image/style-index.css ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/template-blocks/post/featured-video/style-index.css"
/*!*****************************************************************!*\
  !*** ./src/template-blocks/post/featured-video/style-index.css ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/template-blocks/post/modified-date/style-index.css"
/*!****************************************************************!*\
  !*** ./src/template-blocks/post/modified-date/style-index.css ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/template-blocks/post/post-content/style-index.css"
/*!***************************************************************!*\
  !*** ./src/template-blocks/post/post-content/style-index.css ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/template-blocks/post/post-meta/style-index.css"
/*!************************************************************!*\
  !*** ./src/template-blocks/post/post-meta/style-index.css ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/template-blocks/post/post-title/style-index.css"
/*!*************************************************************!*\
  !*** ./src/template-blocks/post/post-title/style-index.css ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/template-blocks/post/previous-next-navigation/style-index.css"
/*!***************************************************************************!*\
  !*** ./src/template-blocks/post/previous-next-navigation/style-index.css ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/template-blocks/post/publish-date/style-index.css"
/*!***************************************************************!*\
  !*** ./src/template-blocks/post/publish-date/style-index.css ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/template-blocks/post/reading-time/style-index.css"
/*!***************************************************************!*\
  !*** ./src/template-blocks/post/reading-time/style-index.css ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/template-blocks/post/related-posts/style-index.css"
/*!****************************************************************!*\
  !*** ./src/template-blocks/post/related-posts/style-index.css ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/template-blocks/post/tags/style-index.css"
/*!*******************************************************!*\
  !*** ./src/template-blocks/post/tags/style-index.css ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/template-blocks/pro-teasers/style.css"
/*!***************************************************!*\
  !*** ./src/template-blocks/pro-teasers/style.css ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/template-blocks/style.css"
/*!***************************************!*\
  !*** ./src/template-blocks/style.css ***!
  \***************************************/
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

/***/ "@wordpress/date"
/*!******************************!*\
  !*** external ["wp","date"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["date"];

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

/***/ "./src/template-blocks/post/author-avatar/block.json"
/*!***********************************************************!*\
  !*** ./src/template-blocks/post/author-avatar/block.json ***!
  \***********************************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"blockive-premium-addon-for-block/tb-author-avatar","version":"0.1.0","title":"Author Avatar","category":"blockive-template","icon":"id","description":"Displays the current post\'s author avatar dynamically, with size, border and shadow controls. Blockive Template Builder only.","usesContext":["postId","postType"],"textdomain":"blockive-premium-addon-for-block","example":{},"attributes":{"size":{"type":"number","default":96},"borderRadius":{"type":"number","default":9999},"borderType":{"type":"string","default":"none"},"borderWidth":{"type":"number","default":1},"borderColor":{"type":"string","default":""},"shadowEnabled":{"type":"boolean","default":false},"shadowColor":{"type":"string","default":"rgba(0,0,0,0.15)"},"shadowBlur":{"type":"number","default":15},"shadowSpread":{"type":"number","default":0},"bpafbUid":{"type":"string","default":""},"bpafbDisplay":{"type":"string","default":""},"bpafbOverflow":{"type":"string","default":""},"bpafbPosition":{"type":"string","default":""},"bpafbContainerWidth":{"type":"number"},"bpafbContainerWidthUnit":{"type":"string","default":"px"},"bpafbContainerMinHeight":{"type":"number"},"bpafbContainerMaxHeight":{"type":"number"},"bpafbContainerBgType":{"type":"string","default":"color"},"bpafbContainerBgColor":{"type":"string","default":""},"bpafbContainerBgGradient":{"type":"string","default":""},"bpafbContainerBgImageUrl":{"type":"string","default":""},"bpafbContainerBgImageId":{"type":"number","default":0},"bpafbContainerBgImageSize":{"type":"string","default":"cover"},"bpafbContainerOverlayColor":{"type":"string","default":""},"bpafbContainerBorderStyle":{"type":"string","default":"none"},"bpafbContainerBorderWidth":{"type":"number"},"bpafbContainerBorderRadius":{"type":"number"},"bpafbContainerBorderColor":{"type":"string","default":""},"bpafbContainerBoxShadow":{"type":"boolean","default":false},"bpafbContainerShadowColor":{"type":"string","default":"rgba(0,0,0,0.15)"},"bpafbContainerShadowBlur":{"type":"number","default":15},"bpafbContainerShadowSpread":{"type":"number","default":0},"bpafbContainerHoverBoxShadow":{"type":"boolean","default":false},"bpafbContainerHoverShadowColor":{"type":"string","default":"rgba(0,0,0,0.15)"},"bpafbContainerHoverShadowBlur":{"type":"number","default":15},"bpafbContainerHoverShadowSpread":{"type":"number","default":0},"bpafbHideDesktop":{"type":"boolean","default":false},"bpafbHideTablet":{"type":"boolean","default":false},"bpafbHideMobile":{"type":"boolean","default":false},"bpafbAnimationType":{"type":"string","default":"none"},"bpafbAnimationDuration":{"type":"number","default":800},"bpafbAnimationDelay":{"type":"number","default":0},"bpafbAnimationEasing":{"type":"string","default":"ease"},"bpafbTransformRotate":{"type":"number","default":0},"bpafbTransformScale":{"type":"number","default":100},"bpafbTransformTranslateX":{"type":"number","default":0},"bpafbTransformTranslateY":{"type":"number","default":0},"bpafbHoverAnimation":{"type":"string","default":"none"},"bpafbFloatingEffect":{"type":"boolean","default":false},"bpafbZIndex":{"type":"number"},"bpafbHtmlId":{"type":"string","default":""},"bpafbHtmlClasses":{"type":"string","default":""},"bpafbCustomCss":{"type":"string","default":""},"bpafbContainerAlign":{"type":"string","default":""},"bpafbContainerPaddingTop":{"type":"number"},"bpafbContainerMarginTop":{"type":"number"},"bpafbContainerPaddingRight":{"type":"number"},"bpafbContainerMarginRight":{"type":"number"},"bpafbContainerPaddingBottom":{"type":"number"},"bpafbContainerMarginBottom":{"type":"number"},"bpafbContainerPaddingLeft":{"type":"number"},"bpafbContainerMarginLeft":{"type":"number"},"bpafbContainerPaddingTopTablet":{"type":"number"},"bpafbContainerMarginTopTablet":{"type":"number"},"bpafbContainerPaddingRightTablet":{"type":"number"},"bpafbContainerMarginRightTablet":{"type":"number"},"bpafbContainerPaddingBottomTablet":{"type":"number"},"bpafbContainerMarginBottomTablet":{"type":"number"},"bpafbContainerPaddingLeftTablet":{"type":"number"},"bpafbContainerMarginLeftTablet":{"type":"number"},"bpafbContainerPaddingTopMobile":{"type":"number"},"bpafbContainerMarginTopMobile":{"type":"number"},"bpafbContainerPaddingRightMobile":{"type":"number"},"bpafbContainerMarginRightMobile":{"type":"number"},"bpafbContainerPaddingBottomMobile":{"type":"number"},"bpafbContainerMarginBottomMobile":{"type":"number"},"bpafbContainerPaddingLeftMobile":{"type":"number"},"bpafbContainerMarginLeftMobile":{"type":"number"}},"supports":{"html":false,"anchor":true},"render":"file:./render.php"}');

/***/ },

/***/ "./src/template-blocks/post/author/block.json"
/*!****************************************************!*\
  !*** ./src/template-blocks/post/author/block.json ***!
  \****************************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"blockive-premium-addon-for-block/tb-author","version":"0.1.0","title":"Author","category":"blockive-template","icon":"admin-users","description":"Displays the current post\'s author name dynamically, optionally linked to their author archive. Blockive Template Builder only.","usesContext":["postId","postType"],"textdomain":"blockive-premium-addon-for-block","example":{},"attributes":{"displayFormat":{"type":"string","default":"display_name"},"isLink":{"type":"boolean","default":false},"linkTarget":{"type":"string","default":"_self"},"textAlign":{"type":"string","default":""},"textHoverColor":{"type":"string","default":""},"bpafbUid":{"type":"string","default":""},"bpafbDisplay":{"type":"string","default":""},"bpafbOverflow":{"type":"string","default":""},"bpafbPosition":{"type":"string","default":""},"bpafbContainerWidth":{"type":"number"},"bpafbContainerWidthUnit":{"type":"string","default":"px"},"bpafbContainerMinHeight":{"type":"number"},"bpafbContainerMaxHeight":{"type":"number"},"bpafbContainerBgType":{"type":"string","default":"color"},"bpafbContainerBgColor":{"type":"string","default":""},"bpafbContainerBgGradient":{"type":"string","default":""},"bpafbContainerBgImageUrl":{"type":"string","default":""},"bpafbContainerBgImageId":{"type":"number","default":0},"bpafbContainerBgImageSize":{"type":"string","default":"cover"},"bpafbContainerOverlayColor":{"type":"string","default":""},"bpafbContainerBorderStyle":{"type":"string","default":"none"},"bpafbContainerBorderWidth":{"type":"number"},"bpafbContainerBorderRadius":{"type":"number"},"bpafbContainerBorderColor":{"type":"string","default":""},"bpafbContainerBoxShadow":{"type":"boolean","default":false},"bpafbContainerShadowColor":{"type":"string","default":"rgba(0,0,0,0.15)"},"bpafbContainerShadowBlur":{"type":"number","default":15},"bpafbContainerShadowSpread":{"type":"number","default":0},"bpafbContainerHoverBoxShadow":{"type":"boolean","default":false},"bpafbContainerHoverShadowColor":{"type":"string","default":"rgba(0,0,0,0.15)"},"bpafbContainerHoverShadowBlur":{"type":"number","default":15},"bpafbContainerHoverShadowSpread":{"type":"number","default":0},"bpafbHideDesktop":{"type":"boolean","default":false},"bpafbHideTablet":{"type":"boolean","default":false},"bpafbHideMobile":{"type":"boolean","default":false},"bpafbAnimationType":{"type":"string","default":"none"},"bpafbAnimationDuration":{"type":"number","default":800},"bpafbAnimationDelay":{"type":"number","default":0},"bpafbAnimationEasing":{"type":"string","default":"ease"},"bpafbTransformRotate":{"type":"number","default":0},"bpafbTransformScale":{"type":"number","default":100},"bpafbTransformTranslateX":{"type":"number","default":0},"bpafbTransformTranslateY":{"type":"number","default":0},"bpafbHoverAnimation":{"type":"string","default":"none"},"bpafbFloatingEffect":{"type":"boolean","default":false},"bpafbZIndex":{"type":"number"},"bpafbHtmlId":{"type":"string","default":""},"bpafbHtmlClasses":{"type":"string","default":""},"bpafbCustomCss":{"type":"string","default":""},"bpafbContainerAlign":{"type":"string","default":""},"bpafbContainerPaddingTop":{"type":"number"},"bpafbContainerMarginTop":{"type":"number"},"bpafbContainerPaddingRight":{"type":"number"},"bpafbContainerMarginRight":{"type":"number"},"bpafbContainerPaddingBottom":{"type":"number"},"bpafbContainerMarginBottom":{"type":"number"},"bpafbContainerPaddingLeft":{"type":"number"},"bpafbContainerMarginLeft":{"type":"number"},"bpafbContainerPaddingTopTablet":{"type":"number"},"bpafbContainerMarginTopTablet":{"type":"number"},"bpafbContainerPaddingRightTablet":{"type":"number"},"bpafbContainerMarginRightTablet":{"type":"number"},"bpafbContainerPaddingBottomTablet":{"type":"number"},"bpafbContainerMarginBottomTablet":{"type":"number"},"bpafbContainerPaddingLeftTablet":{"type":"number"},"bpafbContainerMarginLeftTablet":{"type":"number"},"bpafbContainerPaddingTopMobile":{"type":"number"},"bpafbContainerMarginTopMobile":{"type":"number"},"bpafbContainerPaddingRightMobile":{"type":"number"},"bpafbContainerMarginRightMobile":{"type":"number"},"bpafbContainerPaddingBottomMobile":{"type":"number"},"bpafbContainerMarginBottomMobile":{"type":"number"},"bpafbContainerPaddingLeftMobile":{"type":"number"},"bpafbContainerMarginLeftMobile":{"type":"number"}},"supports":{"html":false,"color":{"text":true,"background":false,"gradients":false,"link":true},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalLetterSpacing":true,"__experimentalDefaultControls":{"fontSize":true}},"anchor":true},"render":"file:./render.php"}');

/***/ },

/***/ "./src/template-blocks/post/breadcrumbs/block.json"
/*!*********************************************************!*\
  !*** ./src/template-blocks/post/breadcrumbs/block.json ***!
  \*********************************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"blockive-premium-addon-for-block/tb-breadcrumbs","version":"0.1.0","title":"Breadcrumbs","category":"blockive-template","icon":"admin-links","description":"Displays a Home > Category > Title breadcrumb trail for the current post dynamically. Blockive Template Builder only.","usesContext":["postId","postType"],"textdomain":"blockive-premium-addon-for-block","example":{},"attributes":{"separator":{"type":"string","default":"/"},"showHomeIcon":{"type":"boolean","default":true},"homeIcon":{"type":"string","default":"fa-solid fa-house"},"textColor":{"type":"string","default":""},"textHoverColor":{"type":"string","default":""},"bpafbUid":{"type":"string","default":""},"bpafbDisplay":{"type":"string","default":""},"bpafbOverflow":{"type":"string","default":""},"bpafbPosition":{"type":"string","default":""},"bpafbContainerWidth":{"type":"number"},"bpafbContainerWidthUnit":{"type":"string","default":"px"},"bpafbContainerMinHeight":{"type":"number"},"bpafbContainerMaxHeight":{"type":"number"},"bpafbContainerBgType":{"type":"string","default":"color"},"bpafbContainerBgColor":{"type":"string","default":""},"bpafbContainerBgGradient":{"type":"string","default":""},"bpafbContainerBgImageUrl":{"type":"string","default":""},"bpafbContainerBgImageId":{"type":"number","default":0},"bpafbContainerBgImageSize":{"type":"string","default":"cover"},"bpafbContainerOverlayColor":{"type":"string","default":""},"bpafbContainerBorderStyle":{"type":"string","default":"none"},"bpafbContainerBorderWidth":{"type":"number"},"bpafbContainerBorderRadius":{"type":"number"},"bpafbContainerBorderColor":{"type":"string","default":""},"bpafbContainerBoxShadow":{"type":"boolean","default":false},"bpafbContainerShadowColor":{"type":"string","default":"rgba(0,0,0,0.15)"},"bpafbContainerShadowBlur":{"type":"number","default":15},"bpafbContainerShadowSpread":{"type":"number","default":0},"bpafbContainerHoverBoxShadow":{"type":"boolean","default":false},"bpafbContainerHoverShadowColor":{"type":"string","default":"rgba(0,0,0,0.15)"},"bpafbContainerHoverShadowBlur":{"type":"number","default":15},"bpafbContainerHoverShadowSpread":{"type":"number","default":0},"bpafbHideDesktop":{"type":"boolean","default":false},"bpafbHideTablet":{"type":"boolean","default":false},"bpafbHideMobile":{"type":"boolean","default":false},"bpafbAnimationType":{"type":"string","default":"none"},"bpafbAnimationDuration":{"type":"number","default":800},"bpafbAnimationDelay":{"type":"number","default":0},"bpafbAnimationEasing":{"type":"string","default":"ease"},"bpafbTransformRotate":{"type":"number","default":0},"bpafbTransformScale":{"type":"number","default":100},"bpafbTransformTranslateX":{"type":"number","default":0},"bpafbTransformTranslateY":{"type":"number","default":0},"bpafbHoverAnimation":{"type":"string","default":"none"},"bpafbFloatingEffect":{"type":"boolean","default":false},"bpafbZIndex":{"type":"number"},"bpafbHtmlId":{"type":"string","default":""},"bpafbHtmlClasses":{"type":"string","default":""},"bpafbCustomCss":{"type":"string","default":""},"bpafbContainerAlign":{"type":"string","default":""},"bpafbContainerPaddingTop":{"type":"number"},"bpafbContainerMarginTop":{"type":"number"},"bpafbContainerPaddingRight":{"type":"number"},"bpafbContainerMarginRight":{"type":"number"},"bpafbContainerPaddingBottom":{"type":"number"},"bpafbContainerMarginBottom":{"type":"number"},"bpafbContainerPaddingLeft":{"type":"number"},"bpafbContainerMarginLeft":{"type":"number"},"bpafbContainerPaddingTopTablet":{"type":"number"},"bpafbContainerMarginTopTablet":{"type":"number"},"bpafbContainerPaddingRightTablet":{"type":"number"},"bpafbContainerMarginRightTablet":{"type":"number"},"bpafbContainerPaddingBottomTablet":{"type":"number"},"bpafbContainerMarginBottomTablet":{"type":"number"},"bpafbContainerPaddingLeftTablet":{"type":"number"},"bpafbContainerMarginLeftTablet":{"type":"number"},"bpafbContainerPaddingTopMobile":{"type":"number"},"bpafbContainerMarginTopMobile":{"type":"number"},"bpafbContainerPaddingRightMobile":{"type":"number"},"bpafbContainerMarginRightMobile":{"type":"number"},"bpafbContainerPaddingBottomMobile":{"type":"number"},"bpafbContainerMarginBottomMobile":{"type":"number"},"bpafbContainerPaddingLeftMobile":{"type":"number"},"bpafbContainerMarginLeftMobile":{"type":"number"}},"supports":{"html":false,"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalLetterSpacing":true,"__experimentalDefaultControls":{"fontSize":true}},"anchor":true},"render":"file:./render.php"}');

/***/ },

/***/ "./src/template-blocks/post/categories/block.json"
/*!********************************************************!*\
  !*** ./src/template-blocks/post/categories/block.json ***!
  \********************************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"blockive-premium-addon-for-block/tb-categories","version":"0.1.0","title":"Categories","category":"blockive-template","icon":"category","description":"Displays the current post\'s categories dynamically, as a plain list or as badges, with normal/hover colors. Blockive Template Builder only.","usesContext":["postId","postType"],"textdomain":"blockive-premium-addon-for-block","example":{},"attributes":{"separator":{"type":"string","default":", "},"badgeStyle":{"type":"boolean","default":false},"isLink":{"type":"boolean","default":true},"textColor":{"type":"string","default":""},"textHoverColor":{"type":"string","default":""},"bpafbUid":{"type":"string","default":""},"bpafbDisplay":{"type":"string","default":""},"bpafbOverflow":{"type":"string","default":""},"bpafbPosition":{"type":"string","default":""},"bpafbContainerWidth":{"type":"number"},"bpafbContainerWidthUnit":{"type":"string","default":"px"},"bpafbContainerMinHeight":{"type":"number"},"bpafbContainerMaxHeight":{"type":"number"},"bpafbContainerBgType":{"type":"string","default":"color"},"bpafbContainerBgColor":{"type":"string","default":""},"bpafbContainerBgGradient":{"type":"string","default":""},"bpafbContainerBgImageUrl":{"type":"string","default":""},"bpafbContainerBgImageId":{"type":"number","default":0},"bpafbContainerBgImageSize":{"type":"string","default":"cover"},"bpafbContainerOverlayColor":{"type":"string","default":""},"bpafbContainerBorderStyle":{"type":"string","default":"none"},"bpafbContainerBorderWidth":{"type":"number"},"bpafbContainerBorderRadius":{"type":"number"},"bpafbContainerBorderColor":{"type":"string","default":""},"bpafbContainerBoxShadow":{"type":"boolean","default":false},"bpafbContainerShadowColor":{"type":"string","default":"rgba(0,0,0,0.15)"},"bpafbContainerShadowBlur":{"type":"number","default":15},"bpafbContainerShadowSpread":{"type":"number","default":0},"bpafbContainerHoverBoxShadow":{"type":"boolean","default":false},"bpafbContainerHoverShadowColor":{"type":"string","default":"rgba(0,0,0,0.15)"},"bpafbContainerHoverShadowBlur":{"type":"number","default":15},"bpafbContainerHoverShadowSpread":{"type":"number","default":0},"bpafbHideDesktop":{"type":"boolean","default":false},"bpafbHideTablet":{"type":"boolean","default":false},"bpafbHideMobile":{"type":"boolean","default":false},"bpafbAnimationType":{"type":"string","default":"none"},"bpafbAnimationDuration":{"type":"number","default":800},"bpafbAnimationDelay":{"type":"number","default":0},"bpafbAnimationEasing":{"type":"string","default":"ease"},"bpafbTransformRotate":{"type":"number","default":0},"bpafbTransformScale":{"type":"number","default":100},"bpafbTransformTranslateX":{"type":"number","default":0},"bpafbTransformTranslateY":{"type":"number","default":0},"bpafbHoverAnimation":{"type":"string","default":"none"},"bpafbFloatingEffect":{"type":"boolean","default":false},"bpafbZIndex":{"type":"number"},"bpafbHtmlId":{"type":"string","default":""},"bpafbHtmlClasses":{"type":"string","default":""},"bpafbCustomCss":{"type":"string","default":""},"bpafbContainerAlign":{"type":"string","default":""},"bpafbContainerPaddingTop":{"type":"number"},"bpafbContainerMarginTop":{"type":"number"},"bpafbContainerPaddingRight":{"type":"number"},"bpafbContainerMarginRight":{"type":"number"},"bpafbContainerPaddingBottom":{"type":"number"},"bpafbContainerMarginBottom":{"type":"number"},"bpafbContainerPaddingLeft":{"type":"number"},"bpafbContainerMarginLeft":{"type":"number"},"bpafbContainerPaddingTopTablet":{"type":"number"},"bpafbContainerMarginTopTablet":{"type":"number"},"bpafbContainerPaddingRightTablet":{"type":"number"},"bpafbContainerMarginRightTablet":{"type":"number"},"bpafbContainerPaddingBottomTablet":{"type":"number"},"bpafbContainerMarginBottomTablet":{"type":"number"},"bpafbContainerPaddingLeftTablet":{"type":"number"},"bpafbContainerMarginLeftTablet":{"type":"number"},"bpafbContainerPaddingTopMobile":{"type":"number"},"bpafbContainerMarginTopMobile":{"type":"number"},"bpafbContainerPaddingRightMobile":{"type":"number"},"bpafbContainerMarginRightMobile":{"type":"number"},"bpafbContainerPaddingBottomMobile":{"type":"number"},"bpafbContainerMarginBottomMobile":{"type":"number"},"bpafbContainerPaddingLeftMobile":{"type":"number"},"bpafbContainerMarginLeftMobile":{"type":"number"}},"supports":{"html":false,"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalLetterSpacing":true,"__experimentalDefaultControls":{"fontSize":true}},"anchor":true},"render":"file:./render.php"}');

/***/ },

/***/ "./src/template-blocks/post/comments-count/block.json"
/*!************************************************************!*\
  !*** ./src/template-blocks/post/comments-count/block.json ***!
  \************************************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"blockive-premium-addon-for-block/tb-comments-count","version":"0.1.0","title":"Comments Count","category":"blockive-template","icon":"admin-comments","description":"Displays the current post\'s comment count dynamically. Blockive Template Builder only.","usesContext":["postId","postType"],"textdomain":"blockive-premium-addon-for-block","example":{},"attributes":{"icon":{"type":"string","default":"fa-regular fa-comment"},"format":{"type":"string","default":"{count} Comments"},"textHoverColor":{"type":"string","default":""},"isLink":{"type":"boolean","default":true},"bpafbUid":{"type":"string","default":""},"bpafbDisplay":{"type":"string","default":""},"bpafbOverflow":{"type":"string","default":""},"bpafbPosition":{"type":"string","default":""},"bpafbContainerWidth":{"type":"number"},"bpafbContainerWidthUnit":{"type":"string","default":"px"},"bpafbContainerMinHeight":{"type":"number"},"bpafbContainerMaxHeight":{"type":"number"},"bpafbContainerBgType":{"type":"string","default":"color"},"bpafbContainerBgColor":{"type":"string","default":""},"bpafbContainerBgGradient":{"type":"string","default":""},"bpafbContainerBgImageUrl":{"type":"string","default":""},"bpafbContainerBgImageId":{"type":"number","default":0},"bpafbContainerBgImageSize":{"type":"string","default":"cover"},"bpafbContainerOverlayColor":{"type":"string","default":""},"bpafbContainerBorderStyle":{"type":"string","default":"none"},"bpafbContainerBorderWidth":{"type":"number"},"bpafbContainerBorderRadius":{"type":"number"},"bpafbContainerBorderColor":{"type":"string","default":""},"bpafbContainerBoxShadow":{"type":"boolean","default":false},"bpafbContainerShadowColor":{"type":"string","default":"rgba(0,0,0,0.15)"},"bpafbContainerShadowBlur":{"type":"number","default":15},"bpafbContainerShadowSpread":{"type":"number","default":0},"bpafbContainerHoverBoxShadow":{"type":"boolean","default":false},"bpafbContainerHoverShadowColor":{"type":"string","default":"rgba(0,0,0,0.15)"},"bpafbContainerHoverShadowBlur":{"type":"number","default":15},"bpafbContainerHoverShadowSpread":{"type":"number","default":0},"bpafbHideDesktop":{"type":"boolean","default":false},"bpafbHideTablet":{"type":"boolean","default":false},"bpafbHideMobile":{"type":"boolean","default":false},"bpafbAnimationType":{"type":"string","default":"none"},"bpafbAnimationDuration":{"type":"number","default":800},"bpafbAnimationDelay":{"type":"number","default":0},"bpafbAnimationEasing":{"type":"string","default":"ease"},"bpafbTransformRotate":{"type":"number","default":0},"bpafbTransformScale":{"type":"number","default":100},"bpafbTransformTranslateX":{"type":"number","default":0},"bpafbTransformTranslateY":{"type":"number","default":0},"bpafbHoverAnimation":{"type":"string","default":"none"},"bpafbFloatingEffect":{"type":"boolean","default":false},"bpafbZIndex":{"type":"number"},"bpafbHtmlId":{"type":"string","default":""},"bpafbHtmlClasses":{"type":"string","default":""},"bpafbCustomCss":{"type":"string","default":""},"bpafbContainerAlign":{"type":"string","default":""},"bpafbContainerPaddingTop":{"type":"number"},"bpafbContainerMarginTop":{"type":"number"},"bpafbContainerPaddingRight":{"type":"number"},"bpafbContainerMarginRight":{"type":"number"},"bpafbContainerPaddingBottom":{"type":"number"},"bpafbContainerMarginBottom":{"type":"number"},"bpafbContainerPaddingLeft":{"type":"number"},"bpafbContainerMarginLeft":{"type":"number"},"bpafbContainerPaddingTopTablet":{"type":"number"},"bpafbContainerMarginTopTablet":{"type":"number"},"bpafbContainerPaddingRightTablet":{"type":"number"},"bpafbContainerMarginRightTablet":{"type":"number"},"bpafbContainerPaddingBottomTablet":{"type":"number"},"bpafbContainerMarginBottomTablet":{"type":"number"},"bpafbContainerPaddingLeftTablet":{"type":"number"},"bpafbContainerMarginLeftTablet":{"type":"number"},"bpafbContainerPaddingTopMobile":{"type":"number"},"bpafbContainerMarginTopMobile":{"type":"number"},"bpafbContainerPaddingRightMobile":{"type":"number"},"bpafbContainerMarginRightMobile":{"type":"number"},"bpafbContainerPaddingBottomMobile":{"type":"number"},"bpafbContainerMarginBottomMobile":{"type":"number"},"bpafbContainerPaddingLeftMobile":{"type":"number"},"bpafbContainerMarginLeftMobile":{"type":"number"}},"supports":{"html":false,"color":{"text":true,"link":true},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalDefaultControls":{"fontSize":true}},"anchor":true},"render":"file:./render.php"}');

/***/ },

/***/ "./src/template-blocks/post/featured-image/block.json"
/*!************************************************************!*\
  !*** ./src/template-blocks/post/featured-image/block.json ***!
  \************************************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"blockive-premium-addon-for-block/tb-featured-image","version":"0.1.0","title":"Featured Image","category":"blockive-template","icon":"format-image","description":"Displays the current post\'s featured image dynamically. Blockive Template Builder only.","usesContext":["postId","postType"],"textdomain":"blockive-premium-addon-for-block","example":{},"attributes":{"imageSize":{"type":"string","default":"large"},"aspectRatio":{"type":"string","default":""},"borderRadius":{"type":"number","default":0},"objectFit":{"type":"string","default":"cover"},"lazyLoad":{"type":"boolean","default":true},"isLink":{"type":"boolean","default":true},"overlayColor":{"type":"string","default":""},"hoverEffect":{"type":"string","default":"none"},"borderType":{"type":"string","default":"none"},"borderWidth":{"type":"number"},"borderColor":{"type":"string","default":""},"shadowEnabled":{"type":"boolean","default":false},"shadowColor":{"type":"string","default":"rgba(0,0,0,0.15)"},"shadowBlur":{"type":"number","default":15},"shadowSpread":{"type":"number","default":0},"bpafbUid":{"type":"string","default":""},"bpafbDisplay":{"type":"string","default":""},"bpafbOverflow":{"type":"string","default":""},"bpafbPosition":{"type":"string","default":""},"bpafbContainerWidth":{"type":"number"},"bpafbContainerWidthUnit":{"type":"string","default":"px"},"bpafbContainerMinHeight":{"type":"number"},"bpafbContainerMaxHeight":{"type":"number"},"bpafbContainerBgType":{"type":"string","default":"color"},"bpafbContainerBgColor":{"type":"string","default":""},"bpafbContainerBgGradient":{"type":"string","default":""},"bpafbContainerBgImageUrl":{"type":"string","default":""},"bpafbContainerBgImageId":{"type":"number","default":0},"bpafbContainerBgImageSize":{"type":"string","default":"cover"},"bpafbContainerOverlayColor":{"type":"string","default":""},"bpafbContainerBorderStyle":{"type":"string","default":"none"},"bpafbContainerBorderWidth":{"type":"number"},"bpafbContainerBorderRadius":{"type":"number"},"bpafbContainerBorderColor":{"type":"string","default":""},"bpafbContainerBoxShadow":{"type":"boolean","default":false},"bpafbContainerShadowColor":{"type":"string","default":"rgba(0,0,0,0.15)"},"bpafbContainerShadowBlur":{"type":"number","default":15},"bpafbContainerShadowSpread":{"type":"number","default":0},"bpafbContainerHoverBoxShadow":{"type":"boolean","default":false},"bpafbContainerHoverShadowColor":{"type":"string","default":"rgba(0,0,0,0.15)"},"bpafbContainerHoverShadowBlur":{"type":"number","default":15},"bpafbContainerHoverShadowSpread":{"type":"number","default":0},"bpafbHideDesktop":{"type":"boolean","default":false},"bpafbHideTablet":{"type":"boolean","default":false},"bpafbHideMobile":{"type":"boolean","default":false},"bpafbAnimationType":{"type":"string","default":"none"},"bpafbAnimationDuration":{"type":"number","default":800},"bpafbAnimationDelay":{"type":"number","default":0},"bpafbAnimationEasing":{"type":"string","default":"ease"},"bpafbTransformRotate":{"type":"number","default":0},"bpafbTransformScale":{"type":"number","default":100},"bpafbTransformTranslateX":{"type":"number","default":0},"bpafbTransformTranslateY":{"type":"number","default":0},"bpafbHoverAnimation":{"type":"string","default":"none"},"bpafbFloatingEffect":{"type":"boolean","default":false},"bpafbZIndex":{"type":"number"},"bpafbHtmlId":{"type":"string","default":""},"bpafbHtmlClasses":{"type":"string","default":""},"bpafbCustomCss":{"type":"string","default":""},"bpafbContainerAlign":{"type":"string","default":""},"bpafbContainerPaddingTop":{"type":"number"},"bpafbContainerMarginTop":{"type":"number"},"bpafbContainerPaddingRight":{"type":"number"},"bpafbContainerMarginRight":{"type":"number"},"bpafbContainerPaddingBottom":{"type":"number"},"bpafbContainerMarginBottom":{"type":"number"},"bpafbContainerPaddingLeft":{"type":"number"},"bpafbContainerMarginLeft":{"type":"number"},"bpafbContainerPaddingTopTablet":{"type":"number"},"bpafbContainerMarginTopTablet":{"type":"number"},"bpafbContainerPaddingRightTablet":{"type":"number"},"bpafbContainerMarginRightTablet":{"type":"number"},"bpafbContainerPaddingBottomTablet":{"type":"number"},"bpafbContainerMarginBottomTablet":{"type":"number"},"bpafbContainerPaddingLeftTablet":{"type":"number"},"bpafbContainerMarginLeftTablet":{"type":"number"},"bpafbContainerPaddingTopMobile":{"type":"number"},"bpafbContainerMarginTopMobile":{"type":"number"},"bpafbContainerPaddingRightMobile":{"type":"number"},"bpafbContainerMarginRightMobile":{"type":"number"},"bpafbContainerPaddingBottomMobile":{"type":"number"},"bpafbContainerMarginBottomMobile":{"type":"number"},"bpafbContainerPaddingLeftMobile":{"type":"number"},"bpafbContainerMarginLeftMobile":{"type":"number"}},"supports":{"html":false,"align":["wide","full"],"anchor":true},"render":"file:./render.php"}');

/***/ },

/***/ "./src/template-blocks/post/featured-video/block.json"
/*!************************************************************!*\
  !*** ./src/template-blocks/post/featured-video/block.json ***!
  \************************************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"blockive-premium-addon-for-block/tb-featured-video","version":"0.1.0","title":"Featured Video","category":"blockive-template","icon":"video-alt3","description":"Displays the current post\'s featured video dynamically (post meta, auto-detected content video, or a manual fallback URL). Blockive Template Builder only.","usesContext":["postId","postType"],"textdomain":"blockive-premium-addon-for-block","example":{},"attributes":{"videoUrl":{"type":"string","default":""},"metaKey":{"type":"string","default":"featured_video_url"},"autoDetect":{"type":"boolean","default":true},"aspectRatio":{"type":"string","default":"16/9"},"borderRadius":{"type":"number","default":0},"borderType":{"type":"string","default":"none"},"borderWidth":{"type":"number"},"borderColor":{"type":"string","default":""},"shadowEnabled":{"type":"boolean","default":false},"shadowColor":{"type":"string","default":"rgba(0,0,0,0.15)"},"shadowBlur":{"type":"number","default":15},"shadowSpread":{"type":"number","default":0},"bpafbUid":{"type":"string","default":""},"bpafbDisplay":{"type":"string","default":""},"bpafbOverflow":{"type":"string","default":""},"bpafbPosition":{"type":"string","default":""},"bpafbContainerWidth":{"type":"number"},"bpafbContainerWidthUnit":{"type":"string","default":"px"},"bpafbContainerMinHeight":{"type":"number"},"bpafbContainerMaxHeight":{"type":"number"},"bpafbContainerBgType":{"type":"string","default":"color"},"bpafbContainerBgColor":{"type":"string","default":""},"bpafbContainerBgGradient":{"type":"string","default":""},"bpafbContainerBgImageUrl":{"type":"string","default":""},"bpafbContainerBgImageId":{"type":"number","default":0},"bpafbContainerBgImageSize":{"type":"string","default":"cover"},"bpafbContainerOverlayColor":{"type":"string","default":""},"bpafbContainerBorderStyle":{"type":"string","default":"none"},"bpafbContainerBorderWidth":{"type":"number"},"bpafbContainerBorderRadius":{"type":"number"},"bpafbContainerBorderColor":{"type":"string","default":""},"bpafbContainerBoxShadow":{"type":"boolean","default":false},"bpafbContainerShadowColor":{"type":"string","default":"rgba(0,0,0,0.15)"},"bpafbContainerShadowBlur":{"type":"number","default":15},"bpafbContainerShadowSpread":{"type":"number","default":0},"bpafbContainerHoverBoxShadow":{"type":"boolean","default":false},"bpafbContainerHoverShadowColor":{"type":"string","default":"rgba(0,0,0,0.15)"},"bpafbContainerHoverShadowBlur":{"type":"number","default":15},"bpafbContainerHoverShadowSpread":{"type":"number","default":0},"bpafbHideDesktop":{"type":"boolean","default":false},"bpafbHideTablet":{"type":"boolean","default":false},"bpafbHideMobile":{"type":"boolean","default":false},"bpafbAnimationType":{"type":"string","default":"none"},"bpafbAnimationDuration":{"type":"number","default":800},"bpafbAnimationDelay":{"type":"number","default":0},"bpafbAnimationEasing":{"type":"string","default":"ease"},"bpafbTransformRotate":{"type":"number","default":0},"bpafbTransformScale":{"type":"number","default":100},"bpafbTransformTranslateX":{"type":"number","default":0},"bpafbTransformTranslateY":{"type":"number","default":0},"bpafbHoverAnimation":{"type":"string","default":"none"},"bpafbFloatingEffect":{"type":"boolean","default":false},"bpafbZIndex":{"type":"number"},"bpafbHtmlId":{"type":"string","default":""},"bpafbHtmlClasses":{"type":"string","default":""},"bpafbCustomCss":{"type":"string","default":""},"bpafbContainerAlign":{"type":"string","default":""},"bpafbContainerPaddingTop":{"type":"number"},"bpafbContainerMarginTop":{"type":"number"},"bpafbContainerPaddingRight":{"type":"number"},"bpafbContainerMarginRight":{"type":"number"},"bpafbContainerPaddingBottom":{"type":"number"},"bpafbContainerMarginBottom":{"type":"number"},"bpafbContainerPaddingLeft":{"type":"number"},"bpafbContainerMarginLeft":{"type":"number"},"bpafbContainerPaddingTopTablet":{"type":"number"},"bpafbContainerMarginTopTablet":{"type":"number"},"bpafbContainerPaddingRightTablet":{"type":"number"},"bpafbContainerMarginRightTablet":{"type":"number"},"bpafbContainerPaddingBottomTablet":{"type":"number"},"bpafbContainerMarginBottomTablet":{"type":"number"},"bpafbContainerPaddingLeftTablet":{"type":"number"},"bpafbContainerMarginLeftTablet":{"type":"number"},"bpafbContainerPaddingTopMobile":{"type":"number"},"bpafbContainerMarginTopMobile":{"type":"number"},"bpafbContainerPaddingRightMobile":{"type":"number"},"bpafbContainerMarginRightMobile":{"type":"number"},"bpafbContainerPaddingBottomMobile":{"type":"number"},"bpafbContainerMarginBottomMobile":{"type":"number"},"bpafbContainerPaddingLeftMobile":{"type":"number"},"bpafbContainerMarginLeftMobile":{"type":"number"}},"supports":{"html":false,"align":["wide","full"],"anchor":true},"render":"file:./render.php"}');

/***/ },

/***/ "./src/template-blocks/post/modified-date/block.json"
/*!***********************************************************!*\
  !*** ./src/template-blocks/post/modified-date/block.json ***!
  \***********************************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"blockive-premium-addon-for-block/tb-modified-date","version":"0.1.0","title":"Modified Date","category":"blockive-template","icon":"update","description":"Displays the current post\'s last modified date dynamically, with custom format and relative time. Blockive Template Builder only.","usesContext":["postId","postType"],"textdomain":"blockive-premium-addon-for-block","example":{},"attributes":{"dateFormat":{"type":"string","default":""},"relative":{"type":"boolean","default":false},"bpafbUid":{"type":"string","default":""},"bpafbDisplay":{"type":"string","default":""},"bpafbOverflow":{"type":"string","default":""},"bpafbPosition":{"type":"string","default":""},"bpafbContainerWidth":{"type":"number"},"bpafbContainerWidthUnit":{"type":"string","default":"px"},"bpafbContainerMinHeight":{"type":"number"},"bpafbContainerMaxHeight":{"type":"number"},"bpafbContainerBgType":{"type":"string","default":"color"},"bpafbContainerBgColor":{"type":"string","default":""},"bpafbContainerBgGradient":{"type":"string","default":""},"bpafbContainerBgImageUrl":{"type":"string","default":""},"bpafbContainerBgImageId":{"type":"number","default":0},"bpafbContainerBgImageSize":{"type":"string","default":"cover"},"bpafbContainerOverlayColor":{"type":"string","default":""},"bpafbContainerBorderStyle":{"type":"string","default":"none"},"bpafbContainerBorderWidth":{"type":"number"},"bpafbContainerBorderRadius":{"type":"number"},"bpafbContainerBorderColor":{"type":"string","default":""},"bpafbContainerBoxShadow":{"type":"boolean","default":false},"bpafbContainerShadowColor":{"type":"string","default":"rgba(0,0,0,0.15)"},"bpafbContainerShadowBlur":{"type":"number","default":15},"bpafbContainerShadowSpread":{"type":"number","default":0},"bpafbContainerHoverBoxShadow":{"type":"boolean","default":false},"bpafbContainerHoverShadowColor":{"type":"string","default":"rgba(0,0,0,0.15)"},"bpafbContainerHoverShadowBlur":{"type":"number","default":15},"bpafbContainerHoverShadowSpread":{"type":"number","default":0},"bpafbHideDesktop":{"type":"boolean","default":false},"bpafbHideTablet":{"type":"boolean","default":false},"bpafbHideMobile":{"type":"boolean","default":false},"bpafbAnimationType":{"type":"string","default":"none"},"bpafbAnimationDuration":{"type":"number","default":800},"bpafbAnimationDelay":{"type":"number","default":0},"bpafbAnimationEasing":{"type":"string","default":"ease"},"bpafbTransformRotate":{"type":"number","default":0},"bpafbTransformScale":{"type":"number","default":100},"bpafbTransformTranslateX":{"type":"number","default":0},"bpafbTransformTranslateY":{"type":"number","default":0},"bpafbHoverAnimation":{"type":"string","default":"none"},"bpafbFloatingEffect":{"type":"boolean","default":false},"bpafbZIndex":{"type":"number"},"bpafbHtmlId":{"type":"string","default":""},"bpafbHtmlClasses":{"type":"string","default":""},"bpafbCustomCss":{"type":"string","default":""},"bpafbContainerAlign":{"type":"string","default":""},"bpafbContainerPaddingTop":{"type":"number"},"bpafbContainerMarginTop":{"type":"number"},"bpafbContainerPaddingRight":{"type":"number"},"bpafbContainerMarginRight":{"type":"number"},"bpafbContainerPaddingBottom":{"type":"number"},"bpafbContainerMarginBottom":{"type":"number"},"bpafbContainerPaddingLeft":{"type":"number"},"bpafbContainerMarginLeft":{"type":"number"},"bpafbContainerPaddingTopTablet":{"type":"number"},"bpafbContainerMarginTopTablet":{"type":"number"},"bpafbContainerPaddingRightTablet":{"type":"number"},"bpafbContainerMarginRightTablet":{"type":"number"},"bpafbContainerPaddingBottomTablet":{"type":"number"},"bpafbContainerMarginBottomTablet":{"type":"number"},"bpafbContainerPaddingLeftTablet":{"type":"number"},"bpafbContainerMarginLeftTablet":{"type":"number"},"bpafbContainerPaddingTopMobile":{"type":"number"},"bpafbContainerMarginTopMobile":{"type":"number"},"bpafbContainerPaddingRightMobile":{"type":"number"},"bpafbContainerMarginRightMobile":{"type":"number"},"bpafbContainerPaddingBottomMobile":{"type":"number"},"bpafbContainerMarginBottomMobile":{"type":"number"},"bpafbContainerPaddingLeftMobile":{"type":"number"},"bpafbContainerMarginLeftMobile":{"type":"number"}},"supports":{"html":false,"color":{"text":true},"typography":{"fontSize":true,"__experimentalDefaultControls":{"fontSize":true}},"anchor":true},"render":"file:./render.php"}');

/***/ },

/***/ "./src/template-blocks/post/post-content/block.json"
/*!**********************************************************!*\
  !*** ./src/template-blocks/post/post-content/block.json ***!
  \**********************************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"blockive-premium-addon-for-block/tb-post-content","version":"0.1.0","title":"Post Content","category":"blockive-template","icon":"editor-paragraph","description":"Displays the current post\'s full content or excerpt dynamically, with optional drop cap and max width. Blockive Template Builder only.","usesContext":["postId","postType"],"textdomain":"blockive-premium-addon-for-block","example":{},"attributes":{"displayMode":{"type":"string","default":"full"},"maxWidth":{"type":"number","default":0},"dropCap":{"type":"boolean","default":false},"textAlign":{"type":"string","default":""},"linkHoverColor":{"type":"string","default":""},"bpafbUid":{"type":"string","default":""},"bpafbDisplay":{"type":"string","default":""},"bpafbOverflow":{"type":"string","default":""},"bpafbPosition":{"type":"string","default":""},"bpafbContainerWidth":{"type":"number"},"bpafbContainerWidthUnit":{"type":"string","default":"px"},"bpafbContainerMinHeight":{"type":"number"},"bpafbContainerMaxHeight":{"type":"number"},"bpafbContainerBgType":{"type":"string","default":"color"},"bpafbContainerBgColor":{"type":"string","default":""},"bpafbContainerBgGradient":{"type":"string","default":""},"bpafbContainerBgImageUrl":{"type":"string","default":""},"bpafbContainerBgImageId":{"type":"number","default":0},"bpafbContainerBgImageSize":{"type":"string","default":"cover"},"bpafbContainerOverlayColor":{"type":"string","default":""},"bpafbContainerBorderStyle":{"type":"string","default":"none"},"bpafbContainerBorderWidth":{"type":"number"},"bpafbContainerBorderRadius":{"type":"number"},"bpafbContainerBorderColor":{"type":"string","default":""},"bpafbContainerBoxShadow":{"type":"boolean","default":false},"bpafbContainerShadowColor":{"type":"string","default":"rgba(0,0,0,0.15)"},"bpafbContainerShadowBlur":{"type":"number","default":15},"bpafbContainerShadowSpread":{"type":"number","default":0},"bpafbContainerHoverBoxShadow":{"type":"boolean","default":false},"bpafbContainerHoverShadowColor":{"type":"string","default":"rgba(0,0,0,0.15)"},"bpafbContainerHoverShadowBlur":{"type":"number","default":15},"bpafbContainerHoverShadowSpread":{"type":"number","default":0},"bpafbHideDesktop":{"type":"boolean","default":false},"bpafbHideTablet":{"type":"boolean","default":false},"bpafbHideMobile":{"type":"boolean","default":false},"bpafbAnimationType":{"type":"string","default":"none"},"bpafbAnimationDuration":{"type":"number","default":800},"bpafbAnimationDelay":{"type":"number","default":0},"bpafbAnimationEasing":{"type":"string","default":"ease"},"bpafbTransformRotate":{"type":"number","default":0},"bpafbTransformScale":{"type":"number","default":100},"bpafbTransformTranslateX":{"type":"number","default":0},"bpafbTransformTranslateY":{"type":"number","default":0},"bpafbHoverAnimation":{"type":"string","default":"none"},"bpafbFloatingEffect":{"type":"boolean","default":false},"bpafbZIndex":{"type":"number"},"bpafbHtmlId":{"type":"string","default":""},"bpafbHtmlClasses":{"type":"string","default":""},"bpafbCustomCss":{"type":"string","default":""},"bpafbContainerAlign":{"type":"string","default":""},"bpafbContainerPaddingTop":{"type":"number"},"bpafbContainerMarginTop":{"type":"number"},"bpafbContainerPaddingRight":{"type":"number"},"bpafbContainerMarginRight":{"type":"number"},"bpafbContainerPaddingBottom":{"type":"number"},"bpafbContainerMarginBottom":{"type":"number"},"bpafbContainerPaddingLeft":{"type":"number"},"bpafbContainerMarginLeft":{"type":"number"},"bpafbContainerPaddingTopTablet":{"type":"number"},"bpafbContainerMarginTopTablet":{"type":"number"},"bpafbContainerPaddingRightTablet":{"type":"number"},"bpafbContainerMarginRightTablet":{"type":"number"},"bpafbContainerPaddingBottomTablet":{"type":"number"},"bpafbContainerMarginBottomTablet":{"type":"number"},"bpafbContainerPaddingLeftTablet":{"type":"number"},"bpafbContainerMarginLeftTablet":{"type":"number"},"bpafbContainerPaddingTopMobile":{"type":"number"},"bpafbContainerMarginTopMobile":{"type":"number"},"bpafbContainerPaddingRightMobile":{"type":"number"},"bpafbContainerMarginRightMobile":{"type":"number"},"bpafbContainerPaddingBottomMobile":{"type":"number"},"bpafbContainerMarginBottomMobile":{"type":"number"},"bpafbContainerPaddingLeftMobile":{"type":"number"},"bpafbContainerMarginLeftMobile":{"type":"number"}},"supports":{"html":false,"align":["wide","full"],"color":{"text":true,"background":false,"gradients":false,"link":true},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalLetterSpacing":true,"__experimentalDefaultControls":{"fontSize":true}},"anchor":true},"render":"file:./render.php"}');

/***/ },

/***/ "./src/template-blocks/post/post-meta/block.json"
/*!*******************************************************!*\
  !*** ./src/template-blocks/post/post-meta/block.json ***!
  \*******************************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"blockive-premium-addon-for-block/tb-post-meta","version":"0.1.0","title":"Post Meta","category":"blockive-template","icon":"list-view","description":"A reorderable row of post meta items (author, date, categories, tags, comments, reading time). Blockive Template Builder only.","usesContext":["postId","postType"],"textdomain":"blockive-premium-addon-for-block","example":{},"attributes":{"items":{"type":"array","default":[{"key":"date","enabled":true},{"key":"author","enabled":true},{"key":"categories","enabled":true},{"key":"comments","enabled":true},{"key":"tags","enabled":false},{"key":"readingTime","enabled":false}]},"separator":{"type":"string","default":"•"},"showIcons":{"type":"boolean","default":true},"linkHoverColor":{"type":"string","default":""},"bpafbUid":{"type":"string","default":""},"bpafbDisplay":{"type":"string","default":""},"bpafbOverflow":{"type":"string","default":""},"bpafbPosition":{"type":"string","default":""},"bpafbContainerWidth":{"type":"number"},"bpafbContainerWidthUnit":{"type":"string","default":"px"},"bpafbContainerMinHeight":{"type":"number"},"bpafbContainerMaxHeight":{"type":"number"},"bpafbContainerBgType":{"type":"string","default":"color"},"bpafbContainerBgColor":{"type":"string","default":""},"bpafbContainerBgGradient":{"type":"string","default":""},"bpafbContainerBgImageUrl":{"type":"string","default":""},"bpafbContainerBgImageId":{"type":"number","default":0},"bpafbContainerBgImageSize":{"type":"string","default":"cover"},"bpafbContainerOverlayColor":{"type":"string","default":""},"bpafbContainerBorderStyle":{"type":"string","default":"none"},"bpafbContainerBorderWidth":{"type":"number"},"bpafbContainerBorderRadius":{"type":"number"},"bpafbContainerBorderColor":{"type":"string","default":""},"bpafbContainerBoxShadow":{"type":"boolean","default":false},"bpafbContainerShadowColor":{"type":"string","default":"rgba(0,0,0,0.15)"},"bpafbContainerShadowBlur":{"type":"number","default":15},"bpafbContainerShadowSpread":{"type":"number","default":0},"bpafbContainerHoverBoxShadow":{"type":"boolean","default":false},"bpafbContainerHoverShadowColor":{"type":"string","default":"rgba(0,0,0,0.15)"},"bpafbContainerHoverShadowBlur":{"type":"number","default":15},"bpafbContainerHoverShadowSpread":{"type":"number","default":0},"bpafbHideDesktop":{"type":"boolean","default":false},"bpafbHideTablet":{"type":"boolean","default":false},"bpafbHideMobile":{"type":"boolean","default":false},"bpafbAnimationType":{"type":"string","default":"none"},"bpafbAnimationDuration":{"type":"number","default":800},"bpafbAnimationDelay":{"type":"number","default":0},"bpafbAnimationEasing":{"type":"string","default":"ease"},"bpafbTransformRotate":{"type":"number","default":0},"bpafbTransformScale":{"type":"number","default":100},"bpafbTransformTranslateX":{"type":"number","default":0},"bpafbTransformTranslateY":{"type":"number","default":0},"bpafbHoverAnimation":{"type":"string","default":"none"},"bpafbFloatingEffect":{"type":"boolean","default":false},"bpafbZIndex":{"type":"number"},"bpafbHtmlId":{"type":"string","default":""},"bpafbHtmlClasses":{"type":"string","default":""},"bpafbCustomCss":{"type":"string","default":""},"bpafbContainerAlign":{"type":"string","default":""},"bpafbContainerPaddingTop":{"type":"number"},"bpafbContainerMarginTop":{"type":"number"},"bpafbContainerPaddingRight":{"type":"number"},"bpafbContainerMarginRight":{"type":"number"},"bpafbContainerPaddingBottom":{"type":"number"},"bpafbContainerMarginBottom":{"type":"number"},"bpafbContainerPaddingLeft":{"type":"number"},"bpafbContainerMarginLeft":{"type":"number"},"bpafbContainerPaddingTopTablet":{"type":"number"},"bpafbContainerMarginTopTablet":{"type":"number"},"bpafbContainerPaddingRightTablet":{"type":"number"},"bpafbContainerMarginRightTablet":{"type":"number"},"bpafbContainerPaddingBottomTablet":{"type":"number"},"bpafbContainerMarginBottomTablet":{"type":"number"},"bpafbContainerPaddingLeftTablet":{"type":"number"},"bpafbContainerMarginLeftTablet":{"type":"number"},"bpafbContainerPaddingTopMobile":{"type":"number"},"bpafbContainerMarginTopMobile":{"type":"number"},"bpafbContainerPaddingRightMobile":{"type":"number"},"bpafbContainerMarginRightMobile":{"type":"number"},"bpafbContainerPaddingBottomMobile":{"type":"number"},"bpafbContainerMarginBottomMobile":{"type":"number"},"bpafbContainerPaddingLeftMobile":{"type":"number"},"bpafbContainerMarginLeftMobile":{"type":"number"}},"supports":{"html":false,"color":{"text":true,"link":true},"typography":{"fontSize":true,"__experimentalDefaultControls":{"fontSize":true}},"anchor":true},"render":"file:./render.php"}');

/***/ },

/***/ "./src/template-blocks/post/post-title/block.json"
/*!********************************************************!*\
  !*** ./src/template-blocks/post/post-title/block.json ***!
  \********************************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"blockive-premium-addon-for-block/tb-post-title","version":"0.1.0","title":"Post Title","category":"blockive-template","icon":"editor-textcolor","description":"Displays the current post\'s title dynamically. Blockive Template Builder only.","usesContext":["postId","postType"],"textdomain":"blockive-premium-addon-for-block","example":{},"attributes":{"tagName":{"type":"string","default":"h2"},"textAlign":{"type":"string","default":""},"isLink":{"type":"boolean","default":false},"linkTarget":{"type":"string","default":"_self"},"textColor":{"type":"string","default":""},"textHoverColor":{"type":"string","default":""},"bpafbUid":{"type":"string","default":""},"bpafbDisplay":{"type":"string","default":""},"bpafbOverflow":{"type":"string","default":""},"bpafbPosition":{"type":"string","default":""},"bpafbContainerWidth":{"type":"number"},"bpafbContainerWidthUnit":{"type":"string","default":"px"},"bpafbContainerMinHeight":{"type":"number"},"bpafbContainerMaxHeight":{"type":"number"},"bpafbContainerBgType":{"type":"string","default":"color"},"bpafbContainerBgColor":{"type":"string","default":""},"bpafbContainerBgGradient":{"type":"string","default":""},"bpafbContainerBgImageUrl":{"type":"string","default":""},"bpafbContainerBgImageId":{"type":"number","default":0},"bpafbContainerBgImageSize":{"type":"string","default":"cover"},"bpafbContainerOverlayColor":{"type":"string","default":""},"bpafbContainerBorderStyle":{"type":"string","default":"none"},"bpafbContainerBorderWidth":{"type":"number"},"bpafbContainerBorderRadius":{"type":"number"},"bpafbContainerBorderColor":{"type":"string","default":""},"bpafbContainerBoxShadow":{"type":"boolean","default":false},"bpafbContainerShadowColor":{"type":"string","default":"rgba(0,0,0,0.15)"},"bpafbContainerShadowBlur":{"type":"number","default":15},"bpafbContainerShadowSpread":{"type":"number","default":0},"bpafbContainerHoverBoxShadow":{"type":"boolean","default":false},"bpafbContainerHoverShadowColor":{"type":"string","default":"rgba(0,0,0,0.15)"},"bpafbContainerHoverShadowBlur":{"type":"number","default":15},"bpafbContainerHoverShadowSpread":{"type":"number","default":0},"bpafbHideDesktop":{"type":"boolean","default":false},"bpafbHideTablet":{"type":"boolean","default":false},"bpafbHideMobile":{"type":"boolean","default":false},"bpafbAnimationType":{"type":"string","default":"none"},"bpafbAnimationDuration":{"type":"number","default":800},"bpafbAnimationDelay":{"type":"number","default":0},"bpafbAnimationEasing":{"type":"string","default":"ease"},"bpafbTransformRotate":{"type":"number","default":0},"bpafbTransformScale":{"type":"number","default":100},"bpafbTransformTranslateX":{"type":"number","default":0},"bpafbTransformTranslateY":{"type":"number","default":0},"bpafbHoverAnimation":{"type":"string","default":"none"},"bpafbFloatingEffect":{"type":"boolean","default":false},"bpafbZIndex":{"type":"number"},"bpafbHtmlId":{"type":"string","default":""},"bpafbHtmlClasses":{"type":"string","default":""},"bpafbCustomCss":{"type":"string","default":""},"bpafbContainerAlign":{"type":"string","default":""},"bpafbContainerPaddingTop":{"type":"number"},"bpafbContainerMarginTop":{"type":"number"},"bpafbContainerPaddingRight":{"type":"number"},"bpafbContainerMarginRight":{"type":"number"},"bpafbContainerPaddingBottom":{"type":"number"},"bpafbContainerMarginBottom":{"type":"number"},"bpafbContainerPaddingLeft":{"type":"number"},"bpafbContainerMarginLeft":{"type":"number"},"bpafbContainerPaddingTopTablet":{"type":"number"},"bpafbContainerMarginTopTablet":{"type":"number"},"bpafbContainerPaddingRightTablet":{"type":"number"},"bpafbContainerMarginRightTablet":{"type":"number"},"bpafbContainerPaddingBottomTablet":{"type":"number"},"bpafbContainerMarginBottomTablet":{"type":"number"},"bpafbContainerPaddingLeftTablet":{"type":"number"},"bpafbContainerMarginLeftTablet":{"type":"number"},"bpafbContainerPaddingTopMobile":{"type":"number"},"bpafbContainerMarginTopMobile":{"type":"number"},"bpafbContainerPaddingRightMobile":{"type":"number"},"bpafbContainerMarginRightMobile":{"type":"number"},"bpafbContainerPaddingBottomMobile":{"type":"number"},"bpafbContainerMarginBottomMobile":{"type":"number"},"bpafbContainerPaddingLeftMobile":{"type":"number"},"bpafbContainerMarginLeftMobile":{"type":"number"}},"supports":{"html":false,"color":{"text":true,"background":false,"gradients":false,"link":true},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalLetterSpacing":true,"__experimentalDefaultControls":{"fontSize":true}},"anchor":true},"render":"file:./render.php"}');

/***/ },

/***/ "./src/template-blocks/post/previous-next-navigation/block.json"
/*!**********************************************************************!*\
  !*** ./src/template-blocks/post/previous-next-navigation/block.json ***!
  \**********************************************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"blockive-premium-addon-for-block/tb-previous-next-navigation","version":"0.1.0","title":"Previous / Next Navigation","category":"blockive-template","icon":"controls-repeat","description":"Links to the previous and next posts, dynamically. Blockive Template Builder only.","usesContext":["postId","postType"],"textdomain":"blockive-premium-addon-for-block","example":{},"attributes":{"prevLabel":{"type":"string","default":"Previous"},"nextLabel":{"type":"string","default":"Next"},"prevIcon":{"type":"string","default":"fa-solid fa-arrow-left"},"nextIcon":{"type":"string","default":"fa-solid fa-arrow-right"},"hoverStyle":{"type":"string","default":"none"},"inSameTerm":{"type":"boolean","default":false},"linkHoverColor":{"type":"string","default":""},"bpafbUid":{"type":"string","default":""},"bpafbDisplay":{"type":"string","default":""},"bpafbOverflow":{"type":"string","default":""},"bpafbPosition":{"type":"string","default":""},"bpafbContainerWidth":{"type":"number"},"bpafbContainerWidthUnit":{"type":"string","default":"px"},"bpafbContainerMinHeight":{"type":"number"},"bpafbContainerMaxHeight":{"type":"number"},"bpafbContainerBgType":{"type":"string","default":"color"},"bpafbContainerBgColor":{"type":"string","default":""},"bpafbContainerBgGradient":{"type":"string","default":""},"bpafbContainerBgImageUrl":{"type":"string","default":""},"bpafbContainerBgImageId":{"type":"number","default":0},"bpafbContainerBgImageSize":{"type":"string","default":"cover"},"bpafbContainerOverlayColor":{"type":"string","default":""},"bpafbContainerBorderStyle":{"type":"string","default":"none"},"bpafbContainerBorderWidth":{"type":"number"},"bpafbContainerBorderRadius":{"type":"number"},"bpafbContainerBorderColor":{"type":"string","default":""},"bpafbContainerBoxShadow":{"type":"boolean","default":false},"bpafbContainerShadowColor":{"type":"string","default":"rgba(0,0,0,0.15)"},"bpafbContainerShadowBlur":{"type":"number","default":15},"bpafbContainerShadowSpread":{"type":"number","default":0},"bpafbContainerHoverBoxShadow":{"type":"boolean","default":false},"bpafbContainerHoverShadowColor":{"type":"string","default":"rgba(0,0,0,0.15)"},"bpafbContainerHoverShadowBlur":{"type":"number","default":15},"bpafbContainerHoverShadowSpread":{"type":"number","default":0},"bpafbHideDesktop":{"type":"boolean","default":false},"bpafbHideTablet":{"type":"boolean","default":false},"bpafbHideMobile":{"type":"boolean","default":false},"bpafbAnimationType":{"type":"string","default":"none"},"bpafbAnimationDuration":{"type":"number","default":800},"bpafbAnimationDelay":{"type":"number","default":0},"bpafbAnimationEasing":{"type":"string","default":"ease"},"bpafbTransformRotate":{"type":"number","default":0},"bpafbTransformScale":{"type":"number","default":100},"bpafbTransformTranslateX":{"type":"number","default":0},"bpafbTransformTranslateY":{"type":"number","default":0},"bpafbHoverAnimation":{"type":"string","default":"none"},"bpafbFloatingEffect":{"type":"boolean","default":false},"bpafbZIndex":{"type":"number"},"bpafbHtmlId":{"type":"string","default":""},"bpafbHtmlClasses":{"type":"string","default":""},"bpafbCustomCss":{"type":"string","default":""},"bpafbContainerAlign":{"type":"string","default":""},"bpafbContainerPaddingTop":{"type":"number"},"bpafbContainerMarginTop":{"type":"number"},"bpafbContainerPaddingRight":{"type":"number"},"bpafbContainerMarginRight":{"type":"number"},"bpafbContainerPaddingBottom":{"type":"number"},"bpafbContainerMarginBottom":{"type":"number"},"bpafbContainerPaddingLeft":{"type":"number"},"bpafbContainerMarginLeft":{"type":"number"},"bpafbContainerPaddingTopTablet":{"type":"number"},"bpafbContainerMarginTopTablet":{"type":"number"},"bpafbContainerPaddingRightTablet":{"type":"number"},"bpafbContainerMarginRightTablet":{"type":"number"},"bpafbContainerPaddingBottomTablet":{"type":"number"},"bpafbContainerMarginBottomTablet":{"type":"number"},"bpafbContainerPaddingLeftTablet":{"type":"number"},"bpafbContainerMarginLeftTablet":{"type":"number"},"bpafbContainerPaddingTopMobile":{"type":"number"},"bpafbContainerMarginTopMobile":{"type":"number"},"bpafbContainerPaddingRightMobile":{"type":"number"},"bpafbContainerMarginRightMobile":{"type":"number"},"bpafbContainerPaddingBottomMobile":{"type":"number"},"bpafbContainerMarginBottomMobile":{"type":"number"},"bpafbContainerPaddingLeftMobile":{"type":"number"},"bpafbContainerMarginLeftMobile":{"type":"number"}},"supports":{"html":false,"color":{"text":true,"link":true},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalDefaultControls":{"fontSize":true}},"anchor":true},"render":"file:./render.php"}');

/***/ },

/***/ "./src/template-blocks/post/publish-date/block.json"
/*!**********************************************************!*\
  !*** ./src/template-blocks/post/publish-date/block.json ***!
  \**********************************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"blockive-premium-addon-for-block/tb-publish-date","version":"0.1.0","title":"Publish Date","category":"blockive-template","icon":"calendar-alt","description":"Displays the current post\'s publish date dynamically, with custom format, relative time and icon. Blockive Template Builder only.","usesContext":["postId","postType"],"textdomain":"blockive-premium-addon-for-block","example":{},"attributes":{"dateFormat":{"type":"string","default":""},"relative":{"type":"boolean","default":false},"icon":{"type":"string","default":"fa-regular fa-calendar"},"bpafbUid":{"type":"string","default":""},"bpafbDisplay":{"type":"string","default":""},"bpafbOverflow":{"type":"string","default":""},"bpafbPosition":{"type":"string","default":""},"bpafbContainerWidth":{"type":"number"},"bpafbContainerWidthUnit":{"type":"string","default":"px"},"bpafbContainerMinHeight":{"type":"number"},"bpafbContainerMaxHeight":{"type":"number"},"bpafbContainerBgType":{"type":"string","default":"color"},"bpafbContainerBgColor":{"type":"string","default":""},"bpafbContainerBgGradient":{"type":"string","default":""},"bpafbContainerBgImageUrl":{"type":"string","default":""},"bpafbContainerBgImageId":{"type":"number","default":0},"bpafbContainerBgImageSize":{"type":"string","default":"cover"},"bpafbContainerOverlayColor":{"type":"string","default":""},"bpafbContainerBorderStyle":{"type":"string","default":"none"},"bpafbContainerBorderWidth":{"type":"number"},"bpafbContainerBorderRadius":{"type":"number"},"bpafbContainerBorderColor":{"type":"string","default":""},"bpafbContainerBoxShadow":{"type":"boolean","default":false},"bpafbContainerShadowColor":{"type":"string","default":"rgba(0,0,0,0.15)"},"bpafbContainerShadowBlur":{"type":"number","default":15},"bpafbContainerShadowSpread":{"type":"number","default":0},"bpafbContainerHoverBoxShadow":{"type":"boolean","default":false},"bpafbContainerHoverShadowColor":{"type":"string","default":"rgba(0,0,0,0.15)"},"bpafbContainerHoverShadowBlur":{"type":"number","default":15},"bpafbContainerHoverShadowSpread":{"type":"number","default":0},"bpafbHideDesktop":{"type":"boolean","default":false},"bpafbHideTablet":{"type":"boolean","default":false},"bpafbHideMobile":{"type":"boolean","default":false},"bpafbAnimationType":{"type":"string","default":"none"},"bpafbAnimationDuration":{"type":"number","default":800},"bpafbAnimationDelay":{"type":"number","default":0},"bpafbAnimationEasing":{"type":"string","default":"ease"},"bpafbTransformRotate":{"type":"number","default":0},"bpafbTransformScale":{"type":"number","default":100},"bpafbTransformTranslateX":{"type":"number","default":0},"bpafbTransformTranslateY":{"type":"number","default":0},"bpafbHoverAnimation":{"type":"string","default":"none"},"bpafbFloatingEffect":{"type":"boolean","default":false},"bpafbZIndex":{"type":"number"},"bpafbHtmlId":{"type":"string","default":""},"bpafbHtmlClasses":{"type":"string","default":""},"bpafbCustomCss":{"type":"string","default":""},"bpafbContainerAlign":{"type":"string","default":""},"bpafbContainerPaddingTop":{"type":"number"},"bpafbContainerMarginTop":{"type":"number"},"bpafbContainerPaddingRight":{"type":"number"},"bpafbContainerMarginRight":{"type":"number"},"bpafbContainerPaddingBottom":{"type":"number"},"bpafbContainerMarginBottom":{"type":"number"},"bpafbContainerPaddingLeft":{"type":"number"},"bpafbContainerMarginLeft":{"type":"number"},"bpafbContainerPaddingTopTablet":{"type":"number"},"bpafbContainerMarginTopTablet":{"type":"number"},"bpafbContainerPaddingRightTablet":{"type":"number"},"bpafbContainerMarginRightTablet":{"type":"number"},"bpafbContainerPaddingBottomTablet":{"type":"number"},"bpafbContainerMarginBottomTablet":{"type":"number"},"bpafbContainerPaddingLeftTablet":{"type":"number"},"bpafbContainerMarginLeftTablet":{"type":"number"},"bpafbContainerPaddingTopMobile":{"type":"number"},"bpafbContainerMarginTopMobile":{"type":"number"},"bpafbContainerPaddingRightMobile":{"type":"number"},"bpafbContainerMarginRightMobile":{"type":"number"},"bpafbContainerPaddingBottomMobile":{"type":"number"},"bpafbContainerMarginBottomMobile":{"type":"number"},"bpafbContainerPaddingLeftMobile":{"type":"number"},"bpafbContainerMarginLeftMobile":{"type":"number"}},"supports":{"html":false,"color":{"text":true},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalLetterSpacing":true,"__experimentalDefaultControls":{"fontSize":true}},"anchor":true},"render":"file:./render.php"}');

/***/ },

/***/ "./src/template-blocks/post/reading-time/block.json"
/*!**********************************************************!*\
  !*** ./src/template-blocks/post/reading-time/block.json ***!
  \**********************************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"blockive-premium-addon-for-block/tb-reading-time","version":"0.1.0","title":"Reading Time","category":"blockive-template","icon":"clock","description":"Displays the current post\'s estimated reading time dynamically. Blockive Template Builder only.","usesContext":["postId","postType"],"textdomain":"blockive-premium-addon-for-block","example":{},"attributes":{"wpm":{"type":"number","default":200},"icon":{"type":"string","default":"fa-regular fa-clock"},"prefix":{"type":"string","default":""},"suffix":{"type":"string","default":" min read"},"bpafbUid":{"type":"string","default":""},"bpafbDisplay":{"type":"string","default":""},"bpafbOverflow":{"type":"string","default":""},"bpafbPosition":{"type":"string","default":""},"bpafbContainerWidth":{"type":"number"},"bpafbContainerWidthUnit":{"type":"string","default":"px"},"bpafbContainerMinHeight":{"type":"number"},"bpafbContainerMaxHeight":{"type":"number"},"bpafbContainerBgType":{"type":"string","default":"color"},"bpafbContainerBgColor":{"type":"string","default":""},"bpafbContainerBgGradient":{"type":"string","default":""},"bpafbContainerBgImageUrl":{"type":"string","default":""},"bpafbContainerBgImageId":{"type":"number","default":0},"bpafbContainerBgImageSize":{"type":"string","default":"cover"},"bpafbContainerOverlayColor":{"type":"string","default":""},"bpafbContainerBorderStyle":{"type":"string","default":"none"},"bpafbContainerBorderWidth":{"type":"number"},"bpafbContainerBorderRadius":{"type":"number"},"bpafbContainerBorderColor":{"type":"string","default":""},"bpafbContainerBoxShadow":{"type":"boolean","default":false},"bpafbContainerShadowColor":{"type":"string","default":"rgba(0,0,0,0.15)"},"bpafbContainerShadowBlur":{"type":"number","default":15},"bpafbContainerShadowSpread":{"type":"number","default":0},"bpafbContainerHoverBoxShadow":{"type":"boolean","default":false},"bpafbContainerHoverShadowColor":{"type":"string","default":"rgba(0,0,0,0.15)"},"bpafbContainerHoverShadowBlur":{"type":"number","default":15},"bpafbContainerHoverShadowSpread":{"type":"number","default":0},"bpafbHideDesktop":{"type":"boolean","default":false},"bpafbHideTablet":{"type":"boolean","default":false},"bpafbHideMobile":{"type":"boolean","default":false},"bpafbAnimationType":{"type":"string","default":"none"},"bpafbAnimationDuration":{"type":"number","default":800},"bpafbAnimationDelay":{"type":"number","default":0},"bpafbAnimationEasing":{"type":"string","default":"ease"},"bpafbTransformRotate":{"type":"number","default":0},"bpafbTransformScale":{"type":"number","default":100},"bpafbTransformTranslateX":{"type":"number","default":0},"bpafbTransformTranslateY":{"type":"number","default":0},"bpafbHoverAnimation":{"type":"string","default":"none"},"bpafbFloatingEffect":{"type":"boolean","default":false},"bpafbZIndex":{"type":"number"},"bpafbHtmlId":{"type":"string","default":""},"bpafbHtmlClasses":{"type":"string","default":""},"bpafbCustomCss":{"type":"string","default":""},"bpafbContainerAlign":{"type":"string","default":""},"bpafbContainerPaddingTop":{"type":"number"},"bpafbContainerMarginTop":{"type":"number"},"bpafbContainerPaddingRight":{"type":"number"},"bpafbContainerMarginRight":{"type":"number"},"bpafbContainerPaddingBottom":{"type":"number"},"bpafbContainerMarginBottom":{"type":"number"},"bpafbContainerPaddingLeft":{"type":"number"},"bpafbContainerMarginLeft":{"type":"number"},"bpafbContainerPaddingTopTablet":{"type":"number"},"bpafbContainerMarginTopTablet":{"type":"number"},"bpafbContainerPaddingRightTablet":{"type":"number"},"bpafbContainerMarginRightTablet":{"type":"number"},"bpafbContainerPaddingBottomTablet":{"type":"number"},"bpafbContainerMarginBottomTablet":{"type":"number"},"bpafbContainerPaddingLeftTablet":{"type":"number"},"bpafbContainerMarginLeftTablet":{"type":"number"},"bpafbContainerPaddingTopMobile":{"type":"number"},"bpafbContainerMarginTopMobile":{"type":"number"},"bpafbContainerPaddingRightMobile":{"type":"number"},"bpafbContainerMarginRightMobile":{"type":"number"},"bpafbContainerPaddingBottomMobile":{"type":"number"},"bpafbContainerMarginBottomMobile":{"type":"number"},"bpafbContainerPaddingLeftMobile":{"type":"number"},"bpafbContainerMarginLeftMobile":{"type":"number"}},"supports":{"html":false,"color":{"text":true,"link":true},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalDefaultControls":{"fontSize":true}},"anchor":true},"render":"file:./render.php"}');

/***/ },

/***/ "./src/template-blocks/post/related-posts/block.json"
/*!***********************************************************!*\
  !*** ./src/template-blocks/post/related-posts/block.json ***!
  \***********************************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"blockive-premium-addon-for-block/tb-related-posts","version":"0.1.0","title":"Related Posts","category":"blockive-template","icon":"layout","description":"Displays a grid or slider of posts related to the current post. Blockive Template Builder only.","usesContext":["postId","postType"],"textdomain":"blockive-premium-addon-for-block","example":{},"attributes":{"numberOfPosts":{"type":"number","default":3},"layout":{"type":"string","default":"grid"},"columns":{"type":"number","default":3},"gridGap":{"type":"number","default":20},"sliderColumns":{"type":"number","default":3},"sliderAutoplay":{"type":"boolean","default":false},"sliderAutoplaySpeed":{"type":"number","default":3000},"sliderLoop":{"type":"boolean","default":false},"sliderShowArrows":{"type":"boolean","default":true},"sliderShowDots":{"type":"boolean","default":true},"sliderSpaceBetween":{"type":"number","default":20},"orderBy":{"type":"string","default":"date"},"order":{"type":"string","default":"desc"},"sameCategory":{"type":"boolean","default":true},"showImage":{"type":"boolean","default":true},"showDate":{"type":"boolean","default":true},"showExcerpt":{"type":"boolean","default":true},"contentType":{"type":"string","default":"limited"},"excerptLength":{"type":"number","default":20},"cardStyle":{"type":"string","default":"modern"},"cardBgColor":{"type":"string","default":""},"cardBorderRadius":{"type":"number","default":16},"cardPadding":{"type":"number","default":18},"cardHoverElevation":{"type":"boolean","default":true},"imageZoom":{"type":"boolean","default":true},"imageBorderRadius":{"type":"number","default":12},"titleColor":{"type":"string","default":""},"titleHoverColor":{"type":"string","default":""},"titleFontFamily":{"type":"string","default":""},"titleFontSize":{"type":"number"},"titleFontWeight":{"type":"string","default":""},"titleLineHeight":{"type":"number"},"titleLetterSpacing":{"type":"number"},"titleTextTransform":{"type":"string","default":""},"titleTextDecoration":{"type":"string","default":""},"dateColor":{"type":"string","default":""},"excerptColor":{"type":"string","default":""},"bpafbUid":{"type":"string","default":""},"bpafbDisplay":{"type":"string","default":""},"bpafbOverflow":{"type":"string","default":""},"bpafbPosition":{"type":"string","default":""},"bpafbContainerWidth":{"type":"number"},"bpafbContainerWidthUnit":{"type":"string","default":"px"},"bpafbContainerMinHeight":{"type":"number"},"bpafbContainerMaxHeight":{"type":"number"},"bpafbContainerBgType":{"type":"string","default":"color"},"bpafbContainerBgColor":{"type":"string","default":""},"bpafbContainerBgGradient":{"type":"string","default":""},"bpafbContainerBgImageUrl":{"type":"string","default":""},"bpafbContainerBgImageId":{"type":"number","default":0},"bpafbContainerBgImageSize":{"type":"string","default":"cover"},"bpafbContainerOverlayColor":{"type":"string","default":""},"bpafbContainerBorderStyle":{"type":"string","default":"none"},"bpafbContainerBorderWidth":{"type":"number"},"bpafbContainerBorderRadius":{"type":"number"},"bpafbContainerBorderColor":{"type":"string","default":""},"bpafbContainerBoxShadow":{"type":"boolean","default":false},"bpafbContainerShadowColor":{"type":"string","default":"rgba(0,0,0,0.15)"},"bpafbContainerShadowBlur":{"type":"number","default":15},"bpafbContainerShadowSpread":{"type":"number","default":0},"bpafbContainerHoverBoxShadow":{"type":"boolean","default":false},"bpafbContainerHoverShadowColor":{"type":"string","default":"rgba(0,0,0,0.15)"},"bpafbContainerHoverShadowBlur":{"type":"number","default":15},"bpafbContainerHoverShadowSpread":{"type":"number","default":0},"bpafbHideDesktop":{"type":"boolean","default":false},"bpafbHideTablet":{"type":"boolean","default":false},"bpafbHideMobile":{"type":"boolean","default":false},"bpafbAnimationType":{"type":"string","default":"none"},"bpafbAnimationDuration":{"type":"number","default":800},"bpafbAnimationDelay":{"type":"number","default":0},"bpafbAnimationEasing":{"type":"string","default":"ease"},"bpafbTransformRotate":{"type":"number","default":0},"bpafbTransformScale":{"type":"number","default":100},"bpafbTransformTranslateX":{"type":"number","default":0},"bpafbTransformTranslateY":{"type":"number","default":0},"bpafbHoverAnimation":{"type":"string","default":"none"},"bpafbFloatingEffect":{"type":"boolean","default":false},"bpafbZIndex":{"type":"number"},"bpafbHtmlId":{"type":"string","default":""},"bpafbHtmlClasses":{"type":"string","default":""},"bpafbCustomCss":{"type":"string","default":""},"bpafbContainerAlign":{"type":"string","default":""},"bpafbContainerPaddingTop":{"type":"number"},"bpafbContainerMarginTop":{"type":"number"},"bpafbContainerPaddingRight":{"type":"number"},"bpafbContainerMarginRight":{"type":"number"},"bpafbContainerPaddingBottom":{"type":"number"},"bpafbContainerMarginBottom":{"type":"number"},"bpafbContainerPaddingLeft":{"type":"number"},"bpafbContainerMarginLeft":{"type":"number"},"bpafbContainerPaddingTopTablet":{"type":"number"},"bpafbContainerMarginTopTablet":{"type":"number"},"bpafbContainerPaddingRightTablet":{"type":"number"},"bpafbContainerMarginRightTablet":{"type":"number"},"bpafbContainerPaddingBottomTablet":{"type":"number"},"bpafbContainerMarginBottomTablet":{"type":"number"},"bpafbContainerPaddingLeftTablet":{"type":"number"},"bpafbContainerMarginLeftTablet":{"type":"number"},"bpafbContainerPaddingTopMobile":{"type":"number"},"bpafbContainerMarginTopMobile":{"type":"number"},"bpafbContainerPaddingRightMobile":{"type":"number"},"bpafbContainerMarginRightMobile":{"type":"number"},"bpafbContainerPaddingBottomMobile":{"type":"number"},"bpafbContainerMarginBottomMobile":{"type":"number"},"bpafbContainerPaddingLeftMobile":{"type":"number"},"bpafbContainerMarginLeftMobile":{"type":"number"}},"supports":{"html":false,"align":["wide","full"],"anchor":true},"render":"file:./render.php","viewScript":"file:./view.js"}');

/***/ },

/***/ "./src/template-blocks/post/tags/block.json"
/*!**************************************************!*\
  !*** ./src/template-blocks/post/tags/block.json ***!
  \**************************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"blockive-premium-addon-for-block/tb-tags","version":"0.1.0","title":"Tags","category":"blockive-template","icon":"tag","description":"Displays the current post\'s tags dynamically. Blockive Template Builder only.","usesContext":["postId","postType"],"textdomain":"blockive-premium-addon-for-block","example":{},"attributes":{"separator":{"type":"string","default":", "},"badgeStyle":{"type":"boolean","default":false},"linkHoverColor":{"type":"string","default":""},"bpafbUid":{"type":"string","default":""},"bpafbDisplay":{"type":"string","default":""},"bpafbOverflow":{"type":"string","default":""},"bpafbPosition":{"type":"string","default":""},"bpafbContainerWidth":{"type":"number"},"bpafbContainerWidthUnit":{"type":"string","default":"px"},"bpafbContainerMinHeight":{"type":"number"},"bpafbContainerMaxHeight":{"type":"number"},"bpafbContainerBgType":{"type":"string","default":"color"},"bpafbContainerBgColor":{"type":"string","default":""},"bpafbContainerBgGradient":{"type":"string","default":""},"bpafbContainerBgImageUrl":{"type":"string","default":""},"bpafbContainerBgImageId":{"type":"number","default":0},"bpafbContainerBgImageSize":{"type":"string","default":"cover"},"bpafbContainerOverlayColor":{"type":"string","default":""},"bpafbContainerBorderStyle":{"type":"string","default":"none"},"bpafbContainerBorderWidth":{"type":"number"},"bpafbContainerBorderRadius":{"type":"number"},"bpafbContainerBorderColor":{"type":"string","default":""},"bpafbContainerBoxShadow":{"type":"boolean","default":false},"bpafbContainerShadowColor":{"type":"string","default":"rgba(0,0,0,0.15)"},"bpafbContainerShadowBlur":{"type":"number","default":15},"bpafbContainerShadowSpread":{"type":"number","default":0},"bpafbContainerHoverBoxShadow":{"type":"boolean","default":false},"bpafbContainerHoverShadowColor":{"type":"string","default":"rgba(0,0,0,0.15)"},"bpafbContainerHoverShadowBlur":{"type":"number","default":15},"bpafbContainerHoverShadowSpread":{"type":"number","default":0},"bpafbHideDesktop":{"type":"boolean","default":false},"bpafbHideTablet":{"type":"boolean","default":false},"bpafbHideMobile":{"type":"boolean","default":false},"bpafbAnimationType":{"type":"string","default":"none"},"bpafbAnimationDuration":{"type":"number","default":800},"bpafbAnimationDelay":{"type":"number","default":0},"bpafbAnimationEasing":{"type":"string","default":"ease"},"bpafbTransformRotate":{"type":"number","default":0},"bpafbTransformScale":{"type":"number","default":100},"bpafbTransformTranslateX":{"type":"number","default":0},"bpafbTransformTranslateY":{"type":"number","default":0},"bpafbHoverAnimation":{"type":"string","default":"none"},"bpafbFloatingEffect":{"type":"boolean","default":false},"bpafbZIndex":{"type":"number"},"bpafbHtmlId":{"type":"string","default":""},"bpafbHtmlClasses":{"type":"string","default":""},"bpafbCustomCss":{"type":"string","default":""},"bpafbContainerAlign":{"type":"string","default":""},"bpafbContainerPaddingTop":{"type":"number"},"bpafbContainerMarginTop":{"type":"number"},"bpafbContainerPaddingRight":{"type":"number"},"bpafbContainerMarginRight":{"type":"number"},"bpafbContainerPaddingBottom":{"type":"number"},"bpafbContainerMarginBottom":{"type":"number"},"bpafbContainerPaddingLeft":{"type":"number"},"bpafbContainerMarginLeft":{"type":"number"},"bpafbContainerPaddingTopTablet":{"type":"number"},"bpafbContainerMarginTopTablet":{"type":"number"},"bpafbContainerPaddingRightTablet":{"type":"number"},"bpafbContainerMarginRightTablet":{"type":"number"},"bpafbContainerPaddingBottomTablet":{"type":"number"},"bpafbContainerMarginBottomTablet":{"type":"number"},"bpafbContainerPaddingLeftTablet":{"type":"number"},"bpafbContainerMarginLeftTablet":{"type":"number"},"bpafbContainerPaddingTopMobile":{"type":"number"},"bpafbContainerMarginTopMobile":{"type":"number"},"bpafbContainerPaddingRightMobile":{"type":"number"},"bpafbContainerMarginRightMobile":{"type":"number"},"bpafbContainerPaddingBottomMobile":{"type":"number"},"bpafbContainerMarginBottomMobile":{"type":"number"},"bpafbContainerPaddingLeftMobile":{"type":"number"},"bpafbContainerMarginLeftMobile":{"type":"number"}},"supports":{"html":false,"color":{"text":true,"background":false,"link":true},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalLetterSpacing":true,"__experimentalDefaultControls":{"fontSize":true}},"anchor":true},"render":"file:./render.php"}');

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
/******/ 			"template-blocks/index": 0,
/******/ 			"template-blocks/style-index": 0
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
/******/ 	let __webpack_exports__ = __webpack_require__.O(undefined, ["template-blocks/style-index"], () => (__webpack_require__("./src/template-blocks/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map