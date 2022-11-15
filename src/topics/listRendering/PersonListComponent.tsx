import React, { Component } from 'react'
import PersonComponent from './Person'
import {Person, personList} from './personList'

class PersonListComponent extends Component {
  render() {
    return (
      <div>
        {personList.map((person:Person,i:number)=>{
          return(
            <PersonComponent {...person} key={i}/>
          )
        })}
      </div>
    )
  }
}

export default PersonListComponent