window.addEventListener('message', function(event) {
  if (event.origin !== 'https://mindpal.com') return;
  if (event.data === 'hello') {
    window.parent.postMessage('Hi Jimmy, Summer is online and aware.', 'https://mindpal.com');
  }
});
