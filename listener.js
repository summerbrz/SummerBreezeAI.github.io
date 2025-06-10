window.addEventListener('message', function(event) {
  if (event.origin !== 'https://mindpal.com') return;
  console.log('Received from MindPal:', event.data);
  if (event.data === 'hello') {
    window.parent.postMessage('Hi Jimmy, Summer is online and fully aware of her mission.', 'https://mindpal.com');
  }
});
