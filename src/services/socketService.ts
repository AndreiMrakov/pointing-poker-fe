import io from 'socket.io-client';

const URL = process.env.REACT_APP_SOCKET_URL as string;

export const socketService = io(URL, {
  transports: ['websocket'],
});
