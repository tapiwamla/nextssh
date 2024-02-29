import React from 'react';
import { useRouter } from 'next/router';

const ConnectionWidget = ({ host, username, password }) => {
  const router = useRouter();

  const handleClick = async () => {  
    try {
      const response = await fetch('/api/ssh', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ host, username, password })
      });

      if (response.ok) {
        router.push('/terminal');
      } else {
        console.error('Error connecting:', response);
      }
    } catch (error) {
      console.error('Error connecting:', error);
    }
  };

  return (
    <div className="connection-widget" onClick={handleClick}>
      <p><strong>Host:</strong> {host}</p>
      <p><strong>Username:</strong> {username}</p>
    </div>
  );
};

export default ConnectionWidget;
