import React from "react";
import { PanelVoteCards } from "@/components/VoteCard/PanelVoteCards";
import { PanelUsers } from "@/components/User/PanelUsers";
import styles from '@/styles/GamePage.module.scss';
import { PrimaryButton, SecondaryButton } from "@/components/Button";

const GamePage = () => {
  const title = 'Name room';

  const handlerRun = () => {
    //TODO
  };

  const handlerRestart = () => {
    //TODO
  };

  const handlerStop = () => {
    //TODO
  };

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <h1>{title}</h1>
        <div className={styles.groupBtn}>
          <PrimaryButton
            name="run round"
            onClick={handlerRun}
          />
          <PrimaryButton
            name="restart round"
            onClick={handlerRestart}
          />
          <SecondaryButton
            name="stop game"
            onClick={handlerStop}
          />
        </div>
        <PanelVoteCards />
      </div>
      <PanelUsers />
    </main>
  );
};

export default GamePage;
