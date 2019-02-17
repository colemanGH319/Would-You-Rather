import React, { Component } from 'react'
import { connect } from 'react-redux'

class LeaderBoard extends Component {

  constructor(props){
    super(props)

    this.image = {
      URL: "https://tinyurl.com/yxeb5esp"
    }
  }

  render() {
    console.log(this.props)
    return (
      <div className='container'>
        <div className='headline'>
          <h2>Leader Board</h2>
        </div>
        <div className='panel'>
          <ul className='question-list'>
            <li>
              <div className="question">
                <div className="question-info">
                  <img src={this.image.URL} alt="Your face here"/>
                  <h4>Username</h4>
                </div>
                <div className="question-info">
                  <p>Thing 1</p>
                  <p>Thing 2</p>
                </div>
              </div>
            </li>
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
