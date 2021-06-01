import React from "react";

const UpdatedComponent = (OriginalComponent,incrementNumber) =>{

 class NewComponent extends React.Component {
     constructor(props) {
         super(props)
     
         this.state = {
              count: 0
         }
     }
     IncrementsCount = () => {
        this.setState( prevState  => {
            return { count: prevState.count +incrementNumber}

        })
     }
     
        render() {
            return <OriginalComponent count={this.state.count} incrementsCount={this.IncrementsCount} />
            
        }
    }
    return NewComponent
      
}
export default UpdatedComponent