import React, { useState } from 'react';
import BaseLayout from '@/components/BaseLayout';
import { useRouter } from 'next/router';
import { useSession, getSession } from 'next-auth/react'; 

const Connect = () => {
  const [alias, setAlias] = useState('');
  const [host, setHost] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>Please sign in to add a connection.</div>;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log('Form submitted with:', { host, username, password }); // Debug input

    try {
      const response = await fetch('/api/ssh', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ alias, host, username, password })
      });

      console.log('API response:', response); // Debug response details

      if (response.ok) {
        // Store connection details in local storage
        const connectionData = { alias, host, username, password }; 
        localStorage.setItem(host, JSON.stringify(connectionData));
        console.log('Connection details stored successfully'); // Debug storage

        router.push('/terminal'); 
      } else {
        console.error('Error connecting:', response);
      }
    } catch (error) {
      console.error('Error connecting:', error);
    }
  };

  return (
    <BaseLayout pageTitle="CONNECT A NEW SERVER">
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <label>
            Server Alias:
            <input 
              type="text" 
              value={alias} 
              onChange={(e) => setAlias(e.target.value)}
              required  
            />
          </label>
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
          <button type="submit">Save & Connect</button>
        </form>
      </div>
    </BaseLayout>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default Connect; 
