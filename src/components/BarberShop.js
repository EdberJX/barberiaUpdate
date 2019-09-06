import React, { Component } from "react";
//importando componenete Link
import { Link } from "react-router-dom";
import "../style/card.css";
export default class BarberShop extends Component {
    //guardo las props en constantes 
  render() {
    const { BarberShop, imgSrc } = this.props;

    return (
      <div className="card text-center pt-4">
        <div className="overflow">
          <img src={imgSrc} alt="imagen1" className="card-img-top" />
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">"{BarberShop.nombre}"</h4>
          <p className="card-text text-secondary">{BarberShop.direccion}</p>
          <Link
            className="btn btn-outline-success btn-block"
            to={{
              pathname:"/createcita/" + BarberShop._id,
              state: {BarberShop}
              
            }}
          >
            ver
          </Link>
        </div>
      </div>
    );
  }
}
