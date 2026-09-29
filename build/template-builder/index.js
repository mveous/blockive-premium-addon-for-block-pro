/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/template-builder/display-conditions-panel.js"
/*!**********************************************************!*\
  !*** ./src/template-builder/display-conditions-panel.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ registerDisplayConditionsPanel)
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

// Mirrors Bpafb_Template_Display_Conditions::is_specific_scope_enabled() -
// the PHP side stays the single source of truth, this is only its
// localized copy.
const SPECIFIC_SCOPE_ENABLED = !!window.bpafbTemplateBuilder?.specificScopeEnabled;
const DisplayConditionsPanel = () => {
  const [meta, setMeta] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.useEntityProp)('postType', TEMPLATE_POST_TYPE, 'meta');
  const targetPostType = meta?._bpafb_template_type || 'post';
  const scope = meta?._bpafb_display_condition_scope || 'all';
  const priority = Number.isFinite(meta?._bpafb_template_priority) ? meta._bpafb_template_priority : 10;
  const targetPostTypeLabel = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => select('core').getPostType(targetPostType)?.labels?.name || targetPostType, [targetPostType]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.PluginDocumentSettingPanel, {
    name: "bpafb-display-conditions",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Display Conditions', 'blockive-premium-addon-for-block'),
    className: "bpafb-display-conditions-panel",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Apply this template to', 'blockive-premium-addon-for-block'),
        value: scope,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.sprintf)(/* translators: %s: post type name, e.g. "Products". */
          (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('All %s', 'blockive-premium-addon-for-block'), targetPostTypeLabel),
          value: 'all'
        }, {
          label: SPECIFIC_SCOPE_ENABLED ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Specific posts', 'blockive-premium-addon-for-block') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.sprintf)(/* translators: %s: "(Pro)" suffix marking this option as a Pro-only feature. */
          (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Specific posts %s', 'blockive-premium-addon-for-block'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('(Pro)', 'blockive-premium-addon-for-block')),
          value: 'specific',
          disabled: !SPECIFIC_SCOPE_ENABLED
        }],
        onChange: value => {
          // Disabled options can't be picked, but guard anyway so
          // the meta can never be set to "specific" from here.
          if ('specific' === value && !SPECIFIC_SCOPE_ENABLED) {
            return;
          }
          setMeta({
            ...meta,
            _bpafb_display_condition_scope: value
          });
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
        type: "number",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Priority', 'blockive-premium-addon-for-block'),
        value: priority,
        onChange: value => {
          const parsed = parseInt(value, 10);
          setMeta({
            ...meta,
            _bpafb_template_priority: Number.isNaN(parsed) ? 10 : parsed
          });
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Full width (no sidebar)', 'blockive-premium-addon-for-block'),
        checked: !!meta?._bpafb_full_width,
        onChange: value => setMeta({
          ...meta,
          _bpafb_full_width: value
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hide theme's post title", 'blockive-premium-addon-for-block'),
        checked: meta?._bpafb_hide_title !== false,
        onChange: value => setMeta({
          ...meta,
          _bpafb_hide_title: value
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hide theme's featured image", 'blockive-premium-addon-for-block'),
        checked: meta?._bpafb_hide_featured_image !== false,
        onChange: value => setMeta({
          ...meta,
          _bpafb_hide_featured_image: value
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hide comments', 'blockive-premium-addon-for-block'),
        checked: !!meta?._bpafb_hide_comments,
        onChange: value => setMeta({
          ...meta,
          _bpafb_hide_comments: value
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hide post navigation (previous/next)', 'blockive-premium-addon-for-block'),
        checked: !!meta?._bpafb_hide_post_nav,
        onChange: value => setMeta({
          ...meta,
          _bpafb_hide_post_nav: value
        })
      })
    })]
  });
};
function registerDisplayConditionsPanel() {
  (0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__.registerPlugin)('bpafb-display-conditions', {
    render: DisplayConditionsPanel
  });
}

/***/ },

/***/ "./src/template-builder/dynamic-content-control.js"
/*!*********************************************************!*\
  !*** ./src/template-builder/dynamic-content-control.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ registerDynamicContentControl)
/* harmony export */ });
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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






/**
 * Adds a "Dynamic Content" inspector panel to every block while editing a
 * Blockive Template. Only registered inside the template-builder bundle,
 * which is itself only enqueued on the `blockive_template` editor screen
 * (see Bpafb_Template_Builder::enqueue_assets), so this never affects the
 * editor for posts/pages/products/other post types.
 */

const withDynamicContentControl = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.createHigherOrderComponent)(BlockEdit => props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(BlockEdit, {
    ...props
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    group: "advanced",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Dynamic Content', 'blockive-premium-addon-for-block'),
      initialOpen: false,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bind this block to dynamic data (post fields, custom fields, template variables).', 'blockive-premium-addon-for-block')
      })
    })
  })]
}), 'withDynamicContentControl');
function registerDynamicContentControl() {
  (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('editor.BlockEdit', 'blockive-premium-addon-for-block/dynamic-content', withDynamicContentControl);
}

/***/ },

/***/ "./src/template-builder/index.js"
/*!***************************************!*\
  !*** ./src/template-builder/index.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/template-builder/style.css");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./src/template-builder/store.js");
/* harmony import */ var _template_settings_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template-settings-panel */ "./src/template-builder/template-settings-panel.js");
/* harmony import */ var _display_conditions_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display-conditions-panel */ "./src/template-builder/display-conditions-panel.js");
/* harmony import */ var _dynamic_content_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dynamic-content-control */ "./src/template-builder/dynamic-content-control.js");
/* harmony import */ var _save_conflict_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save-conflict-guard */ "./src/template-builder/save-conflict-guard.js");






(0,_store__WEBPACK_IMPORTED_MODULE_1__.registerTemplateEditorStore)();
(0,_template_settings_panel__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_display_conditions_panel__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_dynamic_content_control__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_save_conflict_guard__WEBPACK_IMPORTED_MODULE_5__["default"])();

/***/ },

/***/ "./src/template-builder/save-conflict-guard.js"
/*!*****************************************************!*\
  !*** ./src/template-builder/save-conflict-guard.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ registerSaveConflictGuard)
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
 * Classname of the button that actually performs the save - shared by the
 * "Publish" button inside the pre-publish flyout and the "Update" button
 * shown once a template is already published, so intercepting clicks on it
 * covers both the first publish and every later update.
 */
const PUBLISH_BUTTON_SELECTOR = '.editor-post-publish-button__button';
const getRecordTitle = record => {
  if (!record) {
    return '';
  }
  if (typeof record.title === 'string') {
    return record.title;
  }
  if (record.title && typeof record.title === 'object') {
    return record.title.rendered || record.title.raw || '';
  }
  return '';
};
const SaveConflictGuard = () => {
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
  const targetPostType = meta?._bpafb_template_type || 'post';
  const scope = meta?._bpafb_display_condition_scope || 'all';
  // _bpafb_template_kind is a Pro-only meta key (see Bpafb_Pro_Template_Kinds
  // in the Pro plugin) marking a template for a header/footer/archive/etc.
  // location instead of this "single post/page content override" concept -
  // absent here entirely (free version, or a template never touched by the
  // Pro Kind control) always means "single". This guard's whole premise -
  // "all Posts" vs. "all Posts" - only makes sense between two single-kind
  // templates; a Header-kind template left at the default Template Type/
  // scope values (never having a reason to change fields that don't apply
  // to it) must never be treated as conflicting with an actual single-kind
  // template, on either side of the comparison below.
  const kind = meta?._bpafb_template_kind || 'single';
  const targetPostTypeLabel = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select('core').getPostType(targetPostType)?.labels?.name || targetPostType, [targetPostType]);
  const conflictingTemplate = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    if (scope !== 'all' || kind !== 'single') {
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
    return records.find(record => (record.meta?._bpafb_template_type || 'post') === targetPostType && (record.meta?._bpafb_display_condition_scope || 'all') === 'all' && (record.meta?._bpafb_template_kind || 'single') === 'single') || null;
  }, [scope, kind, targetPostType, currentPostId]);
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
  const handleCancel = () => {
    if (isSaving) {
      return;
    }
    setIsConfirmOpen(false);
  };
  const handleConfirm = async () => {
    setIsSaving(true);
    try {
      // Save the current template first - only demote the previous one
      // once we know this save actually succeeded, so a failed/blocked
      // save (e.g. Gutenberg refuses to save an empty, untitled post)
      // never leaves the post type with no active template at all.
      await editPost({
        status: 'publish'
      });
      await savePost();
      const saveSucceeded = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.select)('core/editor').didPostSaveRequestSucceed();
      if (saveSucceeded && conflictingTemplate) {
        await saveEntityRecord('postType', TEMPLATE_POST_TYPE, {
          id: conflictingTemplate.id,
          status: 'draft'
        });
      }
    } finally {
      setIsSaving(false);
      setIsConfirmOpen(false);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Replace the existing template?', 'blockive-premium-addon-for-block'),
    onRequestClose: handleCancel,
    className: "bpafb-template-conflict-modal",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.sprintf)(/* translators: 1: post type name, e.g. "Posts". 2: title of the existing conflicting template. */
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('You already have a template ("%2$s") applied to all %1$s. If you save this template, it will become the active one and "%2$s" will be moved to Draft.', 'blockive-premium-addon-for-block'), targetPostTypeLabel, getRecordTitle(conflictingTemplate))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "bpafb-template-conflict-modal__actions",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "tertiary",
        onClick: handleCancel,
        disabled: isSaving,
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Cancel', 'blockive-premium-addon-for-block')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "primary",
        onClick: handleConfirm,
        isBusy: isSaving,
        disabled: isSaving,
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Save & Move Previous to Draft', 'blockive-premium-addon-for-block')
      })]
    })]
  });
};
function registerSaveConflictGuard() {
  (0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__.registerPlugin)('bpafb-template-save-conflict-guard', {
    render: SaveConflictGuard
  });
}

/***/ },

/***/ "./src/template-builder/store.js"
/*!***************************************!*\
  !*** ./src/template-builder/store.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TEMPLATE_EDITOR_STORE: () => (/* binding */ TEMPLATE_EDITOR_STORE),
/* harmony export */   registerTemplateEditorStore: () => (/* binding */ registerTemplateEditorStore)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);

const DEFAULT_STATE = {
  previewMode: false,
  context: {},
  variables: {}
};
const actions = {
  setPreviewMode(previewMode) {
    return {
      type: 'SET_PREVIEW_MODE',
      previewMode
    };
  },
  setContext(context) {
    return {
      type: 'SET_CONTEXT',
      context
    };
  },
  setVariable(name, value) {
    return {
      type: 'SET_VARIABLE',
      name,
      value
    };
  }
};
const selectors = {
  isPreviewMode(state) {
    return state.previewMode;
  },
  getContext(state) {
    return state.context;
  },
  getVariables(state) {
    return state.variables;
  },
  getVariable(state, name) {
    return state.variables[name];
  }
};
function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case 'SET_PREVIEW_MODE':
      return {
        ...state,
        previewMode: action.previewMode
      };
    case 'SET_CONTEXT':
      return {
        ...state,
        context: action.context
      };
    case 'SET_VARIABLE':
      return {
        ...state,
        variables: {
          ...state.variables,
          [action.name]: action.value
        }
      };
    default:
      return state;
  }
}

// Central store for Template Context / Template Variables / Template Preview
// state. UI features (Template Preview toggle, variable pickers, dynamic
// content bindings) should read/write through this store rather than local
// component state, so they stay in sync across panels and blocks.
const TEMPLATE_EDITOR_STORE = 'blockive/template-editor';
function registerTemplateEditorStore() {
  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)(TEMPLATE_EDITOR_STORE, {
    reducer,
    actions,
    selectors
  }));
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

/***/ "./src/template-builder/style.css"
/*!****************************************!*\
  !*** ./src/template-builder/style.css ***!
  \****************************************/
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

/***/ "@wordpress/plugins"
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["plugins"];

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
/******/ 			"template-builder/index": 0,
/******/ 			"template-builder/style-index": 0
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
/******/ 	let __webpack_exports__ = __webpack_require__.O(undefined, ["template-builder/style-index"], () => (__webpack_require__("./src/template-builder/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map