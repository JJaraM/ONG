import * as React from 'react';

import {Table} from "../../components/Table";
import TableRow from "../../components/TableRow";
import TableColumn from "../../components/TableColumn";

export class UIElementsTable extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
  }

  createData = () => {
    const tableRows = Array<TableRow>();
    const tableColumns = Array<TableColumn>();

    const row = {} as TableRow

    const col0 = {} as TableColumn;
    col0.type = 'id';
    col0.value = '1'
    tableColumns.push(col0);

    const col1 = {} as TableColumn;
    col1.type = 'avatar';
    col1.value = 'Marie Anne'
    col1.typeExtra = 'https://atmos.atomui.com/default/assets/img/users/user-1.jpg';
    tableColumns.push(col1);

    const col2 = {} as TableColumn;
    col2.type = 'badge';
    col2.value = 'project'
    col2.className = 'badge badge-soft-danger badge-light';
    tableColumns.push(col2);

    const col3 = {} as TableColumn;
    col3.value = 'Costa Rica';
    tableColumns.push(col3);

    const col4 = {} as TableColumn;
    col4.type = 'button';
    col4.value = 'view';
    col4.action = this.view;
    tableColumns.push(col4);

    row.columns = tableColumns;
    tableRows.push(row);

    return tableRows;
  }

  view = (id: any) => {
    console.log("ID Row " + id)
  }

  render() {
    const tableRows = this.createData();

    return (
      <div className="change-section row">

        <div className="col-md-6 m-b-10">
          <h3>Tables</h3>
        </div>

        <div className="col-lg-12">
          <pre>
            <code className="language-javascript">
            {`
render() {
  const tableRows = this.createData();
  return (
    <Table title={"Title"} headers={['Header1', 'Header2', 'Header3', 'Header4']} rows={tableRows}/>
  )
}
            `}
            </code>
          </pre>
        </div>

        <div className="col-lg-12">
          <Table title={"Title"} headers={['Header1', 'Header2', 'Header3', 'Header4']} rows={tableRows}/>
        </div>
      </div>
    )
  }
}
