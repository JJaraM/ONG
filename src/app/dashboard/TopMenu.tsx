import * as React from 'react';

import "../../styles/topMenu.scss";

export class TopMenu extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
    this.state = {
      sidebarBig: true
    };
  }

  collapse = () => {
    const element = document.getElementById('sidebar');
    const sideMenuElement = document.getElementById('id-side-menu');
    const ulElement = sideMenuElement.getElementsByTagName('ul')[0];
    const liElements : HTMLCollectionOf<HTMLLIElement> = ulElement.getElementsByTagName('li');

    let width = '100px';
    let sidebarBig = false;

    if (!this.state.sidebarBig) {
      width = '229px';
      sidebarBig = true;
    }

    for (const item of liElements as any) {
      let title = item.getElementsByClassName('menu-item-element')[0];
      let icon = item.getElementsByClassName('menu-icon-element')[0];
      let mainPanel = item.getElementsByClassName('main-panel')[0];
      console.log(mainPanel);

      if (sidebarBig) {
        title.style.display = 'block';

        icon.classList.remove('col-md-12');
        icon.classList.remove('col-sm-12');
        icon.classList.remove('col-xs-12');

        icon.classList.add('col-md-4');
        icon.classList.add('col-sm-4');
        icon.classList.add('col-xs-4');
      } else {
        title.style.display = 'none';
        icon.classList.remove('col-md-4');
        icon.classList.remove('col-sm-4');
        icon.classList.remove('col-xs-4');

        icon.classList.add('col-md-12');
        icon.classList.add('col-sm-12');
        icon.classList.add('col-xs-12');
      }
    }



    element.style.width = width;
    sideMenuElement.style.width = width;
    this.setState({sidebarBig: sidebarBig});

  }

  render() {
    return (
      <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <a className="collapse-topMenu" id="sidebarCollapse" onClick={this.collapse}>
          <i className="fas fa-align-justify"></i>
        </a>
        <div className="search my-2 my-lg-0">
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
