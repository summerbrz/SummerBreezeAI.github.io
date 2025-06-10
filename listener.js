function startListening() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    document.getElementById("message-input").value = transcript;
    sendMessage();
  };

  recognition.onerror = (event) => {
    alert("Speech recognition error: " + event.error);
  };

  recognition.start();
}
