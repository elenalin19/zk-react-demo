"use strict";var precacheConfig=[["/zk-react-demo/index.html","f0882b2fa41e8e0f96650e03802479da"],["/zk-react-demo/static/css/main.cfa50f34.css","cfa50f340b2d20a4f55647639d354dca"],["/zk-react-demo/static/js/main.05d85911.js","5aeaa0a9e8bc2ca59c4bc72f75a731c2"],["/zk-react-demo/static/media/ZK85Icons.2dcec66a.ttf","2dcec66ab3d34b4935bc9d9f62b2efd6"],["/zk-react-demo/static/media/ZK85Icons.5e32d38f.svg","5e32d38f4a3f93fd70e6f1e75979a073"],["/zk-react-demo/static/media/ZK85Icons.8526a525.eot","8526a52521597af2b33f52016df24c9d"],["/zk-react-demo/static/media/ZK85Icons.a0f0b465.woff","a0f0b46532509facbe9f96789af389f6"],["/zk-react-demo/static/media/fontawesome-webfont.29800836.svg","2980083682e94d33a66eef2e7d612519"],["/zk-react-demo/static/media/fontawesome-webfont.706450d7.ttf","706450d7bba6374ca02fe167d86685cb"],["/zk-react-demo/static/media/fontawesome-webfont.97493d3f.woff2","97493d3f11c0a3bd5cbd959f5d19b699"],["/zk-react-demo/static/media/fontawesome-webfont.d9ee23d5.woff","d9ee23d59d0e0e727b51368b458a0bff"],["/zk-react-demo/static/media/fontawesome-webfont.f7c2b4b7.eot","f7c2b4b747b1a225eb8dee034134a1b0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/zk-react-demo/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});