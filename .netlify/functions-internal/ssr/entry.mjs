import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_h78YtUUt.mjs';

const _page0  = () => import('./chunks/generic_Cb9fNnb0.mjs');
const _page1  = () => import('./chunks/index_Na7dPceD.mjs');
const _page2  = () => import('./chunks/sendEmail_gec1nNm7.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/api/sendEmail.json.ts", _page2]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {"middlewareSecret":"491cfcf8-97fb-45d9-a8e3-d6cef360d8ca"};

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
