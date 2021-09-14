import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { Game } from './pages/Game';
import styles from './App.module.scss';
import { navMap } from './untils/NavMap';

export function App() {
  return (
    <div className={styles.container}>
      <Router>
        <Switch>
          <Route exact path={navMap.home()} />
          <Route path={navMap.lobby()} />
          <Route path={navMap.game()}>
            <Game />
          </Route>
          <Redirect to={navMap.home()} />
        </Switch>
      </Router>
    </div>
  );
}
