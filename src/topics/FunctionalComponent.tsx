import React, { useState } from "react";

type FunctionalProps={
    message?:string
}



export default function FunctionalComponent({message}:FunctionalProps){
    const [count,setCount] =useState<number>(0);
    return(
        <div>
           <h1>Functional Component!</h1>
           <h2>Props recieved: <strong>{message}</strong></h2>
           <h3>State maintained: Count - {count}</h3>
           <button onClick={()=>setCount((prev)=>(prev+1))}>Increment Count</button>
        </div>
    )
}