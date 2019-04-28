import * as React from 'react';


import { TopMenu } from "./TopMenu";
import { SideMenu } from "./SideMenu";
import { HashRouter, Route, Switch, Redirect, BrowserRouter as Router} from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { UIElements } from "./UIElements";
import { Settings } from "../settings/Settings";
import { UsersRouter } from "../settings/UsersRouter";
import { Themes } from "../settings/Themes";
import { JTheme } from '../../packages/theme/jTheme';
import { Language } from '../../packages/language/Language';
import "../../styles/dashboard.scss";
import { createStore } from 'redux';

import  DashboardRouter from "./DashboardRouter";
import { Button, ToastContainer, toast } from 'mdbreact';
import todoApp from '../../reducers';

export class DashboardTemplate extends React.Component<any, any> {



  render() {
    let store = createStore(todoApp);
    return (
        <div className="wrapper ">
          <TopMenu />
          <div className="container-fluid page-body-wrapper">
            <SideMenu />
            <div className="main-panel">
              <DashboardRouter store={store} />
            </div>
          </div>
        <ToastContainer hideProgressBar={true} newestOnTop={true} autoClose={5000} />
      </div>
    );
  }
}
