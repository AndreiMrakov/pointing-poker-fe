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
  const [isToggled, setIsToggled] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const submitHandler: FormEventHandler = async (event): Promise<void> => {
    event.preventDefault();
    dispatch(userActions.addUserData({ name: userName, link }));
  };

  const toggleHandler: MouseEventHandler<HTMLButtonElement> = () => {
    setIsToggled(!isToggled);
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
          {isToggled
          && (
            <section className={styles.joinBlock}>
              <p className={styles.joinText}>Join to:</p>
              <Input
                className={styles.joinInput}
                label="Current game link"
                name="link"
                onChange={inputJoinHandler}
                required={isToggled}
              />
            </section>
          )}
          <FormControlLabel
            className={styles.toggle}
            control={(
              <Switch
                onClick={toggleHandler}
                value={isToggled}
              />
            )}
            label="Join to current game"
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
