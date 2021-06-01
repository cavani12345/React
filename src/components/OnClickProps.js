import React, { Component } from 'react'

 class OnClickProps extends Component {
    render() {
        const {count,IncrementsCount}= this.props
        return (
            <div>
                <button onClick={IncrementsCount}> Clicked {count} times</button>
            </div>
        )
    }
}

export default OnClickProps
