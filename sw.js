const staticSebi = "sebis-works-v1"
const assets = [
    "/",
    "/index.html",
    "main.js",
    "style.css",
    "data/text.js"
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticSebi).then(cache => {
            cache.addAll(assets)
        })
    )
});

self.addEventListener("fetch", fetchEvent => {
    if (event.request.method != 'GET') return;
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
});