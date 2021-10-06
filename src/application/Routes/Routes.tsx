import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import styles from './Routes.module.scss';
import { navMap } from '@/utils/NavMap';
import {
  Game, Home, NotFound, NewGame,
} from '@/pages';

export const Routes = (): JSX.Element => (
  <div className={styles.container}>
    <Switch>
      <Route exact path={navMap.home()}>
        <Home />
      </Route>
      <Route path={navMap.newGame()}>
        <NewGame />
      </Route>
      <Route path={navMap.game()}>
        <Game />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </div>
);
