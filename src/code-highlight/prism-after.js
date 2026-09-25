/**
 * Runs after Prism and its languages load (see prism.js): puts back the
 * page's own Prism if it had one, and otherwise removes the global again
 * (our copy is used through its import).
 */
if ( window.bpafbPreviousPrism ) {
	window.Prism = window.bpafbPreviousPrism;
} else {
	delete window.Prism;
}
delete window.bpafbPreviousPrism;
