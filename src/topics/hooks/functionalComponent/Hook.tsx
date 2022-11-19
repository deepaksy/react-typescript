import React, { useState } from 'react'

type HookProps={
    message?:string
}


const Hook = ({message='Default message'}:HookProps):React.ReactElement =>{

    const[count,setCount]=useState<number>(0)
    return(
        <>
        <h1>A functional Component</h1>
        props Recieved- {message}<br/>
        state - {count}<br/>
        <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
        </>
    )
}


export default Hook