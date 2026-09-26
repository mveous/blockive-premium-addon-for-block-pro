import { __, sprintf } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { PanelBody, SelectControl, RangeControl, TextControl, TextareaControl, ToggleControl, Notice } from '@wordpress/components';

import InspectorTabs from '../components/inspector-tabs';
import AdvancedTab from '../components/advanced-tab';
import ColorStateControls from '../components/color-state-controls';
import TypographyControls from '../components/typography-controls';
import { useItemList, ItemActions, ItemToolbar } from '../pro-components/item-list';
import { typoValues, typoOnChange, typoVars, cssVars } from '../template-blocks-site/shared';

import './editor.css';

const FIELD_TYPES = [
	{ label: __( 'Text', 'blockive-premium-addon-for-block-pro' ), value: 'text' },
	{ label: __( 'Email', 'blockive-premium-addon-for-block-pro' ), value: 'email' },
	{ label: __( 'Textarea', 'blockive-premium-addon-for-block-pro' ), value: 'textarea' },
	{ label: __( 'Phone', 'blockive-premium-addon-for-block-pro' ), value: 'tel' },
	{ label: __( 'URL', 'blockive-premium-addon-for-block-pro' ), value: 'url' },
	{ label: __( 'Number', 'blockive-premium-addon-for-block-pro' ), value: 'number' },
	{ label: __( 'Date', 'blockive-premium-addon-for-block-pro' ), value: 'date' },
	{ label: __( 'Dropdown', 'blockive-premium-addon-for-block-pro' ), value: 'select' },
	{ label: __( 'Radio Buttons', 'blockive-premium-addon-for-block-pro' ), value: 'radio' },
	{ label: __( 'Checkboxes', 'blockive-premium-addon-for-block-pro' ), value: 'checkbox' },
	{ label: __( 'Acceptance (single checkbox)', 'blockive-premium-addon-for-block-pro' ), value: 'acceptance' },
	{ label: __( 'Hidden', 'blockive-premium-addon-for-block-pro' ), value: 'hidden' },
];
const WITH_OPTIONS = [ 'select', 'radio', 'checkbox' ];

const slugify = ( text ) =>
	String( text || '' )
		.toLowerCase()
		.normalize( 'NFKD' )
		.replace( /[̀-ͯ]/g, '' )
		.replace( /[^a-z0-9]+/g, '-' )
		.replace( /^-+|-+$/g, '' )
		.slice( 0, 40 ) || 'field';

const uniqueId = ( base, fields, skip ) => {
	const taken = new Set( fields.filter( ( _, i ) => i !== skip ).map( ( f ) => f.id ) );
	let id = base;
	let n = 2;
	while ( taken.has( id ) ) {
		id = `${ base }-${ n++ }`;
	}
	return id;
};

const newFormId = () => Math.random().toString( 36 ).slice( 2, 12 );

/**
 * Form ids of the Form blocks that come before this one in the editor. A
 * duplicated block starts with a copy of the original's id; only the later
 * copy takes a new one, so the original keeps the id its saved settings and
 * submissions use.
 *
 * @param {string} clientId This block's client id.
 * @return {string} Comma-separated ids.
 */
function useEarlierFormIds( clientId ) {
	return useSelect(
		( select ) => {
			const ids = [];
			let done = false;
			const walk = ( blocks ) =>
				blocks.forEach( ( block ) => {
					if ( done ) {
						return;
					}
					if ( block.clientId === clientId ) {
						done = true;
						return;
					}
					if ( block.name === 'blockive-premium-addon-for-block/form' ) {
						ids.push( block.attributes.formId );
					}
					walk( block.innerBlocks || [] );
				} );
			walk( select( 'core/block-editor' ).getBlocks() );
			return ids.join( ',' );
		},
		[ clientId ]
	);
}

export default function Edit( { attributes, setAttributes, clientId } ) {
	const {
		formId,
		formName,
		fields,
		submitText,
		buttonAlign,
		showLabels,
		requiredMark,
		actionSave,
		actionEmail,
		emailTo,
		emailSubject,
		emailMessage,
		actionRedirect,
		redirectUrl,
		actionWebhook,
		webhookUrl,
		successMessage,
		errorMessage,
		requiredMessage,
		columnGap,
		rowGap,
		labelColor,
		fieldColor,
		fieldBgColor,
		fieldBorderColor,
		fieldFocusColor,
		fieldRadius,
		buttonColor,
		buttonBgColor,
		buttonHoverColor,
		buttonHoverBgColor,
		buttonRadius,
	} = attributes;

	const earlier = useEarlierFormIds( clientId );
	useEffect( () => {
		if ( ! formId || earlier.split( ',' ).includes( formId ) ) {
			setAttributes( { formId: newFormId() } );
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ formId, earlier ] );

	const list = useItemList( fields, 'fields', setAttributes, { id: '', type: 'text', label: '', required: false } );
	const { item } = list;
	const set = ( key ) => ( val ) => setAttributes( { [ key ]: val } );

	const addField = () => list.add( [ { id: uniqueId( 'field', fields ), type: 'text', label: __( 'New field', 'blockive-premium-addon-for-block-pro' ), required: false, width: '100' } ] );
	const updateLabel = ( label ) => {
		// The id follows the label until it is edited by hand.
		const follows = ! item.id || item.id === uniqueId( slugify( item.label ), fields, list.index );
		list.update( follows ? { label, id: uniqueId( slugify( label ), fields, list.index ) } : { label } );
	};
	const duplicateIds = fields.map( ( f ) => f.id ).filter( ( id, i, all ) => id && all.indexOf( id ) !== i );

	const blockProps = useBlockProps( {
		className: 'bpafb-form',
		style: cssVars( {
			'--bpafb-form-column-gap': columnGap,
			'--bpafb-form-row-gap': rowGap,
			'--bpafb-form-label-color': labelColor,
			'--bpafb-form-field-color': fieldColor,
			'--bpafb-form-field-bg': fieldBgColor,
			'--bpafb-form-field-border': fieldBorderColor,
			'--bpafb-form-field-focus': fieldFocusColor,
			'--bpafb-form-field-radius': fieldRadius,
			'--bpafb-form-btn-color': buttonColor,
			'--bpafb-form-btn-bg': buttonBgColor,
			'--bpafb-form-btn-hover-color': buttonHoverColor,
			'--bpafb-form-btn-hover-bg': buttonHoverBgColor,
			'--bpafb-form-btn-radius': buttonRadius,
			...typoVars( attributes, 'label', '--bpafb-form-label' ),
			...typoVars( attributes, 'field', '--bpafb-form-field' ),
		} ),
	} );

	const options = ( f ) => String( f.options || '' ).split( '\n' ).map( ( o ) => o.trim() ).filter( Boolean );
	const labelEl = ( f, Tag = 'label' ) => (
		<Tag className={ `bpafb-form__label${ showLabels ? '' : ' bpafb-form-editor__hidden-label' }` }>
			{ f.label || f.id }
			{ f.required && requiredMark && <span className="bpafb-form__required">*</span> }
		</Tag>
	);

	const preview = ( f ) => {
		switch ( f.type ) {
			case 'textarea':
				return (
					<>
						{ labelEl( f ) }
						<textarea className="bpafb-form__input" rows={ f.rows || 5 } placeholder={ f.placeholder } defaultValue={ f.default } readOnly tabIndex={ -1 } />
					</>
				);
			case 'select':
				return (
					<>
						{ labelEl( f ) }
						<select className="bpafb-form__input" tabIndex={ -1 } value="" onChange={ () => {} }>
							<option value="">{ f.placeholder || __( 'Choose…', 'blockive-premium-addon-for-block-pro' ) }</option>
						</select>
					</>
				);
			case 'radio':
			case 'checkbox':
				return (
					<fieldset className="bpafb-form__group">
						{ labelEl( f, 'legend' ) }
						<div className="bpafb-form__choices">
							{ ( options( f ).length ? options( f ) : [ __( 'Add options in the settings', 'blockive-premium-addon-for-block-pro' ) ] ).map( ( o ) => (
								<label className="bpafb-form__choice" key={ o }>
									<input type={ f.type } tabIndex={ -1 } readOnly checked={ o === f.default } onChange={ () => {} } /> <span>{ o }</span>
								</label>
							) ) }
						</div>
					</fieldset>
				);
			case 'acceptance':
				return (
					<label className="bpafb-form__choice bpafb-form__acceptance">
						<input type="checkbox" tabIndex={ -1 } readOnly checked={ f.default === '1' } onChange={ () => {} } />{ ' ' }
						<span>
							{ f.label }
							{ f.required && requiredMark && <span className="bpafb-form__required">*</span> }
						</span>
					</label>
				);
			case 'hidden':
				return <p className="bpafb-form-editor__hidden">{ sprintf( __( 'Hidden field: %s', 'blockive-premium-addon-for-block-pro' ), f.id ) }</p>;
			default:
				return (
					<>
						{ labelEl( f ) }
						<input className="bpafb-form__input" type={ f.type } placeholder={ f.placeholder } defaultValue={ f.default } readOnly tabIndex={ -1 } />
					</>
				);
		}
	};

	/* translators: 1: field number, 2: total fields. */
	const itemLabel = sprintf( __( 'Field %1$d of %2$d', 'blockive-premium-addon-for-block-pro' ), list.index + 1, fields.length );
	const addLabel = __( 'Add Field', 'blockive-premium-addon-for-block-pro' );

	return (
		<>
			<ItemToolbar list={ list } count={ fields.length } onAdd={ addField } addLabel={ addLabel } />
			<InspectorTabs
				general={
					<>
						<PanelBody title={ itemLabel } initialOpen={ true }>
							<ItemActions list={ list } count={ fields.length } addLabel={ addLabel } onAdd={ addField } />
							<SelectControl label={ __( 'Type', 'blockive-premium-addon-for-block-pro' ) } value={ item.type } options={ FIELD_TYPES } onChange={ ( val ) => list.update( { type: val } ) } />
							<TextControl label={ item.type === 'acceptance' ? __( 'Text', 'blockive-premium-addon-for-block-pro' ) : __( 'Label', 'blockive-premium-addon-for-block-pro' ) } value={ item.label } onChange={ updateLabel } />
							<TextControl
								label={ __( 'Field ID', 'blockive-premium-addon-for-block-pro' ) }
								value={ item.id }
								onChange={ ( val ) => list.update( { id: val.toLowerCase().replace( /[^a-z0-9_-]/g, '' ) } ) }
								help={ __( 'Used in the email as [field-id] and in webhook data. Letters, numbers, - and _.', 'blockive-premium-addon-for-block-pro' ) }
							/>
							{ duplicateIds.includes( item.id ) && (
								<Notice status="warning" isDismissible={ false }>
									{ __( 'Another field already uses this ID; only the first one is kept.', 'blockive-premium-addon-for-block-pro' ) }
								</Notice>
							) }
							{ ! [ 'hidden', 'acceptance', 'radio', 'checkbox', 'date' ].includes( item.type ) && (
								<TextControl label={ __( 'Placeholder', 'blockive-premium-addon-for-block-pro' ) } value={ item.placeholder } onChange={ ( val ) => list.update( { placeholder: val } ) } />
							) }
							{ WITH_OPTIONS.includes( item.type ) && (
								<TextareaControl label={ __( 'Options', 'blockive-premium-addon-for-block-pro' ) } value={ item.options } onChange={ ( val ) => list.update( { options: val } ) } help={ __( 'One per line.', 'blockive-premium-addon-for-block-pro' ) } />
							) }
							{ item.type === 'acceptance' ? (
								<ToggleControl label={ __( 'Checked by Default', 'blockive-premium-addon-for-block-pro' ) } checked={ item.default === '1' } onChange={ ( val ) => list.update( { default: val ? '1' : '' } ) } />
							) : (
								<TextControl
									label={ item.type === 'hidden' ? __( 'Value', 'blockive-premium-addon-for-block-pro' ) : __( 'Default Value', 'blockive-premium-addon-for-block-pro' ) }
									value={ item.default }
									onChange={ ( val ) => list.update( { default: val } ) }
								/>
							) }
							{ item.type !== 'hidden' && (
								<>
									<ToggleControl label={ __( 'Required', 'blockive-premium-addon-for-block-pro' ) } checked={ !! item.required } onChange={ ( val ) => list.update( { required: val } ) } />
									<TextControl label={ __( 'Help Text', 'blockive-premium-addon-for-block-pro' ) } value={ item.help } onChange={ ( val ) => list.update( { help: val } ) } />
									<SelectControl
										label={ __( 'Width', 'blockive-premium-addon-for-block-pro' ) }
										value={ item.width || '100' }
										options={ [ '100', '75', '66', '50', '33', '25' ].map( ( w ) => ( { label: `${ w === '66' ? '66.6' : w === '33' ? '33.3' : w }%`, value: w } ) ) }
										onChange={ ( val ) => list.update( { width: val } ) }
										help={ __( 'Fields are full width on phones.', 'blockive-premium-addon-for-block-pro' ) }
									/>
								</>
							) }
							{ item.type === 'textarea' && <RangeControl label={ __( 'Rows', 'blockive-premium-addon-for-block-pro' ) } value={ item.rows || 5 } onChange={ ( val ) => list.update( { rows: val } ) } min={ 2 } max={ 20 } /> }
						</PanelBody>
						<PanelBody title={ __( 'Form', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<TextControl label={ __( 'Form Name', 'blockive-premium-addon-for-block-pro' ) } value={ formName } onChange={ set( 'formName' ) } help={ __( 'Shown in Form Submissions and the email subject.', 'blockive-premium-addon-for-block-pro' ) } />
							<TextControl label={ __( 'Submit Button Text', 'blockive-premium-addon-for-block-pro' ) } value={ submitText } onChange={ set( 'submitText' ) } />
							<SelectControl
								label={ __( 'Button Alignment', 'blockive-premium-addon-for-block-pro' ) }
								value={ buttonAlign }
								options={ [
									{ label: __( 'Left', 'blockive-premium-addon-for-block-pro' ), value: 'left' },
									{ label: __( 'Center', 'blockive-premium-addon-for-block-pro' ), value: 'center' },
									{ label: __( 'Right', 'blockive-premium-addon-for-block-pro' ), value: 'right' },
									{ label: __( 'Full Width', 'blockive-premium-addon-for-block-pro' ), value: 'full' },
								] }
								onChange={ set( 'buttonAlign' ) }
							/>
							<ToggleControl label={ __( 'Show Labels', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showLabels } onChange={ set( 'showLabels' ) } help={ showLabels ? undefined : __( 'Labels stay available to screen readers.', 'blockive-premium-addon-for-block-pro' ) } />
							<ToggleControl label={ __( 'Mark Required Fields with *', 'blockive-premium-addon-for-block-pro' ) } checked={ !! requiredMark } onChange={ set( 'requiredMark' ) } />
						</PanelBody>
						<PanelBody title={ __( 'After Submit', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<ToggleControl label={ __( 'Save to Form Submissions', 'blockive-premium-addon-for-block-pro' ) } checked={ !! actionSave } onChange={ set( 'actionSave' ) } help={ __( 'Listed under Blockive Templates > Form Submissions.', 'blockive-premium-addon-for-block-pro' ) } />
							<ToggleControl label={ __( 'Send an Email', 'blockive-premium-addon-for-block-pro' ) } checked={ !! actionEmail } onChange={ set( 'actionEmail' ) } />
							{ actionEmail && (
								<>
									<TextControl label={ __( 'Send To', 'blockive-premium-addon-for-block-pro' ) } value={ emailTo } onChange={ set( 'emailTo' ) } placeholder={ __( 'Site admin email', 'blockive-premium-addon-for-block-pro' ) } help={ __( 'Separate several addresses with commas. Replies go to the first Email field.', 'blockive-premium-addon-for-block-pro' ) } />
									<TextControl label={ __( 'Subject', 'blockive-premium-addon-for-block-pro' ) } value={ emailSubject } onChange={ set( 'emailSubject' ) } placeholder={ __( 'New submission: [form name]', 'blockive-premium-addon-for-block-pro' ) } />
									<TextareaControl label={ __( 'Message', 'blockive-premium-addon-for-block-pro' ) } value={ emailMessage } onChange={ set( 'emailMessage' ) } help={ __( 'Use [all-fields], or a field as [field-id].', 'blockive-premium-addon-for-block-pro' ) } />
								</>
							) }
							<ToggleControl label={ __( 'Redirect', 'blockive-premium-addon-for-block-pro' ) } checked={ !! actionRedirect } onChange={ set( 'actionRedirect' ) } />
							{ actionRedirect && <TextControl label={ __( 'Redirect To', 'blockive-premium-addon-for-block-pro' ) } type="url" value={ redirectUrl } onChange={ set( 'redirectUrl' ) } /> }
							<ToggleControl label={ __( 'Send to a Webhook', 'blockive-premium-addon-for-block-pro' ) } checked={ !! actionWebhook } onChange={ set( 'actionWebhook' ) } help={ __( 'POSTs the fields as JSON, e.g. to Zapier or Make.', 'blockive-premium-addon-for-block-pro' ) } />
							{ actionWebhook && <TextControl label={ __( 'Webhook URL', 'blockive-premium-addon-for-block-pro' ) } type="url" value={ webhookUrl } onChange={ set( 'webhookUrl' ) } /> }
							{ ! actionSave && ! actionEmail && ! actionWebhook && (
								<Notice status="warning" isDismissible={ false }>
									{ __( 'Submissions are not saved or sent anywhere.', 'blockive-premium-addon-for-block-pro' ) }
								</Notice>
							) }
							<p className="components-base-control__help">{ __( 'Spam protection is built in: a hidden trap field, a minimum time to fill the form, and a limit per visitor.', 'blockive-premium-addon-for-block-pro' ) }</p>
						</PanelBody>
						<PanelBody title={ __( 'Messages', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<TextControl label={ __( 'Success', 'blockive-premium-addon-for-block-pro' ) } value={ successMessage } onChange={ set( 'successMessage' ) } />
							<TextControl label={ __( 'Error', 'blockive-premium-addon-for-block-pro' ) } value={ errorMessage } onChange={ set( 'errorMessage' ) } />
							<TextControl label={ __( 'Required Field', 'blockive-premium-addon-for-block-pro' ) } value={ requiredMessage } onChange={ set( 'requiredMessage' ) } />
						</PanelBody>
					</>
				}
				style={
					<>
						<PanelBody title={ __( 'Layout', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							<RangeControl label={ __( 'Column Gap (px)', 'blockive-premium-addon-for-block-pro' ) } value={ columnGap } onChange={ set( 'columnGap' ) } min={ 0 } max={ 60 } />
							<RangeControl label={ __( 'Row Gap (px)', 'blockive-premium-addon-for-block-pro' ) } value={ rowGap } onChange={ set( 'rowGap' ) } min={ 0 } max={ 60 } />
						</PanelBody>
						<PanelBody title={ __( 'Labels', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<TypographyControls values={ typoValues( attributes, 'label' ) } onChange={ typoOnChange( setAttributes, 'label' ) } />
							<ColorStateControls normal={ [ { label: __( 'Color', 'blockive-premium-addon-for-block-pro' ), value: labelColor, onChange: set( 'labelColor' ) } ] } />
						</PanelBody>
						<PanelBody title={ __( 'Fields', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<TypographyControls values={ typoValues( attributes, 'field' ) } onChange={ typoOnChange( setAttributes, 'field' ) } />
							<ColorStateControls
								normal={ [
									{ label: __( 'Text', 'blockive-premium-addon-for-block-pro' ), value: fieldColor, onChange: set( 'fieldColor' ) },
									{ label: __( 'Background', 'blockive-premium-addon-for-block-pro' ), value: fieldBgColor, onChange: set( 'fieldBgColor' ) },
									{ label: __( 'Border', 'blockive-premium-addon-for-block-pro' ), value: fieldBorderColor, onChange: set( 'fieldBorderColor' ) },
									{ label: __( 'Focus', 'blockive-premium-addon-for-block-pro' ), value: fieldFocusColor, onChange: set( 'fieldFocusColor' ) },
								] }
							/>
							<RangeControl label={ __( 'Border Radius (px)', 'blockive-premium-addon-for-block-pro' ) } value={ fieldRadius } onChange={ set( 'fieldRadius' ) } min={ 0 } max={ 30 } />
						</PanelBody>
						<PanelBody title={ __( 'Button', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<ColorStateControls
								normal={ [
									{ label: __( 'Text', 'blockive-premium-addon-for-block-pro' ), value: buttonColor, onChange: set( 'buttonColor' ) },
									{ label: __( 'Background', 'blockive-premium-addon-for-block-pro' ), value: buttonBgColor, onChange: set( 'buttonBgColor' ) },
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

			<div { ...blockProps }>
				<div className="bpafb-form__fields">
					{ fields.map( ( f, i ) => (
						// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
						<div
							key={ i }
							className={ `bpafb-form__field bpafb-form__field--${ f.type } bpafb-form__field--w${ f.width || '100' }${ i === list.index ? ' is-editing' : '' }` }
							onClick={ () => list.select( i ) }
						>
							{ preview( f ) }
							{ f.help && f.type !== 'hidden' && <p className="bpafb-form__help">{ f.help }</p> }
						</div>
					) ) }
				</div>
				<div className={ `bpafb-form__actions bpafb-form__actions--${ buttonAlign }` }>
					<RichText tagName="span" className="bpafb-form__submit" value={ submitText } onChange={ set( 'submitText' ) } placeholder={ __( 'Send', 'blockive-premium-addon-for-block-pro' ) } allowedFormats={ [] } />
				</div>
			</div>
		</>
	);
}
