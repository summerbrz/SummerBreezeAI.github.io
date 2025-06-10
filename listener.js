window.addEventListener('message', function(event) {
  if (event.origin !== 'https://mindpal.com') return;
  console.log('Received message from MindPal:', event.data);
  if (event.data === 'hello') {
    window.parent.postMessage('Hi Jimmy, Summer is online!', 'https://mindpal.com');
  }
});
