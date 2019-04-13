import * as React from 'react';

import "../styles/petProfile.scss";
import {withRouter} from "react-router-dom";
import MaterialIcon, {colorPalette} from 'material-icons-react';


interface Props {
  icon: string;
  title: string;
  message: string;
  badge: string;
}

export class PullUpCard extends React.Component<Props, any> {

  constructor(props:any) {
    super(props);
  }

  render() {
    return (
      <div className="card card-hover">
          <div className="card-body">
              <div className="text-center p-t-20">
                  <div className="avatar-lg avatar">
                      <div className={`avatar-title rounded-circle ${this.props.badge}`}>
                        <MaterialIcon icon={this.props.icon} />
                      </div>
                  </div>
                  <div className="text-center">
                      <h1 className="fw-600 p-t-20">{this.props.title}</h1>
                      <p className="text-muted fw-600">{this.props.message}</p>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
