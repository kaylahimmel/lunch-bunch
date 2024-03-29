import React from 'react'

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false
    }
  }
  render() {
    let wordDisplay
    if (this.state.isLoggedIn === true) {
      wordDisplay = "in"
    } else {
      wordDisplay = "out"
    }
    return (
      <div>
        <h1>You are currently logged {wordDisplay}</h1>
      </div>
    )
  }
}
export default Login