import * as React from 'react';

import { HashRouter, Route, Switch, Redirect} from "react-router-dom";
import { Link } from "react-router-dom";
import {Table} from "../../components/Table";
import TableRow from "../../components/TableRow";
import TableColumn from "../../components/TableColumn";
import localization from "../Localization";
import people from "../../mock/people";
import rolesData from "../../mock/roles";
import { Button, toast } from 'mdbreact';
import {UserAdd} from './UserAdd';
import {Roles} from './Roles';

export class UsersRouter extends React.Component<any, any> {
  constructor(props:any) {
    super(props);
  }

  createRoleData = () => {
    const tableRows = Array<TableRow>();

    rolesData.data.map((role, index) => {
      const tableColumns = Array<TableColumn>();

      const row = {} as TableRow;

      const id = {} as TableColumn;
      id.type = 'id';
      id.value = role.id;
      tableColumns.push(id);

      const name = {} as TableColumn;
      name.value = role.name;
      tableColumns.push(name);

      row.columns = tableColumns;

      tableRows.push(row);
    })
    return tableRows;
  }

  createData = () => {
    const tableRows = Array<TableRow>();


    people.data.map((person, index) => {
      const tableColumns = Array<TableColumn>();

      const row = {} as TableRow;

      const id = {} as TableColumn;
      id.type = 'id';
      id.value = person.id;
      tableColumns.push(id);

      const avatar = {} as TableColumn;
      avatar.type = 'avatar';
      avatar.value = person.name;
      avatar.typeExtra = person.img;
      tableColumns.push(avatar);

      const project = {} as TableColumn;
      project.type = 'badge';
      project.className = 'badge badge-soft-danger badge-light';
      project.value = person.project;
      tableColumns.push(project);

      const role = {} as TableColumn;
      role.type = 'badge';
      role.className = 'badge badge-soft-danger badge-light';
      role.value = person.project;
      tableColumns.push(role);

      const action = {} as TableColumn;
      action.type = 'button';
      action.action = this.approved;
      action.value = 'Action';
      tableColumns.push(action);

      row.columns = tableColumns;

      tableRows.push(row);
    })
    return tableRows;
  }

  approved = () => {

  }

  save = () => {
    toast.success(localization.common.saved, {
      position: "top-right",
    });
  }

  render() {
    const tableRows = this.createData();
    const headers = [localization.user.username, localization.user.role, 'Header3', 'Header4'];
    const rolesDataSet = this.createRoleData();
    const rolesHeader = [localization.user.role];
    const Footer = (props) => (
      <>{localization.user.userOperations}
      <Link to={{
        pathname: '/users/add'
      }}> link</Link>
    </>);

    return (
        <div className="content-wrapper">
          <div className="container-fluid pet-background m-b-30">
            <div className="row">
              <div className="col-10 mx-auto text-white p-t-40 p-b-90">
                <h4>
                  {localization.user.title}
                </h4>
                <p className="opacity-75 ">
                  {localization.user.description}
                </p>
              </div>
            </div>
          </div>
          <div className="content-wrapper pull-up">
            <div className="col-lg-12">
              <Table title={localization.user.currentUsers} headers={headers} rows={tableRows} footer={ <Footer />}/>
            </div>
          </div>

          <Switch>
            <Route path="/users/add" component={UserAdd} />
            <Route path="/users/roles" component={Roles} />
          </Switch>
        </div>
    )
  }
}
