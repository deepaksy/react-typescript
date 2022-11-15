import React, { Component } from 'react'

class ErrorBoundary extends Component<any,{hasError:boolean}>{
    constructor(props:any) {
      super(props)
    
      this.state = {
        hasError:false
      }
    }
    static getDerivedStateFromError(error:any){
        return{
            hasError:true
        }
    }
  render() {
    if(this.state.hasError){
        return <h1>SomeThing Went Wrong!!</h1>
    }
    else{
        return this.props.children
    }
  }
}

export default ErrorBoundary