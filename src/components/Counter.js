import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    Increments(){
        this.setState({
            count:this.state.count+1
        }, () =>{
console.log(this.state.count)
        })
        
    }
    Decrements(){
        this.setState({
            count:this.state.count-1
        })
    }
    render() {
        return (
            <div>
               <h1>Count {this.state.count}</h1> 
               <button onClick = { () => this.Decrements()}>Decrements</button>
               <button onClick = { () => this.Increments()}>Increments</button>
               
            </div>
        )
    }
}

export default Counter
