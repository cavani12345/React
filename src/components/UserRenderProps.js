import React, { Component } from 'react'

class UserRenderProps extends Component {
    render() {
        return (
            <div>
              <h1>Hello {this.props.name(false)}</h1>   
            </div>
        )
    }
}

export default UserRenderProps
