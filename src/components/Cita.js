import React, { Component } from "react";


export default class Cita extends Component {
  

  citacomplete = (estado, id) => {
    return (
      //Si el estado es true retorna un boton si no el otro
      estado ? (
        <button className="btn btn-success">Terminado</button>
      ) : (
        <button
          className="btn btn-danger"
          onClick={() => this.toggleOnClick(id)}
        >
          En Marcha
        </button>
      )
    );
  };
  //con el argumento id de la cita crea un nuevo objeto y lo envia por post al servidor para obtener las citas del barbero para cambiar de el estado de la cita
  toggleOnClick = async idCita => {
    this.props.toggleOnClick(idCita);
    this.props.getCitas();
  };
  
  render() {
    const { citas, n } = this.props;

    return (
      <div className="container pt-4">
        <div className="card text-center ">
          <h4 className="card-header">Cita 0{+n}</h4>
          <div className="card-body text-dark">
            Cliente:<p> {citas.nombreCliente}</p>
            Telefono: <p>{citas.telefonoCliente}</p>
            Barbero:<p>{citas.turno}</p>
            Fecha: <p>{citas.fecha} </p>
            hora: <p>{citas.hora}</p>
            <div className="card-footer">
              {this.citacomplete(citas.estado, citas._id)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// Barbero:<p>{this.state.nameBarber}</p>