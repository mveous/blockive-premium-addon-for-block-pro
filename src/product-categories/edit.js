import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { useBlockProps } from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';
import { PanelBody, SelectControl, RangeControl, ToggleControl, Disabled } from '@wordpress/components';

import InspectorTabs from '../components/inspector-tabs';
import SegmentedControl from '../components/segmented-control';
import StepperControl from '../components/stepper-control';
import { TermTokens } from '../pro-components/woo/editor';

export default function Edit( { attributes, setAttributes } ) {
	const { columns, number, parent, categoryIds, hideEmpty, orderBy, order } = attributes;
	const set = ( key ) => ( value ) => setAttributes( { [ key ]: value } );
	const terms = useSelect( ( select ) => select( 'core' ).getEntityRecords( 'taxonomy', 'product_cat', { per_page: 100, context: 'view' } ) || [], [] );
	const picked = ( categoryIds || [] ).length > 0;

	return (
		<>
			<InspectorTabs
				general={
					<PanelBody title={ __( 'Categories', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
						<TermTokens label={ __( 'Only These Categories', 'blockive-premium-addon-for-block-pro' ) } taxonomy="product_cat" value={ categoryIds } onChange={ set( 'categoryIds' ) } />
						{ ! picked && (
							<>
								<SelectControl
									label={ __( 'Level', 'blockive-premium-addon-for-block-pro' ) }
									value={ parent }
									options={ [
										{ label: __( 'All categories', 'blockive-premium-addon-for-block-pro' ), value: '' },
										{ label: __( 'Top level only', 'blockive-premium-addon-for-block-pro' ), value: '0' },
										...terms.map( ( term ) => ( { label: `${ __( 'Inside', 'blockive-premium-addon-for-block-pro' ) }: ${ term.name }`, value: String( term.id ) } ) ),
									] }
									onChange={ set( 'parent' ) }
								/>
								<StepperControl label={ __( 'Number (0 = all)', 'blockive-premium-addon-for-block-pro' ) } value={ number } onChange={ set( 'number' ) } min={ 0 } max={ 48 } />
							</>
						) }
						<StepperControl label={ __( 'Columns', 'blockive-premium-addon-for-block-pro' ) } value={ columns } onChange={ set( 'columns' ) } min={ 1 } max={ 6 } />
						<SegmentedControl
							label={ __( 'Order By', 'blockive-premium-addon-for-block-pro' ) }
							value={ orderBy }
							options={ [
								{ label: __( 'Name', 'blockive-premium-addon-for-block-pro' ), value: 'name' },
								{ label: __( 'Product Count', 'blockive-premium-addon-for-block-pro' ), value: 'count' },
								{ label: __( 'Category Order', 'blockive-premium-addon-for-block-pro' ), value: 'menu_order' },
								...( picked ? [ { label: __( 'As Chosen Above', 'blockive-premium-addon-for-block-pro' ), value: 'include' } ] : [] ),
							] }
							onChange={ set( 'orderBy' ) }
						/>
						<SegmentedControl
							label={ __( 'Order', 'blockive-premium-addon-for-block-pro' ) }
							value={ order }
							options={ [
								{ label: __( 'Ascending', 'blockive-premium-addon-for-block-pro' ), value: 'ASC' },
								{ label: __( 'Descending', 'blockive-premium-addon-for-block-pro' ), value: 'DESC' },
							] }
							onChange={ set( 'order' ) }
						/>
						<ToggleControl label={ __( 'Hide Empty Categories', 'blockive-premium-addon-for-block-pro' ) } checked={ !! hideEmpty } onChange={ set( 'hideEmpty' ) } />
					</PanelBody>
				}
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>
			<div { ...useBlockProps() }>
				<Disabled>
					<ServerSideRender block="blockive-premium-addon-for-block/product-categories" attributes={ attributes } />
				</Disabled>
			</div>
		</>
	);
}
