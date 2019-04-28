import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './home/Home';
import { DashboardTemplate } from './dashboard/DashboardTemplate';

export class NoMatch extends React.Component{
    render(){
        return(
            <div>404 page</div>
        )
    }
}

/**
 * Handles
 */
class AppRouter extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={DashboardTemplate} />
          <Route exact path="/ui" component={DashboardTemplate} />
          <Route path="/settings" component={DashboardTemplate} />
          <Route id="noMatch" component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
