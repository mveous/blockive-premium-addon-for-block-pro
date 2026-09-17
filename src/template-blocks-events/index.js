/**
 * Replaces the free plugin's 9 client-only Events Calendar "(Pro)" teaser
 * blocks with real, server-rendered blocks - see
 * class-bpafb-pro-events-blocks.php for the render side. Same replace
 * strategy as src/template-blocks-woo - see that file's docblock: the
 * teaser is always removed, but the real block only takes its place when
 * `bpafbProEventsBlocks.active` (localized from
 * `class_exists('Tribe__Events__Main')`) is true.
 */
import { registerBlockType, unregisterBlockType, getBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { createDynamicBlockEdit } from '../pro-dynamic-blocks-shared/dynamic-block-edit';

const EVENTS_CALENDAR_ACTIVE = !! window.bpafbProEventsBlocks?.active;

const NAME_PREFIX = 'blockive-premium-addon-for-block/tb-';

const BLOCKS = [
	{ slug: 'event-title', title: __( 'Event Title', 'blockive-premium-addon-for-block-pro' ), icon: 'calendar-alt' },
	{ slug: 'event-image', title: __( 'Event Image', 'blockive-premium-addon-for-block-pro' ), icon: 'format-image' },
	{ slug: 'event-date', title: __( 'Event Date', 'blockive-premium-addon-for-block-pro' ), icon: 'calendar' },
	{ slug: 'event-time', title: __( 'Event Time', 'blockive-premium-addon-for-block-pro' ), icon: 'clock' },
	{ slug: 'event-venue', title: __( 'Venue', 'blockive-premium-addon-for-block-pro' ), icon: 'location-alt' },
	{ slug: 'event-organizer', title: __( 'Organizer', 'blockive-premium-addon-for-block-pro' ), icon: 'admin-users' },
	{ slug: 'event-cost', title: __( 'Event Cost', 'blockive-premium-addon-for-block-pro' ), icon: 'tickets-alt' },
	{ slug: 'event-map', title: __( 'Event Map', 'blockive-premium-addon-for-block-pro' ), icon: 'location' },
	{ slug: 'event-register-button', title: __( 'Register Button', 'blockive-premium-addon-for-block-pro' ), icon: 'megaphone' },
];

BLOCKS.forEach( ( { slug, title, icon } ) => {
	const name = NAME_PREFIX + slug;

	if ( getBlockType( name ) ) {
		unregisterBlockType( name );
	}

	if ( ! EVENTS_CALENDAR_ACTIVE ) {
		return;
	}

	registerBlockType( name, {
		apiVersion: 3,
		title,
		category: 'blockive-template',
		icon,
		usesContext: [ 'postId', 'postType' ],
		supports: { html: false, className: false, customClassName: false, reusable: false },
		edit: createDynamicBlockEdit( title, icon ),
		save: () => null,
	} );
} );
