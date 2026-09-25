import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { useBlockProps, RichText, BlockControls, AlignmentControl } from '@wordpress/block-editor';
import { PanelBody, SelectControl, RangeControl, TextControl, TextareaControl, ToggleControl, ToolbarGroup, ToolbarButton } from '@wordpress/components';

import InspectorTabs from '../components/inspector-tabs';
import AdvancedTab from '../components/advanced-tab';
import ColorStateControls from '../components/color-state-controls';
import TypographyControls from '../components/typography-controls';
import { typoValues, typoOnChange, typoVars, cssVars } from '../template-blocks-site/shared';
import { SHAPES, SHAPE_OPTIONS, ANIMATION_OPTIONS } from './shapes';

const plain = ( value ) => String( value ?? '' ).replace( /<[^>]+>/g, '' );

export default function Edit( { attributes, setAttributes } ) {
	const {
		style,
		beforeText,
		highlightedText,
		rotatingText,
		afterText,
		shape,
		animation,
		tag,
		align,
		link,
		newTab,
		loop,
		duration,
		delay,
		titleColor,
		wordColor,
		shapeColor,
		shapeWidth,
		shapeInFront,
		roundedEdges,
		typingSelectionColor,
		typingCursorColor,
	} = attributes;
	const set = ( key ) => ( val ) => setAttributes( { [ key ]: val } );
	const rotate = style === 'rotate';
	const words = ( rotatingText || '' ).split( '\n' ).map( ( w ) => w.trim() ).filter( Boolean );

	// Bumped to replay the highlight drawing in the editor.
	const [ replay, setReplay ] = useState( 0 );

	const blockProps = useBlockProps( {
		className: [
			'bpafb-ah',
			rotate ? `bpafb-ah--rotate bpafb-ah--anim-${ animation }` : `bpafb-ah--highlight bpafb-ah--shape-${ shape.replace( '_', '-' ) }`,
			`bpafb-ah--align-${ align }`,
			! rotate && shapeInFront && 'bpafb-ah--shape-front',
			! rotate && roundedEdges && 'bpafb-ah--rounded',
			replay > 0 && ! rotate && 'is-ready is-drawn',
		]
			.filter( Boolean )
			.join( ' ' ),
		style: cssVars( {
			'--bpafb-ah-word-color': wordColor,
			'--bpafb-ah-shape-color': shapeColor,
			'--bpafb-ah-shape-width': typeof shapeWidth === 'number' ? String( shapeWidth ) : undefined,
			'--bpafb-ah-duration': typeof duration === 'number' ? `${ duration }ms` : undefined,
			'--bpafb-ah-selection': typingSelectionColor,
			'--bpafb-ah-cursor': typingCursorColor,
			...typoVars( attributes, 'word', '--bpafb-ah-word' ),
		} ),
	} );

	const Tag = tag;
	// Only what was set, so the theme's heading styles apply otherwise
	// (same as the scoped rule in render.php).
	const titleStyle = {};
	Object.entries( typoVars( attributes, 'title', '' ) ).forEach( ( [ prop, value ] ) => {
		titleStyle[ prop.slice( 1 ).replace( /-([a-z])/g, ( _, c ) => c.toUpperCase() ) ] = value;
	} );
	if ( titleColor ) {
		titleStyle.color = titleColor;
	}
	const textProps = { allowedFormats: [], withoutInteractiveFormatting: true, disableLineBreaks: true };

	return (
		<>
			<BlockControls>
				<AlignmentControl value={ align } onChange={ ( val ) => setAttributes( { align: val || 'center' } ) } />
				{ ! rotate && (
					<ToolbarGroup>
						<ToolbarButton icon="controls-play" label={ __( 'Replay animation', 'blockive-premium-addon-for-block-pro' ) } onClick={ () => setReplay( replay + 1 ) } />
					</ToolbarGroup>
				) }
			</BlockControls>

			<InspectorTabs
				general={
					<>
						<PanelBody title={ __( 'Headline', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							<SelectControl
								label={ __( 'Style', 'blockive-premium-addon-for-block-pro' ) }
								value={ style }
								options={ [
									{ label: __( 'Highlighted', 'blockive-premium-addon-for-block-pro' ), value: 'highlight' },
									{ label: __( 'Rotating', 'blockive-premium-addon-for-block-pro' ), value: 'rotate' },
								] }
								onChange={ set( 'style' ) }
							/>
							{ rotate ? (
								<>
									<SelectControl label={ __( 'Animation', 'blockive-premium-addon-for-block-pro' ) } value={ animation } options={ ANIMATION_OPTIONS } onChange={ set( 'animation' ) } />
									<TextareaControl
										label={ __( 'Rotating Words', 'blockive-premium-addon-for-block-pro' ) }
										value={ rotatingText }
										onChange={ set( 'rotatingText' ) }
										help={ __( 'One per line. Screen readers hear all of them as a list.', 'blockive-premium-addon-for-block-pro' ) }
									/>
								</>
							) : (
								<SelectControl label={ __( 'Shape', 'blockive-premium-addon-for-block-pro' ) } value={ shape } options={ SHAPE_OPTIONS } onChange={ set( 'shape' ) } />
							) }
							<p className="components-base-control__help">{ __( 'Type the text before and after directly in the block.', 'blockive-premium-addon-for-block-pro' ) }</p>
							<SelectControl
								label={ __( 'HTML Tag', 'blockive-premium-addon-for-block-pro' ) }
								value={ tag }
								options={ [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div', 'span' ].map( ( t ) => ( { label: t.toUpperCase(), value: t } ) ) }
								onChange={ set( 'tag' ) }
							/>
							<TextControl label={ __( 'Link', 'blockive-premium-addon-for-block-pro' ) } type="url" value={ link } onChange={ set( 'link' ) } />
							{ !! link && <ToggleControl label={ __( 'Open in New Tab', 'blockive-premium-addon-for-block-pro' ) } checked={ !! newTab } onChange={ set( 'newTab' ) } /> }
						</PanelBody>
						<PanelBody title={ __( 'Animation', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<ToggleControl
								label={ __( 'Loop', 'blockive-premium-addon-for-block-pro' ) }
								checked={ !! loop }
								onChange={ set( 'loop' ) }
								help={ __( 'Pauses while the pointer is over the headline. Nothing moves for visitors who prefer reduced motion.', 'blockive-premium-addon-for-block-pro' ) }
							/>
							{ ! rotate && <RangeControl label={ __( 'Drawing Duration (ms)', 'blockive-premium-addon-for-block-pro' ) } value={ duration } onChange={ set( 'duration' ) } min={ 200 } max={ 5000 } step={ 100 } /> }
							<RangeControl
								label={ rotate ? __( 'Time Each Word Shows (ms)', 'blockive-premium-addon-for-block-pro' ) : __( 'Pause Before Redrawing (ms)', 'blockive-premium-addon-for-block-pro' ) }
								value={ delay }
								onChange={ set( 'delay' ) }
								min={ 500 }
								max={ 20000 }
								step={ 250 }
							/>
						</PanelBody>
					</>
				}
				style={
					<>
						<PanelBody title={ __( 'Headline', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							<TypographyControls values={ typoValues( attributes, 'title' ) } onChange={ typoOnChange( setAttributes, 'title' ) } />
							<ColorStateControls normal={ [ { label: __( 'Color', 'blockive-premium-addon-for-block-pro' ), value: titleColor, onChange: set( 'titleColor' ) } ] } />
						</PanelBody>
						<PanelBody title={ rotate ? __( 'Rotating Words', 'blockive-premium-addon-for-block-pro' ) : __( 'Highlighted Text', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<TypographyControls values={ typoValues( attributes, 'word' ) } onChange={ typoOnChange( setAttributes, 'word' ) } />
							<ColorStateControls normal={ [ { label: __( 'Color', 'blockive-premium-addon-for-block-pro' ), value: wordColor, onChange: set( 'wordColor' ) } ] } />
						</PanelBody>
						{ rotate ? (
							animation === 'typing' || animation === 'clip' ? (
								<PanelBody title={ animation === 'typing' ? __( 'Typing', 'blockive-premium-addon-for-block-pro' ) : __( 'Clip Line', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
									<ColorStateControls
										normal={ [
											{ label: __( 'Cursor / Line', 'blockive-premium-addon-for-block-pro' ), value: typingCursorColor, onChange: set( 'typingCursorColor' ) },
											...( animation === 'typing' ? [ { label: __( 'Selection', 'blockive-premium-addon-for-block-pro' ), value: typingSelectionColor, onChange: set( 'typingSelectionColor' ) } ] : [] ),
										] }
									/>
								</PanelBody>
							) : null
						) : (
							<PanelBody title={ __( 'Shape', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
								<ColorStateControls normal={ [ { label: __( 'Color', 'blockive-premium-addon-for-block-pro' ), value: shapeColor, onChange: set( 'shapeColor' ) } ] } />
								<RangeControl label={ __( 'Stroke Width', 'blockive-premium-addon-for-block-pro' ) } value={ shapeWidth } onChange={ set( 'shapeWidth' ) } min={ 1 } max={ 30 } />
								<ToggleControl label={ __( 'Rounded Edges', 'blockive-premium-addon-for-block-pro' ) } checked={ !! roundedEdges } onChange={ set( 'roundedEdges' ) } />
								<ToggleControl label={ __( 'Draw Over the Text', 'blockive-premium-addon-for-block-pro' ) } checked={ !! shapeInFront } onChange={ set( 'shapeInFront' ) } />
							</PanelBody>
						) }
					</>
				}
				advanced={ <AdvancedTab attributes={ attributes } setAttributes={ setAttributes } /> }
			/>

			<div { ...blockProps }>
				<Tag className="bpafb-ah__title" style={ titleStyle }>
					<RichText
						tagName="span"
						className="bpafb-ah__plain"
						value={ beforeText }
						onChange={ ( val ) => setAttributes( { beforeText: plain( val ) } ) }
						placeholder={ __( 'Before text', 'blockive-premium-addon-for-block-pro' ) }
						{ ...textProps }
					/>{ ' ' }
					{ rotate ? (
						<span className="bpafb-ah__dynamic bpafb-ah__words">
							<span className="bpafb-ah__word is-active">{ words[ 0 ] || __( 'Rotating words', 'blockive-premium-addon-for-block-pro' ) }</span>
						</span>
					) : (
						<span className="bpafb-ah__dynamic bpafb-ah__highlight">
							<RichText
								tagName="span"
								className="bpafb-ah__word"
								value={ highlightedText }
								onChange={ ( val ) => setAttributes( { highlightedText: plain( val ) } ) }
								placeholder={ __( 'Highlighted', 'blockive-premium-addon-for-block-pro' ) }
								{ ...textProps }
							/>
							<svg key={ replay } className="bpafb-ah__shape" viewBox="0 0 500 150" preserveAspectRatio="none" aria-hidden="true" focusable="false">
								{ ( SHAPES[ shape ] || SHAPES.circle ).map( ( d ) => (
									<path key={ d } d={ d } pathLength="1" />
								) ) }
							</svg>
						</span>
					) }{ ' ' }
					<RichText
						tagName="span"
						className="bpafb-ah__plain"
						value={ afterText }
						onChange={ ( val ) => setAttributes( { afterText: plain( val ) } ) }
						placeholder={ __( 'After text', 'blockive-premium-addon-for-block-pro' ) }
						{ ...textProps }
					/>
				</Tag>
			</div>
		</>
	);
}
