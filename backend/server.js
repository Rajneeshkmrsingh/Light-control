const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require("cors");




const app = express();
const server = http.createServer(app);
const io =  socketIO(server, {
  cors: {
    origin: '*', 
    methods: ['GET', 'POST'],
    allowedHeaders: ['my-custom-header'],
    credentials: true,
  },
});
app.use(cors());

let lightsState = {
  bedroom: {
    light1: false,
    light2: false,
  },
  kitchen: {
    light1: false,
    light2: false,
  },
};


io.on('connection', (socket) => {
  console.log('A user connected');

  socket.emit('initialState', lightsState);

  socket.on('updateLight', ({ room, light, state }) => {
    lightsState[room][light] = state;

    io.emit('lightStateChange', lightsState);
  });

 
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

const port = 4000;
server.listen(port, () => {
  console.log(`WebSocket server is running on port ${port}`);
});
