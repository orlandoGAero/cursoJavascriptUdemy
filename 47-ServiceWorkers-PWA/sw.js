const nombreCache = 'apv-v4';
const archivos = [
    '/',
    '/index.html',
    '/error.html',
    '/css/bootstrap.css',
    '/css/styles.css',
    '/js/app.js',
    '/js/apv.js'
];

// Cuando se instala el service worker
self.addEventListener('install', e => {
    console.log('Service Worker instalado');
    
    e.waitUntil(
        caches.open(nombreCache)
            .then( cache => {
                console.log('Cacheando...');
                cache.addAll(archivos);
            })
    );
});

// activar service worker
self.addEventListener('activate', e => {
    console.log('service worker activado');
    
    e.waitUntil(
        caches.keys()
            .then(keys => {
                return Promise.all(
                    keys.filter(key => key !== nombreCache)
                        .map(key => caches.delete(key))
                )
            })
    );
});

self.addEventListener('fetch', e => {
    console.log('Fetch...', e);
    
    e.respondWith(
        caches.match(e.request)
            .then( respuestaCache => (respuestaCache ? respuestaCache : caches.match('/error.html')))
    )
});