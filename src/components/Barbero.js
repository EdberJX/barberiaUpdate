import React, { Component } from "react";

export default class Barbero extends Component {
    
  render() {
     const {barbers} = this.props
    return (
      <li
        className="list-group-item list-group-item-action"
        key={barbers._id}
        onDoubleClick={() => this.props.onDelete(barbers._id)}
      >
        {barbers.nombre + " " + barbers.apellido}
      </li>
    );
  }
}
