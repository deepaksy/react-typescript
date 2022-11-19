import React, { Component } from 'react'

 class ClickCounter extends Component<{count:number,incrementCount:()=>void},{count:number}> {
    
  render() {
    const {count,incrementCount}=this.props
    return (
      <div>
        <button onClick={incrementCount}>Click {count} times</button>
      </div>
    )
  }
}

export default ClickCounter