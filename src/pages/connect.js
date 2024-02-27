import React, { useState } from 'react';
import BaseLayout from '../components/BaseLayout';
import { useRouter } from 'next/router';

const Connection = () => {
  const [host, setHost] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Try to send the connection details
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
    <BaseLayout pageTitle="CONNECT A NEW RESOURCE">
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <label>
            Host IP:
            <input 
              type="text" 
              value={host} 
              onChange={(e) => setHost(e.target.value)} 
              pattern="((^|\.)((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]?\d))){4}$" 
              title="For example: 127.0.0.1" required 
            />
          </label>
          <label>
            Username:
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
          </label>
          <label>
            Password:
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </label>
          <button type="submit">Connect</button>
        </form>
      </div>
    </BaseLayout>
  );
};

export default Connection; 
