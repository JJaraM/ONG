import * as React from 'react';

import { Link } from "react-router-dom";
import localization from "../Localization";
import {Theme} from "./Theme";



export class Themes extends React.Component<any, any> {
  constructor(props:any) {
    super(props);
  }



  render() {
    console.log('Themes');

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
                <p>{localization.settings.title}</p>
              </div>
            </div>
          </div>
        </div>


        <div className="content-wrapper ">
          <Theme />
        </div>
      </div>
    )
  }
}
