import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import fetchApi from '../utlis/apifetch'

export  default class SearchPage extends Component {
      state={
          searchapi:"",
          apiValue:[]
      }
      componentDidMount= async ()=>{
          let apiValue = await fetchApi();
          this.setState({
              apiValue: apiValue
          },()=>console.log(apiValue))
      }
      apisearch=(e)=>{
          this.setState({
            searchapi:e.target.value.toLowerCase().trim()
          })
      }

    render() {
       let filterApi = this.state.apiValue.filter((post)=>{
           return(
               post.title.indexOf(this.state.searchapi)!==-1 ||
               post.body.indexOf(this.state.searchapi)!== -1
           )
       })
        return (
            <div>
            <input type="text" 
             value={this.state.searchapi}
             onChange={this.apisearch}
            /> 
            <div>
                {filterApi.map((post,index)=>{
                    <ul key={index}>
                        <li>
                            <div>
                                <Link to={{
                                pathname:'/post',
                                aboutProps: {title:post.title, body:post.body}    
                            }}></Link>
                            <div>{post.title}</div>
                            <div>{post.body}</div>
                            </div>
                        </li>
                    </ul>
                })}
            </div>
            </div>
            
        )
    }
}

