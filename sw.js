if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const c=e=>r(e,o),d={module:{uri:o},exports:l,require:c};s[o]=Promise.all(i.map((e=>d[e]||c(e)))).then((e=>(n(...e),l)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/cacheManagerWorker-DMEfbxHd.js",revision:null},{url:"assets/index-CrUjd48a.css",revision:null},{url:"assets/index-DBcGYBii.js",revision:null},{url:"assets/searchWorker-DMjU06j8.js",revision:null},{url:"assets/searchWorkerManager-DeauMaFw.js",revision:null},{url:"assets/vendor-BdVRZxhp.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"favicon.ico",revision:"24e03661810bd7a53057f9d1ce6532c3"},{url:"index.html",revision:"cf4421412380f6fed4e490d31d98b9e9"},{url:"logo192-maskable.png",revision:"8e2be3cd6b2c68e7563afdc10915766a"},{url:"logo192.png",revision:"ca8c7a2c3899d5f66cb4d3a103b5f668"},{url:"logo512-maskable.png",revision:"ad9c76f0d98773cda247dda806329c94"},{url:"logo512.png",revision:"07a21f06fb32d4ef6b4f268ac2c001c1"},{url:"manifest.json",revision:"1c5a3d4c2dd0b89a01e7a9cab2fc2a1d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
