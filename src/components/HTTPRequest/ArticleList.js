import React, { Component } from 'react'
import axios from "axios";


 class ArticleList extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              articles:[],
              errorMessage:'',
              token: '24|LkTbOcpLbgYYGSb4lV1UwelQarhGGTwb2ud6YsOh'
         }
     }
     componentDidMount(){
         axios.interceptors.request.use(
             config=>{
                config.headers.authorization= `Bearer ${this.state.token} `;
                return config
             },
             error =>{
                    return Promise.reject(error)
             }
         );
         axios.get('http://127.0.0.1:8000/api/articles')
         .then(response =>{
             console.log(response)
             this.setState({
                 articles:response.data
             })
         })
         .catch(error =>{
             console.log(error)
             this.setState({
                 errorMessage:'Error while retrieving data'

             })
         })
     }
     
    render() {
        const {articles, errorMessage} = this.state
        const ArticleList = articles.map( article => < h5 key={article.id}>{article.Title}</h5>)
        return (
            <div>
               {
                   errorMessage ? <h2>{errorMessage}</h2> : ArticleList
               }
            </div>
        )
    }
}

export default ArticleList
