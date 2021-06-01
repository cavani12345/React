import React, { Component } from 'react'
import axios from 'axios';

 class DeleteArticle extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              id:'',
              token: '24|LkTbOcpLbgYYGSb4lV1UwelQarhGGTwb2ud6YsOh'
         }
     }
     OnChangeHandler = (e)=>{
         this.setState({
             [e.target.name]: e.target.value
         })

     }
     OnSubmitHandler = (e)=>{
            e.preventDefault();
            axios.interceptors.request.use(
                config=>{
                   config.headers.authorization= `Bearer ${this.state.token} `;
                   return config
                },
                error =>{
                       return Promise.reject(error)
                }
            );
            axios.delete(`http://127.0.0.1:8000/api/articles/${this.state.id}`)
        .then(response =>{
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })
     }
     

    render() {
        const {id}= this.state;
        return (
            <div>
                <form onSubmit={this.OnSubmitHandler} method="DELETE">
                    <label>ID: </label>
                    <input type="text" name="id" value={id} onChange={this.OnChangeHandler}></input><br></br><br></br>
                   <button type="submit">Submit</button>
                </form> 
            </div>
        )
    }
}

export default DeleteArticle
