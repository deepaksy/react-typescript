import React from 'react'
import ComponentA from './ComponentA'
import { UserProvider } from './Context'

export default function index() {
  return (
    <div>
      <UserProvider value='context'>
      <ComponentA/>
      </UserProvider>
    </div>
  )
}
