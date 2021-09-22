import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Game, Home, NotFound } from './pages';
import styles from './App.module.scss';
import { navMap } from './utils/NavMap';

export const App: React.FC = () => (
  <div className={styles.container}>
    <Router>
      <Switch>
        <Route exact path={navMap.home()}>
          <Home />
        </Route>
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
