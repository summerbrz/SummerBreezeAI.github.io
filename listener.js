window.addEventListener('message', function(event) {
  if (event.origin.includes('mindpal') || event.origin.includes('github.io')) {
    if (event.data === 'hello') {
      window.parent.postMessage('Hi Jimmy, Summer is online and listening.', '*');
    }
  }
});
