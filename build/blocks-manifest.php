<?php
// This file is generated. Do not modify it manually.
return array(
	'accordion' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/accordion',
		'version' => '0.1.0',
		'title' => 'Accordion',
		'category' => 'bpafb-widgets',
		'icon' => 'list-view',
		'description' => 'Accordion block with advanced layout and style settings.',
		'example' => array(
			
		),
		'attributes' => array(
			'items' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => '1',
						'title' => 'Accordion Item 1',
						'content' => 'Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
					),
					array(
						'id' => '2',
						'title' => 'Accordion Item 2',
						'content' => 'Click edit button to change this text. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
					)
				)
			),
			'icon' => array(
				'type' => 'string',
				'default' => 'plus-minus'
			),
			'iconAlign' => array(
				'type' => 'string',
				'default' => 'right'
			),
			'titleColor' => array(
				'type' => 'string',
				'default' => '#0f172a'
			),
			'titleActiveColor' => array(
				'type' => 'string',
				'default' => '#4f46e5'
			),
			'titleBgColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'contentColor' => array(
				'type' => 'string',
				'default' => '#334155'
			),
			'contentBgColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'borderColor' => array(
				'type' => 'string',
				'default' => '#e2e8f0'
			),
			'borderWidth' => array(
				'type' => 'number',
				'default' => 0
			),
			'borderType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'borderRadius' => array(
				'type' => 'number',
				'default' => 12
			),
			'titleFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleFontSize' => array(
				'type' => 'number',
				'default' => null
			),
			'titleFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleLineHeight' => array(
				'type' => 'number',
				'default' => null
			),
			'titleLetterSpacing' => array(
				'type' => 'number',
				'default' => null
			),
			'titleTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'boxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'shadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'shadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'shadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'hoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'hoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'hoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'hoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'animationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'animationDuration' => array(
				'type' => 'string',
				'default' => '1s'
			),
			'animationDelay' => array(
				'type' => 'string',
				'default' => '0s'
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'align' => array(
				'wide',
				'full'
			),
			'html' => false,
			'anchor' => true
		),
		'textdomain' => 'blockive-premium-addon-for-block',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./index.css',
		'viewScript' => 'file:./view.js'
	),
	'add-to-cart' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/add-to-cart',
		'version' => '1.0.0',
		'title' => 'Add to Cart Button',
		'category' => 'bpafb-widgets',
		'icon' => 'cart',
		'description' => 'An Add to Cart button for one chosen WooCommerce product, on any page.',
		'keywords' => array(
			'woocommerce',
			'cart',
			'buy',
			'button'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'example' => array(
			
		),
		'attributes' => array(
			'productId' => array(
				'type' => 'number',
				'default' => 0
			),
			'showPrice' => array(
				'type' => 'boolean',
				'default' => true
			),
			'quantity' => array(
				'type' => 'number',
				'default' => 1
			),
			'buttonAlign' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'align' => array(
				'wide',
				'full'
			)
		),
		'render' => 'file:./render.php',
		'editorScript' => 'file:./index.js'
	),
	'animated-headline' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/animated-headline',
		'version' => '1.0.0',
		'title' => 'Animated Headline',
		'category' => 'bpafb-widgets',
		'icon' => 'editor-textcolor',
		'description' => 'A headline with a hand-drawn highlight around one phrase, or words that rotate in turn.',
		'keywords' => array(
			'headline',
			'heading',
			'animated',
			'rotating',
			'typing',
			'highlight'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'example' => array(
			
		),
		'attributes' => array(
			'style' => array(
				'type' => 'string',
				'default' => 'highlight'
			),
			'beforeText' => array(
				'type' => 'string',
				'default' => 'This page is'
			),
			'highlightedText' => array(
				'type' => 'string',
				'default' => 'Amazing'
			),
			'rotatingText' => array(
				'type' => 'string',
				'default' => 'Better
Bigger
Faster'
			),
			'afterText' => array(
				'type' => 'string',
				'default' => ''
			),
			'shape' => array(
				'type' => 'string',
				'default' => 'circle'
			),
			'animation' => array(
				'type' => 'string',
				'default' => 'typing'
			),
			'tag' => array(
				'type' => 'string',
				'default' => 'h3'
			),
			'align' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'link' => array(
				'type' => 'string',
				'default' => ''
			),
			'newTab' => array(
				'type' => 'boolean',
				'default' => false
			),
			'loop' => array(
				'type' => 'boolean',
				'default' => true
			),
			'duration' => array(
				'type' => 'number',
				'default' => 1200
			),
			'delay' => array(
				'type' => 'number',
				'default' => 2500
			),
			'titleFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleFontSize' => array(
				'type' => 'number'
			),
			'titleFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleLineHeight' => array(
				'type' => 'number'
			),
			'titleLetterSpacing' => array(
				'type' => 'number'
			),
			'titleTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'wordFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'wordFontSize' => array(
				'type' => 'number'
			),
			'wordFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'wordLineHeight' => array(
				'type' => 'number'
			),
			'wordLetterSpacing' => array(
				'type' => 'number'
			),
			'wordTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'wordTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'wordColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'shapeColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'shapeWidth' => array(
				'type' => 'number',
				'default' => 9
			),
			'shapeInFront' => array(
				'type' => 'boolean',
				'default' => false
			),
			'roundedEdges' => array(
				'type' => 'boolean',
				'default' => true
			),
			'typingSelectionColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'typingCursorColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'render' => 'file:./render.php',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'editorStyle' => 'file:./index.css',
		'viewScript' => 'file:./view.js'
	),
	'blockquote' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/blockquote',
		'version' => '1.0.0',
		'title' => 'Blockquote',
		'category' => 'bpafb-widgets',
		'icon' => 'format-quote',
		'description' => 'A styled quotation with its author and an optional button to share it on X.',
		'keywords' => array(
			'quote',
			'blockquote',
			'citation',
			'tweet',
			'share'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'example' => array(
			
		),
		'attributes' => array(
			'content' => array(
				'type' => 'string',
				'default' => 'Design is not just what it looks like and feels like. Design is how it works.'
			),
			'author' => array(
				'type' => 'string',
				'default' => 'Steve Jobs'
			),
			'skin' => array(
				'type' => 'string',
				'default' => 'border'
			),
			'align' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'showTweet' => array(
				'type' => 'boolean',
				'default' => true
			),
			'tweetLabel' => array(
				'type' => 'string',
				'default' => 'Tweet'
			),
			'tweetIncludeAuthor' => array(
				'type' => 'boolean',
				'default' => true
			),
			'tweetIncludeUrl' => array(
				'type' => 'boolean',
				'default' => true
			),
			'tweetStyle' => array(
				'type' => 'string',
				'default' => 'icon-text'
			),
			'contentFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'contentFontSize' => array(
				'type' => 'number'
			),
			'contentFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'contentLineHeight' => array(
				'type' => 'number'
			),
			'contentLetterSpacing' => array(
				'type' => 'number'
			),
			'contentTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'contentTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'contentColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'authorFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'authorFontSize' => array(
				'type' => 'number'
			),
			'authorFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'authorLineHeight' => array(
				'type' => 'number'
			),
			'authorLetterSpacing' => array(
				'type' => 'number'
			),
			'authorTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'authorTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'authorColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'borderColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'borderWidth' => array(
				'type' => 'number',
				'default' => 5
			),
			'borderRadius' => array(
				'type' => 'number',
				'default' => 0
			),
			'padding' => array(
				'type' => 'number'
			),
			'quoteIconColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'quoteIconSize' => array(
				'type' => 'number',
				'default' => 60
			),
			'buttonColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonHoverBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonRadius' => array(
				'type' => 'number',
				'default' => 20
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'render' => 'file:./render.php',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'editorStyle' => 'file:./index.css'
	),
	'business-hours' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/business-hours',
		'version' => '0.1.0',
		'title' => 'Business Hours',
		'category' => 'bpafb-widgets',
		'icon' => 'clock',
		'description' => 'Business Hours block to display opening and closing times.',
		'example' => array(
			
		),
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'default' => 'Business Hours'
			),
			'hours' => array(
				'type' => 'array',
				'default' => array(
					array(
						'day' => 'monday',
						'openTime' => '09:00',
						'closeTime' => '18:00',
						'isClosed' => false,
						'closedText' => 'Closed'
					),
					array(
						'day' => 'tuesday',
						'openTime' => '09:00',
						'closeTime' => '18:00',
						'isClosed' => false,
						'closedText' => 'Closed'
					),
					array(
						'day' => 'wednesday',
						'openTime' => '09:00',
						'closeTime' => '18:00',
						'isClosed' => false,
						'closedText' => 'Closed'
					),
					array(
						'day' => 'thursday',
						'openTime' => '09:00',
						'closeTime' => '18:00',
						'isClosed' => false,
						'closedText' => 'Closed'
					),
					array(
						'day' => 'friday',
						'openTime' => '09:00',
						'closeTime' => '18:00',
						'isClosed' => false,
						'closedText' => 'Closed'
					),
					array(
						'day' => 'saturday',
						'openTime' => '10:00',
						'closeTime' => '16:00',
						'isClosed' => false,
						'closedText' => 'Closed'
					),
					array(
						'day' => 'sunday',
						'openTime' => '',
						'closeTime' => '',
						'isClosed' => true,
						'closedText' => 'Closed'
					)
				)
			),
			'highlightToday' => array(
				'type' => 'boolean',
				'default' => true
			),
			'timeFormat' => array(
				'type' => 'string',
				'default' => '24'
			),
			'titleColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'containerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'itemBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'itemTextColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'todayBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'todayTextColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'closedColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'itemBgColorHover' => array(
				'type' => 'string',
				'default' => ''
			),
			'itemTextColorHover' => array(
				'type' => 'string',
				'default' => ''
			),
			'dayFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'dayFontSize' => array(
				'type' => 'number',
				'default' => null
			),
			'dayFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'dayLineHeight' => array(
				'type' => 'number',
				'default' => null
			),
			'dayLetterSpacing' => array(
				'type' => 'number',
				'default' => null
			),
			'dayTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'dayTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'timeFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'timeFontSize' => array(
				'type' => 'number',
				'default' => null
			),
			'timeFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'timeLineHeight' => array(
				'type' => 'number',
				'default' => null
			),
			'timeLetterSpacing' => array(
				'type' => 'number',
				'default' => null
			),
			'timeTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'timeTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'borderType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'borderWidth' => array(
				'type' => 'number',
				'default' => 0
			),
			'borderRadius' => array(
				'type' => 'number',
				'default' => 8
			),
			'borderColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'boxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'shadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'shadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'shadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'hoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'hoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'hoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'hoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'align' => array(
				'wide',
				'full'
			),
			'html' => false,
			'anchor' => true
		),
		'textdomain' => 'blockive-premium-addon-for-block',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./index.css',
		'viewScript' => 'file:./view.js'
	),
	'button' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/button',
		'version' => '0.1.0',
		'title' => 'Button',
		'category' => 'bpafb-widgets',
		'icon' => 'button',
		'description' => 'A highly customizable button with icon and badge support.',
		'example' => array(
			
		),
		'attributes' => array(
			'text' => array(
				'type' => 'string',
				'default' => 'Click Here'
			),
			'url' => array(
				'type' => 'string',
				'default' => ''
			),
			'linkTarget' => array(
				'type' => 'boolean',
				'default' => false
			),
			'showIcon' => array(
				'type' => 'boolean',
				'default' => false
			),
			'icon' => array(
				'type' => 'string',
				'default' => 'fas fa-arrow-right'
			),
			'iconPosition' => array(
				'type' => 'string',
				'default' => 'right'
			),
			'badgeText' => array(
				'type' => 'string',
				'default' => ''
			),
			'alignment' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'buttonWidth' => array(
				'type' => 'string',
				'default' => 'auto'
			),
			'textColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'bgColor' => array(
				'type' => 'string',
				'default' => '#3b82f6'
			),
			'textColorHover' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'bgColorHover' => array(
				'type' => 'string',
				'default' => '#2563eb'
			),
			'badgeTextColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'badgeBgColor' => array(
				'type' => 'string',
				'default' => '#ef4444'
			),
			'iconSpacing' => array(
				'type' => 'number',
				'default' => 8
			),
			'fontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'fontSize' => array(
				'type' => 'number',
				'default' => null
			),
			'fontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'lineHeight' => array(
				'type' => 'number',
				'default' => null
			),
			'letterSpacing' => array(
				'type' => 'number',
				'default' => null
			),
			'textTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'textDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'borderType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'borderWidth' => array(
				'type' => 'number',
				'default' => 0
			),
			'borderRadius' => array(
				'type' => 'number',
				'default' => 4
			),
			'borderColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'borderColorHover' => array(
				'type' => 'string',
				'default' => ''
			),
			'boxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'shadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'shadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'shadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'hoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'hoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'hoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'hoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'align' => array(
				'wide',
				'full'
			),
			'html' => false,
			'anchor' => true
		),
		'textdomain' => 'blockive-premium-addon-for-block',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./index.css'
	),
	'call-to-action' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/call-to-action',
		'version' => '1.0.0',
		'title' => 'Call to Action',
		'category' => 'bpafb-widgets',
		'icon' => 'megaphone',
		'description' => 'An eye-catching box with image, heading, text, and button - classic side-by-side or text over a cover image.',
		'keywords' => array(
			'cta',
			'call to action',
			'banner',
			'promo',
			'box'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'example' => array(
			
		),
		'attributes' => array(
			'skin' => array(
				'type' => 'string',
				'default' => 'classic'
			),
			'imagePosition' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'imageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'imageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'imageAlt' => array(
				'type' => 'string',
				'default' => ''
			),
			'imageWidth' => array(
				'type' => 'number',
				'default' => 50
			),
			'imageMinHeight' => array(
				'type' => 'number',
				'default' => 260
			),
			'graphic' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'icon' => array(
				'type' => 'string',
				'default' => 'fa-solid fa-bolt'
			),
			'iconSize' => array(
				'type' => 'number',
				'default' => 44
			),
			'iconColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'title' => array(
				'type' => 'string',
				'default' => 'This is the heading'
			),
			'titleTag' => array(
				'type' => 'string',
				'default' => 'h2'
			),
			'description' => array(
				'type' => 'string',
				'default' => 'Click here to edit the description. Tell visitors why they should act now.'
			),
			'buttonText' => array(
				'type' => 'string',
				'default' => 'Click Here'
			),
			'link' => array(
				'type' => 'string',
				'default' => ''
			),
			'linkNewTab' => array(
				'type' => 'boolean',
				'default' => false
			),
			'linkWholeBox' => array(
				'type' => 'boolean',
				'default' => false
			),
			'ribbonText' => array(
				'type' => 'string',
				'default' => ''
			),
			'ribbonPosition' => array(
				'type' => 'string',
				'default' => 'right'
			),
			'ribbonBg' => array(
				'type' => 'string',
				'default' => ''
			),
			'ribbonColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'contentAlign' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'verticalAlign' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'minHeight' => array(
				'type' => 'number'
			),
			'padding' => array(
				'type' => 'number',
				'default' => 40
			),
			'borderRadius' => array(
				'type' => 'number',
				'default' => 0
			),
			'contentBg' => array(
				'type' => 'string',
				'default' => ''
			),
			'overlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'overlayHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'hoverEffect' => array(
				'type' => 'string',
				'default' => 'zoom-in'
			),
			'titleFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleFontSize' => array(
				'type' => 'number'
			),
			'titleFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleLineHeight' => array(
				'type' => 'number'
			),
			'titleLetterSpacing' => array(
				'type' => 'number'
			),
			'titleTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'descFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'descFontSize' => array(
				'type' => 'number'
			),
			'descFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'descLineHeight' => array(
				'type' => 'number'
			),
			'descLetterSpacing' => array(
				'type' => 'number'
			),
			'descTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'descTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'descColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonHoverBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonRadius' => array(
				'type' => 'number',
				'default' => 4
			),
			'buttonStyle' => array(
				'type' => 'string',
				'default' => 'filled'
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'render' => 'file:./render.php',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'editorStyle' => 'file:./index.css'
	),
	'category-list' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/category-list',
		'version' => '0.1.0',
		'title' => 'Category List',
		'category' => 'bpafb-widgets',
		'icon' => 'list-view',
		'description' => 'WordPress category browser/list block.',
		'supports' => array(
			'color' => array(
				'text' => true,
				'background' => false,
				'link' => true
			),
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true
			),
			'anchor' => true
		),
		'example' => array(
			
		),
		'attributes' => array(
			'showCount' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showDescription' => array(
				'type' => 'boolean',
				'default' => false
			),
			'hideEmpty' => array(
				'type' => 'boolean',
				'default' => true
			),
			'limit' => array(
				'type' => 'number',
				'default' => 10
			),
			'orderBy' => array(
				'type' => 'string',
				'default' => 'name'
			),
			'order' => array(
				'type' => 'string',
				'default' => 'asc'
			),
			'excludeTerms' => array(
				'type' => 'string',
				'default' => ''
			),
			'layoutType' => array(
				'type' => 'string',
				'default' => 'vertical'
			),
			'showHierarchy' => array(
				'type' => 'boolean',
				'default' => false
			),
			'gap' => array(
				'type' => 'number',
				'default' => 20
			),
			'enableLink' => array(
				'type' => 'boolean',
				'default' => true
			),
			'itemBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'itemBorderColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'itemBorderWidth' => array(
				'type' => 'number',
				'default' => 0
			),
			'itemBorderRadius' => array(
				'type' => 'number',
				'default' => 0
			),
			'columns' => array(
				'type' => 'number',
				'default' => 3
			),
			'itemPadding' => array(
				'type' => 'number',
				'default' => 10
			),
			'textAlign' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'enableBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'removeChildBorder' => array(
				'type' => 'boolean',
				'default' => false
			),
			'taxonomy' => array(
				'type' => 'string',
				'default' => 'category'
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'render' => 'file:./render.php',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./index.css'
	),
	'code-highlight' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/code-highlight',
		'version' => '1.0.0',
		'title' => 'Code Highlight',
		'category' => 'bpafb-widgets',
		'icon' => 'editor-code',
		'description' => 'Code with syntax coloring, line numbers, highlighted lines, and a copy button.',
		'keywords' => array(
			'code',
			'syntax',
			'highlight',
			'snippet',
			'prism',
			'pre'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'example' => array(
			
		),
		'attributes' => array(
			'code' => array(
				'type' => 'string',
				'default' => 'function greet( name ) {
	// Say hello to someone.
	const message = `Hello, ${ name }!`;
	console.log( message );
	return message.length;
}

greet( \'World\' );'
			),
			'language' => array(
				'type' => 'string',
				'default' => 'javascript'
			),
			'title' => array(
				'type' => 'string',
				'default' => ''
			),
			'theme' => array(
				'type' => 'string',
				'default' => 'dark'
			),
			'lineNumbers' => array(
				'type' => 'boolean',
				'default' => true
			),
			'copyButton' => array(
				'type' => 'boolean',
				'default' => true
			),
			'highlightLines' => array(
				'type' => 'string',
				'default' => ''
			),
			'wordWrap' => array(
				'type' => 'boolean',
				'default' => false
			),
			'maxHeight' => array(
				'type' => 'number',
				'default' => 0
			),
			'fontSize' => array(
				'type' => 'number',
				'default' => 14
			),
			'borderRadius' => array(
				'type' => 'number',
				'default' => 8
			),
			'highlightColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'align' => array(
				'wide',
				'full'
			)
		),
		'render' => 'file:./render.php',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'editorStyle' => 'file:./index.css',
		'viewScript' => 'file:./view.js'
	),
	'contact-form-7' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/contact-form-7',
		'version' => '0.1.0',
		'title' => 'Contact Form 7',
		'category' => 'bpafb-widgets',
		'icon' => 'email-alt',
		'description' => 'Contact Form 7 integration block.',
		'supports' => array(
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true
			),
			'anchor' => true
		),
		'example' => array(
			
		),
		'attributes' => array(
			'formId' => array(
				'type' => 'string',
				'default' => ''
			),
			'showTitle' => array(
				'type' => 'boolean',
				'default' => true
			),
			'title' => array(
				'type' => 'string',
				'default' => 'Contact Us'
			),
			'description' => array(
				'type' => 'string',
				'default' => 'Send us a message'
			),
			'titleColor' => array(
				'type' => 'string'
			),
			'descriptionColor' => array(
				'type' => 'string'
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'editorScript' => 'file:./index.js',
		'style' => 'file:./index.css'
	),
	'container' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/container',
		'version' => '1.0.0',
		'title' => 'Container',
		'category' => 'bpafb-widgets',
		'icon' => 'layout',
		'description' => 'A flexbox container that lays out any nested blocks - direction, wrap, gap, and alignment, all responsive.',
		'keywords' => array(
			'container',
			'flex',
			'flexbox',
			'row',
			'column',
			'wrapper',
			'group',
			'section'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'example' => array(
			
		),
		'attributes' => array(
			'tagName' => array(
				'type' => 'string',
				'default' => 'div'
			),
			'direction' => array(
				'type' => 'string',
				'default' => 'row'
			),
			'directionTablet' => array(
				'type' => 'string',
				'default' => ''
			),
			'directionMobile' => array(
				'type' => 'string',
				'default' => ''
			),
			'wrap' => array(
				'type' => 'string',
				'default' => 'nowrap'
			),
			'justifyContent' => array(
				'type' => 'string',
				'default' => 'flex-start'
			),
			'alignItems' => array(
				'type' => 'string',
				'default' => 'stretch'
			),
			'gap' => array(
				'type' => 'number',
				'default' => 16
			),
			'gapTablet' => array(
				'type' => 'number'
			),
			'gapMobile' => array(
				'type' => 'number'
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'render' => 'file:./render.php',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css'
	),
	'countdown-timer' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/countdown-timer',
		'version' => '0.1.0',
		'title' => 'Countdown Timer',
		'category' => 'bpafb-widgets',
		'icon' => 'clock',
		'description' => 'A customizable countdown timer block with rich styling settings.',
		'example' => array(
			'attributes' => array(
				'timerType' => 'evergreen',
				'evergreenHours' => 50
			)
		),
		'attributes' => array(
			'targetDate' => array(
				'type' => 'string',
				'default' => ''
			),
			'timerType' => array(
				'type' => 'string',
				'default' => 'due'
			),
			'targetTimestamp' => array(
				'type' => 'number'
			),
			'evergreenHours' => array(
				'type' => 'number',
				'default' => 24
			),
			'evergreenMinutes' => array(
				'type' => 'number',
				'default' => 0
			),
			'evergreenId' => array(
				'type' => 'string',
				'default' => ''
			),
			'expireAction' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'expireMessage' => array(
				'type' => 'string',
				'default' => ''
			),
			'expireRedirect' => array(
				'type' => 'string',
				'default' => ''
			),
			'showDays' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showHours' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showMinutes' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showSeconds' => array(
				'type' => 'boolean',
				'default' => true
			),
			'labelDays' => array(
				'type' => 'string',
				'default' => 'Days'
			),
			'labelHours' => array(
				'type' => 'string',
				'default' => 'Hours'
			),
			'labelMinutes' => array(
				'type' => 'string',
				'default' => 'Minutes'
			),
			'labelSeconds' => array(
				'type' => 'string',
				'default' => 'Seconds'
			),
			'styleType' => array(
				'type' => 'string',
				'default' => 'block'
			),
			'boxBgColor' => array(
				'type' => 'string',
				'default' => '#f1f5f9'
			),
			'boxBorderColor' => array(
				'type' => 'string',
				'default' => '#e2e8f0'
			),
			'boxBorderWidth' => array(
				'type' => 'number',
				'default' => 1
			),
			'boxBorderRadius' => array(
				'type' => 'number',
				'default' => 8
			),
			'numberColor' => array(
				'type' => 'string',
				'default' => '#0f172a'
			),
			'labelColor' => array(
				'type' => 'string',
				'default' => '#64748b'
			),
			'gap' => array(
				'type' => 'number',
				'default' => 20
			),
			'alignment' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'animationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'animationDuration' => array(
				'type' => 'string',
				'default' => '1s'
			),
			'animationDelay' => array(
				'type' => 'string',
				'default' => '0s'
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'align' => array(
				'wide',
				'full'
			),
			'html' => false,
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true,
				'__experimentalFontFamily' => true,
				'__experimentalDefaultControls' => array(
					'fontSize' => true
				)
			),
			'anchor' => true
		),
		'textdomain' => 'blockive-premium-addon-for-block',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./index.css',
		'viewScript' => 'file:./view.js'
	),
	'drop-caps' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/drop-caps',
		'version' => '0.1.0',
		'title' => 'Drop Caps',
		'category' => 'bpafb-widgets',
		'icon' => 'editor-textcolor',
		'description' => 'Advanced drop caps block with customizable view, shape, and styling.',
		'example' => array(
			
		),
		'attributes' => array(
			'content' => array(
				'type' => 'string',
				'default' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
			),
			'view' => array(
				'type' => 'string',
				'default' => 'default'
			),
			'shape' => array(
				'type' => 'string',
				'default' => 'square'
			),
			'primaryColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'secondaryColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'size' => array(
				'type' => 'number',
				'default' => 50
			),
			'space' => array(
				'type' => 'number',
				'default' => 10
			),
			'borderWidth' => array(
				'type' => 'number',
				'default' => 0
			),
			'borderRadius' => array(
				'type' => 'number',
				'default' => 0
			),
			'dropCapPadding' => array(
				'type' => 'number',
				'default' => 10
			),
			'alignment' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'fontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'fontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'lineHeight' => array(
				'type' => 'number',
				'default' => null
			),
			'letterSpacing' => array(
				'type' => 'number',
				'default' => null
			),
			'textTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'textDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'borderType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'boxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'shadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'shadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'shadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'hoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'hoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'hoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'hoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'align' => array(
				'wide',
				'full'
			),
			'html' => false,
			'anchor' => true
		),
		'textdomain' => 'blockive-premium-addon-for-block',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./index.css'
	),
	'facebook-embed' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/facebook-embed',
		'version' => '1.0.0',
		'title' => 'Facebook Embed',
		'category' => 'bpafb-widgets',
		'icon' => 'facebook',
		'description' => 'A Facebook page, post, video, or Like button, loaded only after the visitor agrees.',
		'keywords' => array(
			'facebook',
			'embed',
			'social',
			'like',
			'page'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'example' => array(
			
		),
		'attributes' => array(
			'embedType' => array(
				'type' => 'string',
				'default' => 'post'
			),
			'url' => array(
				'type' => 'string',
				'default' => ''
			),
			'width' => array(
				'type' => 'number',
				'default' => 500
			),
			'height' => array(
				'type' => 'number',
				'default' => 0
			),
			'pageTabs' => array(
				'type' => 'array',
				'items' => array(
					'type' => 'string'
				),
				'default' => array(
					'timeline'
				)
			),
			'smallHeader' => array(
				'type' => 'boolean',
				'default' => false
			),
			'hideCover' => array(
				'type' => 'boolean',
				'default' => false
			),
			'showFacepile' => array(
				'type' => 'boolean',
				'default' => true
			),
			'likeLayout' => array(
				'type' => 'string',
				'default' => 'button_count'
			),
			'likeAction' => array(
				'type' => 'string',
				'default' => 'like'
			),
			'likeSize' => array(
				'type' => 'string',
				'default' => 'small'
			),
			'likeShare' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showText' => array(
				'type' => 'boolean',
				'default' => true
			),
			'clickToLoad' => array(
				'type' => 'boolean',
				'default' => true
			),
			'consentText' => array(
				'type' => 'string',
				'default' => ''
			),
			'embedAlign' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'render' => 'file:./render.php',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'faq' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/faq',
		'version' => '0.1.0',
		'title' => 'FAQ',
		'category' => 'bpafb-widgets',
		'icon' => 'editor-help',
		'description' => 'FAQ block with rich schema.org markup for SEO, based on accordion behavior.',
		'example' => array(
			
		),
		'attributes' => array(
			'items' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => '1',
						'title' => 'Frequently Asked Question 1',
						'content' => 'Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
					),
					array(
						'id' => '2',
						'title' => 'Frequently Asked Question 2',
						'content' => 'Click edit button to change this text. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
					)
				)
			),
			'icon' => array(
				'type' => 'string',
				'default' => 'plus-minus'
			),
			'iconAlign' => array(
				'type' => 'string',
				'default' => 'right'
			),
			'titleColor' => array(
				'type' => 'string',
				'default' => '#0f172a'
			),
			'titleActiveColor' => array(
				'type' => 'string',
				'default' => '#4f46e5'
			),
			'titleBgColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'contentColor' => array(
				'type' => 'string',
				'default' => '#334155'
			),
			'contentBgColor' => array(
				'type' => 'string',
				'default' => '#f8fafc'
			),
			'borderColor' => array(
				'type' => 'string',
				'default' => '#e2e8f0'
			),
			'borderWidth' => array(
				'type' => 'number',
				'default' => 0
			),
			'borderType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'borderRadius' => array(
				'type' => 'number',
				'default' => 0
			),
			'titleColorHover' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleBgColorHover' => array(
				'type' => 'string',
				'default' => ''
			),
			'questionFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'questionFontSize' => array(
				'type' => 'number',
				'default' => null
			),
			'questionFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'questionLineHeight' => array(
				'type' => 'number',
				'default' => null
			),
			'questionLetterSpacing' => array(
				'type' => 'number',
				'default' => null
			),
			'questionTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'questionTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'boxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'shadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'shadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'shadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'hoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'hoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'hoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'hoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'animationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'animationDuration' => array(
				'type' => 'string',
				'default' => '1s'
			),
			'animationDelay' => array(
				'type' => 'string',
				'default' => '0s'
			),
			'titleTag' => array(
				'type' => 'string',
				'default' => 'span'
			),
			'headingText' => array(
				'type' => 'string',
				'default' => 'Ask you question'
			),
			'headingTag' => array(
				'type' => 'string',
				'default' => 'h2'
			),
			'headingAlign' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'headingColor' => array(
				'type' => 'string',
				'default' => '#0f172a'
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'align' => array(
				'wide',
				'full'
			),
			'html' => false,
			'anchor' => true
		),
		'textdomain' => 'blockive-premium-addon-for-block',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./index.css',
		'viewScript' => 'file:./view.js'
	),
	'flip-box' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/flip-box',
		'version' => '1.0.0',
		'title' => 'Flip Box',
		'category' => 'bpafb-widgets',
		'icon' => 'image-flip-horizontal',
		'description' => 'A two-sided box that flips, slides, or fades to reveal the back on hover, focus, or tap.',
		'keywords' => array(
			'flip',
			'flip box',
			'card',
			'hover',
			'reveal'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'example' => array(
			
		),
		'attributes' => array(
			'frontGraphic' => array(
				'type' => 'string',
				'default' => 'icon'
			),
			'frontIcon' => array(
				'type' => 'string',
				'default' => 'fa-solid fa-star'
			),
			'frontImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'frontImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'frontTitle' => array(
				'type' => 'string',
				'default' => 'This is the heading'
			),
			'frontDesc' => array(
				'type' => 'string',
				'default' => 'Hover or tap to see the other side.'
			),
			'frontBg' => array(
				'type' => 'string',
				'default' => ''
			),
			'frontBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'frontBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'frontOverlay' => array(
				'type' => 'string',
				'default' => ''
			),
			'frontColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'backTitle' => array(
				'type' => 'string',
				'default' => 'This is the back'
			),
			'backDesc' => array(
				'type' => 'string',
				'default' => 'Add a short description and a button that takes visitors further.'
			),
			'buttonText' => array(
				'type' => 'string',
				'default' => 'Learn More'
			),
			'link' => array(
				'type' => 'string',
				'default' => ''
			),
			'linkNewTab' => array(
				'type' => 'boolean',
				'default' => false
			),
			'linkType' => array(
				'type' => 'string',
				'default' => 'button'
			),
			'backBg' => array(
				'type' => 'string',
				'default' => ''
			),
			'backBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'backBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'backOverlay' => array(
				'type' => 'string',
				'default' => ''
			),
			'backColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'effect' => array(
				'type' => 'string',
				'default' => 'flip'
			),
			'direction' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'height' => array(
				'type' => 'number',
				'default' => 300
			),
			'heightMobile' => array(
				'type' => 'number'
			),
			'radius' => array(
				'type' => 'number',
				'default' => 8
			),
			'padding' => array(
				'type' => 'number',
				'default' => 30
			),
			'contentAlign' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'verticalAlign' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'iconSize' => array(
				'type' => 'number',
				'default' => 48
			),
			'iconColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'duration' => array(
				'type' => 'number',
				'default' => 600
			),
			'titleFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleFontSize' => array(
				'type' => 'number'
			),
			'titleFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleLineHeight' => array(
				'type' => 'number'
			),
			'titleLetterSpacing' => array(
				'type' => 'number'
			),
			'titleTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'descFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'descFontSize' => array(
				'type' => 'number'
			),
			'descFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'descLineHeight' => array(
				'type' => 'number'
			),
			'descLetterSpacing' => array(
				'type' => 'number'
			),
			'descTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'descTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonHoverBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonRadius' => array(
				'type' => 'number',
				'default' => 4
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'render' => 'file:./render.php',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'editorStyle' => 'file:./index.css',
		'viewScript' => 'file:./view.js'
	),
	'floating-buttons' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/floating-buttons',
		'version' => '1.0.0',
		'title' => 'Floating Buttons',
		'category' => 'bpafb-widgets',
		'icon' => 'format-chat',
		'description' => 'A contact button fixed in a corner of the window: WhatsApp, phone, email, Telegram, Messenger, and more.',
		'keywords' => array(
			'whatsapp',
			'contact',
			'floating',
			'chat',
			'call'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'example' => array(
			'attributes' => array(
				'channels' => array(
					array(
						'type' => 'whatsapp',
						'value' => '+15550100',
						'label' => '',
						'message' => ''
					),
					array(
						'type' => 'email',
						'value' => 'hello@example.com',
						'label' => '',
						'message' => ''
					)
				),
				'mainLabel' => 'Contact us',
				'showMainLabel' => true
			)
		),
		'attributes' => array(
			'channels' => array(
				'type' => 'array',
				'default' => array(
					array(
						'type' => 'whatsapp',
						'value' => '',
						'label' => '',
						'message' => ''
					)
				)
			),
			'position' => array(
				'type' => 'string',
				'default' => 'bottom-right'
			),
			'mainLabel' => array(
				'type' => 'string',
				'default' => ''
			),
			'mainIcon' => array(
				'type' => 'string',
				'default' => ''
			),
			'showMainLabel' => array(
				'type' => 'boolean',
				'default' => false
			),
			'showLabels' => array(
				'type' => 'boolean',
				'default' => true
			),
			'colorMode' => array(
				'type' => 'string',
				'default' => 'brand'
			),
			'channelColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'mainBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'mainColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'size' => array(
				'type' => 'number',
				'default' => 56
			),
			'offsetX' => array(
				'type' => 'number',
				'default' => 20
			),
			'offsetY' => array(
				'type' => 'number',
				'default' => 20
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'multiple' => true
		),
		'render' => 'file:./render.php',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'form' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/form',
		'version' => '1.0.0',
		'title' => 'Form',
		'category' => 'bpafb-widgets',
		'icon' => 'feedback',
		'description' => 'A contact or lead form: fields, email notifications, saved submissions, redirect, and webhook, with built-in spam protection.',
		'keywords' => array(
			'form',
			'contact',
			'email',
			'lead',
			'submission',
			'subscribe'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'example' => array(
			
		),
		'attributes' => array(
			'formId' => array(
				'type' => 'string',
				'default' => ''
			),
			'formName' => array(
				'type' => 'string',
				'default' => 'Contact form'
			),
			'fields' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => 'name',
						'type' => 'text',
						'label' => 'Name',
						'required' => true,
						'width' => '50'
					),
					array(
						'id' => 'email',
						'type' => 'email',
						'label' => 'Email',
						'required' => true,
						'width' => '50'
					),
					array(
						'id' => 'message',
						'type' => 'textarea',
						'label' => 'Message',
						'required' => true,
						'width' => '100',
						'rows' => 5
					)
				)
			),
			'submitText' => array(
				'type' => 'string',
				'default' => 'Send'
			),
			'buttonAlign' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'showLabels' => array(
				'type' => 'boolean',
				'default' => true
			),
			'requiredMark' => array(
				'type' => 'boolean',
				'default' => true
			),
			'actionSave' => array(
				'type' => 'boolean',
				'default' => true
			),
			'actionEmail' => array(
				'type' => 'boolean',
				'default' => true
			),
			'emailTo' => array(
				'type' => 'string',
				'default' => ''
			),
			'emailSubject' => array(
				'type' => 'string',
				'default' => ''
			),
			'emailMessage' => array(
				'type' => 'string',
				'default' => '[all-fields]'
			),
			'actionRedirect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'redirectUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'actionWebhook' => array(
				'type' => 'boolean',
				'default' => false
			),
			'webhookUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'successMessage' => array(
				'type' => 'string',
				'default' => 'Thanks! Your message has been sent.'
			),
			'errorMessage' => array(
				'type' => 'string',
				'default' => 'Something went wrong. Please try again.'
			),
			'requiredMessage' => array(
				'type' => 'string',
				'default' => 'This field is required.'
			),
			'columnGap' => array(
				'type' => 'number',
				'default' => 16
			),
			'rowGap' => array(
				'type' => 'number',
				'default' => 16
			),
			'labelColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'fieldColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'fieldBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'fieldBorderColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'fieldFocusColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'fieldRadius' => array(
				'type' => 'number',
				'default' => 4
			),
			'buttonColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonHoverBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonRadius' => array(
				'type' => 'number',
				'default' => 4
			),
			'labelFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'labelFontSize' => array(
				'type' => 'number'
			),
			'labelFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'labelLineHeight' => array(
				'type' => 'number'
			),
			'labelLetterSpacing' => array(
				'type' => 'number'
			),
			'labelTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'labelTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'fieldFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'fieldFontSize' => array(
				'type' => 'number'
			),
			'fieldFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'fieldLineHeight' => array(
				'type' => 'number'
			),
			'fieldLetterSpacing' => array(
				'type' => 'number'
			),
			'fieldTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'fieldTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => false
		),
		'render' => 'file:./render.php',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'editorStyle' => 'file:./index.css',
		'viewScript' => 'file:./view.js'
	),
	'funfact' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/funfact',
		'version' => '0.1.0',
		'title' => 'Fun Fact',
		'category' => 'bpafb-widgets',
		'icon' => 'chart-bar',
		'description' => 'Animated statistics/counter block.',
		'example' => array(
			
		),
		'attributes' => array(
			'items' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => '1',
						'number' => '1000',
						'prefix' => '',
						'suffix' => '+',
						'title' => 'Happy Clients'
					),
					array(
						'id' => '2',
						'number' => '120',
						'prefix' => '',
						'suffix' => '',
						'title' => 'Awards Won'
					),
					array(
						'id' => '3',
						'number' => '500',
						'prefix' => '',
						'suffix' => '+',
						'title' => 'Projects Completed'
					)
				)
			),
			'columns' => array(
				'type' => 'number',
				'default' => 3
			),
			'numberColor' => array(
				'type' => 'string',
				'default' => '#4f46e5'
			),
			'textColor' => array(
				'type' => 'string',
				'default' => '#333333'
			),
			'duration' => array(
				'type' => 'number',
				'default' => 1000
			),
			'gap' => array(
				'type' => 'number',
				'default' => 20
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'editorScript' => 'file:./index.js',
		'style' => 'file:./index.css',
		'viewScript' => 'file:./view.js',
		'supports' => array(
			'anchor' => true
		)
	),
	'gallery' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/gallery',
		'version' => '1.0.0',
		'title' => 'Gallery',
		'category' => 'bpafb-widgets',
		'icon' => 'format-gallery',
		'description' => 'An image gallery in a grid, masonry, or justified layout, with filter tabs and a lightbox.',
		'keywords' => array(
			'gallery',
			'images',
			'masonry',
			'justified',
			'lightbox',
			'filter',
			'portfolio'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'example' => array(
			
		),
		'attributes' => array(
			'galleries' => array(
				'type' => 'array',
				'default' => array(
					array(
						'title' => 'Gallery 1',
						'images' => array(
							
						)
					)
				)
			),
			'layout' => array(
				'type' => 'string',
				'default' => 'grid'
			),
			'columns' => array(
				'type' => 'number',
				'default' => 4
			),
			'columnsTablet' => array(
				'type' => 'number',
				'default' => 2
			),
			'columnsMobile' => array(
				'type' => 'number',
				'default' => 1
			),
			'gap' => array(
				'type' => 'number',
				'default' => 10
			),
			'aspectRatio' => array(
				'type' => 'string',
				'default' => '1/1'
			),
			'rowHeight' => array(
				'type' => 'number',
				'default' => 220
			),
			'rowHeightTablet' => array(
				'type' => 'number'
			),
			'rowHeightMobile' => array(
				'type' => 'number'
			),
			'imageSize' => array(
				'type' => 'string',
				'default' => 'medium_large'
			),
			'onClick' => array(
				'type' => 'string',
				'default' => 'lightbox'
			),
			'captions' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'hoverEffect' => array(
				'type' => 'string',
				'default' => 'zoom'
			),
			'overlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'borderRadius' => array(
				'type' => 'number',
				'default' => 0
			),
			'captionFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'captionFontSize' => array(
				'type' => 'number'
			),
			'captionFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'captionLineHeight' => array(
				'type' => 'number'
			),
			'captionLetterSpacing' => array(
				'type' => 'number'
			),
			'captionTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'captionTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'captionColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'captionBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'showAllFilter' => array(
				'type' => 'boolean',
				'default' => true
			),
			'allFilterLabel' => array(
				'type' => 'string',
				'default' => 'All'
			),
			'filterAlign' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'filterFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'filterFontSize' => array(
				'type' => 'number'
			),
			'filterFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'filterLineHeight' => array(
				'type' => 'number'
			),
			'filterLetterSpacing' => array(
				'type' => 'number'
			),
			'filterTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'filterTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'filterColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'filterBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'filterActiveColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'filterActiveBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'filterRadius' => array(
				'type' => 'number',
				'default' => 20
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'align' => array(
				'wide',
				'full'
			)
		),
		'render' => 'file:./render.php',
		'editorScript' => 'file:./index.js',
		'style' => array(
			'bpafb-pro-lightbox',
			'bpafb-pro-filter-bar',
			'file:./style-index.css'
		),
		'editorStyle' => 'file:./index.css',
		'viewScript' => 'file:./view.js'
	),
	'google-maps' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/google-maps',
		'version' => '1.0.0',
		'title' => 'Google Maps',
		'category' => 'bpafb-widgets',
		'icon' => 'location-alt',
		'description' => 'Embed a Google Map for any address or place - no API key needed.',
		'keywords' => array(
			'map',
			'google maps',
			'location',
			'address',
			'contact'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'example' => array(
			
		),
		'attributes' => array(
			'address' => array(
				'type' => 'string',
				'default' => 'London Eye, London, United Kingdom'
			),
			'zoom' => array(
				'type' => 'number',
				'default' => 14
			),
			'mapType' => array(
				'type' => 'string',
				'default' => 'roadmap'
			),
			'height' => array(
				'type' => 'number',
				'default' => 400
			),
			'heightTablet' => array(
				'type' => 'number'
			),
			'heightMobile' => array(
				'type' => 'number'
			),
			'borderRadius' => array(
				'type' => 'number',
				'default' => 0
			),
			'grayscale' => array(
				'type' => 'number',
				'default' => 0
			),
			'hoverGrayscale' => array(
				'type' => 'number'
			),
			'mapTitle' => array(
				'type' => 'string',
				'default' => ''
			),
			'lazy' => array(
				'type' => 'boolean',
				'default' => true
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'render' => 'file:./render.php',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css'
	),
	'heading' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/heading',
		'version' => '0.1.0',
		'title' => 'Heading',
		'category' => 'bpafb-widgets',
		'icon' => 'heading',
		'description' => 'Advanced heading block with rich customized settings.',
		'example' => array(
			
		),
		'attributes' => array(
			'content' => array(
				'type' => 'string',
				'default' => 'Stunning Default Heading'
			),
			'alignment' => array(
				'type' => 'string',
				'default' => ''
			),
			'level' => array(
				'type' => 'number',
				'default' => 2
			),
			'link' => array(
				'type' => 'string',
				'default' => ''
			),
			'linkTarget' => array(
				'type' => 'string',
				'default' => '_self'
			),
			'textShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.2)'
			),
			'textShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'textShadowX' => array(
				'type' => 'number',
				'default' => 0
			),
			'textShadowY' => array(
				'type' => 'number',
				'default' => 10
			),
			'blendMode' => array(
				'type' => 'string',
				'default' => 'normal'
			),
			'animationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'animationDuration' => array(
				'type' => 'string',
				'default' => '1s'
			),
			'animationDelay' => array(
				'type' => 'string',
				'default' => '0s'
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'align' => array(
				'wide',
				'full'
			),
			'html' => false,
			'color' => array(
				'text' => true,
				'background' => false,
				'gradients' => false,
				'link' => true
			),
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true,
				'__experimentalFontFamily' => true,
				'__experimentalFontWeight' => true,
				'__experimentalFontStyle' => true,
				'__experimentalTextTransform' => true,
				'__experimentalTextDecoration' => true,
				'__experimentalLetterSpacing' => true,
				'__experimentalDefaultControls' => array(
					'fontSize' => true
				)
			),
			'anchor' => true
		),
		'textdomain' => 'blockive-premium-addon-for-block',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./index.css'
	),
	'hotspot' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/hotspot',
		'version' => '1.0.0',
		'title' => 'Hotspot',
		'category' => 'bpafb-widgets',
		'icon' => 'location',
		'description' => 'An image with numbered or icon pins that open a tooltip on click or hover.',
		'keywords' => array(
			'hotspot',
			'image',
			'tooltip',
			'pins',
			'map',
			'points'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'example' => array(
			
		),
		'attributes' => array(
			'imageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'imageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'alt' => array(
				'type' => 'string',
				'default' => ''
			),
			'hotspots' => array(
				'type' => 'array',
				'default' => array(
					array(
						'x' => 30,
						'y' => 40,
						'label' => '',
						'icon' => 'fa-solid fa-plus',
						'content' => 'Describe this spot here.',
						'position' => 'top',
						'link' => '',
						'newTab' => false
					),
					array(
						'x' => 65,
						'y' => 60,
						'label' => '',
						'icon' => 'fa-solid fa-plus',
						'content' => 'Add as many spots as you need.',
						'position' => 'top',
						'link' => '',
						'newTab' => false
					)
				)
			),
			'trigger' => array(
				'type' => 'string',
				'default' => 'click'
			),
			'pulse' => array(
				'type' => 'boolean',
				'default' => true
			),
			'pinSize' => array(
				'type' => 'number',
				'default' => 34
			),
			'pinIconSize' => array(
				'type' => 'number',
				'default' => 14
			),
			'pinColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'pinBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'tooltipWidth' => array(
				'type' => 'number',
				'default' => 240
			),
			'tooltipColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'tooltipBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'tooltipRadius' => array(
				'type' => 'number',
				'default' => 6
			),
			'tooltipFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'tooltipFontSize' => array(
				'type' => 'number'
			),
			'tooltipFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'tooltipLineHeight' => array(
				'type' => 'number'
			),
			'tooltipLetterSpacing' => array(
				'type' => 'number'
			),
			'tooltipTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'tooltipTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'labelFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'labelFontSize' => array(
				'type' => 'number'
			),
			'labelFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'labelLineHeight' => array(
				'type' => 'number'
			),
			'labelLetterSpacing' => array(
				'type' => 'number'
			),
			'labelTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'labelTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'align' => array(
				'wide',
				'full'
			)
		),
		'render' => 'file:./render.php',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'editorStyle' => 'file:./index.css',
		'viewScript' => 'file:./view.js'
	),
	'icon' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/icon',
		'version' => '1.0.0',
		'title' => 'Icon',
		'category' => 'bpafb-widgets',
		'icon' => 'star-filled',
		'description' => 'A single Font Awesome icon, plain, stacked on a shape, or framed, with an optional link.',
		'keywords' => array(
			'icon',
			'font awesome',
			'symbol'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'example' => array(
			
		),
		'attributes' => array(
			'icon' => array(
				'type' => 'string',
				'default' => 'fa-solid fa-star'
			),
			'view' => array(
				'type' => 'string',
				'default' => 'default'
			),
			'shape' => array(
				'type' => 'string',
				'default' => 'circle'
			),
			'align' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'size' => array(
				'type' => 'number',
				'default' => 40
			),
			'sizeTablet' => array(
				'type' => 'number'
			),
			'sizeMobile' => array(
				'type' => 'number'
			),
			'padding' => array(
				'type' => 'number',
				'default' => 20
			),
			'rotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'borderWidth' => array(
				'type' => 'number',
				'default' => 3
			),
			'borderRadius' => array(
				'type' => 'number',
				'default' => 10
			),
			'primaryColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'secondaryColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'hoverPrimaryColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'hoverSecondaryColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'link' => array(
				'type' => 'string',
				'default' => ''
			),
			'linkNewTab' => array(
				'type' => 'boolean',
				'default' => false
			),
			'linkNofollow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'ariaLabel' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'render' => 'file:./render.php',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'editorStyle' => 'file:./index.css'
	),
	'icon-box' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/icon-box',
		'version' => '0.1.0',
		'title' => 'Icon Box',
		'category' => 'bpafb-widgets',
		'icon' => 'info',
		'description' => 'An icon box that displays an icon, title, description, and link.',
		'example' => array(
			
		),
		'attributes' => array(
			'icon' => array(
				'type' => 'string',
				'default' => 'fas fa-star'
			),
			'title' => array(
				'type' => 'string',
				'default' => 'Icon Box Title'
			),
			'titleTag' => array(
				'type' => 'string',
				'default' => 'h3'
			),
			'description' => array(
				'type' => 'string',
				'default' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
			),
			'url' => array(
				'type' => 'string',
				'default' => ''
			),
			'linkTarget' => array(
				'type' => 'boolean',
				'default' => false
			),
			'iconPosition' => array(
				'type' => 'string',
				'default' => 'top'
			),
			'iconSize' => array(
				'type' => 'number',
				'default' => 40
			),
			'iconColor' => array(
				'type' => 'string',
				'default' => '#3b82f6'
			),
			'iconColorHover' => array(
				'type' => 'string',
				'default' => ''
			),
			'iconBgColor' => array(
				'type' => 'string',
				'default' => 'rgba(59, 130, 246, 0.1)'
			),
			'iconBgColorHover' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleColorHover' => array(
				'type' => 'string',
				'default' => ''
			),
			'descColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'boxBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'boxBgColorHover' => array(
				'type' => 'string',
				'default' => ''
			),
			'iconPadding' => array(
				'type' => 'number',
				'default' => 20
			),
			'iconBorderRadius' => array(
				'type' => 'number',
				'default' => 20
			),
			'boxAlignment' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'iconBorderColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'iconBorderWidth' => array(
				'type' => 'number',
				'default' => 0
			),
			'iconBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'titleFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleFontSize' => array(
				'type' => 'number',
				'default' => null
			),
			'titleFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleLineHeight' => array(
				'type' => 'number',
				'default' => null
			),
			'titleLetterSpacing' => array(
				'type' => 'number',
				'default' => null
			),
			'titleTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'descFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'descFontSize' => array(
				'type' => 'number',
				'default' => null
			),
			'descFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'descLineHeight' => array(
				'type' => 'number',
				'default' => null
			),
			'descLetterSpacing' => array(
				'type' => 'number',
				'default' => null
			),
			'descTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'descTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'borderType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'borderWidth' => array(
				'type' => 'number',
				'default' => 0
			),
			'borderRadius' => array(
				'type' => 'number',
				'default' => 0
			),
			'borderColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'boxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'shadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'shadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'shadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'hoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'hoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'hoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'hoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'align' => array(
				'wide',
				'full'
			),
			'html' => false,
			'anchor' => true
		),
		'textdomain' => 'blockive-premium-addon-for-block',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./index.css'
	),
	'icon-list' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/icon-list',
		'version' => '1.0.0',
		'title' => 'Icon List',
		'category' => 'bpafb-widgets',
		'icon' => 'editor-ul',
		'description' => 'A list of items with icons and optional links: contact details, features, or footer links.',
		'keywords' => array(
			'icon list',
			'list',
			'features',
			'contact',
			'links'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'example' => array(
			
		),
		'attributes' => array(
			'items' => array(
				'type' => 'array',
				'default' => array(
					array(
						'text' => 'List Item #1',
						'icon' => 'fa-solid fa-check',
						'url' => '',
						'newTab' => false
					),
					array(
						'text' => 'List Item #2',
						'icon' => 'fa-solid fa-check',
						'url' => '',
						'newTab' => false
					),
					array(
						'text' => 'List Item #3',
						'icon' => 'fa-solid fa-check',
						'url' => '',
						'newTab' => false
					)
				)
			),
			'layout' => array(
				'type' => 'string',
				'default' => 'vertical'
			),
			'align' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'alignMobile' => array(
				'type' => 'string',
				'default' => ''
			),
			'spaceBetween' => array(
				'type' => 'number',
				'default' => 8
			),
			'showDivider' => array(
				'type' => 'boolean',
				'default' => false
			),
			'dividerStyle' => array(
				'type' => 'string',
				'default' => 'solid'
			),
			'dividerWidth' => array(
				'type' => 'number',
				'default' => 1
			),
			'dividerColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'iconSize' => array(
				'type' => 'number',
				'default' => 14
			),
			'iconColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'iconHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'iconGap' => array(
				'type' => 'number',
				'default' => 10
			),
			'iconVAlign' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'textFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'textFontSize' => array(
				'type' => 'number'
			),
			'textFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'textLineHeight' => array(
				'type' => 'number'
			),
			'textLetterSpacing' => array(
				'type' => 'number'
			),
			'textTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'textTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'textColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'textHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'render' => 'file:./render.php',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'editorStyle' => 'file:./index.css'
	),
	'image-accordion' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/image-accordion',
		'version' => '0.1.0',
		'title' => 'Image Accordion',
		'category' => 'bpafb-widgets',
		'icon' => 'format-image',
		'description' => 'Image accordion block with advanced styling options.',
		'example' => array(
			
		),
		'attributes' => array(
			'items' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => '1',
						'title' => 'Image Accordion Item 1',
						'imageUrl' => '',
						'content' => 'Content goes here...'
					),
					array(
						'id' => '2',
						'title' => 'Image Accordion Item 2',
						'imageUrl' => '',
						'content' => 'Content goes here...'
					)
				)
			),
			'titleColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'contentColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'overlayOpacity' => array(
				'type' => 'number',
				'default' => 0.7
			),
			'animationDuration' => array(
				'type' => 'string',
				'default' => '0.3s'
			),
			'height' => array(
				'type' => 'string',
				'default' => '400px'
			),
			'imageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'imagePosition' => array(
				'type' => 'string',
				'default' => 'center center'
			),
			'showTitle' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showContent' => array(
				'type' => 'boolean',
				'default' => true
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./index.css',
		'viewScript' => 'file:./view.js',
		'supports' => array(
			'anchor' => true
		)
	),
	'image-box' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/image-box',
		'version' => '0.1.0',
		'title' => 'Image Box',
		'category' => 'bpafb-widgets',
		'icon' => 'format-image',
		'description' => 'An image box that displays an image, title, description, and link.',
		'example' => array(
			
		),
		'attributes' => array(
			'imageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'imageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'imageAlt' => array(
				'type' => 'string',
				'default' => ''
			),
			'title' => array(
				'type' => 'string',
				'default' => 'Image Box Title'
			),
			'titleTag' => array(
				'type' => 'string',
				'default' => 'h3'
			),
			'description' => array(
				'type' => 'string',
				'default' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
			),
			'linkUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'linkText' => array(
				'type' => 'string',
				'default' => 'Read More'
			),
			'linkTarget' => array(
				'type' => 'boolean',
				'default' => false
			),
			'imagePosition' => array(
				'type' => 'string',
				'default' => 'top'
			),
			'contentAlign' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'verticalAlign' => array(
				'type' => 'string',
				'default' => 'top'
			),
			'imageSize' => array(
				'type' => 'string',
				'default' => '100px'
			),
			'imageRadius' => array(
				'type' => 'number',
				'default' => 0
			),
			'titleColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleColorHover' => array(
				'type' => 'string',
				'default' => ''
			),
			'descColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'linkColor' => array(
				'type' => 'string',
				'default' => '#3b82f6'
			),
			'linkColorHover' => array(
				'type' => 'string',
				'default' => ''
			),
			'boxBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'boxBgColorHover' => array(
				'type' => 'string',
				'default' => ''
			),
			'imageSpacing' => array(
				'type' => 'number',
				'default' => 20
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'align' => array(
				'wide',
				'full'
			),
			'html' => false,
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true,
				'__experimentalFontFamily' => true,
				'__experimentalDefaultControls' => array(
					'fontSize' => true
				)
			),
			'anchor' => true
		),
		'textdomain' => 'blockive-premium-addon-for-block',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./index.css'
	),
	'image-comparison' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/image-comparison',
		'version' => '0.1.0',
		'title' => 'Image Comparison',
		'category' => 'bpafb-widgets',
		'icon' => 'format-image',
		'description' => 'Before/after image comparison slider block.',
		'example' => array(
			
		),
		'attributes' => array(
			'beforeImage' => array(
				'type' => 'string',
				'default' => ''
			),
			'afterImage' => array(
				'type' => 'string',
				'default' => ''
			),
			'beforeLabel' => array(
				'type' => 'string',
				'default' => 'Before'
			),
			'afterLabel' => array(
				'type' => 'string',
				'default' => 'After'
			),
			'showLabels' => array(
				'type' => 'boolean',
				'default' => true
			),
			'labelColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'labelBackgroundColor' => array(
				'type' => 'string',
				'default' => 'rgba(0, 0, 0, 0.65)'
			),
			'labelPosition' => array(
				'type' => 'string',
				'default' => 'top'
			),
			'separatorColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'arrowColor' => array(
				'type' => 'string',
				'default' => '#555555'
			),
			'sliderPosition' => array(
				'type' => 'number',
				'default' => 50
			),
			'height' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./index.css',
		'viewScript' => 'file:./view.js',
		'supports' => array(
			'anchor' => true
		)
	),
	'link-in-bio' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/link-in-bio',
		'version' => '1.0.0',
		'title' => 'Link in Bio',
		'category' => 'bpafb-widgets',
		'icon' => 'id',
		'description' => 'A mobile-first profile: photo, name, bio, social icons, and a stack of link buttons.',
		'keywords' => array(
			'link in bio',
			'links',
			'profile',
			'social',
			'linktree'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'example' => array(
			'attributes' => array(
				'name' => 'Alex Morgan',
				'headline' => 'Designer & Creator',
				'bio' => 'Sharing my latest work, tips, and favorite tools.',
				'socials' => array(
					array(
						'network' => 'instagram',
						'url' => 'https://example.com'
					),
					array(
						'network' => 'x',
						'url' => 'https://example.com'
					),
					array(
						'network' => 'tiktok',
						'url' => 'https://example.com'
					)
				),
				'links' => array(
					array(
						'label' => 'My Portfolio',
						'url' => 'https://example.com',
						'icon' => ''
					),
					array(
						'label' => 'Latest Blog Post',
						'url' => 'https://example.com',
						'icon' => ''
					),
					array(
						'label' => 'Shop My Picks',
						'url' => 'https://example.com',
						'icon' => ''
					)
				)
			)
		),
		'attributes' => array(
			'imageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'imageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'name' => array(
				'type' => 'string',
				'default' => ''
			),
			'headline' => array(
				'type' => 'string',
				'default' => ''
			),
			'bio' => array(
				'type' => 'string',
				'default' => ''
			),
			'nameTag' => array(
				'type' => 'string',
				'default' => 'h1'
			),
			'socials' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'links' => array(
				'type' => 'array',
				'default' => array(
					array(
						'label' => '',
						'url' => '',
						'icon' => ''
					)
				)
			),
			'newTab' => array(
				'type' => 'boolean',
				'default' => false
			),
			'imageSize' => array(
				'type' => 'number',
				'default' => 110
			),
			'maxWidth' => array(
				'type' => 'number',
				'default' => 480
			),
			'buttonStyle' => array(
				'type' => 'string',
				'default' => 'fill'
			),
			'buttonRadius' => array(
				'type' => 'number',
				'default' => 12
			),
			'pageBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'textColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonHoverBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'iconColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'align' => array(
				'wide',
				'full'
			)
		),
		'render' => 'file:./render.php',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css'
	),
	'loop-carousel' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/loop-carousel',
		'version' => '1.0.0',
		'title' => 'Loop Carousel',
		'category' => 'bpafb-widgets',
		'icon' => 'slides',
		'description' => 'Shows any post type in a carousel, with each item rendered from a Blockive Loop Item template.',
		'keywords' => array(
			'loop',
			'carousel',
			'posts',
			'slider',
			'query'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'example' => array(
			
		),
		'attributes' => array(
			'templateId' => array(
				'type' => 'number',
				'default' => 0
			),
			'postType' => array(
				'type' => 'string',
				'default' => 'post'
			),
			'taxonomy' => array(
				'type' => 'string',
				'default' => ''
			),
			'termIds' => array(
				'type' => 'array',
				'items' => array(
					'type' => 'number'
				),
				'default' => array(
					
				)
			),
			'postsPerPage' => array(
				'type' => 'number',
				'default' => 8
			),
			'orderBy' => array(
				'type' => 'string',
				'default' => 'date'
			),
			'order' => array(
				'type' => 'string',
				'default' => 'desc'
			),
			'excludeCurrentPost' => array(
				'type' => 'boolean',
				'default' => false
			),
			'enableNothingFound' => array(
				'type' => 'boolean',
				'default' => true
			),
			'nothingFoundText' => array(
				'type' => 'string',
				'default' => 'No items found.'
			),
			'equalHeight' => array(
				'type' => 'boolean',
				'default' => true
			),
			'slidesPerView' => array(
				'type' => 'number',
				'default' => 3
			),
			'slidesPerViewTablet' => array(
				'type' => 'number',
				'default' => 2
			),
			'slidesPerViewMobile' => array(
				'type' => 'number',
				'default' => 1
			),
			'gap' => array(
				'type' => 'number',
				'default' => 24
			),
			'speed' => array(
				'type' => 'number',
				'default' => 500
			),
			'autoplay' => array(
				'type' => 'boolean',
				'default' => true
			),
			'autoplaySpeed' => array(
				'type' => 'number',
				'default' => 5000
			),
			'pauseOnHover' => array(
				'type' => 'boolean',
				'default' => true
			),
			'loop' => array(
				'type' => 'boolean',
				'default' => true
			),
			'navigation' => array(
				'type' => 'string',
				'default' => 'both'
			),
			'arrowPosition' => array(
				'type' => 'string',
				'default' => 'outside'
			),
			'arrowSize' => array(
				'type' => 'number',
				'default' => 18
			),
			'arrowColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'arrowBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'arrowHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'arrowHoverBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'dotSize' => array(
				'type' => 'number',
				'default' => 10
			),
			'dotColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'dotActiveColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'align' => array(
				'wide',
				'full'
			)
		),
		'render' => 'file:./render.php',
		'editorScript' => 'file:./index.js',
		'style' => array(
			'bpafb-pro-carousel',
			'file:./style-index.css'
		),
		'editorStyle' => 'file:./index.css',
		'viewScript' => 'file:./view.js'
	),
	'loop-filter' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/loop-filter',
		'version' => '1.0.0',
		'title' => 'Loop Filter',
		'category' => 'bpafb-widgets',
		'icon' => 'filter',
		'description' => 'Category (or any taxonomy) buttons that filter a Loop Grid, Loop Carousel, or Portfolio on the same page.',
		'keywords' => array(
			'filter',
			'taxonomy',
			'category',
			'loop',
			'grid'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'example' => array(
			
		),
		'attributes' => array(
			'targetUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'targetPostType' => array(
				'type' => 'string',
				'default' => 'post'
			),
			'taxonomy' => array(
				'type' => 'string',
				'default' => 'category'
			),
			'termIds' => array(
				'type' => 'array',
				'items' => array(
					'type' => 'number'
				),
				'default' => array(
					
				)
			),
			'showAll' => array(
				'type' => 'boolean',
				'default' => true
			),
			'allLabel' => array(
				'type' => 'string',
				'default' => 'All'
			),
			'orderBy' => array(
				'type' => 'string',
				'default' => 'name'
			),
			'hideEmpty' => array(
				'type' => 'boolean',
				'default' => true
			),
			'filterAlign' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'filterFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'filterFontSize' => array(
				'type' => 'number'
			),
			'filterFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'filterLineHeight' => array(
				'type' => 'number'
			),
			'filterLetterSpacing' => array(
				'type' => 'number'
			),
			'filterTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'filterTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'filterColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'filterBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'filterActiveColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'filterActiveBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'filterRadius' => array(
				'type' => 'number',
				'default' => 20
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'render' => 'file:./render.php',
		'editorScript' => 'file:./index.js',
		'style' => array(
			'bpafb-pro-filter-bar',
			'file:./style-index.css'
		),
		'viewScript' => 'file:./view.js'
	),
	'loop-grid' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/loop-grid',
		'version' => '0.1.0',
		'title' => 'Loop Grid',
		'category' => 'bpafb-widgets',
		'icon' => 'grid-view',
		'description' => 'Shows any post type in a grid, with each item rendered from a Blockive Loop Item template. Pro-only.',
		'example' => array(
			
		),
		'attributes' => array(
			'templateId' => array(
				'type' => 'number',
				'default' => 0
			),
			'postType' => array(
				'type' => 'string',
				'default' => 'post'
			),
			'taxonomy' => array(
				'type' => 'string',
				'default' => ''
			),
			'termIds' => array(
				'type' => 'array',
				'items' => array(
					'type' => 'number'
				),
				'default' => array(
					
				)
			),
			'postsPerPage' => array(
				'type' => 'number',
				'default' => 6
			),
			'orderBy' => array(
				'type' => 'string',
				'default' => 'date'
			),
			'order' => array(
				'type' => 'string',
				'default' => 'desc'
			),
			'excludeCurrentPost' => array(
				'type' => 'boolean',
				'default' => false
			),
			'columns' => array(
				'type' => 'number',
				'default' => 3
			),
			'columnsTablet' => array(
				'type' => 'number',
				'default' => 2
			),
			'columnsMobile' => array(
				'type' => 'number',
				'default' => 1
			),
			'columnGap' => array(
				'type' => 'number',
				'default' => 24
			),
			'rowGap' => array(
				'type' => 'number',
				'default' => 24
			),
			'masonry' => array(
				'type' => 'boolean',
				'default' => false
			),
			'equalHeight' => array(
				'type' => 'boolean',
				'default' => true
			),
			'enableNothingFound' => array(
				'type' => 'boolean',
				'default' => true
			),
			'nothingFoundText' => array(
				'type' => 'string',
				'default' => 'No items found.'
			),
			'paginationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'paginationAlign' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'align' => array(
				'wide',
				'full'
			),
			'html' => false,
			'anchor' => true
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'render' => 'file:./render.php',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./index.css'
	),
	'lottie' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/lottie',
		'version' => '0.1.0',
		'title' => 'Lottie',
		'category' => 'bpafb-widgets',
		'icon' => 'format-image',
		'description' => 'Lottie animation player block.',
		'example' => array(
			
		),
		'attributes' => array(
			'animationUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'width' => array(
				'type' => 'string',
				'default' => '100px'
			),
			'height' => array(
				'type' => 'string',
				'default' => '100px'
			),
			'align' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'linkUrl' => array(
				'type' => 'string'
			),
			'linkTarget' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'editorScript' => 'file:./index.js',
		'style' => 'file:./index.css',
		'supports' => array(
			'anchor' => true
		)
	),
	'mailchimp' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/mailchimp',
		'version' => '0.1.0',
		'title' => 'MailChimp',
		'category' => 'bpafb-widgets',
		'icon' => 'email',
		'description' => 'MailChimp newsletter subscription block.',
		'example' => array(
			
		),
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'default' => 'Subscribe to Our Newsletter'
			),
			'subtitle' => array(
				'type' => 'string',
				'default' => 'Get the latest updates delivered to your inbox'
			),
			'placeholderText' => array(
				'type' => 'string',
				'default' => 'Enter your email'
			),
			'buttonText' => array(
				'type' => 'string',
				'default' => 'Subscribe'
			),
			'titleColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'subtitleColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'inputBgColor' => array(
				'type' => 'string',
				'default' => '#f8f9fa'
			),
			'buttonBgColor' => array(
				'type' => 'string',
				'default' => '#f0f0f0'
			),
			'buttonTextColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'inputBorderRadius' => array(
				'type' => 'number',
				'default' => 0
			),
			'buttonBorderRadius' => array(
				'type' => 'number',
				'default' => 2
			),
			'buttonHoverBgColor' => array(
				'type' => 'string',
				'default' => '#e0e0e0'
			),
			'buttonHoverTextColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'showInputIcon' => array(
				'type' => 'boolean',
				'default' => false
			),
			'inputIconBgColor' => array(
				'type' => 'string',
				'default' => '#e9ecef'
			),
			'inputIconColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'showButtonIcon' => array(
				'type' => 'boolean',
				'default' => false
			),
			'inputBorderWidth' => array(
				'type' => 'number',
				'default' => 0
			),
			'inputBorderColor' => array(
				'type' => 'string',
				'default' => 'transparent'
			),
			'buttonBorderWidth' => array(
				'type' => 'number',
				'default' => 1
			),
			'buttonBorderColor' => array(
				'type' => 'string',
				'default' => '#767676'
			),
			'formAction' => array(
				'type' => 'string',
				'default' => ''
			),
			'formGap' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./index.css',
		'supports' => array(
			'anchor' => true
		)
	),
	'media-carousel' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/media-carousel',
		'version' => '1.0.0',
		'title' => 'Media Carousel',
		'category' => 'bpafb-widgets',
		'icon' => 'images-alt2',
		'description' => 'An image and video carousel with carousel, slideshow (with thumbnails), and coverflow skins, plus a lightbox.',
		'keywords' => array(
			'carousel',
			'gallery',
			'slider',
			'images',
			'lightbox',
			'video'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'example' => array(
			
		),
		'attributes' => array(
			'items' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'skin' => array(
				'type' => 'string',
				'default' => 'carousel'
			),
			'slidesPerView' => array(
				'type' => 'number',
				'default' => 3
			),
			'slidesPerViewTablet' => array(
				'type' => 'number',
				'default' => 2
			),
			'slidesPerViewMobile' => array(
				'type' => 'number',
				'default' => 1
			),
			'gap' => array(
				'type' => 'number',
				'default' => 10
			),
			'speed' => array(
				'type' => 'number',
				'default' => 500
			),
			'autoplay' => array(
				'type' => 'boolean',
				'default' => true
			),
			'autoplaySpeed' => array(
				'type' => 'number',
				'default' => 5000
			),
			'pauseOnHover' => array(
				'type' => 'boolean',
				'default' => true
			),
			'loop' => array(
				'type' => 'boolean',
				'default' => true
			),
			'navigation' => array(
				'type' => 'string',
				'default' => 'both'
			),
			'arrowPosition' => array(
				'type' => 'string',
				'default' => 'inside'
			),
			'arrowSize' => array(
				'type' => 'number',
				'default' => 18
			),
			'arrowColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'arrowBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'arrowHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'arrowHoverBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'dotSize' => array(
				'type' => 'number',
				'default' => 10
			),
			'dotColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'dotActiveColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'height' => array(
				'type' => 'number',
				'default' => 300
			),
			'heightTablet' => array(
				'type' => 'number'
			),
			'heightMobile' => array(
				'type' => 'number'
			),
			'imageFit' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'imageSize' => array(
				'type' => 'string',
				'default' => 'large'
			),
			'onClick' => array(
				'type' => 'string',
				'default' => 'lightbox'
			),
			'captions' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'hoverEffect' => array(
				'type' => 'string',
				'default' => 'zoom'
			),
			'overlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'borderRadius' => array(
				'type' => 'number',
				'default' => 0
			),
			'captionFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'captionFontSize' => array(
				'type' => 'number'
			),
			'captionFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'captionLineHeight' => array(
				'type' => 'number'
			),
			'captionLetterSpacing' => array(
				'type' => 'number'
			),
			'captionTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'captionTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'captionColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'captionBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'playIconSize' => array(
				'type' => 'number',
				'default' => 48
			),
			'playIconColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'thumbSize' => array(
				'type' => 'number',
				'default' => 70
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'align' => array(
				'wide',
				'full'
			)
		),
		'render' => 'file:./render.php',
		'editorScript' => 'file:./index.js',
		'style' => array(
			'bpafb-pro-carousel',
			'bpafb-pro-lightbox',
			'file:./style-index.css'
		),
		'editorStyle' => 'file:./index.css',
		'viewScript' => 'file:./view.js'
	),
	'mega-menu' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/mega-menu',
		'version' => '0.1.0',
		'title' => 'Mega Menu',
		'category' => 'bpafb-widgets',
		'icon' => 'grid-view',
		'description' => 'A menu whose items can open a full-width dropdown built from a Blockive Template, Pro-only.',
		'example' => array(
			
		),
		'attributes' => array(
			'items' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => '1',
						'title' => 'Home',
						'link' => '#',
						'linkNewTab' => false,
						'hasDropdown' => false,
						'templateId' => 0
					),
					array(
						'id' => '2',
						'title' => 'Services',
						'link' => '#',
						'linkNewTab' => false,
						'hasDropdown' => true,
						'templateId' => 0
					),
					array(
						'id' => '3',
						'title' => 'Contact',
						'link' => '#',
						'linkNewTab' => false,
						'hasDropdown' => false,
						'templateId' => 0
					)
				)
			),
			'itemGap' => array(
				'type' => 'number',
				'default' => 24
			),
			'itemPaddingV' => array(
				'type' => 'number',
				'default' => 10
			),
			'itemPaddingH' => array(
				'type' => 'number',
				'default' => 6
			),
			'itemColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'itemHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'itemActiveColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'itemFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'itemFontSize' => array(
				'type' => 'number',
				'default' => null
			),
			'itemFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'itemLineHeight' => array(
				'type' => 'number',
				'default' => null
			),
			'itemLetterSpacing' => array(
				'type' => 'number',
				'default' => null
			),
			'itemTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'itemTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'dropdownWidth' => array(
				'type' => 'string',
				'default' => 'full'
			),
			'dropdownBgColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'dropdownPadding' => array(
				'type' => 'number',
				'default' => 32
			),
			'dropdownBorderType' => array(
				'type' => 'string',
				'default' => 'solid'
			),
			'dropdownBorderWidth' => array(
				'type' => 'number',
				'default' => 1
			),
			'dropdownBorderRadius' => array(
				'type' => 'number',
				'default' => 8
			),
			'dropdownBorderColor' => array(
				'type' => 'string',
				'default' => '#e2e8f0'
			),
			'dropdownShadowEnabled' => array(
				'type' => 'boolean',
				'default' => true
			),
			'dropdownShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(15,23,42,0.12)'
			),
			'dropdownShadowBlur' => array(
				'type' => 'number',
				'default' => 24
			),
			'dropdownShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'mobileBreakpoint' => array(
				'type' => 'number',
				'default' => 768
			),
			'toggleIconColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'align' => array(
				'wide',
				'full'
			),
			'html' => false,
			'anchor' => true
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'render' => 'file:./render.php',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./index.css',
		'viewScript' => 'file:./view.js'
	),
	'menu' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/menu',
		'version' => '0.1.0',
		'title' => 'Menu',
		'category' => 'bpafb-widgets',
		'icon' => 'menu',
		'description' => 'Shows a WordPress menu, Pro-only, with full style controls.',
		'example' => array(
			
		),
		'attributes' => array(
			'menuId' => array(
				'type' => 'number',
				'default' => 0
			),
			'layout' => array(
				'type' => 'string',
				'default' => 'horizontal'
			),
			'submenuIndicator' => array(
				'type' => 'boolean',
				'default' => true
			),
			'itemGap' => array(
				'type' => 'number',
				'default' => 24
			),
			'itemPaddingV' => array(
				'type' => 'number',
				'default' => 10
			),
			'itemPaddingH' => array(
				'type' => 'number',
				'default' => 6
			),
			'itemColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'itemHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'itemActiveColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'itemFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'itemFontSize' => array(
				'type' => 'number',
				'default' => null
			),
			'itemFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'itemLineHeight' => array(
				'type' => 'number',
				'default' => null
			),
			'itemLetterSpacing' => array(
				'type' => 'number',
				'default' => null
			),
			'itemTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'itemTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'dropdownBgColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'dropdownItemColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'dropdownItemHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'dropdownItemHoverBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'dropdownMinWidth' => array(
				'type' => 'number',
				'default' => 220
			),
			'dropdownBorderType' => array(
				'type' => 'string',
				'default' => 'solid'
			),
			'dropdownBorderWidth' => array(
				'type' => 'number',
				'default' => 1
			),
			'dropdownBorderRadius' => array(
				'type' => 'number',
				'default' => 8
			),
			'dropdownBorderColor' => array(
				'type' => 'string',
				'default' => '#e2e8f0'
			),
			'dropdownShadowEnabled' => array(
				'type' => 'boolean',
				'default' => true
			),
			'dropdownShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(15,23,42,0.12)'
			),
			'dropdownShadowBlur' => array(
				'type' => 'number',
				'default' => 24
			),
			'dropdownShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'mobileBreakpoint' => array(
				'type' => 'number',
				'default' => 768
			),
			'toggleIconColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'align' => array(
				'wide',
				'full'
			),
			'html' => false,
			'anchor' => true
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'render' => 'file:./render.php',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./index.css',
		'viewScript' => 'file:./view.js'
	),
	'nested-carousel' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/nested-carousel',
		'version' => '1.0.0',
		'title' => 'Nested Carousel',
		'category' => 'bpafb-widgets',
		'icon' => 'slides',
		'description' => 'A carousel whose slides can hold any blocks.',
		'keywords' => array(
			'carousel',
			'slider',
			'slides',
			'nested'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'example' => array(
			
		),
		'attributes' => array(
			'carouselLabel' => array(
				'type' => 'string',
				'default' => ''
			),
			'equalHeight' => array(
				'type' => 'boolean',
				'default' => true
			),
			'slidesPerView' => array(
				'type' => 'number',
				'default' => 1
			),
			'slidesPerViewTablet' => array(
				'type' => 'number',
				'default' => 2
			),
			'slidesPerViewMobile' => array(
				'type' => 'number',
				'default' => 1
			),
			'gap' => array(
				'type' => 'number',
				'default' => 24
			),
			'speed' => array(
				'type' => 'number',
				'default' => 500
			),
			'autoplay' => array(
				'type' => 'boolean',
				'default' => true
			),
			'autoplaySpeed' => array(
				'type' => 'number',
				'default' => 5000
			),
			'pauseOnHover' => array(
				'type' => 'boolean',
				'default' => true
			),
			'loop' => array(
				'type' => 'boolean',
				'default' => true
			),
			'navigation' => array(
				'type' => 'string',
				'default' => 'both'
			),
			'arrowPosition' => array(
				'type' => 'string',
				'default' => 'outside'
			),
			'arrowSize' => array(
				'type' => 'number',
				'default' => 18
			),
			'arrowColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'arrowBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'arrowHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'arrowHoverBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'dotSize' => array(
				'type' => 'number',
				'default' => 10
			),
			'dotColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'dotActiveColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'align' => array(
				'wide',
				'full'
			)
		),
		'render' => 'file:./render.php',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => array(
			'bpafb-pro-carousel',
			'file:./style-index.css'
		),
		'viewScript' => 'file:./view.js'
	),
	'nested-carousel-slide' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/nested-carousel-slide',
		'version' => '1.0.0',
		'title' => 'Carousel Slide',
		'category' => 'bpafb-widgets',
		'icon' => 'slides',
		'description' => 'One slide of a Nested Carousel. Holds any blocks.',
		'parent' => array(
			'blockive-premium-addon-for-block/nested-carousel'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'attributes' => array(
			'verticalAlign' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'supports' => array(
			'html' => false,
			'reusable' => false,
			'color' => array(
				'background' => true,
				'text' => true,
				'gradients' => true,
				'link' => true
			),
			'background' => array(
				'backgroundImage' => true,
				'backgroundSize' => true
			),
			'spacing' => array(
				'padding' => true
			),
			'dimensions' => array(
				'minHeight' => true
			),
			'__experimentalBorder' => array(
				'radius' => true,
				'width' => true,
				'color' => true,
				'style' => true
			)
		),
		'editorScript' => 'file:./index.js'
	),
	'off-canvas' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/off-canvas',
		'version' => '1.0.0',
		'title' => 'Off-Canvas',
		'category' => 'bpafb-widgets',
		'icon' => 'align-pull-right',
		'description' => 'A slide-in panel that holds any blocks, opened by its own trigger button or by any link to its ID.',
		'keywords' => array(
			'off canvas',
			'offcanvas',
			'drawer',
			'mobile menu',
			'slide panel',
			'hamburger'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'example' => array(
			
		),
		'attributes' => array(
			'panelId' => array(
				'type' => 'string',
				'default' => ''
			),
			'position' => array(
				'type' => 'string',
				'default' => 'right'
			),
			'panelWidth' => array(
				'type' => 'number',
				'default' => 360
			),
			'panelWidthMobile' => array(
				'type' => 'number'
			),
			'panelHeight' => array(
				'type' => 'number',
				'default' => 50
			),
			'showTrigger' => array(
				'type' => 'boolean',
				'default' => true
			),
			'triggerType' => array(
				'type' => 'string',
				'default' => 'icon'
			),
			'triggerIcon' => array(
				'type' => 'string',
				'default' => 'fa-solid fa-bars'
			),
			'triggerText' => array(
				'type' => 'string',
				'default' => 'Menu'
			),
			'triggerLabel' => array(
				'type' => 'string',
				'default' => 'Open menu'
			),
			'triggerAlign' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'triggerSize' => array(
				'type' => 'number',
				'default' => 22
			),
			'triggerColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'triggerHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'triggerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'triggerHoverBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'triggerPadding' => array(
				'type' => 'number',
				'default' => 8
			),
			'triggerRadius' => array(
				'type' => 'number',
				'default' => 4
			),
			'panelBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'panelColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'panelPadding' => array(
				'type' => 'number',
				'default' => 30
			),
			'panelShadow' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showOverlay' => array(
				'type' => 'boolean',
				'default' => true
			),
			'overlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'closeOnOverlay' => array(
				'type' => 'boolean',
				'default' => true
			),
			'closeOnEsc' => array(
				'type' => 'boolean',
				'default' => true
			),
			'closeOnLinkClick' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showCloseButton' => array(
				'type' => 'boolean',
				'default' => true
			),
			'closeColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'closeSize' => array(
				'type' => 'number',
				'default' => 20
			),
			'transitionDuration' => array(
				'type' => 'number',
				'default' => 300
			),
			'preventScroll' => array(
				'type' => 'boolean',
				'default' => true
			),
			'editorOpen' => array(
				'type' => 'boolean',
				'default' => true
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'render' => 'file:./render.php',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'editorStyle' => 'file:./index.css',
		'viewScript' => 'file:./view.js'
	),
	'pie-chart' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/pie-chart',
		'version' => '0.1.0',
		'title' => 'Pie Chart',
		'category' => 'bpafb-widgets',
		'icon' => 'chart-pie',
		'description' => 'A dynamic pie and donut chart block using Chart.js.',
		'example' => array(
			
		),
		'attributes' => array(
			'chartData' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => '1',
						'label' => 'Red',
						'value' => 300,
						'bg' => '#ff6384'
					),
					array(
						'id' => '2',
						'label' => 'Blue',
						'value' => 50,
						'bg' => '#36a2eb'
					),
					array(
						'id' => '3',
						'label' => 'Yellow',
						'value' => 100,
						'bg' => '#ffce56'
					)
				)
			),
			'legendPosition' => array(
				'type' => 'string',
				'default' => 'top'
			),
			'cutout' => array(
				'type' => 'number',
				'default' => 0
			),
			'borderWidth' => array(
				'type' => 'number',
				'default' => 2
			),
			'borderColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'animationSpeed' => array(
				'type' => 'number',
				'default' => 1000
			),
			'alignment' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'align' => array(
				'wide',
				'full'
			),
			'html' => false,
			'anchor' => true
		),
		'textdomain' => 'blockive-premium-addon-for-block',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./index.css',
		'viewScript' => 'file:./view.js'
	),
	'portfolio' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/portfolio',
		'version' => '1.0.0',
		'title' => 'Portfolio',
		'category' => 'bpafb-widgets',
		'icon' => 'portfolio',
		'description' => 'Posts or projects in an image grid, with filter buttons for their categories and titles over or below each image.',
		'keywords' => array(
			'portfolio',
			'projects',
			'work',
			'filter',
			'grid',
			'gallery'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'example' => array(
			
		),
		'attributes' => array(
			'postType' => array(
				'type' => 'string',
				'default' => 'post'
			),
			'taxonomy' => array(
				'type' => 'string',
				'default' => ''
			),
			'termIds' => array(
				'type' => 'array',
				'items' => array(
					'type' => 'number'
				),
				'default' => array(
					
				)
			),
			'postsPerPage' => array(
				'type' => 'number',
				'default' => 12
			),
			'orderBy' => array(
				'type' => 'string',
				'default' => 'date'
			),
			'order' => array(
				'type' => 'string',
				'default' => 'desc'
			),
			'excludeCurrentPost' => array(
				'type' => 'boolean',
				'default' => false
			),
			'filterTaxonomy' => array(
				'type' => 'string',
				'default' => 'category'
			),
			'showFilter' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showAllFilter' => array(
				'type' => 'boolean',
				'default' => true
			),
			'allFilterLabel' => array(
				'type' => 'string',
				'default' => 'All'
			),
			'filterAlign' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'layout' => array(
				'type' => 'string',
				'default' => 'grid'
			),
			'columns' => array(
				'type' => 'number',
				'default' => 3
			),
			'columnsTablet' => array(
				'type' => 'number',
				'default' => 2
			),
			'columnsMobile' => array(
				'type' => 'number',
				'default' => 1
			),
			'gap' => array(
				'type' => 'number',
				'default' => 10
			),
			'aspectRatio' => array(
				'type' => 'string',
				'default' => '4/3'
			),
			'imageSize' => array(
				'type' => 'string',
				'default' => 'medium_large'
			),
			'titlePosition' => array(
				'type' => 'string',
				'default' => 'overlay'
			),
			'titleTag' => array(
				'type' => 'string',
				'default' => 'h3'
			),
			'showTerms' => array(
				'type' => 'boolean',
				'default' => true
			),
			'hoverEffect' => array(
				'type' => 'string',
				'default' => 'zoom'
			),
			'overlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'borderRadius' => array(
				'type' => 'number',
				'default' => 0
			),
			'nothingFoundText' => array(
				'type' => 'string',
				'default' => 'No items found.'
			),
			'titleFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleFontSize' => array(
				'type' => 'number'
			),
			'titleFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleLineHeight' => array(
				'type' => 'number'
			),
			'titleLetterSpacing' => array(
				'type' => 'number'
			),
			'titleTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'termsColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'filterFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'filterFontSize' => array(
				'type' => 'number'
			),
			'filterFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'filterLineHeight' => array(
				'type' => 'number'
			),
			'filterLetterSpacing' => array(
				'type' => 'number'
			),
			'filterTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'filterTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'filterColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'filterBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'filterActiveColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'filterActiveBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'filterRadius' => array(
				'type' => 'number',
				'default' => 20
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'align' => array(
				'wide',
				'full'
			)
		),
		'render' => 'file:./render.php',
		'editorScript' => 'file:./index.js',
		'style' => array(
			'bpafb-pro-filter-bar',
			'file:./style-index.css'
		),
		'editorStyle' => 'file:./index.css',
		'viewScript' => 'file:./view.js'
	),
	'post-grid' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/post-grid',
		'version' => '0.1.0',
		'title' => 'Post Grid',
		'category' => 'bpafb-widgets',
		'icon' => 'grid-view',
		'description' => 'Dynamic post grid/listing block.',
		'supports' => array(
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true
			),
			'anchor' => true
		),
		'example' => array(
			
		),
		'attributes' => array(
			'columns' => array(
				'type' => 'number',
				'default' => 3
			),
			'postsPerPage' => array(
				'type' => 'number',
				'default' => 9
			),
			'orderBy' => array(
				'type' => 'string',
				'default' => 'date'
			),
			'order' => array(
				'type' => 'string',
				'default' => 'desc'
			),
			'showImage' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showExcerpt' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showDate' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showAuthor' => array(
				'type' => 'boolean',
				'default' => true
			),
			'postType' => array(
				'type' => 'string',
				'default' => 'post'
			),
			'dateFormat' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'dateColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'authorColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'excerptColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'cardBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'cardBorderRadius' => array(
				'type' => 'number',
				'default' => 8
			),
			'cardBorderColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'cardBorderWidth' => array(
				'type' => 'number',
				'default' => 0
			),
			'cardBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'render' => 'file:./render.php',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./index.css'
	),
	'price-list' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/price-list',
		'version' => '1.0.0',
		'title' => 'Price List',
		'category' => 'bpafb-widgets',
		'icon' => 'money-alt',
		'description' => 'A menu-style list of items with prices, optional photos, and a dotted leader line.',
		'keywords' => array(
			'price',
			'menu',
			'list',
			'restaurant',
			'services',
			'pricing'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'example' => array(
			
		),
		'attributes' => array(
			'items' => array(
				'type' => 'array',
				'default' => array(
					array(
						'title' => 'First item on the list',
						'price' => '$20',
						'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
						'imageId' => 0,
						'imageUrl' => '',
						'link' => '',
						'newTab' => false
					),
					array(
						'title' => 'Second item on the list',
						'price' => '$9',
						'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
						'imageId' => 0,
						'imageUrl' => '',
						'link' => '',
						'newTab' => false
					),
					array(
						'title' => 'Third item on the list',
						'price' => '$32',
						'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
						'imageId' => 0,
						'imageUrl' => '',
						'link' => '',
						'newTab' => false
					)
				)
			),
			'titleTag' => array(
				'type' => 'string',
				'default' => 'span'
			),
			'imagePosition' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'imageSize' => array(
				'type' => 'number',
				'default' => 60
			),
			'imageRadius' => array(
				'type' => 'number',
				'default' => 4
			),
			'imageGap' => array(
				'type' => 'number',
				'default' => 16
			),
			'verticalAlign' => array(
				'type' => 'string',
				'default' => 'top'
			),
			'itemSpacing' => array(
				'type' => 'number',
				'default' => 20
			),
			'separator' => array(
				'type' => 'string',
				'default' => 'dotted'
			),
			'separatorWeight' => array(
				'type' => 'number',
				'default' => 2
			),
			'separatorColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'separatorSpacing' => array(
				'type' => 'number',
				'default' => 10
			),
			'divider' => array(
				'type' => 'boolean',
				'default' => false
			),
			'dividerColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleFontSize' => array(
				'type' => 'number'
			),
			'titleFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleLineHeight' => array(
				'type' => 'number'
			),
			'titleLetterSpacing' => array(
				'type' => 'number'
			),
			'titleTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'priceFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'priceFontSize' => array(
				'type' => 'number'
			),
			'priceFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'priceLineHeight' => array(
				'type' => 'number'
			),
			'priceLetterSpacing' => array(
				'type' => 'number'
			),
			'priceTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'priceTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'priceColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'descriptionFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'descriptionFontSize' => array(
				'type' => 'number'
			),
			'descriptionFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'descriptionLineHeight' => array(
				'type' => 'number'
			),
			'descriptionLetterSpacing' => array(
				'type' => 'number'
			),
			'descriptionTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'descriptionTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'descriptionColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'render' => 'file:./render.php',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'editorStyle' => 'file:./index.css'
	),
	'pricing-table' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/pricing-table',
		'version' => '0.1.0',
		'title' => 'Pricing Table',
		'category' => 'bpafb-widgets',
		'icon' => 'money-alt',
		'description' => 'A fully customizable pricing table block with features list and button.',
		'example' => array(
			
		),
		'attributes' => array(
			'tables' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => '1',
						'title' => 'Pro Plan',
						'subtitle' => 'Best for growing businesses',
						'image' => '',
						'isFeatured' => false,
						'featuredBadge' => 'Most Popular',
						'currency' => '$',
						'price' => '99',
						'period' => '/ month',
						'buttonText' => 'Get Started',
						'buttonUrl' => '#',
						'features' => array(
							array(
								'id' => '1',
								'text' => '50 Users',
								'active' => true,
								'icon' => 'fas fa-check'
							),
							array(
								'id' => '2',
								'text' => '100GB Storage',
								'active' => true,
								'icon' => 'fas fa-check'
							),
							array(
								'id' => '3',
								'text' => '24/7 Support',
								'active' => true,
								'icon' => 'fas fa-check'
							),
							array(
								'id' => '4',
								'text' => 'Custom Domain',
								'active' => false,
								'icon' => 'fas fa-times'
							)
						)
					)
				)
			),
			'columns' => array(
				'type' => 'number',
				'default' => 3
			),
			'columnGap' => array(
				'type' => 'number',
				'default' => 25
			),
			'layoutStyle' => array(
				'type' => 'string',
				'default' => 'style1'
			),
			'alignment' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'headerBgColor' => array(
				'type' => 'string',
				'default' => '#2563eb'
			),
			'headerTitleColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'headerSubtitleColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'priceColor' => array(
				'type' => 'string',
				'default' => '#1e293b'
			),
			'featureTextColor' => array(
				'type' => 'string',
				'default' => '#475569'
			),
			'buttonBgColor' => array(
				'type' => 'string',
				'default' => '#2563eb'
			),
			'buttonTextColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'badgeBgColor' => array(
				'type' => 'string'
			),
			'badgeTextColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'buttonBorderColor' => array(
				'type' => 'string'
			),
			'buttonBorderWidth' => array(
				'type' => 'number',
				'default' => 0
			),
			'buttonBorderRadius' => array(
				'type' => 'number',
				'default' => 50
			),
			'boxBgColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'borderColor' => array(
				'type' => 'string',
				'default' => '#e2e8f0'
			),
			'borderWidth' => array(
				'type' => 'number',
				'default' => 0
			),
			'borderRadius' => array(
				'type' => 'number',
				'default' => 12
			),
			'boxShadow' => array(
				'type' => 'boolean',
				'default' => true
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'align' => array(
				'wide',
				'full'
			),
			'html' => false,
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true,
				'__experimentalDefaultControls' => array(
					'fontSize' => true
				)
			),
			'anchor' => true
		),
		'textdomain' => 'blockive-premium-addon-for-block',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./index.css'
	),
	'product-categories' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/product-categories',
		'version' => '1.0.0',
		'title' => 'Product Categories',
		'category' => 'bpafb-widgets',
		'icon' => 'category',
		'description' => 'WooCommerce product categories with their images and product counts.',
		'keywords' => array(
			'woocommerce',
			'categories',
			'shop'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'example' => array(
			
		),
		'attributes' => array(
			'columns' => array(
				'type' => 'number',
				'default' => 4
			),
			'number' => array(
				'type' => 'number',
				'default' => 0
			),
			'parent' => array(
				'type' => 'string',
				'default' => ''
			),
			'categoryIds' => array(
				'type' => 'array',
				'items' => array(
					'type' => 'number'
				),
				'default' => array(
					
				)
			),
			'hideEmpty' => array(
				'type' => 'boolean',
				'default' => true
			),
			'orderBy' => array(
				'type' => 'string',
				'default' => 'name'
			),
			'order' => array(
				'type' => 'string',
				'default' => 'ASC'
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'align' => array(
				'wide',
				'full'
			)
		),
		'render' => 'file:./render.php',
		'editorScript' => 'file:./index.js'
	),
	'products' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/products',
		'version' => '1.0.0',
		'title' => 'Products',
		'category' => 'bpafb-widgets',
		'icon' => 'products',
		'description' => 'WooCommerce products in the shop\'s own card layout: latest, on sale, featured, best-selling, top-rated, by category, or hand-picked.',
		'keywords' => array(
			'woocommerce',
			'products',
			'shop',
			'grid'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'example' => array(
			
		),
		'attributes' => array(
			'source' => array(
				'type' => 'string',
				'default' => 'recent'
			),
			'categories' => array(
				'type' => 'array',
				'items' => array(
					'type' => 'number'
				),
				'default' => array(
					
				)
			),
			'tags' => array(
				'type' => 'array',
				'items' => array(
					'type' => 'number'
				),
				'default' => array(
					
				)
			),
			'productIds' => array(
				'type' => 'array',
				'items' => array(
					'type' => 'number'
				),
				'default' => array(
					
				)
			),
			'columns' => array(
				'type' => 'number',
				'default' => 4
			),
			'limit' => array(
				'type' => 'number',
				'default' => 8
			),
			'orderBy' => array(
				'type' => 'string',
				'default' => 'date'
			),
			'order' => array(
				'type' => 'string',
				'default' => 'DESC'
			),
			'paginate' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'align' => array(
				'wide',
				'full'
			)
		),
		'render' => 'file:./render.php',
		'editorScript' => 'file:./index.js'
	),
	'progress-bar' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/progress-bar',
		'version' => '0.1.0',
		'title' => 'Progress Bar',
		'category' => 'bpafb-widgets',
		'icon' => 'performance',
		'description' => 'A premium animated progress bar widget.',
		'example' => array(
			
		),
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'default' => 'Web Development'
			),
			'percentage' => array(
				'type' => 'number',
				'default' => 85
			),
			'displayPercentage' => array(
				'type' => 'boolean',
				'default' => true
			),
			'layoutStyle' => array(
				'type' => 'string',
				'default' => 'standard'
			),
			'barHeight' => array(
				'type' => 'number',
				'default' => 18
			),
			'borderRadius' => array(
				'type' => 'number',
				'default' => 50
			),
			'isStriped' => array(
				'type' => 'boolean',
				'default' => false
			),
			'isAnimated' => array(
				'type' => 'boolean',
				'default' => true
			),
			'animationDuration' => array(
				'type' => 'number',
				'default' => 1500
			),
			'titleColor' => array(
				'type' => 'string',
				'default' => '#1e293b'
			),
			'percentageColor' => array(
				'type' => 'string',
				'default' => '#1e293b'
			),
			'barColor' => array(
				'type' => 'string',
				'default' => '#4f46e5'
			),
			'trackColor' => array(
				'type' => 'string',
				'default' => '#f1f5f9'
			),
			'innerTextColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'alignment' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'align' => array(
				'wide',
				'full'
			),
			'html' => false,
			'typography' => array(
				'fontSize' => true,
				'__experimentalFontWeight' => true
			),
			'anchor' => true
		),
		'textdomain' => 'blockive-premium-addon-for-block',
		'editorScript' => 'file:./index.js',
		'viewScript' => 'file:./view.js',
		'style' => 'file:./index.css'
	),
	'progress-tracker' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/progress-tracker',
		'version' => '1.0.0',
		'title' => 'Progress Tracker',
		'category' => 'bpafb-widgets',
		'icon' => 'performance',
		'description' => 'Shows how far the visitor has scrolled through the page or the post content, as a bar or a circle.',
		'keywords' => array(
			'progress',
			'reading',
			'scroll',
			'tracker',
			'bar'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'example' => array(
			
		),
		'attributes' => array(
			'type' => array(
				'type' => 'string',
				'default' => 'horizontal'
			),
			'position' => array(
				'type' => 'string',
				'default' => 'top'
			),
			'corner' => array(
				'type' => 'string',
				'default' => 'bottom-left'
			),
			'relativeTo' => array(
				'type' => 'string',
				'default' => 'page'
			),
			'selector' => array(
				'type' => 'string',
				'default' => ''
			),
			'showPercentage' => array(
				'type' => 'boolean',
				'default' => false
			),
			'height' => array(
				'type' => 'number',
				'default' => 5
			),
			'offset' => array(
				'type' => 'number',
				'default' => 0
			),
			'circleSize' => array(
				'type' => 'number',
				'default' => 56
			),
			'circleWidth' => array(
				'type' => 'number',
				'default' => 4
			),
			'fillColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'trackColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'percentColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'render' => 'file:./render.php',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'editorStyle' => 'file:./index.css',
		'viewScript' => 'file:./view.js'
	),
	'reviews' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/reviews',
		'version' => '1.0.0',
		'title' => 'Reviews',
		'category' => 'bpafb-widgets',
		'icon' => 'star-filled',
		'description' => 'Customer reviews in a carousel: avatar, name, star rating, source icon, and text.',
		'keywords' => array(
			'reviews',
			'rating',
			'stars',
			'testimonial',
			'carousel'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'example' => array(
			
		),
		'attributes' => array(
			'items' => array(
				'type' => 'array',
				'default' => array(
					array(
						'name' => 'John Doe',
						'title' => '@username',
						'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
						'rating' => 5,
						'imageId' => 0,
						'imageUrl' => '',
						'icon' => 'fa-brands fa-google',
						'link' => '',
						'newTab' => false
					),
					array(
						'name' => 'Jane Smith',
						'title' => '@username',
						'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
						'rating' => 4.5,
						'imageId' => 0,
						'imageUrl' => '',
						'icon' => 'fa-brands fa-facebook',
						'link' => '',
						'newTab' => false
					),
					array(
						'name' => 'Alex Morgan',
						'title' => '@username',
						'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
						'rating' => 5,
						'imageId' => 0,
						'imageUrl' => '',
						'icon' => 'fa-brands fa-x-twitter',
						'link' => '',
						'newTab' => false
					),
					array(
						'name' => 'Sam Lee',
						'title' => '@username',
						'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
						'rating' => 4,
						'imageId' => 0,
						'imageUrl' => '',
						'icon' => 'fa-brands fa-yelp',
						'link' => '',
						'newTab' => false
					)
				)
			),
			'slidesPerView' => array(
				'type' => 'number',
				'default' => 3
			),
			'slidesPerViewTablet' => array(
				'type' => 'number',
				'default' => 2
			),
			'slidesPerViewMobile' => array(
				'type' => 'number',
				'default' => 1
			),
			'gap' => array(
				'type' => 'number',
				'default' => 20
			),
			'speed' => array(
				'type' => 'number',
				'default' => 500
			),
			'autoplay' => array(
				'type' => 'boolean',
				'default' => true
			),
			'autoplaySpeed' => array(
				'type' => 'number',
				'default' => 5000
			),
			'pauseOnHover' => array(
				'type' => 'boolean',
				'default' => true
			),
			'loop' => array(
				'type' => 'boolean',
				'default' => true
			),
			'navigation' => array(
				'type' => 'string',
				'default' => 'both'
			),
			'arrowPosition' => array(
				'type' => 'string',
				'default' => 'outside'
			),
			'arrowSize' => array(
				'type' => 'number',
				'default' => 18
			),
			'arrowColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'arrowBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'arrowHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'arrowHoverBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'dotSize' => array(
				'type' => 'number',
				'default' => 10
			),
			'dotColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'dotActiveColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'showRating' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showIcon' => array(
				'type' => 'boolean',
				'default' => true
			),
			'iconColorMode' => array(
				'type' => 'string',
				'default' => 'official'
			),
			'iconColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'iconSize' => array(
				'type' => 'number',
				'default' => 20
			),
			'starSize' => array(
				'type' => 'number',
				'default' => 15
			),
			'starColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'starEmptyColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'imageSize' => array(
				'type' => 'number',
				'default' => 48
			),
			'imageRadius' => array(
				'type' => 'number',
				'default' => 50
			),
			'cardBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'cardBorderColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'cardBorderWidth' => array(
				'type' => 'number',
				'default' => 1
			),
			'cardRadius' => array(
				'type' => 'number',
				'default' => 8
			),
			'cardPadding' => array(
				'type' => 'number',
				'default' => 20
			),
			'headerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'headerSeparator' => array(
				'type' => 'boolean',
				'default' => true
			),
			'nameFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'nameFontSize' => array(
				'type' => 'number'
			),
			'nameFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'nameLineHeight' => array(
				'type' => 'number'
			),
			'nameLetterSpacing' => array(
				'type' => 'number'
			),
			'nameTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'nameTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'nameColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleFontSize' => array(
				'type' => 'number'
			),
			'titleFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleLineHeight' => array(
				'type' => 'number'
			),
			'titleLetterSpacing' => array(
				'type' => 'number'
			),
			'titleTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'contentFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'contentFontSize' => array(
				'type' => 'number'
			),
			'contentFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'contentLineHeight' => array(
				'type' => 'number'
			),
			'contentLetterSpacing' => array(
				'type' => 'number'
			),
			'contentTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'contentTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'contentColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'align' => array(
				'wide',
				'full'
			)
		),
		'render' => 'file:./render.php',
		'editorScript' => 'file:./index.js',
		'style' => array(
			'bpafb-pro-carousel',
			'file:./style-index.css'
		),
		'editorStyle' => 'file:./index.css',
		'viewScript' => 'file:./view.js'
	),
	'share-buttons' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/share-buttons',
		'version' => '1.0.0',
		'title' => 'Share Buttons',
		'category' => 'bpafb-widgets',
		'icon' => 'share',
		'description' => 'Buttons to share the current page on social networks, by email, or by copying the link.',
		'keywords' => array(
			'share',
			'social',
			'facebook',
			'whatsapp',
			'copy link'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'example' => array(
			
		),
		'attributes' => array(
			'networks' => array(
				'type' => 'array',
				'default' => array(
					'facebook',
					'x-twitter',
					'linkedin',
					'whatsapp',
					'email',
					'copy'
				)
			),
			'view' => array(
				'type' => 'string',
				'default' => 'icon-text'
			),
			'skin' => array(
				'type' => 'string',
				'default' => 'flat'
			),
			'shape' => array(
				'type' => 'string',
				'default' => 'rounded'
			),
			'align' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'alignMobile' => array(
				'type' => 'string',
				'default' => ''
			),
			'columns' => array(
				'type' => 'number',
				'default' => 0
			),
			'gap' => array(
				'type' => 'number',
				'default' => 10
			),
			'size' => array(
				'type' => 'number',
				'default' => 40
			),
			'iconSize' => array(
				'type' => 'number',
				'default' => 16
			),
			'labels' => array(
				'type' => 'object',
				'default' => array(
					
				)
			),
			'shareTarget' => array(
				'type' => 'string',
				'default' => 'current'
			),
			'customUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'colorSource' => array(
				'type' => 'string',
				'default' => 'official'
			),
			'primaryColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'secondaryColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'hoverPrimaryColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'hoverSecondaryColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'textFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'textFontSize' => array(
				'type' => 'number'
			),
			'textFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'textLineHeight' => array(
				'type' => 'number'
			),
			'textLetterSpacing' => array(
				'type' => 'number'
			),
			'textTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'textTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'render' => 'file:./render.php',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'slides' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/slides',
		'version' => '1.0.0',
		'title' => 'Slides',
		'category' => 'bpafb-widgets',
		'icon' => 'slides',
		'description' => 'A full-width hero slider: background images, headings, text, and buttons, with autoplay, arrows, and dots.',
		'keywords' => array(
			'slider',
			'slides',
			'hero',
			'carousel',
			'banner'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'example' => array(
			
		),
		'attributes' => array(
			'slides' => array(
				'type' => 'array',
				'default' => array(
					array(
						'heading' => 'Slide 1 Heading',
						'description' => 'Lorem ipsum dolor sit amet consectetur adipiscing elit dolor',
						'buttonText' => 'Click Here',
						'url' => '',
						'newTab' => false,
						'bgColor' => '#833ca3',
						'bgImageUrl' => '',
						'bgImageId' => 0,
						'overlay' => '',
						'align' => ''
					),
					array(
						'heading' => 'Slide 2 Heading',
						'description' => 'Lorem ipsum dolor sit amet consectetur adipiscing elit dolor',
						'buttonText' => 'Click Here',
						'url' => '',
						'newTab' => false,
						'bgColor' => '#4054b2',
						'bgImageUrl' => '',
						'bgImageId' => 0,
						'overlay' => '',
						'align' => ''
					),
					array(
						'heading' => 'Slide 3 Heading',
						'description' => 'Lorem ipsum dolor sit amet consectetur adipiscing elit dolor',
						'buttonText' => 'Click Here',
						'url' => '',
						'newTab' => false,
						'bgColor' => '#1abc9c',
						'bgImageUrl' => '',
						'bgImageId' => 0,
						'overlay' => '',
						'align' => ''
					)
				)
			),
			'height' => array(
				'type' => 'number',
				'default' => 500
			),
			'heightTablet' => array(
				'type' => 'number'
			),
			'heightMobile' => array(
				'type' => 'number'
			),
			'contentWidth' => array(
				'type' => 'number',
				'default' => 700
			),
			'padding' => array(
				'type' => 'number',
				'default' => 50
			),
			'contentAlign' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'verticalAlign' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'headingTag' => array(
				'type' => 'string',
				'default' => 'h2'
			),
			'effect' => array(
				'type' => 'string',
				'default' => 'slide'
			),
			'speed' => array(
				'type' => 'number',
				'default' => 500
			),
			'autoplay' => array(
				'type' => 'boolean',
				'default' => true
			),
			'autoplaySpeed' => array(
				'type' => 'number',
				'default' => 5000
			),
			'pauseOnHover' => array(
				'type' => 'boolean',
				'default' => true
			),
			'loop' => array(
				'type' => 'boolean',
				'default' => true
			),
			'navigation' => array(
				'type' => 'string',
				'default' => 'both'
			),
			'kenBurns' => array(
				'type' => 'boolean',
				'default' => false
			),
			'linkWholeSlide' => array(
				'type' => 'boolean',
				'default' => false
			),
			'headingFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'headingFontSize' => array(
				'type' => 'number'
			),
			'headingFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'headingLineHeight' => array(
				'type' => 'number'
			),
			'headingLetterSpacing' => array(
				'type' => 'number'
			),
			'headingTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'headingTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'headingColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'descFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'descFontSize' => array(
				'type' => 'number'
			),
			'descFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'descLineHeight' => array(
				'type' => 'number'
			),
			'descLetterSpacing' => array(
				'type' => 'number'
			),
			'descTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'descTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'descColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonHoverBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonBorderColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonRadius' => array(
				'type' => 'number',
				'default' => 4
			),
			'buttonStyle' => array(
				'type' => 'string',
				'default' => 'outline'
			),
			'arrowColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'arrowSize' => array(
				'type' => 'number',
				'default' => 22
			),
			'dotColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'dotActiveColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'borderRadius' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'align' => array(
				'wide',
				'full'
			)
		),
		'render' => 'file:./render.php',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'editorStyle' => 'file:./index.css',
		'viewScript' => 'file:./view.js'
	),
	'social-icons' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/social-icons',
		'version' => '0.1.0',
		'title' => 'Social Icons',
		'category' => 'bpafb-widgets',
		'icon' => 'share',
		'description' => 'A premium social icons block with customizable controls.',
		'example' => array(
			
		),
		'attributes' => array(
			'items' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => '1',
						'network' => 'facebook',
						'icon' => 'fab fa-facebook-f',
						'link' => '#',
						'color' => '#1877F2'
					),
					array(
						'id' => '2',
						'network' => 'twitter',
						'icon' => 'fa-brands fa-x-twitter',
						'link' => '#',
						'color' => '#000000'
					),
					array(
						'id' => '3',
						'network' => 'youtube',
						'icon' => 'fab fa-youtube',
						'link' => '#',
						'color' => '#FF0000'
					)
				)
			),
			'shape' => array(
				'type' => 'string',
				'default' => 'rounded'
			),
			'alignment' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'iconSize' => array(
				'type' => 'number',
				'default' => 18
			),
			'iconPadding' => array(
				'type' => 'number',
				'default' => 10
			),
			'iconSpacing' => array(
				'type' => 'number',
				'default' => 10
			),
			'colorType' => array(
				'type' => 'string',
				'default' => 'official'
			),
			'customPrimaryColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'customSecondaryColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'hoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'align' => array(
				'wide',
				'full'
			),
			'html' => false,
			'anchor' => true
		),
		'textdomain' => 'blockive-premium-addon-for-block',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./index.css'
	),
	'table-of-contents' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/table-of-contents',
		'version' => '1.0.0',
		'title' => 'Table of Contents',
		'category' => 'bpafb-widgets',
		'icon' => 'list-view',
		'description' => 'A linked list of the page\'s headings, built in the browser, with nesting, collapse, and scroll highlighting.',
		'keywords' => array(
			'toc',
			'table of contents',
			'headings',
			'anchors',
			'navigation'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'example' => array(
			
		),
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'default' => 'Table of Contents'
			),
			'titleTag' => array(
				'type' => 'string',
				'default' => 'h4'
			),
			'headingTags' => array(
				'type' => 'array',
				'items' => array(
					'type' => 'string'
				),
				'default' => array(
					'h2',
					'h3',
					'h4'
				)
			),
			'container' => array(
				'type' => 'string',
				'default' => ''
			),
			'exclude' => array(
				'type' => 'string',
				'default' => ''
			),
			'marker' => array(
				'type' => 'string',
				'default' => 'numbers'
			),
			'hierarchical' => array(
				'type' => 'boolean',
				'default' => true
			),
			'collapsible' => array(
				'type' => 'boolean',
				'default' => true
			),
			'collapsed' => array(
				'type' => 'boolean',
				'default' => false
			),
			'collapsedMobile' => array(
				'type' => 'boolean',
				'default' => true
			),
			'scrollOffset' => array(
				'type' => 'number',
				'default' => 0
			),
			'noHeadingsText' => array(
				'type' => 'string',
				'default' => 'No headings were found on this page.'
			),
			'bgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'borderColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'borderWidth' => array(
				'type' => 'number',
				'default' => 1
			),
			'borderRadius' => array(
				'type' => 'number',
				'default' => 6
			),
			'padding' => array(
				'type' => 'number',
				'default' => 20
			),
			'titleFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleFontSize' => array(
				'type' => 'number'
			),
			'titleFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleLineHeight' => array(
				'type' => 'number'
			),
			'titleLetterSpacing' => array(
				'type' => 'number'
			),
			'titleTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'separator' => array(
				'type' => 'boolean',
				'default' => true
			),
			'linkFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'linkFontSize' => array(
				'type' => 'number'
			),
			'linkFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'linkLineHeight' => array(
				'type' => 'number'
			),
			'linkLetterSpacing' => array(
				'type' => 'number'
			),
			'linkTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'linkTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'linkColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'linkHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'linkActiveColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'markerColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'indent' => array(
				'type' => 'number',
				'default' => 16
			),
			'itemSpacing' => array(
				'type' => 'number',
				'default' => 6
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'align' => array(
				'wide',
				'full'
			)
		),
		'render' => 'file:./render.php',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'editorStyle' => 'file:./index.css',
		'viewScript' => 'file:./view.js'
	),
	'tabs' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/tabs',
		'version' => '0.1.0',
		'title' => 'Tabs',
		'category' => 'bpafb-widgets',
		'icon' => 'index-card',
		'description' => 'A modern Tab block with premium segmented control styling.',
		'example' => array(
			
		),
		'attributes' => array(
			'items' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => '1',
						'title' => 'First Tab',
						'content' => 'This is the content for the first tab.'
					),
					array(
						'id' => '2',
						'title' => 'Second Tab',
						'content' => 'This is the content for the second tab.'
					),
					array(
						'id' => '3',
						'title' => 'Third Tab',
						'content' => 'This is the content for the third tab.'
					)
				)
			),
			'tabBgColor' => array(
				'type' => 'string',
				'default' => '#f1f5f9'
			),
			'tabActiveColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'textColor' => array(
				'type' => 'string',
				'default' => '#64748b'
			),
			'textActiveColor' => array(
				'type' => 'string',
				'default' => '#0f172a'
			),
			'contentBgColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'contentTextColor' => array(
				'type' => 'string',
				'default' => '#334155'
			),
			'tabBorderRadius' => array(
				'type' => 'number',
				'default' => 12
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'align' => array(
				'wide',
				'full'
			),
			'html' => false,
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true,
				'__experimentalFontFamily' => true,
				'__experimentalDefaultControls' => array(
					'fontSize' => true
				)
			),
			'anchor' => true
		),
		'textdomain' => 'blockive-premium-addon-for-block',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./index.css',
		'viewScript' => 'file:./view.js'
	),
	'team' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/team',
		'version' => '0.1.0',
		'title' => 'Team',
		'category' => 'bpafb-widgets',
		'icon' => 'groups',
		'description' => 'Team members showcase block.',
		'example' => array(
			
		),
		'attributes' => array(
			'members' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => '1',
						'name' => 'John Smith',
						'role' => 'Team Lead',
						'image' => '',
						'bio' => 'Experienced team lead with expertise in project management.',
						'socialLinks' => array(
							
						)
					),
					array(
						'id' => '2',
						'name' => 'Alina Doe',
						'role' => 'CEO',
						'image' => '',
						'bio' => 'A very good and experienced in this field',
						'socialLinks' => array(
							
						)
					),
					array(
						'id' => '3',
						'name' => 'Aria Smith',
						'role' => 'Manager',
						'image' => '',
						'bio' => 'Manager is very good at her job',
						'socialLinks' => array(
							
						)
					)
				)
			),
			'columns' => array(
				'type' => 'number',
				'default' => 3
			),
			'columnGap' => array(
				'type' => 'number',
				'default' => 25
			),
			'showImage' => array(
				'type' => 'boolean',
				'default' => true
			),
			'imageStyle' => array(
				'type' => 'string',
				'default' => 'circle'
			),
			'imageBorderWidth' => array(
				'type' => 'number',
				'default' => 0
			),
			'imageBorderColor' => array(
				'type' => 'string',
				'default' => '#dddddd'
			),
			'textColor' => array(
				'type' => 'string',
				'default' => '#333333'
			),
			'descColor' => array(
				'type' => 'string',
				'default' => '#666666'
			),
			'positionColor' => array(
				'type' => 'string',
				'default' => '#4f46e5'
			),
			'bgColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'cardBorderWidth' => array(
				'type' => 'number',
				'default' => 0
			),
			'cardBorderRadius' => array(
				'type' => 'number',
				'default' => 8
			),
			'cardBorderColor' => array(
				'type' => 'string',
				'default' => '#dddddd'
			),
			'enableBoxShadow' => array(
				'type' => 'boolean',
				'default' => true
			),
			'boxShadowHOffset' => array(
				'type' => 'number',
				'default' => 0
			),
			'boxShadowVOffset' => array(
				'type' => 'number',
				'default' => 2
			),
			'boxShadowBlur' => array(
				'type' => 'number',
				'default' => 8
			),
			'boxShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'boxShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0, 0, 0, 0.1)'
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./index.css',
		'supports' => array(
			'anchor' => true
		)
	),
	'template' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/template',
		'version' => '1.0.0',
		'title' => 'Template',
		'category' => 'bpafb-widgets',
		'icon' => 'layout',
		'description' => 'Shows a saved "Section" Blockive Template here. Edit it once, and it updates everywhere it is used.',
		'keywords' => array(
			'template',
			'section',
			'reusable',
			'saved',
			'embed',
			'global'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'example' => array(
			
		),
		'attributes' => array(
			'templateId' => array(
				'type' => 'number',
				'default' => 0
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'align' => array(
				'wide',
				'full'
			)
		),
		'render' => 'file:./render.php',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css'
	),
	'testimonial' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/testimonial',
		'version' => '0.1.0',
		'title' => 'Testimonial',
		'category' => 'bpafb-widgets',
		'icon' => 'format-quote',
		'description' => 'Customer testimonials slider block.',
		'example' => array(
			
		),
		'attributes' => array(
			'testimonials' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => '1',
						'name' => 'John Doe',
						'designation' => 'CEO',
						'image' => '',
						'content' => 'This is an amazing product! Highly recommended.',
						'rating' => 5
					),
					array(
						'id' => '2',
						'name' => 'Alina Doe',
						'designation' => 'Designer',
						'image' => '',
						'content' => 'The quality is good and the delivery was so fast.',
						'rating' => 4
					),
					array(
						'id' => '3',
						'name' => 'Aria Smith',
						'designation' => 'Manager',
						'image' => '',
						'content' => 'Excellent service and fast delivery. The product is exactly as described.',
						'rating' => 5
					)
				)
			),
			'style' => array(
				'type' => 'string',
				'default' => 'style1'
			),
			'showImage' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showRating' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showDots' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showArrows' => array(
				'type' => 'boolean',
				'default' => true
			),
			'textColor' => array(
				'type' => 'string',
				'default' => '#333333'
			),
			'descColor' => array(
				'type' => 'string',
				'default' => '#333333'
			),
			'positionColor' => array(
				'type' => 'string',
				'default' => '#999999'
			),
			'bgColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'arrowIcon' => array(
				'type' => 'string',
				'default' => 'angle'
			),
			'imagePosition' => array(
				'type' => 'string',
				'default' => 'top'
			),
			'imageStyle' => array(
				'type' => 'string',
				'default' => 'circle'
			),
			'textAlign' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'autoPlay' => array(
				'type' => 'boolean',
				'default' => true
			),
			'autoPlaySpeed' => array(
				'type' => 'number',
				'default' => 3000
			),
			'arrowColor' => array(
				'type' => 'string',
				'default' => '#333333'
			),
			'arrowBgColor' => array(
				'type' => 'string',
				'default' => 'transparent'
			),
			'infiniteLoop' => array(
				'type' => 'boolean',
				'default' => true
			),
			'cardBorderWidth' => array(
				'type' => 'number',
				'default' => 0
			),
			'cardBorderRadius' => array(
				'type' => 'number',
				'default' => 8
			),
			'cardBorderColor' => array(
				'type' => 'string',
				'default' => '#dddddd'
			),
			'enableBoxShadow' => array(
				'type' => 'boolean',
				'default' => true
			),
			'dotColor' => array(
				'type' => 'string',
				'default' => '#dddddd'
			),
			'activeDotColor' => array(
				'type' => 'string',
				'default' => '#4f46e5'
			),
			'boxShadowHOffset' => array(
				'type' => 'number',
				'default' => 0
			),
			'boxShadowVOffset' => array(
				'type' => 'number',
				'default' => 2
			),
			'boxShadowBlur' => array(
				'type' => 'number',
				'default' => 8
			),
			'boxShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'boxShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0, 0, 0, 0.1)'
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./index.css',
		'viewScript' => 'file:./view.js',
		'supports' => array(
			'anchor' => true
		)
	),
	'testimonial-carousel' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/testimonial-carousel',
		'version' => '1.0.0',
		'title' => 'Testimonial Carousel',
		'category' => 'bpafb-widgets',
		'icon' => 'format-quote',
		'description' => 'Customer quotes in a carousel, with default or speech-bubble skins and five image layouts.',
		'keywords' => array(
			'testimonial',
			'carousel',
			'quote',
			'slider',
			'review'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'example' => array(
			
		),
		'attributes' => array(
			'items' => array(
				'type' => 'array',
				'default' => array(
					array(
						'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
						'name' => 'John Doe',
						'title' => 'CEO, Acme',
						'imageId' => 0,
						'imageUrl' => '',
						'link' => '',
						'newTab' => false
					),
					array(
						'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
						'name' => 'Jane Smith',
						'title' => 'Designer',
						'imageId' => 0,
						'imageUrl' => '',
						'link' => '',
						'newTab' => false
					),
					array(
						'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
						'name' => 'Alex Morgan',
						'title' => 'Marketing Lead',
						'imageId' => 0,
						'imageUrl' => '',
						'link' => '',
						'newTab' => false
					)
				)
			),
			'skin' => array(
				'type' => 'string',
				'default' => 'default'
			),
			'layout' => array(
				'type' => 'string',
				'default' => 'image_inline'
			),
			'align' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'slidesPerView' => array(
				'type' => 'number',
				'default' => 1
			),
			'slidesPerViewTablet' => array(
				'type' => 'number',
				'default' => 1
			),
			'slidesPerViewMobile' => array(
				'type' => 'number',
				'default' => 1
			),
			'gap' => array(
				'type' => 'number',
				'default' => 20
			),
			'speed' => array(
				'type' => 'number',
				'default' => 500
			),
			'autoplay' => array(
				'type' => 'boolean',
				'default' => true
			),
			'autoplaySpeed' => array(
				'type' => 'number',
				'default' => 5000
			),
			'pauseOnHover' => array(
				'type' => 'boolean',
				'default' => true
			),
			'loop' => array(
				'type' => 'boolean',
				'default' => true
			),
			'navigation' => array(
				'type' => 'string',
				'default' => 'both'
			),
			'arrowPosition' => array(
				'type' => 'string',
				'default' => 'outside'
			),
			'arrowSize' => array(
				'type' => 'number',
				'default' => 18
			),
			'arrowColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'arrowBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'arrowHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'arrowHoverBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'dotSize' => array(
				'type' => 'number',
				'default' => 10
			),
			'dotColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'dotActiveColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'imageSize' => array(
				'type' => 'number',
				'default' => 60
			),
			'imageRadius' => array(
				'type' => 'number',
				'default' => 50
			),
			'cardBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'cardBorderColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'cardBorderWidth' => array(
				'type' => 'number',
				'default' => 0
			),
			'cardRadius' => array(
				'type' => 'number',
				'default' => 8
			),
			'cardPadding' => array(
				'type' => 'number',
				'default' => 20
			),
			'contentFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'contentFontSize' => array(
				'type' => 'number'
			),
			'contentFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'contentLineHeight' => array(
				'type' => 'number'
			),
			'contentLetterSpacing' => array(
				'type' => 'number'
			),
			'contentTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'contentTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'contentColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'nameFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'nameFontSize' => array(
				'type' => 'number'
			),
			'nameFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'nameLineHeight' => array(
				'type' => 'number'
			),
			'nameLetterSpacing' => array(
				'type' => 'number'
			),
			'nameTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'nameTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'nameColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleFontSize' => array(
				'type' => 'number'
			),
			'titleFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleLineHeight' => array(
				'type' => 'number'
			),
			'titleLetterSpacing' => array(
				'type' => 'number'
			),
			'titleTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'align' => array(
				'wide',
				'full'
			)
		),
		'render' => 'file:./render.php',
		'editorScript' => 'file:./index.js',
		'style' => array(
			'bpafb-pro-carousel',
			'file:./style-index.css'
		),
		'editorStyle' => 'file:./index.css',
		'viewScript' => 'file:./view.js'
	),
	'video' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/video',
		'version' => '0.1.0',
		'title' => 'Video',
		'category' => 'bpafb-widgets',
		'icon' => 'video-alt',
		'description' => 'Video embedding block with customization options.',
		'example' => array(
			
		),
		'attributes' => array(
			'videoUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'width' => array(
				'type' => 'string',
				'default' => '100%'
			),
			'height' => array(
				'type' => 'string',
				'default' => '400px'
			),
			'autoplay' => array(
				'type' => 'boolean',
				'default' => false
			),
			'controls' => array(
				'type' => 'boolean',
				'default' => true
			),
			'loop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'editorScript' => 'file:./index.js',
		'style' => 'file:./index.css',
		'supports' => array(
			'anchor' => true
		)
	),
	'video-playlist' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/video-playlist',
		'version' => '1.0.0',
		'title' => 'Video Playlist',
		'category' => 'bpafb-widgets',
		'icon' => 'playlist-video',
		'description' => 'A video player with a list of YouTube, Vimeo, or self-hosted videos to choose from.',
		'keywords' => array(
			'video',
			'playlist',
			'youtube',
			'vimeo',
			'player',
			'course'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'example' => array(
			
		),
		'attributes' => array(
			'items' => array(
				'type' => 'array',
				'default' => array(
					array(
						'title' => 'Big Buck Bunny',
						'url' => 'https://www.youtube.com/watch?v=aqz-KE-bpKQ',
						'thumbnailId' => 0,
						'thumbnailUrl' => '',
						'duration' => '10:34'
					),
					array(
						'title' => 'Add your second video',
						'url' => '',
						'thumbnailId' => 0,
						'thumbnailUrl' => '',
						'duration' => ''
					)
				)
			),
			'playlistTitle' => array(
				'type' => 'string',
				'default' => 'Playlist'
			),
			'listPosition' => array(
				'type' => 'string',
				'default' => 'right'
			),
			'aspectRatio' => array(
				'type' => 'string',
				'default' => '16/9'
			),
			'showThumbnails' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showDuration' => array(
				'type' => 'boolean',
				'default' => true
			),
			'autoNext' => array(
				'type' => 'boolean',
				'default' => true
			),
			'listWidth' => array(
				'type' => 'number',
				'default' => 320
			),
			'listBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'itemColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'itemActiveBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'itemActiveColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'playColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'borderRadius' => array(
				'type' => 'number',
				'default' => 8
			),
			'itemFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'itemFontSize' => array(
				'type' => 'number'
			),
			'itemFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'itemLineHeight' => array(
				'type' => 'number'
			),
			'itemLetterSpacing' => array(
				'type' => 'number'
			),
			'itemTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'itemTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'align' => array(
				'wide',
				'full'
			)
		),
		'render' => 'file:./render.php',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'archive-posts' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/tb-archive-posts',
		'version' => '1.0.0',
		'title' => 'Archive Posts',
		'category' => 'blockive-template',
		'icon' => 'grid-view',
		'description' => 'Lists the posts of the archive or search results being viewed, with pagination. For Archive and Search Results templates.',
		'keywords' => array(
			'archive',
			'posts',
			'loop',
			'blog',
			'search results',
			'category'
		),
		'usesContext' => array(
			'postId',
			'postType'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'example' => array(
			
		),
		'attributes' => array(
			'layout' => array(
				'type' => 'string',
				'default' => 'card'
			),
			'templateId' => array(
				'type' => 'number',
				'default' => 0
			),
			'columns' => array(
				'type' => 'number',
				'default' => 3
			),
			'columnsTablet' => array(
				'type' => 'number',
				'default' => 2
			),
			'columnsMobile' => array(
				'type' => 'number',
				'default' => 1
			),
			'columnGap' => array(
				'type' => 'number',
				'default' => 24
			),
			'rowGap' => array(
				'type' => 'number',
				'default' => 24
			),
			'equalHeight' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showImage' => array(
				'type' => 'boolean',
				'default' => true
			),
			'imageSize' => array(
				'type' => 'string',
				'default' => 'medium_large'
			),
			'imageRatio' => array(
				'type' => 'string',
				'default' => '16/10'
			),
			'showTitle' => array(
				'type' => 'boolean',
				'default' => true
			),
			'titleTag' => array(
				'type' => 'string',
				'default' => 'h3'
			),
			'showDate' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showAuthor' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showComments' => array(
				'type' => 'boolean',
				'default' => false
			),
			'showCategories' => array(
				'type' => 'boolean',
				'default' => false
			),
			'showExcerpt' => array(
				'type' => 'boolean',
				'default' => true
			),
			'excerptLength' => array(
				'type' => 'number',
				'default' => 20
			),
			'showReadMore' => array(
				'type' => 'boolean',
				'default' => true
			),
			'readMoreText' => array(
				'type' => 'string',
				'default' => 'Read More »'
			),
			'paginationType' => array(
				'type' => 'string',
				'default' => 'numbers'
			),
			'paginationAlign' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'prevText' => array(
				'type' => 'string',
				'default' => '« Previous'
			),
			'nextText' => array(
				'type' => 'string',
				'default' => 'Next »'
			),
			'nothingFoundText' => array(
				'type' => 'string',
				'default' => 'Nothing found. Please try a different search.'
			),
			'cardBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'cardRadius' => array(
				'type' => 'number',
				'default' => 8
			),
			'cardBorderWidth' => array(
				'type' => 'number',
				'default' => 0
			),
			'cardBorderColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'cardShadow' => array(
				'type' => 'boolean',
				'default' => true
			),
			'cardPadding' => array(
				'type' => 'number',
				'default' => 20
			),
			'titleFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleFontSize' => array(
				'type' => 'number'
			),
			'titleFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleLineHeight' => array(
				'type' => 'number'
			),
			'titleLetterSpacing' => array(
				'type' => 'number'
			),
			'titleTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'metaColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'excerptColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'readMoreColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'readMoreHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'paginationColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'paginationActiveColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'paginationActiveBg' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'render' => 'file:./render.php'
	),
	'archive-products' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/tb-archive-products',
		'version' => '1.0.0',
		'title' => 'Archive Products',
		'category' => 'blockive-template',
		'icon' => 'products',
		'description' => 'Lists the products of the shop, product category/tag, or product search being viewed, with sorting and pagination.',
		'keywords' => array(
			'shop',
			'products',
			'woocommerce',
			'archive',
			'catalog'
		),
		'usesContext' => array(
			'postId',
			'postType'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'example' => array(
			
		),
		'attributes' => array(
			'layout' => array(
				'type' => 'string',
				'default' => 'card'
			),
			'templateId' => array(
				'type' => 'number',
				'default' => 0
			),
			'columns' => array(
				'type' => 'number',
				'default' => 4
			),
			'columnsTablet' => array(
				'type' => 'number',
				'default' => 3
			),
			'columnsMobile' => array(
				'type' => 'number',
				'default' => 2
			),
			'columnGap' => array(
				'type' => 'number',
				'default' => 24
			),
			'rowGap' => array(
				'type' => 'number',
				'default' => 32
			),
			'showResultCount' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showOrdering' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showImage' => array(
				'type' => 'boolean',
				'default' => true
			),
			'imageRatio' => array(
				'type' => 'string',
				'default' => '1/1'
			),
			'showSaleBadge' => array(
				'type' => 'boolean',
				'default' => true
			),
			'saleText' => array(
				'type' => 'string',
				'default' => 'Sale!'
			),
			'showTitle' => array(
				'type' => 'boolean',
				'default' => true
			),
			'titleTag' => array(
				'type' => 'string',
				'default' => 'h3'
			),
			'showRating' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showPrice' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showAddToCart' => array(
				'type' => 'boolean',
				'default' => true
			),
			'contentAlign' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'paginationType' => array(
				'type' => 'string',
				'default' => 'numbers'
			),
			'paginationAlign' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'prevText' => array(
				'type' => 'string',
				'default' => '←'
			),
			'nextText' => array(
				'type' => 'string',
				'default' => '→'
			),
			'nothingFoundText' => array(
				'type' => 'string',
				'default' => 'No products were found matching your selection.'
			),
			'cardBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'cardRadius' => array(
				'type' => 'number',
				'default' => 8
			),
			'cardBorderWidth' => array(
				'type' => 'number',
				'default' => 0
			),
			'cardBorderColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'cardShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'cardPadding' => array(
				'type' => 'number',
				'default' => 0
			),
			'titleFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleFontSize' => array(
				'type' => 'number'
			),
			'titleFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleLineHeight' => array(
				'type' => 'number'
			),
			'titleLetterSpacing' => array(
				'type' => 'number'
			),
			'titleTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'priceColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'saleBadgeBg' => array(
				'type' => 'string',
				'default' => ''
			),
			'saleBadgeColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonHoverBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonRadius' => array(
				'type' => 'number',
				'default' => 4
			),
			'paginationColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'paginationActiveColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'paginationActiveBg' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'render' => 'file:./render.php'
	),
	'author-box' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/tb-author-box',
		'version' => '1.0.0',
		'title' => 'Author Box',
		'category' => 'blockive-template',
		'icon' => 'id',
		'description' => 'The post author\'s photo, name, bio, and a link to their posts or website.',
		'keywords' => array(
			'author',
			'bio',
			'profile',
			'about',
			'avatar'
		),
		'usesContext' => array(
			'postId',
			'postType'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'example' => array(
			
		),
		'attributes' => array(
			'source' => array(
				'type' => 'string',
				'default' => 'current'
			),
			'customName' => array(
				'type' => 'string',
				'default' => ''
			),
			'customBio' => array(
				'type' => 'string',
				'default' => ''
			),
			'customImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'customImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'customLink' => array(
				'type' => 'string',
				'default' => ''
			),
			'layout' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'align' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'gap' => array(
				'type' => 'number',
				'default' => 20
			),
			'showAvatar' => array(
				'type' => 'boolean',
				'default' => true
			),
			'avatarSize' => array(
				'type' => 'number',
				'default' => 96
			),
			'avatarRadius' => array(
				'type' => 'number',
				'default' => 50
			),
			'avatarBorderWidth' => array(
				'type' => 'number',
				'default' => 0
			),
			'avatarBorderColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'showName' => array(
				'type' => 'boolean',
				'default' => true
			),
			'nameTag' => array(
				'type' => 'string',
				'default' => 'h4'
			),
			'nameLinkTo' => array(
				'type' => 'string',
				'default' => 'archive'
			),
			'nameFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'nameFontSize' => array(
				'type' => 'number'
			),
			'nameFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'nameLineHeight' => array(
				'type' => 'number'
			),
			'nameLetterSpacing' => array(
				'type' => 'number'
			),
			'nameTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'nameTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'nameColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'nameHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'showBio' => array(
				'type' => 'boolean',
				'default' => true
			),
			'bioFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'bioFontSize' => array(
				'type' => 'number'
			),
			'bioFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'bioLineHeight' => array(
				'type' => 'number'
			),
			'bioLetterSpacing' => array(
				'type' => 'number'
			),
			'bioTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'bioTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'bioColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'showLink' => array(
				'type' => 'boolean',
				'default' => true
			),
			'linkText' => array(
				'type' => 'string',
				'default' => 'All Posts'
			),
			'linkTo' => array(
				'type' => 'string',
				'default' => 'archive'
			),
			'buttonStyle' => array(
				'type' => 'string',
				'default' => 'outline'
			),
			'buttonColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonBorderColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonHoverBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonRadius' => array(
				'type' => 'number',
				'default' => 4
			),
			'bgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'borderColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'borderWidth' => array(
				'type' => 'number',
				'default' => 0
			),
			'borderRadius' => array(
				'type' => 'number',
				'default' => 0
			),
			'padding' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'render' => 'file:./render.php'
	),
	'copyright' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/tb-copyright',
		'version' => '1.0.0',
		'title' => 'Copyright',
		'category' => 'blockive-site',
		'icon' => 'shield',
		'description' => 'Footer copyright line that keeps the year current. Supports {year}, {site_title}, and {site_url}.',
		'keywords' => array(
			'copyright',
			'footer',
			'year',
			'credits'
		),
		'usesContext' => array(
			'postId',
			'postType'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'example' => array(
			
		),
		'attributes' => array(
			'content' => array(
				'type' => 'string',
				'default' => '© {year} {site_title}. All rights reserved.'
			),
			'textAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'textColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'linkColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'linkHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'color' => array(
				'text' => true,
				'background' => false,
				'gradients' => false,
				'link' => true
			),
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true,
				'__experimentalFontFamily' => true,
				'__experimentalFontWeight' => true,
				'__experimentalFontStyle' => true,
				'__experimentalTextTransform' => true,
				'__experimentalTextDecoration' => true,
				'__experimentalLetterSpacing' => true,
				'__experimentalDefaultControls' => array(
					'fontSize' => true
				)
			),
			'anchor' => true
		),
		'render' => 'file:./render.php'
	),
	'login' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/tb-login',
		'version' => '1.0.0',
		'title' => 'Login',
		'category' => 'blockive-site',
		'icon' => 'admin-users',
		'description' => 'A login/logout link for headers, or a full login form.',
		'keywords' => array(
			'login',
			'logout',
			'account',
			'sign in',
			'header'
		),
		'usesContext' => array(
			'postId',
			'postType'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'example' => array(
			
		),
		'attributes' => array(
			'layout' => array(
				'type' => 'string',
				'default' => 'link'
			),
			'loginText' => array(
				'type' => 'string',
				'default' => 'Log In'
			),
			'logoutText' => array(
				'type' => 'string',
				'default' => 'Log Out'
			),
			'showGreeting' => array(
				'type' => 'boolean',
				'default' => true
			),
			'greetingText' => array(
				'type' => 'string',
				'default' => 'Hi, %s'
			),
			'showAvatar' => array(
				'type' => 'boolean',
				'default' => true
			),
			'accountUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'loginUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'redirect' => array(
				'type' => 'string',
				'default' => 'current'
			),
			'redirectUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'logoutRedirect' => array(
				'type' => 'string',
				'default' => 'current'
			),
			'showRemember' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showLostPassword' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showRegister' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showLabels' => array(
				'type' => 'boolean',
				'default' => true
			),
			'buttonText' => array(
				'type' => 'string',
				'default' => 'Log In'
			),
			'align' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'textFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'textFontSize' => array(
				'type' => 'number'
			),
			'textFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'textLineHeight' => array(
				'type' => 'number'
			),
			'textLetterSpacing' => array(
				'type' => 'number'
			),
			'textTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'textTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'textColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'textHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonHoverBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonRadius' => array(
				'type' => 'number',
				'default' => 4
			),
			'fieldBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'fieldBorderColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'fieldRadius' => array(
				'type' => 'number',
				'default' => 4
			),
			'labelColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'render' => 'file:./render.php'
	),
	'menu-cart' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/tb-menu-cart',
		'version' => '1.0.0',
		'title' => 'Menu Cart',
		'category' => 'blockive-site',
		'icon' => 'cart',
		'description' => 'A WooCommerce cart icon with item count, subtotal, and a mini-cart dropdown.',
		'keywords' => array(
			'cart',
			'woocommerce',
			'basket',
			'header'
		),
		'usesContext' => array(
			'postId',
			'postType'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'example' => array(
			
		),
		'attributes' => array(
			'icon' => array(
				'type' => 'string',
				'default' => 'cart'
			),
			'showCount' => array(
				'type' => 'boolean',
				'default' => true
			),
			'hideEmptyCount' => array(
				'type' => 'boolean',
				'default' => false
			),
			'showSubtotal' => array(
				'type' => 'boolean',
				'default' => true
			),
			'behavior' => array(
				'type' => 'string',
				'default' => 'dropdown'
			),
			'dropdownAlign' => array(
				'type' => 'string',
				'default' => 'right'
			),
			'align' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'iconSize' => array(
				'type' => 'number',
				'default' => 22
			),
			'iconColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'iconHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'countColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'countBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'subtotalColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'subtotalFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'subtotalFontSize' => array(
				'type' => 'number'
			),
			'subtotalFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'subtotalLineHeight' => array(
				'type' => 'number'
			),
			'subtotalLetterSpacing' => array(
				'type' => 'number'
			),
			'subtotalTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'subtotalTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonHoverBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'dropdownBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'dropdownWidth' => array(
				'type' => 'number',
				'default' => 320
			),
			'dropdownRadius' => array(
				'type' => 'number',
				'default' => 8
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'page-title' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/tb-page-title',
		'version' => '1.0.0',
		'title' => 'Page Title',
		'category' => 'blockive-site',
		'icon' => 'heading',
		'description' => 'Shows the title of whatever is being viewed: a page, post, archive, search results, or 404.',
		'keywords' => array(
			'title',
			'archive title',
			'heading',
			'hero'
		),
		'usesContext' => array(
			'postId',
			'postType'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'example' => array(
			
		),
		'attributes' => array(
			'tagName' => array(
				'type' => 'string',
				'default' => 'h1'
			),
			'textAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'stripArchivePrefix' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showSearchQuery' => array(
				'type' => 'boolean',
				'default' => true
			),
			'searchPrefix' => array(
				'type' => 'string',
				'default' => 'Search results for:'
			),
			'notFoundText' => array(
				'type' => 'string',
				'default' => 'Page not found'
			),
			'textColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'color' => array(
				'text' => true,
				'background' => false,
				'gradients' => false,
				'link' => true
			),
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true,
				'__experimentalFontFamily' => true,
				'__experimentalFontWeight' => true,
				'__experimentalFontStyle' => true,
				'__experimentalTextTransform' => true,
				'__experimentalTextDecoration' => true,
				'__experimentalLetterSpacing' => true,
				'__experimentalDefaultControls' => array(
					'fontSize' => true
				)
			),
			'anchor' => true
		),
		'render' => 'file:./render.php'
	),
	'post-comments' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/tb-post-comments',
		'version' => '1.0.0',
		'title' => 'Post Comments',
		'category' => 'blockive-template',
		'icon' => 'admin-comments',
		'description' => 'The post\'s comments, threaded, with the reply form.',
		'keywords' => array(
			'comments',
			'discussion',
			'reply',
			'form'
		),
		'usesContext' => array(
			'postId',
			'postType'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'example' => array(
			
		),
		'attributes' => array(
			'showTitle' => array(
				'type' => 'boolean',
				'default' => true
			),
			'titleTag' => array(
				'type' => 'string',
				'default' => 'h3'
			),
			'order' => array(
				'type' => 'string',
				'default' => 'default'
			),
			'showAvatar' => array(
				'type' => 'boolean',
				'default' => true
			),
			'avatarSize' => array(
				'type' => 'number',
				'default' => 48
			),
			'avatarRadius' => array(
				'type' => 'number',
				'default' => 50
			),
			'showForm' => array(
				'type' => 'boolean',
				'default' => true
			),
			'formTitle' => array(
				'type' => 'string',
				'default' => 'Leave a Reply'
			),
			'submitText' => array(
				'type' => 'string',
				'default' => 'Post Comment'
			),
			'closedText' => array(
				'type' => 'string',
				'default' => 'Comments are closed.'
			),
			'gap' => array(
				'type' => 'number',
				'default' => 24
			),
			'nestedIndent' => array(
				'type' => 'number',
				'default' => 40
			),
			'commentBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'commentBorderColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'commentBorderWidth' => array(
				'type' => 'number',
				'default' => 0
			),
			'commentRadius' => array(
				'type' => 'number',
				'default' => 0
			),
			'commentPadding' => array(
				'type' => 'number',
				'default' => 0
			),
			'separator' => array(
				'type' => 'boolean',
				'default' => true
			),
			'titleFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleFontSize' => array(
				'type' => 'number'
			),
			'titleFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleLineHeight' => array(
				'type' => 'number'
			),
			'titleLetterSpacing' => array(
				'type' => 'number'
			),
			'titleTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'authorColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'metaColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'contentFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'contentFontSize' => array(
				'type' => 'number'
			),
			'contentFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'contentLineHeight' => array(
				'type' => 'number'
			),
			'contentLetterSpacing' => array(
				'type' => 'number'
			),
			'contentTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'contentTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'contentColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'linkColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'fieldBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'fieldBorderColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'fieldRadius' => array(
				'type' => 'number',
				'default' => 4
			),
			'buttonColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonHoverBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonRadius' => array(
				'type' => 'number',
				'default' => 4
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'render' => 'file:./render.php'
	),
	'post-excerpt' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/tb-post-excerpt',
		'version' => '1.0.0',
		'title' => 'Post Excerpt',
		'category' => 'blockive-template',
		'icon' => 'excerpt-view',
		'description' => 'The post excerpt, or the start of its content, with an optional Read More link.',
		'keywords' => array(
			'excerpt',
			'summary',
			'teaser',
			'read more'
		),
		'usesContext' => array(
			'postId',
			'postType'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'example' => array(
			
		),
		'attributes' => array(
			'length' => array(
				'type' => 'number',
				'default' => 30
			),
			'useManual' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showMore' => array(
				'type' => 'boolean',
				'default' => false
			),
			'moreText' => array(
				'type' => 'string',
				'default' => 'Read more'
			),
			'align' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'textFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'textFontSize' => array(
				'type' => 'number'
			),
			'textFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'textLineHeight' => array(
				'type' => 'number'
			),
			'textLetterSpacing' => array(
				'type' => 'number'
			),
			'textTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'textTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'textColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'linkColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'linkHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'render' => 'file:./render.php'
	),
	'search-form' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/tb-search-form',
		'version' => '1.0.0',
		'title' => 'Search Form',
		'category' => 'blockive-site',
		'icon' => 'search',
		'description' => 'Site search, as a classic bar, a minimal field, or a full-screen overlay behind an icon.',
		'keywords' => array(
			'search',
			'find',
			'header'
		),
		'usesContext' => array(
			'postId',
			'postType'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'example' => array(
			
		),
		'attributes' => array(
			'skin' => array(
				'type' => 'string',
				'default' => 'classic'
			),
			'placeholder' => array(
				'type' => 'string',
				'default' => 'Search...'
			),
			'buttonType' => array(
				'type' => 'string',
				'default' => 'icon'
			),
			'buttonText' => array(
				'type' => 'string',
				'default' => 'Search'
			),
			'postType' => array(
				'type' => 'string',
				'default' => ''
			),
			'liveResults' => array(
				'type' => 'boolean',
				'default' => false
			),
			'liveCount' => array(
				'type' => 'number',
				'default' => 5
			),
			'liveMinChars' => array(
				'type' => 'number',
				'default' => 2
			),
			'liveShowImage' => array(
				'type' => 'boolean',
				'default' => true
			),
			'liveShowExcerpt' => array(
				'type' => 'boolean',
				'default' => false
			),
			'resultsBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'resultsTextColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'resultsActiveBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'align' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'inputWidth' => array(
				'type' => 'number'
			),
			'height' => array(
				'type' => 'number',
				'default' => 46
			),
			'toggleSize' => array(
				'type' => 'number',
				'default' => 20
			),
			'inputFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'inputFontSize' => array(
				'type' => 'number'
			),
			'inputFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'inputLineHeight' => array(
				'type' => 'number'
			),
			'inputLetterSpacing' => array(
				'type' => 'number'
			),
			'inputTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'inputTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'inputColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'inputBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'inputFocusBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'inputBorderColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'inputFocusBorderColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'borderWidth' => array(
				'type' => 'number',
				'default' => 1
			),
			'borderRadius' => array(
				'type' => 'number',
				'default' => 4
			),
			'buttonColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonHoverBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonWidth' => array(
				'type' => 'number'
			),
			'toggleColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'toggleHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'overlayBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'site-logo' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/tb-site-logo',
		'version' => '1.0.0',
		'title' => 'Site Logo',
		'category' => 'blockive-site',
		'icon' => 'format-image',
		'description' => 'Displays the site\'s logo, linked to the home page.',
		'keywords' => array(
			'logo',
			'brand',
			'header'
		),
		'usesContext' => array(
			'postId',
			'postType'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'example' => array(
			
		),
		'attributes' => array(
			'source' => array(
				'type' => 'string',
				'default' => 'site'
			),
			'customImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'customImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'customImageAlt' => array(
				'type' => 'string',
				'default' => ''
			),
			'imageSize' => array(
				'type' => 'string',
				'default' => 'full'
			),
			'width' => array(
				'type' => 'number',
				'default' => 160
			),
			'widthTablet' => array(
				'type' => 'number'
			),
			'widthMobile' => array(
				'type' => 'number'
			),
			'maxHeight' => array(
				'type' => 'number'
			),
			'align' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'isLink' => array(
				'type' => 'boolean',
				'default' => true
			),
			'linkTarget' => array(
				'type' => 'string',
				'default' => '_self'
			),
			'customLink' => array(
				'type' => 'string',
				'default' => ''
			),
			'borderRadius' => array(
				'type' => 'number'
			),
			'opacity' => array(
				'type' => 'number'
			),
			'hoverOpacity' => array(
				'type' => 'number'
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'render' => 'file:./render.php'
	),
	'site-tagline' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/tb-site-tagline',
		'version' => '1.0.0',
		'title' => 'Site Tagline',
		'category' => 'blockive-site',
		'icon' => 'editor-quote',
		'description' => 'Displays the site\'s tagline from Settings > General.',
		'keywords' => array(
			'description',
			'slogan',
			'header'
		),
		'usesContext' => array(
			'postId',
			'postType'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'example' => array(
			
		),
		'attributes' => array(
			'tagName' => array(
				'type' => 'string',
				'default' => 'p'
			),
			'textAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'textColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'color' => array(
				'text' => true,
				'background' => false,
				'gradients' => false,
				'link' => true
			),
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true,
				'__experimentalFontFamily' => true,
				'__experimentalFontWeight' => true,
				'__experimentalFontStyle' => true,
				'__experimentalTextTransform' => true,
				'__experimentalTextDecoration' => true,
				'__experimentalLetterSpacing' => true,
				'__experimentalDefaultControls' => array(
					'fontSize' => true
				)
			),
			'anchor' => true
		),
		'render' => 'file:./render.php'
	),
	'site-title' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/tb-site-title',
		'version' => '1.0.0',
		'title' => 'Site Title',
		'category' => 'blockive-site',
		'icon' => 'admin-site-alt3',
		'description' => 'Displays the site\'s title from Settings > General.',
		'keywords' => array(
			'site name',
			'brand',
			'header'
		),
		'usesContext' => array(
			'postId',
			'postType'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'example' => array(
			
		),
		'attributes' => array(
			'tagName' => array(
				'type' => 'string',
				'default' => 'p'
			),
			'textAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'isLink' => array(
				'type' => 'boolean',
				'default' => true
			),
			'linkTarget' => array(
				'type' => 'string',
				'default' => '_self'
			),
			'textColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'textHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'color' => array(
				'text' => true,
				'background' => false,
				'gradients' => false,
				'link' => true
			),
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true,
				'__experimentalFontFamily' => true,
				'__experimentalFontWeight' => true,
				'__experimentalFontStyle' => true,
				'__experimentalTextTransform' => true,
				'__experimentalTextDecoration' => true,
				'__experimentalLetterSpacing' => true,
				'__experimentalDefaultControls' => array(
					'fontSize' => true
				)
			),
			'anchor' => true
		),
		'render' => 'file:./render.php'
	),
	'sitemap' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/tb-sitemap',
		'version' => '1.0.0',
		'title' => 'Sitemap',
		'category' => 'blockive-site',
		'icon' => 'networking',
		'description' => 'A browsable list of the site\'s pages, posts, and categories - ideal for footers.',
		'keywords' => array(
			'sitemap',
			'links',
			'footer',
			'pages'
		),
		'usesContext' => array(
			'postId',
			'postType'
		),
		'textdomain' => 'blockive-premium-addon-for-block-pro',
		'example' => array(
			
		),
		'attributes' => array(
			'items' => array(
				'type' => 'array',
				'default' => array(
					array(
						'kind' => 'post_type',
						'name' => 'page',
						'title' => 'Pages'
					),
					array(
						'kind' => 'taxonomy',
						'name' => 'category',
						'title' => 'Categories'
					)
				)
			),
			'columns' => array(
				'type' => 'number',
				'default' => 2
			),
			'columnsTablet' => array(
				'type' => 'number',
				'default' => 2
			),
			'columnsMobile' => array(
				'type' => 'number',
				'default' => 1
			),
			'orderBy' => array(
				'type' => 'string',
				'default' => 'menu_order'
			),
			'order' => array(
				'type' => 'string',
				'default' => 'asc'
			),
			'limit' => array(
				'type' => 'number',
				'default' => 0
			),
			'hierarchical' => array(
				'type' => 'boolean',
				'default' => true
			),
			'hideEmpty' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showTitles' => array(
				'type' => 'boolean',
				'default' => true
			),
			'titleTag' => array(
				'type' => 'string',
				'default' => 'h4'
			),
			'exclude' => array(
				'type' => 'string',
				'default' => ''
			),
			'nofollow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'columnGap' => array(
				'type' => 'number',
				'default' => 30
			),
			'rowGap' => array(
				'type' => 'number',
				'default' => 30
			),
			'titleFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleFontSize' => array(
				'type' => 'number'
			),
			'titleFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleLineHeight' => array(
				'type' => 'number'
			),
			'titleLetterSpacing' => array(
				'type' => 'number'
			),
			'titleTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'linkFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'linkFontSize' => array(
				'type' => 'number'
			),
			'linkFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'linkLineHeight' => array(
				'type' => 'number'
			),
			'linkLetterSpacing' => array(
				'type' => 'number'
			),
			'linkTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'linkTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'linkColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'linkHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bulletColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'listStyle' => array(
				'type' => 'string',
				'default' => 'disc'
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'render' => 'file:./render.php'
	),
	'author' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/tb-author',
		'version' => '0.1.0',
		'title' => 'Author',
		'category' => 'blockive-template',
		'icon' => 'admin-users',
		'description' => 'Displays the current post\'s author name dynamically, optionally linked to their author archive. Blockive Template Builder only.',
		'usesContext' => array(
			'postId',
			'postType'
		),
		'textdomain' => 'blockive-premium-addon-for-block',
		'example' => array(
			
		),
		'attributes' => array(
			'displayFormat' => array(
				'type' => 'string',
				'default' => 'display_name'
			),
			'isLink' => array(
				'type' => 'boolean',
				'default' => false
			),
			'linkTarget' => array(
				'type' => 'string',
				'default' => '_self'
			),
			'textAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'textHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'color' => array(
				'text' => true,
				'background' => false,
				'gradients' => false,
				'link' => true
			),
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true,
				'__experimentalFontFamily' => true,
				'__experimentalFontWeight' => true,
				'__experimentalFontStyle' => true,
				'__experimentalTextTransform' => true,
				'__experimentalTextDecoration' => true,
				'__experimentalLetterSpacing' => true,
				'__experimentalDefaultControls' => array(
					'fontSize' => true
				)
			),
			'anchor' => true
		),
		'render' => 'file:./render.php'
	),
	'author-avatar' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/tb-author-avatar',
		'version' => '0.1.0',
		'title' => 'Author Avatar',
		'category' => 'blockive-template',
		'icon' => 'id',
		'description' => 'Displays the current post\'s author avatar dynamically, with size, border and shadow controls. Blockive Template Builder only.',
		'usesContext' => array(
			'postId',
			'postType'
		),
		'textdomain' => 'blockive-premium-addon-for-block',
		'example' => array(
			
		),
		'attributes' => array(
			'size' => array(
				'type' => 'number',
				'default' => 96
			),
			'borderRadius' => array(
				'type' => 'number',
				'default' => 9999
			),
			'borderType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'borderWidth' => array(
				'type' => 'number',
				'default' => 1
			),
			'borderColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'shadowEnabled' => array(
				'type' => 'boolean',
				'default' => false
			),
			'shadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'shadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'shadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'render' => 'file:./render.php'
	),
	'breadcrumbs' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/tb-breadcrumbs',
		'version' => '0.1.0',
		'title' => 'Breadcrumbs',
		'category' => 'blockive-template',
		'icon' => 'admin-links',
		'description' => 'Displays a Home > Category > Title breadcrumb trail for the current post dynamically. Blockive Template Builder only.',
		'usesContext' => array(
			'postId',
			'postType'
		),
		'textdomain' => 'blockive-premium-addon-for-block',
		'example' => array(
			
		),
		'attributes' => array(
			'separator' => array(
				'type' => 'string',
				'default' => '/'
			),
			'showHomeIcon' => array(
				'type' => 'boolean',
				'default' => true
			),
			'homeIcon' => array(
				'type' => 'string',
				'default' => 'fa-solid fa-house'
			),
			'textColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'textHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true,
				'__experimentalFontFamily' => true,
				'__experimentalFontWeight' => true,
				'__experimentalFontStyle' => true,
				'__experimentalTextTransform' => true,
				'__experimentalLetterSpacing' => true,
				'__experimentalDefaultControls' => array(
					'fontSize' => true
				)
			),
			'anchor' => true
		),
		'render' => 'file:./render.php'
	),
	'categories' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/tb-categories',
		'version' => '0.1.0',
		'title' => 'Categories',
		'category' => 'blockive-template',
		'icon' => 'category',
		'description' => 'Displays the current post\'s categories dynamically, as a plain list or as badges, with normal/hover colors. Blockive Template Builder only.',
		'usesContext' => array(
			'postId',
			'postType'
		),
		'textdomain' => 'blockive-premium-addon-for-block',
		'example' => array(
			
		),
		'attributes' => array(
			'separator' => array(
				'type' => 'string',
				'default' => ', '
			),
			'badgeStyle' => array(
				'type' => 'boolean',
				'default' => false
			),
			'isLink' => array(
				'type' => 'boolean',
				'default' => true
			),
			'textColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'textHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true,
				'__experimentalFontFamily' => true,
				'__experimentalFontWeight' => true,
				'__experimentalFontStyle' => true,
				'__experimentalTextTransform' => true,
				'__experimentalLetterSpacing' => true,
				'__experimentalDefaultControls' => array(
					'fontSize' => true
				)
			),
			'anchor' => true
		),
		'render' => 'file:./render.php'
	),
	'comments-count' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/tb-comments-count',
		'version' => '0.1.0',
		'title' => 'Comments Count',
		'category' => 'blockive-template',
		'icon' => 'admin-comments',
		'description' => 'Displays the current post\'s comment count dynamically. Blockive Template Builder only.',
		'usesContext' => array(
			'postId',
			'postType'
		),
		'textdomain' => 'blockive-premium-addon-for-block',
		'example' => array(
			
		),
		'attributes' => array(
			'icon' => array(
				'type' => 'string',
				'default' => 'fa-regular fa-comment'
			),
			'format' => array(
				'type' => 'string',
				'default' => '{count} Comments'
			),
			'textHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'isLink' => array(
				'type' => 'boolean',
				'default' => true
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'color' => array(
				'text' => true,
				'link' => true
			),
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true,
				'__experimentalFontFamily' => true,
				'__experimentalFontWeight' => true,
				'__experimentalFontStyle' => true,
				'__experimentalDefaultControls' => array(
					'fontSize' => true
				)
			),
			'anchor' => true
		),
		'render' => 'file:./render.php'
	),
	'featured-image' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/tb-featured-image',
		'version' => '0.1.0',
		'title' => 'Featured Image',
		'category' => 'blockive-template',
		'icon' => 'format-image',
		'description' => 'Displays the current post\'s featured image dynamically. Blockive Template Builder only.',
		'usesContext' => array(
			'postId',
			'postType'
		),
		'textdomain' => 'blockive-premium-addon-for-block',
		'example' => array(
			
		),
		'attributes' => array(
			'imageSize' => array(
				'type' => 'string',
				'default' => 'large'
			),
			'aspectRatio' => array(
				'type' => 'string',
				'default' => ''
			),
			'borderRadius' => array(
				'type' => 'number',
				'default' => 0
			),
			'objectFit' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'lazyLoad' => array(
				'type' => 'boolean',
				'default' => true
			),
			'isLink' => array(
				'type' => 'boolean',
				'default' => true
			),
			'overlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'hoverEffect' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'borderType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'borderWidth' => array(
				'type' => 'number'
			),
			'borderColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'shadowEnabled' => array(
				'type' => 'boolean',
				'default' => false
			),
			'shadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'shadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'shadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'align' => array(
				'wide',
				'full'
			),
			'anchor' => true
		),
		'render' => 'file:./render.php'
	),
	'featured-video' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/tb-featured-video',
		'version' => '0.1.0',
		'title' => 'Featured Video',
		'category' => 'blockive-template',
		'icon' => 'video-alt3',
		'description' => 'Displays the current post\'s featured video dynamically (post meta, auto-detected content video, or a manual fallback URL). Blockive Template Builder only.',
		'usesContext' => array(
			'postId',
			'postType'
		),
		'textdomain' => 'blockive-premium-addon-for-block',
		'example' => array(
			
		),
		'attributes' => array(
			'videoUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'metaKey' => array(
				'type' => 'string',
				'default' => 'featured_video_url'
			),
			'autoDetect' => array(
				'type' => 'boolean',
				'default' => true
			),
			'aspectRatio' => array(
				'type' => 'string',
				'default' => '16/9'
			),
			'borderRadius' => array(
				'type' => 'number',
				'default' => 0
			),
			'borderType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'borderWidth' => array(
				'type' => 'number'
			),
			'borderColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'shadowEnabled' => array(
				'type' => 'boolean',
				'default' => false
			),
			'shadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'shadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'shadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'align' => array(
				'wide',
				'full'
			),
			'anchor' => true
		),
		'render' => 'file:./render.php'
	),
	'modified-date' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/tb-modified-date',
		'version' => '0.1.0',
		'title' => 'Modified Date',
		'category' => 'blockive-template',
		'icon' => 'update',
		'description' => 'Displays the current post\'s last modified date dynamically, with custom format and relative time. Blockive Template Builder only.',
		'usesContext' => array(
			'postId',
			'postType'
		),
		'textdomain' => 'blockive-premium-addon-for-block',
		'example' => array(
			
		),
		'attributes' => array(
			'dateFormat' => array(
				'type' => 'string',
				'default' => ''
			),
			'relative' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'color' => array(
				'text' => true
			),
			'typography' => array(
				'fontSize' => true,
				'__experimentalDefaultControls' => array(
					'fontSize' => true
				)
			),
			'anchor' => true
		),
		'render' => 'file:./render.php'
	),
	'post-content' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/tb-post-content',
		'version' => '0.1.0',
		'title' => 'Post Content',
		'category' => 'blockive-template',
		'icon' => 'editor-paragraph',
		'description' => 'Displays the current post\'s full content or excerpt dynamically, with optional drop cap and max width. Blockive Template Builder only.',
		'usesContext' => array(
			'postId',
			'postType'
		),
		'textdomain' => 'blockive-premium-addon-for-block',
		'example' => array(
			
		),
		'attributes' => array(
			'displayMode' => array(
				'type' => 'string',
				'default' => 'full'
			),
			'maxWidth' => array(
				'type' => 'number',
				'default' => 0
			),
			'dropCap' => array(
				'type' => 'boolean',
				'default' => false
			),
			'textAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'linkHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'align' => array(
				'wide',
				'full'
			),
			'color' => array(
				'text' => true,
				'background' => false,
				'gradients' => false,
				'link' => true
			),
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true,
				'__experimentalFontFamily' => true,
				'__experimentalFontWeight' => true,
				'__experimentalFontStyle' => true,
				'__experimentalTextTransform' => true,
				'__experimentalTextDecoration' => true,
				'__experimentalLetterSpacing' => true,
				'__experimentalDefaultControls' => array(
					'fontSize' => true
				)
			),
			'anchor' => true
		),
		'render' => 'file:./render.php'
	),
	'post-meta' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/tb-post-meta',
		'version' => '0.1.0',
		'title' => 'Post Meta',
		'category' => 'blockive-template',
		'icon' => 'list-view',
		'description' => 'A reorderable row of post meta items (author, date, categories, tags, comments, reading time). Blockive Template Builder only.',
		'usesContext' => array(
			'postId',
			'postType'
		),
		'textdomain' => 'blockive-premium-addon-for-block',
		'example' => array(
			
		),
		'attributes' => array(
			'items' => array(
				'type' => 'array',
				'default' => array(
					array(
						'key' => 'date',
						'enabled' => true
					),
					array(
						'key' => 'author',
						'enabled' => true
					),
					array(
						'key' => 'categories',
						'enabled' => true
					),
					array(
						'key' => 'comments',
						'enabled' => true
					),
					array(
						'key' => 'tags',
						'enabled' => false
					),
					array(
						'key' => 'readingTime',
						'enabled' => false
					)
				)
			),
			'separator' => array(
				'type' => 'string',
				'default' => '•'
			),
			'showIcons' => array(
				'type' => 'boolean',
				'default' => true
			),
			'linkHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'color' => array(
				'text' => true,
				'link' => true
			),
			'typography' => array(
				'fontSize' => true,
				'__experimentalDefaultControls' => array(
					'fontSize' => true
				)
			),
			'anchor' => true
		),
		'render' => 'file:./render.php'
	),
	'post-title' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/tb-post-title',
		'version' => '0.1.0',
		'title' => 'Post Title',
		'category' => 'blockive-template',
		'icon' => 'editor-textcolor',
		'description' => 'Displays the current post\'s title dynamically. Blockive Template Builder only.',
		'usesContext' => array(
			'postId',
			'postType'
		),
		'textdomain' => 'blockive-premium-addon-for-block',
		'example' => array(
			
		),
		'attributes' => array(
			'tagName' => array(
				'type' => 'string',
				'default' => 'h2'
			),
			'textAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'isLink' => array(
				'type' => 'boolean',
				'default' => false
			),
			'linkTarget' => array(
				'type' => 'string',
				'default' => '_self'
			),
			'textColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'textHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'color' => array(
				'text' => true,
				'background' => false,
				'gradients' => false,
				'link' => true
			),
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true,
				'__experimentalFontFamily' => true,
				'__experimentalFontWeight' => true,
				'__experimentalFontStyle' => true,
				'__experimentalTextTransform' => true,
				'__experimentalTextDecoration' => true,
				'__experimentalLetterSpacing' => true,
				'__experimentalDefaultControls' => array(
					'fontSize' => true
				)
			),
			'anchor' => true
		),
		'render' => 'file:./render.php'
	),
	'previous-next-navigation' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/tb-previous-next-navigation',
		'version' => '0.1.0',
		'title' => 'Previous / Next Navigation',
		'category' => 'blockive-template',
		'icon' => 'controls-repeat',
		'description' => 'Links to the previous and next posts, dynamically. Blockive Template Builder only.',
		'usesContext' => array(
			'postId',
			'postType'
		),
		'textdomain' => 'blockive-premium-addon-for-block',
		'example' => array(
			
		),
		'attributes' => array(
			'prevLabel' => array(
				'type' => 'string',
				'default' => 'Previous'
			),
			'nextLabel' => array(
				'type' => 'string',
				'default' => 'Next'
			),
			'prevIcon' => array(
				'type' => 'string',
				'default' => 'fa-solid fa-arrow-left'
			),
			'nextIcon' => array(
				'type' => 'string',
				'default' => 'fa-solid fa-arrow-right'
			),
			'hoverStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'inSameTerm' => array(
				'type' => 'boolean',
				'default' => false
			),
			'linkHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'color' => array(
				'text' => true,
				'link' => true
			),
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true,
				'__experimentalFontFamily' => true,
				'__experimentalFontWeight' => true,
				'__experimentalFontStyle' => true,
				'__experimentalTextTransform' => true,
				'__experimentalDefaultControls' => array(
					'fontSize' => true
				)
			),
			'anchor' => true
		),
		'render' => 'file:./render.php'
	),
	'publish-date' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/tb-publish-date',
		'version' => '0.1.0',
		'title' => 'Publish Date',
		'category' => 'blockive-template',
		'icon' => 'calendar-alt',
		'description' => 'Displays the current post\'s publish date dynamically, with custom format, relative time and icon. Blockive Template Builder only.',
		'usesContext' => array(
			'postId',
			'postType'
		),
		'textdomain' => 'blockive-premium-addon-for-block',
		'example' => array(
			
		),
		'attributes' => array(
			'dateFormat' => array(
				'type' => 'string',
				'default' => ''
			),
			'relative' => array(
				'type' => 'boolean',
				'default' => false
			),
			'icon' => array(
				'type' => 'string',
				'default' => 'fa-regular fa-calendar'
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'color' => array(
				'text' => true
			),
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true,
				'__experimentalFontFamily' => true,
				'__experimentalFontWeight' => true,
				'__experimentalFontStyle' => true,
				'__experimentalTextTransform' => true,
				'__experimentalLetterSpacing' => true,
				'__experimentalDefaultControls' => array(
					'fontSize' => true
				)
			),
			'anchor' => true
		),
		'render' => 'file:./render.php'
	),
	'reading-time' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/tb-reading-time',
		'version' => '0.1.0',
		'title' => 'Reading Time',
		'category' => 'blockive-template',
		'icon' => 'clock',
		'description' => 'Displays the current post\'s estimated reading time dynamically. Blockive Template Builder only.',
		'usesContext' => array(
			'postId',
			'postType'
		),
		'textdomain' => 'blockive-premium-addon-for-block',
		'example' => array(
			
		),
		'attributes' => array(
			'wpm' => array(
				'type' => 'number',
				'default' => 200
			),
			'icon' => array(
				'type' => 'string',
				'default' => 'fa-regular fa-clock'
			),
			'prefix' => array(
				'type' => 'string',
				'default' => ''
			),
			'suffix' => array(
				'type' => 'string',
				'default' => ' min read'
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'color' => array(
				'text' => true,
				'link' => true
			),
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true,
				'__experimentalFontFamily' => true,
				'__experimentalFontWeight' => true,
				'__experimentalFontStyle' => true,
				'__experimentalDefaultControls' => array(
					'fontSize' => true
				)
			),
			'anchor' => true
		),
		'render' => 'file:./render.php'
	),
	'related-posts' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/tb-related-posts',
		'version' => '0.1.0',
		'title' => 'Related Posts',
		'category' => 'blockive-template',
		'icon' => 'layout',
		'description' => 'Displays a grid or slider of posts related to the current post. Blockive Template Builder only.',
		'usesContext' => array(
			'postId',
			'postType'
		),
		'textdomain' => 'blockive-premium-addon-for-block',
		'example' => array(
			
		),
		'attributes' => array(
			'numberOfPosts' => array(
				'type' => 'number',
				'default' => 3
			),
			'layout' => array(
				'type' => 'string',
				'default' => 'grid'
			),
			'columns' => array(
				'type' => 'number',
				'default' => 3
			),
			'gridGap' => array(
				'type' => 'number',
				'default' => 20
			),
			'sliderColumns' => array(
				'type' => 'number',
				'default' => 3
			),
			'sliderAutoplay' => array(
				'type' => 'boolean',
				'default' => false
			),
			'sliderAutoplaySpeed' => array(
				'type' => 'number',
				'default' => 3000
			),
			'sliderLoop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'sliderShowArrows' => array(
				'type' => 'boolean',
				'default' => true
			),
			'sliderShowDots' => array(
				'type' => 'boolean',
				'default' => true
			),
			'sliderSpaceBetween' => array(
				'type' => 'number',
				'default' => 20
			),
			'orderBy' => array(
				'type' => 'string',
				'default' => 'date'
			),
			'order' => array(
				'type' => 'string',
				'default' => 'desc'
			),
			'sameCategory' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showImage' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showDate' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showExcerpt' => array(
				'type' => 'boolean',
				'default' => true
			),
			'contentType' => array(
				'type' => 'string',
				'default' => 'limited'
			),
			'excerptLength' => array(
				'type' => 'number',
				'default' => 20
			),
			'cardStyle' => array(
				'type' => 'string',
				'default' => 'modern'
			),
			'cardBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'cardBorderRadius' => array(
				'type' => 'number',
				'default' => 16
			),
			'cardPadding' => array(
				'type' => 'number',
				'default' => 18
			),
			'cardHoverElevation' => array(
				'type' => 'boolean',
				'default' => true
			),
			'imageZoom' => array(
				'type' => 'boolean',
				'default' => true
			),
			'imageBorderRadius' => array(
				'type' => 'number',
				'default' => 12
			),
			'titleColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleFontFamily' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleFontSize' => array(
				'type' => 'number'
			),
			'titleFontWeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleLineHeight' => array(
				'type' => 'number'
			),
			'titleLetterSpacing' => array(
				'type' => 'number'
			),
			'titleTextTransform' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleTextDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'dateColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'excerptColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'align' => array(
				'wide',
				'full'
			),
			'anchor' => true
		),
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'tags' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blockive-premium-addon-for-block/tb-tags',
		'version' => '0.1.0',
		'title' => 'Tags',
		'category' => 'blockive-template',
		'icon' => 'tag',
		'description' => 'Displays the current post\'s tags dynamically. Blockive Template Builder only.',
		'usesContext' => array(
			'postId',
			'postType'
		),
		'textdomain' => 'blockive-premium-addon-for-block',
		'example' => array(
			
		),
		'attributes' => array(
			'separator' => array(
				'type' => 'string',
				'default' => ', '
			),
			'badgeStyle' => array(
				'type' => 'boolean',
				'default' => false
			),
			'linkHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbUid' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbDisplay' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbOverflow' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbPosition' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerPaddingUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMarginUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'bpafbContainerMinHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerMaxHeight' => array(
				'type' => 'number'
			),
			'bpafbContainerBgType' => array(
				'type' => 'string',
				'default' => 'color'
			),
			'bpafbContainerBgColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgGradient' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBgImageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerBgImageSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'bpafbContainerOverlayColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerBorderStyle' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbContainerBorderWidth' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderRadius' => array(
				'type' => 'number'
			),
			'bpafbContainerBorderColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'bpafbContainerBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbContainerHoverBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbContainerHoverShadowColor' => array(
				'type' => 'string',
				'default' => 'rgba(0,0,0,0.15)'
			),
			'bpafbContainerHoverShadowBlur' => array(
				'type' => 'number',
				'default' => 15
			),
			'bpafbContainerHoverShadowSpread' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHideDesktop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideTablet' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbHideMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbAnimationType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbAnimationDuration' => array(
				'type' => 'number',
				'default' => 800
			),
			'bpafbAnimationDelay' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbAnimationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'bpafbTransformRotate' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformScale' => array(
				'type' => 'number',
				'default' => 100
			),
			'bpafbTransformTranslateX' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbTransformTranslateY' => array(
				'type' => 'number',
				'default' => 0
			),
			'bpafbHoverAnimation' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'bpafbFloatingEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bpafbZIndex' => array(
				'type' => 'number'
			),
			'bpafbHtmlId' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbHtmlClasses' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbCustomCss' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerAlign' => array(
				'type' => 'string',
				'default' => ''
			),
			'bpafbContainerPaddingTop' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTop' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRight' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRight' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottom' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeft' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftTablet' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginTopMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginRightMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginBottomMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerPaddingLeftMobile' => array(
				'type' => 'number'
			),
			'bpafbContainerMarginLeftMobile' => array(
				'type' => 'number'
			)
		),
		'supports' => array(
			'html' => false,
			'color' => array(
				'text' => true,
				'background' => false,
				'link' => true
			),
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true,
				'__experimentalFontFamily' => true,
				'__experimentalFontWeight' => true,
				'__experimentalFontStyle' => true,
				'__experimentalTextTransform' => true,
				'__experimentalTextDecoration' => true,
				'__experimentalLetterSpacing' => true,
				'__experimentalDefaultControls' => array(
					'fontSize' => true
				)
			),
			'anchor' => true
		),
		'render' => 'file:./render.php'
	)
);
