import React, { Component } from 'react'
import PollForm from './PollForm'
import PollResults from './PollResults'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class PollView extends Component {
  constructor(props){
    super(props)

    this.image = {
      URL: "https://tinyurl.com/yxeb5esp"
    }

    this.getResponseAuthors.bind(this)
  }

  getResponseAuthors = (question) => {
    return question.optionOne.votes.concat(question.optionTwo.votes)
  }

  render() {
    const { user, poll, authedUser } = this.props
    if (!authedUser.loggedIn){
      return (<Redirect to="/login"/>)
    }
    return (
      <div className="poll-container">
        <div className="question-info">
          <img src={this.image.URL} alt="Your face here"/>
          <h4>{user}</h4>
        </div>
        <div className="question-info">
          {this.getResponseAuthors(poll).includes(authedUser.id) === true
            ? (<PollResults poll={poll}/>)
            : <PollForm poll={poll} authedUser={authedUser}/>}
        </div>
      </div>
    )
  }
}

function mapStateToProps({ questions, authedUser }, props) {
  const { id } = props.match.params
  const question = questions[id]
  return {
    id,
    user: question.author,
    poll: question,
    authedUser: authedUser
  }
}

export default connect(mapStateToProps)(PollView)
