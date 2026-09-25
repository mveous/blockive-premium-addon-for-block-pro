import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { PanelBody, SelectControl, ToggleControl, RangeControl, FormTokenField, Button, Notice } from '@wordpress/components';

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

export function LoopTemplatePanel( { attributes, setAttributes } ) {
	const { templateId } = attributes;
	const templateOptions = useTemplateOptions( TEMPLATE_KIND );

	// Derived from the current URL rather than a new localized value, since
	// the block editor always runs under /wp-admin/ (post.php, post-new.php,
	// or the site editor), on single sites and multisite alike.
	const adminBase = window.location.href.split( '/wp-admin/' )[ 0 ] + '/wp-admin/';
	const newTemplateUrl = `${ adminBase }post-new.php?post_type=blockive_template`;

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
			<Button variant="link" href={ newTemplateUrl } target="_blank" rel="noopener noreferrer">
				{ __( '+ Create a new Loop Item template', 'blockive-premium-addon-for-block-pro' ) }
			</Button>
		</PanelBody>
	);
}

export function LoopQueryPanel( { attributes, setAttributes, countLabel } ) {
	const { postType, taxonomy, termIds, postsPerPage, orderBy, order, excludeCurrentPost } = attributes;

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

	return (
		<PanelBody title={ __( 'Query', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
			<SelectControl
				label={ __( 'Post Type', 'blockive-premium-addon-for-block-pro' ) }
				value={ postType }
				options={ postTypeOptions }
				onChange={ ( value ) => setAttributes( { postType: value, taxonomy: '', termIds: [] } ) }
			/>
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
				help={ __( 'Leaves the post currently being viewed out of the list.', 'blockive-premium-addon-for-block-pro' ) }
				checked={ !! excludeCurrentPost }
				onChange={ ( value ) => setAttributes( { excludeCurrentPost: value } ) }
			/>
		</PanelBody>
	);
}
