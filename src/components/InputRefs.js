import React, { Component } from 'react'

 class InputRefs extends Component {
     constructor(props) {
         super(props)
     this.FocusInput = this.FocusInput.bind(this )
        this.setRef = React.createRef()
     }
     FocusInput(){
         this.setRef.current.focus()
     }
     
    render() {
        return (
            <div>
              <input type="text" ref={this.setRef}></input>  
            </div>
        )
    }
}

export default InputRefs
