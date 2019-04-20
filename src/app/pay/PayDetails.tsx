import * as React from 'react';

import {Table} from "../../components/Table";
import TableRow from "../../components/TableRow";
import TableColumn from "../../components/TableColumn";
import localization from "../Localization";
import people from "../../mock/people";

export class PayDetails extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
  }

  createData = () => {
    const tableRows = Array<TableRow>();


    people.data.map((person, tagId) => {
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

  render() {
    const tableRows = this.createData();
    const headers = ['Header1', 'Header2', 'Header3', 'Header4'];

    return (
        <div className="content-wrapper">
          <div className="container-fluid pet-background m-b-30">

            <div className="row">
                <div className="col-10 mx-auto text-white p-t-40 p-b-90">
                <h4 className="">
                  {localization.pending_payment.title}
                </h4>
                <p className="opacity-75 ">
                  {localization.pending_payment.description}
                </p>
              </div>
            </div>

          </div>
          <div className="content-wrapper pull-up">
            <div className="col-lg-12">
              <Table title={"Title"} headers={headers} rows={tableRows}/>
            </div>
          </div>
        </div>
    )
  }
}
