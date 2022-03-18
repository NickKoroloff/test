'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "0890808639270ea6fe1ebb2c39fa96a0",
"index.html": "024fb0f6e8ca91237d0053e3ad9f1dc6",
"/": "024fb0f6e8ca91237d0053e3ad9f1dc6",
"main.dart.js": "e9e2638aab1b6d07e3bb6c6b3cff6b0e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "18fd7da52c4a9028cde6687b57b6fb13",
"assets/AssetManifest.json": "04aede2ed97532d1503b936152f981ed",
"assets/NOTICES": "9741ad0d63d929bc979492c9bc8ce525",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "293130157c75eed869a41f5e53c1b313",
"assets/lib/app/data/1554187288for-king--country-56b4d64717b9e.png": "241f739801f6b62b1c692dd6c6e27ce9",
"assets/lib/app/data/map.json": "b0981042355ec8f67a0c9f1457542cd6",
"assets/lib/assets/icons/underline.svg": "c003339842964bd1c90eb93fde1ff2e8",
"assets/lib/assets/icons/arrow-down.svg": "80e29c0139e09162e1627773493d8524",
"assets/lib/assets/icons/arrow.svg": "c8c318f323f1ea049852ff35fd769f87",
"assets/lib/assets/icons/draggable.svg": "3c7c14c1e446e1b94dc2137def5ffa6d",
"assets/lib/assets/icons/chain.svg": "d00e057624f9cf90810b59e2d36c9b45",
"assets/lib/assets/icons/pdf-icon.svg": "885cd4a364fd045f5af99fc35124362e",
"assets/lib/assets/icons/download.svg": "19a921caa886c16118cd682144004b54",
"assets/lib/assets/icons/list-dots.svg": "0e9f8dae827c232ce288c990a1604cd7",
"assets/lib/assets/icons/starting-position-icon.svg": "5ccc502a7de94f611322da082b66ef74",
"assets/lib/assets/icons/bold.svg": "79e16b1c985be8a918194bd685720130",
"assets/lib/assets/icons/image-icon.svg": "0fe8e88054e14b7f2731a8de0f54f349",
"assets/lib/assets/icons/solid.svg": "61757a1ab8b5c24c273bcaa54faa5deb",
"assets/lib/assets/icons/upload-images.svg": "aa3849622ac93b4beacf64151c9ba0ff",
"assets/lib/assets/icons/list-numeric.svg": "8e1907a1b6d4f151ea779f5a5754caea",
"assets/lib/assets/icons/add.svg": "ed649ac4b09128a49609ed8cd30dbfa3",
"assets/lib/assets/icons/document-icon.svg": "12f5a566e1642af31d99c228906fbc0c",
"assets/lib/assets/icons/remove_alert.svg": "b6511c404d2d435f7e94ce7498d389be",
"assets/lib/assets/icons/download-map-icon.svg": "ba4f139b377e5d149ffd4eba434cd951",
"assets/lib/assets/icons/zoom-in.svg": "210d2face32fb5ad46fccf85620669b7",
"assets/lib/assets/icons/locked-to-drag.svg": "92bacfa988bc3b4f6b9962e3ac33d422",
"assets/lib/assets/icons/hide.svg": "2ba1eef1009ab7a650be3371cb503aff",
"assets/lib/assets/icons/align-right.svg": "00dc2f0f84ce8c2f53d8a1c44af7be3d",
"assets/lib/assets/icons/color-picker.svg": "e6a486742c6ba9849cb495c1dff6ecec",
"assets/lib/assets/icons/zoom-out.svg": "537e14c8a1e57d7e176f689ed5652d6f",
"assets/lib/assets/icons/redo.svg": "6824864a7df646f5fbb2611db70f90fc",
"assets/lib/assets/icons/wheelchair.svg": "09b383028a867736244a66cba71333dd",
"assets/lib/assets/icons/unlock.svg": "74ad4e37ebb2c9c47cd72573e81f90e7",
"assets/lib/assets/icons/settings-icon.svg": "50be9177772299f5f18eb229c3f57475",
"assets/lib/assets/icons/outline.svg": "2a32187bb18a37d773b6ca5b5f5217c8",
"assets/lib/assets/icons/set-background.png": "ab745f8640568987c3f8447b115d4f0c",
"assets/lib/assets/icons/arrow-double.svg": "d01d0323ef3a3f86e59a7602f156160a",
"assets/lib/assets/icons/undo.svg": "8202638e9b322af91b1d74a17d5a34a2",
"assets/lib/assets/icons/italic.svg": "ec74708f54ec741c6b6b8c6317caaa04",
"assets/lib/assets/icons/align-center.svg": "77eb3e1f91548557d0e4638c743e033e",
"assets/lib/assets/icons/logo.svg": "510adf7addc693606c0301e891f8d36a",
"assets/lib/assets/icons/locked.svg": "ebaf37944ec181d4794d636ed5ce6fcd",
"assets/lib/assets/icons/align-left.svg": "cef5921cd4e972abd965f8b8d5be121a",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/google_fonts/Merriweather-Bold.ttf": "79ea53fed59f391498dfc6f2fbea97c2",
"assets/google_fonts/Merriweather-Regular.ttf": "e2f219e63a575a41e10f991e9c95819a",
"assets/google_fonts/Montserrat-LightItalic.ttf": "01c4560c9c15069b6700ce7ad2e49a9c",
"assets/google_fonts/OpenSans-SemiBold.ttf": "af0b2118d34dcaf6e671ee67cf4d5be2",
"assets/google_fonts/Montserrat-Medium.ttf": "c8b6e083af3f94009801989c3739425e",
"assets/google_fonts/Merriweather-Light.ttf": "eccb6c6a243a3d44219648b6cdbc58ce",
"assets/google_fonts/ABeeZee-Italic.ttf": "e30495e5f1dd16610ef0543907909ead",
"assets/google_fonts/Poppins-ExtraLight.ttf": "86a2f13e91ac85080ebaeaab9463b9f1",
"assets/google_fonts/OpenSans-Italic-VariableFont_wdth,wght.ttf": "8813083d80a30128eb9dd1b5a342c629",
"assets/google_fonts/Poppins-ThinItalic.ttf": "c93e22e98b7a8d58f83ce42b278815eb",
"assets/google_fonts/Poppins-ExtraLightItalic.ttf": "05139b6509a2baa8f188fbade78fc3ed",
"assets/google_fonts/Poppins-BoldItalic.ttf": "09775bde3e9448b38c063b746e21cb6b",
"assets/google_fonts/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/google_fonts/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/google_fonts/Montserrat-BoldItalic.ttf": "1b38414956c666bd1df78fe5b9c84756",
"assets/google_fonts/Montserrat-Light.ttf": "409c7f79a42e56c785f50ed37535f0be",
"assets/google_fonts/Montserrat-ThinItalic.ttf": "3c2b290f95cd5b33c3ead2911064a2ab",
"assets/google_fonts/Montserrat-ExtraLight.ttf": "570a244cacd3d78b8c75ac5dd622f537",
"assets/google_fonts/Montserrat-Thin.ttf": "43dd5b7a3d277362d5e801e5353e3a01",
"assets/google_fonts/OpenSans-Light.ttf": "3dd221ea976bc4c617c40d366580bfe8",
"assets/google_fonts/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"assets/google_fonts/Poppins-SemiBoldItalic.ttf": "378a091bc1b1e6e6d6327beb6bfb07b9",
"assets/google_fonts/Merriweather-BoldItalic.ttf": "fee74a810c9df73fe7218e4ff5815830",
"assets/google_fonts/Montserrat-MediumItalic.ttf": "40a74702035bf9ef19053c84ce9a58b9",
"assets/google_fonts/OpenSans-Italic.ttf": "07cd1acf656521af831f0a37e304c5bb",
"assets/google_fonts/Montserrat-BlackItalic.ttf": "d9b6ba595b059fc5d48e8f52c30f73b3",
"assets/google_fonts/OpenSans-MediumItalic.ttf": "af8809ff3bd655a62950c8e21361695f",
"assets/google_fonts/Poppins-ExtraBoldItalic.ttf": "29f7dd016eeed2bcd79ba482eb3f27ec",
"assets/google_fonts/Poppins-ExtraBold.ttf": "544fa4f2678a8285eb88b8dfe503c90c",
"assets/google_fonts/OpenSans-ExtraBold.ttf": "907d99fe588e4649680159671dfe74f4",
"assets/google_fonts/Montserrat-SemiBold.ttf": "c641dbee1d75892e4d88bdc31560c91b",
"assets/google_fonts/Merriweather-BlackItalic.ttf": "4c5b0354e588a8387e588ccdd4fc2dd8",
"assets/google_fonts/OpenSans-LightItalic.ttf": "bc84c22b39c8edfaaa7e821477ce9215",
"assets/google_fonts/Montserrat-ExtraLightItalic.ttf": "1170df5548b7e238df5fa14b6f1a753e",
"assets/google_fonts/Poppins-BlackItalic.ttf": "3fb21c8084013f3d0176bc98bcf76e60",
"assets/google_fonts/Montserrat-ExtraBold.ttf": "19ba7aa52a78c3896558ac1c0a5fb4c7",
"assets/google_fonts/OFL.txt": "4f4f0cdd50df889344c9bb0d1234cf06",
"assets/google_fonts/OpenSans-Bold.ttf": "5bc6b8360236a197d59e55f72b02d4bf",
"assets/google_fonts/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/google_fonts/Acme-Regular.ttf": "22b3170c9e556fd13a1eb8f012a5635d",
"assets/google_fonts/Montserrat-Black.ttf": "27e3649bab7c62fa21b8837c4842e40e",
"assets/google_fonts/OpenSans-SemiBoldItalic.ttf": "ac6de8932b6838e3e7739115e2145a7e",
"assets/google_fonts/OpenSans-Medium.ttf": "0cbcac22e73cab1d6dbf2cfcc269b942",
"assets/google_fonts/Oswald-VariableFont_wght.ttf": "b0dd645b54abc9fa0d8a7ed6975c5f87",
"assets/google_fonts/ABeeZee-Regular.ttf": "c6d6bab07ed6749fb96431eac12bbe29",
"assets/google_fonts/ConcertOne-Regular.ttf": "1b40f0186d1a8b1500b4676b2e9a7ba1",
"assets/google_fonts/Poppins-LightItalic.ttf": "1eaf3af47612e6163a2e27e847c6ac7d",
"assets/google_fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/google_fonts/Montserrat-Italic.ttf": "a7063e0c0f0cb546ad45e9e24b27bd3b",
"assets/google_fonts/OpenSans-ExtraBoldItalic.ttf": "4991d99c8494b79917a682eac37d0555",
"assets/google_fonts/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/google_fonts/LICENSE.txt": "3b83ef96387f14655fc854ddc3c6bd57",
"assets/google_fonts/Merriweather-Italic.ttf": "b974ea37b30597dbf7b8d6d0ef38de89",
"assets/google_fonts/OpenSans-VariableFont_wdth,wght.ttf": "fad3454a861bdaf75e6abfc2c9de46c5",
"assets/google_fonts/OpenSans-Regular.ttf": "3eb5459d91a5743e0deaf2c7d7896b08",
"assets/google_fonts/Poppins-Black.ttf": "0573b9231a8316427ad6e751b52e87a4",
"assets/google_fonts/OpenSans-BoldItalic.ttf": "c1817c8c96e3dca8b13f779ee339b1bc",
"assets/google_fonts/Poppins-Thin.ttf": "25cd0f688f815bc4f6ac2b71eb6278ba",
"assets/google_fonts/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/google_fonts/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/google_fonts/Merriweather-Black.ttf": "3fc5af7aaeb3de5b417fcfbd8a8b10c2",
"assets/google_fonts/Montserrat-SemiBoldItalic.ttf": "83c1ec1f1db9a6416791f7d9d29536f2",
"assets/google_fonts/Merriweather-LightItalic.ttf": "e5ce4649f1b543ef4431a3e149271bea",
"assets/google_fonts/Montserrat-ExtraBoldItalic.ttf": "52a50ca037f2f96fa567404dc3c5bdfb",
"assets/google_fonts/Poppins-MediumItalic.ttf": "1749e4b603749026393f64506a3bcbbe",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
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
