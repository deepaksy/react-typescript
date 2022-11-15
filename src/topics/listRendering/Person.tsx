import React from 'react'
import { Person } from './personList'

export default function PersonList({name,age,city}:Person) {
  return (
    <div>
        <h1>Name: {name}</h1>
        <h2>age: {age}</h2>
        <h3>City: {city}</h3>
    </div>
  )
}
