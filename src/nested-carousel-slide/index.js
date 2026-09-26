import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, useInnerBlocksProps, BlockControls, BlockVerticalAlignmentToolbar } from '@wordpress/block-editor';
import metadata from './block.json';

// Styles live with the Nested Carousel (src/nested-carousel/style.css).

const TEMPLATE = [
	[ 'core/heading', { level: 3, placeholder: __( 'Slide title', 'blockive-premium-addon-for-block-pro' ) } ],
	[ 'core/paragraph', { placeholder: __( 'Add text, images, buttons, or any other blocks…', 'blockive-premium-addon-for-block-pro' ) } ],
];

const className = ( verticalAlign ) => 'bpafb-nested-carousel-slide' + ( verticalAlign ? ` is-vertically-aligned-${ verticalAlign }` : '' );

registerBlockType( metadata.name, {
	...metadata,
	edit: ( { attributes, setAttributes } ) => {
		const innerBlocksProps = useInnerBlocksProps( useBlockProps( { className: className( attributes.verticalAlign ) } ), {
			template: TEMPLATE,
			templateLock: false,
		} );
		return (
			<>
				<BlockControls>
					<BlockVerticalAlignmentToolbar value={ attributes.verticalAlign } onChange={ ( value ) => setAttributes( { verticalAlign: value || '' } ) } />
				</BlockControls>
				<div { ...innerBlocksProps } />
			</>
		);
	},
	save: ( { attributes } ) => <div { ...useInnerBlocksProps.save( useBlockProps.save( { className: className( attributes.verticalAlign ) } ) ) } />,
} );
