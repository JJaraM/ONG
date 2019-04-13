import * as React from 'react';

import { HashRouter, Route, Switch, Redirect} from "react-router-dom";
import { UIElements } from "./UIElements";
import { TopMenu } from "./dashboard/TopMenu";
import { SideMenu } from "./dashboard/SideMenu";

import "../styles/dashboard.scss";

export class UIElementsRouter extends React.Component<any, any> {

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
              <Route path="/ui" exact component={UIElements} />

            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
