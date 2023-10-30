import React, { useState } from 'react';
import Messages from './Messages';
import axios from 'axios';

function UserCard({ user }) {
  const [showMessages, setShowMessages] = useState(false);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    const url = 'http://127.0.0.1:5000/api/scraper/send_message';
    const data = {
      username: user.Username,
      message: newMessage
    };

    axios.post(url, data)
      .then(response => {
        setNewMessage('');
        alert('Message sent successfully!');
      })
      .catch(error => {
        console.error("Error sending the message", error);
      });
  };

  return (
    <div 
      className="border border-gray-300 rounded p-4 w-60 cursor-pointer hover:bg-gray-100"
    >
      <h5 className="text-xl" onClick={() => setShowMessages(!showMessages)}>{user["Full Name"]}</h5>
      <p className="text-gray-500">Username: {user.Username}</p>
      {showMessages && (
        <>
          <Messages messages={user.Messages} />
          <div className="mt-2">
            <input 
              type="text"
              value={newMessage}
              onChange={e => setNewMessage(e.target.value)}
              className="p-1 border rounded w-full mb-2"
              placeholder="Type your message..."
            />
            <button 
              onClick={handleSendMessage}
              className="bg-blue-500 text-white px-4 py-1 rounded"
            >
              Send
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default UserCard;
