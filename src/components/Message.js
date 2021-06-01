import React, {Component} from "react"

class Message extends Component{

    constructor() {
        super ()
        
        this.state = {
            message:'Welcome React developer'
        }
    }
    ChangeText(){
        this.setState({
            message:'Message Already Changed'
        })
    }

    render(){
        return (
            <div>
            <h2>{this.state.message}</h2>
            <button onClick={ () => this.ChangeText()}>Change Text</button>
            </div>
            
        )
        
    
    }
}
export default Message