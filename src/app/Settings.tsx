import * as React from 'react';
import localization from "./Localization";
import {Theme} from "../app/settings/Theme";
import {Languages} from "../app/settings/Languages";

interface Props {
  event: () => any;
}
export class Settings extends React.Component<Props, any> {

  constructor(props:Props) {
    super(props);
  }

  render() {
    return (
        <div className="content-wrapper">
          <div className="pet-background m-b-30">
            <div className="row p-b-60 p-t-60">
              <div className="col-md-10 mx-auto text-center text-white p-b-30">
                <div className="m-b-20">
                  <div className="avatar avatar-xl my-auto">
                      <img className="avatar-img rounded" src="#" alt=""/>
                  </div>
                  <h1>{localization.settings.title}</h1>
                </div>
              </div>
            </div>
          </div>


          <div className="content-wrapper ">
            <Theme />
            <Languages event={this.props.event}/>
          </div>
        </div>
    )
  }
}
