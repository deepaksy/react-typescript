import React, { Component } from 'react'
import axios from 'axios'

type PostState={
    posts?:string[],
    error?:string
}

class PostLists extends Component<any,PostState> {

    constructor(props:any) {
      super(props)
    
      this.state = {
         posts:[],
         error:''
      }
    }

    componentDidMount(): void {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>this.setState({
            posts:res.data
        }))
        .catch(e=>{
            console.log(e)
            this.setState({
                error:'Error Retriving data'
            })
        })
    }
  render() {
    const {posts,error}=this.state
    return (
      <div>
        List Of posts
        {
            posts?.length?
            posts.map((post:any)=><div key={post.id}>{post.title}</div>):<div>{error}</div>
        }
      </div>
    )
  }
}

export default PostLists