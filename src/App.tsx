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
import { Home } from './pages/Home';

export function App() {
  return (
    <div className={styles.container}>
      <Router>
        <Switch>
          <Route exact path={navMap.home()}>
            <Home />
          </Route>
          <Route path={navMap.lobby()}></Route>
          <Route path={navMap.game()}>
            <Game />
          </Route>
          <Redirect to={navMap.home()} />
        </Switch>
      </Router>
    </div>
  );
}
