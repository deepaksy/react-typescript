import { PageProps } from "gatsby";
import React from "react";

interface PageState{
    message:string
}

class ClassComponent extends React.Component<any,PageState>{

    state :PageState = {
        message:`Welcome to react typescript`
    }

    setMessage = () =>{
        this.setState({
            message:`Thanks for subscribing!`
        })
    }
    render():React.ReactNode{
        return(
            <div>
                <h1>I am a class Component</h1>
                <h2>Message: {this.state.message}</h2>
                <button onClick={()=>this.setMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default ClassComponent