import io from 'socket.io-client';

const URL = 'ws://localhost:3000';

export const socketService = io(URL);

socketService.on('connect', () => {
  console.log('Connected to socketService');
});

socketService.on('disconnect', () => {
  console.log('Disconnected to socketService');
});

socketService.on('error', (error) => {
  console.error(error);
});


socketService.on('message', (message) => {
  console.log(message);
});
