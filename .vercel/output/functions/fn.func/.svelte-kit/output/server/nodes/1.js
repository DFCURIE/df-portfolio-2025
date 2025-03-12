

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.7kE2nN1V.js","_app/immutable/chunks/osYtoux8.js"];
export const stylesheets = [];
export const fonts = [];
