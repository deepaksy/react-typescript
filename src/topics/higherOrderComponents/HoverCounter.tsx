import React from 'react'
import WithCounter from './Counter'

 function HoverCounter({count,handleCount}:any) {

  return (
    <div onMouseEnter={()=>handleCount()}>Hovered - {count} times</div>
  )
}

export default WithCounter(HoverCounter)