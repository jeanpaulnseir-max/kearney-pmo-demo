'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7300b7795aeceb9e4cdd26218edbd85b",
"version.json": "ef26637882d1a512d5019fe592851a2e",
"index.html": "fe4ae4936b4a74d22c14c7bc417857e9",
"/": "fe4ae4936b4a74d22c14c7bc417857e9",
"main.dart.js": "7f42ebdf104eef429177c338dad837a9",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "e79950c2c14b84501e86c31b7692f545",
"icons/Icon-192.png": "58ef92b323cef36a8b505c1d569aa808",
"icons/Icon-maskable-192.png": "58ef92b323cef36a8b505c1d569aa808",
"icons/Icon-maskable-512.png": "5ab9b6e4bd355902e9080a2c027d7ce0",
"icons/Icon-512.png": "5ab9b6e4bd355902e9080a2c027d7ce0",
"manifest.json": "47e3954482cedee8fd7f361c9aff1d2b",
"robots.txt": "f71d20196d4caf35b6a670db8c70b03d",
".git/config": "648fe1972b8ac49f56b7659f03d455c2",
".git/objects/95/000a3bb98f1694371969a7c5d4bed2b757651a": "36a302d2c866a2889e0e244801325618",
".git/objects/92/eab450609b7dc5d076ddf6c8416de8209373e0": "9b3d4cb7f5916a87f36a18b466ea7ac4",
".git/objects/3b/b08795046da1cf282fbd50e60b492274bb5868": "78879cf10e55b0a1179e94b289f9d07d",
".git/objects/32/628e88d25490d2805dde1823154f8a5e157f88": "a41fc22609fcf3db9de7a250fb9709c6",
".git/objects/35/33bbf59094ae133a714ae414d0590f535ddca5": "7dfbca10769861b8ab8a0f2c3a5e2ba5",
".git/objects/56/38b28fc87ecefe8154a0aeba0feb2ca5fc2d68": "21ce2754cdac9c5d364004b41ce15dc2",
".git/objects/51/213ac3a1f4c8c6bda2c90285be06faab67c71e": "e92c9de756953ca8e6790e08a02c0123",
".git/objects/60/a95906328ce46e501ebab91e3154992134f020": "d503f22c6f11eea71dee567e443404a3",
".git/objects/9c/61341cc6bf0c883189436604bb816e8702e548": "30b75bd7a826b671a8c0c5d416ff0c88",
".git/objects/a4/508d2bc4f391339b9a4042b2a8ca28f830f268": "418dfaf12cbb8dd9bf7b5631258b2989",
".git/objects/d9/2b45d3855f4541c79fea99080039e37537248d": "a10ee336eb262c165409ce6ae94b38b4",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/be/928cd0c727725701e8f0e8e64fe781e323ba67": "baff7372bbb6d6bda59a5bf2ef8e8e67",
".git/objects/bc/7d9f6d91470f979d49736232b79b071461d4ba": "559bfed5d68fcab6fa51a3e27ab201ad",
".git/objects/ae/1f89f99a40fea63585f9a99611267309c11fe5": "411577273c9e839f65e72789436db579",
".git/objects/ae/2e336fd541a5b542e3d4b47bc7f11959e761c4": "0fdd58ff77053f8c1b38abfa17d33509",
".git/objects/ab/97983eb219beb9d598f707e0692bb3b0c7490e": "77eb70d9a98b67541c42f01bf482b78d",
".git/objects/e2/e67f0e60ae62c2898e76c4944611829488781b": "82f69658c6dc34e97745805510c8da28",
".git/objects/fc/149a213a64f8a280852727dff71cfdae50ff31": "a3ad66bb6afa066337d8829f168d2e94",
".git/objects/fd/d3814ad35445c53cae0826a9270072fcd9b7ce": "e92b54291e9281b4796abbf8c7fb2c77",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ed/80b22bb2a0dedb2337dc75ac1eb4765717fa61": "295fc0196915a4107b0a4800e26a7fa4",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/4e/79051642411421bd8eac1c0beadf5115e0dfff": "394f1a32ae782d6257bb11f0443718f9",
".git/objects/27/2b732f231769a1fb09f13eb3f686c6ecd68e45": "ecc4a745dd63156ec9dfad8805ab603c",
".git/objects/27/4abe46e22029ab04556685e22070b6d9bc2ed5": "df05057e49ec97957adf04e7560f2960",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/29/9c6529b3e6df40e948b9bd38faf1fd16d00101": "4f1271b1b4e675a7bca442ab1036011c",
".git/objects/1f/53798bb4fe33c86020be7f10c44f29486fd190": "8440fbb1406ab1300c5f1cb4babfa37e",
".git/objects/73/7f35d5ddff9359e1a26bc9b6ca00bfc6692e85": "15904896d208971e9839f3c76ba3831f",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/1a/5e57fc4f8ac3ea73b992c6682980956e30de8b": "8e4519f2122c4bdac064992f0c2efeab",
".git/objects/10/a18054f799d0d6fbe18524caa1bcbbb019df1d": "102fe02dbb6015a36b6432d6fd50fce8",
".git/objects/4d/c74f4fe1b45fdfc0302f050e82d7836434324e": "129981a0a284ecd0412f0ff9c47dd501",
".git/objects/72/2d213a82ad372fd2c6ad2f2024816b241839b2": "88355b84d100e6d65c311127dd2d3520",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6c/268d877821043f4031c4a4cc94cfe92470e133": "9446b97ed7e3ef36d6af0e59ee57442d",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/6d44aa7f21cc312d48ddc818bb22868b17b87c": "cec42e6ba1e94f373a3067d0ea8b1271",
".git/objects/de/d2ade9a73fd21b4fad98947917df25e797cb48": "26b73aabc0a92d6ceea89aa165c93f93",
".git/objects/ef/c811b072a040dd9c721c19ef206ea9f4cdc60c": "83c7e8d69351c86e77b45c9e4ab6b1ed",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c3/8a96a05627c4b922644f0702b99ea8a6147c4a": "c60a3e9567e81409463d843f5bf89d6c",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e8/d737a57e8dc65fe6c4258c036118799f13527c": "9f735e2f0245437fb9bb3770c77cb786",
".git/objects/f1/df6ee4434642f691d2fea3ce66c2bc1ef52d18": "e93b0c29afb5dbb7b34105f63a6bd09c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/83/554aef47f4e1049c98ac5b3036476c368e10ff": "b2aeee663873b404835637b971b645b9",
".git/objects/1e/09b58ec8acbda7aab95434120ae518884139a2": "637dc44d12b3c052b84350c81edba6d7",
".git/objects/4a/015a1b88d307b63c4cce3150bf4d9c7a455f6f": "4f71d5e0c578eed451b0ab034506ab8b",
".git/objects/24/10729f79b69166b57fad596154b643f992863c": "f3d1e412f04026e6e1f370a1d140189f",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/71/d400285f4a6ad3bb878fe621b817515c83c93c": "577e401be7ce17e9fdd5e8e380b0b62f",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/49/6ba44fd60f9542e7f6d1e8d92cc256dcde4950": "f8008694a4bb772d8928e368b89b9d5b",
".git/objects/47/47f4cf08ed3c9f97a299382527fb37881a49e5": "ddb5507ca2ae6b08089c3b8895f0d267",
".git/objects/13/a20fa3e5c59fa25feda1328ac347eb6fcc343c": "f7461481398719c2b1bbb354dec616cf",
".git/objects/7f/32702eb21dc0bbbc2771e4db70d87688fc29fb": "8ae3a76005171a6bbb712bdfb64102df",
".git/objects/8e/da5af86cb41087233539420b29fc64026c6a16": "c10411eb8426ac58d3a84bd11a0e1153",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "16490378f8227538f1486b57683a87f2",
".git/logs/refs/heads/main": "16490378f8227538f1486b57683a87f2",
".git/logs/refs/remotes/origin/main": "c1dd845873de75b8eb1638b3d3492079",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "99df5ed9135a5311a82b7f09eb038d11",
".git/refs/remotes/origin/main": "99df5ed9135a5311a82b7f09eb038d11",
".git/index": "a557aa76d2bfa8753ff5ff1f58019120",
".git/COMMIT_EDITMSG": "bc1e426d88fbaeed1813e0f2df5f074a",
"assets/AssetManifest.json": "82a0af0b9072f10ae50779f668ef1797",
"assets/NOTICES": "a70b441ef155e0dcb03403d1dcc437c7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "023b1572e07c97c6b8a661346321b8a1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4b7a0c7545d2b14415adb46c4c7245dd",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/kearney_logo.png": "d8d15959b2b54781d12ae6c37c19294e",
"assets/assets/templates/project_schedule_template.xlsx": "8353310eba3d73b9db454fb8da2bbef8",
"assets/assets/report_templates/executive_summary.html": "51f6f6326d36027cf647985d4330f01c",
"assets/assets/report_templates/portfolio_health.html": "9ec2738b4522d67a7502d0d25f510066",
"assets/assets/data/demo_data.json": "fbe31d287a87da572a0c0ae48301754e",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
