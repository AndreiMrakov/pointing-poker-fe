import { NewGameModal } from "@/components/NewGameModal";
import React from "react";
import styles from './Home.module.scss';

export const Home: React.FC = () => {


  return (
    <main className={styles.home}>
      <article className={styles.wrapper}>
        <NewGameModal />
      </article>
    </main>
  );
};
