import React, { Component } from 'react'

 class OnHoverProps extends Component {
    render() {
        const {count,IncrementsCount}= this.props
        return (
            <div>
              <h2 onMouseOver={IncrementsCount}>Hovered {count} times</h2>  
            </div>
        )
    }
}

export default OnHoverProps
