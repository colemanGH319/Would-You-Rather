import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Question from './Question'

class QuestionList extends Component {

  setQuestionFilter = (status, arr) => {

  }

  answeredByAuthedUser = (question) => {

  }

  render() {
    const questions = Object.values(this.props.questions)
    const loggedIn = false
    // if (!loggedIn){
    //   return (<Redirect to="/logout"/>)
    // }
    return (
      <div className="container">
        <div className="filter-btn">
          <button>Unanswered Questions</button>
          <button>Answered Questions</button>
        </div>
        <div className="panel">
          <ul className="question-list">
            {questions.map((question) => (
              <li key={question.id}>
                <Question
                  id={question.id}
                  user={this.props.users[question.author].name}
                  text={question.optionOne.text}
                  />
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

let mapStateToProps = ({users, questions}) => {
  return {
    users: users,
    questions: questions
  }
}

// export default QuestionList
export default connect(mapStateToProps)(QuestionList)
