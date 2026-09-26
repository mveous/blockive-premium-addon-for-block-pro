/**
 * Popup trigger engine for [.bpafb-pro-popup] elements (see
 * Bpafb_Pro_Popup_Builder::render_popup()). One popup can appear per page
 * (the current request only ever matches one "popup"-kind template), driven
 * by its own data-trigger/data-trigger-value, with data-frequency capping
 * how often it's allowed to reopen for the same visitor, and data-rules
 * (Advanced Rules: page views, visits, most times, arriving from, devices)
 * deciding whether it may show at all.
 *
 * While open, focus moves into the popup and stays there (Tab wraps), and
 * goes back to where it was on close.
 */
( function() {
	var FOCUSABLE = 'a[href], area[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), iframe, [tabindex]:not([tabindex="-1"]), [contenteditable="true"]';
	var SEARCH_ENGINES = /(^|\.)(google|bing|yahoo|duckduckgo|baidu|yandex|ecosia|ask|aol|naver|seznam|qwant|startpage)\./i;

	function storageGet( store, key ) {
		try {
			return window[ store ].getItem( key );
		} catch ( e ) {
			return null;
		}
	}

	function storageSet( store, key, value ) {
		try {
			window[ store ].setItem( key, value );
		} catch ( e ) {
			// Storage unavailable (private browsing, disabled cookies, ...) -
			// the popup still works, it just can't remember anything.
		}
	}

	function frequencyKey( popupId ) {
		return 'bpafbPopupShown_' + popupId;
	}

	function hasBeenShown( popup ) {
		var frequency = popup.getAttribute( 'data-frequency' ) || 'always';
		if ( 'always' === frequency ) {
			return false;
		}

		var key = frequencyKey( popup.getAttribute( 'data-popup-id' ) );

		if ( 'session' === frequency ) {
			return storageGet( 'sessionStorage', key ) === '1';
		}

		if ( 'days' === frequency ) {
			var days = parseFloat( popup.getAttribute( 'data-frequency-days' ) ) || 1;
			var shownAt = parseInt( storageGet( 'localStorage', key ), 10 );
			if ( ! shownAt ) {
				return false;
			}
			return ( Date.now() - shownAt ) < days * 24 * 60 * 60 * 1000;
		}

		return false;
	}

	function markShown( popup ) {
		var id = popup.getAttribute( 'data-popup-id' );
		var frequency = popup.getAttribute( 'data-frequency' ) || 'always';
		var key = frequencyKey( id );
		if ( 'session' === frequency ) {
			storageSet( 'sessionStorage', key, '1' );
		} else if ( 'days' === frequency ) {
			storageSet( 'localStorage', key, String( Date.now() ) );
		}
		var times = parseInt( storageGet( 'localStorage', 'bpafbPopupTimes_' + id ), 10 ) || 0;
		storageSet( 'localStorage', 'bpafbPopupTimes_' + id, String( times + 1 ) );
	}

	function readRules( popup ) {
		try {
			return JSON.parse( popup.getAttribute( 'data-rules' ) || '{}' ) || {};
		} catch ( e ) {
			return {};
		}
	}

	/**
	 * Counts this page view, and a new visit when this tab's session is
	 * new. Counted on the pages where this popup may show.
	 */
	function countVisit( popup ) {
		var id = popup.getAttribute( 'data-popup-id' );
		var viewsKey = 'bpafbPopupViews_' + id;
		var sessionsKey = 'bpafbPopupSessions_' + id;
		var views = ( parseInt( storageGet( 'localStorage', viewsKey ), 10 ) || 0 ) + 1;
		storageSet( 'localStorage', viewsKey, String( views ) );
		var sessions = parseInt( storageGet( 'localStorage', sessionsKey ), 10 ) || 0;
		if ( storageGet( 'sessionStorage', sessionsKey ) !== '1' ) {
			sessions += 1;
			storageSet( 'localStorage', sessionsKey, String( sessions ) );
			storageSet( 'sessionStorage', sessionsKey, '1' );
		}
		return { views: views, sessions: sessions };
	}

	function deviceAllowed( rules ) {
		var width = window.innerWidth;
		var device = width >= 1025 ? 'desktop' : ( width >= 768 ? 'tablet' : 'mobile' );
		return false !== rules[ device ];
	}

	function referrerAllowed( rules ) {
		var type = rules.referrer || 'any';
		if ( 'any' === type ) {
			return true;
		}
		var referrer = document.referrer || '';
		var host = '';
		try {
			host = referrer ? new URL( referrer ).hostname : '';
		} catch ( e ) {
			host = '';
		}
		var internal = host && host === window.location.hostname;
		if ( 'internal' === type ) {
			return !! internal;
		}
		if ( 'external' === type ) {
			return !! host && ! internal;
		}
		if ( 'search' === type ) {
			return !! host && SEARCH_ENGINES.test( host );
		}
		if ( 'contains' === type ) {
			var text = ( rules.referrerText || '' ).toLowerCase();
			return !! text && referrer.toLowerCase().indexOf( text ) !== -1;
		}
		return true;
	}

	function rulesAllow( popup, rules, visit ) {
		var id = popup.getAttribute( 'data-popup-id' );
		if ( rules.pageViews > 0 && visit.views < rules.pageViews ) {
			return false;
		}
		if ( rules.sessions > 0 && visit.sessions < rules.sessions ) {
			return false;
		}
		if ( rules.maxTimes > 0 && ( parseInt( storageGet( 'localStorage', 'bpafbPopupTimes_' + id ), 10 ) || 0 ) >= rules.maxTimes ) {
			return false;
		}
		return deviceAllowed( rules ) && referrerAllowed( rules );
	}

	function focusables( popup ) {
		var content = popup.querySelector( '.bpafb-pro-popup-content' );
		return Array.prototype.filter.call( content.querySelectorAll( FOCUSABLE ), function( el ) {
			return el.offsetWidth > 0 || el.offsetHeight > 0 || el === document.activeElement;
		} );
	}

	function openPopup( popup ) {
		if ( popup.classList.contains( 'bpafb-pro-popup-open' ) || hasBeenShown( popup ) || ! popup.bpafbAllowed ) {
			return;
		}
		// The device can change after load (rotation, resizing).
		if ( ! deviceAllowed( popup.bpafbRules ) ) {
			return;
		}
		popup.bpafbReturnFocus = document.activeElement;
		popup.classList.add( 'bpafb-pro-popup-open' );
		popup.setAttribute( 'aria-hidden', 'false' );
		markShown( popup );
		var content = popup.querySelector( '.bpafb-pro-popup-content' );
		var first = focusables( popup ).filter( function( el ) {
			return ! el.hasAttribute( 'data-bpafb-popup-close' );
		} )[ 0 ];
		( first || content ).focus( { preventScroll: true } );
	}

	function closePopup( popup ) {
		if ( ! popup.classList.contains( 'bpafb-pro-popup-open' ) ) {
			return;
		}
		popup.classList.remove( 'bpafb-pro-popup-open' );
		popup.setAttribute( 'aria-hidden', 'true' );
		var back = popup.bpafbReturnFocus;
		if ( back && back.focus && document.contains( back ) ) {
			back.focus( { preventScroll: true } );
		}
	}

	function bindClose( popup ) {
		popup.addEventListener( 'click', function( event ) {
			if ( event.target.closest( '[data-bpafb-popup-close]' ) ) {
				closePopup( popup );
			}
		} );
		document.addEventListener( 'keydown', function( event ) {
			if ( ! popup.classList.contains( 'bpafb-pro-popup-open' ) ) {
				return;
			}
			if ( 'Escape' === event.key ) {
				closePopup( popup );
				return;
			}
			if ( 'Tab' !== event.key ) {
				return;
			}
			// Keep Tab inside the popup.
			var items = focusables( popup );
			var content = popup.querySelector( '.bpafb-pro-popup-content' );
			if ( ! items.length ) {
				event.preventDefault();
				content.focus();
				return;
			}
			var first = items[ 0 ];
			var last = items[ items.length - 1 ];
			var inside = content.contains( document.activeElement );
			if ( event.shiftKey && ( document.activeElement === first || ! inside || document.activeElement === content ) ) {
				event.preventDefault();
				last.focus();
			} else if ( ! event.shiftKey && ( document.activeElement === last || ! inside ) ) {
				event.preventDefault();
				first.focus();
			}
		} );
	}

	/**
	 * A selector that works, or '' (a broken one would throw on every use).
	 */
	function validSelector( selector ) {
		try {
			document.querySelector( selector );
			return selector;
		} catch ( e ) {
			return '';
		}
	}

	function bindTrigger( popup ) {
		var trigger = popup.getAttribute( 'data-trigger' ) || 'page_load';
		var value = popup.getAttribute( 'data-trigger-value' ) || '';

		if ( 'page_load' === trigger ) {
			var delay = parseInt( value, 10 );
			setTimeout( function() {
				openPopup( popup );
			}, isNaN( delay ) ? 0 : delay );
			return;
		}

		if ( 'scroll' === trigger ) {
			var targetPercent = parseFloat( value ) || 50;
			var fired = false;
			window.addEventListener( 'scroll', function() {
				if ( fired ) {
					return;
				}
				var scrollable = document.documentElement.scrollHeight - window.innerHeight;
				var percent = scrollable > 0 ? ( window.scrollY / scrollable ) * 100 : 100;
				if ( percent >= targetPercent ) {
					fired = true;
					openPopup( popup );
				}
			}, { passive: true } );
			return;
		}

		if ( 'click' === trigger ) {
			var selector = validSelector( value || '[data-bpafb-popup-trigger]' );
			if ( ! selector ) {
				return;
			}
			document.addEventListener( 'click', function( event ) {
				var opener = event.target.closest( selector );
				if ( opener && ! popup.contains( opener ) ) {
					if ( 'A' === opener.tagName && '#' === ( opener.getAttribute( 'href' ) || '' ).charAt( 0 ) ) {
						event.preventDefault();
					}
					openPopup( popup );
				}
			} );
			return;
		}

		if ( 'exit_intent' === trigger ) {
			document.addEventListener( 'mouseout', function( event ) {
				if ( ! event.relatedTarget && event.clientY <= 0 ) {
					openPopup( popup );
				}
			} );
			return;
		}

		if ( 'element' === trigger ) {
			// Opens once the element scrolls into view.
			var target = validSelector( value ) && document.querySelector( value );
			if ( ! target || ! ( 'IntersectionObserver' in window ) ) {
				return;
			}
			var observer = new IntersectionObserver( function( entries ) {
				entries.forEach( function( entry ) {
					if ( entry.isIntersecting ) {
						observer.disconnect();
						openPopup( popup );
					}
				} );
			}, { threshold: 0.25 } );
			observer.observe( target );
			return;
		}

		if ( 'inactivity' === trigger ) {
			// Opens after this many seconds without mouse, keyboard, touch,
			// or scrolling - once per page view, not again after closing.
			var seconds = Math.max( 1, parseFloat( value ) || 30 );
			var events = [ 'mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll', 'wheel' ];
			var timer;
			var reset = function() {
				clearTimeout( timer );
				timer = setTimeout( function() {
					events.forEach( function( name ) {
						window.removeEventListener( name, reset );
					} );
					openPopup( popup );
				}, seconds * 1000 );
			};
			events.forEach( function( name ) {
				window.addEventListener( name, reset, { passive: true } );
			} );
			reset();
		}
	}

	function init() {
		var popups = document.querySelectorAll( '.bpafb-pro-popup' );
		popups.forEach( function( popup ) {
			var rules = readRules( popup );
			popup.bpafbRules = rules;
			popup.bpafbAllowed = rulesAllow( popup, rules, countVisit( popup ) );
			bindClose( popup );
			if ( popup.bpafbAllowed ) {
				bindTrigger( popup );
			}
		} );
	}

	if ( document.readyState === 'loading' ) {
		document.addEventListener( 'DOMContentLoaded', init );
	} else {
		init();
	}
} )();
