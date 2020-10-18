import React from "react";
// contenedor lo renombro , rutas




import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Fila from "./components/MyComponents/row";
import Celda from "./components/MyComponents/col";

import gohan from "./img/gohan.png";
import cuantos from "./img/cuantos.png";


import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//import Navigation from "./components/Navigation";

import MenuBar from "./components/MenuBar";

import Home from "./components/cartaSushi";


function App() {
  return (

    
    <Router>
   
   
      <MenuBar/>
      <div className="container p-4">
      

        

      

                <Fila>
                     <Celda t={6} >

                     <img src={gohan} />

                     </Celda>
                     <Celda t={6} >

                     <img src={cuantos} />

                     </Celda>

                </Fila>

             

      
      </div>
    
      
    </Router>
  );
}

export default App;
