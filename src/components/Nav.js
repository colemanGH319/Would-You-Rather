import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeAuthedUser } from '../actions/authedUser'

class Nav extends Component {

  handleLogout = () => {
    this.props.dispatch(removeAuthedUser())
  }

  render() {
    const { authedUser, name } = this.props
    return (
      <div>
        <ul className="nav">
          <li id="brand">WYR?</li>
          <li><NavLink exact to='/'>Home</NavLink></li>
          <li><NavLink exact to='/add'>New Question</NavLink></li>
          <li><NavLink exact to='/leaderboard'>Leader Board</NavLink></li>
          {authedUser.hasOwnProperty('id') === false
            ? <li id="logout"><NavLink to='/login'>Login</NavLink></li>
            : (<div>
                <li id="logout">
                  { authedUser.loggedIn === true
                    ? <NavLink onClick={() => this.handleLogout()} to='/login'>Logout</NavLink>
                    : <NavLink exact to='/login'>Login</NavLink>
                  }
                </li>
                <li id="hello">
                  {authedUser.loggedIn
                    ? `Hello, ${name}!`
                    : 'Hello!'}
                </li>
              </div>)}
        </ul>
      </div>
    )
  }
}

export default connect(({ authedUser, users }) => {
  return { authedUser: authedUser,
          name: users[authedUser.id] === undefined
                ? ''
                : users[authedUser.id].name}
})(Nav)
