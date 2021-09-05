import React from "react";
import { PanelVoteCards } from "@/components/VoteCard/PanelVoteCards";
import { PanelUsers } from "@/components/User/PanelUsers";
import styles from '@/styles/game.module.scss';

const GamePage = () => {
  const title = 'Name room';

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <h1>{title}</h1>
        <PanelVoteCards />
      </div>
      <PanelUsers />
    </main>
  );
};

export default GamePage;
