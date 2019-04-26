import * as React from 'react';

import {Link} from "react-router-dom";
import {Table} from "../../components/Table";
import {BlockButton} from "../../components/BlockButton";

import TableRow from "../../components/TableRow";
import TableColumn from "../../components/TableColumn";
import localization from "../Localization";
import people from "../../mock/people";
import rolesData from "../../mock/roles";
import { Button, toast } from 'mdbreact';

interface State {
  id: number
}

export class UserAdd extends React.Component<any, State> {
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
      name.type = 'checkbox';
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
    const RolesFooter = (props) => (
      <>
        {localization.user.roleOperations}
        <Link to={{
          pathname: '/users/roles',
          state: {back: '/users/add'}
        }}> link</Link>
      </>
    );

    return (
      <div className="change-section row">
        <div className="col-lg-8 mx-auto  mt-2">
          <div className="card py-3 m-b-30">
            <div className="card-body">
              <h3>{localization.user.addUserTitle}</h3>
              <p className="text-muted">
                {localization.user.addUserDescription}
              </p>
              <div className="form-row">
                 <div className="form-group col-md-6">
                     <label>Name</label>
                     <input type="text" className="form-control" placeholder="Name"/>
                 </div>
                 <div className="form-group col-md-6">
                     <label>Email</label>
                     <input type="email" className="form-control" placeholder="Email" />
                 </div>
               </div>
               <div className="form-row">
                <div className="form-group col-md-12">
                  <Table title={localization.user.role} headers={rolesHeader} rows={rolesDataSet} footer={<RolesFooter />}/>
                </div>
                <BlockButton id="id-add-user" onClickText={localization.common.saving} onClick={ () => this.save()}>
                  {localization.common.save}
                </BlockButton>
               </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
