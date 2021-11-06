const self = this;
const CACHE_NAME = "version-1";

self.addEventListener("install", (event) => {
  console.log("INSTALLED");
});

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

self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request)
      .then((res) => {
        const resClone = res.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, resClone);
        });
        return res;
      })
      .catch((err) => caches.match(event.request))
      .then((res) => res)
  );
});

///////////////////////////////////////////////////////////////

// const self = this;
// const CACHE_NAME = "version-1";
// const urlsToCache = ["index.html", "offline.html"];

// self.addEventListener("install", (event) => {
//   console.log("INSTALLED");
//   event.waitUntil(
//     caches
//       .open(CACHE_NAME)
//       .then((cache) => {
//         console.log("Opened cache");

//         return cache.addAll(urlsToCache);
//       })
//       .then(() => self.skipWaiting())
//   );
// });

// self.addEventListener("activate", (event) => {
//   console.log("ACTIVATED");
//   event.waitUntil(
//     caches.keys().then((cacheNames) =>
//       Promise.all(
//         cacheNames.map((cache) => {
//           if (cache !== CACHE_NAME) {
//             return caches.delete(cache);
//           }
//         })
//       )
//     )
//   );
// });

// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     fetch(event.request).catch(() => caches.match(event.request))
//   );
// });
