/**
 * Runs before Prism loads (see prism.js): stops Prism from highlighting the
 * whole page on its own, and keeps any Prism a theme or plugin already put
 * on the page so it can be restored afterwards.
 */
window.bpafbPreviousPrism = window.Prism;
window.Prism = { manual: true };
