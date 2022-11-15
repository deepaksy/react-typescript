import React, { Component } from 'react'
import FRInput from './FRInput'

class FRParentInput extends Component<any,any> {
    private inputRef:any=null
    constructor(props:any) {
      super(props)
    
      this.inputRef=React.createRef()
    }
  render() {
    return (
      <div>
        <FRInput ref={this.inputRef}/>
        <button onClick={()=>{
            this.inputRef.current.focus()
        }}>Focus input</button>
      </div>
    )
  }
}

export default FRParentInput