/**
 * Popup trigger engine for [.bpafb-pro-popup] elements (see
 * Bpafb_Pro_Popup_Builder::render_popup()). One popup can appear per page
 * (the current request only ever matches one "popup"-kind template), driven
 * by its own data-trigger/data-trigger-value, with data-frequency capping
 * how often it's allowed to reopen for the same visitor.
 */
( function() {
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
			try {
				return sessionStorage.getItem( key ) === '1';
			} catch ( e ) {
				return false;
			}
		}

		if ( 'days' === frequency ) {
			var days = parseFloat( popup.getAttribute( 'data-frequency-days' ) ) || 1;
			var shownAt;
			try {
				shownAt = parseInt( localStorage.getItem( key ), 10 );
			} catch ( e ) {
				return false;
			}
			if ( ! shownAt ) {
				return false;
			}
			return ( Date.now() - shownAt ) < days * 24 * 60 * 60 * 1000;
		}

		return false;
	}

	function markShown( popup ) {
		var frequency = popup.getAttribute( 'data-frequency' ) || 'always';
		if ( 'always' === frequency ) {
			return;
		}
		var key = frequencyKey( popup.getAttribute( 'data-popup-id' ) );
		try {
			if ( 'session' === frequency ) {
				sessionStorage.setItem( key, '1' );
			} else if ( 'days' === frequency ) {
				localStorage.setItem( key, String( Date.now() ) );
			}
		} catch ( e ) {
			// Storage unavailable (private browsing, disabled cookies, ...) -
			// the popup still opens, it just can't remember it did.
		}
	}

	function openPopup( popup ) {
		if ( popup.classList.contains( 'bpafb-pro-popup-open' ) || hasBeenShown( popup ) ) {
			return;
		}
		popup.classList.add( 'bpafb-pro-popup-open' );
		popup.setAttribute( 'aria-hidden', 'false' );
		markShown( popup );
	}

	function closePopup( popup ) {
		popup.classList.remove( 'bpafb-pro-popup-open' );
		popup.setAttribute( 'aria-hidden', 'true' );
	}

	function bindClose( popup ) {
		popup.addEventListener( 'click', function( event ) {
			if ( event.target.closest( '[data-bpafb-popup-close]' ) ) {
				closePopup( popup );
			}
		} );
		document.addEventListener( 'keydown', function( event ) {
			if ( 'Escape' === event.key && popup.classList.contains( 'bpafb-pro-popup-open' ) ) {
				closePopup( popup );
			}
		} );
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
			var selector = value || '[data-bpafb-popup-trigger]';
			document.addEventListener( 'click', function( event ) {
				if ( event.target.closest( selector ) ) {
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
		}
	}

	function init() {
		var popups = document.querySelectorAll( '.bpafb-pro-popup' );
		popups.forEach( function( popup ) {
			bindClose( popup );
			bindTrigger( popup );
		} );
	}

	if ( document.readyState === 'loading' ) {
		document.addEventListener( 'DOMContentLoaded', init );
	} else {
		init();
	}
} )();
