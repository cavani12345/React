import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)

        this.ChangeInputField = this.ChangeInputField.bind(this)
        this.SubmitFormData = this.SubmitFormData.bind(this)
    
        this.state = {
             email:'',
             firstname:'',
             lastname:''
        }
    }
    ChangeInputField = (e)=>{
        this.setState({
          email:e.target.value,
          firstname:e.target.value,
          lastname:e.target.value
        })
    }
    SubmitFormData = (e)=>{
        e.preventDefault()
       alert(` Your email is ${this.state.email} and your name is ${this.state.firstname} ${this.state.lastname}`)

    }
    
    render() {
        return (
            <div className="container">
            <div className="row">
                <div className="col-12 col-sm-4">
            <form onSubmit={this.SubmitFormData} >
            <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email"  value={this.state.email} onChange={this.ChangeInputField} className="form-control"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" 
    />
    </div>
    <div className="form-group">
    <label for="firstname">FirstName</label>
    <input type="text" className="form-control" id="firstname"  placeholder="FirstName"
    value={this.state.firstname}  onChange={this.ChangeInputField}
    />
    </div>
    <div className="form-group">
    <label for="lastname">LastName</label>
    <input type="text" className="form-control" id="lastname" placeholder="LastName"
      value={this.state.lastname}  onChange={this.ChangeInputField}
    
    />
    </div>
    <div className="form-group">
    <input type="submit" value="Submit" className="btn btn-primary" />
    </div>
            </form>
            </div>
            </div>
        </div>
        )
    }
}

export default Form

