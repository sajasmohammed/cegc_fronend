'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "20a890168a024a3ca558514b096a1498",
".git/config": "194d2638f76a95dec68b90492ddbb31a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a2482d449598d9a0aedff1c64470ab0a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a574036f868af9a5566a2a6592b14c57",
".git/logs/refs/heads/master": "a574036f868af9a5566a2a6592b14c57",
".git/logs/refs/remotes/origin/master": "79b7babb66b8fd7587c71ad213508813",
".git/objects/0d/7a3c21391c8255e8805a72bb21bd2ee14f663e": "fbd6a8e1fa374a59d45df7e28f27c68d",
".git/objects/1d/1f02aecf88d14b6367f88f91fdeed83439b9a9": "d1234f2a5b3e5f39860f3bd0050bbbf8",
".git/objects/26/ad706ed90370bf9c4d532db87cee5a62b6c9f2": "57c0e38d57134ee54e25628025600644",
".git/objects/2d/cfd0e16409089da40f51391eecd56327f667d2": "10f2691cbec12e348e6a2341175f532d",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/499d086dda68bec6103d738648d5f64bd255cd": "26760675427eb45a5d9e95c10a03bf23",
".git/objects/3a/21ea04bb14e0d0f6b25ece403b82438188cea3": "ad86277834e9e92b58faacbb6b442709",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/47/8a37cabe6a74f76fab6a4d84dce129be0c8a7d": "af3c92a7cbec56bf3eb475039c0c6477",
".git/objects/50/a87ed39c968b49eef48b4c3faf720bbd1fbf6b": "9c1fd3e616b95bb9ab69939564e0c081",
".git/objects/58/bb41f1701059763af393edced2417f470d7e44": "e49a2f77da35d442f186150c1eb8a13f",
".git/objects/6a/27f487619a6f9f65d1eef2e83519e09270ce39": "6fe02e7749185c553f3016b216929b1c",
".git/objects/75/b0f7a2eacf805c234a373b0b0339d839aee9de": "ab58d2572676846ce2aff62e0ee250d6",
".git/objects/7f/154062511dff0d973049da62a1283c21795baa": "41324cace294ddca39f8ea812209f554",
".git/objects/80/c272082f820e5f6eaeb0a58e2c4e7a09e871da": "759c0c80cc8085c909e30a25ba5fd9b3",
".git/objects/84/663071f25c89f270f4e7765f5dade566d58f79": "6897d7f2ad349d1c108dffd957e1a071",
".git/objects/85/a562fbbff5cb5c8d27925e47d9831330bda6dc": "bb5318b885f4e9606bb3d02379a2757a",
".git/objects/88/5ae9bff5f3eadb5f3f9481e98a2ac56dd4ccc7": "845ee378c6c4adebd8bc0405b1674621",
".git/objects/89/3ee6302a7259b01bbe6de6188d901d56745d17": "4cbc8b2a95a5c485ef9d4d26c858d22c",
".git/objects/90/5d8afbe97ce9b65a666706228894f8ed3ece5a": "7437cd53d8d44b049090329d5f1182c2",
".git/objects/92/5e615625c1add0be6928fbc7c25c24f1ac7b2b": "192a10a604d8a374bc18265d6270ed55",
".git/objects/96/9612a3ed4e4dbb9eaaed5ad828a5a5659b7c93": "542bf29d1822bd29067fa8e54cb0860c",
".git/objects/a1/4819ad173bc17799677d544250d508a78d3171": "35262fde44ecf34d73be8b56833f489a",
".git/objects/a4/a3680c512c99d1ef8b955aeccfa269d51a5354": "38e5afc2295b70e713829c2e84d3d811",
".git/objects/a5/cdfe7e7fcdb49f9d4ce1872badbee40e074701": "04ebc9b2fb44135f40733e8e4ed5141c",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b7/56b3098e64ada697be3776a0e7d4b60498fc5f": "c7c472d0418a09d4a0e78286a2b20154",
".git/objects/cc/09522ec80bebf97dda8cf0d0d442fbfde477cb": "1f21b231baa117eb641b2d5d7f8e142a",
".git/objects/cf/f6fda30e05063512d93b0d4e7ab9a7a61bc9be": "6c5172ccfb04817bab20c400d4264fc2",
".git/objects/d8/61d01e8217402e93e832ae27c8f97e29cbccd6": "40c7c4d5da6d1f9cc77595112770b937",
".git/objects/e0/2c86526adfee0d1d804eb327fb78fbf069e791": "033edb87cf35c67c3d2a9ca6a097cbd3",
".git/objects/f1/36faae8b10e6743460843342095684b41b2a2f": "f98e8ecd55e916e6557ce7cc30c500d8",
".git/objects/f1/58339c49f252144b0e665ab8aed9b52b99dca3": "fba69544fe09d78646ccfa6606e51ef6",
".git/objects/f2/716b965baf113b8dcf6f7ea23a830190c6066e": "b3be2476f9e43caedab8fd3f2cb64b23",
".git/objects/f6/9d51fccd8b12a6c86121e3aa84cb319adec6c9": "7e2a928b633df91965783c84d7a8f8e7",
".git/objects/ff/09292b9f14b384578b397d679f1a720f020919": "f380e5c82ac6d988abba3c5cc65b8501",
".git/refs/heads/master": "69f6ce1a3b1cdfd87a43edab4d32d345",
".git/refs/remotes/origin/master": "69f6ce1a3b1cdfd87a43edab4d32d345",
"assets/AssetManifest.json": "fa6e37aec937b8ee1f003ae317237e26",
"assets/assets/icons/email.svg": "e93d576182b97d2e874ee8137dbb4af7",
"assets/assets/icons/facebook.svg": "0587f70c98d05d35833d892558712ade",
"assets/assets/icons/twiiter.svg": "1db9e9c352df34dd25e86db386f3d62b",
"assets/assets/icons/whatsapp.svg": "b53c44ade1df4039f1390274ee88f194",
"assets/assets/images/2.png": "1fdb7c800008fbb0a8f92e2a00574672",
"assets/assets/images/logo.png": "fac4558cd864cb2a75b481c0f87dd038",
"assets/assets/images/profile_pic.png": "5f56c3070f1c066ae15ecad12fb44f54",
"assets/assets/images/slider1.png": "d331421cdfcd3c36c05ec690cb043fde",
"assets/assets/images/slider3.png": "3cbf9796438eda93e166cee25a557e5d",
"assets/assets/images/values1.png": "92d0c1e47d4913ec3661ebfaddc11100",
"assets/assets/images/values2.png": "b1b80291b22bf9db5297236dad1a8a41",
"assets/assets/images/values3.png": "3e7ebb8898c03c0999e2328209aa8f71",
"assets/assets/images/values4.png": "4b08811f8fef57c97f286160bc2b4e10",
"assets/assets/images/values5.png": "d8c4c31d18e7e618c0b91e49956e8592",
"assets/assets/images/values6.png": "f9da3a5defed91175cfc414be2484633",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "7a034cc965e3dfa49d17d30cd83057b3",
"favicon.ico": "6a4b0fcb18af19dd9091d87a695c4835",
"icons/Icon-192.png": "4365b2382e5ad6f6566eb03bfc7a54c7",
"icons/Icon-512.png": "c74a638bee0d584d7b50e021a2328c94",
"index.html": "2e4ea063129983fc30f24b23bdc0905f",
"/": "2e4ea063129983fc30f24b23bdc0905f",
"main.dart.js": "bba40ff075cc2550b19565a9b9e03409",
"manifest.json": "93ea811c767e406a81ef07c20bcf986b",
"version.json": "012cb702824a22b8a6b81cf2b3850475"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
