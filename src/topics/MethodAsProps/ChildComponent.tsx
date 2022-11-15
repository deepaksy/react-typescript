import React, { Dispatch, SetStateAction } from 'react'

export default function ChildComponent({setMessage}:{setMessage:Dispatch<SetStateAction<string>>}) {
  return (
    <div>
        <button onClick={()=>setMessage(`Message changed by child component`)}>Change message</button>
    </div>
  )
}
