import React, { Component } from 'react'
import UpdatedComponent from "./WithCounter";

 class ClickCounter extends Component {
    render() {
        const {count,incrementsCount} = this.props
        return (
            <div>
              <button onClick={incrementsCount}>Clicked {count} times</button>  
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter,5)
