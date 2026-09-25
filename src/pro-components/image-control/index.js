import { __ } from '@wordpress/i18n';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { BaseControl, Button } from '@wordpress/components';

import '../icon-picker/editor.css';

/**
 * Media Library picker with a thumbnail preview, Replace, and Remove.
 * Calls onChange( { id, url, alt } ), or onChange( { id: 0, url: '', alt: '' } )
 * on remove. Pro-only: kept out of src/components (synced from the free plugin).
 */
export default function ImageControl( { label, id, url, onChange } ) {
	return (
		<BaseControl label={ label } className="bpafb-image-control">
			<MediaUploadCheck>
				<MediaUpload
					allowedTypes={ [ 'image' ] }
					value={ id }
					onSelect={ ( media ) => onChange( { id: media.id, url: media.url, alt: media.alt || '' } ) }
					render={ ( { open } ) => (
						<div>
							{ url && (
								<button type="button" className="bpafb-image-control__preview" onClick={ open } aria-label={ __( 'Replace image', 'blockive-premium-addon-for-block-pro' ) }>
									<img src={ url } alt="" />
								</button>
							) }
							<div className="bpafb-image-control__actions">
								<Button variant="secondary" size="small" onClick={ open }>
									{ url ? __( 'Replace', 'blockive-premium-addon-for-block-pro' ) : __( 'Choose Image', 'blockive-premium-addon-for-block-pro' ) }
								</Button>
								{ url && (
									<Button variant="link" isDestructive size="small" onClick={ () => onChange( { id: 0, url: '', alt: '' } ) }>
										{ __( 'Remove', 'blockive-premium-addon-for-block-pro' ) }
									</Button>
								) }
							</div>
						</div>
					) }
				/>
			</MediaUploadCheck>
		</BaseControl>
	);
}
