import * as React from 'react';

import "../../styles/navbar.scss";
import { Link } from "react-router-dom";
import MaterialIcon, {colorPalette} from 'material-icons-react';
import localization from "../Localization";

export class SideMenu extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
  }

  changeToAction = (menuOption:number) => (event: any) => {
    const tagSection = document.getElementById('sideMenu');
    if (tagSection !== null) {

      const li = tagSection.getElementsByTagName("li");

      Array.prototype.forEach.call(li, function (item) {
        const id = Number(item.id.replace('tag-', ''));
        if (id === menuOption) {
          item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
      });
    }
  }

  render() {
    return (
      <nav className="sidebar sidebar-offcanvas sidebar-fixed">
        <div id="sideMenu" className="main-menu">
          <ul className="list-unstyled components">
            <li className="menu-item" id='tag-0' onClick={this.changeToAction(0)} >
              <Link to="/dashboard">
                <div className="row row-item">
                  <div className="col-md-8 col-sm-8 col-xs-8 col-xs-center">
                    <span className="nav-item">{localization.menu.home}</span>
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-4">
                    <span className="menu-icon">
                      <i className="fas fa-home"></i>
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li className="menu-item" id='tag-1' onClick={this.changeToAction(1)}>
              <Link to="pets">
                <div className="row row-item">
                  <div className="col-md-8 col-sm-8 col-xs-8 col-xs-center">
                    <span>Mascotas</span>
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-4">
                    <span className="menu-icon">
                      <span className="icon-badge badge-success badge badge-pill">4</span>
                      <MaterialIcon icon="pets" />
                    </span>
                  </div>
                </div>
              </Link>
            </li>

            <li className="menu-item" id='tag-2' onClick={this.changeToAction(2)}>
              <Link to="/ui">
                <div className="row row-item">
                  <div className="col-md-8 col-sm-8 col-xs-8 col-xs-center">
                    <span>UI Elements</span>
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-4">
                    <span className="menu-icon">
                      <span className="icon-badge badge-success badge badge-pill">1</span>
                      <MaterialIcon icon="bookmark" />
                    </span>
                  </div>
                </div>
              </Link>
            </li>

            <li className="menu-item" id='tag-3' onClick={this.changeToAction(3)}>
              <Link to="/settings">
                <div className="row row-item">
                  <div className="col-md-8 col-sm-8 col-xs-8 col-xs-center">
                    <span>{localization.menu.settings}</span>
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-4">
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
