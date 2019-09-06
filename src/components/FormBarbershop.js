import React, { Component } from "react";

import axios from "axios";

export default class FormBarbershop extends Component {
  onSubmitBarberia = async e => {
    e.preventDefault();
    const newBarberia = {
      nombre: this.state.nombre,
      direccion: this.state.direccion,
      telefono: this.state.telefono,
      admin: this.state.admin
    };

    await axios.post("http://localhost:5000/addbarberia", newBarberia);
    await axios.put("http://localhost:5000/admin/" + this.state.admin);

    this.props.history.push("/addservice/" + this.state.admin);
  };
  onInpuntChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      admin: this.props.match.params.id
    });
  };

  state = {
    barberia: "",

    nombre: "",
    direccion: "",
    telefono: "",
    admin: ""
  };
  render() {
    return (
      <div id="cont" className="container card card-body mt-4">
        <form className="form-signin" onSubmit={this.onSubmitBarberia}>
          <h1 className="h3 mb-3 font-weight-normal text-primary">
            {" "}
            Registrar Barberia
          </h1>

          <br />
          <label className="sr-only">Email address</label>
          <input
            type="text"
            id="inputEmail"
            className="form-control"
            placeholder="Nombre"
            onChange={this.onInpuntChange}
            name="nombre"
            required
          />
          <input
            type="text-area"
            id="inputEmail"
            className="form-control"
            placeholder="Direccion"
            onChange={this.onInpuntChange}
            name="direccion"
            required
          />
          <input
            type="number"
            id="inputEmail"
            className="form-control"
            placeholder="Telefono"
            onChange={this.onInpuntChange}
            name="telefono"
            required
          />
          <br />

          <button
            className="nav-link btn btn-lg btn-success btn-block"
            type="submit"
          >
            {" "}
            Registrar
          </button>
        </form>
      </div>
    );
  }
}
