import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, Button, Disabled, Placeholder } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import ServerSideRender from '@wordpress/server-side-render';

import useTemplateOptions from '../components/use-template-options';

export default function Edit( { attributes, setAttributes } ) {
	const { templateId } = attributes;
	const options = useTemplateOptions( 'section', __( 'Choose a section…', 'blockive-premium-addon-for-block-pro' ) );

	// The template being edited, if this block sits inside one: it cannot
	// show itself.
	const currentId = useSelect( ( select ) => {
		const editor = select( 'core/editor' );
		return editor && editor.getCurrentPostType() === 'blockive_template' ? editor.getCurrentPostId() : 0;
	}, [] );
	const choices = options.filter( ( option ) => option.value !== currentId );

	const adminBase = window.location.href.split( '/wp-admin/' )[ 0 ] + '/wp-admin/';
	const picker = (
		<SelectControl
			label={ __( 'Section', 'blockive-premium-addon-for-block-pro' ) }
			value={ templateId || 0 }
			options={ choices }
			onChange={ ( value ) => setAttributes( { templateId: Number( value ) } ) }
			__nextHasNoMarginBottom
		/>
	);
	const links = (
		<>
			{ !! templateId && (
				<Button variant="link" href={ `${ adminBase }post.php?post=${ templateId }&action=edit` } target="_blank" rel="noopener noreferrer">
					{ __( 'Edit this section', 'blockive-premium-addon-for-block-pro' ) }
				</Button>
			) }{ ' ' }
			<Button variant="link" href={ `${ adminBase }post-new.php?post_type=blockive_template` } target="_blank" rel="noopener noreferrer">
				{ __( '+ Create a new section', 'blockive-premium-addon-for-block-pro' ) }
			</Button>
		</>
	);

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Template', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
					{ picker }
					<p className="components-base-control__help">
						{ __( 'Shows a Blockive Template of the "Section" type. Edits to the section appear everywhere it is used.', 'blockive-premium-addon-for-block-pro' ) }
					</p>
					{ links }
				</PanelBody>
			</InspectorControls>

			<div { ...useBlockProps() }>
				{ templateId && templateId !== currentId ? (
					<Disabled>
						<ServerSideRender block="blockive-premium-addon-for-block/template" attributes={ { templateId } } />
					</Disabled>
				) : (
					<Placeholder icon="layout" label={ __( 'Template', 'blockive-premium-addon-for-block-pro' ) } instructions={ __( 'Choose a Section template to show here.', 'blockive-premium-addon-for-block-pro' ) }>
						<div className="bpafb-template-embed__placeholder">
							{ picker }
							<div>{ links }</div>
						</div>
					</Placeholder>
				) }
			</div>
		</>
	);
}
