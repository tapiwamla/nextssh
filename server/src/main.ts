const express = require('express');
const app = express();
const expressWs = require('express-ws')(app);

require('dotenv').config({ path: '../.env' });

import e from 'express';
import { createNewServer } from './utils/createNewServer';

// Get the variables from the environment
const inputHost = process.env.HOST;
const inputUsername = process.env.USERNAME;
const inputPassword = process.env.PASSWORD;

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
    host: inputHost,
    username: inputUsername,
    password: inputPassword
  }, ws);
});

server.on('error', (error: any) => {
  console.error('Server failed to start:', error);
});
