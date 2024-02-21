import React, { useState } from 'react';
import BaseLayout from '../components/BaseLayout';

import { useRouter } from 'next/router';

require('dotenv').config({ path: '../.env' });

const Connection = () => {
  const [host, setHost] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter()

  const handleSubmit = (event) => {
    event.preventDefault()

    router.push('/terminal')
  }

  return (
    <BaseLayout pageTitle="CONNECT A NEW RESOURCE">
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <label>
            Host IP:
            <input type="text" value={host} onChange={(e) => setHost(e.target.value)} pattern="((^|\.)((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]?\d))){4}$" title="For example: 127.0.0.1" required />
          </label>
          <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>
          <button type="submit">Connect</button>
        </form>
      </div>
    </BaseLayout>
  );
};

export default Connection;