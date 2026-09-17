const path = require('path');
const defaultConfig = require('@wordpress/scripts/config/webpack.config');

const extraEntry = {
	'template-builder/index': path.resolve(
		__dirname,
		'src/template-builder/index.js'
	),
	'template-blocks/index': path.resolve(
		__dirname,
		'src/template-blocks/index.js'
	),
	// Pro-only additions, kept in a separate bundle from the two above
	// (which are synced verbatim from the free plugin) so a future re-sync
	// never touches this entry or its source.
	'template-builder-pro/index': path.resolve(
		__dirname,
		'src/template-builder-pro/index.js'
	),
	'template-blocks-woo/index': path.resolve(
		__dirname,
		'src/template-blocks-woo/index.js'
	),
	'template-blocks-events/index': path.resolve(
		__dirname,
		'src/template-blocks-events/index.js'
	),
	'post-grid-pro/index': path.resolve(
		__dirname,
		'src/post-grid-pro/index.js'
	),
};

// Mirrors the free plugin's webpack.config.js (kept in sync manually, since
// this file lives outside the directories bin/sync-shared-source.js copies):
// @wordpress/scripts sets `entry` to a function that lazily discovers every
// block.json-based entry, so it must be called (and awaited) rather than
// spread, or every existing block entry silently disappears.
async function withExtraEntry(config) {
	const base =
		typeof config.entry === 'function'
			? await config.entry()
			: config.entry;

	return {
		...config,
		entry: {
			...base,
			...extraEntry,
		},
	};
}

module.exports = async () => {
	if (Array.isArray(defaultConfig)) {
		return [
			await withExtraEntry(defaultConfig[0]),
			...defaultConfig.slice(1),
		];
	}

	return withExtraEntry(defaultConfig);
};
