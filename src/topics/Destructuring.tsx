import React from "react";

type Props={
    name?:string,
}

type State={
    message:string
}

class Destructuring extends React.Component<Props,State>{
    constructor(props:Props){
        super(props)

        this.state={
            message:`This is the state message. `
        }
        this.setMessage=this.setMessage.bind(this)
    }

    setMessage(){
        this.setState({
            message:`Message changed`
        })
    }
    render(): React.ReactNode {
        const {message} = this.state
        return(
            <div>
                {message}
                <button onClick={this.setMessage}>Change message</button>
            </div>
        )
    }
}

export default Destructuring