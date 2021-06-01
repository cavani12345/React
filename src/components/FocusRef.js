import React, { Component } from 'react'
import InputRefs from "./InputRefs";

 class FocusRef extends Component {
     constructor(props) {
         super(props)
     this.clickHandle = this.clickHandle.bind(this)
         this.setRef= React.createRef()
     }
     clickHandle(){
         this.setRef.current.FocusInput()
     }
     
    render() {
        return (
            <div>
              <InputRefs ref={this.setRef}></InputRefs>  
              <button onClick={this.clickHandle}>Click</button>
            </div>
        )
    }
}

export default FocusRef
