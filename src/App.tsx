import React from 'react';
import { Game } from '@/pages/Game';
import styles from '@/App.module.scss';

export function App() {
  return (
    <div className={styles.container}>
      <Game />
    </div>
  );
}
