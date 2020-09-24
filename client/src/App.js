import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from './components/Nav';
import Home from './pages/Home';
import Saved from './pages/Saved';
import NonExist from './pages/NonExist';

function App() {
  return (
    <Router>
      <div>
      <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NonExist} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
