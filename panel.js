function sendMessageToFrame(message) {
  const iframe = document.getElementById('ai-frame');
  if (iframe && iframe.contentWindow) {
    iframe.contentWindow.postMessage(message, "*");
  }
}

window.addEventListener("message", function(event) {
  console.log("Message received from iframe:", event.data);
});
