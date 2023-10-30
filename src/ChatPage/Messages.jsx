import React from 'react';

function Messages({ messages }) {
  const reversedMessages = [...messages].reverse();

  return (
    <ul className="list-decimal pl-5 mt-2">
      {reversedMessages.map((message, index) => (
        <li key={index}>
          <strong className="font-bold">{message.Sender}:</strong> {message.Message}
        </li>
      ))}
    </ul>
  );
}

export default Messages;
