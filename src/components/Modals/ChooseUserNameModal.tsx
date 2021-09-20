import React, {
  ChangeEventHandler, FormEventHandler, MouseEventHandler, useState,
} from 'react';
import { FormControlLabel, Switch } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Modal } from '@/components/Modal';
import { Input } from '@/components/Input';
import styles from './Modals.module.scss';
import { AppDispatch } from '@/store';
import { addUserName } from '@/store/actions/userActions';

interface IChooseUserNameModalProps {
  show: boolean;
  onClick: () => void;
  setModal: (e: boolean) => void;
}

export const ChooseUserNameModal: React.FC<IChooseUserNameModalProps> = ({ onClick, show, setModal }) => {
  const [userName, setUserName] = useState('');
  // ToDo - add role to store and replace row below
  const [isRoleSpectator, setIsRoleSpectator] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const submitHandler: FormEventHandler = (event): void => {
    event.stopPropagation();
    event.preventDefault();
    // ToDo - add some functionality to validate form data
    dispatch(addUserName(userName));
    setModal(!show);
  };

  const toggleHandler: MouseEventHandler<HTMLButtonElement> = () => {
    setIsRoleSpectator(!isRoleSpectator);
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
                checked={isRoleSpectator}
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
