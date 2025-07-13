import { WebSocketServer } from 'ws';
import { IncomingMessage } from 'http';
import jwt from 'jsonwebtoken';
import {JWT_SECRET} from '@repo/backend-common/config'

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws, req: IncomingMessage) => {

  const url = req.url;
  if (!url) {
    return;
  }

  const queryParams = new URLSearchParams(url.split('?')[1]);

  const token = queryParams.get('token') ??"";
  const decoded = jwt.verify(token,JWT_SECRET);

  //@ts-ignore
  if(!decoded && !decoded.userId){
    ws.close();
    return;
  }

  ws.on('message', (data) => {
    ws.send('pong');
  });

});
