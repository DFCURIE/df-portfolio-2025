import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.KU6XiJl9.js","_app/immutable/chunks/osYtoux8.js","_app/immutable/chunks/OMgaynFP.js","_app/immutable/chunks/1I0NbQ2h.js"];
export const stylesheets = ["_app/immutable/assets/2.fCQ_EPEf.css"];
export const fonts = [];
