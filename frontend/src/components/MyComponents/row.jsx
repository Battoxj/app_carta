import React, { Component } from 'react'

class Row extends Component {

    render() {
        return (
            <div className={"row" + " " + this.props.clase} >
                {this.props.children}
            </div>
        )
    }
}

Row.defaultProps = {
    clase: ""
}


export default Row