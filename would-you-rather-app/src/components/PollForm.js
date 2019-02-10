import React, { Component } from 'react'
  import {handleQuestionAnswer} from '../actions/questions'

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
    console.log("Submitting")
    this.props.dispatch(handleQuestionAnswer)
  }

  render() {
    const { poll } = this.props
    return (
      <div>
        <h2>Would you rather?</h2>
        <form action="#" onSubmit={this.handleSubmit}>
          <label>
            <input type="radio"
                  name="poll-option"
                  value="optionOne"
                  checked={this.state.value === 'optionOne'}
                  onChange={this.handleInputChange}/> {poll.optionOne.text}
          </label><br/>
          <label>
            <input type="radio"
                  name="poll-option"
                  value="optionTwo"
                  checked={this.state.value === 'optionTwo'}
                  onChange={this.handleInputChange}/> {poll.optionTwo.text}
          </label>
          <input type="submit" id="poll-button" value="Submit" />
        </form>
      </div>
    )
  }
}

export default PollForm
