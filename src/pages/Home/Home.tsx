import React, { useState } from 'react';
import { PrimaryButton } from '@/components/Button';
import { NewGameModal } from '@/components/NewGameModal';
import styles from './Home.module.scss';

export const Home: React.FC = () => {
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(!modal);
  };

  return (
    <main className={styles.home}>
      <article className={styles.wrapper}>
        <div className={styles.logo} />
        <div className={styles.action}>
          <h2 className={styles.title}>Start your plaining:</h2>
          <PrimaryButton onClick={showModal}>
            Create new game
          </PrimaryButton>
        </div>
        <NewGameModal show={modal} onClick={showModal} />
      </article>
    </main>
  );
};
