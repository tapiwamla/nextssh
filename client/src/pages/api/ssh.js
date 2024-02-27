// pages/api/ssh.js
const ssh2 = require('ssh2');
const { Client } = ssh2;

const sshHandler = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { host, username, password } = req.body;

  const ssh = new Client();

  // Attach event listeners for connection management
  ssh.on('ready', () => {
    console.log('SSH Connection established');

    ssh.shell((err, stream) => {
      if (err) {
        console.error('SSH Error:', err.message);
        res.status(500).send(`SSH Error: ${err.message}`); 
        return;
      }

      // Setup socket on 'connection' event directly 
      res.socket.on('connection', (socket) => {
        socket.on('message', (data) => stream.write(data));
        stream.on('data', (data) => socket.send(data.toString()));
        stream.on('close', () => {
          ssh.end(); // End SSH connection when stream closes
          console.log('SSH connection closed'); 
        });
      });
    });
  }).on('error', (err) => {
    console.error('SSH connection error:', err); 
    res.status(500).send('SSH connection error'); 
  });

  // Initiate the connection attempt
  ssh.connect({
    host,
    username,
    password,
  });

  res.status(200).end(); 
};

export default sshHandler;
