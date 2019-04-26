import * as React from 'react';

import {withRouter} from "react-router-dom";
import MaterialIcon, {colorPalette} from 'material-icons-react';

export class PetProfile extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
  }

  render() {

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
                    <div className="card card-hover">
                        <div className="card-body">
                            <div className="text-center p-t-20">
                                <div className="avatar-lg avatar">
                                    <div className="avatar-title rounded-circle badge-soft-success">
                                      <MaterialIcon icon="dashboard" />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h1 className="fw-600 p-t-20">21.32k</h1>
                                    <p className="text-muted fw-600">Peso</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 m-b-30">
                    <div className="card card-hover">
                        <div className="card-body">
                            <div className="text-center p-t-20">
                                <div className="avatar-lg avatar">
                                    <div className="avatar-title rounded-circle badge-soft-danger">
                                    <MaterialIcon icon="calendar_today" />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h1 className="fw-600 p-t-20"> 3 años</h1>
                                    <p className="text-muted fw-600">Edad</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 m-b-30">
                    <div className="card card-hover">
                        <div className="card-body">
                            <div className="text-center p-t-20">
                                <div className="avatar-lg avatar">
                                    <div className="avatar-title rounded-circle badge-soft-info"><i className="mdi mdi-eye-settings-outline h1 m-0"></i></div>

                                </div>
                                <div className="text-center">
                                    <h1 className="fw-600 p-t-20">2015/02/13</h1>
                                    <p className="text-muted fw-600">Ultima Visita</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 m-b-30">
                    <div className="card card-hover">
                        <div className="card-body">
                            <div className="text-center p-t-20">
                                <div className="avatar-lg avatar">
                                    <div className="avatar-title rounded-circle badge-soft-dark"><i className="mdi mdi-vector-intersection h1 m-0"></i></div>

                                </div>
                                <div className="text-center">
                                    <h1 className="fw-600 p-t-20">90%</h1>
                                    <p className="text-muted fw-600">Salud</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






          <div className="change-section row">
              {/*Start Table*/}
              <div className="col-lg-6 ">
                <div className="card m-b-30">
                  <div className="card-header">
                    <h5 className="m-b-0">
                        Citas medicas
                    </h5>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>Title 1</th>
                            <th>Title 2</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Value 1</td>
                            <td>Value 2</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Table*/}

              {/*Start Table*/}
              <div className="col-lg-6 ">
                <div className="card m-b-30">
                  <div className="card-header">
                    <h5 className="m-b-0">
                        Medicamentos
                    </h5>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>Title 1</th>
                            <th>Title 2</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Value 1</td>
                            <td>Value 2</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
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
                         <input type="text" value="John Doe" className="form-control" id="inputEmail6" placeholder="Name"/>
                     </div>
                     <div className="form-group col-md-6">
                         <label>Email</label>
                         <input type="email" className="form-control" id="inputEmail4" placeholder="Email" value="john@example.com"/>
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
