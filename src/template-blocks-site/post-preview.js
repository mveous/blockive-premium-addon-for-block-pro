import { __ } from '@wordpress/i18n';
import { Disabled, Spinner } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';

import usePreviewContext from '../template-blocks/shared/use-preview-context';

/**
 * Editor preview for a single-post Template Block (Author Box, Post
 * Comments): the block's own render.php, run for the newest post of the
 * template's type. The block renderer sets that post up as the global
 * post when given `post_id`, which is where get_post_id() finds it.
 *
 * @param {Object} props
 * @param {string} props.name       Block name.
 * @param {Object} props.attributes Block attributes.
 * @param {string} props.emptyText  Shown when the block renders nothing.
 */
export default function PostPreview( { name, attributes, emptyText } ) {
	const { record, isResolving } = usePreviewContext();

	if ( isResolving ) {
		return <Spinner />;
	}
	if ( ! record ) {
		return <p className="bpafb-tb-editor-note">{ __( 'Publish a post of this template\'s type to preview this block.', 'blockive-premium-addon-for-block-pro' ) }</p>;
	}

	return (
		<Disabled>
			<ServerSideRender
				block={ name }
				attributes={ attributes }
				urlQueryArgs={ { post_id: record.id } }
				EmptyResponsePlaceholder={ () => <p className="bpafb-tb-editor-note">{ emptyText }</p> }
			/>
		</Disabled>
	);
}
