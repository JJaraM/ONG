import * as React from 'react';

import localization from "../../app/Localization";
export class Language extends React.Component<any, any> {
  public static setDefaultLanguage():void {
    let language = localStorage.getItem('language');
    if (language === null || language === undefined || language === '') {
      language = 'es';
    }
    localization.setLanguage(language);
  }
}
