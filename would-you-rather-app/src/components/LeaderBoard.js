import React, { Component } from 'react'
import Login from './Login'
import { connect } from 'react-redux'
import UserStats from './UserStats'

class LeaderBoard extends Component {

  constructor(props){
    super(props)

    this.image = {
      URL: "https://tinyurl.com/yxeb5esp"
    }

    this.activitySum = function (user) {
      return Object.values(user.answers).length + user.questions.length
    }
  }

  render() {
    const { authedUser, users } = this.props

    if (!authedUser.loggedIn){
      return (<Login/>)
    }
    const userData = Object.values(users)
    return (
      <div className='container'>
        <div className='headline'>
          <h2>Leader Board</h2>
        </div>
        <div className='panel'>
          <ul className='question-list'>
              { userData.sort((a, b) => {
                  return this.activitySum(b) - this.activitySum(a)
                }).map((user) => (
                  <li key={user.id}>
                    <UserStats user={user} image={this.image} activitySum={this.activitySum}/>
                  </li>
              ))}
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser: authedUser,
    users: users
  }
}

export default connect(mapStateToProps)(LeaderBoard)
