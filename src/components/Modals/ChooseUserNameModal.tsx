import React, {
  ChangeEventHandler, FormEventHandler, MouseEventHandler, useState,
} from 'react';
import { FormControlLabel, Switch } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Modal, Input } from '@/components';
import styles from './Modals.module.scss';
import { AppDispatch } from '@/store';
import { userActions } from '@/store/actions';

interface IChooseUserNameModalProps {
  show: boolean;
  onClick: () => void;
}

export const ChooseUserNameModal: React.FC<IChooseUserNameModalProps> = ({ onClick, show }) => {
  const [userName, setUserName] = useState('');
  const [link, setLink] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const submitHandler: FormEventHandler = async (event): Promise<void> => {
    event.preventDefault();
    dispatch(userActions.addUserData({ name: userName, link }));
  };

  const toggleHandler: MouseEventHandler<HTMLButtonElement> = () => {
    console.log('spectator');
  };

  const inputNameHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setUserName(event.target.value);
  };

  const inputJoinHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setLink(event.target.value);
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
            onChange={inputNameHandler}
            required
          />
          <section className={styles.joinBlock}>
            <p className={styles.joinText}>*Join to:</p>
            <Input
              className={styles.joinInput}
              label="Current game link"
              name="link"
              onChange={inputJoinHandler}
            />
          </section>
          <div className={styles.helpText}>
            * Enter the link if you want to join the current game or continue creating a new one
          </div>
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
