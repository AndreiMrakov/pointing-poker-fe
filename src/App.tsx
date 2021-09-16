import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Game } from './pages/Game';
import styles from './App.module.scss';
import { navMap } from './untils/NavMap';
import { NotFound } from './pages/NotFound';

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
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
