'use client';
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
    <div
  className="fixed right-4 bottom-4"
  style={{ fontFamily: 'Ambit, sans-serif' }}
>
  {isOpen ? (
    <div className="bg-green-50 p-4 rounded-xl shadow-lg">
      <button
        className="absolute top-2 right-2 text-gray-500"
        onClick={handleCloseChatbox}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.293 7.293a1 1 0 011.414 0l2 2a1 1 0 11-1.414 1.414L13 9.414l-1.293 1.293a1 1 0 01-1.414-1.414l2-2z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M3 10a7 7 0 1114 0 7 7 0 01-14 0zm12 0a5 5 0 11-10 0 5 5 0 0110 0z"
            clipRule="evenodd"
          />
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
      className="bg-blue-100 text-black hover:text-white hover:bg-blue-600 transition duration-300 py-3 px-16 rounded-lg flex items-center"
      onClick={toggleChatbox}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6v6m0 0v6m0-6h.01M12 18h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      Chat Bot
    </button>
  )}
</div>

  );
};

export default Chat;






