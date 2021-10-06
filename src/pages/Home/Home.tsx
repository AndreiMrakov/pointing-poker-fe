import React, { useState } from 'react';
import { PrimaryButton, ChooseUserNameModal } from '@/components';
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
            Start
          </PrimaryButton>
        </div>
        <ChooseUserNameModal show={modal} onClick={showModal} />
      </article>
    </main>
  );
};
