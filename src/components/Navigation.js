import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            EJemplo
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="navbar-brand" to="/">
                  CARGOS
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                  to="/create"
                >
                  CREAR CARGO
                </Link>

                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              
                    <Link className="dropdown-item " to="#">
                
                      SALIR
                    </Link>
            
                </div>

              </li>



              <li className="nav-item">
                <Link className="navbar-brand" to="/user">
                  CREAR USUARIO
                </Link>
              </li>

              <li className="nav-item">
                <Link className="navbar-brand" to="/user">
                  NUEVOOO
                </Link>
              </li>








              
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
