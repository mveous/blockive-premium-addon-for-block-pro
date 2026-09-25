import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl, TextControl, RangeControl } from '@wordpress/components';

import InspectorTabs from '../../components/inspector-tabs';
import AdvancedTab from '../../components/advanced-tab';
import ColorStateControls from '../../components/color-state-controls';
import TypographyControls from '../../components/typography-controls';
import { typoValues, typoOnChange } from '../shared';
import PostPreview from '../post-preview';

export default function Edit( { attributes, setAttributes } ) {
	const {
		showTitle,
		titleTag,
		order,
		showAvatar,
		avatarSize,
		avatarRadius,
		showForm,
		formTitle,
		submitText,
		closedText,
		gap,
		nestedIndent,
		commentBgColor,
		commentBorderColor,
		commentBorderWidth,
		commentRadius,
		commentPadding,
		separator,
		titleColor,
		authorColor,
		metaColor,
		contentColor,
		linkColor,
		fieldBgColor,
		fieldBorderColor,
		fieldRadius,
		buttonColor,
		buttonBgColor,
		buttonHoverColor,
		buttonHoverBgColor,
		buttonRadius,
	} = attributes;
	const set = ( key ) => ( val ) => setAttributes( { [ key ]: val } );

	return (
		<>
			<InspectorTabs
				general={
					<>
						<PanelBody title={ __( 'Comments', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							<ToggleControl label={ __( 'Show Comment Count Title', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showTitle } onChange={ set( 'showTitle' ) } />
							<SelectControl
								label={ __( 'Title HTML Tag', 'blockive-premium-addon-for-block-pro' ) }
								value={ titleTag }
								options={ [ 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div' ].map( ( t ) => ( { label: t.toUpperCase(), value: t } ) ) }
								onChange={ set( 'titleTag' ) }
								help={ __( 'Also used for the reply form title.', 'blockive-premium-addon-for-block-pro' ) }
							/>
							<SelectControl
								label={ __( 'Order', 'blockive-premium-addon-for-block-pro' ) }
								value={ order }
								options={ [
									{ label: __( 'Site Default', 'blockive-premium-addon-for-block-pro' ), value: 'default' },
									{ label: __( 'Oldest First', 'blockive-premium-addon-for-block-pro' ), value: 'asc' },
									{ label: __( 'Newest First', 'blockive-premium-addon-for-block-pro' ), value: 'desc' },
								] }
								onChange={ set( 'order' ) }
							/>
							<ToggleControl label={ __( 'Show Avatars', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showAvatar } onChange={ set( 'showAvatar' ) } />
							<TextControl label={ __( 'Comments Closed Message', 'blockive-premium-addon-for-block-pro' ) } value={ closedText } onChange={ set( 'closedText' ) } help={ __( 'Leave empty to show nothing.', 'blockive-premium-addon-for-block-pro' ) } />
							<p className="components-base-control__help">{ __( 'Threading, depth, and who may comment follow Settings > Discussion.', 'blockive-premium-addon-for-block-pro' ) }</p>
						</PanelBody>
						<PanelBody title={ __( 'Reply Form', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<ToggleControl label={ __( 'Show Reply Form', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showForm } onChange={ set( 'showForm' ) } />
							{ showForm && (
								<>
									<TextControl label={ __( 'Form Title', 'blockive-premium-addon-for-block-pro' ) } value={ formTitle } onChange={ set( 'formTitle' ) } />
									<TextControl label={ __( 'Submit Button Text', 'blockive-premium-addon-for-block-pro' ) } value={ submitText } onChange={ set( 'submitText' ) } />
								</>
							) }
						</PanelBody>
					</>
				}
				style={
					<>
						<PanelBody title={ __( 'Comments', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							<RangeControl label={ __( 'Spacing (px)', 'blockive-premium-addon-for-block-pro' ) } value={ gap } onChange={ set( 'gap' ) } min={ 0 } max={ 80 } />
							<RangeControl label={ __( 'Reply Indent (px)', 'blockive-premium-addon-for-block-pro' ) } value={ nestedIndent } onChange={ set( 'nestedIndent' ) } min={ 0 } max={ 120 } />
							<ToggleControl label={ __( 'Separator Between Comments', 'blockive-premium-addon-for-block-pro' ) } checked={ !! separator } onChange={ set( 'separator' ) } />
							<ColorStateControls
								normal={ [
									{ label: __( 'Background', 'blockive-premium-addon-for-block-pro' ), value: commentBgColor, onChange: set( 'commentBgColor' ) },
									{ label: __( 'Border Color', 'blockive-premium-addon-for-block-pro' ), value: commentBorderColor, onChange: set( 'commentBorderColor' ) },
								] }
							/>
							<RangeControl label={ __( 'Border Width (px)', 'blockive-premium-addon-for-block-pro' ) } value={ commentBorderWidth } onChange={ set( 'commentBorderWidth' ) } min={ 0 } max={ 10 } />
							<RangeControl label={ __( 'Border Radius (px)', 'blockive-premium-addon-for-block-pro' ) } value={ commentRadius } onChange={ set( 'commentRadius' ) } min={ 0 } max={ 40 } />
							<RangeControl label={ __( 'Padding (px)', 'blockive-premium-addon-for-block-pro' ) } value={ commentPadding } onChange={ set( 'commentPadding' ) } min={ 0 } max={ 60 } />
						</PanelBody>
						<PanelBody title={ __( 'Avatar', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<RangeControl label={ __( 'Size (px)', 'blockive-premium-addon-for-block-pro' ) } value={ avatarSize } onChange={ set( 'avatarSize' ) } min={ 16 } max={ 150 } />
							<RangeControl label={ __( 'Border Radius (%)', 'blockive-premium-addon-for-block-pro' ) } value={ avatarRadius } onChange={ set( 'avatarRadius' ) } min={ 0 } max={ 50 } />
						</PanelBody>
						<PanelBody title={ __( 'Titles', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<TypographyControls values={ typoValues( attributes, 'title' ) } onChange={ typoOnChange( setAttributes, 'title' ) } />
							<ColorStateControls normal={ [ { label: __( 'Color', 'blockive-premium-addon-for-block-pro' ), value: titleColor, onChange: set( 'titleColor' ) } ] } />
						</PanelBody>
						<PanelBody title={ __( 'Text', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<TypographyControls values={ typoValues( attributes, 'content' ) } onChange={ typoOnChange( setAttributes, 'content' ) } />
							<ColorStateControls
								normal={ [
									{ label: __( 'Comment Text', 'blockive-premium-addon-for-block-pro' ), value: contentColor, onChange: set( 'contentColor' ) },
									{ label: __( 'Author Name', 'blockive-premium-addon-for-block-pro' ), value: authorColor, onChange: set( 'authorColor' ) },
									{ label: __( 'Date', 'blockive-premium-addon-for-block-pro' ), value: metaColor, onChange: set( 'metaColor' ) },
									{ label: __( 'Links', 'blockive-premium-addon-for-block-pro' ), value: linkColor, onChange: set( 'linkColor' ) },
								] }
							/>
						</PanelBody>
						<PanelBody title={ __( 'Form', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<ColorStateControls
								normal={ [
									{ label: __( 'Field Background', 'blockive-premium-addon-for-block-pro' ), value: fieldBgColor, onChange: set( 'fieldBgColor' ) },
									{ label: __( 'Field Border', 'blockive-premium-addon-for-block-pro' ), value: fieldBorderColor, onChange: set( 'fieldBorderColor' ) },
								] }
							/>
							<RangeControl label={ __( 'Field Border Radius (px)', 'blockive-premium-addon-for-block-pro' ) } value={ fieldRadius } onChange={ set( 'fieldRadius' ) } min={ 0 } max={ 30 } />
							<ColorStateControls
								normal={ [
									{ label: __( 'Button Text', 'blockive-premium-addon-for-block-pro' ), value: buttonColor, onChange: set( 'buttonColor' ) },
									{ label: __( 'Button Background', 'blockive-premium-addon-for-block-pro' ), value: buttonBgColor, onChange: set( 'buttonBgColor' ) },
								] }
								hover={ [
									{ label: __( 'Button Text', 'blockive-premium-addon-for-block-pro' ), value: buttonHoverColor, onChange: set( 'buttonHoverColor' ) },
									{ label: __( 'Button Background', 'blockive-premium-addon-for-block-pro' ), value: buttonHoverBgColor, onChange: set( 'buttonHoverBgColor' ) },
								] }
							/>
							<RangeControl label={ __( 'Button Border Radius (px)', 'blockive-premium-addon-for-block-pro' ) } value={ buttonRadius } onChange={ set( 'buttonRadius' ) } min={ 0 } max={ 30 } />
						</PanelBody>
					</>
				}
				advanced={ <AdvancedTab attributes={ attributes } setAttributes={ setAttributes } /> }
			/>

			<div { ...useBlockProps() }>
				<PostPreview
					name="blockive-premium-addon-for-block/tb-post-comments"
					attributes={ attributes }
					emptyText={ __( 'The previewed post has comments turned off and no comments, so nothing is shown.', 'blockive-premium-addon-for-block-pro' ) }
				/>
			</div>
		</>
	);
}
