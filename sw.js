if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const l=e=>i(e,r),c={module:{uri:r},exports:o,require:l};s[r]=Promise.all(n.map((e=>c[e]||l(e)))).then((e=>(t(...e),o)))}}define(["./workbox-25d99430"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-e0417796.js",revision:null},{url:"assets/web-vitals-60d3425a.js",revision:null},{url:"index.html",revision:"98bf8f6b2a530411e3d725e8a7f42647"},{url:"registerSW.js",revision:"c671cf614ab97bed7e8b6f3fbebce281"},{url:"manifest.webmanifest",revision:"4a73ec4f28eb0e2b9f5c53c2c1a70b06"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
