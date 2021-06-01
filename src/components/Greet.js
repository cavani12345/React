import React, { Component } from "react"

class Greet extends Component {
render(){
    const{name,position} = this.props  // destructing props
    return <h1>hello {name} this is {position}</h1>
}
}
export default Greet