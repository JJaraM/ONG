import * as React from 'react';

import "../../styles/navbar.scss";
import { Link } from "react-router-dom";
import MaterialIcon, {colorPalette} from 'material-icons-react';
import localization from "../Localization";

export class SideMenu extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
  }

  render() {

    return (
      <nav className="sidebar sidebar-offcanvas sidebar-fixed">
        <div className="main-menu">
          <ul className="list-unstyled components">
            <li className="active">
              <Link to="/dashboard">
                <div className="row">
                  <div className="col-md-6 col-sm-6 col-xs-6 col-xs-center">
                    <span className="nav-item">{localization.menu.home}</span>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-6 ">
                    <span className="menu-icon">
                      <i className="fas fa-home"></i>
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="pets">
                <div className="row">
                  <div className="col-md-6 col-sm-6 col-xs-6 col-xs-center">
                    <span>Mascotas</span>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-6">
                    <span className="menu-icon">
                      <span className="icon-badge badge-success badge badge-pill">4</span>
                      <MaterialIcon icon="pets" />
                    </span>
                  </div>
                </div>
              </Link>
            </li>

            <li>
              <Link to="/ui">
                <div className="row">
                  <div className="col-md-6 col-sm-6 col-xs-6 col-xs-center">
                    <span>UI Elements</span>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-6">
                    <span className="menu-icon">
                      <span className="icon-badge badge-success badge badge-pill">1</span>
                      <MaterialIcon icon="bookmark" />
                    </span>
                  </div>
                </div>
              </Link>
            </li>

            <li>
              <Link to="/settings">
                <div className="row">
                  <div className="col-md-6 col-sm-6 col-xs-6 col-xs-center">
                    <span>Settings</span>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-6">
                    <span className="menu-icon">

                      <MaterialIcon icon="settings" />
                    </span>
                  </div>
                </div>
              </Link>
            </li>

          </ul>
        </div>
      </nav>
    )
  }
}
