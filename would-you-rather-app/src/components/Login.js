import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {

  showPasswordField = () => false /* Temporary callback to hide the Password
      field since it doesn't currently do anything. */

  handleLoginSubmit = (e) => {
    e.preventDefault()
    console.log(e)
    this.props.dispatch(setAuthedUser({ id: "sarahedo" }))
    this.props.history.push('/')
  }

  render() {
    return (
        <div className="login-box-outer">
          <div className="headline">
            <h2>Welcome to the Would You Rather App!</h2>
            <h3>Please log in to continue.</h3>
          </div>
          <div className="login-form">
            <form onSubmit={(e) => this.handleLoginSubmit(e)}>
              <div class="login-labels">
                <label for="username">Username:</label>
              </div>
              <div className="form-input">
                <select>
                  <option disabled selected>Select a user</option>
                  <option value="tylermcginnis">tylermcginnis</option>
                  <option value="sarahedo">sarahedo</option>
                  <option value="johndoe">johndoe</option>
                </select>
              </div>
              <br/>
              {this.showPasswordField() ? (
              <fragment>
                <div className="login-labels">
                  <label for="password">Password:</label>
                </div>
                <div className="form-input">
                  <input id="password" placeholder="Enter your password"/>
                </div>
              </fragment>
              ) : (null)

              }
                <input className="submit-btn" type="submit"/>
            </form>
          </div>
        </div>
    )
  }
}

export default withRouter(connect()(Login))
