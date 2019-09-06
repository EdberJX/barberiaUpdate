import React, { Component } from "react";
import axios from "axios";
import "../style/signIn.css";
export default class SignUp extends Component {
  onSubmitAdminBarberia = async e => {
    e.preventDefault();
    const newAdmin = {
      nombre: this.state.nombre,
      apellido: this.state.apellido,
      email: this.state.email,
      password: this.state.password,
      barberia: false
    };
    const res = await axios.post("http://localhost:5000/addadmin", newAdmin);

   
    alert(res.data.msj);
    const idAdmin = await this.getAdmin();
    this.props.history.push("/createbarbershop/" + idAdmin.data[0]._id);
  };

  getAdmin = async () => {
    const userLogin = {
      email: this.state.email,
      password: this.state.password
    };
  
    return await axios.post("http://localhost:5000/login", userLogin);
   
  };
  onInpuntChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  state = {
    userSelect: "",
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    barberia: false
  };

  render() {
    return (
      <div id="cont" className="container card card-body mt-4">
        <form className="form-signin" onSubmit={this.onSubmitAdminBarberia}>
          <h1 className="h3 mb-3 font-weight-normal text-primary"> Sign up</h1>
          <select className="form-control">
            <option name="userSelect">Admin de la tienda</option>
          </select>
          <br />

          <label className="sr-only">Name User</label>
          <input
            type="text"
            id="nameUser"
            className="form-control"
            onChange={this.onInpuntChange}
            placeholder="Nombre"
            name="nombre"
            required
          />

          <label className="sr-only">lastName User</label>
          <input
            type="text"
            id="lastnameUser"
            className="form-control"
            onChange={this.onInpuntChange}
            placeholder="Apellido"
            name="apellido"
            required
          />

          <label className="sr-only">Email address</label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            onChange={this.onInpuntChange}
            placeholder="Email"
            name="email"
            required
          />
          <label className="sr-only">Password</label>
          <input
            type="password"
            id="inputPassword"
            onChange={this.onInpuntChange}
            className="form-control"
            placeholder="Password"
            name="password"
            required
          />
          <br />
          <button
            className="nav-link btn btn-lg btn-success btn-block"
            type="submit"
          >
            {" "}
            Crear cuenta{" "}
          </button>
        </form>
      </div>
    );
  }
}
/**
 *  <Link className="nav-link btn btn-lg btn-success btn-block" type="submit" to={"/createbarbershop/"+this.state._id}> Crear cuenta </Link>
 */
