// Cache-naam en bestanden om te cachen
const CACHE_NAME = 'quote-pwa-cache';
const urlsToCache = [
    '/',
    '/index.html',
    '../manifest.json',
];

// Installeer de Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

// Activeer de Service Worker
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames.filter((name) => {
                        return name !== CACHE_NAME;
                    }).map((name) => {
                        return caches.delete(name);
                    })
                );
            })
    );
});

// Intercepteer netwerkverzoeken en reageer met gecachte bronnen
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});
