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
import { Users } from "../app/settings/Users";
import "../styles/dashboard.scss";
import "../styles/card.scss";
import themesData from "../styles/themes";
import localization from "../app/Localization";

export class DashboardRouter extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
    this.setDefaultLanguage();
  }

  reload = () => {
    this.setDefaultLanguage();
    this.props.history.push("/settings");
  }

  componentDidMount() {
    this.setTheme();
  }

  setDefaultLanguage() {
    let language = localStorage.getItem('language');
    if (language === null || language === undefined || language === '') {
      language = 'es';
    }
    localization.setLanguage(language);
  }

  setTheme = () => {
    let userConfigurationTheme = localStorage.getItem('theme');
    if (userConfigurationTheme === null || userConfigurationTheme === undefined || userConfigurationTheme === '') {
      userConfigurationTheme = 'masakali';
    }
    let theme = themesData.themes[userConfigurationTheme];
    if (theme === undefined) {
      theme = themesData.themes['masakali'];
    }
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
              <Route path="/users" component={Users} />
              <Route path="/settings" exact component={() => <Settings event={this.reload} />}/>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
