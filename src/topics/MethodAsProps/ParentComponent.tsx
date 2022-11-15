import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

export default function ParentComponent() {
    const [message,setMessage]=useState<string>(`I am a message from Parent Component`)
  return (
    <div>
        {message}<br/>
        <ChildComponent setMessage={setMessage}/>
    </div>
  )
}
