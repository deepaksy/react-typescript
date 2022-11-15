import React from "react";

class LoginComponent extends React.Component<{isLoggedIn?:boolean},any>{

    constructor(props:{isLoggedIn?:boolean}){
        super(props)
    }

    render():React.ReactNode{
        return(
            <div>
                {this.props.isLoggedIn?<h1>Welcome User!</h1>:(<h1>Welcome guest</h1>)}
            </div>
        )
    }
}

export default LoginComponent