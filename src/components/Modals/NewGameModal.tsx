import React, {
  ChangeEventHandler, FormEventHandler, useState,
} from 'react';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { dealerOptions, voteOptions } from '@/mocks/options';
import { Input, Modal } from '@/components';
import styles from './Modals.module.scss';
import { AppDispatch } from '@/store';
import { roomStateActions } from '@/store/actions';

interface OptionType {
  value: string;
  label: string;
}

export const NewGameModal: React.FC = () => {
  const [form, setForm] = useState({
    roomTitle: '',
    voteSystem: voteOptions[0].value,
    dealerRights: dealerOptions[0].value,
  });
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

  const dealerHandler = (selectedOption: OptionType | null | undefined) => {
    setForm({
      ...form,
      dealerRights: selectedOption?.value || dealerOptions[0].value,
    });
  };

  const submitHandler: FormEventHandler = async (event): Promise<void> => {
    event.preventDefault();
    dispatch(roomStateActions.createRoom(form));
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
            <Select
              className={styles.form_select}
              placeholder="Select vote system"
              options={voteOptions}
              onChange={voteSystemHandler}
            />
            <Select
              className={styles.form_select}
              placeholder="Who can show cards?"
              options={dealerOptions}
              onChange={dealerHandler}
            />
            <Input
              type="submit"
              name="Create game"
              value="Create game"
              className={styles.form_submit}
            />
          </form>
        </section>
      </Modal>
    </article>
  );
};
