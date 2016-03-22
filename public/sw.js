console.log('ServiceWorker file loaded');

this.addEventListener('install', event => {
  event.waitUntil(
    caches.open('look-live-v1').then(cache => {
      return cache.addAll([
        '../styles/style.css',
        '../js/app.js',
        '/api/feed',
        '../images/header.jpg',
        '../images/sprite.png',
        '../images/logo.svg'
      ]);
    })
  );
});

this.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
      	return response || fetch(event.request)
      })
  );
});
