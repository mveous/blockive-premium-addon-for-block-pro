import { dispatch } from '@wordpress/data';
import registerTemplateKindPanel from './template-kind-panel';
import registerKindConflictGuard from './kind-conflict-guard';

registerTemplateKindPanel();
registerKindConflictGuard();

// The free plugin's own "Template Settings" and "Display Conditions" panels
// (synced verbatim into this build) are fully superseded by the two panels
// above, which present the exact same Post Type / scope data through one
// consistent Elementor-style Template Type + Display Conditions flow shared
// with every other kind. Hiding them here - rather than editing the synced
// files, which would just be overwritten by the next sync - is the same
// technique plugins like Yoast use to replace a document panel that isn't
// their own; it's reactive, so it doesn't matter whether this runs before
// or after the free plugin's own panels register.
// Panel ids follow Gutenberg's own `${pluginName}/${panelName}` convention;
// both free panels use the same string for their plugin name and panel name.
[ 'bpafb-template-settings', 'bpafb-display-conditions' ].forEach( ( id ) => {
	dispatch( 'core/edit-post' ).removeEditorPanel( `${ id }/${ id }` );
} );
