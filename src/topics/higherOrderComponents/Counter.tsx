import React from "react";

const WithCounter = (Component:any)=>{
    class Counter extends React.Component<any,{count:number}>{
        constructor(props:any) {
          super(props)
        
          this.state = {
             count:0
          }
        }

        handleCount = ()=>{
            this.setState((prevCount)=>(
                {
                    count:prevCount.count+1
                }
            ))
        }

        render(): React.ReactNode {
            return <Component  handleCount={this.handleCount} count={this.state.count}/>
        }
    }
    return Counter
}

export default WithCounter