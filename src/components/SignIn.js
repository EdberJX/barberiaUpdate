import React, { Component } from "react";
import axios from "axios";
import "../style/signIn.css";
export default class SignIn extends Component {
  onSubmitLoginUser = async e => {
    e.preventDefault();
    const userLogin = {
      email: this.state.email,
      password: this.state.password
    };
    const res = await axios.post("http://localhost:5000/login", userLogin);

    if (res.data[0]) {
      if (res.data[0].barberia === true) {
        this.props.history.push("/addservice/" + res.data[0]._id);
      } else {
        if (res.data[0].barberia === false) {
          this.props.history.push("/createbarbershop/" + res.data[0]._id);
        } else {
          this.props.history.push("/citasbarberos/" + res.data[0]._id);
        }
      }
    } else {
      alert("Usuario Incorrecto");
    }
    //alert(res.data.msj)
  };

  onInpuntChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  state = {
    email: "",
    password: ""
  };

  render() {
    return (
      <div id="cont" className="container card card-body mt-4">
        <form className="form-signin" onSubmit={this.onSubmitLoginUser}>
          <h1 className="h3 mb-3 font-weight-normal text-primary"> Sign in</h1>
          <select className="form-control">
            <option>Users</option>
          </select>
          <br />
          <label className="sr-only">Email address</label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email"
            onChange={this.onInpuntChange}
            name="email"
            required
          />
          <label className="sr-only">Password</label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            onChange={this.onInpuntChange}
            name="password"
            required
          />

          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Ingresar
          </button>
        </form>
      </div>
    );
  }
}
