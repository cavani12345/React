import React, { Component } from 'react'
import ForwardRef from "./ForwardRef";

export class ForwdParentRef extends Component {
    constructor(props) {
        super(props)
    
        this.refCreate= React.createRef()
    }
    clickHandle = () =>{
        this.refCreate.current.focus()
    }
    
    render() {
        return (
            <div>
               <ForwardRef ref={this.refCreate}></ForwardRef> 
               <button onClick={this.clickHandle}>Forward Ref</button>
            </div>
        )
    }
}

export default ForwdParentRef
