import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.owLsFPW5.js","_app/immutable/chunks/rbvzsvWe.js","_app/immutable/chunks/OMgaynFP.js","_app/immutable/chunks/1I0NbQ2h.js"];
export const stylesheets = ["_app/immutable/assets/2.YKo_-Zqj.css"];
export const fonts = [];
