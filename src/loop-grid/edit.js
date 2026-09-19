import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import ServerSideRender from '@wordpress/server-side-render';
import {
	PanelBody,
	SelectControl,
	ToggleControl,
	RangeControl,
	FormTokenField,
	TextControl,
	Button,
	Notice,
} from '@wordpress/components';

import InspectorTabs from '../components/inspector-tabs';
import AdvancedTab from '../components/advanced-tab';
import ResponsiveControls from '../components/responsive-controls';
import useTemplateOptions from '../components/use-template-options';

const TEMPLATE_KIND = 'loop-item';

const ORDERBY_OPTIONS = [
	{ label: __( 'Date', 'blockive-premium-addon-for-block-pro' ), value: 'date' },
	{ label: __( 'Title', 'blockive-premium-addon-for-block-pro' ), value: 'title' },
	{ label: __( 'Menu Order', 'blockive-premium-addon-for-block-pro' ), value: 'menu_order' },
	{ label: __( 'Random', 'blockive-premium-addon-for-block-pro' ), value: 'rand' },
	{ label: __( 'ID', 'blockive-premium-addon-for-block-pro' ), value: 'id' },
];

const COLUMN_ATTR_SUFFIX = {
	desktop: '',
	tablet: 'Tablet',
	mobile: 'Mobile',
};

export default function Edit( { attributes, setAttributes } ) {
	const {
		templateId,
		postType,
		taxonomy,
		termIds,
		postsPerPage,
		orderBy,
		order,
		excludeCurrentPost,
		columns,
		columnsTablet,
		columnsMobile,
		columnGap,
		rowGap,
		masonry,
		equalHeight,
		enableNothingFound,
		nothingFoundText,
		paginationType,
		paginationAlign,
	} = attributes;

	const templateOptions = useTemplateOptions( TEMPLATE_KIND );

	// Derived from the current URL rather than a new localized value, since
	// the block editor always runs under /wp-admin/ (post.php, post-new.php,
	// or the site editor), on single sites and multisite alike.
	const adminBase = window.location.href.split( '/wp-admin/' )[ 0 ] + '/wp-admin/';
	const newTemplateUrl = `${ adminBase }post-new.php?post_type=blockive_template`;

	const postTypeOptions = useSelect( ( select ) => {
		const types = select( 'core' ).getPostTypes( { per_page: -1 } );
		return ( types || [] )
			.filter( ( type ) => type.viewable )
			.map( ( type ) => ( { label: type.name, value: type.slug } ) );
	}, [] );

	const taxonomyOptions = useSelect( ( select ) => {
		const taxonomies = select( 'core' ).getTaxonomies( { per_page: -1 } );
		const matching = ( taxonomies || [] ).filter( ( tax ) => tax.types?.includes( postType ) );
		return [
			{ label: __( 'None', 'blockive-premium-addon-for-block-pro' ), value: '' },
			...matching.map( ( tax ) => ( { label: tax.name, value: tax.slug } ) ),
		];
	}, [ postType ] );

	const termRecords = useSelect(
		( select ) => {
			if ( ! taxonomy ) {
				return [];
			}
			return select( 'core' ).getEntityRecords( 'taxonomy', taxonomy, { per_page: -1, context: 'view' } ) || [];
		},
		[ taxonomy ]
	);

	const termById = {};
	termRecords.forEach( ( term ) => {
		termById[ term.id ] = term.name;
	} );

	const selectedTermTokens = termIds.map( ( id ) => termById[ id ] || `#${ id }` );

	const handleTermsChange = ( tokens ) => {
		const nextIds = tokens
			.map( ( token ) => {
				if ( typeof token === 'number' ) {
					return token;
				}
				const match = termRecords.find( ( term ) => term.name === token );
				return match ? match.id : null;
			} )
			.filter( ( id ) => id !== null );
		setAttributes( { termIds: nextIds } );
	};

	const blockProps = useBlockProps();

	return (
		<>
			<InspectorTabs
				general={
					<>
						<PanelBody title={ __( 'Template', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							{ ! templateId && (
								<Notice status="warning" isDismissible={ false }>
									{ __( 'Choose a Loop Item template to show items.', 'blockive-premium-addon-for-block-pro' ) }
								</Notice>
							) }
							<SelectControl
								label={ __( 'Loop Item Template', 'blockive-premium-addon-for-block-pro' ) }
								value={ templateId || 0 }
								options={ templateOptions }
								onChange={ ( value ) => setAttributes( { templateId: Number( value ) } ) }
							/>
							<Button variant="link" href={ newTemplateUrl } target="_blank" rel="noopener noreferrer">
								{ __( '+ Create a new Loop Item template', 'blockive-premium-addon-for-block-pro' ) }
							</Button>
						</PanelBody>

						<PanelBody title={ __( 'Query', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							<SelectControl
								label={ __( 'Post Type', 'blockive-premium-addon-for-block-pro' ) }
								value={ postType }
								options={ postTypeOptions }
								onChange={ ( value ) => setAttributes( { postType: value, taxonomy: '', termIds: [] } ) }
							/>
							<RangeControl
								label={ __( 'Items Per Page', 'blockive-premium-addon-for-block-pro' ) }
								value={ postsPerPage }
								onChange={ ( value ) => setAttributes( { postsPerPage: value } ) }
								min={ 1 }
								max={ 50 }
							/>
							<SelectControl
								label={ __( 'Order By', 'blockive-premium-addon-for-block-pro' ) }
								value={ orderBy }
								options={ ORDERBY_OPTIONS }
								onChange={ ( value ) => setAttributes( { orderBy: value } ) }
							/>
							<SelectControl
								label={ __( 'Order', 'blockive-premium-addon-for-block-pro' ) }
								value={ order }
								options={ [
									{ label: __( 'Descending', 'blockive-premium-addon-for-block-pro' ), value: 'desc' },
									{ label: __( 'Ascending', 'blockive-premium-addon-for-block-pro' ), value: 'asc' },
								] }
								onChange={ ( value ) => setAttributes( { order: value } ) }
							/>
							<SelectControl
								label={ __( 'Filter by Taxonomy', 'blockive-premium-addon-for-block-pro' ) }
								value={ taxonomy }
								options={ taxonomyOptions }
								onChange={ ( value ) => setAttributes( { taxonomy: value, termIds: [] } ) }
							/>
							{ taxonomy && (
								<FormTokenField
									label={ __( 'Terms', 'blockive-premium-addon-for-block-pro' ) }
									value={ selectedTermTokens }
									suggestions={ termRecords.map( ( term ) => term.name ) }
									onChange={ handleTermsChange }
								/>
							) }
							<ToggleControl
								label={ __( 'Exclude Current Post', 'blockive-premium-addon-for-block-pro' ) }
								help={ __( 'Leaves the post currently being viewed out of the grid.', 'blockive-premium-addon-for-block-pro' ) }
								checked={ !! excludeCurrentPost }
								onChange={ ( value ) => setAttributes( { excludeCurrentPost: value } ) }
							/>
						</PanelBody>

						<PanelBody title={ __( 'Pagination', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<SelectControl
								label={ __( 'Type', 'blockive-premium-addon-for-block-pro' ) }
								value={ paginationType }
								options={ [
									{ label: __( 'None', 'blockive-premium-addon-for-block-pro' ), value: 'none' },
									{ label: __( 'Numbers', 'blockive-premium-addon-for-block-pro' ), value: 'numbers' },
									{ label: __( 'Previous / Next', 'blockive-premium-addon-for-block-pro' ), value: 'prev_next' },
								] }
								onChange={ ( value ) => setAttributes( { paginationType: value } ) }
							/>
							{ paginationType !== 'none' && (
								<SelectControl
									label={ __( 'Alignment', 'blockive-premium-addon-for-block-pro' ) }
									value={ paginationAlign }
									options={ [
										{ label: __( 'Start', 'blockive-premium-addon-for-block-pro' ), value: 'start' },
										{ label: __( 'Center', 'blockive-premium-addon-for-block-pro' ), value: 'center' },
										{ label: __( 'End', 'blockive-premium-addon-for-block-pro' ), value: 'end' },
									] }
									onChange={ ( value ) => setAttributes( { paginationAlign: value } ) }
								/>
							) }
						</PanelBody>
					</>
				}
				style={
					<>
						<PanelBody title={ __( 'Layout', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							<ResponsiveControls>
								{ ( device ) => {
									const suffix = COLUMN_ATTR_SUFFIX[ device ];
									const attrName = `columns${ suffix }`;
									const value = { columns, columnsTablet, columnsMobile }[ attrName ] ?? columns;
									return (
										<RangeControl
											label={ __( 'Columns', 'blockive-premium-addon-for-block-pro' ) }
											value={ value }
											onChange={ ( val ) => setAttributes( { [ attrName ]: val } ) }
											min={ 1 }
											max={ 6 }
										/>
									);
								} }
							</ResponsiveControls>
							<RangeControl
								label={ __( 'Column Gap', 'blockive-premium-addon-for-block-pro' ) }
								value={ columnGap }
								onChange={ ( value ) => setAttributes( { columnGap: value } ) }
								min={ 0 }
								max={ 100 }
							/>
							<RangeControl
								label={ __( 'Row Gap', 'blockive-premium-addon-for-block-pro' ) }
								value={ rowGap }
								onChange={ ( value ) => setAttributes( { rowGap: value } ) }
								min={ 0 }
								max={ 100 }
							/>
							<ToggleControl
								label={ __( 'Masonry', 'blockive-premium-addon-for-block-pro' ) }
								help={ __( 'Stacks items in even columns instead of even rows.', 'blockive-premium-addon-for-block-pro' ) }
								checked={ !! masonry }
								onChange={ ( value ) => setAttributes( { masonry: value } ) }
							/>
							{ ! masonry && (
								<ToggleControl
									label={ __( 'Equal Height', 'blockive-premium-addon-for-block-pro' ) }
									checked={ !! equalHeight }
									onChange={ ( value ) => setAttributes( { equalHeight: value } ) }
								/>
							) }
						</PanelBody>

						<PanelBody title={ __( 'Nothing Found', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<ToggleControl
								label={ __( 'Show Message', 'blockive-premium-addon-for-block-pro' ) }
								checked={ !! enableNothingFound }
								onChange={ ( value ) => setAttributes( { enableNothingFound: value } ) }
							/>
							{ enableNothingFound && (
								<TextControl
									label={ __( 'Message', 'blockive-premium-addon-for-block-pro' ) }
									value={ nothingFoundText }
									onChange={ ( value ) => setAttributes( { nothingFoundText: value } ) }
								/>
							) }
						</PanelBody>
					</>
				}
				advanced={ <AdvancedTab attributes={ attributes } setAttributes={ setAttributes } /> }
			/>

			<div { ...blockProps }>
				{ templateId ? (
					<ServerSideRender block="blockive-premium-addon-for-block/loop-grid" attributes={ attributes } />
				) : (
					<p className="bpafb-pro-loop-grid-placeholder">
						{ __( 'Choose a Loop Item template in the block settings to preview this grid.', 'blockive-premium-addon-for-block-pro' ) }
					</p>
				) }
			</div>
		</>
	);
}
