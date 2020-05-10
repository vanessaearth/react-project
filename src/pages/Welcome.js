import React, { Component } from 'react'

export default class Welcome extends Component {
  constructor(props) {
    super(props)

    this.state = {
      date: new Date()
    }
  }

  render () {
    const { date } = this.state
    return (
      <div>
        welcome
    <div>{date.toLocaleTimeString()}</div>
      </div>
    )
  }
}
