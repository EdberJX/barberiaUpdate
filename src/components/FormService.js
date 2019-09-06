import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class FormService extends Component {
  //se prepara el servicio y se envia para que se cree
  onSubmitService = e => {
    e.preventDefault();
    const newServicio = {
      servicio: this.state.servicio,
      id: this.props.id
    };

    this.props.addService(newServicio);
  };
  //se actualiza el estado
  onChangeService = e => {
    this.setState({ servicio: e.target.value });
  };
  state = {
    servicio: ""
  };
  render() {
    return (
      <div className=" card card-body">
        <h3 className="text-center">Añadir servicio</h3>
        <div className="container pt-4">
          <form onSubmit={this.onSubmitService}>
            <div className="form-group">
              <input
                //value={this.state.userName}
                placeholder="Nombre del servicio"
                className="form-control"
                type="text"
                onChange={this.onChangeService}
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block ">
              Añadir servicio
            </button>
            <br />
            <Link
              className="nav-link btn btn-lg btn-success btn-block"
              type="submit"
              to={"/barber/" + this.state.id}
            >
              {" "}
              Registrar Barberos
            </Link>
          </form>
        </div>
      </div>
    );
  }
}
