import React, { useState } from 'react';
import BaseLayout from '../components/BaseLayout';

const Connection = () => {
  const [ipAddress, setIpAddress] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <BaseLayout pageTitle="CONNECT A NEW RESOURCE">
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <label>
            IP Address:
            <input type="text" value={ipAddress} onChange={(e) => setIpAddress(e.target.value)} />
          </label>
          <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button type="submit">Connect</button>
        </form>
      </div>
    </BaseLayout>
  );
};

export default Connection;