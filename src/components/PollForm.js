import React, { Component } from 'react'
import { handleQuestionAnswer } from '../actions/shared'
import { updateUserAnswers } from '../actions/users'
import { connect } from 'react-redux'

class PollForm extends Component {

  state = {
    value: ''
  }

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.value === '') {
      let form = document.getElementById('poll-form')
      let message = document.createElement('h3')
      message.innerHTML = 'Please make a selection.'
      message.style.cssText = 'color: red'
      form.appendChild(message)
      return
    }
    this.props.dispatch(handleQuestionAnswer({
      authedUser: this.props.authedUser.id,
      qid: this.props.poll.id,
      answer: this.state.value
    }))
    this.props.dispatch(updateUserAnswers({
      authedUser: this.props.authedUser.id,
      qid: this.props.poll.id,
      answer: this.state.value
    }))
  }

  render() {
    const { poll } = this.props
    return (
      <div>
        <h2>Would you rather?</h2>
        <form id="poll-form" onSubmit={this.handleSubmit}>
          <label>
            <input class="poll-radio"
                  type="radio"
                  name="poll-option"
                  value="optionOne"
                  checked={this.state.value === 'optionOne'}
                  onChange={this.handleInputChange}/><span class="poll-text">{poll.optionOne.text}</span>
          </label><br/>
          <label>
            <input class="poll-radio"
                  type="radio"
                  name="poll-option"
                  value="optionTwo"
                  checked={this.state.value === 'optionTwo'}
                  onChange={this.handleInputChange}/><span class="poll-text">{poll.optionTwo.text}</span>
          </label>
          <input type="submit" id="poll-button" value="Submit" />
        </form>
      </div>
    )
  }
}

export default connect()(PollForm)
