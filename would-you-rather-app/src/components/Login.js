import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {

  handleLoginSubmit = (e) => {
    e.preventDefault()
    console.log(e)
    this.props.dispatch(setAuthedUser({ id: "sarahedo" }))
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <h2>Please log in.</h2>
        <form onSubmit={(e) => this.handleLoginSubmit(e)}>
          <label for="username">Username:
            <select>
              <option value="tylermcginnis">tylermcginnis</option>
              <option value="sarahedo">sarahedo</option>
              <option value="johndoe">johndoe</option>
            </select>
          </label><br/>
          <label for="password">Password:
            <input id="password" placeholder="Enter your password"/>
          </label>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default withRouter(connect()(Login))
