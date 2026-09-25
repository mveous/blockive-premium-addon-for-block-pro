import { __ } from '@wordpress/i18n';
import { useState, useRef, useEffect, useMemo } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { PanelBody, SelectControl, RangeControl, TextControl, ToggleControl, CheckboxControl, BaseControl } from '@wordpress/components';

import InspectorTabs from '../components/inspector-tabs';
import AdvancedTab from '../components/advanced-tab';
import ColorStateControls from '../components/color-state-controls';
import TypographyControls from '../components/typography-controls';
import { typoValues, typoOnChange, typoVars, cssVars } from '../template-blocks-site/shared';
import { buildTocList } from './toc-list';

import './editor.css';

const HEADING_BLOCKS = [ 'core/heading', 'blockive-premium-addon-for-block/heading' ];

const SAMPLE = [
	{ level: 2, text: __( 'Introduction', 'blockive-premium-addon-for-block-pro' ) },
	{ level: 3, text: __( 'Background', 'blockive-premium-addon-for-block-pro' ) },
	{ level: 3, text: __( 'Goals', 'blockive-premium-addon-for-block-pro' ) },
	{ level: 2, text: __( 'Getting Started', 'blockive-premium-addon-for-block-pro' ) },
	{ level: 2, text: __( 'Summary', 'blockive-premium-addon-for-block-pro' ) },
];

const plainText = ( value ) => String( value ?? '' ).replace( /<[^>]+>/g, '' ).trim();

/**
 * Headings of the post being edited (core and Blockive Heading blocks),
 * for the preview. On the front end, view.js reads the rendered page.
 *
 * @param {Array} blocks Block tree.
 * @param {Array} out    Collected headings.
 */
function collectHeadings( blocks, out = [] ) {
	blocks.forEach( ( block ) => {
		if ( HEADING_BLOCKS.includes( block.name ) ) {
			const text = plainText( block.attributes.content );
			if ( text ) {
				out.push( { level: block.attributes.level || 2, text } );
			}
		}
		if ( block.innerBlocks?.length ) {
			collectHeadings( block.innerBlocks, out );
		}
	} );
	return out;
}

export default function Edit( { attributes, setAttributes } ) {
	const {
		title,
		titleTag,
		headingTags,
		container,
		exclude,
		marker,
		hierarchical,
		collapsible,
		collapsed,
		collapsedMobile,
		scrollOffset,
		noHeadingsText,
		bgColor,
		borderColor,
		borderWidth,
		borderRadius,
		padding,
		titleColor,
		titleBgColor,
		separator,
		linkColor,
		linkHoverColor,
		linkActiveColor,
		markerColor,
		indent,
		itemSpacing,
	} = attributes;

	const set = ( key ) => ( val ) => setAttributes( { [ key ]: val } );
	const [ previewOpen, setPreviewOpen ] = useState( true );
	const listRef = useRef();

	const blocks = useSelect( ( select ) => select( 'core/block-editor' ).getBlocks(), [] );
	const pageHeadings = useMemo( () => collectHeadings( blocks ), [ blocks ] );
	const fromPage = pageHeadings.filter( ( h ) => headingTags.includes( `h${ h.level }` ) );
	const items = ( fromPage.length ? fromPage : SAMPLE.filter( ( h ) => headingTags.includes( `h${ h.level }` ) ) ).map( ( h, i ) => ( { ...h, id: `bpafb-toc-preview-${ i }` } ) );
	const itemsKey = JSON.stringify( items );

	// Same list builder as the front end.
	useEffect( () => {
		const node = listRef.current;
		if ( ! node ) {
			return;
		}
		node.replaceChildren();
		if ( items.length ) {
			const list = buildTocList( node.ownerDocument, items, { ordered: marker === 'numbers', hierarchical } );
			list.querySelectorAll( 'a' ).forEach( ( a ) => a.addEventListener( 'click', ( e ) => e.preventDefault() ) );
			node.append( list );
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ itemsKey, marker, hierarchical, previewOpen ] );

	const toggleTag = ( tag, checked ) => {
		const next = checked ? [ ...headingTags, tag ] : headingTags.filter( ( t ) => t !== tag );
		setAttributes( { headingTags: [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ].filter( ( t ) => next.includes( t ) ) } );
	};

	const TitleTag = titleTag;
	const blockProps = useBlockProps( {
		className: `bpafb-toc bpafb-toc--marker-${ marker }${ collapsible ? ' bpafb-toc--collapsible' : '' }${ separator ? ' bpafb-toc--separator' : '' }${ collapsible && ! previewOpen ? ' is-collapsed' : '' }`,
		style: cssVars( {
			'--bpafb-toc-bg': bgColor,
			'--bpafb-toc-border-color': borderColor,
			'--bpafb-toc-border-width': borderWidth,
			'--bpafb-toc-radius': borderRadius,
			'--bpafb-toc-padding': padding,
			'--bpafb-toc-title-color': titleColor,
			'--bpafb-toc-title-bg': titleBgColor,
			'--bpafb-toc-link-color': linkColor,
			'--bpafb-toc-link-hover': linkHoverColor,
			'--bpafb-toc-link-active': linkActiveColor,
			'--bpafb-toc-marker-color': markerColor,
			'--bpafb-toc-indent': indent,
			'--bpafb-toc-item-spacing': itemSpacing,
			...typoVars( attributes, 'title', '--bpafb-toc-title' ),
			...typoVars( attributes, 'link', '--bpafb-toc-link' ),
		} ),
	} );

	return (
		<>
			<InspectorTabs
				general={
					<>
						<PanelBody title={ __( 'Table of Contents', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							<SelectControl
								label={ __( 'Title HTML Tag', 'blockive-premium-addon-for-block-pro' ) }
								value={ titleTag }
								options={ [ 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div' ].map( ( t ) => ( { label: t.toUpperCase(), value: t } ) ) }
								onChange={ set( 'titleTag' ) }
							/>
							<BaseControl label={ __( 'Include Headings', 'blockive-premium-addon-for-block-pro' ) } id="bpafb-toc-tags">
								<div className="bpafb-toc-editor__tags">
									{ [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ].map( ( tag ) => (
										<CheckboxControl key={ tag } label={ tag.toUpperCase() } checked={ headingTags.includes( tag ) } onChange={ ( checked ) => toggleTag( tag, checked ) } />
									) ) }
								</div>
							</BaseControl>
							<SelectControl
								label={ __( 'Marker', 'blockive-premium-addon-for-block-pro' ) }
								value={ marker }
								options={ [
									{ label: __( 'Numbers', 'blockive-premium-addon-for-block-pro' ), value: 'numbers' },
									{ label: __( 'Bullets', 'blockive-premium-addon-for-block-pro' ), value: 'bullets' },
									{ label: __( 'None', 'blockive-premium-addon-for-block-pro' ), value: 'none' },
								] }
								onChange={ set( 'marker' ) }
							/>
							<ToggleControl label={ __( 'Nested (Hierarchical) List', 'blockive-premium-addon-for-block-pro' ) } checked={ !! hierarchical } onChange={ set( 'hierarchical' ) } />
							<TextControl label={ __( 'No Headings Message', 'blockive-premium-addon-for-block-pro' ) } value={ noHeadingsText } onChange={ set( 'noHeadingsText' ) } />
						</PanelBody>
						<PanelBody title={ __( 'Collapse', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<ToggleControl label={ __( 'Collapsible', 'blockive-premium-addon-for-block-pro' ) } help={ __( 'The title becomes a button that shows and hides the list.', 'blockive-premium-addon-for-block-pro' ) } checked={ !! collapsible } onChange={ set( 'collapsible' ) } />
							{ collapsible && (
								<>
									<ToggleControl label={ __( 'Start Collapsed', 'blockive-premium-addon-for-block-pro' ) } checked={ !! collapsed } onChange={ set( 'collapsed' ) } />
									<ToggleControl label={ __( 'Start Collapsed on Mobile', 'blockive-premium-addon-for-block-pro' ) } checked={ !! collapsedMobile } onChange={ set( 'collapsedMobile' ) } />
								</>
							) }
						</PanelBody>
						<PanelBody title={ __( 'Advanced Options', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<TextControl
								label={ __( 'Look for Headings In', 'blockive-premium-addon-for-block-pro' ) }
								value={ container }
								onChange={ set( 'container' ) }
								placeholder="main"
								help={ __( 'A CSS selector, e.g. .entry-content. Leave empty for the main content area.', 'blockive-premium-addon-for-block-pro' ) }
							/>
							<TextControl
								label={ __( 'Exclude Headings Inside', 'blockive-premium-addon-for-block-pro' ) }
								value={ exclude }
								onChange={ set( 'exclude' ) }
								placeholder=".sidebar, footer"
								help={ __( 'A CSS selector. Headings inside an element with the class bpafb-toc-exclude are always left out.', 'blockive-premium-addon-for-block-pro' ) }
							/>
							<RangeControl
								label={ __( 'Scroll Offset (px)', 'blockive-premium-addon-for-block-pro' ) }
								value={ scrollOffset }
								onChange={ set( 'scrollOffset' ) }
								min={ 0 }
								max={ 300 }
								help={ __( 'Space kept above a heading after jumping to it, e.g. for a sticky header.', 'blockive-premium-addon-for-block-pro' ) }
							/>
						</PanelBody>
					</>
				}
				style={
					<>
						<PanelBody title={ __( 'Box', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							<ColorStateControls
								normal={ [
									{ label: __( 'Background', 'blockive-premium-addon-for-block-pro' ), value: bgColor, onChange: set( 'bgColor' ) },
									{ label: __( 'Border Color', 'blockive-premium-addon-for-block-pro' ), value: borderColor, onChange: set( 'borderColor' ) },
								] }
							/>
							<RangeControl label={ __( 'Border Width (px)', 'blockive-premium-addon-for-block-pro' ) } value={ borderWidth } onChange={ set( 'borderWidth' ) } min={ 0 } max={ 10 } />
							<RangeControl label={ __( 'Border Radius (px)', 'blockive-premium-addon-for-block-pro' ) } value={ borderRadius } onChange={ set( 'borderRadius' ) } min={ 0 } max={ 40 } />
							<RangeControl label={ __( 'Padding (px)', 'blockive-premium-addon-for-block-pro' ) } value={ padding } onChange={ set( 'padding' ) } min={ 0 } max={ 60 } />
						</PanelBody>
						<PanelBody title={ __( 'Title', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<TypographyControls values={ typoValues( attributes, 'title' ) } onChange={ typoOnChange( setAttributes, 'title' ) } />
							<ColorStateControls
								normal={ [
									{ label: __( 'Color', 'blockive-premium-addon-for-block-pro' ), value: titleColor, onChange: set( 'titleColor' ) },
									{ label: __( 'Background', 'blockive-premium-addon-for-block-pro' ), value: titleBgColor, onChange: set( 'titleBgColor' ) },
								] }
							/>
							<ToggleControl label={ __( 'Separator Below Title', 'blockive-premium-addon-for-block-pro' ) } checked={ !! separator } onChange={ set( 'separator' ) } />
						</PanelBody>
						<PanelBody title={ __( 'List', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<TypographyControls values={ typoValues( attributes, 'link' ) } onChange={ typoOnChange( setAttributes, 'link' ) } />
							<ColorStateControls
								normal={ [
									{ label: __( 'Link', 'blockive-premium-addon-for-block-pro' ), value: linkColor, onChange: set( 'linkColor' ) },
									{ label: __( 'Current Section', 'blockive-premium-addon-for-block-pro' ), value: linkActiveColor, onChange: set( 'linkActiveColor' ) },
									{ label: __( 'Marker', 'blockive-premium-addon-for-block-pro' ), value: markerColor, onChange: set( 'markerColor' ) },
								] }
								hover={ [ { label: __( 'Link', 'blockive-premium-addon-for-block-pro' ), value: linkHoverColor, onChange: set( 'linkHoverColor' ) } ] }
							/>
							<RangeControl label={ __( 'Nested Indent (px)', 'blockive-premium-addon-for-block-pro' ) } value={ indent } onChange={ set( 'indent' ) } min={ 0 } max={ 60 } />
							<RangeControl label={ __( 'Item Spacing (px)', 'blockive-premium-addon-for-block-pro' ) } value={ itemSpacing } onChange={ set( 'itemSpacing' ) } min={ 0 } max={ 30 } />
						</PanelBody>
					</>
				}
				advanced={ <AdvancedTab attributes={ attributes } setAttributes={ setAttributes } /> }
			/>

			<nav { ...blockProps }>
				{ collapsible ? (
					<TitleTag className="bpafb-toc__title">
						<div className="bpafb-toc__toggle">
							<RichText tagName="span" value={ title } onChange={ set( 'title' ) } placeholder={ __( 'Table of Contents', 'blockive-premium-addon-for-block-pro' ) } allowedFormats={ [] } />
							<button type="button" className="bpafb-toc-editor__collapse" onClick={ () => setPreviewOpen( ! previewOpen ) } aria-expanded={ previewOpen } aria-label={ __( 'Toggle list preview', 'blockive-premium-addon-for-block-pro' ) }>
								<i className="fa-solid fa-chevron-down" aria-hidden="true" style={ previewOpen ? undefined : { transform: 'rotate(-90deg)' } } />
							</button>
						</div>
					</TitleTag>
				) : (
					<RichText tagName={ titleTag } className="bpafb-toc__title" value={ title } onChange={ set( 'title' ) } placeholder={ __( 'Table of Contents', 'blockive-premium-addon-for-block-pro' ) } allowedFormats={ [] } />
				) }
				{ previewOpen && (
					<div className="bpafb-toc__body">
						{ ! fromPage.length && <p className="bpafb-toc-editor__note">{ __( 'Sample headings. On the site, this lists the headings on the page.', 'blockive-premium-addon-for-block-pro' ) }</p> }
						{ items.length ? <div ref={ listRef } /> : <p className="bpafb-toc__empty">{ noHeadingsText }</p> }
					</div>
				) }
			</nav>
		</>
	);
}
