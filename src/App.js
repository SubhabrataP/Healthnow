import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Hospital from './components/Hospital/Hospital';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <HashRouter>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/hospital/" exact component={Hospital} />
            <Route path="/hospital/:menuitem" exact component={Hospital} />
          </Switch>
      </HashRouter>
  );
}

export default App;
