import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends Component {

  render() {
    const user = 'Matt'
    return (
      <div>
        <ul className="nav">
          <li id="brand">WYR?</li>
          <li><NavLink to='/' activeClassName='active'>Home</NavLink></li>
          <li><NavLink to='/new' activeClassName='active'>New Question</NavLink></li>
          <li><NavLink to='leaders'>Leader Board</NavLink></li>
          <li id="logout"><NavLink to='/logout'>Logout</NavLink></li>
          <li id="hello">Hello, {user}!</li>
        </ul>
      </div>
    )
  }
}

export default Nav
