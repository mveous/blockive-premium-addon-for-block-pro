import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { useBlockProps } from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	ToggleControl,
	TextControl,
	RangeControl,
	Button,
	Disabled,
} from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';

import InspectorTabs from '../../components/inspector-tabs';
import AdvancedTab from '../../components/advanced-tab';
import ResponsiveControls from '../../components/responsive-controls';
import ColorStateControls from '../../components/color-state-controls';
import TypographyControls from '../../components/typography-controls';
import { typoValues, typoOnChange } from '../shared';

export default function Edit( { attributes, setAttributes, name } ) {
	const {
		items,
		orderBy,
		order,
		limit,
		hierarchical,
		hideEmpty,
		showTitles,
		titleTag,
		exclude,
		nofollow,
		columnGap,
		rowGap,
		titleColor,
		linkColor,
		linkHoverColor,
		bulletColor,
		listStyle,
	} = attributes;

	const set = ( key ) => ( val ) => setAttributes( { [ key ]: val } );

	const sourceOptions = useSelect( ( select ) => {
		const core = select( 'core' );
		const types = core.getPostTypes( { per_page: -1 } ) || [];
		const taxonomies = core.getTaxonomies( { per_page: -1 } ) || [];
		return [
			...types
				.filter( ( type ) => type.viewable && ! [ 'attachment', 'blockive_template' ].includes( type.slug ) )
				.map( ( type ) => ( { label: `${ type.name } (${ __( 'post type', 'blockive-premium-addon-for-block-pro' ) })`, value: `post_type:${ type.slug }` } ) ),
			...taxonomies
				.filter( ( tax ) => tax.visibility?.public !== false && tax.slug !== 'post_format' )
				.map( ( tax ) => ( { label: `${ tax.name } (${ __( 'taxonomy', 'blockive-premium-addon-for-block-pro' ) })`, value: `taxonomy:${ tax.slug }` } ) ),
		];
	}, [] );

	const updateItem = ( index, patch ) => {
		const next = items.map( ( item, i ) => ( i === index ? { ...item, ...patch } : item ) );
		setAttributes( { items: next } );
	};

	const blockProps = useBlockProps( { className: 'bpafb-tb-sitemap-editor' } );

	return (
		<>
			<InspectorTabs
				general={
					<>
						<PanelBody title={ __( 'Sections', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							{ items.map( ( item, index ) => (
								<div className="bpafb-tb-sitemap-editor__item" key={ index }>
									<SelectControl
										label={ __( 'Source', 'blockive-premium-addon-for-block-pro' ) }
										value={ `${ item.kind }:${ item.name }` }
										options={ sourceOptions }
										onChange={ ( val ) => {
											const [ kind, slug ] = val.split( ':' );
											updateItem( index, { kind, name: slug } );
										} }
									/>
									<TextControl
										label={ __( 'Heading', 'blockive-premium-addon-for-block-pro' ) }
										value={ item.title }
										onChange={ ( val ) => updateItem( index, { title: val } ) }
									/>
									<Button
										variant="link"
										isDestructive
										onClick={ () => setAttributes( { items: items.filter( ( _, i ) => i !== index ) } ) }
									>
										{ __( 'Remove Section', 'blockive-premium-addon-for-block-pro' ) }
									</Button>
								</div>
							) ) }
							<Button
								variant="secondary"
								onClick={ () => setAttributes( { items: [ ...items, { kind: 'post_type', name: 'post', title: __( 'Posts', 'blockive-premium-addon-for-block-pro' ) } ] } ) }
							>
								{ __( 'Add Section', 'blockive-premium-addon-for-block-pro' ) }
							</Button>
						</PanelBody>
						<PanelBody title={ __( 'Query', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<SelectControl
								label={ __( 'Order By', 'blockive-premium-addon-for-block-pro' ) }
								value={ orderBy }
								options={ [
									{ label: __( 'Menu Order', 'blockive-premium-addon-for-block-pro' ), value: 'menu_order' },
									{ label: __( 'Title', 'blockive-premium-addon-for-block-pro' ), value: 'title' },
									{ label: __( 'Date', 'blockive-premium-addon-for-block-pro' ), value: 'date' },
									{ label: __( 'Last Modified', 'blockive-premium-addon-for-block-pro' ), value: 'modified' },
								] }
								onChange={ set( 'orderBy' ) }
							/>
							<SelectControl
								label={ __( 'Order', 'blockive-premium-addon-for-block-pro' ) }
								value={ order }
								options={ [
									{ label: __( 'Ascending', 'blockive-premium-addon-for-block-pro' ), value: 'asc' },
									{ label: __( 'Descending', 'blockive-premium-addon-for-block-pro' ), value: 'desc' },
								] }
								onChange={ set( 'order' ) }
							/>
							<RangeControl
								label={ __( 'Max Items per Section (0 = all)', 'blockive-premium-addon-for-block-pro' ) }
								value={ limit }
								onChange={ set( 'limit' ) }
								min={ 0 }
								max={ 100 }
							/>
							<TextControl
								label={ __( 'Exclude IDs', 'blockive-premium-addon-for-block-pro' ) }
								help={ __( 'Comma-separated post or term IDs.', 'blockive-premium-addon-for-block-pro' ) }
								value={ exclude }
								onChange={ set( 'exclude' ) }
							/>
							<ToggleControl label={ __( 'Nested (Hierarchical)', 'blockive-premium-addon-for-block-pro' ) } checked={ !! hierarchical } onChange={ set( 'hierarchical' ) } />
							<ToggleControl label={ __( 'Hide Empty Terms', 'blockive-premium-addon-for-block-pro' ) } checked={ !! hideEmpty } onChange={ set( 'hideEmpty' ) } />
							<ToggleControl label={ __( 'Add rel="nofollow"', 'blockive-premium-addon-for-block-pro' ) } checked={ !! nofollow } onChange={ set( 'nofollow' ) } />
						</PanelBody>
						<PanelBody title={ __( 'Layout', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<ResponsiveControls>
								{ ( device ) => {
									const key = { desktop: 'columns', tablet: 'columnsTablet', mobile: 'columnsMobile' }[ device ] || 'columns';
									return (
										<RangeControl
											label={ __( 'Columns', 'blockive-premium-addon-for-block-pro' ) }
											value={ attributes[ key ] }
											onChange={ ( val ) => setAttributes( { [ key ]: val } ) }
											min={ 1 }
											max={ 6 }
										/>
									);
								} }
							</ResponsiveControls>
							<ToggleControl label={ __( 'Show Section Headings', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showTitles } onChange={ set( 'showTitles' ) } />
							{ showTitles && (
								<SelectControl
									label={ __( 'Heading Tag', 'blockive-premium-addon-for-block-pro' ) }
									value={ titleTag }
									options={ [ 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div' ].map( ( t ) => ( { label: t.toUpperCase(), value: t } ) ) }
									onChange={ set( 'titleTag' ) }
								/>
							) }
						</PanelBody>
					</>
				}
				style={
					<>
						<PanelBody title={ __( 'Layout', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							<RangeControl label={ __( 'Column Gap (px)', 'blockive-premium-addon-for-block-pro' ) } value={ columnGap } onChange={ set( 'columnGap' ) } min={ 0 } max={ 120 } />
							<RangeControl label={ __( 'Row Gap (px)', 'blockive-premium-addon-for-block-pro' ) } value={ rowGap } onChange={ set( 'rowGap' ) } min={ 0 } max={ 120 } />
						</PanelBody>
						<PanelBody title={ __( 'Headings', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<TypographyControls values={ typoValues( attributes, 'title' ) } onChange={ typoOnChange( setAttributes, 'title' ) } />
							<ColorStateControls normal={ [ { label: __( 'Color', 'blockive-premium-addon-for-block-pro' ), value: titleColor, onChange: set( 'titleColor' ) } ] } />
						</PanelBody>
						<PanelBody title={ __( 'Links', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<TypographyControls values={ typoValues( attributes, 'link' ) } onChange={ typoOnChange( setAttributes, 'link' ) } />
							<ColorStateControls
								normal={ [
									{ label: __( 'Link Color', 'blockive-premium-addon-for-block-pro' ), value: linkColor, onChange: set( 'linkColor' ) },
									{ label: __( 'Bullet Color', 'blockive-premium-addon-for-block-pro' ), value: bulletColor, onChange: set( 'bulletColor' ) },
								] }
								hover={ [ { label: __( 'Link Color', 'blockive-premium-addon-for-block-pro' ), value: linkHoverColor, onChange: set( 'linkHoverColor' ) } ] }
							/>
							<SelectControl
								label={ __( 'Bullet Style', 'blockive-premium-addon-for-block-pro' ) }
								value={ listStyle }
								options={ [
									{ label: __( 'Disc', 'blockive-premium-addon-for-block-pro' ), value: 'disc' },
									{ label: __( 'Circle', 'blockive-premium-addon-for-block-pro' ), value: 'circle' },
									{ label: __( 'Square', 'blockive-premium-addon-for-block-pro' ), value: 'square' },
									{ label: __( 'None', 'blockive-premium-addon-for-block-pro' ), value: 'none' },
								] }
								onChange={ set( 'listStyle' ) }
							/>
						</PanelBody>
					</>
				}
				advanced={ <AdvancedTab attributes={ attributes } setAttributes={ setAttributes } /> }
			/>

			<div { ...blockProps }>
				<Disabled>
					<ServerSideRender block={ name } attributes={ attributes } />
				</Disabled>
			</div>
		</>
	);
}
