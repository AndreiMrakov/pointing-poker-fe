import { PrimaryButton } from "@/components/Button";
import { NewGameModal } from "@/components/NewGameModal";
import React, { useState } from "react";
import styles from './Home.module.scss';

export const Home: React.FC = () => {
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(!modal);
  };

  return (
    <main className={styles.home}>
      <article className={styles.wrapper}>
        <h2 className={styles.title}>Pointing Poker</h2>
        <PrimaryButton onClick={showModal}>
          Create new game
        </PrimaryButton>
        <NewGameModal show={modal} onClick={showModal} />
      </article>
    </main>
  );
};
