import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import './style.css';
import Edit from './edit';
import metadata from './block.json';

registerBlockType( metadata.name, {
	...metadata,
	edit: Edit,
	// Dynamic block: render.php wraps these saved inner blocks in the
	// flex container markup.
	save: () => <InnerBlocks.Content />,
} );
