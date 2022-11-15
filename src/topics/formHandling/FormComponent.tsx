import React, { FormEvent, useState } from 'react'

interface Data{
    name:string,
    age:number,
    address:string
}

export default function FormComponent() {
    const [data,setData]=useState<Data>({
        name:'',
        age:0,
        address:''
    })

    const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        console.log(data)
    }

    const handleChange =(e:FormEvent<HTMLInputElement>)=>{
        setData({
            ...data,
            [e.currentTarget.name]:e.currentTarget.value
        })
    }
  return (
    <div>
        Name:{data.name}<br/>
        Age: {data.age}<br/>
        address:{data.address}<br/>
        <form onSubmit={(e:FormEvent<HTMLFormElement>)=>handleSubmit(e)}>
            <div>
                <label htmlFor="name">Name:</label>
                <input name='name' type="text" value={data.name} onChange={(e)=>handleChange(e)}/>
            </div>
            <div>
                <label htmlFor="age">Age:</label>
                <input name='age' type="number" value={data.age} onChange={(e)=>handleChange(e)}/>
            </div>
            <div>
                <label htmlFor="address">Address:</label>
                <input name='address' type="text" value={data.address} onChange={(e)=>handleChange(e)}/>
            </div>
            <div>
                <input type="submit" value="submit" />
            </div>
        </form>
    </div>
  )
}
