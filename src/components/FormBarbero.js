import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class FormBarbero extends Component {
  componentDidMount() {
    this.getBarberia();
  }
  //Se obtiene la barberia a traves del id del admin
  getBarberia = async () => {
    const idAdmin = await axios.get(
      "http://localhost:5000/barberiaid/" + this.props.id
    );
    this.setState({ barberia: idAdmin.data[0].admin });
  };
  //se prepara el barbero para ser creado
  onSubmitBarbero = async e => {
    e.preventDefault();
    const newBarbero = {
      nombre: this.state.nombre,
      apellido: this.state.apellido,
      email: this.state.email,
      password: this.state.password,
      barberia: this.props.id
    };
    this.props.addBarbero(newBarbero);
    await this.wipeState();
  };
  //se limpia el estado
  wipeState = () => {
    this.setState({
      nombre: "",
      email: "",
      password: "",
      apellido: ""
    });
  };

  state = {
    nombre: "",
    apellido: "",

    email: "",
    password: "",
    barberia: ""
  };
  onInpuntChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <div className=" card card-body">
          <h3 className="text-center">Registrar Barbero</h3>
          <div className="container pt-4">
            <form onSubmit={this.onSubmitBarbero}>
              <div className="form-group">
                <input
                  value={this.state.nombre}
                  placeholder="Nombre del barbero"
                  className="form-control"
                  type="text"
                  onChange={this.onInpuntChange}
                  name="nombre"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  value={this.state.apellido}
                  placeholder="Apellido"
                  className="form-control"
                  type="text"
                  onChange={this.onInpuntChange}
                  name="apellido"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  value={this.state.email}
                  placeholder="Correo"
                  className="form-control"
                  type="text"
                  onChange={this.onInpuntChange}
                  name="email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="inputPassword"
                  value={this.state.password}
                  className="form-control"
                  placeholder="Password"
                  onChange={this.onInpuntChange}
                  name="password"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block ">
                Registrar Barbero
              </button>
              <br />
              <Link
                className="nav-link btn btn-lg btn-success btn-block"
                type="submit"
                to={"/addservice/" + this.state.barberia}
              >
                {" "}
                Añadir servicio
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
