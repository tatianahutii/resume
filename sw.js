if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,o)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let r={};const f=e=>i(e,t),c={module:{uri:t},exports:r,require:f};s[t]=Promise.all(n.map((e=>c[e]||f(e)))).then((e=>(o(...e),r)))}}define(["./workbox-318856b9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/images/favicon-192x192.png",revision:"a200fdf485648ec684dd321e03e42897"},{url:"assets/images/favicon-512x512.png",revision:"23e4262208e692c3c731bdce7741aff7"},{url:"assets/stylesheets/base.css",revision:"57fd536a09b0cee72f7e5684a907160b"},{url:"favicon.ico",revision:"1f8fc5b2e6f72c467ef1d8149fbaad36"},{url:"index.html",revision:"d335a19b9f52974de11b64f042a339e1"}],{})}));
//# sourceMappingURL=sw.js.map
