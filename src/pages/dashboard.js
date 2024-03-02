import BaseLayout from "@/components/BaseLayout";
import Widget from '@/components/Widget'; 
import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    const fetchConnections = async () => {
      const storedConnections = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const connectionData = JSON.parse(localStorage.getItem(key));
        storedConnections.push(connectionData); 
      }
      setConnections(storedConnections);
    };

    fetchConnections();
  }, []);

  return (
    <BaseLayout pageTitle="CONNECTIONS">
      <div className="connections-dashboard">
        {connections.length === 0 ? (
          <p>No active connections yet. Visit the "New Connection" page to create one.</p>
        ) : (
          <div className="widgets-grid">
            {connections.map((connection) => (
              <Widget
                key={connection.host}
                alias={connection.alias}
                host={connection.host}
                username={connection.username}
                password={connection.password}
              />
            ))}
          </div>
        )}
      </div>
    </BaseLayout>
  );
};

export default Dashboard;
