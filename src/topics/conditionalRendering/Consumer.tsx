import React, { useState } from 'react'
import LoginComponent from './LoginComponent'

export default function Consumer() {
  const [isLoggedIn,setIsLoggedIn]=useState<boolean>(false)
  return (
    <div>
        <LoginComponent isLoggedIn={isLoggedIn}/>
        <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>{isLoggedIn?"LogOut":"login"}</button>
    </div>
  )
}
