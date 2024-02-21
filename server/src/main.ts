const express = require('express');
const app = express();
const expressWs = require('express-ws')(app);

import { createNewServer } from './utils/createNewServer';

const server = app.listen(3001, () => {
  console.log('Server listening on port 3001');
});

app.get('/', function (req: any, res: any, next: any) {
  console.log('GET request received on /');
  res.end();
});

app.ws('/', function (ws: any, req: any) {
  console.log('WebSocket connection established');

  ws.on('error', (error: any) => {
    console.error('WebSocket error:', error);
  });

  createNewServer({
    host: '172.210.83.226',
    username: 'ubuntu',
    password: 'fail2Banfail2Ban'
  }, ws);
});

server.on('error', (error: any) => {
  console.error('Server failed to start:', error);
});
