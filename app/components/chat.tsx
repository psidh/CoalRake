"use client"
import React, { useState, useEffect } from 'react';

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState<string[]>([]);

  useEffect(() => {
    
    const storedChatHistory = localStorage.getItem('chatHistory');
    if (storedChatHistory) {
      setChatHistory(JSON.parse(storedChatHistory));
    }
  }, []);

  const toggleChatbox = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseChatbox = () => {
    setIsOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (userInput.trim() !== '') {
      setChatHistory([...chatHistory, userInput]);
      setUserInput('');
    }
  };

  // Save chat history to local storage
  if (typeof window !== 'undefined') {
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
  }


  return (
    <div className="fixed right-4 bottom-4">
      {isOpen ? (
        <div className="bg-green-50 p-4 rounded-xl shadow-lg">
          <button className="absolute top-2 right-2 text-gray-500" onClick={handleCloseChatbox}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z" />
            </svg>
          </button>
          <div className="my-2">How can I help you?</div>
          <div className="my-2">Chat History:</div>
          <ul>
            {chatHistory.map((message, index) => (
              <li key={index}>{message}</li>
            ))}
          </ul>
          <div className="my-2">
            <input
              type="text"
              placeholder="Type your enquiry..."
              value={userInput}
              onChange={handleInputChange}
              className="border rounded p-2 w-full"
            />
            <button
              className="bg-blue-500 text-white px-6 py-2 mt-4 rounded-lg"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          className="bg-blue-100 text-black hover:text-white hover:bg-blue-600 py-3 px-12 rounded-lg"
          onClick={toggleChatbox}
        >
          Chat Bot
        </button>
      )}
    </div>
  );
};

export default Chat;
