/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "./src/template-builder-pro/header-footer-layout-panel.js"
/*!****************************************************************!*\
  !*** ./src/template-builder-pro/header-footer-layout-panel.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ registerHeaderFooterLayoutPanel)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







const TEMPLATE_POST_TYPE = window.bpafbTemplateBuilder?.postType || 'blockive_template';
const META = '_bpafb_header_footer_layout';

// Same as Bpafb_Pro_Theme_Locations::LAYOUT_DEFAULTS.
const DEFAULTS = {
  width: 'full',
  customWidth: 1200
};

/**
 * "Layout" document panel for Header and Footer templates: how wide the
 * header / footer is on the page (Bpafb_Pro_Theme_Locations::max_width()).
 */
function HeaderFooterLayoutPanel() {
  const postType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => select('core/editor').getCurrentPostType(), []);
  const [meta, setMeta] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.useEntityProp)('postType', TEMPLATE_POST_TYPE, 'meta');
  const kind = meta?._bpafb_template_kind;
  if (postType !== TEMPLATE_POST_TYPE || !meta || kind !== 'header' && kind !== 'footer') {
    return null;
  }
  const settings = {
    ...DEFAULTS,
    ...(meta[META] || {})
  };
  const set = key => value => setMeta({
    ...meta,
    [META]: {
      ...settings,
      [key]: value
    }
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.PluginDocumentSettingPanel, {
    name: "bpafb-header-footer-layout",
    title: kind === 'header' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Header Layout', 'blockive-premium-addon-for-block-pro') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Footer Layout', 'blockive-premium-addon-for-block-pro'),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Width', 'blockive-premium-addon-for-block-pro'),
      value: settings.width,
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Full width', 'blockive-premium-addon-for-block-pro'),
        value: 'full'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Content width (theme)', 'blockive-premium-addon-for-block-pro'),
        value: 'content'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Wide width (theme)', 'blockive-premium-addon-for-block-pro'),
        value: 'wide'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Custom', 'blockive-premium-addon-for-block-pro'),
        value: 'custom'
      }],
      onChange: set('width'),
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Anything narrower than full width is centered. Blocks inside can still have their own width and background.', 'blockive-premium-addon-for-block-pro'),
      __nextHasNoMarginBottom: true
    }), settings.width === 'custom' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Maximum Width (px)', 'blockive-premium-addon-for-block-pro'),
      value: settings.customWidth,
      onChange: value => set('customWidth')(value ?? DEFAULTS.customWidth),
      min: 320,
      max: 2560,
      step: 10
    })]
  });
}
function registerHeaderFooterLayoutPanel() {
  ;(0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__.registerPlugin)('bpafb-header-footer-layout', {
    render: HeaderFooterLayoutPanel
  });
}

/***/ },

/***/ "./src/template-builder-pro/kind-conflict-guard.js"
/*!*********************************************************!*\
  !*** ./src/template-builder-pro/kind-conflict-guard.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ registerKindConflictGuard)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







const TEMPLATE_POST_TYPE = window.bpafbTemplateBuilder?.postType || 'blockive_template';

/**
 * The same Publish-button target the free plugin's own
 * save-conflict-guard.js uses for the "single" kind. This covers both the
 * pre-publish flyout's Publish button, and the Update button shown once a
 * template is already published.
 */
const PUBLISH_BUTTON_SELECTOR = '.editor-post-publish-button__button';
const getRecordTitle = record => {
  if (!record) {
    return '';
  }
  if (typeof record.title === 'string') {
    return record.title;
  }
  return record.title?.rendered || record.title?.raw || '';
};

/**
 * Whether two lists of condition rules share at least one exactly matching
 * {type, value} rule. This is a simple exact-match check, not a full
 * overlap check between rules of different kinds, but it is enough to
 * catch the common "I made two Header templates for the whole site" mistake.
 *
 * @param {Array} rulesA
 * @param {Array} rulesB
 * @return {boolean}
 */
function rulesOverlap(rulesA, rulesB) {
  return rulesA.some(a => rulesB.some(b => a.type === b.type && (a.value || '') === (b.value || '')));
}

/**
 * Warns before publishing a Header, Footer, Archive, Search, 404, Popup,
 * or Loop Item template if another published template of the same kind
 * shares a matching condition rule, and offers to move the other one to
 * Draft. This does for every other kind what the free plugin's own
 * save-conflict-guard.js already does for the "single" kind.
 */
const KindConflictGuard = () => {
  const [meta] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.useEntityProp)('postType', TEMPLATE_POST_TYPE, 'meta');
  const {
    editPost,
    savePost
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)('core/editor');
  const {
    saveEntityRecord
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)('core');
  const [isConfirmOpen, setIsConfirmOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
  const [isSaving, setIsSaving] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
  const currentPostId = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select('core/editor').getCurrentPostId(), []);
  const kind = meta?._bpafb_template_kind || 'single';
  const rules = Array.isArray(meta?._bpafb_display_condition_rules) ? meta._bpafb_display_condition_rules : [];
  const conflictingTemplate = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    // "single" is the free plugin's own kind, already handled by its
    // save-conflict-guard.js. This guard only checks the other
    // kinds that Pro adds.
    if ('single' === kind || 0 === rules.length) {
      return null;
    }
    const records = select('core').getEntityRecords('postType', TEMPLATE_POST_TYPE, {
      status: 'publish',
      per_page: -1,
      exclude: [currentPostId],
      context: 'view'
    });
    if (!records) {
      return null;
    }
    return records.find(record => {
      const otherKind = record.meta?._bpafb_template_kind || 'single';
      const otherRules = Array.isArray(record.meta?._bpafb_display_condition_rules) ? record.meta._bpafb_display_condition_rules : [];
      return otherKind === kind && rulesOverlap(rules, otherRules);
    }) || null;
  }, [kind, rules, currentPostId]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    const handleClick = event => {
      if (!conflictingTemplate) {
        return;
      }
      if (!event.target.closest(PUBLISH_BUTTON_SELECTOR)) {
        return;
      }
      event.preventDefault();
      event.stopImmediatePropagation();
      setIsConfirmOpen(true);
    };
    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, [conflictingTemplate]);
  if (!isConfirmOpen) {
    return null;
  }
  const handleDismiss = () => {
    if (isSaving) {
      return;
    }
    setIsConfirmOpen(false);
  };

  // The free plugin's save-conflict-guard.js just closes its modal on
  // Cancel, since keeping both templates active there is always a
  // mistake, never a real choice. Here, Pro's rule-based conditions can
  // overlap on purpose, so both buttons below actually publish - they
  // only differ on whether the other template also gets moved to Draft.
  const publish = async () => {
    setIsSaving(true);
    try {
      await editPost({
        status: 'publish'
      });
      await savePost();
      return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.select)('core/editor').didPostSaveRequestSucceed();
    } finally {
      setIsSaving(false);
    }
  };
  const handleKeepBoth = async () => {
    await publish();
    setIsConfirmOpen(false);
  };
  const handleConfirm = async () => {
    const saveSucceeded = await publish();
    if (saveSucceeded && conflictingTemplate) {
      await saveEntityRecord('postType', TEMPLATE_POST_TYPE, {
        id: conflictingTemplate.id,
        status: 'draft'
      });
    }
    setIsConfirmOpen(false);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Overlapping template?', 'blockive-premium-addon-for-block-pro'),
    onRequestClose: handleDismiss,
    className: "bpafb-pro-kind-conflict-modal",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.sprintf)(/* translators: 1: template kind, e.g. "header". 2: title of the existing conflicting template. */
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Another published template ("%2$s") already matches an identical condition for this "%1$s" location. Only one will actually apply on the frontend - decided by priority - so having both published can be confusing. If you\'d rather have just this one, move "%2$s" to Draft when you publish.', 'blockive-premium-addon-for-block-pro'), kind, getRecordTitle(conflictingTemplate))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "bpafb-pro-kind-conflict-modal__actions",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "tertiary",
        onClick: handleDismiss,
        disabled: isSaving,
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Cancel', 'blockive-premium-addon-for-block-pro')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "secondary",
        onClick: handleKeepBoth,
        isBusy: isSaving,
        disabled: isSaving,
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Publish, Keep Both', 'blockive-premium-addon-for-block-pro')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "primary",
        onClick: handleConfirm,
        isBusy: isSaving,
        disabled: isSaving,
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Publish & Move Other to Draft', 'blockive-premium-addon-for-block-pro')
      })]
    })]
  });
};
function registerKindConflictGuard() {
  (0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__.registerPlugin)('bpafb-pro-kind-conflict-guard', {
    render: KindConflictGuard
  });
}

/***/ },

/***/ "./src/template-builder-pro/sticky-header-panel.js"
/*!*********************************************************!*\
  !*** ./src/template-builder-pro/sticky-header-panel.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ registerStickyHeaderPanel)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_color_state_controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/color-state-controls */ "./src/components/color-state-controls/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








const TEMPLATE_POST_TYPE = window.bpafbTemplateBuilder?.postType || 'blockive_template';
const META = '_bpafb_sticky_header';

// Same as Bpafb_Pro_Sticky::DEFAULTS.
const DEFAULTS = {
  enabled: false,
  desktop: true,
  tablet: true,
  mobile: true,
  behavior: 'always',
  scrolledOffset: 50,
  scrolledBg: '#ffffff',
  scrolledColor: '',
  scrolledShadow: true,
  zIndex: 100
};

/**
 * "Sticky Header" document panel, for Header templates only
 * (Bpafb_Pro_Sticky).
 */
function StickyHeaderPanel() {
  const postType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => select('core/editor').getCurrentPostType(), []);
  const [meta, setMeta] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.useEntityProp)('postType', TEMPLATE_POST_TYPE, 'meta');
  if (postType !== TEMPLATE_POST_TYPE || !meta || meta._bpafb_template_kind !== 'header') {
    return null;
  }
  const settings = {
    ...DEFAULTS,
    ...(meta[META] || {})
  };
  const set = key => value => setMeta({
    ...meta,
    [META]: {
      ...settings,
      [key]: value
    }
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.PluginDocumentSettingPanel, {
    name: "bpafb-sticky-header",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sticky Header', 'blockive-premium-addon-for-block-pro'),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Stick to the Top', 'blockive-premium-addon-for-block-pro'),
      checked: !!settings.enabled,
      onChange: set('enabled'),
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('The header stays at the top of the window while the page scrolls.', 'blockive-premium-addon-for-block-pro')
    }), settings.enabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('On', 'blockive-premium-addon-for-block-pro'),
        __nextHasNoMarginBottom: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Desktop', 'blockive-premium-addon-for-block-pro'),
          checked: !!settings.desktop,
          onChange: set('desktop')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Tablet', 'blockive-premium-addon-for-block-pro'),
          checked: !!settings.tablet,
          onChange: set('tablet')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Mobile', 'blockive-premium-addon-for-block-pro'),
          checked: !!settings.mobile,
          onChange: set('mobile')
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Behavior', 'blockive-premium-addon-for-block-pro'),
        value: settings.behavior,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Always visible', 'blockive-premium-addon-for-block-pro'),
          value: 'always'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hide on scroll down, show on scroll up', 'blockive-premium-addon-for-block-pro'),
          value: 'scroll-up'
        }],
        onChange: set('behavior')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Scrolled Look After (px)', 'blockive-premium-addon-for-block-pro'),
        value: settings.scrolledOffset,
        onChange: value => set('scrolledOffset')(value ?? 0),
        min: 0,
        max: 600,
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('After scrolling this far, the header gets the colors and shadow below, and the class "is-scrolled" for custom CSS.', 'blockive-premium-addon-for-block-pro')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_color_state_controls__WEBPACK_IMPORTED_MODULE_6__["default"], {
        normal: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Scrolled Background', 'blockive-premium-addon-for-block-pro'),
          value: settings.scrolledBg,
          onChange: value => set('scrolledBg')(value || '')
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Scrolled Text Color', 'blockive-premium-addon-for-block-pro'),
          value: settings.scrolledColor,
          onChange: value => set('scrolledColor')(value || '')
        }]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Shadow When Scrolled', 'blockive-premium-addon-for-block-pro'),
        checked: !!settings.scrolledShadow,
        onChange: set('scrolledShadow')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Stacking Order (z-index)', 'blockive-premium-addon-for-block-pro'),
        value: settings.zIndex,
        onChange: value => set('zIndex')(value ?? 100),
        min: 1,
        max: 9999,
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Raise it if page content scrolls over the header.', 'blockive-premium-addon-for-block-pro')
      })]
    })]
  });
}
function registerStickyHeaderPanel() {
  ;(0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__.registerPlugin)('bpafb-sticky-header', {
    render: StickyHeaderPanel
  });
}

/***/ },

/***/ "./src/template-builder-pro/template-kind-panel.js"
/*!*********************************************************!*\
  !*** ./src/template-builder-pro/template-kind-panel.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ registerTemplateKindPanel)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _template_builder_template_settings_panel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../template-builder/template-settings-panel */ "./src/template-builder/template-settings-panel.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);











const TEMPLATE_POST_TYPE = window.bpafbTemplateBuilder?.postType || 'blockive_template';

// Sent from PHP by Bpafb_Template_Builder::get_post_type_singular_names().
// The `/wp/v2/types` REST response only has the plural `name`, not the
// singular one, so this separate list is needed for wording like "All
// Products" or "Specific Product".
const POST_TYPE_SINGULAR_NAMES = window.bpafbTemplateBuilder?.postTypeSingularNames || {};
const KIND_OPTIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Single Post/Page', 'blockive-premium-addon-for-block-pro'),
  value: 'single'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Header', 'blockive-premium-addon-for-block-pro'),
  value: 'header'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Footer', 'blockive-premium-addon-for-block-pro'),
  value: 'footer'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Archive', 'blockive-premium-addon-for-block-pro'),
  value: 'archive'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Search Results', 'blockive-premium-addon-for-block-pro'),
  value: 'search'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('404 Page', 'blockive-premium-addon-for-block-pro'),
  value: '404'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Popup', 'blockive-premium-addon-for-block-pro'),
  value: 'popup'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Loop Item', 'blockive-premium-addon-for-block-pro'),
  value: 'loop-item'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Mega Menu Item', 'blockive-premium-addon-for-block-pro'),
  value: 'mega-menu-item'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Section (for the Template block)', 'blockive-premium-addon-for-block-pro'),
  value: 'section'
}];

// Kinds that blocks place, not Display Conditions (see
// Bpafb_Pro_Template_Kinds::PLACED_BY_BLOCKS).
const PLACED_BY_BLOCKS = {
  'loop-item': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Loop Grid and Loop Carousel blocks show this template for each item.', 'blockive-premium-addon-for-block-pro'),
  'mega-menu-item': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('The Mega Menu block shows this template as a dropdown panel.', 'blockive-premium-addon-for-block-pro'),
  section: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add a Template block to any page, post, or template and choose this section to show it there.', 'blockive-premium-addon-for-block-pro')
};

// Rule types where the user needs to pick a value. The others (entire_site,
// date_archive, search, 404, logged_in, logged_out) need nothing else.
const RULE_TYPES_WITH_VALUE = ['post_type_archive', 'taxonomy_archive', 'author_archive', 'user_role', 'singular'];
const ROLE_OPTIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Administrator', 'blockive-premium-addon-for-block-pro'),
  value: 'administrator'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Editor', 'blockive-premium-addon-for-block-pro'),
  value: 'editor'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Author', 'blockive-premium-addon-for-block-pro'),
  value: 'author'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Contributor', 'blockive-premium-addon-for-block-pro'),
  value: 'contributor'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Subscriber', 'blockive-premium-addon-for-block-pro'),
  value: 'subscriber'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Customer (WooCommerce)', 'blockive-premium-addon-for-block-pro'),
  value: 'customer'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Shop Manager (WooCommerce)', 'blockive-premium-addon-for-block-pro'),
  value: 'shop_manager'
}];

/**
 * The Display Conditions rule types for kinds other than "single".
 * "Singular" here opens its own Post Type, then All/Specific choice (see
 * SingularConditionFields), instead of being one flat "pick a post" field.
 */
function ruleTypeOptions() {
  return [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Entire Site', 'blockive-premium-addon-for-block-pro'),
    value: 'entire_site'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Singular', 'blockive-premium-addon-for-block-pro'),
    value: 'singular'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Post Type Archive', 'blockive-premium-addon-for-block-pro'),
    value: 'post_type_archive'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Taxonomy Archive', 'blockive-premium-addon-for-block-pro'),
    value: 'taxonomy_archive'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Author Archive', 'blockive-premium-addon-for-block-pro'),
    value: 'author_archive'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Date Archive', 'blockive-premium-addon-for-block-pro'),
    value: 'date_archive'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Search Results', 'blockive-premium-addon-for-block-pro'),
    value: 'search'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('404 Page', 'blockive-premium-addon-for-block-pro'),
    value: '404'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('User Role', 'blockive-premium-addon-for-block-pro'),
    value: 'user_role'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Logged In', 'blockive-premium-addon-for-block-pro'),
    value: 'logged_in'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Logged Out', 'blockive-premium-addon-for-block-pro'),
    value: 'logged_out'
  }];
}
const TRIGGER_TYPE_OPTIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Page Load (delay)', 'blockive-premium-addon-for-block-pro'),
  value: 'page_load'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Scroll Percentage', 'blockive-premium-addon-for-block-pro'),
  value: 'scroll'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Click (element selector)', 'blockive-premium-addon-for-block-pro'),
  value: 'click'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Exit Intent', 'blockive-premium-addon-for-block-pro'),
  value: 'exit_intent'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Scrolled to an Element', 'blockive-premium-addon-for-block-pro'),
  value: 'element'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('After Inactivity', 'blockive-premium-addon-for-block-pro'),
  value: 'inactivity'
}];

// Same as Bpafb_Pro_Popup_Builder::RULE_DEFAULTS.
const RULE_DEFAULTS = {
  pageViews: 0,
  sessions: 0,
  maxTimes: 0,
  referrer: 'any',
  referrerText: '',
  desktop: true,
  tablet: true,
  mobile: true,
  startDate: '',
  endDate: ''
};
const REFERRER_OPTIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Anywhere', 'blockive-premium-addon-for-block-pro'),
  value: 'any'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('A search engine', 'blockive-premium-addon-for-block-pro'),
  value: 'search'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Another website', 'blockive-premium-addon-for-block-pro'),
  value: 'external'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('This website', 'blockive-premium-addon-for-block-pro'),
  value: 'internal'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('An address containing…', 'blockive-premium-addon-for-block-pro'),
  value: 'contains'
}];

/**
 * Advanced Rules for a popup (Bpafb_Pro_Popup_Builder::META_RULES).
 */
const PopupRules = ({
  meta,
  setMeta
}) => {
  const rules = {
    ...RULE_DEFAULTS,
    ...(meta?._bpafb_popup_rules || {})
  };
  const set = key => value => setMeta({
    ...meta,
    _bpafb_popup_rules: {
      ...rules,
      [key]: value
    }
  });
  const count = key => value => set(key)(Math.max(0, parseInt(value, 10) || 0));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("h3", {
      className: "components-base-control__label",
      style: {
        marginTop: 16
      },
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Advanced Rules', 'blockive-premium-addon-for-block-pro')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
        type: "number",
        min: 0,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show after this many page views', 'blockive-premium-addon-for-block-pro'),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('0 = right away. Counts pages where this popup may show.', 'blockive-premium-addon-for-block-pro'),
        value: rules.pageViews,
        onChange: count('pageViews')
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
        type: "number",
        min: 0,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show after this many visits', 'blockive-premium-addon-for-block-pro'),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('0 = on the first visit. A visit starts when the visitor opens the site in a new tab.', 'blockive-premium-addon-for-block-pro'),
        value: rules.sessions,
        onChange: count('sessions')
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
        type: "number",
        min: 0,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show at most this many times', 'blockive-premium-addon-for-block-pro'),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('0 = no limit. Per visitor, on top of Frequency.', 'blockive-premium-addon-for-block-pro'),
        value: rules.maxTimes,
        onChange: count('maxTimes')
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Visitor arrived from', 'blockive-premium-addon-for-block-pro'),
        value: rules.referrer,
        options: REFERRER_OPTIONS,
        onChange: set('referrer')
      })
    }), 'contains' === rules.referrer && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Address contains', 'blockive-premium-addon-for-block-pro'),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('E.g. facebook.com or a campaign name.', 'blockive-premium-addon-for-block-pro'),
        value: rules.referrerText,
        onChange: set('referrerText')
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
      className: "components-base-control__label",
      style: {
        margin: '16px 0 8px'
      },
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show on', 'blockive-premium-addon-for-block-pro')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Desktop', 'blockive-premium-addon-for-block-pro'),
      checked: !!rules.desktop,
      onChange: set('desktop')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Tablet', 'blockive-premium-addon-for-block-pro'),
      checked: !!rules.tablet,
      onChange: set('tablet')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Mobile', 'blockive-premium-addon-for-block-pro'),
      checked: !!rules.mobile,
      onChange: set('mobile')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
        type: "datetime-local",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Start showing', 'blockive-premium-addon-for-block-pro'),
        value: rules.startDate,
        onChange: set('startDate')
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
        type: "datetime-local",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Stop showing', 'blockive-premium-addon-for-block-pro'),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Both optional, in the site\'s time zone. Logged-in or logged-out visitors: use Display Conditions.', 'blockive-premium-addon-for-block-pro'),
        value: rules.endDate,
        onChange: set('endDate')
      })
    })]
  });
};
const FREQUENCY_OPTIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Every page load', 'blockive-premium-addon-for-block-pro'),
  value: 'always'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Once per session', 'blockive-premium-addon-for-block-pro'),
  value: 'session'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Once every N days', 'blockive-premium-addon-for-block-pro'),
  value: 'days'
}];
const PopupSettings = ({
  meta,
  setMeta
}) => {
  const triggerType = meta?._bpafb_popup_trigger_type || 'page_load';
  const triggerValue = meta?._bpafb_popup_trigger_value ?? '3000';
  const frequency = meta?._bpafb_popup_frequency || 'session';
  const frequencyDays = meta?._bpafb_popup_frequency_days ?? 1;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Trigger', 'blockive-premium-addon-for-block-pro'),
        value: triggerType,
        options: TRIGGER_TYPE_OPTIONS,
        onChange: value => {
          const defaults = {
            page_load: '3000',
            scroll: '50',
            click: '',
            exit_intent: '',
            element: '',
            inactivity: '30'
          };
          setMeta({
            ...meta,
            _bpafb_popup_trigger_type: value,
            _bpafb_popup_trigger_value: defaults[value] ?? ''
          });
        }
      })
    }), 'page_load' === triggerType && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
        type: "number",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Delay (milliseconds)', 'blockive-premium-addon-for-block-pro'),
        value: triggerValue,
        onChange: value => setMeta({
          ...meta,
          _bpafb_popup_trigger_value: value
        })
      })
    }), 'scroll' === triggerType && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
        type: "number",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Scrolled down (%)', 'blockive-premium-addon-for-block-pro'),
        value: triggerValue,
        onChange: value => setMeta({
          ...meta,
          _bpafb_popup_trigger_value: value
        })
      })
    }), 'click' === triggerType && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('CSS selector', 'blockive-premium-addon-for-block-pro'),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Any element matching this selector opens the popup when clicked. Leave blank to use [data-bpafb-popup-trigger].', 'blockive-premium-addon-for-block-pro'),
        value: triggerValue,
        onChange: value => setMeta({
          ...meta,
          _bpafb_popup_trigger_value: value
        })
      })
    }), 'element' === triggerType && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Element (CSS selector)', 'blockive-premium-addon-for-block-pro'),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Opens when this element scrolls into view, e.g. #pricing or .newsletter.', 'blockive-premium-addon-for-block-pro'),
        value: triggerValue,
        onChange: value => setMeta({
          ...meta,
          _bpafb_popup_trigger_value: value
        })
      })
    }), 'inactivity' === triggerType && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
        type: "number",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Seconds without activity', 'blockive-premium-addon-for-block-pro'),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('No mouse, keyboard, touch, or scrolling for this long.', 'blockive-premium-addon-for-block-pro'),
        value: triggerValue,
        onChange: value => setMeta({
          ...meta,
          _bpafb_popup_trigger_value: value
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Frequency', 'blockive-premium-addon-for-block-pro'),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('How often the same visitor sees this popup again after closing it.', 'blockive-premium-addon-for-block-pro'),
        value: frequency,
        options: FREQUENCY_OPTIONS,
        onChange: value => setMeta({
          ...meta,
          _bpafb_popup_frequency: value
        })
      })
    }), 'days' === frequency && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
        type: "number",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Days', 'blockive-premium-addon-for-block-pro'),
        value: frequencyDays,
        onChange: value => setMeta({
          ...meta,
          _bpafb_popup_frequency_days: Number(value) || 1
        })
      })
    })]
  });
};

/**
 * Searchable post/page picker for the "singular" rule type, backed by
 * core's aggregated `/wp/v2/search` endpoint rather than a single post
 * type's entity-records query, since a "specific post/page" condition can
 * generally target any searchable content. An optional `postType` prop
 * narrows results to one type via the endpoint's own `subtype` param,
 * used only by the Single Post/Page Display Conditions adapter.
 */
const SingularPicker = ({
  value,
  onChange,
  postType
}) => {
  const [options, setOptions] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useState)([]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    let cancelled = false;
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_7___default()({
      path: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_8__.addQueryArgs)('/wp/v2/search', {
        search: '',
        per_page: 20,
        ...(postType ? {
          subtype: postType
        } : {})
      })
    }).then(results => {
      if (cancelled) return;
      setOptions((results || []).map(r => ({
        value: String(r.id),
        label: `${r.title} (${r.subtype || r.type})`
      })));
    }).catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [postType]);
  const handleFilterChange = search => {
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_7___default()({
      path: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_8__.addQueryArgs)('/wp/v2/search', {
        search,
        per_page: 20,
        ...(postType ? {
          subtype: postType
        } : {})
      })
    }).then(results => {
      setOptions((results || []).map(r => ({
        value: String(r.id),
        label: `${r.title} (${r.subtype || r.type})`
      })));
    }).catch(() => {});
  };

  // A saved rule's post might not be in the default results list (for
  // example, if it is older than the 20 newest items). This looks it up
  // directly by ID instead, so opening a saved template shows the real
  // post title, instead of a bare "#id".
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    if (!value || options.some(option => option.value === value)) {
      return;
    }
    let cancelled = false;
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_7___default()({
      path: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_8__.addQueryArgs)('/wp/v2/search', {
        include: [value],
        per_page: 1
      })
    }).then(results => {
      if (cancelled || !results?.length) return;
      const r = results[0];
      setOptions(current => current.some(option => option.value === String(r.id)) ? current : [{
        value: String(r.id),
        label: `${r.title} (${r.subtype || r.type})`
      }, ...current]);
    }).catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [value]);

  // Show a plain "#id" label while the lookup above is still running (or
  // if it fails), instead of losing the selection completely.
  const knownOptions = value && !options.some(option => option.value === value) ? [{
    value,
    label: `#${value}`
  }, ...options] : options;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ComboboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Post/Page', 'blockive-premium-addon-for-block-pro'),
    value: value || '',
    options: knownOptions,
    onFilterValueChange: handleFilterChange,
    onChange: newValue => onChange(newValue || '')
  });
};

/**
 * The Display Conditions "Singular" rule: first pick a Post Type ("Any
 * Post Type" matches any single content), then choose whether it applies
 * to All of that type or one Specific item. The local `mode` value tracks
 * the All/Specific choice on its own, apart from `rule.value` being empty,
 * since "Specific, but no post picked yet" and "All" would otherwise look
 * the same in the saved data.
 */
const SingularConditionFields = ({
  rule,
  onChange
}) => {
  const postTypes = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => select('core').getPostTypes({
    per_page: -1
  })?.filter(pt => pt.viewable) || [], []);
  const postType = rule.postType || '';
  const [mode, setMode] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useState)(() => rule.value ? 'specific' : 'all');
  const currentPostType = postTypes.find(pt => pt.slug === postType);
  const pluralLabel = currentPostType?.name || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Post Types', 'blockive-premium-addon-for-block-pro');
  const singularLabel = POST_TYPE_SINGULAR_NAMES[postType] || pluralLabel;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Post Type', 'blockive-premium-addon-for-block-pro'),
      value: postType,
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Any Post Type', 'blockive-premium-addon-for-block-pro'),
        value: ''
      }, ...postTypes.map(pt => ({
        label: pt.name,
        value: pt.slug
      }))],
      onChange: value => {
        setMode('all');
        onChange({
          ...rule,
          postType: value,
          value: ''
        });
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Which', 'blockive-premium-addon-for-block-pro'),
      value: mode,
      options: [{
        label: postType ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.sprintf)(/* translators: %s: post type plural name, e.g. "Products". */(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('All %s', 'blockive-premium-addon-for-block-pro'), pluralLabel) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('All Singular', 'blockive-premium-addon-for-block-pro'),
        value: 'all'
      }, {
        label: postType ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.sprintf)(/* translators: %s: post type singular name, e.g. "Product". */(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Specific %s', 'blockive-premium-addon-for-block-pro'), singularLabel) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Specific Post/Page', 'blockive-premium-addon-for-block-pro'),
        value: 'specific'
      }],
      onChange: value => {
        setMode(value);
        if ('all' === value) {
          onChange({
            ...rule,
            value: ''
          });
        }
      }
    }), 'specific' === mode && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(SingularPicker, {
      value: rule.value || '',
      onChange: value => onChange({
        ...rule,
        value
      }),
      postType: postType || undefined
    })]
  });
};
const RuleValueField = ({
  rule,
  onChange
}) => {
  const postTypes = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => select('core').getPostTypes({
    per_page: -1
  })?.filter(pt => pt.viewable) || [], []);
  if ('singular' === rule.type) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(SingularConditionFields, {
      rule: rule,
      onChange: onChange
    });
  }
  if ('post_type_archive' === rule.type) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Post type', 'blockive-premium-addon-for-block-pro'),
      value: rule.value || '',
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('— Select —', 'blockive-premium-addon-for-block-pro'),
        value: ''
      }, ...postTypes.map(pt => ({
        label: pt.name,
        value: pt.slug
      }))],
      onChange: onChange
    });
  }
  if ('user_role' === rule.type) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Role', 'blockive-premium-addon-for-block-pro'),
      value: rule.value || '',
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('— Select —', 'blockive-premium-addon-for-block-pro'),
        value: ''
      }, ...ROLE_OPTIONS],
      onChange: onChange
    });
  }
  if ('taxonomy_archive' === rule.type) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Taxonomy (or taxonomy:term_id)', 'blockive-premium-addon-for-block-pro'),
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('e.g. "category" for any category archive, or "category:12" for one specific term.', 'blockive-premium-addon-for-block-pro'),
      value: rule.value || '',
      onChange: onChange
    });
  }
  if ('author_archive' === rule.type) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Author username (blank = any author)', 'blockive-premium-addon-for-block-pro'),
      value: rule.value || '',
      onChange: onChange
    });
  }
  return null;
};
const TemplateKindPanel = () => {
  const [meta, setMeta] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.useEntityProp)('postType', TEMPLATE_POST_TYPE, 'meta');
  const kind = meta?._bpafb_template_kind || 'single';
  const isSingle = 'single' === kind;
  const templateType = meta?._bpafb_template_type || 'post';
  const postTypeOptions = (0,_template_builder_template_settings_panel__WEBPACK_IMPORTED_MODULE_9__.usePostTypeOptions)();

  // Since Single Post/Page's own Post Type is already fixed above, this
  // row's two options are relabeled to match it (like "All Products" /
  // "Specific Product"), instead of using the generic "Entire Site" /
  // "Specific Post/Page" wording the general rule list uses.
  const templateTypeObject = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => select('core').getPostType(templateType), [templateType]);
  const templateTypePluralLabel = templateTypeObject?.name || templateType;
  const templateTypeSingularLabel = POST_TYPE_SINGULAR_NAMES[templateType] || templateTypePluralLabel;
  const rules = Array.isArray(meta?._bpafb_display_condition_rules) ? meta._bpafb_display_condition_rules : [];
  const setRules = nextRules => setMeta({
    ...meta,
    _bpafb_display_condition_rules: nextRules
  });
  const updateRule = (index, patch) => {
    const next = rules.slice();
    next[index] = {
      ...next[index],
      ...patch
    };
    setRules(next);
  };
  const removeRule = index => {
    setRules(rules.filter((_, i) => i !== index));
  };
  const addRule = () => {
    setRules([...rules, {
      type: 'entire_site',
      value: ''
    }]);
  };

  // Single Post/Page has always stored just one condition value, in the
  // free plugin's own older data format (Bpafb_Template_Display_Conditions):
  // either "all" of its Post Type, or a list of specific IDs. This
  // converts that older format into the same Condition-row shape every
  // other kind uses here, reading and writing the older meta fields
  // instead of _bpafb_display_condition_rules, so the free plugin's own
  // code keeps working exactly as before.
  const scope = meta?._bpafb_display_condition_scope || 'all';
  const conditionIds = Array.isArray(meta?._bpafb_display_condition_ids) ? meta._bpafb_display_condition_ids : [];
  const singleRule = {
    type: 'specific' === scope ? 'singular' : 'entire_site',
    value: conditionIds[0] != null ? String(conditionIds[0]) : ''
  };
  const updateSingleRule = patch => {
    const next = {
      ...singleRule,
      ...patch
    };
    if ('singular' === next.type) {
      setMeta({
        ...meta,
        _bpafb_display_condition_scope: 'specific',
        _bpafb_display_condition_ids: next.value ? [Number(next.value)] : []
      });
    } else {
      setMeta({
        ...meta,
        _bpafb_display_condition_scope: 'all',
        _bpafb_display_condition_ids: []
      });
    }
  };
  const priority = Number.isFinite(meta?._bpafb_template_priority) ? meta._bpafb_template_priority : 10;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.PluginDocumentSettingPanel, {
      name: "bpafb-pro-template-type",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Template Type', 'blockive-premium-addon-for-block-pro'),
      className: "bpafb-pro-template-type-panel",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Template Type', 'blockive-premium-addon-for-block-pro'),
          value: kind,
          options: KIND_OPTIONS,
          onChange: value => setMeta({
            ...meta,
            _bpafb_template_kind: value
          })
        })
      }), isSingle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Post Type', 'blockive-premium-addon-for-block-pro'),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Which post type this template overrides the content of. Template Blocks use it to source live preview data.', 'blockive-premium-addon-for-block-pro'),
          value: templateType,
          options: postTypeOptions,
          onChange: value => {
            if (!(0,_template_builder_template_settings_panel__WEBPACK_IMPORTED_MODULE_9__.isFreePostType)(value)) {
              return;
            }
            setMeta({
              ...meta,
              _bpafb_template_type: value
            });
          }
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.PluginDocumentSettingPanel, {
      name: "bpafb-pro-display-conditions",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Display Conditions', 'blockive-premium-addon-for-block-pro'),
      className: "bpafb-pro-display-conditions-panel",
      children: [PLACED_BY_BLOCKS[kind] ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
          className: "bpafb-pro-no-conditions-notice",
          children: PLACED_BY_BLOCKS[kind]
        })
      }) : isSingle ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Flex, {
          align: "flex-end",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FlexBlock, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Condition', 'blockive-premium-addon-for-block-pro'),
              value: singleRule.type,
              options: [{
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.sprintf)(/* translators: %s: post type plural name, e.g. "Products". */(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('All %s', 'blockive-premium-addon-for-block-pro'), templateTypePluralLabel),
                value: 'entire_site'
              }, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.sprintf)(/* translators: %s: post type singular name, e.g. "Product". */(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Specific %s', 'blockive-premium-addon-for-block-pro'), templateTypeSingularLabel),
                value: 'singular'
              }],
              onChange: value => updateSingleRule({
                type: value,
                value: ''
              })
            }), 'singular' === singleRule.type && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(SingularPicker, {
              value: singleRule.value,
              onChange: value => updateSingleRule({
                value
              }),
              postType: templateType
            })]
          })
        })
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
        children: [rules.map((rule, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Flex, {
            align: "flex-end",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FlexBlock, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Condition', 'blockive-premium-addon-for-block-pro'),
                value: rule.type,
                options: ruleTypeOptions(),
                onChange: value => updateRule(index, {
                  type: value,
                  value: '',
                  postType: ''
                })
              }), RULE_TYPES_WITH_VALUE.includes(rule.type) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(RuleValueField, {
                rule: rule,
                onChange: valueOrPatch =>
                // SingularConditionFields (used for 'singular') needs to
                // update both `postType` and `value` at once, so it passes
                // a full patch object. Every other rule type's field just
                // passes the plain new value.
                updateRule(index, 'singular' === rule.type ? valueOrPatch : {
                  value: valueOrPatch
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FlexItem, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
                icon: "trash",
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove condition', 'blockive-premium-addon-for-block-pro'),
                onClick: () => removeRule(index)
              })
            })]
          })
        }, index)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            variant: "secondary",
            onClick: addRule,
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('+ Add condition', 'blockive-premium-addon-for-block-pro')
          })
        }), 0 === rules.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            className: "bpafb-pro-no-conditions-notice",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('This template matches nowhere until you add at least one condition.', 'blockive-premium-addon-for-block-pro')
          })
        })]
      }), !PLACED_BY_BLOCKS[kind] && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
          type: "number",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Priority', 'blockive-premium-addon-for-block-pro'),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('When more than one template matches equally specifically, the lower priority number wins.', 'blockive-premium-addon-for-block-pro'),
          value: priority,
          onChange: value => {
            const parsed = parseInt(value, 10);
            setMeta({
              ...meta,
              _bpafb_template_priority: Number.isNaN(parsed) ? 10 : parsed
            });
          }
        })
      }), isSingle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Full width (no sidebar)', 'blockive-premium-addon-for-block-pro'),
            checked: !!meta?._bpafb_full_width,
            onChange: value => setMeta({
              ...meta,
              _bpafb_full_width: value
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hide theme's post title", 'blockive-premium-addon-for-block-pro'),
            checked: meta?._bpafb_hide_title !== false,
            onChange: value => setMeta({
              ...meta,
              _bpafb_hide_title: value
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hide theme's featured image", 'blockive-premium-addon-for-block-pro'),
            checked: meta?._bpafb_hide_featured_image !== false,
            onChange: value => setMeta({
              ...meta,
              _bpafb_hide_featured_image: value
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hide comments', 'blockive-premium-addon-for-block-pro'),
            checked: !!meta?._bpafb_hide_comments,
            onChange: value => setMeta({
              ...meta,
              _bpafb_hide_comments: value
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hide post navigation (previous/next)', 'blockive-premium-addon-for-block-pro'),
            checked: !!meta?._bpafb_hide_post_nav,
            onChange: value => setMeta({
              ...meta,
              _bpafb_hide_post_nav: value
            })
          })
        })]
      }), 'popup' === kind && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(PopupSettings, {
        meta: meta,
        setMeta: setMeta
      }), 'popup' === kind && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(PopupRules, {
        meta: meta,
        setMeta: setMeta
      })]
    })]
  });
};
function registerTemplateKindPanel() {
  (0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__.registerPlugin)('bpafb-pro-template-kind', {
    render: TemplateKindPanel
  });
}

/***/ },

/***/ "./src/template-builder/template-settings-panel.js"
/*!*********************************************************!*\
  !*** ./src/template-builder/template-settings-panel.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ registerTemplateSettingsPanel),
/* harmony export */   isFreePostType: () => (/* binding */ isFreePostType),
/* harmony export */   usePostTypeOptions: () => (/* binding */ usePostTypeOptions)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







const TEMPLATE_POST_TYPE = window.bpafbTemplateBuilder?.postType || 'blockive_template';

// This is just a copy, sent from PHP, of
// Bpafb_Template_Post_Type::get_free_template_types(). The PHP side is
// what actually controls this on the live site. A Pro build changes the
// `bpafb_free_template_types` filter to return every viewable post type,
// which unlocks the options below on its own.
const FREE_POST_TYPES = window.bpafbTemplateBuilder?.freePostTypes || ['post', 'page'];
const isFreePostType = slug => FREE_POST_TYPES.includes(slug);

/**
 * Builds the list of post types a template can target, using the site's
 * real viewable post types. Each one is either open to use, or marked
 * "(Pro)", based on FREE_POST_TYPES. This is exported so Pro's own
 * Template Type panel can use the same list and the same rules (see
 * blockive-premium-addon-for-block-pro/src/template-builder-pro/template-kind-panel.js).
 *
 * @return {Array<{label: string, value: string, disabled?: boolean}>}
 */
function usePostTypeOptions() {
  const postTypes = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => select('core').getPostTypes({
    per_page: -1
  })?.filter(postType => postType.viewable) || [], []);
  return postTypes.length ? postTypes.map(postType => {
    const free = isFreePostType(postType.slug);
    return {
      label: free ? postType.name : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.sprintf)(/* translators: %s: post type name, e.g. "Products". */
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('%s (Pro)', 'blockive-premium-addon-for-block'), postType.name),
      value: postType.slug,
      disabled: !free
    };
  }) : [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Post', 'blockive-premium-addon-for-block'),
    value: 'post'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Page', 'blockive-premium-addon-for-block'),
    value: 'page'
  }];
}
const TemplateSettingsPanel = () => {
  const [meta, setMeta] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.useEntityProp)('postType', TEMPLATE_POST_TYPE, 'meta');
  const templateType = meta?._bpafb_template_type || 'post';
  const postTypeOptions = usePostTypeOptions();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.PluginDocumentSettingPanel, {
    name: "bpafb-template-settings",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Template Settings', 'blockive-premium-addon-for-block'),
    className: "bpafb-template-settings-panel",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Template Type', 'blockive-premium-addon-for-block'),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('The post type this template is designed for. Template Blocks use it to source live preview data and to know which dynamic fields apply. The free version supports Post and Page templates.', 'blockive-premium-addon-for-block'),
        value: templateType,
        options: postTypeOptions,
        onChange: value => {
          if (!isFreePostType(value)) {
            return;
          }
          setMeta({
            ...meta,
            _bpafb_template_type: value
          });
        }
      })
    })
  });
};
function registerTemplateSettingsPanel() {
  (0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__.registerPlugin)('bpafb-template-settings', {
    render: TemplateSettingsPanel
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

/***/ "@wordpress/api-fetch"
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
(module) {

module.exports = window["wp"]["apiFetch"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["components"];

/***/ },

/***/ "@wordpress/core-data"
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
(module) {

module.exports = window["wp"]["coreData"];

/***/ },

/***/ "@wordpress/data"
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["data"];

/***/ },

/***/ "@wordpress/editor"
/*!********************************!*\
  !*** external ["wp","editor"] ***!
  \********************************/
(module) {

module.exports = window["wp"]["editor"];

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

/***/ "@wordpress/plugins"
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["plugins"];

/***/ },

/***/ "@wordpress/url"
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
(module) {

module.exports = window["wp"]["url"];

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
/*!*******************************************!*\
  !*** ./src/template-builder-pro/index.js ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _template_kind_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template-kind-panel */ "./src/template-builder-pro/template-kind-panel.js");
/* harmony import */ var _kind_conflict_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kind-conflict-guard */ "./src/template-builder-pro/kind-conflict-guard.js");
/* harmony import */ var _sticky_header_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sticky-header-panel */ "./src/template-builder-pro/sticky-header-panel.js");
/* harmony import */ var _header_footer_layout_panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header-footer-layout-panel */ "./src/template-builder-pro/header-footer-layout-panel.js");





(0,_template_kind_panel__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_kind_conflict_guard__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_header_footer_layout_panel__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_sticky_header_panel__WEBPACK_IMPORTED_MODULE_3__["default"])();

// The free plugin's own "Template Settings" and "Display Conditions" panels
// (synced verbatim into this build) are fully superseded by the panels
// above, which present the exact same Post Type / scope data through one
// consistent Template Type + Display Conditions flow shared
// with every other kind. Hiding them here - rather than editing the synced
// files, which would just be overwritten by the next sync - is the same
// technique used to replace a document panel that isn't
// its own; it's reactive, so it doesn't matter whether this runs before
// or after the free plugin's own panels register.
// Panel ids follow Gutenberg's own `${pluginName}/${panelName}` convention;
// both free panels use the same string for their plugin name and panel name.
['bpafb-template-settings', 'bpafb-display-conditions'].forEach(id => {
  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)('core/edit-post').removeEditorPanel(`${id}/${id}`);
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map