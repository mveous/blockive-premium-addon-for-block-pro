import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps, BlockControls } from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	RangeControl,
	TextControl,
	ToggleControl,
	ToolbarButton,
	Notice,
} from '@wordpress/components';

import InspectorTabs from '../components/inspector-tabs';
import AdvancedTab from '../components/advanced-tab';
import ColorStateControls from '../components/color-state-controls';
import IconPicker from '../pro-components/icon-picker';
import { cssVars } from '../template-blocks-site/shared';

const TEMPLATE = [
	[ 'core/heading', { level: 4, content: 'Menu' } ],
	[ 'core/paragraph', { placeholder: 'Add a Menu, Icon List, Social Icons, or any other block here…' } ],
];

export default function Edit( { attributes, setAttributes, clientId } ) {
	const {
		panelId,
		position,
		panelWidth,
		panelWidthMobile,
		panelHeight,
		showTrigger,
		triggerType,
		triggerIcon,
		triggerText,
		triggerLabel,
		triggerAlign,
		triggerSize,
		triggerColor,
		triggerHoverColor,
		triggerBgColor,
		triggerHoverBgColor,
		triggerPadding,
		triggerRadius,
		panelBgColor,
		panelColor,
		panelPadding,
		panelShadow,
		showOverlay,
		overlayColor,
		closeOnOverlay,
		closeOnEsc,
		closeOnLinkClick,
		showCloseButton,
		closeColor,
		closeSize,
		transitionDuration,
		preventScroll,
		editorOpen,
	} = attributes;

	const set = ( key ) => ( val ) => setAttributes( { [ key ]: val } );
	const isSide = position === 'left' || position === 'right';
	const effectiveId = panelId || `bpafb-offcanvas-${ attributes.bpafbUid || clientId.slice( 0, 8 ) }`;

	const blockProps = useBlockProps( {
		className: `bpafb-off-canvas bpafb-off-canvas--trigger-${ triggerAlign } is-editor`,
		style: cssVars( {
			'--bpafb-oc-trigger-size': triggerSize,
			'--bpafb-oc-trigger-color': triggerColor,
			'--bpafb-oc-trigger-hover-color': triggerHoverColor,
			'--bpafb-oc-trigger-bg': triggerBgColor,
			'--bpafb-oc-trigger-hover-bg': triggerHoverBgColor,
			'--bpafb-oc-trigger-padding': triggerPadding,
			'--bpafb-oc-trigger-radius': triggerRadius,
			'--bpafb-oc-width': panelWidth,
			'--bpafb-oc-bg': panelBgColor,
			'--bpafb-oc-color': panelColor,
			'--bpafb-oc-padding': panelPadding,
			'--bpafb-oc-close-color': closeColor,
			'--bpafb-oc-close-size': closeSize,
		} ),
	} );

	const innerBlocksProps = useInnerBlocksProps(
		{ className: 'bpafb-off-canvas__content' },
		{ template: TEMPLATE, templateLock: false }
	);

	return (
		<>
			<BlockControls>
				<ToolbarButton
					icon={ editorOpen ? 'hidden' : 'visibility' }
					label={ editorOpen ? __( 'Hide panel in editor', 'blockive-premium-addon-for-block-pro' ) : __( 'Show panel in editor', 'blockive-premium-addon-for-block-pro' ) }
					onClick={ () => setAttributes( { editorOpen: ! editorOpen } ) }
				/>
			</BlockControls>

			<InspectorTabs
				general={
					<>
						<PanelBody title={ __( 'Panel', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							<SelectControl
								label={ __( 'Slide In From', 'blockive-premium-addon-for-block-pro' ) }
								value={ position }
								options={ [
									{ label: __( 'Right', 'blockive-premium-addon-for-block-pro' ), value: 'right' },
									{ label: __( 'Left', 'blockive-premium-addon-for-block-pro' ), value: 'left' },
									{ label: __( 'Top', 'blockive-premium-addon-for-block-pro' ), value: 'top' },
									{ label: __( 'Bottom', 'blockive-premium-addon-for-block-pro' ), value: 'bottom' },
								] }
								onChange={ set( 'position' ) }
							/>
							<TextControl
								label={ __( 'Panel ID', 'blockive-premium-addon-for-block-pro' ) }
								help={ `${ __( 'Any link to this ID opens the panel, e.g. a Button or Menu item linking to', 'blockive-premium-addon-for-block-pro' ) } #${ effectiveId }` }
								value={ panelId }
								onChange={ ( val ) => setAttributes( { panelId: val.replace( /[^A-Za-z0-9_-]/g, '' ) } ) }
								placeholder={ effectiveId }
							/>
							<ToggleControl
								label={ __( 'Show Panel While Editing', 'blockive-premium-addon-for-block-pro' ) }
								help={ __( 'Editor only. On the site the panel always starts closed.', 'blockive-premium-addon-for-block-pro' ) }
								checked={ !! editorOpen }
								onChange={ set( 'editorOpen' ) }
							/>
						</PanelBody>
						<PanelBody title={ __( 'Trigger Button', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<ToggleControl label={ __( 'Show Trigger Button', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showTrigger } onChange={ set( 'showTrigger' ) } />
							{ ! showTrigger && (
								<Notice status="info" isDismissible={ false }>
									{ `${ __( 'Open the panel from any link to', 'blockive-premium-addon-for-block-pro' ) } #${ effectiveId }` }
								</Notice>
							) }
							{ showTrigger && (
								<>
									<SelectControl
										label={ __( 'Content', 'blockive-premium-addon-for-block-pro' ) }
										value={ triggerType }
										options={ [
											{ label: __( 'Icon', 'blockive-premium-addon-for-block-pro' ), value: 'icon' },
											{ label: __( 'Text', 'blockive-premium-addon-for-block-pro' ), value: 'text' },
											{ label: __( 'Icon + Text', 'blockive-premium-addon-for-block-pro' ), value: 'both' },
										] }
										onChange={ set( 'triggerType' ) }
									/>
									{ triggerType !== 'text' && <IconPicker value={ triggerIcon } onChange={ set( 'triggerIcon' ) } /> }
									{ triggerType !== 'icon' && <TextControl label={ __( 'Text', 'blockive-premium-addon-for-block-pro' ) } value={ triggerText } onChange={ set( 'triggerText' ) } /> }
									<TextControl
										label={ __( 'Accessible Label', 'blockive-premium-addon-for-block-pro' ) }
										help={ __( 'Read by screen readers for an icon-only button, and names the panel.', 'blockive-premium-addon-for-block-pro' ) }
										value={ triggerLabel }
										onChange={ set( 'triggerLabel' ) }
									/>
									<SelectControl
										label={ __( 'Alignment', 'blockive-premium-addon-for-block-pro' ) }
										value={ triggerAlign }
										options={ [
											{ label: __( 'Left', 'blockive-premium-addon-for-block-pro' ), value: 'left' },
											{ label: __( 'Center', 'blockive-premium-addon-for-block-pro' ), value: 'center' },
											{ label: __( 'Right', 'blockive-premium-addon-for-block-pro' ), value: 'right' },
										] }
										onChange={ set( 'triggerAlign' ) }
									/>
								</>
							) }
						</PanelBody>
						<PanelBody title={ __( 'Behavior', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<ToggleControl label={ __( 'Close Button', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showCloseButton } onChange={ set( 'showCloseButton' ) } />
							<ToggleControl label={ __( 'Overlay', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showOverlay } onChange={ set( 'showOverlay' ) } />
							{ showOverlay && (
								<ToggleControl label={ __( 'Close on Overlay Click', 'blockive-premium-addon-for-block-pro' ) } checked={ !! closeOnOverlay } onChange={ set( 'closeOnOverlay' ) } />
							) }
							<ToggleControl label={ __( 'Close on Escape Key', 'blockive-premium-addon-for-block-pro' ) } checked={ !! closeOnEsc } onChange={ set( 'closeOnEsc' ) } />
							<ToggleControl
								label={ __( 'Close When a Link Inside Is Clicked', 'blockive-premium-addon-for-block-pro' ) }
								help={ __( 'Useful for one-page sites with anchor links.', 'blockive-premium-addon-for-block-pro' ) }
								checked={ !! closeOnLinkClick }
								onChange={ set( 'closeOnLinkClick' ) }
							/>
							<ToggleControl label={ __( 'Lock Page Scroll While Open', 'blockive-premium-addon-for-block-pro' ) } checked={ !! preventScroll } onChange={ set( 'preventScroll' ) } />
							<RangeControl label={ __( 'Animation Duration (ms)', 'blockive-premium-addon-for-block-pro' ) } value={ transitionDuration } onChange={ set( 'transitionDuration' ) } min={ 0 } max={ 1500 } step={ 50 } />
						</PanelBody>
					</>
				}
				style={
					<>
						<PanelBody title={ __( 'Panel', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							{ isSide ? (
								<>
									<RangeControl label={ __( 'Width (px)', 'blockive-premium-addon-for-block-pro' ) } value={ panelWidth } onChange={ set( 'panelWidth' ) } min={ 200 } max={ 1000 } />
									<RangeControl label={ __( 'Mobile Width (px)', 'blockive-premium-addon-for-block-pro' ) } value={ panelWidthMobile } onChange={ set( 'panelWidthMobile' ) } min={ 200 } max={ 767 } allowReset help={ __( 'Never wider than the screen.', 'blockive-premium-addon-for-block-pro' ) } />
								</>
							) : (
								<RangeControl label={ __( 'Height (% of screen)', 'blockive-premium-addon-for-block-pro' ) } value={ panelHeight } onChange={ set( 'panelHeight' ) } min={ 10 } max={ 100 } />
							) }
							<RangeControl label={ __( 'Padding (px)', 'blockive-premium-addon-for-block-pro' ) } value={ panelPadding } onChange={ set( 'panelPadding' ) } min={ 0 } max={ 100 } />
							<ToggleControl label={ __( 'Shadow', 'blockive-premium-addon-for-block-pro' ) } checked={ !! panelShadow } onChange={ set( 'panelShadow' ) } />
							<ColorStateControls
								normal={ [
									{ label: __( 'Background', 'blockive-premium-addon-for-block-pro' ), value: panelBgColor, onChange: set( 'panelBgColor' ) },
									{ label: __( 'Text Color', 'blockive-premium-addon-for-block-pro' ), value: panelColor, onChange: set( 'panelColor' ) },
									{ label: __( 'Overlay', 'blockive-premium-addon-for-block-pro' ), value: overlayColor, onChange: set( 'overlayColor' ) },
									{ label: __( 'Close Icon', 'blockive-premium-addon-for-block-pro' ), value: closeColor, onChange: set( 'closeColor' ) },
								] }
							/>
							<RangeControl label={ __( 'Close Icon Size (px)', 'blockive-premium-addon-for-block-pro' ) } value={ closeSize } onChange={ set( 'closeSize' ) } min={ 10 } max={ 48 } />
						</PanelBody>
						{ showTrigger && (
							<PanelBody title={ __( 'Trigger Button', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
								<RangeControl label={ __( 'Size (px)', 'blockive-premium-addon-for-block-pro' ) } value={ triggerSize } onChange={ set( 'triggerSize' ) } min={ 10 } max={ 60 } />
								<RangeControl label={ __( 'Padding (px)', 'blockive-premium-addon-for-block-pro' ) } value={ triggerPadding } onChange={ set( 'triggerPadding' ) } min={ 0 } max={ 40 } />
								<RangeControl label={ __( 'Border Radius (px)', 'blockive-premium-addon-for-block-pro' ) } value={ triggerRadius } onChange={ set( 'triggerRadius' ) } min={ 0 } max={ 50 } />
								<ColorStateControls
									normal={ [
										{ label: __( 'Color', 'blockive-premium-addon-for-block-pro' ), value: triggerColor, onChange: set( 'triggerColor' ) },
										{ label: __( 'Background', 'blockive-premium-addon-for-block-pro' ), value: triggerBgColor, onChange: set( 'triggerBgColor' ) },
									] }
									hover={ [
										{ label: __( 'Color', 'blockive-premium-addon-for-block-pro' ), value: triggerHoverColor, onChange: set( 'triggerHoverColor' ) },
										{ label: __( 'Background', 'blockive-premium-addon-for-block-pro' ), value: triggerHoverBgColor, onChange: set( 'triggerHoverBgColor' ) },
									] }
								/>
							</PanelBody>
						) }
					</>
				}
				advanced={ <AdvancedTab attributes={ attributes } setAttributes={ setAttributes } /> }
			/>

			<div { ...blockProps }>
				{ showTrigger ? (
					<button
						type="button"
						className="bpafb-off-canvas__trigger"
						onClick={ () => setAttributes( { editorOpen: ! editorOpen } ) }
						aria-expanded={ !! editorOpen }
					>
						{ triggerType !== 'text' && <i className={ triggerIcon || 'fa-solid fa-bars' } aria-hidden="true" /> }
						{ triggerType !== 'icon' && <span className="bpafb-off-canvas__trigger-text">{ triggerText }</span> }
					</button>
				) : (
					<span className="bpafb-off-canvas__editor-badge">
						{ `${ __( 'Off-Canvas', 'blockive-premium-addon-for-block-pro' ) } #${ effectiveId }` }
					</span>
				) }
				<div className={ `bpafb-off-canvas__editor-panel${ editorOpen ? '' : ' is-collapsed' }` }>
					<div className="bpafb-off-canvas__editor-label">
						{ __( 'Off-Canvas panel. Hidden until opened on the site.', 'blockive-premium-addon-for-block-pro' ) }
					</div>
					<div { ...innerBlocksProps } />
				</div>
			</div>
		</>
	);
}
