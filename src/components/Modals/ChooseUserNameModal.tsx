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
import { IUser } from '@/utils/interfaces';

interface IChooseUserNameModalProps {
  show: boolean;
  onClick: () => void;
}

export const ChooseUserNameModal: React.FC<IChooseUserNameModalProps> = ({ onClick, show }) => {
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const history = useHistory();

  const submitHandler: FormEventHandler = async (event): Promise<void> => {
    event.preventDefault();
    // ToDo - add some functionality to validate form data
    dispatch(userActions.addUserData(userName)).then((e) => {
      const status = e.meta.requestStatus;
      const { userId } = e.payload as IUser;
      if (status === 'fulfilled') {
        localStorage.setItem('userId', userId);
        history.push('/new-game');
      }
    });
  };

  const toggleHandler: MouseEventHandler<HTMLButtonElement> = () => {
    console.log('spectator');
  };

  const inputHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
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
            onChange={inputHandler}
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
