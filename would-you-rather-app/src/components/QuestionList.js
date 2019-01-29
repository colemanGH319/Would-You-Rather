import React, { Component } from 'react'
import Question from './Question'
import { connect } from 'react-redux'

class QuestionList extends Component {

  render() {
    return (
      <div className="container">
        <div className="filter-btn">
          <button>Unanswered Questions</button>
          <button>Answered Questions</button>
        </div>
        <div className="panel">
          <ul className="question-list">
              <li><Question /></li>
              <li><Question /></li>
              <li><Question /></li>
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps({users}) {
  return {
    users: users
  }
}

export default connect(mapStateToProps)(QuestionList)
