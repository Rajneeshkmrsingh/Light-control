// src/websocket.js
import io from 'socket.io-client';
import { updateBedroomState } from './redux/bedroomSlice';

const socket = io('ws://localhost:8080'); // Replace with your WebSocket server URL

export const createWebSocketConnection = store => {
  // Subscribe to changes from WebSocket
  socket.on('bedroom_state', data => {
    store.dispatch(updateBedroomState(data));
  });
};

// Emit WebSocket messages when buttons are clicked
export const toggleLight1 = () => {
  socket.emit('toggle_light1');
};

export const toggleLight2 = () => {
  socket.emit('toggle_light2');
};

export const turnBothOn = () => {
  socket.emit('turn_both_on');
};
x