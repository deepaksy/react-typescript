import React from 'react'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'

export default function index() {
  return (
    <div>
        <ClickCounter/>
        <div>
            <h1>HoverCOunter</h1>
            <HoverCounter/>
        </div>
    </div>
  )
}
