import io from 'socket.io-client';

const URL = process.env.REACT_APP_SOCKET_URL as string;

export const socketService = io(URL);

export const JOIN_USER = 'JOIN_USER';
export const LEAVE_USER = 'LEAVE_USER';
