import React, {
  ChangeEventHandler, FormEventHandler, MouseEventHandler, useState,
} from 'react';
import { FormControlLabel, Switch } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Modal, Input } from '@/components';
import styles from './Modals.module.scss';
import { AppDispatch } from '@/store';
import { userActions } from '@/store/actions';
import { httpClient } from '@/api/HttpClient';

interface IChooseUserNameModalProps {
  show: boolean;
  onClick: () => void;
}

interface IUserFromBE {
  id: number;
  name: string;
}

export const ChooseUserNameModal: React.FC<IChooseUserNameModalProps> = ({ onClick, show }) => {
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const history = useHistory();

  const submitHandler: FormEventHandler = async (event): Promise<void> => {
    event.preventDefault();
    // ToDo - add some functionality to validate form data
    httpClient.url = 'http://localhost:3000';
    const user: IUserFromBE = await httpClient.http.post('/api/users',
      {
        name: `${userName}`,
      });
    dispatch(userActions.addUserData({ userId: (user.id).toString(), name: user.name }));
    localStorage.setItem('userId', user.id.toString());
    history.push('/games/new');
  };

  const toggleHandler: MouseEventHandler<HTMLButtonElement> = () => {
    console.log('spectator');
  };

  const inputsHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setUserName(event.target.value);
  };

  return (
    <Modal show={show} onClick={onClick}>
      <section className={styles.content}>
        <h3 className={styles.title}>
          Choose your display name
        </h3>
        <form className={styles.form} onSubmit={submitHandler}>
          <Input
            label="Your display name"
            name="userName"
            onChange={inputsHandler}
          />
          <FormControlLabel
            className={styles.toggle}
            control={(
              <Switch
                onClick={toggleHandler}
                disabled
              />
            )}
            label="Join as spectator"
          />
          <Input
            type="submit"
            name="Continue to game"
            value="Continue to game"
            className={styles.form_submit}
          />
        </form>
      </section>
    </Modal>
  );
};
