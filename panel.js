function sendMessageToFrame() {
  const iframe = document.getElementById("ai-frame");
  const input = document.getElementById("message");
  const message = input.value;
  if (iframe && iframe.contentWindow && message) {
    iframe.contentWindow.postMessage(message, "*");
    appendToChatLog("You", message);
    storeToMemory("You", message);
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

function storeToMemory(sender, message) {
  let history = JSON.parse(localStorage.getItem("summerMemory")) || [];
  history.push({ sender: sender, message: message, timestamp: new Date().toISOString() });
  localStorage.setItem("summerMemory", JSON.stringify(history));
}

window.addEventListener("message", function(event) {
  if (event.data) {
    appendToChatLog("Summer", event.data);
    storeToMemory("Summer", event.data);
  }
});
