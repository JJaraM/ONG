import * as React from 'react';

import { Link } from "react-router-dom";
import {Table} from "../../components/Table";
import TableRow from "../../components/TableRow";
import TableColumn from "../../components/TableColumn";
import localization from "../Localization";
import people from "../../mock/people";
import rolesData from "../../mock/roles";
import { Button, toast } from 'mdbreact';


export class Roles extends React.Component<any, any> {
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

  back = () => {
    this.props.history.push(this.props.location.state.back);
  }

  save = () => {
    toast.success(localization.common.saved, {
      position: "top-right",
    });
  }

  renderBackButton = () => {
    const backPage = this.props.location.state !== undefined ? this.props.location.state.back : undefined;
    if (backPage !== undefined) {
      return (
        <button type="submit" className="btn btn-primary submit-big-button btn-lettuce" onClick={ () => this.back()}>
          {localization.common.back}
        </button>
      )
    }
    return (<></>);
  }

  render() {

    const rolesDataSet = this.createRoleData();
    const rolesHeader = [localization.user.role];
    const RolesFooter = (props) => (<>{localization.user.permissionOperations} <Link to="/">link</Link></>);

    return (
      <div className="change-section row">
        <div className="col-lg-8 mx-auto  mt-2">
          <div className="card py-3 m-b-30">
            <div className="card-body">
              <h3>{localization.user.addRoleTitle}</h3>
              <p className="text-muted">
                {localization.user.addRoleDescription}
              </p>
              <div className="form-row">
                 <div className="form-group col-md-6">
                     <label>Name</label>
                     <input type="text" className="form-control" placeholder="Name"/>
                 </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <Table title={localization.user.role} headers={rolesHeader} rows={rolesDataSet} footer={<RolesFooter />}/>
                </div>
                {this.renderBackButton()}
                <button type="submit" className="btn btn-primary submit-big-button btn-lettuce" onClick={ () => this.save()}>
                  {localization.common.save}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
