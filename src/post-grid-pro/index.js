/**
 * Adds a "Loop Template (Pro)" control to the free plugin's Post Grid
 * block, letting it render a "loop-item"-kind Blockive Template per queried
 * post instead of its own built-in card layout (see
 * Bpafb_Pro_Loop_Builder::maybe_render_loop_template() for the frontend
 * side).
 *
 * Post Grid's own block.json/edit.js are synced verbatim from the free
 * plugin, so this attaches from the outside via the standard
 * `blocks.registerBlockType` (adds the attribute) and `editor.BlockEdit`
 * (adds the control) filters, rather than editing that block's source -
 * the same extensibility mechanism any third-party plugin would use to
 * extend a block it doesn't own.
 */
import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

const POST_GRID_BLOCK = 'blockive-premium-addon-for-block/post-grid';

addFilter( 'blocks.registerBlockType', 'blockive-pro/post-grid-loop-template-attribute', ( settings, name ) => {
	if ( name !== POST_GRID_BLOCK ) {
		return settings;
	}
	return {
		...settings,
		attributes: {
			...settings.attributes,
			bpafbLoopTemplateId: { type: 'number', default: 0 },
		},
	};
} );

const withLoopTemplateControl = createHigherOrderComponent( ( BlockEdit ) => ( props ) => {
	if ( props.name !== POST_GRID_BLOCK ) {
		return <BlockEdit { ...props } />;
	}

	const loopTemplateOptions = useSelect( ( select ) => {
		const records = select( 'core' ).getEntityRecords( 'postType', 'blockive_template', {
			status: 'publish',
			per_page: -1,
			context: 'view',
		} );

		const loopTemplates = ( records || [] ).filter(
			( record ) => record.meta?._bpafb_template_kind === 'loop-item'
		);

		return [
			{ label: __( 'Default card layout', 'blockive-premium-addon-for-block-pro' ), value: 0 },
			...loopTemplates.map( ( record ) => ( {
				label: record.title?.rendered || `#${ record.id }`,
				value: record.id,
			} ) ),
		];
	}, [] );

	return (
		<>
			<BlockEdit { ...props } />
			<InspectorControls>
				<PanelBody title={ __( 'Loop Template (Pro)', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
					<SelectControl
						label={ __( 'Item template', 'blockive-premium-addon-for-block-pro' ) }
						help={ __(
							'Renders a "Loop Item" Blockive Template for each post instead of the built-in card layout.',
							'blockive-premium-addon-for-block-pro'
						) }
						value={ props.attributes.bpafbLoopTemplateId || 0 }
						options={ loopTemplateOptions }
						onChange={ ( value ) => props.setAttributes( { bpafbLoopTemplateId: Number( value ) } ) }
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
}, 'withLoopTemplateControl' );

addFilter( 'editor.BlockEdit', 'blockive-pro/post-grid-loop-template-control', withLoopTemplateControl );
