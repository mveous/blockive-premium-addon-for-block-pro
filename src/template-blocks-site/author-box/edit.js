import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl, TextControl, TextareaControl, RangeControl } from '@wordpress/components';

import InspectorTabs from '../../components/inspector-tabs';
import AdvancedTab from '../../components/advanced-tab';
import ColorStateControls from '../../components/color-state-controls';
import TypographyControls from '../../components/typography-controls';
import ImageControl from '../../pro-components/image-control';
import { typoValues, typoOnChange } from '../shared';
import PostPreview from '../post-preview';

export default function Edit( { attributes, setAttributes } ) {
	const {
		source,
		customName,
		customBio,
		customImageId,
		customImageUrl,
		customLink,
		layout,
		align,
		gap,
		showAvatar,
		avatarSize,
		avatarRadius,
		avatarBorderWidth,
		avatarBorderColor,
		showName,
		nameTag,
		nameLinkTo,
		nameColor,
		nameHoverColor,
		showBio,
		bioColor,
		showLink,
		linkText,
		linkTo,
		buttonStyle,
		buttonColor,
		buttonBgColor,
		buttonBorderColor,
		buttonHoverColor,
		buttonHoverBgColor,
		buttonRadius,
		bgColor,
		borderColor,
		borderWidth,
		borderRadius,
		padding,
	} = attributes;
	const set = ( key ) => ( val ) => setAttributes( { [ key ]: val } );
	const custom = source === 'custom';

	const linkOptions = [
		{ label: __( 'Author Posts', 'blockive-premium-addon-for-block-pro' ), value: 'archive' },
		{ label: __( 'Author Website', 'blockive-premium-addon-for-block-pro' ), value: 'website' },
	];

	return (
		<>
			<InspectorTabs
				general={
					<>
						<PanelBody title={ __( 'Author', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							<SelectControl
								label={ __( 'Source', 'blockive-premium-addon-for-block-pro' ) }
								value={ source }
								options={ [
									{ label: __( 'Post Author', 'blockive-premium-addon-for-block-pro' ), value: 'current' },
									{ label: __( 'Custom', 'blockive-premium-addon-for-block-pro' ), value: 'custom' },
								] }
								onChange={ set( 'source' ) }
								help={ custom ? undefined : __( 'Name, photo (Gravatar), bio, and website come from the author\'s user profile.', 'blockive-premium-addon-for-block-pro' ) }
							/>
							{ custom && (
								<>
									<ImageControl label={ __( 'Photo', 'blockive-premium-addon-for-block-pro' ) } id={ customImageId } url={ customImageUrl } onChange={ ( media ) => setAttributes( { customImageId: media.id, customImageUrl: media.url } ) } />
									<TextControl label={ __( 'Name', 'blockive-premium-addon-for-block-pro' ) } value={ customName } onChange={ set( 'customName' ) } />
									<TextareaControl label={ __( 'Bio', 'blockive-premium-addon-for-block-pro' ) } value={ customBio } onChange={ set( 'customBio' ) } />
									<TextControl label={ __( 'Link', 'blockive-premium-addon-for-block-pro' ) } type="url" value={ customLink } onChange={ set( 'customLink' ) } />
								</>
							) }
						</PanelBody>
						<PanelBody title={ __( 'Content', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<ToggleControl label={ __( 'Show Photo', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showAvatar } onChange={ set( 'showAvatar' ) } />
							<ToggleControl label={ __( 'Show Name', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showName } onChange={ set( 'showName' ) } />
							{ showName && (
								<>
									<SelectControl
										label={ __( 'Name HTML Tag', 'blockive-premium-addon-for-block-pro' ) }
										value={ nameTag }
										options={ [ 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div', 'span' ].map( ( t ) => ( { label: t.toUpperCase(), value: t } ) ) }
										onChange={ set( 'nameTag' ) }
									/>
									{ ! custom && (
										<SelectControl
											label={ __( 'Name Links To', 'blockive-premium-addon-for-block-pro' ) }
											value={ nameLinkTo }
											options={ [ ...linkOptions, { label: __( 'Nothing', 'blockive-premium-addon-for-block-pro' ), value: 'none' } ] }
											onChange={ set( 'nameLinkTo' ) }
										/>
									) }
								</>
							) }
							<ToggleControl label={ __( 'Show Bio', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showBio } onChange={ set( 'showBio' ) } />
							<ToggleControl label={ __( 'Show Button', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showLink } onChange={ set( 'showLink' ) } />
							{ showLink && (
								<>
									<TextControl label={ __( 'Button Text', 'blockive-premium-addon-for-block-pro' ) } value={ linkText } onChange={ set( 'linkText' ) } />
									{ ! custom && <SelectControl label={ __( 'Button Links To', 'blockive-premium-addon-for-block-pro' ) } value={ linkTo } options={ linkOptions } onChange={ set( 'linkTo' ) } /> }
								</>
							) }
						</PanelBody>
						<PanelBody title={ __( 'Layout', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<SelectControl
								label={ __( 'Photo Position', 'blockive-premium-addon-for-block-pro' ) }
								value={ layout }
								options={ [
									{ label: __( 'Left', 'blockive-premium-addon-for-block-pro' ), value: 'left' },
									{ label: __( 'Top', 'blockive-premium-addon-for-block-pro' ), value: 'above' },
									{ label: __( 'Right', 'blockive-premium-addon-for-block-pro' ), value: 'right' },
								] }
								onChange={ set( 'layout' ) }
							/>
							{ layout === 'above' && (
								<SelectControl
									label={ __( 'Alignment', 'blockive-premium-addon-for-block-pro' ) }
									value={ align }
									options={ [
										{ label: __( 'Left', 'blockive-premium-addon-for-block-pro' ), value: 'left' },
										{ label: __( 'Center', 'blockive-premium-addon-for-block-pro' ), value: 'center' },
										{ label: __( 'Right', 'blockive-premium-addon-for-block-pro' ), value: 'right' },
									] }
									onChange={ set( 'align' ) }
								/>
							) }
							<RangeControl label={ __( 'Gap (px)', 'blockive-premium-addon-for-block-pro' ) } value={ gap } onChange={ set( 'gap' ) } min={ 0 } max={ 80 } />
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
							<RangeControl label={ __( 'Padding (px)', 'blockive-premium-addon-for-block-pro' ) } value={ padding } onChange={ set( 'padding' ) } min={ 0 } max={ 80 } />
						</PanelBody>
						<PanelBody title={ __( 'Photo', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<RangeControl label={ __( 'Size (px)', 'blockive-premium-addon-for-block-pro' ) } value={ avatarSize } onChange={ set( 'avatarSize' ) } min={ 24 } max={ 300 } />
							<RangeControl label={ __( 'Border Radius (%)', 'blockive-premium-addon-for-block-pro' ) } value={ avatarRadius } onChange={ set( 'avatarRadius' ) } min={ 0 } max={ 50 } />
							<RangeControl label={ __( 'Border Width (px)', 'blockive-premium-addon-for-block-pro' ) } value={ avatarBorderWidth } onChange={ set( 'avatarBorderWidth' ) } min={ 0 } max={ 10 } />
							<ColorStateControls normal={ [ { label: __( 'Border Color', 'blockive-premium-addon-for-block-pro' ), value: avatarBorderColor, onChange: set( 'avatarBorderColor' ) } ] } />
						</PanelBody>
						<PanelBody title={ __( 'Name', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<TypographyControls values={ typoValues( attributes, 'name' ) } onChange={ typoOnChange( setAttributes, 'name' ) } />
							<ColorStateControls
								normal={ [ { label: __( 'Color', 'blockive-premium-addon-for-block-pro' ), value: nameColor, onChange: set( 'nameColor' ) } ] }
								hover={ [ { label: __( 'Color', 'blockive-premium-addon-for-block-pro' ), value: nameHoverColor, onChange: set( 'nameHoverColor' ) } ] }
							/>
						</PanelBody>
						<PanelBody title={ __( 'Bio', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<TypographyControls values={ typoValues( attributes, 'bio' ) } onChange={ typoOnChange( setAttributes, 'bio' ) } />
							<ColorStateControls normal={ [ { label: __( 'Color', 'blockive-premium-addon-for-block-pro' ), value: bioColor, onChange: set( 'bioColor' ) } ] } />
						</PanelBody>
						<PanelBody title={ __( 'Button', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<SelectControl
								label={ __( 'Style', 'blockive-premium-addon-for-block-pro' ) }
								value={ buttonStyle }
								options={ [
									{ label: __( 'Outline', 'blockive-premium-addon-for-block-pro' ), value: 'outline' },
									{ label: __( 'Filled', 'blockive-premium-addon-for-block-pro' ), value: 'filled' },
									{ label: __( 'Text Link', 'blockive-premium-addon-for-block-pro' ), value: 'link' },
								] }
								onChange={ set( 'buttonStyle' ) }
							/>
							<ColorStateControls
								normal={ [
									{ label: __( 'Text', 'blockive-premium-addon-for-block-pro' ), value: buttonColor, onChange: set( 'buttonColor' ) },
									{ label: __( 'Background', 'blockive-premium-addon-for-block-pro' ), value: buttonBgColor, onChange: set( 'buttonBgColor' ) },
									{ label: __( 'Border', 'blockive-premium-addon-for-block-pro' ), value: buttonBorderColor, onChange: set( 'buttonBorderColor' ) },
								] }
								hover={ [
									{ label: __( 'Text', 'blockive-premium-addon-for-block-pro' ), value: buttonHoverColor, onChange: set( 'buttonHoverColor' ) },
									{ label: __( 'Background', 'blockive-premium-addon-for-block-pro' ), value: buttonHoverBgColor, onChange: set( 'buttonHoverBgColor' ) },
								] }
							/>
							<RangeControl label={ __( 'Border Radius (px)', 'blockive-premium-addon-for-block-pro' ) } value={ buttonRadius } onChange={ set( 'buttonRadius' ) } min={ 0 } max={ 40 } />
						</PanelBody>
					</>
				}
				advanced={ <AdvancedTab attributes={ attributes } setAttributes={ setAttributes } /> }
			/>

			<div { ...useBlockProps() }>
				<PostPreview
					name="blockive-premium-addon-for-block/tb-author-box"
					attributes={ attributes }
					emptyText={ custom ? __( 'Enter a name or bio in the block settings.', 'blockive-premium-addon-for-block-pro' ) : __( 'The previewed post has no author details to show.', 'blockive-premium-addon-for-block-pro' ) }
				/>
			</div>
		</>
	);
}
