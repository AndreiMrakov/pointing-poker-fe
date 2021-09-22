import { useState, useEffect } from 'react';
import { IUser } from '@/utils/interfaces/interfaces';
import { http, httpClient } from '@/api/HttpClient';
import { UserModel } from '@/models/UserModel';

async function getUserData() {
  const id = localStorage.getItem('userId');

  try {
    if (!id) {
      return ({
        status: 'rejected',
      });
    }
    httpClient.url = 'http://localhost:3000';
    const user: IUser = await http.get(`/api/users?userId=${id}`);
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

export function useUserData() {
  const [userData, setUserData] = useState<IUser | ''>('');

  useEffect(() => {
    (async function () {
      const { user } = await getUserData();
      if (user) {
        const data = new UserModel(user);
        setUserData(data);
      }
    }());
  }, []);

  return userData;
}
