import React from 'react';
import { Game } from './pages/Game';
import styles from './App.module.scss';
import { BrowserRouter as Router,  Redirect,  Route,  Switch } from "react-router-dom";
import { navMap } from './untils/NavMap';

export function App() {
  return (
  <div className={styles.container}>
    <Router>
      <Switch>
        <Route exact path={navMap.home()}></Route>
        <Route exact path={navMap.lobby()}></Route>
        <Route path={navMap.game()}>
          <Game />
        </Route>
        <Redirect to={navMap.home()} />
      </Switch>
    </Router>
  </div>
  );
}
