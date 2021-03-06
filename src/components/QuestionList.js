import React, { Component } from 'react'
import Login from './Login'
import { connect } from 'react-redux'
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
    const { authedUser } = this.props
    if (!authedUser.loggedIn){
      return (<Login />)
    }
    return (
      <div className="container">
        <div className="filter-btn">
          <button disabled={this.state.defaultDisplay === true}
                  onClick={this.showUnanswered}>Unanswered Questions</button>
          <button disabled={this.state.defaultDisplay === false}
                  onClick={this.showAnswered}>Answered Questions</button>
        </div>
        <div className="panel">
          <ul className="question-list">
            { questions.sort((a, b) => {
              return b.timestamp - a.timestamp
              }).filter((question) =>
                this.answeredByAuthedUser(question) !== this.state.defaultDisplay
              ).map((question) => (
                <li key={question.id}>
                  <Question
                    id={question.id}
                    user={this.props.users[question.author].name}
                    text={question.optionOne.text}
                    avatarURL={this.props.users[question.author].avatarURL}
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

export default connect(mapStateToProps)(QuestionList)
