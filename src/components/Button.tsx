import React from 'react'

function Button() {
  return (
    <div>
        <div>I am a button Component</div>
        <button onClick={()=>console.log('Button Clicked')}>Click</button>
    </div>
  )
}

export default Button