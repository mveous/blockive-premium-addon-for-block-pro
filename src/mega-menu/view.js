/**
 * Sets up Pro Mega Menu blocks on the live site: the mobile hamburger
 * toggle, and opening/closing dropdowns by hover on desktop and by tap on
 * touch devices.
 */
const initBpafbProMegaMenu = () => {
	const menus = document.querySelectorAll('.bpafb-pro-mega-menu:not(.bpafb-pro-mega-menu-initialized)');

	menus.forEach((menu) => {
		menu.classList.add('bpafb-pro-mega-menu-initialized');

		const toggle = menu.querySelector('.bpafb-pro-mega-menu-toggle');
		if (toggle) {
			toggle.addEventListener('click', () => {
				const isOpen = menu.classList.toggle('bpafb-pro-mega-menu--open');
				toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
			});
		}

		const dropdownItems = menu.querySelectorAll('.bpafb-pro-mega-menu-item--has-dropdown');

		dropdownItems.forEach((item) => {
			const link = item.querySelector(':scope > .bpafb-pro-mega-menu-item-link');
			if (!link) {
				return;
			}

			// On a touch device, the first tap on an item with a dropdown
			// should open it instead of following the link right away.
			link.addEventListener('click', (event) => {
				if (window.matchMedia('(hover: hover)').matches) {
					return;
				}
				if (item.classList.contains('bpafb-pro-mega-menu-item-open')) {
					return;
				}
				event.preventDefault();
				dropdownItems.forEach((other) => other.classList.remove('bpafb-pro-mega-menu-item-open'));
				item.classList.add('bpafb-pro-mega-menu-item-open');
			});
		});

		// Closes every open dropdown when a click lands outside the menu.
		document.addEventListener('click', (event) => {
			if (menu.contains(event.target)) {
				return;
			}
			dropdownItems.forEach((item) => item.classList.remove('bpafb-pro-mega-menu-item-open'));
		});
	});
};

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initBpafbProMegaMenu);
} else {
	initBpafbProMegaMenu();
}
