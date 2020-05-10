import React, { Component } from 'react'

export default class ClassComponentPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      date: new Date(),
      counter: 0,
      counter2: 0
    }
  }
  componentDidMount () {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000)
    setTimeout(() => {
      this.changeValue()
    }, 0)
    document.getElementById('test').addEventListener('click', this.changeValue, false)
  }
  componentWillUnmount () {
    clearInterval(this.timer)
  }
  changeValue = () => {
    this.setState({
      counter2: this.state.counter2 + 1
    })
  }
  setCounter = () => {
    // this.setState({
    //   counter: this.state.counter + 1
    // })
    // this.setState({
    //   counter: this.state.counter + 2
    // })
    this.setState(nextState => {
      return {
        counter: nextState.counter + 1
      }
    })
    this.setState(nextState => {
      return {
        counter: nextState.counter + 2
      }
    })
    console.log('counter', this.state.counter)
  }
  render () {
    const { date } = this.state
    return (
      <div>
        <h3></h3>
        <div>{date.toLocaleTimeString()}</div>
        <button onClick={this.setCounter}>{this.state.counter}</button>
        <button id="test">{this.state.counter2}</button>
      </div>
    )
  }
}
