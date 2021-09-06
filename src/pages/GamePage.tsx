import React from "react";
import { PanelVoteCards } from "@/components/VoteCard/PanelVoteCards";
import { PanelUsers } from "@/components/User/PanelUsers";
import styles from '@/styles/GamePage.module.scss';
import { Button } from "@/components/Botton/Button";

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
          <Button name="run round" myStyles="btn-primary" type="button" callback={handlerRun} />
          <Button name="restart round" myStyles="btn-primary" type="button" callback={handlerRestart} />
          <Button name="stop game" myStyles="btn-secondary" type="button" callback={handlerStop} />
        </div>
        <PanelVoteCards />
      </div>
      <PanelUsers />
    </main>
  );
};

export default GamePage;
