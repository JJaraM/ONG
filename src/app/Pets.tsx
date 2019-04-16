import * as React from 'react';

import "../styles/petProfile.scss";
import {withRouter} from "react-router-dom";
import MaterialIcon, {colorPalette} from 'material-icons-react';
import { Link } from "react-router-dom";

import data from '../mock/pets';

export class Pets extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
  }

  render() {

    return (
        <div className="content-wrapper">
          <div className="row">
            <div className="col-md-6 p-b-20 my-auto">
              <h5 className="m-0">Routine Stats</h5>
            </div>
          </div>
          <div className="row py-5">
            {
              data.data.map((row, index) => {
                return (
                  <div className="col-lg-3 col-md-6 m-b-30" key={index}>
                    <div className="card">
                      <div className="card-body">
                        <div className="text-center">
                          <img width="250" src={row.img} alt=""/>
                        </div>
                        <h5 className="text-center">
                          <Link to={`pet/${row.id}`}>
                            {row.name}
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
    )
  }
}
