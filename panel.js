function sendMessageToFrame() {
  const iframe = document.getElementById("ai-frame");
  const input = document.getElementById("message");
  const message = input.value.trim();
  if (iframe && iframe.contentWindow && message) {
    iframe.contentWindow.postMessage(message, "*");
    appendToChatLog("You", message);
    input.value = "";
  }
}

function appendToChatLog(sender, message) {
  const log = document.getElementById("chat-log");
  const entry = document.createElement("div");
  entry.textContent = sender + ": " + message;
  log.appendChild(entry);
  log.scrollTop = log.scrollHeight;
}

window.addEventListener("message", function(event) {
  if (event.data) {
    appendToChatLog("Summer", event.data);
  }
});

function startListening() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = function(event) {
    const message = event.results[0][0].transcript;
    document.getElementById("message").value = message;
    sendMessageToFrame();
  };

  recognition.onerror = function(event) {
    console.error("Speech recognition error", event.error);
  };

  recognition.start();
}
