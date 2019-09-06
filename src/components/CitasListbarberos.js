import React, { Component } from "react";
import axios from "axios";
import Cita from "./Cita";

export default class CitasListbarberos extends Component {
  constructor(){
    super()
    this.state = {
      citas: []
    };
    this.getCitas();
  }
 /* async componentDidMount() {
    this.getCitas();
  }*/

  //al iniciar sesion como barbero, se renderiza este componente, el cual a traves de sus metodos polimorficos
  //puede cambiar el estado de la cita recordemos que en el componente citas estos no hacen nada
  //se obtiene todas las citas dependiendo del id del barbero, este id se pasa por la url
  getCitas = async () => {
    const { data } = await axios.get(
      "http://localhost:5000/citasbarbero/" + this.props.match.params.id
    );

    if (data.length !== 0) {
      this.setState({
        citas: data
      });
    } else {
      this.setState({
        citas: []
      });
    }
  };
//cambia el estado de la cita de false a true dependiendo del id de la cita luego actualiza el estado
  toggleOnClick = async idCita => {
    const id = {
      id: idCita
    };
    await axios.post("http://localhost:5000/atendercita", id);
    this.getCitas();
  };

  

  render() {
    let i = 1;
    return (
      <div className="container">
        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            {this.state.citas.map(cita => (
              <div className="col-md-4" key={cita._id}>
                <Cita
                  citas={cita}
                  getCitas={this.getCitas}
                  n={i++}
                  toggleOnClick={() => this.toggleOnClick(cita._id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
