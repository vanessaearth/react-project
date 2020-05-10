import React, { Component } from 'react'

export default class LifeCycle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }
  componentWillMount () {
    console.log('componentWillMount', this.state)
  }
  componentDidMount () {
    console.log('componentDidMount', this.state)
  }
  componentWillUpdate (nextProps, nextState) {
    console.log('componentWillUpdate', this.state, nextState)
  }
  componentDidUpdate () {
    console.log('componentDidUpdate', this.state)
  }
  componentWillUnmount () {
    console.log('componentWillUnmount', this.state)
  }
  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate', this.state)
    return this.state.counter !== 3
  }

  setCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  render () {
    return (
      <div>
        <button onClick={this.setCounter}>{this.state.counter}</button>
      </div>
    )
  }
}
