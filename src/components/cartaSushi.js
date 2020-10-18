import React, { Component , Fragment} from 'react'

import Fila from "./MyComponents/row";
import Celda from "./MyComponents/col";

import gohan from "./gohan.png";
import cuantos from "./cuantos.png";

export default class cartaSushi extends Component {
    render() {
        return (
            <Fragment>

            <h1 className="mt-4">CARTAS MUCHO SUSHI </h1>
          

                <Fila>
                     <Celda t={6} >

                     <img src={gohan} />

                     </Celda>
                     <Celda t={6} >

                     <img src={cuantos} />

                     </Celda>

                </Fila>
                
            </Fragment>
        )
    }
}
