import { dispatch } from '@wordpress/data';
import { unregisterPlugin } from '@wordpress/plugins';
import registerTemplateKindPanel from './template-kind-panel';
import registerTemplateKindPickerModal from './template-kind-picker-modal';
import registerKindConflictGuard from './kind-conflict-guard';
import registerStickyHeaderPanel from './sticky-header-panel';
import registerHeaderFooterLayoutPanel from './header-footer-layout-panel';

registerTemplateKindPanel();
registerTemplateKindPickerModal();
registerKindConflictGuard();
registerHeaderFooterLayoutPanel();
registerStickyHeaderPanel();

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
[ 'bpafb-template-settings', 'bpafb-display-conditions' ].forEach( ( id ) => {
	dispatch( 'core/edit-post' ).removeEditorPanel( `${ id }/${ id }` );
} );

// Same idea for the free plugin's own "Create a New Template" kind-picker
// modal (synced verbatim into this build as
// template-builder/template-kind-picker-modal.js): registerTemplateKindPickerModal()
// above already covers every kind (Single/Header/Footer plus Archive/Search/
// 404/Popup/etc.), so running both would pop two overlapping modals on a
// brand-new template. unregisterPlugin() is safe to call even if the free
// plugin's own registerPlugin() call for this hasn't run yet - whichever
// order they run in, only one ends up registered.
unregisterPlugin( 'bpafb-template-kind-picker' );
