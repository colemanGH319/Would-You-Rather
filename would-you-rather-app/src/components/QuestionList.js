import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Question from './Question'

class QuestionList extends Component {

  state = {defaultDisplay: true}

  answeredByAuthedUser = (question) => {
    let allVotes = question.optionTwo.votes.concat(question.optionOne.votes)
    return allVotes.includes(this.props.authedUser.id)
  }

  showUnanswered = () => {
    this.setState(() => ({
      defaultDisplay: true
    }))
  }

  showAnswered = () => {
    this.setState(() => ({
      defaultDisplay: false
    }))
  }

  render() {
    const questions = Object.values(this.props.questions)
    const loggedIn = this.props.authedUser.hasOwnProperty('id')
    console.log("Toggle: ", this.state.defaultDisplay)
    if (!loggedIn){
      return (<Redirect to="/logout"/>)
    }
    return (
      <div className="container">
        <div className="filter-btn">
          <button onClick={this.showUnanswered}>Unanswered Questions</button>
          <button onClick={this.showAnswered}>Answered Questions</button>
        </div>
        <div className="panel">
          <ul className="question-list">
            {questions.filter((question) => 
              this.answeredByAuthedUser(question) !== this.state.defaultDisplay
            ).map((question) => (
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

let mapStateToProps = ({users, questions, authedUser}) => {
  return {
    users: users,
    questions: questions,
    authedUser: authedUser
  }
}

// export default QuestionList
export default connect(mapStateToProps)(QuestionList)
