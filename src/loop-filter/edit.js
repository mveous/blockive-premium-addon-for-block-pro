import { __, sprintf } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { useBlockProps } from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';
import { PanelBody, SelectControl, TextControl, ToggleControl, FormTokenField, Notice, Disabled, Placeholder } from '@wordpress/components';

import InspectorTabs from '../components/inspector-tabs';
import AdvancedTab from '../components/advanced-tab';
import { FilterBarStylePanel } from '../pro-components/filter-bar/editor';

const TARGETS = {
	'blockive-premium-addon-for-block/loop-grid': __( 'Loop Grid', 'blockive-premium-addon-for-block-pro' ),
	'blockive-premium-addon-for-block/loop-carousel': __( 'Loop Carousel', 'blockive-premium-addon-for-block-pro' ),
	'blockive-premium-addon-for-block/portfolio': __( 'Portfolio', 'blockive-premium-addon-for-block-pro' ),
};

/**
 * Loop blocks in the editor that a filter can point at.
 *
 * @return {Array<{uid: string, postType: string, label: string}>}
 */
function useTargets() {
	return useSelect( ( select ) => {
		const found = [];
		const count = {};
		const walk = ( blocks ) =>
			blocks.forEach( ( block ) => {
				if ( TARGETS[ block.name ] ) {
					count[ block.name ] = ( count[ block.name ] || 0 ) + 1;
					found.push( {
						uid: block.attributes.bpafbUid || '',
						postType: block.attributes.postType || 'post',
						label: `${ TARGETS[ block.name ] } ${ count[ block.name ] } (${ block.attributes.postType || 'post' })`,
					} );
				}
				walk( block.innerBlocks || [] );
			} );
		walk( select( 'core/block-editor' ).getBlocks() );
		return found;
	}, [] );
}

export default function Edit( { attributes, setAttributes } ) {
	const { targetUid, taxonomy, termIds, showAll, allLabel, orderBy, hideEmpty, filterAlign } = attributes;
	const set = ( key ) => ( val ) => setAttributes( { [ key ]: val } );

	const targets = useTargets();
	const target = targets.find( ( t ) => t.uid && t.uid === targetUid );
	const postType = target ? target.postType : attributes.targetPostType || 'post';

	const taxonomyOptions = useSelect(
		( select ) => {
			const all = select( 'core' ).getTaxonomies( { per_page: -1 } ) || [];
			return all.filter( ( tax ) => tax.visibility?.publicly_queryable !== false && tax.types?.includes( postType ) ).map( ( tax ) => ( { label: tax.name, value: tax.slug } ) );
		},
		[ postType ]
	);
	const terms = useSelect( ( select ) => ( taxonomy ? select( 'core' ).getEntityRecords( 'taxonomy', taxonomy, { per_page: -1, context: 'view' } ) || [] : [] ), [ taxonomy ] );
	const nameOf = ( id ) => terms.find( ( t ) => t.id === id )?.name || `#${ id }`;

	const targetOptions = [
		{ label: __( 'Choose a block…', 'blockive-premium-addon-for-block-pro' ), value: '' },
		...targets.filter( ( t ) => t.uid ).map( ( t ) => ( { label: t.label, value: t.uid } ) ),
	];
	const unnamed = targets.some( ( t ) => ! t.uid );

	const settings = (
		<>
			<SelectControl
				label={ __( 'Filter This Block', 'blockive-premium-addon-for-block-pro' ) }
				value={ targetUid }
				options={ targetOptions }
				onChange={ ( value ) => {
					const chosen = targets.find( ( t ) => t.uid === value );
					setAttributes( { targetUid: value, targetPostType: chosen ? chosen.postType : 'post', termIds: [] } );
				} }
				help={ __( 'A Loop Grid, Loop Carousel, or Portfolio on this page or template.', 'blockive-premium-addon-for-block-pro' ) }
			/>
			{ unnamed && (
				<Notice status="info" isDismissible={ false }>
					{ __( 'A loop block that is not listed here needs to be selected once in the editor before it can be filtered.', 'blockive-premium-addon-for-block-pro' ) }
				</Notice>
			) }
			<SelectControl label={ __( 'Taxonomy', 'blockive-premium-addon-for-block-pro' ) } value={ taxonomy } options={ taxonomyOptions.length ? taxonomyOptions : [ { label: taxonomy, value: taxonomy } ] } onChange={ ( value ) => setAttributes( { taxonomy: value, termIds: [] } ) } />
		</>
	);

	return (
		<>
			<InspectorTabs
				general={
					<>
						<PanelBody title={ __( 'Loop Filter', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							{ settings }
							<FormTokenField
								label={ __( 'Only These Terms', 'blockive-premium-addon-for-block-pro' ) }
								value={ termIds.map( nameOf ) }
								suggestions={ terms.map( ( t ) => t.name ) }
								onChange={ ( tokens ) => setAttributes( { termIds: tokens.map( ( token ) => terms.find( ( t ) => t.name === token )?.id ).filter( Boolean ) } ) }
								__experimentalShowHowTo={ false }
							/>
							<p className="components-base-control__help">{ __( 'Leave empty to show every term.', 'blockive-premium-addon-for-block-pro' ) }</p>
							<SelectControl
								label={ __( 'Order', 'blockive-premium-addon-for-block-pro' ) }
								value={ orderBy }
								options={ [
									{ label: __( 'By Name', 'blockive-premium-addon-for-block-pro' ), value: 'name' },
									{ label: __( 'Most Used First', 'blockive-premium-addon-for-block-pro' ), value: 'count' },
								] }
								onChange={ set( 'orderBy' ) }
							/>
							<ToggleControl label={ __( 'Hide Empty Terms', 'blockive-premium-addon-for-block-pro' ) } checked={ !! hideEmpty } onChange={ set( 'hideEmpty' ) } />
							<ToggleControl label={ __( 'Show "All" Button', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showAll } onChange={ set( 'showAll' ) } />
							{ showAll && <TextControl label={ __( '"All" Label', 'blockive-premium-addon-for-block-pro' ) } value={ allLabel } onChange={ set( 'allLabel' ) } /> }
							<SelectControl
								label={ __( 'Alignment', 'blockive-premium-addon-for-block-pro' ) }
								value={ filterAlign }
								options={ [
									{ label: __( 'Left', 'blockive-premium-addon-for-block-pro' ), value: 'left' },
									{ label: __( 'Center', 'blockive-premium-addon-for-block-pro' ), value: 'center' },
									{ label: __( 'Right', 'blockive-premium-addon-for-block-pro' ), value: 'right' },
								] }
								onChange={ set( 'filterAlign' ) }
							/>
						</PanelBody>
					</>
				}
				style={ <FilterBarStylePanel attributes={ attributes } setAttributes={ setAttributes } /> }
				advanced={ <AdvancedTab attributes={ attributes } setAttributes={ setAttributes } /> }
			/>

			<div { ...useBlockProps() }>
				{ targetUid ? (
					<Disabled>
						<ServerSideRender block="blockive-premium-addon-for-block/loop-filter" attributes={ attributes } />
					</Disabled>
				) : (
					<Placeholder icon="filter" label={ __( 'Loop Filter', 'blockive-premium-addon-for-block-pro' ) } instructions={ targets.length ? __( 'Choose which block to filter.', 'blockive-premium-addon-for-block-pro' ) : sprintf( __( 'Add a %s to this page first, then choose it here.', 'blockive-premium-addon-for-block-pro' ), __( 'Loop Grid, Loop Carousel, or Portfolio', 'blockive-premium-addon-for-block-pro' ) ) }>
						<div style={ { width: '100%', maxWidth: 360 } }>{ settings }</div>
					</Placeholder>
				) }
			</div>
		</>
	);
}
