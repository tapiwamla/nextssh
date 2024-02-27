const ssh2 = require('ssh2');
const { Client } = ssh2;
const { Server } = require('socket.io');

const sshHandler = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { host, username, password } = req.body;

  // Initialize Socket.IO server
  const io = new Server(res.socket.server, { cors: { origin: '*' } });
  console.log('Socket.IO server created');

  io.on('connection', (socket) => {
    console.log('Socket.IO connected');

    // Initiate SSH connection only after Socket.IO client establishes connection
    const ssh = new Client(); 
    ssh.on('ready', () => {
      console.log('SSH Connection established');

      ssh.shell((err, stream) => {
        if (err) {
          console.error('SSH Error:', err.message);
          socket.emit('error', `SSH Error: ${err.message}`); 
          return;
        }

        socket.on('message', (data) => stream.write(data));
        stream.on('data', (data) => socket.emit('message', data.toString())); 
        stream.on('close', () => {
          ssh.end(); 
          socket.disconnect(); // Close Socket.IO on SSH closure
          console.log('SSH connection closed');
        });
      });
    }).on('error', (err) => {
      console.error('SSH connection error:', err);
      socket.emit('error', 'SSH connection error'); 
    }).connect({
      host,
      username,
      password,
    });
  });

  res.status(200).end(); 
};

export default sshHandler;
