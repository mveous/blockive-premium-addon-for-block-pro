/**
 * Replaces the free plugin's 18 client-only WooCommerce "(Pro)" teaser
 * blocks (registered unconditionally by src/template-blocks/pro-teasers in
 * the free plugin, since it has no way to know whether Pro's real versions
 * exist) with real, server-rendered blocks - see class-bpafb-pro-woo-blocks.php
 * for the render side.
 *
 * This bundle is enqueued with an explicit dependency on the free plugin's
 * `bpafb-template-blocks` handle (which registers those teasers), so it is
 * guaranteed to run after them regardless of enqueue order, and unregisters
 * each teaser immediately before registering the real block in its place.
 */
import { registerBlockType, unregisterBlockType, getBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { createDynamicBlockEdit } from '../pro-dynamic-blocks-shared/dynamic-block-edit';

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
];

BLOCKS.forEach( ( { slug, title, icon } ) => {
	const name = NAME_PREFIX + slug;

	if ( getBlockType( name ) ) {
		unregisterBlockType( name );
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
