const express = require('express');
const app = express();
const expressWs = require('express-ws')(app);
const path = require('path');

require('dotenv').config({ path: path.join(__dirname, '../../client/.env') });

import e from 'express';
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
    host: process.env.HOST,
    username: process.env.USERNAME,
    password: process.env.PASSWORD
  }, ws);
});

server.on('error', (error: any) => {
  console.error('Server failed to start:', error);
});
