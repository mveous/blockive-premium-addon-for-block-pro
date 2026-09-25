import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, BlockControls, AlignmentControl } from '@wordpress/block-editor';
import { PanelBody, SelectControl, RangeControl, TextControl, ToggleControl } from '@wordpress/components';

import InspectorTabs from '../components/inspector-tabs';
import AdvancedTab from '../components/advanced-tab';
import ColorStateControls from '../components/color-state-controls';
import TypographyControls from '../components/typography-controls';
import { typoValues, typoOnChange, typoVars, cssVars } from '../template-blocks-site/shared';

export default function Edit( { attributes, setAttributes } ) {
	const {
		content,
		author,
		skin,
		align,
		showTweet,
		tweetLabel,
		tweetIncludeAuthor,
		tweetIncludeUrl,
		tweetStyle,
		contentColor,
		authorColor,
		bgColor,
		borderColor,
		borderWidth,
		borderRadius,
		padding,
		quoteIconColor,
		quoteIconSize,
		buttonColor,
		buttonBgColor,
		buttonHoverColor,
		buttonHoverBgColor,
		buttonRadius,
	} = attributes;
	const set = ( key ) => ( val ) => setAttributes( { [ key ]: val } );

	const blockProps = useBlockProps( {
		className: `bpafb-bq bpafb-bq--${ skin } bpafb-bq--align-${ align }`,
		style: cssVars( {
			'--bpafb-bq-content-color': contentColor,
			'--bpafb-bq-author-color': authorColor,
			'--bpafb-bq-bg': bgColor,
			'--bpafb-bq-border-color': borderColor,
			'--bpafb-bq-border-width': borderWidth,
			'--bpafb-bq-radius': borderRadius,
			'--bpafb-bq-padding': padding,
			'--bpafb-bq-icon-color': quoteIconColor,
			'--bpafb-bq-icon-size': quoteIconSize,
			'--bpafb-bq-btn-color': buttonColor,
			'--bpafb-bq-btn-bg': buttonBgColor,
			'--bpafb-bq-btn-radius': buttonRadius,
			'--bpafb-bq-btn-hover-color': buttonHoverColor,
			'--bpafb-bq-btn-hover-bg': buttonHoverBgColor,
			...typoVars( attributes, 'content', '--bpafb-bq-content' ),
			...typoVars( attributes, 'author', '--bpafb-bq-author' ),
		} ),
	} );

	return (
		<>
			<BlockControls>
				<AlignmentControl value={ align } onChange={ ( val ) => setAttributes( { align: val || 'left' } ) } />
			</BlockControls>
			<InspectorTabs
				general={
					<>
						<PanelBody title={ __( 'Quote', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							<SelectControl
								label={ __( 'Skin', 'blockive-premium-addon-for-block-pro' ) }
								value={ skin }
								options={ [
									{ label: __( 'Border', 'blockive-premium-addon-for-block-pro' ), value: 'border' },
									{ label: __( 'Quotation Mark', 'blockive-premium-addon-for-block-pro' ), value: 'quotation' },
									{ label: __( 'Boxed', 'blockive-premium-addon-for-block-pro' ), value: 'boxed' },
									{ label: __( 'Clean', 'blockive-premium-addon-for-block-pro' ), value: 'clean' },
								] }
								onChange={ set( 'skin' ) }
							/>
							<p className="components-base-control__help">{ __( 'Type the quote and the author directly in the block.', 'blockive-premium-addon-for-block-pro' ) }</p>
						</PanelBody>
						<PanelBody title={ __( 'Share on X', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<ToggleControl label={ __( 'Show Share Button', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showTweet } onChange={ set( 'showTweet' ) } />
							{ showTweet && (
								<>
									<SelectControl
										label={ __( 'Button', 'blockive-premium-addon-for-block-pro' ) }
										value={ tweetStyle }
										options={ [
											{ label: __( 'Icon and Text', 'blockive-premium-addon-for-block-pro' ), value: 'icon-text' },
											{ label: __( 'Icon Only', 'blockive-premium-addon-for-block-pro' ), value: 'icon' },
											{ label: __( 'Text Only', 'blockive-premium-addon-for-block-pro' ), value: 'text' },
										] }
										onChange={ set( 'tweetStyle' ) }
									/>
									<TextControl label={ __( 'Label', 'blockive-premium-addon-for-block-pro' ) } value={ tweetLabel } onChange={ set( 'tweetLabel' ) } />
									<ToggleControl label={ __( 'Include the Author', 'blockive-premium-addon-for-block-pro' ) } checked={ !! tweetIncludeAuthor } onChange={ set( 'tweetIncludeAuthor' ) } />
									<ToggleControl label={ __( 'Include a Link to the Page', 'blockive-premium-addon-for-block-pro' ) } checked={ !! tweetIncludeUrl } onChange={ set( 'tweetIncludeUrl' ) } />
								</>
							) }
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
									...( skin === 'quotation' ? [ { label: __( 'Quote Mark', 'blockive-premium-addon-for-block-pro' ), value: quoteIconColor, onChange: set( 'quoteIconColor' ) } ] : [] ),
								] }
							/>
							{ skin === 'quotation' && <RangeControl label={ __( 'Quote Mark Size (px)', 'blockive-premium-addon-for-block-pro' ) } value={ quoteIconSize } onChange={ set( 'quoteIconSize' ) } min={ 20 } max={ 200 } /> }
							<RangeControl label={ __( 'Border Width (px)', 'blockive-premium-addon-for-block-pro' ) } value={ borderWidth } onChange={ set( 'borderWidth' ) } min={ 0 } max={ 20 } />
							<RangeControl label={ __( 'Border Radius (px)', 'blockive-premium-addon-for-block-pro' ) } value={ borderRadius } onChange={ set( 'borderRadius' ) } min={ 0 } max={ 40 } />
							<RangeControl label={ __( 'Padding (px)', 'blockive-premium-addon-for-block-pro' ) } value={ padding } onChange={ set( 'padding' ) } min={ 0 } max={ 100 } allowReset />
						</PanelBody>
						<PanelBody title={ __( 'Quote Text', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<TypographyControls values={ typoValues( attributes, 'content' ) } onChange={ typoOnChange( setAttributes, 'content' ) } />
							<ColorStateControls normal={ [ { label: __( 'Color', 'blockive-premium-addon-for-block-pro' ), value: contentColor, onChange: set( 'contentColor' ) } ] } />
						</PanelBody>
						<PanelBody title={ __( 'Author', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<TypographyControls values={ typoValues( attributes, 'author' ) } onChange={ typoOnChange( setAttributes, 'author' ) } />
							<ColorStateControls normal={ [ { label: __( 'Color', 'blockive-premium-addon-for-block-pro' ), value: authorColor, onChange: set( 'authorColor' ) } ] } />
						</PanelBody>
						{ showTweet && (
							<PanelBody title={ __( 'Share Button', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
								<ColorStateControls
									normal={ [
										{ label: __( 'Text', 'blockive-premium-addon-for-block-pro' ), value: buttonColor, onChange: set( 'buttonColor' ) },
										{ label: __( 'Background', 'blockive-premium-addon-for-block-pro' ), value: buttonBgColor, onChange: set( 'buttonBgColor' ) },
									] }
									hover={ [
										{ label: __( 'Text', 'blockive-premium-addon-for-block-pro' ), value: buttonHoverColor, onChange: set( 'buttonHoverColor' ) },
										{ label: __( 'Background', 'blockive-premium-addon-for-block-pro' ), value: buttonHoverBgColor, onChange: set( 'buttonHoverBgColor' ) },
									] }
								/>
								<RangeControl label={ __( 'Border Radius (px)', 'blockive-premium-addon-for-block-pro' ) } value={ buttonRadius } onChange={ set( 'buttonRadius' ) } min={ 0 } max={ 40 } />
							</PanelBody>
						) }
					</>
				}
				advanced={ <AdvancedTab attributes={ attributes } setAttributes={ setAttributes } /> }
			/>

			<figure { ...blockProps }>
				<RichText
					tagName="blockquote"
					className="bpafb-bq__content"
					value={ content }
					onChange={ set( 'content' ) }
					placeholder={ __( 'Quote…', 'blockive-premium-addon-for-block-pro' ) }
					allowedFormats={ [ 'core/bold', 'core/italic', 'core/link' ] }
				/>
				<figcaption className="bpafb-bq__footer">
					<RichText tagName="cite" className="bpafb-bq__author" value={ author } onChange={ set( 'author' ) } placeholder={ __( 'Author', 'blockive-premium-addon-for-block-pro' ) } allowedFormats={ [] } />
					{ showTweet && (
						<span className={ `bpafb-bq__tweet bpafb-bq__tweet--${ tweetStyle }` }>
							{ tweetStyle !== 'text' && <i className="fa-brands fa-x-twitter" aria-hidden="true" /> }
							{ tweetStyle !== 'icon' && ( tweetLabel || __( 'Tweet', 'blockive-premium-addon-for-block-pro' ) ) }
						</span>
					) }
				</figcaption>
			</figure>
		</>
	);
}
