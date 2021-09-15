import io from 'socket.io-client';

const URL = process.env.REACT_APP_SOCKET_URL as string;

export const socketService = io(URL);

/* eslint-disable */
export enum SocketEvents {
  joinUser = 'joinUser',
  leaveUser = 'leaveUser'
}
/* eslint-disable */