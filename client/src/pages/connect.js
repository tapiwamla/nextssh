import React, { useState } from 'react';
import BaseLayout from '../components/BaseLayout';

const Connection = () => {
  const [host, setHost] = useState('');
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
            Host IP:
            <input type="text" value={host} onChange={(e) => setHost(e.target.value)} />
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