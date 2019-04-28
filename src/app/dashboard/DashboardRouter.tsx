import * as React from 'react';

import { TopMenu } from "./TopMenu";
import { SideMenu } from "./SideMenu";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import { Router, Route, BrowserRouter, browserHistory } from 'react-router';
import { Dashboard } from "./Dashboard";
import { UIElements } from "./UIElements";
import { Settings } from "../settings/Settings";
import { UsersRouter } from "../settings/UsersRouter";
import { Themes } from "../settings/Themes";
import { JTheme } from '../../packages/theme/jTheme';
import { Language } from '../../packages/language/Language';
import "../../styles/dashboard.scss";
import UsersContainer from '../containers/UsersContainer';
import { Button, ToastContainer, toast } from 'mdbreact';
import * as Provider from 'react-redux';
import * as PropTypes from 'prop-types';
import { combineReducers, createStore } from 'redux';

const DashboardRouter = ({ store }) => (
    <Switch>
      <Route path="/settings/themes" exact component={Themes} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route path="/ui" exact component={UIElements} />
      <Route path="/settings/users" component={UsersContainer} />{/*UsersRouter*/}
      <Route path="/settings" exact component={() => <Settings event={this.reload} />}/>
    </Switch>
);

Language.setDefaultLanguage();
JTheme.changeTheme();

DashboardRouter.propTypes = {
  store: PropTypes.object.isRequired,
};

export default DashboardRouter;
