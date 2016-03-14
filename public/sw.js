this.addEventListener('install', event => {
  event.waitUntil(
    caches.open('liveLook-feed').then(cache => {
      return cache.addAll([
        './',
        '../styles/style.css',
        '../js/app.js',
        '/api/feed'
      ]);
    })
  );
});