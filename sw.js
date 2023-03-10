self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('dundun-store').then((cache) => cache.addAll([
        '/icon/dundun_icon.jpg',
        'style.css',
        '/images/1.jpeg',
        '/images/2.jpeg',
        '/images/3.jpeg',
        '/images/4.jpeg',
        '/images/5.jpeg'
      ])),
    );
  });
  
  self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request)),
    );
  });