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

  /**
   * Change the style of the menu item when the user press the option
   * @param id of the menu option
   */
  changeMenuStyle = (menuId:number) => {
    const sideMenuElement = document.getElementById('id-side-menu');
    if (sideMenuElement !== null) {
      const liElements = sideMenuElement.getElementsByTagName("li");
      Array.prototype.forEach.call(liElements, function (liElement) {
        const liElementId = Number(liElement.id.replace('menu-', ''));
        if (liElementId === menuId) {
          liElement.classList.add('active');
        } else {
          liElement.classList.remove('active');
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

  /**
   * Validates if the sub menu option is opened
   * @param id of the sub menu option to validate if is opened
   */
  isOpened = (id:any) => {
    const element = document.getElementById('id-subMenu-' +  id);
    let isOpened = false;
    if (element !== undefined && element !== null && element.classList !== undefined && element.classList !== null) {
      Array.prototype.forEach.call(element.classList, function (className) {
        if (className === 'sub-menu-opened') {
          isOpened = true;
        }
      }.bind(this));
    }
    return isOpened;
  }

  showSubMenu = (id: any) => {
    const isOpened = this.isOpened(id);
    const element = document.getElementById('id-subMenu-' +  id);
    if (isOpened) {
      element.classList.remove('sub-menu-opened');
    } else {
      element.classList.add('sub-menu-opened');
    }
  }

  render() {
    return (
      <nav className="sidebar sidebar-offcanvas sidebar-fixed" id="sidebar">
        <div id="id-side-menu" className="main-menu">
          <ul className="list-unstyled components">
            {
              sideMenu.options.map((option, index) => {
                const key = option.label;
                const keys = Object.keys(localization);
                const label = this.localizationValue(keys, key, {}, localization);
                const hasSubMenu = option.subMenu !== undefined;
                let SubArrow = (props) => (<></>);
                const icon = this.isOpened(index) ? 'expand_less' : 'expand_more';

                if (hasSubMenu) {

                  SubArrow = (props) => (
                    <span className="menu-arrow" onClick={() => this.showSubMenu(index) } >
                      <MaterialIcon icon={icon} />
                    </span>
                  );

                }

                return (
                  <li className="menu-item" key={index} id={'menu-' + index} onClick={() => this.changeMenuStyle(index) }>
                    <Link to={option.to}>
                      <div className="row row-item">
                        <div className="menu-item-element col-md-8 col-sm-8 col-xs-8 col-xs-center">
                          <span>{label}</span>
                          <SubArrow id={'id-subMenu-' + index}/>
                        </div>
                        <div className="menu-icon-element col-md-4 col-sm-4 col-xs-4">
                          <span className="menu-icon">
                            <MaterialIcon icon={option.icon} />
                          </span>
                        </div>
                      </div>
                    </Link>
                    {
                      (() => {
                          if (option.subMenu !== undefined) {
                            return (
                              <ul className="sub-menu" id={'id-subMenu-' + index}>
                                {
                                  option.subMenu.map((subMenuOption, subMenuOptionIndex) => {

                                    const subMenuKey = subMenuOption.label;
                                    const subMenuKeys = Object.keys(localization);
                                    const subMenuLabel = this.localizationValue(subMenuKeys, subMenuKey, {}, localization);

                                    return (
                                      <li className="menu-item" key={subMenuOptionIndex} id={'subMenuOption-' + subMenuOptionIndex }>
                                        <Link to={subMenuOption.to}>
                                          <div className="row row-item">
                                            <div className="menu-item-element col-md-8 col-sm-8 col-xs-8 col-xs-center">
                                              <span>{subMenuLabel}</span>
                                            </div>
                                            <div className="menu-icon-element col-md-4 col-sm-4 col-xs-4">
                                              <span className="menu-icon">
                                                <MaterialIcon icon="person" />
                                              </span>
                                            </div>
                                          </div>
                                        </Link>
                                      </li>
                                    )
                                  })
                                }
                              </ul>
                            )
                          }
                          return (<></>);
                      })()
                    }
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
