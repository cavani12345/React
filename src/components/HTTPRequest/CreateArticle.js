import React, { Component } from 'react'
import axios from "axios"

class CreateArticle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Title: '',
             Description: '',
             Priority : '',
             token:'24|LkTbOcpLbgYYGSb4lV1UwelQarhGGTwb2ud6YsOh'
        }
    }
    
    OnChangeHandler =(e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    OnSubmitHandler = (e) =>{
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
        axios.post('http://127.0.0.1:8000/api/articles', this.state)
        .then(response =>{
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })
       
    }
    
    render() {
        const {Title, Description, Priority} = this.state
        return (
            <div>
                <form onSubmit={this.OnSubmitHandler} method="POST">
                    <label>Title</label>
                    <input type="text" name="Title" value={Title} onChange={this.OnChangeHandler}></input> <br></br><br></br>
                    <label>Description</label>
                    <input type="text" name="Description" value={Description} onChange={this.OnChangeHandler}></input><br></br><br></br>
                    <label>Priority</label>
                    <input type="text" name="Priority" value={Priority} onChange={this.OnChangeHandler}></input><br></br><br></br>
                   <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default CreateArticle
