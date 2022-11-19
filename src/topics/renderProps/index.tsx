import React from 'react'
import ClickCounter from './ClickCounter'
import Counter from './Counter'
import HoverCount from './HoverCount'

export default function index() {
  return (
    <div>
        <hr/>
        <h1>Render Props</h1>
        <Counter render={(count,incrementCount)=><ClickCounter count={count} incrementCount={incrementCount}/>}/>
        <Counter render={(count,incrementCount)=><HoverCount count={count} incrementCount={incrementCount}/>}/>

    </div>
  )
}
