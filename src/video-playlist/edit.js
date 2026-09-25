import { __, sprintf } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { PanelBody, SelectControl, RangeControl, TextControl, ToggleControl, Notice } from '@wordpress/components';

import InspectorTabs from '../components/inspector-tabs';
import AdvancedTab from '../components/advanced-tab';
import ColorStateControls from '../components/color-state-controls';
import TypographyControls from '../components/typography-controls';
import ImageControl from '../pro-components/image-control';
import { useItemList, ItemActions, ItemToolbar } from '../pro-components/item-list';
import { youtubePoster, isPlayableVideo } from '../pro-components/video';
import { typoValues, typoOnChange, typoVars, cssVars } from '../template-blocks-site/shared';

const BLANK = { title: 'New video', url: '', thumbnailId: 0, thumbnailUrl: '', duration: '' };

export default function Edit( { attributes, setAttributes } ) {
	const {
		items,
		playlistTitle,
		listPosition,
		aspectRatio,
		showThumbnails,
		showDuration,
		autoNext,
		listWidth,
		listBgColor,
		itemColor,
		itemActiveBgColor,
		itemActiveColor,
		playColor,
		borderRadius,
	} = attributes;

	const list = useItemList( items, 'items', setAttributes, BLANK );
	const { item } = list;
	const set = ( key ) => ( val ) => setAttributes( { [ key ]: val } );
	const posterOf = ( it ) => it.thumbnailUrl || youtubePoster( it.url );
	const current = items[ list.index ] || BLANK;

	const blockProps = useBlockProps( {
		className: `bpafb-vpl bpafb-vpl--list-${ listPosition }`,
		style: cssVars( {
			'--bpafb-vpl-ratio': aspectRatio,
			'--bpafb-vpl-list-width': listWidth,
			'--bpafb-vpl-list-bg': listBgColor,
			'--bpafb-vpl-item-color': itemColor,
			'--bpafb-vpl-item-active-bg': itemActiveBgColor,
			'--bpafb-vpl-item-active-color': itemActiveColor,
			'--bpafb-vpl-play-color': playColor,
			'--bpafb-vpl-radius': borderRadius,
			...typoVars( attributes, 'item', '--bpafb-vpl-item' ),
		} ),
	} );

	/* translators: 1: video number, 2: total videos. */
	const itemLabel = sprintf( __( 'Video %1$d of %2$d', 'blockive-premium-addon-for-block-pro' ), list.index + 1, items.length );
	const addLabel = __( 'Add Video', 'blockive-premium-addon-for-block-pro' );

	return (
		<>
			<ItemToolbar list={ list } count={ items.length } onAdd={ () => list.add() } addLabel={ addLabel } />
			<InspectorTabs
				general={
					<>
						<PanelBody title={ itemLabel } initialOpen={ true }>
							<ItemActions list={ list } count={ items.length } addLabel={ addLabel } />
							<TextControl label={ __( 'Title', 'blockive-premium-addon-for-block-pro' ) } value={ item.title } onChange={ ( val ) => list.update( { title: val } ) } />
							<TextControl
								label={ __( 'Video URL', 'blockive-premium-addon-for-block-pro' ) }
								type="url"
								value={ item.url }
								onChange={ ( val ) => list.update( { url: val } ) }
								help={ __( 'YouTube, Vimeo, or a link to an .mp4 / .webm file.', 'blockive-premium-addon-for-block-pro' ) }
							/>
							{ !! item.url && ! isPlayableVideo( item.url ) && (
								<Notice status="warning" isDismissible={ false }>
									{ __( 'This link is not a YouTube, Vimeo, or video file URL, so this video is left out.', 'blockive-premium-addon-for-block-pro' ) }
								</Notice>
							) }
							<ImageControl
								label={ __( 'Thumbnail', 'blockive-premium-addon-for-block-pro' ) }
								id={ item.thumbnailId }
								url={ item.thumbnailUrl }
								onChange={ ( media ) => list.update( { thumbnailId: media.id, thumbnailUrl: media.url } ) }
							/>
							<p className="components-base-control__help">{ __( 'Optional for YouTube, which has its own.', 'blockive-premium-addon-for-block-pro' ) }</p>
							<TextControl label={ __( 'Duration', 'blockive-premium-addon-for-block-pro' ) } value={ item.duration } onChange={ ( val ) => list.update( { duration: val } ) } placeholder="4:32" />
						</PanelBody>
						<PanelBody title={ __( 'Playlist', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<TextControl label={ __( 'Playlist Title', 'blockive-premium-addon-for-block-pro' ) } value={ playlistTitle } onChange={ set( 'playlistTitle' ) } />
							<SelectControl
								label={ __( 'List Position', 'blockive-premium-addon-for-block-pro' ) }
								value={ listPosition }
								options={ [
									{ label: __( 'Beside the Player', 'blockive-premium-addon-for-block-pro' ), value: 'right' },
									{ label: __( 'Below the Player', 'blockive-premium-addon-for-block-pro' ), value: 'bottom' },
								] }
								onChange={ set( 'listPosition' ) }
								help={ __( 'Beside the player moves below it on small screens and narrow columns.', 'blockive-premium-addon-for-block-pro' ) }
							/>
							<SelectControl
								label={ __( 'Player Aspect Ratio', 'blockive-premium-addon-for-block-pro' ) }
								value={ aspectRatio }
								options={ [ '16/9', '4/3', '21/9', '1/1', '9/16' ].map( ( value ) => ( { label: value.replace( '/', ':' ), value } ) ) }
								onChange={ set( 'aspectRatio' ) }
							/>
							<ToggleControl label={ __( 'Show Thumbnails', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showThumbnails } onChange={ set( 'showThumbnails' ) } />
							<ToggleControl label={ __( 'Show Durations', 'blockive-premium-addon-for-block-pro' ) } checked={ !! showDuration } onChange={ set( 'showDuration' ) } />
							<ToggleControl
								label={ __( 'Play the Next Video Automatically', 'blockive-premium-addon-for-block-pro' ) }
								checked={ !! autoNext }
								onChange={ set( 'autoNext' ) }
								help={ __( 'For video files. YouTube and Vimeo do not report when a video ends.', 'blockive-premium-addon-for-block-pro' ) }
							/>
						</PanelBody>
					</>
				}
				style={
					<>
						<PanelBody title={ __( 'Layout', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ true }>
							{ listPosition === 'right' && <RangeControl label={ __( 'List Width (px)', 'blockive-premium-addon-for-block-pro' ) } value={ listWidth } onChange={ set( 'listWidth' ) } min={ 200 } max={ 500 } /> }
							<RangeControl label={ __( 'Border Radius (px)', 'blockive-premium-addon-for-block-pro' ) } value={ borderRadius } onChange={ set( 'borderRadius' ) } min={ 0 } max={ 40 } />
						</PanelBody>
						<PanelBody title={ __( 'List', 'blockive-premium-addon-for-block-pro' ) } initialOpen={ false }>
							<TypographyControls values={ typoValues( attributes, 'item' ) } onChange={ typoOnChange( setAttributes, 'item' ) } />
							<ColorStateControls
								normal={ [
									{ label: __( 'Background', 'blockive-premium-addon-for-block-pro' ), value: listBgColor, onChange: set( 'listBgColor' ) },
									{ label: __( 'Text', 'blockive-premium-addon-for-block-pro' ), value: itemColor, onChange: set( 'itemColor' ) },
									{ label: __( 'Playing Item Background', 'blockive-premium-addon-for-block-pro' ), value: itemActiveBgColor, onChange: set( 'itemActiveBgColor' ) },
									{ label: __( 'Playing Item Text', 'blockive-premium-addon-for-block-pro' ), value: itemActiveColor, onChange: set( 'itemActiveColor' ) },
									{ label: __( 'Play Button', 'blockive-premium-addon-for-block-pro' ), value: playColor, onChange: set( 'playColor' ) },
								] }
							/>
						</PanelBody>
					</>
				}
				advanced={ <AdvancedTab attributes={ attributes } setAttributes={ setAttributes } /> }
			/>

			<div { ...blockProps }>
				<div className="bpafb-vpl__player">
					<span className="bpafb-vpl__poster">
						{ posterOf( current ) && <img className="bpafb-vpl__poster-img" src={ posterOf( current ) } alt="" /> }
						<span className="bpafb-vpl__play" aria-hidden="true">
							<i className="fa-solid fa-play" />
						</span>
					</span>
				</div>
				<div className="bpafb-vpl__list">
					{ !! playlistTitle && (
						<p className="bpafb-vpl__list-title">
							{ playlistTitle }{ ' ' }
							<span className="bpafb-vpl__count">
								{ sprintf(
									/* translators: %d: number of videos. */
									__( '%d videos', 'blockive-premium-addon-for-block-pro' ),
									items.length
								) }
							</span>
						</p>
					) }
					<ol className="bpafb-vpl__items">
						{ items.map( ( it, i ) => (
							<li key={ i }>
								{ /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
								<a
									className={ `bpafb-vpl__item${ i === list.index ? ' is-active' : '' }` }
									href="#"
									onClick={ ( event ) => {
										event.preventDefault();
										list.select( i );
									} }
								>
									{ showThumbnails && posterOf( it ) && <img className="bpafb-vpl__thumb" src={ posterOf( it ) } alt="" /> }
									<span className="bpafb-vpl__item-text">
										<span className="bpafb-vpl__item-title">{ it.title || sprintf( __( 'Video %d', 'blockive-premium-addon-for-block-pro' ), i + 1 ) }</span>
										{ showDuration && !! it.duration && <span className="bpafb-vpl__duration">{ it.duration }</span> }
									</span>
								</a>
							</li>
						) ) }
					</ol>
				</div>
			</div>
		</>
	);
}
