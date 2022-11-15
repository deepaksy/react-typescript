import React, { Component } from 'react'

class ChildComponent extends Component<any,any> {
  constructor(props:any){
    super(props)
    console.log("Constructor called.")
    this.state={
      message:"hello world"
    }
  }

  static getDerivedStateFromProps(){
    console.log('Child getDerivedStateFromProps called.')
    return null
  }

  componentDidMount(): void {
      console.log('Child componentDidMount called.')
  }
  render() {
    return (
      <div>ChildComponent</div>
    )
  }
}

export default ChildComponent