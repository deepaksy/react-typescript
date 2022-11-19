import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'

type PostsProps={
    albumId:number|null,
    id:number|null,
    title:string,
    url:string,
    tumbnailUrl:string
}

const Photo = () => {
    const [posts,setPosts]=useState<PostsProps[]>([{albumId:null,id:null,title:'',url:'',tumbnailUrl:''}])
    const [error,setError]=useState<string>('')
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(res=>{
            setPosts(res.data)
        })
        .catch(e=>setError(e))
        console.log(posts)
    },[])




  return (
    <div>
        {error?<h1>error</h1>:null}

        {posts.map(({url,tumbnailUrl,title,id,albumId}:PostsProps,i:number)=>{
            return(
                <>
                    <h1 key={i}>Index: {i}</h1>
                    <h1 key={i}>{albumId}</h1>
                    <h1 key={i}>title - {title}</h1>
                    <img key={i} src={url}  loading={'lazy'}/>
                </>
            )
        })}
    </div>
  )
}

export default Photo