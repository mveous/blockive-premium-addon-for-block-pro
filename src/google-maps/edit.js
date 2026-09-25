import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { useBlockProps } from '@wordpress/block-editor';
import { PanelBody, SelectControl, RangeControl, TextControl, ToggleControl } from '@wordpress/components';

import InspectorTabs from '../components/inspector-tabs';
import AdvancedTab from '../components/advanced-tab';
import ResponsiveControls from '../components/responsive-controls';
import { cssVars } from '../template-blocks-site/shared';

/**
 * Mirrors render.php's embed URL, so the editor shows the real map.
 *
 * @param {string} address Address or place.
 * @param {number} zoom    Zoom level 1-21.
 * @param {string} mapType 'roadmap' or 'satellite'.
 * @return {string}
 */
function embedUrl( address, zoom, mapType ) {
	const params = new URLSearchParams( {
		q: address,
		t: mapType === 'satellite' ? 'k' : 'm',
		z: String( zoom || 14 ),
		output: 'embed',
		iwloc: 'near',
	} );
	return `https://maps.google.com/maps?${ params.toString() }`;
}

export default function Edit( { attributes, setAttributes, isSelected } ) {
	const { address, zoom, mapType, height, borderRadius, grayscale, hoverGrayscale, mapTitle, lazy } = attributes;
	const set = ( key ) => ( val ) => setAttributes( { [ key ]: val } );

	// Typing an address shouldn't reload the iframe on every keystroke.
	const [ debounced, setDebounced ] = useState( address );
	useEffect( () => {
		const timer = setTimeout( () => setDebounced( address ), 600 );
		return () => clearTimeout( timer );
	}, [ address ] );

	const blockProps = useBlockProps( {
		className: 'bpafb-google-map',
		style: cssVars( {
			'--bpafb-map-height': height,
			'--bpafb-map-radius': borderRadius,
			'--bpafb-map-grayscale': typeof grayscale === 'number' ? `${ grayscale }%` : undefined,
			'--bpafb-map-hover-grayscale': typeof hoverGrayscale === 'number' ? `${ hoverGrayscale }%` : undefined,
		} ),
	} );

	return (
		<>
			<InspectorTabs
				general={
					<PanelBody title={ __( 'Map', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
						<TextControl
							label={ __( 'Location', 'blockive-premium-addon-for-block-pro' ) }
							help={ __( 'An address, place name, or "latitude,longitude".', 'blockive-premium-addon-for-block-pro' ) }
							value={ address }
							onChange={ set( 'address' ) }
						/>
						<RangeControl label={ __( 'Zoom', 'blockive-premium-addon-for-block-pro' ) } value={ zoom } onChange={ set( 'zoom' ) } min={ 1 } max={ 21 } />
						<SelectControl
							label={ __( 'Map Type', 'blockive-premium-addon-for-block-pro' ) }
							value={ mapType }
							options={ [
								{ label: __( 'Roadmap', 'blockive-premium-addon-for-block-pro' ), value: 'roadmap' },
								{ label: __( 'Satellite', 'blockive-premium-addon-for-block-pro' ), value: 'satellite' },
							] }
							onChange={ set( 'mapType' ) }
						/>
						<TextControl
							label={ __( 'Accessible Title', 'blockive-premium-addon-for-block-pro' ) }
							help={ __( 'Describes the map for screen readers. Defaults to the location.', 'blockive-premium-addon-for-block-pro' ) }
							value={ mapTitle }
							onChange={ set( 'mapTitle' ) }
						/>
						<ToggleControl
							label={ __( 'Lazy Load', 'blockive-premium-addon-for-block-pro' ) }
							help={ __( 'Loads the map only when it scrolls into view.', 'blockive-premium-addon-for-block-pro' ) }
							checked={ !! lazy }
							onChange={ set( 'lazy' ) }
						/>
					</PanelBody>
				}
				style={
					<PanelBody title={ __( 'Map', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
						<ResponsiveControls>
							{ ( device ) => {
								const key = { desktop: 'height', tablet: 'heightTablet', mobile: 'heightMobile' }[ device ] || 'height';
								return (
									<RangeControl
										label={ __( 'Height (px)', 'blockive-premium-addon-for-block-pro' ) }
										value={ attributes[ key ] }
										onChange={ ( val ) => setAttributes( { [ key ]: val } ) }
										min={ 100 }
										max={ 1200 }
										allowReset={ device !== 'desktop' }
									/>
								);
							} }
						</ResponsiveControls>
						<RangeControl label={ __( 'Border Radius (px)', 'blockive-premium-addon-for-block-pro' ) } value={ borderRadius } onChange={ set( 'borderRadius' ) } min={ 0 } max={ 60 } />
						<RangeControl label={ __( 'Grayscale (%)', 'blockive-premium-addon-for-block-pro' ) } value={ grayscale } onChange={ set( 'grayscale' ) } min={ 0 } max={ 100 } />
						<RangeControl label={ __( 'Hover Grayscale (%)', 'blockive-premium-addon-for-block-pro' ) } value={ hoverGrayscale } onChange={ set( 'hoverGrayscale' ) } min={ 0 } max={ 100 } allowReset />
					</PanelBody>
				}
				advanced={ <AdvancedTab attributes={ attributes } setAttributes={ setAttributes } /> }
			/>

			<div { ...blockProps }>
				{ debounced ? (
					<iframe
						className="bpafb-google-map__frame"
						src={ embedUrl( debounced, zoom, mapType ) }
						title={ mapTitle || debounced }
						// Clicks select the block rather than panning the map.
						style={ { pointerEvents: isSelected ? 'auto' : 'none' } }
					/>
				) : (
					<p className="bpafb-google-map__empty">{ __( 'Enter a location in the block settings.', 'blockive-premium-addon-for-block-pro' ) }</p>
				) }
			</div>
		</>
	);
}
