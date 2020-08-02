// Register custom service worker. That maybe is unnecessary as default one
// handles similar message for triggering skipWaiting
// (but for event.data.type === 'SKIP_WAITING')

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting()
  }
})
