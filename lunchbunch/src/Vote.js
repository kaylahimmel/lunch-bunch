import React from 'react'

class Vote extends React.Component {
  constructor() {
    super()
    this.state = {
      yesCount: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => {
      return {
        yesCount: prevState.yesCount + 1
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Team members joining: {this.state.yesCount}</h1>
        <button onClick={this.handleClick}>Vote Yes!</button>
      </div>
    )
  }
}

export default Vote