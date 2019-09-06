import React from "react";
import { Link } from "react-router-dom";
import IconLogo from "../images/IconLogo1.png"

export default class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
       <div className="container">
       <div className="spinner-grow text-light" role="status">
  <span className="sr-only">Loading...</span>
</div>
        <Link className="navbar-brand pl-2" to="/"> 
        <img src={IconLogo} alt="imagen1" className="card-img-top"></img>
         </Link>
            <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                    <Link className="nav-link" to="/"> Inicio </Link>
                    </li>
                    <li className="nav-item ">
                    <Link className="nav-link" to="/citas"> Citas </Link>
                    </li>
                    
                    <li className="nav-item">
                    <Link className="nav-link btn btn-outline-dark" to="/signin"> Sign in</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link btn btn-outline-dark" to="/signup"> Sign up </Link>
                    </li>
                    
                    
                </ul>
            </div>
        </div>
      </nav>
    );
  }
}
