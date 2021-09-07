import React from "react";
import { PanelVoteCards } from "@/components/VoteCard/PanelVoteCards";
import { PanelUsers } from "@/components/User/PanelUsers";
import styles from '@/styles/GamePage.module.scss';
import { PrimaryButton, SecondaryButton } from "@/components/Button";

const NAMES_BTN = {
  run: "run round",
  restart: "restart round",
  stop: "stop game"
};

const GamePage = () => {
  const title = 'Name room';

  const handlerRun = () => {
    console.log("handlerRun");
  };

  const handlerRestart = () => {
    console.log("handlerRestart");
  };

  const handlerStop = () => {
    console.log("handlerStop");
  };

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <h1>{title}</h1>
        <div className={styles.groupBtn}>
          <PrimaryButton
            onClick={handlerRun}
          >
            {NAMES_BTN.run}
          </PrimaryButton>
          <PrimaryButton
            onClick={handlerRestart}
          >
            {NAMES_BTN.restart}
          </PrimaryButton>
          <SecondaryButton
            onClick={handlerStop}
          >
            {NAMES_BTN.stop}
          </SecondaryButton>
        </div>
        <PanelVoteCards />
      </div>
      <PanelUsers />
    </main>
  );
};

export default GamePage;
