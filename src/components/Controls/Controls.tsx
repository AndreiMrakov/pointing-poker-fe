import React  from "react";
import { PrimaryButton, SecondaryButton } from "@/components/Button";
import styles from './Controls.module.scss';

const NAMES_BTN = {
  run: "run round",
  restart: "restart round",
  stop: "stop game"
};


export const Controls = () => {
  const handlerRun = () => {
    console.log("handlerRun");
  };
  
  const handlerRestart = () => {
    console.log("handlerRestart");
  };
  
  const handlerStop = () => {
    console.log("handlerStop");
  };

  return(
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
  )
}