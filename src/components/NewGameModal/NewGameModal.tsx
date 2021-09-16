import React, { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { dealerOptions, voteOptions } from '@/mocks/options';
import { Input } from '../Input';
import { Modal } from '../Modal';
import { Select } from '../Select';
import styles from './NewGameModal.module.scss';

interface INewGameModalProps {
  show: boolean;
  onClick: () => void;
}

export const NewGameModal: React.FC<INewGameModalProps> = ({ show, onClick }) => {
  const [form, setForm] = useState({
    gameName: '',
    voteSystem: voteOptions[0],
    dealer: dealerOptions[0],
  });

  const inputsHandler: ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler: FormEventHandler = (event): void => {
    event.preventDefault();
    console.log('submit', form);
  };

  return (
    <Modal show={show} onClick={onClick}>
      <section className={styles.content}>
        <h3 className={styles.title}>
          Choose a name and a voting system for your game.
        </h3>
        <form className={styles.form} onSubmit={submitHandler}>
          <Input
            label="Game's name"
            name="gameName"
            onChange={inputsHandler}
          />
          <Select
            name="voteSystem"
            label="Voting system"
            option={voteOptions}
            value={form.voteSystem}
            onChange={inputsHandler}
          />
          <Select
            name="dealer"
            label="Who can show cards?"
            option={dealerOptions}
            value={form.dealer}
            onChange={inputsHandler}
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
