import React, { Component } from 'react'

 class UseGreeting extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              IsGreeting:false
         }
     }
     
    render() {
        {
            /*
            if (this.state.IsGreeting) {
            return(
            <div>
              <h1>Welcome Kavani</h1>  
            </div>
            )
        }
        else{
            return (
                <div>
                <h1>Welcome Guest</h1>  
              </div>
                )
        }
            */
        }

        {
            /*   using message variable
              let message
        if (this.state.IsGreeting) {
            message = <div><h1>Welcome Kavani</h1></div>
        }
        else{
            message = <div>
            <h1>Welcome Guest</h1>  
          </div>
        }
        return <div>{message}</div>
            */
        }
       {
           /* Condition ternary operator

           
        return(
            this.state.IsGreeting ?(
                <div> <h1> Welcome Kavani</h1></div>
            ) : (
                <div> <h1>Welcome Guest </h1></div>  
            )
        )
           */
       }
       return(
           this.state.IsGreeting && <div>Welcome Kavani</div>
       )
       
    }
}

export default UseGreeting
