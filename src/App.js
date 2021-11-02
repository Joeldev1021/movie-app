import React from 'react';
import About from './pages/About';
import Home from './pages/Home';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const App = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about/:id">
          <About />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
