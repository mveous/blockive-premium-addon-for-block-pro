#!/usr/bin/env node
/**
 * Copies the shared codebase (every block, the Template Builder core, and
 * assets) from the free plugin into this Pro plugin, at identical relative
 * paths, so both plugins register byte-identical block names / CPT slugs /
 * meta keys and content never needs to migrate between them.
 *
 * This is a one-way, ADDITIVE copy:
 *   - Files present in the free plugin overwrite their Pro counterpart.
 *   - Files that exist only in Pro (Pro-only blocks/classes/features) are
 *     left untouched - this script never deletes anything in Pro's tree.
 *
 * Run this after making changes to shared code in the free plugin, before
 * cutting a new Pro release. Not run automatically as part of any build.
 *
 * Usage: node bin/sync-shared-source.js [path-to-free-plugin]
 * Defaults to the sibling "blockive-premium-addon-for-block" directory,
 * which is where both plugins live side by side in this dev environment.
 */

const fs = require('fs');
const path = require('path');

const proRoot = path.resolve(__dirname, '..');
const freeRoot = path.resolve(
	process.argv[2] || path.join(proRoot, '..', 'blockive-premium-addon-for-block')
);

// Relative-to-plugin-root paths copied verbatim. Each is a whole directory
// tree; anything inside them in the free plugin is mirrored into Pro at the
// same path.
const SHARED_DIRS = ['includes', 'src', 'build', 'assets'];

if (!fs.existsSync(freeRoot)) {
	console.error(`Free plugin not found at: ${freeRoot}`);
	process.exit(1);
}

// The free plugin's shared classes reference these three constants as bare
// globals. Pro cannot reuse those same names (see the comment in
// blockive-premium-addon-for-block-pro.php next to where BPAFB_PRO_PATH is
// defined - during Pro's own activation request, WordPress includes this
// file in the same request where an already-active free plugin has already
// defined BPAFB_PATH/BPAFB_URL pointing at ITS OWN directory, and PHP's
// define() silently keeps the first value on a redefinition attempt). Every
// synced .php file gets these names rewritten to Pro's own equivalents so
// the copied code needs no manual changes.
const CONSTANT_RENAMES = [
	[/\bBPAFB_PATH\b/g, 'BPAFB_PRO_PATH'],
	[/\bBPAFB_URL\b/g, 'BPAFB_PRO_URL'],
	[/\bBPAFB_VERSION\b/g, 'BPAFB_PRO_VERSION'],
];

let copied = 0;
let rewritten = 0;
let skippedDirs = 0;

function copyRecursive(srcDir, destDir) {
	fs.mkdirSync(destDir, { recursive: true });

	for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
		const srcPath = path.join(srcDir, entry.name);
		const destPath = path.join(destDir, entry.name);

		if (entry.isDirectory()) {
			if (entry.name === 'node_modules' || entry.name === '.git') {
				skippedDirs++;
				continue;
			}
			copyRecursive(srcPath, destPath);
		} else if (entry.isFile()) {
			if (entry.name.endsWith('.php')) {
				const original = fs.readFileSync(srcPath, 'utf8');
				let updated = original;
				for (const [pattern, replacement] of CONSTANT_RENAMES) {
					updated = updated.replace(pattern, replacement);
				}
				fs.writeFileSync(destPath, updated);
				if (updated !== original) {
					rewritten++;
				}
			} else {
				fs.copyFileSync(srcPath, destPath);
			}
			copied++;
		}
	}
}

for (const dir of SHARED_DIRS) {
	const srcDir = path.join(freeRoot, dir);
	if (!fs.existsSync(srcDir)) {
		console.log(`(skipping "${dir}" - not present in free plugin)`);
		continue;
	}
	copyRecursive(srcDir, path.join(proRoot, dir));
}

console.log(`Synced ${copied} file(s) (${rewritten} with rewritten constants) from:\n  ${freeRoot}\ninto:\n  ${proRoot}`);
if (skippedDirs) {
	console.log(`(skipped ${skippedDirs} node_modules/.git director${skippedDirs === 1 ? 'y' : 'ies'})`);
}
