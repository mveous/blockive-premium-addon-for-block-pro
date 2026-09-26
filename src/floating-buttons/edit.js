import { __, sprintf } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';
import { PanelBody, SelectControl, RangeControl, TextControl, TextareaControl, ToggleControl, Button, Disabled, Placeholder } from '@wordpress/components';

import InspectorTabs from '../components/inspector-tabs';
import AdvancedTab from '../components/advanced-tab';
import ColorStateControls from '../components/color-state-controls';

const TYPES = {
	whatsapp: { label: __( 'WhatsApp', 'blockive-premium-addon-for-block-pro' ), field: __( 'Phone Number (with country code)', 'blockive-premium-addon-for-block-pro' ), message: __( 'Prefilled Message', 'blockive-premium-addon-for-block-pro' ) },
	phone: { label: __( 'Phone Call', 'blockive-premium-addon-for-block-pro' ), field: __( 'Phone Number (with country code)', 'blockive-premium-addon-for-block-pro' ) },
	sms: { label: __( 'SMS', 'blockive-premium-addon-for-block-pro' ), field: __( 'Phone Number (with country code)', 'blockive-premium-addon-for-block-pro' ), message: __( 'Prefilled Message', 'blockive-premium-addon-for-block-pro' ) },
	email: { label: __( 'Email', 'blockive-premium-addon-for-block-pro' ), field: __( 'Email Address', 'blockive-premium-addon-for-block-pro' ), message: __( 'Subject', 'blockive-premium-addon-for-block-pro' ) },
	telegram: { label: __( 'Telegram', 'blockive-premium-addon-for-block-pro' ), field: __( 'Username', 'blockive-premium-addon-for-block-pro' ) },
	messenger: { label: __( 'Messenger', 'blockive-premium-addon-for-block-pro' ), field: __( 'Page Username', 'blockive-premium-addon-for-block-pro' ) },
	viber: { label: __( 'Viber', 'blockive-premium-addon-for-block-pro' ), field: __( 'Phone Number (with country code)', 'blockive-premium-addon-for-block-pro' ) },
	link: { label: __( 'Custom Link', 'blockive-premium-addon-for-block-pro' ), field: __( 'URL', 'blockive-premium-addon-for-block-pro' ) },
};

export default function Edit( { attributes, setAttributes } ) {
	const { channels, position, mainLabel, mainIcon, showMainLabel, showLabels, colorMode, channelColor, mainBgColor, mainColor, size, offsetX, offsetY } = attributes;
	const set = ( key ) => ( val ) => setAttributes( { [ key ]: val } );
	const list = Array.isArray( channels ) ? channels : [];

	const updateChannel = ( index, changes ) => setAttributes( { channels: list.map( ( channel, i ) => ( i === index ? { ...channel, ...changes } : channel ) ) } );
	const moveChannel = ( index, by ) => {
		const next = [ ...list ];
		const [ moved ] = next.splice( index, 1 );
		next.splice( index + by, 0, moved );
		setAttributes( { channels: next } );
	};
	const filled = list.some( ( channel ) => String( channel.value || '' ).trim() );
	const where = 'bottom-left' === position ? __( 'in the bottom-left corner', 'blockive-premium-addon-for-block-pro' ) : __( 'in the bottom-right corner', 'blockive-premium-addon-for-block-pro' );

	return (
		<>
			<InspectorTabs
				general={
					<>
						<PanelBody title={ __( 'Channels', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							{ list.map( ( channel, index ) => {
								const type = TYPES[ channel.type ] ? channel.type : 'link';
								return (
									<div key={ index } style={ { borderBottom: '1px solid #ddd', marginBottom: 16, paddingBottom: 8 } }>
										<SelectControl
											label={ sprintf( /* translators: %d: channel number. */ __( 'Channel %d', 'blockive-premium-addon-for-block-pro' ), index + 1 ) }
											value={ type }
											options={ Object.keys( TYPES ).map( ( value ) => ( { value, label: TYPES[ value ].label } ) ) }
											onChange={ ( value ) => updateChannel( index, { type: value } ) }
										/>
										<TextControl label={ TYPES[ type ].field } value={ channel.value || '' } onChange={ ( value ) => updateChannel( index, { value } ) } />
										{ TYPES[ type ].message && <TextareaControl label={ TYPES[ type ].message } value={ channel.message || '' } onChange={ ( message ) => updateChannel( index, { message } ) } rows={ 2 } /> }
										<TextControl label={ __( 'Label', 'blockive-premium-addon-for-block-pro' ) } value={ channel.label || '' } placeholder={ TYPES[ type ].label } onChange={ ( label ) => updateChannel( index, { label } ) } />
										<div style={ { display: 'flex', gap: 4 } }>
											<Button size="small" icon="arrow-up-alt2" label={ __( 'Move up', 'blockive-premium-addon-for-block-pro' ) } disabled={ 0 === index } onClick={ () => moveChannel( index, -1 ) } />
											<Button size="small" icon="arrow-down-alt2" label={ __( 'Move down', 'blockive-premium-addon-for-block-pro' ) } disabled={ index === list.length - 1 } onClick={ () => moveChannel( index, 1 ) } />
											<Button size="small" isDestructive variant="link" onClick={ () => setAttributes( { channels: list.filter( ( _, i ) => i !== index ) } ) }>
												{ __( 'Remove', 'blockive-premium-addon-for-block-pro' ) }
											</Button>
										</div>
									</div>
								);
							} ) }
							<Button variant="secondary" onClick={ () => setAttributes( { channels: [ ...list, { type: 'phone', value: '', label: '', message: '' } ] } ) }>
								{ __( 'Add Channel', 'blockive-premium-addon-for-block-pro' ) }
							</Button>
						</PanelBody>
						<PanelBody title={ __( 'Button', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<SelectControl
								label={ __( 'Position', 'blockive-premium-addon-for-block-pro' ) }
								value={ position }
								options={ [
									{ label: __( 'Bottom Right', 'blockive-premium-addon-for-block-pro' ), value: 'bottom-right' },
									{ label: __( 'Bottom Left', 'blockive-premium-addon-for-block-pro' ), value: 'bottom-left' },
								] }
								onChange={ set( 'position' ) }
							/>
							<TextControl
								label={ __( 'Button Label', 'blockive-premium-addon-for-block-pro' ) }
								value={ mainLabel }
								placeholder={ __( 'Contact us', 'blockive-premium-addon-for-block-pro' ) }
								onChange={ set( 'mainLabel' ) }
								help={ __( 'For more than one channel. With one, the channel\'s own label is used.', 'blockive-premium-addon-for-block-pro' ) }
							/>
							<ToggleControl label={ __( 'Show Button Label', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showMainLabel } onChange={ set( 'showMainLabel' ) } help={ __( 'Otherwise it is read out by screen readers only.', 'blockive-premium-addon-for-block-pro' ) } />
							<TextControl label={ __( 'Button Icon (Font Awesome class)', 'blockive-premium-addon-for-block-pro' ) } value={ mainIcon } placeholder="fa-solid fa-comment-dots" onChange={ set( 'mainIcon' ) } />
							<ToggleControl label={ __( 'Show Channel Labels', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showLabels } onChange={ set( 'showLabels' ) } />
						</PanelBody>
					</>
				}
				style={
					<PanelBody title={ __( 'Floating Buttons', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
						<RangeControl label={ __( 'Size (px)', 'blockive-premium-addon-for-block-pro' ) } value={ size } onChange={ set( 'size' ) } min={ 36 } max={ 90 } />
						<RangeControl label={ __( 'Side Offset (px)', 'blockive-premium-addon-for-block-pro' ) } value={ offsetX } onChange={ set( 'offsetX' ) } min={ 0 } max={ 200 } />
						<RangeControl label={ __( 'Bottom Offset (px)', 'blockive-premium-addon-for-block-pro' ) } value={ offsetY } onChange={ set( 'offsetY' ) } min={ 0 } max={ 200 } />
						<SelectControl
							label={ __( 'Channel Colors', 'blockive-premium-addon-for-block-pro' ) }
							value={ colorMode }
							options={ [
								{ label: __( 'Brand Colors', 'blockive-premium-addon-for-block-pro' ), value: 'brand' },
								{ label: __( 'Custom', 'blockive-premium-addon-for-block-pro' ), value: 'custom' },
							] }
							onChange={ set( 'colorMode' ) }
						/>
						<ColorStateControls
							normal={ [
								{ label: __( 'Button Background', 'blockive-premium-addon-for-block-pro' ), value: mainBgColor, onChange: set( 'mainBgColor' ) },
								{ label: __( 'Button Icon', 'blockive-premium-addon-for-block-pro' ), value: mainColor, onChange: set( 'mainColor' ) },
								...( 'custom' === colorMode ? [ { label: __( 'Channel Icons Background', 'blockive-premium-addon-for-block-pro' ), value: channelColor, onChange: set( 'channelColor' ) } ] : [] ),
							] }
						/>
					</PanelBody>
				}
				advanced={ <AdvancedTab attributes={ attributes } setAttributes={ setAttributes } /> }
			/>

			<div { ...useBlockProps( { className: 'bpafb-fab-preview' } ) }>
				{ filled ? (
					<>
						<Disabled>
							<ServerSideRender block="blockive-premium-addon-for-block/floating-buttons" attributes={ attributes } />
						</Disabled>
						<p className="components-base-control__help" style={ { textAlign: 'center', marginTop: 4 } }>
							{ sprintf(
								/* translators: %s: corner, e.g. "in the bottom-right corner". */
								__( 'Preview. On the site it stays fixed %s of the window.', 'blockive-premium-addon-for-block-pro' ),
								where
							) }
						</p>
					</>
				) : (
					<Placeholder icon="format-chat" label={ __( 'Floating Buttons', 'blockive-premium-addon-for-block-pro' ) } instructions={ __( 'Enter a phone number, email address, or username for at least one channel in the block settings.', 'blockive-premium-addon-for-block-pro' ) } />
				) }
			</div>
		</>
	);
}
