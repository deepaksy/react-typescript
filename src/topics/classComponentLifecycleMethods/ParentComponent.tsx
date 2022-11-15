import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component<any,any> {

  constructor(props:any){
    super(props)
    console.log("Parent Constructor called.")
    this.state={
      message:"hello world"
    }
  }

  static getDerivedStateFromProps(){
    console.log('Parent getDerivedStateFromProps called.')
    return null
  }

  componentDidMount(): void {
      console.log('Parent componentDidMount called.')
  }

  render() {
    return (
      <div>
        Parent Component
        <ChildComponent/>
      </div>
    )
  }
}

export default ParentComponent