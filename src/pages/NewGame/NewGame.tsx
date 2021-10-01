import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { NewGameModal } from '@/components';
import { useAppDispatch } from '@/store';
import { userActions } from '@/store/actions';

export const NewGame: React.FC = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  useEffect(() => {
    const id = localStorage.getItem('userId');
    dispatch(userActions.getUserDataByLS(id)).then((event) => {
      if (event.meta.requestStatus !== 'fulfilled') {
        history.push('/');
      }
    });
  }, []);

  return (
    <article>
      <NewGameModal />
    </article>
  );
};
