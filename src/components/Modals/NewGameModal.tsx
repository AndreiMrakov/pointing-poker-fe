import React, {
  ChangeEventHandler, FormEventHandler, MouseEventHandler, useState,
} from 'react';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { FormControlLabel, Switch } from '@mui/material';
import { voteOptions } from '@/mocks/options';
import { Input, Modal } from '@/components';
import styles from './Modals.module.scss';
import { AppDispatch } from '@/store';
import { roomStateActions } from '@/store/actions';
import { history } from '@/utils/history';
import { navMap } from '@/utils/NavMap';
import { getRoomIdByUrl } from '@/helpers';

interface OptionType {
  value: string;
  label: string;
}

export const NewGameModal: React.FC = () => {
  const [form, setForm] = useState({
    roomTitle: '',
    voteSystem: voteOptions[0].value,
  });
  const [isToggled, setIsToggled] = useState(false);
  const [link, setLink] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const inputsHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setForm({
      ...form,
      roomTitle: event.target.value,
    });
  };

  const voteSystemHandler = (selectedOption: OptionType | null | undefined) => {
    setForm({
      ...form,
      voteSystem: selectedOption?.value || voteOptions[0].value,
    });
  };

  const submitHandler: FormEventHandler = async (event): Promise<void> => {
    event.preventDefault();
    if (isToggled) {
      history.push(navMap.game(getRoomIdByUrl(link)));
    } else {
      dispatch(roomStateActions.createRoom(form));
    }
  };

  const toggleHandler: MouseEventHandler<HTMLButtonElement> = () => {
    setIsToggled(!isToggled);
  };

  const inputJoinHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setLink(event.target.value);
  };

  return (
    <article className={styles.roomSettingsWrapper}>
      <Modal className={styles.roomSettingsModal}>
        <section className={styles.content}>
          <h3 className={styles.title}>
            Choose a name and a voting system for your game.
          </h3>
          <form className={styles.form} onSubmit={submitHandler}>
            <Input
              label="Enter game's name"
              name="gameName"
              onChange={inputsHandler}
              required
            />
            {isToggled
              ? (
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
              )
              : (
                <Select
                  className={styles.form_select}
                  placeholder="Select vote system"
                  options={voteOptions}
                  onChange={voteSystemHandler}
                  isDisabled
                />
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
              name="Create game"
              value={isToggled ? 'Join game' : 'Create game'}
              className={styles.form_submit}
            />
          </form>
        </section>
      </Modal>
    </article>
  );
};
