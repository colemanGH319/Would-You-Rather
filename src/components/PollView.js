import React, { Component } from 'react'
import PollForm from './PollForm'
import PollResults from './PollResults'
import Login from './Login'
import ErrorPage from './ErrorPage'
import { imageURL } from '../images'
import { connect } from 'react-redux'

class PollView extends Component {
  constructor(props){
    super(props)

    this.image = {
      URL:  this.props.avatarURL !== ''
            ? this.props.avatarURL
            : imageURL
    }

    this.getResponseAuthors.bind(this)
  }

  getResponseAuthors = (question) => {
    return question.optionOne.votes.concat(question.optionTwo.votes)
  }

  render() {
    const { user, poll, authedUser } = this.props
    if ([undefined, null].includes(authedUser.id)){
      return (<Login />)
    }
    if (poll === null) {
      return (<ErrorPage />)
    }
    return (
      <div className="poll-container">
        <div className="question-info">
          <img src={this.image.URL} alt="Your face here"/>
          <h4>{user}</h4>
        </div>
        <div className="question-info">
          {this.getResponseAuthors(poll).includes(authedUser.id) === true
            ? (<PollResults poll={poll} authedUser={authedUser}/>)
            : <PollForm poll={poll} authedUser={authedUser}/>}
        </div>
      </div>
    )
  }
}

function mapStateToProps({ questions, users, authedUser }, props) {
  const { id } = props.match.params
  const question = questions[id]
  if (questions.hasOwnProperty(id) === false){
    return { poll: null, authedUser }
  }
  return {
    id,
    user: question.author,
    avatarURL: users[question.author].avatarURL,
    poll: question,
    authedUser: authedUser
  }
}

export default connect(mapStateToProps)(PollView)
