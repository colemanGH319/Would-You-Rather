import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {

  state = {
    value: ''
  }

  handleLoginSubmit = (e) => {
    e.preventDefault()
    console.log(e)
    this.props.dispatch(setAuthedUser({ id: this.state.value, loggedIn: true }))
    this.props.history.push('/')
  }

  changeUser = (value) => {
    this.setState({value: value})
  }

  render() {
    return (
        <div className="box-outer">
          <div className="headline">
            <h2>Welcome to the Would You Rather App!</h2>
            <h3>Please log in to continue.</h3>
          </div>
          <div className="login-form">
            <form onSubmit={(e) => this.handleLoginSubmit(e)}>
              <div className="login-labels">
                <label htmlFor="username">Username:</label>
              </div>
              <div className="form-input">
                <select defaultValue="select-user"
                        id="username"
                        onChange={(event) => this.changeUser(event.target.value)}>
                  <option disabled value="select-user">Select a user</option>
                  <option value="tylermcginnis">tylermcginnis</option>
                  <option value="sarahedo">sarahedo</option>
                  <option value="johndoe">johndoe</option>
                </select>
              </div>
              <br/>
                <input className="submit-btn" type="submit"/>
            </form>
          </div>
        </div>
    )}
}

export default withRouter(connect()(Login))
