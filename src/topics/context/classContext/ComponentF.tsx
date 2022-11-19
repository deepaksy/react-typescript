import React, { Component } from 'react'
import {UserConsumer} from './Context'
class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {(username)=><div>Context Recieved {username}</div>}
      </UserConsumer>
    )
  }
}

export default ComponentF