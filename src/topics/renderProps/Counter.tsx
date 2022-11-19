import React, { Component } from 'react'

class Counter extends Component<{render:(count:number,incrementCount:()=>void)=>React.ReactElement},{count:number}> {
    constructor(props:any) {
        super(props)
      
        this.state = {
          count:0
        }
      }
  
  
      incrementCount = ()=>{
          this.setState(prevState=>({
              count:prevState.count+1
          }))
      }
  render() {
    return (
      <div>
        {this.props.render(this.state.count,this.incrementCount)}
      </div>
    )
  }
}

export default Counter