import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './home/Home';
import { DashboardRouter } from './DashboardRouter';
import { UIElementsRouter } from './UIElementsRouter';

export const AppRouter: React.StatelessComponent = () => {

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={DashboardRouter} />
      <Route exact path="/pet/:id" component={DashboardRouter} />
      <Route exact path="/pets" component={DashboardRouter} />
      <Route exact path="/ui" component={UIElementsRouter} />
    </Switch>
  );
}
