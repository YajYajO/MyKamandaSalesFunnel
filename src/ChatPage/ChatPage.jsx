import React, { useEffect, useState } from 'react';
import UserCard from './UserCard';
import axios from 'axios';

function ChatPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/scraper/messages')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error("Error fetching the data", error);
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Users Messages</h1>
      <div className="flex flex-wrap gap-4">
        {users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </div>
  );
}

export default ChatPage;
