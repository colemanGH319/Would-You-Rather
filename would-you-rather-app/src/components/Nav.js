import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Nav extends Component {

  handleLogin = () => {
    this.props.dispatch(setAuthedUser({id: "tylermcginnis"}))
  }

  render() {
    const { authedUser } = this.props
    return (
      <div>
        <ul className="nav">
          <li id="brand">WYR?</li>
          <li><NavLink to='/' activeClassName='active'>Home</NavLink></li>
          <li><NavLink to='/new' activeClassName='active'>New Question</NavLink></li>
          <li><NavLink to='leaders'>Leader Board</NavLink></li>
          <li id="logout"><NavLink onClick={() => this.handleLogin()} to='/logout'>
          {authedUser.hasOwnProperty('id') === false
            ? "Login"
            : "Logout"}
          </NavLink></li>
          <li id="hello">Hello!</li>
        </ul>
      </div>
    )
  }
}

export default connect(({ authedUser }) => { return { authedUser: authedUser }})(Nav)
