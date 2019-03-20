import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from '../../pages/Home';
import Header from '../header/Header';
import Callback from '../../containers/auth/Callback';
import { withSession } from '../../containers/auth/withSession';

export default function App() {
  return (
    <Router>
      <>
      <Header/>
        <Switch>
          <Route exact path="/callback" component={Callback} />
          <Route exact path="/" component={withSession(Home)} />
        </Switch>
      </>
    </Router>
  );
}
