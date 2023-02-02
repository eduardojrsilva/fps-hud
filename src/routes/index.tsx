import React from 'react';
import { Switch, Route } from 'react-router';

import Dashboard from '../pages/Dashboard';

const AppRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
    </Switch>
  );
};

export default AppRoutes;