import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Hospital from './components/Hospital/Hospital';
import Sidebar from './components/Sidebar';
import Admin from './components/Admin/Admin';
import AddHospital from './components/Admin/AddHospital';

function App() {
  return (
    <HashRouter>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/hospital/" exact component={Hospital} />
            <Route path="/hospital/:menuitem" exact component={Hospital} />
            <Route path="/admin/" exact component={Admin} />   
            <Route path="/admin/:menuitem" exact component={Admin} />
          </Switch>
      </HashRouter>
  );
}

export default App;
