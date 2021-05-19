'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "0b299ce34621e31d60a4680f169385e8",
"assets/assets/business/icons/icon-absent.svg": "2ce5296bfe747bdac30cc73fb2da547b",
"assets/assets/business/icons/icon-add.svg": "3d344879b431189c52559f43ab67b95b",
"assets/assets/business/icons/icon-bonus.svg": "e7f939ab4b2f3df748d578186946ac28",
"assets/assets/business/icons/icon-checked.svg": "292e29747a2c93387b6a47a9c9cdf97f",
"assets/assets/business/icons/icon-delete.svg": "e63614f19f849850762d43ed64e4378f",
"assets/assets/business/icons/icon-edit.svg": "1f22f4e12edc8d40b79565b4e4116d3f",
"assets/assets/business/icons/icon-employe.svg": "96b6c463a049de3a1f732ffc7026a4ee",
"assets/assets/business/icons/icon-filter.svg": "ac8027160a091135b631d5ca5954cbd8",
"assets/assets/business/icons/icon-half-day.svg": "599fd0b59c87bb6a6058036cf148ff70",
"assets/assets/business/icons/icon-holiday.svg": "768e0ed11e1c00ea8b96decd336bc727",
"assets/assets/business/icons/icon-late.svg": "b744c4e5184f91783e55eec0661654d0",
"assets/assets/business/icons/icon-location.svg": "3033cdef41df64b63f9f6f329be1cd71",
"assets/assets/business/icons/icon-menu.svg": "cf92fbb86d01c8351fb1ed03614f4292",
"assets/assets/business/icons/icon-overtime.svg": "daf201adc9797982b9a52e2cf8a75e61",
"assets/assets/business/icons/icon-pay-run.svg": "58e6029af0a6bf30dd39a1346d9ae56f",
"assets/assets/business/icons/icon-payroll.svg": "f219305032c7ad922ee19976d659c246",
"assets/assets/business/icons/icon-present.svg": "47f2722da1e2ebcc161695fa60d62955",
"assets/assets/business/icons/icon-profile.svg": "bd5b54f2a86457cdf6610fc89921134b",
"assets/assets/business/icons/icon-settings.svg": "8908f5123ce47b2a2866b66733e494b1",
"assets/assets/business/icons/icon-time.svg": "c87af2b76aa091655871d33cbf72c150",
"assets/assets/business/icons/icon-unchecked.svg": "08b9e697edb3a2ab14dd74fe5465041c",
"assets/assets/business/model/business.json": "2275d04f8dccb7d15fed31dbb76df80a",
"assets/assets/business/model/employees.json": "07c1aa1e075f0813aba6090ff1b4a38f",
"assets/assets/business/model/locations.json": "757345f3e321eb722c748651343baa3d",
"assets/assets/employee/icons/add.svg": "2aa13c6360f5cf696ecf24e3f5e20445",
"assets/assets/employee/icons/bank_account.svg": "a10c1e6a74a7daa7325655b9b75ada21",
"assets/assets/employee/icons/calendar.svg": "a05b002dffa9563ccb21047d8a5298f9",
"assets/assets/employee/icons/dashboard.svg": "971a4c99b37627aacaa6312b563846a6",
"assets/assets/employee/icons/dashboard_salary_slip.svg": "d9f07d87298a4c10cf9f9aba6ae46aa1",
"assets/assets/employee/icons/download.svg": "d53b6b60099aa7b0550b52eaa98b13e0",
"assets/assets/employee/icons/edit.svg": "1f22f4e12edc8d40b79565b4e4116d3f",
"assets/assets/employee/icons/epaytime.svg": "4a38403d68f57a277f12fffff3ada1fb",
"assets/assets/employee/icons/landing.svg": "b06d9621ecf558f41a2c536035815c78",
"assets/assets/employee/icons/location.svg": "c97a207f549e3ae0b16d69a3485d0936",
"assets/assets/employee/icons/menu.svg": "c13c6b9ba931a1e9d222725a9a23986e",
"assets/assets/employee/icons/menu_option.svg": "26da824bb3aecb4624d1dcae07ca2353",
"assets/assets/employee/icons/next.svg": "19a6b915e86df42d878403a66e6fac74",
"assets/assets/employee/icons/option.svg": "75485fe0b3bf0873086e8377560b4b4a",
"assets/assets/employee/icons/profile.svg": "5fae059b48ab3720d3a626bd66d7d564",
"assets/assets/employee/icons/profile_edit.svg": "74418adc256768bc4725c84c61f2bc18",
"assets/assets/employee/icons/profile_picture_edit.svg": "2f390093e5f690949ec584fab896f63d",
"assets/assets/employee/icons/timesheet.svg": "4ff8120d2e649663ad4206a4fe61411d",
"assets/assets/employee/icons/timesheet_absent.svg": "2ce5296bfe747bdac30cc73fb2da547b",
"assets/assets/employee/icons/timesheet_camera.svg": "40d0b74c92e485263fd5fb90f3231403",
"assets/assets/employee/icons/timesheet_capture.svg": "5a435f726f5a5ad5be6ce9afea92a9ee",
"assets/assets/employee/icons/timesheet_holiday.svg": "9ca0a1ccc241416d7c6846aca3d40405",
"assets/assets/employee/icons/timesheet_late.svg": "b744c4e5184f91783e55eec0661654d0",
"assets/assets/employee/icons/timesheet_next.svg": "19a6b915e86df42d878403a66e6fac74",
"assets/assets/employee/icons/timesheet_overtime.svg": "daf201adc9797982b9a52e2cf8a75e61",
"assets/assets/employee/icons/timesheet_present.svg": "47f2722da1e2ebcc161695fa60d62955",
"assets/assets/employee/icons/vietnamese.jpg": "5f4475d8c08f587e03fbdc6db0f06635",
"assets/FontManifest.json": "fdb09c117993a2d07e71b5b3d694bd19",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/fonts/RobotoMono-Regular.ttf": "e5ca8c0ac474df46fe45840707a0c483",
"assets/NOTICES": "ece8ffe2ed9285d62723e3e1200ba8a9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "19e426f03ebc27da39276aaf4fc26311",
"/": "19e426f03ebc27da39276aaf4fc26311",
"main.dart.js": "fb8bd2adf569c9b0187c6ecd62edfc3c",
"manifest.json": "b95bafb8b207eb6d5c2a24b993220cbd",
"version.json": "411515428ac85b3540d9b01e9e99010d"
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
