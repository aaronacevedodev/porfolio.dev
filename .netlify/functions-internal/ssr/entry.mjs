import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_pdsU7Whq.mjs';

const _page0  = () => import('./chunks/generic_Cb9fNnb0.mjs');
const _page1  = () => import('./chunks/index_n78ZH9RE.mjs');
const _page2  = () => import('./chunks/sendEmail_OYwFyx52.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/api/sendEmail.json.ts", _page2]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {"middlewareSecret":"7464bf3f-8c76-454c-9d0b-0023800058fc"};

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
