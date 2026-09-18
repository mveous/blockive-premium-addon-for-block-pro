/**
 * Adds a "Loop Template (Pro)" control to the free plugin's Post Grid
 * block, letting it show a "loop-item"-kind Blockive Template for each
 * post it lists, instead of its own built-in card layout (see
 * Bpafb_Pro_Loop_Builder::maybe_render_loop_template() for the live-site side).
 *
 * Post Grid's own block.json and edit.js files are copied over as-is from
 * the free plugin, so this adds to it from the outside, using the normal
 * `blocks.registerBlockType` filter (to add the setting) and
 * `editor.BlockEdit` filter (to add the control), instead of editing that
 * block's own files.
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
