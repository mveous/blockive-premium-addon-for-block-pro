import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	SelectControl,
	ToggleControl,
	RangeControl,
	TextControl,
	Button,
	Notice,
	Disabled,
} from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';

import ResponsiveControls from '../components/responsive-controls';
import ColorStateControls from '../components/color-state-controls';
import TypographyControls from '../components/typography-controls';
import useTemplateOptions from '../components/use-template-options';
import { typoValues, typoOnChange } from './shared';

/**
 * Inspector panels and preview shared by Archive Posts and Archive
 * Products (see includes/class-bpafb-pro-archive-loop.php for the PHP
 * side they mirror).
 */

export const RATIO_OPTIONS = [
	{ label: __( 'Original', 'blockive-premium-addon-for-block-pro' ), value: '' },
	{ label: '1:1', value: '1/1' },
	{ label: '4:3', value: '4/3' },
	{ label: '3:2', value: '3/2' },
	{ label: '16:10', value: '16/10' },
	{ label: '16:9', value: '16/9' },
	{ label: '3:4', value: '3/4' },
];

export const TITLE_TAG_OPTIONS = [ 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div' ].map( ( tag ) => ( {
	label: tag.toUpperCase(),
	value: tag,
} ) );

export function LayoutPanel( { attributes, setAttributes, layoutOptions, children } ) {
	const { layout, templateId } = attributes;
	const templateOptions = useTemplateOptions( 'loop-item' );
	const adminBase = window.location.href.split( '/wp-admin/' )[ 0 ] + '/wp-admin/';

	return (
		<PanelBody title={ __( 'Layout', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
			<p className="bpafb-help-text">
				{ __( 'Lists whatever the visitor is browsing: the category, tag, author, date, shop, or search results. Items per page come from the site settings.', 'blockive-premium-addon-for-block-pro' ) }
			</p>
			<SelectControl
				label={ __( 'Item Layout', 'blockive-premium-addon-for-block-pro' ) }
				value={ layout }
				options={ layoutOptions }
				onChange={ ( val ) => setAttributes( { layout: val } ) }
			/>
			{ layout === 'template' && (
				<>
					<SelectControl
						label={ __( 'Loop Item Template', 'blockive-premium-addon-for-block-pro' ) }
						value={ templateId }
						options={ templateOptions }
						onChange={ ( val ) => setAttributes( { templateId: Number( val ) } ) }
					/>
					{ templateOptions.length <= 1 && (
						<Notice status="info" isDismissible={ false }>
							{ __( 'Create a Blockive Template with the "Loop Item" kind to design each item.', 'blockive-premium-addon-for-block-pro' ) }
						</Notice>
					) }
					<Button variant="link" href={ `${ adminBase }post-new.php?post_type=blockive_template` } target="_blank">
						{ __( 'Create a Loop Item template', 'blockive-premium-addon-for-block-pro' ) }
					</Button>
				</>
			) }
			{ children }
		</PanelBody>
	);
}

export function GridPanel( { attributes, setAttributes, showEqualHeight } ) {
	const { columnGap, rowGap, equalHeight } = attributes;
	return (
		<PanelBody title={ __( 'Grid', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
			<ResponsiveControls>
				{ ( device ) => {
					const key = { desktop: 'columns', tablet: 'columnsTablet', mobile: 'columnsMobile' }[ device ] || 'columns';
					return (
						<RangeControl
							label={ __( 'Columns', 'blockive-premium-addon-for-block-pro' ) }
							value={ attributes[ key ] }
							onChange={ ( val ) => setAttributes( { [ key ]: val } ) }
							min={ 1 }
							max={ 8 }
						/>
					);
				} }
			</ResponsiveControls>
			<RangeControl label={ __( 'Column Gap (px)', 'blockive-premium-addon-for-block-pro' ) } value={ columnGap } onChange={ ( val ) => setAttributes( { columnGap: val } ) } min={ 0 } max={ 100 } />
			<RangeControl label={ __( 'Row Gap (px)', 'blockive-premium-addon-for-block-pro' ) } value={ rowGap } onChange={ ( val ) => setAttributes( { rowGap: val } ) } min={ 0 } max={ 100 } />
			{ showEqualHeight && (
				<ToggleControl
					label={ __( 'Equal Height Items', 'blockive-premium-addon-for-block-pro' ) }
					checked={ !! equalHeight }
					onChange={ ( val ) => setAttributes( { equalHeight: val } ) }
				/>
			) }
		</PanelBody>
	);
}

export function PaginationPanel( { attributes, setAttributes, emptyLabel } ) {
	const { paginationType, paginationAlign, prevText, nextText, nothingFoundText } = attributes;
	return (
		<PanelBody title={ __( 'Pagination & Empty State', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
			<SelectControl
				label={ __( 'Pagination', 'blockive-premium-addon-for-block-pro' ) }
				value={ paginationType }
				options={ [
					{ label: __( 'Numbers', 'blockive-premium-addon-for-block-pro' ), value: 'numbers' },
					{ label: __( 'Previous / Next', 'blockive-premium-addon-for-block-pro' ), value: 'prev_next' },
					{ label: __( 'None', 'blockive-premium-addon-for-block-pro' ), value: 'none' },
				] }
				onChange={ ( val ) => setAttributes( { paginationType: val } ) }
			/>
			{ paginationType !== 'none' && (
				<>
					<SelectControl
						label={ __( 'Alignment', 'blockive-premium-addon-for-block-pro' ) }
						value={ paginationAlign }
						options={ [
							{ label: __( 'Left', 'blockive-premium-addon-for-block-pro' ), value: 'left' },
							{ label: __( 'Center', 'blockive-premium-addon-for-block-pro' ), value: 'center' },
							{ label: __( 'Right', 'blockive-premium-addon-for-block-pro' ), value: 'right' },
						] }
						onChange={ ( val ) => setAttributes( { paginationAlign: val } ) }
					/>
					<TextControl label={ __( 'Previous Label', 'blockive-premium-addon-for-block-pro' ) } value={ prevText } onChange={ ( val ) => setAttributes( { prevText: val } ) } />
					<TextControl label={ __( 'Next Label', 'blockive-premium-addon-for-block-pro' ) } value={ nextText } onChange={ ( val ) => setAttributes( { nextText: val } ) } />
				</>
			) }
			<TextControl
				label={ emptyLabel }
				value={ nothingFoundText }
				onChange={ ( val ) => setAttributes( { nothingFoundText: val } ) }
			/>
		</PanelBody>
	);
}

export function CardStylePanel( { attributes, setAttributes } ) {
	const { cardBgColor, cardRadius, cardBorderWidth, cardBorderColor, cardShadow, cardPadding } = attributes;
	return (
		<PanelBody title={ __( 'Card', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
			<ColorStateControls
				normal={ [
					{ label: __( 'Background', 'blockive-premium-addon-for-block-pro' ), value: cardBgColor, onChange: ( val ) => setAttributes( { cardBgColor: val } ) },
					{ label: __( 'Border Color', 'blockive-premium-addon-for-block-pro' ), value: cardBorderColor, onChange: ( val ) => setAttributes( { cardBorderColor: val } ) },
				] }
			/>
			<RangeControl label={ __( 'Border Width (px)', 'blockive-premium-addon-for-block-pro' ) } value={ cardBorderWidth } onChange={ ( val ) => setAttributes( { cardBorderWidth: val } ) } min={ 0 } max={ 10 } />
			<RangeControl label={ __( 'Border Radius (px)', 'blockive-premium-addon-for-block-pro' ) } value={ cardRadius } onChange={ ( val ) => setAttributes( { cardRadius: val } ) } min={ 0 } max={ 40 } />
			<RangeControl label={ __( 'Content Padding (px)', 'blockive-premium-addon-for-block-pro' ) } value={ cardPadding } onChange={ ( val ) => setAttributes( { cardPadding: val } ) } min={ 0 } max={ 60 } />
			<ToggleControl label={ __( 'Shadow', 'blockive-premium-addon-for-block-pro' ) } checked={ !! cardShadow } onChange={ ( val ) => setAttributes( { cardShadow: val } ) } />
		</PanelBody>
	);
}

export function TitleStylePanel( { attributes, setAttributes } ) {
	const { titleColor, titleHoverColor } = attributes;
	return (
		<PanelBody title={ __( 'Title', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
			<TypographyControls values={ typoValues( attributes, 'title' ) } onChange={ typoOnChange( setAttributes, 'title' ) } />
			<ColorStateControls
				normal={ [ { label: __( 'Color', 'blockive-premium-addon-for-block-pro' ), value: titleColor, onChange: ( val ) => setAttributes( { titleColor: val } ) } ] }
				hover={ [ { label: __( 'Color', 'blockive-premium-addon-for-block-pro' ), value: titleHoverColor, onChange: ( val ) => setAttributes( { titleHoverColor: val } ) } ] }
			/>
		</PanelBody>
	);
}

export function PaginationStylePanel( { attributes, setAttributes } ) {
	const { paginationColor, paginationActiveColor, paginationActiveBg } = attributes;
	return (
		<PanelBody title={ __( 'Pagination', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
			<ColorStateControls
				normal={ [
					{ label: __( 'Link Color', 'blockive-premium-addon-for-block-pro' ), value: paginationColor, onChange: ( val ) => setAttributes( { paginationColor: val } ) },
					{ label: __( 'Current Page Text', 'blockive-premium-addon-for-block-pro' ), value: paginationActiveColor, onChange: ( val ) => setAttributes( { paginationActiveColor: val } ) },
					{ label: __( 'Current Page Background', 'blockive-premium-addon-for-block-pro' ), value: paginationActiveBg, onChange: ( val ) => setAttributes( { paginationActiveBg: val } ) },
				] }
			/>
		</PanelBody>
	);
}

/**
 * Live server-rendered preview. The editor has no archive to show, so the
 * render.php side swaps in the latest items of the post type instead.
 */
export function ArchivePreview( { name, attributes, blockProps, note } ) {
	return (
		<div { ...blockProps }>
			<p className="bpafb-tb-archive-editor-note">{ note }</p>
			<Disabled>
				<ServerSideRender block={ name } attributes={ attributes } />
			</Disabled>
		</div>
	);
}
