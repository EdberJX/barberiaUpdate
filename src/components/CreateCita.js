import React, { Component } from "react";
//import { BarberShops } from "../db/barber.json";
import FormCita from "./FormCita";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateCita extends Component {
  async componentDidMount() {
    this.getBarberia();
   
  }
  //se obtiene la barberia por las props por medio de link
  getBarberia = async () => {
    const { BarberShop } = this.props.location.state;
    await this.setState({
      barberia: BarberShop,
      servicios: BarberShop.servicios
    });

    this.getBaberos();
  };
  //se obtiene los barberos por el id de la barberia y se valida si exiten o exiten servicios
  getBaberos = async () => {
    const { data } = await axios.get(
      "http://localhost:5000/barberos/" + this.state.barberia._id
    );
    if (data[0]) {
      if (this.state.servicios.length === 0) {
        alert("Barberia No Cuenta Con Servicios");
        window.location.href = "http://localhost:3000/";
      }
      await this.setState({
        barberos: data,
        barberoSelected: data[0]
      });
    } else {
      alert("Barberia No Cuenta Con Barberos");
      window.location.href = "http://localhost:3000/";
    }
  };
  //se agrega las citas
  addCitas = async newCita => {
    await axios.post("http://localhost:5000/addcita", newCita);
  };
  //cuando carguen los datos se renderiza
  datosOn = () => {
    if (this.state.barberoSelected) {
      return (
        <FormCita
          barberia={this.state.barberia._id}
          addCitas={this.addCitas}
          barberos={this.state.barberos}
          barberoSelected={this.state.barberoSelected}
        />
      );
    }
  };

  state = {
    barberia: "",
    servicios: [],
    barberos: [],
    barberoSelected: ""
  };

  render() {
    let i = 0;
    return (
      
      <div className="container row mt-4">
        <div className="col-md-4">{this.datosOn()}</div>
        <div className="col-md-8">
          <div className="jumbotron">
            <h3 className="display-4 text-center">
              Bienvenidos a {this.state.barberia.nombre}
            </h3>

            <br />
            <h5>Servicios:</h5>
            <br />
            <ul className="list-group">
              {this.state.servicios.map(servicio => (
                <li
                  key={i++}
                  className="list-group-item list-group-item-action"
                >
                  {servicio}
                </li>
              ))}
            </ul>

            <hr className="my-4" />
            <div className="card-footer">
              <h4>Llamanos {this.state.barberia.telefono} </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
