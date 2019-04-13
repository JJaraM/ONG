import * as React from 'react';

import { HashRouter, Route, Switch, Redirect} from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { PetProfile } from "./PetProfile";
import { Pets } from "./Pets";
import { TopMenu } from "./dashboard/TopMenu";
import { SideMenu } from "./dashboard/SideMenu";

import "../styles/dashboard.scss";

export class DashboardRouter extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
  }

  render() {

    return (
      <div className="wrapper ">
        <TopMenu />
        <div className="container-fluid page-body-wrapper">
          <SideMenu />
          <div className="main-panel">
            <Switch>
              <Route path="/dashboard" exact component={Dashboard} />
              <Route path="/pets" exact component={Pets} />
              <Route path="/pet/:id" exact component={PetProfile} />
            </Switch>

          </div>
        </div>
      </div>
    );
  }
}
