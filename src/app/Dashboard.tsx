import * as React from 'react';

import MaterialIcon, {colorPalette} from 'material-icons-react';
import {PullUpCard} from "../components/PullUpCard";

import {Table} from "../components/Table";
import TableRow from "../components/TableRow";
import TableColumn from "../components/TableColumn";
import localization from "./Localization";
import people from "../mock/people";


export class Dashboard extends React.Component<any, any> {

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
      action.action = this.view;
      action.value = 'Action';
      tableColumns.push(action);

      row.columns = tableColumns;

      tableRows.push(row);
    })
    return tableRows;
  }

  view = (id: any) => {
    this.props.history.push("/pay/1");
  }

  render() {
    const tableRows = this.createData();
    const tableHeaders = [localization.common.contact, localization.common.project, localization.common.action];

    return (
        <div className="content-wrapper">

          <div className="pet-background">
            <div className="row p-b-60 p-t-60">
              <div className="col-md-10 mx-auto text-center text-white p-b-30">
                <div className="m-b-20">
                  <div className="avatar avatar-xl my-auto">
                      <img className="avatar-img rounded" src="https://o.aolcdn.com/images/dims3/GLOB/crop/4854x3182+0+0/resize/1028x675!/format/jpg/quality/85/http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2Ff33fccca6149a8881f55cfbf6ac7ba1b%2F206112280%2Fgerman-shepherd-puppy-in-the-grass-picture-id841811318" alt=""/>
                  </div>
                  <h1>Fluxy</h1>
                </div>
              </div>
            </div>
          </div>


          <div className="content-wrapper pull-up">
            <div className="change-section row">
              <div className="col-lg-3 col-md-6 m-b-30">
                <PullUpCard message={localization.dashboard.pay} icon="arrow_upward" title="3 000 000" badge="badge-soft-success" />
              </div>
              <div className="col-lg-3 col-md-6 m-b-30">
                <PullUpCard message={localization.dashboard.pay} icon="arrow_upward" title="3 000 000" badge="badge-soft-success" />
              </div>
              <div className="col-lg-3 col-md-6 m-b-30">
                <PullUpCard message={localization.dashboard.pay} icon="arrow_upward" title="3 000 000" badge="badge-soft-success" />
              </div>
              <div className="col-lg-3 col-md-6 m-b-30">
                <PullUpCard message={localization.dashboard.pay} icon="arrow_upward" title="3 000 000" badge="badge-soft-success" />
              </div>
            </div>

          <div className="change-section row">
              {/*Start Table*/}
              <div className="col-lg-6 ">
                <Table title={"Pagos Pendientes"} headers={tableHeaders} rows={tableRows}/>
              </div>
              {/*End Table*/}

              {/*Start Table*/}
              <div className="col-lg-6 ">
                <Table title={"Desembolsos por aprobar"} headers={tableHeaders} rows={tableRows}/>
              </div>
              {/*End Table*/}
          </div>

          <div className="change-section row">
            <div className="col-lg-8 mx-auto  mt-2">
              <div className="card py-3 m-b-30">
                <div className="card-body">
                  <h3>Informacion de Fluxy</h3>
                  <p className="text-muted">
                    Use this page to update your contact information and change your password.
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
                     <button type="submit" className="btn btn-primary submit-big-button btn-tomato">Save changes</button>
                   </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    )
  }
}
