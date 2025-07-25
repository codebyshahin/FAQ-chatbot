import React, { useState } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleSend = async () => {
    if (!userInput.trim()) return;

    const newMessages = [...messages, { sender: 'You', text: userInput }];
    setMessages(newMessages);
    setUserInput('');

    try {
  const res = await fetch('http://localhost:5000/api/chat', {

    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message: userInput }),
  });

  const data = await res.json();
  setMessages([...newMessages, { sender: 'Bot', text: data.reply }]);
} catch (err) {
  setMessages([
    ...newMessages,
    { sender: 'Bot', text: 'Error connecting to the server.' },
  ]);
}
  };

  return (
    <div className="App">
      <h1>🤖 AI-Powered FAQ Chatbot</h1>
      <div className="chat-box">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.sender.toLowerCase()}`}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Ask a question..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default App;
