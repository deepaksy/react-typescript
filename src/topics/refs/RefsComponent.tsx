import React, { Component, Ref } from 'react'



export class RefsComponent extends Component {
    
    private inputRef:React.RefObject<HTMLInputElement>
    constructor(props:any){
        super(props)


        this.inputRef=React.createRef()
        
    }

    componentDidMount(): void {
        this.inputRef.current?.focus()
    }

    clickHandler = () =>{
        alert(this.inputRef.current?.value)
    }
  render() {
    return (
      <div>

        <input type={'text'} ref={this.inputRef}/>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default RefsComponent