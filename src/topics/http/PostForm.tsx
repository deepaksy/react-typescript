import React, { Component, FormEvent } from 'react'
import axios from 'axios'

type PostState={
    userId:string,
    title:string,
    body:string
}

class PostForm extends Component<any,PostState> {
    constructor(props:any) {
      super(props)
    
      this.state = {
         userId:'',
         title:'',
         body:''
      }
    }

    changeHandler = (e:FormEvent<HTMLInputElement>) =>{
        this.setState({
            ...this.state,
            [e.currentTarget.name]:e.currentTarget.value
        })
    }

    submitHandler = (e:FormEvent) =>{
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts/',this.state)
        .then(res=>console.log(res))
        .catch(e=>console.log(e))
    }

  render() {
    const {userId,title,body}=this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <div>
                <input type='text' name='userId' value={userId} onChange={this.changeHandler}/>
            </div>

            <div>
                <input type='text' name='title' value={title} onChange={this.changeHandler}/>
            </div>

            <div>
                <input type='text' name='body' value={body} onChange={this.changeHandler}/>
            </div>

            <div>
                <input type="submit" value="submit" />
            </div>
        </form>
      </div>
    )
  }
}

export default PostForm