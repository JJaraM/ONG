import * as React from 'react';

import "../styles/petProfile.scss";
import {withRouter} from "react-router-dom";
import MaterialIcon, {colorPalette} from 'material-icons-react';
import localization from "./Localization";

import {PullUpCard} from "../components/PullUpCard";
import {UIElementsTable} from "../app/UIElements/UIElementsTable";

import Prism from 'prismjs';
import "../styles/customPrism.scss";


export class UIElements extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
  }

  componentDidMount() {
    Prism;
  }

  render() {

    return (
        <div className="content-wrapper">

          <div className="pet-background">
            <div className="row p-b-60 p-t-60">
              <div className="col-md-10 mx-auto text-center text-white p-b-30">
                <div className="m-b-20">
                  <div className="avatar avatar-xl my-auto">
                      <img className="avatar-img rounded" src="#" alt=""/>
                  </div>
                  <h1>UI Elements</h1>
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

            <UIElementsTable />

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
