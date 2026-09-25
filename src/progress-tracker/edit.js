import { __, sprintf } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { PanelBody, SelectControl, RangeControl, TextControl, ToggleControl } from '@wordpress/components';

import InspectorTabs from '../components/inspector-tabs';
import AdvancedTab from '../components/advanced-tab';
import ColorStateControls from '../components/color-state-controls';
import { cssVars } from '../template-blocks-site/shared';

export default function Edit( { attributes, setAttributes } ) {
	const { type, position, corner, relativeTo, selector, showPercentage, height, offset, circleSize, circleWidth, fillColor, trackColor, percentColor } = attributes;
	const set = ( key ) => ( val ) => setAttributes( { [ key ]: val } );
	const circular = type === 'circular';

	// The editor shows it in place, 40% full, instead of fixed to the window.
	const blockProps = useBlockProps( {
		className: `bpafb-progress bpafb-progress--${ circular ? 'circular' : 'horizontal' } bpafb-progress--at-${ circular ? corner : position } is-preview`,
		style: {
			'--bpafb-progress': 0.4,
			...cssVars( {
				'--bpafb-progress-height': height,
				'--bpafb-progress-circle-size': circleSize,
				'--bpafb-progress-circle-width': typeof circleWidth === 'number' ? String( circleWidth ) : undefined,
				'--bpafb-progress-fill': fillColor,
				'--bpafb-progress-track': trackColor || ( circular ? undefined : '#e5e7eb' ),
				'--bpafb-progress-percent': percentColor,
			} ),
		},
	} );

	const where = circular
		? __( 'in a corner of the window', 'blockive-premium-addon-for-block-pro' )
		: __( 'across the window', 'blockive-premium-addon-for-block-pro' );

	return (
		<>
			<InspectorTabs
				general={
					<PanelBody title={ __( 'Progress Tracker', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
						<SelectControl
							label={ __( 'Type', 'blockive-premium-addon-for-block-pro' ) }
							value={ type }
							options={ [
								{ label: __( 'Bar', 'blockive-premium-addon-for-block-pro' ), value: 'horizontal' },
								{ label: __( 'Circle', 'blockive-premium-addon-for-block-pro' ), value: 'circular' },
							] }
							onChange={ set( 'type' ) }
						/>
						{ circular ? (
							<SelectControl
								label={ __( 'Corner', 'blockive-premium-addon-for-block-pro' ) }
								value={ corner }
								options={ [
									{ label: __( 'Bottom Left', 'blockive-premium-addon-for-block-pro' ), value: 'bottom-left' },
									{ label: __( 'Bottom Right', 'blockive-premium-addon-for-block-pro' ), value: 'bottom-right' },
									{ label: __( 'Top Right', 'blockive-premium-addon-for-block-pro' ), value: 'top-right' },
									{ label: __( 'Top Left', 'blockive-premium-addon-for-block-pro' ), value: 'top-left' },
								] }
								onChange={ set( 'corner' ) }
								help={ __( 'Many themes put a scroll-to-top button in the bottom right corner.', 'blockive-premium-addon-for-block-pro' ) }
							/>
						) : (
							<SelectControl
								label={ __( 'Position', 'blockive-premium-addon-for-block-pro' ) }
								value={ position }
								options={ [
									{ label: __( 'Top of the Window', 'blockive-premium-addon-for-block-pro' ), value: 'top' },
									{ label: __( 'Bottom of the Window', 'blockive-premium-addon-for-block-pro' ), value: 'bottom' },
								] }
								onChange={ set( 'position' ) }
							/>
						) }
						<SelectControl
							label={ __( 'Track Progress Through', 'blockive-premium-addon-for-block-pro' ) }
							value={ relativeTo }
							options={ [
								{ label: __( 'The Whole Page', 'blockive-premium-addon-for-block-pro' ), value: 'page' },
								{ label: __( 'The Post Content', 'blockive-premium-addon-for-block-pro' ), value: 'content' },
								{ label: __( 'A Chosen Element', 'blockive-premium-addon-for-block-pro' ), value: 'selector' },
							] }
							onChange={ set( 'relativeTo' ) }
						/>
						{ relativeTo === 'selector' && <TextControl label={ __( 'CSS Selector', 'blockive-premium-addon-for-block-pro' ) } value={ selector } onChange={ set( 'selector' ) } placeholder=".my-article" /> }
						<ToggleControl label={ __( 'Show Percentage', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showPercentage } onChange={ set( 'showPercentage' ) } />
						<RangeControl
							label={ __( 'Offset (px)', 'blockive-premium-addon-for-block-pro' ) }
							value={ offset }
							onChange={ set( 'offset' ) }
							min={ 0 }
							max={ 200 }
							help={ __( 'Moves it clear of a sticky header or a corner button. The admin bar is accounted for automatically.', 'blockive-premium-addon-for-block-pro' ) }
						/>
					</PanelBody>
				}
				style={
					<PanelBody title={ circular ? __( 'Circle', 'blockive-premium-addon-for-block-pro' ) : __( 'Bar', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
						{ circular ? (
							<>
								<RangeControl label={ __( 'Size (px)', 'blockive-premium-addon-for-block-pro' ) } value={ circleSize } onChange={ set( 'circleSize' ) } min={ 30 } max={ 120 } />
								<RangeControl label={ __( 'Line Width', 'blockive-premium-addon-for-block-pro' ) } value={ circleWidth } onChange={ set( 'circleWidth' ) } min={ 1 } max={ 10 } step={ 0.5 } />
							</>
						) : (
							<RangeControl label={ __( 'Height (px)', 'blockive-premium-addon-for-block-pro' ) } value={ height } onChange={ set( 'height' ) } min={ 1 } max={ 20 } />
						) }
						<ColorStateControls
							normal={ [
								{ label: __( 'Progress', 'blockive-premium-addon-for-block-pro' ), value: fillColor, onChange: set( 'fillColor' ) },
								{ label: __( 'Track', 'blockive-premium-addon-for-block-pro' ), value: trackColor, onChange: set( 'trackColor' ) },
								...( showPercentage ? [ { label: __( 'Percentage', 'blockive-premium-addon-for-block-pro' ), value: percentColor, onChange: set( 'percentColor' ) } ] : [] ),
							] }
						/>
					</PanelBody>
				}
				advanced={ <AdvancedTab attributes={ attributes } setAttributes={ setAttributes } /> }
			/>

			<div { ...blockProps }>
				{ circular ? (
					<>
						<svg className="bpafb-progress__circle" viewBox="0 0 36 36" aria-hidden="true" focusable="false">
							<circle className="bpafb-progress__track" cx="18" cy="18" r="16" pathLength="100" />
							<circle className="bpafb-progress__fill" cx="18" cy="18" r="16" pathLength="100" />
						</svg>
						{ showPercentage && <span className="bpafb-progress__percent">40%</span> }
					</>
				) : (
					<>
						<div className="bpafb-progress__bar">
							<div className="bpafb-progress__fill" />
						</div>
						{ showPercentage && <span className="bpafb-progress__percent">40%</span> }
					</>
				) }
			</div>
			<p className="components-base-control__help" style={ { textAlign: 'center', marginTop: 4 } }>
				{ sprintf(
					/* translators: %s: where the tracker shows, e.g. "across the window". */
					__( 'Preview. On the site it stays fixed %s.', 'blockive-premium-addon-for-block-pro' ),
					where
				) }
			</p>
		</>
	);
}
