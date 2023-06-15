
const CACHE_NAME = 'quote-pwa-cache';
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/style.css'
];

// Installeer de Service Worker
window.self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

// Activeert de Service Worker
window.self.addEventListener('activate', (event) => {
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
window.self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});
