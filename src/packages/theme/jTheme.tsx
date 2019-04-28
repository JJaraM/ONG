import * as React from 'react';
import themesData from "./themes";

export function changeTheme() {
  let userConfigurationTheme = localStorage.getItem('theme');
  console.log(userConfigurationTheme);
  const defaultTheme = 'masakali';
  if (userConfigurationTheme === null || userConfigurationTheme === undefined || userConfigurationTheme === '') {
    userConfigurationTheme = defaultTheme;
  }
  let theme = themesData.themes[userConfigurationTheme];
  if (theme === undefined) {
    theme = themesData.themes[defaultTheme];
  }
  Object.keys(theme).forEach((key) => {
    const cssKey = `--${key}`;
    const cssValue = theme[key];
    document.body.style.setProperty(cssKey, cssValue);
  });
}

export class JTheme extends React.Component<any, any> {
  public static changeTheme():void {
    changeTheme();
  }
}
