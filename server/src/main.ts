const express = require('express');
const app = express();
const expressWs = require('express-ws')(app);

import { createNewServer } from './utils/createNewServer';


app.get('/', function (req: any, res: any, next: any) {
  res.end();
});

app.ws('/', function (ws: any, req: any) {
  createNewServer({
    host: '172.210.83.226',
    username: 'ubuntu',
    password: 'fail2Banfail2Ban'
  }, ws)
});

app.listen(3001)
