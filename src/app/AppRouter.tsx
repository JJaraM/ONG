import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './home/Home';
import { DashboardRouter } from './DashboardRouter';



export const AppRouter: React.StatelessComponent = () => {
  console.log('App Router');
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={DashboardRouter} />
      <Route exact path="/pet/:id" component={DashboardRouter} />
      <Route exact path="/pets" component={DashboardRouter} />
      <Route exact path="/ui" component={DashboardRouter} />
      <Route exact path="/settings" component={DashboardRouter} />
      <Route exact path="/pay/:id" component={DashboardRouter} />
    </Switch>
  );
}
