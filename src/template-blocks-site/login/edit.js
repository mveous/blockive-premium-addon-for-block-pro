import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { useBlockProps, BlockControls, AlignmentControl } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl, TextControl, RangeControl } from '@wordpress/components';

import InspectorTabs from '../../components/inspector-tabs';
import AdvancedTab from '../../components/advanced-tab';
import ColorStateControls from '../../components/color-state-controls';
import TypographyControls from '../../components/typography-controls';
import { typoValues, typoOnChange, typoVars, cssVars } from '../shared';

const REDIRECT_OPTIONS = [
	{ label: __( 'Current Page', 'blockive-premium-addon-for-block-pro' ), value: 'current' },
	{ label: __( 'Home Page', 'blockive-premium-addon-for-block-pro' ), value: 'home' },
	{ label: __( 'Custom URL', 'blockive-premium-addon-for-block-pro' ), value: 'custom' },
];

export default function Edit( { attributes, setAttributes } ) {
	const {
		layout,
		loginText,
		logoutText,
		showGreeting,
		greetingText,
		showAvatar,
		accountUrl,
		loginUrl,
		redirect,
		redirectUrl,
		logoutRedirect,
		showRemember,
		showLostPassword,
		showRegister,
		showLabels,
		buttonText,
		align,
		textColor,
		textHoverColor,
		buttonColor,
		buttonBgColor,
		buttonHoverColor,
		buttonHoverBgColor,
		buttonRadius,
		fieldBgColor,
		fieldBorderColor,
		fieldRadius,
		labelColor,
	} = attributes;

	const [ previewState, setPreviewState ] = useState( 'out' );
	const set = ( key ) => ( val ) => setAttributes( { [ key ]: val } );

	const blockProps = useBlockProps( {
		className: `bpafb-tb-login bpafb-tb-login--${ layout } bpafb-tb-align-${ align || 'left' }`,
		style: cssVars( {
			'--bpafb-login-text-color': textColor,
			'--bpafb-login-text-hover-color': textHoverColor,
			'--bpafb-login-button-color': buttonColor,
			'--bpafb-login-button-bg': buttonBgColor,
			'--bpafb-login-button-radius': buttonRadius,
			'--bpafb-login-field-bg': fieldBgColor,
			'--bpafb-login-field-border': fieldBorderColor,
			'--bpafb-login-field-radius': fieldRadius,
			'--bpafb-login-label-color': labelColor,
			...typoVars( attributes, 'text', '--bpafb-login-text' ),
		} ),
	} );

	let preview;
	if ( previewState === 'in' ) {
		preview = (
			<>
				{ showGreeting && (
					<span className="bpafb-tb-login__account">
						{ showAvatar && <span className="bpafb-tb-login__avatar bpafb-tb-login__avatar--placeholder" /> }
						<span>{ ( greetingText || '%s' ).replace( '%s', 'Jane' ) }</span>
					</span>
				) }
				<span className="bpafb-tb-login__link">{ logoutText }</span>
			</>
		);
	} else if ( layout === 'link' ) {
		preview = <span className="bpafb-tb-login__link">{ loginText }</span>;
	} else {
		preview = (
			<form data-bpafb-hide-labels={ showLabels ? undefined : '1' } onSubmit={ ( e ) => e.preventDefault() }>
				<p className="login-username">
					<label>{ __( 'Username or Email Address', 'blockive-premium-addon-for-block-pro' ) }</label>
					<input type="text" className="input" readOnly tabIndex={ -1 } />
				</p>
				<p className="login-password">
					<label>{ __( 'Password', 'blockive-premium-addon-for-block-pro' ) }</label>
					<input type="password" className="input" readOnly tabIndex={ -1 } />
				</p>
				{ showRemember && (
					<p className="login-remember">
						<label>
							<input type="checkbox" readOnly tabIndex={ -1 } /> { __( 'Remember Me', 'blockive-premium-addon-for-block-pro' ) }
						</label>
					</p>
				) }
				<p className="login-submit">
					<span className="button button-primary">{ buttonText }</span>
				</p>
				{ ( showLostPassword || showRegister ) && (
					<p className="bpafb-tb-login__links">
						{ showLostPassword && <span>{ __( 'Lost your password?', 'blockive-premium-addon-for-block-pro' ) }</span> }
						{ showLostPassword && showRegister && <span aria-hidden="true"> | </span> }
						{ showRegister && <span>{ __( 'Register', 'blockive-premium-addon-for-block-pro' ) }</span> }
					</p>
				) }
			</form>
		);
	}

	return (
		<>
			<BlockControls>
				<AlignmentControl value={ align } onChange={ ( val ) => setAttributes( { align: val || 'left' } ) } />
			</BlockControls>

			<InspectorTabs
				general={
					<>
						<PanelBody title={ __( 'Login', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							<SelectControl
								label={ __( 'Layout', 'blockive-premium-addon-for-block-pro' ) }
								value={ layout }
								options={ [
									{ label: __( 'Login / Logout Link', 'blockive-premium-addon-for-block-pro' ), value: 'link' },
									{ label: __( 'Login Form', 'blockive-premium-addon-for-block-pro' ), value: 'form' },
								] }
								onChange={ set( 'layout' ) }
							/>
							<SelectControl
								label={ __( 'Preview As', 'blockive-premium-addon-for-block-pro' ) }
								value={ previewState }
								options={ [
									{ label: __( 'Logged-out Visitor', 'blockive-premium-addon-for-block-pro' ), value: 'out' },
									{ label: __( 'Logged-in User', 'blockive-premium-addon-for-block-pro' ), value: 'in' },
								] }
								onChange={ setPreviewState }
							/>
							{ layout === 'link' ? (
								<>
									<TextControl label={ __( 'Login Text', 'blockive-premium-addon-for-block-pro' ) } value={ loginText } onChange={ set( 'loginText' ) } />
									<TextControl
										label={ __( 'Custom Login URL', 'blockive-premium-addon-for-block-pro' ) }
										help={ __( 'Leave empty to use the WordPress login page.', 'blockive-premium-addon-for-block-pro' ) }
										value={ loginUrl }
										onChange={ set( 'loginUrl' ) }
									/>
								</>
							) : (
								<>
									<TextControl label={ __( 'Button Text', 'blockive-premium-addon-for-block-pro' ) } value={ buttonText } onChange={ set( 'buttonText' ) } />
									<ToggleControl label={ __( 'Show Labels', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showLabels } onChange={ set( 'showLabels' ) } />
									<ToggleControl label={ __( 'Show "Remember Me"', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showRemember } onChange={ set( 'showRemember' ) } />
									<ToggleControl label={ __( 'Show "Lost Password" Link', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showLostPassword } onChange={ set( 'showLostPassword' ) } />
									<ToggleControl
										label={ __( 'Show "Register" Link', 'blockive-premium-addon-for-block-pro' ) }
										help={ __( 'Only shown when "Anyone can register" is enabled in Settings → General.', 'blockive-premium-addon-for-block-pro' ) }
										checked={ !! showRegister }
										onChange={ set( 'showRegister' ) }
									/>
								</>
							) }
							<SelectControl label={ __( 'After Login, Go To', 'blockive-premium-addon-for-block-pro' ) } value={ redirect } options={ REDIRECT_OPTIONS } onChange={ set( 'redirect' ) } />
							{ ( redirect === 'custom' || logoutRedirect === 'custom' ) && (
								<TextControl label={ __( 'Custom Redirect URL', 'blockive-premium-addon-for-block-pro' ) } value={ redirectUrl } onChange={ set( 'redirectUrl' ) } />
							) }
						</PanelBody>
						<PanelBody title={ __( 'Logged-in User', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<ToggleControl label={ __( 'Show Greeting', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showGreeting } onChange={ set( 'showGreeting' ) } />
							{ showGreeting && (
								<>
									<TextControl
										label={ __( 'Greeting', 'blockive-premium-addon-for-block-pro' ) }
										help={ __( '%s is replaced with the user\'s display name.', 'blockive-premium-addon-for-block-pro' ) }
										value={ greetingText }
										onChange={ set( 'greetingText' ) }
									/>
									<ToggleControl label={ __( 'Show Avatar', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showAvatar } onChange={ set( 'showAvatar' ) } />
									<TextControl
										label={ __( 'Account URL', 'blockive-premium-addon-for-block-pro' ) }
										help={ __( 'Leave empty for WooCommerce My Account, or the WordPress profile page.', 'blockive-premium-addon-for-block-pro' ) }
										value={ accountUrl }
										onChange={ set( 'accountUrl' ) }
									/>
								</>
							) }
							<TextControl label={ __( 'Logout Text', 'blockive-premium-addon-for-block-pro' ) } value={ logoutText } onChange={ set( 'logoutText' ) } />
							<SelectControl label={ __( 'After Logout, Go To', 'blockive-premium-addon-for-block-pro' ) } value={ logoutRedirect } options={ REDIRECT_OPTIONS } onChange={ set( 'logoutRedirect' ) } />
						</PanelBody>
					</>
				}
				style={
					<>
						<PanelBody title={ __( 'Text & Links', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							<TypographyControls values={ typoValues( attributes, 'text' ) } onChange={ typoOnChange( setAttributes, 'text' ) } />
							<ColorStateControls
								normal={ [
									{ label: __( 'Text Color', 'blockive-premium-addon-for-block-pro' ), value: textColor, onChange: set( 'textColor' ) },
									{ label: __( 'Label Color', 'blockive-premium-addon-for-block-pro' ), value: labelColor, onChange: set( 'labelColor' ) },
								] }
								hover={ [ { label: __( 'Text Color', 'blockive-premium-addon-for-block-pro' ), value: textHoverColor, onChange: set( 'textHoverColor' ) } ] }
							/>
						</PanelBody>
						{ layout === 'form' && (
							<PanelBody title={ __( 'Form Fields & Button', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
								<ColorStateControls
									normal={ [
										{ label: __( 'Field Background', 'blockive-premium-addon-for-block-pro' ), value: fieldBgColor, onChange: set( 'fieldBgColor' ) },
										{ label: __( 'Field Border', 'blockive-premium-addon-for-block-pro' ), value: fieldBorderColor, onChange: set( 'fieldBorderColor' ) },
										{ label: __( 'Button Text', 'blockive-premium-addon-for-block-pro' ), value: buttonColor, onChange: set( 'buttonColor' ) },
										{ label: __( 'Button Background', 'blockive-premium-addon-for-block-pro' ), value: buttonBgColor, onChange: set( 'buttonBgColor' ) },
									] }
									hover={ [
										{ label: __( 'Button Text', 'blockive-premium-addon-for-block-pro' ), value: buttonHoverColor, onChange: set( 'buttonHoverColor' ) },
										{ label: __( 'Button Background', 'blockive-premium-addon-for-block-pro' ), value: buttonHoverBgColor, onChange: set( 'buttonHoverBgColor' ) },
									] }
								/>
								<RangeControl label={ __( 'Field Radius (px)', 'blockive-premium-addon-for-block-pro' ) } value={ fieldRadius } onChange={ set( 'fieldRadius' ) } min={ 0 } max={ 30 } />
								<RangeControl label={ __( 'Button Radius (px)', 'blockive-premium-addon-for-block-pro' ) } value={ buttonRadius } onChange={ set( 'buttonRadius' ) } min={ 0 } max={ 50 } />
							</PanelBody>
						) }
					</>
				}
				advanced={ <AdvancedTab attributes={ attributes } setAttributes={ setAttributes } /> }
			/>

			<div { ...blockProps }>{ preview }</div>
		</>
	);
}
