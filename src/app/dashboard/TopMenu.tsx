import * as React from 'react';

import "../../styles/topMenu.scss";

export class TopMenu extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <a className="collapse-topMenu" id="sidebarCollapse">
          <i className="fas fa-align-justify"></i>
        </a>
        <div className="search ">
          <input type="text" className="form-control" placeholder="Text input"/>
          <span className="search-icon"><i className="fas fa-search"></i></span>
        </div>
        <a className="navbar-logo" href="/">
          <img src="https://gogo-react.coloredstrategies.com/assets/img/logo-black.svg" width="110" height="35" className="d-inline-block align-top"/>
        </a>
      </nav>
    )
  }
}
