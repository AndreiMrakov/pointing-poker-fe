import React from 'react';
import { BrowserRouter as Router,  Route,  Switch } from "react-router-dom";
import { navMap } from './NavMap/NavMap';

function App() {
  return (
  <>
    <Router>
      <Switch>
        <Route path={navMap.home()} />
        <Route path={navMap.lobby()} />
        <Route path={navMap.game()} />
      </Switch>
    </Router>
  </>
  );
}

export default App;
