// src/components/chat/ChatBot.js
import React, { useState, useEffect } from 'react';
import { FaComments } from 'react-icons/fa';
import './ChatBot.css';

function ChatBot() {
  const [unreadMessages, setUnreadMessages] = useState(2); // Initial unread messages

  useEffect(() => {
    // Auto-generate greeting messages
    if (unreadMessages === 0) {
      setUnreadMessages(2);
    }
  }, []);

  const handleClick = () => {
    setUnreadMessages(0); // Remove notification on click
    window.location.href = '/chat';
  };

  return (
    <div className="chatbot" onClick={handleClick}>
      <FaComments className="chatbot-icon" />
      {unreadMessages > 0 && <div className="notification">{unreadMessages}</div>}
    </div>
  );
}

export default ChatBot;
