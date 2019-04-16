import * as React from 'react';

import { HashRouter, Route, Switch, Redirect} from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { PetProfile } from "./PetProfile";
import { Pets } from "./Pets";
import { TopMenu } from "./dashboard/TopMenu";
import { SideMenu } from "./dashboard/SideMenu";
import { PayDetails } from "./pay/PayDetails";
import { UIElements } from "./UIElements";
import { Settings } from "./Settings";
import "../styles/dashboard.scss";
import "../styles/card.scss";
import themesData from "../styles/themes";

export class DashboardRouter extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
  }

  componentDidMount() {
    this.setTheme();
  }

  setTheme = () => {
    let userConfigurationTheme = localStorage.getItem('theme');
    if (userConfigurationTheme === null || userConfigurationTheme === undefined || userConfigurationTheme === '') {
      userConfigurationTheme = 'masakali';
    }
    const theme = themesData.themes[userConfigurationTheme];
    Object.keys(theme).forEach((key) => {
      const cssKey = `--${key}`;
      const cssValue = theme[key];
      document.body.style.setProperty(cssKey, cssValue);
    });
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
              <Route path="/pay/:id" exact component={PayDetails} />
              <Route path="/pet/:id" exact component={PetProfile} />
              <Route path="/ui" exact component={UIElements} />
              <Route path="/settings" exact component={Settings} />
            </Switch>

          </div>
        </div>
      </div>
    );
  }
}
