import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class NewQuestion extends Component {

  render() {
    const { authedUser } = this.props
    if (!authedUser.loggedIn){
      return <Redirect to='/login'/>
    }
    return (
      <div className="box-outer">
        <div className="new-question">
          <div className="headline">
            <h2>Create New Question</h2>
          </div>
          <div className="login-form">
            <form id="new-question-form">
              <div className="header"><label><h3>Would you rather...</h3></label></div>
              <div className="center-inputs">
                <textarea form="new-question-form"
                        className="new-question-input"
                        required
                        placeholder="Enter option one here..."
                />
              </div><br/>
              <h4 className="separator-text">OR</h4>
              <div className="center-inputs">
                <textarea form="new-question-form"
                        className="new-question-input"
                        required
                        placeholder="Enter option two here..."
                />
              </div>
              <input className="submit-btn" type="submit"/>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(({ authedUser }) => {
  return {authedUser: authedUser}
})(NewQuestion)
