import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Question extends Component {
  constructor(props){
    super(props)

    this.image = {
      URL:  "https://tinyurl.com/yxeb5esp"
    }
  }

  render() {
    return (
        <div className="question">
          <div className="question-info">
            <img src={this.image.URL} alt="Your face here"/>
            <h4>{this.props.user}</h4>
          </div>
          <div className="question-info">
            <h2>Would you rather?</h2>
            <p>...{this.props.text}...</p>
            <button><NavLink to={`/questions/${this.props.id}`}>View Poll</NavLink></button>
          </div>
        </div>
    )
  }
}

export default Question
