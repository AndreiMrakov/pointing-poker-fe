import React, { useState } from "react";
import { PanelVoteCards } from "@/components/VoteCard";
import { PanelUsers } from "@/components/User";
import styles from './Game.module.scss';
import { PrimaryButton, SecondaryButton } from "@/components/Button";
import { CommonArea } from "@/components/CommonArea";

const NAMES_BTN = {
  run: "run round",
  restart: "restart round",
  stop: "stop game"
};

export const Game = () => {
  const title = 'Name room';

  const [isCardVisible, setIsCardIsVisible] = useState(false);
  const [selectedCardValue, setSelectedCardValue] = useState('');

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
      <article className={styles.wrapper}>
        <h1>{title}</h1>
        <section className={styles.groupBtn}>
          <PrimaryButton
            className={styles.singleBtn}
            onClick={handlerRun}
          >
            {NAMES_BTN.run}
          </PrimaryButton>
          <PrimaryButton
            className={styles.singleBtn}
            onClick={handlerRestart}
          >
            {NAMES_BTN.restart}
          </PrimaryButton>
          <SecondaryButton
            className={styles.singleBtn}
            onClick={handlerStop}
          >
            {NAMES_BTN.stop}
          </SecondaryButton>
        </section>
          <CommonArea 
            isCardVisible={isCardVisible}
            selectedCardValue={selectedCardValue}
            setIsCardIsVisible={setIsCardIsVisible}
            setSelectedCardValue={setSelectedCardValue}
          />
        <PanelVoteCards 
          setSelectedCardValue={setSelectedCardValue}
          selectedCardValue={selectedCardValue}
          isCardVisible={isCardVisible}
        />
      </article>
      <PanelUsers />
    </main>
  );
};
