import React from 'react';
import GamePage from '@/pages/GamePage';
import styles from '@/App.module.scss';

export function App() {
  return (
    <div className={styles.container}>
      <GamePage />
    </div>
  );
}
