import * as React from 'react';

import "../../styles/navbar.scss";
import { Link } from "react-router-dom";
import MaterialIcon, {colorPalette} from 'material-icons-react';
import localization from "../Localization";
import sideMenu from "../../config/SideMenuOptions";
import LocalizedStrings from 'react-localization';

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


  localizationValue = (keys:any, key:string, object: any, localization:any) => {

    const keySplit = key.split(".");
    const keyRoot = keySplit[0];
    let result = object;

    if (key !== undefined && key !== null && key !== '' && object !== undefined) {
      Array.prototype.forEach.call(keys, function (keyIt) {
        if (keyRoot === keyIt) {
          var hasMoreElements = keySplit.length > 0;
          if (hasMoreElements) {
            var element = localization[keyRoot];
            const newKeys = Object.keys(element);
            const newKeyToSend = key.replace(keyIt, '').replace('.', '');
            const object = localization[keyRoot];
            const newLocalization = localization[keyRoot];
            result = this.localizationValue(newKeys, newKeyToSend, object, newLocalization);
          }
        }
      }.bind(this));
    }
    return result;
  }



  render() {
    return (
      <nav className="sidebar sidebar-offcanvas sidebar-fixed" id="sidebar">
        <div id="sideMenu" className="main-menu">
          <ul className="list-unstyled components">
            {
              sideMenu.options.map((option, index) => {
                var key = option.label;
                var keys = Object.keys(localization);
                const label = this.localizationValue(keys, key, {}, localization);

                return (
                  <li className="menu-item" key={index} id={'tag-' + index} onClick={this.changeToAction(index)}>
                    <Link to={option.to}>
                      <div className="row row-item">
                        <div className="menu-item-element col-md-8 col-sm-8 col-xs-8 col-xs-center">
                          <span>{label}</span>
                        </div>
                        <div className="menu-icon-element col-md-4 col-sm-4 col-xs-4">
                          <span className="menu-icon">
                            <MaterialIcon icon={option.icon} />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </nav>
    )
  }
}
