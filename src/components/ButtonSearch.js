import React, { Component } from "react";

export default class ButtomSearch extends Component {
  constructor(){
    super()
    this.state = {
      buscar: ""
    };
  }
  onClick = async e => {
    e.preventDefault();
    const buscar = { buscar: this.state.buscar };
    this.setState({ buscar: "" });
    //llamamos la funcion que proviene de props y le pasamo como argumento un json
    this.props.searchBarberShop(buscar);
   
  };
  handleChange = e => {
    this.setState({ buscar: e.target.value });
  };

 

  render() {
    return (
      <div className="collage container pb-4">
        <form className="form-inline my-2 my-lg-0" onSubmit={this.onClick}>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={this.handleChange}
          />
          <button className="btn btn-dark " type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}
