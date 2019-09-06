import React, { Component } from "react";
import axios from "axios";
import FormService from "./FormService";

export default class CreateService extends Component {
   componentDidMount() {
     this.getBarberia();

  }
//se obtiene la abrberia por su id
  getBarberia = async () => {
    const { data } = await axios.get(
      "http://localhost:5000/barberia/" + this.props.match.params.id
    );
    
//si existe se guarda los servicios en el estado y el id
    if (data[0]) {
      this.setState({
        id: data[0]._id,
        servicios: data[0].servicios
      });
    }
  };
// se agrega el servicio
  addService = async newServicio => {
   
    await axios.post("http://localhost:5000/addserviciobarberia", newServicio);
 
    this.getBarberia();

  };
  state = {
   
    servicios: [],
    id:""
  };
  onInpuntChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    let i = 0;
    return (
      <div>
        <div className="container pt-4">
          <div className="row">
            <div className="col-md-4">
             
                  <FormService
                    id={this.state.id}
                    addService={this.addService}
                  />
               
            </div>
            <div className="col-md-8">
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}
