import React from "react";
// contenedor lo renombro , rutas




import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
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
      
        

        <Route exact path="/" component={Home} />


              <Route path='*'>
              <Redirect to="/" />
              </Route>  

      
      </div>
    
      
    </Router>
  );
}

export default App;
