import React from 'react';
import GamePage from './pages/Game';
import styles from '@/styles/app.module.scss';

export function App() {
  return (
    <div className={styles.container}>
      <GamePage />
    </div>
  );
}
