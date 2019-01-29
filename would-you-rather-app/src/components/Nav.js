import React, { Component } from 'react'

class Nav extends Component {

  render() {
    const user = 'Matt'
    return (
      <div>
        <ul className="nav">
          <li id="brand">WYR?</li>
          <li><a href="#">Home</a></li>
          <li><a href="#">New Question</a></li>
          <li><a href="#">Leader Board</a></li>
          <li id="logout"><a href="#">Logout</a></li>
          <li id="hello">Hello, {user}!</li>
        </ul>
      </div>
    )
  }
}

export default Nav
