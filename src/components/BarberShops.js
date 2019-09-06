import React, { Component } from "react";
//importando compootenes
import Barberia from "./BarberShop";
//importanteo imagenes
import bg_2 from "../images/bg_2.jpg";
import bg_1 from "../images/bg_1.jpg";
import bg_3 from "../images/bg_3.jpg";
import bg_4 from "../images/bg_4.jpg";
import bg_5 from "../images/bg_5.jpg";
import bg_6 from "../images/bg_6.jpg";
import bg_7 from "../images/bg_7.jpg";
import bg_8 from "../images/bg_8.jpg";
import bg_9 from "../images/bg_9.jpg";
import bg_10 from "../images/bg_10.jpg";

export default class BarberShops extends Component {
  //retorna la imagen dependiendo del iterador del ciclo
  imgS = n => {
    if (n === 0) {
      return bg_1;
    }
    if (n === 1) {
      return bg_2;
    }
    if (n === 2) {
      return bg_3;
    }
    if (n === 3) {
      return bg_4;
    }
    if (n === 4) {
      return bg_5;
    }
    if (n === 5) {
      return bg_6;
    }
    if (n === 6) {
      return bg_7;
    }
    if (n === 7) {
      return bg_8;
    }
    if (n === 8) {
      return bg_9;
    }
    if (n === 9) {
      return bg_10;
    }
  };
  render() {
    const { BarberShops } = this.props;
    let i = 0;
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          {/** Reccore el arreglo que se guardo en BarberShops que proviene de props y por cada barberia
                            le asigna props y renderiza el componente llamado*/}
          {BarberShops.map(BarberShop => (
            <div className="col-md-4" key={BarberShop._id}>
              <Barberia
                imgSrc={this.imgS(i++)}
                BarberShop={BarberShop}
                nombre={BarberShop.nombre}
                direccion={BarberShop.direccion}
                id={BarberShop._id}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
/**<Barberia
                imgSrc={this.imgS(i++)}
                
              /> */