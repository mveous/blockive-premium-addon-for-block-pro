import { __ } from '@wordpress/i18n';
import { useState, useMemo } from '@wordpress/element';
import { useBlockProps, PlainText, BlockControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, RangeControl, TextControl, ToggleControl, ToolbarGroup, ToolbarButton } from '@wordpress/components';

import InspectorTabs from '../components/inspector-tabs';
import AdvancedTab from '../components/advanced-tab';
import ColorStateControls from '../components/color-state-controls';
import { cssVars } from '../template-blocks-site/shared';
import { LANGUAGES } from './languages';
import { renderLines, parseLineList } from './highlight';

import './editor.css';

export default function Edit( { attributes, setAttributes, isSelected } ) {
	const { code, language, title, theme, lineNumbers, copyButton, highlightLines, wordWrap, maxHeight, fontSize, borderRadius, highlightColor } = attributes;
	const set = ( key ) => ( val ) => setAttributes( { [ key ]: val } );

	// Edit the plain code; show it colored when the block is not being
	// typed in, or when "Preview" is on.
	const [ preview, setPreview ] = useState( false );
	const showColored = preview || ! isSelected;
	const lines = useMemo( () => ( showColored ? renderLines( code || '', language, parseLineList( highlightLines ) ) : '' ), [ showColored, code, language, highlightLines ] );

	const blockProps = useBlockProps( {
		className: [ 'bpafb-code', `bpafb-code--${ theme }`, lineNumbers && 'bpafb-code--line-numbers', wordWrap && 'bpafb-code--wrap', showColored && 'is-lined' ].filter( Boolean ).join( ' ' ),
		style: cssVars( {
			'--bpafb-code-font-size': fontSize,
			'--bpafb-code-max-height': maxHeight > 0 ? maxHeight : undefined,
			'--bpafb-code-radius': borderRadius,
			'--bpafb-code-highlight': highlightColor,
		} ),
	} );

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton icon={ preview ? 'edit' : 'visibility' } label={ preview ? __( 'Edit Code', 'blockive-premium-addon-for-block-pro' ) : __( 'Preview', 'blockive-premium-addon-for-block-pro' ) } isPressed={ preview } onClick={ () => setPreview( ! preview ) } />
				</ToolbarGroup>
			</BlockControls>
			<InspectorTabs
				general={
					<PanelBody title={ __( 'Code', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
						<SelectControl label={ __( 'Language', 'blockive-premium-addon-for-block-pro' ) } value={ language } options={ LANGUAGES } onChange={ set( 'language' ) } />
						<TextControl label={ __( 'Title', 'blockive-premium-addon-for-block-pro' ) } value={ title } onChange={ set( 'title' ) } placeholder="example.js" help={ __( 'Optional, e.g. a file name. Also names the code for screen readers.', 'blockive-premium-addon-for-block-pro' ) } />
						<ToggleControl label={ __( 'Line Numbers', 'blockive-premium-addon-for-block-pro' ) } checked={ !! lineNumbers } onChange={ set( 'lineNumbers' ) } />
						<ToggleControl label={ __( 'Copy Button', 'blockive-premium-addon-for-block-pro' ) } checked={ !! copyButton } onChange={ set( 'copyButton' ) } help={ __( 'Shows on sites served over HTTPS (browsers only allow copying there).', 'blockive-premium-addon-for-block-pro' ) } />
						<ToggleControl label={ __( 'Wrap Long Lines', 'blockive-premium-addon-for-block-pro' ) } checked={ !! wordWrap } onChange={ set( 'wordWrap' ) } />
						<TextControl label={ __( 'Highlight Lines', 'blockive-premium-addon-for-block-pro' ) } value={ highlightLines } onChange={ set( 'highlightLines' ) } placeholder="2, 5-7" />
					</PanelBody>
				}
				style={
					<PanelBody title={ __( 'Appearance', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
						<SelectControl
							label={ __( 'Theme', 'blockive-premium-addon-for-block-pro' ) }
							value={ theme }
							options={ [
								{ label: __( 'Dark', 'blockive-premium-addon-for-block-pro' ), value: 'dark' },
								{ label: __( 'Light', 'blockive-premium-addon-for-block-pro' ), value: 'light' },
							] }
							onChange={ set( 'theme' ) }
						/>
						<RangeControl label={ __( 'Font Size (px)', 'blockive-premium-addon-for-block-pro' ) } value={ fontSize } onChange={ set( 'fontSize' ) } min={ 10 } max={ 24 } />
						<RangeControl
							label={ __( 'Max Height (px)', 'blockive-premium-addon-for-block-pro' ) }
							value={ maxHeight }
							onChange={ set( 'maxHeight' ) }
							min={ 0 }
							max={ 1200 }
							step={ 20 }
							help={ __( '0 shows all of the code; otherwise it scrolls.', 'blockive-premium-addon-for-block-pro' ) }
						/>
						<RangeControl label={ __( 'Border Radius (px)', 'blockive-premium-addon-for-block-pro' ) } value={ borderRadius } onChange={ set( 'borderRadius' ) } min={ 0 } max={ 30 } />
						<ColorStateControls normal={ [ { label: __( 'Highlighted Line', 'blockive-premium-addon-for-block-pro' ), value: highlightColor, onChange: set( 'highlightColor' ) } ] } />
					</PanelBody>
				}
				advanced={ <AdvancedTab attributes={ attributes } setAttributes={ setAttributes } /> }
			/>

			<div { ...blockProps }>
				{ ( title || copyButton ) && (
					<div className="bpafb-code__header">
						<span className="bpafb-code__title">{ title }</span>
						{ copyButton && (
							<span className="bpafb-code__copy" aria-hidden="true">
								<i className="fa-regular fa-copy" />
								<span>{ __( 'Copy', 'blockive-premium-addon-for-block-pro' ) }</span>
							</span>
						) }
					</div>
				) }
				<pre className={ `bpafb-code__pre language-${ language }` }>
					{ showColored ? (
						// Prism output: every character of the code is escaped (see highlight.js).
						<code dangerouslySetInnerHTML={ { __html: lines } } />
					) : (
						<PlainText
							className="bpafb-code-editor__input"
							value={ code }
							onChange={ set( 'code' ) }
							placeholder={ __( 'Paste or type code…', 'blockive-premium-addon-for-block-pro' ) }
							aria-label={ __( 'Code', 'blockive-premium-addon-for-block-pro' ) }
						/>
					) }
				</pre>
			</div>
		</>
	);
}
