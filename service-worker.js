// Service worker mínimo: solo existe para que Chrome/Android permitan
// "instalar" el dashboard como app. No cachea nada — el dashboard necesita
// internet de todas formas para conectarse a Firebase, así que no intentamos
// modo offline por ahora.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  self.clients.claim();
});
self.addEventListener('fetch', (event) => {
  // Dejar pasar todas las peticiones normalmente (sin caché).
});
