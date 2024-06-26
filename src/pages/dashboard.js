import BaseLayout from "@/components/BaseLayout";
import Widget from '@/components/Widget';
import { useEffect, useState } from 'react';
import { useSession, getSession } from 'next-auth/react';

const Dashboard = () => {
  const { data: session, status } = useSession();
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    const fetchConnections = async () => {
      try {
        const storedConnections = [];
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          const connectionData = JSON.parse(localStorage.getItem(key));
          storedConnections.push(connectionData);
        }
        setConnections(storedConnections);
      } catch (error) {
        console.error("Error parsing localStorage data:", error);
      }
    };
  
    fetchConnections();
  }, []);  

  const handleRemoveConnection = (hostToRemove) => {
    const updatedConnections = connections.filter(connection => connection.host !== hostToRemove);
    setConnections(updatedConnections);
    localStorage.removeItem(hostToRemove);
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>Please sign in to view your dashboard.</div>;
  }

  return (
    <BaseLayout pageTitle="CONNECTIONS">
      <div className="connections-dashboard">
        {connections.filter(connection => connection.host).length === 0 ? (
          <p className="no-connections">No active connections yet. Click on "New Connection" to create one.</p>
        ) : (
          <div className="widgets-grid">
            {connections.filter(connection => connection.host).map((connection) => (
              <Widget
                key={connection.host}
                alias={connection.alias}
                host={connection.host}
                username={connection.username}
                password={connection.password}
                onRemove={handleRemoveConnection}
              />
            ))}
          </div>
        )}
      </div>
    </BaseLayout>
  );
};

// export async function getServerSideProps(context) {
//   const session = await getSession(context);

//   if (!session) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: { session },
//   };
// }

export default Dashboard;
