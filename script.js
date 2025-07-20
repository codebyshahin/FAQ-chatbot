function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (!message) return;

  const chatBox = document.getElementById("chat-box");

  // User message
  const userMsg = document.createElement("div");
  userMsg.innerHTML = `<strong>You:</strong> ${message}`;
  chatBox.appendChild(userMsg);

  // Fake bot reply
  const botMsg = document.createElement("div");
  botMsg.innerHTML = `<strong>Bot:</strong> This is a sample answer.`;
  chatBox.appendChild(botMsg);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}
