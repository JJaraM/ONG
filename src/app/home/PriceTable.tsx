import * as React from 'react';

export class PriceTable extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
  }

  render() {
    return (
      <section className="section-spacing">
        <div className="pricingTable">
          <h2 className="pricingTable-title">Encuentra el mejor plan para ti</h2>
          <h3 className="pricingTable-subtitle">Cada plan viene con una prueba gratuita de 1 mes</h3>
          <ul className="pricingTable-firstTable">
            <li className="pricingTable-firstTable_table">
              <h1 className="pricingTable-firstTable_table__header">Dueño</h1>
              <p className="pricingTable-firstTable_table__pricing"><span>$</span><span>0</span><span>Month</span></p>
              <ul className="pricingTable-firstTable_table__options">
                <li>Mascotas ilimitadas</li>
                <li>Reporte de mascotas perdidas</li>
              </ul>
              <div className="pricingTable-firstTable_table__getstart">Get Started Now</div>
            </li><li className="pricingTable-firstTable_table">
              <h1 className="pricingTable-firstTable_table__header">Veterinario Gold</h1>
              <p className="pricingTable-firstTable_table__pricing"><span>$</span><span>19</span><span>Month</span></p>
              <ul className="pricingTable-firstTable_table__options">
                <li>Mascotas ilimitadas</li>
                <li>Manejo de expediente</li>
                <li>Manejo de expediente</li>
              </ul>
              <div className="pricingTable-firstTable_table__getstart">Get Started Now</div>
            </li><li className="pricingTable-firstTable_table">
              <h1 className="pricingTable-firstTable_table__header">Veterinario Platino</h1>
              <p className="pricingTable-firstTable_table__pricing"><span>$</span><span>49</span><span>Month</span></p>
              <ul className="pricingTable-firstTable_table__options">
                <li>Mascotas ilimitadas</li>
                <li>Manejo de expediente</li>
                <li>Manejo de expediente</li>
                <li>Factura electronico</li>
              </ul>
              <div className="pricingTable-firstTable_table__getstart">Get Started Now</div>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}
