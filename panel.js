function sendMessage() {
  const input = document.getElementById("message-input");
  const message = input.value;
  if (!message) return;
  const log = document.getElementById("chat-log");
  log.innerHTML += `<div><strong>You:</strong> ${message}</div>`;
  input.value = "";

  // Placeholder for AI response (to be wired into backend)
  setTimeout(() => {
    log.innerHTML += `<div><strong>Summer:</strong> (thinking...)</div>`;
  }, 1000);
}
