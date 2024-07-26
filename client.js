import io from 'socket.io-client';
import { useDispatch } from 'react-redux';
import { messageReceived } from '../app/slice/chatSlice';

const socket = io('https://autobuy-server.onrender.com '); 

socket.emit('joinRoom', { buyerId: 'user1', sellerId: 'user2' });

socket.on('newMessage', (message) => {
  // Dispatch the messageReceived action to add the message to the Redux store
  useDispatch(messageReceived(message));
});