import { dealerOptions, voteOptions } from '@/mocks/options';
import React, { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { Input } from '../Input';
import { Select } from '../Select';
import styles from './NewGameModal.module.scss';

export const NewGameModal: React.FC = () => {
  const [form, setForm] = useState({
    gameName: '',
    voteSystem: voteOptions[0],
    dealer: dealerOptions[0],
  });

  const formHandler: ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = (event) => {
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
    <section className={styles.modal}>
      <h3 className={styles.title}>
        Choose a name and a voting system for your game.
      </h3>

      <form className={styles.form} onSubmit={submitHandler}>
        <Input 
          type="text" 
          label="Game's name" 
          name="gameName"
          onChange={formHandler} 
        />
        <Select 
          name="voteSystem"
          label="Voting system"
          option={voteOptions} 
          value={form.voteSystem}
          onChange={formHandler}
        />
        <Select 
          name="dealer"
          label="Who can show cards?"
          option={dealerOptions} 
          value={form.dealer}
          onChange={formHandler}
        />
        <Input 
          type="submit" 
          name="Create game" 
          value="Create game"
          className={styles.form_submit}
        />
      </form>
    </section>
  );
};
