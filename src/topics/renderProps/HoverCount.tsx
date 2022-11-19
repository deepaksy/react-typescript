import React, { Component } from 'react'

class HoverCount extends Component<{count:number,incrementCount:()=>void},{count:number}> {
    
    render() {
      const {count,incrementCount}=this.props
      return (
        <div onMouseOver={incrementCount}>
            Hovered {count} times
        </div>
      )
    }
  }

export default HoverCount