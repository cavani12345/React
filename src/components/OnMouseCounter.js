import React, { Component } from 'react'
import UpdatedComponent from "./WithCounter";

 class OnMouseCounter extends Component {
    render() {
        const {count,incrementsCount} = this.props
        return (
            <div>
                <h2 onMouseOver={incrementsCount}>Hovered {count} times</h2>
            </div>
        )
    }
}

export default UpdatedComponent(OnMouseCounter,10)
