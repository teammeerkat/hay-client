import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Home from '../../pages/Home';
import Header from '../header/Header';

export default function App() {
  return (
    <Router>
      <>
      <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect to="/"/>
        </Switch>
      </>
    </Router>
  );
}
