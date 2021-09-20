import React, { ChangeEventHandler, FormEventHandler, useState } from 'react';
import Select from 'react-select';
import { dealerOptions, voteOptions } from '@/mocks/options';
import { Input } from '@/components/Input';
import { Modal } from '@/components/Modal';
import styles from './NewGameModal.module.scss';
import { socketService } from '@/services/socketService';
import { SocketEvent } from '@/utils/enums';

interface INewGameModalProps {
  show: boolean;
  onClick: () => void;
}

interface OptionType {
  value: string;
  label: string;
}

export const NewGameModal: React.FC<INewGameModalProps> = ({ show, onClick }) => {
  const [form, setForm] = useState({
    gameName: '',
    voteSystem: voteOptions[0].value || undefined,
    dealer: dealerOptions[0].value || undefined,
  });

  const inputsHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const voteSystemHandler = (selectedOption: OptionType | null | undefined) => {
    setForm({
      ...form,
      voteSystem: selectedOption?.value,
    });
  };

  const dealerHandler = (selectedOption: OptionType | null | undefined) => {
    setForm({
      ...form,
      dealer: selectedOption?.value,
    });
  };

  const submitHandler: FormEventHandler = (event): void => {
    event.preventDefault();
    if (form.gameName.length < 1) {
      return;
    }
    socketService.emit(SocketEvent.CreateGame);
  };

  return (
    <Modal show={show} onClick={onClick}>
      <section className={styles.content}>
        <h3 className={styles.title}>
          Choose a name and a voting system for your game.
        </h3>
        <form className={styles.form} onSubmit={submitHandler}>
          <Input
            label="Enter game's name"
            name="gameName"
            onChange={inputsHandler}
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
  );
};
