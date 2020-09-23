import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Saved from './pages/Saved';
import NonExist from './pages/NonExist';

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/search" component={Home} />
      <Route exact path="/saved" component={Saved} />
      <Route exact path="*" component={NonExist} />
    </Router>
  );
}

export default App;
