import * as React from 'react';

import "../../styles/home.scss";
import { PriceTable } from "./PriceTable";
import { TopMenu } from "./TopMenu";
import localization from "../Localization";

export class Home extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
    this.setDefaultLanguage();
  }

  setDefaultLanguage() {
    localization.setLanguage('en');
  }

  signIn = () => {
    this.props.history.push("/dashboard");
  }

  render() {
    return (
      <>
        <TopMenu />
        <section className="section-spacing background-image header-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <div className="header-next-content">
                  <h1>
                    Lo mejor de las mascotas en un solo lugar
                  </h1>
                  <h2>
                    Perfecto para dueños y veterinarios
                  </h2>
                </div>
              </div>
              <div className="col-md-5 col-lg-5 offset-lg-1">
                <div className="form-content authentication-form">
                  <h3>

                      {localization.home.title}

                  </h3>
                  <div className="row">
                    <div className="form-group">
                      <input type="text" name="cta-name" className="form-control input-lg" placeholder="Nombre"/>
                    </div>
                    <div className="form-group">
                      <input type="text" name="cta-name" className="form-control input-lg" placeholder="Correo electronico"/>
                    </div>
                    <div className="form-group">
                      <input type="password" name="cta-name" className="form-control input-lg" placeholder="Contraseña"/>
                    </div>
                    <div className="form-group">
                      <div className="align-center-items">
                        <button className="btn btn-primary submit-big-button btn-tomato" onClick={this.signIn}>Registarse</button>
                      </div>
                    </div>
                    <p>
                      Al ingresar esta deacuerdo con nuestras terminos y politicas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <PriceTable />
      </>
    )
  }
}
