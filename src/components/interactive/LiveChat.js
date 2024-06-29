// src/components/interactive/LiveChat.js
import React, { useState, useEffect, useRef } from 'react';
import './LiveChat.css';

function LiveChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatBoxRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the chat box whenever a new message is added
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { sender: 'user', text: input }]);
      setInput('');
      // Simulate a response from the support team
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'support', text: 'Thank you for reaching out. How can I assist you today?' },
        ]);
      }, 1000);
    }
  };

  return (
    <section className="live-chat">
      <div className="chat-container">
        <div className="chat-header">
          <h3>Live Chat Support</h3>
        </div>
        <div className="chat-box" ref={chatBoxRef}>
          {messages.map((message, index) => (
            <div key={index} className={`chat-message ${message.sender}`}>
              <p>{message.text}</p>
            </div>
          ))}
        </div>
        <form className="chat-input-form" onSubmit={handleSend}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="chat-input"
            required
          />
          <button type="submit" className="send-button">Send</button>
        </form>
      </div>
    </section>
  );
}

export default LiveChat;
