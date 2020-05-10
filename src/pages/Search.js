import React, { Component } from 'react'

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ""
    }
  }
  change = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  submit = () => {
    // const val = this.refs.input
    this.props.tell('haha search comp')
    console.log('val', this.state.name)
  }
  render () {
    return (
      <div>
        <h3>searchPage-{this.props.title}</h3>
        <input type="text" value={this.state.name} onChange={this.change} />
        <button onClick={this.submit}>提交</button>
      </div>
    )
  }
}
