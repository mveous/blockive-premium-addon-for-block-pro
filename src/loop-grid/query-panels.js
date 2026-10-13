import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { PanelBody, SelectControl, ToggleControl, RangeControl, FormTokenField, Button, Notice, BaseControl } from '@wordpress/components';

import useTemplateOptions from '../components/use-template-options';

/**
 * Template and Query panels shared by Loop Grid and Loop Carousel. The PHP
 * side of the query is Bpafb_Pro_Loop_Builder::block_query_args().
 */

const TEMPLATE_KIND = 'loop-item';

const ORDERBY_OPTIONS = [
	{ label: __( 'Date', 'blockive-premium-addon-for-block-pro' ), value: 'date' },
	{ label: __( 'Title', 'blockive-premium-addon-for-block-pro' ), value: 'title' },
	{ label: __( 'Menu Order', 'blockive-premium-addon-for-block-pro' ), value: 'menu_order' },
	{ label: __( 'Random', 'blockive-premium-addon-for-block-pro' ), value: 'rand' },
	{ label: __( 'ID', 'blockive-premium-addon-for-block-pro' ), value: 'id' },
];

const DATE_QUERY_TYPE_OPTIONS = [
	{ label: __( 'Any date', 'blockive-premium-addon-for-block-pro' ), value: 'any' },
	{ label: __( 'Before', 'blockive-premium-addon-for-block-pro' ), value: 'before' },
	{ label: __( 'After', 'blockive-premium-addon-for-block-pro' ), value: 'after' },
	{ label: __( 'Between', 'blockive-premium-addon-for-block-pro' ), value: 'between' },
];

export function LoopTemplatePanel( { attributes, setAttributes } ) {
	const { templateId } = attributes;
	const templateOptions = useTemplateOptions( TEMPLATE_KIND );

	// Derived from the current URL rather than a new localized value, since
	// the block editor always runs under /wp-admin/ (post.php, post-new.php,
	// or the site editor), on single sites and multisite alike.
	const adminBase = window.location.href.split( '/wp-admin/' )[ 0 ] + '/wp-admin/';
	const newTemplateUrl = `${ adminBase }post-new.php?post_type=blockive_template&bpafb_kind=${ TEMPLATE_KIND }`;
	const editTemplateUrl = `${ adminBase }post.php?post=${ templateId }&action=edit`;

	return (
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
			{ !! templateId && (
				<Button variant="link" href={ editTemplateUrl } target="_blank" rel="noopener noreferrer">
					{ __( 'Edit Loop Item Template ↗', 'blockive-premium-addon-for-block-pro' ) }
				</Button>
			) }
			<Button variant="link" href={ newTemplateUrl } target="_blank" rel="noopener noreferrer">
				{ __( '+ Create a new Loop Item template', 'blockive-premium-addon-for-block-pro' ) }
			</Button>
		</PanelBody>
	);
}

/**
 * One taxonomy + terms row. Used for the block's primary `taxonomy`/
 * `termIds` attributes and for each row in `additionalTaxQueries`, so a
 * Loop Grid/Carousel can filter by more than one taxonomy at once.
 */
function TaxonomyRow( { taxonomy, termIds, taxonomyOptions, onChange, onRemove } ) {
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
		onChange( { taxonomy, termIds: nextIds } );
	};

	return (
		<div className="bpafb-pro-loop-taxonomy-row">
			<SelectControl
				label={ __( 'Filter by Taxonomy', 'blockive-premium-addon-for-block-pro' ) }
				value={ taxonomy }
				options={ taxonomyOptions }
				onChange={ ( value ) => onChange( { taxonomy: value, termIds: [] } ) }
			/>
			{ taxonomy && (
				<FormTokenField
					label={ __( 'Terms', 'blockive-premium-addon-for-block-pro' ) }
					value={ selectedTermTokens }
					suggestions={ termRecords.map( ( term ) => term.name ) }
					onChange={ handleTermsChange }
				/>
			) }
			{ onRemove && (
				<Button variant="link" isDestructive onClick={ onRemove }>
					{ __( 'Remove this filter', 'blockive-premium-addon-for-block-pro' ) }
				</Button>
			) }
		</div>
	);
}

/**
 * Lets the author pick specific posts by title instead of a query, for the
 * cases a rule-based query can't express (a hand-picked "featured" set).
 */
function ManualPostPicker( { postType, manualPostIds, setAttributes } ) {
	const [ search, setSearch ] = useState( '' );

	const searchResults = useSelect(
		( select ) => {
			if ( ! search ) {
				return [];
			}
			return select( 'core' ).getEntityRecords( 'postType', postType, {
				search,
				per_page: 20,
				_fields: [ 'id', 'title' ],
			} ) || [];
		},
		[ postType, search ]
	);

	const selectedRecords = useSelect(
		( select ) => {
			if ( ! manualPostIds.length ) {
				return [];
			}
			return select( 'core' ).getEntityRecords( 'postType', postType, {
				include: manualPostIds,
				per_page: manualPostIds.length,
				_fields: [ 'id', 'title' ],
			} ) || [];
		},
		[ postType, manualPostIds ]
	);

	const titleFor = ( record ) => record?.title?.rendered || `#${ record.id }`;

	const knownTitles = {};
	selectedRecords.forEach( ( record ) => {
		knownTitles[ record.id ] = titleFor( record );
	} );
	searchResults.forEach( ( record ) => {
		knownTitles[ record.id ] = titleFor( record );
	} );

	const selectedTokens = manualPostIds.map( ( id ) => knownTitles[ id ] || `#${ id }` );
	const suggestionTitles = searchResults.map( ( record ) => titleFor( record ) );

	const handleChange = ( tokens ) => {
		const nextIds = tokens
			.map( ( token ) => {
				if ( typeof token === 'number' ) {
					return token;
				}
				const existingId = Object.keys( knownTitles ).find( ( id ) => knownTitles[ id ] === token );
				return existingId ? Number( existingId ) : null;
			} )
			.filter( ( id ) => id !== null );
		setAttributes( { manualPostIds: nextIds } );
	};

	return (
		<BaseControl>
			<FormTokenField
				label={ __( 'Posts', 'blockive-premium-addon-for-block-pro' ) }
				value={ selectedTokens }
				suggestions={ suggestionTitles }
				onInputChange={ setSearch }
				onChange={ handleChange }
				__experimentalExpandOnFocus
			/>
		</BaseControl>
	);
}

export function LoopQueryPanel( { attributes, setAttributes, countLabel } ) {
	const {
		postType,
		taxonomy,
		termIds,
		postsPerPage,
		orderBy,
		order,
		excludeCurrentPost,
		authorIds = [],
		dateQueryType = 'any',
		dateFrom = '',
		dateTo = '',
		selectionMode = 'query',
		manualPostIds = [],
		additionalTaxQueries = [],
		taxRelation = 'AND',
	} = attributes;

	const postTypeOptions = useSelect( ( select ) => {
		const types = select( 'core' ).getPostTypes( { per_page: -1 } );
		return ( types || [] )
			.filter( ( type ) => type.viewable )
			.map( ( type ) => ( { label: type.name, value: type.slug } ) );
	}, [] );

	const taxonomyOptions = useSelect(
		( select ) => {
			const taxonomies = select( 'core' ).getTaxonomies( { per_page: -1 } );
			const matching = ( taxonomies || [] ).filter( ( tax ) => tax.types?.includes( postType ) );
			return [
				{ label: __( 'None', 'blockive-premium-addon-for-block-pro' ), value: '' },
				...matching.map( ( tax ) => ( { label: tax.name, value: tax.slug } ) ),
			];
		},
		[ postType ]
	);

	const authorRecords = useSelect(
		( select ) => select( 'core' ).getUsers( { per_page: -1, who: 'authors' } ) || [],
		[]
	);
	const authorById = {};
	authorRecords.forEach( ( author ) => {
		authorById[ author.id ] = author.name;
	} );
	const selectedAuthorTokens = authorIds.map( ( id ) => authorById[ id ] || `#${ id }` );
	const handleAuthorsChange = ( tokens ) => {
		const nextIds = tokens
			.map( ( token ) => {
				if ( typeof token === 'number' ) {
					return token;
				}
				const match = authorRecords.find( ( author ) => author.name === token );
				return match ? match.id : null;
			} )
			.filter( ( id ) => id !== null );
		setAttributes( { authorIds: nextIds } );
	};

	const activeTaxonomyFilterCount =
		( taxonomy && termIds.length ? 1 : 0 ) +
		additionalTaxQueries.filter( ( row ) => row.taxonomy && row.termIds.length ).length;

	const addTaxonomyRow = () => {
		setAttributes( { additionalTaxQueries: [ ...additionalTaxQueries, { taxonomy: '', termIds: [] } ] } );
	};

	const updateTaxonomyRow = ( index, nextRow ) => {
		const next = additionalTaxQueries.slice();
		next[ index ] = { ...next[ index ], ...nextRow };
		setAttributes( { additionalTaxQueries: next } );
	};

	const removeTaxonomyRow = ( index ) => {
		setAttributes( { additionalTaxQueries: additionalTaxQueries.filter( ( _, i ) => i !== index ) } );
	};

	return (
		<>
			<PanelBody title={ __( 'Query', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
				<SelectControl
					label={ __( 'Post Type', 'blockive-premium-addon-for-block-pro' ) }
					value={ postType }
					options={ postTypeOptions }
					onChange={ ( value ) =>
						setAttributes( { postType: value, taxonomy: '', termIds: [], additionalTaxQueries: [] } )
					}
				/>
				<SelectControl
					label={ __( 'Selection', 'blockive-premium-addon-for-block-pro' ) }
					value={ selectionMode }
					options={ [
						{ label: __( 'Query (rules below)', 'blockive-premium-addon-for-block-pro' ), value: 'query' },
						{ label: __( 'Manual selection', 'blockive-premium-addon-for-block-pro' ), value: 'manual' },
					] }
					onChange={ ( value ) => setAttributes( { selectionMode: value } ) }
				/>

				{ selectionMode === 'manual' ? (
					<ManualPostPicker postType={ postType } manualPostIds={ manualPostIds } setAttributes={ setAttributes } />
				) : (
					<>
						<RangeControl
							label={ countLabel || __( 'Items Per Page', 'blockive-premium-addon-for-block-pro' ) }
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
						<ToggleControl
							label={ __( 'Exclude Current Post', 'blockive-premium-addon-for-block-pro' ) }
							help={ __( 'Leaves the post currently being viewed out of the list.', 'blockive-premium-addon-for-block-pro' ) }
							checked={ !! excludeCurrentPost }
							onChange={ ( value ) => setAttributes( { excludeCurrentPost: value } ) }
						/>
					</>
				) }
			</PanelBody>

			{ selectionMode === 'query' && (
				<PanelBody title={ `${ __( 'Filter', 'blockive-premium-addon-for-block-pro' ) }${ activeTaxonomyFilterCount ? ` • ${ activeTaxonomyFilterCount }` : '' }` } initialOpen={ false }>
					<FormTokenField
						label={ __( 'Authors', 'blockive-premium-addon-for-block-pro' ) }
						value={ selectedAuthorTokens }
						suggestions={ authorRecords.map( ( author ) => author.name ) }
						onChange={ handleAuthorsChange }
					/>

					<TaxonomyRow
						taxonomy={ taxonomy }
						termIds={ termIds }
						taxonomyOptions={ taxonomyOptions }
						onChange={ ( next ) => setAttributes( next ) }
					/>
					{ additionalTaxQueries.map( ( row, index ) => (
						<TaxonomyRow
							key={ index }
							taxonomy={ row.taxonomy }
							termIds={ row.termIds }
							taxonomyOptions={ taxonomyOptions }
							onChange={ ( next ) => updateTaxonomyRow( index, next ) }
							onRemove={ () => removeTaxonomyRow( index ) }
						/>
					) ) }
					<Button variant="link" onClick={ addTaxonomyRow }>
						{ __( '+ Add another taxonomy filter', 'blockive-premium-addon-for-block-pro' ) }
					</Button>
					{ activeTaxonomyFilterCount > 1 && (
						<SelectControl
							label={ __( 'Match', 'blockive-premium-addon-for-block-pro' ) }
							value={ taxRelation }
							options={ [
								{ label: __( 'All taxonomy filters (AND)', 'blockive-premium-addon-for-block-pro' ), value: 'AND' },
								{ label: __( 'Any taxonomy filter (OR)', 'blockive-premium-addon-for-block-pro' ), value: 'OR' },
							] }
							onChange={ ( value ) => setAttributes( { taxRelation: value } ) }
						/>
					) }

					<SelectControl
						label={ __( 'Date', 'blockive-premium-addon-for-block-pro' ) }
						value={ dateQueryType }
						options={ DATE_QUERY_TYPE_OPTIONS }
						onChange={ ( value ) => setAttributes( { dateQueryType: value } ) }
					/>
					{ ( dateQueryType === 'before' || dateQueryType === 'between' ) && (
						<BaseControl label={ dateQueryType === 'between' ? __( 'From', 'blockive-premium-addon-for-block-pro' ) : __( 'Before', 'blockive-premium-addon-for-block-pro' ) }>
							<input
								type="date"
								className="components-text-control__input"
								value={ dateQueryType === 'between' ? dateFrom : dateTo }
								onChange={ ( event ) =>
									setAttributes(
										dateQueryType === 'between'
											? { dateFrom: event.target.value }
											: { dateTo: event.target.value }
									)
								}
							/>
						</BaseControl>
					) }
					{ ( dateQueryType === 'after' || dateQueryType === 'between' ) && (
						<BaseControl label={ dateQueryType === 'between' ? __( 'To', 'blockive-premium-addon-for-block-pro' ) : __( 'After', 'blockive-premium-addon-for-block-pro' ) }>
							<input
								type="date"
								className="components-text-control__input"
								value={ dateQueryType === 'between' ? dateTo : dateFrom }
								onChange={ ( event ) =>
									setAttributes(
										dateQueryType === 'between'
											? { dateTo: event.target.value }
											: { dateFrom: event.target.value }
									)
								}
							/>
						</BaseControl>
					) }
				</PanelBody>
			) }
		</>
	);
}
