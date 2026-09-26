/**
 * Form: sends the form through REST instead of a page load, shows errors
 * next to each field (aria-invalid + the field's error text, which its
 * control already references with aria-describedby), moves focus to the
 * first problem, and announces the result in the form's status region.
 * The browser's own checks run first, with the same messages; the server
 * validates again either way (Bpafb_Pro_Forms).
 */
function initForm( root ) {
	const form = root.querySelector( '.bpafb-form__form' );
	if ( ! form || form.dataset.bpafbReady ) {
		return;
	}
	form.dataset.bpafbReady = '1';
	form.noValidate = true;

	const status = form.querySelector( '.bpafb-form__status' );
	const submit = form.querySelector( '.bpafb-form__submit' );
	const idle = submit.textContent;
	const page = form.querySelector( 'input[name="bpafb_page"]' );
	if ( page ) {
		page.value = window.location.href;
	}

	const fieldEl = ( id ) => form.querySelector( `.bpafb-form__field[data-field="${ window.CSS.escape( id ) }"]` );

	const setError = ( field, message ) => {
		const error = field.querySelector( '.bpafb-form__error' );
		const controls = field.querySelectorAll( 'input, select, textarea, fieldset' );
		error.textContent = message || '';
		error.hidden = ! message;
		field.classList.toggle( 'has-error', !! message );
		controls.forEach( ( control ) => {
			if ( message ) {
				control.setAttribute( 'aria-invalid', 'true' );
			} else {
				control.removeAttribute( 'aria-invalid' );
			}
		} );
	};

	const clearErrors = () => form.querySelectorAll( '.bpafb-form__field' ).forEach( ( field ) => setError( field, '' ) );

	const showStatus = ( message, ok ) => {
		status.textContent = message;
		status.className = `bpafb-form__status bpafb-form__message bpafb-form__message--${ ok ? 'success' : 'error' }`;
	};

	const focusFirstError = () => {
		const first = form.querySelector( '.has-error input, .has-error select, .has-error textarea' );
		if ( first ) {
			first.focus();
		}
	};

	// Checks before sending: the form's own "required" message for empty
	// required fields (same text as the server's), the browser's localized
	// message for anything else (e.g. a malformed email address).
	const required = form.dataset.required || '';
	const checkLocally = () => {
		let valid = true;
		form.querySelectorAll( '.bpafb-form__field' ).forEach( ( field ) => {
			let message = '';
			const group = field.querySelector( 'fieldset[data-required]' );
			if ( group && group.querySelector( 'input[type="checkbox"]' ) ) {
				// Browsers have no "at least one" rule for checkbox groups.
				message = group.querySelector( 'input:checked' ) ? '' : required;
			} else {
				const control = field.querySelector( 'input, select, textarea' );
				if ( control && ! control.checkValidity() ) {
					message = control.validity.valueMissing && required ? required : control.validationMessage;
				}
			}
			setError( field, message );
			valid = valid && ! message;
		} );
		return valid;
	};

	form.addEventListener( 'submit', async ( event ) => {
		event.preventDefault();
		if ( form.classList.contains( 'is-sending' ) ) {
			return;
		}
		status.textContent = '';
		if ( ! checkLocally() ) {
			focusFirstError();
			return;
		}

		form.classList.add( 'is-sending' );
		submit.disabled = true;
		submit.textContent = form.dataset.sending || idle;

		let result;
		try {
			const response = await window.fetch( form.dataset.rest, { method: 'POST', body: new window.FormData( form ), credentials: 'same-origin' } );
			result = await response.json();
		} catch ( e ) {
			result = null;
		}

		form.classList.remove( 'is-sending' );
		submit.disabled = false;
		submit.textContent = idle;

		if ( ! result || typeof result.ok !== 'boolean' ) {
			// REST unavailable (blocked, offline, ...): fall back to a normal post.
			form.submit();
			return;
		}
		if ( result.ok && result.redirect ) {
			window.location.assign( result.redirect );
			return;
		}

		clearErrors();
		if ( result.errors ) {
			Object.entries( result.errors ).forEach( ( [ id, message ] ) => {
				const field = fieldEl( id );
				if ( field ) {
					setError( field, message );
				}
			} );
			focusFirstError();
		}
		showStatus( result.message || '', result.ok );
		if ( result.ok ) {
			form.reset();
		}
	} );

	// Clear a field's error as soon as it is changed.
	form.addEventListener( 'input', ( event ) => {
		const field = event.target.closest( '.bpafb-form__field.has-error' );
		if ( field ) {
			setError( field, '' );
		}
	} );
}

function init() {
	document.querySelectorAll( '.bpafb-form' ).forEach( initForm );
}

if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', init );
} else {
	init();
}
