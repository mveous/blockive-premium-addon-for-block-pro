import { __ } from '@wordpress/i18n';
import { useBlockProps, BlockControls, AlignmentControl } from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';
import { PanelBody, SelectControl, RangeControl, TextControl, TextareaControl, ToggleControl, CheckboxControl, Disabled } from '@wordpress/components';

import InspectorTabs from '../components/inspector-tabs';
import AdvancedTab from '../components/advanced-tab';

const PLACEHOLDERS = {
	page: 'https://www.facebook.com/YourPage',
	post: 'https://www.facebook.com/YourPage/posts/…',
	video: 'https://www.facebook.com/YourPage/videos/…',
	like: 'https://www.facebook.com/YourPage',
};

export default function Edit( { attributes, setAttributes } ) {
	const { embedType, url, width, height, pageTabs, smallHeader, hideCover, showFacepile, likeLayout, likeAction, likeSize, likeShare, showText, clickToLoad, consentText, embedAlign } = attributes;
	const set = ( key ) => ( value ) => setAttributes( { [ key ]: value } );
	const tabs = Array.isArray( pageTabs ) ? pageTabs : [];
	const toggleTab = ( tab ) => ( checked ) => setAttributes( { pageTabs: checked ? [ ...tabs, tab ] : tabs.filter( ( t ) => t !== tab ) } );

	return (
		<>
			<BlockControls>
				<AlignmentControl value={ embedAlign } onChange={ ( value ) => setAttributes( { embedAlign: value || 'center' } ) } />
			</BlockControls>
			<InspectorTabs
				general={
					<>
						<PanelBody title={ __( 'Facebook', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							<SelectControl
								label={ __( 'Show', 'blockive-premium-addon-for-block-pro' ) }
								value={ embedType }
								options={ [
									{ label: __( 'Post', 'blockive-premium-addon-for-block-pro' ), value: 'post' },
									{ label: __( 'Video', 'blockive-premium-addon-for-block-pro' ), value: 'video' },
									{ label: __( 'Page', 'blockive-premium-addon-for-block-pro' ), value: 'page' },
									{ label: __( 'Like Button', 'blockive-premium-addon-for-block-pro' ), value: 'like' },
								] }
								onChange={ set( 'embedType' ) }
							/>
							<TextControl label={ __( 'Facebook Address', 'blockive-premium-addon-for-block-pro' ) } type="url" value={ url } placeholder={ PLACEHOLDERS[ embedType ] } onChange={ set( 'url' ) } help={ embedType === 'like' ? __( 'The page or address people will like.', 'blockive-premium-addon-for-block-pro' ) : undefined } />
							{ embedType !== 'like' && <RangeControl label={ __( 'Width (px)', 'blockive-premium-addon-for-block-pro' ) } value={ width } onChange={ set( 'width' ) } min={ 180 } max={ 750 } help={ __( 'Shrinks to fit narrower screens.', 'blockive-premium-addon-for-block-pro' ) } /> }
							{ embedType !== 'like' && <RangeControl label={ __( 'Height (px, 0 = automatic)', 'blockive-premium-addon-for-block-pro' ) } value={ height } onChange={ set( 'height' ) } min={ 0 } max={ 1200 } /> }
							{ embedType === 'page' && (
								<>
									<p className="components-base-control__label">{ __( 'Tabs', 'blockive-premium-addon-for-block-pro' ) }</p>
									<CheckboxControl label={ __( 'Timeline', 'blockive-premium-addon-for-block-pro' ) } checked={ tabs.includes( 'timeline' ) } onChange={ toggleTab( 'timeline' ) } />
									<CheckboxControl label={ __( 'Events', 'blockive-premium-addon-for-block-pro' ) } checked={ tabs.includes( 'events' ) } onChange={ toggleTab( 'events' ) } />
									<CheckboxControl label={ __( 'Messages', 'blockive-premium-addon-for-block-pro' ) } checked={ tabs.includes( 'messages' ) } onChange={ toggleTab( 'messages' ) } />
									<ToggleControl label={ __( 'Small Header', 'blockive-premium-addon-for-block-pro' ) } checked={ !! smallHeader } onChange={ set( 'smallHeader' ) } />
									<ToggleControl label={ __( 'Hide Cover Photo', 'blockive-premium-addon-for-block-pro' ) } checked={ !! hideCover } onChange={ set( 'hideCover' ) } />
									<ToggleControl label={ __( 'Show Friends Who Like the Page', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showFacepile } onChange={ set( 'showFacepile' ) } />
								</>
							) }
							{ ( embedType === 'post' || embedType === 'video' ) && <ToggleControl label={ __( 'Show Post Text', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showText } onChange={ set( 'showText' ) } /> }
							{ embedType === 'like' && (
								<>
									<SelectControl
										label={ __( 'Layout', 'blockive-premium-addon-for-block-pro' ) }
										value={ likeLayout }
										options={ [
											{ label: __( 'Button with count', 'blockive-premium-addon-for-block-pro' ), value: 'button_count' },
											{ label: __( 'Button only', 'blockive-premium-addon-for-block-pro' ), value: 'button' },
											{ label: __( 'Count box above button', 'blockive-premium-addon-for-block-pro' ), value: 'box_count' },
											{ label: __( 'Standard (with text)', 'blockive-premium-addon-for-block-pro' ), value: 'standard' },
										] }
										onChange={ set( 'likeLayout' ) }
									/>
									<SelectControl
										label={ __( 'Button Says', 'blockive-premium-addon-for-block-pro' ) }
										value={ likeAction }
										options={ [
											{ label: __( 'Like', 'blockive-premium-addon-for-block-pro' ), value: 'like' },
											{ label: __( 'Recommend', 'blockive-premium-addon-for-block-pro' ), value: 'recommend' },
										] }
										onChange={ set( 'likeAction' ) }
									/>
									<SelectControl
										label={ __( 'Size', 'blockive-premium-addon-for-block-pro' ) }
										value={ likeSize }
										options={ [
											{ label: __( 'Small', 'blockive-premium-addon-for-block-pro' ), value: 'small' },
											{ label: __( 'Large', 'blockive-premium-addon-for-block-pro' ), value: 'large' },
										] }
										onChange={ set( 'likeSize' ) }
									/>
									<ToggleControl label={ __( 'Share Button', 'blockive-premium-addon-for-block-pro' ) } checked={ !! likeShare } onChange={ set( 'likeShare' ) } />
								</>
							) }
						</PanelBody>
						<PanelBody title={ __( 'Privacy', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<ToggleControl
								label={ __( 'Load Only After a Click', 'blockive-premium-addon-for-block-pro' ) }
								checked={ !! clickToLoad }
								onChange={ set( 'clickToLoad' ) }
								help={ __( 'Nothing from Facebook loads until the visitor asks for it. Turning this off loads Facebook right away, which may need cookie consent where you are.', 'blockive-premium-addon-for-block-pro' ) }
							/>
							{ clickToLoad && <TextareaControl label={ __( 'Message', 'blockive-premium-addon-for-block-pro' ) } value={ consentText } onChange={ set( 'consentText' ) } placeholder={ __( 'This content is hosted by Facebook, which may set cookies and collect data when it loads.', 'blockive-premium-addon-for-block-pro' ) } rows={ 3 } /> }
						</PanelBody>
					</>
				}
				advanced={ <AdvancedTab attributes={ attributes } setAttributes={ setAttributes } /> }
			/>
			<div { ...useBlockProps() }>
				<Disabled>
					<ServerSideRender block="blockive-premium-addon-for-block/facebook-embed" attributes={ { ...attributes, clickToLoad: true } } />
				</Disabled>
			</div>
		</>
	);
}
