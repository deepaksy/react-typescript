import React, { FormEvent, useEffect, useState } from "react";
import axios from 'axios'
import { useMemo } from "react";
const DataFetching = ():React.ReactElement =>{
    const [post,setPost]=useState<{
        title:string,
        body:string
    }>({title:'',body:''})

    const [id,setId]=useState<number>(0)

    const [id1FromButtonClick,setIdFromButtonClick]=useState<number>(1)

    useEffect(()=>{
    },[post])


    const getValue = useMemo(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/'+id1FromButtonClick)
        .then(res=>{
            setPost(res.data)
            console.log(res.data)
        })
        .catch(e=>console.log(e))
    },[post,id])
    const handleClick = ():void=>{
        setIdFromButtonClick(id)
    }
    return(
        <div>
            <input type="number" name="id" id="id" value={id} onChange={(e:any)=>setId(e.target.value)} />
            <button type="button" onClick={handleClick}>fetch</button>

            <div>
                Title: {post.title}
                <br/>
                Message: {post.body}
            </div>
        </div>
    )
}

export default DataFetching