import * as React from 'react';


import {withRouter} from "react-router-dom";
import MaterialIcon, {colorPalette} from 'material-icons-react';
import localization from "../../app/Localization";

import {PullUpCard} from "../../components/PullUpCard";
import {UIElementsTable} from "../../app/UIElements/UIElementsTable";
import themesData from "../../styles/themes";

export class Theme extends React.Component<any, any> {

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

  render() {
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
}
