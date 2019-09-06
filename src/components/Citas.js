import React, { Component } from "react";
import axios from "axios";
import Cita from "./Cita";

export default class Citas extends Component {
  constructor(){
    super()
     //tenemos dos estados de citas, uno que guarde el estado original y el otro con filtros
  this.state = {
    barberias: [],
    barberiaSelected: "",
    allCitas: [],
    citas: []
  };
   //iniciamos el componente llamando la funcion getBarbershop
  this.getBarberShops();
  }
  //iniciamos el componente llamando la funcion getBarbershop
  /*componentDidMount() {
    this.getBarberShops();
  }
*/
  //estos metodos son metodos polomorficos que en este componente no hace nada pero en el componente
  //citasListbarberos cambia el estado de la cita de false a true lo que significa que ya la atendieron
  toggleOnClick = () => {};
  getCitas = () => {};

  //Obtenemos todas las barberias y la guardamos en el estado luego ejecutamos los metodos getcitas y getBarbero
  getBarberShops = async () => {
    const { data } = await axios.get("http://localhost:5000/barberias");
    if(data[0]){
    this.setState({
      barberias: data,

      barberiaSelected: data[0]._id
    });
    data.map(barberia => this.getCitasBarberia(barberia._id));

    // await this.getCitas();
  }else{
      alert("No hay citas creadas")
  }};
  //obtiene las citas del ID de la barberia que se obtiene como parametro, luego las acumula
  getCitasBarberia = async idBarberia => {
    const { data } = await axios.get(
      "http://localhost:5000/citas/" + idBarberia
    );
    this.setState({ allCitas: [...this.state.allCitas, data] });
    this.setState({ citas: this.state.allCitas[0] });
  };

  /*
 el estado allcitas tiene un arreglo de longitud del numero de barberia, cada elemeto (celda) corresponde a
 todas las citas (es decir otro arreglo) de una barberia, al filtrar,se obtiene el mismo arreglo de barberia pero con los arreglo de citas vacios excepto al correspondiente del id de la barberia pasado por la propiedad value del select
 La constante citas barberia lo que hace simplemente eliminar los arreglos vacios y quedarse con el arreglo que tiene las citas para que sea uno de longitud 1. y si existe lo guarda en el estado sino guarda el estado como vacio
 */
  onInputChangeBarberia = async e => {
    const citas = this.state.allCitas.map(citas =>
      citas.filter(cita => cita.barberia === e.target.value)
    );
    const citasBarberia = citas.filter(citas => citas.length > 0);
    if (citasBarberia[0]) {
      await this.setState({ citas: citasBarberia[0] });
    } else {
      await this.setState({ citas: [] });
    }
  };

 

  render() {
    let i = 1;
    return (
      <div className="container pt-4">
        <div className="form-group">
          <select
            className="form-control"
            name="barberiaSelected"
            onChange={this.onInputChangeBarberia}
          >
            {this.state.barberias.map(barberias => (
              <option key={barberias._id} value={barberias._id}>
                {barberias.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            {this.state.citas.map(cita => (
              <div className="col-md-4" key={cita._id}>
                <Cita
                  citas={cita}
                  getCitas={this.getCitas}
                  n={i++}
                  barberiaSelected={this.state.barberiaSelected}
                  toggleOnClick={this.toggleOnClick}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
