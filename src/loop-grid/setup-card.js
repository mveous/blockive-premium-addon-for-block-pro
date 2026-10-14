import { __ } from '@wordpress/i18n';
import { Placeholder, SelectControl, Button } from '@wordpress/components';

import StepperControl from '../components/stepper-control';
import StyleTilePicker from '../components/style-tile-picker';
import useTemplateOptions from '../components/use-template-options';

import './setup-card.css';

/**
 * Shown in the canvas while a Loop Grid has no Loop Item template yet, so
 * a new block can be set up right where it was inserted (layout, columns,
 * template) instead of only through the sidebar. Choosing a template is
 * the last step: as soon as one is picked, the real preview takes over.
 */
export default function SetupCard( { attributes, setAttributes, layoutOptions } ) {
	const { masonry, columns } = attributes;
	const templateOptions = useTemplateOptions( 'loop-item' );
	const hasTemplates = templateOptions.length > 1;

	const adminBase = window.location.href.split( '/wp-admin/' )[ 0 ] + '/wp-admin/';
	const newTemplateUrl = `${ adminBase }post-new.php?post_type=blockive_template&bpafb_kind=loop-item`;

	return (
		<Placeholder
			className="bpafb-pro-loop-grid-setup"
			icon="grid-view"
			label={ __( 'Loop Grid', 'blockive-premium-addon-for-block-pro' ) }
			instructions={ __( 'Pick a layout, then the template each item is shown with.', 'blockive-premium-addon-for-block-pro' ) }
		>
			<div className="bpafb-pro-loop-grid-setup__body">
				<div className="bpafb-pro-loop-grid-setup__step">
					<span className="bpafb-pro-loop-grid-setup__number">1</span>
					<div className="bpafb-pro-loop-grid-setup__field">
						<StyleTilePicker
							label={ __( 'Layout', 'blockive-premium-addon-for-block-pro' ) }
							value={ masonry ? 'masonry' : 'grid' }
							options={ layoutOptions }
							onChange={ ( value ) => setAttributes( { masonry: value === 'masonry' } ) }
						/>
						<StepperControl
							label={ __( 'Columns', 'blockive-premium-addon-for-block-pro' ) }
							value={ columns }
							onChange={ ( value ) => setAttributes( { columns: value } ) }
							min={ 1 }
							max={ 6 }
						/>
					</div>
				</div>

				<div className="bpafb-pro-loop-grid-setup__step">
					<span className="bpafb-pro-loop-grid-setup__number">2</span>
					<div className="bpafb-pro-loop-grid-setup__field">
						{ hasTemplates ? (
							<SelectControl
								label={ __( 'Loop Item Template', 'blockive-premium-addon-for-block-pro' ) }
								value={ 0 }
								options={ templateOptions }
								onChange={ ( value ) => setAttributes( { templateId: Number( value ) } ) }
								__nextHasNoMarginBottom
							/>
						) : (
							<p className="bpafb-pro-loop-grid-setup__hint">
								{ __( "You don't have a Loop Item template yet. Create one to design how each item looks.", 'blockive-premium-addon-for-block-pro' ) }
							</p>
						) }
						<Button
							variant={ hasTemplates ? 'link' : 'primary' }
							href={ newTemplateUrl }
							target="_blank"
							rel="noopener noreferrer"
						>
							{ __( '+ Create a new Loop Item template', 'blockive-premium-addon-for-block-pro' ) }
						</Button>
					</div>
				</div>
			</div>
		</Placeholder>
	);
}
