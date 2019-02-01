import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Question extends Component {

  render() {
    const imgUrl = "https://kooledge.com/assets/default_medium_avatar-57d58da4fc778fbd688dcbc4cbc47e14ac79839a9801187e42a796cbd6569847.png"

    return (
        <div className="question">
          <div className="question-info">
            <img src={imgUrl} alt="Your face here"/>
            <h4>{this.props.user}</h4>
          </div>
          <div className="question-info">
            <h2>Would you rather?</h2>
            <p>...{this.props.text}...</p>
            <button><NavLink to={`/poll/${this.props.id}`}>View Poll</NavLink></button>
          </div>
        </div>
    )
  }
}

export default Question
