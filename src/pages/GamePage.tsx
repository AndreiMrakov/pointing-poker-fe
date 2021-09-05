import React from "react";
import { PanelVoteCards } from "@/components/VoteCard/PanelVoteCards";
import { PanelUsers } from "@/components/User/PanelUsers";
import styles from '@/styles/GamePage.module.scss';
import { Button } from "@/components/Botton/Button";

const GamePage = () => {
  const title = 'Name room';

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <h1>{title}</h1>
        <PanelVoteCards />
        <Button name="Exit" />
      </div>
      <PanelUsers />
    </main>
  );
};

export default GamePage;
