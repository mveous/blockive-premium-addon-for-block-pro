import { __ } from '@wordpress/i18n';
import { PanelBody, SelectControl, RangeControl, TextControl, ToggleControl } from '@wordpress/components';

import ColorStateControls from '../../components/color-state-controls';
import TypographyControls from '../../components/typography-controls';
import { typoValues, typoOnChange, typoVars, cssVars } from '../../template-blocks-site/shared';

/**
 * Editor side of the shared filter buttons (see filter-bar.js and
 * Bpafb_Pro_Shared_Assets::filter_bar_html()). Blocks using them save
 * showAllFilter, allFilterLabel, filterAlign, and the filter* style
 * attributes.
 */

/**
 * Editor twin of Bpafb_Pro_Shared_Assets::filter_bar_vars().
 *
 * @param {Object} attributes Block attributes.
 * @return {Object}
 */
export function filterBarVars( attributes ) {
	return cssVars( {
		'--bpafb-filter-color': attributes.filterColor,
		'--bpafb-filter-bg': attributes.filterBgColor,
		'--bpafb-filter-active-color': attributes.filterActiveColor,
		'--bpafb-filter-active-bg': attributes.filterActiveBgColor,
		'--bpafb-filter-radius': attributes.filterRadius,
		...typoVars( attributes, 'filter', '--bpafb-filter' ),
	} );
}

/**
 * The buttons, for the editor preview. `active` is a filter key or 'all'.
 *
 * @param {Object}   props
 * @param {Object}   props.attributes Block attributes.
 * @param {Array}    props.filters    `{ key, label }` list.
 * @param {string}   props.active     Active key.
 * @param {Function} props.onSelect   Called with a key.
 */
export function FilterBarPreview( { attributes, filters, active, onSelect } ) {
	if ( filters.length < 2 ) {
		return null;
	}
	const { showAllFilter, allFilterLabel, filterAlign } = attributes;
	const button = ( key, label ) => (
		<button type="button" key={ key } className={ `bpafb-filter-bar__button${ active === key ? ' is-active' : '' }` } aria-pressed={ active === key } onClick={ () => onSelect( key ) }>
			{ label }
		</button>
	);
	return (
		<div className={ `bpafb-filter-bar bpafb-filter-bar--${ filterAlign || 'center' }` }>
			{ showAllFilter && button( 'all', allFilterLabel || __( 'All', 'blockive-premium-addon-for-block-pro' ) ) }
			{ filters.map( ( f ) => button( String( f.key ), f.label ) ) }
		</div>
	);
}

export function FilterBarSettingsPanel( { attributes, setAttributes, children } ) {
	const { showAllFilter, allFilterLabel, filterAlign } = attributes;
	const set = ( key ) => ( val ) => setAttributes( { [ key ]: val } );
	return (
		<PanelBody title={ __( 'Filter', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
			{ children }
			<ToggleControl label={ __( 'Show "All" Button', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showAllFilter } onChange={ set( 'showAllFilter' ) } />
			{ showAllFilter && <TextControl label={ __( '"All" Label', 'blockive-premium-addon-for-block-pro' ) } value={ allFilterLabel } onChange={ set( 'allFilterLabel' ) } /> }
			<SelectControl
				label={ __( 'Alignment', 'blockive-premium-addon-for-block-pro' ) }
				value={ filterAlign }
				options={ [
					{ label: __( 'Left', 'blockive-premium-addon-for-block-pro' ), value: 'left' },
					{ label: __( 'Center', 'blockive-premium-addon-for-block-pro' ), value: 'center' },
					{ label: __( 'Right', 'blockive-premium-addon-for-block-pro' ), value: 'right' },
				] }
				onChange={ set( 'filterAlign' ) }
			/>
		</PanelBody>
	);
}

export function FilterBarStylePanel( { attributes, setAttributes } ) {
	const { filterColor, filterBgColor, filterActiveColor, filterActiveBgColor, filterRadius } = attributes;
	const set = ( key ) => ( val ) => setAttributes( { [ key ]: val } );
	return (
		<PanelBody title={ __( 'Filter Buttons', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
			<TypographyControls values={ typoValues( attributes, 'filter' ) } onChange={ typoOnChange( setAttributes, 'filter' ) } />
			<ColorStateControls
				normal={ [
					{ label: __( 'Text', 'blockive-premium-addon-for-block-pro' ), value: filterColor, onChange: set( 'filterColor' ) },
					{ label: __( 'Background', 'blockive-premium-addon-for-block-pro' ), value: filterBgColor, onChange: set( 'filterBgColor' ) },
				] }
				hover={ [
					{ label: __( 'Text', 'blockive-premium-addon-for-block-pro' ), value: filterActiveColor, onChange: set( 'filterActiveColor' ) },
					{ label: __( 'Background', 'blockive-premium-addon-for-block-pro' ), value: filterActiveBgColor, onChange: set( 'filterActiveBgColor' ) },
				] }
			/>
			<RangeControl label={ __( 'Border Radius (px)', 'blockive-premium-addon-for-block-pro' ) } value={ filterRadius } onChange={ set( 'filterRadius' ) } min={ 0 } max={ 40 } />
		</PanelBody>
	);
}
