import React, { Component } from 'react'
import  ChildComp from "./ChildComp";

 class ParanentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parent:'Parents'
        }
        // bind this parameter
        this.GreetParent = this.GreetParent.bind(this)
    }

    GreetParent(name){
        alert(`Hello ${this.state.parent} this is ${name} who is greeting`)
    }
    

    render() {
        return (
            <div>
                <h2>hello</h2>
                <ChildComp myparent = {this.GreetParent}></ChildComp>
            </div>
        )
    }
}

export default ParanentComp
