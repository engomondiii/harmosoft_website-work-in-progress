// src/components/chat/Chat.js
import React, { useState } from 'react';
import './Chat.css';

function Chat() {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hello! I am Smith Harmosoft, Harmosoft ChatBot.' },
    { from: 'bot', text: 'How can I assist you today?' }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [chatMode, setChatMode] = useState('bot'); // 'bot' or 'human'

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { from: 'user', text: newMessage }]);
      setNewMessage('');
      // Add bot or human response logic here
    }
  };

  const handleModeChange = (mode) => {
    setChatMode(mode);
    setMessages([
      { from: mode, text: `You are now chatting with ${mode === 'bot' ? 'Smith Harmosoft, Harmosoft ChatBot' : 'a Harmosoft support agent.'}` }
    ]);
  };

  return (
    <div className="chat-page">
      <h2>Chat with Harmosoft Support</h2>
      <div className="chat-mode">
        <button onClick={() => handleModeChange('bot')}>Chat with Bot</button>
        <button onClick={() => handleModeChange('human')}>Chat with Human</button>
      </div>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.from}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
