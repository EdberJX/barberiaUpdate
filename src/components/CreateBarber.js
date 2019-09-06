import React, { Component } from "react";
import axios from "axios";
import Barbero from "./Barbero";
import FormBarbero from "./FormBarbero";

export default class CreateUser extends Component {
  async componentDidMount() {
    this.getBarberos();
  }

  //se obtiene todos los barberos de la barberia por el id
  getBarberos = async () => {
    const res = await axios.get(
      "http://localhost:5000/barberos/" + this.props.match.params.id
    );
    this.setState({ barberos: res.data });
  };
  //se crea el barbero
  addBarbero = async newBarbero => {
    await axios.post("http://localhost:5000/addbarbero", newBarbero);

    this.getBarberos();
  };
  //se elimina el barbero
  onDelete = async id => {
    const filtro = this.state.barberos.filter(barbero => barbero._id !== id);
    this.setState({ barberos: filtro });
    await axios.delete("http://localhost:5000/removebarbero/" + id);
  };

  state = {
    barberos: []
  };

  render() {
    return (
      <div className="container pt-4">
        <div className="row">
          <div className="col-md-4">
            <FormBarbero
              id={this.props.match.params.id}
              addBarbero={this.addBarbero}
            />
          </div>

          <div className="col-md-8">
            <ul className="list-group">
              {this.state.barberos.map(barbers => (
                <Barbero
                  barbers={barbers}
                  key={barbers._id}
                  onDelete={this.onDelete}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
/* <Estadistica idbarberia={this.props.match.params.id}/>
 */
