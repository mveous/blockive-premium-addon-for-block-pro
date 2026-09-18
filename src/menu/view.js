/**
 * Sets up Pro Menu blocks on the live site: the mobile hamburger toggle,
 * and opening/closing submenus by hover on desktop and by tap on touch
 * devices.
 */
const initBpafbProMenu = () => {
	const menus = document.querySelectorAll('.bpafb-pro-menu:not(.bpafb-pro-menu-initialized)');

	menus.forEach((menu) => {
		menu.classList.add('bpafb-pro-menu-initialized');

		const toggle = menu.querySelector('.bpafb-pro-menu-toggle');
		if (toggle) {
			toggle.addEventListener('click', () => {
				const isOpen = menu.classList.toggle('bpafb-pro-menu--open');
				toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
			});
		}

		const parentItems = menu.querySelectorAll('.menu-item-has-children');

		parentItems.forEach((item) => {
			const link = item.querySelector(':scope > a');
			if (!link) {
				return;
			}

			// On a touch device, the first tap on a parent item should open
			// its dropdown instead of following the link right away.
			link.addEventListener('click', (event) => {
				if (window.matchMedia('(hover: hover)').matches) {
					return;
				}
				if (item.classList.contains('bpafb-pro-menu-item-open')) {
					return;
				}
				event.preventDefault();
				parentItems.forEach((other) => other.classList.remove('bpafb-pro-menu-item-open'));
				item.classList.add('bpafb-pro-menu-item-open');
			});
		});

		// Closes every open dropdown when a click lands outside the menu.
		document.addEventListener('click', (event) => {
			if (menu.contains(event.target)) {
				return;
			}
			parentItems.forEach((item) => item.classList.remove('bpafb-pro-menu-item-open'));
		});
	});
};

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initBpafbProMenu);
} else {
	initBpafbProMenu();
}
