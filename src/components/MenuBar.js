import React, { Component } from 'react';
import {Link} from 'react-router-dom';









class MenuBar extends Component {


    render() {
        return (
    
   
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                <div className="container">
            
               
                    <Link className="navbar-brand" to="/"  >
                
                            SUSHI
                        </Link>
             
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto" >
                   

                
                


                    <li className="nav-item dropdown ">
                       
                          <Link className="nav-link dropdown-toggle " data-toggle="dropdown" to="#"  >
                          <i className="fas fa-sign-out-alt"></i>
                            CERRAR SESION
                          </Link>
                  

                      <div className="dropdown-menu ">

                 
                          <Link className="dropdown-item " to="#"  >
                          <i className="fas fa-sign-out-alt"></i>
                            SALIR
                          </Link>
                     

                


                      </div >

                      </li>



                </ul>
            </div>

            </div>
        </nav>


        )    

    }

}

export default MenuBar;