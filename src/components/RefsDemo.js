import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.clickHandler = this.clickHandler.bind(this)
        this.setRef = React.createRef()
        console.log(this.setRef)
    }
    componentDidMount(){
        this.setRef.current.focus()
        console.log(this.setRef)
    }
    clickHandler(){
        alert(this.setRef.current.value)
    }
    
    render() {
        return (
            <div>
               <input type="text" ref={this.setRef}></input> 
               <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
