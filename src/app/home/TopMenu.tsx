import * as React from 'react';

import localization from "../Localization";

export class TopMenu extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
  }

  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand" href="">
              <img className="logo" src="img/logo.svg" alt="logo"/>
              <img className="logo-nav" src="img/logo-nav.svg" alt="logo-nav"/>
            </a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#how-it-works">How it works
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}
