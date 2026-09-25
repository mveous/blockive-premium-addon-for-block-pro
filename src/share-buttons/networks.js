import { __ } from '@wordpress/i18n';

/**
 * Share networks: label, Font Awesome icon, and official brand color.
 * Mirrors bpafb_share_networks() in render.php (which also builds each
 * network's share URL).
 */
export const NETWORKS = {
	facebook: { label: 'Facebook', icon: 'fa-brands fa-facebook-f', color: '#1877f2' },
	'x-twitter': { label: 'X', icon: 'fa-brands fa-x-twitter', color: '#000000' },
	linkedin: { label: 'LinkedIn', icon: 'fa-brands fa-linkedin-in', color: '#0a66c2' },
	whatsapp: { label: 'WhatsApp', icon: 'fa-brands fa-whatsapp', color: '#25d366' },
	pinterest: { label: 'Pinterest', icon: 'fa-brands fa-pinterest-p', color: '#e60023' },
	telegram: { label: 'Telegram', icon: 'fa-brands fa-telegram', color: '#26a5e4' },
	reddit: { label: 'Reddit', icon: 'fa-brands fa-reddit-alien', color: '#ff4500' },
	threads: { label: 'Threads', icon: 'fa-brands fa-threads', color: '#000000' },
	tumblr: { label: 'Tumblr', icon: 'fa-brands fa-tumblr', color: '#36465d' },
	pocket: { label: 'Pocket', icon: 'fa-brands fa-get-pocket', color: '#ef4056' },
	email: { label: __( 'Email', 'blockive-premium-addon-for-block-pro' ), icon: 'fa-solid fa-envelope', color: '#6b7280' },
	copy: { label: __( 'Copy Link', 'blockive-premium-addon-for-block-pro' ), icon: 'fa-solid fa-link', color: '#4b5563' },
	print: { label: __( 'Print', 'blockive-premium-addon-for-block-pro' ), icon: 'fa-solid fa-print', color: '#374151' },
	native: { label: __( 'Share', 'blockive-premium-addon-for-block-pro' ), icon: 'fa-solid fa-share-nodes', color: '#4f46e5' },
};
