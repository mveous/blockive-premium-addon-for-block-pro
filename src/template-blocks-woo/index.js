/**
 * Replaces the free plugin's 18 locked WooCommerce "(Pro)" placeholder
 * blocks with the real, working ones - see class-bpafb-pro-woo-blocks.php
 * for the server-side code.
 *
 * This file is loaded with a set dependency on the free plugin's
 * `bpafb-template-blocks` file (which registers those placeholders), so it
 * always runs after them. It removes each placeholder first, then decides
 * whether to add the real block, based on `bpafbProWooBlocks.active` (sent
 * from PHP, from `class_exists('WooCommerce')`). The placeholder is always
 * removed, but the real block only takes its place when WooCommerce is
 * actually installed.
 */
import { registerBlockType, unregisterBlockType, getBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { createDynamicBlockEdit } from '../pro-dynamic-blocks-shared/dynamic-block-edit';

const WOOCOMMERCE_ACTIVE = !! window.bpafbProWooBlocks?.active;

const NAME_PREFIX = 'blockive-premium-addon-for-block/tb-';

const BLOCKS = [
	{ slug: 'product-title', title: __( 'Product Title', 'blockive-premium-addon-for-block-pro' ), icon: 'editor-textcolor' },
	{ slug: 'product-gallery', title: __( 'Product Gallery', 'blockive-premium-addon-for-block-pro' ), icon: 'format-gallery' },
	{ slug: 'product-images', title: __( 'Product Images', 'blockive-premium-addon-for-block-pro' ), icon: 'format-image' },
	{ slug: 'product-price', title: __( 'Product Price', 'blockive-premium-addon-for-block-pro' ), icon: 'tag' },
	{ slug: 'product-sale-badge', title: __( 'Sale Badge', 'blockive-premium-addon-for-block-pro' ), icon: 'megaphone' },
	{ slug: 'product-rating', title: __( 'Product Rating', 'blockive-premium-addon-for-block-pro' ), icon: 'star-filled' },
	{ slug: 'product-add-to-cart', title: __( 'Add To Cart', 'blockive-premium-addon-for-block-pro' ), icon: 'cart' },
	{ slug: 'product-sku', title: __( 'Product SKU', 'blockive-premium-addon-for-block-pro' ), icon: 'id' },
	{ slug: 'product-stock', title: __( 'Product Stock', 'blockive-premium-addon-for-block-pro' ), icon: 'clipboard' },
	{ slug: 'product-short-description', title: __( 'Product Short Description', 'blockive-premium-addon-for-block-pro' ), icon: 'editor-alignleft' },
	{ slug: 'product-description', title: __( 'Product Description', 'blockive-premium-addon-for-block-pro' ), icon: 'editor-justify' },
	{ slug: 'product-attributes', title: __( 'Product Attributes', 'blockive-premium-addon-for-block-pro' ), icon: 'list-view' },
	{ slug: 'product-meta', title: __( 'Product Meta', 'blockive-premium-addon-for-block-pro' ), icon: 'list-view' },
	{ slug: 'product-tabs', title: __( 'Product Tabs', 'blockive-premium-addon-for-block-pro' ), icon: 'index-card' },
	{ slug: 'product-variations', title: __( 'Product Variations', 'blockive-premium-addon-for-block-pro' ), icon: 'screenoptions' },
	{ slug: 'product-related', title: __( 'Related Products', 'blockive-premium-addon-for-block-pro' ), icon: 'grid-view' },
	{ slug: 'product-upsells', title: __( 'Upsells', 'blockive-premium-addon-for-block-pro' ), icon: 'arrow-up-alt' },
	{ slug: 'product-cross-sells', title: __( 'Cross Sells', 'blockive-premium-addon-for-block-pro' ), icon: 'randomize' },
	{ slug: 'woo-breadcrumb', title: __( 'WooCommerce Breadcrumb', 'blockive-premium-addon-for-block-pro' ), icon: 'arrow-right-alt2' },
	{ slug: 'woo-notices', title: __( 'Store Notices', 'blockive-premium-addon-for-block-pro' ), icon: 'info-outline' },
	{ slug: 'product-category-image', title: __( 'Category Image', 'blockive-premium-addon-for-block-pro' ), icon: 'format-image' },
	{ slug: 'shop-archive-description', title: __( 'Shop Archive Description', 'blockive-premium-addon-for-block-pro' ), icon: 'editor-alignleft' },
];

BLOCKS.forEach( ( { slug, title, icon } ) => {
	const name = NAME_PREFIX + slug;

	if ( getBlockType( name ) ) {
		unregisterBlockType( name );
	}

	if ( ! WOOCOMMERCE_ACTIVE ) {
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
