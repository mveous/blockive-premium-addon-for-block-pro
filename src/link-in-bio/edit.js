import { __, sprintf } from '@wordpress/i18n';
import { useBlockProps, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';
import { PanelBody, SelectControl, RangeControl, TextControl, TextareaControl, ToggleControl, Button, Disabled } from '@wordpress/components';

import InspectorTabs from '../components/inspector-tabs';
import AdvancedTab from '../components/advanced-tab';
import ColorStateControls from '../components/color-state-controls';

const NETWORKS = [
	[ 'instagram', 'Instagram' ],
	[ 'facebook', 'Facebook' ],
	[ 'x', 'X' ],
	[ 'tiktok', 'TikTok' ],
	[ 'youtube', 'YouTube' ],
	[ 'linkedin', 'LinkedIn' ],
	[ 'pinterest', 'Pinterest' ],
	[ 'threads', 'Threads' ],
	[ 'github', 'GitHub' ],
	[ 'spotify', 'Spotify' ],
	[ 'whatsapp', 'WhatsApp' ],
	[ 'telegram', 'Telegram' ],
	[ 'email', __( 'Email', 'blockive-premium-addon-for-block-pro' ) ],
	[ 'website', __( 'Website', 'blockive-premium-addon-for-block-pro' ) ],
].map( ( [ value, label ] ) => ( { value, label } ) );

/**
 * Up / down / remove buttons for one row of a list attribute.
 */
function RowActions( { list, index, onChange } ) {
	const move = ( by ) => {
		const next = [ ...list ];
		const [ row ] = next.splice( index, 1 );
		next.splice( index + by, 0, row );
		onChange( next );
	};
	return (
		<div style={ { display: 'flex', gap: 4, marginBottom: 12 } }>
			<Button size="small" icon="arrow-up-alt2" label={ __( 'Move up', 'blockive-premium-addon-for-block-pro' ) } disabled={ index === 0 } onClick={ () => move( -1 ) } />
			<Button size="small" icon="arrow-down-alt2" label={ __( 'Move down', 'blockive-premium-addon-for-block-pro' ) } disabled={ index === list.length - 1 } onClick={ () => move( 1 ) } />
			<Button size="small" variant="link" isDestructive onClick={ () => onChange( list.filter( ( _, i ) => i !== index ) ) }>
				{ __( 'Remove', 'blockive-premium-addon-for-block-pro' ) }
			</Button>
		</div>
	);
}

export default function Edit( { attributes, setAttributes } ) {
	const { imageId, imageUrl, name, headline, bio, nameTag, socials, links, newTab, imageSize, maxWidth, buttonStyle, buttonRadius, pageBgColor, textColor, buttonBgColor, buttonColor, buttonHoverBgColor, buttonHoverColor, iconColor } = attributes;
	const set = ( key ) => ( value ) => setAttributes( { [ key ]: value } );
	const socialList = Array.isArray( socials ) ? socials : [];
	const linkList = Array.isArray( links ) ? links : [];
	const updateRow = ( key, list, index, changes ) => setAttributes( { [ key ]: list.map( ( row, i ) => ( i === index ? { ...row, ...changes } : row ) ) } );
	const empty = ! name && ! bio && ! headline && ! imageUrl && ! linkList.some( ( link ) => link.label && link.url );

	return (
		<>
			<InspectorTabs
				general={
					<>
						<PanelBody title={ __( 'Profile', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							<MediaUploadCheck>
								<MediaUpload
									allowedTypes={ [ 'image' ] }
									value={ imageId }
									onSelect={ ( media ) => setAttributes( { imageId: media.id, imageUrl: media.url } ) }
									render={ ( { open } ) => (
										<div style={ { marginBottom: 16 } }>
											{ imageUrl && <img src={ imageUrl } alt="" style={ { width: 64, height: 64, objectFit: 'cover', borderRadius: '50%', display: 'block', marginBottom: 8 } } /> }
											<Button variant="secondary" onClick={ open }>{ imageUrl ? __( 'Replace Photo', 'blockive-premium-addon-for-block-pro' ) : __( 'Choose Photo', 'blockive-premium-addon-for-block-pro' ) }</Button>
											{ imageUrl && (
												<Button variant="link" isDestructive onClick={ () => setAttributes( { imageId: 0, imageUrl: '' } ) } style={ { marginLeft: 8 } }>
													{ __( 'Remove', 'blockive-premium-addon-for-block-pro' ) }
												</Button>
											) }
										</div>
									) }
								/>
							</MediaUploadCheck>
							<TextControl label={ __( 'Name', 'blockive-premium-addon-for-block-pro' ) } value={ name } onChange={ set( 'name' ) } />
							<SelectControl
								label={ __( 'Name Tag', 'blockive-premium-addon-for-block-pro' ) }
								value={ nameTag }
								options={ [ 'h1', 'h2', 'h3', 'p' ].map( ( value ) => ( { value, label: value.toUpperCase() } ) ) }
								onChange={ set( 'nameTag' ) }
								help={ __( 'H1 when this block is the page\'s main heading.', 'blockive-premium-addon-for-block-pro' ) }
							/>
							<TextControl label={ __( 'Headline', 'blockive-premium-addon-for-block-pro' ) } value={ headline } onChange={ set( 'headline' ) } />
							<TextareaControl label={ __( 'Bio', 'blockive-premium-addon-for-block-pro' ) } value={ bio } onChange={ set( 'bio' ) } rows={ 3 } />
						</PanelBody>
						<PanelBody title={ __( 'Links', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							{ linkList.map( ( link, index ) => (
								<div key={ index } style={ { borderBottom: '1px solid #ddd', marginBottom: 12 } }>
									<TextControl label={ sprintf( /* translators: %d: link number. */ __( 'Link %d Label', 'blockive-premium-addon-for-block-pro' ), index + 1 ) } value={ link.label || '' } onChange={ ( label ) => updateRow( 'links', linkList, index, { label } ) } />
									<TextControl label={ __( 'URL', 'blockive-premium-addon-for-block-pro' ) } type="url" value={ link.url || '' } onChange={ ( url ) => updateRow( 'links', linkList, index, { url } ) } placeholder="https://" />
									<TextControl label={ __( 'Icon (Font Awesome class, optional)', 'blockive-premium-addon-for-block-pro' ) } value={ link.icon || '' } onChange={ ( icon ) => updateRow( 'links', linkList, index, { icon } ) } placeholder="fa-solid fa-bag-shopping" />
									<RowActions list={ linkList } index={ index } onChange={ set( 'links' ) } />
								</div>
							) ) }
							<Button variant="secondary" onClick={ () => setAttributes( { links: [ ...linkList, { label: '', url: '', icon: '' } ] } ) }>
								{ __( 'Add Link', 'blockive-premium-addon-for-block-pro' ) }
							</Button>
						</PanelBody>
						<PanelBody title={ __( 'Social Icons', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							{ socialList.map( ( social, index ) => (
								<div key={ index } style={ { borderBottom: '1px solid #ddd', marginBottom: 12 } }>
									<SelectControl label={ __( 'Network', 'blockive-premium-addon-for-block-pro' ) } value={ social.network || 'instagram' } options={ NETWORKS } onChange={ ( network ) => updateRow( 'socials', socialList, index, { network } ) } />
									<TextControl label={ __( 'Profile URL or email', 'blockive-premium-addon-for-block-pro' ) } value={ social.url || '' } onChange={ ( url ) => updateRow( 'socials', socialList, index, { url } ) } />
									<RowActions list={ socialList } index={ index } onChange={ set( 'socials' ) } />
								</div>
							) ) }
							<Button variant="secondary" onClick={ () => setAttributes( { socials: [ ...socialList, { network: 'instagram', url: '' } ] } ) }>
								{ __( 'Add Social Icon', 'blockive-premium-addon-for-block-pro' ) }
							</Button>
						</PanelBody>
						<PanelBody title={ __( 'Behavior', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<ToggleControl label={ __( 'Open Web Links in a New Tab', 'blockive-premium-addon-for-block-pro' ) } checked={ !! newTab } onChange={ set( 'newTab' ) } />
						</PanelBody>
					</>
				}
				style={
					<PanelBody title={ __( 'Link in Bio', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
						<RangeControl label={ __( 'Photo Size (px)', 'blockive-premium-addon-for-block-pro' ) } value={ imageSize } onChange={ set( 'imageSize' ) } min={ 48 } max={ 240 } />
						<RangeControl label={ __( 'Content Width (px)', 'blockive-premium-addon-for-block-pro' ) } value={ maxWidth } onChange={ set( 'maxWidth' ) } min={ 280 } max={ 800 } />
						<SelectControl
							label={ __( 'Button Style', 'blockive-premium-addon-for-block-pro' ) }
							value={ buttonStyle }
							options={ [
								{ label: __( 'Filled', 'blockive-premium-addon-for-block-pro' ), value: 'fill' },
								{ label: __( 'Outline', 'blockive-premium-addon-for-block-pro' ), value: 'outline' },
							] }
							onChange={ set( 'buttonStyle' ) }
						/>
						<RangeControl label={ __( 'Button Corner Radius (px)', 'blockive-premium-addon-for-block-pro' ) } value={ buttonRadius } onChange={ set( 'buttonRadius' ) } min={ 0 } max={ 40 } />
						<ColorStateControls
							normal={ [
								{ label: __( 'Background', 'blockive-premium-addon-for-block-pro' ), value: pageBgColor, onChange: set( 'pageBgColor' ) },
								{ label: __( 'Text', 'blockive-premium-addon-for-block-pro' ), value: textColor, onChange: set( 'textColor' ) },
								{ label: __( 'Social Icons', 'blockive-premium-addon-for-block-pro' ), value: iconColor, onChange: set( 'iconColor' ) },
								{ label: __( 'Button', 'blockive-premium-addon-for-block-pro' ), value: buttonBgColor, onChange: set( 'buttonBgColor' ) },
								{ label: __( 'Button Text', 'blockive-premium-addon-for-block-pro' ), value: buttonColor, onChange: set( 'buttonColor' ) },
							] }
							hover={ [
								{ label: __( 'Button', 'blockive-premium-addon-for-block-pro' ), value: buttonHoverBgColor, onChange: set( 'buttonHoverBgColor' ) },
								{ label: __( 'Button Text', 'blockive-premium-addon-for-block-pro' ), value: buttonHoverColor, onChange: set( 'buttonHoverColor' ) },
							] }
						/>
					</PanelBody>
				}
				advanced={ <AdvancedTab attributes={ attributes } setAttributes={ setAttributes } /> }
			/>
			<div { ...useBlockProps() }>
				{ empty ? (
					<p style={ { padding: 24, textAlign: 'center', border: '1px dashed #cbd5e1', borderRadius: 8 } }>
						{ __( 'Add a name, photo, and links in the block settings.', 'blockive-premium-addon-for-block-pro' ) }
					</p>
				) : (
					<Disabled>
						<ServerSideRender block="blockive-premium-addon-for-block/link-in-bio" attributes={ attributes } />
					</Disabled>
				) }
			</div>
		</>
	);
}
