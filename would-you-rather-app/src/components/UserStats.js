import React, { Component } from 'react'
import { imageURL } from '../images'


class UserStats extends Component {
  constructor(props){
    super(props)

    this.image = {
      URL: this.props.user.avatarURL !== ''
          ? this.props.user.avatarURL
          : imageURL
    }
  }

  render() {
    const { user } = this.props
    return (
      <div>
        <div className="question">
          <div className="question-info">
            <img src={this.image.URL} alt="Your face here"/>
            <h4>{user.id}</h4>
          </div>
          <div className="question-info">
            <p>Answered Questions: {Object.keys(user.answers).length}</p>
            <p>Created Questions: {user.questions.length}</p>
            <p>Total Score: {this.props.activitySum(user)}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default UserStats
