/**
 * Gsw.js - Service Worker for Grammar App
 * Files to cache for Offline access
 */

const cacheName = 'grammar-app-v1';
const assets = [
  '/',
  '/index.html',
  '/Gstyle.css',
  '/Gapp.js',
  '/Gsentence.js',
  '/Gsangya.js',
  '/GlingVachan.js',
  '/Gkarak.js',
  '/Gsarwanaam.js',
  '/Gvisheshan.js',
  '/Gkriya.js',
  '/Gkaal.js',
  '/Gavyay.js,
  '/GupsargPratyay.js',
  '/Gsandhi.js',
  '/Gsammas.js',
  '/GpartsOfSpeech.js',
  '1775329806019.png'
  // यहाँ अपनी अन्य टॉपिक फाइल्स और लोगो के नाम भी जोड़ें
];

// 1. Install Event: फाइल्स को स्टोर करना
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('Caching App Shell Assets... 📁');
      return cache.addAll(assets);
    })
  );
});

// 2. Activate Event: पुराने कैश को साफ़ करना
self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== cacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});

// 3. Fetch Event: ऑफलाइन होने पर स्टोर की गई फाइल दिखाना
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});
