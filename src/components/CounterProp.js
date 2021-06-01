import React, { Component } from 'react'

 class CounterProp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    IncrementsCount = () => {
       this.setState( prevState  => {
           return { count: prevState.count +1}

       })
    }
    render() {
        return (
            <div>
              {this.props.render(this.state.count, this.IncrementsCount)}  
            </div>
        )
    }
}

export default CounterProp
