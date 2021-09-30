import { RouteComponentProps } from 'react-router-dom';
import { AppDispatch } from '@/store';
import { IUser } from '@/utils/interfaces';
import { http, httpClient } from '@/api/HttpClient';
import { UserModel } from '@/models';
import { roomStateActions, userActions } from '@/store/actions';

httpClient.url = 'http://localhost:3000';

async function getUserData() {
  const id = localStorage.getItem('userId');

  try {
    if (!id) {
      return ({
        status: 'rejected',
      });
    }
    const user: IUser = await http.get(`/api/users/${+id}`);
    return {
      user,
      status: 'fulfilled',
    };
  } catch (err) {
    return ({
      status: 'rejected',
    });
  }
}

function getRoomByUrl() {
  const path = window.location.pathname;
  const directories = path.split('/');
  return directories[(directories.length - 1)];
}

async function getRoom() {
  try {
    const roomId: string = await http.get(`/api/room/${getRoomByUrl()}
  }
`);
    return {
      roomId,
      status: 'fulfilled',
    };
  } catch (err) {
    return ({
      status: 'rejected',
    });
  }
}

export async function checkUserIdandRoomId(
  dispatch: AppDispatch,
  history: RouteComponentProps['history'],
): Promise<void> {
  const { user } = await getUserData();
  if (user) {
    const data = new UserModel(user);
    dispatch(userActions.addUserData(data));
  }
  const { roomId } = await getRoom();
  if (roomId) {
    dispatch(roomStateActions.setRoomId(roomId));
  } else {
    history.push('/games/new');
  }
}
