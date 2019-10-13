/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "822fe36b8d88aeb371ed1d8cf1dcc30f"
  },
  {
    "url": "about/index.html",
    "revision": "b2f15f6b11c0ef66f9135c44ac299e2c"
  },
  {
    "url": "about/test.html",
    "revision": "0aadd5da12297624de60b342c588928b"
  },
  {
    "url": "assets/css/0.styles.d89d2c5c.css",
    "revision": "e63a5dd247bc525e42c67d26b70c03e8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ca6cceec.js",
    "revision": "dc1d76869bf5f5632984bf737ec9ccb0"
  },
  {
    "url": "assets/js/11.cb96cf12.js",
    "revision": "7962a16c2e372ddca3414730baf71276"
  },
  {
    "url": "assets/js/12.2c3234dd.js",
    "revision": "b5951293d7fd99b6034df5267d432515"
  },
  {
    "url": "assets/js/13.d2625189.js",
    "revision": "ed0436a6c0ab51843906c15c1b209e9c"
  },
  {
    "url": "assets/js/14.47b77ae8.js",
    "revision": "5de23d06d90e4dd62e012ee06ccf7dd9"
  },
  {
    "url": "assets/js/15.cec274fd.js",
    "revision": "3b392e059635f65f768050883016f7b5"
  },
  {
    "url": "assets/js/16.cb274a9f.js",
    "revision": "916a61e93c36aa6d7022217cd29ae7a4"
  },
  {
    "url": "assets/js/17.d40ac5dc.js",
    "revision": "21bbd536b5fd9d69ba0e2a085404bb9a"
  },
  {
    "url": "assets/js/2.3659cd93.js",
    "revision": "b5d71c6911b728a4d62c563bc16e3181"
  },
  {
    "url": "assets/js/3.8a79fe62.js",
    "revision": "37b5a93f48aa14d06b3e1fc9a5ece9f4"
  },
  {
    "url": "assets/js/4.85f8e6c7.js",
    "revision": "fa78e09432c5839b92570e7f2a61bed3"
  },
  {
    "url": "assets/js/5.e10a1491.js",
    "revision": "b674ff2cb21647a9319f157eee21d789"
  },
  {
    "url": "assets/js/6.45b47619.js",
    "revision": "6a06ef7cf4dd299e813b870a501de8a2"
  },
  {
    "url": "assets/js/7.08954010.js",
    "revision": "ae34f59b347128f03d83e1f6340faac1"
  },
  {
    "url": "assets/js/8.6892ee5f.js",
    "revision": "8102a3808ed6ce1e170e6fa86d8798bd"
  },
  {
    "url": "assets/js/9.644d8140.js",
    "revision": "6126cf1e0a7b9fe5c051e7ff5eae488f"
  },
  {
    "url": "assets/js/app.d97bed9b.js",
    "revision": "0b9ba8b2b9c6755a76ad8eafd89efa8b"
  },
  {
    "url": "avatar.jpg",
    "revision": "da7e432e90a016fea10c2cae07b36fc5"
  },
  {
    "url": "css/css1.html",
    "revision": "761b7e57d27040744abf22f26c44a131"
  },
  {
    "url": "css/css2.html",
    "revision": "12ce9718218b4f9ad493fd78989252a5"
  },
  {
    "url": "css/index.html",
    "revision": "6778e7caf62cdf1b2fe5b004e4ee672b"
  },
  {
    "url": "index.html",
    "revision": "19685d3210f29af63c74c5d1308ec260"
  },
  {
    "url": "javascript/index.html",
    "revision": "17ce6737b30d7f0f7e6daf6c49f25ec8"
  },
  {
    "url": "javascript/javascript1.html",
    "revision": "1b3991f5099b49633761c3d3354a464c"
  },
  {
    "url": "javascript/javascript2.html",
    "revision": "bbd5d21b28b610497ba95279d0cd46af"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
