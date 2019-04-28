import * as React from 'react';

import { Link } from "react-router-dom";
import localization from "../Localization";
import {UIElementsTable} from "../../app/UIElements/UIElementsTable";
import themesData from '../../packages/theme/themes';

export class Themes extends React.Component<any, any> {
  constructor(props:any) {
    super(props);
  }

  getThemeName = () => {
    let keys = [];
    for(var k in themesData.themes) keys.push(k);
    return keys;
  }

  setTheme = (themeName:string) => {
    localStorage.setItem('theme', themeName);
    const theme = themesData.themes[themeName];
    Object.keys(theme).forEach((key) => {
      const cssKey = `--${key}`;
      const cssValue = theme[key];
      document.body.style.setProperty(cssKey, cssValue);
    });
  }

  renderThemes = () => {
    const themes = this.getThemeName();
    return (
      <div className="section row">
        <div className="col-lg-8 mx-auto  mt-2">
          <div className="card py-3 m-b-30">
            <div className="card-body">
              <h3>{localization.settings.theme_title}</h3>
              <p className="text-muted">
                {localization.settings.theme_title_description}
              </p>
              <div className="row">
              {
                themes.map((themeName,index)=> {
                  const theme = themesData.themes[themeName];

                  const colorA = theme['color-1'];
                  const colorB = theme['color-2'];
                  const colorC = theme['color-3'];

                  return (
                    <div className="col-sm-4 m-b-30" key ={index}>
                      <div className="theme-section">
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="theme-name text-center" onClick={() => this.setTheme(themeName) }>
                              {themeName}
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="color" style={{background: `${colorA}`}}>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="color" style={{background: `${colorB}`}}>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="color" style={{background: `${colorC}`}}>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="theme-name text-center" >
                            <button type="submit" className="btn btn-primary submit-big-button btn-lettuce" onClick={() => this.setTheme(themeName) }>
                              {localization.settings.change_theme}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
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
                <p>{localization.settings.title}</p>
              </div>
            </div>
          </div>
        </div>


        <div className="content-wrapper ">
          {this.renderThemes()}
        </div>
      </div>
    )
  }
}
