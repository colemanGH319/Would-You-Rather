import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class NewQuestion extends Component {

  state = {
    optionOne: '',
    optionTwo: ''
  }

  handleInputChange = (e) => {
    e.preventDefault()
    switch(e.target.id) {
      case 'optionOne' :
        this.setState({optionOne: e.target.value})
        break
      case 'optionTwo' :
        this.setState({optionTwo: e.target.value})
        break
      default :
        alert('An error occurred.')
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    const { authedUser } = this.props
    if (!authedUser.loggedIn){
      return <Redirect to='/login'/>
    }
    console.log(this.state)
    return (
      <div className="box-outer">
        <div className="new-question">
          <div className="headline">
            <h2>Create New Question</h2>
          </div>
          <div className="login-form">
            <form id="new-question-form" onSubmit={this.handleSubmit}>
              <div className="header"><label><h3>Would you rather...</h3></label></div>
              <div className="center-inputs">
                <textarea id="optionOne"
                        form="new-question-form"
                        onChange={this.handleInputChange}
                        className="new-question-input"
                        required
                        placeholder="Enter option one here..."
                        value={this.state.optionOne}/>
              </div><br/>
              <h4 className="separator-text">OR</h4>
              <div className="center-inputs">
                <textarea id="optionTwo"
                        form="new-question-form"
                        onChange={this.handleInputChange}
                        className="new-question-input"
                        required
                        placeholder="Enter option two here..."
                        value={this.state.optionTwo}/>
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
