import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './home/Home';
import { DashboardRouter } from './DashboardRouter';

export class NoMatch extends React.Component{
    render(){
        return(
            <div>404 page</div>
        )
    }
}

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={DashboardRouter} />
          <Route exact path="/ui" component={DashboardRouter} />
          <Route exact path="/settings" component={DashboardRouter} />
          <Route exact path="/pay/:id" component={DashboardRouter} />
          <Route id="noMatch" component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
