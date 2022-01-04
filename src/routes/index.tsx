import React from 'react';
import { Switch } from 'react-router-dom';

import Profile from '../pages/Profile';
import SignIn from '../pages/SignIn';

import Route from './Route';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/profile" exact component={Profile} isPrivate />
    </Switch>
  );
}

export default Router;