import { __, sprintf } from '@wordpress/i18n';
import { useBlockProps, MediaPlaceholder } from '@wordpress/block-editor';
import { PanelBody, SelectControl, RangeControl, TextControl, TextareaControl, ToggleControl } from '@wordpress/components';

import InspectorTabs from '../components/inspector-tabs';
import AdvancedTab from '../components/advanced-tab';
import ColorStateControls from '../components/color-state-controls';
import TypographyControls from '../components/typography-controls';
import ImageControl from '../pro-components/image-control';
import IconPicker from '../pro-components/icon-picker';
import { useItemList, ItemActions, ItemToolbar } from '../pro-components/item-list';
import { typoValues, typoOnChange, typoVars, cssVars } from '../template-blocks-site/shared';

import './editor.css';

const BLANK = { x: 50, y: 50, label: '', icon: 'fa-solid fa-plus', content: 'Describe this spot here.', position: 'top', link: '', linkText: '', newTab: false };

export default function Edit( { attributes, setAttributes } ) {
	const {
		imageId,
		imageUrl,
		alt,
		hotspots,
		trigger,
		pulse,
		pinSize,
		pinIconSize,
		pinColor,
		pinBgColor,
		tooltipWidth,
		tooltipColor,
		tooltipBgColor,
		tooltipRadius,
	} = attributes;

	const list = useItemList( hotspots, 'hotspots', setAttributes, BLANK );
	const { item } = list;
	const set = ( key ) => ( val ) => setAttributes( { [ key ]: val } );

	const blockProps = useBlockProps( {
		className: `bpafb-hotspot bpafb-hotspot--trigger-${ trigger }${ pulse ? ' bpafb-hotspot--pulse' : '' } is-ready`,
		style: cssVars( {
			'--bpafb-hotspot-pin-size': pinSize,
			'--bpafb-hotspot-icon-size': pinIconSize,
			'--bpafb-hotspot-pin-color': pinColor,
			'--bpafb-hotspot-pin-bg': pinBgColor,
			'--bpafb-hotspot-tip-width': tooltipWidth,
			'--bpafb-hotspot-tip-color': tooltipColor,
			'--bpafb-hotspot-tip-bg': tooltipBgColor,
			'--bpafb-hotspot-tip-radius': tooltipRadius,
			...typoVars( attributes, 'tooltip', '--bpafb-hotspot-tip' ),
			...typoVars( attributes, 'label', '--bpafb-hotspot-label' ),
		} ),
	} );

	if ( ! imageUrl ) {
		return (
			<div { ...blockProps }>
				<MediaPlaceholder
					icon="location"
					labels={ { title: __( 'Hotspot', 'blockive-premium-addon-for-block-pro' ), instructions: __( 'Choose the image to place hotspots on.', 'blockive-premium-addon-for-block-pro' ) } }
					accept="image/*"
					allowedTypes={ [ 'image' ] }
					onSelect={ ( media ) => setAttributes( { imageId: media.id, imageUrl: media.url, alt: media.alt || '' } ) }
				/>
			</div>
		);
	}

	// A click on the image moves the selected hotspot there.
	const placeAt = ( event ) => {
		if ( event.target.closest( '.bpafb-hotspot__spot' ) || ! hotspots.length ) {
			return;
		}
		const rect = event.currentTarget.getBoundingClientRect();
		const round = ( v ) => Math.round( Math.max( 0, Math.min( 100, v ) ) * 10 ) / 10;
		list.update( { x: round( ( ( event.clientX - rect.left ) / rect.width ) * 100 ), y: round( ( ( event.clientY - rect.top ) / rect.height ) * 100 ) } );
	};

	/* translators: 1: hotspot number, 2: total hotspots. */
	const itemLabel = sprintf( __( 'Hotspot %1$d of %2$d', 'blockive-premium-addon-for-block-pro' ), list.index + 1, hotspots.length );
	const addLabel = __( 'Add Hotspot', 'blockive-premium-addon-for-block-pro' );

	return (
		<>
			<ItemToolbar list={ list } count={ hotspots.length } onAdd={ () => list.add() } addLabel={ addLabel } />
			<InspectorTabs
				general={
					<>
						<PanelBody title={ __( 'Image', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<ImageControl label={ __( 'Image', 'blockive-premium-addon-for-block-pro' ) } id={ imageId } url={ imageUrl } onChange={ ( media ) => setAttributes( { imageId: media.id, imageUrl: media.url, alt: media.alt || '' } ) } />
							<TextareaControl label={ __( 'Alternative Text', 'blockive-premium-addon-for-block-pro' ) } value={ alt } onChange={ set( 'alt' ) } help={ __( 'Describe the image for people who cannot see it.', 'blockive-premium-addon-for-block-pro' ) } />
						</PanelBody>
						<PanelBody title={ itemLabel } initialOpen={ true }>
							<ItemActions list={ list } count={ hotspots.length } addLabel={ addLabel } />
							{ hotspots.length > 0 && (
								<>
									<p className="components-base-control__help">{ __( 'Click the image to move this hotspot there.', 'blockive-premium-addon-for-block-pro' ) }</p>
									<RangeControl label={ __( 'Horizontal Position (%)', 'blockive-premium-addon-for-block-pro' ) } value={ item.x } onChange={ ( val ) => list.update( { x: val } ) } min={ 0 } max={ 100 } step={ 0.5 } />
									<RangeControl label={ __( 'Vertical Position (%)', 'blockive-premium-addon-for-block-pro' ) } value={ item.y } onChange={ ( val ) => list.update( { y: val } ) } min={ 0 } max={ 100 } step={ 0.5 } />
									<IconPicker label={ __( 'Icon', 'blockive-premium-addon-for-block-pro' ) } allowEmpty value={ item.icon } onChange={ ( val ) => list.update( { icon: val } ) } />
									<TextControl label={ __( 'Label', 'blockive-premium-addon-for-block-pro' ) } value={ item.label } onChange={ ( val ) => list.update( { label: val } ) } help={ __( 'Optional text on the pin. Without it, screen readers hear "Hotspot 1", "Hotspot 2", ...', 'blockive-premium-addon-for-block-pro' ) } />
									<TextareaControl label={ __( 'Tooltip Text', 'blockive-premium-addon-for-block-pro' ) } value={ item.content } onChange={ ( val ) => list.update( { content: val } ) } />
									<SelectControl
										label={ __( 'Tooltip Position', 'blockive-premium-addon-for-block-pro' ) }
										value={ item.position }
										options={ [
											{ label: __( 'Above', 'blockive-premium-addon-for-block-pro' ), value: 'top' },
											{ label: __( 'Below', 'blockive-premium-addon-for-block-pro' ), value: 'bottom' },
											{ label: __( 'Left', 'blockive-premium-addon-for-block-pro' ), value: 'left' },
											{ label: __( 'Right', 'blockive-premium-addon-for-block-pro' ), value: 'right' },
										] }
										onChange={ ( val ) => list.update( { position: val } ) }
									/>
									<TextControl label={ __( 'Link', 'blockive-premium-addon-for-block-pro' ) } type="url" value={ item.link } onChange={ ( val ) => list.update( { link: val } ) } />
									{ !! item.link && (
										<>
											<TextControl label={ __( 'Link Text', 'blockive-premium-addon-for-block-pro' ) } value={ item.linkText } placeholder={ __( 'Learn more', 'blockive-premium-addon-for-block-pro' ) } onChange={ ( val ) => list.update( { linkText: val } ) } />
											<ToggleControl label={ __( 'Open in New Tab', 'blockive-premium-addon-for-block-pro' ) } checked={ !! item.newTab } onChange={ ( val ) => list.update( { newTab: val } ) } />
										</>
									) }
								</>
							) }
						</PanelBody>
						<PanelBody title={ __( 'Behavior', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<SelectControl
								label={ __( 'Show Tooltip On', 'blockive-premium-addon-for-block-pro' ) }
								value={ trigger }
								options={ [
									{ label: __( 'Click', 'blockive-premium-addon-for-block-pro' ), value: 'click' },
									{ label: __( 'Hover', 'blockive-premium-addon-for-block-pro' ), value: 'hover' },
								] }
								onChange={ set( 'trigger' ) }
								help={ __( 'Keyboard focus always shows it in hover mode; a tap opens it on touch screens.', 'blockive-premium-addon-for-block-pro' ) }
							/>
							<ToggleControl label={ __( 'Pulse Animation', 'blockive-premium-addon-for-block-pro' ) } checked={ !! pulse } onChange={ set( 'pulse' ) } />
						</PanelBody>
					</>
				}
				style={
					<>
						<PanelBody title={ __( 'Pins', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							<RangeControl label={ __( 'Size (px)', 'blockive-premium-addon-for-block-pro' ) } value={ pinSize } onChange={ set( 'pinSize' ) } min={ 16 } max={ 80 } />
							<RangeControl label={ __( 'Icon Size (px)', 'blockive-premium-addon-for-block-pro' ) } value={ pinIconSize } onChange={ set( 'pinIconSize' ) } min={ 8 } max={ 40 } />
							<ColorStateControls
								normal={ [
									{ label: __( 'Icon / Label', 'blockive-premium-addon-for-block-pro' ), value: pinColor, onChange: set( 'pinColor' ) },
									{ label: __( 'Background', 'blockive-premium-addon-for-block-pro' ), value: pinBgColor, onChange: set( 'pinBgColor' ) },
								] }
							/>
							<TypographyControls values={ typoValues( attributes, 'label' ) } onChange={ typoOnChange( setAttributes, 'label' ) } />
						</PanelBody>
						<PanelBody title={ __( 'Tooltip', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<RangeControl label={ __( 'Max Width (px)', 'blockive-premium-addon-for-block-pro' ) } value={ tooltipWidth } onChange={ set( 'tooltipWidth' ) } min={ 100 } max={ 500 } />
							<RangeControl label={ __( 'Border Radius (px)', 'blockive-premium-addon-for-block-pro' ) } value={ tooltipRadius } onChange={ set( 'tooltipRadius' ) } min={ 0 } max={ 30 } />
							<ColorStateControls
								normal={ [
									{ label: __( 'Text', 'blockive-premium-addon-for-block-pro' ), value: tooltipColor, onChange: set( 'tooltipColor' ) },
									{ label: __( 'Background', 'blockive-premium-addon-for-block-pro' ), value: tooltipBgColor, onChange: set( 'tooltipBgColor' ) },
								] }
							/>
							<TypographyControls values={ typoValues( attributes, 'tooltip' ) } onChange={ typoOnChange( setAttributes, 'tooltip' ) } />
						</PanelBody>
					</>
				}
				advanced={ <AdvancedTab attributes={ attributes } setAttributes={ setAttributes } /> }
			/>

			<div { ...blockProps }>
				{ /* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */ }
				<div className="bpafb-hotspot__stage bpafb-hotspot-editor__stage" onClick={ placeAt }>
					<img className="bpafb-hotspot__image" src={ imageUrl } alt={ alt } />
					{ hotspots.map( ( spot, i ) => (
						<div key={ i } className={ `bpafb-hotspot__spot bpafb-hotspot__spot--${ spot.position || 'top' }${ i === list.index ? ' is-open is-editing' : '' }` } style={ { left: `${ spot.x }%`, top: `${ spot.y }%` } }>
							<button type="button" className={ `bpafb-hotspot__pin${ spot.label ? ' bpafb-hotspot__pin--label' : '' }` } onClick={ () => list.select( i ) } aria-label={ spot.label || sprintf( __( 'Hotspot %d', 'blockive-premium-addon-for-block-pro' ), i + 1 ) }>
								{ spot.icon && <i className={ spot.icon } aria-hidden="true" /> }
								{ spot.label && <span>{ spot.label }</span> }
							</button>
							{ ( spot.content || spot.link ) && (
								<div className="bpafb-hotspot__tooltip">
									{ spot.content && <p>{ spot.content }</p> }
									{ spot.link && (
										<p>
											<span className="bpafb-hotspot__link">{ spot.linkText || __( 'Learn more', 'blockive-premium-addon-for-block-pro' ) }</span>
										</p>
									) }
								</div>
							) }
						</div>
					) ) }
				</div>
			</div>
		</>
	);
}
