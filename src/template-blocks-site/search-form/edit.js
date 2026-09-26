import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { useBlockProps, BlockControls, AlignmentControl } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl, RangeControl, ToggleControl } from '@wordpress/components';

import InspectorTabs from '../../components/inspector-tabs';
import AdvancedTab from '../../components/advanced-tab';
import ColorStateControls from '../../components/color-state-controls';
import TypographyControls from '../../components/typography-controls';
import { typoValues, typoOnChange, typoVars, cssVars, SvgIcon } from '../shared';

export default function Edit( { attributes, setAttributes } ) {
	const {
		skin,
		placeholder,
		buttonType,
		buttonText,
		postType,
		align,
		inputWidth,
		height,
		toggleSize,
		inputColor,
		inputBgColor,
		inputFocusBgColor,
		inputBorderColor,
		inputFocusBorderColor,
		borderWidth,
		borderRadius,
		buttonColor,
		buttonBgColor,
		buttonHoverColor,
		buttonHoverBgColor,
		buttonWidth,
		toggleColor,
		toggleHoverColor,
		overlayBgColor,
		liveResults,
		liveCount,
		liveMinChars,
		liveShowImage,
		liveShowExcerpt,
		resultsBgColor,
		resultsTextColor,
		resultsActiveBgColor,
	} = attributes;

	const postTypeOptions = useSelect( ( select ) => {
		const types = select( 'core' ).getPostTypes( { per_page: -1 } ) || [];
		return [
			{ label: __( 'All Content', 'blockive-premium-addon-for-block-pro' ), value: '' },
			...types
				.filter( ( type ) => type.viewable && type.slug !== 'attachment' && type.slug !== 'blockive_template' )
				.map( ( type ) => ( { label: type.name, value: type.slug } ) ),
		];
	}, [] );

	const set = ( key ) => ( val ) => setAttributes( { [ key ]: val } );

	const blockProps = useBlockProps( {
		className: `bpafb-tb-search bpafb-tb-search--${ skin } bpafb-tb-align-${ align || 'left' }`,
		style: cssVars( {
			'--bpafb-search-width': inputWidth,
			'--bpafb-search-height': height,
			'--bpafb-search-toggle-size': toggleSize,
			'--bpafb-search-input-color': inputColor,
			'--bpafb-search-input-bg': inputBgColor,
			'--bpafb-search-input-focus-bg': inputFocusBgColor,
			'--bpafb-search-border-color': inputBorderColor,
			'--bpafb-search-focus-border-color': inputFocusBorderColor,
			'--bpafb-search-border-width': borderWidth,
			'--bpafb-search-radius': borderRadius,
			'--bpafb-search-button-color': buttonColor,
			'--bpafb-search-button-bg': buttonBgColor,
			'--bpafb-search-button-hover-color': buttonHoverColor,
			'--bpafb-search-button-hover-bg': buttonHoverBgColor,
			'--bpafb-search-button-width': buttonWidth,
			'--bpafb-search-toggle-color': toggleColor,
			'--bpafb-search-toggle-hover-color': toggleHoverColor,
			'--bpafb-search-overlay-bg': overlayBgColor,
			...typoVars( attributes, 'input', '--bpafb-search-input' ),
		} ),
	} );

	const field = (
		<div className="bpafb-tb-search__form">
			<input className="bpafb-tb-search__input" type="search" placeholder={ placeholder } readOnly tabIndex={ -1 } />
			{ skin === 'minimal' && (
				<span className="bpafb-tb-search__icon">
					<SvgIcon name="search" />
				</span>
			) }
			{ skin === 'classic' && (
				<span className="bpafb-tb-search__button">
					{ buttonType === 'text' ? buttonText : <SvgIcon name="search" /> }
				</span>
			) }
		</div>
	);

	return (
		<>
			<BlockControls>
				<AlignmentControl value={ align } onChange={ ( val ) => setAttributes( { align: val || 'left' } ) } />
			</BlockControls>

			<InspectorTabs
				general={
					<>
					<PanelBody title={ __( 'Search Form', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
						<SelectControl
							label={ __( 'Skin', 'blockive-premium-addon-for-block-pro' ) }
							value={ skin }
							options={ [
								{ label: __( 'Classic (field + button)', 'blockive-premium-addon-for-block-pro' ), value: 'classic' },
								{ label: __( 'Minimal (field with icon)', 'blockive-premium-addon-for-block-pro' ), value: 'minimal' },
								{ label: __( 'Full Screen (icon opens overlay)', 'blockive-premium-addon-for-block-pro' ), value: 'full_screen' },
							] }
							onChange={ set( 'skin' ) }
						/>
						<TextControl
							label={ __( 'Placeholder', 'blockive-premium-addon-for-block-pro' ) }
							value={ placeholder }
							onChange={ set( 'placeholder' ) }
						/>
						{ skin === 'classic' && (
							<>
								<SelectControl
									label={ __( 'Button', 'blockive-premium-addon-for-block-pro' ) }
									value={ buttonType }
									options={ [
										{ label: __( 'Icon', 'blockive-premium-addon-for-block-pro' ), value: 'icon' },
										{ label: __( 'Text', 'blockive-premium-addon-for-block-pro' ), value: 'text' },
									] }
									onChange={ set( 'buttonType' ) }
								/>
								{ buttonType === 'text' && (
									<TextControl
										label={ __( 'Button Text', 'blockive-premium-addon-for-block-pro' ) }
										value={ buttonText }
										onChange={ set( 'buttonText' ) }
									/>
								) }
							</>
						) }
						<SelectControl
							label={ __( 'Search In', 'blockive-premium-addon-for-block-pro' ) }
							value={ postType }
							options={ postTypeOptions }
							onChange={ set( 'postType' ) }
						/>
					</PanelBody>
					<PanelBody title={ __( 'Live Results', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
						<ToggleControl
							label={ __( 'Show Results While Typing', 'blockive-premium-addon-for-block-pro' ) }
							checked={ !! liveResults }
							onChange={ set( 'liveResults' ) }
							help={ __( 'Matching published content appears under the field; Enter still opens the full results page.', 'blockive-premium-addon-for-block-pro' ) }
						/>
						{ liveResults && (
							<>
								<RangeControl label={ __( 'Number of Results', 'blockive-premium-addon-for-block-pro' ) } value={ liveCount } onChange={ set( 'liveCount' ) } min={ 1 } max={ 10 } />
								<RangeControl label={ __( 'Start After (characters)', 'blockive-premium-addon-for-block-pro' ) } value={ liveMinChars } onChange={ set( 'liveMinChars' ) } min={ 1 } max={ 5 } />
								<ToggleControl label={ __( 'Show Image', 'blockive-premium-addon-for-block-pro' ) } checked={ !! liveShowImage } onChange={ set( 'liveShowImage' ) } />
								<ToggleControl label={ __( 'Show Excerpt', 'blockive-premium-addon-for-block-pro' ) } checked={ !! liveShowExcerpt } onChange={ set( 'liveShowExcerpt' ) } />
							</>
						) }
					</PanelBody>
					</>
				}
				style={
					<>
						<PanelBody title={ __( 'Input', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							<RangeControl label={ __( 'Width (px)', 'blockive-premium-addon-for-block-pro' ) } value={ inputWidth } onChange={ set( 'inputWidth' ) } min={ 120 } max={ 1200 } allowReset />
							<RangeControl label={ __( 'Height (px)', 'blockive-premium-addon-for-block-pro' ) } value={ height } onChange={ set( 'height' ) } min={ 24 } max={ 100 } />
							<TypographyControls values={ typoValues( attributes, 'input' ) } onChange={ typoOnChange( setAttributes, 'input' ) } />
							<ColorStateControls
								normal={ [
									{ label: __( 'Text Color', 'blockive-premium-addon-for-block-pro' ), value: inputColor, onChange: set( 'inputColor' ) },
									{ label: __( 'Background', 'blockive-premium-addon-for-block-pro' ), value: inputBgColor, onChange: set( 'inputBgColor' ) },
									{ label: __( 'Border Color', 'blockive-premium-addon-for-block-pro' ), value: inputBorderColor, onChange: set( 'inputBorderColor' ) },
								] }
								hover={ [
									{ label: __( 'Focus Background', 'blockive-premium-addon-for-block-pro' ), value: inputFocusBgColor, onChange: set( 'inputFocusBgColor' ) },
									{ label: __( 'Focus Border Color', 'blockive-premium-addon-for-block-pro' ), value: inputFocusBorderColor, onChange: set( 'inputFocusBorderColor' ) },
								] }
							/>
							<RangeControl label={ __( 'Border Width (px)', 'blockive-premium-addon-for-block-pro' ) } value={ borderWidth } onChange={ set( 'borderWidth' ) } min={ 0 } max={ 10 } />
							<RangeControl label={ __( 'Border Radius (px)', 'blockive-premium-addon-for-block-pro' ) } value={ borderRadius } onChange={ set( 'borderRadius' ) } min={ 0 } max={ 60 } />
						</PanelBody>
						{ skin === 'classic' && (
							<PanelBody title={ __( 'Button', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
								<ColorStateControls
									normal={ [
										{ label: __( 'Text / Icon Color', 'blockive-premium-addon-for-block-pro' ), value: buttonColor, onChange: set( 'buttonColor' ) },
										{ label: __( 'Background', 'blockive-premium-addon-for-block-pro' ), value: buttonBgColor, onChange: set( 'buttonBgColor' ) },
									] }
									hover={ [
										{ label: __( 'Text / Icon Color', 'blockive-premium-addon-for-block-pro' ), value: buttonHoverColor, onChange: set( 'buttonHoverColor' ) },
										{ label: __( 'Background', 'blockive-premium-addon-for-block-pro' ), value: buttonHoverBgColor, onChange: set( 'buttonHoverBgColor' ) },
									] }
								/>
								<RangeControl label={ __( 'Button Width (px)', 'blockive-premium-addon-for-block-pro' ) } value={ buttonWidth } onChange={ set( 'buttonWidth' ) } min={ 30 } max={ 200 } allowReset />
							</PanelBody>
						) }
						{ skin === 'full_screen' && (
							<PanelBody title={ __( 'Toggle & Overlay', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
								<RangeControl label={ __( 'Icon Size (px)', 'blockive-premium-addon-for-block-pro' ) } value={ toggleSize } onChange={ set( 'toggleSize' ) } min={ 10 } max={ 60 } />
								<ColorStateControls
									normal={ [
										{ label: __( 'Icon Color', 'blockive-premium-addon-for-block-pro' ), value: toggleColor, onChange: set( 'toggleColor' ) },
										{ label: __( 'Overlay Background', 'blockive-premium-addon-for-block-pro' ), value: overlayBgColor, onChange: set( 'overlayBgColor' ) },
									] }
									hover={ [
										{ label: __( 'Icon Color', 'blockive-premium-addon-for-block-pro' ), value: toggleHoverColor, onChange: set( 'toggleHoverColor' ) },
									] }
								/>
							</PanelBody>
						) }
						{ liveResults && (
							<PanelBody title={ __( 'Live Results', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
								<ColorStateControls
									normal={ [
										{ label: __( 'Text Color', 'blockive-premium-addon-for-block-pro' ), value: resultsTextColor, onChange: set( 'resultsTextColor' ) },
										{ label: __( 'Background', 'blockive-premium-addon-for-block-pro' ), value: resultsBgColor, onChange: set( 'resultsBgColor' ) },
									] }
									hover={ [
										{ label: __( 'Chosen Result Background', 'blockive-premium-addon-for-block-pro' ), value: resultsActiveBgColor, onChange: set( 'resultsActiveBgColor' ) },
									] }
								/>
							</PanelBody>
						) }
					</>
				}
				advanced={ <AdvancedTab attributes={ attributes } setAttributes={ setAttributes } /> }
			/>

			<div { ...blockProps }>
				{ skin === 'full_screen' ? (
					<span className="bpafb-tb-search__toggle">
						<SvgIcon name="search" />
					</span>
				) : (
					field
				) }
			</div>
		</>
	);
}
