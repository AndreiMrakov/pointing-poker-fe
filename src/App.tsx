import React from 'react';
import GamePage from './pages/game';
import styles from '@/styles/app.module.scss';

function App() {
  return (
    <div className={styles.container}>
      <GamePage />
    </div>
  );
}

export default App;
