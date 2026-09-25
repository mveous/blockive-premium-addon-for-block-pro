import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl, RangeControl, TextControl } from '@wordpress/components';

import InspectorTabs from '../../components/inspector-tabs';
import AdvancedTab from '../../components/advanced-tab';
import ColorStateControls from '../../components/color-state-controls';
import {
	LayoutPanel,
	GridPanel,
	PaginationPanel,
	CardStylePanel,
	TitleStylePanel,
	PaginationStylePanel,
	ArchivePreview,
	RATIO_OPTIONS,
	TITLE_TAG_OPTIONS,
} from '../archive-shared';

const IMAGE_SIZES = [ 'thumbnail', 'medium', 'medium_large', 'large', 'full' ].map( ( size ) => ( {
	label: size.replace( '_', ' ' ),
	value: size,
} ) );

export default function Edit( { attributes, setAttributes, name } ) {
	const {
		layout,
		showImage,
		imageSize,
		imageRatio,
		showTitle,
		titleTag,
		showDate,
		showAuthor,
		showComments,
		showCategories,
		showExcerpt,
		excerptLength,
		showReadMore,
		readMoreText,
		metaColor,
		excerptColor,
		readMoreColor,
		readMoreHoverColor,
	} = attributes;

	const set = ( key ) => ( val ) => setAttributes( { [ key ]: val } );
	const isCard = layout !== 'template';
	const blockProps = useBlockProps( { className: 'bpafb-tb-archive-editor' } );

	return (
		<>
			<InspectorTabs
				general={
					<>
						<LayoutPanel
							attributes={ attributes }
							setAttributes={ setAttributes }
							layoutOptions={ [
								{ label: __( 'Blockive Card', 'blockive-premium-addon-for-block-pro' ), value: 'card' },
								{ label: __( 'Loop Item Template', 'blockive-premium-addon-for-block-pro' ), value: 'template' },
							] }
						/>
						<GridPanel attributes={ attributes } setAttributes={ setAttributes } showEqualHeight />
						{ isCard && (
							<PanelBody title={ __( 'Card Content', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
								<ToggleControl label={ __( 'Featured Image', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showImage } onChange={ set( 'showImage' ) } />
								{ showImage && (
									<>
										<SelectControl label={ __( 'Image Size', 'blockive-premium-addon-for-block-pro' ) } value={ imageSize } options={ IMAGE_SIZES } onChange={ set( 'imageSize' ) } />
										<SelectControl label={ __( 'Image Ratio', 'blockive-premium-addon-for-block-pro' ) } value={ imageRatio } options={ RATIO_OPTIONS } onChange={ set( 'imageRatio' ) } />
									</>
								) }
								<ToggleControl label={ __( 'Categories', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showCategories } onChange={ set( 'showCategories' ) } />
								<ToggleControl label={ __( 'Title', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showTitle } onChange={ set( 'showTitle' ) } />
								{ showTitle && (
									<SelectControl label={ __( 'Title Tag', 'blockive-premium-addon-for-block-pro' ) } value={ titleTag } options={ TITLE_TAG_OPTIONS } onChange={ set( 'titleTag' ) } />
								) }
								<ToggleControl label={ __( 'Date', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showDate } onChange={ set( 'showDate' ) } />
								<ToggleControl label={ __( 'Author', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showAuthor } onChange={ set( 'showAuthor' ) } />
								<ToggleControl label={ __( 'Comment Count', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showComments } onChange={ set( 'showComments' ) } />
								<ToggleControl label={ __( 'Excerpt', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showExcerpt } onChange={ set( 'showExcerpt' ) } />
								{ showExcerpt && (
									<RangeControl label={ __( 'Excerpt Length (words)', 'blockive-premium-addon-for-block-pro' ) } value={ excerptLength } onChange={ set( 'excerptLength' ) } min={ 5 } max={ 100 } />
								) }
								<ToggleControl label={ __( 'Read More Link', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showReadMore } onChange={ set( 'showReadMore' ) } />
								{ showReadMore && (
									<TextControl label={ __( 'Read More Text', 'blockive-premium-addon-for-block-pro' ) } value={ readMoreText } onChange={ set( 'readMoreText' ) } />
								) }
							</PanelBody>
						) }
						<PaginationPanel attributes={ attributes } setAttributes={ setAttributes } emptyLabel={ __( 'Nothing Found Message', 'blockive-premium-addon-for-block-pro' ) } />
					</>
				}
				style={
					<>
						{ isCard && <CardStylePanel attributes={ attributes } setAttributes={ setAttributes } /> }
						{ isCard && <TitleStylePanel attributes={ attributes } setAttributes={ setAttributes } /> }
						{ isCard && (
							<PanelBody title={ __( 'Meta, Excerpt & Read More', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
								<ColorStateControls
									normal={ [
										{ label: __( 'Meta Color', 'blockive-premium-addon-for-block-pro' ), value: metaColor, onChange: set( 'metaColor' ) },
										{ label: __( 'Excerpt Color', 'blockive-premium-addon-for-block-pro' ), value: excerptColor, onChange: set( 'excerptColor' ) },
										{ label: __( 'Read More Color', 'blockive-premium-addon-for-block-pro' ), value: readMoreColor, onChange: set( 'readMoreColor' ) },
									] }
									hover={ [
										{ label: __( 'Read More Color', 'blockive-premium-addon-for-block-pro' ), value: readMoreHoverColor, onChange: set( 'readMoreHoverColor' ) },
									] }
								/>
							</PanelBody>
						) }
						<PaginationStylePanel attributes={ attributes } setAttributes={ setAttributes } />
					</>
				}
				advanced={ <AdvancedTab attributes={ attributes } setAttributes={ setAttributes } /> }
			/>

			<ArchivePreview
				name={ name }
				attributes={ attributes }
				blockProps={ blockProps }
				note={ __( 'Preview with your latest posts. On the site, this lists the archive or search results being viewed.', 'blockive-premium-addon-for-block-pro' ) }
			/>
		</>
	);
}
