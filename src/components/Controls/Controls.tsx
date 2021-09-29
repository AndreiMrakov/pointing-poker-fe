import React from 'react';
import { PrimaryButton, SecondaryButton } from '@/components';
import styles from './Controls.module.scss';
import { socketService } from '@/services';
import { SocketEvent } from '@/utils/enums';

const NAMES_BTN = {
  run: 'run round',
  restart: 'restart round',
  stop: 'stop game',
};

export const Controls: React.FC = () => {
  const handlerRun = () => {
    socketService.emit(SocketEvent.StartGame);
  };

  const handlerRestart = () => {
    socketService.emit(SocketEvent.RestartGame);
  };

  const handlerStop = () => {
    socketService.emit(SocketEvent.FinishGame);
  };

  return (
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
  );
};
