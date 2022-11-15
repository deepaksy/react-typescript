import React, { Component } from 'react'
import WithCounter from './Counter'

export class ClickCounter extends Component<{count:number,handleCount:()=>void},any> {

  render() {
    const {count,handleCount}=this.props
    return (
      <div>
        <div>Count - {count}</div>
        <button onClick={()=>handleCount()}>Increment</button>
      </div>
    )
  }
}

export default WithCounter(ClickCounter)