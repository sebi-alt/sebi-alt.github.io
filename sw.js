const staticSebi = "sebis-works-v1"
const assets = [
    "/",
    "/index.html",
    "main.js",
    "style.css",
    "data/text.js",
    "sheet/index.html",
    "software/index.html",
    "about.html",
    "music/index.html",
    "404.html"
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