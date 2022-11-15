import React from "react";
import MemoComponent from "./MemoComponent";

class ParentComponent extends React.Component<any,{name:string}>{

    constructor(props:any){
        super(props)

        this.state={
            name:"Deepak"
        }
    }

    componentDidMount(): void {
        setInterval(()=>{
            this.setState({
                name:"Deepak"
            })
        },2000)
    }
    render(): React.ReactNode {
        return(
            <div>
                Parent Component
                <MemoComponent name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComponent