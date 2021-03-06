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
    this.props.dispatch(setAuthedUser({ id: this.state.value, loggedIn: true }))
    if (this.props.location.pathname === '/login'){
      this.props.history.push('/')
    }  
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
                <select required={true}
                        defaultValue=""
                        id="username"
                        onChange={(event) => this.changeUser(event.target.value)}>
                  <option disabled value="">Select a user</option>
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
