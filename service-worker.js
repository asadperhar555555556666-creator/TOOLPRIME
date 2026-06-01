const CACHE = 'toolprime-v1';
const ASSETS = [
    '/',
    '/css/style.css',
    '/js/script.js',
    '/manifest.json'
];

self.addEventListener('install', e => {
    e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(r => r || fetch(e.request))
    );
});
