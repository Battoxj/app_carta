import React, { Component } from 'react'

class Col extends Component {

    render() {
        let clase = "col-" + this.props.t
        return (
            <div className={clase + " " + this.props.clase} >
                {this.props.children}
            </div>
        )
    }
}

Col.defaultProps = {
    t: 12,
    clase: ""
}

export default Col