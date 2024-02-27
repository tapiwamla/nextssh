// pages/api/ssh.js
import { SSHClient } from 'ssh2';
import { WebSocketServer } from 'ws';

const sshHandler = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  // WebSocket connection logic
  const wss = new WebSocketServer({ noServer: true });

  wss.on('connection', (socket) => {
    const { host, username, password } = req.body;

    const ssh = new SSHClient();
    ssh.on('ready', () => {
      ssh.shell((err, stream) => {
        if (err) {
          socket.send(`SSH Error: ${err.message}`);
          return;
        }

        socket.on('message', (data) => stream.write(data));
        stream.on('data', (data) => socket.send(data.toString()));
        stream.on('close', () => ssh.end());
      });
    }).connect({
      host,
      username,
      password,
    });
  });

  // Upgrade the request for WebSocket use 
  res.socket.server.ws.handleUpgrade(req, req.socket, Buffer.alloc(0), wss.handleUpgrade);
};

export default sshHandler;
