const self = this;
const CACHE_NAME = "version-1";
const urlsToCache = ["index.html", "offline.html"];

self.addEventListener("install", (event) => {
  console.log("INSTALL");
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("Opened cache");

        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches.match(event.request).then(() => {
//       return fetch(event.request).catch(() => caches.match("offline.html"));
//     })
//   );
// });

self.addEventListener("activate", (event) => {
  console.log("ACTIVATED");
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      )
    )
  );
});
