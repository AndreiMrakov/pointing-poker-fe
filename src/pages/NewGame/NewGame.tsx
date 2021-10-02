import React, { useEffect } from 'react';
import { NewGameModal } from '@/components';
import { useAppDispatch } from '@/store';
import { userActions } from '@/store/actions';

export const NewGame: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.getUserDataByLS());
  }, []);

  return (
    <article>
      <NewGameModal />
    </article>
  );
};
