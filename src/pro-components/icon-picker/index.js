import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { BaseControl, Button, Dropdown, SearchControl, TextControl } from '@wordpress/components';

import './editor.css';

/**
 * Font Awesome 6 icon picker (the plugin already loads Font Awesome 6.5 on
 * the site and in the editor). Offers a searchable set of commonly used
 * icons, plus a free-text field for any other Font Awesome class.
 * Pro-only: lives outside src/components, which the sync script
 * overwrites from the free plugin.
 */

const SOLID = [
	'star', 'check', 'circle-check', 'xmark', 'plus', 'minus', 'heart', 'bars', 'magnifying-glass', 'house',
	'phone', 'mobile-screen', 'envelope', 'location-dot', 'map-location-dot', 'clock', 'calendar', 'calendar-days',
	'user', 'users', 'user-tie', 'cart-shopping', 'bag-shopping', 'basket-shopping', 'credit-card', 'truck',
	'tag', 'tags', 'gift', 'percent', 'dollar-sign', 'euro-sign', 'sterling-sign', 'globe', 'link', 'share-nodes',
	'arrow-right', 'arrow-left', 'arrow-up', 'arrow-down', 'angle-right', 'angle-left', 'chevron-right', 'chevron-down',
	'caret-right', 'circle-arrow-right', 'arrow-up-right-from-square', 'download', 'upload', 'paper-plane', 'comment',
	'comments', 'bell', 'bookmark', 'flag', 'thumbs-up', 'award', 'trophy', 'medal', 'crown', 'gem', 'bolt',
	'fire', 'rocket', 'lightbulb', 'gear', 'gears', 'wrench', 'screwdriver-wrench', 'shield-halved', 'lock',
	'unlock', 'key', 'eye', 'image', 'images', 'camera', 'video', 'play', 'circle-play', 'music', 'headphones',
	'microphone', 'file', 'file-lines', 'folder', 'book', 'graduation-cap', 'briefcase', 'building', 'store',
	'hospital', 'stethoscope', 'car', 'plane', 'bicycle', 'utensils', 'mug-hot', 'leaf', 'seedling', 'tree',
	'sun', 'moon', 'cloud', 'umbrella', 'paw', 'code', 'laptop', 'desktop', 'server', 'database', 'wifi',
	'chart-line', 'chart-pie', 'chart-simple', 'list', 'list-check', 'circle-info', 'circle-question',
	'triangle-exclamation', 'circle-exclamation', 'hand-holding-heart', 'handshake', 'face-smile', 'quote-left',
	'quote-right', 'pen', 'pen-to-square', 'trash', 'print', 'fax', 'headset', 'life-ring', 'compass', 'map',
];

const REGULAR = [
	'star', 'heart', 'circle-check', 'clock', 'calendar', 'envelope', 'user', 'comment', 'bell', 'bookmark',
	'file', 'folder', 'image', 'lightbulb', 'thumbs-up', 'face-smile', 'eye', 'circle', 'square', 'paper-plane',
];

const BRANDS = [
	'facebook', 'facebook-f', 'x-twitter', 'twitter', 'instagram', 'linkedin', 'linkedin-in', 'youtube', 'tiktok',
	'pinterest', 'pinterest-p', 'whatsapp', 'telegram', 'snapchat', 'reddit', 'discord', 'threads', 'tumblr',
	'vimeo-v', 'twitch', 'spotify', 'soundcloud', 'github', 'gitlab', 'dribbble', 'behance', 'medium', 'wordpress',
	'google', 'apple', 'android', 'amazon', 'paypal', 'stripe', 'cc-visa', 'cc-mastercard', 'skype', 'slack',
	'yelp', 'tripadvisor', 'etsy', 'shopify', 'airbnb', 'weixin', 'line', 'viber', 'rss',
];

export const ICONS = [
	...SOLID.map( ( name ) => ( { name, className: `fa-solid fa-${ name }` } ) ),
	...REGULAR.map( ( name ) => ( { name: `${ name } (outline)`, className: `fa-regular fa-${ name }` } ) ),
	...BRANDS.map( ( name ) => ( { name: `${ name } (brand)`, className: `fa-brands fa-${ name }` } ) ),
];

/**
 * Normalizes older / shorthand class strings ("fas fa-star") so the
 * selected-state highlight also matches them.
 *
 * @param {string} value Icon class string.
 * @return {string}
 */
function normalize( value = '' ) {
	return value
		.trim()
		.replace( /^fas\b/, 'fa-solid' )
		.replace( /^far\b/, 'fa-regular' )
		.replace( /^fab\b/, 'fa-brands' );
}

export default function IconPicker( { label, value, onChange, allowEmpty = false } ) {
	const [ search, setSearch ] = useState( '' );
	const current = normalize( value );
	const term = search.trim().toLowerCase();
	const results = term ? ICONS.filter( ( icon ) => icon.name.includes( term ) || icon.className.includes( term ) ) : ICONS;

	return (
		<BaseControl label={ label || __( 'Icon', 'blockive-premium-addon-for-block-pro' ) } className="bpafb-icon-picker">
			<div className="bpafb-icon-picker__row">
				<span className="bpafb-icon-picker__preview" aria-hidden="true">
					{ value ? <i className={ value } /> : '—' }
				</span>
				<Dropdown
					popoverProps={ { placement: 'left-start' } }
					renderToggle={ ( { isOpen, onToggle } ) => (
						<Button variant="secondary" onClick={ onToggle } aria-expanded={ isOpen }>
							{ __( 'Choose Icon', 'blockive-premium-addon-for-block-pro' ) }
						</Button>
					) }
					renderContent={ ( { onClose } ) => (
						<div className="bpafb-icon-picker__popover">
							<SearchControl
								value={ search }
								onChange={ setSearch }
								placeholder={ __( 'Search icons…', 'blockive-premium-addon-for-block-pro' ) }
								__nextHasNoMarginBottom
							/>
							<div className="bpafb-icon-picker__grid" role="listbox" aria-label={ __( 'Icons', 'blockive-premium-addon-for-block-pro' ) }>
								{ results.map( ( icon ) => (
									<button
										key={ icon.className }
										type="button"
										role="option"
										aria-selected={ current === icon.className }
										className={ `bpafb-icon-picker__item${ current === icon.className ? ' is-selected' : '' }` }
										title={ icon.name }
										onClick={ () => {
											onChange( icon.className );
											onClose();
										} }
									>
										<i className={ icon.className } aria-hidden="true" />
										<span className="screen-reader-text">{ icon.name }</span>
									</button>
								) ) }
								{ ! results.length && (
									<p className="bpafb-icon-picker__empty">
										{ __( 'No match. Type any Font Awesome class in the field below the button.', 'blockive-premium-addon-for-block-pro' ) }
									</p>
								) }
							</div>
						</div>
					) }
				/>
				{ allowEmpty && value && (
					<Button variant="link" isDestructive onClick={ () => onChange( '' ) }>
						{ __( 'Clear', 'blockive-premium-addon-for-block-pro' ) }
					</Button>
				) }
			</div>
			<TextControl
				value={ value || '' }
				onChange={ onChange }
				help={ __( 'Or any Font Awesome 6 class, e.g. "fa-solid fa-mug-hot".', 'blockive-premium-addon-for-block-pro' ) }
				__nextHasNoMarginBottom
			/>
		</BaseControl>
	);
}
