import * as React from 'react';
import localization from "../../app/Localization";

interface Props {
  event: () => any;
}

export class Languages extends React.Component<Props, any> {

  constructor(props:Props) {
    super(props);
    let language = localStorage.getItem('language');
    this.state = {
      language: language
    };
  }

  changeLanguage = (event: any) => {
    const language = event.target.value;
    localStorage.setItem('language', language);
    this.props.event();
  }

  renderLanguages = () => {
    let language = localStorage.getItem('language');
    let currentOption = null;
    let currentOptionValue = null;
    let secondOption = null;
    let secondOptionValue = null;

    switch (language) {
      case 'es':
        currentOption = localization.languages.es;
        currentOptionValue = 'es',
        secondOption = localization.languages.en;
        secondOptionValue = 'en';
        break;

      case 'en':
        currentOption = localization.languages.en;
        currentOptionValue = 'en';
        secondOption = localization.languages.es;
        secondOptionValue = 'es';
        break;
    }

    return (
      <>
        <option value={currentOptionValue}> {currentOption} </option>
        <option value={secondOptionValue}> {secondOption} </option>
      </>
    )
  }

  render() {
    return (
      <div className="section row">
        <div className="col-lg-8 mx-auto  mt-2">
          <div className="card py-3 m-b-30">
            <div className="card-body">
              <h3>{localization.settings.languages}</h3>
              <p className="text-muted">
                {localization.settings.languages_description}
              </p>
              <div className="row">
                <div className="col-12 form-group tt-select">
                  <select className="form-control" onChange={this.changeLanguage}>
                    { this.renderLanguages()}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
