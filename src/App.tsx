import React from 'react';
import { Game } from './pages/Game';
import styles from './App.module.scss';
import { BrowserRouter as Router,  Route,  Switch } from "react-router-dom";
import { navMap } from './NavMap';

function App() {
  return (
  <div className={styles.container}>
    <Router>
      <Switch>
        <Route path={navMap.home()} />
        <Route path={navMap.lobby()} />
        <Route path={navMap.game()} component={Game} />
      </Switch>
    </Router>
  </div>
  );
}
