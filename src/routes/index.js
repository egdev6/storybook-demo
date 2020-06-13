import React from 'react';
import { Switch } from 'react-router-dom';

import routesPath from '~/constants/routes';

import Home from '~/pages/Home';

import Route from './Route';

export default function Routes() {
  return (
    <Switch>
      <Route path={routesPath.home} component={Home} />
    </Switch>
  );
}
