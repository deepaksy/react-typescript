import React from "react";


type CatState={
    isHungry:boolean
}

class EventBinding extends React.Component<any,CatState>{

    constructor(props:{}){
        super(props)

        this.state={
            isHungry:true
        }
        this.feedCat=this.feedCat.bind(this)
    }
    
    feedCat(){
        this.setState({
            isHungry:false
        })

        setTimeout(()=>this.setState({
            isHungry:true
        }),5000)
    }
    render(): React.ReactNode {
        const {isHungry} = this.state
        return(
            <div>
                <h1>Event Binding</h1>
                <hr/>
                <h1>{isHungry?"meow!!, Feed me I'm Hungry.":"Thanks!!, I'm full now."}</h1>
                <button onClick={this.feedCat} disabled={!isHungry}>feed the cat</button>
            </div>
        )
    }
}

export default EventBinding