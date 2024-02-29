import React from 'react';
import { useRouter } from 'next/router';

const ConnectionWidget = ({ alias, host, username, password }) => {
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

  // Debounce function
  const debounce = (func, delay) => {
    let timeoutId;
    return function () {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, arguments), delay);
    };
  };

  const debouncedClick = debounce(handleClick, 1000);

  return (
    <div className="connection-widget" onClick={debouncedClick}>
      <p><strong>Name:</strong> {alias}</p>
      <p><strong>Host:</strong> {host}</p>
      <p><strong>Username:</strong> {username}</p>
    </div>
  );
};

export default ConnectionWidget;
