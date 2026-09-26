import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import './style.css';
import './editor.css';
import Edit from './edit';
import metadata from './block.json';

registerBlockType( metadata.name, {
	...metadata,
	edit: Edit,
	// Dynamic block: render.php puts each saved slide into the carousel.
	save: () => <InnerBlocks.Content />,
} );
