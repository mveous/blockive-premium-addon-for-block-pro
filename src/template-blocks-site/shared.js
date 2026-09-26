import { useSelect } from '@wordpress/data';

/**
 * Site name, tagline, and URL for editor previews. Reads the public REST
 * index (`__unstableBase`), so it works for every user who can edit a
 * template, not only administrators.
 *
 * @return {{ name: string, description: string, url: string, isResolving: boolean }}
 */
export function useSiteInfo() {
	return useSelect( ( select ) => {
		const base = select( 'core' ).getEntityRecord( 'root', '__unstableBase' );
		return {
			name: base?.name || '',
			description: base?.description || '',
			url: base?.home || base?.url || '',
			siteLogo: base?.site_logo || 0,
			isResolving: ! base,
		};
	}, [] );
}

const TYPO_KEYS = [
	'FontFamily',
	'FontSize',
	'FontWeight',
	'LineHeight',
	'LetterSpacing',
	'TextTransform',
	'TextDecoration',
];

/**
 * Maps `<prefix>FontSize`-style attributes to the `values` object that
 * TypographyControls expects.
 *
 * @param {Object} attributes Block attributes.
 * @param {string} prefix     Attribute prefix, e.g. 'input'.
 * @return {Object}
 */
export function typoValues( attributes, prefix ) {
	const values = {};
	TYPO_KEYS.forEach( ( key ) => {
		values[ key.charAt( 0 ).toLowerCase() + key.slice( 1 ) ] = attributes[ prefix + key ];
	} );
	return values;
}

/**
 * The matching `onChange( key, value )` for TypographyControls.
 *
 * @param {Function} setAttributes Block setAttributes.
 * @param {string}   prefix        Attribute prefix, e.g. 'input'.
 * @return {Function}
 */
export function typoOnChange( setAttributes, prefix ) {
	return ( key, value ) =>
		setAttributes( { [ prefix + key.charAt( 0 ).toUpperCase() + key.slice( 1 ) ]: value } );
}

/**
 * Editor-side twin of Bpafb_Pro_Site_Blocks::typography_vars().
 *
 * @param {Object} attributes Block attributes.
 * @param {string} prefix     Attribute prefix, e.g. 'input'.
 * @param {string} varPrefix  CSS variable prefix, e.g. '--bpafb-search-input'.
 * @return {Object}
 */
export function typoVars( attributes, prefix, varPrefix ) {
	const v = typoValues( attributes, prefix );
	const out = {};
	if ( v.fontFamily ) out[ `${ varPrefix }-font-family` ] = v.fontFamily;
	if ( typeof v.fontSize === 'number' ) out[ `${ varPrefix }-font-size` ] = `${ v.fontSize }px`;
	if ( v.fontWeight ) out[ `${ varPrefix }-font-weight` ] = v.fontWeight;
	if ( typeof v.lineHeight === 'number' ) out[ `${ varPrefix }-line-height` ] = v.lineHeight;
	if ( typeof v.letterSpacing === 'number' ) out[ `${ varPrefix }-letter-spacing` ] = `${ v.letterSpacing }px`;
	if ( v.textTransform ) out[ `${ varPrefix }-text-transform` ] = v.textTransform;
	if ( v.textDecoration ) out[ `${ varPrefix }-text-decoration` ] = v.textDecoration;
	return out;
}

/**
 * Drops empty values and adds `px` to numbers, for inline CSS variables.
 *
 * @param {Object} vars CSS variable name => value (number = px).
 * @return {Object}
 */
export function cssVars( vars ) {
	const out = {};
	Object.entries( vars ).forEach( ( [ key, value ] ) => {
		if ( value === undefined || value === null || value === '' ) {
			return;
		}
		out[ key ] = typeof value === 'number' ? `${ value }px` : value;
	} );
	return out;
}

export const TEXT_TAG_OPTIONS = [
	{ label: 'H1', value: 'h1' },
	{ label: 'H2', value: 'h2' },
	{ label: 'H3', value: 'h3' },
	{ label: 'H4', value: 'h4' },
	{ label: 'H5', value: 'h5' },
	{ label: 'H6', value: 'h6' },
	{ label: 'p', value: 'p' },
	{ label: 'div', value: 'div' },
	{ label: 'span', value: 'span' },
];

/**
 * Inline SVG icons shared by the editor previews. The render.php files
 * print the same paths (see icons.php).
 */
export const ICON_PATHS = {
	search: 'M10.5 3a7.5 7.5 0 0 1 5.93 12.1l4.24 4.24-1.41 1.41-4.24-4.24A7.5 7.5 0 1 1 10.5 3Zm0 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z',
	cart: 'M7 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm10 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM1 2h3.27l.94 2H21a1 1 0 0 1 .96 1.27l-2.5 9A1 1 0 0 1 18.5 15H8.1l-.9 2H19v2H5.6a1 1 0 0 1-.9-1.45L6.2 14.5 3 4H1V2Zm5.14 4 1.84 7h9.76l1.94-7H6.14Z',
	bag: 'M7 7V6a5 5 0 0 1 10 0v1h3a1 1 0 0 1 1 1v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a1 1 0 0 1 1-1h3Zm2 0h6V6a3 3 0 0 0-6 0v1Zm-4 2v11h14V9h-2v2h-2V9H9v2H7V9H5Z',
	basket: 'M17.21 9 13 2.7a1 1 0 0 0-1.66 1.1L14.8 9H9.2l3.45-5.2L11 2.7 6.79 9H2a1 1 0 0 0-.97 1.24l2.54 9.27A2 2 0 0 0 5.5 21h13a2 2 0 0 0 1.93-1.49l2.55-9.27A1 1 0 0 0 22 9h-4.79ZM12 17a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z',
	close: 'M6.4 5 12 10.6 17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6L6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5Z',
};

export function SvgIcon( { name, size } ) {
	return (
		<svg
			className="bpafb-tb-svg-icon"
			width={ size || 20 }
			height={ size || 20 }
			viewBox="0 0 24 24"
			fill="currentColor"
			aria-hidden="true"
		>
			<path d={ ICON_PATHS[ name ] || ICON_PATHS.search } />
		</svg>
	);
}
